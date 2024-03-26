/**
 * Instala os componentes do Vue do NBox no app
 */
import api from "./core/api";
import { user, permissions, sitemap, doLogin, doLogout, tryLogin } from "./core/auth";
import createApp from "./core/createApp";
import { useCulture } from "./core/culture";
import * as device from "./core/device";
import { downloadDocxReport } from "./core/docxreport";
import { errorHandler } from "./core/error";
import { useLoading } from "./core/loading";
import * as mask from "./core/mask";
import { notification } from "./core/notification";
import profile from "./core/profile";
import * as validators from "./core/validators";
import * as storage from "./core/storage";
import * as locale from "./core/custom-locale";
import * as _ from "./core/underscore";
import objectPath from "object-path";
export { api, createApp, useCulture, user, permissions, sitemap, doLogin, doLogout, tryLogin, device, downloadDocxReport, errorHandler, useLoading, mask, notification, profile, validators, storage, locale, objectPath, 
/**
 * Versão customizada da biblioteca "underscore". Contem dezenas de metodos de uso no dia-a-dia no javascript/typescript
 */
_, };
