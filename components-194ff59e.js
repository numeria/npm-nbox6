import { h as su, ref as oe, defineComponent as V, openBlock as N, createElementBlock as j, createBlock as le, resolveDynamicComponent as Er, normalizeClass as ye, createElementVNode as U, createStaticVNode as Gl, computed as De, unref as re, withCtx as Ce, createCommentVNode as Ie, renderSlot as ge, resolveComponent as Cu, createTextVNode as Su, useSlots as D3, provide as v0, createVNode as Be, inject as y0, toDisplayString as gu, onMounted as yt, withModifiers as S3, Fragment as Kl, renderList as M3, withDirectives as ht, vShow as pt, watch as bn, isRef as Zl, reactive as wr, normalizeStyle as Vl } from "vue";
import { createDiscreteApi as F3, darkTheme as I3, NDataTable as T3, NInput as O3, NInputNumber as F0, NSelect as R3, NCheckbox as B3, NDatePicker as L3, NCheckboxGroup as $3, NRadio as P3, NRadioGroup as z3, NAutoComplete as N3, NSpace as q3, NTransfer as U3 } from "naive-ui";
import { RouterLink as H3, useRoute as Yl } from "vue-router";
const { dialog: wl, message: Cl } = F3(["dialog", "message"], {
  configProviderProps: {
    theme: I3
  }
}), k0 = {
  success: function(u) {
    return new Promise(function(r) {
      Cl.success(u, {
        onAfterLeave: () => r()
      });
    });
  },
  error: function(u) {
    return new Promise(function(r) {
      Cl.error(u, {
        onAfterLeave: () => r()
      });
    });
  },
  alert: function(u, r) {
    return new Promise(function(t) {
      const c = () => su("div", null, [
        su("div", {
          style: { fontSize: "18px", marginTop: "1rem" },
          innerHTML: u.replace(/\n/g, "<br/>")
        }),
        r?.details ? su(
          "div",
          {
            style: {
              marginTop: "1rem",
              color: "deepskyblue",
              fontSize: "12px"
            }
          },
          r?.details?.map((s) => su("div", { innerHTML: s }))
        ) : null
      ]);
      wl.error({
        title: r?.title || "Erro ao processar requisição",
        content: c,
        positiveText: "Ok",
        onPositiveClick: () => t(),
        onClose: () => t(),
        onMaskClick: () => t()
      });
    });
  },
  confirm: function(u = "Confirma excluir os registros selecionados?") {
    return new Promise(function(r) {
      wl.error({
        title: "Confirmar operação",
        content: u,
        positiveText: "Ok",
        negativeText: "Cancelar",
        onPositiveClick: () => {
          r(!0);
        },
        onNegativeClick: () => {
          r(!1);
        }
      });
    });
  }
}, W3 = {
  enus: {
    lang: "en-US",
    date: {
      patterns: ["M/d", "M/d/y", "h:m", "h:m t"],
      // http://msdn.microsoft.com/en-us/library/az4se3k1(v=vs.110).aspx
      format: {
        d: "MM/dd/yyyy",
        D: "dddd, MMMM dd, yyyy",
        f: "dddd, MMMM dd, yyyy - hh:mm tt",
        F: "dddd, MMMM dd, yyyy - hh:mm:ss tt",
        g: "MM/dd/yyyy hh:mm tt",
        G: "MM/dd/yyyy hh:mm:ss tt",
        m: "MMMM dd",
        s: "yyyy-MM-ddTHH:mm:ss",
        t: "hh:mm tt",
        T: "hh:mm:ss tt",
        y: "MMMM, yyyy",
        u: "UTC:yyyy-MM-ddTHH:mm:ssZ"
      },
      ampm: ["AM", "PM"]
    },
    number: {
      group: [",", 3],
      decimal: [".", 2],
      currency: ["($ |)", "$ |"]
    },
    calendar: {
      dayNames: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      shortDayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      monthNames: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      shortMonthNames: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ],
      duration: [
        "now",
        ["second", "seconds"],
        ["minute", "minutes"],
        ["hour", "hours"],
        ["day", "days"],
        ["month", "months"],
        ["year", "years"]
      ]
    }
  },
  ptbr: {
    lang: "pt-BR",
    date: {
      patterns: [
        "d",
        "d/M",
        "d/M/y",
        "d/M/y h:m",
        "d/M/y h:m:s",
        "h:m",
        "h:m:s"
      ],
      format: {
        d: "dd/MM/yyyy",
        D: 'dddd, dd "de" MMMM "de" yyyy',
        f: 'dddd, dd "de" MMMM "de" yyyy - HH:mm',
        F: 'dddd, dd "de" MMMM "de" yyyy - HH:mm:ss',
        g: "dd/MM/yyyy HH:mm",
        G: "dd/MM/yyyy HH:mm:ss",
        m: "dd de MMMM",
        s: "yyyy-MM-ddTHH:mm:ss",
        t: "HH:mm",
        T: "HH:mm:ss",
        y: "MMMM/yyyy",
        u: "UTC:yyyy-MM-ddTHH:mm:ssZ"
      },
      ampm: null
    },
    number: {
      group: [".", 3],
      decimal: [",", 2],
      currency: ["-R$ |", "R$ |"]
    },
    calendar: {
      dayNames: [
        "Domingo",
        "Segunda-Feira",
        "Terça-Feira",
        "Quarta-Feira",
        "Quinta-Feira",
        "Sexta-Feira",
        "Sábado"
      ],
      shortDayNames: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
      monthNames: [
        "Janeiro",
        "Fevereiro",
        "Marco",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro"
      ],
      shortMonthNames: [
        "Jan",
        "Fev",
        "Mar",
        "Abr",
        "Mai",
        "Jun",
        "Jul",
        "Ago",
        "Set",
        "Out",
        "Nov",
        "Dez"
      ],
      duration: [
        "agora",
        ["um segundo", "{0} segundos"],
        ["um minuto", "{0} minutos"],
        ["uma hora", "{0} horas"],
        ["um dia", "dias"],
        ["um mes", "{0} meses"],
        ["um ano", "{0} anos"]
      ]
    }
  }
}, s0 = {}, Rr = (u) => {
  const r = W3[(u || "ptbr").toLowerCase().replace("-", "")], t = ["y-M-d", "y-M-dTh:m:s(\\.f)?(o)?", "y-M-dTh:m:s(\\.f)?Z"];
  for (let x = 0; x < r.date.patterns.length; x++)
    t.push(r.date.patterns[x]);
  r || console.error("Language not defined: " + u);
  const c = function(x) {
    if (x === null || qn(x) || typeof x > "u")
      return x || null;
    let A = null;
    for (let D = 0; D < t.length && (A = m(x.toString(), t[D]), A === null); D++)
      ;
    if (A === null)
      return null;
    const I = /* @__PURE__ */ new Date();
    return A.d = parseInt(A.d) || I.getDate(), A.M = parseInt(A.M) || I.getMonth() + 1, A.y = parseInt(A.y) || I.getFullYear(), A.h = parseInt(A.h) || 0, A.m = parseInt(A.m) || 0, A.s = parseInt(A.s) || 0, A.f = parseInt(A.f) || 0, r.date.ampm && new RegExp(r.date.ampm[1], "i").test(A.t) && (A.h += 12), A.M < 1 || A.M > 12 || (A.y < 50 && (A.y += 2e3), A.y > 50 && A.y < 99 && (A.y += 1900), A.h > 23) || A.m > 59 || A.s > 59 || A.d < 1 || A.d > M(A.M - 1, A.y) ? null : A.utc ? new Date(
      Date.UTC(
        A.y,
        A.M - 1,
        A.d,
        A.h,
        A.m,
        A.s,
        A.f
      )
    ) : new Date(
      A.y,
      A.M - 1,
      A.d,
      A.h,
      A.m,
      A.s,
      A.f
    );
  }, s = function(x) {
    if (x === null || _t(x) || typeof x > "u")
      return x || null;
    const A = new RegExp(r.number.group[0].replace(".", "\\."), "g"), I = new RegExp(
      r.number.decimal[0].replace(".", "\\."),
      "g"
    ), D = x.toString().replace(A, "").replace(I, "."), S = parseFloat(D);
    return isNaN(S) ? null : S;
  }, l = function(x, A) {
    const I = arguments;
    if (x == null)
      return "";
    if (qn(x))
      return w(x, A, !1);
    if (_t(x)) {
      const D = A || "n", S = /^[nc](\d+)$/i.test(D) ? D.match(/^[nc](\d+)$/i)[1] : r.number.decimal[1];
      if (/^c\d*$/i.test(D)) {
        const E = y(
          Math.abs(x),
          S,
          r.number.decimal[0],
          r.number.group[0],
          r.number.group[1]
        );
        return (x < 0 ? r.number.currency[0] : r.number.currency[1]).replace("|", E);
      } else if (/^n\d*$/i.test(D))
        return y(
          x,
          S,
          r.number.decimal[0],
          r.number.group[0],
          r.number.group[1]
        );
    }
    return kt(x) ? x.replace(/{(\d+(:[^}]*)?)}/, function(D, S) {
      const E = S.replace(/^\d+:?/, ""), O = parseInt(S.match(/^\d+/)[0]), R = I[O + 1];
      return E ? l(R, E) : R;
    }) : x.toString();
  }, d = function(x, A, I) {
    const D = new Date(I.getTime());
    let S = "";
    switch (x) {
      case "y":
        S = "FullYear";
        break;
      case "M":
        return D.setDate(1), D.setMonth(D.getMonth() + parseInt(A || 0)), D.setDate(
          Math.min(
            I.getDate(),
            M(D.getMonth(), D.getFullYear())
          )
        ), D;
      case "d":
        S = "Date";
        break;
      case "h":
        S = "Hour";
        break;
      case "m":
        S = "Minute";
        break;
      case "s":
        S = "Second";
        break;
      case "f":
        S = "Milliseconds";
        break;
      default:
        throw "i18n.dateAdd : part no recognize. Use y, M, d, h, m, s or f";
    }
    return D["set" + S](D["get" + S]() + parseInt(A || 0)), D;
  }, f = function(x, A, I) {
    if (I == null || A == null)
      return null;
    const D = I.getTime(), S = A.getTime();
    let E = 0;
    switch (x) {
      case "y":
      case "M": {
        let O = I.getMonth() - A.getMonth() + 12 * (I.getFullYear() - A.getFullYear());
        return I.getDate() < A.getDate() && O--, x === "M" ? O : Math.ceil(O / 12);
      }
      case "d":
        E = 24 * 60 * 60 * 1e3;
        break;
      case "h":
        E = 60 * 60 * 1e3;
        break;
      case "m":
        E = 60 * 1e3;
        break;
      case "s":
        E = 1e3;
        break;
      case "f":
        E = 1;
        break;
      default:
        throw "i18n.dateDiff: part no recognize. Use y, M, d, h, m, s or f";
    }
    return parseInt((D - S) / E);
  }, _ = function(x) {
    const A = (/* @__PURE__ */ new Date()).getTime() - x.getTime(), I = {
      y: parseInt(A / (365 * 24 * 60 * 60 * 1e3)),
      M: parseInt(A / (30 * 24 * 60 * 60 * 1e3)),
      d: parseInt(A / (24 * 60 * 60 * 1e3)),
      h: parseInt(A / (60 * 60 * 1e3)),
      m: parseInt(A / (60 * 1e3)),
      s: parseInt(A / 1e3)
    };
    return I.y >= 1 ? l(r.calendar.duration[6][I.y === 1 ? 0 : 1], I.y) : I.M >= 1 ? l(r.calendar.duration[5][I.M === 1 ? 0 : 1], I.M) : I.d >= 1 ? l(r.calendar.duration[4][I.d === 1 ? 0 : 1], I.d) : I.h >= 1 ? l(r.calendar.duration[3][I.h === 1 ? 0 : 1], I.h) : I.m >= 1 ? l(r.calendar.duration[2][I.m === 1 ? 0 : 1], I.m) : I.s >= 1 ? l(r.calendar.duration[1][I.s === 1 ? 0 : 1], I.s) : r.calendar.duration[1][1];
  }, m = function(x, A) {
    let I = { keys: {}, re: "" };
    const D = {};
    if (s0[A])
      I = s0[A];
    else {
      let E = "^" + A.replace("d", "(?<d>\\d{1,2})").replace("y", "(?<y>\\d{2,4})").replace("M", "(?<M>\\d{1,2})").replace("h", "(?<h>\\d{1,2})").replace("m", "(?<m>\\d{1,2})").replace("s", "(?<s>\\d{1,2})").replace("f", "(?<f>\\d{1,12})").replace("o", "(?<o>[+-]?\\d{1,2}:?\\d{1,2})") + "$";
      r.date.ampm && (E = E.replace(
        "t",
        "(?<t>(" + r.date.ampm[0] + ")|(" + r.date.ampm[1] + "))"
      ));
      const O = E.match(/(?!\(\?\<)(\w+)(?=\>)/g);
      if (O)
        for (let R = 0; R < O.length; R++)
          I.keys[R + 1] = O[R];
      else
        return x.match(E);
      I.re = RegExp(E.replace(/\?\<\w+\>/g, ""), "i"), s0[E] = I;
    }
    const S = x.match(I.re);
    if (S) {
      const E = Object.keys(I.keys);
      for (i = 0; i < E.length; i++)
        D[I.keys[E[i]]] = S[i + 1];
      return D.utc = A.indexOf("Z") >= 0, D;
    } else
      return null;
  }, w = function() {
    const x = /d{1,4}|M{1,4}|yy(?:yy)?|f{1,3}|z{1,3}|([Hhmst])\1?|"[^"]*"|'[^']*'/g, A = function(I, D) {
      for (I = String(I), D = D || 2; I.length < D; )
        I = "0" + I;
      return I;
    };
    return function(I, D, S) {
      if (D === "ago")
        return _(I);
      D = String(
        r.date.format[D] || D || r.date.format.d
      ), D.slice(0, 4) == "UTC:" && (D = D.slice(4), S = !0);
      const E = r.date.ampm || ["", ""], O = S ? "getUTC" : "get", R = I[O + "Date"](), G = I[O + "Day"](), ue = I[O + "Month"](), Le = I[O + "FullYear"](), Te = I[O + "Hours"](), gn = I[O + "Minutes"](), xn = I[O + "Seconds"](), nn = I[O + "Milliseconds"](), eu = S ? 0 : I.getTimezoneOffset(), qu = {
        d: R,
        dd: A(R),
        ddd: r.calendar.shortDayNames[G],
        dddd: r.calendar.dayNames[G],
        M: ue + 1,
        MM: A(ue + 1),
        MMM: r.calendar.shortMonthNames[ue],
        MMMM: r.calendar.monthNames[ue],
        yy: String(Le).slice(2),
        yyyy: Le,
        h: Te % 12 || 12,
        hh: A(Te % 12 || 12),
        H: Te,
        HH: A(Te),
        m: gn,
        mm: A(gn),
        s: xn,
        ss: A(xn),
        f: A(nn, 3).substring(0, 1),
        ff: A(nn, 3).substring(0, 2),
        fff: A(nn, 3),
        t: Te < 12 ? E[0].substring(0, 1) : E[1].substring(0, 1),
        tt: Te < 12 ? E[0] : E[1],
        z: (eu > 0 ? "-" : "+") + Math.floor(Math.abs(eu) / 60),
        zz: (eu > 0 ? "-" : "+") + A(
          Math.floor(Math.abs(eu) / 60) * 100 + Math.abs(eu) % 60,
          4
        ).substring(0, 2),
        zzz: (eu > 0 ? "-" : "+") + A(Math.floor(Math.abs(eu) / 60) * 100 + Math.abs(eu) % 60, 4)
      };
      return D.replace(x, function(Ge) {
        return Ge in qu ? qu[Ge] : Ge.slice(1, Ge.length - 1);
      });
    };
  }(), y = function(x, A, I, D, S) {
    A = isNaN(A = Math.abs(A)) ? 2 : A, I = I === void 0 ? "." : I, D = D === void 0 ? "," : D;
    const E = x < 0 ? "-" : "", O = parseInt(x = Math.abs(+x || 0).toFixed(A)) + "";
    let R;
    return R = (R = O.length) > S ? R % S : 0, E + (R ? O.substr(0, R) + D : "") + O.substr(R).replace(new RegExp("(\\d{" + S + "})(?=\\d)", "g"), "$1" + D) + (A ? I + Math.abs(x - O).toFixed(A).slice(2) : "");
  }, F = function(x) {
    return x % 4 === 0 && x % 100 !== 0 || x % 400 === 0;
  }, M = function(x, A) {
    return [
      31,
      F(A) ? 29 : 28,
      31,
      30,
      31,
      30,
      31,
      31,
      30,
      31,
      30,
      31
    ][x];
  };
  return {
    culture: r,
    format: l,
    parseDate: c,
    parseNumber: s,
    timeAgo: _,
    dateAdd: d,
    dateDiff: f
  };
}, Jl = Rr(), Qe = function(u) {
  return u == null;
}, I0 = function(u) {
  return !!u && u.constructor === Object;
}, kt = function(u) {
  if (Qe(u))
    return !1;
  const r = typeof u == "string", t = typeof u == "object" && u.constructor === String;
  return r || t;
}, _t = function(u) {
  if (Qe(u))
    return !1;
  const r = typeof u == "number", t = typeof u == "object" && u.constructor === Number;
  return r || t;
}, T0 = function(u) {
  if (Qe(u))
    return !1;
  const r = typeof u == "boolean", t = typeof u == "object" && u.constructor === Boolean;
  return r || t;
}, qn = function(u) {
  return Qe(u) ? !1 : Object.prototype.toString.call(u) === "[object Date]";
}, O0 = function(u) {
  return Jl.format(u, "yyyy-MM-dd");
};
function Xl(u, r) {
  return this[u] instanceof Date ? Jl.format(this[u], "s") : r;
}
function Ql(u) {
  const r = [];
  return jl(u, r, "", 0), r.length > 0 ? "?" + r.join("&") : "";
}
function R0(u) {
  const r = u.split("");
  return Math.abs(
    r.reduce(
      (t, c) => t = c.charCodeAt(0) + (t << 6) + (t << 16) - t,
      0
    )
  );
}
function jl(u, r, t, c) {
  if (Qe(u) || c >= 5)
    return;
  const s = Object.keys(u);
  for (let l = 0; l < s.length; l++) {
    const d = s[l], f = u[d];
    if (Qe(f))
      continue;
    const _ = t ? t + "[" + d + "]" : d;
    qn(f) ? r.push(`${_}=${O0(f)}`) : kt(f) || _t(f) || T0(f) ? r.push(`${_}=${encodeURIComponent(f)}`) : jl(f, r, c === 0 ? "" : _, --c);
  }
}
const es = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?(Z|[+-]\d{2}:\d{2})?$/i;
function us(u) {
  return kt(u) && es.test(u);
}
const w0 = (u) => u === null ? "null" : u === void 0 ? "undefined" : T0(u) ? "boolean" : kt(u) ? "string" : _t(u) ? "number" : qn(u) ? "date" : Array.isArray(u) ? "array" : I0(u) ? "object" : "unknown", C0 = {
  null: (u, r) => 0,
  undefined: (u, r) => 0,
  boolean: (u, r) => u === r ? 0 : u ? 1 : -1,
  string: (u, r) => u.localeCompare(r, "pt", { sensitivity: "base" }),
  number: (u, r) => u - r,
  array: G3,
  date: (u, r) => u.getTime() - r.getTime(),
  object: (u, r) => 0,
  unknown: (u, r) => 0
};
function G3(u, r) {
  const t = Math.min(u.length, r.length);
  for (let c = 0; c < t; ++c) {
    const s = pn(u[c], r[c]);
    if (s !== 0)
      return s;
  }
  return u.length - r.length;
}
const pn = function(u, r) {
  const t = w0(u), c = w0(r);
  if (t !== c) {
    const s = Object.keys(C0), l = s.indexOf(t), d = s.indexOf(c);
    return l - d;
  } else {
    const s = C0[t];
    return s(u, r);
  }
}, A4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, ISO_8601: es, compare: pn, hashString: R0, isBoolean: T0, isDate: qn, isDateString: us, isEmpty: Qe, isNumber: _t, isObject: I0, isString: kt, jsonFormatter: Xl, toIsoDateString: O0, toQueryString: Ql, typeName: w0, typesSort: C0 }, Symbol.toStringTag, { value: "Module" })), _n = {
  baseUrl: "",
  auth: {
    enableAd: !1,
    loginApi: "/api/auth/login",
    meApi: "/api/auth/me",
    forbiddenUrl: "/"
  },
  routes: []
};
async function mn(u, r, t, c, s) {
  const l = r.replace(/{(\w+)}/g, (D) => {
    const S = D.substring(1, D.length - 1), E = t[S];
    return delete t[S], qn(E) ? O0(E) : E;
  }), d = Ql(t), f = new Headers({
    "content-type": "application/json"
  });
  if (s) {
    const D = localStorage.getItem("access_token") || sessionStorage.getItem("access_token");
    f.append("Authorization", "Bearer " + D);
  }
  let _;
  const m = (_n.baseUrl || "") + l + d, w = u + " " + m;
  console.log(w);
  const y = {
    method: u,
    headers: f,
    body: c === null ? null : JSON.stringify(c, Xl)
  };
  (_n.auth.enableAd ? r === _n.auth.loginApi : !1) && (y.credentials = "include");
  try {
    _ = await fetch(m, y);
  } catch (D) {
    throw K3(w, D);
  }
  let M = null;
  const x = _.headers.get("Content-Type"), A = (x?.indexOf("application/json") ?? -1) >= 0, I = (x?.indexOf("text/plain") ?? -1) >= 0;
  if (A) {
    let D = null;
    try {
      D = await _.json();
    } catch {
      throw Z3(w);
    }
    M = A0(D);
  } else
    I && (M = await _.text());
  if (_.ok)
    return M;
  throw V3(w, _, M);
}
function A0(u) {
  if (us(u))
    return new Date(u.replace("Z", ""));
  if (Array.isArray(u)) {
    const r = [];
    for (let t = 0; t < u.length; t++)
      r.push(A0(u[t]));
    return r;
  }
  if (I0(u)) {
    const r = {}, t = Object.keys(u);
    for (let c = 0; c < t.length; c++) {
      const s = t[c];
      r[s] = A0(u[s]);
    }
    return r;
  }
  return u;
}
function K3(u, r) {
  return {
    code: 500,
    // erro de infra-estrutura
    message: r?.message ?? r,
    details: ["Request: " + u]
  };
}
function Z3(u, r, t) {
  return {
    code: 500,
    message: "Erro no parser JSON de retorno: " + (t?.message ?? t),
    details: ["Request: " + u]
  };
}
function V3(u, r, t) {
  const c = {
    code: r.status,
    message: t.message,
    inner: t.inner,
    details: []
  };
  return u && c.details.push(
    "<span style='font-weight: 700'>Request:</span> " + u
  ), t.source && c.details.push(
    "<span style='font-weight: 700'>Source</span>: " + t.source
  ), t.trackId && c.details.push(
    "<span style='font-weight: 700'>TrackId</span>: " + t.trackId
  ), t.stackTrace && (console.warn("==== StackTrace ===="), console.warn(t.stackTrace)), c;
}
const Br = oe({ isLoggedIn: !1 }), ns = oe({}), ts = oe([]), E4 = async (u, r) => {
  const t = await mn(
    "POST",
    _n.auth.loginApi,
    {},
    u,
    _n.auth.enableAd
  );
  (r ? localStorage : sessionStorage).setItem("access_token", t);
  const s = await mn("GET", _n.auth.meApi, {}, null, !0);
  return Br.value = { ...s.user, isLoggedIn: !0 }, ns.value = s.permissions, ts.value = s.sitemap, s.user;
}, D4 = async () => {
  if (!(localStorage.getItem("access_token") || sessionStorage.getItem("access_token")))
    return !1;
  try {
    const r = await mn("GET", _n.auth.meApi, {}, null, !0);
    return Br.value = { ...r.user, isLoggedIn: !0 }, ns.value = r.permissions, ts.value = r.sitemap, !0;
  } catch {
    return localStorage.removeItem("access_token"), sessionStorage.removeItem("access_token"), !1;
  }
}, S4 = () => {
  Br.value = { isLoggedIn: !1 }, localStorage.clear(), sessionStorage.clear();
}, Y3 = { class: "icon" }, Du = /* @__PURE__ */ V({
  __name: "Icon",
  props: {
    name: null,
    spin: { type: Boolean }
  },
  setup(u) {
    return (r, t) => (N(), j("i", Y3, [
      (N(), le(Er(u.name), {
        class: ye({ "icon-spin": u.spin })
      }, null, 8, ["class"]))
    ]));
  }
}), J3 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
}, X3 = /* @__PURE__ */ U(
  "rect",
  {
    x: "64",
    y: "176",
    width: "384",
    height: "256",
    rx: "28.87",
    ry: "28.87",
    fill: "none",
    stroke: "currentColor",
    "stroke-linejoin": "round",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
), Q3 = /* @__PURE__ */ U(
  "path",
  {
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-miterlimit": "10",
    "stroke-width": "32",
    d: "M144 80h224",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
), j3 = /* @__PURE__ */ U(
  "path",
  {
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-miterlimit": "10",
    "stroke-width": "32",
    d: "M112 128h288",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
), e6 = [X3, Q3, j3], u6 = V({
  name: "AlbumsOutline",
  render: function(r, t) {
    return N(), j("svg", J3, e6);
  }
}), n6 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
}, t6 = /* @__PURE__ */ U(
  "path",
  {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32",
    d: "M416 128L192 384l-96-96"
  },
  null,
  -1
  /* HOISTED */
), r6 = [t6], i6 = V({
  name: "Checkmark",
  render: function(r, t) {
    return N(), j("svg", n6, r6);
  }
}), o6 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
}, c6 = /* @__PURE__ */ U(
  "path",
  {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "48",
    d: "M112 184l144 144l144-144"
  },
  null,
  -1
  /* HOISTED */
), l6 = [c6], s6 = V({
  name: "ChevronDown",
  render: function(r, t) {
    return N(), j("svg", o6, l6);
  }
}), a6 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
}, f6 = /* @__PURE__ */ U(
  "path",
  {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "48",
    d: "M112 328l144-144l144 144"
  },
  null,
  -1
  /* HOISTED */
), d6 = [f6], h6 = V({
  name: "ChevronUp",
  render: function(r, t) {
    return N(), j("svg", a6, d6);
  }
}), p6 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
}, _6 = /* @__PURE__ */ U(
  "path",
  {
    d: "M289.94 256l95-95A24 24 0 0 0 351 127l-95 95l-95-95a24 24 0 0 0-34 34l95 95l-95 95a24 24 0 1 0 34 34l95-95l95 95a24 24 0 0 0 34-34z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
), b6 = [_6], m6 = V({
  name: "Close",
  render: function(r, t) {
    return N(), j("svg", p6, b6);
  }
}), g6 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
}, x6 = /* @__PURE__ */ U(
  "path",
  {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32",
    d: "M368 368L144 144"
  },
  null,
  -1
  /* HOISTED */
), v6 = /* @__PURE__ */ U(
  "path",
  {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32",
    d: "M368 144L144 368"
  },
  null,
  -1
  /* HOISTED */
), y6 = [x6, v6], k6 = V({
  name: "CloseOutline",
  render: function(r, t) {
    return N(), j("svg", g6, y6);
  }
}), w6 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
}, C6 = /* @__PURE__ */ U(
  "path",
  {
    d: "M473.66 210c-16.56-12.3-37.7-20.75-59.52-24c-6.62-39.18-24.21-72.67-51.3-97.45c-28.69-26.3-66.63-40.76-106.84-40.76c-35.35 0-68 11.08-94.37 32.05a149.61 149.61 0 0 0-45.32 60.49c-29.94 4.6-57.12 16.68-77.39 34.55C13.46 197.33 0 227.24 0 261.39c0 34.52 14.49 66 40.79 88.76c25.12 21.69 58.94 33.64 95.21 33.64h104V230.42l-48 48l-22.63-22.63L256 169.17l86.63 86.62L320 278.42l-48-48v153.37h124c31.34 0 59.91-8.8 80.45-24.77c23.26-18.1 35.55-44 35.55-74.83c0-29.94-13.26-55.61-38.34-74.19z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
), A6 = /* @__PURE__ */ U(
  "path",
  {
    d: "M240 383.79h32v80.41h-32z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
), E6 = [C6, A6], D6 = V({
  name: "CloudUploadSharp",
  render: function(r, t) {
    return N(), j("svg", w6, E6);
  }
}), S6 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
}, M6 = /* @__PURE__ */ U(
  "rect",
  {
    x: "128",
    y: "128",
    width: "336",
    height: "336",
    rx: "57",
    ry: "57",
    fill: "none",
    stroke: "currentColor",
    "stroke-linejoin": "round",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
), F6 = /* @__PURE__ */ U(
  "path",
  {
    d: "M383.5 128l.5-24a56.16 56.16 0 0 0-56-56H112a64.19 64.19 0 0 0-64 64v216a56.16 56.16 0 0 0 56 56h24",
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
), I6 = [M6, F6], T6 = V({
  name: "CopyOutline",
  render: function(r, t) {
    return N(), j("svg", S6, I6);
  }
}), O6 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
}, R6 = /* @__PURE__ */ U(
  "circle",
  {
    cx: "256",
    cy: "256",
    r: "192",
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
), B6 = [R6], L6 = V({
  name: "EllipseOutline",
  render: function(r, t) {
    return N(), j("svg", O6, B6);
  }
}), $6 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
}, P6 = /* @__PURE__ */ U(
  "path",
  {
    d: "M472 168H40a24 24 0 0 1 0-48h432a24 24 0 0 1 0 48z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
), z6 = /* @__PURE__ */ U(
  "path",
  {
    d: "M392 280H120a24 24 0 0 1 0-48h272a24 24 0 0 1 0 48z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
), N6 = /* @__PURE__ */ U(
  "path",
  {
    d: "M296 392h-80a24 24 0 0 1 0-48h80a24 24 0 0 1 0 48z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
), q6 = [P6, z6, N6], U6 = V({
  name: "Filter",
  render: function(r, t) {
    return N(), j("svg", $6, q6);
  }
}), H6 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
}, W6 = /* @__PURE__ */ U(
  "path",
  {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-miterlimit": "10",
    "stroke-width": "32",
    d: "M80 160h352"
  },
  null,
  -1
  /* HOISTED */
), G6 = /* @__PURE__ */ U(
  "path",
  {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-miterlimit": "10",
    "stroke-width": "32",
    d: "M80 256h352"
  },
  null,
  -1
  /* HOISTED */
), K6 = /* @__PURE__ */ U(
  "path",
  {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-miterlimit": "10",
    "stroke-width": "32",
    d: "M80 352h352"
  },
  null,
  -1
  /* HOISTED */
), Z6 = [W6, G6, K6], V6 = V({
  name: "MenuOutline",
  render: function(r, t) {
    return N(), j("svg", H6, Z6);
  }
}), Y6 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
}, J6 = /* @__PURE__ */ U(
  "path",
  {
    d: "M384 224v184a40 40 0 0 1-40 40H104a40 40 0 0 1-40-40V168a40 40 0 0 1 40-40h167.48",
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
), X6 = /* @__PURE__ */ U(
  "path",
  {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32",
    d: "M336 64h112v112"
  },
  null,
  -1
  /* HOISTED */
), Q6 = /* @__PURE__ */ U(
  "path",
  {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32",
    d: "M224 288L440 72"
  },
  null,
  -1
  /* HOISTED */
), j6 = [J6, X6, Q6], Al = V({
  name: "OpenOutline",
  render: function(r, t) {
    return N(), j("svg", Y6, j6);
  }
}), e_ = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
}, u_ = /* @__PURE__ */ U(
  "path",
  {
    d: "M400 148l-21.12-24.57A191.43 191.43 0 0 0 240 64C134 64 48 150 48 256s86 192 192 192a192.09 192.09 0 0 0 181.07-128",
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-miterlimit": "10",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
), n_ = /* @__PURE__ */ U(
  "path",
  {
    d: "M464 97.42V208a16 16 0 0 1-16 16H337.42c-14.26 0-21.4-17.23-11.32-27.31L436.69 86.1C446.77 76 464 83.16 464 97.42z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
), t_ = [u_, n_], r_ = V({
  name: "Reload",
  render: function(r, t) {
    return N(), j("svg", e_, t_);
  }
}), i_ = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
}, o_ = /* @__PURE__ */ Gl('<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 232v-80"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M256 88V72"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M132 132l-12-12"></path><circle cx="256" cy="272" r="32" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></circle><path d="M256 96a176 176 0 1 0 176 176A176 176 0 0 0 256 96z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></path>', 5), c_ = [o_], l_ = V({
  name: "StopwatchOutline",
  render: function(r, t) {
    return N(), j("svg", i_, c_);
  }
}), s_ = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
}, a_ = /* @__PURE__ */ U(
  "path",
  {
    d: "M432 144l-28.67 275.74A32 32 0 0 1 371.55 448H140.46a32 32 0 0 1-31.78-28.26L80 144",
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
), f_ = /* @__PURE__ */ U(
  "rect",
  {
    x: "32",
    y: "64",
    width: "448",
    height: "80",
    rx: "16",
    ry: "16",
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
), d_ = /* @__PURE__ */ U(
  "path",
  {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32",
    d: "M312 240L200 352"
  },
  null,
  -1
  /* HOISTED */
), h_ = /* @__PURE__ */ U(
  "path",
  {
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "32",
    d: "M312 352L200 240"
  },
  null,
  -1
  /* HOISTED */
), p_ = [a_, f_, d_, h_], __ = V({
  name: "TrashBinOutline",
  render: function(r, t) {
    return N(), j("svg", s_, p_);
  }
}), b_ = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
}, m_ = /* @__PURE__ */ Gl('<path d="M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M80 112h352" fill="currentColor"></path><path d="M192 112V72h0a23.93 23.93 0 0 1 24-24h80a23.93 23.93 0 0 1 24 24h0v40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 176v224"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M184 176l8 224"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M328 176l-8 224"></path>', 6), g_ = [m_], x_ = V({
  name: "TrashOutline",
  render: function(r, t) {
    return N(), j("svg", b_, g_);
  }
}), v_ = {
  key: 2,
  class: "btn-text"
}, y_ = {
  key: 3,
  class: "btn-text"
}, wt = /* @__PURE__ */ V({
  __name: "Btn",
  props: {
    color: { default: () => "default" },
    mode: { default: () => "default" },
    full: { type: Boolean, default: () => !1 },
    icon: null,
    disabled: { type: Boolean, default: () => !1 },
    toggle: { type: Boolean, default: () => !1 },
    value: { type: Boolean, default: () => !1 },
    loading: { type: Boolean, default: () => !1 },
    mini: { type: Boolean, default: () => !1 },
    to: null
  },
  emits: ["click", "update:value"],
  setup(u, { emit: r }) {
    const t = u, c = oe(t.value), s = De(() => [
      "btn",
      {
        "btn-button": t.mode === "default",
        "btn-link": t.mode === "link",
        "btn-is-disabled": t.disabled || t.loading,
        "btn-is-full": t.full,
        "btn-is-loading": t.loading,
        "btn-is-mini": t.mini,
        "btn-pressed": t.value
      },
      "btn-" + t.color
    ]), l = De(
      () => t.disabled || t.loading ? "span" : t.to ? "RouterLink" : "button"
    );
    function d(f) {
      t.disabled || (r("click", f), t.toggle && (c.value = !c.value, r("update:value", c.value)));
    }
    return (f, _) => (N(), le(Er(re(l)), {
      class: ye(re(s)),
      to: u.to,
      type: "button",
      onClick: d
    }, {
      default: Ce(() => [
        u.icon && !u.loading ? (N(), le(Du, {
          key: 0,
          name: u.icon
        }, null, 8, ["name"])) : Ie("", !0),
        u.icon && u.loading ? (N(), le(Du, {
          key: 1,
          name: re(r_),
          spin: !0
        }, null, 8, ["name"])) : Ie("", !0),
        u.loading && f.$slots.default ? (N(), j("span", v_, "Aguarde...")) : Ie("", !0),
        u.loading ? Ie("", !0) : (N(), j("span", y_, [
          ge(f.$slots, "default")
        ]))
      ]),
      _: 3
    }, 8, ["class", "to"]));
  }
}), k_ = /* @__PURE__ */ V({
  __name: "BtnLink",
  setup(u) {
    return (r, t) => (N(), le(wt, { mode: "link" }, {
      default: Ce(() => [
        ge(r.$slots, "default")
      ]),
      _: 3
    }));
  }
}), w_ = /* @__PURE__ */ V({
  __name: "BtnMini",
  setup(u) {
    return (r, t) => (N(), le(wt, { mini: !0 }, {
      default: Ce(() => [
        ge(r.$slots, "default")
      ]),
      _: 3
    }));
  }
}), C_ = ["multiple"], A_ = /* @__PURE__ */ V({
  __name: "BtnUpload",
  props: {
    multiple: { type: Boolean }
  },
  emits: ["file-select"],
  setup(u, { emit: r }) {
    async function t(s) {
      const l = s.target.files, d = [];
      for (let f = 0; f < l.length; f++) {
        const _ = l[f], m = {
          filename: _.name,
          contentBase64: await c(_)
        };
        d.push(m);
      }
      r("file-select", d);
    }
    async function c(s) {
      return new Promise(function(l, d) {
        const f = new FileReader();
        f.onloadend = () => {
          const _ = f.result, m = _.substring(_.indexOf(",") + 1);
          l(m);
        }, f.onerror = (_) => {
          d(_);
        }, f.readAsDataURL(s);
      });
    }
    return (s, l) => {
      const d = Cu("Btn");
      return N(), le(d, {
        color: "primary",
        icon: re(D6)
      }, {
        default: Ce(() => [
          U("input", {
            class: "btn-file-upload",
            type: "file",
            onChange: t,
            multiple: u.multiple
          }, null, 40, C_),
          ge(s.$slots, "default", {}, () => [
            Su("Upload")
          ])
        ]),
        _: 3
      }, 8, ["icon"]);
    };
  }
}), E_ = {
  key: 0,
  class: "form-loading"
}, D_ = /* @__PURE__ */ V({
  __name: "Form",
  props: {
    model: null,
    labelWidth: null,
    loading: { type: Boolean }
  },
  setup(u, { expose: r }) {
    const t = u, c = oe(null), s = D3(), l = oe(!1);
    c.value?.addEventListener("submit", (F) => !1);
    const d = De(function() {
      if (l.value && t.model) {
        const F = JSON.parse(JSON.stringify(t.model));
        return _(F);
      } else
        return new Array();
    });
    v0("errors", d), v0("labelWidth", t.labelWidth);
    async function f() {
      t.model || alert(`Formulário sem declaração de modelo.

<Form :model=''></Form>`), l.value = !0;
      const F = JSON.parse(JSON.stringify(t.model));
      return _(F);
    }
    function _(F) {
      const M = new Array(), x = s.default ? s.default() : [];
      return m(M, F, x), M;
    }
    function m(F, M, x) {
      for (let A = 0; A < x.length; A++) {
        const I = x[A];
        if (!I.props?.field && !I.props?.required && !I.props?.validate)
          if (I.children?.length > 0)
            m(F, M, I.children);
          else
            continue;
        if (!I.props)
          continue;
        const { field: D, required: S, validate: E } = I.props, O = D ? y(M, D) : M, R = O == null || new String(O).trim().length === 0;
        if (R && S !== !1 && S !== void 0 && F.push({
          field: D,
          message: "Campo obrigatório"
        }), E && !R) {
          const G = E(O);
          G !== !0 && F.push({
            field: D,
            message: G
          });
        }
      }
    }
    function w() {
      d.value.length = 0, l.value = !1;
    }
    function y(F, M, x) {
      return M === "*" ? F : M.split(/[\.\[\]\'\"]/).filter((A) => A).reduce((A, I) => A ? A[I] : x, F);
    }
    return r({ validate: f, validateReset: w }), (F, M) => (N(), j("form", {
      class: "form n-block",
      ref_key: "root",
      ref: c,
      action: "#",
      method: "GET"
    }, [
      u.loading ? (N(), j("p", E_, [
        Be(Du, {
          name: re(l_),
          class: "form-loading-icon"
        }, null, 8, ["name"]),
        Su(" Aguarde... ")
      ])) : Ie("", !0),
      U("div", {
        class: ye(["form-content", { "form-loading-content": u.loading }])
      }, [
        ge(F.$slots, "default")
      ], 2)
    ], 512));
  }
}), S_ = { class: "form-item" }, M_ = { class: "form-slot" }, F_ = { class: "form-validation" }, I_ = {
  key: 0,
  class: "form-help"
}, T_ = /* @__PURE__ */ V({
  __name: "FormItem",
  props: {
    label: null,
    required: { type: Boolean, default: !1 },
    field: null,
    validate: null,
    help: null
  },
  setup(u) {
    const r = y0("errors", []), t = y0("labelWidth", 8);
    return (c, s) => (N(), j("div", S_, [
      u.label !== void 0 ? (N(), j("label", {
        key: 0,
        class: ye(["form-label", "form-label-" + (re(t) || 8)])
      }, gu(u.label), 3)) : Ie("", !0),
      U("div", M_, [
        ge(c.$slots, "default"),
        U("div", F_, gu(re(r).filter((l) => l.field === u.field).map((l) => l.message).join(`
 `)), 1),
        u.help ? (N(), j("div", I_, gu(u.help), 1)) : Ie("", !0)
      ])
    ]));
  }
}), O_ = ["draggable", "onDragstart", "onDrop"], rs = /* @__PURE__ */ V({
  __name: "SortItems",
  props: {
    modelValue: null,
    itemKey: null,
    itemClass: { default: () => "" },
    handle: { default: () => ".handle" }
  },
  emits: ["update:modelValue"],
  setup(u, { emit: r }) {
    const t = u, c = oe(null), s = oe(!1);
    let l = -1;
    yt(() => {
      const m = c.value.querySelectorAll(t.handle);
      for (let w = 0; w < m.length; w++) {
        const y = m[w];
        y.addEventListener("mousedown", () => s.value = !0), y.addEventListener("mouseup", () => s.value = !1);
      }
    });
    function d(m) {
      l = m;
    }
    function f(m) {
      s.value = !1;
      const w = _(t.modelValue, l, m);
      r("update:modelValue", w);
    }
    function _(m, w, y) {
      if (w === y)
        return m;
      const F = [...m];
      return F.splice(w, 1), F.splice(y, 0, m[w]), F;
    }
    return (m, w) => (N(), j("div", {
      onDragover: w[0] || (w[0] = S3(() => {
      }, ["prevent"])),
      ref_key: "el",
      ref: c
    }, [
      (N(!0), j(Kl, null, M3(t.modelValue, (y, F) => (N(), j("div", {
        key: y[t.itemKey],
        draggable: s.value,
        class: ye(t.itemClass),
        onDragstart: (M) => d(F),
        onDrop: (M) => f(F)
      }, [
        ge(m.$slots, "default", { item: y })
      ], 42, O_))), 128))
    ], 544));
  }
}), R_ = {
  key: 0,
  class: "n-grid-toolbar"
}, B_ = { class: "n-grid-toolbar-label" }, L_ = { class: "n-grid-toolbar-page-count" }, $_ = {
  key: 1,
  class: "n-grid-filter-border"
}, P_ = {
  key: 0,
  class: "n-grid-filter-item-box"
}, z_ = { style: { "min-width": "8rem", "max-width": "8rem", margin: "0 1rem 0 0" } }, N_ = { class: "n-grid-filter-item-components" }, q_ = { class: "n-grid-filter-del" }, U_ = /* @__PURE__ */ V({
  __name: "GridView",
  props: ["options"],
  setup(u) {
    return (r, t) => {
      const c = Cu("Btn"), s = Cu("Icon"), l = Cu("CheckBox"), d = Cu("ComboBox");
      return N(), j("div", {
        class: ye(["n-grid n-block", u.options.profileID])
      }, [
        u.options.useProfile ? (N(), j("div", R_, [
          Be(c, {
            title: "Exibir/esconder opções de filtros",
            mode: "link",
            color: "info",
            toggle: !0,
            value: u.options.showFilter,
            "onUpdate:value": t[0] || (t[0] = (f) => u.options.showFilter = f),
            icon: re(U6)
          }, null, 8, ["value", "icon"]),
          Be(c, {
            title: "Copiar resultados para clipboard em formato Excel",
            mode: "link",
            color: "primary",
            icon: re(T6),
            disabled: u.options.data.length === 0,
            onClick: t[1] || (t[1] = (f) => u.options.exportToExcel())
          }, null, 8, ["icon", "disabled"]),
          U("div", B_, [
            Su(gu(u.options.filterLabel) + " ", 1),
            u.options.filters.length > 0 ? (N(), j("a", {
              key: 0,
              href: "javascript:;",
              class: "n-grid-toolbar-link",
              onClick: t[2] || (t[2] = (f) => u.options.filterClearAll())
            }, " Limpar ")) : Ie("", !0)
          ]),
          U("div", L_, " Registros: " + gu(u.options.data.length) + " / " + gu(u.options.totalCount), 1)
        ])) : Ie("", !0),
        u.options.useProfile ? ht((N(), j("div", $_, [
          Be(rs, {
            modelValue: u.options.columns,
            "onUpdate:modelValue": t[3] || (t[3] = (f) => u.options.columns = f),
            handle: ".handle",
            class: "n-grid-filter-box",
            "item-key": "key",
            "item-class": ""
          }, {
            default: Ce(({ item: f }) => [
              f.visible !== void 0 ? (N(), j("div", {
                key: 0,
                class: ye(["n-grid-filter-item", {
                  "n-grid-filter-item-active": u.options.filters.map((_) => _.field).includes(f.key)
                }])
              }, [
                Be(s, {
                  name: re(V6),
                  class: "handle"
                }, null, 8, ["name"]),
                Be(l, {
                  checked: f.visible,
                  "onUpdate:checked": (_) => f.visible = _,
                  mini: !0,
                  style: { width: "16rem" }
                }, {
                  default: Ce(() => [
                    Su(gu(f.title), 1)
                  ]),
                  _: 2
                }, 1032, ["checked", "onUpdate:checked"]),
                f.filterInfo ? (N(), j("div", P_, [
                  U("div", z_, [
                    f.filterInfo.ops.length > 0 ? (N(), le(d, {
                      key: 0,
                      placeholder: "",
                      mini: !0,
                      value: f.filterInfo.op,
                      "onUpdate:value": (_) => f.filterInfo.op = _,
                      options: f.filterInfo.ops,
                      "value-key": "value",
                      "text-key": "label"
                    }, null, 8, ["value", "onUpdate:value", "options"])) : Ie("", !0)
                  ]),
                  U("div", N_, [
                    (N(), le(Er(u.options.filterComponent(0, f)), {
                      mini: !0,
                      placeholder: ""
                    })),
                    (N(), le(Er(u.options.filterComponent(1, f)), {
                      mini: !0,
                      placeholder: ""
                    }))
                  ]),
                  U("div", q_, [
                    u.options.filters.map((_) => _.field).includes(f.key) ? (N(), le(c, {
                      key: 0,
                      mode: "link",
                      mini: "true",
                      color: "error",
                      onClick: (_) => u.options.filterClear(f),
                      icon: re(x_)
                    }, null, 8, ["onClick", "icon"])) : Ie("", !0)
                  ])
                ])) : Ie("", !0)
              ], 2)) : Ie("", !0)
            ]),
            _: 1
          }, 8, ["modelValue"])
        ], 512)), [
          [pt, u.options.showFilter]
        ]) : Ie("", !0),
        Be(re(T3), {
          class: "n-block",
          "scroll-x": u.options.scrollX,
          columns: u.options.visibleColumns,
          loading: u.options.loading,
          bordered: !0,
          data: u.options.data,
          pagination: u.options.pagination,
          "row-key": u.options.rowKey,
          striped: !0,
          "table-layout": "fixed",
          "onUpdate:checkedRowKeys": u.options.handleCheck,
          "onUpdate:sorter": u.options.handleSort
        }, null, 8, ["scroll-x", "columns", "loading", "data", "pagination", "row-key", "onUpdate:checkedRowKeys", "onUpdate:sorter"])
      ], 2);
    };
  }
});
function H_(u, r) {
  const t = [];
  if (r.length === 0)
    return !1;
  const c = r[0], s = [];
  for (let d in c)
    s.push(d);
  for (let d = 0; d < r.length; d++) {
    const f = r[d], _ = [];
    for (let m in f) {
      const w = f[m];
      _.push(w);
    }
    t.push(_.join("	"));
  }
  const l = s.join("	") + `
` + t.join(`
`);
  navigator.clipboard.writeText(l);
}
function Dr(u) {
  if (u === null)
    return null;
  const r = [];
  for (let c = 0; c < u.length; c++)
    isNaN(parseInt(u.charAt(c))) || r.push(u.charAt(c));
  const t = r.join("");
  return t === "" ? null : t;
}
function zn(u, r) {
  if (u === null || u.trim().length === 0)
    return null;
  let t = Dr(u);
  if (t === null)
    return null;
  const c = r.charAt(0).toUpperCase() != "R";
  if ((r.charAt(0).toUpperCase() == "L" || r.charAt(0).toUpperCase() == "R") && (r = r.substr(1)), t.length !== Dr(r)?.length)
    return null;
  if (t.length < r.length)
    for (let l = t.length; l < r.length; l++)
      c ? t += "~" : t = "~" + t;
  let s = "";
  if (c) {
    let l = 0;
    for (let d = 0; d < r.length; d++)
      r.charAt(d) == "0" || r.charAt(d) == "9" ? (t.charAt(l) == "~" ? s += r.charAt(d) == "0" ? "0" : " " : s += t.charAt(l), l++) : s += r.charAt(d);
  } else {
    let l = t.length - 1;
    for (let d = r.length - 1; d >= 0; d--)
      r.charAt(d) == "0" || r.charAt(d) == "9" ? (t.charAt(l) == "~" ? s = (r.charAt(d) == "0" ? "0" : " ") + s : s = t.charAt(l) + s, l--) : s = r.charAt(d) + s;
  }
  return s;
}
const M4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, apply: zn, remove: Dr }, Symbol.toStringTag, { value: "Module" }));
var Pn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function is(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
}
var os = { exports: {} };
(function(u) {
  (function(r, t) {
    u.exports = t();
  })(Pn, function() {
    var r = Object.prototype.toString;
    function t(y, F) {
      return y == null ? !1 : Object.prototype.hasOwnProperty.call(y, F);
    }
    function c(y) {
      if (!y || d(y) && y.length === 0)
        return !0;
      if (typeof y != "string") {
        for (var F in y)
          if (t(y, F))
            return !1;
        return !0;
      }
      return !1;
    }
    function s(y) {
      return r.call(y);
    }
    function l(y) {
      return typeof y == "object" && s(y) === "[object Object]";
    }
    var d = Array.isArray || function(y) {
      return r.call(y) === "[object Array]";
    };
    function f(y) {
      return typeof y == "boolean" || s(y) === "[object Boolean]";
    }
    function _(y) {
      var F = parseInt(y);
      return F.toString() === y ? F : y;
    }
    function m(y) {
      y = y || {};
      var F = function(D) {
        return Object.keys(F).reduce(function(S, E) {
          return E === "create" || typeof F[E] == "function" && (S[E] = F[E].bind(F, D)), S;
        }, {});
      }, M;
      y.includeInheritedProps ? M = function() {
        return !0;
      } : M = function(D, S) {
        return typeof S == "number" && Array.isArray(D) || t(D, S);
      };
      function x(D, S) {
        if (M(D, S))
          return D[S];
      }
      var A;
      y.includeInheritedProps ? A = function(D, S) {
        typeof S != "string" && typeof S != "number" && (S = String(S));
        var E = x(D, S);
        if (S === "__proto__" || S === "prototype" || S === "constructor" && typeof E == "function")
          throw new Error("For security reasons, object's magic properties cannot be set");
        return E;
      } : A = function(D, S) {
        return x(D, S);
      };
      function I(D, S, E, O) {
        if (typeof S == "number" && (S = [S]), !S || S.length === 0)
          return D;
        if (typeof S == "string")
          return I(D, S.split(".").map(_), E, O);
        var R = S[0], G = A(D, R);
        return S.length === 1 ? ((G === void 0 || !O) && (D[R] = E), G) : (G === void 0 && (typeof S[1] == "number" ? D[R] = [] : D[R] = {}), I(D[R], S.slice(1), E, O));
      }
      return F.has = function(D, S) {
        if (typeof S == "number" ? S = [S] : typeof S == "string" && (S = S.split(".")), !S || S.length === 0)
          return !!D;
        for (var E = 0; E < S.length; E++) {
          var O = _(S[E]);
          if (typeof O == "number" && d(D) && O < D.length || (y.includeInheritedProps ? O in Object(D) : t(D, O)))
            D = D[O];
          else
            return !1;
        }
        return !0;
      }, F.ensureExists = function(D, S, E) {
        return I(D, S, E, !0);
      }, F.set = function(D, S, E, O) {
        return I(D, S, E, O);
      }, F.insert = function(D, S, E, O) {
        var R = F.get(D, S);
        O = ~~O, d(R) || (R = [], F.set(D, S, R)), R.splice(O, 0, E);
      }, F.empty = function(D, S) {
        if (!c(S) && D != null) {
          var E, O;
          if (E = F.get(D, S)) {
            if (typeof E == "string")
              return F.set(D, S, "");
            if (f(E))
              return F.set(D, S, !1);
            if (typeof E == "number")
              return F.set(D, S, 0);
            if (d(E))
              E.length = 0;
            else if (l(E))
              for (O in E)
                M(E, O) && delete E[O];
            else
              return F.set(D, S, null);
          }
        }
      }, F.push = function(D, S) {
        var E = F.get(D, S);
        d(E) || (E = [], F.set(D, S, E)), E.push.apply(E, Array.prototype.slice.call(arguments, 2));
      }, F.coalesce = function(D, S, E) {
        for (var O, R = 0, G = S.length; R < G; R++)
          if ((O = F.get(D, S[R])) !== void 0)
            return O;
        return E;
      }, F.get = function(D, S, E) {
        if (typeof S == "number" && (S = [S]), !S || S.length === 0)
          return D;
        if (D == null)
          return E;
        if (typeof S == "string")
          return F.get(D, S.split("."), E);
        var O = _(S[0]), R = A(D, O);
        return R === void 0 ? E : S.length === 1 ? R : F.get(D[O], S.slice(1), E);
      }, F.del = function(S, E) {
        if (typeof E == "number" && (E = [E]), S == null || c(E))
          return S;
        if (typeof E == "string")
          return F.del(S, E.split("."));
        var O = _(E[0]);
        if (A(S, O), !M(S, O))
          return S;
        if (E.length === 1)
          d(S) ? S.splice(O, 1) : delete S[O];
        else
          return F.del(S[O], E.slice(1));
        return S;
      }, F;
    }
    var w = m();
    return w.create = m, w.withInheritedProps = m({ includeInheritedProps: !0 }), w;
  });
})(os);
var mu = os.exports;
const F4 = /* @__PURE__ */ is(mu), Hn = /* @__PURE__ */ V({
  __name: "InputBox",
  props: {
    value: null,
    textTransform: { default: () => "none" },
    mini: { type: Boolean, default: () => !1 }
  },
  emits: ["update:value"],
  setup(u, { emit: r }) {
    const t = u, c = oe(t.value);
    yt(() => {
      c.value = d(t.value), r("update:value", c.value);
    }), bn(() => t.value, s);
    function s(f) {
      c.value = d(f), r("update:value", c.value);
    }
    function l() {
      c.value && c.value.toString().trim().length === 0 && (c.value = null, r("update:value", null));
    }
    function d(f) {
      return f == null || f === "" ? null : t.textTransform === "lowercase" ? f.toLocaleLowerCase() : t.textTransform === "uppercase" ? f.toLocaleUpperCase() : f;
    }
    return (f, _) => (N(), le(re(O3), {
      value: c.value,
      "onUpdate:value": _[0] || (_[0] = (m) => c.value = m),
      onInput: s,
      onBlur: l,
      placeholder: "",
      maxlength: 100,
      class: ye(["control", {
        mini: t.mini === !0,
        uppercase: u.textTransform === "uppercase",
        lowercase: u.textTransform === "lowercase"
      }]),
      clearable: ""
    }, null, 8, ["value", "class"]));
  }
}), E0 = /* @__PURE__ */ V({
  __name: "MoneyBox",
  props: {
    format: { default: () => "n2" },
    mini: { type: Boolean, default: () => !1 }
  },
  setup(u) {
    const r = u, t = Rr();
    function c(l) {
      return t.parseNumber(l);
    }
    function s(l) {
      return t.format(l, r.format);
    }
    return (l, d) => (N(), le(re(F0), {
      clearable: "",
      parse: c,
      format: s,
      class: ye(["money-box", { mini: r.mini }]),
      placeholder: "",
      "show-button": !1
    }, {
      prefix: Ce(() => [
        Su(" R$ ")
      ]),
      _: 1
    }, 8, ["class"]));
  }
}), cs = /* @__PURE__ */ V({
  __name: "DecimalBox",
  props: {
    format: { default: () => "n2" },
    mini: { type: Boolean, default: () => !1 }
  },
  setup(u) {
    const r = u, t = Rr();
    function c(l) {
      return t.parseNumber(l);
    }
    function s(l) {
      return t.format(l, r.format);
    }
    return (l, d) => (N(), le(re(F0), {
      clearable: "",
      parse: c,
      format: s,
      class: ye(["decimal-box", { mini: r.mini }]),
      placeholder: "",
      "show-button": !1
    }, null, 8, ["class"]));
  }
}), B0 = /* @__PURE__ */ V({
  __name: "ComboBox",
  props: {
    options: { default: () => [] },
    valueKey: { default: () => 0 },
    textKey: { default: () => 1 },
    mini: { type: Boolean, default: () => !1 }
  },
  setup(u) {
    const r = u, t = De(() => {
      const c = r.valueKey || 0, s = r.textKey || 1;
      return r.options ? (Zl(r.options) ? r.options.value : r.options).map((d) => ({
        value: d[c],
        label: d[s]
      })) : [];
    });
    return (c, s) => (N(), le(re(R3), {
      options: re(t),
      clearable: "",
      size: u.mini ? "small" : "medium",
      class: ye({ mini: r.mini })
    }, {
      default: Ce(() => [
        ge(c.$slots, "default")
      ]),
      _: 3
    }, 8, ["options", "size", "class"]));
  }
}), L0 = /* @__PURE__ */ V({
  __name: "NumberBox",
  props: {
    mini: { type: Boolean, default: () => !1 }
  },
  setup(u) {
    const r = u;
    return (t, c) => (N(), le(re(F0), {
      clearable: "",
      class: ye(["number-box", { mini: r.mini }]),
      placeholder: ""
    }, null, 8, ["class"]));
  }
}), ls = /* @__PURE__ */ V({
  __name: "CheckBox",
  props: {
    mini: { type: Boolean, default: () => !1 }
  },
  setup(u) {
    const r = u;
    return (t, c) => (N(), le(re(B3), {
      class: ye({ mini: r.mini })
    }, {
      default: Ce(() => [
        ge(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
});
var Sr = { exports: {} };
/**
* @license
* Lodash <https://lodash.com/>
* Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
* Released under MIT license <https://lodash.com/license>
* Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
* Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
*/
Sr.exports;
(function(u, r) {
  (function() {
    var t, c = "4.17.21", s = 200, l = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", d = "Expected a function", f = "Invalid `variable` option passed into `_.template`", _ = "__lodash_hash_undefined__", m = 500, w = "__lodash_placeholder__", y = 1, F = 2, M = 4, x = 1, A = 2, I = 1, D = 2, S = 4, E = 8, O = 16, R = 32, G = 64, ue = 128, Le = 256, Te = 512, gn = 30, xn = "...", nn = 800, eu = 16, qu = 1, Ge = 2, qr = 3, tn = 1 / 0, Uu = 9007199254740991, $s = 17976931348623157e292, Dt = 0 / 0, vu = 4294967295, Ps = vu - 1, zs = vu >>> 1, Ns = [
      ["ary", ue],
      ["bind", I],
      ["bindKey", D],
      ["curry", E],
      ["curryRight", O],
      ["flip", Te],
      ["partial", R],
      ["partialRight", G],
      ["rearg", Le]
    ], vn = "[object Arguments]", St = "[object Array]", qs = "[object AsyncFunction]", Gn = "[object Boolean]", Kn = "[object Date]", Us = "[object DOMException]", Mt = "[object Error]", Ft = "[object Function]", G0 = "[object GeneratorFunction]", fu = "[object Map]", Zn = "[object Number]", Hs = "[object Null]", Iu = "[object Object]", K0 = "[object Promise]", Ws = "[object Proxy]", Vn = "[object RegExp]", du = "[object Set]", Yn = "[object String]", It = "[object Symbol]", Gs = "[object Undefined]", Jn = "[object WeakMap]", Ks = "[object WeakSet]", Xn = "[object ArrayBuffer]", yn = "[object DataView]", Ur = "[object Float32Array]", Hr = "[object Float64Array]", Wr = "[object Int8Array]", Gr = "[object Int16Array]", Kr = "[object Int32Array]", Zr = "[object Uint8Array]", Vr = "[object Uint8ClampedArray]", Yr = "[object Uint16Array]", Jr = "[object Uint32Array]", Zs = /\b__p \+= '';/g, Vs = /\b(__p \+=) '' \+/g, Ys = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Z0 = /&(?:amp|lt|gt|quot|#39);/g, V0 = /[&<>"']/g, Js = RegExp(Z0.source), Xs = RegExp(V0.source), Qs = /<%-([\s\S]+?)%>/g, js = /<%([\s\S]+?)%>/g, Y0 = /<%=([\s\S]+?)%>/g, ea = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ua = /^\w*$/, na = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Xr = /[\\^$.*+?()[\]{}|]/g, ta = RegExp(Xr.source), Qr = /^\s+/, ra = /\s/, ia = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, oa = /\{\n\/\* \[wrapped with (.+)\] \*/, ca = /,? & /, la = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, sa = /[()=,{}\[\]\/\s]/, aa = /\\(\\)?/g, fa = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, J0 = /\w*$/, da = /^[-+]0x[0-9a-f]+$/i, ha = /^0b[01]+$/i, pa = /^\[object .+?Constructor\]$/, _a = /^0o[0-7]+$/i, ba = /^(?:0|[1-9]\d*)$/, ma = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Tt = /($^)/, ga = /['\n\r\u2028\u2029\\]/g, Ot = "\\ud800-\\udfff", xa = "\\u0300-\\u036f", va = "\\ufe20-\\ufe2f", ya = "\\u20d0-\\u20ff", X0 = xa + va + ya, Q0 = "\\u2700-\\u27bf", j0 = "a-z\\xdf-\\xf6\\xf8-\\xff", ka = "\\xac\\xb1\\xd7\\xf7", wa = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Ca = "\\u2000-\\u206f", Aa = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", eo = "A-Z\\xc0-\\xd6\\xd8-\\xde", uo = "\\ufe0e\\ufe0f", no = ka + wa + Ca + Aa, jr = "['’]", Ea = "[" + Ot + "]", to = "[" + no + "]", Rt = "[" + X0 + "]", ro = "\\d+", Da = "[" + Q0 + "]", io = "[" + j0 + "]", oo = "[^" + Ot + no + ro + Q0 + j0 + eo + "]", ei = "\\ud83c[\\udffb-\\udfff]", Sa = "(?:" + Rt + "|" + ei + ")", co = "[^" + Ot + "]", ui = "(?:\\ud83c[\\udde6-\\uddff]){2}", ni = "[\\ud800-\\udbff][\\udc00-\\udfff]", kn = "[" + eo + "]", lo = "\\u200d", so = "(?:" + io + "|" + oo + ")", Ma = "(?:" + kn + "|" + oo + ")", ao = "(?:" + jr + "(?:d|ll|m|re|s|t|ve))?", fo = "(?:" + jr + "(?:D|LL|M|RE|S|T|VE))?", ho = Sa + "?", po = "[" + uo + "]?", Fa = "(?:" + lo + "(?:" + [co, ui, ni].join("|") + ")" + po + ho + ")*", Ia = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Ta = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", _o = po + ho + Fa, Oa = "(?:" + [Da, ui, ni].join("|") + ")" + _o, Ra = "(?:" + [co + Rt + "?", Rt, ui, ni, Ea].join("|") + ")", Ba = RegExp(jr, "g"), La = RegExp(Rt, "g"), ti = RegExp(ei + "(?=" + ei + ")|" + Ra + _o, "g"), $a = RegExp([
      kn + "?" + io + "+" + ao + "(?=" + [to, kn, "$"].join("|") + ")",
      Ma + "+" + fo + "(?=" + [to, kn + so, "$"].join("|") + ")",
      kn + "?" + so + "+" + ao,
      kn + "+" + fo,
      Ta,
      Ia,
      ro,
      Oa
    ].join("|"), "g"), Pa = RegExp("[" + lo + Ot + X0 + uo + "]"), za = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Na = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ], qa = -1, pe = {};
    pe[Ur] = pe[Hr] = pe[Wr] = pe[Gr] = pe[Kr] = pe[Zr] = pe[Vr] = pe[Yr] = pe[Jr] = !0, pe[vn] = pe[St] = pe[Xn] = pe[Gn] = pe[yn] = pe[Kn] = pe[Mt] = pe[Ft] = pe[fu] = pe[Zn] = pe[Iu] = pe[Vn] = pe[du] = pe[Yn] = pe[Jn] = !1;
    var de = {};
    de[vn] = de[St] = de[Xn] = de[yn] = de[Gn] = de[Kn] = de[Ur] = de[Hr] = de[Wr] = de[Gr] = de[Kr] = de[fu] = de[Zn] = de[Iu] = de[Vn] = de[du] = de[Yn] = de[It] = de[Zr] = de[Vr] = de[Yr] = de[Jr] = !0, de[Mt] = de[Ft] = de[Jn] = !1;
    var Ua = {
      // Latin-1 Supplement block.
      À: "A",
      Á: "A",
      Â: "A",
      Ã: "A",
      Ä: "A",
      Å: "A",
      à: "a",
      á: "a",
      â: "a",
      ã: "a",
      ä: "a",
      å: "a",
      Ç: "C",
      ç: "c",
      Ð: "D",
      ð: "d",
      È: "E",
      É: "E",
      Ê: "E",
      Ë: "E",
      è: "e",
      é: "e",
      ê: "e",
      ë: "e",
      Ì: "I",
      Í: "I",
      Î: "I",
      Ï: "I",
      ì: "i",
      í: "i",
      î: "i",
      ï: "i",
      Ñ: "N",
      ñ: "n",
      Ò: "O",
      Ó: "O",
      Ô: "O",
      Õ: "O",
      Ö: "O",
      Ø: "O",
      ò: "o",
      ó: "o",
      ô: "o",
      õ: "o",
      ö: "o",
      ø: "o",
      Ù: "U",
      Ú: "U",
      Û: "U",
      Ü: "U",
      ù: "u",
      ú: "u",
      û: "u",
      ü: "u",
      Ý: "Y",
      ý: "y",
      ÿ: "y",
      Æ: "Ae",
      æ: "ae",
      Þ: "Th",
      þ: "th",
      ß: "ss",
      // Latin Extended-A block.
      Ā: "A",
      Ă: "A",
      Ą: "A",
      ā: "a",
      ă: "a",
      ą: "a",
      Ć: "C",
      Ĉ: "C",
      Ċ: "C",
      Č: "C",
      ć: "c",
      ĉ: "c",
      ċ: "c",
      č: "c",
      Ď: "D",
      Đ: "D",
      ď: "d",
      đ: "d",
      Ē: "E",
      Ĕ: "E",
      Ė: "E",
      Ę: "E",
      Ě: "E",
      ē: "e",
      ĕ: "e",
      ė: "e",
      ę: "e",
      ě: "e",
      Ĝ: "G",
      Ğ: "G",
      Ġ: "G",
      Ģ: "G",
      ĝ: "g",
      ğ: "g",
      ġ: "g",
      ģ: "g",
      Ĥ: "H",
      Ħ: "H",
      ĥ: "h",
      ħ: "h",
      Ĩ: "I",
      Ī: "I",
      Ĭ: "I",
      Į: "I",
      İ: "I",
      ĩ: "i",
      ī: "i",
      ĭ: "i",
      į: "i",
      ı: "i",
      Ĵ: "J",
      ĵ: "j",
      Ķ: "K",
      ķ: "k",
      ĸ: "k",
      Ĺ: "L",
      Ļ: "L",
      Ľ: "L",
      Ŀ: "L",
      Ł: "L",
      ĺ: "l",
      ļ: "l",
      ľ: "l",
      ŀ: "l",
      ł: "l",
      Ń: "N",
      Ņ: "N",
      Ň: "N",
      Ŋ: "N",
      ń: "n",
      ņ: "n",
      ň: "n",
      ŋ: "n",
      Ō: "O",
      Ŏ: "O",
      Ő: "O",
      ō: "o",
      ŏ: "o",
      ő: "o",
      Ŕ: "R",
      Ŗ: "R",
      Ř: "R",
      ŕ: "r",
      ŗ: "r",
      ř: "r",
      Ś: "S",
      Ŝ: "S",
      Ş: "S",
      Š: "S",
      ś: "s",
      ŝ: "s",
      ş: "s",
      š: "s",
      Ţ: "T",
      Ť: "T",
      Ŧ: "T",
      ţ: "t",
      ť: "t",
      ŧ: "t",
      Ũ: "U",
      Ū: "U",
      Ŭ: "U",
      Ů: "U",
      Ű: "U",
      Ų: "U",
      ũ: "u",
      ū: "u",
      ŭ: "u",
      ů: "u",
      ű: "u",
      ų: "u",
      Ŵ: "W",
      ŵ: "w",
      Ŷ: "Y",
      ŷ: "y",
      Ÿ: "Y",
      Ź: "Z",
      Ż: "Z",
      Ž: "Z",
      ź: "z",
      ż: "z",
      ž: "z",
      Ĳ: "IJ",
      ĳ: "ij",
      Œ: "Oe",
      œ: "oe",
      ŉ: "'n",
      ſ: "s"
    }, Ha = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, Wa = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, Ga = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, Ka = parseFloat, Za = parseInt, bo = typeof Pn == "object" && Pn && Pn.Object === Object && Pn, Va = typeof self == "object" && self && self.Object === Object && self, Me = bo || Va || Function("return this")(), ri = r && !r.nodeType && r, rn = ri && !0 && u && !u.nodeType && u, mo = rn && rn.exports === ri, ii = mo && bo.process, uu = function() {
      try {
        var k = rn && rn.require && rn.require("util").types;
        return k || ii && ii.binding && ii.binding("util");
      } catch {
      }
    }(), go = uu && uu.isArrayBuffer, xo = uu && uu.isDate, vo = uu && uu.isMap, yo = uu && uu.isRegExp, ko = uu && uu.isSet, wo = uu && uu.isTypedArray;
    function Ke(k, B, T) {
      switch (T.length) {
        case 0:
          return k.call(B);
        case 1:
          return k.call(B, T[0]);
        case 2:
          return k.call(B, T[0], T[1]);
        case 3:
          return k.call(B, T[0], T[1], T[2]);
      }
      return k.apply(B, T);
    }
    function Ya(k, B, T, q) {
      for (var Y = -1, ce = k == null ? 0 : k.length; ++Y < ce; ) {
        var ke = k[Y];
        B(q, ke, T(ke), k);
      }
      return q;
    }
    function nu(k, B) {
      for (var T = -1, q = k == null ? 0 : k.length; ++T < q && B(k[T], T, k) !== !1; )
        ;
      return k;
    }
    function Ja(k, B) {
      for (var T = k == null ? 0 : k.length; T-- && B(k[T], T, k) !== !1; )
        ;
      return k;
    }
    function Co(k, B) {
      for (var T = -1, q = k == null ? 0 : k.length; ++T < q; )
        if (!B(k[T], T, k))
          return !1;
      return !0;
    }
    function Hu(k, B) {
      for (var T = -1, q = k == null ? 0 : k.length, Y = 0, ce = []; ++T < q; ) {
        var ke = k[T];
        B(ke, T, k) && (ce[Y++] = ke);
      }
      return ce;
    }
    function Bt(k, B) {
      var T = k == null ? 0 : k.length;
      return !!T && wn(k, B, 0) > -1;
    }
    function oi(k, B, T) {
      for (var q = -1, Y = k == null ? 0 : k.length; ++q < Y; )
        if (T(B, k[q]))
          return !0;
      return !1;
    }
    function _e(k, B) {
      for (var T = -1, q = k == null ? 0 : k.length, Y = Array(q); ++T < q; )
        Y[T] = B(k[T], T, k);
      return Y;
    }
    function Wu(k, B) {
      for (var T = -1, q = B.length, Y = k.length; ++T < q; )
        k[Y + T] = B[T];
      return k;
    }
    function ci(k, B, T, q) {
      var Y = -1, ce = k == null ? 0 : k.length;
      for (q && ce && (T = k[++Y]); ++Y < ce; )
        T = B(T, k[Y], Y, k);
      return T;
    }
    function Xa(k, B, T, q) {
      var Y = k == null ? 0 : k.length;
      for (q && Y && (T = k[--Y]); Y--; )
        T = B(T, k[Y], Y, k);
      return T;
    }
    function li(k, B) {
      for (var T = -1, q = k == null ? 0 : k.length; ++T < q; )
        if (B(k[T], T, k))
          return !0;
      return !1;
    }
    var Qa = si("length");
    function ja(k) {
      return k.split("");
    }
    function ef(k) {
      return k.match(la) || [];
    }
    function Ao(k, B, T) {
      var q;
      return T(k, function(Y, ce, ke) {
        if (B(Y, ce, ke))
          return q = ce, !1;
      }), q;
    }
    function Lt(k, B, T, q) {
      for (var Y = k.length, ce = T + (q ? 1 : -1); q ? ce-- : ++ce < Y; )
        if (B(k[ce], ce, k))
          return ce;
      return -1;
    }
    function wn(k, B, T) {
      return B === B ? hf(k, B, T) : Lt(k, Eo, T);
    }
    function uf(k, B, T, q) {
      for (var Y = T - 1, ce = k.length; ++Y < ce; )
        if (q(k[Y], B))
          return Y;
      return -1;
    }
    function Eo(k) {
      return k !== k;
    }
    function Do(k, B) {
      var T = k == null ? 0 : k.length;
      return T ? fi(k, B) / T : Dt;
    }
    function si(k) {
      return function(B) {
        return B == null ? t : B[k];
      };
    }
    function ai(k) {
      return function(B) {
        return k == null ? t : k[B];
      };
    }
    function So(k, B, T, q, Y) {
      return Y(k, function(ce, ke, fe) {
        T = q ? (q = !1, ce) : B(T, ce, ke, fe);
      }), T;
    }
    function nf(k, B) {
      var T = k.length;
      for (k.sort(B); T--; )
        k[T] = k[T].value;
      return k;
    }
    function fi(k, B) {
      for (var T, q = -1, Y = k.length; ++q < Y; ) {
        var ce = B(k[q]);
        ce !== t && (T = T === t ? ce : T + ce);
      }
      return T;
    }
    function di(k, B) {
      for (var T = -1, q = Array(k); ++T < k; )
        q[T] = B(T);
      return q;
    }
    function tf(k, B) {
      return _e(B, function(T) {
        return [T, k[T]];
      });
    }
    function Mo(k) {
      return k && k.slice(0, Oo(k) + 1).replace(Qr, "");
    }
    function Ze(k) {
      return function(B) {
        return k(B);
      };
    }
    function hi(k, B) {
      return _e(B, function(T) {
        return k[T];
      });
    }
    function Qn(k, B) {
      return k.has(B);
    }
    function Fo(k, B) {
      for (var T = -1, q = k.length; ++T < q && wn(B, k[T], 0) > -1; )
        ;
      return T;
    }
    function Io(k, B) {
      for (var T = k.length; T-- && wn(B, k[T], 0) > -1; )
        ;
      return T;
    }
    function rf(k, B) {
      for (var T = k.length, q = 0; T--; )
        k[T] === B && ++q;
      return q;
    }
    var of = ai(Ua), cf = ai(Ha);
    function lf(k) {
      return "\\" + Ga[k];
    }
    function sf(k, B) {
      return k == null ? t : k[B];
    }
    function Cn(k) {
      return Pa.test(k);
    }
    function af(k) {
      return za.test(k);
    }
    function ff(k) {
      for (var B, T = []; !(B = k.next()).done; )
        T.push(B.value);
      return T;
    }
    function pi(k) {
      var B = -1, T = Array(k.size);
      return k.forEach(function(q, Y) {
        T[++B] = [Y, q];
      }), T;
    }
    function To(k, B) {
      return function(T) {
        return k(B(T));
      };
    }
    function Gu(k, B) {
      for (var T = -1, q = k.length, Y = 0, ce = []; ++T < q; ) {
        var ke = k[T];
        (ke === B || ke === w) && (k[T] = w, ce[Y++] = T);
      }
      return ce;
    }
    function $t(k) {
      var B = -1, T = Array(k.size);
      return k.forEach(function(q) {
        T[++B] = q;
      }), T;
    }
    function df(k) {
      var B = -1, T = Array(k.size);
      return k.forEach(function(q) {
        T[++B] = [q, q];
      }), T;
    }
    function hf(k, B, T) {
      for (var q = T - 1, Y = k.length; ++q < Y; )
        if (k[q] === B)
          return q;
      return -1;
    }
    function pf(k, B, T) {
      for (var q = T + 1; q--; )
        if (k[q] === B)
          return q;
      return q;
    }
    function An(k) {
      return Cn(k) ? bf(k) : Qa(k);
    }
    function hu(k) {
      return Cn(k) ? mf(k) : ja(k);
    }
    function Oo(k) {
      for (var B = k.length; B-- && ra.test(k.charAt(B)); )
        ;
      return B;
    }
    var _f = ai(Wa);
    function bf(k) {
      for (var B = ti.lastIndex = 0; ti.test(k); )
        ++B;
      return B;
    }
    function mf(k) {
      return k.match(ti) || [];
    }
    function gf(k) {
      return k.match($a) || [];
    }
    var xf = function k(B) {
      B = B == null ? Me : En.defaults(Me.Object(), B, En.pick(Me, Na));
      var T = B.Array, q = B.Date, Y = B.Error, ce = B.Function, ke = B.Math, fe = B.Object, _i = B.RegExp, vf = B.String, tu = B.TypeError, Pt = T.prototype, yf = ce.prototype, Dn = fe.prototype, zt = B["__core-js_shared__"], Nt = yf.toString, ae = Dn.hasOwnProperty, kf = 0, Ro = function() {
        var e = /[^.]+$/.exec(zt && zt.keys && zt.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : "";
      }(), qt = Dn.toString, wf = Nt.call(fe), Cf = Me._, Af = _i(
        "^" + Nt.call(ae).replace(Xr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Ut = mo ? B.Buffer : t, Ku = B.Symbol, Ht = B.Uint8Array, Bo = Ut ? Ut.allocUnsafe : t, Wt = To(fe.getPrototypeOf, fe), Lo = fe.create, $o = Dn.propertyIsEnumerable, Gt = Pt.splice, Po = Ku ? Ku.isConcatSpreadable : t, jn = Ku ? Ku.iterator : t, on = Ku ? Ku.toStringTag : t, Kt = function() {
        try {
          var e = fn(fe, "defineProperty");
          return e({}, "", {}), e;
        } catch {
        }
      }(), Ef = B.clearTimeout !== Me.clearTimeout && B.clearTimeout, Df = q && q.now !== Me.Date.now && q.now, Sf = B.setTimeout !== Me.setTimeout && B.setTimeout, Zt = ke.ceil, Vt = ke.floor, bi = fe.getOwnPropertySymbols, Mf = Ut ? Ut.isBuffer : t, zo = B.isFinite, Ff = Pt.join, If = To(fe.keys, fe), we = ke.max, Oe = ke.min, Tf = q.now, Of = B.parseInt, No = ke.random, Rf = Pt.reverse, mi = fn(B, "DataView"), et = fn(B, "Map"), gi = fn(B, "Promise"), Sn = fn(B, "Set"), ut = fn(B, "WeakMap"), nt = fn(fe, "create"), Yt = ut && new ut(), Mn = {}, Bf = dn(mi), Lf = dn(et), $f = dn(gi), Pf = dn(Sn), zf = dn(ut), Jt = Ku ? Ku.prototype : t, tt = Jt ? Jt.valueOf : t, qo = Jt ? Jt.toString : t;
      function p(e) {
        if (me(e) && !J(e) && !(e instanceof te)) {
          if (e instanceof ru)
            return e;
          if (ae.call(e, "__wrapped__"))
            return Uc(e);
        }
        return new ru(e);
      }
      var Fn = function() {
        function e() {
        }
        return function(n) {
          if (!be(n))
            return {};
          if (Lo)
            return Lo(n);
          e.prototype = n;
          var o = new e();
          return e.prototype = t, o;
        };
      }();
      function Xt() {
      }
      function ru(e, n) {
        this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!n, this.__index__ = 0, this.__values__ = t;
      }
      p.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: Qs,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: js,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: Y0,
        /**
         * Used to reference the data object in the template text.
         *
         * @memberOf _.templateSettings
         * @type {string}
         */
        variable: "",
        /**
         * Used to import variables into the compiled template.
         *
         * @memberOf _.templateSettings
         * @type {Object}
         */
        imports: {
          /**
           * A reference to the `lodash` function.
           *
           * @memberOf _.templateSettings.imports
           * @type {Function}
           */
          _: p
        }
      }, p.prototype = Xt.prototype, p.prototype.constructor = p, ru.prototype = Fn(Xt.prototype), ru.prototype.constructor = ru;
      function te(e) {
        this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = vu, this.__views__ = [];
      }
      function Nf() {
        var e = new te(this.__wrapped__);
        return e.__actions__ = Ne(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = Ne(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = Ne(this.__views__), e;
      }
      function qf() {
        if (this.__filtered__) {
          var e = new te(this);
          e.__dir__ = -1, e.__filtered__ = !0;
        } else
          e = this.clone(), e.__dir__ *= -1;
        return e;
      }
      function Uf() {
        var e = this.__wrapped__.value(), n = this.__dir__, o = J(e), a = n < 0, h = o ? e.length : 0, b = ed(0, h, this.__views__), g = b.start, v = b.end, C = v - g, L = a ? v : g - 1, $ = this.__iteratees__, P = $.length, z = 0, H = Oe(C, this.__takeCount__);
        if (!o || !a && h == C && H == C)
          return fc(e, this.__actions__);
        var K = [];
        e:
          for (; C-- && z < H; ) {
            L += n;
            for (var Q = -1, Z = e[L]; ++Q < P; ) {
              var ne = $[Q], ie = ne.iteratee, Je = ne.type, ze = ie(Z);
              if (Je == Ge)
                Z = ze;
              else if (!ze) {
                if (Je == qu)
                  continue e;
                break e;
              }
            }
            K[z++] = Z;
          }
        return K;
      }
      te.prototype = Fn(Xt.prototype), te.prototype.constructor = te;
      function cn(e) {
        var n = -1, o = e == null ? 0 : e.length;
        for (this.clear(); ++n < o; ) {
          var a = e[n];
          this.set(a[0], a[1]);
        }
      }
      function Hf() {
        this.__data__ = nt ? nt(null) : {}, this.size = 0;
      }
      function Wf(e) {
        var n = this.has(e) && delete this.__data__[e];
        return this.size -= n ? 1 : 0, n;
      }
      function Gf(e) {
        var n = this.__data__;
        if (nt) {
          var o = n[e];
          return o === _ ? t : o;
        }
        return ae.call(n, e) ? n[e] : t;
      }
      function Kf(e) {
        var n = this.__data__;
        return nt ? n[e] !== t : ae.call(n, e);
      }
      function Zf(e, n) {
        var o = this.__data__;
        return this.size += this.has(e) ? 0 : 1, o[e] = nt && n === t ? _ : n, this;
      }
      cn.prototype.clear = Hf, cn.prototype.delete = Wf, cn.prototype.get = Gf, cn.prototype.has = Kf, cn.prototype.set = Zf;
      function Tu(e) {
        var n = -1, o = e == null ? 0 : e.length;
        for (this.clear(); ++n < o; ) {
          var a = e[n];
          this.set(a[0], a[1]);
        }
      }
      function Vf() {
        this.__data__ = [], this.size = 0;
      }
      function Yf(e) {
        var n = this.__data__, o = Qt(n, e);
        if (o < 0)
          return !1;
        var a = n.length - 1;
        return o == a ? n.pop() : Gt.call(n, o, 1), --this.size, !0;
      }
      function Jf(e) {
        var n = this.__data__, o = Qt(n, e);
        return o < 0 ? t : n[o][1];
      }
      function Xf(e) {
        return Qt(this.__data__, e) > -1;
      }
      function Qf(e, n) {
        var o = this.__data__, a = Qt(o, e);
        return a < 0 ? (++this.size, o.push([e, n])) : o[a][1] = n, this;
      }
      Tu.prototype.clear = Vf, Tu.prototype.delete = Yf, Tu.prototype.get = Jf, Tu.prototype.has = Xf, Tu.prototype.set = Qf;
      function Ou(e) {
        var n = -1, o = e == null ? 0 : e.length;
        for (this.clear(); ++n < o; ) {
          var a = e[n];
          this.set(a[0], a[1]);
        }
      }
      function jf() {
        this.size = 0, this.__data__ = {
          hash: new cn(),
          map: new (et || Tu)(),
          string: new cn()
        };
      }
      function e1(e) {
        var n = ar(this, e).delete(e);
        return this.size -= n ? 1 : 0, n;
      }
      function u1(e) {
        return ar(this, e).get(e);
      }
      function n1(e) {
        return ar(this, e).has(e);
      }
      function t1(e, n) {
        var o = ar(this, e), a = o.size;
        return o.set(e, n), this.size += o.size == a ? 0 : 1, this;
      }
      Ou.prototype.clear = jf, Ou.prototype.delete = e1, Ou.prototype.get = u1, Ou.prototype.has = n1, Ou.prototype.set = t1;
      function ln(e) {
        var n = -1, o = e == null ? 0 : e.length;
        for (this.__data__ = new Ou(); ++n < o; )
          this.add(e[n]);
      }
      function r1(e) {
        return this.__data__.set(e, _), this;
      }
      function i1(e) {
        return this.__data__.has(e);
      }
      ln.prototype.add = ln.prototype.push = r1, ln.prototype.has = i1;
      function pu(e) {
        var n = this.__data__ = new Tu(e);
        this.size = n.size;
      }
      function o1() {
        this.__data__ = new Tu(), this.size = 0;
      }
      function c1(e) {
        var n = this.__data__, o = n.delete(e);
        return this.size = n.size, o;
      }
      function l1(e) {
        return this.__data__.get(e);
      }
      function s1(e) {
        return this.__data__.has(e);
      }
      function a1(e, n) {
        var o = this.__data__;
        if (o instanceof Tu) {
          var a = o.__data__;
          if (!et || a.length < s - 1)
            return a.push([e, n]), this.size = ++o.size, this;
          o = this.__data__ = new Ou(a);
        }
        return o.set(e, n), this.size = o.size, this;
      }
      pu.prototype.clear = o1, pu.prototype.delete = c1, pu.prototype.get = l1, pu.prototype.has = s1, pu.prototype.set = a1;
      function Uo(e, n) {
        var o = J(e), a = !o && hn(e), h = !o && !a && Xu(e), b = !o && !a && !h && Rn(e), g = o || a || h || b, v = g ? di(e.length, vf) : [], C = v.length;
        for (var L in e)
          (n || ae.call(e, L)) && !(g && // Safari 9 has enumerable `arguments.length` in strict mode.
          (L == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          h && (L == "offset" || L == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          b && (L == "buffer" || L == "byteLength" || L == "byteOffset") || // Skip index properties.
          $u(L, C))) && v.push(L);
        return v;
      }
      function Ho(e) {
        var n = e.length;
        return n ? e[Mi(0, n - 1)] : t;
      }
      function f1(e, n) {
        return fr(Ne(e), sn(n, 0, e.length));
      }
      function d1(e) {
        return fr(Ne(e));
      }
      function xi(e, n, o) {
        (o !== t && !_u(e[n], o) || o === t && !(n in e)) && Ru(e, n, o);
      }
      function rt(e, n, o) {
        var a = e[n];
        (!(ae.call(e, n) && _u(a, o)) || o === t && !(n in e)) && Ru(e, n, o);
      }
      function Qt(e, n) {
        for (var o = e.length; o--; )
          if (_u(e[o][0], n))
            return o;
        return -1;
      }
      function h1(e, n, o, a) {
        return Zu(e, function(h, b, g) {
          n(a, h, o(h), g);
        }), a;
      }
      function Wo(e, n) {
        return e && ku(n, Ae(n), e);
      }
      function p1(e, n) {
        return e && ku(n, Ue(n), e);
      }
      function Ru(e, n, o) {
        n == "__proto__" && Kt ? Kt(e, n, {
          configurable: !0,
          enumerable: !0,
          value: o,
          writable: !0
        }) : e[n] = o;
      }
      function vi(e, n) {
        for (var o = -1, a = n.length, h = T(a), b = e == null; ++o < a; )
          h[o] = b ? t : e0(e, n[o]);
        return h;
      }
      function sn(e, n, o) {
        return e === e && (o !== t && (e = e <= o ? e : o), n !== t && (e = e >= n ? e : n)), e;
      }
      function iu(e, n, o, a, h, b) {
        var g, v = n & y, C = n & F, L = n & M;
        if (o && (g = h ? o(e, a, h, b) : o(e)), g !== t)
          return g;
        if (!be(e))
          return e;
        var $ = J(e);
        if ($) {
          if (g = nd(e), !v)
            return Ne(e, g);
        } else {
          var P = Re(e), z = P == Ft || P == G0;
          if (Xu(e))
            return pc(e, v);
          if (P == Iu || P == vn || z && !h) {
            if (g = C || z ? {} : Oc(e), !v)
              return C ? G1(e, p1(g, e)) : W1(e, Wo(g, e));
          } else {
            if (!de[P])
              return h ? e : {};
            g = td(e, P, v);
          }
        }
        b || (b = new pu());
        var H = b.get(e);
        if (H)
          return H;
        b.set(e, g), ll(e) ? e.forEach(function(Z) {
          g.add(iu(Z, n, o, Z, e, b));
        }) : ol(e) && e.forEach(function(Z, ne) {
          g.set(ne, iu(Z, n, o, ne, e, b));
        });
        var K = L ? C ? Ni : zi : C ? Ue : Ae, Q = $ ? t : K(e);
        return nu(Q || e, function(Z, ne) {
          Q && (ne = Z, Z = e[ne]), rt(g, ne, iu(Z, n, o, ne, e, b));
        }), g;
      }
      function _1(e) {
        var n = Ae(e);
        return function(o) {
          return Go(o, e, n);
        };
      }
      function Go(e, n, o) {
        var a = o.length;
        if (e == null)
          return !a;
        for (e = fe(e); a--; ) {
          var h = o[a], b = n[h], g = e[h];
          if (g === t && !(h in e) || !b(g))
            return !1;
        }
        return !0;
      }
      function Ko(e, n, o) {
        if (typeof e != "function")
          throw new tu(d);
        return ft(function() {
          e.apply(t, o);
        }, n);
      }
      function it(e, n, o, a) {
        var h = -1, b = Bt, g = !0, v = e.length, C = [], L = n.length;
        if (!v)
          return C;
        o && (n = _e(n, Ze(o))), a ? (b = oi, g = !1) : n.length >= s && (b = Qn, g = !1, n = new ln(n));
        e:
          for (; ++h < v; ) {
            var $ = e[h], P = o == null ? $ : o($);
            if ($ = a || $ !== 0 ? $ : 0, g && P === P) {
              for (var z = L; z--; )
                if (n[z] === P)
                  continue e;
              C.push($);
            } else
              b(n, P, a) || C.push($);
          }
        return C;
      }
      var Zu = xc(yu), Zo = xc(ki, !0);
      function b1(e, n) {
        var o = !0;
        return Zu(e, function(a, h, b) {
          return o = !!n(a, h, b), o;
        }), o;
      }
      function jt(e, n, o) {
        for (var a = -1, h = e.length; ++a < h; ) {
          var b = e[a], g = n(b);
          if (g != null && (v === t ? g === g && !Ye(g) : o(g, v)))
            var v = g, C = b;
        }
        return C;
      }
      function m1(e, n, o, a) {
        var h = e.length;
        for (o = X(o), o < 0 && (o = -o > h ? 0 : h + o), a = a === t || a > h ? h : X(a), a < 0 && (a += h), a = o > a ? 0 : al(a); o < a; )
          e[o++] = n;
        return e;
      }
      function Vo(e, n) {
        var o = [];
        return Zu(e, function(a, h, b) {
          n(a, h, b) && o.push(a);
        }), o;
      }
      function Fe(e, n, o, a, h) {
        var b = -1, g = e.length;
        for (o || (o = id), h || (h = []); ++b < g; ) {
          var v = e[b];
          n > 0 && o(v) ? n > 1 ? Fe(v, n - 1, o, a, h) : Wu(h, v) : a || (h[h.length] = v);
        }
        return h;
      }
      var yi = vc(), Yo = vc(!0);
      function yu(e, n) {
        return e && yi(e, n, Ae);
      }
      function ki(e, n) {
        return e && Yo(e, n, Ae);
      }
      function er(e, n) {
        return Hu(n, function(o) {
          return Pu(e[o]);
        });
      }
      function an(e, n) {
        n = Yu(n, e);
        for (var o = 0, a = n.length; e != null && o < a; )
          e = e[wu(n[o++])];
        return o && o == a ? e : t;
      }
      function Jo(e, n, o) {
        var a = n(e);
        return J(e) ? a : Wu(a, o(e));
      }
      function $e(e) {
        return e == null ? e === t ? Gs : Hs : on && on in fe(e) ? j1(e) : dd(e);
      }
      function wi(e, n) {
        return e > n;
      }
      function g1(e, n) {
        return e != null && ae.call(e, n);
      }
      function x1(e, n) {
        return e != null && n in fe(e);
      }
      function v1(e, n, o) {
        return e >= Oe(n, o) && e < we(n, o);
      }
      function Ci(e, n, o) {
        for (var a = o ? oi : Bt, h = e[0].length, b = e.length, g = b, v = T(b), C = 1 / 0, L = []; g--; ) {
          var $ = e[g];
          g && n && ($ = _e($, Ze(n))), C = Oe($.length, C), v[g] = !o && (n || h >= 120 && $.length >= 120) ? new ln(g && $) : t;
        }
        $ = e[0];
        var P = -1, z = v[0];
        e:
          for (; ++P < h && L.length < C; ) {
            var H = $[P], K = n ? n(H) : H;
            if (H = o || H !== 0 ? H : 0, !(z ? Qn(z, K) : a(L, K, o))) {
              for (g = b; --g; ) {
                var Q = v[g];
                if (!(Q ? Qn(Q, K) : a(e[g], K, o)))
                  continue e;
              }
              z && z.push(K), L.push(H);
            }
          }
        return L;
      }
      function y1(e, n, o, a) {
        return yu(e, function(h, b, g) {
          n(a, o(h), b, g);
        }), a;
      }
      function ot(e, n, o) {
        n = Yu(n, e), e = $c(e, n);
        var a = e == null ? e : e[wu(cu(n))];
        return a == null ? t : Ke(a, e, o);
      }
      function Xo(e) {
        return me(e) && $e(e) == vn;
      }
      function k1(e) {
        return me(e) && $e(e) == Xn;
      }
      function w1(e) {
        return me(e) && $e(e) == Kn;
      }
      function ct(e, n, o, a, h) {
        return e === n ? !0 : e == null || n == null || !me(e) && !me(n) ? e !== e && n !== n : C1(e, n, o, a, ct, h);
      }
      function C1(e, n, o, a, h, b) {
        var g = J(e), v = J(n), C = g ? St : Re(e), L = v ? St : Re(n);
        C = C == vn ? Iu : C, L = L == vn ? Iu : L;
        var $ = C == Iu, P = L == Iu, z = C == L;
        if (z && Xu(e)) {
          if (!Xu(n))
            return !1;
          g = !0, $ = !1;
        }
        if (z && !$)
          return b || (b = new pu()), g || Rn(e) ? Fc(e, n, o, a, h, b) : X1(e, n, C, o, a, h, b);
        if (!(o & x)) {
          var H = $ && ae.call(e, "__wrapped__"), K = P && ae.call(n, "__wrapped__");
          if (H || K) {
            var Q = H ? e.value() : e, Z = K ? n.value() : n;
            return b || (b = new pu()), h(Q, Z, o, a, b);
          }
        }
        return z ? (b || (b = new pu()), Q1(e, n, o, a, h, b)) : !1;
      }
      function A1(e) {
        return me(e) && Re(e) == fu;
      }
      function Ai(e, n, o, a) {
        var h = o.length, b = h, g = !a;
        if (e == null)
          return !b;
        for (e = fe(e); h--; ) {
          var v = o[h];
          if (g && v[2] ? v[1] !== e[v[0]] : !(v[0] in e))
            return !1;
        }
        for (; ++h < b; ) {
          v = o[h];
          var C = v[0], L = e[C], $ = v[1];
          if (g && v[2]) {
            if (L === t && !(C in e))
              return !1;
          } else {
            var P = new pu();
            if (a)
              var z = a(L, $, C, e, n, P);
            if (!(z === t ? ct($, L, x | A, a, P) : z))
              return !1;
          }
        }
        return !0;
      }
      function Qo(e) {
        if (!be(e) || cd(e))
          return !1;
        var n = Pu(e) ? Af : pa;
        return n.test(dn(e));
      }
      function E1(e) {
        return me(e) && $e(e) == Vn;
      }
      function D1(e) {
        return me(e) && Re(e) == du;
      }
      function S1(e) {
        return me(e) && mr(e.length) && !!pe[$e(e)];
      }
      function jo(e) {
        return typeof e == "function" ? e : e == null ? He : typeof e == "object" ? J(e) ? nc(e[0], e[1]) : uc(e) : yl(e);
      }
      function Ei(e) {
        if (!at(e))
          return If(e);
        var n = [];
        for (var o in fe(e))
          ae.call(e, o) && o != "constructor" && n.push(o);
        return n;
      }
      function M1(e) {
        if (!be(e))
          return fd(e);
        var n = at(e), o = [];
        for (var a in e)
          a == "constructor" && (n || !ae.call(e, a)) || o.push(a);
        return o;
      }
      function Di(e, n) {
        return e < n;
      }
      function ec(e, n) {
        var o = -1, a = qe(e) ? T(e.length) : [];
        return Zu(e, function(h, b, g) {
          a[++o] = n(h, b, g);
        }), a;
      }
      function uc(e) {
        var n = Ui(e);
        return n.length == 1 && n[0][2] ? Bc(n[0][0], n[0][1]) : function(o) {
          return o === e || Ai(o, e, n);
        };
      }
      function nc(e, n) {
        return Wi(e) && Rc(n) ? Bc(wu(e), n) : function(o) {
          var a = e0(o, e);
          return a === t && a === n ? u0(o, e) : ct(n, a, x | A);
        };
      }
      function ur(e, n, o, a, h) {
        e !== n && yi(n, function(b, g) {
          if (h || (h = new pu()), be(b))
            F1(e, n, g, o, ur, a, h);
          else {
            var v = a ? a(Ki(e, g), b, g + "", e, n, h) : t;
            v === t && (v = b), xi(e, g, v);
          }
        }, Ue);
      }
      function F1(e, n, o, a, h, b, g) {
        var v = Ki(e, o), C = Ki(n, o), L = g.get(C);
        if (L) {
          xi(e, o, L);
          return;
        }
        var $ = b ? b(v, C, o + "", e, n, g) : t, P = $ === t;
        if (P) {
          var z = J(C), H = !z && Xu(C), K = !z && !H && Rn(C);
          $ = C, z || H || K ? J(v) ? $ = v : xe(v) ? $ = Ne(v) : H ? (P = !1, $ = pc(C, !0)) : K ? (P = !1, $ = _c(C, !0)) : $ = [] : dt(C) || hn(C) ? ($ = v, hn(v) ? $ = fl(v) : (!be(v) || Pu(v)) && ($ = Oc(C))) : P = !1;
        }
        P && (g.set(C, $), h($, C, a, b, g), g.delete(C)), xi(e, o, $);
      }
      function tc(e, n) {
        var o = e.length;
        if (o)
          return n += n < 0 ? o : 0, $u(n, o) ? e[n] : t;
      }
      function rc(e, n, o) {
        n.length ? n = _e(n, function(b) {
          return J(b) ? function(g) {
            return an(g, b.length === 1 ? b[0] : b);
          } : b;
        }) : n = [He];
        var a = -1;
        n = _e(n, Ze(W()));
        var h = ec(e, function(b, g, v) {
          var C = _e(n, function(L) {
            return L(b);
          });
          return { criteria: C, index: ++a, value: b };
        });
        return nf(h, function(b, g) {
          return H1(b, g, o);
        });
      }
      function I1(e, n) {
        return ic(e, n, function(o, a) {
          return u0(e, a);
        });
      }
      function ic(e, n, o) {
        for (var a = -1, h = n.length, b = {}; ++a < h; ) {
          var g = n[a], v = an(e, g);
          o(v, g) && lt(b, Yu(g, e), v);
        }
        return b;
      }
      function T1(e) {
        return function(n) {
          return an(n, e);
        };
      }
      function Si(e, n, o, a) {
        var h = a ? uf : wn, b = -1, g = n.length, v = e;
        for (e === n && (n = Ne(n)), o && (v = _e(e, Ze(o))); ++b < g; )
          for (var C = 0, L = n[b], $ = o ? o(L) : L; (C = h(v, $, C, a)) > -1; )
            v !== e && Gt.call(v, C, 1), Gt.call(e, C, 1);
        return e;
      }
      function oc(e, n) {
        for (var o = e ? n.length : 0, a = o - 1; o--; ) {
          var h = n[o];
          if (o == a || h !== b) {
            var b = h;
            $u(h) ? Gt.call(e, h, 1) : Ti(e, h);
          }
        }
        return e;
      }
      function Mi(e, n) {
        return e + Vt(No() * (n - e + 1));
      }
      function O1(e, n, o, a) {
        for (var h = -1, b = we(Zt((n - e) / (o || 1)), 0), g = T(b); b--; )
          g[a ? b : ++h] = e, e += o;
        return g;
      }
      function Fi(e, n) {
        var o = "";
        if (!e || n < 1 || n > Uu)
          return o;
        do
          n % 2 && (o += e), n = Vt(n / 2), n && (e += e);
        while (n);
        return o;
      }
      function ee(e, n) {
        return Zi(Lc(e, n, He), e + "");
      }
      function R1(e) {
        return Ho(Bn(e));
      }
      function B1(e, n) {
        var o = Bn(e);
        return fr(o, sn(n, 0, o.length));
      }
      function lt(e, n, o, a) {
        if (!be(e))
          return e;
        n = Yu(n, e);
        for (var h = -1, b = n.length, g = b - 1, v = e; v != null && ++h < b; ) {
          var C = wu(n[h]), L = o;
          if (C === "__proto__" || C === "constructor" || C === "prototype")
            return e;
          if (h != g) {
            var $ = v[C];
            L = a ? a($, C, v) : t, L === t && (L = be($) ? $ : $u(n[h + 1]) ? [] : {});
          }
          rt(v, C, L), v = v[C];
        }
        return e;
      }
      var cc = Yt ? function(e, n) {
        return Yt.set(e, n), e;
      } : He, L1 = Kt ? function(e, n) {
        return Kt(e, "toString", {
          configurable: !0,
          enumerable: !1,
          value: t0(n),
          writable: !0
        });
      } : He;
      function $1(e) {
        return fr(Bn(e));
      }
      function ou(e, n, o) {
        var a = -1, h = e.length;
        n < 0 && (n = -n > h ? 0 : h + n), o = o > h ? h : o, o < 0 && (o += h), h = n > o ? 0 : o - n >>> 0, n >>>= 0;
        for (var b = T(h); ++a < h; )
          b[a] = e[a + n];
        return b;
      }
      function P1(e, n) {
        var o;
        return Zu(e, function(a, h, b) {
          return o = n(a, h, b), !o;
        }), !!o;
      }
      function nr(e, n, o) {
        var a = 0, h = e == null ? a : e.length;
        if (typeof n == "number" && n === n && h <= zs) {
          for (; a < h; ) {
            var b = a + h >>> 1, g = e[b];
            g !== null && !Ye(g) && (o ? g <= n : g < n) ? a = b + 1 : h = b;
          }
          return h;
        }
        return Ii(e, n, He, o);
      }
      function Ii(e, n, o, a) {
        var h = 0, b = e == null ? 0 : e.length;
        if (b === 0)
          return 0;
        n = o(n);
        for (var g = n !== n, v = n === null, C = Ye(n), L = n === t; h < b; ) {
          var $ = Vt((h + b) / 2), P = o(e[$]), z = P !== t, H = P === null, K = P === P, Q = Ye(P);
          if (g)
            var Z = a || K;
          else
            L ? Z = K && (a || z) : v ? Z = K && z && (a || !H) : C ? Z = K && z && !H && (a || !Q) : H || Q ? Z = !1 : Z = a ? P <= n : P < n;
          Z ? h = $ + 1 : b = $;
        }
        return Oe(b, Ps);
      }
      function lc(e, n) {
        for (var o = -1, a = e.length, h = 0, b = []; ++o < a; ) {
          var g = e[o], v = n ? n(g) : g;
          if (!o || !_u(v, C)) {
            var C = v;
            b[h++] = g === 0 ? 0 : g;
          }
        }
        return b;
      }
      function sc(e) {
        return typeof e == "number" ? e : Ye(e) ? Dt : +e;
      }
      function Ve(e) {
        if (typeof e == "string")
          return e;
        if (J(e))
          return _e(e, Ve) + "";
        if (Ye(e))
          return qo ? qo.call(e) : "";
        var n = e + "";
        return n == "0" && 1 / e == -tn ? "-0" : n;
      }
      function Vu(e, n, o) {
        var a = -1, h = Bt, b = e.length, g = !0, v = [], C = v;
        if (o)
          g = !1, h = oi;
        else if (b >= s) {
          var L = n ? null : Y1(e);
          if (L)
            return $t(L);
          g = !1, h = Qn, C = new ln();
        } else
          C = n ? [] : v;
        e:
          for (; ++a < b; ) {
            var $ = e[a], P = n ? n($) : $;
            if ($ = o || $ !== 0 ? $ : 0, g && P === P) {
              for (var z = C.length; z--; )
                if (C[z] === P)
                  continue e;
              n && C.push(P), v.push($);
            } else
              h(C, P, o) || (C !== v && C.push(P), v.push($));
          }
        return v;
      }
      function Ti(e, n) {
        return n = Yu(n, e), e = $c(e, n), e == null || delete e[wu(cu(n))];
      }
      function ac(e, n, o, a) {
        return lt(e, n, o(an(e, n)), a);
      }
      function tr(e, n, o, a) {
        for (var h = e.length, b = a ? h : -1; (a ? b-- : ++b < h) && n(e[b], b, e); )
          ;
        return o ? ou(e, a ? 0 : b, a ? b + 1 : h) : ou(e, a ? b + 1 : 0, a ? h : b);
      }
      function fc(e, n) {
        var o = e;
        return o instanceof te && (o = o.value()), ci(n, function(a, h) {
          return h.func.apply(h.thisArg, Wu([a], h.args));
        }, o);
      }
      function Oi(e, n, o) {
        var a = e.length;
        if (a < 2)
          return a ? Vu(e[0]) : [];
        for (var h = -1, b = T(a); ++h < a; )
          for (var g = e[h], v = -1; ++v < a; )
            v != h && (b[h] = it(b[h] || g, e[v], n, o));
        return Vu(Fe(b, 1), n, o);
      }
      function dc(e, n, o) {
        for (var a = -1, h = e.length, b = n.length, g = {}; ++a < h; ) {
          var v = a < b ? n[a] : t;
          o(g, e[a], v);
        }
        return g;
      }
      function Ri(e) {
        return xe(e) ? e : [];
      }
      function Bi(e) {
        return typeof e == "function" ? e : He;
      }
      function Yu(e, n) {
        return J(e) ? e : Wi(e, n) ? [e] : qc(se(e));
      }
      var z1 = ee;
      function Ju(e, n, o) {
        var a = e.length;
        return o = o === t ? a : o, !n && o >= a ? e : ou(e, n, o);
      }
      var hc = Ef || function(e) {
        return Me.clearTimeout(e);
      };
      function pc(e, n) {
        if (n)
          return e.slice();
        var o = e.length, a = Bo ? Bo(o) : new e.constructor(o);
        return e.copy(a), a;
      }
      function Li(e) {
        var n = new e.constructor(e.byteLength);
        return new Ht(n).set(new Ht(e)), n;
      }
      function N1(e, n) {
        var o = n ? Li(e.buffer) : e.buffer;
        return new e.constructor(o, e.byteOffset, e.byteLength);
      }
      function q1(e) {
        var n = new e.constructor(e.source, J0.exec(e));
        return n.lastIndex = e.lastIndex, n;
      }
      function U1(e) {
        return tt ? fe(tt.call(e)) : {};
      }
      function _c(e, n) {
        var o = n ? Li(e.buffer) : e.buffer;
        return new e.constructor(o, e.byteOffset, e.length);
      }
      function bc(e, n) {
        if (e !== n) {
          var o = e !== t, a = e === null, h = e === e, b = Ye(e), g = n !== t, v = n === null, C = n === n, L = Ye(n);
          if (!v && !L && !b && e > n || b && g && C && !v && !L || a && g && C || !o && C || !h)
            return 1;
          if (!a && !b && !L && e < n || L && o && h && !a && !b || v && o && h || !g && h || !C)
            return -1;
        }
        return 0;
      }
      function H1(e, n, o) {
        for (var a = -1, h = e.criteria, b = n.criteria, g = h.length, v = o.length; ++a < g; ) {
          var C = bc(h[a], b[a]);
          if (C) {
            if (a >= v)
              return C;
            var L = o[a];
            return C * (L == "desc" ? -1 : 1);
          }
        }
        return e.index - n.index;
      }
      function mc(e, n, o, a) {
        for (var h = -1, b = e.length, g = o.length, v = -1, C = n.length, L = we(b - g, 0), $ = T(C + L), P = !a; ++v < C; )
          $[v] = n[v];
        for (; ++h < g; )
          (P || h < b) && ($[o[h]] = e[h]);
        for (; L--; )
          $[v++] = e[h++];
        return $;
      }
      function gc(e, n, o, a) {
        for (var h = -1, b = e.length, g = -1, v = o.length, C = -1, L = n.length, $ = we(b - v, 0), P = T($ + L), z = !a; ++h < $; )
          P[h] = e[h];
        for (var H = h; ++C < L; )
          P[H + C] = n[C];
        for (; ++g < v; )
          (z || h < b) && (P[H + o[g]] = e[h++]);
        return P;
      }
      function Ne(e, n) {
        var o = -1, a = e.length;
        for (n || (n = T(a)); ++o < a; )
          n[o] = e[o];
        return n;
      }
      function ku(e, n, o, a) {
        var h = !o;
        o || (o = {});
        for (var b = -1, g = n.length; ++b < g; ) {
          var v = n[b], C = a ? a(o[v], e[v], v, o, e) : t;
          C === t && (C = e[v]), h ? Ru(o, v, C) : rt(o, v, C);
        }
        return o;
      }
      function W1(e, n) {
        return ku(e, Hi(e), n);
      }
      function G1(e, n) {
        return ku(e, Ic(e), n);
      }
      function rr(e, n) {
        return function(o, a) {
          var h = J(o) ? Ya : h1, b = n ? n() : {};
          return h(o, e, W(a, 2), b);
        };
      }
      function In(e) {
        return ee(function(n, o) {
          var a = -1, h = o.length, b = h > 1 ? o[h - 1] : t, g = h > 2 ? o[2] : t;
          for (b = e.length > 3 && typeof b == "function" ? (h--, b) : t, g && Pe(o[0], o[1], g) && (b = h < 3 ? t : b, h = 1), n = fe(n); ++a < h; ) {
            var v = o[a];
            v && e(n, v, a, b);
          }
          return n;
        });
      }
      function xc(e, n) {
        return function(o, a) {
          if (o == null)
            return o;
          if (!qe(o))
            return e(o, a);
          for (var h = o.length, b = n ? h : -1, g = fe(o); (n ? b-- : ++b < h) && a(g[b], b, g) !== !1; )
            ;
          return o;
        };
      }
      function vc(e) {
        return function(n, o, a) {
          for (var h = -1, b = fe(n), g = a(n), v = g.length; v--; ) {
            var C = g[e ? v : ++h];
            if (o(b[C], C, b) === !1)
              break;
          }
          return n;
        };
      }
      function K1(e, n, o) {
        var a = n & I, h = st(e);
        function b() {
          var g = this && this !== Me && this instanceof b ? h : e;
          return g.apply(a ? o : this, arguments);
        }
        return b;
      }
      function yc(e) {
        return function(n) {
          n = se(n);
          var o = Cn(n) ? hu(n) : t, a = o ? o[0] : n.charAt(0), h = o ? Ju(o, 1).join("") : n.slice(1);
          return a[e]() + h;
        };
      }
      function Tn(e) {
        return function(n) {
          return ci(xl(gl(n).replace(Ba, "")), e, "");
        };
      }
      function st(e) {
        return function() {
          var n = arguments;
          switch (n.length) {
            case 0:
              return new e();
            case 1:
              return new e(n[0]);
            case 2:
              return new e(n[0], n[1]);
            case 3:
              return new e(n[0], n[1], n[2]);
            case 4:
              return new e(n[0], n[1], n[2], n[3]);
            case 5:
              return new e(n[0], n[1], n[2], n[3], n[4]);
            case 6:
              return new e(n[0], n[1], n[2], n[3], n[4], n[5]);
            case 7:
              return new e(n[0], n[1], n[2], n[3], n[4], n[5], n[6]);
          }
          var o = Fn(e.prototype), a = e.apply(o, n);
          return be(a) ? a : o;
        };
      }
      function Z1(e, n, o) {
        var a = st(e);
        function h() {
          for (var b = arguments.length, g = T(b), v = b, C = On(h); v--; )
            g[v] = arguments[v];
          var L = b < 3 && g[0] !== C && g[b - 1] !== C ? [] : Gu(g, C);
          if (b -= L.length, b < o)
            return Ec(
              e,
              n,
              ir,
              h.placeholder,
              t,
              g,
              L,
              t,
              t,
              o - b
            );
          var $ = this && this !== Me && this instanceof h ? a : e;
          return Ke($, this, g);
        }
        return h;
      }
      function kc(e) {
        return function(n, o, a) {
          var h = fe(n);
          if (!qe(n)) {
            var b = W(o, 3);
            n = Ae(n), o = function(v) {
              return b(h[v], v, h);
            };
          }
          var g = e(n, o, a);
          return g > -1 ? h[b ? n[g] : g] : t;
        };
      }
      function wc(e) {
        return Lu(function(n) {
          var o = n.length, a = o, h = ru.prototype.thru;
          for (e && n.reverse(); a--; ) {
            var b = n[a];
            if (typeof b != "function")
              throw new tu(d);
            if (h && !g && sr(b) == "wrapper")
              var g = new ru([], !0);
          }
          for (a = g ? a : o; ++a < o; ) {
            b = n[a];
            var v = sr(b), C = v == "wrapper" ? qi(b) : t;
            C && Gi(C[0]) && C[1] == (ue | E | R | Le) && !C[4].length && C[9] == 1 ? g = g[sr(C[0])].apply(g, C[3]) : g = b.length == 1 && Gi(b) ? g[v]() : g.thru(b);
          }
          return function() {
            var L = arguments, $ = L[0];
            if (g && L.length == 1 && J($))
              return g.plant($).value();
            for (var P = 0, z = o ? n[P].apply(this, L) : $; ++P < o; )
              z = n[P].call(this, z);
            return z;
          };
        });
      }
      function ir(e, n, o, a, h, b, g, v, C, L) {
        var $ = n & ue, P = n & I, z = n & D, H = n & (E | O), K = n & Te, Q = z ? t : st(e);
        function Z() {
          for (var ne = arguments.length, ie = T(ne), Je = ne; Je--; )
            ie[Je] = arguments[Je];
          if (H)
            var ze = On(Z), Xe = rf(ie, ze);
          if (a && (ie = mc(ie, a, h, H)), b && (ie = gc(ie, b, g, H)), ne -= Xe, H && ne < L) {
            var ve = Gu(ie, ze);
            return Ec(
              e,
              n,
              ir,
              Z.placeholder,
              o,
              ie,
              ve,
              v,
              C,
              L - ne
            );
          }
          var bu = P ? o : this, Nu = z ? bu[e] : e;
          return ne = ie.length, v ? ie = hd(ie, v) : K && ne > 1 && ie.reverse(), $ && C < ne && (ie.length = C), this && this !== Me && this instanceof Z && (Nu = Q || st(Nu)), Nu.apply(bu, ie);
        }
        return Z;
      }
      function Cc(e, n) {
        return function(o, a) {
          return y1(o, e, n(a), {});
        };
      }
      function or(e, n) {
        return function(o, a) {
          var h;
          if (o === t && a === t)
            return n;
          if (o !== t && (h = o), a !== t) {
            if (h === t)
              return a;
            typeof o == "string" || typeof a == "string" ? (o = Ve(o), a = Ve(a)) : (o = sc(o), a = sc(a)), h = e(o, a);
          }
          return h;
        };
      }
      function $i(e) {
        return Lu(function(n) {
          return n = _e(n, Ze(W())), ee(function(o) {
            var a = this;
            return e(n, function(h) {
              return Ke(h, a, o);
            });
          });
        });
      }
      function cr(e, n) {
        n = n === t ? " " : Ve(n);
        var o = n.length;
        if (o < 2)
          return o ? Fi(n, e) : n;
        var a = Fi(n, Zt(e / An(n)));
        return Cn(n) ? Ju(hu(a), 0, e).join("") : a.slice(0, e);
      }
      function V1(e, n, o, a) {
        var h = n & I, b = st(e);
        function g() {
          for (var v = -1, C = arguments.length, L = -1, $ = a.length, P = T($ + C), z = this && this !== Me && this instanceof g ? b : e; ++L < $; )
            P[L] = a[L];
          for (; C--; )
            P[L++] = arguments[++v];
          return Ke(z, h ? o : this, P);
        }
        return g;
      }
      function Ac(e) {
        return function(n, o, a) {
          return a && typeof a != "number" && Pe(n, o, a) && (o = a = t), n = zu(n), o === t ? (o = n, n = 0) : o = zu(o), a = a === t ? n < o ? 1 : -1 : zu(a), O1(n, o, a, e);
        };
      }
      function lr(e) {
        return function(n, o) {
          return typeof n == "string" && typeof o == "string" || (n = lu(n), o = lu(o)), e(n, o);
        };
      }
      function Ec(e, n, o, a, h, b, g, v, C, L) {
        var $ = n & E, P = $ ? g : t, z = $ ? t : g, H = $ ? b : t, K = $ ? t : b;
        n |= $ ? R : G, n &= ~($ ? G : R), n & S || (n &= ~(I | D));
        var Q = [
          e,
          n,
          h,
          H,
          P,
          K,
          z,
          v,
          C,
          L
        ], Z = o.apply(t, Q);
        return Gi(e) && Pc(Z, Q), Z.placeholder = a, zc(Z, e, n);
      }
      function Pi(e) {
        var n = ke[e];
        return function(o, a) {
          if (o = lu(o), a = a == null ? 0 : Oe(X(a), 292), a && zo(o)) {
            var h = (se(o) + "e").split("e"), b = n(h[0] + "e" + (+h[1] + a));
            return h = (se(b) + "e").split("e"), +(h[0] + "e" + (+h[1] - a));
          }
          return n(o);
        };
      }
      var Y1 = Sn && 1 / $t(new Sn([, -0]))[1] == tn ? function(e) {
        return new Sn(e);
      } : o0;
      function Dc(e) {
        return function(n) {
          var o = Re(n);
          return o == fu ? pi(n) : o == du ? df(n) : tf(n, e(n));
        };
      }
      function Bu(e, n, o, a, h, b, g, v) {
        var C = n & D;
        if (!C && typeof e != "function")
          throw new tu(d);
        var L = a ? a.length : 0;
        if (L || (n &= ~(R | G), a = h = t), g = g === t ? g : we(X(g), 0), v = v === t ? v : X(v), L -= h ? h.length : 0, n & G) {
          var $ = a, P = h;
          a = h = t;
        }
        var z = C ? t : qi(e), H = [
          e,
          n,
          o,
          a,
          h,
          $,
          P,
          b,
          g,
          v
        ];
        if (z && ad(H, z), e = H[0], n = H[1], o = H[2], a = H[3], h = H[4], v = H[9] = H[9] === t ? C ? 0 : e.length : we(H[9] - L, 0), !v && n & (E | O) && (n &= ~(E | O)), !n || n == I)
          var K = K1(e, n, o);
        else
          n == E || n == O ? K = Z1(e, n, v) : (n == R || n == (I | R)) && !h.length ? K = V1(e, n, o, a) : K = ir.apply(t, H);
        var Q = z ? cc : Pc;
        return zc(Q(K, H), e, n);
      }
      function Sc(e, n, o, a) {
        return e === t || _u(e, Dn[o]) && !ae.call(a, o) ? n : e;
      }
      function Mc(e, n, o, a, h, b) {
        return be(e) && be(n) && (b.set(n, e), ur(e, n, t, Mc, b), b.delete(n)), e;
      }
      function J1(e) {
        return dt(e) ? t : e;
      }
      function Fc(e, n, o, a, h, b) {
        var g = o & x, v = e.length, C = n.length;
        if (v != C && !(g && C > v))
          return !1;
        var L = b.get(e), $ = b.get(n);
        if (L && $)
          return L == n && $ == e;
        var P = -1, z = !0, H = o & A ? new ln() : t;
        for (b.set(e, n), b.set(n, e); ++P < v; ) {
          var K = e[P], Q = n[P];
          if (a)
            var Z = g ? a(Q, K, P, n, e, b) : a(K, Q, P, e, n, b);
          if (Z !== t) {
            if (Z)
              continue;
            z = !1;
            break;
          }
          if (H) {
            if (!li(n, function(ne, ie) {
              if (!Qn(H, ie) && (K === ne || h(K, ne, o, a, b)))
                return H.push(ie);
            })) {
              z = !1;
              break;
            }
          } else if (!(K === Q || h(K, Q, o, a, b))) {
            z = !1;
            break;
          }
        }
        return b.delete(e), b.delete(n), z;
      }
      function X1(e, n, o, a, h, b, g) {
        switch (o) {
          case yn:
            if (e.byteLength != n.byteLength || e.byteOffset != n.byteOffset)
              return !1;
            e = e.buffer, n = n.buffer;
          case Xn:
            return !(e.byteLength != n.byteLength || !b(new Ht(e), new Ht(n)));
          case Gn:
          case Kn:
          case Zn:
            return _u(+e, +n);
          case Mt:
            return e.name == n.name && e.message == n.message;
          case Vn:
          case Yn:
            return e == n + "";
          case fu:
            var v = pi;
          case du:
            var C = a & x;
            if (v || (v = $t), e.size != n.size && !C)
              return !1;
            var L = g.get(e);
            if (L)
              return L == n;
            a |= A, g.set(e, n);
            var $ = Fc(v(e), v(n), a, h, b, g);
            return g.delete(e), $;
          case It:
            if (tt)
              return tt.call(e) == tt.call(n);
        }
        return !1;
      }
      function Q1(e, n, o, a, h, b) {
        var g = o & x, v = zi(e), C = v.length, L = zi(n), $ = L.length;
        if (C != $ && !g)
          return !1;
        for (var P = C; P--; ) {
          var z = v[P];
          if (!(g ? z in n : ae.call(n, z)))
            return !1;
        }
        var H = b.get(e), K = b.get(n);
        if (H && K)
          return H == n && K == e;
        var Q = !0;
        b.set(e, n), b.set(n, e);
        for (var Z = g; ++P < C; ) {
          z = v[P];
          var ne = e[z], ie = n[z];
          if (a)
            var Je = g ? a(ie, ne, z, n, e, b) : a(ne, ie, z, e, n, b);
          if (!(Je === t ? ne === ie || h(ne, ie, o, a, b) : Je)) {
            Q = !1;
            break;
          }
          Z || (Z = z == "constructor");
        }
        if (Q && !Z) {
          var ze = e.constructor, Xe = n.constructor;
          ze != Xe && "constructor" in e && "constructor" in n && !(typeof ze == "function" && ze instanceof ze && typeof Xe == "function" && Xe instanceof Xe) && (Q = !1);
        }
        return b.delete(e), b.delete(n), Q;
      }
      function Lu(e) {
        return Zi(Lc(e, t, Gc), e + "");
      }
      function zi(e) {
        return Jo(e, Ae, Hi);
      }
      function Ni(e) {
        return Jo(e, Ue, Ic);
      }
      var qi = Yt ? function(e) {
        return Yt.get(e);
      } : o0;
      function sr(e) {
        for (var n = e.name + "", o = Mn[n], a = ae.call(Mn, n) ? o.length : 0; a--; ) {
          var h = o[a], b = h.func;
          if (b == null || b == e)
            return h.name;
        }
        return n;
      }
      function On(e) {
        var n = ae.call(p, "placeholder") ? p : e;
        return n.placeholder;
      }
      function W() {
        var e = p.iteratee || r0;
        return e = e === r0 ? jo : e, arguments.length ? e(arguments[0], arguments[1]) : e;
      }
      function ar(e, n) {
        var o = e.__data__;
        return od(n) ? o[typeof n == "string" ? "string" : "hash"] : o.map;
      }
      function Ui(e) {
        for (var n = Ae(e), o = n.length; o--; ) {
          var a = n[o], h = e[a];
          n[o] = [a, h, Rc(h)];
        }
        return n;
      }
      function fn(e, n) {
        var o = sf(e, n);
        return Qo(o) ? o : t;
      }
      function j1(e) {
        var n = ae.call(e, on), o = e[on];
        try {
          e[on] = t;
          var a = !0;
        } catch {
        }
        var h = qt.call(e);
        return a && (n ? e[on] = o : delete e[on]), h;
      }
      var Hi = bi ? function(e) {
        return e == null ? [] : (e = fe(e), Hu(bi(e), function(n) {
          return $o.call(e, n);
        }));
      } : c0, Ic = bi ? function(e) {
        for (var n = []; e; )
          Wu(n, Hi(e)), e = Wt(e);
        return n;
      } : c0, Re = $e;
      (mi && Re(new mi(new ArrayBuffer(1))) != yn || et && Re(new et()) != fu || gi && Re(gi.resolve()) != K0 || Sn && Re(new Sn()) != du || ut && Re(new ut()) != Jn) && (Re = function(e) {
        var n = $e(e), o = n == Iu ? e.constructor : t, a = o ? dn(o) : "";
        if (a)
          switch (a) {
            case Bf:
              return yn;
            case Lf:
              return fu;
            case $f:
              return K0;
            case Pf:
              return du;
            case zf:
              return Jn;
          }
        return n;
      });
      function ed(e, n, o) {
        for (var a = -1, h = o.length; ++a < h; ) {
          var b = o[a], g = b.size;
          switch (b.type) {
            case "drop":
              e += g;
              break;
            case "dropRight":
              n -= g;
              break;
            case "take":
              n = Oe(n, e + g);
              break;
            case "takeRight":
              e = we(e, n - g);
              break;
          }
        }
        return { start: e, end: n };
      }
      function ud(e) {
        var n = e.match(oa);
        return n ? n[1].split(ca) : [];
      }
      function Tc(e, n, o) {
        n = Yu(n, e);
        for (var a = -1, h = n.length, b = !1; ++a < h; ) {
          var g = wu(n[a]);
          if (!(b = e != null && o(e, g)))
            break;
          e = e[g];
        }
        return b || ++a != h ? b : (h = e == null ? 0 : e.length, !!h && mr(h) && $u(g, h) && (J(e) || hn(e)));
      }
      function nd(e) {
        var n = e.length, o = new e.constructor(n);
        return n && typeof e[0] == "string" && ae.call(e, "index") && (o.index = e.index, o.input = e.input), o;
      }
      function Oc(e) {
        return typeof e.constructor == "function" && !at(e) ? Fn(Wt(e)) : {};
      }
      function td(e, n, o) {
        var a = e.constructor;
        switch (n) {
          case Xn:
            return Li(e);
          case Gn:
          case Kn:
            return new a(+e);
          case yn:
            return N1(e, o);
          case Ur:
          case Hr:
          case Wr:
          case Gr:
          case Kr:
          case Zr:
          case Vr:
          case Yr:
          case Jr:
            return _c(e, o);
          case fu:
            return new a();
          case Zn:
          case Yn:
            return new a(e);
          case Vn:
            return q1(e);
          case du:
            return new a();
          case It:
            return U1(e);
        }
      }
      function rd(e, n) {
        var o = n.length;
        if (!o)
          return e;
        var a = o - 1;
        return n[a] = (o > 1 ? "& " : "") + n[a], n = n.join(o > 2 ? ", " : " "), e.replace(ia, `{
/* [wrapped with ` + n + `] */
`);
      }
      function id(e) {
        return J(e) || hn(e) || !!(Po && e && e[Po]);
      }
      function $u(e, n) {
        var o = typeof e;
        return n = n ?? Uu, !!n && (o == "number" || o != "symbol" && ba.test(e)) && e > -1 && e % 1 == 0 && e < n;
      }
      function Pe(e, n, o) {
        if (!be(o))
          return !1;
        var a = typeof n;
        return (a == "number" ? qe(o) && $u(n, o.length) : a == "string" && n in o) ? _u(o[n], e) : !1;
      }
      function Wi(e, n) {
        if (J(e))
          return !1;
        var o = typeof e;
        return o == "number" || o == "symbol" || o == "boolean" || e == null || Ye(e) ? !0 : ua.test(e) || !ea.test(e) || n != null && e in fe(n);
      }
      function od(e) {
        var n = typeof e;
        return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? e !== "__proto__" : e === null;
      }
      function Gi(e) {
        var n = sr(e), o = p[n];
        if (typeof o != "function" || !(n in te.prototype))
          return !1;
        if (e === o)
          return !0;
        var a = qi(o);
        return !!a && e === a[0];
      }
      function cd(e) {
        return !!Ro && Ro in e;
      }
      var ld = zt ? Pu : l0;
      function at(e) {
        var n = e && e.constructor, o = typeof n == "function" && n.prototype || Dn;
        return e === o;
      }
      function Rc(e) {
        return e === e && !be(e);
      }
      function Bc(e, n) {
        return function(o) {
          return o == null ? !1 : o[e] === n && (n !== t || e in fe(o));
        };
      }
      function sd(e) {
        var n = _r(e, function(a) {
          return o.size === m && o.clear(), a;
        }), o = n.cache;
        return n;
      }
      function ad(e, n) {
        var o = e[1], a = n[1], h = o | a, b = h < (I | D | ue), g = a == ue && o == E || a == ue && o == Le && e[7].length <= n[8] || a == (ue | Le) && n[7].length <= n[8] && o == E;
        if (!(b || g))
          return e;
        a & I && (e[2] = n[2], h |= o & I ? 0 : S);
        var v = n[3];
        if (v) {
          var C = e[3];
          e[3] = C ? mc(C, v, n[4]) : v, e[4] = C ? Gu(e[3], w) : n[4];
        }
        return v = n[5], v && (C = e[5], e[5] = C ? gc(C, v, n[6]) : v, e[6] = C ? Gu(e[5], w) : n[6]), v = n[7], v && (e[7] = v), a & ue && (e[8] = e[8] == null ? n[8] : Oe(e[8], n[8])), e[9] == null && (e[9] = n[9]), e[0] = n[0], e[1] = h, e;
      }
      function fd(e) {
        var n = [];
        if (e != null)
          for (var o in fe(e))
            n.push(o);
        return n;
      }
      function dd(e) {
        return qt.call(e);
      }
      function Lc(e, n, o) {
        return n = we(n === t ? e.length - 1 : n, 0), function() {
          for (var a = arguments, h = -1, b = we(a.length - n, 0), g = T(b); ++h < b; )
            g[h] = a[n + h];
          h = -1;
          for (var v = T(n + 1); ++h < n; )
            v[h] = a[h];
          return v[n] = o(g), Ke(e, this, v);
        };
      }
      function $c(e, n) {
        return n.length < 2 ? e : an(e, ou(n, 0, -1));
      }
      function hd(e, n) {
        for (var o = e.length, a = Oe(n.length, o), h = Ne(e); a--; ) {
          var b = n[a];
          e[a] = $u(b, o) ? h[b] : t;
        }
        return e;
      }
      function Ki(e, n) {
        if (!(n === "constructor" && typeof e[n] == "function") && n != "__proto__")
          return e[n];
      }
      var Pc = Nc(cc), ft = Sf || function(e, n) {
        return Me.setTimeout(e, n);
      }, Zi = Nc(L1);
      function zc(e, n, o) {
        var a = n + "";
        return Zi(e, rd(a, pd(ud(a), o)));
      }
      function Nc(e) {
        var n = 0, o = 0;
        return function() {
          var a = Tf(), h = eu - (a - o);
          if (o = a, h > 0) {
            if (++n >= nn)
              return arguments[0];
          } else
            n = 0;
          return e.apply(t, arguments);
        };
      }
      function fr(e, n) {
        var o = -1, a = e.length, h = a - 1;
        for (n = n === t ? a : n; ++o < n; ) {
          var b = Mi(o, h), g = e[b];
          e[b] = e[o], e[o] = g;
        }
        return e.length = n, e;
      }
      var qc = sd(function(e) {
        var n = [];
        return e.charCodeAt(0) === 46 && n.push(""), e.replace(na, function(o, a, h, b) {
          n.push(h ? b.replace(aa, "$1") : a || o);
        }), n;
      });
      function wu(e) {
        if (typeof e == "string" || Ye(e))
          return e;
        var n = e + "";
        return n == "0" && 1 / e == -tn ? "-0" : n;
      }
      function dn(e) {
        if (e != null) {
          try {
            return Nt.call(e);
          } catch {
          }
          try {
            return e + "";
          } catch {
          }
        }
        return "";
      }
      function pd(e, n) {
        return nu(Ns, function(o) {
          var a = "_." + o[0];
          n & o[1] && !Bt(e, a) && e.push(a);
        }), e.sort();
      }
      function Uc(e) {
        if (e instanceof te)
          return e.clone();
        var n = new ru(e.__wrapped__, e.__chain__);
        return n.__actions__ = Ne(e.__actions__), n.__index__ = e.__index__, n.__values__ = e.__values__, n;
      }
      function _d(e, n, o) {
        (o ? Pe(e, n, o) : n === t) ? n = 1 : n = we(X(n), 0);
        var a = e == null ? 0 : e.length;
        if (!a || n < 1)
          return [];
        for (var h = 0, b = 0, g = T(Zt(a / n)); h < a; )
          g[b++] = ou(e, h, h += n);
        return g;
      }
      function bd(e) {
        for (var n = -1, o = e == null ? 0 : e.length, a = 0, h = []; ++n < o; ) {
          var b = e[n];
          b && (h[a++] = b);
        }
        return h;
      }
      function md() {
        var e = arguments.length;
        if (!e)
          return [];
        for (var n = T(e - 1), o = arguments[0], a = e; a--; )
          n[a - 1] = arguments[a];
        return Wu(J(o) ? Ne(o) : [o], Fe(n, 1));
      }
      var gd = ee(function(e, n) {
        return xe(e) ? it(e, Fe(n, 1, xe, !0)) : [];
      }), xd = ee(function(e, n) {
        var o = cu(n);
        return xe(o) && (o = t), xe(e) ? it(e, Fe(n, 1, xe, !0), W(o, 2)) : [];
      }), vd = ee(function(e, n) {
        var o = cu(n);
        return xe(o) && (o = t), xe(e) ? it(e, Fe(n, 1, xe, !0), t, o) : [];
      });
      function yd(e, n, o) {
        var a = e == null ? 0 : e.length;
        return a ? (n = o || n === t ? 1 : X(n), ou(e, n < 0 ? 0 : n, a)) : [];
      }
      function kd(e, n, o) {
        var a = e == null ? 0 : e.length;
        return a ? (n = o || n === t ? 1 : X(n), n = a - n, ou(e, 0, n < 0 ? 0 : n)) : [];
      }
      function wd(e, n) {
        return e && e.length ? tr(e, W(n, 3), !0, !0) : [];
      }
      function Cd(e, n) {
        return e && e.length ? tr(e, W(n, 3), !0) : [];
      }
      function Ad(e, n, o, a) {
        var h = e == null ? 0 : e.length;
        return h ? (o && typeof o != "number" && Pe(e, n, o) && (o = 0, a = h), m1(e, n, o, a)) : [];
      }
      function Hc(e, n, o) {
        var a = e == null ? 0 : e.length;
        if (!a)
          return -1;
        var h = o == null ? 0 : X(o);
        return h < 0 && (h = we(a + h, 0)), Lt(e, W(n, 3), h);
      }
      function Wc(e, n, o) {
        var a = e == null ? 0 : e.length;
        if (!a)
          return -1;
        var h = a - 1;
        return o !== t && (h = X(o), h = o < 0 ? we(a + h, 0) : Oe(h, a - 1)), Lt(e, W(n, 3), h, !0);
      }
      function Gc(e) {
        var n = e == null ? 0 : e.length;
        return n ? Fe(e, 1) : [];
      }
      function Ed(e) {
        var n = e == null ? 0 : e.length;
        return n ? Fe(e, tn) : [];
      }
      function Dd(e, n) {
        var o = e == null ? 0 : e.length;
        return o ? (n = n === t ? 1 : X(n), Fe(e, n)) : [];
      }
      function Sd(e) {
        for (var n = -1, o = e == null ? 0 : e.length, a = {}; ++n < o; ) {
          var h = e[n];
          a[h[0]] = h[1];
        }
        return a;
      }
      function Kc(e) {
        return e && e.length ? e[0] : t;
      }
      function Md(e, n, o) {
        var a = e == null ? 0 : e.length;
        if (!a)
          return -1;
        var h = o == null ? 0 : X(o);
        return h < 0 && (h = we(a + h, 0)), wn(e, n, h);
      }
      function Fd(e) {
        var n = e == null ? 0 : e.length;
        return n ? ou(e, 0, -1) : [];
      }
      var Id = ee(function(e) {
        var n = _e(e, Ri);
        return n.length && n[0] === e[0] ? Ci(n) : [];
      }), Td = ee(function(e) {
        var n = cu(e), o = _e(e, Ri);
        return n === cu(o) ? n = t : o.pop(), o.length && o[0] === e[0] ? Ci(o, W(n, 2)) : [];
      }), Od = ee(function(e) {
        var n = cu(e), o = _e(e, Ri);
        return n = typeof n == "function" ? n : t, n && o.pop(), o.length && o[0] === e[0] ? Ci(o, t, n) : [];
      });
      function Rd(e, n) {
        return e == null ? "" : Ff.call(e, n);
      }
      function cu(e) {
        var n = e == null ? 0 : e.length;
        return n ? e[n - 1] : t;
      }
      function Bd(e, n, o) {
        var a = e == null ? 0 : e.length;
        if (!a)
          return -1;
        var h = a;
        return o !== t && (h = X(o), h = h < 0 ? we(a + h, 0) : Oe(h, a - 1)), n === n ? pf(e, n, h) : Lt(e, Eo, h, !0);
      }
      function Ld(e, n) {
        return e && e.length ? tc(e, X(n)) : t;
      }
      var $d = ee(Zc);
      function Zc(e, n) {
        return e && e.length && n && n.length ? Si(e, n) : e;
      }
      function Pd(e, n, o) {
        return e && e.length && n && n.length ? Si(e, n, W(o, 2)) : e;
      }
      function zd(e, n, o) {
        return e && e.length && n && n.length ? Si(e, n, t, o) : e;
      }
      var Nd = Lu(function(e, n) {
        var o = e == null ? 0 : e.length, a = vi(e, n);
        return oc(e, _e(n, function(h) {
          return $u(h, o) ? +h : h;
        }).sort(bc)), a;
      });
      function qd(e, n) {
        var o = [];
        if (!(e && e.length))
          return o;
        var a = -1, h = [], b = e.length;
        for (n = W(n, 3); ++a < b; ) {
          var g = e[a];
          n(g, a, e) && (o.push(g), h.push(a));
        }
        return oc(e, h), o;
      }
      function Vi(e) {
        return e == null ? e : Rf.call(e);
      }
      function Ud(e, n, o) {
        var a = e == null ? 0 : e.length;
        return a ? (o && typeof o != "number" && Pe(e, n, o) ? (n = 0, o = a) : (n = n == null ? 0 : X(n), o = o === t ? a : X(o)), ou(e, n, o)) : [];
      }
      function Hd(e, n) {
        return nr(e, n);
      }
      function Wd(e, n, o) {
        return Ii(e, n, W(o, 2));
      }
      function Gd(e, n) {
        var o = e == null ? 0 : e.length;
        if (o) {
          var a = nr(e, n);
          if (a < o && _u(e[a], n))
            return a;
        }
        return -1;
      }
      function Kd(e, n) {
        return nr(e, n, !0);
      }
      function Zd(e, n, o) {
        return Ii(e, n, W(o, 2), !0);
      }
      function Vd(e, n) {
        var o = e == null ? 0 : e.length;
        if (o) {
          var a = nr(e, n, !0) - 1;
          if (_u(e[a], n))
            return a;
        }
        return -1;
      }
      function Yd(e) {
        return e && e.length ? lc(e) : [];
      }
      function Jd(e, n) {
        return e && e.length ? lc(e, W(n, 2)) : [];
      }
      function Xd(e) {
        var n = e == null ? 0 : e.length;
        return n ? ou(e, 1, n) : [];
      }
      function Qd(e, n, o) {
        return e && e.length ? (n = o || n === t ? 1 : X(n), ou(e, 0, n < 0 ? 0 : n)) : [];
      }
      function jd(e, n, o) {
        var a = e == null ? 0 : e.length;
        return a ? (n = o || n === t ? 1 : X(n), n = a - n, ou(e, n < 0 ? 0 : n, a)) : [];
      }
      function eh(e, n) {
        return e && e.length ? tr(e, W(n, 3), !1, !0) : [];
      }
      function uh(e, n) {
        return e && e.length ? tr(e, W(n, 3)) : [];
      }
      var nh = ee(function(e) {
        return Vu(Fe(e, 1, xe, !0));
      }), th = ee(function(e) {
        var n = cu(e);
        return xe(n) && (n = t), Vu(Fe(e, 1, xe, !0), W(n, 2));
      }), rh = ee(function(e) {
        var n = cu(e);
        return n = typeof n == "function" ? n : t, Vu(Fe(e, 1, xe, !0), t, n);
      });
      function ih(e) {
        return e && e.length ? Vu(e) : [];
      }
      function oh(e, n) {
        return e && e.length ? Vu(e, W(n, 2)) : [];
      }
      function ch(e, n) {
        return n = typeof n == "function" ? n : t, e && e.length ? Vu(e, t, n) : [];
      }
      function Yi(e) {
        if (!(e && e.length))
          return [];
        var n = 0;
        return e = Hu(e, function(o) {
          if (xe(o))
            return n = we(o.length, n), !0;
        }), di(n, function(o) {
          return _e(e, si(o));
        });
      }
      function Vc(e, n) {
        if (!(e && e.length))
          return [];
        var o = Yi(e);
        return n == null ? o : _e(o, function(a) {
          return Ke(n, t, a);
        });
      }
      var lh = ee(function(e, n) {
        return xe(e) ? it(e, n) : [];
      }), sh = ee(function(e) {
        return Oi(Hu(e, xe));
      }), ah = ee(function(e) {
        var n = cu(e);
        return xe(n) && (n = t), Oi(Hu(e, xe), W(n, 2));
      }), fh = ee(function(e) {
        var n = cu(e);
        return n = typeof n == "function" ? n : t, Oi(Hu(e, xe), t, n);
      }), dh = ee(Yi);
      function hh(e, n) {
        return dc(e || [], n || [], rt);
      }
      function ph(e, n) {
        return dc(e || [], n || [], lt);
      }
      var _h = ee(function(e) {
        var n = e.length, o = n > 1 ? e[n - 1] : t;
        return o = typeof o == "function" ? (e.pop(), o) : t, Vc(e, o);
      });
      function Yc(e) {
        var n = p(e);
        return n.__chain__ = !0, n;
      }
      function bh(e, n) {
        return n(e), e;
      }
      function dr(e, n) {
        return n(e);
      }
      var mh = Lu(function(e) {
        var n = e.length, o = n ? e[0] : 0, a = this.__wrapped__, h = function(b) {
          return vi(b, e);
        };
        return n > 1 || this.__actions__.length || !(a instanceof te) || !$u(o) ? this.thru(h) : (a = a.slice(o, +o + (n ? 1 : 0)), a.__actions__.push({
          func: dr,
          args: [h],
          thisArg: t
        }), new ru(a, this.__chain__).thru(function(b) {
          return n && !b.length && b.push(t), b;
        }));
      });
      function gh() {
        return Yc(this);
      }
      function xh() {
        return new ru(this.value(), this.__chain__);
      }
      function vh() {
        this.__values__ === t && (this.__values__ = sl(this.value()));
        var e = this.__index__ >= this.__values__.length, n = e ? t : this.__values__[this.__index__++];
        return { done: e, value: n };
      }
      function yh() {
        return this;
      }
      function kh(e) {
        for (var n, o = this; o instanceof Xt; ) {
          var a = Uc(o);
          a.__index__ = 0, a.__values__ = t, n ? h.__wrapped__ = a : n = a;
          var h = a;
          o = o.__wrapped__;
        }
        return h.__wrapped__ = e, n;
      }
      function wh() {
        var e = this.__wrapped__;
        if (e instanceof te) {
          var n = e;
          return this.__actions__.length && (n = new te(this)), n = n.reverse(), n.__actions__.push({
            func: dr,
            args: [Vi],
            thisArg: t
          }), new ru(n, this.__chain__);
        }
        return this.thru(Vi);
      }
      function Ch() {
        return fc(this.__wrapped__, this.__actions__);
      }
      var Ah = rr(function(e, n, o) {
        ae.call(e, o) ? ++e[o] : Ru(e, o, 1);
      });
      function Eh(e, n, o) {
        var a = J(e) ? Co : b1;
        return o && Pe(e, n, o) && (n = t), a(e, W(n, 3));
      }
      function Dh(e, n) {
        var o = J(e) ? Hu : Vo;
        return o(e, W(n, 3));
      }
      var Sh = kc(Hc), Mh = kc(Wc);
      function Fh(e, n) {
        return Fe(hr(e, n), 1);
      }
      function Ih(e, n) {
        return Fe(hr(e, n), tn);
      }
      function Th(e, n, o) {
        return o = o === t ? 1 : X(o), Fe(hr(e, n), o);
      }
      function Jc(e, n) {
        var o = J(e) ? nu : Zu;
        return o(e, W(n, 3));
      }
      function Xc(e, n) {
        var o = J(e) ? Ja : Zo;
        return o(e, W(n, 3));
      }
      var Oh = rr(function(e, n, o) {
        ae.call(e, o) ? e[o].push(n) : Ru(e, o, [n]);
      });
      function Rh(e, n, o, a) {
        e = qe(e) ? e : Bn(e), o = o && !a ? X(o) : 0;
        var h = e.length;
        return o < 0 && (o = we(h + o, 0)), gr(e) ? o <= h && e.indexOf(n, o) > -1 : !!h && wn(e, n, o) > -1;
      }
      var Bh = ee(function(e, n, o) {
        var a = -1, h = typeof n == "function", b = qe(e) ? T(e.length) : [];
        return Zu(e, function(g) {
          b[++a] = h ? Ke(n, g, o) : ot(g, n, o);
        }), b;
      }), Lh = rr(function(e, n, o) {
        Ru(e, o, n);
      });
      function hr(e, n) {
        var o = J(e) ? _e : ec;
        return o(e, W(n, 3));
      }
      function $h(e, n, o, a) {
        return e == null ? [] : (J(n) || (n = n == null ? [] : [n]), o = a ? t : o, J(o) || (o = o == null ? [] : [o]), rc(e, n, o));
      }
      var Ph = rr(function(e, n, o) {
        e[o ? 0 : 1].push(n);
      }, function() {
        return [[], []];
      });
      function zh(e, n, o) {
        var a = J(e) ? ci : So, h = arguments.length < 3;
        return a(e, W(n, 4), o, h, Zu);
      }
      function Nh(e, n, o) {
        var a = J(e) ? Xa : So, h = arguments.length < 3;
        return a(e, W(n, 4), o, h, Zo);
      }
      function qh(e, n) {
        var o = J(e) ? Hu : Vo;
        return o(e, br(W(n, 3)));
      }
      function Uh(e) {
        var n = J(e) ? Ho : R1;
        return n(e);
      }
      function Hh(e, n, o) {
        (o ? Pe(e, n, o) : n === t) ? n = 1 : n = X(n);
        var a = J(e) ? f1 : B1;
        return a(e, n);
      }
      function Wh(e) {
        var n = J(e) ? d1 : $1;
        return n(e);
      }
      function Gh(e) {
        if (e == null)
          return 0;
        if (qe(e))
          return gr(e) ? An(e) : e.length;
        var n = Re(e);
        return n == fu || n == du ? e.size : Ei(e).length;
      }
      function Kh(e, n, o) {
        var a = J(e) ? li : P1;
        return o && Pe(e, n, o) && (n = t), a(e, W(n, 3));
      }
      var Zh = ee(function(e, n) {
        if (e == null)
          return [];
        var o = n.length;
        return o > 1 && Pe(e, n[0], n[1]) ? n = [] : o > 2 && Pe(n[0], n[1], n[2]) && (n = [n[0]]), rc(e, Fe(n, 1), []);
      }), pr = Df || function() {
        return Me.Date.now();
      };
      function Vh(e, n) {
        if (typeof n != "function")
          throw new tu(d);
        return e = X(e), function() {
          if (--e < 1)
            return n.apply(this, arguments);
        };
      }
      function Qc(e, n, o) {
        return n = o ? t : n, n = e && n == null ? e.length : n, Bu(e, ue, t, t, t, t, n);
      }
      function jc(e, n) {
        var o;
        if (typeof n != "function")
          throw new tu(d);
        return e = X(e), function() {
          return --e > 0 && (o = n.apply(this, arguments)), e <= 1 && (n = t), o;
        };
      }
      var Ji = ee(function(e, n, o) {
        var a = I;
        if (o.length) {
          var h = Gu(o, On(Ji));
          a |= R;
        }
        return Bu(e, a, n, o, h);
      }), el = ee(function(e, n, o) {
        var a = I | D;
        if (o.length) {
          var h = Gu(o, On(el));
          a |= R;
        }
        return Bu(n, a, e, o, h);
      });
      function ul(e, n, o) {
        n = o ? t : n;
        var a = Bu(e, E, t, t, t, t, t, n);
        return a.placeholder = ul.placeholder, a;
      }
      function nl(e, n, o) {
        n = o ? t : n;
        var a = Bu(e, O, t, t, t, t, t, n);
        return a.placeholder = nl.placeholder, a;
      }
      function tl(e, n, o) {
        var a, h, b, g, v, C, L = 0, $ = !1, P = !1, z = !0;
        if (typeof e != "function")
          throw new tu(d);
        n = lu(n) || 0, be(o) && ($ = !!o.leading, P = "maxWait" in o, b = P ? we(lu(o.maxWait) || 0, n) : b, z = "trailing" in o ? !!o.trailing : z);
        function H(ve) {
          var bu = a, Nu = h;
          return a = h = t, L = ve, g = e.apply(Nu, bu), g;
        }
        function K(ve) {
          return L = ve, v = ft(ne, n), $ ? H(ve) : g;
        }
        function Q(ve) {
          var bu = ve - C, Nu = ve - L, kl = n - bu;
          return P ? Oe(kl, b - Nu) : kl;
        }
        function Z(ve) {
          var bu = ve - C, Nu = ve - L;
          return C === t || bu >= n || bu < 0 || P && Nu >= b;
        }
        function ne() {
          var ve = pr();
          if (Z(ve))
            return ie(ve);
          v = ft(ne, Q(ve));
        }
        function ie(ve) {
          return v = t, z && a ? H(ve) : (a = h = t, g);
        }
        function Je() {
          v !== t && hc(v), L = 0, a = C = h = v = t;
        }
        function ze() {
          return v === t ? g : ie(pr());
        }
        function Xe() {
          var ve = pr(), bu = Z(ve);
          if (a = arguments, h = this, C = ve, bu) {
            if (v === t)
              return K(C);
            if (P)
              return hc(v), v = ft(ne, n), H(C);
          }
          return v === t && (v = ft(ne, n)), g;
        }
        return Xe.cancel = Je, Xe.flush = ze, Xe;
      }
      var Yh = ee(function(e, n) {
        return Ko(e, 1, n);
      }), Jh = ee(function(e, n, o) {
        return Ko(e, lu(n) || 0, o);
      });
      function Xh(e) {
        return Bu(e, Te);
      }
      function _r(e, n) {
        if (typeof e != "function" || n != null && typeof n != "function")
          throw new tu(d);
        var o = function() {
          var a = arguments, h = n ? n.apply(this, a) : a[0], b = o.cache;
          if (b.has(h))
            return b.get(h);
          var g = e.apply(this, a);
          return o.cache = b.set(h, g) || b, g;
        };
        return o.cache = new (_r.Cache || Ou)(), o;
      }
      _r.Cache = Ou;
      function br(e) {
        if (typeof e != "function")
          throw new tu(d);
        return function() {
          var n = arguments;
          switch (n.length) {
            case 0:
              return !e.call(this);
            case 1:
              return !e.call(this, n[0]);
            case 2:
              return !e.call(this, n[0], n[1]);
            case 3:
              return !e.call(this, n[0], n[1], n[2]);
          }
          return !e.apply(this, n);
        };
      }
      function Qh(e) {
        return jc(2, e);
      }
      var jh = z1(function(e, n) {
        n = n.length == 1 && J(n[0]) ? _e(n[0], Ze(W())) : _e(Fe(n, 1), Ze(W()));
        var o = n.length;
        return ee(function(a) {
          for (var h = -1, b = Oe(a.length, o); ++h < b; )
            a[h] = n[h].call(this, a[h]);
          return Ke(e, this, a);
        });
      }), Xi = ee(function(e, n) {
        var o = Gu(n, On(Xi));
        return Bu(e, R, t, n, o);
      }), rl = ee(function(e, n) {
        var o = Gu(n, On(rl));
        return Bu(e, G, t, n, o);
      }), e2 = Lu(function(e, n) {
        return Bu(e, Le, t, t, t, n);
      });
      function u2(e, n) {
        if (typeof e != "function")
          throw new tu(d);
        return n = n === t ? n : X(n), ee(e, n);
      }
      function n2(e, n) {
        if (typeof e != "function")
          throw new tu(d);
        return n = n == null ? 0 : we(X(n), 0), ee(function(o) {
          var a = o[n], h = Ju(o, 0, n);
          return a && Wu(h, a), Ke(e, this, h);
        });
      }
      function t2(e, n, o) {
        var a = !0, h = !0;
        if (typeof e != "function")
          throw new tu(d);
        return be(o) && (a = "leading" in o ? !!o.leading : a, h = "trailing" in o ? !!o.trailing : h), tl(e, n, {
          leading: a,
          maxWait: n,
          trailing: h
        });
      }
      function r2(e) {
        return Qc(e, 1);
      }
      function i2(e, n) {
        return Xi(Bi(n), e);
      }
      function o2() {
        if (!arguments.length)
          return [];
        var e = arguments[0];
        return J(e) ? e : [e];
      }
      function c2(e) {
        return iu(e, M);
      }
      function l2(e, n) {
        return n = typeof n == "function" ? n : t, iu(e, M, n);
      }
      function s2(e) {
        return iu(e, y | M);
      }
      function a2(e, n) {
        return n = typeof n == "function" ? n : t, iu(e, y | M, n);
      }
      function f2(e, n) {
        return n == null || Go(e, n, Ae(n));
      }
      function _u(e, n) {
        return e === n || e !== e && n !== n;
      }
      var d2 = lr(wi), h2 = lr(function(e, n) {
        return e >= n;
      }), hn = Xo(function() {
        return arguments;
      }()) ? Xo : function(e) {
        return me(e) && ae.call(e, "callee") && !$o.call(e, "callee");
      }, J = T.isArray, p2 = go ? Ze(go) : k1;
      function qe(e) {
        return e != null && mr(e.length) && !Pu(e);
      }
      function xe(e) {
        return me(e) && qe(e);
      }
      function _2(e) {
        return e === !0 || e === !1 || me(e) && $e(e) == Gn;
      }
      var Xu = Mf || l0, b2 = xo ? Ze(xo) : w1;
      function m2(e) {
        return me(e) && e.nodeType === 1 && !dt(e);
      }
      function g2(e) {
        if (e == null)
          return !0;
        if (qe(e) && (J(e) || typeof e == "string" || typeof e.splice == "function" || Xu(e) || Rn(e) || hn(e)))
          return !e.length;
        var n = Re(e);
        if (n == fu || n == du)
          return !e.size;
        if (at(e))
          return !Ei(e).length;
        for (var o in e)
          if (ae.call(e, o))
            return !1;
        return !0;
      }
      function x2(e, n) {
        return ct(e, n);
      }
      function v2(e, n, o) {
        o = typeof o == "function" ? o : t;
        var a = o ? o(e, n) : t;
        return a === t ? ct(e, n, t, o) : !!a;
      }
      function Qi(e) {
        if (!me(e))
          return !1;
        var n = $e(e);
        return n == Mt || n == Us || typeof e.message == "string" && typeof e.name == "string" && !dt(e);
      }
      function y2(e) {
        return typeof e == "number" && zo(e);
      }
      function Pu(e) {
        if (!be(e))
          return !1;
        var n = $e(e);
        return n == Ft || n == G0 || n == qs || n == Ws;
      }
      function il(e) {
        return typeof e == "number" && e == X(e);
      }
      function mr(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Uu;
      }
      function be(e) {
        var n = typeof e;
        return e != null && (n == "object" || n == "function");
      }
      function me(e) {
        return e != null && typeof e == "object";
      }
      var ol = vo ? Ze(vo) : A1;
      function k2(e, n) {
        return e === n || Ai(e, n, Ui(n));
      }
      function w2(e, n, o) {
        return o = typeof o == "function" ? o : t, Ai(e, n, Ui(n), o);
      }
      function C2(e) {
        return cl(e) && e != +e;
      }
      function A2(e) {
        if (ld(e))
          throw new Y(l);
        return Qo(e);
      }
      function E2(e) {
        return e === null;
      }
      function D2(e) {
        return e == null;
      }
      function cl(e) {
        return typeof e == "number" || me(e) && $e(e) == Zn;
      }
      function dt(e) {
        if (!me(e) || $e(e) != Iu)
          return !1;
        var n = Wt(e);
        if (n === null)
          return !0;
        var o = ae.call(n, "constructor") && n.constructor;
        return typeof o == "function" && o instanceof o && Nt.call(o) == wf;
      }
      var ji = yo ? Ze(yo) : E1;
      function S2(e) {
        return il(e) && e >= -Uu && e <= Uu;
      }
      var ll = ko ? Ze(ko) : D1;
      function gr(e) {
        return typeof e == "string" || !J(e) && me(e) && $e(e) == Yn;
      }
      function Ye(e) {
        return typeof e == "symbol" || me(e) && $e(e) == It;
      }
      var Rn = wo ? Ze(wo) : S1;
      function M2(e) {
        return e === t;
      }
      function F2(e) {
        return me(e) && Re(e) == Jn;
      }
      function I2(e) {
        return me(e) && $e(e) == Ks;
      }
      var T2 = lr(Di), O2 = lr(function(e, n) {
        return e <= n;
      });
      function sl(e) {
        if (!e)
          return [];
        if (qe(e))
          return gr(e) ? hu(e) : Ne(e);
        if (jn && e[jn])
          return ff(e[jn]());
        var n = Re(e), o = n == fu ? pi : n == du ? $t : Bn;
        return o(e);
      }
      function zu(e) {
        if (!e)
          return e === 0 ? e : 0;
        if (e = lu(e), e === tn || e === -tn) {
          var n = e < 0 ? -1 : 1;
          return n * $s;
        }
        return e === e ? e : 0;
      }
      function X(e) {
        var n = zu(e), o = n % 1;
        return n === n ? o ? n - o : n : 0;
      }
      function al(e) {
        return e ? sn(X(e), 0, vu) : 0;
      }
      function lu(e) {
        if (typeof e == "number")
          return e;
        if (Ye(e))
          return Dt;
        if (be(e)) {
          var n = typeof e.valueOf == "function" ? e.valueOf() : e;
          e = be(n) ? n + "" : n;
        }
        if (typeof e != "string")
          return e === 0 ? e : +e;
        e = Mo(e);
        var o = ha.test(e);
        return o || _a.test(e) ? Za(e.slice(2), o ? 2 : 8) : da.test(e) ? Dt : +e;
      }
      function fl(e) {
        return ku(e, Ue(e));
      }
      function R2(e) {
        return e ? sn(X(e), -Uu, Uu) : e === 0 ? e : 0;
      }
      function se(e) {
        return e == null ? "" : Ve(e);
      }
      var B2 = In(function(e, n) {
        if (at(n) || qe(n)) {
          ku(n, Ae(n), e);
          return;
        }
        for (var o in n)
          ae.call(n, o) && rt(e, o, n[o]);
      }), dl = In(function(e, n) {
        ku(n, Ue(n), e);
      }), xr = In(function(e, n, o, a) {
        ku(n, Ue(n), e, a);
      }), L2 = In(function(e, n, o, a) {
        ku(n, Ae(n), e, a);
      }), $2 = Lu(vi);
      function P2(e, n) {
        var o = Fn(e);
        return n == null ? o : Wo(o, n);
      }
      var z2 = ee(function(e, n) {
        e = fe(e);
        var o = -1, a = n.length, h = a > 2 ? n[2] : t;
        for (h && Pe(n[0], n[1], h) && (a = 1); ++o < a; )
          for (var b = n[o], g = Ue(b), v = -1, C = g.length; ++v < C; ) {
            var L = g[v], $ = e[L];
            ($ === t || _u($, Dn[L]) && !ae.call(e, L)) && (e[L] = b[L]);
          }
        return e;
      }), N2 = ee(function(e) {
        return e.push(t, Mc), Ke(hl, t, e);
      });
      function q2(e, n) {
        return Ao(e, W(n, 3), yu);
      }
      function U2(e, n) {
        return Ao(e, W(n, 3), ki);
      }
      function H2(e, n) {
        return e == null ? e : yi(e, W(n, 3), Ue);
      }
      function W2(e, n) {
        return e == null ? e : Yo(e, W(n, 3), Ue);
      }
      function G2(e, n) {
        return e && yu(e, W(n, 3));
      }
      function K2(e, n) {
        return e && ki(e, W(n, 3));
      }
      function Z2(e) {
        return e == null ? [] : er(e, Ae(e));
      }
      function V2(e) {
        return e == null ? [] : er(e, Ue(e));
      }
      function e0(e, n, o) {
        var a = e == null ? t : an(e, n);
        return a === t ? o : a;
      }
      function Y2(e, n) {
        return e != null && Tc(e, n, g1);
      }
      function u0(e, n) {
        return e != null && Tc(e, n, x1);
      }
      var J2 = Cc(function(e, n, o) {
        n != null && typeof n.toString != "function" && (n = qt.call(n)), e[n] = o;
      }, t0(He)), X2 = Cc(function(e, n, o) {
        n != null && typeof n.toString != "function" && (n = qt.call(n)), ae.call(e, n) ? e[n].push(o) : e[n] = [o];
      }, W), Q2 = ee(ot);
      function Ae(e) {
        return qe(e) ? Uo(e) : Ei(e);
      }
      function Ue(e) {
        return qe(e) ? Uo(e, !0) : M1(e);
      }
      function j2(e, n) {
        var o = {};
        return n = W(n, 3), yu(e, function(a, h, b) {
          Ru(o, n(a, h, b), a);
        }), o;
      }
      function ep(e, n) {
        var o = {};
        return n = W(n, 3), yu(e, function(a, h, b) {
          Ru(o, h, n(a, h, b));
        }), o;
      }
      var up = In(function(e, n, o) {
        ur(e, n, o);
      }), hl = In(function(e, n, o, a) {
        ur(e, n, o, a);
      }), np = Lu(function(e, n) {
        var o = {};
        if (e == null)
          return o;
        var a = !1;
        n = _e(n, function(b) {
          return b = Yu(b, e), a || (a = b.length > 1), b;
        }), ku(e, Ni(e), o), a && (o = iu(o, y | F | M, J1));
        for (var h = n.length; h--; )
          Ti(o, n[h]);
        return o;
      });
      function tp(e, n) {
        return pl(e, br(W(n)));
      }
      var rp = Lu(function(e, n) {
        return e == null ? {} : I1(e, n);
      });
      function pl(e, n) {
        if (e == null)
          return {};
        var o = _e(Ni(e), function(a) {
          return [a];
        });
        return n = W(n), ic(e, o, function(a, h) {
          return n(a, h[0]);
        });
      }
      function ip(e, n, o) {
        n = Yu(n, e);
        var a = -1, h = n.length;
        for (h || (h = 1, e = t); ++a < h; ) {
          var b = e == null ? t : e[wu(n[a])];
          b === t && (a = h, b = o), e = Pu(b) ? b.call(e) : b;
        }
        return e;
      }
      function op(e, n, o) {
        return e == null ? e : lt(e, n, o);
      }
      function cp(e, n, o, a) {
        return a = typeof a == "function" ? a : t, e == null ? e : lt(e, n, o, a);
      }
      var _l = Dc(Ae), bl = Dc(Ue);
      function lp(e, n, o) {
        var a = J(e), h = a || Xu(e) || Rn(e);
        if (n = W(n, 4), o == null) {
          var b = e && e.constructor;
          h ? o = a ? new b() : [] : be(e) ? o = Pu(b) ? Fn(Wt(e)) : {} : o = {};
        }
        return (h ? nu : yu)(e, function(g, v, C) {
          return n(o, g, v, C);
        }), o;
      }
      function sp(e, n) {
        return e == null ? !0 : Ti(e, n);
      }
      function ap(e, n, o) {
        return e == null ? e : ac(e, n, Bi(o));
      }
      function fp(e, n, o, a) {
        return a = typeof a == "function" ? a : t, e == null ? e : ac(e, n, Bi(o), a);
      }
      function Bn(e) {
        return e == null ? [] : hi(e, Ae(e));
      }
      function dp(e) {
        return e == null ? [] : hi(e, Ue(e));
      }
      function hp(e, n, o) {
        return o === t && (o = n, n = t), o !== t && (o = lu(o), o = o === o ? o : 0), n !== t && (n = lu(n), n = n === n ? n : 0), sn(lu(e), n, o);
      }
      function pp(e, n, o) {
        return n = zu(n), o === t ? (o = n, n = 0) : o = zu(o), e = lu(e), v1(e, n, o);
      }
      function _p(e, n, o) {
        if (o && typeof o != "boolean" && Pe(e, n, o) && (n = o = t), o === t && (typeof n == "boolean" ? (o = n, n = t) : typeof e == "boolean" && (o = e, e = t)), e === t && n === t ? (e = 0, n = 1) : (e = zu(e), n === t ? (n = e, e = 0) : n = zu(n)), e > n) {
          var a = e;
          e = n, n = a;
        }
        if (o || e % 1 || n % 1) {
          var h = No();
          return Oe(e + h * (n - e + Ka("1e-" + ((h + "").length - 1))), n);
        }
        return Mi(e, n);
      }
      var bp = Tn(function(e, n, o) {
        return n = n.toLowerCase(), e + (o ? ml(n) : n);
      });
      function ml(e) {
        return n0(se(e).toLowerCase());
      }
      function gl(e) {
        return e = se(e), e && e.replace(ma, of).replace(La, "");
      }
      function mp(e, n, o) {
        e = se(e), n = Ve(n);
        var a = e.length;
        o = o === t ? a : sn(X(o), 0, a);
        var h = o;
        return o -= n.length, o >= 0 && e.slice(o, h) == n;
      }
      function gp(e) {
        return e = se(e), e && Xs.test(e) ? e.replace(V0, cf) : e;
      }
      function xp(e) {
        return e = se(e), e && ta.test(e) ? e.replace(Xr, "\\$&") : e;
      }
      var vp = Tn(function(e, n, o) {
        return e + (o ? "-" : "") + n.toLowerCase();
      }), yp = Tn(function(e, n, o) {
        return e + (o ? " " : "") + n.toLowerCase();
      }), kp = yc("toLowerCase");
      function wp(e, n, o) {
        e = se(e), n = X(n);
        var a = n ? An(e) : 0;
        if (!n || a >= n)
          return e;
        var h = (n - a) / 2;
        return cr(Vt(h), o) + e + cr(Zt(h), o);
      }
      function Cp(e, n, o) {
        e = se(e), n = X(n);
        var a = n ? An(e) : 0;
        return n && a < n ? e + cr(n - a, o) : e;
      }
      function Ap(e, n, o) {
        e = se(e), n = X(n);
        var a = n ? An(e) : 0;
        return n && a < n ? cr(n - a, o) + e : e;
      }
      function Ep(e, n, o) {
        return o || n == null ? n = 0 : n && (n = +n), Of(se(e).replace(Qr, ""), n || 0);
      }
      function Dp(e, n, o) {
        return (o ? Pe(e, n, o) : n === t) ? n = 1 : n = X(n), Fi(se(e), n);
      }
      function Sp() {
        var e = arguments, n = se(e[0]);
        return e.length < 3 ? n : n.replace(e[1], e[2]);
      }
      var Mp = Tn(function(e, n, o) {
        return e + (o ? "_" : "") + n.toLowerCase();
      });
      function Fp(e, n, o) {
        return o && typeof o != "number" && Pe(e, n, o) && (n = o = t), o = o === t ? vu : o >>> 0, o ? (e = se(e), e && (typeof n == "string" || n != null && !ji(n)) && (n = Ve(n), !n && Cn(e)) ? Ju(hu(e), 0, o) : e.split(n, o)) : [];
      }
      var Ip = Tn(function(e, n, o) {
        return e + (o ? " " : "") + n0(n);
      });
      function Tp(e, n, o) {
        return e = se(e), o = o == null ? 0 : sn(X(o), 0, e.length), n = Ve(n), e.slice(o, o + n.length) == n;
      }
      function Op(e, n, o) {
        var a = p.templateSettings;
        o && Pe(e, n, o) && (n = t), e = se(e), n = xr({}, n, a, Sc);
        var h = xr({}, n.imports, a.imports, Sc), b = Ae(h), g = hi(h, b), v, C, L = 0, $ = n.interpolate || Tt, P = "__p += '", z = _i(
          (n.escape || Tt).source + "|" + $.source + "|" + ($ === Y0 ? fa : Tt).source + "|" + (n.evaluate || Tt).source + "|$",
          "g"
        ), H = "//# sourceURL=" + (ae.call(n, "sourceURL") ? (n.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++qa + "]") + `
`;
        e.replace(z, function(Z, ne, ie, Je, ze, Xe) {
          return ie || (ie = Je), P += e.slice(L, Xe).replace(ga, lf), ne && (v = !0, P += `' +
__e(` + ne + `) +
'`), ze && (C = !0, P += `';
` + ze + `;
__p += '`), ie && (P += `' +
((__t = (` + ie + `)) == null ? '' : __t) +
'`), L = Xe + Z.length, Z;
        }), P += `';
`;
        var K = ae.call(n, "variable") && n.variable;
        if (!K)
          P = `with (obj) {
` + P + `
}
`;
        else if (sa.test(K))
          throw new Y(f);
        P = (C ? P.replace(Zs, "") : P).replace(Vs, "$1").replace(Ys, "$1;"), P = "function(" + (K || "obj") + `) {
` + (K ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (v ? ", __e = _.escape" : "") + (C ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + P + `return __p
}`;
        var Q = vl(function() {
          return ce(b, H + "return " + P).apply(t, g);
        });
        if (Q.source = P, Qi(Q))
          throw Q;
        return Q;
      }
      function Rp(e) {
        return se(e).toLowerCase();
      }
      function Bp(e) {
        return se(e).toUpperCase();
      }
      function Lp(e, n, o) {
        if (e = se(e), e && (o || n === t))
          return Mo(e);
        if (!e || !(n = Ve(n)))
          return e;
        var a = hu(e), h = hu(n), b = Fo(a, h), g = Io(a, h) + 1;
        return Ju(a, b, g).join("");
      }
      function $p(e, n, o) {
        if (e = se(e), e && (o || n === t))
          return e.slice(0, Oo(e) + 1);
        if (!e || !(n = Ve(n)))
          return e;
        var a = hu(e), h = Io(a, hu(n)) + 1;
        return Ju(a, 0, h).join("");
      }
      function Pp(e, n, o) {
        if (e = se(e), e && (o || n === t))
          return e.replace(Qr, "");
        if (!e || !(n = Ve(n)))
          return e;
        var a = hu(e), h = Fo(a, hu(n));
        return Ju(a, h).join("");
      }
      function zp(e, n) {
        var o = gn, a = xn;
        if (be(n)) {
          var h = "separator" in n ? n.separator : h;
          o = "length" in n ? X(n.length) : o, a = "omission" in n ? Ve(n.omission) : a;
        }
        e = se(e);
        var b = e.length;
        if (Cn(e)) {
          var g = hu(e);
          b = g.length;
        }
        if (o >= b)
          return e;
        var v = o - An(a);
        if (v < 1)
          return a;
        var C = g ? Ju(g, 0, v).join("") : e.slice(0, v);
        if (h === t)
          return C + a;
        if (g && (v += C.length - v), ji(h)) {
          if (e.slice(v).search(h)) {
            var L, $ = C;
            for (h.global || (h = _i(h.source, se(J0.exec(h)) + "g")), h.lastIndex = 0; L = h.exec($); )
              var P = L.index;
            C = C.slice(0, P === t ? v : P);
          }
        } else if (e.indexOf(Ve(h), v) != v) {
          var z = C.lastIndexOf(h);
          z > -1 && (C = C.slice(0, z));
        }
        return C + a;
      }
      function Np(e) {
        return e = se(e), e && Js.test(e) ? e.replace(Z0, _f) : e;
      }
      var qp = Tn(function(e, n, o) {
        return e + (o ? " " : "") + n.toUpperCase();
      }), n0 = yc("toUpperCase");
      function xl(e, n, o) {
        return e = se(e), n = o ? t : n, n === t ? af(e) ? gf(e) : ef(e) : e.match(n) || [];
      }
      var vl = ee(function(e, n) {
        try {
          return Ke(e, t, n);
        } catch (o) {
          return Qi(o) ? o : new Y(o);
        }
      }), Up = Lu(function(e, n) {
        return nu(n, function(o) {
          o = wu(o), Ru(e, o, Ji(e[o], e));
        }), e;
      });
      function Hp(e) {
        var n = e == null ? 0 : e.length, o = W();
        return e = n ? _e(e, function(a) {
          if (typeof a[1] != "function")
            throw new tu(d);
          return [o(a[0]), a[1]];
        }) : [], ee(function(a) {
          for (var h = -1; ++h < n; ) {
            var b = e[h];
            if (Ke(b[0], this, a))
              return Ke(b[1], this, a);
          }
        });
      }
      function Wp(e) {
        return _1(iu(e, y));
      }
      function t0(e) {
        return function() {
          return e;
        };
      }
      function Gp(e, n) {
        return e == null || e !== e ? n : e;
      }
      var Kp = wc(), Zp = wc(!0);
      function He(e) {
        return e;
      }
      function r0(e) {
        return jo(typeof e == "function" ? e : iu(e, y));
      }
      function Vp(e) {
        return uc(iu(e, y));
      }
      function Yp(e, n) {
        return nc(e, iu(n, y));
      }
      var Jp = ee(function(e, n) {
        return function(o) {
          return ot(o, e, n);
        };
      }), Xp = ee(function(e, n) {
        return function(o) {
          return ot(e, o, n);
        };
      });
      function i0(e, n, o) {
        var a = Ae(n), h = er(n, a);
        o == null && !(be(n) && (h.length || !a.length)) && (o = n, n = e, e = this, h = er(n, Ae(n)));
        var b = !(be(o) && "chain" in o) || !!o.chain, g = Pu(e);
        return nu(h, function(v) {
          var C = n[v];
          e[v] = C, g && (e.prototype[v] = function() {
            var L = this.__chain__;
            if (b || L) {
              var $ = e(this.__wrapped__), P = $.__actions__ = Ne(this.__actions__);
              return P.push({ func: C, args: arguments, thisArg: e }), $.__chain__ = L, $;
            }
            return C.apply(e, Wu([this.value()], arguments));
          });
        }), e;
      }
      function Qp() {
        return Me._ === this && (Me._ = Cf), this;
      }
      function o0() {
      }
      function jp(e) {
        return e = X(e), ee(function(n) {
          return tc(n, e);
        });
      }
      var e3 = $i(_e), u3 = $i(Co), n3 = $i(li);
      function yl(e) {
        return Wi(e) ? si(wu(e)) : T1(e);
      }
      function t3(e) {
        return function(n) {
          return e == null ? t : an(e, n);
        };
      }
      var r3 = Ac(), i3 = Ac(!0);
      function c0() {
        return [];
      }
      function l0() {
        return !1;
      }
      function o3() {
        return {};
      }
      function c3() {
        return "";
      }
      function l3() {
        return !0;
      }
      function s3(e, n) {
        if (e = X(e), e < 1 || e > Uu)
          return [];
        var o = vu, a = Oe(e, vu);
        n = W(n), e -= vu;
        for (var h = di(a, n); ++o < e; )
          n(o);
        return h;
      }
      function a3(e) {
        return J(e) ? _e(e, wu) : Ye(e) ? [e] : Ne(qc(se(e)));
      }
      function f3(e) {
        var n = ++kf;
        return se(e) + n;
      }
      var d3 = or(function(e, n) {
        return e + n;
      }, 0), h3 = Pi("ceil"), p3 = or(function(e, n) {
        return e / n;
      }, 1), _3 = Pi("floor");
      function b3(e) {
        return e && e.length ? jt(e, He, wi) : t;
      }
      function m3(e, n) {
        return e && e.length ? jt(e, W(n, 2), wi) : t;
      }
      function g3(e) {
        return Do(e, He);
      }
      function x3(e, n) {
        return Do(e, W(n, 2));
      }
      function v3(e) {
        return e && e.length ? jt(e, He, Di) : t;
      }
      function y3(e, n) {
        return e && e.length ? jt(e, W(n, 2), Di) : t;
      }
      var k3 = or(function(e, n) {
        return e * n;
      }, 1), w3 = Pi("round"), C3 = or(function(e, n) {
        return e - n;
      }, 0);
      function A3(e) {
        return e && e.length ? fi(e, He) : 0;
      }
      function E3(e, n) {
        return e && e.length ? fi(e, W(n, 2)) : 0;
      }
      return p.after = Vh, p.ary = Qc, p.assign = B2, p.assignIn = dl, p.assignInWith = xr, p.assignWith = L2, p.at = $2, p.before = jc, p.bind = Ji, p.bindAll = Up, p.bindKey = el, p.castArray = o2, p.chain = Yc, p.chunk = _d, p.compact = bd, p.concat = md, p.cond = Hp, p.conforms = Wp, p.constant = t0, p.countBy = Ah, p.create = P2, p.curry = ul, p.curryRight = nl, p.debounce = tl, p.defaults = z2, p.defaultsDeep = N2, p.defer = Yh, p.delay = Jh, p.difference = gd, p.differenceBy = xd, p.differenceWith = vd, p.drop = yd, p.dropRight = kd, p.dropRightWhile = wd, p.dropWhile = Cd, p.fill = Ad, p.filter = Dh, p.flatMap = Fh, p.flatMapDeep = Ih, p.flatMapDepth = Th, p.flatten = Gc, p.flattenDeep = Ed, p.flattenDepth = Dd, p.flip = Xh, p.flow = Kp, p.flowRight = Zp, p.fromPairs = Sd, p.functions = Z2, p.functionsIn = V2, p.groupBy = Oh, p.initial = Fd, p.intersection = Id, p.intersectionBy = Td, p.intersectionWith = Od, p.invert = J2, p.invertBy = X2, p.invokeMap = Bh, p.iteratee = r0, p.keyBy = Lh, p.keys = Ae, p.keysIn = Ue, p.map = hr, p.mapKeys = j2, p.mapValues = ep, p.matches = Vp, p.matchesProperty = Yp, p.memoize = _r, p.merge = up, p.mergeWith = hl, p.method = Jp, p.methodOf = Xp, p.mixin = i0, p.negate = br, p.nthArg = jp, p.omit = np, p.omitBy = tp, p.once = Qh, p.orderBy = $h, p.over = e3, p.overArgs = jh, p.overEvery = u3, p.overSome = n3, p.partial = Xi, p.partialRight = rl, p.partition = Ph, p.pick = rp, p.pickBy = pl, p.property = yl, p.propertyOf = t3, p.pull = $d, p.pullAll = Zc, p.pullAllBy = Pd, p.pullAllWith = zd, p.pullAt = Nd, p.range = r3, p.rangeRight = i3, p.rearg = e2, p.reject = qh, p.remove = qd, p.rest = u2, p.reverse = Vi, p.sampleSize = Hh, p.set = op, p.setWith = cp, p.shuffle = Wh, p.slice = Ud, p.sortBy = Zh, p.sortedUniq = Yd, p.sortedUniqBy = Jd, p.split = Fp, p.spread = n2, p.tail = Xd, p.take = Qd, p.takeRight = jd, p.takeRightWhile = eh, p.takeWhile = uh, p.tap = bh, p.throttle = t2, p.thru = dr, p.toArray = sl, p.toPairs = _l, p.toPairsIn = bl, p.toPath = a3, p.toPlainObject = fl, p.transform = lp, p.unary = r2, p.union = nh, p.unionBy = th, p.unionWith = rh, p.uniq = ih, p.uniqBy = oh, p.uniqWith = ch, p.unset = sp, p.unzip = Yi, p.unzipWith = Vc, p.update = ap, p.updateWith = fp, p.values = Bn, p.valuesIn = dp, p.without = lh, p.words = xl, p.wrap = i2, p.xor = sh, p.xorBy = ah, p.xorWith = fh, p.zip = dh, p.zipObject = hh, p.zipObjectDeep = ph, p.zipWith = _h, p.entries = _l, p.entriesIn = bl, p.extend = dl, p.extendWith = xr, i0(p, p), p.add = d3, p.attempt = vl, p.camelCase = bp, p.capitalize = ml, p.ceil = h3, p.clamp = hp, p.clone = c2, p.cloneDeep = s2, p.cloneDeepWith = a2, p.cloneWith = l2, p.conformsTo = f2, p.deburr = gl, p.defaultTo = Gp, p.divide = p3, p.endsWith = mp, p.eq = _u, p.escape = gp, p.escapeRegExp = xp, p.every = Eh, p.find = Sh, p.findIndex = Hc, p.findKey = q2, p.findLast = Mh, p.findLastIndex = Wc, p.findLastKey = U2, p.floor = _3, p.forEach = Jc, p.forEachRight = Xc, p.forIn = H2, p.forInRight = W2, p.forOwn = G2, p.forOwnRight = K2, p.get = e0, p.gt = d2, p.gte = h2, p.has = Y2, p.hasIn = u0, p.head = Kc, p.identity = He, p.includes = Rh, p.indexOf = Md, p.inRange = pp, p.invoke = Q2, p.isArguments = hn, p.isArray = J, p.isArrayBuffer = p2, p.isArrayLike = qe, p.isArrayLikeObject = xe, p.isBoolean = _2, p.isBuffer = Xu, p.isDate = b2, p.isElement = m2, p.isEmpty = g2, p.isEqual = x2, p.isEqualWith = v2, p.isError = Qi, p.isFinite = y2, p.isFunction = Pu, p.isInteger = il, p.isLength = mr, p.isMap = ol, p.isMatch = k2, p.isMatchWith = w2, p.isNaN = C2, p.isNative = A2, p.isNil = D2, p.isNull = E2, p.isNumber = cl, p.isObject = be, p.isObjectLike = me, p.isPlainObject = dt, p.isRegExp = ji, p.isSafeInteger = S2, p.isSet = ll, p.isString = gr, p.isSymbol = Ye, p.isTypedArray = Rn, p.isUndefined = M2, p.isWeakMap = F2, p.isWeakSet = I2, p.join = Rd, p.kebabCase = vp, p.last = cu, p.lastIndexOf = Bd, p.lowerCase = yp, p.lowerFirst = kp, p.lt = T2, p.lte = O2, p.max = b3, p.maxBy = m3, p.mean = g3, p.meanBy = x3, p.min = v3, p.minBy = y3, p.stubArray = c0, p.stubFalse = l0, p.stubObject = o3, p.stubString = c3, p.stubTrue = l3, p.multiply = k3, p.nth = Ld, p.noConflict = Qp, p.noop = o0, p.now = pr, p.pad = wp, p.padEnd = Cp, p.padStart = Ap, p.parseInt = Ep, p.random = _p, p.reduce = zh, p.reduceRight = Nh, p.repeat = Dp, p.replace = Sp, p.result = ip, p.round = w3, p.runInContext = k, p.sample = Uh, p.size = Gh, p.snakeCase = Mp, p.some = Kh, p.sortedIndex = Hd, p.sortedIndexBy = Wd, p.sortedIndexOf = Gd, p.sortedLastIndex = Kd, p.sortedLastIndexBy = Zd, p.sortedLastIndexOf = Vd, p.startCase = Ip, p.startsWith = Tp, p.subtract = C3, p.sum = A3, p.sumBy = E3, p.template = Op, p.times = s3, p.toFinite = zu, p.toInteger = X, p.toLength = al, p.toLower = Rp, p.toNumber = lu, p.toSafeInteger = R2, p.toString = se, p.toUpper = Bp, p.trim = Lp, p.trimEnd = $p, p.trimStart = Pp, p.truncate = zp, p.unescape = Np, p.uniqueId = f3, p.upperCase = qp, p.upperFirst = n0, p.each = Jc, p.eachRight = Xc, p.first = Kc, i0(p, function() {
        var e = {};
        return yu(p, function(n, o) {
          ae.call(p.prototype, o) || (e[o] = n);
        }), e;
      }(), { chain: !1 }), p.VERSION = c, nu(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
        p[e].placeholder = p;
      }), nu(["drop", "take"], function(e, n) {
        te.prototype[e] = function(o) {
          o = o === t ? 1 : we(X(o), 0);
          var a = this.__filtered__ && !n ? new te(this) : this.clone();
          return a.__filtered__ ? a.__takeCount__ = Oe(o, a.__takeCount__) : a.__views__.push({
            size: Oe(o, vu),
            type: e + (a.__dir__ < 0 ? "Right" : "")
          }), a;
        }, te.prototype[e + "Right"] = function(o) {
          return this.reverse()[e](o).reverse();
        };
      }), nu(["filter", "map", "takeWhile"], function(e, n) {
        var o = n + 1, a = o == qu || o == qr;
        te.prototype[e] = function(h) {
          var b = this.clone();
          return b.__iteratees__.push({
            iteratee: W(h, 3),
            type: o
          }), b.__filtered__ = b.__filtered__ || a, b;
        };
      }), nu(["head", "last"], function(e, n) {
        var o = "take" + (n ? "Right" : "");
        te.prototype[e] = function() {
          return this[o](1).value()[0];
        };
      }), nu(["initial", "tail"], function(e, n) {
        var o = "drop" + (n ? "" : "Right");
        te.prototype[e] = function() {
          return this.__filtered__ ? new te(this) : this[o](1);
        };
      }), te.prototype.compact = function() {
        return this.filter(He);
      }, te.prototype.find = function(e) {
        return this.filter(e).head();
      }, te.prototype.findLast = function(e) {
        return this.reverse().find(e);
      }, te.prototype.invokeMap = ee(function(e, n) {
        return typeof e == "function" ? new te(this) : this.map(function(o) {
          return ot(o, e, n);
        });
      }), te.prototype.reject = function(e) {
        return this.filter(br(W(e)));
      }, te.prototype.slice = function(e, n) {
        e = X(e);
        var o = this;
        return o.__filtered__ && (e > 0 || n < 0) ? new te(o) : (e < 0 ? o = o.takeRight(-e) : e && (o = o.drop(e)), n !== t && (n = X(n), o = n < 0 ? o.dropRight(-n) : o.take(n - e)), o);
      }, te.prototype.takeRightWhile = function(e) {
        return this.reverse().takeWhile(e).reverse();
      }, te.prototype.toArray = function() {
        return this.take(vu);
      }, yu(te.prototype, function(e, n) {
        var o = /^(?:filter|find|map|reject)|While$/.test(n), a = /^(?:head|last)$/.test(n), h = p[a ? "take" + (n == "last" ? "Right" : "") : n], b = a || /^find/.test(n);
        h && (p.prototype[n] = function() {
          var g = this.__wrapped__, v = a ? [1] : arguments, C = g instanceof te, L = v[0], $ = C || J(g), P = function(ne) {
            var ie = h.apply(p, Wu([ne], v));
            return a && z ? ie[0] : ie;
          };
          $ && o && typeof L == "function" && L.length != 1 && (C = $ = !1);
          var z = this.__chain__, H = !!this.__actions__.length, K = b && !z, Q = C && !H;
          if (!b && $) {
            g = Q ? g : new te(this);
            var Z = e.apply(g, v);
            return Z.__actions__.push({ func: dr, args: [P], thisArg: t }), new ru(Z, z);
          }
          return K && Q ? e.apply(this, v) : (Z = this.thru(P), K ? a ? Z.value()[0] : Z.value() : Z);
        });
      }), nu(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
        var n = Pt[e], o = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", a = /^(?:pop|shift)$/.test(e);
        p.prototype[e] = function() {
          var h = arguments;
          if (a && !this.__chain__) {
            var b = this.value();
            return n.apply(J(b) ? b : [], h);
          }
          return this[o](function(g) {
            return n.apply(J(g) ? g : [], h);
          });
        };
      }), yu(te.prototype, function(e, n) {
        var o = p[n];
        if (o) {
          var a = o.name + "";
          ae.call(Mn, a) || (Mn[a] = []), Mn[a].push({ name: n, func: o });
        }
      }), Mn[ir(t, D).name] = [{
        name: "wrapper",
        func: t
      }], te.prototype.clone = Nf, te.prototype.reverse = qf, te.prototype.value = Uf, p.prototype.at = mh, p.prototype.chain = gh, p.prototype.commit = xh, p.prototype.next = vh, p.prototype.plant = kh, p.prototype.reverse = wh, p.prototype.toJSON = p.prototype.valueOf = p.prototype.value = Ch, p.prototype.first = p.prototype.head, jn && (p.prototype[jn] = yh), p;
    }, En = xf();
    rn ? ((rn.exports = En)._ = En, ri._ = En) : Me._ = En;
  }).call(Pn);
})(Sr, Sr.exports);
var W_ = Sr.exports;
const G_ = /* @__PURE__ */ is(W_), Lr = /* @__PURE__ */ V({
  __name: "DateBox",
  props: {
    date: { default: () => null },
    mini: { type: Boolean, default: () => !1 }
  },
  emits: ["update:date"],
  setup(u, { emit: r }) {
    const t = u, c = De({
      get() {
        return G_.isDate(t.date) ? t.date.getTime() : null;
      },
      set(s) {
        r("update:date", s === null ? null : new Date(s));
      }
    });
    return (s, l) => (N(), le(re(L3), {
      value: re(c),
      "onUpdate:value": l[0] || (l[0] = (d) => Zl(c) ? c.value = d : null),
      type: "date",
      clearable: "",
      placeholder: "",
      class: ye([{ mini: t.mini }, "date-box"])
    }, null, 8, ["value", "class"]));
  }
}), K_ = 2e3;
let a0 = null, Cr = null;
const vr = /* @__PURE__ */ new Map();
async function ss(u) {
  return u ? (a0 === null && (a0 = mn("GET", "/nbox/profile", {}, null, !0)), a0.then((r) => (Cr === null && (Cr = new Map(Object.entries(r))), Cr.get(u) || null))) : null;
}
async function Z_(u, r) {
  if (!u)
    return;
  if (vr.has(u)) {
    const s = vr.get(u);
    clearTimeout(s), vr.delete(u);
  }
  const t = { content: r };
  if (await ss(u) !== r) {
    Cr.set(u, r);
    const s = setTimeout(() => {
      mn("POST", `/nbox/profile/${u}`, {}, t, !0);
    }, K_);
    vr.set(u, s);
  }
}
const Mr = { get: ss, set: Z_ }, Ar = Rr(), Fr = 20, as = [
  ["=", "="],
  [">", ">"],
  [">=", ">="],
  ["<", "<"],
  ["<=", "<="],
  ["Diferente", "!="],
  ["Entre", "between"],
  ["Iniciado por", "startsWith"],
  ["Contem", "contains"]
], V_ = {
  InputBox: ["value", () => Hn],
  MoneyBox: ["value", () => E0],
  DateBox: ["date", () => Lr],
  MonthBox: ["date", () => E0],
  DecimalBox: ["value", () => cs],
  NumberBox: ["value", () => L0],
  ComboBox: ["value", () => B0]
};
class Y_ {
  _key;
  _columns;
  // DataTableColumn[]
  _data;
  _selectedItems;
  _options;
  _profileID;
  _sortColumnKey;
  _sortOrder;
  /**
   * Retorna o objeto de opções utilizado no NDataTable
   */
  get options() {
    return this._options;
  }
  /**
   * Retorna a lista de todas os IDs que estão selecionados. Lista vazia em caso de nenhum
   */
  get selectedItems() {
    return this._selectedItems.value;
  }
  /**
   * Retorna o ID do item selecionado (null em caso de nenhum)
   */
  get selectedItem() {
    return this._selectedItems.value.length == 0 ? null : this._selectedItems.value[0];
  }
  /**
   * Adiciona um ID na lista dos selecionados e marca na GridView
   */
  set selectedItem(r) {
    this._selectedItems.value.length = 0, r != null && this._selectedItems.value.push(r);
  }
  /**
   * Cria uma nova instancia de GridViewExOptions para ser utilizada no componente grid-view
   * @param key A chave primaria ou identificador unico da Dto
   */
  constructor(r) {
    this._key = r, this._columns = oe([]), this._data = oe([]), this._selectedItems = oe([]), this._options = this.createOptions(), this._profileID = null, this._sortOrder = oe(null), this._sortColumnKey = oe(null);
  }
  /* private functions */
  getFilterLabel() {
    const r = this.getFilters(), t = [];
    for (let c = 0; c < r.length; c++) {
      const { field: s, op: l, value: d } = r[c], f = this._columns.value.find((w) => w.key === s)?.title, _ = as.find((w) => w[1] === l)[0].toLowerCase(), m = d.length === 1 ? Array.isArray(d[0]) ? d[0].join(", ") : d[0] : d[0] + '" a "' + d[1];
      t.push(f + " " + _ + ' "' + m + '"');
    }
    return t.join(" e ");
  }
  // retorna uma lista de filtros aplicaveis
  getFilters() {
    return this._columns.value.filter((t) => t.filterInfo).filter(
      (t) => !Qe(t.filterInfo.op) || t.filterInfo.ops.length === 0
    ).filter((t) => !Qe(t.filterInfo.value[0])).filter(
      (t) => !(Array.isArray(t.filterInfo.value[0]) && t.filterInfo.value[0].length === 0)
    ).filter(
      (t) => !(t.filterInfo.op === "between" && Qe(t.filterInfo.value[1]))
    ).map((t) => ({
      field: t.key,
      op: t.filterInfo.op || "=",
      value: t.filterInfo.value
    }));
  }
  // aplica o filtro sobre o resultado original e retorna uma lista com os registros filtrados
  applyFilter() {
    const r = [], t = this.getFilters();
    if (t.length === 0)
      return this._data.value;
    for (let c = 0; c < this._data.value.length; c++) {
      const s = this._data.value[c];
      let l = !1;
      for (let d = 0; d < t.length; d++) {
        const f = t[d], _ = mu.get(s, f.field), m = f.op, w = Array.isArray(f.value[0]) ? f.value[0] : [f.value[0]], y = f.value[1];
        l = !1;
        for (let F = 0; F < w.length; F++) {
          const M = w[F];
          if (m === "startsWith" && _.toUpperCase().startsWith(M.toUpperCase()))
            l = !0;
          else if (m === "contains" && _.toUpperCase().indexOf(M.toUpperCase()) >= 0)
            l = !0;
          else {
            const x = pn(_, M);
            (m === "=" && x === 0 || m === ">" && x > 1 || m === ">=" && x >= 0 || m === "<" && x < 0 || m === "<=" && x <= 0 || m === "!=" && x !== 0 || m === "between" && x >= 0 && pn(_, y) <= 0) && (l = !0);
          }
          if (l)
            break;
        }
        if (!l)
          break;
      }
      l && r.push(s);
    }
    return r;
  }
  // converte todos os dados filtrados em registros pra exportação pra excel
  getExcelData() {
    const r = [];
    for (let t = 0; t < this._data.value.length; t++) {
      const c = this._data.value[t], s = {};
      for (let l = 0; l < this._columns.value.length; l++) {
        const d = this._columns.value[l];
        if (d.visible && d.visible === !0) {
          let f = c[d.key];
          const _ = d.filterInfo.format;
          _ && (f = _(f)), s[d.title] = f;
        }
      }
      r.push(s);
    }
    return r;
  }
  /**
   * Carrega a gridview utilizando uma função assincrona
   * @param asyncLoad Metodo assincrono que retorna um array do tipo T da gridview
   */
  async load(r) {
    this._options.loading = !0;
    try {
      const t = await r();
      this._data.value = t;
    } finally {
      this._options.loading = !1;
    }
  }
  /**
   * Indica que a GridView terá seleção multipla (checkbox)
   */
  multiple(r) {
    return this._columns.value.push({
      type: "selection",
      multiple: !0,
      width: 2 * Fr,
      disabled: r?.disabled
    }), this;
  }
  /**
   * Indica que a GridView terá seleção simples (radio)
   */
  select(r) {
    return this._columns.value.push({
      type: "selection",
      multiple: !1,
      width: 2 * Fr,
      disabled: r?.disabled
    }), this;
  }
  /**
   * Adiciona suporte a scroll horizontal na tabela.
   * As colunas definidas antes destes metodos serão fixadas a esquerda
   * A largura total da tabela é computada pela somas dos width de cada coluna. Quando uma GridView utiliza
   * este metodo, todas as colunas de tamanho variavel devem estar preenchidas para o scroll funcionar corretamente
   */
  freeze() {
    for (let r = 0; r < this._columns.length; r++)
      this._columns[r].fixed = "left", this._columns[r].width || alert(
        "O metodo GridViewExOptions.freeze() encontrou colunas sem definição de tamanho antes de chamar o metodo"
      );
    return this;
  }
  useProfile(r) {
    return Mr.get(this._profileID).then((t) => {
      if (t) {
        const s = JSON.parse(t);
        if (this._columns.value = j_(this._columns.value, s.columns), this._options.pagination.pageSize = s.pageSize || 10, this._sortColumnKey.value = s.sortColumnKey || null, this._sortOrder.value = s.sortOrder || null, s.sortColumnKey) {
          const l = this._columns.value.find(
            (d) => d.key == s.sortColumnKey
          );
          l && (l.sortOrder = s.sortOrder);
        }
      }
      const c = {
        title: " ",
        key: "_last",
        width: void 0,
        // deve ser undefined pra indicar que ela cresce
        render: (s) => " "
      };
      this._columns.value.push(c), this._profileID = r || eb(this._key);
    }), this;
  }
  /**
   * Adiciona uma coluna do tipo botão na gridview
   * @param text Texto a exibir no botão
   * @param onclick Evento do click do botão
   * @param options Opções de renderização (align, disabled, width, color, mode, title, icon)
   */
  button(r, t, c) {
    const s = {
      key: r,
      title: " ",
      align: c?.align,
      disabled: c?.disabled,
      width: Ln(c?.width, 3),
      render(l) {
        return su(
          wt,
          {
            color: c?.color || "default",
            mode: c?.mode || "default",
            mini: c?.mini,
            title: c?.title,
            icon: c?.icon,
            onClick: () => t(l)
          },
          { default: () => r }
        );
      }
    };
    return this._columns.value.push(s), this;
  }
  /**
   * Adiciona uma coluna do tipo botão com um icone na GridView
   * @param name Referencia do icone. Utilizar import { NomeIcone } from "@vicons/ionicons5"
   * @param onclick Metodo para capturar o evento de click neste icone
   * @param options Opções de renderização (width, align, title, color, disabled)
   */
  icon(r, t, c) {
    const s = {
      key: r.name,
      title: " ",
      align: c?.align || "center",
      width: Ln(c?.width, 2),
      render(l) {
        const d = c?.disabled && c?.disabled(l);
        return su(Du, {
          name: r,
          title: c?.title,
          style: {
            //--default-font, primary-color
            color: `var(--${d ? "disabled-color" : c?.color ? c.color + "-color" : "default-font"})`,
            cursor: d ? "not-allowed" : "pointer"
          },
          onclick: () => {
            d || t(l);
          }
        });
      }
    };
    return this._columns.value.push(s), this;
  }
  /**
   * Adiciona uma coluna a GridView do tipo edição de registro. Pode renderizar apenas um icone (quando o parametro onClickOrUrl for uma função)
   * ou renderizar um link com um icone apontando para o template de navegacao.
   * Um template de navegação é representado por ex "/pat/processo/{idProcesso}" aonde idProcesso é um field do objeto row T
   * @param onClickOrUrl Quando um metodo, dispara no click do icone passando a row T. Se uma string, é um template de navegação
   * @param options Opções de renderização ()
   */
  edit(r, t) {
    const c = {
      title: "Editar registro",
      color: "primary"
    };
    if (Object.assign(c, t), typeof r == "function")
      return this.icon(Al, r, c);
    const s = {
      key: "edit",
      title: " ",
      align: t?.align || "center",
      width: Ln(t?.width, 2),
      render(l) {
        const d = t?.disabled && t.disabled(l), f = () => su(Du, {
          name: Al,
          title: t?.title || "Editar registro",
          style: {
            //--default-font, primary-color
            color: d ? "var(--disabled-color)" : `var(--${t?.color ? t.color + "-color" : "primary-color"})`,
            cursor: d ? "not-allowed" : "pointer"
          }
        });
        return d ? su("span", null, f()) : su(
          H3,
          {
            to: r.replace(/(\{[\w\\.]+\})/g, (_) => {
              const m = _.substring(1, _.length - 1);
              return mu.get(l, m);
            })
          },
          f
        );
      }
    };
    return this._columns.value.push(s), this;
  }
  /**
   * Adiciona uma coluna na gridview com os dados vinculadas ao field do dataSource
   * @param header Titulo na header
   * @param key Chave/Caminho para obter o dado do objeto
   * @param width Largura da coluna (em 'rem'). Sempre deixar uma das colunas sem este parametro (= null) para o responsivo
   * @param options Opções de renderização (align, disabled, format)
   */
  column(r, t, c, s) {
    const l = {
      title: r,
      key: t,
      width: Ln(c, void 0),
      align: s?.align,
      visible: Qe(s?.visible) ? !0 : !!s?.visible,
      disabled: s?.disabled,
      sorter: (d, f) => f0(t, d, f)
    };
    return s?.format && (l.render = (d) => {
      const f = mu.get(d, t);
      return typeof f == "string" ? zn(f, s.format) : Ar.format(f, s.format);
    }), l.filterInfo = J_(l, s), this._columns.value.push(l), this;
  }
  /**
   * Adiciona uma coluna que testa o campo (que deve ser boolean) e exibe um icone de Check ou X (ex: fgAtivo)
   * @param header Texto a exibir no botão
   * @param field Nome do campo do objeto T
   * @param options Opções de renderização (align, width)
   */
  boolean(r, t, c, s) {
    const l = {
      key: t,
      title: r,
      align: s?.align || "center",
      width: Ln(c, 2),
      visible: Qe(s?.visible) ? !0 : !!s?.visible,
      sorter: (d, f) => f0(t, d, f),
      render(d) {
        const f = mu.get(d, t);
        return su(Du, {
          name: f === !0 ? i6 : f === !1 ? m6 : L6
        });
      }
    };
    return l.filterInfo = X_(), this._columns.value.push(l), this;
  }
  /**
   * Renderiza um componente ou um texto ou componente no lugar da coluna. Utilizado para condicionais ou colunas avançadas
   * @param header Titulo na header
   * @param width Largura da coluna (em rem)
   * @param fn Função de renderização. Retorna um componente ou um texto
   * @param options Opções de renderização (align, disabled, sort)
   */
  render(r, t = null, c, s) {
    const l = {
      title: r,
      width: Ln(t, void 0),
      visible: Qe(s?.visible) ? !0 : !!s?.visible,
      align: s?.align,
      disabled: s?.disabled,
      render: c
    };
    return s?.sort && (l.sorter = (d, f) => f0(s.sort, d, f)), this._columns.value.push(l), this;
  }
  createControl(r, t, { header: c, field: s, width: l, controlOptions: d, options: f }) {
    const _ = (m) => {
      const w = {
        [t]: mu.get(m, s),
        ["onUpdate:" + t]: (y) => mu.set(m, s, y),
        disabled: f?.disabled ? f?.disabled(m) : !1
      };
      return Object.assign(w, d), su(r, w);
    };
    return this.render(c, l, _, f);
  }
  /**
   * Renderiza um componente do tipo InputBox e faz bind do value com a field informado.
   * @param header Titulo na header
   * @param field Nome do campo
   * @param width Largura da coluna (em rem)
   * @param inputOptions Opções de customização do objeto InputBox (suas propriedades/eventos)
   * @param options Opções de renderização (align, disabled, sort)
   */
  inputbox(r, t, c, s, l) {
    return this.createControl(Hn, "value", {
      header: r,
      field: t,
      width: c,
      controlOptions: s,
      options: l
    });
  }
  /**
   * Renderiza um componente do tipo ComboBox e faz bind do value com a field informado. Para popular a combo, utilize comboOptions
   * @param header Titulo na header
   * @param field Nome do campo
   * @param width Largura da coluna (em rem)
   * @param comboOptions Opções para customizar o componente de ComboBox. Utilize este campo para popular a combo. { options: [...], valueKey: "idPessoa", textKey: "noPessoa" })
   * @param options Opções de renderização (align, disabled, sort)
   */
  combobox(r, t, c, s, l) {
    return this.createControl(B0, "value", {
      header: r,
      field: t,
      width: c,
      controlOptions: s,
      options: l
    });
  }
  /**
   * Renderiza um componente do tipo NumberBox e faz bind do value com a field informado.
   * @param header Titulo na header
   * @param field Nome do campo
   * @param width Largura da coluna (em rem)
   * @param numberOptions Opções para customizar o componente de NumberBox.
   * @param options Opções de renderização (align, disabled, sort)
   */
  numberbox(r, t, c, s, l) {
    return this.createControl(L0, "value", {
      header: r,
      field: t,
      width: c,
      controlOptions: s,
      options: l
    });
  }
  /**
   * Renderiza um componente do tipo CheckBox e faz bind do checked (boolean) com a field informado.
   * @param header Titulo na header
   * @param field Nome do campo
   * @param width Largura da coluna (em rem)
   * @param checkboxOptions Opções para customizar o componente de CheckBox.
   * @param options Opções de renderização (align, disabled, sort)
   */
  checkbox(r, t, c, s, l) {
    return this.createControl(ls, "checked", {
      header: r,
      field: t,
      width: c,
      controlOptions: s,
      options: l
    });
  }
  /**
   * Renderiza um componente do tipo DateBox e faz bind do date (Date) com a field informado.
   * @param header Titulo na header
   * @param field Nome do campo
   * @param width Largura da coluna (em rem)
   * @param dateboxOptions Opções para customizar o componente de DateBox.
   * @param options Opções de renderização (align, disabled, sort)
   */
  datebox(r, t, c, s, l) {
    return this.createControl(Lr, "date", {
      header: r,
      field: t,
      width: c,
      controlOptions: s,
      options: l
    });
  }
  //
  createOptions() {
    const r = this, t = wr({
      profileID: De(() => this._profileID),
      scrollX: De((c) => (document.querySelector(".main-content")?.offsetWidth, t.visibleColumns.map((l) => l.width).filter((l) => parseInt(l) > 0).reduce((l, d) => l + d, 0))),
      // mantem undefined até chamar scrollX() na definição
      // retorna apenas as colunas que devem aparecer na grid
      visibleColumns: De(() => this._columns.value.filter(
        (c) => c.visible === void 0 || c.visible
      )),
      // indica se esta utilizando profile
      useProfile: De(() => !!this._profileID),
      // indica se a tela de filtro está aberta
      showFilter: oe(!1),
      // retorna todas as colunas, mesmo as que não devem aparecer na grid
      columns: this._columns,
      // retorna o componente correto conforme filtro selecionado
      filterComponent: (c, s) => {
        const l = s.filterInfo, d = V_[l.component];
        d || alert("Controle não encontrado: " + l.component);
        const f = d[0], _ = {
          [f]: l.value[c],
          ["onUpdate:" + f]: (m) => l.value[c] = m,
          valueKey: "value",
          textKey: "text"
        };
        return pn(l.component, "ComboBox") === 0 && (l.options.length === 0 ? (_.options = De(() => [...new Set(
          this._data.value.map((y) => mu.get(y, s.key))
        )].map((y) => ({ value: y, text: y }))), _.multiple = !0) : _.options = l.options), c == 1 && l.op !== "between" ? null : su(d[1](), _);
      },
      filterClear: (c) => {
        c.filterInfo.op = null, c.filterInfo.value = [null];
      },
      filterClearAll: () => {
        this._columns.value.forEach((c) => {
          c.filterInfo && (c.filterInfo.op = null, c.filterInfo.value = [null]);
        });
      },
      filterLabel: De(() => this.getFilterLabel()),
      filters: De(() => this.getFilters()),
      totalCount: De(() => this._data.value.length),
      data: De(() => this.applyFilter()),
      loading: oe(!1),
      exportToExcel: () => {
        H_(this.getFilterLabel(), this.getExcelData()), k0.success("Tabela copiada para o clipboard com sucesso");
      },
      pagination: {
        pageSize: 10,
        pageSizes: [
          { value: 10, label: "10" },
          { value: 25, label: "25" },
          { value: 50, label: "50" },
          { value: 100, label: "100" },
          { value: 500, label: "500" }
        ],
        showSizePicker: !0,
        onChange: (c) => {
          t.pagination.page = c;
        },
        onUpdatePageSize: (c) => {
          t.pagination.pageSize = c, t.pagination.page = 1;
        }
      },
      profileInfo: De(
        () => Q_(
          this._columns.value,
          t,
          this._sortColumnKey?.value,
          this._sortOrder?.value
        )
      ),
      selectedItems: this._selectedItems,
      rowKey: (c) => mu.get(c, this._key),
      handleCheck(c) {
        r._selectedItems.value = c;
      },
      handleSort(c) {
        if (r._sortColumnKey.value) {
          const s = r._columns.value.find(
            (l) => l.key == r._sortColumnKey.value
          );
          s && (s.sortOrder = !1);
        }
        if (r._sortColumnKey.value = c?.columnKey || null, r._sortOrder.value = c?.order || null, r._sortColumnKey.value) {
          const s = r._columns.value.find(
            (l) => l.key == r._sortColumnKey.value
          );
          s && (s.sortOrder = r._sortOrder.value);
        }
      }
    });
    return bn(
      () => t.profileInfo,
      (c) => {
        this._profileID && Mr.set(this._profileID, JSON.stringify(c));
      }
    ), t;
  }
}
function Ln(u, r) {
  return u == null ? r * Fr : u * Fr;
}
function f0(u, r, t) {
  const c = mu.get(r, u), s = mu.get(t, u);
  return pn(c, s);
}
function J_(u, r) {
  let t = "InputBox", c = (l) => l, s = as.map((l) => ({
    label: l[0],
    value: l[1]
  }));
  return r?.format && (c = (l) => Ar.format(l, r.format)), r?.format?.startsWith("c") ? t = "MoneyBox" : r?.format?.startsWith("n") ? (t = "NumberBox", c = (l) => '"' + Ar.format(l, "yyyy-MM-dd") + '"') : r?.format?.startsWith("d") && (t = "DateBox", c = (l) => '"' + Ar.format(l, "yyyy-MM-dd") + '"'), r?.filter && (t = r?.filter), pn(t, "ComboBox") === 0 && (s = []), {
    component: t,
    options: [],
    format: c,
    ops: s,
    op: null,
    value: []
  };
}
function X_() {
  return {
    component: "ComboBox",
    options: [
      { value: !0, text: "Sim" },
      { value: !1, text: "Não" }
    ],
    format: (u) => u ? "Sim" : "Não",
    ops: [],
    op: null,
    value: []
  };
}
function Q_(u, r, t, c) {
  return {
    columns: u.filter((s) => s.visible !== void 0 && s.filterInfo).map((s) => ({
      field: s.key,
      visible: s.visible,
      op: s.filterInfo.op,
      value: s.filterInfo.value
    })),
    pageSize: r.pagination.pageSize,
    sortColumnKey: t,
    sortOrder: c
  };
}
function j_(u, r) {
  const t = [];
  let c = 0;
  for (let s = 0; s < u.length; s++) {
    const l = u[s], d = r.findIndex((f) => f.field == l.key);
    d == -1 ? (t[s] = l, c++) : (l.visible = r[d].visible, l.filterInfo.op = r[d].op, l.filterInfo.value = r[d].value, t[c + d] = l);
  }
  return t;
}
function eb(u) {
  const t = Yl().path + "_" + u;
  return "grd_" + R0(t);
}
const ub = /* @__PURE__ */ V({
  __name: "CheckGroup",
  setup(u) {
    return (r, t) => (N(), le(re($3), null, {
      default: Ce(() => [
        ge(r.$slots, "default")
      ]),
      _: 3
    }));
  }
}), fs = /* @__PURE__ */ V({
  __name: "MaskBox",
  props: {
    value: { default: () => "" },
    mask: { default: () => "" },
    mini: { type: Boolean, default: () => !1 }
  },
  emits: ["update:value"],
  setup(u, { emit: r }) {
    const t = u, c = oe(zn(t.value, t.mask)), s = oe(null);
    yt(() => l(t.value)), bn(
      () => t.value,
      (f) => {
        if (f === null && s.value !== null && (c.value = s.value = null), f === null)
          return;
        const _ = zn(f, t.mask);
        c.value = _;
      }
    );
    function l(f) {
      const _ = zn(f, t.mask);
      _ !== s.value && r("update:value", Dr(_)), s.value = _;
    }
    function d() {
      const f = zn(c.value, t.mask);
      c.value = f;
    }
    return (f, _) => (N(), le(Hn, {
      value: c.value,
      "onUpdate:value": [
        _[0] || (_[0] = (m) => c.value = m),
        l
      ],
      class: ye(["memo-box", { mini: t.mini }]),
      maxlength: t.mask.length,
      "onUpdate:maxlength": _[1] || (_[1] = (m) => t.mask.length = m),
      onBlur: d
    }, null, 8, ["value", "class", "maxlength"]));
  }
}), nb = /* @__PURE__ */ V({
  __name: "CpfBox",
  setup(u) {
    return (r, t) => (N(), le(fs, {
      mask: "999.999.999-99",
      class: "cpf-box"
    }));
  }
}), tb = /* @__PURE__ */ V({
  __name: "EmailBox",
  props: {
    mini: { type: Boolean, default: () => !1 }
  },
  setup(u) {
    const r = u;
    return (t, c) => (N(), le(Hn, {
      "input-props": { type: "email" },
      class: ye({ mini: r.mini })
    }, null, 8, ["class"]));
  }
}), rb = /* @__PURE__ */ V({
  __name: "MemoBox",
  setup(u) {
    return (r, t) => (N(), le(Hn, { type: "textarea" }));
  }
}), ib = /* @__PURE__ */ V({
  __name: "MonthBox",
  setup(u) {
    return (r, t) => (N(), le(Lr, {
      type: "month",
      format: "MM/yyyy",
      class: "month-box"
    }));
  }
}), ob = /* @__PURE__ */ V({
  __name: "RadioBox",
  props: {
    mini: { type: Boolean, default: () => !1 }
  },
  setup(u) {
    const r = u;
    return (t, c) => (N(), le(re(P3), {
      class: ye({ mini: r.mini })
    }, {
      default: Ce(() => [
        ge(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), cb = /* @__PURE__ */ V({
  __name: "RadioGroup",
  setup(u) {
    return (r, t) => {
      const c = Cu("n-space");
      return N(), le(re(z3), null, {
        default: Ce(() => [
          Be(c, null, {
            default: Ce(() => [
              ge(r.$slots, "default")
            ]),
            _: 3
          })
        ]),
        _: 3
      });
    };
  }
}), lb = /* @__PURE__ */ V({
  __name: "SearchBox",
  props: {
    modelValue: null,
    searchApiFn: null,
    valueKey: null,
    textKey: null,
    delay: { default: () => 0.4 }
  },
  emits: ["update:modelValue"],
  setup(u, { emit: r }) {
    const t = u, c = oe(
      "Initial"
      /* Initial */
    ), s = oe(null), l = oe(null), d = oe(null), f = oe([]), _ = oe(!1), m = oe();
    bn(() => t.modelValue, w), bn(() => d.value, y);
    async function w(O) {
      if (O === s.value)
        return;
      const R = S(O);
      if (R == null)
        D();
      else
        try {
          _.value = !0;
          const G = {
            [t.valueKey]: R,
            [t.textKey]: null
          }, ue = await t.searchApiFn(G);
          ue.length > 0 ? (c.value = "Selected", s.value = R, l.value = ue[0][t.textKey], d.value = ue[0][t.textKey]) : D();
        } finally {
          _.value = !1;
        }
    }
    async function y(O) {
      (c.value === "Typing" || c.value === "Clear") && (E(O) === null ? D() : await A(O));
    }
    function F(O) {
      c.value = "Selected";
      const R = S(O);
      s.value = R, l.value = f.value.find((G) => G.value === O).label, r("update:modelValue", R);
    }
    function M() {
      c.value = "Typing";
    }
    function x() {
      c.value === "Typing" && (s.value === null || d.value !== l.value ? D() : c.value = "Selected");
    }
    async function A(O) {
      t.delay > 0 ? (clearTimeout(m.value), m.value = setTimeout(async () => {
        await I(O);
      }, t.delay * 1e3)) : await I(O);
    }
    async function I(O) {
      try {
        _.value = !0;
        const R = {
          [t.valueKey]: null,
          [t.textKey]: O
        }, G = await t.searchApiFn(R);
        f.value = G.map((ue) => ({
          value: ue[t.valueKey],
          label: ue[t.textKey]
        }));
      } finally {
        _.value = !1;
      }
    }
    function D() {
      c.value = "Clear", s.value = null, l.value = null, d.value = null, t.modelValue !== null && r("update:modelValue", null);
    }
    function S(O) {
      return O == null || O === "" ? null : O;
    }
    function E(O) {
      return O == null || O === "" || O.toString().trim().length === 0 ? null : O;
    }
    return (O, R) => (N(), le(re(N3), {
      value: d.value,
      "onUpdate:value": R[0] || (R[0] = (G) => d.value = G),
      options: f.value,
      onFocus: M,
      onBlur: x,
      onSelect: F,
      placeholder: "",
      loading: _.value,
      clearable: "",
      "blur-after-select": ""
    }, null, 8, ["value", "options", "loading"]));
  }
}), sb = { class: "card n-block" }, ab = {
  key: 0,
  class: "card-header"
}, fb = { class: "card-header-left" }, db = { class: "card-title" }, hb = { class: "card-header-right" }, pb = { class: "card-content" }, _b = /* @__PURE__ */ V({
  __name: "Card",
  props: {
    title: null,
    icon: null,
    modelValue: { type: Boolean },
    showReset: { type: Boolean }
  },
  emits: ["update:modelValue", "reset"],
  setup(u, { emit: r }) {
    const c = oe(!!u.modelValue), s = De(
      () => c.value ? s6 : h6
    );
    function l() {
      c.value = !c.value, r("update:modelValue", c.value);
    }
    function d() {
      r("reset", null);
    }
    return (f, _) => (N(), j("div", sb, [
      u.title ? (N(), j("div", ab, [
        U("div", fb, [
          u.icon ? (N(), le(Du, {
            key: 0,
            name: u.icon
          }, null, 8, ["name"])) : Ie("", !0),
          U("div", db, gu(u.title), 1),
          ge(f.$slots, "header-left")
        ]),
        U("div", hb, [
          ht(Be(wt, {
            icon: re(__),
            mini: !0,
            style: { "margin-right": "1rem" },
            onClick: d
          }, {
            default: Ce(() => [
              Su(" Limpar ")
            ]),
            _: 1
          }, 8, ["icon"]), [
            [pt, u.showReset]
          ]),
          Be(Du, {
            name: re(s),
            onClick: l
          }, null, 8, ["name"])
        ])
      ])) : Ie("", !0),
      ht(U("div", pb, [
        ge(f.$slots, "default")
      ], 512), [
        [pt, !c.value]
      ])
    ]));
  }
}), ds = /* @__PURE__ */ V({
  __name: "DraggableDiv",
  props: {
    profileKey: null
  },
  setup(u) {
    const r = u, t = wr({
      top: void 0,
      left: void 0,
      height: void 0,
      widht: void 0
    }), c = wr({
      clientX: void 0,
      clientY: void 0,
      movementX: 0,
      movementY: 0
    }), s = wr({
      clientX: void 0,
      clientY: void 0,
      movementX: 0,
      movementY: 0
    }), l = oe();
    yt(async () => {
      if (!r.profileKey)
        return;
      const M = await Mr.get(r.profileKey);
      if (M) {
        let { top: x, left: A, height: I, width: D } = JSON.parse(M);
        const S = window.innerHeight, E = window.innerWidth;
        (x < 0 || x > S) && (x = 0), (A < 0 || A > E) && (A = 0), (I < 0 || I > S) && (I = S - 30), (D < 0 || D > E) && (D = E - 30), x + I > S && (x = S - I), A + D > E && (A = E - D), t.top = x + "px", t.left = A + "px", t.width = D + "px", t.height = I + "px";
      }
    });
    function d(M) {
      M.preventDefault(), c.clientX = M.clientX, c.clientY = M.clientY, document.addEventListener("mousemove", f, !1), document.addEventListener("mouseup", _, !1);
    }
    function f(M) {
      M.preventDefault(), c.movementX = c.clientX - M.clientX, c.movementY = c.clientY - M.clientY, c.clientX = M.clientX, c.clientY = M.clientY, t.top = l.value.offsetTop - c.movementY + "px", t.left = l.value.offsetLeft - c.movementX + "px", F();
    }
    function _() {
      document.removeEventListener("mousemove", f), document.removeEventListener("mouseup", _);
    }
    function m(M) {
      M.preventDefault(), s.clientX = M.clientX, s.clientY = M.clientY, t.top = l.value.offsetTop + "px", t.left = l.value.offsetLeft + "px", F(), document.addEventListener("mousemove", w, !1), document.addEventListener("mouseup", y, !1);
    }
    function w(M) {
      M.preventDefault(), s.movementX = s.clientX - M.clientX, s.movementY = s.clientY - M.clientY, s.clientX = M.clientX, s.clientY = M.clientY, t.width = l.value.offsetWidth - s.movementX + "px", t.height = l.value.offsetHeight - s.movementY + "px", F();
    }
    function y() {
      document.removeEventListener("mousemove", w), document.removeEventListener("mouseup", y);
    }
    function F() {
      if (!r.profileKey)
        return;
      const M = JSON.stringify({
        top: l.value.offsetTop,
        left: l.value.offsetLeft,
        height: l.value.offsetHeight,
        width: l.value.offsetWidth
      });
      Mr.set(r.profileKey, M);
    }
    return (M, x) => (N(), j("div", {
      ref_key: "el",
      ref: l,
      class: "draggable-container",
      style: Vl(t)
    }, [
      U("div", {
        class: "draggable-header",
        onMousedown: d
      }, [
        ge(M.$slots, "header")
      ], 32),
      ge(M.$slots, "main"),
      ge(M.$slots, "footer"),
      U("div", {
        class: "draggable-resize",
        onMousedown: m
      }, "◢", 32)
    ], 4));
  }
}), El = {};
function bb(u) {
  let r = El[u];
  if (r)
    return r;
  r = El[u] = [];
  for (let t = 0; t < 128; t++) {
    const c = String.fromCharCode(t);
    r.push(c);
  }
  for (let t = 0; t < u.length; t++) {
    const c = u.charCodeAt(t);
    r[c] = "%" + ("0" + c.toString(16).toUpperCase()).slice(-2);
  }
  return r;
}
function Un(u, r) {
  typeof r != "string" && (r = Un.defaultChars);
  const t = bb(r);
  return u.replace(/(%[a-f0-9]{2})+/gi, function(c) {
    let s = "";
    for (let l = 0, d = c.length; l < d; l += 3) {
      const f = parseInt(c.slice(l + 1, l + 3), 16);
      if (f < 128) {
        s += t[f];
        continue;
      }
      if ((f & 224) === 192 && l + 3 < d) {
        const _ = parseInt(c.slice(l + 4, l + 6), 16);
        if ((_ & 192) === 128) {
          const m = f << 6 & 1984 | _ & 63;
          m < 128 ? s += "��" : s += String.fromCharCode(m), l += 3;
          continue;
        }
      }
      if ((f & 240) === 224 && l + 6 < d) {
        const _ = parseInt(c.slice(l + 4, l + 6), 16), m = parseInt(c.slice(l + 7, l + 9), 16);
        if ((_ & 192) === 128 && (m & 192) === 128) {
          const w = f << 12 & 61440 | _ << 6 & 4032 | m & 63;
          w < 2048 || w >= 55296 && w <= 57343 ? s += "���" : s += String.fromCharCode(w), l += 6;
          continue;
        }
      }
      if ((f & 248) === 240 && l + 9 < d) {
        const _ = parseInt(c.slice(l + 4, l + 6), 16), m = parseInt(c.slice(l + 7, l + 9), 16), w = parseInt(c.slice(l + 10, l + 12), 16);
        if ((_ & 192) === 128 && (m & 192) === 128 && (w & 192) === 128) {
          let y = f << 18 & 1835008 | _ << 12 & 258048 | m << 6 & 4032 | w & 63;
          y < 65536 || y > 1114111 ? s += "����" : (y -= 65536, s += String.fromCharCode(55296 + (y >> 10), 56320 + (y & 1023))), l += 9;
          continue;
        }
      }
      s += "�";
    }
    return s;
  });
}
Un.defaultChars = ";/?:@&=+$,#";
Un.componentChars = "";
const Dl = {};
function mb(u) {
  let r = Dl[u];
  if (r)
    return r;
  r = Dl[u] = [];
  for (let t = 0; t < 128; t++) {
    const c = String.fromCharCode(t);
    /^[0-9a-z]$/i.test(c) ? r.push(c) : r.push("%" + ("0" + t.toString(16).toUpperCase()).slice(-2));
  }
  for (let t = 0; t < u.length; t++)
    r[u.charCodeAt(t)] = u[t];
  return r;
}
function Ct(u, r, t) {
  typeof r != "string" && (t = r, r = Ct.defaultChars), typeof t > "u" && (t = !0);
  const c = mb(r);
  let s = "";
  for (let l = 0, d = u.length; l < d; l++) {
    const f = u.charCodeAt(l);
    if (t && f === 37 && l + 2 < d && /^[0-9a-f]{2}$/i.test(u.slice(l + 1, l + 3))) {
      s += u.slice(l, l + 3), l += 2;
      continue;
    }
    if (f < 128) {
      s += c[f];
      continue;
    }
    if (f >= 55296 && f <= 57343) {
      if (f >= 55296 && f <= 56319 && l + 1 < d) {
        const _ = u.charCodeAt(l + 1);
        if (_ >= 56320 && _ <= 57343) {
          s += encodeURIComponent(u[l] + u[l + 1]), l++;
          continue;
        }
      }
      s += "%EF%BF%BD";
      continue;
    }
    s += encodeURIComponent(u[l]);
  }
  return s;
}
Ct.defaultChars = ";/?:@&=+$,-_.!~*'()#";
Ct.componentChars = "-_.!~*'()";
function $0(u) {
  let r = "";
  return r += u.protocol || "", r += u.slashes ? "//" : "", r += u.auth ? u.auth + "@" : "", u.hostname && u.hostname.indexOf(":") !== -1 ? r += "[" + u.hostname + "]" : r += u.hostname || "", r += u.port ? ":" + u.port : "", r += u.pathname || "", r += u.search || "", r += u.hash || "", r;
}
function Ir() {
  this.protocol = null, this.slashes = null, this.auth = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.pathname = null;
}
const gb = /^([a-z0-9.+-]+:)/i, xb = /:[0-9]*$/, vb = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, yb = ["<", ">", '"', "`", " ", "\r", `
`, "	"], kb = ["{", "}", "|", "\\", "^", "`"].concat(yb), wb = ["'"].concat(kb), Sl = ["%", "/", "?", ";", "#"].concat(wb), Ml = ["/", "?", "#"], Cb = 255, Fl = /^[+a-z0-9A-Z_-]{0,63}$/, Ab = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, Il = {
  javascript: !0,
  "javascript:": !0
}, Tl = {
  http: !0,
  https: !0,
  ftp: !0,
  gopher: !0,
  file: !0,
  "http:": !0,
  "https:": !0,
  "ftp:": !0,
  "gopher:": !0,
  "file:": !0
};
function P0(u, r) {
  if (u && u instanceof Ir)
    return u;
  const t = new Ir();
  return t.parse(u, r), t;
}
Ir.prototype.parse = function(u, r) {
  let t, c, s, l = u;
  if (l = l.trim(), !r && u.split("#").length === 1) {
    const m = vb.exec(l);
    if (m)
      return this.pathname = m[1], m[2] && (this.search = m[2]), this;
  }
  let d = gb.exec(l);
  if (d && (d = d[0], t = d.toLowerCase(), this.protocol = d, l = l.substr(d.length)), (r || d || l.match(/^\/\/[^@\/]+@[^@\/]+/)) && (s = l.substr(0, 2) === "//", s && !(d && Il[d]) && (l = l.substr(2), this.slashes = !0)), !Il[d] && (s || d && !Tl[d])) {
    let m = -1;
    for (let x = 0; x < Ml.length; x++)
      c = l.indexOf(Ml[x]), c !== -1 && (m === -1 || c < m) && (m = c);
    let w, y;
    m === -1 ? y = l.lastIndexOf("@") : y = l.lastIndexOf("@", m), y !== -1 && (w = l.slice(0, y), l = l.slice(y + 1), this.auth = w), m = -1;
    for (let x = 0; x < Sl.length; x++)
      c = l.indexOf(Sl[x]), c !== -1 && (m === -1 || c < m) && (m = c);
    m === -1 && (m = l.length), l[m - 1] === ":" && m--;
    const F = l.slice(0, m);
    l = l.slice(m), this.parseHost(F), this.hostname = this.hostname || "";
    const M = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
    if (!M) {
      const x = this.hostname.split(/\./);
      for (let A = 0, I = x.length; A < I; A++) {
        const D = x[A];
        if (D && !D.match(Fl)) {
          let S = "";
          for (let E = 0, O = D.length; E < O; E++)
            D.charCodeAt(E) > 127 ? S += "x" : S += D[E];
          if (!S.match(Fl)) {
            const E = x.slice(0, A), O = x.slice(A + 1), R = D.match(Ab);
            R && (E.push(R[1]), O.unshift(R[2])), O.length && (l = O.join(".") + l), this.hostname = E.join(".");
            break;
          }
        }
      }
    }
    this.hostname.length > Cb && (this.hostname = ""), M && (this.hostname = this.hostname.substr(1, this.hostname.length - 2));
  }
  const f = l.indexOf("#");
  f !== -1 && (this.hash = l.substr(f), l = l.slice(0, f));
  const _ = l.indexOf("?");
  return _ !== -1 && (this.search = l.substr(_), l = l.slice(0, _)), l && (this.pathname = l), Tl[t] && this.hostname && !this.pathname && (this.pathname = ""), this;
};
Ir.prototype.parseHost = function(u) {
  let r = xb.exec(u);
  r && (r = r[0], r !== ":" && (this.port = r.substr(1)), u = u.substr(0, u.length - r.length)), u && (this.hostname = u);
};
const Eb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, decode: Un, encode: Ct, format: $0, parse: P0 }, Symbol.toStringTag, { value: "Module" })), hs = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, ps = /[\0-\x1F\x7F-\x9F]/, Db = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/, z0 = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/, _s = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/, Sb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, Any: hs, Cc: ps, Cf: Db, P: z0, Z: _s }, Symbol.toStringTag, { value: "Module" })), Mb = new Uint16Array(
  // prettier-ignore
  'ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map((u) => u.charCodeAt(0))
), Fb = new Uint16Array(
  // prettier-ignore
  "Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map((u) => u.charCodeAt(0))
);
var d0;
const Ib = /* @__PURE__ */ new Map([
  [0, 65533],
  // C1 Unicode control character reference replacements
  [128, 8364],
  [130, 8218],
  [131, 402],
  [132, 8222],
  [133, 8230],
  [134, 8224],
  [135, 8225],
  [136, 710],
  [137, 8240],
  [138, 352],
  [139, 8249],
  [140, 338],
  [142, 381],
  [145, 8216],
  [146, 8217],
  [147, 8220],
  [148, 8221],
  [149, 8226],
  [150, 8211],
  [151, 8212],
  [152, 732],
  [153, 8482],
  [154, 353],
  [155, 8250],
  [156, 339],
  [158, 382],
  [159, 376]
]), Tb = (
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, node/no-unsupported-features/es-builtins
  (d0 = String.fromCodePoint) !== null && d0 !== void 0 ? d0 : function(u) {
    let r = "";
    return u > 65535 && (u -= 65536, r += String.fromCharCode(u >>> 10 & 1023 | 55296), u = 56320 | u & 1023), r += String.fromCharCode(u), r;
  }
);
function Ob(u) {
  var r;
  return u >= 55296 && u <= 57343 || u > 1114111 ? 65533 : (r = Ib.get(u)) !== null && r !== void 0 ? r : u;
}
var Se;
(function(u) {
  u[u.NUM = 35] = "NUM", u[u.SEMI = 59] = "SEMI", u[u.EQUALS = 61] = "EQUALS", u[u.ZERO = 48] = "ZERO", u[u.NINE = 57] = "NINE", u[u.LOWER_A = 97] = "LOWER_A", u[u.LOWER_F = 102] = "LOWER_F", u[u.LOWER_X = 120] = "LOWER_X", u[u.LOWER_Z = 122] = "LOWER_Z", u[u.UPPER_A = 65] = "UPPER_A", u[u.UPPER_F = 70] = "UPPER_F", u[u.UPPER_Z = 90] = "UPPER_Z";
})(Se || (Se = {}));
const Rb = 32;
var en;
(function(u) {
  u[u.VALUE_LENGTH = 49152] = "VALUE_LENGTH", u[u.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", u[u.JUMP_TABLE = 127] = "JUMP_TABLE";
})(en || (en = {}));
function D0(u) {
  return u >= Se.ZERO && u <= Se.NINE;
}
function Bb(u) {
  return u >= Se.UPPER_A && u <= Se.UPPER_F || u >= Se.LOWER_A && u <= Se.LOWER_F;
}
function Lb(u) {
  return u >= Se.UPPER_A && u <= Se.UPPER_Z || u >= Se.LOWER_A && u <= Se.LOWER_Z || D0(u);
}
function $b(u) {
  return u === Se.EQUALS || Lb(u);
}
var Ee;
(function(u) {
  u[u.EntityStart = 0] = "EntityStart", u[u.NumericStart = 1] = "NumericStart", u[u.NumericDecimal = 2] = "NumericDecimal", u[u.NumericHex = 3] = "NumericHex", u[u.NamedEntity = 4] = "NamedEntity";
})(Ee || (Ee = {}));
var ju;
(function(u) {
  u[u.Legacy = 0] = "Legacy", u[u.Strict = 1] = "Strict", u[u.Attribute = 2] = "Attribute";
})(ju || (ju = {}));
class Pb {
  constructor(r, t, c) {
    this.decodeTree = r, this.emitCodePoint = t, this.errors = c, this.state = Ee.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = ju.Strict;
  }
  /** Resets the instance to make it reusable. */
  startEntity(r) {
    this.decodeMode = r, this.state = Ee.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1;
  }
  /**
   * Write an entity to the decoder. This can be called multiple times with partial entities.
   * If the entity is incomplete, the decoder will return -1.
   *
   * Mirrors the implementation of `getDecoder`, but with the ability to stop decoding if the
   * entity is incomplete, and resume when the next string is written.
   *
   * @param string The string containing the entity (or a continuation of the entity).
   * @param offset The offset at which the entity begins. Should be 0 if this is not the first call.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  write(r, t) {
    switch (this.state) {
      case Ee.EntityStart:
        return r.charCodeAt(t) === Se.NUM ? (this.state = Ee.NumericStart, this.consumed += 1, this.stateNumericStart(r, t + 1)) : (this.state = Ee.NamedEntity, this.stateNamedEntity(r, t));
      case Ee.NumericStart:
        return this.stateNumericStart(r, t);
      case Ee.NumericDecimal:
        return this.stateNumericDecimal(r, t);
      case Ee.NumericHex:
        return this.stateNumericHex(r, t);
      case Ee.NamedEntity:
        return this.stateNamedEntity(r, t);
    }
  }
  /**
   * Switches between the numeric decimal and hexadecimal states.
   *
   * Equivalent to the `Numeric character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericStart(r, t) {
    return t >= r.length ? -1 : (r.charCodeAt(t) | Rb) === Se.LOWER_X ? (this.state = Ee.NumericHex, this.consumed += 1, this.stateNumericHex(r, t + 1)) : (this.state = Ee.NumericDecimal, this.stateNumericDecimal(r, t));
  }
  addToNumericResult(r, t, c, s) {
    if (t !== c) {
      const l = c - t;
      this.result = this.result * Math.pow(s, l) + parseInt(r.substr(t, l), s), this.consumed += l;
    }
  }
  /**
   * Parses a hexadecimal numeric entity.
   *
   * Equivalent to the `Hexademical character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericHex(r, t) {
    const c = t;
    for (; t < r.length; ) {
      const s = r.charCodeAt(t);
      if (D0(s) || Bb(s))
        t += 1;
      else
        return this.addToNumericResult(r, c, t, 16), this.emitNumericEntity(s, 3);
    }
    return this.addToNumericResult(r, c, t, 16), -1;
  }
  /**
   * Parses a decimal numeric entity.
   *
   * Equivalent to the `Decimal character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericDecimal(r, t) {
    const c = t;
    for (; t < r.length; ) {
      const s = r.charCodeAt(t);
      if (D0(s))
        t += 1;
      else
        return this.addToNumericResult(r, c, t, 10), this.emitNumericEntity(s, 2);
    }
    return this.addToNumericResult(r, c, t, 10), -1;
  }
  /**
   * Validate and emit a numeric entity.
   *
   * Implements the logic from the `Hexademical character reference start
   * state` and `Numeric character reference end state` in the HTML spec.
   *
   * @param lastCp The last code point of the entity. Used to see if the
   *               entity was terminated with a semicolon.
   * @param expectedLength The minimum number of characters that should be
   *                       consumed. Used to validate that at least one digit
   *                       was consumed.
   * @returns The number of characters that were consumed.
   */
  emitNumericEntity(r, t) {
    var c;
    if (this.consumed <= t)
      return (c = this.errors) === null || c === void 0 || c.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
    if (r === Se.SEMI)
      this.consumed += 1;
    else if (this.decodeMode === ju.Strict)
      return 0;
    return this.emitCodePoint(Ob(this.result), this.consumed), this.errors && (r !== Se.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed;
  }
  /**
   * Parses a named entity.
   *
   * Equivalent to the `Named character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNamedEntity(r, t) {
    const { decodeTree: c } = this;
    let s = c[this.treeIndex], l = (s & en.VALUE_LENGTH) >> 14;
    for (; t < r.length; t++, this.excess++) {
      const d = r.charCodeAt(t);
      if (this.treeIndex = zb(c, s, this.treeIndex + Math.max(1, l), d), this.treeIndex < 0)
        return this.result === 0 || // If we are parsing an attribute
        this.decodeMode === ju.Attribute && // We shouldn't have consumed any characters after the entity,
        (l === 0 || // And there should be no invalid characters.
        $b(d)) ? 0 : this.emitNotTerminatedNamedEntity();
      if (s = c[this.treeIndex], l = (s & en.VALUE_LENGTH) >> 14, l !== 0) {
        if (d === Se.SEMI)
          return this.emitNamedEntityData(this.treeIndex, l, this.consumed + this.excess);
        this.decodeMode !== ju.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
      }
    }
    return -1;
  }
  /**
   * Emit a named entity that was not terminated with a semicolon.
   *
   * @returns The number of characters consumed.
   */
  emitNotTerminatedNamedEntity() {
    var r;
    const { result: t, decodeTree: c } = this, s = (c[t] & en.VALUE_LENGTH) >> 14;
    return this.emitNamedEntityData(t, s, this.consumed), (r = this.errors) === null || r === void 0 || r.missingSemicolonAfterCharacterReference(), this.consumed;
  }
  /**
   * Emit a named entity.
   *
   * @param result The index of the entity in the decode tree.
   * @param valueLength The number of bytes in the entity.
   * @param consumed The number of characters consumed.
   *
   * @returns The number of characters consumed.
   */
  emitNamedEntityData(r, t, c) {
    const { decodeTree: s } = this;
    return this.emitCodePoint(t === 1 ? s[r] & ~en.VALUE_LENGTH : s[r + 1], c), t === 3 && this.emitCodePoint(s[r + 2], c), c;
  }
  /**
   * Signal to the parser that the end of the input was reached.
   *
   * Remaining data will be emitted and relevant errors will be produced.
   *
   * @returns The number of characters consumed.
   */
  end() {
    var r;
    switch (this.state) {
      case Ee.NamedEntity:
        return this.result !== 0 && (this.decodeMode !== ju.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
      case Ee.NumericDecimal:
        return this.emitNumericEntity(0, 2);
      case Ee.NumericHex:
        return this.emitNumericEntity(0, 3);
      case Ee.NumericStart:
        return (r = this.errors) === null || r === void 0 || r.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
      case Ee.EntityStart:
        return 0;
    }
  }
}
function bs(u) {
  let r = "";
  const t = new Pb(u, (c) => r += Tb(c));
  return function(s, l) {
    let d = 0, f = 0;
    for (; (f = s.indexOf("&", f)) >= 0; ) {
      r += s.slice(d, f), t.startEntity(l);
      const m = t.write(
        s,
        // Skip the "&"
        f + 1
      );
      if (m < 0) {
        d = f + t.end();
        break;
      }
      d = f + m, f = m === 0 ? d + 1 : d;
    }
    const _ = r + s.slice(d);
    return r = "", _;
  };
}
function zb(u, r, t, c) {
  const s = (r & en.BRANCH_LENGTH) >> 7, l = r & en.JUMP_TABLE;
  if (s === 0)
    return l !== 0 && c === l ? t : -1;
  if (l) {
    const _ = c - l;
    return _ < 0 || _ >= s ? -1 : u[t + _] - 1;
  }
  let d = t, f = d + s - 1;
  for (; d <= f; ) {
    const _ = d + f >>> 1, m = u[_];
    if (m < c)
      d = _ + 1;
    else if (m > c)
      f = _ - 1;
    else
      return u[_ + s];
  }
  return -1;
}
const Nb = bs(Mb);
bs(Fb);
function ms(u, r = ju.Legacy) {
  return Nb(u, r);
}
function qb(u) {
  return Object.prototype.toString.call(u);
}
function N0(u) {
  return qb(u) === "[object String]";
}
const Ub = Object.prototype.hasOwnProperty;
function Hb(u, r) {
  return Ub.call(u, r);
}
function $r(u) {
  return Array.prototype.slice.call(arguments, 1).forEach(function(t) {
    if (t) {
      if (typeof t != "object")
        throw new TypeError(t + "must be object");
      Object.keys(t).forEach(function(c) {
        u[c] = t[c];
      });
    }
  }), u;
}
function gs(u, r, t) {
  return [].concat(u.slice(0, r), t, u.slice(r + 1));
}
function q0(u) {
  return !(u >= 55296 && u <= 57343 || u >= 64976 && u <= 65007 || (u & 65535) === 65535 || (u & 65535) === 65534 || u >= 0 && u <= 8 || u === 11 || u >= 14 && u <= 31 || u >= 127 && u <= 159 || u > 1114111);
}
function Tr(u) {
  if (u > 65535) {
    u -= 65536;
    const r = 55296 + (u >> 10), t = 56320 + (u & 1023);
    return String.fromCharCode(r, t);
  }
  return String.fromCharCode(u);
}
const xs = /\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g, Wb = /&([a-z#][a-z0-9]{1,31});/gi, Gb = new RegExp(xs.source + "|" + Wb.source, "gi"), Kb = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;
function Zb(u, r) {
  if (r.charCodeAt(0) === 35 && Kb.test(r)) {
    const c = r[1].toLowerCase() === "x" ? parseInt(r.slice(2), 16) : parseInt(r.slice(1), 10);
    return q0(c) ? Tr(c) : u;
  }
  const t = ms(u);
  return t !== u ? t : u;
}
function Vb(u) {
  return u.indexOf("\\") < 0 ? u : u.replace(xs, "$1");
}
function bt(u) {
  return u.indexOf("\\") < 0 && u.indexOf("&") < 0 ? u : u.replace(Gb, function(r, t, c) {
    return t || Zb(r, c);
  });
}
const Yb = /[&<>"]/, Jb = /[&<>"]/g, Xb = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;"
};
function Qb(u) {
  return Xb[u];
}
function un(u) {
  return Yb.test(u) ? u.replace(Jb, Qb) : u;
}
const jb = /[.?*+^$[\]\\(){}|-]/g;
function em(u) {
  return u.replace(jb, "\\$&");
}
function he(u) {
  switch (u) {
    case 9:
    case 32:
      return !0;
  }
  return !1;
}
function mt(u) {
  if (u >= 8192 && u <= 8202)
    return !0;
  switch (u) {
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 32:
    case 160:
    case 5760:
    case 8239:
    case 8287:
    case 12288:
      return !0;
  }
  return !1;
}
function gt(u) {
  return z0.test(u);
}
function xt(u) {
  switch (u) {
    case 33:
    case 34:
    case 35:
    case 36:
    case 37:
    case 38:
    case 39:
    case 40:
    case 41:
    case 42:
    case 43:
    case 44:
    case 45:
    case 46:
    case 47:
    case 58:
    case 59:
    case 60:
    case 61:
    case 62:
    case 63:
    case 64:
    case 91:
    case 92:
    case 93:
    case 94:
    case 95:
    case 96:
    case 123:
    case 124:
    case 125:
    case 126:
      return !0;
    default:
      return !1;
  }
}
function Pr(u) {
  return u = u.trim().replace(/\s+/g, " "), "ẞ".toLowerCase() === "Ṿ" && (u = u.replace(/ẞ/g, "ß")), u.toLowerCase().toUpperCase();
}
const um = { mdurl: Eb, ucmicro: Sb }, nm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, arrayReplaceAt: gs, assign: $r, escapeHtml: un, escapeRE: em, fromCodePoint: Tr, has: Hb, isMdAsciiPunct: xt, isPunctChar: gt, isSpace: he, isString: N0, isValidEntityCode: q0, isWhiteSpace: mt, lib: um, normalizeReference: Pr, unescapeAll: bt, unescapeMd: Vb }, Symbol.toStringTag, { value: "Module" }));
function tm(u, r, t) {
  let c, s, l, d;
  const f = u.posMax, _ = u.pos;
  for (u.pos = r + 1, c = 1; u.pos < f; ) {
    if (l = u.src.charCodeAt(u.pos), l === 93 && (c--, c === 0)) {
      s = !0;
      break;
    }
    if (d = u.pos, u.md.inline.skipToken(u), l === 91) {
      if (d === u.pos - 1)
        c++;
      else if (t)
        return u.pos = _, -1;
    }
  }
  let m = -1;
  return s && (m = u.pos), u.pos = _, m;
}
function rm(u, r, t) {
  let c, s = r;
  const l = {
    ok: !1,
    pos: 0,
    lines: 0,
    str: ""
  };
  if (u.charCodeAt(s) === 60) {
    for (s++; s < t; ) {
      if (c = u.charCodeAt(s), c === 10 || c === 60)
        return l;
      if (c === 62)
        return l.pos = s + 1, l.str = bt(u.slice(r + 1, s)), l.ok = !0, l;
      if (c === 92 && s + 1 < t) {
        s += 2;
        continue;
      }
      s++;
    }
    return l;
  }
  let d = 0;
  for (; s < t && (c = u.charCodeAt(s), !(c === 32 || c < 32 || c === 127)); ) {
    if (c === 92 && s + 1 < t) {
      if (u.charCodeAt(s + 1) === 32)
        break;
      s += 2;
      continue;
    }
    if (c === 40 && (d++, d > 32))
      return l;
    if (c === 41) {
      if (d === 0)
        break;
      d--;
    }
    s++;
  }
  return r === s || d !== 0 || (l.str = bt(u.slice(r, s)), l.pos = s, l.ok = !0), l;
}
function im(u, r, t) {
  let c, s, l = 0, d = r;
  const f = {
    ok: !1,
    pos: 0,
    lines: 0,
    str: ""
  };
  if (d >= t || (s = u.charCodeAt(d), s !== 34 && s !== 39 && s !== 40))
    return f;
  for (d++, s === 40 && (s = 41); d < t; ) {
    if (c = u.charCodeAt(d), c === s)
      return f.pos = d + 1, f.lines = l, f.str = bt(u.slice(r + 1, d)), f.ok = !0, f;
    if (c === 40 && s === 41)
      return f;
    c === 10 ? l++ : c === 92 && d + 1 < t && (d++, u.charCodeAt(d) === 10 && l++), d++;
  }
  return f;
}
const om = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, parseLinkDestination: rm, parseLinkLabel: tm, parseLinkTitle: im }, Symbol.toStringTag, { value: "Module" })), Mu = {};
Mu.code_inline = function(u, r, t, c, s) {
  const l = u[r];
  return "<code" + s.renderAttrs(l) + ">" + un(l.content) + "</code>";
};
Mu.code_block = function(u, r, t, c, s) {
  const l = u[r];
  return "<pre" + s.renderAttrs(l) + "><code>" + un(u[r].content) + `</code></pre>
`;
};
Mu.fence = function(u, r, t, c, s) {
  const l = u[r], d = l.info ? bt(l.info).trim() : "";
  let f = "", _ = "";
  if (d) {
    const w = d.split(/(\s+)/g);
    f = w[0], _ = w.slice(2).join("");
  }
  let m;
  if (t.highlight ? m = t.highlight(l.content, f, _) || un(l.content) : m = un(l.content), m.indexOf("<pre") === 0)
    return m + `
`;
  if (d) {
    const w = l.attrIndex("class"), y = l.attrs ? l.attrs.slice() : [];
    w < 0 ? y.push(["class", t.langPrefix + f]) : (y[w] = y[w].slice(), y[w][1] += " " + t.langPrefix + f);
    const F = {
      attrs: y
    };
    return `<pre><code${s.renderAttrs(F)}>${m}</code></pre>
`;
  }
  return `<pre><code${s.renderAttrs(l)}>${m}</code></pre>
`;
};
Mu.image = function(u, r, t, c, s) {
  const l = u[r];
  return l.attrs[l.attrIndex("alt")][1] = s.renderInlineAsText(l.children, t, c), s.renderToken(u, r, t);
};
Mu.hardbreak = function(u, r, t) {
  return t.xhtmlOut ? `<br />
` : `<br>
`;
};
Mu.softbreak = function(u, r, t) {
  return t.breaks ? t.xhtmlOut ? `<br />
` : `<br>
` : `
`;
};
Mu.text = function(u, r) {
  return un(u[r].content);
};
Mu.html_block = function(u, r) {
  return u[r].content;
};
Mu.html_inline = function(u, r) {
  return u[r].content;
};
function Wn() {
  this.rules = $r({}, Mu);
}
Wn.prototype.renderAttrs = function(r) {
  let t, c, s;
  if (!r.attrs)
    return "";
  for (s = "", t = 0, c = r.attrs.length; t < c; t++)
    s += " " + un(r.attrs[t][0]) + '="' + un(r.attrs[t][1]) + '"';
  return s;
};
Wn.prototype.renderToken = function(r, t, c) {
  const s = r[t];
  let l = "";
  if (s.hidden)
    return "";
  s.block && s.nesting !== -1 && t && r[t - 1].hidden && (l += `
`), l += (s.nesting === -1 ? "</" : "<") + s.tag, l += this.renderAttrs(s), s.nesting === 0 && c.xhtmlOut && (l += " /");
  let d = !1;
  if (s.block && (d = !0, s.nesting === 1 && t + 1 < r.length)) {
    const f = r[t + 1];
    (f.type === "inline" || f.hidden || f.nesting === -1 && f.tag === s.tag) && (d = !1);
  }
  return l += d ? `>
` : ">", l;
};
Wn.prototype.renderInline = function(u, r, t) {
  let c = "";
  const s = this.rules;
  for (let l = 0, d = u.length; l < d; l++) {
    const f = u[l].type;
    typeof s[f] < "u" ? c += s[f](u, l, r, t, this) : c += this.renderToken(u, l, r);
  }
  return c;
};
Wn.prototype.renderInlineAsText = function(u, r, t) {
  let c = "";
  for (let s = 0, l = u.length; s < l; s++)
    switch (u[s].type) {
      case "text":
        c += u[s].content;
        break;
      case "image":
        c += this.renderInlineAsText(u[s].children, r, t);
        break;
      case "html_inline":
      case "html_block":
        c += u[s].content;
        break;
      case "softbreak":
      case "hardbreak":
        c += `
`;
        break;
    }
  return c;
};
Wn.prototype.render = function(u, r, t) {
  let c = "";
  const s = this.rules;
  for (let l = 0, d = u.length; l < d; l++) {
    const f = u[l].type;
    f === "inline" ? c += this.renderInline(u[l].children, r, t) : typeof s[f] < "u" ? c += s[f](u, l, r, t, this) : c += this.renderToken(u, l, r, t);
  }
  return c;
};
function We() {
  this.__rules__ = [], this.__cache__ = null;
}
We.prototype.__find__ = function(u) {
  for (let r = 0; r < this.__rules__.length; r++)
    if (this.__rules__[r].name === u)
      return r;
  return -1;
};
We.prototype.__compile__ = function() {
  const u = this, r = [""];
  u.__rules__.forEach(function(t) {
    t.enabled && t.alt.forEach(function(c) {
      r.indexOf(c) < 0 && r.push(c);
    });
  }), u.__cache__ = {}, r.forEach(function(t) {
    u.__cache__[t] = [], u.__rules__.forEach(function(c) {
      c.enabled && (t && c.alt.indexOf(t) < 0 || u.__cache__[t].push(c.fn));
    });
  });
};
We.prototype.at = function(u, r, t) {
  const c = this.__find__(u), s = t || {};
  if (c === -1)
    throw new Error("Parser rule not found: " + u);
  this.__rules__[c].fn = r, this.__rules__[c].alt = s.alt || [], this.__cache__ = null;
};
We.prototype.before = function(u, r, t, c) {
  const s = this.__find__(u), l = c || {};
  if (s === -1)
    throw new Error("Parser rule not found: " + u);
  this.__rules__.splice(s, 0, {
    name: r,
    enabled: !0,
    fn: t,
    alt: l.alt || []
  }), this.__cache__ = null;
};
We.prototype.after = function(u, r, t, c) {
  const s = this.__find__(u), l = c || {};
  if (s === -1)
    throw new Error("Parser rule not found: " + u);
  this.__rules__.splice(s + 1, 0, {
    name: r,
    enabled: !0,
    fn: t,
    alt: l.alt || []
  }), this.__cache__ = null;
};
We.prototype.push = function(u, r, t) {
  const c = t || {};
  this.__rules__.push({
    name: u,
    enabled: !0,
    fn: r,
    alt: c.alt || []
  }), this.__cache__ = null;
};
We.prototype.enable = function(u, r) {
  Array.isArray(u) || (u = [u]);
  const t = [];
  return u.forEach(function(c) {
    const s = this.__find__(c);
    if (s < 0) {
      if (r)
        return;
      throw new Error("Rules manager: invalid rule name " + c);
    }
    this.__rules__[s].enabled = !0, t.push(c);
  }, this), this.__cache__ = null, t;
};
We.prototype.enableOnly = function(u, r) {
  Array.isArray(u) || (u = [u]), this.__rules__.forEach(function(t) {
    t.enabled = !1;
  }), this.enable(u, r);
};
We.prototype.disable = function(u, r) {
  Array.isArray(u) || (u = [u]);
  const t = [];
  return u.forEach(function(c) {
    const s = this.__find__(c);
    if (s < 0) {
      if (r)
        return;
      throw new Error("Rules manager: invalid rule name " + c);
    }
    this.__rules__[s].enabled = !1, t.push(c);
  }, this), this.__cache__ = null, t;
};
We.prototype.getRules = function(u) {
  return this.__cache__ === null && this.__compile__(), this.__cache__[u] || [];
};
function xu(u, r, t) {
  this.type = u, this.tag = r, this.attrs = null, this.map = null, this.nesting = t, this.level = 0, this.children = null, this.content = "", this.markup = "", this.info = "", this.meta = null, this.block = !1, this.hidden = !1;
}
xu.prototype.attrIndex = function(r) {
  if (!this.attrs)
    return -1;
  const t = this.attrs;
  for (let c = 0, s = t.length; c < s; c++)
    if (t[c][0] === r)
      return c;
  return -1;
};
xu.prototype.attrPush = function(r) {
  this.attrs ? this.attrs.push(r) : this.attrs = [r];
};
xu.prototype.attrSet = function(r, t) {
  const c = this.attrIndex(r), s = [r, t];
  c < 0 ? this.attrPush(s) : this.attrs[c] = s;
};
xu.prototype.attrGet = function(r) {
  const t = this.attrIndex(r);
  let c = null;
  return t >= 0 && (c = this.attrs[t][1]), c;
};
xu.prototype.attrJoin = function(r, t) {
  const c = this.attrIndex(r);
  c < 0 ? this.attrPush([r, t]) : this.attrs[c][1] = this.attrs[c][1] + " " + t;
};
function vs(u, r, t) {
  this.src = u, this.env = t, this.tokens = [], this.inlineMode = !1, this.md = r;
}
vs.prototype.Token = xu;
const cm = /\r\n?|\n/g, lm = /\0/g;
function sm(u) {
  let r;
  r = u.src.replace(cm, `
`), r = r.replace(lm, "�"), u.src = r;
}
function am(u) {
  let r;
  u.inlineMode ? (r = new u.Token("inline", "", 0), r.content = u.src, r.map = [0, 1], r.children = [], u.tokens.push(r)) : u.md.block.parse(u.src, u.md, u.env, u.tokens);
}
function fm(u) {
  const r = u.tokens;
  for (let t = 0, c = r.length; t < c; t++) {
    const s = r[t];
    s.type === "inline" && u.md.inline.parse(s.content, u.md, u.env, s.children);
  }
}
function dm(u) {
  return /^<a[>\s]/i.test(u);
}
function hm(u) {
  return /^<\/a\s*>/i.test(u);
}
function pm(u) {
  const r = u.tokens;
  if (u.md.options.linkify)
    for (let t = 0, c = r.length; t < c; t++) {
      if (r[t].type !== "inline" || !u.md.linkify.pretest(r[t].content))
        continue;
      let s = r[t].children, l = 0;
      for (let d = s.length - 1; d >= 0; d--) {
        const f = s[d];
        if (f.type === "link_close") {
          for (d--; s[d].level !== f.level && s[d].type !== "link_open"; )
            d--;
          continue;
        }
        if (f.type === "html_inline" && (dm(f.content) && l > 0 && l--, hm(f.content) && l++), !(l > 0) && f.type === "text" && u.md.linkify.test(f.content)) {
          const _ = f.content;
          let m = u.md.linkify.match(_);
          const w = [];
          let y = f.level, F = 0;
          m.length > 0 && m[0].index === 0 && d > 0 && s[d - 1].type === "text_special" && (m = m.slice(1));
          for (let M = 0; M < m.length; M++) {
            const x = m[M].url, A = u.md.normalizeLink(x);
            if (!u.md.validateLink(A))
              continue;
            let I = m[M].text;
            m[M].schema ? m[M].schema === "mailto:" && !/^mailto:/i.test(I) ? I = u.md.normalizeLinkText("mailto:" + I).replace(/^mailto:/, "") : I = u.md.normalizeLinkText(I) : I = u.md.normalizeLinkText("http://" + I).replace(/^http:\/\//, "");
            const D = m[M].index;
            if (D > F) {
              const R = new u.Token("text", "", 0);
              R.content = _.slice(F, D), R.level = y, w.push(R);
            }
            const S = new u.Token("link_open", "a", 1);
            S.attrs = [["href", A]], S.level = y++, S.markup = "linkify", S.info = "auto", w.push(S);
            const E = new u.Token("text", "", 0);
            E.content = I, E.level = y, w.push(E);
            const O = new u.Token("link_close", "a", -1);
            O.level = --y, O.markup = "linkify", O.info = "auto", w.push(O), F = m[M].lastIndex;
          }
          if (F < _.length) {
            const M = new u.Token("text", "", 0);
            M.content = _.slice(F), M.level = y, w.push(M);
          }
          r[t].children = s = gs(s, d, w);
        }
      }
    }
}
const ys = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/, _m = /\((c|tm|r)\)/i, bm = /\((c|tm|r)\)/ig, mm = {
  c: "©",
  r: "®",
  tm: "™"
};
function gm(u, r) {
  return mm[r.toLowerCase()];
}
function xm(u) {
  let r = 0;
  for (let t = u.length - 1; t >= 0; t--) {
    const c = u[t];
    c.type === "text" && !r && (c.content = c.content.replace(bm, gm)), c.type === "link_open" && c.info === "auto" && r--, c.type === "link_close" && c.info === "auto" && r++;
  }
}
function vm(u) {
  let r = 0;
  for (let t = u.length - 1; t >= 0; t--) {
    const c = u[t];
    c.type === "text" && !r && ys.test(c.content) && (c.content = c.content.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---(?=[^-]|$)/mg, "$1—").replace(/(^|\s)--(?=\s|$)/mg, "$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg, "$1–")), c.type === "link_open" && c.info === "auto" && r--, c.type === "link_close" && c.info === "auto" && r++;
  }
}
function ym(u) {
  let r;
  if (u.md.options.typographer)
    for (r = u.tokens.length - 1; r >= 0; r--)
      u.tokens[r].type === "inline" && (_m.test(u.tokens[r].content) && xm(u.tokens[r].children), ys.test(u.tokens[r].content) && vm(u.tokens[r].children));
}
const km = /['"]/, Ol = /['"]/g, Rl = "’";
function yr(u, r, t) {
  return u.slice(0, r) + t + u.slice(r + 1);
}
function wm(u, r) {
  let t;
  const c = [];
  for (let s = 0; s < u.length; s++) {
    const l = u[s], d = u[s].level;
    for (t = c.length - 1; t >= 0 && !(c[t].level <= d); t--)
      ;
    if (c.length = t + 1, l.type !== "text")
      continue;
    let f = l.content, _ = 0, m = f.length;
    e:
      for (; _ < m; ) {
        Ol.lastIndex = _;
        const w = Ol.exec(f);
        if (!w)
          break;
        let y = !0, F = !0;
        _ = w.index + 1;
        const M = w[0] === "'";
        let x = 32;
        if (w.index - 1 >= 0)
          x = f.charCodeAt(w.index - 1);
        else
          for (t = s - 1; t >= 0 && !(u[t].type === "softbreak" || u[t].type === "hardbreak"); t--)
            if (u[t].content) {
              x = u[t].content.charCodeAt(u[t].content.length - 1);
              break;
            }
        let A = 32;
        if (_ < m)
          A = f.charCodeAt(_);
        else
          for (t = s + 1; t < u.length && !(u[t].type === "softbreak" || u[t].type === "hardbreak"); t++)
            if (u[t].content) {
              A = u[t].content.charCodeAt(0);
              break;
            }
        const I = xt(x) || gt(String.fromCharCode(x)), D = xt(A) || gt(String.fromCharCode(A)), S = mt(x), E = mt(A);
        if (E ? y = !1 : D && (S || I || (y = !1)), S ? F = !1 : I && (E || D || (F = !1)), A === 34 && w[0] === '"' && x >= 48 && x <= 57 && (F = y = !1), y && F && (y = I, F = D), !y && !F) {
          M && (l.content = yr(l.content, w.index, Rl));
          continue;
        }
        if (F)
          for (t = c.length - 1; t >= 0; t--) {
            let O = c[t];
            if (c[t].level < d)
              break;
            if (O.single === M && c[t].level === d) {
              O = c[t];
              let R, G;
              M ? (R = r.md.options.quotes[2], G = r.md.options.quotes[3]) : (R = r.md.options.quotes[0], G = r.md.options.quotes[1]), l.content = yr(l.content, w.index, G), u[O.token].content = yr(
                u[O.token].content,
                O.pos,
                R
              ), _ += G.length - 1, O.token === s && (_ += R.length - 1), f = l.content, m = f.length, c.length = t;
              continue e;
            }
          }
        y ? c.push({
          token: s,
          pos: w.index,
          single: M,
          level: d
        }) : F && M && (l.content = yr(l.content, w.index, Rl));
      }
  }
}
function Cm(u) {
  if (u.md.options.typographer)
    for (let r = u.tokens.length - 1; r >= 0; r--)
      u.tokens[r].type !== "inline" || !km.test(u.tokens[r].content) || wm(u.tokens[r].children, u);
}
function Am(u) {
  let r, t;
  const c = u.tokens, s = c.length;
  for (let l = 0; l < s; l++) {
    if (c[l].type !== "inline")
      continue;
    const d = c[l].children, f = d.length;
    for (r = 0; r < f; r++)
      d[r].type === "text_special" && (d[r].type = "text");
    for (r = t = 0; r < f; r++)
      d[r].type === "text" && r + 1 < f && d[r + 1].type === "text" ? d[r + 1].content = d[r].content + d[r + 1].content : (r !== t && (d[t] = d[r]), t++);
    r !== t && (d.length = t);
  }
}
const h0 = [
  ["normalize", sm],
  ["block", am],
  ["inline", fm],
  ["linkify", pm],
  ["replacements", ym],
  ["smartquotes", Cm],
  // `text_join` finds `text_special` tokens (for escape sequences)
  // and joins them with the rest of the text
  ["text_join", Am]
];
function U0() {
  this.ruler = new We();
  for (let u = 0; u < h0.length; u++)
    this.ruler.push(h0[u][0], h0[u][1]);
}
U0.prototype.process = function(u) {
  const r = this.ruler.getRules("");
  for (let t = 0, c = r.length; t < c; t++)
    r[t](u);
};
U0.prototype.State = vs;
function Fu(u, r, t, c) {
  this.src = u, this.md = r, this.env = t, this.tokens = c, this.bMarks = [], this.eMarks = [], this.tShift = [], this.sCount = [], this.bsCount = [], this.blkIndent = 0, this.line = 0, this.lineMax = 0, this.tight = !1, this.ddIndent = -1, this.listIndent = -1, this.parentType = "root", this.level = 0;
  const s = this.src;
  for (let l = 0, d = 0, f = 0, _ = 0, m = s.length, w = !1; d < m; d++) {
    const y = s.charCodeAt(d);
    if (!w)
      if (he(y)) {
        f++, y === 9 ? _ += 4 - _ % 4 : _++;
        continue;
      } else
        w = !0;
    (y === 10 || d === m - 1) && (y !== 10 && d++, this.bMarks.push(l), this.eMarks.push(d), this.tShift.push(f), this.sCount.push(_), this.bsCount.push(0), w = !1, f = 0, _ = 0, l = d + 1);
  }
  this.bMarks.push(s.length), this.eMarks.push(s.length), this.tShift.push(0), this.sCount.push(0), this.bsCount.push(0), this.lineMax = this.bMarks.length - 1;
}
Fu.prototype.push = function(u, r, t) {
  const c = new xu(u, r, t);
  return c.block = !0, t < 0 && this.level--, c.level = this.level, t > 0 && this.level++, this.tokens.push(c), c;
};
Fu.prototype.isEmpty = function(r) {
  return this.bMarks[r] + this.tShift[r] >= this.eMarks[r];
};
Fu.prototype.skipEmptyLines = function(r) {
  for (let t = this.lineMax; r < t && !(this.bMarks[r] + this.tShift[r] < this.eMarks[r]); r++)
    ;
  return r;
};
Fu.prototype.skipSpaces = function(r) {
  for (let t = this.src.length; r < t; r++) {
    const c = this.src.charCodeAt(r);
    if (!he(c))
      break;
  }
  return r;
};
Fu.prototype.skipSpacesBack = function(r, t) {
  if (r <= t)
    return r;
  for (; r > t; )
    if (!he(this.src.charCodeAt(--r)))
      return r + 1;
  return r;
};
Fu.prototype.skipChars = function(r, t) {
  for (let c = this.src.length; r < c && this.src.charCodeAt(r) === t; r++)
    ;
  return r;
};
Fu.prototype.skipCharsBack = function(r, t, c) {
  if (r <= c)
    return r;
  for (; r > c; )
    if (t !== this.src.charCodeAt(--r))
      return r + 1;
  return r;
};
Fu.prototype.getLines = function(r, t, c, s) {
  if (r >= t)
    return "";
  const l = new Array(t - r);
  for (let d = 0, f = r; f < t; f++, d++) {
    let _ = 0;
    const m = this.bMarks[f];
    let w = m, y;
    for (f + 1 < t || s ? y = this.eMarks[f] + 1 : y = this.eMarks[f]; w < y && _ < c; ) {
      const F = this.src.charCodeAt(w);
      if (he(F))
        F === 9 ? _ += 4 - (_ + this.bsCount[f]) % 4 : _++;
      else if (w - m < this.tShift[f])
        _++;
      else
        break;
      w++;
    }
    _ > c ? l[d] = new Array(_ - c + 1).join(" ") + this.src.slice(w, y) : l[d] = this.src.slice(w, y);
  }
  return l.join("");
};
Fu.prototype.Token = xu;
function p0(u, r) {
  const t = u.bMarks[r] + u.tShift[r], c = u.eMarks[r];
  return u.src.slice(t, c);
}
function Bl(u) {
  const r = [], t = u.length;
  let c = 0, s = u.charCodeAt(c), l = !1, d = 0, f = "";
  for (; c < t; )
    s === 124 && (l ? (f += u.substring(d, c - 1), d = c) : (r.push(f + u.substring(d, c)), f = "", d = c + 1)), l = s === 92, c++, s = u.charCodeAt(c);
  return r.push(f + u.substring(d)), r;
}
function Em(u, r, t, c) {
  if (r + 2 > t)
    return !1;
  let s = r + 1;
  if (u.sCount[s] < u.blkIndent || u.sCount[s] - u.blkIndent >= 4)
    return !1;
  let l = u.bMarks[s] + u.tShift[s];
  if (l >= u.eMarks[s])
    return !1;
  const d = u.src.charCodeAt(l++);
  if (d !== 124 && d !== 45 && d !== 58 || l >= u.eMarks[s])
    return !1;
  const f = u.src.charCodeAt(l++);
  if (f !== 124 && f !== 45 && f !== 58 && !he(f) || d === 45 && he(f))
    return !1;
  for (; l < u.eMarks[s]; ) {
    const E = u.src.charCodeAt(l);
    if (E !== 124 && E !== 45 && E !== 58 && !he(E))
      return !1;
    l++;
  }
  let _ = p0(u, r + 1), m = _.split("|");
  const w = [];
  for (let E = 0; E < m.length; E++) {
    const O = m[E].trim();
    if (!O) {
      if (E === 0 || E === m.length - 1)
        continue;
      return !1;
    }
    if (!/^:?-+:?$/.test(O))
      return !1;
    O.charCodeAt(O.length - 1) === 58 ? w.push(O.charCodeAt(0) === 58 ? "center" : "right") : O.charCodeAt(0) === 58 ? w.push("left") : w.push("");
  }
  if (_ = p0(u, r).trim(), _.indexOf("|") === -1 || u.sCount[r] - u.blkIndent >= 4)
    return !1;
  m = Bl(_), m.length && m[0] === "" && m.shift(), m.length && m[m.length - 1] === "" && m.pop();
  const y = m.length;
  if (y === 0 || y !== w.length)
    return !1;
  if (c)
    return !0;
  const F = u.parentType;
  u.parentType = "table";
  const M = u.md.block.ruler.getRules("blockquote"), x = u.push("table_open", "table", 1), A = [r, 0];
  x.map = A;
  const I = u.push("thead_open", "thead", 1);
  I.map = [r, r + 1];
  const D = u.push("tr_open", "tr", 1);
  D.map = [r, r + 1];
  for (let E = 0; E < m.length; E++) {
    const O = u.push("th_open", "th", 1);
    w[E] && (O.attrs = [["style", "text-align:" + w[E]]]);
    const R = u.push("inline", "", 0);
    R.content = m[E].trim(), R.children = [], u.push("th_close", "th", -1);
  }
  u.push("tr_close", "tr", -1), u.push("thead_close", "thead", -1);
  let S;
  for (s = r + 2; s < t && !(u.sCount[s] < u.blkIndent); s++) {
    let E = !1;
    for (let R = 0, G = M.length; R < G; R++)
      if (M[R](u, s, t, !0)) {
        E = !0;
        break;
      }
    if (E || (_ = p0(u, s).trim(), !_) || u.sCount[s] - u.blkIndent >= 4)
      break;
    if (m = Bl(_), m.length && m[0] === "" && m.shift(), m.length && m[m.length - 1] === "" && m.pop(), s === r + 2) {
      const R = u.push("tbody_open", "tbody", 1);
      R.map = S = [r + 2, 0];
    }
    const O = u.push("tr_open", "tr", 1);
    O.map = [s, s + 1];
    for (let R = 0; R < y; R++) {
      const G = u.push("td_open", "td", 1);
      w[R] && (G.attrs = [["style", "text-align:" + w[R]]]);
      const ue = u.push("inline", "", 0);
      ue.content = m[R] ? m[R].trim() : "", ue.children = [], u.push("td_close", "td", -1);
    }
    u.push("tr_close", "tr", -1);
  }
  return S && (u.push("tbody_close", "tbody", -1), S[1] = s), u.push("table_close", "table", -1), A[1] = s, u.parentType = F, u.line = s, !0;
}
function Dm(u, r, t) {
  if (u.sCount[r] - u.blkIndent < 4)
    return !1;
  let c = r + 1, s = c;
  for (; c < t; ) {
    if (u.isEmpty(c)) {
      c++;
      continue;
    }
    if (u.sCount[c] - u.blkIndent >= 4) {
      c++, s = c;
      continue;
    }
    break;
  }
  u.line = s;
  const l = u.push("code_block", "code", 0);
  return l.content = u.getLines(r, s, 4 + u.blkIndent, !1) + `
`, l.map = [r, u.line], !0;
}
function Sm(u, r, t, c) {
  let s = u.bMarks[r] + u.tShift[r], l = u.eMarks[r];
  if (u.sCount[r] - u.blkIndent >= 4 || s + 3 > l)
    return !1;
  const d = u.src.charCodeAt(s);
  if (d !== 126 && d !== 96)
    return !1;
  let f = s;
  s = u.skipChars(s, d);
  let _ = s - f;
  if (_ < 3)
    return !1;
  const m = u.src.slice(f, s), w = u.src.slice(s, l);
  if (d === 96 && w.indexOf(String.fromCharCode(d)) >= 0)
    return !1;
  if (c)
    return !0;
  let y = r, F = !1;
  for (; y++, !(y >= t || (s = f = u.bMarks[y] + u.tShift[y], l = u.eMarks[y], s < l && u.sCount[y] < u.blkIndent)); )
    if (u.src.charCodeAt(s) === d && !(u.sCount[y] - u.blkIndent >= 4) && (s = u.skipChars(s, d), !(s - f < _) && (s = u.skipSpaces(s), !(s < l)))) {
      F = !0;
      break;
    }
  _ = u.sCount[r], u.line = y + (F ? 1 : 0);
  const M = u.push("fence", "code", 0);
  return M.info = w, M.content = u.getLines(r + 1, y, _, !0), M.markup = m, M.map = [r, u.line], !0;
}
function Mm(u, r, t, c) {
  let s = u.bMarks[r] + u.tShift[r], l = u.eMarks[r];
  const d = u.lineMax;
  if (u.sCount[r] - u.blkIndent >= 4 || u.src.charCodeAt(s) !== 62)
    return !1;
  if (c)
    return !0;
  const f = [], _ = [], m = [], w = [], y = u.md.block.ruler.getRules("blockquote"), F = u.parentType;
  u.parentType = "blockquote";
  let M = !1, x;
  for (x = r; x < t; x++) {
    const E = u.sCount[x] < u.blkIndent;
    if (s = u.bMarks[x] + u.tShift[x], l = u.eMarks[x], s >= l)
      break;
    if (u.src.charCodeAt(s++) === 62 && !E) {
      let R = u.sCount[x] + 1, G, ue;
      u.src.charCodeAt(s) === 32 ? (s++, R++, ue = !1, G = !0) : u.src.charCodeAt(s) === 9 ? (G = !0, (u.bsCount[x] + R) % 4 === 3 ? (s++, R++, ue = !1) : ue = !0) : G = !1;
      let Le = R;
      for (f.push(u.bMarks[x]), u.bMarks[x] = s; s < l; ) {
        const Te = u.src.charCodeAt(s);
        if (he(Te))
          Te === 9 ? Le += 4 - (Le + u.bsCount[x] + (ue ? 1 : 0)) % 4 : Le++;
        else
          break;
        s++;
      }
      M = s >= l, _.push(u.bsCount[x]), u.bsCount[x] = u.sCount[x] + 1 + (G ? 1 : 0), m.push(u.sCount[x]), u.sCount[x] = Le - R, w.push(u.tShift[x]), u.tShift[x] = s - u.bMarks[x];
      continue;
    }
    if (M)
      break;
    let O = !1;
    for (let R = 0, G = y.length; R < G; R++)
      if (y[R](u, x, t, !0)) {
        O = !0;
        break;
      }
    if (O) {
      u.lineMax = x, u.blkIndent !== 0 && (f.push(u.bMarks[x]), _.push(u.bsCount[x]), w.push(u.tShift[x]), m.push(u.sCount[x]), u.sCount[x] -= u.blkIndent);
      break;
    }
    f.push(u.bMarks[x]), _.push(u.bsCount[x]), w.push(u.tShift[x]), m.push(u.sCount[x]), u.sCount[x] = -1;
  }
  const A = u.blkIndent;
  u.blkIndent = 0;
  const I = u.push("blockquote_open", "blockquote", 1);
  I.markup = ">";
  const D = [r, 0];
  I.map = D, u.md.block.tokenize(u, r, x);
  const S = u.push("blockquote_close", "blockquote", -1);
  S.markup = ">", u.lineMax = d, u.parentType = F, D[1] = u.line;
  for (let E = 0; E < w.length; E++)
    u.bMarks[E + r] = f[E], u.tShift[E + r] = w[E], u.sCount[E + r] = m[E], u.bsCount[E + r] = _[E];
  return u.blkIndent = A, !0;
}
function Fm(u, r, t, c) {
  const s = u.eMarks[r];
  if (u.sCount[r] - u.blkIndent >= 4)
    return !1;
  let l = u.bMarks[r] + u.tShift[r];
  const d = u.src.charCodeAt(l++);
  if (d !== 42 && d !== 45 && d !== 95)
    return !1;
  let f = 1;
  for (; l < s; ) {
    const m = u.src.charCodeAt(l++);
    if (m !== d && !he(m))
      return !1;
    m === d && f++;
  }
  if (f < 3)
    return !1;
  if (c)
    return !0;
  u.line = r + 1;
  const _ = u.push("hr", "hr", 0);
  return _.map = [r, u.line], _.markup = Array(f + 1).join(String.fromCharCode(d)), !0;
}
function Ll(u, r) {
  const t = u.eMarks[r];
  let c = u.bMarks[r] + u.tShift[r];
  const s = u.src.charCodeAt(c++);
  if (s !== 42 && s !== 45 && s !== 43)
    return -1;
  if (c < t) {
    const l = u.src.charCodeAt(c);
    if (!he(l))
      return -1;
  }
  return c;
}
function $l(u, r) {
  const t = u.bMarks[r] + u.tShift[r], c = u.eMarks[r];
  let s = t;
  if (s + 1 >= c)
    return -1;
  let l = u.src.charCodeAt(s++);
  if (l < 48 || l > 57)
    return -1;
  for (; ; ) {
    if (s >= c)
      return -1;
    if (l = u.src.charCodeAt(s++), l >= 48 && l <= 57) {
      if (s - t >= 10)
        return -1;
      continue;
    }
    if (l === 41 || l === 46)
      break;
    return -1;
  }
  return s < c && (l = u.src.charCodeAt(s), !he(l)) ? -1 : s;
}
function Im(u, r) {
  const t = u.level + 2;
  for (let c = r + 2, s = u.tokens.length - 2; c < s; c++)
    u.tokens[c].level === t && u.tokens[c].type === "paragraph_open" && (u.tokens[c + 2].hidden = !0, u.tokens[c].hidden = !0, c += 2);
}
function Tm(u, r, t, c) {
  let s, l, d, f, _ = r, m = !0;
  if (u.sCount[_] - u.blkIndent >= 4 || u.listIndent >= 0 && u.sCount[_] - u.listIndent >= 4 && u.sCount[_] < u.blkIndent)
    return !1;
  let w = !1;
  c && u.parentType === "paragraph" && u.sCount[_] >= u.blkIndent && (w = !0);
  let y, F, M;
  if ((M = $l(u, _)) >= 0) {
    if (y = !0, d = u.bMarks[_] + u.tShift[_], F = Number(u.src.slice(d, M - 1)), w && F !== 1)
      return !1;
  } else if ((M = Ll(u, _)) >= 0)
    y = !1;
  else
    return !1;
  if (w && u.skipSpaces(M) >= u.eMarks[_])
    return !1;
  if (c)
    return !0;
  const x = u.src.charCodeAt(M - 1), A = u.tokens.length;
  y ? (f = u.push("ordered_list_open", "ol", 1), F !== 1 && (f.attrs = [["start", F]])) : f = u.push("bullet_list_open", "ul", 1);
  const I = [_, 0];
  f.map = I, f.markup = String.fromCharCode(x);
  let D = !1;
  const S = u.md.block.ruler.getRules("list"), E = u.parentType;
  for (u.parentType = "list"; _ < t; ) {
    l = M, s = u.eMarks[_];
    const O = u.sCount[_] + M - (u.bMarks[_] + u.tShift[_]);
    let R = O;
    for (; l < s; ) {
      const Ge = u.src.charCodeAt(l);
      if (Ge === 9)
        R += 4 - (R + u.bsCount[_]) % 4;
      else if (Ge === 32)
        R++;
      else
        break;
      l++;
    }
    const G = l;
    let ue;
    G >= s ? ue = 1 : ue = R - O, ue > 4 && (ue = 1);
    const Le = O + ue;
    f = u.push("list_item_open", "li", 1), f.markup = String.fromCharCode(x);
    const Te = [_, 0];
    f.map = Te, y && (f.info = u.src.slice(d, M - 1));
    const gn = u.tight, xn = u.tShift[_], nn = u.sCount[_], eu = u.listIndent;
    if (u.listIndent = u.blkIndent, u.blkIndent = Le, u.tight = !0, u.tShift[_] = G - u.bMarks[_], u.sCount[_] = R, G >= s && u.isEmpty(_ + 1) ? u.line = Math.min(u.line + 2, t) : u.md.block.tokenize(u, _, t, !0), (!u.tight || D) && (m = !1), D = u.line - _ > 1 && u.isEmpty(u.line - 1), u.blkIndent = u.listIndent, u.listIndent = eu, u.tShift[_] = xn, u.sCount[_] = nn, u.tight = gn, f = u.push("list_item_close", "li", -1), f.markup = String.fromCharCode(x), _ = u.line, Te[1] = _, _ >= t || u.sCount[_] < u.blkIndent || u.sCount[_] - u.blkIndent >= 4)
      break;
    let qu = !1;
    for (let Ge = 0, qr = S.length; Ge < qr; Ge++)
      if (S[Ge](u, _, t, !0)) {
        qu = !0;
        break;
      }
    if (qu)
      break;
    if (y) {
      if (M = $l(u, _), M < 0)
        break;
      d = u.bMarks[_] + u.tShift[_];
    } else if (M = Ll(u, _), M < 0)
      break;
    if (x !== u.src.charCodeAt(M - 1))
      break;
  }
  return y ? f = u.push("ordered_list_close", "ol", -1) : f = u.push("bullet_list_close", "ul", -1), f.markup = String.fromCharCode(x), I[1] = _, u.line = _, u.parentType = E, m && Im(u, A), !0;
}
function Om(u, r, t, c) {
  let s = 0, l = u.bMarks[r] + u.tShift[r], d = u.eMarks[r], f = r + 1;
  if (u.sCount[r] - u.blkIndent >= 4 || u.src.charCodeAt(l) !== 91)
    return !1;
  for (; ++l < d; )
    if (u.src.charCodeAt(l) === 93 && u.src.charCodeAt(l - 1) !== 92) {
      if (l + 1 === d || u.src.charCodeAt(l + 1) !== 58)
        return !1;
      break;
    }
  const _ = u.lineMax, m = u.md.block.ruler.getRules("reference"), w = u.parentType;
  for (u.parentType = "reference"; f < _ && !u.isEmpty(f); f++) {
    if (u.sCount[f] - u.blkIndent > 3 || u.sCount[f] < 0)
      continue;
    let R = !1;
    for (let G = 0, ue = m.length; G < ue; G++)
      if (m[G](u, f, _, !0)) {
        R = !0;
        break;
      }
    if (R)
      break;
  }
  const y = u.getLines(r, f, u.blkIndent, !1).trim();
  d = y.length;
  let F = -1;
  for (l = 1; l < d; l++) {
    const R = y.charCodeAt(l);
    if (R === 91)
      return !1;
    if (R === 93) {
      F = l;
      break;
    } else
      R === 10 ? s++ : R === 92 && (l++, l < d && y.charCodeAt(l) === 10 && s++);
  }
  if (F < 0 || y.charCodeAt(F + 1) !== 58)
    return !1;
  for (l = F + 2; l < d; l++) {
    const R = y.charCodeAt(l);
    if (R === 10)
      s++;
    else if (!he(R))
      break;
  }
  const M = u.md.helpers.parseLinkDestination(y, l, d);
  if (!M.ok)
    return !1;
  const x = u.md.normalizeLink(M.str);
  if (!u.md.validateLink(x))
    return !1;
  l = M.pos, s += M.lines;
  const A = l, I = s, D = l;
  for (; l < d; l++) {
    const R = y.charCodeAt(l);
    if (R === 10)
      s++;
    else if (!he(R))
      break;
  }
  const S = u.md.helpers.parseLinkTitle(y, l, d);
  let E;
  for (l < d && D !== l && S.ok ? (E = S.str, l = S.pos, s += S.lines) : (E = "", l = A, s = I); l < d; ) {
    const R = y.charCodeAt(l);
    if (!he(R))
      break;
    l++;
  }
  if (l < d && y.charCodeAt(l) !== 10 && E)
    for (E = "", l = A, s = I; l < d; ) {
      const R = y.charCodeAt(l);
      if (!he(R))
        break;
      l++;
    }
  if (l < d && y.charCodeAt(l) !== 10)
    return !1;
  const O = Pr(y.slice(1, F));
  return O ? (c || (typeof u.env.references > "u" && (u.env.references = {}), typeof u.env.references[O] > "u" && (u.env.references[O] = { title: E, href: x }), u.parentType = w, u.line = r + s + 1), !0) : !1;
}
const Rm = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "section",
  "source",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
], Bm = "[a-zA-Z_:][a-zA-Z0-9:._-]*", Lm = "[^\"'=<>`\\x00-\\x20]+", $m = "'[^']*'", Pm = '"[^"]*"', zm = "(?:" + Lm + "|" + $m + "|" + Pm + ")", Nm = "(?:\\s+" + Bm + "(?:\\s*=\\s*" + zm + ")?)", ks = "<[A-Za-z][A-Za-z0-9\\-]*" + Nm + "*\\s*\\/?>", ws = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>", qm = "<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->", Um = "<[?][\\s\\S]*?[?]>", Hm = "<![A-Z]+\\s+[^>]*>", Wm = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>", Gm = new RegExp("^(?:" + ks + "|" + ws + "|" + qm + "|" + Um + "|" + Hm + "|" + Wm + ")"), Km = new RegExp("^(?:" + ks + "|" + ws + ")"), $n = [
  [/^<(script|pre|style|textarea)(?=(\s|>|$))/i, /<\/(script|pre|style|textarea)>/i, !0],
  [/^<!--/, /-->/, !0],
  [/^<\?/, /\?>/, !0],
  [/^<![A-Z]/, />/, !0],
  [/^<!\[CDATA\[/, /\]\]>/, !0],
  [new RegExp("^</?(" + Rm.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, !0],
  [new RegExp(Km.source + "\\s*$"), /^$/, !1]
];
function Zm(u, r, t, c) {
  let s = u.bMarks[r] + u.tShift[r], l = u.eMarks[r];
  if (u.sCount[r] - u.blkIndent >= 4 || !u.md.options.html || u.src.charCodeAt(s) !== 60)
    return !1;
  let d = u.src.slice(s, l), f = 0;
  for (; f < $n.length && !$n[f][0].test(d); f++)
    ;
  if (f === $n.length)
    return !1;
  if (c)
    return $n[f][2];
  let _ = r + 1;
  if (!$n[f][1].test(d)) {
    for (; _ < t && !(u.sCount[_] < u.blkIndent); _++)
      if (s = u.bMarks[_] + u.tShift[_], l = u.eMarks[_], d = u.src.slice(s, l), $n[f][1].test(d)) {
        d.length !== 0 && _++;
        break;
      }
  }
  u.line = _;
  const m = u.push("html_block", "", 0);
  return m.map = [r, _], m.content = u.getLines(r, _, u.blkIndent, !0), !0;
}
function Vm(u, r, t, c) {
  let s = u.bMarks[r] + u.tShift[r], l = u.eMarks[r];
  if (u.sCount[r] - u.blkIndent >= 4)
    return !1;
  let d = u.src.charCodeAt(s);
  if (d !== 35 || s >= l)
    return !1;
  let f = 1;
  for (d = u.src.charCodeAt(++s); d === 35 && s < l && f <= 6; )
    f++, d = u.src.charCodeAt(++s);
  if (f > 6 || s < l && !he(d))
    return !1;
  if (c)
    return !0;
  l = u.skipSpacesBack(l, s);
  const _ = u.skipCharsBack(l, 35, s);
  _ > s && he(u.src.charCodeAt(_ - 1)) && (l = _), u.line = r + 1;
  const m = u.push("heading_open", "h" + String(f), 1);
  m.markup = "########".slice(0, f), m.map = [r, u.line];
  const w = u.push("inline", "", 0);
  w.content = u.src.slice(s, l).trim(), w.map = [r, u.line], w.children = [];
  const y = u.push("heading_close", "h" + String(f), -1);
  return y.markup = "########".slice(0, f), !0;
}
function Ym(u, r, t) {
  const c = u.md.block.ruler.getRules("paragraph");
  if (u.sCount[r] - u.blkIndent >= 4)
    return !1;
  const s = u.parentType;
  u.parentType = "paragraph";
  let l = 0, d, f = r + 1;
  for (; f < t && !u.isEmpty(f); f++) {
    if (u.sCount[f] - u.blkIndent > 3)
      continue;
    if (u.sCount[f] >= u.blkIndent) {
      let M = u.bMarks[f] + u.tShift[f];
      const x = u.eMarks[f];
      if (M < x && (d = u.src.charCodeAt(M), (d === 45 || d === 61) && (M = u.skipChars(M, d), M = u.skipSpaces(M), M >= x))) {
        l = d === 61 ? 1 : 2;
        break;
      }
    }
    if (u.sCount[f] < 0)
      continue;
    let F = !1;
    for (let M = 0, x = c.length; M < x; M++)
      if (c[M](u, f, t, !0)) {
        F = !0;
        break;
      }
    if (F)
      break;
  }
  if (!l)
    return !1;
  const _ = u.getLines(r, f, u.blkIndent, !1).trim();
  u.line = f + 1;
  const m = u.push("heading_open", "h" + String(l), 1);
  m.markup = String.fromCharCode(d), m.map = [r, u.line];
  const w = u.push("inline", "", 0);
  w.content = _, w.map = [r, u.line - 1], w.children = [];
  const y = u.push("heading_close", "h" + String(l), -1);
  return y.markup = String.fromCharCode(d), u.parentType = s, !0;
}
function Jm(u, r, t) {
  const c = u.md.block.ruler.getRules("paragraph"), s = u.parentType;
  let l = r + 1;
  for (u.parentType = "paragraph"; l < t && !u.isEmpty(l); l++) {
    if (u.sCount[l] - u.blkIndent > 3 || u.sCount[l] < 0)
      continue;
    let m = !1;
    for (let w = 0, y = c.length; w < y; w++)
      if (c[w](u, l, t, !0)) {
        m = !0;
        break;
      }
    if (m)
      break;
  }
  const d = u.getLines(r, l, u.blkIndent, !1).trim();
  u.line = l;
  const f = u.push("paragraph_open", "p", 1);
  f.map = [r, u.line];
  const _ = u.push("inline", "", 0);
  return _.content = d, _.map = [r, u.line], _.children = [], u.push("paragraph_close", "p", -1), u.parentType = s, !0;
}
const kr = [
  // First 2 params - rule name & source. Secondary array - list of rules,
  // which can be terminated by this one.
  ["table", Em, ["paragraph", "reference"]],
  ["code", Dm],
  ["fence", Sm, ["paragraph", "reference", "blockquote", "list"]],
  ["blockquote", Mm, ["paragraph", "reference", "blockquote", "list"]],
  ["hr", Fm, ["paragraph", "reference", "blockquote", "list"]],
  ["list", Tm, ["paragraph", "reference", "blockquote"]],
  ["reference", Om],
  ["html_block", Zm, ["paragraph", "reference", "blockquote"]],
  ["heading", Vm, ["paragraph", "reference", "blockquote"]],
  ["lheading", Ym],
  ["paragraph", Jm]
];
function zr() {
  this.ruler = new We();
  for (let u = 0; u < kr.length; u++)
    this.ruler.push(kr[u][0], kr[u][1], { alt: (kr[u][2] || []).slice() });
}
zr.prototype.tokenize = function(u, r, t) {
  const c = this.ruler.getRules(""), s = c.length, l = u.md.options.maxNesting;
  let d = r, f = !1;
  for (; d < t && (u.line = d = u.skipEmptyLines(d), !(d >= t || u.sCount[d] < u.blkIndent)); ) {
    if (u.level >= l) {
      u.line = t;
      break;
    }
    const _ = u.line;
    let m = !1;
    for (let w = 0; w < s; w++)
      if (m = c[w](u, d, t, !1), m) {
        if (_ >= u.line)
          throw new Error("block rule didn't increment state.line");
        break;
      }
    if (!m)
      throw new Error("none of the block rules matched");
    u.tight = !f, u.isEmpty(u.line - 1) && (f = !0), d = u.line, d < t && u.isEmpty(d) && (f = !0, d++, u.line = d);
  }
};
zr.prototype.parse = function(u, r, t, c) {
  if (!u)
    return;
  const s = new this.State(u, r, t, c);
  this.tokenize(s, s.line, s.lineMax);
};
zr.prototype.State = Fu;
function At(u, r, t, c) {
  this.src = u, this.env = t, this.md = r, this.tokens = c, this.tokens_meta = Array(c.length), this.pos = 0, this.posMax = this.src.length, this.level = 0, this.pending = "", this.pendingLevel = 0, this.cache = {}, this.delimiters = [], this._prev_delimiters = [], this.backticks = {}, this.backticksScanned = !1, this.linkLevel = 0;
}
At.prototype.pushPending = function() {
  const u = new xu("text", "", 0);
  return u.content = this.pending, u.level = this.pendingLevel, this.tokens.push(u), this.pending = "", u;
};
At.prototype.push = function(u, r, t) {
  this.pending && this.pushPending();
  const c = new xu(u, r, t);
  let s = null;
  return t < 0 && (this.level--, this.delimiters = this._prev_delimiters.pop()), c.level = this.level, t > 0 && (this.level++, this._prev_delimiters.push(this.delimiters), this.delimiters = [], s = { delimiters: this.delimiters }), this.pendingLevel = this.level, this.tokens.push(c), this.tokens_meta.push(s), c;
};
At.prototype.scanDelims = function(u, r) {
  let t, c, s = !0, l = !0;
  const d = this.posMax, f = this.src.charCodeAt(u), _ = u > 0 ? this.src.charCodeAt(u - 1) : 32;
  let m = u;
  for (; m < d && this.src.charCodeAt(m) === f; )
    m++;
  const w = m - u, y = m < d ? this.src.charCodeAt(m) : 32, F = xt(_) || gt(String.fromCharCode(_)), M = xt(y) || gt(String.fromCharCode(y)), x = mt(_), A = mt(y);
  return A ? s = !1 : M && (x || F || (s = !1)), x ? l = !1 : F && (A || M || (l = !1)), r ? (t = s, c = l) : (t = s && (!l || F), c = l && (!s || M)), { can_open: t, can_close: c, length: w };
};
At.prototype.Token = xu;
function Xm(u) {
  switch (u) {
    case 10:
    case 33:
    case 35:
    case 36:
    case 37:
    case 38:
    case 42:
    case 43:
    case 45:
    case 58:
    case 60:
    case 61:
    case 62:
    case 64:
    case 91:
    case 92:
    case 93:
    case 94:
    case 95:
    case 96:
    case 123:
    case 125:
    case 126:
      return !0;
    default:
      return !1;
  }
}
function Qm(u, r) {
  let t = u.pos;
  for (; t < u.posMax && !Xm(u.src.charCodeAt(t)); )
    t++;
  return t === u.pos ? !1 : (r || (u.pending += u.src.slice(u.pos, t)), u.pos = t, !0);
}
const jm = /(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;
function eg(u, r) {
  if (!u.md.options.linkify || u.linkLevel > 0)
    return !1;
  const t = u.pos, c = u.posMax;
  if (t + 3 > c || u.src.charCodeAt(t) !== 58 || u.src.charCodeAt(t + 1) !== 47 || u.src.charCodeAt(t + 2) !== 47)
    return !1;
  const s = u.pending.match(jm);
  if (!s)
    return !1;
  const l = s[1], d = u.md.linkify.matchAtStart(u.src.slice(t - l.length));
  if (!d)
    return !1;
  let f = d.url;
  if (f.length <= l.length)
    return !1;
  f = f.replace(/\*+$/, "");
  const _ = u.md.normalizeLink(f);
  if (!u.md.validateLink(_))
    return !1;
  if (!r) {
    u.pending = u.pending.slice(0, -l.length);
    const m = u.push("link_open", "a", 1);
    m.attrs = [["href", _]], m.markup = "linkify", m.info = "auto";
    const w = u.push("text", "", 0);
    w.content = u.md.normalizeLinkText(f);
    const y = u.push("link_close", "a", -1);
    y.markup = "linkify", y.info = "auto";
  }
  return u.pos += f.length - l.length, !0;
}
function ug(u, r) {
  let t = u.pos;
  if (u.src.charCodeAt(t) !== 10)
    return !1;
  const c = u.pending.length - 1, s = u.posMax;
  if (!r)
    if (c >= 0 && u.pending.charCodeAt(c) === 32)
      if (c >= 1 && u.pending.charCodeAt(c - 1) === 32) {
        let l = c - 1;
        for (; l >= 1 && u.pending.charCodeAt(l - 1) === 32; )
          l--;
        u.pending = u.pending.slice(0, l), u.push("hardbreak", "br", 0);
      } else
        u.pending = u.pending.slice(0, -1), u.push("softbreak", "br", 0);
    else
      u.push("softbreak", "br", 0);
  for (t++; t < s && he(u.src.charCodeAt(t)); )
    t++;
  return u.pos = t, !0;
}
const H0 = [];
for (let u = 0; u < 256; u++)
  H0.push(0);
"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(u) {
  H0[u.charCodeAt(0)] = 1;
});
function ng(u, r) {
  let t = u.pos;
  const c = u.posMax;
  if (u.src.charCodeAt(t) !== 92 || (t++, t >= c))
    return !1;
  let s = u.src.charCodeAt(t);
  if (s === 10) {
    for (r || u.push("hardbreak", "br", 0), t++; t < c && (s = u.src.charCodeAt(t), !!he(s)); )
      t++;
    return u.pos = t, !0;
  }
  let l = u.src[t];
  if (s >= 55296 && s <= 56319 && t + 1 < c) {
    const f = u.src.charCodeAt(t + 1);
    f >= 56320 && f <= 57343 && (l += u.src[t + 1], t++);
  }
  const d = "\\" + l;
  if (!r) {
    const f = u.push("text_special", "", 0);
    s < 256 && H0[s] !== 0 ? f.content = l : f.content = d, f.markup = d, f.info = "escape";
  }
  return u.pos = t + 1, !0;
}
function tg(u, r) {
  let t = u.pos;
  if (u.src.charCodeAt(t) !== 96)
    return !1;
  const s = t;
  t++;
  const l = u.posMax;
  for (; t < l && u.src.charCodeAt(t) === 96; )
    t++;
  const d = u.src.slice(s, t), f = d.length;
  if (u.backticksScanned && (u.backticks[f] || 0) <= s)
    return r || (u.pending += d), u.pos += f, !0;
  let _ = t, m;
  for (; (m = u.src.indexOf("`", _)) !== -1; ) {
    for (_ = m + 1; _ < l && u.src.charCodeAt(_) === 96; )
      _++;
    const w = _ - m;
    if (w === f) {
      if (!r) {
        const y = u.push("code_inline", "code", 0);
        y.markup = d, y.content = u.src.slice(t, m).replace(/\n/g, " ").replace(/^ (.+) $/, "$1");
      }
      return u.pos = _, !0;
    }
    u.backticks[w] = m;
  }
  return u.backticksScanned = !0, r || (u.pending += d), u.pos += f, !0;
}
function rg(u, r) {
  const t = u.pos, c = u.src.charCodeAt(t);
  if (r || c !== 126)
    return !1;
  const s = u.scanDelims(u.pos, !0);
  let l = s.length;
  const d = String.fromCharCode(c);
  if (l < 2)
    return !1;
  let f;
  l % 2 && (f = u.push("text", "", 0), f.content = d, l--);
  for (let _ = 0; _ < l; _ += 2)
    f = u.push("text", "", 0), f.content = d + d, u.delimiters.push({
      marker: c,
      length: 0,
      // disable "rule of 3" length checks meant for emphasis
      token: u.tokens.length - 1,
      end: -1,
      open: s.can_open,
      close: s.can_close
    });
  return u.pos += s.length, !0;
}
function Pl(u, r) {
  let t;
  const c = [], s = r.length;
  for (let l = 0; l < s; l++) {
    const d = r[l];
    if (d.marker !== 126 || d.end === -1)
      continue;
    const f = r[d.end];
    t = u.tokens[d.token], t.type = "s_open", t.tag = "s", t.nesting = 1, t.markup = "~~", t.content = "", t = u.tokens[f.token], t.type = "s_close", t.tag = "s", t.nesting = -1, t.markup = "~~", t.content = "", u.tokens[f.token - 1].type === "text" && u.tokens[f.token - 1].content === "~" && c.push(f.token - 1);
  }
  for (; c.length; ) {
    const l = c.pop();
    let d = l + 1;
    for (; d < u.tokens.length && u.tokens[d].type === "s_close"; )
      d++;
    d--, l !== d && (t = u.tokens[d], u.tokens[d] = u.tokens[l], u.tokens[l] = t);
  }
}
function ig(u) {
  const r = u.tokens_meta, t = u.tokens_meta.length;
  Pl(u, u.delimiters);
  for (let c = 0; c < t; c++)
    r[c] && r[c].delimiters && Pl(u, r[c].delimiters);
}
const Cs = {
  tokenize: rg,
  postProcess: ig
};
function og(u, r) {
  const t = u.pos, c = u.src.charCodeAt(t);
  if (r || c !== 95 && c !== 42)
    return !1;
  const s = u.scanDelims(u.pos, c === 42);
  for (let l = 0; l < s.length; l++) {
    const d = u.push("text", "", 0);
    d.content = String.fromCharCode(c), u.delimiters.push({
      // Char code of the starting marker (number).
      //
      marker: c,
      // Total length of these series of delimiters.
      //
      length: s.length,
      // A position of the token this delimiter corresponds to.
      //
      token: u.tokens.length - 1,
      // If this delimiter is matched as a valid opener, `end` will be
      // equal to its position, otherwise it's `-1`.
      //
      end: -1,
      // Boolean flags that determine if this delimiter could open or close
      // an emphasis.
      //
      open: s.can_open,
      close: s.can_close
    });
  }
  return u.pos += s.length, !0;
}
function zl(u, r) {
  const t = r.length;
  for (let c = t - 1; c >= 0; c--) {
    const s = r[c];
    if (s.marker !== 95 && s.marker !== 42 || s.end === -1)
      continue;
    const l = r[s.end], d = c > 0 && r[c - 1].end === s.end + 1 && // check that first two markers match and adjacent
    r[c - 1].marker === s.marker && r[c - 1].token === s.token - 1 && // check that last two markers are adjacent (we can safely assume they match)
    r[s.end + 1].token === l.token + 1, f = String.fromCharCode(s.marker), _ = u.tokens[s.token];
    _.type = d ? "strong_open" : "em_open", _.tag = d ? "strong" : "em", _.nesting = 1, _.markup = d ? f + f : f, _.content = "";
    const m = u.tokens[l.token];
    m.type = d ? "strong_close" : "em_close", m.tag = d ? "strong" : "em", m.nesting = -1, m.markup = d ? f + f : f, m.content = "", d && (u.tokens[r[c - 1].token].content = "", u.tokens[r[s.end + 1].token].content = "", c--);
  }
}
function cg(u) {
  const r = u.tokens_meta, t = u.tokens_meta.length;
  zl(u, u.delimiters);
  for (let c = 0; c < t; c++)
    r[c] && r[c].delimiters && zl(u, r[c].delimiters);
}
const As = {
  tokenize: og,
  postProcess: cg
};
function lg(u, r) {
  let t, c, s, l, d = "", f = "", _ = u.pos, m = !0;
  if (u.src.charCodeAt(u.pos) !== 91)
    return !1;
  const w = u.pos, y = u.posMax, F = u.pos + 1, M = u.md.helpers.parseLinkLabel(u, u.pos, !0);
  if (M < 0)
    return !1;
  let x = M + 1;
  if (x < y && u.src.charCodeAt(x) === 40) {
    for (m = !1, x++; x < y && (t = u.src.charCodeAt(x), !(!he(t) && t !== 10)); x++)
      ;
    if (x >= y)
      return !1;
    if (_ = x, s = u.md.helpers.parseLinkDestination(u.src, x, u.posMax), s.ok) {
      for (d = u.md.normalizeLink(s.str), u.md.validateLink(d) ? x = s.pos : d = "", _ = x; x < y && (t = u.src.charCodeAt(x), !(!he(t) && t !== 10)); x++)
        ;
      if (s = u.md.helpers.parseLinkTitle(u.src, x, u.posMax), x < y && _ !== x && s.ok)
        for (f = s.str, x = s.pos; x < y && (t = u.src.charCodeAt(x), !(!he(t) && t !== 10)); x++)
          ;
    }
    (x >= y || u.src.charCodeAt(x) !== 41) && (m = !0), x++;
  }
  if (m) {
    if (typeof u.env.references > "u")
      return !1;
    if (x < y && u.src.charCodeAt(x) === 91 ? (_ = x + 1, x = u.md.helpers.parseLinkLabel(u, x), x >= 0 ? c = u.src.slice(_, x++) : x = M + 1) : x = M + 1, c || (c = u.src.slice(F, M)), l = u.env.references[Pr(c)], !l)
      return u.pos = w, !1;
    d = l.href, f = l.title;
  }
  if (!r) {
    u.pos = F, u.posMax = M;
    const A = u.push("link_open", "a", 1), I = [["href", d]];
    A.attrs = I, f && I.push(["title", f]), u.linkLevel++, u.md.inline.tokenize(u), u.linkLevel--, u.push("link_close", "a", -1);
  }
  return u.pos = x, u.posMax = y, !0;
}
function sg(u, r) {
  let t, c, s, l, d, f, _, m, w = "";
  const y = u.pos, F = u.posMax;
  if (u.src.charCodeAt(u.pos) !== 33 || u.src.charCodeAt(u.pos + 1) !== 91)
    return !1;
  const M = u.pos + 2, x = u.md.helpers.parseLinkLabel(u, u.pos + 1, !1);
  if (x < 0)
    return !1;
  if (l = x + 1, l < F && u.src.charCodeAt(l) === 40) {
    for (l++; l < F && (t = u.src.charCodeAt(l), !(!he(t) && t !== 10)); l++)
      ;
    if (l >= F)
      return !1;
    for (m = l, f = u.md.helpers.parseLinkDestination(u.src, l, u.posMax), f.ok && (w = u.md.normalizeLink(f.str), u.md.validateLink(w) ? l = f.pos : w = ""), m = l; l < F && (t = u.src.charCodeAt(l), !(!he(t) && t !== 10)); l++)
      ;
    if (f = u.md.helpers.parseLinkTitle(u.src, l, u.posMax), l < F && m !== l && f.ok)
      for (_ = f.str, l = f.pos; l < F && (t = u.src.charCodeAt(l), !(!he(t) && t !== 10)); l++)
        ;
    else
      _ = "";
    if (l >= F || u.src.charCodeAt(l) !== 41)
      return u.pos = y, !1;
    l++;
  } else {
    if (typeof u.env.references > "u")
      return !1;
    if (l < F && u.src.charCodeAt(l) === 91 ? (m = l + 1, l = u.md.helpers.parseLinkLabel(u, l), l >= 0 ? s = u.src.slice(m, l++) : l = x + 1) : l = x + 1, s || (s = u.src.slice(M, x)), d = u.env.references[Pr(s)], !d)
      return u.pos = y, !1;
    w = d.href, _ = d.title;
  }
  if (!r) {
    c = u.src.slice(M, x);
    const A = [];
    u.md.inline.parse(
      c,
      u.md,
      u.env,
      A
    );
    const I = u.push("image", "img", 0), D = [["src", w], ["alt", ""]];
    I.attrs = D, I.children = A, I.content = c, _ && D.push(["title", _]);
  }
  return u.pos = l, u.posMax = F, !0;
}
const ag = /^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/, fg = /^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;
function dg(u, r) {
  let t = u.pos;
  if (u.src.charCodeAt(t) !== 60)
    return !1;
  const c = u.pos, s = u.posMax;
  for (; ; ) {
    if (++t >= s)
      return !1;
    const d = u.src.charCodeAt(t);
    if (d === 60)
      return !1;
    if (d === 62)
      break;
  }
  const l = u.src.slice(c + 1, t);
  if (fg.test(l)) {
    const d = u.md.normalizeLink(l);
    if (!u.md.validateLink(d))
      return !1;
    if (!r) {
      const f = u.push("link_open", "a", 1);
      f.attrs = [["href", d]], f.markup = "autolink", f.info = "auto";
      const _ = u.push("text", "", 0);
      _.content = u.md.normalizeLinkText(l);
      const m = u.push("link_close", "a", -1);
      m.markup = "autolink", m.info = "auto";
    }
    return u.pos += l.length + 2, !0;
  }
  if (ag.test(l)) {
    const d = u.md.normalizeLink("mailto:" + l);
    if (!u.md.validateLink(d))
      return !1;
    if (!r) {
      const f = u.push("link_open", "a", 1);
      f.attrs = [["href", d]], f.markup = "autolink", f.info = "auto";
      const _ = u.push("text", "", 0);
      _.content = u.md.normalizeLinkText(l);
      const m = u.push("link_close", "a", -1);
      m.markup = "autolink", m.info = "auto";
    }
    return u.pos += l.length + 2, !0;
  }
  return !1;
}
function hg(u) {
  return /^<a[>\s]/i.test(u);
}
function pg(u) {
  return /^<\/a\s*>/i.test(u);
}
function _g(u) {
  const r = u | 32;
  return r >= 97 && r <= 122;
}
function bg(u, r) {
  if (!u.md.options.html)
    return !1;
  const t = u.posMax, c = u.pos;
  if (u.src.charCodeAt(c) !== 60 || c + 2 >= t)
    return !1;
  const s = u.src.charCodeAt(c + 1);
  if (s !== 33 && s !== 63 && s !== 47 && !_g(s))
    return !1;
  const l = u.src.slice(c).match(Gm);
  if (!l)
    return !1;
  if (!r) {
    const d = u.push("html_inline", "", 0);
    d.content = l[0], hg(d.content) && u.linkLevel++, pg(d.content) && u.linkLevel--;
  }
  return u.pos += l[0].length, !0;
}
const mg = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i, gg = /^&([a-z][a-z0-9]{1,31});/i;
function xg(u, r) {
  const t = u.pos, c = u.posMax;
  if (u.src.charCodeAt(t) !== 38 || t + 1 >= c)
    return !1;
  if (u.src.charCodeAt(t + 1) === 35) {
    const l = u.src.slice(t).match(mg);
    if (l) {
      if (!r) {
        const d = l[1][0].toLowerCase() === "x" ? parseInt(l[1].slice(1), 16) : parseInt(l[1], 10), f = u.push("text_special", "", 0);
        f.content = q0(d) ? Tr(d) : Tr(65533), f.markup = l[0], f.info = "entity";
      }
      return u.pos += l[0].length, !0;
    }
  } else {
    const l = u.src.slice(t).match(gg);
    if (l) {
      const d = ms(l[0]);
      if (d !== l[0]) {
        if (!r) {
          const f = u.push("text_special", "", 0);
          f.content = d, f.markup = l[0], f.info = "entity";
        }
        return u.pos += l[0].length, !0;
      }
    }
  }
  return !1;
}
function Nl(u) {
  const r = {}, t = u.length;
  if (!t)
    return;
  let c = 0, s = -2;
  const l = [];
  for (let d = 0; d < t; d++) {
    const f = u[d];
    if (l.push(0), (u[c].marker !== f.marker || s !== f.token - 1) && (c = d), s = f.token, f.length = f.length || 0, !f.close)
      continue;
    r.hasOwnProperty(f.marker) || (r[f.marker] = [-1, -1, -1, -1, -1, -1]);
    const _ = r[f.marker][(f.open ? 3 : 0) + f.length % 3];
    let m = c - l[c] - 1, w = m;
    for (; m > _; m -= l[m] + 1) {
      const y = u[m];
      if (y.marker === f.marker && y.open && y.end < 0) {
        let F = !1;
        if ((y.close || f.open) && (y.length + f.length) % 3 === 0 && (y.length % 3 !== 0 || f.length % 3 !== 0) && (F = !0), !F) {
          const M = m > 0 && !u[m - 1].open ? l[m - 1] + 1 : 0;
          l[d] = d - m + M, l[m] = M, f.open = !1, y.end = d, y.close = !1, w = -1, s = -2;
          break;
        }
      }
    }
    w !== -1 && (r[f.marker][(f.open ? 3 : 0) + (f.length || 0) % 3] = w);
  }
}
function vg(u) {
  const r = u.tokens_meta, t = u.tokens_meta.length;
  Nl(u.delimiters);
  for (let c = 0; c < t; c++)
    r[c] && r[c].delimiters && Nl(r[c].delimiters);
}
function yg(u) {
  let r, t, c = 0;
  const s = u.tokens, l = u.tokens.length;
  for (r = t = 0; r < l; r++)
    s[r].nesting < 0 && c--, s[r].level = c, s[r].nesting > 0 && c++, s[r].type === "text" && r + 1 < l && s[r + 1].type === "text" ? s[r + 1].content = s[r].content + s[r + 1].content : (r !== t && (s[t] = s[r]), t++);
  r !== t && (s.length = t);
}
const _0 = [
  ["text", Qm],
  ["linkify", eg],
  ["newline", ug],
  ["escape", ng],
  ["backticks", tg],
  ["strikethrough", Cs.tokenize],
  ["emphasis", As.tokenize],
  ["link", lg],
  ["image", sg],
  ["autolink", dg],
  ["html_inline", bg],
  ["entity", xg]
], b0 = [
  ["balance_pairs", vg],
  ["strikethrough", Cs.postProcess],
  ["emphasis", As.postProcess],
  // rules for pairs separate '**' into its own text tokens, which may be left unused,
  // rule below merges unused segments back with the rest of the text
  ["fragments_join", yg]
];
function Et() {
  this.ruler = new We();
  for (let u = 0; u < _0.length; u++)
    this.ruler.push(_0[u][0], _0[u][1]);
  this.ruler2 = new We();
  for (let u = 0; u < b0.length; u++)
    this.ruler2.push(b0[u][0], b0[u][1]);
}
Et.prototype.skipToken = function(u) {
  const r = u.pos, t = this.ruler.getRules(""), c = t.length, s = u.md.options.maxNesting, l = u.cache;
  if (typeof l[r] < "u") {
    u.pos = l[r];
    return;
  }
  let d = !1;
  if (u.level < s) {
    for (let f = 0; f < c; f++)
      if (u.level++, d = t[f](u, !0), u.level--, d) {
        if (r >= u.pos)
          throw new Error("inline rule didn't increment state.pos");
        break;
      }
  } else
    u.pos = u.posMax;
  d || u.pos++, l[r] = u.pos;
};
Et.prototype.tokenize = function(u) {
  const r = this.ruler.getRules(""), t = r.length, c = u.posMax, s = u.md.options.maxNesting;
  for (; u.pos < c; ) {
    const l = u.pos;
    let d = !1;
    if (u.level < s) {
      for (let f = 0; f < t; f++)
        if (d = r[f](u, !1), d) {
          if (l >= u.pos)
            throw new Error("inline rule didn't increment state.pos");
          break;
        }
    }
    if (d) {
      if (u.pos >= c)
        break;
      continue;
    }
    u.pending += u.src[u.pos++];
  }
  u.pending && u.pushPending();
};
Et.prototype.parse = function(u, r, t, c) {
  const s = new this.State(u, r, t, c);
  this.tokenize(s);
  const l = this.ruler2.getRules(""), d = l.length;
  for (let f = 0; f < d; f++)
    l[f](s);
};
Et.prototype.State = At;
function kg(u) {
  const r = {};
  u = u || {}, r.src_Any = hs.source, r.src_Cc = ps.source, r.src_Z = _s.source, r.src_P = z0.source, r.src_ZPCc = [r.src_Z, r.src_P, r.src_Cc].join("|"), r.src_ZCc = [r.src_Z, r.src_Cc].join("|");
  const t = "[><｜]";
  return r.src_pseudo_letter = "(?:(?!" + t + "|" + r.src_ZPCc + ")" + r.src_Any + ")", r.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", r.src_auth = "(?:(?:(?!" + r.src_ZCc + "|[@/\\[\\]()]).)+@)?", r.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", r.src_host_terminator = "(?=$|" + t + "|" + r.src_ZPCc + ")(?!" + (u["---"] ? "-(?!--)|" : "-|") + "_|:\\d|\\.-|\\.(?!$|" + r.src_ZPCc + "))", r.src_path = "(?:[/?#](?:(?!" + r.src_ZCc + "|" + t + `|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!` + r.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + r.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + r.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + r.src_ZCc + `|["]).)+\\"|\\'(?:(?!` + r.src_ZCc + "|[']).)+\\'|\\'(?=" + r.src_pseudo_letter + "|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" + r.src_ZCc + "|[.]|$)|" + (u["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + // allow `,,,` in paths
  ",(?!" + r.src_ZCc + "|$)|;(?!" + r.src_ZCc + "|$)|\\!+(?!" + r.src_ZCc + "|[!]|$)|\\?(?!" + r.src_ZCc + "|[?]|$))+|\\/)?", r.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*', r.src_xn = "xn--[a-z0-9\\-]{1,59}", r.src_domain_root = // Allow letters & digits (http://test1)
  "(?:" + r.src_xn + "|" + r.src_pseudo_letter + "{1,63})", r.src_domain = "(?:" + r.src_xn + "|(?:" + r.src_pseudo_letter + ")|(?:" + r.src_pseudo_letter + "(?:-|" + r.src_pseudo_letter + "){0,61}" + r.src_pseudo_letter + "))", r.src_host = "(?:(?:(?:(?:" + r.src_domain + ")\\.)*" + r.src_domain + "))", r.tpl_host_fuzzy = "(?:" + r.src_ip4 + "|(?:(?:(?:" + r.src_domain + ")\\.)+(?:%TLDS%)))", r.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + r.src_domain + ")\\.)+(?:%TLDS%))", r.src_host_strict = r.src_host + r.src_host_terminator, r.tpl_host_fuzzy_strict = r.tpl_host_fuzzy + r.src_host_terminator, r.src_host_port_strict = r.src_host + r.src_port + r.src_host_terminator, r.tpl_host_port_fuzzy_strict = r.tpl_host_fuzzy + r.src_port + r.src_host_terminator, r.tpl_host_port_no_ip_fuzzy_strict = r.tpl_host_no_ip_fuzzy + r.src_port + r.src_host_terminator, r.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + r.src_ZPCc + "|>|$))", r.tpl_email_fuzzy = "(^|" + t + '|"|\\(|' + r.src_ZCc + ")(" + r.src_email_name + "@" + r.tpl_host_fuzzy_strict + ")", r.tpl_link_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
  // but can start with > (markdown blockquote)
  "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + r.src_ZPCc + "))((?![$+<=>^`|｜])" + r.tpl_host_port_fuzzy_strict + r.src_path + ")", r.tpl_link_no_ip_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
  // but can start with > (markdown blockquote)
  "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + r.src_ZPCc + "))((?![$+<=>^`|｜])" + r.tpl_host_port_no_ip_fuzzy_strict + r.src_path + ")", r;
}
function S0(u) {
  return Array.prototype.slice.call(arguments, 1).forEach(function(t) {
    t && Object.keys(t).forEach(function(c) {
      u[c] = t[c];
    });
  }), u;
}
function Nr(u) {
  return Object.prototype.toString.call(u);
}
function wg(u) {
  return Nr(u) === "[object String]";
}
function Cg(u) {
  return Nr(u) === "[object Object]";
}
function Ag(u) {
  return Nr(u) === "[object RegExp]";
}
function ql(u) {
  return Nr(u) === "[object Function]";
}
function Eg(u) {
  return u.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
}
const Es = {
  fuzzyLink: !0,
  fuzzyEmail: !0,
  fuzzyIP: !1
};
function Dg(u) {
  return Object.keys(u || {}).reduce(function(r, t) {
    return r || Es.hasOwnProperty(t);
  }, !1);
}
const Sg = {
  "http:": {
    validate: function(u, r, t) {
      const c = u.slice(r);
      return t.re.http || (t.re.http = new RegExp(
        "^\\/\\/" + t.re.src_auth + t.re.src_host_port_strict + t.re.src_path,
        "i"
      )), t.re.http.test(c) ? c.match(t.re.http)[0].length : 0;
    }
  },
  "https:": "http:",
  "ftp:": "http:",
  "//": {
    validate: function(u, r, t) {
      const c = u.slice(r);
      return t.re.no_http || (t.re.no_http = new RegExp(
        "^" + t.re.src_auth + // Don't allow single-level domains, because of false positives like '//test'
        // with code comments
        "(?:localhost|(?:(?:" + t.re.src_domain + ")\\.)+" + t.re.src_domain_root + ")" + t.re.src_port + t.re.src_host_terminator + t.re.src_path,
        "i"
      )), t.re.no_http.test(c) ? r >= 3 && u[r - 3] === ":" || r >= 3 && u[r - 3] === "/" ? 0 : c.match(t.re.no_http)[0].length : 0;
    }
  },
  "mailto:": {
    validate: function(u, r, t) {
      const c = u.slice(r);
      return t.re.mailto || (t.re.mailto = new RegExp(
        "^" + t.re.src_email_name + "@" + t.re.src_host_strict,
        "i"
      )), t.re.mailto.test(c) ? c.match(t.re.mailto)[0].length : 0;
    }
  }
}, Mg = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]", Fg = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");
function Ig(u) {
  u.__index__ = -1, u.__text_cache__ = "";
}
function Tg(u) {
  return function(r, t) {
    const c = r.slice(t);
    return u.test(c) ? c.match(u)[0].length : 0;
  };
}
function Ul() {
  return function(u, r) {
    r.normalize(u);
  };
}
function Or(u) {
  const r = u.re = kg(u.__opts__), t = u.__tlds__.slice();
  u.onCompile(), u.__tlds_replaced__ || t.push(Mg), t.push(r.src_xn), r.src_tlds = t.join("|");
  function c(f) {
    return f.replace("%TLDS%", r.src_tlds);
  }
  r.email_fuzzy = RegExp(c(r.tpl_email_fuzzy), "i"), r.link_fuzzy = RegExp(c(r.tpl_link_fuzzy), "i"), r.link_no_ip_fuzzy = RegExp(c(r.tpl_link_no_ip_fuzzy), "i"), r.host_fuzzy_test = RegExp(c(r.tpl_host_fuzzy_test), "i");
  const s = [];
  u.__compiled__ = {};
  function l(f, _) {
    throw new Error('(LinkifyIt) Invalid schema "' + f + '": ' + _);
  }
  Object.keys(u.__schemas__).forEach(function(f) {
    const _ = u.__schemas__[f];
    if (_ === null)
      return;
    const m = { validate: null, link: null };
    if (u.__compiled__[f] = m, Cg(_)) {
      Ag(_.validate) ? m.validate = Tg(_.validate) : ql(_.validate) ? m.validate = _.validate : l(f, _), ql(_.normalize) ? m.normalize = _.normalize : _.normalize ? l(f, _) : m.normalize = Ul();
      return;
    }
    if (wg(_)) {
      s.push(f);
      return;
    }
    l(f, _);
  }), s.forEach(function(f) {
    u.__compiled__[u.__schemas__[f]] && (u.__compiled__[f].validate = u.__compiled__[u.__schemas__[f]].validate, u.__compiled__[f].normalize = u.__compiled__[u.__schemas__[f]].normalize);
  }), u.__compiled__[""] = { validate: null, normalize: Ul() };
  const d = Object.keys(u.__compiled__).filter(function(f) {
    return f.length > 0 && u.__compiled__[f];
  }).map(Eg).join("|");
  u.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + r.src_ZPCc + "))(" + d + ")", "i"), u.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + r.src_ZPCc + "))(" + d + ")", "ig"), u.re.schema_at_start = RegExp("^" + u.re.schema_search.source, "i"), u.re.pretest = RegExp(
    "(" + u.re.schema_test.source + ")|(" + u.re.host_fuzzy_test.source + ")|@",
    "i"
  ), Ig(u);
}
function Og(u, r) {
  const t = u.__index__, c = u.__last_index__, s = u.__text_cache__.slice(t, c);
  this.schema = u.__schema__.toLowerCase(), this.index = t + r, this.lastIndex = c + r, this.raw = s, this.text = s, this.url = s;
}
function M0(u, r) {
  const t = new Og(u, r);
  return u.__compiled__[t.schema].normalize(t, u), t;
}
function je(u, r) {
  if (!(this instanceof je))
    return new je(u, r);
  r || Dg(u) && (r = u, u = {}), this.__opts__ = S0({}, Es, r), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = S0({}, Sg, u), this.__compiled__ = {}, this.__tlds__ = Fg, this.__tlds_replaced__ = !1, this.re = {}, Or(this);
}
je.prototype.add = function(r, t) {
  return this.__schemas__[r] = t, Or(this), this;
};
je.prototype.set = function(r) {
  return this.__opts__ = S0(this.__opts__, r), this;
};
je.prototype.test = function(r) {
  if (this.__text_cache__ = r, this.__index__ = -1, !r.length)
    return !1;
  let t, c, s, l, d, f, _, m, w;
  if (this.re.schema_test.test(r)) {
    for (_ = this.re.schema_search, _.lastIndex = 0; (t = _.exec(r)) !== null; )
      if (l = this.testSchemaAt(r, t[2], _.lastIndex), l) {
        this.__schema__ = t[2], this.__index__ = t.index + t[1].length, this.__last_index__ = t.index + t[0].length + l;
        break;
      }
  }
  return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (m = r.search(this.re.host_fuzzy_test), m >= 0 && (this.__index__ < 0 || m < this.__index__) && (c = r.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null && (d = c.index + c[1].length, (this.__index__ < 0 || d < this.__index__) && (this.__schema__ = "", this.__index__ = d, this.__last_index__ = c.index + c[0].length))), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && (w = r.indexOf("@"), w >= 0 && (s = r.match(this.re.email_fuzzy)) !== null && (d = s.index + s[1].length, f = s.index + s[0].length, (this.__index__ < 0 || d < this.__index__ || d === this.__index__ && f > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = d, this.__last_index__ = f))), this.__index__ >= 0;
};
je.prototype.pretest = function(r) {
  return this.re.pretest.test(r);
};
je.prototype.testSchemaAt = function(r, t, c) {
  return this.__compiled__[t.toLowerCase()] ? this.__compiled__[t.toLowerCase()].validate(r, c, this) : 0;
};
je.prototype.match = function(r) {
  const t = [];
  let c = 0;
  this.__index__ >= 0 && this.__text_cache__ === r && (t.push(M0(this, c)), c = this.__last_index__);
  let s = c ? r.slice(c) : r;
  for (; this.test(s); )
    t.push(M0(this, c)), s = s.slice(this.__last_index__), c += this.__last_index__;
  return t.length ? t : null;
};
je.prototype.matchAtStart = function(r) {
  if (this.__text_cache__ = r, this.__index__ = -1, !r.length)
    return null;
  const t = this.re.schema_at_start.exec(r);
  if (!t)
    return null;
  const c = this.testSchemaAt(r, t[2], t[0].length);
  return c ? (this.__schema__ = t[2], this.__index__ = t.index + t[1].length, this.__last_index__ = t.index + t[0].length + c, M0(this, 0)) : null;
};
je.prototype.tlds = function(r, t) {
  return r = Array.isArray(r) ? r : [r], t ? (this.__tlds__ = this.__tlds__.concat(r).sort().filter(function(c, s, l) {
    return c !== l[s - 1];
  }).reverse(), Or(this), this) : (this.__tlds__ = r.slice(), this.__tlds_replaced__ = !0, Or(this), this);
};
je.prototype.normalize = function(r) {
  r.schema || (r.url = "http://" + r.url), r.schema === "mailto:" && !/^mailto:/i.test(r.url) && (r.url = "mailto:" + r.url);
};
je.prototype.onCompile = function() {
};
const Nn = 2147483647, Au = 36, W0 = 1, vt = 26, Rg = 38, Bg = 700, Ds = 72, Ss = 128, Ms = "-", Lg = /^xn--/, $g = /[^\0-\x7F]/, Pg = /[\x2E\u3002\uFF0E\uFF61]/g, zg = {
  overflow: "Overflow: input needs wider integers to process",
  "not-basic": "Illegal input >= 0x80 (not a basic code point)",
  "invalid-input": "Invalid input"
}, m0 = Au - W0, Eu = Math.floor, g0 = String.fromCharCode;
function Qu(u) {
  throw new RangeError(zg[u]);
}
function Ng(u, r) {
  const t = [];
  let c = u.length;
  for (; c--; )
    t[c] = r(u[c]);
  return t;
}
function Fs(u, r) {
  const t = u.split("@");
  let c = "";
  t.length > 1 && (c = t[0] + "@", u = t[1]), u = u.replace(Pg, ".");
  const s = u.split("."), l = Ng(s, r).join(".");
  return c + l;
}
function Is(u) {
  const r = [];
  let t = 0;
  const c = u.length;
  for (; t < c; ) {
    const s = u.charCodeAt(t++);
    if (s >= 55296 && s <= 56319 && t < c) {
      const l = u.charCodeAt(t++);
      (l & 64512) == 56320 ? r.push(((s & 1023) << 10) + (l & 1023) + 65536) : (r.push(s), t--);
    } else
      r.push(s);
  }
  return r;
}
const qg = (u) => String.fromCodePoint(...u), Ug = function(u) {
  return u >= 48 && u < 58 ? 26 + (u - 48) : u >= 65 && u < 91 ? u - 65 : u >= 97 && u < 123 ? u - 97 : Au;
}, Hl = function(u, r) {
  return u + 22 + 75 * (u < 26) - ((r != 0) << 5);
}, Ts = function(u, r, t) {
  let c = 0;
  for (u = t ? Eu(u / Bg) : u >> 1, u += Eu(u / r); u > m0 * vt >> 1; c += Au)
    u = Eu(u / m0);
  return Eu(c + (m0 + 1) * u / (u + Rg));
}, Os = function(u) {
  const r = [], t = u.length;
  let c = 0, s = Ss, l = Ds, d = u.lastIndexOf(Ms);
  d < 0 && (d = 0);
  for (let f = 0; f < d; ++f)
    u.charCodeAt(f) >= 128 && Qu("not-basic"), r.push(u.charCodeAt(f));
  for (let f = d > 0 ? d + 1 : 0; f < t; ) {
    const _ = c;
    for (let w = 1, y = Au; ; y += Au) {
      f >= t && Qu("invalid-input");
      const F = Ug(u.charCodeAt(f++));
      F >= Au && Qu("invalid-input"), F > Eu((Nn - c) / w) && Qu("overflow"), c += F * w;
      const M = y <= l ? W0 : y >= l + vt ? vt : y - l;
      if (F < M)
        break;
      const x = Au - M;
      w > Eu(Nn / x) && Qu("overflow"), w *= x;
    }
    const m = r.length + 1;
    l = Ts(c - _, m, _ == 0), Eu(c / m) > Nn - s && Qu("overflow"), s += Eu(c / m), c %= m, r.splice(c++, 0, s);
  }
  return String.fromCodePoint(...r);
}, Rs = function(u) {
  const r = [];
  u = Is(u);
  const t = u.length;
  let c = Ss, s = 0, l = Ds;
  for (const _ of u)
    _ < 128 && r.push(g0(_));
  const d = r.length;
  let f = d;
  for (d && r.push(Ms); f < t; ) {
    let _ = Nn;
    for (const w of u)
      w >= c && w < _ && (_ = w);
    const m = f + 1;
    _ - c > Eu((Nn - s) / m) && Qu("overflow"), s += (_ - c) * m, c = _;
    for (const w of u)
      if (w < c && ++s > Nn && Qu("overflow"), w === c) {
        let y = s;
        for (let F = Au; ; F += Au) {
          const M = F <= l ? W0 : F >= l + vt ? vt : F - l;
          if (y < M)
            break;
          const x = y - M, A = Au - M;
          r.push(
            g0(Hl(M + x % A, 0))
          ), y = Eu(x / A);
        }
        r.push(g0(Hl(y, 0))), l = Ts(s, m, f === d), s = 0, ++f;
      }
    ++s, ++c;
  }
  return r.join("");
}, Hg = function(u) {
  return Fs(u, function(r) {
    return Lg.test(r) ? Os(r.slice(4).toLowerCase()) : r;
  });
}, Wg = function(u) {
  return Fs(u, function(r) {
    return $g.test(r) ? "xn--" + Rs(r) : r;
  });
}, Bs = {
  /**
   * A string representing the current Punycode.js version number.
   * @memberOf punycode
   * @type String
   */
  version: "2.3.1",
  /**
   * An object of methods to convert from JavaScript's internal character
   * representation (UCS-2) to Unicode code points, and back.
   * @see <https://mathiasbynens.be/notes/javascript-encoding>
   * @memberOf punycode
   * @type Object
   */
  ucs2: {
    decode: Is,
    encode: qg
  },
  decode: Os,
  encode: Rs,
  toASCII: Wg,
  toUnicode: Hg
}, Gg = {
  options: {
    // Enable HTML tags in source
    html: !1,
    // Use '/' to close single tags (<br />)
    xhtmlOut: !1,
    // Convert '\n' in paragraphs into <br>
    breaks: !1,
    // CSS language prefix for fenced blocks
    langPrefix: "language-",
    // autoconvert URL-like texts to links
    linkify: !1,
    // Enable some language-neutral replacements + quotes beautification
    typographer: !1,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: "“”‘’",
    /* “”‘’ */
    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    // Internal protection, recursion limit
    maxNesting: 100
  },
  components: {
    core: {},
    block: {},
    inline: {}
  }
}, Kg = {
  options: {
    // Enable HTML tags in source
    html: !1,
    // Use '/' to close single tags (<br />)
    xhtmlOut: !1,
    // Convert '\n' in paragraphs into <br>
    breaks: !1,
    // CSS language prefix for fenced blocks
    langPrefix: "language-",
    // autoconvert URL-like texts to links
    linkify: !1,
    // Enable some language-neutral replacements + quotes beautification
    typographer: !1,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: "“”‘’",
    /* “”‘’ */
    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    // Internal protection, recursion limit
    maxNesting: 20
  },
  components: {
    core: {
      rules: [
        "normalize",
        "block",
        "inline",
        "text_join"
      ]
    },
    block: {
      rules: [
        "paragraph"
      ]
    },
    inline: {
      rules: [
        "text"
      ],
      rules2: [
        "balance_pairs",
        "fragments_join"
      ]
    }
  }
}, Zg = {
  options: {
    // Enable HTML tags in source
    html: !0,
    // Use '/' to close single tags (<br />)
    xhtmlOut: !0,
    // Convert '\n' in paragraphs into <br>
    breaks: !1,
    // CSS language prefix for fenced blocks
    langPrefix: "language-",
    // autoconvert URL-like texts to links
    linkify: !1,
    // Enable some language-neutral replacements + quotes beautification
    typographer: !1,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: "“”‘’",
    /* “”‘’ */
    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    // Internal protection, recursion limit
    maxNesting: 20
  },
  components: {
    core: {
      rules: [
        "normalize",
        "block",
        "inline",
        "text_join"
      ]
    },
    block: {
      rules: [
        "blockquote",
        "code",
        "fence",
        "heading",
        "hr",
        "html_block",
        "lheading",
        "list",
        "reference",
        "paragraph"
      ]
    },
    inline: {
      rules: [
        "autolink",
        "backticks",
        "emphasis",
        "entity",
        "escape",
        "html_inline",
        "image",
        "link",
        "newline",
        "text"
      ],
      rules2: [
        "balance_pairs",
        "emphasis",
        "fragments_join"
      ]
    }
  }
}, Vg = {
  default: Gg,
  zero: Kg,
  commonmark: Zg
}, Yg = /^(vbscript|javascript|file|data):/, Jg = /^data:image\/(gif|png|jpeg|webp);/;
function Xg(u) {
  const r = u.trim().toLowerCase();
  return Yg.test(r) ? Jg.test(r) : !0;
}
const Ls = ["http:", "https:", "mailto:"];
function Qg(u) {
  const r = P0(u, !0);
  if (r.hostname && (!r.protocol || Ls.indexOf(r.protocol) >= 0))
    try {
      r.hostname = Bs.toASCII(r.hostname);
    } catch {
    }
  return Ct($0(r));
}
function jg(u) {
  const r = P0(u, !0);
  if (r.hostname && (!r.protocol || Ls.indexOf(r.protocol) >= 0))
    try {
      r.hostname = Bs.toUnicode(r.hostname);
    } catch {
    }
  return Un($0(r), Un.defaultChars + "%");
}
function au(u, r) {
  if (!(this instanceof au))
    return new au(u, r);
  r || N0(u) || (r = u || {}, u = "default"), this.inline = new Et(), this.block = new zr(), this.core = new U0(), this.renderer = new Wn(), this.linkify = new je(), this.validateLink = Xg, this.normalizeLink = Qg, this.normalizeLinkText = jg, this.utils = nm, this.helpers = $r({}, om), this.options = {}, this.configure(u), r && this.set(r);
}
au.prototype.set = function(u) {
  return $r(this.options, u), this;
};
au.prototype.configure = function(u) {
  const r = this;
  if (N0(u)) {
    const t = u;
    if (u = Vg[t], !u)
      throw new Error('Wrong `markdown-it` preset "' + t + '", check name');
  }
  if (!u)
    throw new Error("Wrong `markdown-it` preset, can't be empty");
  return u.options && r.set(u.options), u.components && Object.keys(u.components).forEach(function(t) {
    u.components[t].rules && r[t].ruler.enableOnly(u.components[t].rules), u.components[t].rules2 && r[t].ruler2.enableOnly(u.components[t].rules2);
  }), this;
};
au.prototype.enable = function(u, r) {
  let t = [];
  Array.isArray(u) || (u = [u]), ["core", "block", "inline"].forEach(function(s) {
    t = t.concat(this[s].ruler.enable(u, !0));
  }, this), t = t.concat(this.inline.ruler2.enable(u, !0));
  const c = u.filter(function(s) {
    return t.indexOf(s) < 0;
  });
  if (c.length && !r)
    throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + c);
  return this;
};
au.prototype.disable = function(u, r) {
  let t = [];
  Array.isArray(u) || (u = [u]), ["core", "block", "inline"].forEach(function(s) {
    t = t.concat(this[s].ruler.disable(u, !0));
  }, this), t = t.concat(this.inline.ruler2.disable(u, !0));
  const c = u.filter(function(s) {
    return t.indexOf(s) < 0;
  });
  if (c.length && !r)
    throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + c);
  return this;
};
au.prototype.use = function(u) {
  const r = [this].concat(Array.prototype.slice.call(arguments, 1));
  return u.apply(u, r), this;
};
au.prototype.parse = function(u, r) {
  if (typeof u != "string")
    throw new Error("Input data should be a String");
  const t = new this.core.State(u, this, r);
  return this.core.process(t), t.tokens;
};
au.prototype.render = function(u, r) {
  return r = r || {}, this.renderer.render(this.parse(u, r), this.options, r);
};
au.prototype.parseInline = function(u, r) {
  const t = new this.core.State(u, this, r);
  return t.inlineMode = !0, this.core.process(t), t.tokens;
};
au.prototype.renderInline = function(u, r) {
  return r = r || {}, this.renderer.render(this.parseInline(u, r), this.options, r);
};
let x0 = null;
function e4(u) {
  return x0 === null && (x0 = mn("GET", "/nbox/help-text", {}, null, !0)), x0.then((r) => r[u] || {
    title: `id: [${u}]`,
    content: "Ajuda não encontrada",
    userId: "",
    lastUpdate: null
  });
}
async function u4(u, r) {
  const t = { content: r };
  return await mn("POST", `/nbox/help-text/${u}`, {}, t, !0);
}
const Wl = { get: e4, set: u4 }, n4 = { class: "help-field" }, t4 = { class: "help-right" }, r4 = { class: "help-box" }, i4 = ["innerHTML"], o4 = { class: "help-editor" }, c4 = { class: "help-editor-panel" }, l4 = { class: "help-editor-header" }, s4 = { class: "help-preview" }, a4 = { class: "help-box" }, f4 = ["innerHTML"], d4 = /* @__PURE__ */ U("a", {
  href: "https://www.markdownguide.org/basic-syntax/",
  target: "_blank",
  class: "n-link"
}, " Guia básico de markdown ", -1), h4 = /* @__PURE__ */ V({
  __name: "Help",
  props: {
    id: null,
    mode: { default: () => "dock" }
  },
  setup(u) {
    const r = u, t = au(), c = oe(), s = oe(!1), l = oe(!1), d = oe(!1), f = oe("");
    yt(async () => {
      const w = await Wl.get(r.id);
      f.value = w.content, d.value = Br.value.roles.indexOf("HELP") >= 0;
    });
    async function _() {
      if (!f.value)
        return k0.error("O campo de descrição é obrigatório");
      await Wl.set(r.id, f.value), k0.success("Texto de ajuda registrado com sucesso"), l.value = !1;
    }
    function m(w) {
      w.preventDefault(), s.value = !s.value;
    }
    return (w, y) => {
      const F = Cu("Icon"), M = Cu("Btn"), x = Cu("InputBox"), A = Cu("Popup");
      return N(), j("div", {
        ref_key: "el",
        ref: c,
        class: "help"
      }, [
        U("div", n4, [
          ge(w.$slots, "default"),
          U("div", t4, [
            U("div", {
              class: "help-btn",
              title: "Ajuda",
              onClick: m
            }, gu(s.value ? "✕" : "?"), 1)
          ])
        ]),
        ht(U("div", r4, [
          U("main", null, [
            U("div", {
              innerHTML: re(t).render(f.value || ""),
              class: "markdown-body"
            }, null, 8, i4)
          ]),
          ht(U("a", {
            class: "n-link",
            href: "javascript:;",
            onClick: y[0] || (y[0] = () => l.value = !0)
          }, [
            Be(F, {
              name: re(u6),
              class: "n-mr-1"
            }, null, 8, ["name"]),
            Su("Editar ")
          ], 512), [
            [pt, d.value]
          ])
        ], 512), [
          [pt, s.value]
        ]),
        Be(A, {
          modelValue: l.value,
          "onUpdate:modelValue": y[2] || (y[2] = (I) => l.value = I),
          title: "Editor de conteúdo de ajuda",
          width: 65
        }, {
          default: Ce(() => [
            U("div", o4, [
              U("div", c4, [
                U("div", l4, [
                  Be(M, {
                    color: "primary",
                    mini: !0,
                    onClick: _
                  }, {
                    default: Ce(() => [
                      Su("Salvar")
                    ]),
                    _: 1
                  })
                ]),
                Be(x, {
                  value: f.value,
                  "onUpdate:value": y[1] || (y[1] = (I) => f.value = I),
                  type: "textarea",
                  rows: 25,
                  maxlength: "8000",
                  placeholder: "Descrição do texto de ajuda (suporta Markdown)"
                }, null, 8, ["value"])
              ]),
              U("div", s4, [
                U("div", a4, [
                  U("main", {
                    innerHTML: re(t).render(f.value || ""),
                    class: "markdown-body"
                  }, null, 8, f4)
                ]),
                d4
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ], 512);
    };
  }
}), p4 = { class: "popup-header" }, _4 = { class: "popup-main" }, b4 = /* @__PURE__ */ V({
  __name: "Popup",
  props: {
    modelValue: { type: Boolean },
    title: null,
    width: null,
    profileKey: null
  },
  emits: ["update:modelValue"],
  setup(u, { emit: r }) {
    const t = u, c = t.profileKey === void 0 ? l(t.title) : t.profileKey;
    function s() {
      r("update:modelValue", !1);
    }
    function l(d) {
      const _ = Yl().path + "_" + d;
      return "popup_" + R0(_);
    }
    return (d, f) => (N(), j("div", {
      class: ye(["popup-overlay", { open: u.modelValue }])
    }, [
      Be(ds, {
        profileKey: re(c),
        class: "popup",
        style: Vl({ width: +u.width > 0 ? u.width + "rem" : "auto" })
      }, {
        header: Ce(() => [
          U("header", p4, [
            Su(gu(u.title) + " ", 1),
            Be(re(k6), {
              onClick: f[0] || (f[0] = (_) => s()),
              class: "popup-icon",
              title: "Fechar"
            })
          ])
        ]),
        main: Ce(() => [
          U("main", _4, [
            ge(d.$slots, "default")
          ])
        ]),
        _: 3
      }, 8, ["profileKey", "style"])
    ], 2));
  }
}), m4 = /* @__PURE__ */ V({
  __name: "Toolbar",
  setup(u) {
    return (r, t) => (N(), le(re(q3), { class: "toolbar n-block" }, {
      default: Ce(() => [
        ge(r.$slots, "default")
      ]),
      _: 3
    }));
  }
}), g4 = /* @__PURE__ */ V({
  __name: "TransferData",
  props: {
    options: null,
    valueKey: null,
    textKey: null
  },
  setup(u) {
    const r = u, t = De(() => {
      const c = r.valueKey || 0;
      return r.options?.map((s) => ({
        value: s[c],
        label: typeof r.textKey == "string" ? s[r.textKey] : r.textKey(s)
      }));
    });
    return (c, s) => (N(), le(re(U3), {
      ref: "transfer",
      "virtual-scroll": "",
      options: re(t),
      "source-filterable": "",
      "target-filterable": "",
      "source-title": "Disponíveis",
      "target-title": "Selecionados",
      style: { width: "100%" }
    }, null, 8, ["options"]));
  }
}), x4 = /* @__PURE__ */ V({
  __name: "TabPanel",
  props: {
    index: null,
    title: null,
    icon: null,
    disabled: { type: Boolean },
    visible: { type: Boolean, default: () => !0 }
  },
  setup(u) {
    const r = u, t = y0("selectedIndex", oe(0)), c = De(() => t.value === r.index);
    function s() {
      r.disabled || (t.value = r.index);
    }
    return (l, d) => (N(), j(Kl, null, [
      U("label", {
        class: ye(["tabs-label", {
          "tab-disabled": u.disabled,
          "tab-selected": re(c),
          "tabs-hide": !u.visible
        }]),
        onClick: s
      }, [
        u.icon ? (N(), le(Du, {
          key: 0,
          name: u.icon,
          class: "tabs-icon"
        }, null, 8, ["name"])) : Ie("", !0),
        Su(" " + gu(u.title), 1)
      ], 2),
      U("section", {
        class: ye(["tabs-content", { "tabs-hide": !u.visible }])
      }, [
        ge(l.$slots, "default")
      ], 2)
    ], 64));
  }
}), v4 = { class: "tabs n-block" }, y4 = /* @__PURE__ */ V({
  __name: "Tabs",
  props: {
    selectedIndex: { default: () => 0 }
  },
  emits: ["update:selectedIndex"],
  setup(u, { emit: r }) {
    const t = u, c = oe(t.selectedIndex);
    return bn(
      () => t.selectedIndex,
      (s) => {
        c.value = s;
      }
    ), bn(c, (s) => {
      r("update:selectedIndex", s);
    }), v0("selectedIndex", c), (s, l) => (N(), j("div", v4, [
      ge(s.$slots, "default")
    ]));
  }
}), I4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, Btn: wt, BtnLink: k_, BtnMini: w_, BtnUpload: A_, Card: _b, CheckBox: ls, CheckGroup: ub, ComboBox: B0, CpfBox: nb, DateBox: Lr, DecimalBox: cs, DraggableDiv: ds, EmailBox: tb, Form: D_, FormItem: T_, GridView: U_, GridViewOptions: Y_, Help: h4, Icon: Du, InputBox: Hn, MaskBox: fs, MemoBox: rb, MoneyBox: E0, MonthBox: ib, NumberBox: L0, Popup: b4, RadioBox: ob, RadioGroup: cb, SearchBox: lb, SortItems: rs, TabPanel: x4, Tabs: y4, Toolbar: m4, TransferData: g4 }, Symbol.toStringTag, { value: "Module" }));
export {
  Y_ as GridViewOptions,
  wt as _sfc_main,
  k_ as _sfc_main$1,
  nb as _sfc_main$10,
  Lr as _sfc_main$11,
  cs as _sfc_main$12,
  tb as _sfc_main$13,
  Hn as _sfc_main$14,
  fs as _sfc_main$15,
  rb as _sfc_main$16,
  E0 as _sfc_main$17,
  ib as _sfc_main$18,
  L0 as _sfc_main$19,
  w_ as _sfc_main$2,
  ob as _sfc_main$20,
  cb as _sfc_main$21,
  lb as _sfc_main$22,
  _b as _sfc_main$23,
  ds as _sfc_main$24,
  h4 as _sfc_main$25,
  Du as _sfc_main$26,
  b4 as _sfc_main$27,
  rs as _sfc_main$28,
  m4 as _sfc_main$29,
  A_ as _sfc_main$3,
  g4 as _sfc_main$30,
  x4 as _sfc_main$31,
  y4 as _sfc_main$32,
  D_ as _sfc_main$4,
  T_ as _sfc_main$5,
  U_ as _sfc_main$6,
  ls as _sfc_main$7,
  ub as _sfc_main$8,
  B0 as _sfc_main$9,
  mn as api,
  Pn as commonjsGlobal,
  I4 as components,
  E4 as doLogin,
  S4 as doLogout,
  is as getDefaultExportFromCjs,
  F4 as index,
  kt as isString,
  M4 as mask,
  k0 as notification,
  ns as permissions,
  Mr as profile,
  Dr as remove,
  _n as settings,
  ts as sitemap,
  D4 as tryLogin,
  A4 as underscore,
  Rr as useCulture,
  Br as user
};
