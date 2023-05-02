/**
 * Instala os componentes do Vue do NBox no app
 */
import api from "./core/api";
import { user, permissions, sitemap, doLogin, doLogout, tryLogin } from "./core/auth";
import createApp from "./core/createApp";
import { useCulture } from "./core/culture";
import * as device from "./core/device";
import { errorHandler } from "./core/error";
import { useLoading } from "./core/loading";
import * as mask from "./core/mask";
import { notification } from "./core/notification";
import * as validators from "./core/validators";
import * as storage from "./core/storage";
import * as locale from "./core/custom-locale";
import * as _ from "./core/underscore";
export { api, createApp, useCulture, user, permissions, sitemap, doLogin, doLogout, tryLogin, device, errorHandler, useLoading, mask, notification, validators, storage, locale, 
/**
 * Versão customizada da biblioteca "underscore". Contem dezenas de metodos de uso no dia-a-dia no javascript/typescript
 */
_, };
