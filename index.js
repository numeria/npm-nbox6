import { isString, notification, isDate, toIsoDateString, toQueryString, jsonFormatter, isDateString, isObject, components, remove as remove$1 } from './components-e6012890.js';
export { underscore as _, mask, useCulture } from './components-e6012890.js';
import { ref, createApp as createApp$1 } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import { createLocale, ptBR as ptBR$1, datePtBR as datePtBR$1 } from 'naive-ui';

const errorHandler = async (value) => {
  if (isString(value)) {
    notification.alert(value);
  } else if (value.code >= 500) {
    notification.alert(value.message, {
      details: value.details
    });
    console.error(value);
  } else if (value.code === 401 || value.code === 403 || value.code === 409) {
    await notification.alert(value.message);
    localStorage.removeItem("access_token");
    location.href = "/";
  } else if (value.code === 400) {
    const options = { details: value.inner ? value.inner.split("\n") : null };
    await notification.alert(value.message, options);
  } else {
    notification.alert(value.message);
    console.error(value);
  }
};

const settings = {
  baseUrl: "",
  auth: {
    enableAd: false,
    loginApi: "/api/auth/login",
    meApi: "/api/auth/me",
    forbiddenUrl: "/"
  },
  routes: []
};

async function api(method, template, routeData, body, auth) {
  const path = template.replace(/{(\w+)}/g, (match) => {
    const key = match.substring(1, match.length - 1);
    const value = routeData[key];
    delete routeData[key];
    return isDate(value) ? toIsoDateString(value) : value;
  });
  const queryString = toQueryString(routeData);
  const headers = new Headers({
    "content-type": "application/json"
  });
  if (auth) {
    const accessToken = localStorage.getItem("access_token") || sessionStorage.getItem("access_token");
    headers.append("Authorization", "Bearer " + accessToken);
  }
  let response;
  const url = (settings.baseUrl || "") + path + queryString;
  const location = method + " " + url;
  console.log(location);
  const options = {
    method,
    headers,
    body: body === null ? null : JSON.stringify(body, jsonFormatter)
  };
  const includeCredential = settings.auth.enableAd ? template === settings.auth.loginApi : false;
  if (includeCredential) {
    options.credentials = "include";
  }
  try {
    response = await fetch(url, options);
  } catch (ex) {
    throw createErrorFromXhr(location, ex);
  }
  let result = null;
  const contentType = response.headers.get("Content-Type");
  const isJson = (contentType?.indexOf("application/json") ?? -1) >= 0;
  const isText = (contentType?.indexOf("text/plain") ?? -1) >= 0;
  if (isJson) {
    let json = null;
    try {
      json = await response.json();
    } catch (ex) {
      throw createErrorFromJson(location);
    }
    result = convertObject(json);
  } else if (isText) {
    result = await response.text();
  }
  if (response.ok) {
    return result;
  } else {
    throw createErrorFromServer(location, response, result);
  }
}
function convertObject(value) {
  if (isDateString(value)) {
    return new Date(value.replace("Z", ""));
  }
  if (Array.isArray(value)) {
    const arr = [];
    for (let i = 0; i < value.length; i++) {
      arr.push(convertObject(value[i]));
    }
    return arr;
  }
  if (isObject(value)) {
    const obj = {};
    const keys = Object.keys(value);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      obj[key] = convertObject(value[key]);
    }
    return obj;
  }
  return value;
}
function createErrorFromXhr(location, ex) {
  const err = {
    code: 500,
    // erro de infra-estrutura
    message: ex?.message ?? ex,
    details: ["Request: " + location]
  };
  return err;
}
function createErrorFromJson(location, response, ex) {
  const err = {
    code: 500,
    message: "Erro no parser JSON de retorno: " + (ex?.message ?? ex),
    details: ["Request: " + location]
  };
  return err;
}
function createErrorFromServer(location, response, error) {
  const err = {
    code: response.status,
    message: error.message,
    inner: error.inner,
    details: [
      "<span style='font-weight: 700'>Request:</span> " + location,
      "<span style='font-weight: 700'>Source</span>: " + error.source,
      "<span style='font-weight: 700'>TrackId</span>: " + error.trackId
    ]
  };
  console.warn("==== StackTrace ====");
  console.warn(error.stackTrace);
  return err;
}

const user = ref({ isLoggedIn: false });
const permissions = ref({});
const sitemap = ref([]);
const doLogin = async (loginData, fgPersiste) => {
  const token = await api(
    "POST",
    settings.auth.loginApi,
    {},
    loginData,
    settings.auth.enableAd
  );
  const storage = fgPersiste ? localStorage : sessionStorage;
  storage.setItem("access_token", token);
  const me = await api("GET", settings.auth.meApi, {}, null, true);
  user.value = { ...me.user, isLoggedIn: true };
  permissions.value = me.permissions;
  sitemap.value = me.sitemap;
  return me.user;
};
const tryLogin = async () => {
  const accessToken = localStorage.getItem("access_token") || sessionStorage.getItem("access_token");
  if (!accessToken)
    return false;
  try {
    const me = await api("GET", settings.auth.meApi, {}, null, true);
    user.value = { ...me.user, isLoggedIn: true };
    permissions.value = me.permissions;
    sitemap.value = me.sitemap;
    return true;
  } catch (ex) {
    {
      localStorage.removeItem("access_token");
      sessionStorage.removeItem("access_token");
    }
    return false;
  }
};
const doLogout = () => {
  user.value = { isLoggedIn: false };
  localStorage.clear();
  sessionStorage.clear();
};

async function upload(files) {
  const result = await api("POST", "/nbox/storage", {}, files, true);
  return result;
}
async function download(fileId) {
  const request = await api(
    "GET",
    "/nbox/storage/{fileId}",
    { fileId },
    null,
    true
  );
  const linkSource = `data:${request.contentType};base64,${request.contentBase64}`;
  const downloadLink = document.createElement("a");
  downloadLink.href = linkSource;
  downloadLink.download = request.filename;
  downloadLink.click();
}
async function remove(fileId) {
  await api("DELETE", "/nbox/storage/{fileId}", { fileId }, null, true);
}

const storage = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  download,
  remove,
  upload
}, Symbol.toStringTag, { value: 'Module' }));

const css = ":root {\r\n  /* medidas de uso da tela (.n-app-container) */\r\n  --max-container: 1200px;\r\n\r\n  /* espaçadores */\r\n  --spacer: 1.2rem;\r\n  --spacer-0: 0;\r\n  --spacer-1: calc(var(--spacer) * 0.25);\r\n  --spacer-2: calc(var(--spacer) * 0.5);\r\n  --spacer-3: var(--spacer);\r\n  --spacer-4: calc(var(--spacer) * 1.5);\r\n  --spacer-5: calc(var(--spacer) * 3);\r\n\r\n  /* fonte */\r\n  --font-family: \"Inter\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\r\n    Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\r\n    sans-serif;\r\n  --line-height: 1.6;\r\n  --font-size: 13px;\r\n\r\n  /* padrão de altura dos componentes */\r\n  --control-height: calc(var(--font-size) * 2.6);\r\n\r\n  /* objetos de layout */\r\n  --body-bg: #e3e3e3; /* fundo do body */\r\n  --app-bg: rgb(208, 218, 189); /* cor de fundo da aplicação .n-content */\r\n  --block-margin-top: var(--spacer);\r\n\r\n  /* cores de controle */\r\n  --text-color: #24292e; /* cor padrão dos componentes */\r\n  --disabled-color: #959da5; /* cor de texto para desabilitado */\r\n  --disabled-bg: #e1e1e1; /* cor de fundo para desabilitado */\r\n  --line-color: #f1f1f1; /* usado nas linhas dos componentes para destaque */\r\n  --content-bg: #fafafa; /* usado no <Card> */\r\n\r\n  /* paleta de cores dos botões */\r\n  --default-color: #fafbfc;\r\n  --default-dark: rgb(234, 234, 234);\r\n  --default-light: rgb(238, 238, 238);\r\n  --default-font: #24292e;\r\n  --default-border: #e1e4e7;\r\n\r\n  --primary-color: #3b73b7;\r\n  --primary-dark: #305e97;\r\n  --primary-light: #f0f5fc;\r\n  --primary-font: white;\r\n  --primary-border: #dce9fb;\r\n\r\n  --success-color: #04aa6d;\r\n  --success-dark: #0e9161;\r\n  --success-light: #e3f4e4;\r\n  --success-font: white;\r\n  --success-border: #d4ecd5;\r\n\r\n  --warning-color: rgb(235, 172, 36);\r\n  --warning-dark: rgb(207, 147, 19);\r\n  --warning-light: rgb(241, 232, 210);\r\n  --warning-font: white;\r\n  --warning-border: rgb(239 229 202);\r\n\r\n  --info-color: rgb(65, 169, 187);\r\n  --info-dark: rgb(45, 144, 161);\r\n  --info-light: rgb(220, 235, 237);\r\n  --info-font: white;\r\n  --info-border: rgb(193 225 230);\r\n\r\n  --error-color: #e83b2f;\r\n  --error-dark: #bc1104;\r\n  --error-light: #fee9e3;\r\n  --error-font: white;\r\n  --error-border: #f7d9d0;\r\n}\r\n.n-data-table-th__title {\r\n  font-weight: 500;\r\n}\r\n/* Ajusta marcador no Select */\r\n.n-base-select-option__content {\r\n  width: 100%;\r\n}\r\n.n-base-select-menu .n-base-select-option.n-base-select-option--show-checkmark {\r\n  padding-right: 10px;\r\n}\r\n/* cursor para calendário no DatePicker */\r\n.n-input\r\n  .n-input__suffix\r\n  .n-base-clear\r\n  .n-base-clear__placeholder\r\n  .n-base-icon {\r\n  cursor: pointer;\r\n}\r\n.n-pagination {\r\n  margin-right: 1rem;\r\n}\r\n/* tamanho de container máximo para desktop */\r\n.n-app-container {\r\n  max-width: var(--max-container);\r\n  margin: auto;\r\n  min-height: 100vh;\r\n  background-color: var(--app-bg);\r\n  box-shadow: 0px 0px 12px 0px rgba(150, 150, 150, 0.26);\r\n}\r\n/* dois blocos de UI (componentes que ocupam linha inteira) */\r\n.n-block + .n-block {\r\n  margin-top: var(--block-margin-top);\r\n}\r\n.n-content {\r\n  height: 100% !important;\r\n  width: 100% !important;\r\n}\r\ndiv.n-center,\r\nmain.n-center,\r\narticle.n-center,\r\naside.n-content {\r\n  margin: auto;\r\n}\r\nh1.n-center,\r\nh2.n-center,\r\nh3.n-center,\r\nh4.n-center,\r\nh5.n-center,\r\nh6.n-center,\r\np,\r\nspan {\r\n  text-align: center;\r\n}\r\n.n-bold {\r\n  font-weight: bold;\r\n}\r\n.n-d-flex {\r\n  display: flex !important;\r\n}\r\n.n-flex-column {\r\n  flex-direction: column;\r\n}\r\n.n-justify-content-between {\r\n  justify-content: space-between;\r\n}\r\n.n-justify-content-center {\r\n  justify-content: center;\r\n}\r\n.n-justify-content-start {\r\n  justify-content: start;\r\n}\r\n.n-justify-content-end {\r\n  justify-content: end;\r\n}\r\n.n-justify-content-flex-start {\r\n  justify-content: flex-start;\r\n}\r\n.n-justify-content-flex-end {\r\n  justify-content: flex-end;\r\n}\r\n.n-justify-content-left {\r\n  justify-content: left;\r\n}\r\n.n-justify-content-right {\r\n  justify-content: right;\r\n}\r\n.n-justify-items-auto {\r\n  justify-items: auto;\r\n}\r\n.n-justify-items-normal {\r\n  justify-items: auto;\r\n}\r\n.n-justify-items-stretch {\r\n  justify-items: stretch;\r\n}\r\n.n-justify-items-baseline {\r\n  justify-items: baseline;\r\n}\r\n.n-justify-items-f-baseline {\r\n  justify-items: first baseline;\r\n}\r\n.n-justify-items-l-baseline {\r\n  justify-items: last baseline;\r\n}\r\n.n-justify-items-center {\r\n  justify-items: center;\r\n}\r\n.n-justify-items-start {\r\n  justify-items: start;\r\n}\r\n.n-justify-items-end {\r\n  justify-items: end;\r\n}\r\n.n-justify-items-flex-start {\r\n  justify-items: flex-start;\r\n}\r\n.n-justify-items-flex-end {\r\n  justify-items: flex-end;\r\n}\r\n.n-justify-items-self-start {\r\n  justify-items: self-start;\r\n}\r\n.n-justify-items-self-end {\r\n  justify-items: self-end;\r\n}\r\n.n-justify-items-left {\r\n  justify-items: left;\r\n}\r\n.n-justify-items-right {\r\n  justify-items: right;\r\n}\r\n.n-justify-items-safe {\r\n  justify-items: safe;\r\n}\r\n.n-justify-items-unsafe {\r\n  justify-items: unsafe;\r\n}\r\n.n-justify-items-legacy-center {\r\n  justify-items: legacy center;\r\n}\r\n.n-justify-items-legacy-left {\r\n  justify-items: legacy left;\r\n}\r\n.n-justify-items-legacy-right {\r\n  justify-items: legacy right;\r\n}\r\n.n-justify-items-inherit {\r\n  justify-items: inherit;\r\n}\r\n.n-justify-items-initial {\r\n  justify-items: initial;\r\n}\r\n.n-justify-items-unset {\r\n  justify-items: unset;\r\n}\r\n.n-align-items-start {\r\n  align-items: start;\r\n}\r\n.n-align-items-end {\r\n  align-items: end;\r\n}\r\n.n-align-items-flex-start {\r\n  align-items: flex-start;\r\n}\r\n.n-align-items-flex-end {\r\n  align-items: flex-end;\r\n}\r\n.n-align-items-center {\r\n  align-items: center;\r\n}\r\n.n-align-items-baseline {\r\n  align-items: baseline;\r\n}\r\n.n-align-items-stretch {\r\n  align-items: stretch;\r\n}\r\n.n-align-content-start {\r\n  align-content: start;\r\n}\r\n.n-align-content-end {\r\n  align-content: end;\r\n}\r\n.n-align-content-flex-start {\r\n  align-content: flex-start;\r\n}\r\n.n-align-content-flex-end {\r\n  align-content: flex-end;\r\n}\r\n.n-align-content-center {\r\n  align-content: center;\r\n}\r\n.n-align-content-space-between {\r\n  align-content: space-between;\r\n}\r\n.n-align-content-space-around {\r\n  align-content: space-around;\r\n}\r\n.n-align-content-stretch {\r\n  align-content: stretch;\r\n}\r\n/* MARGIN */\r\n.n-m-0 {\r\n  margin: 0 !important;\r\n}\r\n.n-m-1 {\r\n  margin: var(--spacer-1) !important;\r\n}\r\n.n-m-2 {\r\n  margin: var(--spacer-2) !important;\r\n}\r\n.n-m-3 {\r\n  margin: var(--spacer-3) !important;\r\n}\r\n.n-m-4 {\r\n  margin: var(--spacer-4) !important;\r\n}\r\n.n-m-5 {\r\n  margin: var(--spacer-5) !important;\r\n}\r\n.n-mt-0 {\r\n  margin-top: 0 !important;\r\n}\r\n.n-mt-1 {\r\n  margin-top: var(--spacer-1) !important;\r\n}\r\n.n-mt-2 {\r\n  margin-top: var(--spacer-2) !important;\r\n}\r\n.n-mt-3 {\r\n  margin-top: var(--spacer-3) !important;\r\n}\r\n.n-mt-4 {\r\n  margin-top: var(--spacer-4) !important;\r\n}\r\n.n-mt-5 {\r\n  margin-top: var(--spacer-5) !important;\r\n}\r\n.n-mb-0 {\r\n  margin-bottom: 0 !important;\r\n}\r\n.n-mb-1 {\r\n  margin-bottom: var(--spacer-1) !important;\r\n}\r\n.n-mb-2 {\r\n  margin-bottom: var(--spacer-2) !important;\r\n}\r\n.n-mb-3 {\r\n  margin-bottom: var(--spacer-3) !important;\r\n}\r\n.n-mb-4 {\r\n  margin-bottom: var(--spacer-4) !important;\r\n}\r\n.n-mb-5 {\r\n  margin-bottom: var(--spacer-5) !important;\r\n}\r\n.n-ml-0 {\r\n  margin-left: 0 !important;\r\n}\r\n.n-ml-1 {\r\n  margin-left: var(--spacer-1) !important;\r\n}\r\n.n-ml-2 {\r\n  margin-left: var(--spacer-2) !important;\r\n}\r\n.n-ml-3 {\r\n  margin-left: var(--spacer-3) !important;\r\n}\r\n.n-ml-4 {\r\n  margin-left: var(--spacer-4) !important;\r\n}\r\n.n-ml-5 {\r\n  margin-left: var(--spacer-5) !important;\r\n}\r\n.n-mr-0 {\r\n  margin-right: 0 !important;\r\n}\r\n.n-mr-1 {\r\n  margin-right: var(--spacer-1) !important;\r\n}\r\n.n-mr-2 {\r\n  margin-right: var(--spacer-2) !important;\r\n}\r\n.n-mr-3 {\r\n  margin-right: var(--spacer-3) !important;\r\n}\r\n.n-mr-4 {\r\n  margin-right: var(--spacer-4) !important;\r\n}\r\n.n-mr-5 {\r\n  margin-right: var(--spacer-5) !important;\r\n}\r\n/* PADDING */\r\n.n-p-0 {\r\n  padding: 0 !important;\r\n}\r\n.n-p-1 {\r\n  padding: var(--spacer-1) !important;\r\n}\r\n.n-p-2 {\r\n  padding: var(--spacer-2) !important;\r\n}\r\n.n-p-3 {\r\n  padding: var(--spacer-3) !important;\r\n}\r\n.n-p-4 {\r\n  padding: var(--spacer-4) !important;\r\n}\r\n.n-p-5 {\r\n  padding: var(--spacer-5) !important;\r\n}\r\n.n-pt-0 {\r\n  padding-top: 0 !important;\r\n}\r\n.n-pt-1 {\r\n  padding-top: var(--spacer-1) !important;\r\n}\r\n.n-pt-2 {\r\n  padding-top: var(--spacer-2) !important;\r\n}\r\n.n-pt-3 {\r\n  padding-top: var(--spacer-3) !important;\r\n}\r\n.n-pt-4 {\r\n  padding-top: var(--spacer-4) !important;\r\n}\r\n.n-pt-5 {\r\n  padding-top: var(--spacer-5) !important;\r\n}\r\n.n-pb-0 {\r\n  padding-bottom: 0 !important;\r\n}\r\n.n-pb-1 {\r\n  padding-bottom: var(--spacer-1) !important;\r\n}\r\n.n-pb-2 {\r\n  padding-bottom: var(--spacer-2) !important;\r\n}\r\n.n-pb-3 {\r\n  padding-bottom: var(--spacer-3) !important;\r\n}\r\n.n-pb-4 {\r\n  padding-bottom: var(--spacer-4) !important;\r\n}\r\n.n-pb-5 {\r\n  padding-bottom: var(--spacer-5) !important;\r\n}\r\n.n-pl-0 {\r\n  padding-left: 0 !important;\r\n}\r\n.n-pl-1 {\r\n  padding-left: var(--spacer-1) !important;\r\n}\r\n.n-pl-2 {\r\n  padding-left: var(--spacer-2) !important;\r\n}\r\n.n-pl-3 {\r\n  padding-left: var(--spacer-3) !important;\r\n}\r\n.n-pl-4 {\r\n  padding-left: var(--spacer-4) !important;\r\n}\r\n.n-pl-5 {\r\n  padding-left: var(--spacer-5) !important;\r\n}\r\n.n-pr-0 {\r\n  padding-right: 0 !important;\r\n}\r\n.n-pr-1 {\r\n  padding-right: var(--spacer-1) !important;\r\n}\r\n.n-pr-2 {\r\n  padding-right: var(--spacer-2) !important;\r\n}\r\n.n-pr-3 {\r\n  padding-right: var(--spacer-3) !important;\r\n}\r\n.n-pr-4 {\r\n  padding-right: var(--spacer-4) !important;\r\n}\r\n.n-pr-5 {\r\n  padding-right: var(--spacer-5) !important;\r\n}\r\n/* WIDTH em spacer (usando max-width) */\r\n.n-w-1 {\r\n  max-width: var(--spacer-1);\r\n}\r\n.n-w-2 {\r\n  max-width: var(--spacer-2);\r\n}\r\n.n-w-3 {\r\n  max-width: var(--spacer-3);\r\n}\r\n.n-w-4 {\r\n  max-width: var(--spacer-4);\r\n}\r\n.n-w-5 {\r\n  max-width: var(--spacer-5);\r\n}\r\n/* HEIGHT em spacer (usando max-height) */\r\n.n-h-1 {\r\n  max-height: var(--spacer-1);\r\n}\r\n.n-h-2 {\r\n  max-height: var(--spacer-2);\r\n}\r\n.n-h-3 {\r\n  max-height: var(--spacer-3);\r\n}\r\n.n-h-4 {\r\n  max-height: var(--spacer-4);\r\n}\r\n.n-h-5 {\r\n  max-height: var(--spacer-5);\r\n}\r\n/* WIDTH em % */\r\n.n-w-10 {\r\n  width: 10% !important;\r\n}\r\n.n-w-20 {\r\n  width: 20% !important;\r\n}\r\n.n-w-30 {\r\n  width: 30% !important;\r\n}\r\n.n-w-40 {\r\n  width: 40% !important;\r\n}\r\n.n-w-50 {\r\n  width: 50% !important;\r\n}\r\n.n-w-60 {\r\n  width: 60% !important;\r\n}\r\n.n-w-70 {\r\n  width: 70% !important;\r\n}\r\n.n-w-80 {\r\n  width: 80% !important;\r\n}\r\n.n-w-90 {\r\n  width: 90% !important;\r\n}\r\n.n-w-100 {\r\n  width: 100% !important;\r\n}\r\n/* HEIGHT em % */\r\n.n-h-10 {\r\n  height: 10% !important;\r\n}\r\n.n-h-20 {\r\n  height: 20% !important;\r\n}\r\n.n-h-30 {\r\n  height: 30% !important;\r\n}\r\n.n-h-40 {\r\n  height: 40% !important;\r\n}\r\n.n-h-50 {\r\n  height: 50% !important;\r\n}\r\n.n-h-60 {\r\n  height: 60% !important;\r\n}\r\n.n-h-70 {\r\n  height: 70% !important;\r\n}\r\n.n-h-80 {\r\n  height: 80% !important;\r\n}\r\n.n-h-90 {\r\n  height: 90% !important;\r\n}\r\n.n-h-100 {\r\n  height: 100% !important;\r\n}\r\n/* estilo padrão do botão (tanto para <button> quando para <a>) */\r\n.btn {\r\n  font-family: var(--font-family);\r\n  font-size: var(--font-size);\r\n  height: var(--control-height);\r\n  border-radius: 6px;\r\n  cursor: pointer;\r\n  white-space: nowrap;\r\n  word-wrap: break-word;\r\n  display: inline-flex;\r\n  align-items: center;\r\n  align-content: center;\r\n  position: relative;\r\n  user-select: none;\r\n  -webkit-user-select: none;\r\n  touch-action: manipulation;\r\n  transition: background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);\r\n  padding: 0 0.8rem;\r\n  text-decoration: none;\r\n}\r\n/* estilo especifico para <button> */\r\n.btn-button {\r\n  appearance: none;\r\n  background-color: #fafbfc;\r\n  border: 1px solid rgba(27, 31, 35, 0.15);\r\n  box-shadow: rgba(27, 31, 35, 0.04) 0 1px 0,\r\n    rgba(255, 255, 255, 0.25) 0 1px 0 inset;\r\n  box-sizing: border-box;\r\n  color: #24292e;\r\n  vertical-align: middle;\r\n}\r\n.btn-button:hover {\r\n  text-decoration: none;\r\n  transition-duration: 0.1s;\r\n}\r\n.btn-button:active {\r\n  background-color: #edeff2;\r\n  box-shadow: rgba(225, 228, 232, 0.2) 0 1px 0 inset;\r\n  transition: none 0s;\r\n}\r\n/*KKK*/\r\n.btn-button:focus {\r\n}\r\n.btn-button:before {\r\n  display: none;\r\n}\r\n.btn-button:-webkit-details-marker {\r\n  display: none;\r\n}\r\n/* icone do botao */\r\n.btn .icon {\r\n  align-self: center;\r\n}\r\n/* texto do botão */\r\n.btn-text {\r\n  display: inline-block;\r\n  font-size: var(--font-size);\r\n  font-weight: 500;\r\n  line-height: 140%;\r\n  list-style: none;\r\n  align-self: center;\r\n}\r\n/* modelo estilo link (mode = link) */\r\n.btn-link {\r\n  font-weight: 500;\r\n  border: 1px solid rgb(244, 244, 244);\r\n  background-color: rgba(255, 255, 255, 0.4);\r\n}\r\n.btn-link:hover {\r\n  box-shadow: rgba(27, 31, 35, 0.04) 0 1px 0,\r\n    rgba(255, 255, 255, 0.25) 0 1px 0 inset;\r\n}\r\n/* botão de linha inteira */\r\n.btn-is-full {\r\n  width: 100%;\r\n}\r\n/* botão pequeno */\r\n.btn-is-mini {\r\n  font-size: calc(var(--font-size) * 0.85);\r\n  height: calc(var(--control-height) * 0.75);\r\n}\r\n.btn-is-mini .btn-text {\r\n  font-size: calc(var(--font-size) * 0.85);\r\n}\r\n.btn-is-mini .icon {\r\n  font-size: calc(var(--font-size) * 0.9) !important;\r\n}\r\n.btn-is-mini > .icon + .btn-text:not(:empty) {\r\n  margin-left: 0.4rem;\r\n}\r\n/* loading do botão */\r\n.btn-is-loading {\r\n  cursor: wait !important;\r\n}\r\n/* margem entre o icone e o texto dentro do botao */\r\n.btn > .icon + .btn-text:not(:empty) {\r\n  margin-left: 0.65em;\r\n}\r\n.btn .icon {\r\n  font-size: calc(var(--font-size) * 1.1);\r\n}\r\n/* botão desabilitado */\r\n.btn-is-disabled {\r\n  cursor: not-allowed;\r\n  color: var(--disabled-color) !important;\r\n  opacity: 0.7;\r\n}\r\n/* botao btn-button disabled por cor */\r\n.btn-button.btn-default.btn-is-disabled,\r\n.btn-button:hover.btn-default.btn-is-disabled {\r\n  background-color: var(--default-light);\r\n}\r\n.btn-button.btn-primary.btn-is-disabled,\r\n.btn-button:hover.btn-primary.btn-is-disabled {\r\n  background-color: var(--primary-light);\r\n}\r\n.btn-button.btn-success.btn-is-disabled,\r\n.btn-button:hover.btn-success.btn-is-disabled {\r\n  background-color: var(--success-light);\r\n}\r\n.btn-button.btn-info.btn-is-disabled,\r\n.btn-button:hover.btn-info.btn-is-disabled {\r\n  background-color: var(--info-light);\r\n}\r\n.btn-button.btn-warning.btn-is-disabled,\r\n.btn-button:hover.btn-warning.btn-is-disabled {\r\n  background-color: var(--warning-light);\r\n}\r\n.btn-button.btn-error.btn-is-disabled,\r\n.btn-button:hover.btn-error.btn-is-disabled {\r\n  background-color: var(--error-light);\r\n}\r\n/* botao .btn-link desabilitado por cor */\r\n.btn-link:hover.btn-is-disabled {\r\n  background-color: rgba(255, 255, 255, 0.4) !important;\r\n  box-shadow: none;\r\n}\r\n.btn-link:hover.btn-default.btn-is-disabled {\r\n  border-color: var(--default-border);\r\n}\r\n.btn-link:hover.btn-primary.btn-is-disabled {\r\n  border-color: var(--primary-border);\r\n}\r\n.btn-link:hover.btn-success.btn-is-disabled {\r\n  border-color: var(--success-border);\r\n}\r\n.btn-link:hover.btn-info.btn-is-disabled {\r\n  border-color: var(--info-border);\r\n}\r\n.btn-link:hover.btn-warning.btn-is-disabled {\r\n  border-color: var(--warning-border);\r\n}\r\n.btn-link:hover.btn-error.btn-is-disabled {\r\n  border-color: var(--error-border);\r\n}\r\n/* === CORES === */\r\n/* default */\r\n.btn-button.btn-default {\r\n  color: var(--default-font);\r\n  background-color: var(--default-color);\r\n}\r\n.btn-button.btn-default:hover {\r\n  background-color: var(--default-dark);\r\n}\r\n.btn-link.btn-default {\r\n  color: var(--default-font);\r\n  border-color: var(--default-border);\r\n}\r\n.btn-link.btn-default:hover {\r\n  background-color: var(--default-light);\r\n  border-color: var(--default-color);\r\n}\r\n/* primary */\r\n.btn-button.btn-primary {\r\n  color: var(--primary-font);\r\n  background-color: var(--primary-color);\r\n}\r\n.btn-button.btn-primary:hover {\r\n  background-color: var(--primary-dark);\r\n}\r\n.btn-link.btn-primary {\r\n  color: var(--primary-color);\r\n  border-color: var(--primary-border);\r\n}\r\n.btn-link.btn-primary:hover {\r\n  background-color: var(--primary-light);\r\n  border-color: var(--primary-color);\r\n}\r\n/* success */\r\n.btn-button.btn-success {\r\n  color: var(--success-font);\r\n  background-color: var(--success-color);\r\n}\r\n.btn-button.btn-success:hover {\r\n  background-color: var(--success-dark);\r\n}\r\n.btn-link.btn-success {\r\n  color: var(--success-color);\r\n  border-color: var(--success-border);\r\n}\r\n.btn-link.btn-success:hover {\r\n  background-color: var(--success-light);\r\n  border-color: var(--success-color);\r\n}\r\n/* warning */\r\n.btn-button.btn-warning {\r\n  color: var(--warning-font);\r\n  background-color: var(--warning-color);\r\n}\r\n.btn-button.btn-warning:hover {\r\n  background-color: var(--warning-dark);\r\n}\r\n.btn-link.btn-warning {\r\n  color: var(--warning-color);\r\n  border-color: var(--warning-border);\r\n}\r\n.btn-link.btn-warning:hover {\r\n  background-color: var(--warning-light);\r\n  border-color: var(--warning-color);\r\n}\r\n/* info */\r\n.btn-button.btn-info {\r\n  color: var(--info-font);\r\n  background-color: var(--info-color);\r\n}\r\n.btn-button.btn-info:hover {\r\n  background-color: var(--info-dark);\r\n}\r\n.btn-link.btn-info {\r\n  color: var(--info-color);\r\n  border-color: var(--info-border);\r\n}\r\n.btn-link.btn-info:hover {\r\n  background-color: var(--info-light);\r\n  border-color: var(--info-color);\r\n}\r\n/* error */\r\n.btn-button.btn-error {\r\n  color: var(--error-font);\r\n  background-color: var(--error-color);\r\n}\r\n.btn-button.btn-error:hover {\r\n  background-color: var(--error-dark);\r\n}\r\n.btn-link.btn-error {\r\n  color: var(--error-color);\r\n  border-color: var(--error-border);\r\n}\r\n.btn-link.btn-error:hover {\r\n  background-color: var(--error-light);\r\n  border-color: var(--error-color);\r\n}\r\n/* Botão para upload */\r\n.btn-file-upload {\r\n  position: absolute;\r\n  top: -0.5rem;\r\n  left: -2.5rem;\r\n  right: -0.5rem;\r\n  bottom: -0.5rem;\r\n  opacity: 0;\r\n  cursor: pointer;\r\n}\r\n.btn-is-mini .btn-file-upload {\r\n  top: -0.2rem;\r\n  left: -2.2rem;\r\n  right: -0.5rem;\r\n  bottom: -0.2rem;\r\n}\r\n.btn-is-disabled .btn-file-upload {\r\n  display: none;\r\n}\r\n.card {\r\n  --form-line: rgb(245, 245, 245);\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: var(--content-bg);\r\n  border-left: 4px solid rgb(194, 194, 194);\r\n  box-shadow: 0px 0px 12px 0px rgba(150, 150, 150, 0.26);\r\n}\r\n.card-header {\r\n  color: #333333;\r\n  font-size: calc(var(--font-size) * 1.3);\r\n  font-weight: 200;\r\n  padding: calc(var(--spacer) * 0.5) 0 calc(var(--spacer) * 0.5)\r\n    calc(var(--spacer) * 0.8);\r\n  border-bottom: 1px solid var(--line-color);\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n.card-header-left {\r\n  display: flex;\r\n  align-items: center;\r\n  font-size: calc(var(--font-size) * 1.4);\r\n  font-weight: 200;\r\n}\r\n.card-header-right {\r\n  display: flex;\r\n  align-items: center;\r\n  font-size: calc(var(--font-size) * 1.4);\r\n  margin-right: var(--spacer);\r\n}\r\n.card-header-left > .icon {\r\n  margin-right: 0.6rem;\r\n}\r\n.card-header-right > .icon {\r\n  cursor: pointer;\r\n}\r\n.card-content > .form {\r\n  margin: calc(var(--spacer) * 0.5) 0;\r\n}\r\n.card > .card-content > .form > .form-item {\r\n  border-top: 1px solid transparent;\r\n}\r\n.form {\r\n  --form-line: rgb(245, 245, 245);\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 0;\r\n  position: relative;\r\n}\r\n.form-loading {\r\n  text-align: center;\r\n  padding: 0 0 2rem 0;\r\n  font-weight: 500;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  background-color: white;\r\n}\r\n.form-loading-icon {\r\n  margin-right: 0.5rem;\r\n  font-size: 200%;\r\n  line-height: 0;\r\n}\r\n.form-loading-content {\r\n  opacity: 0.15;\r\n}\r\n.form-item {\r\n  display: flex;\r\n  align-items: flex-start;\r\n  padding: 0.5rem 0 0.5rem 0;\r\n  border-top: 1px solid var(--form-line);\r\n  align-items: stretch;\r\n}\r\n.form-content > .form-item:first-child {\r\n  border-top: 0;\r\n}\r\n[mobile] .form-item {\r\n  display: block;\r\n}\r\n.form-label {\r\n  padding-right: 1rem;\r\n  padding-left: 0rem;\r\n  text-align: right;\r\n  align-self: center;\r\n  max-height: var(--control-height);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: flex-end;\r\n}\r\n.form-validation {\r\n  font-size: calc(var(--font-size) * 0.9);\r\n  color: var(--error-color);\r\n  font-style: italic;\r\n}\r\n.form-validation:empty {\r\n  display: none;\r\n}\r\n.form-help {\r\n  font-size: calc(var(--font-size) * 0.9);\r\n  color: gray;\r\n  font-style: italic;\r\n}\r\n.form-slot {\r\n  flex: 1;\r\n  padding-right: 1rem;\r\n  align-self: center;\r\n}\r\n[mobile] .form-slot {\r\n  padding-left: 1rem;\r\n  padding-right: 1rem;\r\n}\r\n[mobile] label:empty {\r\n  display: none;\r\n}\r\n/* Permite colocar colunas dentro de um formulário */\r\n.form-columns {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: nowrap;\r\n  align-content: center;\r\n}\r\n[mobile] .form-columns {\r\n  flex-direction: column;\r\n}\r\n.form-columns > .form-item {\r\n  margin-top: 0 !important;\r\n  flex: 1;\r\n}\r\n.form-columns > .form-item > .form-slot {\r\n  padding-right: 0;\r\n}\r\n.form-columns > .form-item:last-child > .form-slot {\r\n  padding-right: 1rem;\r\n}\r\n.form-columns > .form-item:nth-child(n + 2) > label {\r\n  padding-left: 1rem;\r\n}\r\n/* organiza elementos com espaçamentos */\r\n.form-space {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: flex-start;\r\n}\r\n.form-space > * + * {\r\n  margin-left: 1rem;\r\n}\r\n/* */\r\n.form-label-1 {\r\n  width: calc(var(--spacer) * 1);\r\n}\r\n.form-label-2 {\r\n  width: calc(var(--spacer) * 2);\r\n}\r\n.form-label-3 {\r\n  width: calc(var(--spacer) * 3);\r\n}\r\n.form-label-4 {\r\n  width: calc(var(--spacer) * 4);\r\n}\r\n.form-label-5 {\r\n  width: calc(var(--spacer) * 5);\r\n}\r\n.form-label-6 {\r\n  width: calc(var(--spacer) * 6);\r\n}\r\n.form-label-7 {\r\n  width: calc(var(--spacer) * 7);\r\n}\r\n.form-label-8 {\r\n  width: calc(var(--spacer) * 8);\r\n}\r\n.form-label-9 {\r\n  width: calc(var(--spacer) * 9);\r\n}\r\n.form-label-10 {\r\n  width: calc(var(--spacer) * 10);\r\n}\r\n.form-label-11 {\r\n  width: calc(var(--spacer) * 11);\r\n}\r\n.form-label-12 {\r\n  width: calc(var(--spacer) * 12);\r\n}\r\n.form-label-13 {\r\n  width: calc(var(--spacer) * 13);\r\n}\r\n.form-label-14 {\r\n  width: calc(var(--spacer) * 14);\r\n}\r\n.form-label-15 {\r\n  width: calc(var(--spacer) * 15);\r\n}\r\n.form-label-16 {\r\n  width: calc(var(--spacer) * 16);\r\n}\r\n.form-label-17 {\r\n  width: calc(var(--spacer) * 17);\r\n}\r\n.form-label-18 {\r\n  width: calc(var(--spacer) * 18);\r\n}\r\n.form-label-19 {\r\n  width: calc(var(--spacer) * 19);\r\n}\r\n.form-label-20 {\r\n  width: calc(var(--spacer) * 20);\r\n}\r\n/* Icone */\r\n.icon {\r\n  width: 1em;\r\n  height: 1em;\r\n  line-height: 1em;\r\n  display: inline-block;\r\n}\r\n@-webkit-keyframes spin /* Safari and Chrome */ {\r\n  from {\r\n    -webkit-transform: rotate(0deg);\r\n    -o-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n  to {\r\n    -webkit-transform: rotate(360deg);\r\n    -o-transform: rotate(360deg);\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n@keyframes spin {\r\n  from {\r\n    -ms-transform: rotate(0deg);\r\n    -moz-transform: rotate(0deg);\r\n    -webkit-transform: rotate(0deg);\r\n    -o-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n  to {\r\n    -ms-transform: rotate(360deg);\r\n    -moz-transform: rotate(360deg);\r\n    -webkit-transform: rotate(360deg);\r\n    -o-transform: rotate(360deg);\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n.icon-spin {\r\n  -webkit-animation: spin 2s linear infinite;\r\n  -moz-animation: spin 2s linear infinite;\r\n  -ms-animation: spin 2s linear infinite;\r\n  -o-animation: spin 2s linear infinite;\r\n  animation: spin 2s linear infinite;\r\n}\r\n/* utilizado em todos os controles */\r\n.control input[type=\"text\"] {\r\n  height: var(--control-height);\r\n}\r\n/* InputBox */\r\n.uppercase input[type=\"text\"] {\r\n  text-transform: uppercase;\r\n}\r\n.lowercase input[type=\"text\"] {\r\n  text-transform: lowercase;\r\n}\r\n/* MoneyBox */\r\n.money-box {\r\n  text-align: right;\r\n  max-width: 12rem;\r\n}\r\n[mobile] .money-box {\r\n  max-width: 100%;\r\n}\r\n/* DateBox */\r\n.date-box {\r\n  max-width: 12rem;\r\n  text-align: center;\r\n}\r\n[mobile] .date-box {\r\n  max-width: 100%;\r\n}\r\n/* NumberBox */\r\n.number-box {\r\n  max-width: 12rem;\r\n}\r\n[mobile] .number-box {\r\n  max-width: 100%;\r\n}\r\n/* DecimalBox */\r\n.decimal-box {\r\n  text-align: right;\r\n  max-width: 12rem;\r\n}\r\n[mobile] .decimal-box {\r\n  max-width: 100%;\r\n}\r\n/* CpfBox */\r\n/* MemoBox */\r\n.memo-box {\r\n  height: auto !important;\r\n}\r\n.popup-overlay {\r\n  /* Variaveis do componente */\r\n  --radius: 0.4rem;\r\n  /* - */\r\n  display: none;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  background-color: rgba(30, 30, 30, 0.6);\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-top: 0 !important;\r\n  z-index: 5;\r\n}\r\n.popup-overlay.open {\r\n  display: flex;\r\n}\r\n.popup {\r\n  max-width: calc(100% - 2rem);\r\n  max-height: calc(100% - 2rem);\r\n  min-width: 40rem;\r\n  min-height: 20rem;\r\n  background-color: var(--app-bg);\r\n  display: flex;\r\n  flex-direction: column;\r\n  border-radius: 7px;\r\n  box-shadow: 0px 0px 22px 0px rgba(0, 0, 0, 0.26);\r\n}\r\n.popup-header {\r\n  padding: 0.5rem 1rem;\r\n  font-weight: 500;\r\n  font-size: calc(var(--font-size) * 1.2);\r\n  position: relative;\r\n  background-color: rgb(238, 241, 248); /*rgba(255, 255, 255, 0.877);*/\r\n  /* border-bottom: 3px solid rgb(132, 150, 200);*/\r\n  border-top-left-radius: var(--radius);\r\n  border-top-right-radius: var(--radius);\r\n  color: var(--text-color);\r\n}\r\n.popup-main {\r\n  padding: 1rem;\r\n  border-bottom-left-radius: var(--radius);\r\n  border-bottom-right-radius: var(--radius);\r\n  overflow: auto;\r\n  max-height: calc(100% - 3rem);\r\n}\r\n.popup-icon {\r\n  cursor: pointer;\r\n  width: 1.5rem;\r\n  position: absolute;\r\n  right: 1rem;\r\n  top: 0.7rem;\r\n}\r\n.tabs {\r\n  --selected: var(--success-color);\r\n}\r\n.tabs {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  position: relative;\r\n}\r\n.tabs-label {\r\n  font-size: calc(var(--font-size) * 1.2);\r\n  font-weight: 200;\r\n  padding: 0.2rem 0.7rem 0.2rem 0.7rem;\r\n  border-bottom: 4px solid transparent;\r\n  margin-left: 1rem;\r\n  color: var(--text-color);\r\n  cursor: pointer;\r\n  position: relative;\r\n  z-index: 1;\r\n}\r\n.tabs-content {\r\n  border-top: 1px solid rgb(223 223 223);\r\n  padding: 1rem;\r\n  width: 100%;\r\n  display: none;\r\n  order: 10;\r\n}\r\n.tabs-label.tab-selected + section {\r\n  display: block;\r\n}\r\n.tabs-label.tab-selected {\r\n  color: var(--selected);\r\n  border-color: var(--selected);\r\n}\r\n.tabs-label.tab-disabled {\r\n  color: var(--disabled-color);\r\n  cursor: not-allowed;\r\n}\r\n.tabs-hide {\r\n  display: none;\r\n}\r\n.tabs-icon {\r\n  position: relative;\r\n  top: 2px;\r\n  margin-right: 0.3rem;\r\n}\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  position: relative;\r\n  font-weight: normal;\r\n}\r\nhtml {\r\n  line-height: var(--line-height);\r\n  font-family: var(--font-family);\r\n  font-size: var(--font-size);\r\n}\r\nbody {\r\n  min-height: 100vh;\r\n  transition: color 0.5s, background-color 0.5s;\r\n  line-height: var(--line-height);\r\n  font-family: var(--font-family);\r\n  font-size: var(--font-size);\r\n  color: var(--text-color);\r\n  background-color: var(--body-bg);\r\n  text-rendering: optimizeLegibility;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n";

async function createApp(App, config) {
  const app = createApp$1(App);
  Object.assign(settings, config);
  app.config.errorHandler = errorHandler;
  app.config.warnHandler = (msg) => console.warn("*VUE WARNING*: ", msg);
  await tryLogin();
  const router = createCustomRouter(settings.routes);
  app.use(router);
  registerComponents(app);
  addStyleSheet();
  return app;
}
function createCustomRouter(routes) {
  const router = createRouter({
    history: createWebHashHistory("/"),
    routes
  });
  router.beforeEach((to, from) => {
    if (to.meta.auth && !user.value.isLoggedIn) {
      return {
        path: settings.auth.forbiddenUrl,
        // save the location we were at to come back later
        query: { redirect: to.fullPath }
      };
    }
  });
  return router;
}
function registerComponents(app) {
  for (const name in components) {
    const component = components[name];
    if (component.__name) {
      app.component(name, component);
    }
  }
}
function addStyleSheet() {
  const style = document.createElement("style");
  style.type = "text/css";
  style.appendChild(document.createTextNode(css));
  document.head.insertBefore(style, document.head.firstChild);
}

const MOBILE_SCREEN = 768;
const native = ref(false);
const web = ref(false);
const android = ref(false);
const ios = ref(false);
const mobile = ref(false);
const desktop = ref(false);
update();
function update() {
  const userAgent = navigator.userAgent.toLowerCase();
  native.value = /cordova/.test(userAgent);
  web.value = !native.value;
  android.value = /android/.test(userAgent);
  ios.value = /iphone|ipad|ipod/.test(userAgent);
  const tablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(
    userAgent
  );
  const smallScreen = document.documentElement.clientWidth < MOBILE_SCREEN;
  mobile.value = (android.value || ios.value) && !tablet || smallScreen;
  desktop.value = !mobile.value;
  setHeader("native", native.value);
  setHeader("web", web.value);
  setHeader("android", android.value);
  setHeader("ios", ios.value);
  setHeader("mobile", mobile.value);
  setHeader("desktop", desktop.value);
}
function setHeader(attr, active) {
  const html = document.querySelector("html");
  if (active) {
    html?.setAttribute(attr, "");
  } else {
    html?.removeAttribute(attr);
  }
}
window.addEventListener("resize", update, false);

const device = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  android,
  desktop,
  ios,
  mobile,
  native,
  web
}, Symbol.toStringTag, { value: 'Module' }));

const useLoading = (initState) => {
  const state = ref(initState);
  return {
    loading: state,
    /**
     * Mantem o state do loading = true enquando a função async está em execução
     * @param {Function} asyncFunc
     */
    handler: async (asyncFunc) => {
      try {
        state.value = true;
        await asyncFunc();
      } finally {
        state.value = false;
      }
    }
  };
};

const isEmail = (email, errorMessage = "Email inválido") => {
  const match = String(email).toLowerCase().match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  return match ? true : errorMessage;
};
function isCpf(cpf, errorMessage = "O CPF informado não é válido") {
  const clean = remove$1(cpf);
  const isValid = validaCpf(clean);
  return isValid ? true : errorMessage;
}
function validaCpf(strCPF) {
  let Soma;
  let Resto;
  Soma = 0;
  if (strCPF == "00000000000")
    return false;
  for (let i = 1; i <= 9; i++)
    Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
  Resto = Soma * 10 % 11;
  if (Resto == 10 || Resto == 11)
    Resto = 0;
  if (Resto != parseInt(strCPF.substring(9, 10)))
    return false;
  Soma = 0;
  for (let i = 1; i <= 10; i++)
    Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
  Resto = Soma * 10 % 11;
  if (Resto == 10 || Resto == 11)
    Resto = 0;
  if (Resto != parseInt(strCPF.substring(10, 11)))
    return false;
  return true;
}

const validators = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  isCpf,
  isEmail
}, Symbol.toStringTag, { value: 'Module' }));

const ptBR = createLocale(
  {
    Transfer: {
      clearAll: "Limpar todos",
      selectAll: "Selecionar todos"
    }
  },
  ptBR$1
);
const datePtBR = datePtBR$1;

const customLocale = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  datePtBR,
  ptBR
}, Symbol.toStringTag, { value: 'Module' }));

export { api, createApp, device, doLogin, doLogout, errorHandler, customLocale as locale, notification, permissions, sitemap, storage, tryLogin, useLoading, user, validators };
