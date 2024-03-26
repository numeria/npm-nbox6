import { isString as Ts, notification as Et, settings as fa, tryLogin as Ss, user as ks, components as Fi, getDefaultExportFromCjs as Fo, commonjsGlobal as ot, remove as Bs, api as Sa } from "./components-194ff59e.js";
import { underscore as Qd, doLogin as eh, doLogout as rh, mask as th, index as nh, permissions as ah, profile as ih, sitemap as oh, useCulture as uh } from "./components-194ff59e.js";
import { createApp as Os, ref as Zr } from "vue";
import { createRouter as Fs, createWebHashHistory as Ps } from "vue-router";
import { createLocale as Rs, ptBR as Ns, datePtBR as Is } from "naive-ui";
const Ls = async (e) => {
  if (Ts(e))
    Et.alert(e);
  else if (e.code >= 500)
    Et.alert(e.message, {
      details: e.details
    }), console.error(e);
  else if (e.code === 401 || e.code === 403 || e.code === 409)
    await Et.alert(e.message), localStorage.removeItem("access_token"), location.href = "/";
  else if (e.code === 400) {
    const r = { details: e.inner ? e.inner.split(`
`) : null };
    await Et.alert(e.message, r);
  } else
    Et.alert(e.message), console.error(e);
}, zs = `:root{--max-container: 1200px;--spacer: 1.2rem;--spacer-0: 0;--spacer-1: calc(var(--spacer) * .25);--spacer-2: calc(var(--spacer) * .5);--spacer-3: var(--spacer);--spacer-4: calc(var(--spacer) * 1.5);--spacer-5: calc(var(--spacer) * 3);--font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;--font-family-monospace: "Lucida Console", monospace;--line-height: 1.6;--font-size: 13px;--control-height: calc(var(--font-size) * 2.6);--control-height-mini: calc(var(--font-size) * 2);--body-bg: #e3e3e3;--app-bg: rgb(208, 218, 189);--block-margin-top: var(--spacer);--text-color: #24292e;--disabled-color: #959da5;--disabled-bg: #e1e1e1;--line-color: #f1f1f1;--content-bg: #fafafa;--default-color: #fafbfc;--default-dark: rgb(234, 234, 234);--default-light: rgb(238, 238, 238);--default-font: #24292e;--default-border: #e1e4e7;--primary-color: #3b73b7;--primary-dark: #305e97;--primary-light: #f0f5fc;--primary-font: white;--primary-border: #dce9fb;--success-color: #04aa6d;--success-dark: #0e9161;--success-light: #e3f4e4;--success-font: white;--success-border: #d4ecd5;--warning-color: rgb(235, 172, 36);--warning-dark: rgb(207, 147, 19);--warning-light: rgb(241, 232, 210);--warning-font: white;--warning-border: rgb(239 229 202);--info-color: rgb(65, 169, 187);--info-dark: rgb(45, 144, 161);--info-light: rgb(220, 235, 237);--info-font: white;--info-border: rgb(193 225 230);--error-color: #e83b2f;--error-dark: #bc1104;--error-light: #fee9e3;--error-font: white;--error-border: #f7d9d0}.n-data-table-th__title{font-weight:500}.n-base-select-option__content{width:100%}.n-base-select-menu .n-base-select-option.n-base-select-option--show-checkmark{padding-right:10px}.n-input .n-input__suffix .n-base-clear .n-base-clear__placeholder .n-base-icon{cursor:pointer}.n-pagination{margin-right:1rem}.n-base-select-menu .n-base-select-option .n-base-select-option__content{white-space:normal;text-overflow:initial;padding-right:10px}.n-app-container{max-width:var(--max-container);margin:auto;min-height:100vh;background-color:var(--app-bg);box-shadow:0 0 12px #96969642}.n-block+.n-block{margin-top:var(--block-margin-top)}.n-link{text-decoration:none;color:var(--primary-color)}.n-link:hover{text-decoration:underline}.n-content{height:100%!important;width:100%!important}div.n-center,main.n-center,article.n-center,aside.n-content{margin:auto}h1.n-center,h2.n-center,h3.n-center,h4.n-center,h5.n-center,h6.n-center,p,span{text-align:center}.n-bold{font-weight:700}.n-d-flex{display:flex!important}.n-flex-column{flex-direction:column}.n-justify-content-between{justify-content:space-between}.n-justify-content-center{justify-content:center}.n-justify-content-start{justify-content:start}.n-justify-content-end{justify-content:end}.n-justify-content-flex-start{justify-content:flex-start}.n-justify-content-flex-end{justify-content:flex-end}.n-justify-content-left{justify-content:left}.n-justify-content-right{justify-content:right}.n-justify-items-auto,.n-justify-items-normal{justify-items:auto}.n-justify-items-stretch{justify-items:stretch}.n-justify-items-baseline{justify-items:baseline}.n-justify-items-f-baseline{justify-items:first baseline}.n-justify-items-l-baseline{justify-items:last baseline}.n-justify-items-center{justify-items:center}.n-justify-items-start{justify-items:start}.n-justify-items-end{justify-items:end}.n-justify-items-flex-start{justify-items:flex-start}.n-justify-items-flex-end{justify-items:flex-end}.n-justify-items-self-start{justify-items:self-start}.n-justify-items-self-end{justify-items:self-end}.n-justify-items-left{justify-items:left}.n-justify-items-right{justify-items:right}.n-justify-items-safe{justify-items:safe}.n-justify-items-unsafe{justify-items:unsafe}.n-justify-items-legacy-center{justify-items:legacy center}.n-justify-items-legacy-left{justify-items:legacy left}.n-justify-items-legacy-right{justify-items:legacy right}.n-justify-items-inherit{justify-items:inherit}.n-justify-items-initial{justify-items:initial}.n-justify-items-unset{justify-items:unset}.n-align-items-start{align-items:start}.n-align-items-end{align-items:end}.n-align-items-flex-start{align-items:flex-start}.n-align-items-flex-end{align-items:flex-end}.n-align-items-center{align-items:center}.n-align-items-baseline{align-items:baseline}.n-align-items-stretch{align-items:stretch}.n-align-content-start{align-content:start}.n-align-content-end{align-content:end}.n-align-content-flex-start{align-content:flex-start}.n-align-content-flex-end{align-content:flex-end}.n-align-content-center{align-content:center}.n-align-content-space-between{align-content:space-between}.n-align-content-space-around{align-content:space-around}.n-align-content-stretch{align-content:stretch}.n-m-0{margin:0!important}.n-m-1{margin:var(--spacer-1)!important}.n-m-2{margin:var(--spacer-2)!important}.n-m-3{margin:var(--spacer-3)!important}.n-m-4{margin:var(--spacer-4)!important}.n-m-5{margin:var(--spacer-5)!important}.n-mt-0{margin-top:0!important}.n-mt-1{margin-top:var(--spacer-1)!important}.n-mt-2{margin-top:var(--spacer-2)!important}.n-mt-3{margin-top:var(--spacer-3)!important}.n-mt-4{margin-top:var(--spacer-4)!important}.n-mt-5{margin-top:var(--spacer-5)!important}.n-mb-0{margin-bottom:0!important}.n-mb-1{margin-bottom:var(--spacer-1)!important}.n-mb-2{margin-bottom:var(--spacer-2)!important}.n-mb-3{margin-bottom:var(--spacer-3)!important}.n-mb-4{margin-bottom:var(--spacer-4)!important}.n-mb-5{margin-bottom:var(--spacer-5)!important}.n-ml-0{margin-left:0!important}.n-ml-1{margin-left:var(--spacer-1)!important}.n-ml-2{margin-left:var(--spacer-2)!important}.n-ml-3{margin-left:var(--spacer-3)!important}.n-ml-4{margin-left:var(--spacer-4)!important}.n-ml-5{margin-left:var(--spacer-5)!important}.n-mr-0{margin-right:0!important}.n-mr-1{margin-right:var(--spacer-1)!important}.n-mr-2{margin-right:var(--spacer-2)!important}.n-mr-3{margin-right:var(--spacer-3)!important}.n-mr-4{margin-right:var(--spacer-4)!important}.n-mr-5{margin-right:var(--spacer-5)!important}.n-p-0{padding:0!important}.n-p-1{padding:var(--spacer-1)!important}.n-p-2{padding:var(--spacer-2)!important}.n-p-3{padding:var(--spacer-3)!important}.n-p-4{padding:var(--spacer-4)!important}.n-p-5{padding:var(--spacer-5)!important}.n-pt-0{padding-top:0!important}.n-pt-1{padding-top:var(--spacer-1)!important}.n-pt-2{padding-top:var(--spacer-2)!important}.n-pt-3{padding-top:var(--spacer-3)!important}.n-pt-4{padding-top:var(--spacer-4)!important}.n-pt-5{padding-top:var(--spacer-5)!important}.n-pb-0{padding-bottom:0!important}.n-pb-1{padding-bottom:var(--spacer-1)!important}.n-pb-2{padding-bottom:var(--spacer-2)!important}.n-pb-3{padding-bottom:var(--spacer-3)!important}.n-pb-4{padding-bottom:var(--spacer-4)!important}.n-pb-5{padding-bottom:var(--spacer-5)!important}.n-pl-0{padding-left:0!important}.n-pl-1{padding-left:var(--spacer-1)!important}.n-pl-2{padding-left:var(--spacer-2)!important}.n-pl-3{padding-left:var(--spacer-3)!important}.n-pl-4{padding-left:var(--spacer-4)!important}.n-pl-5{padding-left:var(--spacer-5)!important}.n-pr-0{padding-right:0!important}.n-pr-1{padding-right:var(--spacer-1)!important}.n-pr-2{padding-right:var(--spacer-2)!important}.n-pr-3{padding-right:var(--spacer-3)!important}.n-pr-4{padding-right:var(--spacer-4)!important}.n-pr-5{padding-right:var(--spacer-5)!important}.n-w-1{max-width:var(--spacer-1)}.n-w-2{max-width:var(--spacer-2)}.n-w-3{max-width:var(--spacer-3)}.n-w-4{max-width:var(--spacer-4)}.n-w-5{max-width:var(--spacer-5)}.n-h-1{max-height:var(--spacer-1)}.n-h-2{max-height:var(--spacer-2)}.n-h-3{max-height:var(--spacer-3)}.n-h-4{max-height:var(--spacer-4)}.n-h-5{max-height:var(--spacer-5)}.n-w-10{width:10%!important}.n-w-20{width:20%!important}.n-w-30{width:30%!important}.n-w-40{width:40%!important}.n-w-50{width:50%!important}.n-w-60{width:60%!important}.n-w-70{width:70%!important}.n-w-80{width:80%!important}.n-w-90{width:90%!important}.n-w-100{width:100%!important}.n-h-10{height:10%!important}.n-h-20{height:20%!important}.n-h-30{height:30%!important}.n-h-40{height:40%!important}.n-h-50{height:50%!important}.n-h-60{height:60%!important}.n-h-70{height:70%!important}.n-h-80{height:80%!important}.n-h-90{height:90%!important}.n-h-100{height:100%!important}.btn{font-family:var(--font-family);font-size:var(--font-size);height:var(--control-height);border-radius:6px;cursor:pointer;white-space:nowrap;word-wrap:break-word;display:inline-flex;align-items:center;align-content:center;position:relative;user-select:none;-webkit-user-select:none;touch-action:manipulation;transition:background-color .2s cubic-bezier(.3,0,.5,1);padding:0 .8rem;text-decoration:none}.btn-button{appearance:none;background-color:#fafbfc;border:1px solid rgba(27,31,35,.15);box-shadow:#1b1f230a 0 1px,#ffffff40 0 1px inset;box-sizing:border-box;color:#24292e;vertical-align:middle}.btn-button:hover{text-decoration:none;transition-duration:.1s}.btn-button:active{background-color:#edeff2;box-shadow:#e1e4e833 0 1px inset;transition:none 0s}.btn-button:before{display:none}.btn-button:-webkit-details-marker{display:none}.btn .icon{align-self:center}.btn-text{display:inline-block;font-size:var(--font-size);font-weight:500;line-height:140%;list-style:none;align-self:center}.btn-link{font-weight:500;border:1px solid rgb(244,244,244);background-color:#fff6}.btn-link:hover{box-shadow:#1b1f230a 0 1px,#ffffff40 0 1px inset}.btn-is-full{width:100%}.btn-is-mini{font-size:calc(var(--font-size) * .85);height:calc(var(--control-height-mini))}.btn-is-mini .btn-text{font-size:calc(var(--font-size) * .85)}.btn-is-mini .icon{font-size:calc(var(--font-size) * .9)!important}.btn-is-mini>.icon+.btn-text:not(:empty){margin-left:.4rem}.btn-is-loading{cursor:wait!important}.btn>.icon+.btn-text:not(:empty){margin-left:.65em}.btn .icon{font-size:calc(var(--font-size) * 1.1)}.btn-is-disabled{cursor:not-allowed;color:var(--disabled-color)!important;opacity:.7}.btn-button.btn-default.btn-is-disabled,.btn-button:hover.btn-default.btn-is-disabled{background-color:var(--default-light)}.btn-button.btn-primary.btn-is-disabled,.btn-button:hover.btn-primary.btn-is-disabled{background-color:var(--primary-light)}.btn-button.btn-success.btn-is-disabled,.btn-button:hover.btn-success.btn-is-disabled{background-color:var(--success-light)}.btn-button.btn-info.btn-is-disabled,.btn-button:hover.btn-info.btn-is-disabled{background-color:var(--info-light)}.btn-button.btn-warning.btn-is-disabled,.btn-button:hover.btn-warning.btn-is-disabled{background-color:var(--warning-light)}.btn-button.btn-error.btn-is-disabled,.btn-button:hover.btn-error.btn-is-disabled{background-color:var(--error-light)}.btn-link:hover.btn-is-disabled{background-color:#fff6!important;box-shadow:none}.btn-link:hover.btn-default.btn-is-disabled{border-color:var(--default-border)}.btn-link:hover.btn-primary.btn-is-disabled{border-color:var(--primary-border)}.btn-link:hover.btn-success.btn-is-disabled{border-color:var(--success-border)}.btn-link:hover.btn-info.btn-is-disabled{border-color:var(--info-border)}.btn-link:hover.btn-warning.btn-is-disabled{border-color:var(--warning-border)}.btn-link:hover.btn-error.btn-is-disabled{border-color:var(--error-border)}.btn-button.btn-default{color:var(--default-font);background-color:var(--default-color)}.btn-button.btn-default:hover{background-color:var(--default-dark)}.btn-link.btn-default{color:var(--default-font);border-color:var(--default-border)}.btn-link.btn-default:hover{background-color:var(--default-light);border-color:var(--default-color)}.btn-button.btn-primary{color:var(--primary-font);background-color:var(--primary-color)}.btn-button.btn-primary:hover{background-color:var(--primary-dark)}.btn-link.btn-primary{color:var(--primary-color);border-color:var(--primary-border)}.btn-link.btn-primary:hover{background-color:var(--primary-light);border-color:var(--primary-color)}.btn-button.btn-success{color:var(--success-font);background-color:var(--success-color)}.btn-button.btn-success:hover{background-color:var(--success-dark)}.btn-link.btn-success{color:var(--success-color);border-color:var(--success-border)}.btn-link.btn-success:hover{background-color:var(--success-light);border-color:var(--success-color)}.btn-button.btn-warning{color:var(--warning-font);background-color:var(--warning-color)}.btn-button.btn-warning:hover{background-color:var(--warning-dark)}.btn-link.btn-warning{color:var(--warning-color);border-color:var(--warning-border)}.btn-link.btn-warning:hover{background-color:var(--warning-light);border-color:var(--warning-color)}.btn-button.btn-info{color:var(--info-font);background-color:var(--info-color)}.btn-button.btn-info:hover{background-color:var(--info-dark)}.btn-link.btn-info{color:var(--info-color);border-color:var(--info-border)}.btn-link.btn-info:hover{background-color:var(--info-light);border-color:var(--info-color)}.btn-button.btn-error{color:var(--error-font);background-color:var(--error-color)}.btn-button.btn-error:hover{background-color:var(--error-dark)}.btn-link.btn-error{color:var(--error-color);border-color:var(--error-border)}.btn-link.btn-error:hover{background-color:var(--error-light);border-color:var(--error-color)}.btn-file-upload{position:absolute;inset:-.5rem -.5rem -.5rem -2.5rem;opacity:0;cursor:pointer}.btn-is-mini .btn-file-upload{inset:-.2rem -.5rem -.2rem -2.2rem}.btn-is-disabled .btn-file-upload{display:none}.btn-button.btn-default.btn-pressed{background-color:var(--default-dark);color:var(--default-font)}.btn-button.btn-primary.btn-pressed{background-color:var(--primary-dark)}.btn-button.btn-success.btn-pressed{background-color:var(--success-dark)}.btn-button.btn-info.btn-pressed{background-color:var(--info-dark)!important}.btn-button.btn-warning.btn-pressed{background-color:var(--warning-dark)}.btn-button.btn-error.btn-pressed{background-color:var(--error-dark)}.btn-default.btn-pressed{background-color:var(--default-color);color:var(--default-font)}.btn-primary.btn-pressed{background-color:var(--primary-color);color:var(--primary-font)}.btn-success.btn-pressed{background-color:var(--success-color);color:var(--success-font)}.btn-info.btn-pressed{background-color:var(--info-color)!important;color:var(--info-font)}.btn-warning.btn-pressed{background-color:var(--warning-color);color:var(--warning-font)}.btn-error.btn-pressed{background-color:var(--error-color);color:var(--error-font)}.card{--form-line: rgb(245, 245, 245);display:flex;flex-direction:column;background-color:var(--content-bg);border-left:4px solid rgb(194,194,194);box-shadow:0 0 12px #96969642}.card-header{color:#333;font-size:calc(var(--font-size) * 1.3);font-weight:200;padding:calc(var(--spacer) * .5) 0 calc(var(--spacer) * .5) calc(var(--spacer) * .8);border-bottom:1px solid var(--line-color);display:flex;justify-content:space-between}.card-header-left{display:flex;align-items:center;font-size:calc(var(--font-size) * 1.4);font-weight:200}.card-header-right{display:flex;align-items:center;font-size:calc(var(--font-size) * 1.4);margin-right:var(--spacer)}.card-header-left>.icon{margin-right:.6rem}.card-header-right>.icon{cursor:pointer}.card-content>.form{margin:calc(var(--spacer) * .5) 0}.card-content>.n-data-table{margin-bottom:calc(var(--spacer) * .8)}.card>.card-content>.form>.form-item{border-top:1px solid transparent}.draggable-container{z-index:9;position:relative}.draggable-header{z-index:10}.draggable-resize{cursor:se-resize;position:absolute;right:5px;bottom:0;color:#7f7f7f4d;z-index:10}.form{--form-line: rgb(245, 245, 245);display:flex;flex-direction:column;padding:0;position:relative}.form-loading{text-align:center;padding:0 0 2rem;font-weight:500;display:flex;justify-content:center;align-items:center;position:absolute;inset:0;background-color:#fff}.form-loading-icon{margin-right:.5rem;font-size:200%;line-height:0}.form-loading-content{opacity:.15}.form-item{display:flex;align-items:flex-start;padding:.5rem 0;border-top:1px solid var(--form-line);align-items:stretch}.form-content>.form-item:first-child{border-top:0}[mobile] .form-item{display:block}.form-label{padding-right:1rem;padding-left:0rem;text-align:right;align-self:center;max-height:var(--control-height);display:flex;align-items:center;justify-content:flex-end}.form-validation{font-size:calc(var(--font-size) * .9);color:var(--error-color);font-style:italic}.form-validation:empty{display:none}.form-help{font-size:calc(var(--font-size) * .9);color:gray;font-style:italic}.form-slot{flex:1;padding-right:1rem;align-self:center}[mobile] .form-slot{padding-left:1rem;padding-right:1rem}[mobile] label:empty{display:none}.form-columns{display:flex;flex-direction:row;flex-wrap:nowrap;align-content:center}[mobile] .form-columns{flex-direction:column}.form-columns>.form-item{margin-top:0!important;flex:1}.form-columns>.form-item>.form-slot{padding-right:0}.form-columns>.form-item:last-child>.form-slot{padding-right:1rem}.form-columns>.form-item:nth-child(n+2)>label{padding-left:1rem}.form-space{display:flex;flex-direction:row;align-items:flex-start}.form-space>*+*{margin-left:1rem}.form-label-1{width:calc(var(--spacer) * 1)}.form-label-2{width:calc(var(--spacer) * 2)}.form-label-3{width:calc(var(--spacer) * 3)}.form-label-4{width:calc(var(--spacer) * 4)}.form-label-5{width:calc(var(--spacer) * 5)}.form-label-6{width:calc(var(--spacer) * 6)}.form-label-7{width:calc(var(--spacer) * 7)}.form-label-8{width:calc(var(--spacer) * 8)}.form-label-9{width:calc(var(--spacer) * 9)}.form-label-10{width:calc(var(--spacer) * 10)}.form-label-11{width:calc(var(--spacer) * 11)}.form-label-12{width:calc(var(--spacer) * 12)}.form-label-13{width:calc(var(--spacer) * 13)}.form-label-14{width:calc(var(--spacer) * 14)}.form-label-15{width:calc(var(--spacer) * 15)}.form-label-16{width:calc(var(--spacer) * 16)}.form-label-17{width:calc(var(--spacer) * 17)}.form-label-18{width:calc(var(--spacer) * 18)}.form-label-19{width:calc(var(--spacer) * 19)}.form-label-20{width:calc(var(--spacer) * 20)}.n-grid{border:1px solid var(--line-color);background:white;padding:0 0 1rem;box-shadow:0 0 15px #00000014}.n-grid-toolbar{background:white;padding:.3rem;display:flex;align-items:center}.n-grid-toolbar>*{margin:0 .5rem 0 0}.n-grid-toolbar-label{font-size:85%;color:#a9a9a9;flex-grow:1}.n-grid-toolbar-link{color:var(--info-dark);text-decoration:none;margin:0 .5rem}.n-grid-toolbar-link:hover{text-decoration:underline}.n-grid-toolbar-page-count{font-size:90%;color:gray}.n-grid-filter-border{padding:.5rem;background-color:#fff}.n-grid-filter-box{box-shadow:0 0 22px #00000029;background-color:var(--line-color);border:1px solid #dddddd;border-top:3px solid var(--info-dark);overflow-y:auto;max-height:17rem}.n-grid-filter-box>.n-grid-filter-item:first-child{padding-top:8px}.n-grid-filter-box>.n-grid-filter-item:last-child{padding-bottom:8px}.n-grid-filter-item{display:flex;align-items:center;justify-content:space-between;padding:4px 0;background-color:#fff;min-height:34px;border-bottom:1px solid #eee}.n-grid-filter-item+.n-grid-filter-item{border-top:1px solid var(--line-color)}.n-grid-filter-item>.handle{width:26px;max-width:26px;margin:0 1rem}.n-grid-filter-item>*:nth-child(2){width:25rem;flex-grow:1}.n-grid-filter-item-box{display:flex;width:100%}.n-grid-filter-item-components{display:inline-flex;flex-grow:1}.n-grid-filter-item-components>*+*{margin-left:1rem}.n-grid-filter-del{width:3rem;margin:0 0 0 .5rem;display:flex;align-items:center}.n-grid-filter-item-active{background:var(--success-light)}.help{--help-box-width: 35rem}.help-field{display:flex;align-items:center}.help-content{flex-grow:1}.help-btn{width:1.4rem;height:1.4rem;color:silver;border-radius:50%;border:1px solid silver;font-size:15px;font-weight:400;line-height:1.15;text-align:center;margin-left:.5rem;cursor:pointer;background-color:#fff}.help-btn:hover{background-color:#f3f3f3}.help-box{margin-top:.4rem;background-color:var(--warning-light);border:1px solid var(--line-color);border-radius:6px;padding:.5rem;max-height:45rem;width:100%}.help-box-edit{padding:0 .3rem .3rem .4rem;color:var(--font-color)}.help-box main{padding:0 .3rem .3rem .4rem;overflow-y:auto;max-height:35rem}.help-box main::-webkit-scrollbar{background-color:transparent;width:7px}.help-box main::-webkit-scrollbar-track{background-color:transparent}.help-box main::-webkit-scrollbar-thumb{background-color:#babac0;border-radius:15px}.help-box main::-webkit-scrollbar-button{display:none}.help-box main p{text-align:left}.help-editor{display:flex;height:100%}.help-editor-panel{flex-grow:1;display:flex;flex-direction:column}.help-editor-header{display:flex;margin-bottom:1rem;align-items:center}.help-editor-panel input[type=text],.help-editor-panel textarea{font-family:var(--font-family-monospace)!important;font-size:12px!important}.help-preview{width:30rem;margin:0 0 0 1rem}.help-preview .help-box{margin:0}.help-preview strong{font-weight:700}.icon{width:1em;height:1em;line-height:1em;display:inline-block}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spin{0%{-ms-transform:rotate(0deg);-moz-transform:rotate(0deg);-webkit-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0)}to{-ms-transform:rotate(360deg);-moz-transform:rotate(360deg);-webkit-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}.icon-spin{-webkit-animation:spin 2s linear infinite;-moz-animation:spin 2s linear infinite;-ms-animation:spin 2s linear infinite;-o-animation:spin 2s linear infinite;animation:spin 2s linear infinite}.control input[type=text]{height:var(--control-height)}.uppercase input[type=text]{text-transform:uppercase}.lowercase input[type=text]{text-transform:lowercase}.n-input.mini{height:var(--control-height-mini)}.n-input.mini input[type=text]{font-size:calc(var(--font-size) * .9);height:var(--control-height-mini)}.money-box{text-align:right;max-width:12rem}[mobile] .money-box{max-width:100%}.money-box.mini{height:var(--control-height-mini);width:9rem}.money-box.mini input[type=text],.money-box.mini .n-input__prefix{font-size:calc(var(--font-size) * .9);height:var(--control-height-mini)}.date-box{max-width:12rem;text-align:center}[mobile] .date-box{max-width:100%}.date-box.mini{height:var(--control-height-mini);width:9rem}.date-box.mini input[type=text]{font-size:calc(var(--font-size) * .9);height:var(--control-height-mini)}.number-box{max-width:12rem}[mobile] .number-box{max-width:100%}.n-input-number.mini{height:var(--control-height-mini);width:9rem}.n-input-number.mini input[type=text]{font-size:calc(var(--font-size) * .9);height:var(--control-height-mini)}.decimal-box{text-align:right;max-width:12rem}[mobile] .decimal-box{max-width:100%}.memo-box{height:auto!important}.n-checkbox.mini{font-size:calc(var(--font-size) * .9)}.n-checkbox.mini .n-checkbox-box{left:2px;height:calc(var(--n-size) * .8);width:calc(var(--n-size) * .8)}.n-select.mini *{font-size:calc(var(--font-size) * .9)}.popup-overlay{--radius: .4rem;display:none;position:fixed;inset:0;background-color:#1e1e1e99;justify-content:center;align-items:center;margin-top:0!important;z-index:5}.popup-overlay.open{display:flex}.popup{max-width:calc(100% - 2rem);max-height:calc(100% - 2rem);min-width:40rem;min-height:20rem;background-color:var(--app-bg);display:flex;flex-direction:column;border-radius:7px;box-shadow:0 0 22px #00000042;position:absolute}.popup-header{padding:.5rem 1rem;font-weight:500;font-size:calc(var(--font-size) * 1.2);position:relative;background-color:#eef1f8;border-top-left-radius:var(--radius);border-top-right-radius:var(--radius);color:var(--text-color);cursor:move}.popup-main{padding:1rem;border-bottom-left-radius:var(--radius);border-bottom-right-radius:var(--radius);overflow:auto;max-height:calc(100% - 3rem)}.popup-icon{cursor:pointer;width:1.5rem;position:absolute;right:1rem;top:.7rem}.popup-main::-webkit-scrollbar{background-color:transparent;width:16px}.popup-main::-webkit-scrollbar-track{background-color:transparent}.popup-main::-webkit-scrollbar-thumb{background-color:#babac0;border-radius:16px;border:4px solid var(--app-bg)}.popup-main::-webkit-scrollbar-button{display:none}.tabs{--selected: var(--success-color)}.tabs{display:flex;flex-wrap:wrap;position:relative}.tabs-label{font-size:calc(var(--font-size) * 1.2);font-weight:200;padding:.2rem .7rem;border-bottom:4px solid transparent;margin-left:1rem;color:var(--text-color);cursor:pointer;position:relative;z-index:1}.tabs-content{border-top:1px solid rgb(223 223 223);padding:1rem;width:100%;display:none;order:10}.tabs-label.tab-selected+section{display:block}.tabs-label.tab-selected{color:var(--selected);border-color:var(--selected)}.tabs-label.tab-disabled{color:var(--disabled-color);cursor:not-allowed}.tabs-hide{display:none}.tabs-icon{position:relative;top:2px;margin-right:.3rem}*,*:before,*:after{box-sizing:border-box;margin:0;position:relative;font-weight:400}html{line-height:var(--line-height);font-family:var(--font-family);font-size:var(--font-size)}body{min-height:100vh;transition:color .5s,background-color .5s;line-height:var(--line-height);font-family:var(--font-family);font-size:var(--font-size);color:var(--text-color);background-color:var(--body-bg);text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
`;
async function Vd(e, r) {
  const t = Os(e);
  Object.assign(fa, r), t.config.errorHandler = Ls, t.config.warnHandler = (o) => console.warn("*VUE WARNING*: ", o), await Ss();
  const i = Ms(fa.routes);
  return t.use(i), js(t), Us(), t;
}
function Ms(e) {
  const r = Fs({
    history: Ps("/"),
    routes: e
  });
  return r.beforeEach((t, i) => {
    if (t.meta.auth && !ks.value.isLoggedIn)
      return {
        path: fa.auth.forbiddenUrl,
        // save the location we were at to come back later
        query: { redirect: t.fullPath }
      };
  }), r;
}
function js(e) {
  for (const r in Fi) {
    const t = Fi[r];
    t.__name && e.component(r, t);
  }
}
function Us() {
  const e = document.createElement("style");
  e.type = "text/css", e.appendChild(document.createTextNode(zs)), document.head.insertBefore(e, document.head.firstChild);
}
const qs = 768, dn = Zr(!1), pa = Zr(!1), hn = Zr(!1), mn = Zr(!1), gn = Zr(!1), da = Zr(!1);
Po();
function Po() {
  const e = navigator.userAgent.toLowerCase();
  dn.value = /cordova/.test(e), pa.value = !dn.value, hn.value = /android/.test(e), mn.value = /iphone|ipad|ipod/.test(e);
  const r = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(
    e
  ), t = document.documentElement.clientWidth < qs;
  gn.value = (hn.value || mn.value) && !r || t, da.value = !gn.value, Qr("native", dn.value), Qr("web", pa.value), Qr("android", hn.value), Qr("ios", mn.value), Qr("mobile", gn.value), Qr("desktop", da.value);
}
function Qr(e, r) {
  const t = document.querySelector("html");
  r ? t?.setAttribute(e, "") : t?.removeAttribute(e);
}
window.addEventListener("resize", Po, !1);
const Zd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, android: hn, desktop: da, ios: mn, mobile: gn, native: dn, web: pa }, Symbol.toStringTag, { value: "Module" }));
var Ro = { exports: {} }, En = {}, Tr = {}, Sr = {};
function $s(e, r, t) {
  if (t === void 0 && (t = Array.prototype), e && typeof t.find == "function")
    return t.find.call(e, r);
  for (var i = 0; i < e.length; i++)
    if (Object.prototype.hasOwnProperty.call(e, i)) {
      var o = e[i];
      if (r.call(void 0, o, i, e))
        return o;
    }
}
function ka(e, r) {
  return r === void 0 && (r = Object), r && typeof r.freeze == "function" ? r.freeze(e) : e;
}
function Vs(e, r) {
  if (e === null || typeof e != "object")
    throw new TypeError("target is not an object");
  for (var t in r)
    Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t]);
  return e;
}
var No = ka({
  /**
   * `text/html`, the only mime type that triggers treating an XML document as HTML.
   *
   * @see DOMParser.SupportedType.isHTML
   * @see https://www.iana.org/assignments/media-types/text/html IANA MimeType registration
   * @see https://en.wikipedia.org/wiki/HTML Wikipedia
   * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString MDN
   * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-domparser-parsefromstring WHATWG HTML Spec
   */
  HTML: "text/html",
  /**
   * Helper method to check a mime type if it indicates an HTML document
   *
   * @param {string} [value]
   * @returns {boolean}
   *
   * @see https://www.iana.org/assignments/media-types/text/html IANA MimeType registration
   * @see https://en.wikipedia.org/wiki/HTML Wikipedia
   * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString MDN
   * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-domparser-parsefromstring 	 */
  isHTML: function(e) {
    return e === No.HTML;
  },
  /**
   * `application/xml`, the standard mime type for XML documents.
   *
   * @see https://www.iana.org/assignments/media-types/application/xml IANA MimeType registration
   * @see https://tools.ietf.org/html/rfc7303#section-9.1 RFC 7303
   * @see https://en.wikipedia.org/wiki/XML_and_MIME Wikipedia
   */
  XML_APPLICATION: "application/xml",
  /**
   * `text/html`, an alias for `application/xml`.
   *
   * @see https://tools.ietf.org/html/rfc7303#section-9.2 RFC 7303
   * @see https://www.iana.org/assignments/media-types/text/xml IANA MimeType registration
   * @see https://en.wikipedia.org/wiki/XML_and_MIME Wikipedia
   */
  XML_TEXT: "text/xml",
  /**
   * `application/xhtml+xml`, indicates an XML document that has the default HTML namespace,
   * but is parsed as an XML document.
   *
   * @see https://www.iana.org/assignments/media-types/application/xhtml+xml IANA MimeType registration
   * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocument WHATWG DOM Spec
   * @see https://en.wikipedia.org/wiki/XHTML Wikipedia
   */
  XML_XHTML_APPLICATION: "application/xhtml+xml",
  /**
   * `image/svg+xml`,
   *
   * @see https://www.iana.org/assignments/media-types/image/svg+xml IANA MimeType registration
   * @see https://www.w3.org/TR/SVG11/ W3C SVG 1.1
   * @see https://en.wikipedia.org/wiki/Scalable_Vector_Graphics Wikipedia
   */
  XML_SVG_IMAGE: "image/svg+xml"
}), Io = ka({
  /**
   * The XHTML namespace.
   *
   * @see http://www.w3.org/1999/xhtml
   */
  HTML: "http://www.w3.org/1999/xhtml",
  /**
   * Checks if `uri` equals `NAMESPACE.HTML`.
   *
   * @param {string} [uri]
   *
   * @see NAMESPACE.HTML
   */
  isHTML: function(e) {
    return e === Io.HTML;
  },
  /**
   * The SVG namespace.
   *
   * @see http://www.w3.org/2000/svg
   */
  SVG: "http://www.w3.org/2000/svg",
  /**
   * The `xml:` namespace.
   *
   * @see http://www.w3.org/XML/1998/namespace
   */
  XML: "http://www.w3.org/XML/1998/namespace",
  /**
   * The `xmlns:` namespace
   *
   * @see https://www.w3.org/2000/xmlns/
   */
  XMLNS: "http://www.w3.org/2000/xmlns/"
});
Sr.assign = Vs;
Sr.find = $s;
Sr.freeze = ka;
Sr.MIME_TYPE = No;
Sr.NAMESPACE = Io;
var Lo = Sr, vr = Lo.find, kt = Lo.NAMESPACE;
function Zs(e) {
  return e !== "";
}
function Xs(e) {
  return e ? e.split(/[\t\n\f\r ]+/).filter(Zs) : [];
}
function Hs(e, r) {
  return e.hasOwnProperty(r) || (e[r] = !0), e;
}
function Pi(e) {
  if (!e)
    return [];
  var r = Xs(e);
  return Object.keys(r.reduce(Hs, {}));
}
function Gs(e) {
  return function(r) {
    return e && e.indexOf(r) !== -1;
  };
}
function Ut(e, r) {
  for (var t in e)
    Object.prototype.hasOwnProperty.call(e, t) && (r[t] = e[t]);
}
function Ye(e, r) {
  var t = e.prototype;
  if (!(t instanceof r)) {
    let i = function() {
    };
    i.prototype = r.prototype, i = new i(), Ut(t, i), e.prototype = t = i;
  }
  t.constructor != e && (typeof e != "function" && console.error("unknown Class:" + e), t.constructor = e);
}
var Ke = {}, dr = Ke.ELEMENT_NODE = 1, lt = Ke.ATTRIBUTE_NODE = 2, vn = Ke.TEXT_NODE = 3, zo = Ke.CDATA_SECTION_NODE = 4, Mo = Ke.ENTITY_REFERENCE_NODE = 5, Ws = Ke.ENTITY_NODE = 6, jo = Ke.PROCESSING_INSTRUCTION_NODE = 7, Uo = Ke.COMMENT_NODE = 8, qo = Ke.DOCUMENT_NODE = 9, $o = Ke.DOCUMENT_TYPE_NODE = 10, Ar = Ke.DOCUMENT_FRAGMENT_NODE = 11, Ys = Ke.NOTATION_NODE = 12, qe = {}, Me = {};
qe.INDEX_SIZE_ERR = (Me[1] = "Index size error", 1);
qe.DOMSTRING_SIZE_ERR = (Me[2] = "DOMString size error", 2);
var Ge = qe.HIERARCHY_REQUEST_ERR = (Me[3] = "Hierarchy request error", 3);
qe.WRONG_DOCUMENT_ERR = (Me[4] = "Wrong document", 4);
qe.INVALID_CHARACTER_ERR = (Me[5] = "Invalid character", 5);
qe.NO_DATA_ALLOWED_ERR = (Me[6] = "No data allowed", 6);
qe.NO_MODIFICATION_ALLOWED_ERR = (Me[7] = "No modification allowed", 7);
var Vo = qe.NOT_FOUND_ERR = (Me[8] = "Not found", 8);
qe.NOT_SUPPORTED_ERR = (Me[9] = "Not supported", 9);
var Ri = qe.INUSE_ATTRIBUTE_ERR = (Me[10] = "Attribute in use", 10);
qe.INVALID_STATE_ERR = (Me[11] = "Invalid state", 11);
qe.SYNTAX_ERR = (Me[12] = "Syntax error", 12);
qe.INVALID_MODIFICATION_ERR = (Me[13] = "Invalid modification", 13);
qe.NAMESPACE_ERR = (Me[14] = "Invalid namespace", 14);
qe.INVALID_ACCESS_ERR = (Me[15] = "Invalid access", 15);
function Re(e, r) {
  if (r instanceof Error)
    var t = r;
  else
    t = this, Error.call(this, Me[e]), this.message = Me[e], Error.captureStackTrace && Error.captureStackTrace(this, Re);
  return t.code = e, r && (this.message = this.message + ": " + r), t;
}
Re.prototype = Error.prototype;
Ut(qe, Re);
function _r() {
}
_r.prototype = {
  /**
   * The number of nodes in the list. The range of valid child node indices is 0 to length-1 inclusive.
   * @standard level1
   */
  length: 0,
  /**
   * Returns the indexth item in the collection. If index is greater than or equal to the number of nodes in the list, this returns null.
   * @standard level1
   * @param index  unsigned long
   *   Index into the collection.
   * @return Node
   * 	The node at the indexth position in the NodeList, or null if that is not a valid index.
   */
  item: function(e) {
    return e >= 0 && e < this.length ? this[e] : null;
  },
  toString: function(e, r) {
    for (var t = [], i = 0; i < this.length; i++)
      ut(this[i], t, e, r);
    return t.join("");
  },
  /**
   * @private
   * @param {function (Node):boolean} predicate
   * @returns {Node[]}
   */
  filter: function(e) {
    return Array.prototype.filter.call(this, e);
  },
  /**
   * @private
   * @param {Node} item
   * @returns {number}
   */
  indexOf: function(e) {
    return Array.prototype.indexOf.call(this, e);
  }
};
function ct(e, r) {
  this._node = e, this._refresh = r, Ba(this);
}
function Ba(e) {
  var r = e._node._inc || e._node.ownerDocument._inc;
  if (e._inc !== r) {
    var t = e._refresh(e._node);
    if (tu(e, "length", t.length), !e.$$length || t.length < e.$$length)
      for (var i = t.length; i in e; i++)
        Object.prototype.hasOwnProperty.call(e, i) && delete e[i];
    Ut(t, e), e._inc = r;
  }
}
ct.prototype.item = function(e) {
  return Ba(this), this[e] || null;
};
Ye(ct, _r);
function bn() {
}
function Zo(e, r) {
  for (var t = e.length; t--; )
    if (e[t] === r)
      return t;
}
function Ni(e, r, t, i) {
  if (i ? r[Zo(r, i)] = t : r[r.length++] = t, e) {
    t.ownerElement = e;
    var o = e.ownerDocument;
    o && (i && Go(o, e, i), Ks(o, e, t));
  }
}
function Ii(e, r, t) {
  var i = Zo(r, t);
  if (i >= 0) {
    for (var o = r.length - 1; i < o; )
      r[i] = r[++i];
    if (r.length = o, e) {
      var s = e.ownerDocument;
      s && (Go(s, e, t), t.ownerElement = null);
    }
  } else
    throw new Re(Vo, new Error(e.tagName + "@" + t));
}
bn.prototype = {
  length: 0,
  item: _r.prototype.item,
  getNamedItem: function(e) {
    for (var r = this.length; r--; ) {
      var t = this[r];
      if (t.nodeName == e)
        return t;
    }
  },
  setNamedItem: function(e) {
    var r = e.ownerElement;
    if (r && r != this._ownerElement)
      throw new Re(Ri);
    var t = this.getNamedItem(e.nodeName);
    return Ni(this._ownerElement, this, e, t), t;
  },
  /* returns Node */
  setNamedItemNS: function(e) {
    var r = e.ownerElement, t;
    if (r && r != this._ownerElement)
      throw new Re(Ri);
    return t = this.getNamedItemNS(e.namespaceURI, e.localName), Ni(this._ownerElement, this, e, t), t;
  },
  /* returns Node */
  removeNamedItem: function(e) {
    var r = this.getNamedItem(e);
    return Ii(this._ownerElement, this, r), r;
  },
  // raises: NOT_FOUND_ERR,NO_MODIFICATION_ALLOWED_ERR
  //for level2
  removeNamedItemNS: function(e, r) {
    var t = this.getNamedItemNS(e, r);
    return Ii(this._ownerElement, this, t), t;
  },
  getNamedItemNS: function(e, r) {
    for (var t = this.length; t--; ) {
      var i = this[t];
      if (i.localName == r && i.namespaceURI == e)
        return i;
    }
    return null;
  }
};
function Xo() {
}
Xo.prototype = {
  /**
   * The DOMImplementation.hasFeature() method returns a Boolean flag indicating if a given feature is supported.
   * The different implementations fairly diverged in what kind of features were reported.
   * The latest version of the spec settled to force this method to always return true, where the functionality was accurate and in use.
   *
   * @deprecated It is deprecated and modern browsers return true in all cases.
   *
   * @param {string} feature
   * @param {string} [version]
   * @returns {boolean} always true
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/hasFeature MDN
   * @see https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#ID-5CED94D7 DOM Level 1 Core
   * @see https://dom.spec.whatwg.org/#dom-domimplementation-hasfeature DOM Living Standard
   */
  hasFeature: function(e, r) {
    return !0;
  },
  /**
   * Creates an XML Document object of the specified type with its document element.
   *
   * __It behaves slightly different from the description in the living standard__:
   * - There is no interface/class `XMLDocument`, it returns a `Document` instance.
   * - `contentType`, `encoding`, `mode`, `origin`, `url` fields are currently not declared.
   * - this implementation is not validating names or qualified names
   *   (when parsing XML strings, the SAX parser takes care of that)
   *
   * @param {string|null} namespaceURI
   * @param {string} qualifiedName
   * @param {DocumentType=null} doctype
   * @returns {Document}
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createDocument MDN
   * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#Level-2-Core-DOM-createDocument DOM Level 2 Core (initial)
   * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocument  DOM Level 2 Core
   *
   * @see https://dom.spec.whatwg.org/#validate-and-extract DOM: Validate and extract
   * @see https://www.w3.org/TR/xml/#NT-NameStartChar XML Spec: Names
   * @see https://www.w3.org/TR/xml-names/#ns-qualnames XML Namespaces: Qualified names
   */
  createDocument: function(e, r, t) {
    var i = new qt();
    if (i.implementation = this, i.childNodes = new _r(), i.doctype = t || null, t && i.appendChild(t), r) {
      var o = i.createElementNS(e, r);
      i.appendChild(o);
    }
    return i;
  },
  /**
   * Returns a doctype, with the given `qualifiedName`, `publicId`, and `systemId`.
   *
   * __This behavior is slightly different from the in the specs__:
   * - this implementation is not validating names or qualified names
   *   (when parsing XML strings, the SAX parser takes care of that)
   *
   * @param {string} qualifiedName
   * @param {string} [publicId]
   * @param {string} [systemId]
   * @returns {DocumentType} which can either be used with `DOMImplementation.createDocument` upon document creation
   * 				  or can be put into the document via methods like `Node.insertBefore()` or `Node.replaceChild()`
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createDocumentType MDN
   * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#Level-2-Core-DOM-createDocType DOM Level 2 Core
   * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocumenttype DOM Living Standard
   *
   * @see https://dom.spec.whatwg.org/#validate-and-extract DOM: Validate and extract
   * @see https://www.w3.org/TR/xml/#NT-NameStartChar XML Spec: Names
   * @see https://www.w3.org/TR/xml-names/#ns-qualnames XML Namespaces: Qualified names
   */
  createDocumentType: function(e, r, t) {
    var i = new _n();
    return i.name = e, i.nodeName = e, i.publicId = r || "", i.systemId = t || "", i;
  }
};
function Ce() {
}
Ce.prototype = {
  firstChild: null,
  lastChild: null,
  previousSibling: null,
  nextSibling: null,
  attributes: null,
  parentNode: null,
  childNodes: null,
  ownerDocument: null,
  nodeValue: null,
  namespaceURI: null,
  prefix: null,
  localName: null,
  // Modified in DOM Level 2:
  insertBefore: function(e, r) {
    return yn(this, e, r);
  },
  replaceChild: function(e, r) {
    yn(this, e, r, Yo), r && this.removeChild(r);
  },
  removeChild: function(e) {
    return Wo(this, e);
  },
  appendChild: function(e) {
    return this.insertBefore(e, null);
  },
  hasChildNodes: function() {
    return this.firstChild != null;
  },
  cloneNode: function(e) {
    return ha(this.ownerDocument || this, this, e);
  },
  // Modified in DOM Level 2:
  normalize: function() {
    for (var e = this.firstChild; e; ) {
      var r = e.nextSibling;
      r && r.nodeType == vn && e.nodeType == vn ? (this.removeChild(r), e.appendData(r.data)) : (e.normalize(), e = r);
    }
  },
  // Introduced in DOM Level 2:
  isSupported: function(e, r) {
    return this.ownerDocument.implementation.hasFeature(e, r);
  },
  // Introduced in DOM Level 2:
  hasAttributes: function() {
    return this.attributes.length > 0;
  },
  /**
   * Look up the prefix associated to the given namespace URI, starting from this node.
   * **The default namespace declarations are ignored by this method.**
   * See Namespace Prefix Lookup for details on the algorithm used by this method.
   *
   * _Note: The implementation seems to be incomplete when compared to the algorithm described in the specs._
   *
   * @param {string | null} namespaceURI
   * @returns {string | null}
   * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#Node3-lookupNamespacePrefix
   * @see https://www.w3.org/TR/DOM-Level-3-Core/namespaces-algorithms.html#lookupNamespacePrefixAlgo
   * @see https://dom.spec.whatwg.org/#dom-node-lookupprefix
   * @see https://github.com/xmldom/xmldom/issues/322
   */
  lookupPrefix: function(e) {
    for (var r = this; r; ) {
      var t = r._nsMap;
      if (t) {
        for (var i in t)
          if (Object.prototype.hasOwnProperty.call(t, i) && t[i] === e)
            return i;
      }
      r = r.nodeType == lt ? r.ownerDocument : r.parentNode;
    }
    return null;
  },
  // Introduced in DOM Level 3:
  lookupNamespaceURI: function(e) {
    for (var r = this; r; ) {
      var t = r._nsMap;
      if (t && Object.prototype.hasOwnProperty.call(t, e))
        return t[e];
      r = r.nodeType == lt ? r.ownerDocument : r.parentNode;
    }
    return null;
  },
  // Introduced in DOM Level 3:
  isDefaultNamespace: function(e) {
    var r = this.lookupPrefix(e);
    return r == null;
  }
};
function Ho(e) {
  return e == "<" && "&lt;" || e == ">" && "&gt;" || e == "&" && "&amp;" || e == '"' && "&quot;" || "&#" + e.charCodeAt() + ";";
}
Ut(Ke, Ce);
Ut(Ke, Ce.prototype);
function Bt(e, r) {
  if (r(e))
    return !0;
  if (e = e.firstChild)
    do
      if (Bt(e, r))
        return !0;
    while (e = e.nextSibling);
}
function qt() {
  this.ownerDocument = this;
}
function Ks(e, r, t) {
  e && e._inc++;
  var i = t.namespaceURI;
  i === kt.XMLNS && (r._nsMap[t.prefix ? t.localName : ""] = t.value);
}
function Go(e, r, t, i) {
  e && e._inc++;
  var o = t.namespaceURI;
  o === kt.XMLNS && delete r._nsMap[t.prefix ? t.localName : ""];
}
function Oa(e, r, t) {
  if (e && e._inc) {
    e._inc++;
    var i = r.childNodes;
    if (t)
      i[i.length++] = t;
    else {
      for (var o = r.firstChild, s = 0; o; )
        i[s++] = o, o = o.nextSibling;
      i.length = s, delete i[i.length];
    }
  }
}
function Wo(e, r) {
  var t = r.previousSibling, i = r.nextSibling;
  return t ? t.nextSibling = i : e.firstChild = i, i ? i.previousSibling = t : e.lastChild = t, r.parentNode = null, r.previousSibling = null, r.nextSibling = null, Oa(e.ownerDocument, e), r;
}
function Js(e) {
  return e && (e.nodeType === Ce.DOCUMENT_NODE || e.nodeType === Ce.DOCUMENT_FRAGMENT_NODE || e.nodeType === Ce.ELEMENT_NODE);
}
function Qs(e) {
  return e && (br(e) || Fa(e) || Cr(e) || e.nodeType === Ce.DOCUMENT_FRAGMENT_NODE || e.nodeType === Ce.COMMENT_NODE || e.nodeType === Ce.PROCESSING_INSTRUCTION_NODE);
}
function Cr(e) {
  return e && e.nodeType === Ce.DOCUMENT_TYPE_NODE;
}
function br(e) {
  return e && e.nodeType === Ce.ELEMENT_NODE;
}
function Fa(e) {
  return e && e.nodeType === Ce.TEXT_NODE;
}
function Li(e, r) {
  var t = e.childNodes || [];
  if (vr(t, br) || Cr(r))
    return !1;
  var i = vr(t, Cr);
  return !(r && i && t.indexOf(i) > t.indexOf(r));
}
function zi(e, r) {
  var t = e.childNodes || [];
  function i(s) {
    return br(s) && s !== r;
  }
  if (vr(t, i))
    return !1;
  var o = vr(t, Cr);
  return !(r && o && t.indexOf(o) > t.indexOf(r));
}
function el(e, r, t) {
  if (!Js(e))
    throw new Re(Ge, "Unexpected parent node type " + e.nodeType);
  if (t && t.parentNode !== e)
    throw new Re(Vo, "child not in parent");
  if (
    // 4. If `node` is not a DocumentFragment, DocumentType, Element, or CharacterData node, then throw a "HierarchyRequestError" DOMException.
    !Qs(r) || // 5. If either `node` is a Text node and `parent` is a document,
    // the sax parser currently adds top level text nodes, this will be fixed in 0.9.0
    // || (node.nodeType === Node.TEXT_NODE && parent.nodeType === Node.DOCUMENT_NODE)
    // or `node` is a doctype and `parent` is not a document, then throw a "HierarchyRequestError" DOMException.
    Cr(r) && e.nodeType !== Ce.DOCUMENT_NODE
  )
    throw new Re(
      Ge,
      "Unexpected node type " + r.nodeType + " for parent node type " + e.nodeType
    );
}
function rl(e, r, t) {
  var i = e.childNodes || [], o = r.childNodes || [];
  if (r.nodeType === Ce.DOCUMENT_FRAGMENT_NODE) {
    var s = o.filter(br);
    if (s.length > 1 || vr(o, Fa))
      throw new Re(Ge, "More than one element or text in fragment");
    if (s.length === 1 && !Li(e, t))
      throw new Re(Ge, "Element in fragment can not be inserted before doctype");
  }
  if (br(r) && !Li(e, t))
    throw new Re(Ge, "Only one element can be added and only after doctype");
  if (Cr(r)) {
    if (vr(i, Cr))
      throw new Re(Ge, "Only one doctype is allowed");
    var l = vr(i, br);
    if (t && i.indexOf(l) < i.indexOf(t))
      throw new Re(Ge, "Doctype can only be inserted before an element");
    if (!t && l)
      throw new Re(Ge, "Doctype can not be appended since element is present");
  }
}
function Yo(e, r, t) {
  var i = e.childNodes || [], o = r.childNodes || [];
  if (r.nodeType === Ce.DOCUMENT_FRAGMENT_NODE) {
    var s = o.filter(br);
    if (s.length > 1 || vr(o, Fa))
      throw new Re(Ge, "More than one element or text in fragment");
    if (s.length === 1 && !zi(e, t))
      throw new Re(Ge, "Element in fragment can not be inserted before doctype");
  }
  if (br(r) && !zi(e, t))
    throw new Re(Ge, "Only one element can be added and only after doctype");
  if (Cr(r)) {
    if (vr(i, function(y) {
      return Cr(y) && y !== t;
    }))
      throw new Re(Ge, "Only one doctype is allowed");
    var l = vr(i, br);
    if (t && i.indexOf(l) < i.indexOf(t))
      throw new Re(Ge, "Doctype can only be inserted before an element");
  }
}
function yn(e, r, t, i) {
  el(e, r, t), e.nodeType === Ce.DOCUMENT_NODE && (i || rl)(e, r, t);
  var o = r.parentNode;
  if (o && o.removeChild(r), r.nodeType === Ar) {
    var s = r.firstChild;
    if (s == null)
      return r;
    var l = r.lastChild;
  } else
    s = l = r;
  var m = t ? t.previousSibling : e.lastChild;
  s.previousSibling = m, l.nextSibling = t, m ? m.nextSibling = s : e.firstChild = s, t == null ? e.lastChild = l : t.previousSibling = l;
  do
    s.parentNode = e;
  while (s !== l && (s = s.nextSibling));
  return Oa(e.ownerDocument || e, e), r.nodeType == Ar && (r.firstChild = r.lastChild = null), r;
}
function tl(e, r) {
  return r.parentNode && r.parentNode.removeChild(r), r.parentNode = e, r.previousSibling = e.lastChild, r.nextSibling = null, r.previousSibling ? r.previousSibling.nextSibling = r : e.firstChild = r, e.lastChild = r, Oa(e.ownerDocument, e, r), r;
}
qt.prototype = {
  //implementation : null,
  nodeName: "#document",
  nodeType: qo,
  /**
   * The DocumentType node of the document.
   *
   * @readonly
   * @type DocumentType
   */
  doctype: null,
  documentElement: null,
  _inc: 1,
  insertBefore: function(e, r) {
    if (e.nodeType == Ar) {
      for (var t = e.firstChild; t; ) {
        var i = t.nextSibling;
        this.insertBefore(t, r), t = i;
      }
      return e;
    }
    return yn(this, e, r), e.ownerDocument = this, this.documentElement === null && e.nodeType === dr && (this.documentElement = e), e;
  },
  removeChild: function(e) {
    return this.documentElement == e && (this.documentElement = null), Wo(this, e);
  },
  replaceChild: function(e, r) {
    yn(this, e, r, Yo), e.ownerDocument = this, r && this.removeChild(r), br(e) && (this.documentElement = e);
  },
  // Introduced in DOM Level 2:
  importNode: function(e, r) {
    return ru(this, e, r);
  },
  // Introduced in DOM Level 2:
  getElementById: function(e) {
    var r = null;
    return Bt(this.documentElement, function(t) {
      if (t.nodeType == dr && t.getAttribute("id") == e)
        return r = t, !0;
    }), r;
  },
  /**
   * The `getElementsByClassName` method of `Document` interface returns an array-like object
   * of all child elements which have **all** of the given class name(s).
   *
   * Returns an empty list if `classeNames` is an empty string or only contains HTML white space characters.
   *
   *
   * Warning: This is a live LiveNodeList.
   * Changes in the DOM will reflect in the array as the changes occur.
   * If an element selected by this array no longer qualifies for the selector,
   * it will automatically be removed. Be aware of this for iteration purposes.
   *
   * @param {string} classNames is a string representing the class name(s) to match; multiple class names are separated by (ASCII-)whitespace
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName
   * @see https://dom.spec.whatwg.org/#concept-getelementsbyclassname
   */
  getElementsByClassName: function(e) {
    var r = Pi(e);
    return new ct(this, function(t) {
      var i = [];
      return r.length > 0 && Bt(t.documentElement, function(o) {
        if (o !== t && o.nodeType === dr) {
          var s = o.getAttribute("class");
          if (s) {
            var l = e === s;
            if (!l) {
              var m = Pi(s);
              l = r.every(Gs(m));
            }
            l && i.push(o);
          }
        }
      }), i;
    });
  },
  //document factory method:
  createElement: function(e) {
    var r = new Vr();
    r.ownerDocument = this, r.nodeName = e, r.tagName = e, r.localName = e, r.childNodes = new _r();
    var t = r.attributes = new bn();
    return t._ownerElement = r, r;
  },
  createDocumentFragment: function() {
    var e = new An();
    return e.ownerDocument = this, e.childNodes = new _r(), e;
  },
  createTextNode: function(e) {
    var r = new Pa();
    return r.ownerDocument = this, r.appendData(e), r;
  },
  createComment: function(e) {
    var r = new Ra();
    return r.ownerDocument = this, r.appendData(e), r;
  },
  createCDATASection: function(e) {
    var r = new Na();
    return r.ownerDocument = this, r.appendData(e), r;
  },
  createProcessingInstruction: function(e, r) {
    var t = new La();
    return t.ownerDocument = this, t.tagName = t.nodeName = t.target = e, t.nodeValue = t.data = r, t;
  },
  createAttribute: function(e) {
    var r = new wn();
    return r.ownerDocument = this, r.name = e, r.nodeName = e, r.localName = e, r.specified = !0, r;
  },
  createEntityReference: function(e) {
    var r = new Ia();
    return r.ownerDocument = this, r.nodeName = e, r;
  },
  // Introduced in DOM Level 2:
  createElementNS: function(e, r) {
    var t = new Vr(), i = r.split(":"), o = t.attributes = new bn();
    return t.childNodes = new _r(), t.ownerDocument = this, t.nodeName = r, t.tagName = r, t.namespaceURI = e, i.length == 2 ? (t.prefix = i[0], t.localName = i[1]) : t.localName = r, o._ownerElement = t, t;
  },
  // Introduced in DOM Level 2:
  createAttributeNS: function(e, r) {
    var t = new wn(), i = r.split(":");
    return t.ownerDocument = this, t.nodeName = r, t.name = r, t.namespaceURI = e, t.specified = !0, i.length == 2 ? (t.prefix = i[0], t.localName = i[1]) : t.localName = r, t;
  }
};
Ye(qt, Ce);
function Vr() {
  this._nsMap = {};
}
Vr.prototype = {
  nodeType: dr,
  hasAttribute: function(e) {
    return this.getAttributeNode(e) != null;
  },
  getAttribute: function(e) {
    var r = this.getAttributeNode(e);
    return r && r.value || "";
  },
  getAttributeNode: function(e) {
    return this.attributes.getNamedItem(e);
  },
  setAttribute: function(e, r) {
    var t = this.ownerDocument.createAttribute(e);
    t.value = t.nodeValue = "" + r, this.setAttributeNode(t);
  },
  removeAttribute: function(e) {
    var r = this.getAttributeNode(e);
    r && this.removeAttributeNode(r);
  },
  //four real opeartion method
  appendChild: function(e) {
    return e.nodeType === Ar ? this.insertBefore(e, null) : tl(this, e);
  },
  setAttributeNode: function(e) {
    return this.attributes.setNamedItem(e);
  },
  setAttributeNodeNS: function(e) {
    return this.attributes.setNamedItemNS(e);
  },
  removeAttributeNode: function(e) {
    return this.attributes.removeNamedItem(e.nodeName);
  },
  //get real attribute name,and remove it by removeAttributeNode
  removeAttributeNS: function(e, r) {
    var t = this.getAttributeNodeNS(e, r);
    t && this.removeAttributeNode(t);
  },
  hasAttributeNS: function(e, r) {
    return this.getAttributeNodeNS(e, r) != null;
  },
  getAttributeNS: function(e, r) {
    var t = this.getAttributeNodeNS(e, r);
    return t && t.value || "";
  },
  setAttributeNS: function(e, r, t) {
    var i = this.ownerDocument.createAttributeNS(e, r);
    i.value = i.nodeValue = "" + t, this.setAttributeNode(i);
  },
  getAttributeNodeNS: function(e, r) {
    return this.attributes.getNamedItemNS(e, r);
  },
  getElementsByTagName: function(e) {
    return new ct(this, function(r) {
      var t = [];
      return Bt(r, function(i) {
        i !== r && i.nodeType == dr && (e === "*" || i.tagName == e) && t.push(i);
      }), t;
    });
  },
  getElementsByTagNameNS: function(e, r) {
    return new ct(this, function(t) {
      var i = [];
      return Bt(t, function(o) {
        o !== t && o.nodeType === dr && (e === "*" || o.namespaceURI === e) && (r === "*" || o.localName == r) && i.push(o);
      }), i;
    });
  }
};
qt.prototype.getElementsByTagName = Vr.prototype.getElementsByTagName;
qt.prototype.getElementsByTagNameNS = Vr.prototype.getElementsByTagNameNS;
Ye(Vr, Ce);
function wn() {
}
wn.prototype.nodeType = lt;
Ye(wn, Ce);
function $t() {
}
$t.prototype = {
  data: "",
  substringData: function(e, r) {
    return this.data.substring(e, e + r);
  },
  appendData: function(e) {
    e = this.data + e, this.nodeValue = this.data = e, this.length = e.length;
  },
  insertData: function(e, r) {
    this.replaceData(e, 0, r);
  },
  appendChild: function(e) {
    throw new Error(Me[Ge]);
  },
  deleteData: function(e, r) {
    this.replaceData(e, r, "");
  },
  replaceData: function(e, r, t) {
    var i = this.data.substring(0, e), o = this.data.substring(e + r);
    t = i + t + o, this.nodeValue = this.data = t, this.length = t.length;
  }
};
Ye($t, Ce);
function Pa() {
}
Pa.prototype = {
  nodeName: "#text",
  nodeType: vn,
  splitText: function(e) {
    var r = this.data, t = r.substring(e);
    r = r.substring(0, e), this.data = this.nodeValue = r, this.length = r.length;
    var i = this.ownerDocument.createTextNode(t);
    return this.parentNode && this.parentNode.insertBefore(i, this.nextSibling), i;
  }
};
Ye(Pa, $t);
function Ra() {
}
Ra.prototype = {
  nodeName: "#comment",
  nodeType: Uo
};
Ye(Ra, $t);
function Na() {
}
Na.prototype = {
  nodeName: "#cdata-section",
  nodeType: zo
};
Ye(Na, $t);
function _n() {
}
_n.prototype.nodeType = $o;
Ye(_n, Ce);
function Ko() {
}
Ko.prototype.nodeType = Ys;
Ye(Ko, Ce);
function Jo() {
}
Jo.prototype.nodeType = Ws;
Ye(Jo, Ce);
function Ia() {
}
Ia.prototype.nodeType = Mo;
Ye(Ia, Ce);
function An() {
}
An.prototype.nodeName = "#document-fragment";
An.prototype.nodeType = Ar;
Ye(An, Ce);
function La() {
}
La.prototype.nodeType = jo;
Ye(La, Ce);
function Qo() {
}
Qo.prototype.serializeToString = function(e, r, t) {
  return eu.call(e, r, t);
};
Ce.prototype.toString = eu;
function eu(e, r) {
  var t = [], i = this.nodeType == 9 && this.documentElement || this, o = i.prefix, s = i.namespaceURI;
  if (s && o == null) {
    var o = i.lookupPrefix(s);
    if (o == null)
      var l = [
        { namespace: s, prefix: null }
        //{namespace:uri,prefix:''}
      ];
  }
  return ut(this, t, e, r, l), t.join("");
}
function Mi(e, r, t) {
  var i = e.prefix || "", o = e.namespaceURI;
  if (!o || i === "xml" && o === kt.XML || o === kt.XMLNS)
    return !1;
  for (var s = t.length; s--; ) {
    var l = t[s];
    if (l.prefix === i)
      return l.namespace !== o;
  }
  return !0;
}
function Vn(e, r, t) {
  e.push(" ", r, '="', t.replace(/[<>&"\t\n\r]/g, Ho), '"');
}
function ut(e, r, t, i, o) {
  if (o || (o = []), i)
    if (e = i(e), e) {
      if (typeof e == "string") {
        r.push(e);
        return;
      }
    } else
      return;
  switch (e.nodeType) {
    case dr:
      var s = e.attributes, l = s.length, D = e.firstChild, m = e.tagName;
      t = kt.isHTML(e.namespaceURI) || t;
      var y = m;
      if (!t && !e.prefix && e.namespaceURI) {
        for (var d, c = 0; c < s.length; c++)
          if (s.item(c).name === "xmlns") {
            d = s.item(c).value;
            break;
          }
        if (!d)
          for (var g = o.length - 1; g >= 0; g--) {
            var v = o[g];
            if (v.prefix === "" && v.namespace === e.namespaceURI) {
              d = v.namespace;
              break;
            }
          }
        if (d !== e.namespaceURI)
          for (var g = o.length - 1; g >= 0; g--) {
            var v = o[g];
            if (v.namespace === e.namespaceURI) {
              v.prefix && (y = v.prefix + ":" + m);
              break;
            }
          }
      }
      r.push("<", y);
      for (var x = 0; x < l; x++) {
        var U = s.item(x);
        U.prefix == "xmlns" ? o.push({ prefix: U.localName, namespace: U.value }) : U.nodeName == "xmlns" && o.push({ prefix: "", namespace: U.value });
      }
      for (var x = 0; x < l; x++) {
        var U = s.item(x);
        if (Mi(U, t, o)) {
          var w = U.prefix || "", _ = U.namespaceURI;
          Vn(r, w ? "xmlns:" + w : "xmlns", _), o.push({ prefix: w, namespace: _ });
        }
        ut(U, r, t, i, o);
      }
      if (m === y && Mi(e, t, o)) {
        var w = e.prefix || "", _ = e.namespaceURI;
        Vn(r, w ? "xmlns:" + w : "xmlns", _), o.push({ prefix: w, namespace: _ });
      }
      if (D || t && !/^(?:meta|link|img|br|hr|input)$/i.test(m)) {
        if (r.push(">"), t && /^script$/i.test(m))
          for (; D; )
            D.data ? r.push(D.data) : ut(D, r, t, i, o.slice()), D = D.nextSibling;
        else
          for (; D; )
            ut(D, r, t, i, o.slice()), D = D.nextSibling;
        r.push("</", y, ">");
      } else
        r.push("/>");
      return;
    case qo:
    case Ar:
      for (var D = e.firstChild; D; )
        ut(D, r, t, i, o.slice()), D = D.nextSibling;
      return;
    case lt:
      return Vn(r, e.name, e.value);
    case vn:
      return r.push(
        e.data.replace(/[<&>]/g, Ho)
      );
    case zo:
      return r.push("<![CDATA[", e.data, "]]>");
    case Uo:
      return r.push("<!--", e.data, "-->");
    case $o:
      var k = e.publicId, O = e.systemId;
      if (r.push("<!DOCTYPE ", e.name), k)
        r.push(" PUBLIC ", k), O && O != "." && r.push(" ", O), r.push(">");
      else if (O && O != ".")
        r.push(" SYSTEM ", O, ">");
      else {
        var T = e.internalSubset;
        T && r.push(" [", T, "]"), r.push(">");
      }
      return;
    case jo:
      return r.push("<?", e.target, " ", e.data, "?>");
    case Mo:
      return r.push("&", e.nodeName, ";");
    default:
      r.push("??", e.nodeName);
  }
}
function ru(e, r, t) {
  var i;
  switch (r.nodeType) {
    case dr:
      i = r.cloneNode(!1), i.ownerDocument = e;
    case Ar:
      break;
    case lt:
      t = !0;
      break;
  }
  if (i || (i = r.cloneNode(!1)), i.ownerDocument = e, i.parentNode = null, t)
    for (var o = r.firstChild; o; )
      i.appendChild(ru(e, o, t)), o = o.nextSibling;
  return i;
}
function ha(e, r, t) {
  var i = new r.constructor();
  for (var o in r)
    if (Object.prototype.hasOwnProperty.call(r, o)) {
      var s = r[o];
      typeof s != "object" && s != i[o] && (i[o] = s);
    }
  switch (r.childNodes && (i.childNodes = new _r()), i.ownerDocument = e, i.nodeType) {
    case dr:
      var l = r.attributes, m = i.attributes = new bn(), y = l.length;
      m._ownerElement = i;
      for (var d = 0; d < y; d++)
        i.setAttributeNode(ha(e, l.item(d), !0));
      break;
    case lt:
      t = !0;
  }
  if (t)
    for (var c = r.firstChild; c; )
      i.appendChild(ha(e, c, t)), c = c.nextSibling;
  return i;
}
function tu(e, r, t) {
  e[r] = t;
}
try {
  if (Object.defineProperty) {
    let e = function(r) {
      switch (r.nodeType) {
        case dr:
        case Ar:
          var t = [];
          for (r = r.firstChild; r; )
            r.nodeType !== 7 && r.nodeType !== 8 && t.push(e(r)), r = r.nextSibling;
          return t.join("");
        default:
          return r.nodeValue;
      }
    };
    Object.defineProperty(ct.prototype, "length", {
      get: function() {
        return Ba(this), this.$$length;
      }
    }), Object.defineProperty(Ce.prototype, "textContent", {
      get: function() {
        return e(this);
      },
      set: function(r) {
        switch (this.nodeType) {
          case dr:
          case Ar:
            for (; this.firstChild; )
              this.removeChild(this.firstChild);
            (r || String(r)) && this.appendChild(this.ownerDocument.createTextNode(r));
            break;
          default:
            this.data = r, this.value = r, this.nodeValue = r;
        }
      }
    }), tu = function(r, t, i) {
      r["$$" + t] = i;
    };
  }
} catch {
}
Tr.DocumentType = _n;
Tr.DOMException = Re;
Tr.DOMImplementation = Xo;
Tr.Element = Vr;
Tr.Node = Ce;
Tr.NodeList = _r;
Tr.XMLSerializer = Qo;
var Cn = {}, nu = {};
(function(e) {
  var r = Sr.freeze;
  e.XML_ENTITIES = r({
    amp: "&",
    apos: "'",
    gt: ">",
    lt: "<",
    quot: '"'
  }), e.HTML_ENTITIES = r({
    Aacute: "Á",
    aacute: "á",
    Abreve: "Ă",
    abreve: "ă",
    ac: "∾",
    acd: "∿",
    acE: "∾̳",
    Acirc: "Â",
    acirc: "â",
    acute: "´",
    Acy: "А",
    acy: "а",
    AElig: "Æ",
    aelig: "æ",
    af: "⁡",
    Afr: "𝔄",
    afr: "𝔞",
    Agrave: "À",
    agrave: "à",
    alefsym: "ℵ",
    aleph: "ℵ",
    Alpha: "Α",
    alpha: "α",
    Amacr: "Ā",
    amacr: "ā",
    amalg: "⨿",
    AMP: "&",
    amp: "&",
    And: "⩓",
    and: "∧",
    andand: "⩕",
    andd: "⩜",
    andslope: "⩘",
    andv: "⩚",
    ang: "∠",
    ange: "⦤",
    angle: "∠",
    angmsd: "∡",
    angmsdaa: "⦨",
    angmsdab: "⦩",
    angmsdac: "⦪",
    angmsdad: "⦫",
    angmsdae: "⦬",
    angmsdaf: "⦭",
    angmsdag: "⦮",
    angmsdah: "⦯",
    angrt: "∟",
    angrtvb: "⊾",
    angrtvbd: "⦝",
    angsph: "∢",
    angst: "Å",
    angzarr: "⍼",
    Aogon: "Ą",
    aogon: "ą",
    Aopf: "𝔸",
    aopf: "𝕒",
    ap: "≈",
    apacir: "⩯",
    apE: "⩰",
    ape: "≊",
    apid: "≋",
    apos: "'",
    ApplyFunction: "⁡",
    approx: "≈",
    approxeq: "≊",
    Aring: "Å",
    aring: "å",
    Ascr: "𝒜",
    ascr: "𝒶",
    Assign: "≔",
    ast: "*",
    asymp: "≈",
    asympeq: "≍",
    Atilde: "Ã",
    atilde: "ã",
    Auml: "Ä",
    auml: "ä",
    awconint: "∳",
    awint: "⨑",
    backcong: "≌",
    backepsilon: "϶",
    backprime: "‵",
    backsim: "∽",
    backsimeq: "⋍",
    Backslash: "∖",
    Barv: "⫧",
    barvee: "⊽",
    Barwed: "⌆",
    barwed: "⌅",
    barwedge: "⌅",
    bbrk: "⎵",
    bbrktbrk: "⎶",
    bcong: "≌",
    Bcy: "Б",
    bcy: "б",
    bdquo: "„",
    becaus: "∵",
    Because: "∵",
    because: "∵",
    bemptyv: "⦰",
    bepsi: "϶",
    bernou: "ℬ",
    Bernoullis: "ℬ",
    Beta: "Β",
    beta: "β",
    beth: "ℶ",
    between: "≬",
    Bfr: "𝔅",
    bfr: "𝔟",
    bigcap: "⋂",
    bigcirc: "◯",
    bigcup: "⋃",
    bigodot: "⨀",
    bigoplus: "⨁",
    bigotimes: "⨂",
    bigsqcup: "⨆",
    bigstar: "★",
    bigtriangledown: "▽",
    bigtriangleup: "△",
    biguplus: "⨄",
    bigvee: "⋁",
    bigwedge: "⋀",
    bkarow: "⤍",
    blacklozenge: "⧫",
    blacksquare: "▪",
    blacktriangle: "▴",
    blacktriangledown: "▾",
    blacktriangleleft: "◂",
    blacktriangleright: "▸",
    blank: "␣",
    blk12: "▒",
    blk14: "░",
    blk34: "▓",
    block: "█",
    bne: "=⃥",
    bnequiv: "≡⃥",
    bNot: "⫭",
    bnot: "⌐",
    Bopf: "𝔹",
    bopf: "𝕓",
    bot: "⊥",
    bottom: "⊥",
    bowtie: "⋈",
    boxbox: "⧉",
    boxDL: "╗",
    boxDl: "╖",
    boxdL: "╕",
    boxdl: "┐",
    boxDR: "╔",
    boxDr: "╓",
    boxdR: "╒",
    boxdr: "┌",
    boxH: "═",
    boxh: "─",
    boxHD: "╦",
    boxHd: "╤",
    boxhD: "╥",
    boxhd: "┬",
    boxHU: "╩",
    boxHu: "╧",
    boxhU: "╨",
    boxhu: "┴",
    boxminus: "⊟",
    boxplus: "⊞",
    boxtimes: "⊠",
    boxUL: "╝",
    boxUl: "╜",
    boxuL: "╛",
    boxul: "┘",
    boxUR: "╚",
    boxUr: "╙",
    boxuR: "╘",
    boxur: "└",
    boxV: "║",
    boxv: "│",
    boxVH: "╬",
    boxVh: "╫",
    boxvH: "╪",
    boxvh: "┼",
    boxVL: "╣",
    boxVl: "╢",
    boxvL: "╡",
    boxvl: "┤",
    boxVR: "╠",
    boxVr: "╟",
    boxvR: "╞",
    boxvr: "├",
    bprime: "‵",
    Breve: "˘",
    breve: "˘",
    brvbar: "¦",
    Bscr: "ℬ",
    bscr: "𝒷",
    bsemi: "⁏",
    bsim: "∽",
    bsime: "⋍",
    bsol: "\\",
    bsolb: "⧅",
    bsolhsub: "⟈",
    bull: "•",
    bullet: "•",
    bump: "≎",
    bumpE: "⪮",
    bumpe: "≏",
    Bumpeq: "≎",
    bumpeq: "≏",
    Cacute: "Ć",
    cacute: "ć",
    Cap: "⋒",
    cap: "∩",
    capand: "⩄",
    capbrcup: "⩉",
    capcap: "⩋",
    capcup: "⩇",
    capdot: "⩀",
    CapitalDifferentialD: "ⅅ",
    caps: "∩︀",
    caret: "⁁",
    caron: "ˇ",
    Cayleys: "ℭ",
    ccaps: "⩍",
    Ccaron: "Č",
    ccaron: "č",
    Ccedil: "Ç",
    ccedil: "ç",
    Ccirc: "Ĉ",
    ccirc: "ĉ",
    Cconint: "∰",
    ccups: "⩌",
    ccupssm: "⩐",
    Cdot: "Ċ",
    cdot: "ċ",
    cedil: "¸",
    Cedilla: "¸",
    cemptyv: "⦲",
    cent: "¢",
    CenterDot: "·",
    centerdot: "·",
    Cfr: "ℭ",
    cfr: "𝔠",
    CHcy: "Ч",
    chcy: "ч",
    check: "✓",
    checkmark: "✓",
    Chi: "Χ",
    chi: "χ",
    cir: "○",
    circ: "ˆ",
    circeq: "≗",
    circlearrowleft: "↺",
    circlearrowright: "↻",
    circledast: "⊛",
    circledcirc: "⊚",
    circleddash: "⊝",
    CircleDot: "⊙",
    circledR: "®",
    circledS: "Ⓢ",
    CircleMinus: "⊖",
    CirclePlus: "⊕",
    CircleTimes: "⊗",
    cirE: "⧃",
    cire: "≗",
    cirfnint: "⨐",
    cirmid: "⫯",
    cirscir: "⧂",
    ClockwiseContourIntegral: "∲",
    CloseCurlyDoubleQuote: "”",
    CloseCurlyQuote: "’",
    clubs: "♣",
    clubsuit: "♣",
    Colon: "∷",
    colon: ":",
    Colone: "⩴",
    colone: "≔",
    coloneq: "≔",
    comma: ",",
    commat: "@",
    comp: "∁",
    compfn: "∘",
    complement: "∁",
    complexes: "ℂ",
    cong: "≅",
    congdot: "⩭",
    Congruent: "≡",
    Conint: "∯",
    conint: "∮",
    ContourIntegral: "∮",
    Copf: "ℂ",
    copf: "𝕔",
    coprod: "∐",
    Coproduct: "∐",
    COPY: "©",
    copy: "©",
    copysr: "℗",
    CounterClockwiseContourIntegral: "∳",
    crarr: "↵",
    Cross: "⨯",
    cross: "✗",
    Cscr: "𝒞",
    cscr: "𝒸",
    csub: "⫏",
    csube: "⫑",
    csup: "⫐",
    csupe: "⫒",
    ctdot: "⋯",
    cudarrl: "⤸",
    cudarrr: "⤵",
    cuepr: "⋞",
    cuesc: "⋟",
    cularr: "↶",
    cularrp: "⤽",
    Cup: "⋓",
    cup: "∪",
    cupbrcap: "⩈",
    CupCap: "≍",
    cupcap: "⩆",
    cupcup: "⩊",
    cupdot: "⊍",
    cupor: "⩅",
    cups: "∪︀",
    curarr: "↷",
    curarrm: "⤼",
    curlyeqprec: "⋞",
    curlyeqsucc: "⋟",
    curlyvee: "⋎",
    curlywedge: "⋏",
    curren: "¤",
    curvearrowleft: "↶",
    curvearrowright: "↷",
    cuvee: "⋎",
    cuwed: "⋏",
    cwconint: "∲",
    cwint: "∱",
    cylcty: "⌭",
    Dagger: "‡",
    dagger: "†",
    daleth: "ℸ",
    Darr: "↡",
    dArr: "⇓",
    darr: "↓",
    dash: "‐",
    Dashv: "⫤",
    dashv: "⊣",
    dbkarow: "⤏",
    dblac: "˝",
    Dcaron: "Ď",
    dcaron: "ď",
    Dcy: "Д",
    dcy: "д",
    DD: "ⅅ",
    dd: "ⅆ",
    ddagger: "‡",
    ddarr: "⇊",
    DDotrahd: "⤑",
    ddotseq: "⩷",
    deg: "°",
    Del: "∇",
    Delta: "Δ",
    delta: "δ",
    demptyv: "⦱",
    dfisht: "⥿",
    Dfr: "𝔇",
    dfr: "𝔡",
    dHar: "⥥",
    dharl: "⇃",
    dharr: "⇂",
    DiacriticalAcute: "´",
    DiacriticalDot: "˙",
    DiacriticalDoubleAcute: "˝",
    DiacriticalGrave: "`",
    DiacriticalTilde: "˜",
    diam: "⋄",
    Diamond: "⋄",
    diamond: "⋄",
    diamondsuit: "♦",
    diams: "♦",
    die: "¨",
    DifferentialD: "ⅆ",
    digamma: "ϝ",
    disin: "⋲",
    div: "÷",
    divide: "÷",
    divideontimes: "⋇",
    divonx: "⋇",
    DJcy: "Ђ",
    djcy: "ђ",
    dlcorn: "⌞",
    dlcrop: "⌍",
    dollar: "$",
    Dopf: "𝔻",
    dopf: "𝕕",
    Dot: "¨",
    dot: "˙",
    DotDot: "⃜",
    doteq: "≐",
    doteqdot: "≑",
    DotEqual: "≐",
    dotminus: "∸",
    dotplus: "∔",
    dotsquare: "⊡",
    doublebarwedge: "⌆",
    DoubleContourIntegral: "∯",
    DoubleDot: "¨",
    DoubleDownArrow: "⇓",
    DoubleLeftArrow: "⇐",
    DoubleLeftRightArrow: "⇔",
    DoubleLeftTee: "⫤",
    DoubleLongLeftArrow: "⟸",
    DoubleLongLeftRightArrow: "⟺",
    DoubleLongRightArrow: "⟹",
    DoubleRightArrow: "⇒",
    DoubleRightTee: "⊨",
    DoubleUpArrow: "⇑",
    DoubleUpDownArrow: "⇕",
    DoubleVerticalBar: "∥",
    DownArrow: "↓",
    Downarrow: "⇓",
    downarrow: "↓",
    DownArrowBar: "⤓",
    DownArrowUpArrow: "⇵",
    DownBreve: "̑",
    downdownarrows: "⇊",
    downharpoonleft: "⇃",
    downharpoonright: "⇂",
    DownLeftRightVector: "⥐",
    DownLeftTeeVector: "⥞",
    DownLeftVector: "↽",
    DownLeftVectorBar: "⥖",
    DownRightTeeVector: "⥟",
    DownRightVector: "⇁",
    DownRightVectorBar: "⥗",
    DownTee: "⊤",
    DownTeeArrow: "↧",
    drbkarow: "⤐",
    drcorn: "⌟",
    drcrop: "⌌",
    Dscr: "𝒟",
    dscr: "𝒹",
    DScy: "Ѕ",
    dscy: "ѕ",
    dsol: "⧶",
    Dstrok: "Đ",
    dstrok: "đ",
    dtdot: "⋱",
    dtri: "▿",
    dtrif: "▾",
    duarr: "⇵",
    duhar: "⥯",
    dwangle: "⦦",
    DZcy: "Џ",
    dzcy: "џ",
    dzigrarr: "⟿",
    Eacute: "É",
    eacute: "é",
    easter: "⩮",
    Ecaron: "Ě",
    ecaron: "ě",
    ecir: "≖",
    Ecirc: "Ê",
    ecirc: "ê",
    ecolon: "≕",
    Ecy: "Э",
    ecy: "э",
    eDDot: "⩷",
    Edot: "Ė",
    eDot: "≑",
    edot: "ė",
    ee: "ⅇ",
    efDot: "≒",
    Efr: "𝔈",
    efr: "𝔢",
    eg: "⪚",
    Egrave: "È",
    egrave: "è",
    egs: "⪖",
    egsdot: "⪘",
    el: "⪙",
    Element: "∈",
    elinters: "⏧",
    ell: "ℓ",
    els: "⪕",
    elsdot: "⪗",
    Emacr: "Ē",
    emacr: "ē",
    empty: "∅",
    emptyset: "∅",
    EmptySmallSquare: "◻",
    emptyv: "∅",
    EmptyVerySmallSquare: "▫",
    emsp: " ",
    emsp13: " ",
    emsp14: " ",
    ENG: "Ŋ",
    eng: "ŋ",
    ensp: " ",
    Eogon: "Ę",
    eogon: "ę",
    Eopf: "𝔼",
    eopf: "𝕖",
    epar: "⋕",
    eparsl: "⧣",
    eplus: "⩱",
    epsi: "ε",
    Epsilon: "Ε",
    epsilon: "ε",
    epsiv: "ϵ",
    eqcirc: "≖",
    eqcolon: "≕",
    eqsim: "≂",
    eqslantgtr: "⪖",
    eqslantless: "⪕",
    Equal: "⩵",
    equals: "=",
    EqualTilde: "≂",
    equest: "≟",
    Equilibrium: "⇌",
    equiv: "≡",
    equivDD: "⩸",
    eqvparsl: "⧥",
    erarr: "⥱",
    erDot: "≓",
    Escr: "ℰ",
    escr: "ℯ",
    esdot: "≐",
    Esim: "⩳",
    esim: "≂",
    Eta: "Η",
    eta: "η",
    ETH: "Ð",
    eth: "ð",
    Euml: "Ë",
    euml: "ë",
    euro: "€",
    excl: "!",
    exist: "∃",
    Exists: "∃",
    expectation: "ℰ",
    ExponentialE: "ⅇ",
    exponentiale: "ⅇ",
    fallingdotseq: "≒",
    Fcy: "Ф",
    fcy: "ф",
    female: "♀",
    ffilig: "ﬃ",
    fflig: "ﬀ",
    ffllig: "ﬄ",
    Ffr: "𝔉",
    ffr: "𝔣",
    filig: "ﬁ",
    FilledSmallSquare: "◼",
    FilledVerySmallSquare: "▪",
    fjlig: "fj",
    flat: "♭",
    fllig: "ﬂ",
    fltns: "▱",
    fnof: "ƒ",
    Fopf: "𝔽",
    fopf: "𝕗",
    ForAll: "∀",
    forall: "∀",
    fork: "⋔",
    forkv: "⫙",
    Fouriertrf: "ℱ",
    fpartint: "⨍",
    frac12: "½",
    frac13: "⅓",
    frac14: "¼",
    frac15: "⅕",
    frac16: "⅙",
    frac18: "⅛",
    frac23: "⅔",
    frac25: "⅖",
    frac34: "¾",
    frac35: "⅗",
    frac38: "⅜",
    frac45: "⅘",
    frac56: "⅚",
    frac58: "⅝",
    frac78: "⅞",
    frasl: "⁄",
    frown: "⌢",
    Fscr: "ℱ",
    fscr: "𝒻",
    gacute: "ǵ",
    Gamma: "Γ",
    gamma: "γ",
    Gammad: "Ϝ",
    gammad: "ϝ",
    gap: "⪆",
    Gbreve: "Ğ",
    gbreve: "ğ",
    Gcedil: "Ģ",
    Gcirc: "Ĝ",
    gcirc: "ĝ",
    Gcy: "Г",
    gcy: "г",
    Gdot: "Ġ",
    gdot: "ġ",
    gE: "≧",
    ge: "≥",
    gEl: "⪌",
    gel: "⋛",
    geq: "≥",
    geqq: "≧",
    geqslant: "⩾",
    ges: "⩾",
    gescc: "⪩",
    gesdot: "⪀",
    gesdoto: "⪂",
    gesdotol: "⪄",
    gesl: "⋛︀",
    gesles: "⪔",
    Gfr: "𝔊",
    gfr: "𝔤",
    Gg: "⋙",
    gg: "≫",
    ggg: "⋙",
    gimel: "ℷ",
    GJcy: "Ѓ",
    gjcy: "ѓ",
    gl: "≷",
    gla: "⪥",
    glE: "⪒",
    glj: "⪤",
    gnap: "⪊",
    gnapprox: "⪊",
    gnE: "≩",
    gne: "⪈",
    gneq: "⪈",
    gneqq: "≩",
    gnsim: "⋧",
    Gopf: "𝔾",
    gopf: "𝕘",
    grave: "`",
    GreaterEqual: "≥",
    GreaterEqualLess: "⋛",
    GreaterFullEqual: "≧",
    GreaterGreater: "⪢",
    GreaterLess: "≷",
    GreaterSlantEqual: "⩾",
    GreaterTilde: "≳",
    Gscr: "𝒢",
    gscr: "ℊ",
    gsim: "≳",
    gsime: "⪎",
    gsiml: "⪐",
    Gt: "≫",
    GT: ">",
    gt: ">",
    gtcc: "⪧",
    gtcir: "⩺",
    gtdot: "⋗",
    gtlPar: "⦕",
    gtquest: "⩼",
    gtrapprox: "⪆",
    gtrarr: "⥸",
    gtrdot: "⋗",
    gtreqless: "⋛",
    gtreqqless: "⪌",
    gtrless: "≷",
    gtrsim: "≳",
    gvertneqq: "≩︀",
    gvnE: "≩︀",
    Hacek: "ˇ",
    hairsp: " ",
    half: "½",
    hamilt: "ℋ",
    HARDcy: "Ъ",
    hardcy: "ъ",
    hArr: "⇔",
    harr: "↔",
    harrcir: "⥈",
    harrw: "↭",
    Hat: "^",
    hbar: "ℏ",
    Hcirc: "Ĥ",
    hcirc: "ĥ",
    hearts: "♥",
    heartsuit: "♥",
    hellip: "…",
    hercon: "⊹",
    Hfr: "ℌ",
    hfr: "𝔥",
    HilbertSpace: "ℋ",
    hksearow: "⤥",
    hkswarow: "⤦",
    hoarr: "⇿",
    homtht: "∻",
    hookleftarrow: "↩",
    hookrightarrow: "↪",
    Hopf: "ℍ",
    hopf: "𝕙",
    horbar: "―",
    HorizontalLine: "─",
    Hscr: "ℋ",
    hscr: "𝒽",
    hslash: "ℏ",
    Hstrok: "Ħ",
    hstrok: "ħ",
    HumpDownHump: "≎",
    HumpEqual: "≏",
    hybull: "⁃",
    hyphen: "‐",
    Iacute: "Í",
    iacute: "í",
    ic: "⁣",
    Icirc: "Î",
    icirc: "î",
    Icy: "И",
    icy: "и",
    Idot: "İ",
    IEcy: "Е",
    iecy: "е",
    iexcl: "¡",
    iff: "⇔",
    Ifr: "ℑ",
    ifr: "𝔦",
    Igrave: "Ì",
    igrave: "ì",
    ii: "ⅈ",
    iiiint: "⨌",
    iiint: "∭",
    iinfin: "⧜",
    iiota: "℩",
    IJlig: "Ĳ",
    ijlig: "ĳ",
    Im: "ℑ",
    Imacr: "Ī",
    imacr: "ī",
    image: "ℑ",
    ImaginaryI: "ⅈ",
    imagline: "ℐ",
    imagpart: "ℑ",
    imath: "ı",
    imof: "⊷",
    imped: "Ƶ",
    Implies: "⇒",
    in: "∈",
    incare: "℅",
    infin: "∞",
    infintie: "⧝",
    inodot: "ı",
    Int: "∬",
    int: "∫",
    intcal: "⊺",
    integers: "ℤ",
    Integral: "∫",
    intercal: "⊺",
    Intersection: "⋂",
    intlarhk: "⨗",
    intprod: "⨼",
    InvisibleComma: "⁣",
    InvisibleTimes: "⁢",
    IOcy: "Ё",
    iocy: "ё",
    Iogon: "Į",
    iogon: "į",
    Iopf: "𝕀",
    iopf: "𝕚",
    Iota: "Ι",
    iota: "ι",
    iprod: "⨼",
    iquest: "¿",
    Iscr: "ℐ",
    iscr: "𝒾",
    isin: "∈",
    isindot: "⋵",
    isinE: "⋹",
    isins: "⋴",
    isinsv: "⋳",
    isinv: "∈",
    it: "⁢",
    Itilde: "Ĩ",
    itilde: "ĩ",
    Iukcy: "І",
    iukcy: "і",
    Iuml: "Ï",
    iuml: "ï",
    Jcirc: "Ĵ",
    jcirc: "ĵ",
    Jcy: "Й",
    jcy: "й",
    Jfr: "𝔍",
    jfr: "𝔧",
    jmath: "ȷ",
    Jopf: "𝕁",
    jopf: "𝕛",
    Jscr: "𝒥",
    jscr: "𝒿",
    Jsercy: "Ј",
    jsercy: "ј",
    Jukcy: "Є",
    jukcy: "є",
    Kappa: "Κ",
    kappa: "κ",
    kappav: "ϰ",
    Kcedil: "Ķ",
    kcedil: "ķ",
    Kcy: "К",
    kcy: "к",
    Kfr: "𝔎",
    kfr: "𝔨",
    kgreen: "ĸ",
    KHcy: "Х",
    khcy: "х",
    KJcy: "Ќ",
    kjcy: "ќ",
    Kopf: "𝕂",
    kopf: "𝕜",
    Kscr: "𝒦",
    kscr: "𝓀",
    lAarr: "⇚",
    Lacute: "Ĺ",
    lacute: "ĺ",
    laemptyv: "⦴",
    lagran: "ℒ",
    Lambda: "Λ",
    lambda: "λ",
    Lang: "⟪",
    lang: "⟨",
    langd: "⦑",
    langle: "⟨",
    lap: "⪅",
    Laplacetrf: "ℒ",
    laquo: "«",
    Larr: "↞",
    lArr: "⇐",
    larr: "←",
    larrb: "⇤",
    larrbfs: "⤟",
    larrfs: "⤝",
    larrhk: "↩",
    larrlp: "↫",
    larrpl: "⤹",
    larrsim: "⥳",
    larrtl: "↢",
    lat: "⪫",
    lAtail: "⤛",
    latail: "⤙",
    late: "⪭",
    lates: "⪭︀",
    lBarr: "⤎",
    lbarr: "⤌",
    lbbrk: "❲",
    lbrace: "{",
    lbrack: "[",
    lbrke: "⦋",
    lbrksld: "⦏",
    lbrkslu: "⦍",
    Lcaron: "Ľ",
    lcaron: "ľ",
    Lcedil: "Ļ",
    lcedil: "ļ",
    lceil: "⌈",
    lcub: "{",
    Lcy: "Л",
    lcy: "л",
    ldca: "⤶",
    ldquo: "“",
    ldquor: "„",
    ldrdhar: "⥧",
    ldrushar: "⥋",
    ldsh: "↲",
    lE: "≦",
    le: "≤",
    LeftAngleBracket: "⟨",
    LeftArrow: "←",
    Leftarrow: "⇐",
    leftarrow: "←",
    LeftArrowBar: "⇤",
    LeftArrowRightArrow: "⇆",
    leftarrowtail: "↢",
    LeftCeiling: "⌈",
    LeftDoubleBracket: "⟦",
    LeftDownTeeVector: "⥡",
    LeftDownVector: "⇃",
    LeftDownVectorBar: "⥙",
    LeftFloor: "⌊",
    leftharpoondown: "↽",
    leftharpoonup: "↼",
    leftleftarrows: "⇇",
    LeftRightArrow: "↔",
    Leftrightarrow: "⇔",
    leftrightarrow: "↔",
    leftrightarrows: "⇆",
    leftrightharpoons: "⇋",
    leftrightsquigarrow: "↭",
    LeftRightVector: "⥎",
    LeftTee: "⊣",
    LeftTeeArrow: "↤",
    LeftTeeVector: "⥚",
    leftthreetimes: "⋋",
    LeftTriangle: "⊲",
    LeftTriangleBar: "⧏",
    LeftTriangleEqual: "⊴",
    LeftUpDownVector: "⥑",
    LeftUpTeeVector: "⥠",
    LeftUpVector: "↿",
    LeftUpVectorBar: "⥘",
    LeftVector: "↼",
    LeftVectorBar: "⥒",
    lEg: "⪋",
    leg: "⋚",
    leq: "≤",
    leqq: "≦",
    leqslant: "⩽",
    les: "⩽",
    lescc: "⪨",
    lesdot: "⩿",
    lesdoto: "⪁",
    lesdotor: "⪃",
    lesg: "⋚︀",
    lesges: "⪓",
    lessapprox: "⪅",
    lessdot: "⋖",
    lesseqgtr: "⋚",
    lesseqqgtr: "⪋",
    LessEqualGreater: "⋚",
    LessFullEqual: "≦",
    LessGreater: "≶",
    lessgtr: "≶",
    LessLess: "⪡",
    lesssim: "≲",
    LessSlantEqual: "⩽",
    LessTilde: "≲",
    lfisht: "⥼",
    lfloor: "⌊",
    Lfr: "𝔏",
    lfr: "𝔩",
    lg: "≶",
    lgE: "⪑",
    lHar: "⥢",
    lhard: "↽",
    lharu: "↼",
    lharul: "⥪",
    lhblk: "▄",
    LJcy: "Љ",
    ljcy: "љ",
    Ll: "⋘",
    ll: "≪",
    llarr: "⇇",
    llcorner: "⌞",
    Lleftarrow: "⇚",
    llhard: "⥫",
    lltri: "◺",
    Lmidot: "Ŀ",
    lmidot: "ŀ",
    lmoust: "⎰",
    lmoustache: "⎰",
    lnap: "⪉",
    lnapprox: "⪉",
    lnE: "≨",
    lne: "⪇",
    lneq: "⪇",
    lneqq: "≨",
    lnsim: "⋦",
    loang: "⟬",
    loarr: "⇽",
    lobrk: "⟦",
    LongLeftArrow: "⟵",
    Longleftarrow: "⟸",
    longleftarrow: "⟵",
    LongLeftRightArrow: "⟷",
    Longleftrightarrow: "⟺",
    longleftrightarrow: "⟷",
    longmapsto: "⟼",
    LongRightArrow: "⟶",
    Longrightarrow: "⟹",
    longrightarrow: "⟶",
    looparrowleft: "↫",
    looparrowright: "↬",
    lopar: "⦅",
    Lopf: "𝕃",
    lopf: "𝕝",
    loplus: "⨭",
    lotimes: "⨴",
    lowast: "∗",
    lowbar: "_",
    LowerLeftArrow: "↙",
    LowerRightArrow: "↘",
    loz: "◊",
    lozenge: "◊",
    lozf: "⧫",
    lpar: "(",
    lparlt: "⦓",
    lrarr: "⇆",
    lrcorner: "⌟",
    lrhar: "⇋",
    lrhard: "⥭",
    lrm: "‎",
    lrtri: "⊿",
    lsaquo: "‹",
    Lscr: "ℒ",
    lscr: "𝓁",
    Lsh: "↰",
    lsh: "↰",
    lsim: "≲",
    lsime: "⪍",
    lsimg: "⪏",
    lsqb: "[",
    lsquo: "‘",
    lsquor: "‚",
    Lstrok: "Ł",
    lstrok: "ł",
    Lt: "≪",
    LT: "<",
    lt: "<",
    ltcc: "⪦",
    ltcir: "⩹",
    ltdot: "⋖",
    lthree: "⋋",
    ltimes: "⋉",
    ltlarr: "⥶",
    ltquest: "⩻",
    ltri: "◃",
    ltrie: "⊴",
    ltrif: "◂",
    ltrPar: "⦖",
    lurdshar: "⥊",
    luruhar: "⥦",
    lvertneqq: "≨︀",
    lvnE: "≨︀",
    macr: "¯",
    male: "♂",
    malt: "✠",
    maltese: "✠",
    Map: "⤅",
    map: "↦",
    mapsto: "↦",
    mapstodown: "↧",
    mapstoleft: "↤",
    mapstoup: "↥",
    marker: "▮",
    mcomma: "⨩",
    Mcy: "М",
    mcy: "м",
    mdash: "—",
    mDDot: "∺",
    measuredangle: "∡",
    MediumSpace: " ",
    Mellintrf: "ℳ",
    Mfr: "𝔐",
    mfr: "𝔪",
    mho: "℧",
    micro: "µ",
    mid: "∣",
    midast: "*",
    midcir: "⫰",
    middot: "·",
    minus: "−",
    minusb: "⊟",
    minusd: "∸",
    minusdu: "⨪",
    MinusPlus: "∓",
    mlcp: "⫛",
    mldr: "…",
    mnplus: "∓",
    models: "⊧",
    Mopf: "𝕄",
    mopf: "𝕞",
    mp: "∓",
    Mscr: "ℳ",
    mscr: "𝓂",
    mstpos: "∾",
    Mu: "Μ",
    mu: "μ",
    multimap: "⊸",
    mumap: "⊸",
    nabla: "∇",
    Nacute: "Ń",
    nacute: "ń",
    nang: "∠⃒",
    nap: "≉",
    napE: "⩰̸",
    napid: "≋̸",
    napos: "ŉ",
    napprox: "≉",
    natur: "♮",
    natural: "♮",
    naturals: "ℕ",
    nbsp: " ",
    nbump: "≎̸",
    nbumpe: "≏̸",
    ncap: "⩃",
    Ncaron: "Ň",
    ncaron: "ň",
    Ncedil: "Ņ",
    ncedil: "ņ",
    ncong: "≇",
    ncongdot: "⩭̸",
    ncup: "⩂",
    Ncy: "Н",
    ncy: "н",
    ndash: "–",
    ne: "≠",
    nearhk: "⤤",
    neArr: "⇗",
    nearr: "↗",
    nearrow: "↗",
    nedot: "≐̸",
    NegativeMediumSpace: "​",
    NegativeThickSpace: "​",
    NegativeThinSpace: "​",
    NegativeVeryThinSpace: "​",
    nequiv: "≢",
    nesear: "⤨",
    nesim: "≂̸",
    NestedGreaterGreater: "≫",
    NestedLessLess: "≪",
    NewLine: `
`,
    nexist: "∄",
    nexists: "∄",
    Nfr: "𝔑",
    nfr: "𝔫",
    ngE: "≧̸",
    nge: "≱",
    ngeq: "≱",
    ngeqq: "≧̸",
    ngeqslant: "⩾̸",
    nges: "⩾̸",
    nGg: "⋙̸",
    ngsim: "≵",
    nGt: "≫⃒",
    ngt: "≯",
    ngtr: "≯",
    nGtv: "≫̸",
    nhArr: "⇎",
    nharr: "↮",
    nhpar: "⫲",
    ni: "∋",
    nis: "⋼",
    nisd: "⋺",
    niv: "∋",
    NJcy: "Њ",
    njcy: "њ",
    nlArr: "⇍",
    nlarr: "↚",
    nldr: "‥",
    nlE: "≦̸",
    nle: "≰",
    nLeftarrow: "⇍",
    nleftarrow: "↚",
    nLeftrightarrow: "⇎",
    nleftrightarrow: "↮",
    nleq: "≰",
    nleqq: "≦̸",
    nleqslant: "⩽̸",
    nles: "⩽̸",
    nless: "≮",
    nLl: "⋘̸",
    nlsim: "≴",
    nLt: "≪⃒",
    nlt: "≮",
    nltri: "⋪",
    nltrie: "⋬",
    nLtv: "≪̸",
    nmid: "∤",
    NoBreak: "⁠",
    NonBreakingSpace: " ",
    Nopf: "ℕ",
    nopf: "𝕟",
    Not: "⫬",
    not: "¬",
    NotCongruent: "≢",
    NotCupCap: "≭",
    NotDoubleVerticalBar: "∦",
    NotElement: "∉",
    NotEqual: "≠",
    NotEqualTilde: "≂̸",
    NotExists: "∄",
    NotGreater: "≯",
    NotGreaterEqual: "≱",
    NotGreaterFullEqual: "≧̸",
    NotGreaterGreater: "≫̸",
    NotGreaterLess: "≹",
    NotGreaterSlantEqual: "⩾̸",
    NotGreaterTilde: "≵",
    NotHumpDownHump: "≎̸",
    NotHumpEqual: "≏̸",
    notin: "∉",
    notindot: "⋵̸",
    notinE: "⋹̸",
    notinva: "∉",
    notinvb: "⋷",
    notinvc: "⋶",
    NotLeftTriangle: "⋪",
    NotLeftTriangleBar: "⧏̸",
    NotLeftTriangleEqual: "⋬",
    NotLess: "≮",
    NotLessEqual: "≰",
    NotLessGreater: "≸",
    NotLessLess: "≪̸",
    NotLessSlantEqual: "⩽̸",
    NotLessTilde: "≴",
    NotNestedGreaterGreater: "⪢̸",
    NotNestedLessLess: "⪡̸",
    notni: "∌",
    notniva: "∌",
    notnivb: "⋾",
    notnivc: "⋽",
    NotPrecedes: "⊀",
    NotPrecedesEqual: "⪯̸",
    NotPrecedesSlantEqual: "⋠",
    NotReverseElement: "∌",
    NotRightTriangle: "⋫",
    NotRightTriangleBar: "⧐̸",
    NotRightTriangleEqual: "⋭",
    NotSquareSubset: "⊏̸",
    NotSquareSubsetEqual: "⋢",
    NotSquareSuperset: "⊐̸",
    NotSquareSupersetEqual: "⋣",
    NotSubset: "⊂⃒",
    NotSubsetEqual: "⊈",
    NotSucceeds: "⊁",
    NotSucceedsEqual: "⪰̸",
    NotSucceedsSlantEqual: "⋡",
    NotSucceedsTilde: "≿̸",
    NotSuperset: "⊃⃒",
    NotSupersetEqual: "⊉",
    NotTilde: "≁",
    NotTildeEqual: "≄",
    NotTildeFullEqual: "≇",
    NotTildeTilde: "≉",
    NotVerticalBar: "∤",
    npar: "∦",
    nparallel: "∦",
    nparsl: "⫽⃥",
    npart: "∂̸",
    npolint: "⨔",
    npr: "⊀",
    nprcue: "⋠",
    npre: "⪯̸",
    nprec: "⊀",
    npreceq: "⪯̸",
    nrArr: "⇏",
    nrarr: "↛",
    nrarrc: "⤳̸",
    nrarrw: "↝̸",
    nRightarrow: "⇏",
    nrightarrow: "↛",
    nrtri: "⋫",
    nrtrie: "⋭",
    nsc: "⊁",
    nsccue: "⋡",
    nsce: "⪰̸",
    Nscr: "𝒩",
    nscr: "𝓃",
    nshortmid: "∤",
    nshortparallel: "∦",
    nsim: "≁",
    nsime: "≄",
    nsimeq: "≄",
    nsmid: "∤",
    nspar: "∦",
    nsqsube: "⋢",
    nsqsupe: "⋣",
    nsub: "⊄",
    nsubE: "⫅̸",
    nsube: "⊈",
    nsubset: "⊂⃒",
    nsubseteq: "⊈",
    nsubseteqq: "⫅̸",
    nsucc: "⊁",
    nsucceq: "⪰̸",
    nsup: "⊅",
    nsupE: "⫆̸",
    nsupe: "⊉",
    nsupset: "⊃⃒",
    nsupseteq: "⊉",
    nsupseteqq: "⫆̸",
    ntgl: "≹",
    Ntilde: "Ñ",
    ntilde: "ñ",
    ntlg: "≸",
    ntriangleleft: "⋪",
    ntrianglelefteq: "⋬",
    ntriangleright: "⋫",
    ntrianglerighteq: "⋭",
    Nu: "Ν",
    nu: "ν",
    num: "#",
    numero: "№",
    numsp: " ",
    nvap: "≍⃒",
    nVDash: "⊯",
    nVdash: "⊮",
    nvDash: "⊭",
    nvdash: "⊬",
    nvge: "≥⃒",
    nvgt: ">⃒",
    nvHarr: "⤄",
    nvinfin: "⧞",
    nvlArr: "⤂",
    nvle: "≤⃒",
    nvlt: "<⃒",
    nvltrie: "⊴⃒",
    nvrArr: "⤃",
    nvrtrie: "⊵⃒",
    nvsim: "∼⃒",
    nwarhk: "⤣",
    nwArr: "⇖",
    nwarr: "↖",
    nwarrow: "↖",
    nwnear: "⤧",
    Oacute: "Ó",
    oacute: "ó",
    oast: "⊛",
    ocir: "⊚",
    Ocirc: "Ô",
    ocirc: "ô",
    Ocy: "О",
    ocy: "о",
    odash: "⊝",
    Odblac: "Ő",
    odblac: "ő",
    odiv: "⨸",
    odot: "⊙",
    odsold: "⦼",
    OElig: "Œ",
    oelig: "œ",
    ofcir: "⦿",
    Ofr: "𝔒",
    ofr: "𝔬",
    ogon: "˛",
    Ograve: "Ò",
    ograve: "ò",
    ogt: "⧁",
    ohbar: "⦵",
    ohm: "Ω",
    oint: "∮",
    olarr: "↺",
    olcir: "⦾",
    olcross: "⦻",
    oline: "‾",
    olt: "⧀",
    Omacr: "Ō",
    omacr: "ō",
    Omega: "Ω",
    omega: "ω",
    Omicron: "Ο",
    omicron: "ο",
    omid: "⦶",
    ominus: "⊖",
    Oopf: "𝕆",
    oopf: "𝕠",
    opar: "⦷",
    OpenCurlyDoubleQuote: "“",
    OpenCurlyQuote: "‘",
    operp: "⦹",
    oplus: "⊕",
    Or: "⩔",
    or: "∨",
    orarr: "↻",
    ord: "⩝",
    order: "ℴ",
    orderof: "ℴ",
    ordf: "ª",
    ordm: "º",
    origof: "⊶",
    oror: "⩖",
    orslope: "⩗",
    orv: "⩛",
    oS: "Ⓢ",
    Oscr: "𝒪",
    oscr: "ℴ",
    Oslash: "Ø",
    oslash: "ø",
    osol: "⊘",
    Otilde: "Õ",
    otilde: "õ",
    Otimes: "⨷",
    otimes: "⊗",
    otimesas: "⨶",
    Ouml: "Ö",
    ouml: "ö",
    ovbar: "⌽",
    OverBar: "‾",
    OverBrace: "⏞",
    OverBracket: "⎴",
    OverParenthesis: "⏜",
    par: "∥",
    para: "¶",
    parallel: "∥",
    parsim: "⫳",
    parsl: "⫽",
    part: "∂",
    PartialD: "∂",
    Pcy: "П",
    pcy: "п",
    percnt: "%",
    period: ".",
    permil: "‰",
    perp: "⊥",
    pertenk: "‱",
    Pfr: "𝔓",
    pfr: "𝔭",
    Phi: "Φ",
    phi: "φ",
    phiv: "ϕ",
    phmmat: "ℳ",
    phone: "☎",
    Pi: "Π",
    pi: "π",
    pitchfork: "⋔",
    piv: "ϖ",
    planck: "ℏ",
    planckh: "ℎ",
    plankv: "ℏ",
    plus: "+",
    plusacir: "⨣",
    plusb: "⊞",
    pluscir: "⨢",
    plusdo: "∔",
    plusdu: "⨥",
    pluse: "⩲",
    PlusMinus: "±",
    plusmn: "±",
    plussim: "⨦",
    plustwo: "⨧",
    pm: "±",
    Poincareplane: "ℌ",
    pointint: "⨕",
    Popf: "ℙ",
    popf: "𝕡",
    pound: "£",
    Pr: "⪻",
    pr: "≺",
    prap: "⪷",
    prcue: "≼",
    prE: "⪳",
    pre: "⪯",
    prec: "≺",
    precapprox: "⪷",
    preccurlyeq: "≼",
    Precedes: "≺",
    PrecedesEqual: "⪯",
    PrecedesSlantEqual: "≼",
    PrecedesTilde: "≾",
    preceq: "⪯",
    precnapprox: "⪹",
    precneqq: "⪵",
    precnsim: "⋨",
    precsim: "≾",
    Prime: "″",
    prime: "′",
    primes: "ℙ",
    prnap: "⪹",
    prnE: "⪵",
    prnsim: "⋨",
    prod: "∏",
    Product: "∏",
    profalar: "⌮",
    profline: "⌒",
    profsurf: "⌓",
    prop: "∝",
    Proportion: "∷",
    Proportional: "∝",
    propto: "∝",
    prsim: "≾",
    prurel: "⊰",
    Pscr: "𝒫",
    pscr: "𝓅",
    Psi: "Ψ",
    psi: "ψ",
    puncsp: " ",
    Qfr: "𝔔",
    qfr: "𝔮",
    qint: "⨌",
    Qopf: "ℚ",
    qopf: "𝕢",
    qprime: "⁗",
    Qscr: "𝒬",
    qscr: "𝓆",
    quaternions: "ℍ",
    quatint: "⨖",
    quest: "?",
    questeq: "≟",
    QUOT: '"',
    quot: '"',
    rAarr: "⇛",
    race: "∽̱",
    Racute: "Ŕ",
    racute: "ŕ",
    radic: "√",
    raemptyv: "⦳",
    Rang: "⟫",
    rang: "⟩",
    rangd: "⦒",
    range: "⦥",
    rangle: "⟩",
    raquo: "»",
    Rarr: "↠",
    rArr: "⇒",
    rarr: "→",
    rarrap: "⥵",
    rarrb: "⇥",
    rarrbfs: "⤠",
    rarrc: "⤳",
    rarrfs: "⤞",
    rarrhk: "↪",
    rarrlp: "↬",
    rarrpl: "⥅",
    rarrsim: "⥴",
    Rarrtl: "⤖",
    rarrtl: "↣",
    rarrw: "↝",
    rAtail: "⤜",
    ratail: "⤚",
    ratio: "∶",
    rationals: "ℚ",
    RBarr: "⤐",
    rBarr: "⤏",
    rbarr: "⤍",
    rbbrk: "❳",
    rbrace: "}",
    rbrack: "]",
    rbrke: "⦌",
    rbrksld: "⦎",
    rbrkslu: "⦐",
    Rcaron: "Ř",
    rcaron: "ř",
    Rcedil: "Ŗ",
    rcedil: "ŗ",
    rceil: "⌉",
    rcub: "}",
    Rcy: "Р",
    rcy: "р",
    rdca: "⤷",
    rdldhar: "⥩",
    rdquo: "”",
    rdquor: "”",
    rdsh: "↳",
    Re: "ℜ",
    real: "ℜ",
    realine: "ℛ",
    realpart: "ℜ",
    reals: "ℝ",
    rect: "▭",
    REG: "®",
    reg: "®",
    ReverseElement: "∋",
    ReverseEquilibrium: "⇋",
    ReverseUpEquilibrium: "⥯",
    rfisht: "⥽",
    rfloor: "⌋",
    Rfr: "ℜ",
    rfr: "𝔯",
    rHar: "⥤",
    rhard: "⇁",
    rharu: "⇀",
    rharul: "⥬",
    Rho: "Ρ",
    rho: "ρ",
    rhov: "ϱ",
    RightAngleBracket: "⟩",
    RightArrow: "→",
    Rightarrow: "⇒",
    rightarrow: "→",
    RightArrowBar: "⇥",
    RightArrowLeftArrow: "⇄",
    rightarrowtail: "↣",
    RightCeiling: "⌉",
    RightDoubleBracket: "⟧",
    RightDownTeeVector: "⥝",
    RightDownVector: "⇂",
    RightDownVectorBar: "⥕",
    RightFloor: "⌋",
    rightharpoondown: "⇁",
    rightharpoonup: "⇀",
    rightleftarrows: "⇄",
    rightleftharpoons: "⇌",
    rightrightarrows: "⇉",
    rightsquigarrow: "↝",
    RightTee: "⊢",
    RightTeeArrow: "↦",
    RightTeeVector: "⥛",
    rightthreetimes: "⋌",
    RightTriangle: "⊳",
    RightTriangleBar: "⧐",
    RightTriangleEqual: "⊵",
    RightUpDownVector: "⥏",
    RightUpTeeVector: "⥜",
    RightUpVector: "↾",
    RightUpVectorBar: "⥔",
    RightVector: "⇀",
    RightVectorBar: "⥓",
    ring: "˚",
    risingdotseq: "≓",
    rlarr: "⇄",
    rlhar: "⇌",
    rlm: "‏",
    rmoust: "⎱",
    rmoustache: "⎱",
    rnmid: "⫮",
    roang: "⟭",
    roarr: "⇾",
    robrk: "⟧",
    ropar: "⦆",
    Ropf: "ℝ",
    ropf: "𝕣",
    roplus: "⨮",
    rotimes: "⨵",
    RoundImplies: "⥰",
    rpar: ")",
    rpargt: "⦔",
    rppolint: "⨒",
    rrarr: "⇉",
    Rrightarrow: "⇛",
    rsaquo: "›",
    Rscr: "ℛ",
    rscr: "𝓇",
    Rsh: "↱",
    rsh: "↱",
    rsqb: "]",
    rsquo: "’",
    rsquor: "’",
    rthree: "⋌",
    rtimes: "⋊",
    rtri: "▹",
    rtrie: "⊵",
    rtrif: "▸",
    rtriltri: "⧎",
    RuleDelayed: "⧴",
    ruluhar: "⥨",
    rx: "℞",
    Sacute: "Ś",
    sacute: "ś",
    sbquo: "‚",
    Sc: "⪼",
    sc: "≻",
    scap: "⪸",
    Scaron: "Š",
    scaron: "š",
    sccue: "≽",
    scE: "⪴",
    sce: "⪰",
    Scedil: "Ş",
    scedil: "ş",
    Scirc: "Ŝ",
    scirc: "ŝ",
    scnap: "⪺",
    scnE: "⪶",
    scnsim: "⋩",
    scpolint: "⨓",
    scsim: "≿",
    Scy: "С",
    scy: "с",
    sdot: "⋅",
    sdotb: "⊡",
    sdote: "⩦",
    searhk: "⤥",
    seArr: "⇘",
    searr: "↘",
    searrow: "↘",
    sect: "§",
    semi: ";",
    seswar: "⤩",
    setminus: "∖",
    setmn: "∖",
    sext: "✶",
    Sfr: "𝔖",
    sfr: "𝔰",
    sfrown: "⌢",
    sharp: "♯",
    SHCHcy: "Щ",
    shchcy: "щ",
    SHcy: "Ш",
    shcy: "ш",
    ShortDownArrow: "↓",
    ShortLeftArrow: "←",
    shortmid: "∣",
    shortparallel: "∥",
    ShortRightArrow: "→",
    ShortUpArrow: "↑",
    shy: "­",
    Sigma: "Σ",
    sigma: "σ",
    sigmaf: "ς",
    sigmav: "ς",
    sim: "∼",
    simdot: "⩪",
    sime: "≃",
    simeq: "≃",
    simg: "⪞",
    simgE: "⪠",
    siml: "⪝",
    simlE: "⪟",
    simne: "≆",
    simplus: "⨤",
    simrarr: "⥲",
    slarr: "←",
    SmallCircle: "∘",
    smallsetminus: "∖",
    smashp: "⨳",
    smeparsl: "⧤",
    smid: "∣",
    smile: "⌣",
    smt: "⪪",
    smte: "⪬",
    smtes: "⪬︀",
    SOFTcy: "Ь",
    softcy: "ь",
    sol: "/",
    solb: "⧄",
    solbar: "⌿",
    Sopf: "𝕊",
    sopf: "𝕤",
    spades: "♠",
    spadesuit: "♠",
    spar: "∥",
    sqcap: "⊓",
    sqcaps: "⊓︀",
    sqcup: "⊔",
    sqcups: "⊔︀",
    Sqrt: "√",
    sqsub: "⊏",
    sqsube: "⊑",
    sqsubset: "⊏",
    sqsubseteq: "⊑",
    sqsup: "⊐",
    sqsupe: "⊒",
    sqsupset: "⊐",
    sqsupseteq: "⊒",
    squ: "□",
    Square: "□",
    square: "□",
    SquareIntersection: "⊓",
    SquareSubset: "⊏",
    SquareSubsetEqual: "⊑",
    SquareSuperset: "⊐",
    SquareSupersetEqual: "⊒",
    SquareUnion: "⊔",
    squarf: "▪",
    squf: "▪",
    srarr: "→",
    Sscr: "𝒮",
    sscr: "𝓈",
    ssetmn: "∖",
    ssmile: "⌣",
    sstarf: "⋆",
    Star: "⋆",
    star: "☆",
    starf: "★",
    straightepsilon: "ϵ",
    straightphi: "ϕ",
    strns: "¯",
    Sub: "⋐",
    sub: "⊂",
    subdot: "⪽",
    subE: "⫅",
    sube: "⊆",
    subedot: "⫃",
    submult: "⫁",
    subnE: "⫋",
    subne: "⊊",
    subplus: "⪿",
    subrarr: "⥹",
    Subset: "⋐",
    subset: "⊂",
    subseteq: "⊆",
    subseteqq: "⫅",
    SubsetEqual: "⊆",
    subsetneq: "⊊",
    subsetneqq: "⫋",
    subsim: "⫇",
    subsub: "⫕",
    subsup: "⫓",
    succ: "≻",
    succapprox: "⪸",
    succcurlyeq: "≽",
    Succeeds: "≻",
    SucceedsEqual: "⪰",
    SucceedsSlantEqual: "≽",
    SucceedsTilde: "≿",
    succeq: "⪰",
    succnapprox: "⪺",
    succneqq: "⪶",
    succnsim: "⋩",
    succsim: "≿",
    SuchThat: "∋",
    Sum: "∑",
    sum: "∑",
    sung: "♪",
    Sup: "⋑",
    sup: "⊃",
    sup1: "¹",
    sup2: "²",
    sup3: "³",
    supdot: "⪾",
    supdsub: "⫘",
    supE: "⫆",
    supe: "⊇",
    supedot: "⫄",
    Superset: "⊃",
    SupersetEqual: "⊇",
    suphsol: "⟉",
    suphsub: "⫗",
    suplarr: "⥻",
    supmult: "⫂",
    supnE: "⫌",
    supne: "⊋",
    supplus: "⫀",
    Supset: "⋑",
    supset: "⊃",
    supseteq: "⊇",
    supseteqq: "⫆",
    supsetneq: "⊋",
    supsetneqq: "⫌",
    supsim: "⫈",
    supsub: "⫔",
    supsup: "⫖",
    swarhk: "⤦",
    swArr: "⇙",
    swarr: "↙",
    swarrow: "↙",
    swnwar: "⤪",
    szlig: "ß",
    Tab: "	",
    target: "⌖",
    Tau: "Τ",
    tau: "τ",
    tbrk: "⎴",
    Tcaron: "Ť",
    tcaron: "ť",
    Tcedil: "Ţ",
    tcedil: "ţ",
    Tcy: "Т",
    tcy: "т",
    tdot: "⃛",
    telrec: "⌕",
    Tfr: "𝔗",
    tfr: "𝔱",
    there4: "∴",
    Therefore: "∴",
    therefore: "∴",
    Theta: "Θ",
    theta: "θ",
    thetasym: "ϑ",
    thetav: "ϑ",
    thickapprox: "≈",
    thicksim: "∼",
    ThickSpace: "  ",
    thinsp: " ",
    ThinSpace: " ",
    thkap: "≈",
    thksim: "∼",
    THORN: "Þ",
    thorn: "þ",
    Tilde: "∼",
    tilde: "˜",
    TildeEqual: "≃",
    TildeFullEqual: "≅",
    TildeTilde: "≈",
    times: "×",
    timesb: "⊠",
    timesbar: "⨱",
    timesd: "⨰",
    tint: "∭",
    toea: "⤨",
    top: "⊤",
    topbot: "⌶",
    topcir: "⫱",
    Topf: "𝕋",
    topf: "𝕥",
    topfork: "⫚",
    tosa: "⤩",
    tprime: "‴",
    TRADE: "™",
    trade: "™",
    triangle: "▵",
    triangledown: "▿",
    triangleleft: "◃",
    trianglelefteq: "⊴",
    triangleq: "≜",
    triangleright: "▹",
    trianglerighteq: "⊵",
    tridot: "◬",
    trie: "≜",
    triminus: "⨺",
    TripleDot: "⃛",
    triplus: "⨹",
    trisb: "⧍",
    tritime: "⨻",
    trpezium: "⏢",
    Tscr: "𝒯",
    tscr: "𝓉",
    TScy: "Ц",
    tscy: "ц",
    TSHcy: "Ћ",
    tshcy: "ћ",
    Tstrok: "Ŧ",
    tstrok: "ŧ",
    twixt: "≬",
    twoheadleftarrow: "↞",
    twoheadrightarrow: "↠",
    Uacute: "Ú",
    uacute: "ú",
    Uarr: "↟",
    uArr: "⇑",
    uarr: "↑",
    Uarrocir: "⥉",
    Ubrcy: "Ў",
    ubrcy: "ў",
    Ubreve: "Ŭ",
    ubreve: "ŭ",
    Ucirc: "Û",
    ucirc: "û",
    Ucy: "У",
    ucy: "у",
    udarr: "⇅",
    Udblac: "Ű",
    udblac: "ű",
    udhar: "⥮",
    ufisht: "⥾",
    Ufr: "𝔘",
    ufr: "𝔲",
    Ugrave: "Ù",
    ugrave: "ù",
    uHar: "⥣",
    uharl: "↿",
    uharr: "↾",
    uhblk: "▀",
    ulcorn: "⌜",
    ulcorner: "⌜",
    ulcrop: "⌏",
    ultri: "◸",
    Umacr: "Ū",
    umacr: "ū",
    uml: "¨",
    UnderBar: "_",
    UnderBrace: "⏟",
    UnderBracket: "⎵",
    UnderParenthesis: "⏝",
    Union: "⋃",
    UnionPlus: "⊎",
    Uogon: "Ų",
    uogon: "ų",
    Uopf: "𝕌",
    uopf: "𝕦",
    UpArrow: "↑",
    Uparrow: "⇑",
    uparrow: "↑",
    UpArrowBar: "⤒",
    UpArrowDownArrow: "⇅",
    UpDownArrow: "↕",
    Updownarrow: "⇕",
    updownarrow: "↕",
    UpEquilibrium: "⥮",
    upharpoonleft: "↿",
    upharpoonright: "↾",
    uplus: "⊎",
    UpperLeftArrow: "↖",
    UpperRightArrow: "↗",
    Upsi: "ϒ",
    upsi: "υ",
    upsih: "ϒ",
    Upsilon: "Υ",
    upsilon: "υ",
    UpTee: "⊥",
    UpTeeArrow: "↥",
    upuparrows: "⇈",
    urcorn: "⌝",
    urcorner: "⌝",
    urcrop: "⌎",
    Uring: "Ů",
    uring: "ů",
    urtri: "◹",
    Uscr: "𝒰",
    uscr: "𝓊",
    utdot: "⋰",
    Utilde: "Ũ",
    utilde: "ũ",
    utri: "▵",
    utrif: "▴",
    uuarr: "⇈",
    Uuml: "Ü",
    uuml: "ü",
    uwangle: "⦧",
    vangrt: "⦜",
    varepsilon: "ϵ",
    varkappa: "ϰ",
    varnothing: "∅",
    varphi: "ϕ",
    varpi: "ϖ",
    varpropto: "∝",
    vArr: "⇕",
    varr: "↕",
    varrho: "ϱ",
    varsigma: "ς",
    varsubsetneq: "⊊︀",
    varsubsetneqq: "⫋︀",
    varsupsetneq: "⊋︀",
    varsupsetneqq: "⫌︀",
    vartheta: "ϑ",
    vartriangleleft: "⊲",
    vartriangleright: "⊳",
    Vbar: "⫫",
    vBar: "⫨",
    vBarv: "⫩",
    Vcy: "В",
    vcy: "в",
    VDash: "⊫",
    Vdash: "⊩",
    vDash: "⊨",
    vdash: "⊢",
    Vdashl: "⫦",
    Vee: "⋁",
    vee: "∨",
    veebar: "⊻",
    veeeq: "≚",
    vellip: "⋮",
    Verbar: "‖",
    verbar: "|",
    Vert: "‖",
    vert: "|",
    VerticalBar: "∣",
    VerticalLine: "|",
    VerticalSeparator: "❘",
    VerticalTilde: "≀",
    VeryThinSpace: " ",
    Vfr: "𝔙",
    vfr: "𝔳",
    vltri: "⊲",
    vnsub: "⊂⃒",
    vnsup: "⊃⃒",
    Vopf: "𝕍",
    vopf: "𝕧",
    vprop: "∝",
    vrtri: "⊳",
    Vscr: "𝒱",
    vscr: "𝓋",
    vsubnE: "⫋︀",
    vsubne: "⊊︀",
    vsupnE: "⫌︀",
    vsupne: "⊋︀",
    Vvdash: "⊪",
    vzigzag: "⦚",
    Wcirc: "Ŵ",
    wcirc: "ŵ",
    wedbar: "⩟",
    Wedge: "⋀",
    wedge: "∧",
    wedgeq: "≙",
    weierp: "℘",
    Wfr: "𝔚",
    wfr: "𝔴",
    Wopf: "𝕎",
    wopf: "𝕨",
    wp: "℘",
    wr: "≀",
    wreath: "≀",
    Wscr: "𝒲",
    wscr: "𝓌",
    xcap: "⋂",
    xcirc: "◯",
    xcup: "⋃",
    xdtri: "▽",
    Xfr: "𝔛",
    xfr: "𝔵",
    xhArr: "⟺",
    xharr: "⟷",
    Xi: "Ξ",
    xi: "ξ",
    xlArr: "⟸",
    xlarr: "⟵",
    xmap: "⟼",
    xnis: "⋻",
    xodot: "⨀",
    Xopf: "𝕏",
    xopf: "𝕩",
    xoplus: "⨁",
    xotime: "⨂",
    xrArr: "⟹",
    xrarr: "⟶",
    Xscr: "𝒳",
    xscr: "𝓍",
    xsqcup: "⨆",
    xuplus: "⨄",
    xutri: "△",
    xvee: "⋁",
    xwedge: "⋀",
    Yacute: "Ý",
    yacute: "ý",
    YAcy: "Я",
    yacy: "я",
    Ycirc: "Ŷ",
    ycirc: "ŷ",
    Ycy: "Ы",
    ycy: "ы",
    yen: "¥",
    Yfr: "𝔜",
    yfr: "𝔶",
    YIcy: "Ї",
    yicy: "ї",
    Yopf: "𝕐",
    yopf: "𝕪",
    Yscr: "𝒴",
    yscr: "𝓎",
    YUcy: "Ю",
    yucy: "ю",
    Yuml: "Ÿ",
    yuml: "ÿ",
    Zacute: "Ź",
    zacute: "ź",
    Zcaron: "Ž",
    zcaron: "ž",
    Zcy: "З",
    zcy: "з",
    Zdot: "Ż",
    zdot: "ż",
    zeetrf: "ℨ",
    ZeroWidthSpace: "​",
    Zeta: "Ζ",
    zeta: "ζ",
    Zfr: "ℨ",
    zfr: "𝔷",
    ZHcy: "Ж",
    zhcy: "ж",
    zigrarr: "⇝",
    Zopf: "ℤ",
    zopf: "𝕫",
    Zscr: "𝒵",
    zscr: "𝓏",
    zwj: "‍",
    zwnj: "‌"
  }), e.entityMap = e.HTML_ENTITIES;
})(nu);
var za = {}, Ot = Sr.NAMESPACE, ma = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, ji = new RegExp("[\\-\\.0-9" + ma.source.slice(1, -1) + "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]"), Ui = new RegExp("^" + ma.source + ji.source + "*(?::" + ma.source + ji.source + "*)?$"), _t = 0, Fr = 1, et = 2, At = 3, rt = 4, tt = 5, Ct = 6, ln = 7;
function ft(e, r) {
  this.message = e, this.locator = r, Error.captureStackTrace && Error.captureStackTrace(this, ft);
}
ft.prototype = new Error();
ft.prototype.name = ft.name;
function au() {
}
au.prototype = {
  parse: function(e, r, t) {
    var i = this.domBuilder;
    i.startDocument(), iu(r, r = {}), nl(
      e,
      r,
      t,
      i,
      this.errorHandler
    ), i.endDocument();
  }
};
function nl(e, r, t, i, o) {
  function s(ne) {
    if (ne > 65535) {
      ne -= 65536;
      var oe = 55296 + (ne >> 10), ue = 56320 + (ne & 1023);
      return String.fromCharCode(oe, ue);
    } else
      return String.fromCharCode(ne);
  }
  function l(ne) {
    var oe = ne.slice(1, -1);
    return Object.hasOwnProperty.call(t, oe) ? t[oe] : oe.charAt(0) === "#" ? s(parseInt(oe.substr(1).replace("x", "0x"))) : (o.error("entity not found:" + ne), ne);
  }
  function m(ne) {
    if (ne > w) {
      var oe = e.substring(w, ne).replace(/&#?\w+;/g, l);
      v && y(w), i.characters(oe, 0, ne - w), w = ne;
    }
  }
  function y(ne, oe) {
    for (; ne >= c && (oe = g.exec(e)); )
      d = oe.index, c = d + oe[0].length, v.lineNumber++;
    v.columnNumber = ne - d + 1;
  }
  for (var d = 0, c = 0, g = /.*(?:\r\n?|\n)|.*$/g, v = i.locator, x = [{ currentNSMap: r }], U = {}, w = 0; ; ) {
    try {
      var _ = e.indexOf("<", w);
      if (_ < 0) {
        if (!e.substr(w).match(/^\s*$/)) {
          var D = i.doc, k = D.createTextNode(e.substr(w));
          D.appendChild(k), i.currentElement = k;
        }
        return;
      }
      switch (_ > w && m(_), e.charAt(_ + 1)) {
        case "/":
          var B = e.indexOf(">", _ + 3), O = e.substring(_ + 2, B).replace(/[ \t\n\r]+$/g, ""), T = x.pop();
          B < 0 ? (O = e.substring(_ + 2).replace(/[\s<].*/, ""), o.error("end tag name: " + O + " is not complete:" + T.tagName), B = _ + 1 + O.length) : O.match(/\s</) && (O = O.replace(/[\s<].*/, ""), o.error("end tag name: " + O + " maybe not complete"), B = _ + 1 + O.length);
          var F = T.localNSMap, L = T.tagName == O, A = L || T.tagName && T.tagName.toLowerCase() == O.toLowerCase();
          if (A) {
            if (i.endElement(T.uri, T.localName, O), F)
              for (var R in F)
                Object.prototype.hasOwnProperty.call(F, R) && i.endPrefixMapping(R);
            L || o.fatalError("end tag name: " + O + " is not match the current start tagName:" + T.tagName);
          } else
            x.push(T);
          B++;
          break;
        case "?":
          v && y(_), B = sl(e, _, i);
          break;
        case "!":
          v && y(_), B = ul(e, _, i, o);
          break;
        default:
          v && y(_);
          var q = new ou(), S = x[x.length - 1].currentNSMap, B = al(e, _, q, S, l, o), V = q.length;
          if (!q.closed && ol(e, B, q.tagName, U) && (q.closed = !0, t.nbsp || o.warning("unclosed xml attribute")), v && V) {
            for (var Y = qi(v, {}), ee = 0; ee < V; ee++) {
              var te = q[ee];
              y(te.offset), te.locator = qi(v, {});
            }
            i.locator = Y, $i(q, i, S) && x.push(q), i.locator = v;
          } else
            $i(q, i, S) && x.push(q);
          Ot.isHTML(q.uri) && !q.closed ? B = il(e, B, q.tagName, l, i) : B++;
      }
    } catch (ne) {
      if (ne instanceof ft)
        throw ne;
      o.error("element parse error: " + ne), B = -1;
    }
    B > w ? w = B : m(Math.max(_, w) + 1);
  }
}
function qi(e, r) {
  return r.lineNumber = e.lineNumber, r.columnNumber = e.columnNumber, r;
}
function al(e, r, t, i, o, s) {
  function l(v, x, U) {
    t.attributeNames.hasOwnProperty(v) && s.fatalError("Attribute " + v + " redefined"), t.addValue(
      v,
      // @see https://www.w3.org/TR/xml/#AVNormalize
      // since the xmldom sax parser does not "interpret" DTD the following is not implemented:
      // - recursive replacement of (DTD) entity references
      // - trimming and collapsing multiple spaces into a single one for attributes that are not of type CDATA
      x.replace(/[\t\n\r]/g, " ").replace(/&#?\w+;/g, o),
      U
    );
  }
  for (var m, y, d = ++r, c = _t; ; ) {
    var g = e.charAt(d);
    switch (g) {
      case "=":
        if (c === Fr)
          m = e.slice(r, d), c = At;
        else if (c === et)
          c = At;
        else
          throw new Error("attribute equal must after attrName");
        break;
      case "'":
      case '"':
        if (c === At || c === Fr)
          if (c === Fr && (s.warning('attribute value must after "="'), m = e.slice(r, d)), r = d + 1, d = e.indexOf(g, r), d > 0)
            y = e.slice(r, d), l(m, y, r - 1), c = tt;
          else
            throw new Error("attribute value no end '" + g + "' match");
        else if (c == rt)
          y = e.slice(r, d), l(m, y, r), s.warning('attribute "' + m + '" missed start quot(' + g + ")!!"), r = d + 1, c = tt;
        else
          throw new Error('attribute value must after "="');
        break;
      case "/":
        switch (c) {
          case _t:
            t.setTagName(e.slice(r, d));
          case tt:
          case Ct:
          case ln:
            c = ln, t.closed = !0;
          case rt:
          case Fr:
            break;
          case et:
            t.closed = !0;
            break;
          default:
            throw new Error("attribute invalid close char('/')");
        }
        break;
      case "":
        return s.error("unexpected end of input"), c == _t && t.setTagName(e.slice(r, d)), d;
      case ">":
        switch (c) {
          case _t:
            t.setTagName(e.slice(r, d));
          case tt:
          case Ct:
          case ln:
            break;
          case rt:
          case Fr:
            y = e.slice(r, d), y.slice(-1) === "/" && (t.closed = !0, y = y.slice(0, -1));
          case et:
            c === et && (y = m), c == rt ? (s.warning('attribute "' + y + '" missed quot(")!'), l(m, y, r)) : ((!Ot.isHTML(i[""]) || !y.match(/^(?:disabled|checked|selected)$/i)) && s.warning('attribute "' + y + '" missed value!! "' + y + '" instead!!'), l(y, y, r));
            break;
          case At:
            throw new Error("attribute value missed!!");
        }
        return d;
      case "":
        g = " ";
      default:
        if (g <= " ")
          switch (c) {
            case _t:
              t.setTagName(e.slice(r, d)), c = Ct;
              break;
            case Fr:
              m = e.slice(r, d), c = et;
              break;
            case rt:
              var y = e.slice(r, d);
              s.warning('attribute "' + y + '" missed quot(")!!'), l(m, y, r);
            case tt:
              c = Ct;
              break;
          }
        else
          switch (c) {
            case et:
              t.tagName, (!Ot.isHTML(i[""]) || !m.match(/^(?:disabled|checked|selected)$/i)) && s.warning('attribute "' + m + '" missed value!! "' + m + '" instead2!!'), l(m, m, r), r = d, c = Fr;
              break;
            case tt:
              s.warning('attribute space is required"' + m + '"!!');
            case Ct:
              c = Fr, r = d;
              break;
            case At:
              c = rt, r = d;
              break;
            case ln:
              throw new Error("elements closed character '/' and '>' must be connected to");
          }
    }
    d++;
  }
}
function $i(e, r, t) {
  for (var i = e.tagName, o = null, g = e.length; g--; ) {
    var s = e[g], l = s.qName, m = s.value, v = l.indexOf(":");
    if (v > 0)
      var y = s.prefix = l.slice(0, v), d = l.slice(v + 1), c = y === "xmlns" && d;
    else
      d = l, y = null, c = l === "xmlns" && "";
    s.localName = d, c !== !1 && (o == null && (o = {}, iu(t, t = {})), t[c] = o[c] = m, s.uri = Ot.XMLNS, r.startPrefixMapping(c, m));
  }
  for (var g = e.length; g--; ) {
    s = e[g];
    var y = s.prefix;
    y && (y === "xml" && (s.uri = Ot.XML), y !== "xmlns" && (s.uri = t[y || ""]));
  }
  var v = i.indexOf(":");
  v > 0 ? (y = e.prefix = i.slice(0, v), d = e.localName = i.slice(v + 1)) : (y = null, d = e.localName = i);
  var x = e.uri = t[y || ""];
  if (r.startElement(x, d, i, e), e.closed) {
    if (r.endElement(x, d, i), o)
      for (y in o)
        Object.prototype.hasOwnProperty.call(o, y) && r.endPrefixMapping(y);
  } else
    return e.currentNSMap = t, e.localNSMap = o, !0;
}
function il(e, r, t, i, o) {
  if (/^(?:script|textarea)$/i.test(t)) {
    var s = e.indexOf("</" + t + ">", r), l = e.substring(r + 1, s);
    if (/[&<]/.test(l))
      return /^script$/i.test(t) ? (o.characters(l, 0, l.length), s) : (l = l.replace(/&#?\w+;/g, i), o.characters(l, 0, l.length), s);
  }
  return r + 1;
}
function ol(e, r, t, i) {
  var o = i[t];
  return o == null && (o = e.lastIndexOf("</" + t + ">"), o < r && (o = e.lastIndexOf("</" + t)), i[t] = o), o < r;
}
function iu(e, r) {
  for (var t in e)
    Object.prototype.hasOwnProperty.call(e, t) && (r[t] = e[t]);
}
function ul(e, r, t, i) {
  var o = e.charAt(r + 2);
  switch (o) {
    case "-":
      if (e.charAt(r + 3) === "-") {
        var s = e.indexOf("-->", r + 4);
        return s > r ? (t.comment(e, r + 4, s - r - 4), s + 3) : (i.error("Unclosed comment"), -1);
      } else
        return -1;
    default:
      if (e.substr(r + 3, 6) == "CDATA[") {
        var s = e.indexOf("]]>", r + 9);
        return t.startCDATA(), t.characters(e, r + 9, s - r - 9), t.endCDATA(), s + 3;
      }
      var l = ll(e, r), m = l.length;
      if (m > 1 && /!doctype/i.test(l[0][0])) {
        var y = l[1][0], d = !1, c = !1;
        m > 3 && (/^public$/i.test(l[2][0]) ? (d = l[3][0], c = m > 4 && l[4][0]) : /^system$/i.test(l[2][0]) && (c = l[3][0]));
        var g = l[m - 1];
        return t.startDTD(y, d, c), t.endDTD(), g.index + g[0].length;
      }
  }
  return -1;
}
function sl(e, r, t) {
  var i = e.indexOf("?>", r);
  if (i) {
    var o = e.substring(r, i).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);
    return o ? (o[0].length, t.processingInstruction(o[1], o[2]), i + 2) : -1;
  }
  return -1;
}
function ou() {
  this.attributeNames = {};
}
ou.prototype = {
  setTagName: function(e) {
    if (!Ui.test(e))
      throw new Error("invalid tagName:" + e);
    this.tagName = e;
  },
  addValue: function(e, r, t) {
    if (!Ui.test(e))
      throw new Error("invalid attribute:" + e);
    this.attributeNames[e] = this.length, this[this.length++] = { qName: e, value: r, offset: t };
  },
  length: 0,
  getLocalName: function(e) {
    return this[e].localName;
  },
  getLocator: function(e) {
    return this[e].locator;
  },
  getQName: function(e) {
    return this[e].qName;
  },
  getURI: function(e) {
    return this[e].uri;
  },
  getValue: function(e) {
    return this[e].value;
  }
  //	,getIndex:function(uri, localName)){
  //		if(localName){
  //
  //		}else{
  //			var qName = uri
  //		}
  //	},
  //	getValue:function(){return this.getValue(this.getIndex.apply(this,arguments))},
  //	getType:function(uri,localName){}
  //	getType:function(i){},
};
function ll(e, r) {
  var t, i = [], o = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
  for (o.lastIndex = r, o.exec(e); t = o.exec(e); )
    if (i.push(t), t[1])
      return i;
}
za.XMLReader = au;
za.ParseError = ft;
var cl = Sr, fl = Tr, Vi = nu, uu = za, pl = fl.DOMImplementation, Zi = cl.NAMESPACE, dl = uu.ParseError, hl = uu.XMLReader;
function su(e) {
  return e.replace(/\r[\n\u0085]/g, `
`).replace(/[\r\u0085\u2028]/g, `
`);
}
function lu(e) {
  this.options = e || { locator: {} };
}
lu.prototype.parseFromString = function(e, r) {
  var t = this.options, i = new hl(), o = t.domBuilder || new Vt(), s = t.errorHandler, l = t.locator, m = t.xmlns || {}, y = /\/x?html?$/.test(r), d = y ? Vi.HTML_ENTITIES : Vi.XML_ENTITIES;
  l && o.setDocumentLocator(l), i.errorHandler = ml(s, o, l), i.domBuilder = t.domBuilder || o, y && (m[""] = Zi.HTML), m.xml = m.xml || Zi.XML;
  var c = t.normalizeLineEndings || su;
  return e && typeof e == "string" ? i.parse(
    c(e),
    m,
    d
  ) : i.errorHandler.error("invalid doc source"), o.doc;
};
function ml(e, r, t) {
  if (!e) {
    if (r instanceof Vt)
      return r;
    e = r;
  }
  var i = {}, o = e instanceof Function;
  t = t || {};
  function s(l) {
    var m = e[l];
    !m && o && (m = e.length == 2 ? function(y) {
      e(l, y);
    } : e), i[l] = m && function(y) {
      m("[xmldom " + l + "]	" + y + ga(t));
    } || function() {
    };
  }
  return s("warning"), s("error"), s("fatalError"), i;
}
function Vt() {
  this.cdata = !1;
}
function nt(e, r) {
  r.lineNumber = e.lineNumber, r.columnNumber = e.columnNumber;
}
Vt.prototype = {
  startDocument: function() {
    this.doc = new pl().createDocument(null, null, null), this.locator && (this.doc.documentURI = this.locator.systemId);
  },
  startElement: function(e, r, t, i) {
    var o = this.doc, s = o.createElementNS(e, t || r), l = i.length;
    cn(this, s), this.currentElement = s, this.locator && nt(this.locator, s);
    for (var m = 0; m < l; m++) {
      var e = i.getURI(m), y = i.getValue(m), t = i.getQName(m), d = o.createAttributeNS(e, t);
      this.locator && nt(i.getLocator(m), d), d.value = d.nodeValue = y, s.setAttributeNode(d);
    }
  },
  endElement: function(e, r, t) {
    var i = this.currentElement;
    i.tagName, this.currentElement = i.parentNode;
  },
  startPrefixMapping: function(e, r) {
  },
  endPrefixMapping: function(e) {
  },
  processingInstruction: function(e, r) {
    var t = this.doc.createProcessingInstruction(e, r);
    this.locator && nt(this.locator, t), cn(this, t);
  },
  ignorableWhitespace: function(e, r, t) {
  },
  characters: function(e, r, t) {
    if (e = Xi.apply(this, arguments), e) {
      if (this.cdata)
        var i = this.doc.createCDATASection(e);
      else
        var i = this.doc.createTextNode(e);
      this.currentElement ? this.currentElement.appendChild(i) : /^\s*$/.test(e) && this.doc.appendChild(i), this.locator && nt(this.locator, i);
    }
  },
  skippedEntity: function(e) {
  },
  endDocument: function() {
    this.doc.normalize();
  },
  setDocumentLocator: function(e) {
    (this.locator = e) && (e.lineNumber = 0);
  },
  //LexicalHandler
  comment: function(e, r, t) {
    e = Xi.apply(this, arguments);
    var i = this.doc.createComment(e);
    this.locator && nt(this.locator, i), cn(this, i);
  },
  startCDATA: function() {
    this.cdata = !0;
  },
  endCDATA: function() {
    this.cdata = !1;
  },
  startDTD: function(e, r, t) {
    var i = this.doc.implementation;
    if (i && i.createDocumentType) {
      var o = i.createDocumentType(e, r, t);
      this.locator && nt(this.locator, o), cn(this, o), this.doc.doctype = o;
    }
  },
  /**
   * @see org.xml.sax.ErrorHandler
   * @link http://www.saxproject.org/apidoc/org/xml/sax/ErrorHandler.html
   */
  warning: function(e) {
    console.warn("[xmldom warning]	" + e, ga(this.locator));
  },
  error: function(e) {
    console.error("[xmldom error]	" + e, ga(this.locator));
  },
  fatalError: function(e) {
    throw new dl(e, this.locator);
  }
};
function ga(e) {
  if (e)
    return `
@` + (e.systemId || "") + "#[line:" + e.lineNumber + ",col:" + e.columnNumber + "]";
}
function Xi(e, r, t) {
  return typeof e == "string" ? e.substr(r, t) : e.length >= r + t || r ? new java.lang.String(e, r, t) + "" : e;
}
"endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g, function(e) {
  Vt.prototype[e] = function() {
    return null;
  };
});
function cn(e, r) {
  e.currentElement ? e.currentElement.appendChild(r) : e.doc.appendChild(r);
}
Cn.__DOMHandler = Vt;
Cn.normalizeLineEndings = su;
Cn.DOMParser = lu;
var cu = Tr;
En.DOMImplementation = cu.DOMImplementation;
En.XMLSerializer = cu.XMLSerializer;
En.DOMParser = Cn.DOMParser;
function gl(e) {
  return e[e.length - 1];
}
function vl(e) {
  return e[0];
}
var Ma = {
  last: gl,
  first: vl
};
function Ft(e) {
  "@babel/helpers - typeof";
  return Ft = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Ft(e);
}
function Hi(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    r && (i = i.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), t.push.apply(t, i);
  }
  return t;
}
function bl(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Hi(Object(t), !0).forEach(function(i) {
      yl(e, i, t[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Hi(Object(t)).forEach(function(i) {
      Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(t, i));
    });
  }
  return e;
}
function yl(e, r, t) {
  return r = wl(r), r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function wl(e) {
  var r = xl(e, "string");
  return Ft(r) == "symbol" ? r : String(r);
}
function xl(e, r) {
  if (Ft(e) != "object" || !e)
    return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var i = t.call(e, r || "default");
    if (Ft(i) != "object")
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
var fu = Ma, va = fu.last, Pt = fu.first;
function Xr(e) {
  this.name = "GenericError", this.message = e, this.stack = new Error(e).stack;
}
Xr.prototype = Error.prototype;
function $e(e) {
  this.name = "TemplateError", this.message = e, this.stack = new Error(e).stack;
}
$e.prototype = new Xr();
function Rt(e) {
  this.name = "RenderingError", this.message = e, this.stack = new Error(e).stack;
}
Rt.prototype = new Xr();
function Tn(e) {
  this.name = "ScopeParserError", this.message = e, this.stack = new Error(e).stack;
}
Tn.prototype = new Xr();
function Ir(e) {
  this.name = "InternalError", this.properties = {
    explanation: "InternalError"
  }, this.message = e, this.stack = new Error(e).stack;
}
Ir.prototype = new Xr();
function ja(e) {
  this.name = "APIVersionError", this.properties = {
    explanation: "APIVersionError"
  }, this.message = e, this.stack = new Error(e).stack;
}
ja.prototype = new Xr();
function Dl(e, r) {
  var t = new ja(e);
  throw t.properties = bl({
    id: "api_version_error"
  }, r), t;
}
function El(e) {
  var r = new $e("Multi error");
  throw r.properties = {
    errors: e,
    id: "multi_error",
    explanation: "The template has multiple errors"
  }, r;
}
function _l(e) {
  var r = new $e("Unopened tag");
  return r.properties = {
    xtag: va(e.xtag.split(" ")),
    id: "unopened_tag",
    context: e.xtag,
    offset: e.offset,
    lIndex: e.lIndex,
    explanation: 'The tag beginning with "'.concat(e.xtag.substr(0, 10), '" is unopened')
  }, r;
}
function Al(e) {
  var r = new $e("Duplicate open tag, expected one open tag");
  return r.properties = {
    xtag: Pt(e.xtag.split(" ")),
    id: "duplicate_open_tag",
    context: e.xtag,
    offset: e.offset,
    lIndex: e.lIndex,
    explanation: 'The tag beginning with "'.concat(e.xtag.substr(0, 10), '" has duplicate open tags')
  }, r;
}
function Cl(e) {
  var r = new $e("Duplicate close tag, expected one close tag");
  return r.properties = {
    xtag: Pt(e.xtag.split(" ")),
    id: "duplicate_close_tag",
    context: e.xtag,
    offset: e.offset,
    lIndex: e.lIndex,
    explanation: 'The tag ending with "'.concat(e.xtag.substr(0, 10), '" has duplicate close tags')
  }, r;
}
function Tl(e) {
  var r = new $e("Unclosed tag");
  return r.properties = {
    xtag: Pt(e.xtag.split(" ")).substr(1),
    id: "unclosed_tag",
    context: e.xtag,
    offset: e.offset,
    lIndex: e.lIndex,
    explanation: 'The tag beginning with "'.concat(e.xtag.substr(0, 10), '" is unclosed')
  }, r;
}
function Sl(e) {
  var r = new $e('No tag "'.concat(e.element, '" was found at the ').concat(e.position)), t = e.parsed[e.index];
  throw r.properties = {
    id: "no_xml_tag_found_at_".concat(e.position),
    explanation: 'No tag "'.concat(e.element, '" was found at the ').concat(e.position),
    offset: t.offset,
    part: t,
    parsed: e.parsed,
    index: e.index,
    element: e.element
  }, r;
}
function kl(e) {
  var r = e.tag, t = e.value, i = e.offset, o = new Rt("There are some XML corrupt characters");
  return o.properties = {
    id: "invalid_xml_characters",
    xtag: r,
    value: t,
    offset: i,
    explanation: "There are some corrupt characters for the field ".concat(r)
  }, o;
}
function Bl(e) {
  var r = e.tag, t = e.value, i = e.offset, o = new Rt("Non string values are not allowed for rawXML tags");
  return o.properties = {
    id: "invalid_raw_xml_value",
    xtag: r,
    value: t,
    offset: i,
    explanation: "The value of the raw tag : '".concat(r, "' is not a string")
  }, o;
}
function Ol(e) {
  var r = e.part, t = r.value, i = r.offset, o = e.id, s = o === void 0 ? "raw_tag_outerxml_invalid" : o, l = e.message, m = l === void 0 ? "Raw tag not in paragraph" : l, y = e.part, d = e.explanation, c = d === void 0 ? 'The tag "'.concat(t, '" is not inside a paragraph') : d;
  typeof c == "function" && (c = c(y));
  var g = new $e(m);
  throw g.properties = {
    id: s,
    explanation: c,
    rootError: e.rootError,
    xtag: t,
    offset: i,
    postparsed: e.postparsed,
    expandTo: e.expandTo,
    index: e.index
  }, g;
}
function Fl(e) {
  var r = new $e("Raw tag should be the only text in paragraph"), t = e.part.value;
  throw r.properties = {
    id: "raw_xml_tag_should_be_only_text_in_paragraph",
    explanation: 'The raw tag "'.concat(t, '" should be the only text in this paragraph. This means that this tag should not be surrounded by any text or spaces.'),
    xtag: t,
    offset: e.part.offset,
    paragraphParts: e.paragraphParts
  }, r;
}
function Pl(e) {
  var r = e.location, t = e.offset, i = e.square, o = r === "start" ? "unclosed" : "unopened", s = r === "start" ? "Unclosed" : "Unopened", l = new $e("".concat(s, " loop")), m = e.value;
  return l.properties = {
    id: "".concat(o, "_loop"),
    explanation: 'The loop with tag "'.concat(m, '" is ').concat(o),
    xtag: m,
    offset: t
  }, i && (l.properties.square = i), l;
}
function Rl(e, r) {
  var t = new $e("Unbalanced loop tag"), i = r[0].part.value, o = r[1].part.value, s = e[0].part.value, l = e[1].part.value;
  return t.properties = {
    id: "unbalanced_loop_tags",
    explanation: "Unbalanced loop tags {#".concat(i, "}{/").concat(o, "}{#").concat(s, "}{/").concat(l, "}"),
    offset: [r[0].part.offset, e[1].part.offset],
    lastPair: {
      left: r[0].part.value,
      right: r[1].part.value
    },
    pair: {
      left: e[0].part.value,
      right: e[1].part.value
    }
  }, t;
}
function Nl(e) {
  var r = e.tags, t = new $e("Closing tag does not match opening tag");
  return t.properties = {
    id: "closing_tag_does_not_match_opening_tag",
    explanation: 'The tag "'.concat(r[0].value, '" is closed by the tag "').concat(r[1].value, '"'),
    openingtag: Pt(r).value,
    offset: [Pt(r).offset, va(r).offset],
    closingtag: va(r).value
  }, t;
}
function Il(e) {
  var r = e.tag, t = e.rootError, i = e.offset, o = new Tn("Scope parser compilation failed");
  return o.properties = {
    id: "scopeparser_compilation_failed",
    offset: i,
    xtag: r,
    explanation: 'The scope parser for the tag "'.concat(r, '" failed to compile'),
    rootError: t
  }, o;
}
function Ll(e) {
  var r = e.tag, t = e.scope, i = e.error, o = e.offset, s = new Tn("Scope parser execution failed");
  return s.properties = {
    id: "scopeparser_execution_failed",
    explanation: "The scope parser for the tag ".concat(r, " failed to execute"),
    scope: t,
    offset: o,
    xtag: r,
    rootError: i
  }, s;
}
function zl(e) {
  var r = e.tag, t = e.offset, i = new $e('The position of the loop tags "'.concat(r, '" would produce invalid XML'));
  return i.properties = {
    xtag: r,
    id: "loop_position_invalid",
    explanation: 'The tags "'.concat(r, '" are misplaced in the document, for example one of them is in a table and the other one outside the table'),
    offset: t
  }, i;
}
function Ml(e, r) {
  var t = 'Unimplemented tag type "'.concat(e.type, '"');
  e.module && (t += ' "'.concat(e.module, '"'));
  var i = new $e(t);
  throw i.properties = {
    part: e,
    index: r,
    id: "unimplemented_tag_type"
  }, i;
}
function jl() {
  var e = new Ir("Malformed xml");
  throw e.properties = {
    explanation: "The template contains malformed xml",
    id: "malformed_xml"
  }, e;
}
function Ul() {
  var e = new Ir("You must run `.compile()` before running `.resolveData()`");
  throw e.properties = {
    id: "resolve_before_compile",
    explanation: "You must run `.compile()` before running `.resolveData()`"
  }, e;
}
function ql() {
  var e = new Ir("You should not call .render on a document that had compilation errors");
  throw e.properties = {
    id: "render_on_invalid_template",
    explanation: "You should not call .render on a document that had compilation errors"
  }, e;
}
function $l() {
  var e = new Ir("You should not call .render twice on the same docxtemplater instance");
  throw e.properties = {
    id: "render_twice",
    explanation: "You should not call .render twice on the same docxtemplater instance"
  }, e;
}
function Vl() {
  var e = new Ir("The filetype for this file could not be identified, is this file corrupted ?");
  throw e.properties = {
    id: "filetype_not_identified",
    explanation: "The filetype for this file could not be identified, is this file corrupted ?"
  }, e;
}
function Zl(e, r) {
  var t = new $e("An XML file has invalid xml");
  throw t.properties = {
    id: "file_has_invalid_xml",
    content: e,
    offset: r,
    explanation: "The docx contains invalid XML, it is most likely corrupt"
  }, t;
}
function Xl(e) {
  var r = new Ir('The filetype "'.concat(e, '" is not handled by docxtemplater'));
  throw r.properties = {
    id: "filetype_not_handled",
    explanation: 'The file you are trying to generate is of type "'.concat(e, '", but only docx and pptx formats are handled'),
    fileType: e
  }, r;
}
var ir = {
  XTError: Xr,
  XTTemplateError: $e,
  XTInternalError: Ir,
  XTScopeParserError: Tn,
  XTAPIVersionError: ja,
  // Remove this alias in v4
  RenderingError: Rt,
  XTRenderingError: Rt,
  getClosingTagNotMatchOpeningTag: Nl,
  getLoopPositionProducesInvalidXMLError: zl,
  getScopeCompilationError: Il,
  getScopeParserExecutionError: Ll,
  getUnclosedTagException: Tl,
  getUnopenedTagException: _l,
  getUnmatchedLoopException: Pl,
  getDuplicateCloseTagException: Cl,
  getDuplicateOpenTagException: Al,
  getCorruptCharactersException: kl,
  getInvalidRawXMLValueException: Bl,
  getUnbalancedLoopException: Rl,
  throwApiVersionError: Dl,
  throwFileTypeNotHandled: Xl,
  throwFileTypeNotIdentified: Vl,
  throwMalformedXml: jl,
  throwMultiError: El,
  throwExpandNotFound: Ol,
  throwRawTagShouldBeOnlyTextInParagraph: Fl,
  throwUnimplementedTagType: Ml,
  throwXmlTagNotFound: Sl,
  throwXmlInvalid: Zl,
  throwResolveBeforeCompile: Ul,
  throwRenderInvalidTemplate: ql,
  throwRenderTwice: $l
};
function Hl(e, r) {
  return Kl(e) || Yl(e, r) || Wl(e, r) || Gl();
}
function Gl() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Wl(e, r) {
  if (e) {
    if (typeof e == "string")
      return Gi(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set")
      return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return Gi(e, r);
  }
}
function Gi(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, i = new Array(r); t < r; t++)
    i[t] = e[t];
  return i;
}
function Yl(e, r) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var i, o, s, l, m = [], y = !0, d = !1;
    try {
      if (s = (t = t.call(e)).next, r === 0) {
        if (Object(t) !== t)
          return;
        y = !1;
      } else
        for (; !(y = (i = s.call(t)).done) && (m.push(i.value), m.length !== r); y = !0)
          ;
    } catch (c) {
      d = !0, o = c;
    } finally {
      try {
        if (!y && t.return != null && (l = t.return(), Object(l) !== l))
          return;
      } finally {
        if (d)
          throw o;
      }
    }
    return m;
  }
}
function Kl(e) {
  if (Array.isArray(e))
    return e;
}
var pu = En, Jl = pu.DOMParser, Ql = pu.XMLSerializer, ec = ir, du = ec.throwXmlTagNotFound, hu = Ma, mu = hu.last, rc = hu.first;
function tc(e) {
  return /^[ \n\r\t]+$/.test(e);
}
function nc(e) {
  return {
    get: function(t) {
      return e === "." ? t : t && t[e];
    }
  };
}
var Zn = {};
function ac(e, r, t) {
  var i;
  if (Zn[r] ? i = Zn[r] : (i = new RegExp("(<.* ".concat(r, '=")([^"]*)(".*)$')), Zn[r] = i), i.test(e))
    return e.replace(i, "$1".concat(t, "$3"));
  var o = e.lastIndexOf("/>");
  return o === -1 && (o = e.lastIndexOf(">")), e.substr(0, o) + " ".concat(r, '="').concat(t, '"') + e.substr(o);
}
function ic(e, r) {
  var t = e.indexOf(" ".concat(r, '="'));
  if (t === -1)
    return null;
  var i = e.substr(t).search(/["']/) + t, o = e.substr(i + 1).search(/["']/) + i;
  return e.substr(i + 1, o - i);
}
function oc(e, r) {
  return e.indexOf(r, e.length - r.length) !== -1;
}
function uc(e, r) {
  return e.substring(0, r.length) === r;
}
function sc(e) {
  for (var r = [], t = {}, i = [], o = 0, s = e.length; o < s; ++o)
    t[e[o]] ? r.push(e[o]) : (t[e[o]] = !0, i.push(e[o]));
  return r;
}
function lc(e) {
  for (var r = {}, t = [], i = 0, o = e.length; i < o; ++i)
    r[e[i]] || (r[e[i]] = !0, t.push(e[i]));
  return t;
}
function cc(e, r) {
  return e.reduce(function(t, i) {
    var o = mu(t), s = r(i);
    return s === "start" ? t.push([i]) : s === "end" ? (o.push(i), t.push([])) : o.push(i), t;
  }, [[]]).filter(function(t) {
    return t.length > 0;
  });
}
var fc = {
  errorLogging: "json",
  paragraphLoop: !1,
  nullGetter: function(r) {
    return r.module ? "" : "undefined";
  },
  xmlFileNames: ["[Content_Types].xml"],
  parser: nc,
  linebreaks: !1,
  fileTypeConfig: null,
  delimiters: {
    start: "{",
    end: "}"
  },
  syntax: {}
};
function pc(e) {
  var r = new Ql();
  return r.serializeToString(e).replace(/xmlns(:[a-z0-9]+)?="" ?/g, "");
}
function dc(e) {
  return e.charCodeAt(0) === 65279 && (e = e.substr(1)), new Jl().parseFromString(e, "text/xml");
}
var gu = [["&", "&amp;"], ["<", "&lt;"], [">", "&gt;"], ['"', "&quot;"], ["'", "&apos;"]], Nt = gu.map(function(e) {
  var r = Hl(e, 2), t = r[0], i = r[1];
  return {
    rstart: new RegExp(i, "g"),
    rend: new RegExp(t, "g"),
    start: i,
    end: t
  };
});
function hc(e) {
  for (var r, t = Nt.length - 1; t >= 0; t--)
    r = Nt[t], e = e.replace(r.rstart, r.end);
  return e;
}
function mc(e) {
  e = e.toString();
  for (var r, t = 0, i = Nt.length; t < i; t++)
    r = Nt[t], e = e.replace(r.rend, r.start);
  return e;
}
function gc(e) {
  for (var r = [], t = 0; t < e.length; t++)
    for (var i = e[t], o = 0, s = i.length; o < s; o++)
      r.push(i[o]);
  return r;
}
var vc = new RegExp(String.fromCharCode(160), "g");
function bc(e) {
  return e.replace(vc, " ");
}
function yc(e, r) {
  for (var t = [], i; (i = e.exec(r)) != null; )
    t.push({
      array: i,
      offset: i.index
    });
  return t;
}
function Ua(e, r) {
  return e === "</" + r + ">";
}
function qa(e, r) {
  return e.indexOf("<" + r) === 0 && [">", " ", "/"].indexOf(e[r.length + 1]) !== -1;
}
function wc(e, r, t) {
  var i = vu(e, r, t);
  if (i !== null)
    return i;
  du({
    position: "right",
    element: r,
    parsed: e,
    index: t
  });
}
function vu(e, r, t) {
  typeof r == "string" && (r = [r]);
  for (var i = 1, o = t, s = e.length; o < s; o++)
    for (var l = e[o], m = 0, y = r.length; m < y; m++) {
      var d = r[m];
      if (Ua(l.value, d) && i--, qa(l.value, d) && i++, i === 0)
        return o;
    }
  return null;
}
function xc(e, r, t) {
  var i = bu(e, r, t);
  if (i !== null)
    return i;
  du({
    position: "left",
    element: r,
    parsed: e,
    index: t
  });
}
function bu(e, r, t) {
  typeof r == "string" && (r = [r]);
  for (var i = 1, o = t; o >= 0; o--)
    for (var s = e[o], l = 0, m = r.length; l < m; l++) {
      var y = r[l];
      if (qa(s.value, y) && i--, Ua(s.value, y) && i++, i === 0)
        return o;
    }
  return null;
}
function Dc(e, r) {
  var t = r.type, i = r.tag, o = r.position;
  return t === "tag" && i === e && (o === "start" || o === "selfclosing");
}
function Wi(e, r) {
  var t = r.type, i = r.tag, o = r.position;
  return t === "tag" && i === e && o === "start";
}
function ba(e, r) {
  var t = r.type, i = r.tag, o = r.position;
  return t === "tag" && i === e && o === "end";
}
function Ec(e) {
  return Wi("w:p", e) || Wi("a:p", e);
}
function _c(e) {
  return ba("w:p", e) || ba("a:p", e);
}
function Ac(e) {
  var r = e.type, t = e.position, i = e.text;
  return r === "tag" && t === "start" && i;
}
function Cc(e) {
  var r = e.type, t = e.position, i = e.text;
  return r === "tag" && t === "end" && i;
}
function Tc(e) {
  var r = e.type, t = e.position;
  return r === "placeholder" || r === "content" && t === "insidetag";
}
function Sc(e, r) {
  var t = e.module, i = e.type;
  return r instanceof Array || (r = [r]), i === "placeholder" && r.indexOf(t) !== -1;
}
var kc = /[\x00-\x08\x0B\x0C\x0E-\x1F]/;
function Bc(e) {
  return kc.test(e);
}
function Oc(e) {
  return Object.keys(e).reduce(function(r, t) {
    var i = e[t];
    return r[i] = r[i] || [], r[i].push(t), r;
  }, {});
}
function Fc(e, r) {
  return e.map(function(t, i) {
    return {
      item: t,
      index: i
    };
  }).sort(function(t, i) {
    return r(t.item, i.item) || t.index - i.index;
  }).map(function(t) {
    var i = t.item;
    return i;
  });
}
var or = {
  endsWith: oc,
  startsWith: uc,
  isContent: Tc,
  isParagraphStart: Ec,
  isParagraphEnd: _c,
  isTagStart: Dc,
  isTagEnd: ba,
  isTextStart: Ac,
  isTextEnd: Cc,
  isStarting: qa,
  isEnding: Ua,
  isModule: Sc,
  uniq: lc,
  getDuplicates: sc,
  chunkBy: cc,
  last: mu,
  first: rc,
  xml2str: pc,
  str2xml: dc,
  getRightOrNull: vu,
  getRight: wc,
  getLeftOrNull: bu,
  getLeft: xc,
  pregMatchAll: yc,
  convertSpaces: bc,
  charMapRegexes: Nt,
  hasCorruptCharacters: Bc,
  defaults: fc,
  wordToUtf8: hc,
  utf8ToWord: mc,
  concatArrays: gc,
  invertMap: Oc,
  charMap: gu,
  getSingleAttribute: ic,
  setSingleAttribute: ac,
  isWhiteSpace: tc,
  stableSort: Fc
};
function It(e) {
  "@babel/helpers - typeof";
  return It = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, It(e);
}
function Pc(e) {
  return Ic(e) || Nc(e) || wu(e) || Rc();
}
function Rc() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Nc(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function Ic(e) {
  if (Array.isArray(e))
    return ya(e);
}
function yu(e, r) {
  return Mc(e) || zc(e, r) || wu(e, r) || Lc();
}
function Lc() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function wu(e, r) {
  if (e) {
    if (typeof e == "string")
      return ya(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set")
      return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return ya(e, r);
  }
}
function ya(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, i = new Array(r); t < r; t++)
    i[t] = e[t];
  return i;
}
function zc(e, r) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var i, o, s, l, m = [], y = !0, d = !1;
    try {
      if (s = (t = t.call(e)).next, r === 0) {
        if (Object(t) !== t)
          return;
        y = !1;
      } else
        for (; !(y = (i = s.call(t)).done) && (m.push(i.value), m.length !== r); y = !0)
          ;
    } catch (c) {
      d = !0, o = c;
    } finally {
      try {
        if (!y && t.return != null && (l = t.return(), Object(l) !== l))
          return;
      } finally {
        if (d)
          throw o;
      }
    }
    return m;
  }
}
function Mc(e) {
  if (Array.isArray(e))
    return e;
}
function Yi(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    r && (i = i.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), t.push.apply(t, i);
  }
  return t;
}
function jc(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Yi(Object(t), !0).forEach(function(i) {
      Uc(e, i, t[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Yi(Object(t)).forEach(function(i) {
      Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(t, i));
    });
  }
  return e;
}
function Uc(e, r, t) {
  return r = qc(r), r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function qc(e) {
  var r = $c(e, "string");
  return It(r) == "symbol" ? r : String(r);
}
function $c(e, r) {
  if (It(e) != "object" || !e)
    return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var i = t.call(e, r || "default");
    if (It(i) != "object")
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
var yr = or, Vc = yr.getRightOrNull, Zc = yr.getRight, Xc = yr.getLeft, Hc = yr.getLeftOrNull, Gc = yr.chunkBy, Wc = yr.isTagStart, Yc = yr.isTagEnd, Ki = yr.isContent, wa = yr.last, Xn = yr.first, $a = ir, xa = $a.XTTemplateError, Kc = $a.throwExpandNotFound, Jc = $a.getLoopPositionProducesInvalidXMLError;
function Qc(e, r) {
  if (e.length === 0)
    return !1;
  var t = wa(e).substr(1);
  return t.indexOf(r) === 0;
}
function ef(e) {
  for (var r = [], t = 0; t < e.length; t++) {
    var i = e[t], o = i.position, s = i.value, l = i.tag;
    l && (o === "end" ? Qc(r, l) ? r.pop() : r.push(s) : o === "start" && r.push(s));
  }
  return r;
}
function rf(e, r) {
  for (var t = 0; t < r.length; t++) {
    var i = r[t];
    if (i.indexOf("<".concat(e)) === 0)
      return !0;
  }
  return !1;
}
function tf(e, r, t) {
  var i = e.slice(r[0].offset, r[1].offset), o = ef(i), s = o.filter(function(g) {
    return g[1] === "/";
  }).length, l = o.filter(function(g) {
    return g[1] !== "/" && g[g.length - 2] !== "/";
  }).length;
  if (s !== l)
    return {
      error: Jc({
        tag: Xn(r).part.value,
        offset: [Xn(r).part.offset, wa(r).part.offset]
      })
    };
  for (var m = function() {
    var v = t[d], x = v.contains, U = v.expand, w = v.onlyTextInTag;
    if (rf(x, o)) {
      if (w) {
        var _ = Hc(e, x, r[0].offset), D = Vc(e, x, r[1].offset);
        if (_ === null || D === null)
          return 0;
        var k = Gc(e.slice(_, D), function(A) {
          return Wc(x, A) ? "start" : Yc(x, A) ? "end" : null;
        }), O = Xn(k), T = wa(k), F = O.filter(Ki), L = T.filter(Ki);
        if (F.length !== 1 || L.length !== 1)
          return 0;
      }
      return {
        v: {
          value: U
        }
      };
    }
  }, y, d = 0, c = t.length; d < c; d++)
    if (y = m(), y !== 0 && y)
      return y.v;
  return {};
}
function nf(e, r, t, i) {
  var o = e.expandTo || i.expandTo;
  if (o) {
    var s, l;
    try {
      l = Xc(t, o, r), s = Zc(t, o, r);
    } catch (m) {
      throw m instanceof xa && Kc(jc({
        part: e,
        rootError: m,
        postparsed: t,
        expandTo: o,
        index: r
      }, i.error)), m;
    }
    return [l, s];
  }
}
function af(e, r, t, i) {
  var o = yu(e, 2), s = o[0], l = o[1], m = t.indexOf(r), y = t.slice(s, m), d = t.slice(m + 1, l + 1), c = i.getInner({
    postparse: i.postparse,
    index: m,
    part: r,
    leftParts: y,
    rightParts: d,
    left: s,
    right: l,
    postparsed: t
  });
  return c.length || (c.expanded = [y, d], c = [c]), {
    left: s,
    right: l,
    inner: c
  };
}
function of(e, r) {
  var t = [];
  e.errors && (t = e.errors, e = e.postparsed);
  for (var i = [], o = 0, s = e.length; o < s; o++) {
    var l = e[o];
    if (l.type === "placeholder" && l.module === r.moduleName && // The part.subparsed check is used to fix this github issue :
    // https://github.com/open-xml-templating/docxtemplater/issues/671
    !l.subparsed)
      try {
        var m = nf(l, o, e, r);
        if (!m)
          continue;
        var y = yu(m, 2), d = y[0], c = y[1];
        i.push({
          left: d,
          right: c,
          part: l,
          i: o,
          leftPart: e[d],
          rightPart: e[c]
        });
      } catch (x) {
        if (x instanceof xa)
          t.push(x);
        else
          throw x;
      }
  }
  i.sort(function(x, U) {
    return x.left === U.left ? U.part.lIndex < x.part.lIndex ? 1 : -1 : U.left < x.left ? 1 : -1;
  });
  var g = -1, v = 0;
  return i.forEach(function(x, U) {
    var w;
    if (g = Math.max(g, U > 0 ? i[U - 1].right : 0), !(x.left < g)) {
      var _;
      try {
        _ = af([x.left + v, x.right + v], x.part, e, r);
      } catch (D) {
        if (D instanceof xa)
          t.push(D);
        else
          throw D;
      }
      _ && (v += _.inner.length - (_.right + 1 - _.left), (w = e).splice.apply(w, [_.left, _.right + 1 - _.left].concat(Pc(_.inner))));
    }
  }), {
    postparsed: e,
    errors: t
  };
}
var Va = {
  expandToOne: of,
  getExpandToDefault: tf
}, uf = ir, sf = uf.XTInternalError;
function Er() {
}
function at(e) {
  return e;
}
var Hr = function(e) {
  var r = {
    set: Er,
    matchers: function() {
      return [];
    },
    parse: Er,
    render: Er,
    getTraits: Er,
    getFileType: Er,
    nullGetter: Er,
    optionsTransformer: at,
    postrender: at,
    errorsTransformer: at,
    getRenderedMap: at,
    preparse: at,
    postparse: at,
    on: Er,
    resolve: Er,
    preResolve: Er
  };
  if (Object.keys(r).every(function(i) {
    return !e[i];
  })) {
    var t = new sf("This module cannot be wrapped, because it doesn't define any of the necessary functions");
    throw t.properties = {
      id: "module_cannot_be_wrapped",
      explanation: "This module cannot be wrapped, because it doesn't define any of the necessary functions"
    }, t;
  }
  return Object.keys(r).forEach(function(i) {
    e[i] = e[i] || r[i];
  }), e;
};
function Lt(e) {
  "@babel/helpers - typeof";
  return Lt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Lt(e);
}
function lf(e, r) {
  if (!(e instanceof r))
    throw new TypeError("Cannot call a class as a function");
}
function Ji(e, r) {
  for (var t = 0; t < r.length; t++) {
    var i = r[t];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, ff(i.key), i);
  }
}
function cf(e, r, t) {
  return r && Ji(e.prototype, r), t && Ji(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function ff(e) {
  var r = pf(e, "string");
  return Lt(r) == "symbol" ? r : String(r);
}
function pf(e, r) {
  if (Lt(e) != "object" || !e)
    return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var i = t.call(e, r || "default");
    if (Lt(i) != "object")
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
var df = ir, xu = df.getScopeParserExecutionError, hf = Ma, Qi = hf.last, mf = or, it = mf.concatArrays;
function eo(e, r) {
  for (var t = e.length >>> 0, i, o = 0; o < t; o++)
    if (i = e[o], r.call(this, i, o, e))
      return i;
}
function Du(e, r, t) {
  var i = this, o = this.scopeList[t];
  if (this.root.finishedResolving) {
    for (var s = this.resolved, l = function() {
      var v = i.scopeLindex[m];
      s = eo(s, function(x) {
        return x.lIndex === v;
      }), s = s.value[i.scopePathItem[m]];
    }, m = this.resolveOffset, y = this.scopePath.length; m < y; m++)
      l();
    return eo(s, function(g) {
      return r.part.lIndex === g.lIndex;
    }).value;
  }
  var d, c;
  !this.cachedParsers || !r.part ? c = this.parser(e, {
    tag: r.part,
    scopePath: this.scopePath
  }) : this.cachedParsers[r.part.lIndex] ? c = this.cachedParsers[r.part.lIndex] : c = this.cachedParsers[r.part.lIndex] = this.parser(e, {
    tag: r.part,
    scopePath: this.scopePath
  });
  try {
    d = c.get(o, this.getContext(r, t));
  } catch (g) {
    throw xu({
      tag: e,
      scope: o,
      error: g,
      offset: r.part.offset
    });
  }
  return d == null && t > 0 ? Du.call(this, e, r, t - 1) : d;
}
function Eu(e, r, t) {
  var i = this, o = this.scopeList[t], s;
  return !this.cachedParsers || !r.part ? s = this.parser(e, {
    tag: r.part,
    scopePath: this.scopePath
  }) : this.cachedParsers[r.part.lIndex] ? s = this.cachedParsers[r.part.lIndex] : s = this.cachedParsers[r.part.lIndex] = this.parser(e, {
    tag: r.part,
    scopePath: this.scopePath
  }), Promise.resolve().then(function() {
    return s.get(o, i.getContext(r, t));
  }).catch(function(l) {
    throw xu({
      tag: e,
      scope: o,
      error: l,
      offset: r.part.offset
    });
  }).then(function(l) {
    return l == null && t > 0 ? Eu.call(i, e, r, t - 1) : l;
  });
}
var gf = /* @__PURE__ */ function() {
  function e(r) {
    lf(this, e), this.root = r.root || this, this.resolveOffset = r.resolveOffset || 0, this.scopePath = r.scopePath, this.scopePathItem = r.scopePathItem, this.scopePathLength = r.scopePathLength, this.scopeList = r.scopeList, this.scopeType = "", this.scopeTypes = r.scopeTypes, this.scopeLindex = r.scopeLindex, this.parser = r.parser, this.resolved = r.resolved, this.cachedParsers = r.cachedParsers;
  }
  return cf(e, [{
    key: "loopOver",
    value: function(t, i, o, s) {
      return this.loopOverValue(this.getValue(t, s), i, o);
    }
  }, {
    key: "functorIfInverted",
    value: function(t, i, o, s, l) {
      return t && i(o, s, l), t;
    }
  }, {
    key: "isValueFalsy",
    value: function(t, i) {
      return t == null || !t || i === "[object Array]" && t.length === 0;
    }
  }, {
    key: "loopOverValue",
    value: function(t, i, o) {
      this.root.finishedResolving && (o = !1);
      var s = Object.prototype.toString.call(t);
      if (this.isValueFalsy(t, s))
        return this.scopeType = !1, this.functorIfInverted(o, i, Qi(this.scopeList), 0, 1);
      if (s === "[object Array]") {
        this.scopeType = "array";
        for (var l = 0; l < t.length; l++)
          this.functorIfInverted(!o, i, t[l], l, t.length);
        return !0;
      }
      return s === "[object Object]" ? (this.scopeType = "object", this.functorIfInverted(!o, i, t, 0, 1)) : this.functorIfInverted(!o, i, Qi(this.scopeList), 0, 1);
    }
  }, {
    key: "getValue",
    value: function(t, i) {
      var o = Du.call(this, t, i, this.scopeList.length - 1);
      return typeof o == "function" ? o(this.scopeList[this.scopeList.length - 1], this) : o;
    }
  }, {
    key: "getValueAsync",
    value: function(t, i) {
      var o = this;
      return Eu.call(this, t, i, this.scopeList.length - 1).then(function(s) {
        return typeof s == "function" ? s(o.scopeList[o.scopeList.length - 1], o) : s;
      });
    }
  }, {
    key: "getContext",
    value: function(t, i) {
      return {
        num: i,
        meta: t,
        scopeList: this.scopeList,
        resolved: this.resolved,
        scopePath: this.scopePath,
        scopeTypes: this.scopeTypes,
        scopePathItem: this.scopePathItem,
        scopePathLength: this.scopePathLength
      };
    }
  }, {
    key: "createSubScopeManager",
    value: function(t, i, o, s, l) {
      return new e({
        root: this.root,
        resolveOffset: this.resolveOffset,
        resolved: this.resolved,
        parser: this.parser,
        cachedParsers: this.cachedParsers,
        scopeTypes: it([this.scopeTypes, [this.scopeType]]),
        scopeList: it([this.scopeList, [t]]),
        scopePath: it([this.scopePath, [i]]),
        scopePathItem: it([this.scopePathItem, [o]]),
        scopePathLength: it([this.scopePathLength, [l]]),
        scopeLindex: it([this.scopeLindex, [s.lIndex]])
      });
    }
  }]), e;
}(), vf = function(e) {
  return e.scopePath = [], e.scopePathItem = [], e.scopePathLength = [], e.scopeTypes = [], e.scopeLindex = [], e.scopeList = [e.tags], new gf(e);
};
function bf(e, r) {
  return r instanceof Error ? Object.getOwnPropertyNames(r).concat("stack").reduce(function(t, i) {
    return t[i] = r[i], i === "stack" && (t[i] = r[i].toString()), t;
  }, {}) : r;
}
function yf(e, r) {
  if (console.log(JSON.stringify({
    error: e
  }, bf, r === "json" ? 2 : null)), e.properties && e.properties.errors instanceof Array) {
    var t = e.properties.errors.map(function(i) {
      return i.properties.explanation;
    }).join(`
`);
    console.log("errorMessages", t);
  }
}
var wf = yf, xf = "[Content_Types].xml";
function Df(e, r, t) {
  for (var i = {}, o = 0, s = e.length; o < s; o++) {
    var l = e[o], m = l.getAttribute("ContentType"), y = l.getAttribute("PartName").substr(1);
    i[y] = m;
  }
  for (var d = function() {
    var x = r[c], U = x.getAttribute("ContentType"), w = x.getAttribute("Extension");
    t.file(/./).map(function(_) {
      var D = _.name;
      D.slice(D.length - w.length) === w && !i[D] && D !== xf && (i[D] = U);
    });
  }, c = 0, g = r.length; c < g; c++)
    d();
  return i;
}
var Ef = Df, _f = "application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml", Af = "application/vnd.ms-word.document.macroEnabled.main+xml", Cf = "application/vnd.openxmlformats-officedocument.wordprocessingml.template.main+xml", Tf = "application/vnd.ms-word.template.macroEnabledTemplate.main+xml", Sf = "application/vnd.openxmlformats-officedocument.wordprocessingml.header+xml", kf = "application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml", Bf = "application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml", Of = "application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml", Ff = "application/vnd.openxmlformats-officedocument.presentationml.slide+xml", Pf = "application/vnd.openxmlformats-officedocument.presentationml.slideMaster+xml", Rf = "application/vnd.openxmlformats-officedocument.presentationml.slideLayout+xml", Nf = "application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml", ro = [_f, Af, Cf, Tf], If = {
  main: ro,
  docx: [Sf].concat(ro, [Of, kf, Bf]),
  pptx: [Ff, Pf, Rf, Nf]
}, Za = If, Lf = "application/vnd.openxmlformats-package.core-properties+xml", zf = "application/vnd.openxmlformats-officedocument.extended-properties+xml", Mf = "application/vnd.openxmlformats-officedocument.custom-properties+xml", jf = "application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml", _u = {
  settingsContentType: jf,
  coreContentType: Lf,
  appContentType: zf,
  customContentType: Mf
};
function zt(e) {
  "@babel/helpers - typeof";
  return zt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, zt(e);
}
function Uf(e, r) {
  if (!(e instanceof r))
    throw new TypeError("Cannot call a class as a function");
}
function to(e, r) {
  for (var t = 0; t < r.length; t++) {
    var i = r[t];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, $f(i.key), i);
  }
}
function qf(e, r, t) {
  return r && to(e.prototype, r), t && to(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function $f(e) {
  var r = Vf(e, "string");
  return zt(r) == "symbol" ? r : String(r);
}
function Vf(e, r) {
  if (zt(e) != "object" || !e)
    return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var i = t.call(e, r || "default");
    if (zt(i) != "object")
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
var Zf = Hr, Hn = Za, Sn = _u, Xf = Sn.settingsContentType, Hf = Sn.coreContentType, Gf = Sn.appContentType, Wf = Sn.customContentType, no = [Xf, Hf, Gf, Wf], Yf = /* @__PURE__ */ function() {
  function e() {
    Uf(this, e), this.name = "Common";
  }
  return qf(e, [{
    key: "getFileType",
    value: function(t) {
      var i = t.doc, o = i.invertedContentTypes;
      if (o) {
        for (var s = 0, l = no.length; s < l; s++) {
          var m = no[s];
          o[m] && Array.prototype.push.apply(i.targets, o[m]);
        }
        for (var y = ["docx", "pptx"], d, c = 0, g = y.length; c < g; c++) {
          for (var v = Hn[y[c]], x = 0, U = v.length; x < U; x++) {
            var w = v[x];
            if (o[w])
              for (var _ = 0, D = o[w].length; _ < D; _++) {
                var k = o[w][_];
                i.relsTypes[k] && ["http://purl.oclc.org/ooxml/officeDocument/relationships/officeDocument", "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument"].indexOf(i.relsTypes[k]) === -1 || (d = y[c], (Hn.main.indexOf(w) !== -1 || w === Hn.pptx[0]) && (i.textTarget || (i.textTarget = k)), i.targets.push(k));
              }
          }
          if (d)
            return d;
        }
        return d;
      }
    }
  }]), e;
}(), Kf = function() {
  return Zf(new Yf());
};
function Mt(e) {
  "@babel/helpers - typeof";
  return Mt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Mt(e);
}
function Au(e, r) {
  return rp(e) || ep(e, r) || Qf(e, r) || Jf();
}
function Jf() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Qf(e, r) {
  if (e) {
    if (typeof e == "string")
      return ao(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set")
      return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return ao(e, r);
  }
}
function ao(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, i = new Array(r); t < r; t++)
    i[t] = e[t];
  return i;
}
function ep(e, r) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var i, o, s, l, m = [], y = !0, d = !1;
    try {
      if (s = (t = t.call(e)).next, r === 0) {
        if (Object(t) !== t)
          return;
        y = !1;
      } else
        for (; !(y = (i = s.call(t)).done) && (m.push(i.value), m.length !== r); y = !0)
          ;
    } catch (c) {
      d = !0, o = c;
    } finally {
      try {
        if (!y && t.return != null && (l = t.return(), Object(l) !== l))
          return;
      } finally {
        if (d)
          throw o;
      }
    }
    return m;
  }
}
function rp(e) {
  if (Array.isArray(e))
    return e;
}
function io(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    r && (i = i.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), t.push.apply(t, i);
  }
  return t;
}
function Pr(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? io(Object(t), !0).forEach(function(i) {
      tp(e, i, t[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : io(Object(t)).forEach(function(i) {
      Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(t, i));
    });
  }
  return e;
}
function tp(e, r, t) {
  return r = np(r), r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function np(e) {
  var r = ap(e, "string");
  return Mt(r) == "symbol" ? r : String(r);
}
function ap(e, r) {
  if (Mt(e) != "object" || !e)
    return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var i = t.call(e, r || "default");
    if (Mt(i) != "object")
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
var Gr = ir, oo = Gr.getUnclosedTagException, ip = Gr.getUnopenedTagException, op = Gr.getDuplicateOpenTagException, up = Gr.getDuplicateCloseTagException, uo = Gr.throwMalformedXml, sp = Gr.throwXmlInvalid, so = Gr.XTTemplateError, Xa = or, lp = Xa.isTextStart, cp = Xa.isTextEnd, lo = Xa.wordToUtf8, Cu = 0, Tu = 1, Tt = 2, xn = 3;
function fp(e, r) {
  return e[0] <= r.offset && r.offset < e[1];
}
function pp(e, r) {
  return lp(e) ? (r && uo(), !0) : cp(e) ? (r || uo(), !1) : r;
}
function dp(e) {
  var r = "", t = 1, i = e.indexOf(" ");
  return e[e.length - 2] === "/" ? (r = "selfclosing", i === -1 && (i = e.length - 2)) : e[1] === "/" ? (t = 2, r = "end", i === -1 && (i = e.length - 1)) : (r = "start", i === -1 && (i = e.length - 1)), {
    tag: e.slice(t, i),
    position: r
  };
}
function hp(e, r, t) {
  for (var i = 0, o = e.length, s = {}, l = 0, m = r.length; l < m; l++)
    s[r[l]] = !0;
  for (var y = 0, d = t.length; y < d; y++)
    s[t[y]] = !1;
  for (var c = []; i < o && (i = e.indexOf("<", i), i !== -1); ) {
    var g = i, v = e.indexOf("<", i + 1);
    i = e.indexOf(">", i), (i === -1 || v !== -1 && i > v) && sp(e, g);
    var x = e.slice(g, i + 1), U = dp(x), w = U.tag, _ = U.position, D = s[w];
    D != null && c.push({
      type: "tag",
      position: _,
      text: D,
      offset: g,
      value: x,
      tag: w
    });
  }
  return c;
}
function mp(e, r, t) {
  var i = [], o = !1, s = {
    offset: 0
  }, l, m = e.reduce(function(d, c) {
    var g = c.position, v = c.offset, x = s.offset, U = s.length;
    return l = r.substr(x, v - x), o && g === "start" ? x + U === v ? (l = r.substr(x, v - x + U + 4), i.push(op({
      xtag: l,
      offset: x
    })), s = c, d.push(Pr(Pr({}, c), {}, {
      error: !0
    })), d) : (i.push(oo({
      xtag: lo(l),
      offset: x
    })), s = c, d.push(Pr(Pr({}, c), {}, {
      error: !0
    })), d) : !o && g === "end" ? t.allowUnopenedTag ? d : x + U === v ? (l = r.substr(x - 4, v - x + U + 4), i.push(up({
      xtag: l,
      offset: x
    })), s = c, d.push(Pr(Pr({}, c), {}, {
      error: !0
    })), d) : (i.push(ip({
      xtag: l,
      offset: v
    })), s = c, d.push(Pr(Pr({}, c), {}, {
      error: !0
    })), d) : (o = !o, s = c, d.push(c), d);
  }, []);
  if (o) {
    var y = s.offset;
    l = r.substr(y, r.length - y), i.push(oo({
      xtag: lo(l),
      offset: y
    }));
  }
  return {
    delimiterWithErrors: m,
    errors: i
  };
}
function gp(e, r) {
  return e === -1 && r === -1 ? Cu : e === r ? Tu : e === -1 || r === -1 ? r < e ? Tt : xn : e < r ? Tt : xn;
}
function vp(e) {
  var r = e.split(" ");
  if (r.length !== 2) {
    var t = new so("New Delimiters cannot be parsed");
    throw t.properties = {
      id: "change_delimiters_invalid",
      explanation: "Cannot parser delimiters"
    }, t;
  }
  var i = Au(r, 2), o = i[0], s = i[1];
  if (o.length === 0 || s.length === 0) {
    var l = new so("New Delimiters cannot be parsed");
    throw l.properties = {
      id: "change_delimiters_invalid",
      explanation: "Cannot parser delimiters"
    }, l;
  }
  return [o, s];
}
function bp(e, r) {
  for (var t = [], i = r.start, o = r.end, s = -1, l = !1; ; ) {
    var m = e.indexOf(i, s + 1), y = e.indexOf(o, s + 1), d = null, c = void 0, g = gp(m, y);
    switch (g === Tu && (g = l ? xn : Tt), g) {
      case Cu:
        return t;
      case xn:
        l = !1, s = y, d = "end", c = o.length;
        break;
      case Tt:
        l = !0, s = m, d = "start", c = i.length;
        break;
    }
    if (g === Tt && e[s + i.length] === "=") {
      t.push({
        offset: m,
        position: "start",
        length: i.length,
        changedelimiter: !0
      });
      var v = e.indexOf("=", s + i.length + 1), x = e.indexOf(o, v + 1);
      t.push({
        offset: x,
        position: "end",
        length: o.length,
        changedelimiter: !0
      });
      var U = e.substr(s + i.length + 1, v - s - i.length - 1), w = vp(U), _ = Au(w, 2);
      i = _[0], o = _[1], s = x;
      continue;
    }
    t.push({
      offset: s,
      position: d,
      length: c
    });
  }
}
function co(e, r, t) {
  var i = e.map(function(x) {
    return x.value;
  }).join(""), o = bp(i, r), s = 0, l = e.map(function(x) {
    return s += x.value.length, {
      offset: s - x.value.length,
      lIndex: x.lIndex
    };
  }), m = mp(o, i, t), y = m.delimiterWithErrors, d = m.errors, c = 0, g = 0, v = l.map(function(x, U) {
    for (var w = x.offset, _ = [w, w + e[U].value.length], D = e[U].value, k = []; g < y.length && fp(_, y[g]); )
      k.push(y[g]), g++;
    var O = [], T = 0;
    c > 0 && (T = c, c = 0), k.forEach(function(L) {
      var A = D.substr(T, L.offset - w - T);
      if (L.changedelimiter) {
        L.position === "start" ? A.length > 0 && O.push({
          type: "content",
          value: A
        }) : T = L.offset - w + L.length;
        return;
      }
      A.length > 0 && (O.push({
        type: "content",
        value: A
      }), T += A.length);
      var R = {
        type: "delimiter",
        position: L.position,
        offset: T + w
      };
      O.push(R), T = L.offset - w + L.length;
    }), c = T - D.length;
    var F = D.substr(T);
    return F.length > 0 && O.push({
      type: "content",
      value: F
    }), O;
  }, this);
  return {
    parsed: v,
    errors: d
  };
}
function Ha(e) {
  return e.type === "content" && e.position === "insidetag";
}
function yp(e) {
  return e.filter(Ha);
}
function wp(e, r) {
  var t = !1;
  e.forEach(function(i) {
    t = pp(i, t), i.type === "content" && (i.position = t ? "insidetag" : "outsidetag"), r !== "text" && Ha(i) && (i.value = i.value.replace(/>/g, "&gt;"));
  });
}
var Su = {
  parseDelimiters: co,
  parse: function(r, t, i, o) {
    wp(r, o);
    var s = co(yp(r), t, i), l = s.parsed, m = s.errors, y = [], d = 0, c = 0;
    return r.forEach(function(g) {
      Ha(g) ? (Array.prototype.push.apply(y, l[d].map(function(v) {
        return v.type === "content" && (v.position = "insidetag"), v.lIndex = c++, v;
      })), d++) : (g.lIndex = c++, y.push(g));
    }), {
      errors: m,
      lexed: y
    };
  },
  xmlparse: function(r, t) {
    var i = hp(r, t.text, t.other), o = 0, s = i.reduce(function(m, y) {
      var d = r.substr(o, y.offset - o);
      return d.length > 0 && m.push({
        type: "content",
        value: d
      }), o = y.offset + y.value.length, delete y.offset, m.push(y), m;
    }, []), l = r.substr(o);
    return l.length > 0 && s.push({
      type: "content",
      value: l
    }), s;
  }
}, Gn, fo;
function ku() {
  if (fo)
    return Gn;
  fo = 1;
  var e = or, r = e.pregMatchAll;
  return Gn = function(i, o) {
    var s = {
      content: i
    }, l = o.join("|"), m = new RegExp("(?:(<(?:".concat(l, ")[^>]*>)([^<>]*)</(?:").concat(l, ")>)|(<(?:").concat(l, ")[^>]*/>)"), "g");
    return s.matches = r(m, s.content), s;
  }, Gn;
}
var Wn, po;
function xp() {
  if (po)
    return Wn;
  po = 1;
  var e = new RegExp(String.fromCharCode(160), "g");
  function r(s) {
    return s.replace(e, " ");
  }
  function t(s, l) {
    if (typeof s == "string")
      return r(l.substr(0, s.length)) === s;
    if (s instanceof RegExp)
      return s.test(r(l));
  }
  function i(s, l) {
    if (typeof s == "string")
      return r(l).substr(s.length);
    if (s instanceof RegExp)
      return r(l).match(s)[1];
  }
  function o(s, l) {
    if (typeof s == "string")
      return [l, r(l).substr(s.length)];
    if (s instanceof RegExp)
      return r(l).match(s);
  }
  return Wn = {
    match: t,
    getValue: i,
    getValues: o
  }, Wn;
}
var Yn, ho;
function Dp() {
  if (ho)
    return Yn;
  ho = 1;
  function e(S) {
    "@babel/helpers - typeof";
    return e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(B) {
      return typeof B;
    } : function(B) {
      return B && typeof Symbol == "function" && B.constructor === Symbol && B !== Symbol.prototype ? "symbol" : typeof B;
    }, e(S);
  }
  function r(S, B) {
    var V = Object.keys(S);
    if (Object.getOwnPropertySymbols) {
      var Y = Object.getOwnPropertySymbols(S);
      B && (Y = Y.filter(function(ee) {
        return Object.getOwnPropertyDescriptor(S, ee).enumerable;
      })), V.push.apply(V, Y);
    }
    return V;
  }
  function t(S) {
    for (var B = 1; B < arguments.length; B++) {
      var V = arguments[B] != null ? arguments[B] : {};
      B % 2 ? r(Object(V), !0).forEach(function(Y) {
        i(S, Y, V[Y]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(S, Object.getOwnPropertyDescriptors(V)) : r(Object(V)).forEach(function(Y) {
        Object.defineProperty(S, Y, Object.getOwnPropertyDescriptor(V, Y));
      });
    }
    return S;
  }
  function i(S, B, V) {
    return B = o(B), B in S ? Object.defineProperty(S, B, { value: V, enumerable: !0, configurable: !0, writable: !0 }) : S[B] = V, S;
  }
  function o(S) {
    var B = s(S, "string");
    return e(B) == "symbol" ? B : String(B);
  }
  function s(S, B) {
    if (e(S) != "object" || !S)
      return S;
    var V = S[Symbol.toPrimitive];
    if (V !== void 0) {
      var Y = V.call(S, B || "default");
      if (e(Y) != "object")
        return Y;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (B === "string" ? String : Number)(S);
  }
  function l(S, B) {
    return d(S) || y(S, B) || v(S, B) || m();
  }
  function m() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function y(S, B) {
    var V = S == null ? null : typeof Symbol < "u" && S[Symbol.iterator] || S["@@iterator"];
    if (V != null) {
      var Y, ee, te, ne, oe = [], ue = !0, we = !1;
      try {
        if (te = (V = V.call(S)).next, B === 0) {
          if (Object(V) !== V)
            return;
          ue = !1;
        } else
          for (; !(ue = (Y = te.call(V)).done) && (oe.push(Y.value), oe.length !== B); ue = !0)
            ;
      } catch (fe) {
        we = !0, ee = fe;
      } finally {
        try {
          if (!ue && V.return != null && (ne = V.return(), Object(ne) !== ne))
            return;
        } finally {
          if (we)
            throw ee;
        }
      }
      return oe;
    }
  }
  function d(S) {
    if (Array.isArray(S))
      return S;
  }
  function c(S) {
    return U(S) || x(S) || v(S) || g();
  }
  function g() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function v(S, B) {
    if (S) {
      if (typeof S == "string")
        return w(S, B);
      var V = Object.prototype.toString.call(S).slice(8, -1);
      if (V === "Object" && S.constructor && (V = S.constructor.name), V === "Map" || V === "Set")
        return Array.from(S);
      if (V === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(V))
        return w(S, B);
    }
  }
  function x(S) {
    if (typeof Symbol < "u" && S[Symbol.iterator] != null || S["@@iterator"] != null)
      return Array.from(S);
  }
  function U(S) {
    if (Array.isArray(S))
      return w(S);
  }
  function w(S, B) {
    (B == null || B > S.length) && (B = S.length);
    for (var V = 0, Y = new Array(B); V < B; V++)
      Y[V] = S[V];
    return Y;
  }
  var _ = or, D = _.wordToUtf8, k = xp(), O = k.match, T = k.getValue, F = k.getValues;
  function L(S, B) {
    for (var V = [], Y = 0, ee = S.length; Y < ee; Y++) {
      var te = S[Y];
      if (te.matchers) {
        var ne = te.matchers(B);
        if (!(ne instanceof Array))
          throw new Error("module matcher returns a non array");
        V.push.apply(V, c(ne));
      }
    }
    return V;
  }
  function A(S, B, V) {
    for (var Y = [], ee = 0, te = S.length; ee < te; ee++) {
      var ne = S[ee], oe = l(ne, 2), ue = oe[0], we = oe[1], fe = ne[2] || {};
      if (V.match(ue, B)) {
        var ve = V.getValues(ue, B);
        if (typeof fe == "function" && (fe = fe(ve)), !fe.value) {
          var Ee = l(ve, 2);
          fe.value = Ee[1];
        }
        Y.push(t({
          type: "placeholder",
          prefix: ue,
          module: we,
          onMatch: fe.onMatch,
          priority: fe.priority
        }, fe));
      }
    }
    return Y;
  }
  function R(S, B) {
    var V = B.modules, Y = B.startOffset, ee = B.lIndex, te;
    B.offset = Y, B.match = O, B.getValue = T, B.getValues = F;
    var ne = L(V, B), oe = A(ne, S, B);
    if (oe.length > 0) {
      var ue = null;
      return oe.forEach(function(Ee) {
        Ee.priority = Ee.priority || -Ee.value.length, (!ue || Ee.priority > ue.priority) && (ue = Ee);
      }), ue.offset = Y, delete ue.priority, ue.endLindex = ee, ue.lIndex = ee, ue.raw = S, ue.onMatch && ue.onMatch(ue), delete ue.onMatch, delete ue.prefix, ue;
    }
    for (var we = 0, fe = V.length; we < fe; we++) {
      var ve = V[we];
      if (te = ve.parse(S, B), te)
        return te.offset = Y, te.endLindex = ee, te.lIndex = ee, te.raw = S, te;
    }
    return {
      type: "placeholder",
      value: S,
      offset: Y,
      endLindex: ee,
      lIndex: ee
    };
  }
  var q = {
    preparse: function(B, V, Y) {
      function ee(te, ne) {
        return V.forEach(function(oe) {
          oe.preparse(te, ne);
        });
      }
      return {
        preparsed: ee(B, Y)
      };
    },
    parse: function(B, V, Y) {
      var ee = !1, te = "", ne, oe = [], ue = Y.fileTypeConfig.droppedTagsInsidePlaceholder || [];
      return B.reduce(function(fe, ve) {
        return ve.type === "delimiter" ? (ee = ve.position === "start", ve.position === "end" && (Y.parse = function(Ee) {
          return R(Ee, t(t(t({}, Y), ve), {}, {
            startOffset: ne,
            modules: V
          }));
        }, fe.push(Y.parse(D(te))), Array.prototype.push.apply(fe, oe), oe = []), ve.position === "start" && (oe = [], ne = ve.offset), te = "", fe) : ee ? ve.type !== "content" || ve.position !== "insidetag" ? (ue.indexOf(ve.tag) !== -1 || oe.push(ve), fe) : (te += ve.value, fe) : (fe.push(ve), fe);
      }, []);
    },
    postparse: function(B, V, Y) {
      function ee(oe, ue) {
        return V.map(function(we) {
          return we.getTraits(oe, ue);
        });
      }
      var te = [];
      function ne(oe, ue) {
        return V.reduce(function(we, fe) {
          var ve = fe.postparse(we, t(t({}, ue), {}, {
            postparse: function(Qe, ae) {
              return ne(Qe, t(t({}, ue), ae));
            },
            getTraits: ee
          }));
          return ve == null ? we : ve.errors ? (Array.prototype.push.apply(te, ve.errors), ve.postparsed) : ve;
        }, oe);
      }
      return {
        postparsed: ne(B, Y),
        errors: te
      };
    }
  };
  return Yn = q, Yn;
}
var Kn, mo;
function Bu() {
  if (mo)
    return Kn;
  mo = 1;
  function e(r, t) {
    if (r.lIndex == null)
      return null;
    var i = t.scopeManager.scopePathItem;
    r.parentPart && (i = i.slice(0, i.length - 1));
    var o = t.filePath + "@" + r.lIndex.toString() + "-" + i.join("-");
    return o;
  }
  return Kn = e, Kn;
}
var Jn, go;
function Ep() {
  if (go)
    return Jn;
  go = 1;
  function e(v) {
    "@babel/helpers - typeof";
    return e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(x) {
      return typeof x;
    } : function(x) {
      return x && typeof Symbol == "function" && x.constructor === Symbol && x !== Symbol.prototype ? "symbol" : typeof x;
    }, e(v);
  }
  function r(v, x) {
    var U = Object.keys(v);
    if (Object.getOwnPropertySymbols) {
      var w = Object.getOwnPropertySymbols(v);
      x && (w = w.filter(function(_) {
        return Object.getOwnPropertyDescriptor(v, _).enumerable;
      })), U.push.apply(U, w);
    }
    return U;
  }
  function t(v) {
    for (var x = 1; x < arguments.length; x++) {
      var U = arguments[x] != null ? arguments[x] : {};
      x % 2 ? r(Object(U), !0).forEach(function(w) {
        i(v, w, U[w]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(v, Object.getOwnPropertyDescriptors(U)) : r(Object(U)).forEach(function(w) {
        Object.defineProperty(v, w, Object.getOwnPropertyDescriptor(U, w));
      });
    }
    return v;
  }
  function i(v, x, U) {
    return x = o(x), x in v ? Object.defineProperty(v, x, { value: U, enumerable: !0, configurable: !0, writable: !0 }) : v[x] = U, v;
  }
  function o(v) {
    var x = s(v, "string");
    return e(x) == "symbol" ? x : String(x);
  }
  function s(v, x) {
    if (e(v) != "object" || !v)
      return v;
    var U = v[Symbol.toPrimitive];
    if (U !== void 0) {
      var w = U.call(v, x || "default");
      if (e(w) != "object")
        return w;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (x === "string" ? String : Number)(v);
  }
  var l = ir, m = l.throwUnimplementedTagType, y = l.XTScopeParserError, d = Bu();
  function c(v, x) {
    for (var U, w = 0, _ = x.modules.length; w < _; w++) {
      var D = x.modules[w];
      if (U = D.render(v, x), U)
        return U;
    }
    return !1;
  }
  function g(v) {
    var x = v.baseNullGetter, U = v.compiled, w = v.scopeManager;
    v.nullGetter = function(k, O) {
      return x(k, O || w);
    };
    var _ = [], D = U.map(function(k, O) {
      v.index = O;
      var T;
      try {
        T = c(k, t(t({}, v), {}, {
          resolvedId: d(k, v)
        }));
      } catch (F) {
        if (F instanceof y)
          return _.push(F), k;
        throw F;
      }
      if (T)
        return T.errors && Array.prototype.push.apply(_, T.errors), T;
      if (k.type === "content" || k.type === "tag")
        return k;
      m(k, O);
    }).reduce(function(k, O) {
      var T = O.value;
      if (T instanceof Array)
        for (var F = 0, L = T.length; F < L; F++)
          k.push(T[F]);
      else
        T && k.push(T);
      return k;
    }, []);
    return {
      errors: _,
      parts: D
    };
  }
  return Jn = g, Jn;
}
var Qn, vo;
function _p() {
  if (vo)
    return Qn;
  vo = 1;
  function e(t) {
    var i, o, s, l, m = 0, y = t.length;
    for (s = 0; s < y; s++)
      i = t.charCodeAt(s), (i & 64512) === 55296 && s + 1 < y && (o = t.charCodeAt(s + 1), (o & 64512) === 56320 && (i = 65536 + (i - 55296 << 10) + (o - 56320), s++)), m += i < 128 ? 1 : i < 2048 ? 2 : i < 65536 ? 3 : 4;
    var d = new Uint8Array(m);
    for (l = 0, s = 0; l < m; s++)
      i = t.charCodeAt(s), (i & 64512) === 55296 && s + 1 < y && (o = t.charCodeAt(s + 1), (o & 64512) === 56320 && (i = 65536 + (i - 55296 << 10) + (o - 56320), s++)), i < 128 ? d[l++] = i : i < 2048 ? (d[l++] = 192 | i >>> 6, d[l++] = 128 | i & 63) : i < 65536 ? (d[l++] = 224 | i >>> 12, d[l++] = 128 | i >>> 6 & 63, d[l++] = 128 | i & 63) : (d[l++] = 240 | i >>> 18, d[l++] = 128 | i >>> 12 & 63, d[l++] = 128 | i >>> 6 & 63, d[l++] = 128 | i & 63);
    return d;
  }
  function r(t, i) {
    for (var o = 0, s = i.modules.length; o < s; o++) {
      var l = i.modules[o];
      t = l.postrender(t, i);
    }
    for (var m = 0, y = i.joinUncorrupt(t, i), d = "", c = 0, g = 65536, v = [], x = 0, U = y.length; x < U; x++) {
      var w = y[x];
      if (w.length + c > g) {
        var _ = e(d);
        m += _.length, v.push(_), d = "";
      }
      d += w, c += w.length, delete y[x];
    }
    var D = e(d);
    m += D.length, v.push(D);
    var k = new Uint8Array(m), O = 0;
    return v.forEach(function(T) {
      for (var F = 0; F < T.length; ++F)
        k[F + O] = T[F];
      O += T.length;
    }), k;
  }
  return Qn = r, Qn;
}
var ea, bo;
function Ap() {
  if (bo)
    return ea;
  bo = 1;
  function e(w) {
    "@babel/helpers - typeof";
    return e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(_) {
      return typeof _;
    } : function(_) {
      return _ && typeof Symbol == "function" && _.constructor === Symbol && _ !== Symbol.prototype ? "symbol" : typeof _;
    }, e(w);
  }
  function r(w) {
    return s(w) || o(w) || i(w) || t();
  }
  function t() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function i(w, _) {
    if (w) {
      if (typeof w == "string")
        return l(w, _);
      var D = Object.prototype.toString.call(w).slice(8, -1);
      if (D === "Object" && w.constructor && (D = w.constructor.name), D === "Map" || D === "Set")
        return Array.from(w);
      if (D === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(D))
        return l(w, _);
    }
  }
  function o(w) {
    if (typeof Symbol < "u" && w[Symbol.iterator] != null || w["@@iterator"] != null)
      return Array.from(w);
  }
  function s(w) {
    if (Array.isArray(w))
      return l(w);
  }
  function l(w, _) {
    (_ == null || _ > w.length) && (_ = w.length);
    for (var D = 0, k = new Array(_); D < _; D++)
      k[D] = w[D];
    return k;
  }
  function m(w, _) {
    var D = Object.keys(w);
    if (Object.getOwnPropertySymbols) {
      var k = Object.getOwnPropertySymbols(w);
      _ && (k = k.filter(function(O) {
        return Object.getOwnPropertyDescriptor(w, O).enumerable;
      })), D.push.apply(D, k);
    }
    return D;
  }
  function y(w) {
    for (var _ = 1; _ < arguments.length; _++) {
      var D = arguments[_] != null ? arguments[_] : {};
      _ % 2 ? m(Object(D), !0).forEach(function(k) {
        d(w, k, D[k]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(w, Object.getOwnPropertyDescriptors(D)) : m(Object(D)).forEach(function(k) {
        Object.defineProperty(w, k, Object.getOwnPropertyDescriptor(D, k));
      });
    }
    return w;
  }
  function d(w, _, D) {
    return _ = c(_), _ in w ? Object.defineProperty(w, _, { value: D, enumerable: !0, configurable: !0, writable: !0 }) : w[_] = D, w;
  }
  function c(w) {
    var _ = g(w, "string");
    return e(_) == "symbol" ? _ : String(_);
  }
  function g(w, _) {
    if (e(w) != "object" || !w)
      return w;
    var D = w[Symbol.toPrimitive];
    if (D !== void 0) {
      var k = D.call(w, _ || "default");
      if (e(k) != "object")
        return k;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (_ === "string" ? String : Number)(w);
  }
  var v = Bu();
  function x(w, _) {
    for (var D, k = 0, O = _.modules.length; k < O; k++) {
      var T = _.modules[k];
      if (D = T.resolve(w, _), D)
        return D;
    }
    return !1;
  }
  function U(w) {
    var _ = [], D = w.baseNullGetter, k = w.compiled, O = w.scopeManager;
    w.nullGetter = function(F, L) {
      return D(F, L || O);
    }, w.resolved = _;
    var T = [];
    return Promise.all(k.filter(function(F) {
      return ["content", "tag"].indexOf(F.type) === -1;
    }).reduce(function(F, L) {
      w.resolvedId = v(L, w);
      var A = x(L, y(y({}, w), {}, {
        resolvedId: v(L, w)
      })), R;
      if (A)
        R = A.then(function(q) {
          _.push({
            tag: L.value,
            lIndex: L.lIndex,
            value: q
          });
        });
      else if (L.type === "placeholder")
        R = O.getValueAsync(L.value, {
          part: L
        }).then(function(q) {
          return q ?? w.nullGetter(L);
        }).then(function(q) {
          return _.push({
            tag: L.value,
            lIndex: L.lIndex,
            value: q
          }), q;
        });
      else
        return;
      return F.push(R.catch(function(q) {
        q instanceof Array ? T.push.apply(T, r(q)) : T.push(q);
      })), F;
    }, [])).then(function() {
      return {
        errors: T,
        resolved: _
      };
    });
  }
  return ea = U, ea;
}
var ra, yo;
function Cp() {
  if (yo)
    return ra;
  yo = 1;
  var e = or, r = e.startsWith, t = e.endsWith, i = e.isStarting, o = e.isEnding, s = e.isWhiteSpace, l = Za;
  function m(d) {
    for (var c = "", g = 0, v = d.length; g < v; g++) {
      var x = d[g];
      s(x) || (t(c, "</w:tbl>") && !r(x, "<w:p") && !r(x, "<w:tbl") && !r(x, "<w:sectPr") && (x = "<w:p/>".concat(x)), c = x, d[g] = x);
    }
    return d;
  }
  function y(d, c) {
    var g = c.fileTypeConfig.tagShouldContain || [], v = "", x = -1;
    l.docx.indexOf(c.contentType) !== -1 && (d = m(d));
    for (var U = -1, w = 0, _ = d.length; w < _; w++)
      for (var D = d[w], k = 0, O = g.length; k < O; k++) {
        var T = g[k], F = T.tag, L = T.shouldContain, A = T.value, R = T.drop, q = T.dropParent;
        if (x === k) {
          if (o(D, F)) {
            if (x = -1, q) {
              for (var S = void 0, B = void 0, V = U; V > 0; V--)
                if (i(d[V], q)) {
                  S = V;
                  break;
                }
              for (var Y = w; Y < d.length; Y++)
                if (o(d[Y], q)) {
                  B = Y;
                  break;
                }
              for (var ee = S; ee <= B; ee++)
                d[ee] = "";
            } else if (R)
              for (var te = U; te <= w; te++)
                d[te] = "";
            else {
              for (var ne = U; ne < w; ne++)
                d[ne] = "";
              d[w] = v + A + D;
            }
            break;
          }
          v += D;
          for (var oe = 0, ue = L.length; oe < ue; oe++) {
            var we = L[oe];
            if (i(D, we)) {
              x = -1;
              break;
            }
          }
          break;
        }
        if (x === -1 && i(D, F) && // to verify that the part doesn't have multiple tags, such as <w:tc><w:p>
        D.substr(1).indexOf("<") === -1)
          if (D[D.length - 2] === "/") {
            d[w] = "";
            break;
          } else {
            U = w, x = k, v = D;
            break;
          }
      }
    return d;
  }
  return ra = y, ra;
}
var ta, wo;
function Tp() {
  if (wo)
    return ta;
  wo = 1;
  function e(D) {
    "@babel/helpers - typeof";
    return e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(k) {
      return typeof k;
    } : function(k) {
      return k && typeof Symbol == "function" && k.constructor === Symbol && k !== Symbol.prototype ? "symbol" : typeof k;
    }, e(D);
  }
  function r(D, k) {
    if (!(D instanceof k))
      throw new TypeError("Cannot call a class as a function");
  }
  function t(D, k) {
    for (var O = 0; O < k.length; O++) {
      var T = k[O];
      T.enumerable = T.enumerable || !1, T.configurable = !0, "value" in T && (T.writable = !0), Object.defineProperty(D, o(T.key), T);
    }
  }
  function i(D, k, O) {
    return k && t(D.prototype, k), O && t(D, O), Object.defineProperty(D, "prototype", { writable: !1 }), D;
  }
  function o(D) {
    var k = s(D, "string");
    return e(k) == "symbol" ? k : String(k);
  }
  function s(D, k) {
    if (e(D) != "object" || !D)
      return D;
    var O = D[Symbol.toPrimitive];
    if (O !== void 0) {
      var T = O.call(D, k || "default");
      if (e(T) != "object")
        return T;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (k === "string" ? String : Number)(D);
  }
  var l = or, m = l.wordToUtf8, y = l.convertSpaces, d = ku(), c = Su, g = Dp(), v = Ep(), x = _p(), U = Ap(), w = Cp();
  function _(D, k) {
    var O = d(D, k), T = O.matches.map(function(F) {
      return F.array[2];
    });
    return m(y(T.join("")));
  }
  return ta = /* @__PURE__ */ function() {
    function D(k, O) {
      var T = this;
      r(this, D), this.cachedParsers = {}, this.content = k, Object.keys(O).forEach(function(F) {
        T[F] = O[F];
      }), this.setModules({
        inspect: {
          filePath: O.filePath
        }
      });
    }
    return i(D, [{
      key: "resolveTags",
      value: function(O) {
        var T = this;
        this.tags = O;
        var F = this.getOptions(), L = this.filePath;
        F.scopeManager = this.scopeManager, F.resolve = U;
        var A = [];
        return Promise.all(this.modules.map(function(R) {
          return Promise.resolve(R.preResolve(F)).catch(function(q) {
            A.push(q);
          });
        })).then(function() {
          if (A.length !== 0)
            throw A;
          return U(F).then(function(R) {
            var q = R.resolved, S = R.errors;
            if (S = S.map(function(B) {
              return B instanceof Error || (B = new Error(B)), B.properties = B.properties || {}, B.properties.file = L, B;
            }), S.length !== 0)
              throw S;
            return Promise.all(q).then(function(B) {
              return F.scopeManager.root.finishedResolving = !0, F.scopeManager.resolved = B, T.setModules({
                inspect: {
                  resolved: B,
                  filePath: L
                }
              }), B;
            });
          });
        });
      }
    }, {
      key: "getFullText",
      value: function() {
        return _(this.content, this.fileTypeConfig.tagsXmlTextArray);
      }
    }, {
      key: "setModules",
      value: function(O) {
        this.modules.forEach(function(T) {
          T.set(O);
        });
      }
    }, {
      key: "preparse",
      value: function() {
        this.allErrors = [], this.xmllexed = c.xmlparse(this.content, {
          text: this.fileTypeConfig.tagsXmlTextArray,
          other: this.fileTypeConfig.tagsXmlLexedArray
        }), this.setModules({
          inspect: {
            filePath: this.filePath,
            xmllexed: this.xmllexed
          }
        });
        var O = c.parse(this.xmllexed, this.delimiters, this.syntax, this.fileType), T = O.lexed, F = O.errors;
        this.allErrors = this.allErrors.concat(F), this.lexed = T, this.setModules({
          inspect: {
            filePath: this.filePath,
            lexed: this.lexed
          }
        });
        var L = this.getOptions();
        g.preparse(this.lexed, this.modules, L);
      }
    }, {
      key: "parse",
      value: function() {
        this.setModules({
          inspect: {
            filePath: this.filePath
          }
        });
        var O = this.getOptions();
        this.parsed = g.parse(this.lexed, this.modules, O), this.setModules({
          inspect: {
            filePath: this.filePath,
            parsed: this.parsed
          }
        });
        var T = g.postparse(this.parsed, this.modules, O), F = T.postparsed, L = T.errors;
        return this.postparsed = F, this.setModules({
          inspect: {
            filePath: this.filePath,
            postparsed: this.postparsed
          }
        }), this.allErrors = this.allErrors.concat(L), this.errorChecker(this.allErrors), this;
      }
    }, {
      key: "errorChecker",
      value: function(O) {
        var T = this;
        O.forEach(function(F) {
          F.properties = F.properties || {}, F.properties.file = T.filePath;
        }), this.modules.forEach(function(F) {
          O = F.errorsTransformer(O);
        });
      }
    }, {
      key: "baseNullGetter",
      value: function(O, T) {
        var F = this, L = this.modules.reduce(function(A, R) {
          return A ?? R.nullGetter(O, T, F);
        }, null);
        return L ?? this.nullGetter(O, T);
      }
    }, {
      key: "getOptions",
      value: function() {
        return {
          compiled: this.postparsed,
          cachedParsers: this.cachedParsers,
          tags: this.tags,
          modules: this.modules,
          parser: this.parser,
          contentType: this.contentType,
          relsType: this.relsType,
          baseNullGetter: this.baseNullGetter.bind(this),
          filePath: this.filePath,
          fileTypeConfig: this.fileTypeConfig,
          fileType: this.fileType,
          linebreaks: this.linebreaks
        };
      }
    }, {
      key: "render",
      value: function(O) {
        this.filePath = O;
        var T = this.getOptions();
        T.resolved = this.scopeManager.resolved, T.scopeManager = this.scopeManager, T.render = v, T.joinUncorrupt = w;
        var F = v(T), L = F.errors, A = F.parts;
        return L.length > 0 ? (this.allErrors = L, this.errorChecker(L), this) : (this.content = x(A, T), this.setModules({
          inspect: {
            filePath: this.filePath,
            content: this.content
          }
        }), this);
      }
    }]), D;
  }(), ta;
}
var na, xo;
function Sp() {
  if (xo)
    return na;
  xo = 1;
  function e(M) {
    "@babel/helpers - typeof";
    return e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(j) {
      return typeof j;
    } : function(j) {
      return j && typeof Symbol == "function" && j.constructor === Symbol && j !== Symbol.prototype ? "symbol" : typeof j;
    }, e(M);
  }
  function r(M) {
    return o(M) || i(M) || c(M) || t();
  }
  function t() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function i(M) {
    if (typeof Symbol < "u" && M[Symbol.iterator] != null || M["@@iterator"] != null)
      return Array.from(M);
  }
  function o(M) {
    if (Array.isArray(M))
      return g(M);
  }
  function s(M, j) {
    var I = Object.keys(M);
    if (Object.getOwnPropertySymbols) {
      var G = Object.getOwnPropertySymbols(M);
      j && (G = G.filter(function(le) {
        return Object.getOwnPropertyDescriptor(M, le).enumerable;
      })), I.push.apply(I, G);
    }
    return I;
  }
  function l(M) {
    for (var j = 1; j < arguments.length; j++) {
      var I = arguments[j] != null ? arguments[j] : {};
      j % 2 ? s(Object(I), !0).forEach(function(G) {
        m(M, G, I[G]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(M, Object.getOwnPropertyDescriptors(I)) : s(Object(I)).forEach(function(G) {
        Object.defineProperty(M, G, Object.getOwnPropertyDescriptor(I, G));
      });
    }
    return M;
  }
  function m(M, j, I) {
    return j = D(j), j in M ? Object.defineProperty(M, j, { value: I, enumerable: !0, configurable: !0, writable: !0 }) : M[j] = I, M;
  }
  function y(M, j) {
    return x(M) || v(M, j) || c(M, j) || d();
  }
  function d() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function c(M, j) {
    if (M) {
      if (typeof M == "string")
        return g(M, j);
      var I = Object.prototype.toString.call(M).slice(8, -1);
      if (I === "Object" && M.constructor && (I = M.constructor.name), I === "Map" || I === "Set")
        return Array.from(M);
      if (I === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(I))
        return g(M, j);
    }
  }
  function g(M, j) {
    (j == null || j > M.length) && (j = M.length);
    for (var I = 0, G = new Array(j); I < j; I++)
      G[I] = M[I];
    return G;
  }
  function v(M, j) {
    var I = M == null ? null : typeof Symbol < "u" && M[Symbol.iterator] || M["@@iterator"];
    if (I != null) {
      var G, le, Ae, Oe, He = [], Ne = !0, ze = !1;
      try {
        if (Ae = (I = I.call(M)).next, j === 0) {
          if (Object(I) !== I)
            return;
          Ne = !1;
        } else
          for (; !(Ne = (G = Ae.call(I)).done) && (He.push(G.value), He.length !== j); Ne = !0)
            ;
      } catch (Le) {
        ze = !0, le = Le;
      } finally {
        try {
          if (!Ne && I.return != null && (Oe = I.return(), Object(Oe) !== Oe))
            return;
        } finally {
          if (ze)
            throw le;
        }
      }
      return He;
    }
  }
  function x(M) {
    if (Array.isArray(M))
      return M;
  }
  function U(M, j) {
    if (!(M instanceof j))
      throw new TypeError("Cannot call a class as a function");
  }
  function w(M, j) {
    for (var I = 0; I < j.length; I++) {
      var G = j[I];
      G.enumerable = G.enumerable || !1, G.configurable = !0, "value" in G && (G.writable = !0), Object.defineProperty(M, D(G.key), G);
    }
  }
  function _(M, j, I) {
    return j && w(M.prototype, j), I && w(M, I), Object.defineProperty(M, "prototype", { writable: !1 }), M;
  }
  function D(M) {
    var j = k(M, "string");
    return e(j) == "symbol" ? j : String(j);
  }
  function k(M, j) {
    if (e(M) != "object" || !M)
      return M;
    var I = M[Symbol.toPrimitive];
    if (I !== void 0) {
      var G = I.call(M, j || "default");
      if (e(G) != "object")
        return G;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (j === "string" ? String : Number)(M);
  }
  var O = or, T = O.chunkBy, F = O.last, L = O.isParagraphStart, A = O.isModule, R = O.isParagraphEnd, q = O.isContent, S = O.startsWith, B = O.isTagEnd, V = O.isTagStart, Y = O.getSingleAttribute, ee = O.setSingleAttribute, te = Za, ne = Hr, oe = "loop";
  function ue(M) {
    return M.some(function(j) {
      return q(j);
    });
  }
  function we(M) {
    for (var j = 0, I = M.length; j < I; j++)
      if (M[j].type !== "content")
        return M[j];
    return null;
  }
  function fe(M) {
    var j = we(M.subparsed);
    return j != null && j.tag !== "w:t";
  }
  function ve(M) {
    return M.hasPageBreak && fe(M) ? '<w:p><w:r><w:br w:type="page"/></w:r></w:p>' : "";
  }
  function Ee(M) {
    return M.length && L(M[0]) && R(F(M));
  }
  function Qe(M) {
    return ue(M) ? 0 : M.length;
  }
  function ae(M) {
    var j = M.parts.length - 1;
    M.parts[j] === "</w:p>" ? M.parts.splice(j, 0, '<w:r><w:br w:type="page"/></w:r>') : M.parts.push('<w:p><w:r><w:br w:type="page"/></w:r></w:p>');
  }
  function X(M) {
    M.parts.unshift('<w:p><w:r><w:br w:type="page"/></w:r></w:p>');
  }
  function N(M) {
    return M.some(function(j) {
      return V("w:type", j) && j.value.indexOf("continuous") !== -1;
    });
  }
  function P(M) {
    return M.some(function(j) {
      return V("w:type", j) && j.value.indexOf('w:val="nextPage"') !== -1;
    });
  }
  function Q(M, j) {
    return ["<w:p><w:pPr>".concat(j.map(function(I) {
      var G = I.value;
      return G;
    }).join(""), "</w:pPr></w:p>")].concat(M);
  }
  function Z(M) {
    var j = !1, I = !1;
    return M.reduce(function(G, le) {
      return j === !1 && S(le, "<w:sectPr") && (I = !0), I && (S(le, "<w:type") && (j = !0), j === !1 && S(le, "</w:sectPr") && G.push('<w:type w:val="continuous"/>')), G.push(le), G;
    }, []);
  }
  function xe(M) {
    return M.filter(function(j) {
      return !S(j, "<w:headerReference") && !S(j, "<w:footerReference");
    });
  }
  function _e(M) {
    return M.some(function(j) {
      return j.tag === "w:br" && j.value.indexOf('w:type="page"') !== -1;
    });
  }
  function Pe(M) {
    return M.some(function(j) {
      var I = j.tag;
      return I === "w:drawing";
    });
  }
  function Xe(M) {
    var j = !1, I = [];
    return M.forEach(function(G) {
      V("w:sectPr", G) && (I.push([]), j = !0), j && I[I.length - 1].push(G), B("w:sectPr", G) && (j = !1);
    }), I;
  }
  function Wr(M) {
    var j = !1, I = 0;
    return M.forEach(function(G) {
      V("w:sectPr", G) && (j = !0), j && (G.tag === "w:headerReference" || G.tag === "w:footerReference") && (I++, j = !1), B("w:sectPr", G) && (j = !1);
    }), I;
  }
  function je(M) {
    for (var j = [], I = !1, G = M.length - 1; G >= 0; G--) {
      var le = M[G];
      if (B("w:sectPr", le) && (I = !0), V("w:sectPr", le) && (j.unshift(le.value), I = !1), I && j.unshift(le.value), L(le)) {
        if (j.length > 0)
          return j.join("");
        break;
      }
    }
    return "";
  }
  var zr = /* @__PURE__ */ function() {
    function M() {
      U(this, M), this.name = "LoopModule", this.inXfrm = !1, this.totalSectPr = 0, this.prefix = {
        start: "#",
        end: "/",
        dash: /^-([^\s]+)\s(.+)/,
        inverted: "^"
      };
    }
    return _(M, [{
      key: "optionsTransformer",
      value: function(I, G) {
        return this.docxtemplater = G, I;
      }
    }, {
      key: "preparse",
      value: function(I, G) {
        var le = G.contentType;
        te.main.indexOf(le) !== -1 && (this.sects = Xe(I));
      }
    }, {
      key: "matchers",
      value: function() {
        var I = oe;
        return [[this.prefix.start, I, {
          expandTo: "auto",
          location: "start",
          inverted: !1
        }], [this.prefix.inverted, I, {
          expandTo: "auto",
          location: "start",
          inverted: !0
        }], [this.prefix.end, I, {
          location: "end"
        }], [this.prefix.dash, I, function(G) {
          var le = y(G, 3), Ae = le[1], Oe = le[2];
          return {
            location: "start",
            inverted: !1,
            expandTo: Ae,
            value: Oe
          };
        }]];
      }
    }, {
      key: "getTraits",
      value: function(I, G) {
        if (I === "expandPair")
          return G.reduce(function(le, Ae, Oe) {
            return A(Ae, oe) && Ae.subparsed == null && le.push({
              part: Ae,
              offset: Oe
            }), le;
          }, []);
      }
    }, {
      key: "postparse",
      value: function(I, G) {
        var le = G.basePart;
        if (le && this.docxtemplater.fileType === "docx" && I.length > 0) {
          le.sectPrCount = Wr(I), this.totalSectPr += le.sectPrCount;
          var Ae = this.sects;
          Ae.some(function(Ve, hr) {
            if (le.lIndex < Ve[0].lIndex)
              return hr + 1 < Ae.length && N(Ae[hr + 1]) && (le.addContinuousType = !0), !0;
            if (I[0].lIndex < Ve[0].lIndex && Ve[0].lIndex < le.lIndex)
              return P(Ae[hr]) && (le.addNextPage = {
                index: hr
              }), !0;
          }), le.lastParagrapSectPr = je(I);
        }
        if (!le || le.expandTo !== "auto" || le.module !== oe || !Ee(I))
          return I;
        le.paragraphLoop = !0;
        var Oe = 0, He = T(I, function(Ve) {
          return L(Ve) && (Oe++, Oe === 1) ? "start" : R(Ve) && (Oe--, Oe === 0) ? "end" : null;
        }), Ne = He[0], ze = F(He), Le = Qe(Ne), er = Qe(ze);
        return le.hasPageBreakBeginning = _e(Ne), le.hasPageBreak = _e(ze), Pe(Ne) && (Le = 0), Pe(ze) && (er = 0), I.slice(Le, I.length - er);
      }
    }, {
      key: "resolve",
      value: function(I, G) {
        if (!A(I, oe))
          return null;
        var le = G.scopeManager, Ae = le.getValueAsync(I.value, {
          part: I
        }), Oe = [];
        function He(ze, Le, er) {
          var Ve = le.createSubScopeManager(ze, I.value, Le, I, er);
          Oe.push(G.resolve(l(l({}, G), {}, {
            compiled: I.subparsed,
            tags: {},
            scopeManager: Ve
          })));
        }
        var Ne = [];
        return Ae.then(function(ze) {
          return new Promise(function(Le) {
            ze instanceof Array ? Promise.all(ze).then(Le) : Le(ze);
          }).then(function(Le) {
            return le.loopOverValue(Le, He, I.inverted), Promise.all(Oe).then(function(er) {
              return er.map(function(Ve) {
                var hr = Ve.resolved, dt = Ve.errors;
                return Ne.push.apply(Ne, r(dt)), hr;
              });
            }).then(function(er) {
              if (Ne.length > 0)
                throw Ne;
              return er;
            });
          });
        });
      }
      // eslint-disable-next-line complexity
    }, {
      key: "render",
      value: function(I, G) {
        if (I.tag === "p:xfrm" && (this.inXfrm = I.position === "start"), I.tag === "a:ext" && this.inXfrm)
          return this.lastExt = I, I;
        if (!A(I, oe))
          return null;
        var le = [], Ae = [], Oe = 0, He = this, Ne = I.subparsed[0], ze = 0;
        Ne?.tag === "a:tr" && (ze = +Y(Ne.value, "h")), Oe -= ze;
        var Le = 0, er = fe(I);
        function Ve(Yr, mr, rr) {
          Oe += ze;
          var wr = G.scopeManager.createSubScopeManager(Yr, I.value, mr, I, rr);
          I.subparsed.forEach(function(Ze) {
            if (V("a16:rowId", Ze)) {
              var Bn = +Y(Ze.value, "val") + Le;
              Le = 1, Ze.value = ee(Ze.value, "val", Bn);
            }
          });
          var Ie = G.render(l(l({}, G), {}, {
            compiled: I.subparsed,
            tags: {},
            scopeManager: wr
          }));
          I.hasPageBreak && mr === rr - 1 && er && ae(Ie);
          var Mr = wr.scopePathItem.some(function(Ze) {
            return Ze !== 0;
          });
          Mr ? (I.sectPrCount === 1 && (Ie.parts = xe(Ie.parts)), I.addContinuousType && (Ie.parts = Z(Ie.parts))) : I.addNextPage && (Ie.parts = Q(Ie.parts, He.sects[I.addNextPage.index])), I.addNextPage && ae(Ie), I.hasPageBreakBeginning && er && X(Ie);
          for (var lr = 0, Wt = Ie.parts.length; lr < Wt; lr++)
            le.push(Ie.parts[lr]);
          Array.prototype.push.apply(Ae, Ie.errors);
        }
        var hr = G.scopeManager.loopOver(I.value, Ve, I.inverted, {
          part: I
        });
        if (hr === !1)
          return I.lastParagrapSectPr ? I.paragraphLoop ? {
            value: "<w:p><w:pPr>".concat(I.lastParagrapSectPr, "</w:pPr></w:p>")
          } : {
            value: "</w:t></w:r></w:p><w:p><w:pPr>".concat(I.lastParagrapSectPr, "</w:pPr><w:r><w:t>")
          } : {
            value: ve(I) || "",
            errors: Ae
          };
        if (Oe !== 0) {
          var dt = +Y(this.lastExt.value, "cy");
          this.lastExt.value = ee(this.lastExt.value, "cy", dt + Oe);
        }
        return {
          value: G.joinUncorrupt(le, l(l({}, G), {}, {
            basePart: I
          })),
          errors: Ae
        };
      }
    }]), M;
  }();
  return na = function() {
    return ne(new zr());
  }, na;
}
var aa, Do;
function kp() {
  if (Do)
    return aa;
  Do = 1;
  function e(T) {
    "@babel/helpers - typeof";
    return e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(F) {
      return typeof F;
    } : function(F) {
      return F && typeof Symbol == "function" && F.constructor === Symbol && F !== Symbol.prototype ? "symbol" : typeof F;
    }, e(T);
  }
  function r(T, F) {
    if (!(T instanceof F))
      throw new TypeError("Cannot call a class as a function");
  }
  function t(T, F) {
    for (var L = 0; L < F.length; L++) {
      var A = F[L];
      A.enumerable = A.enumerable || !1, A.configurable = !0, "value" in A && (A.writable = !0), Object.defineProperty(T, o(A.key), A);
    }
  }
  function i(T, F, L) {
    return F && t(T.prototype, F), L && t(T, L), Object.defineProperty(T, "prototype", { writable: !1 }), T;
  }
  function o(T) {
    var F = s(T, "string");
    return e(F) == "symbol" ? F : String(F);
  }
  function s(T, F) {
    if (e(T) != "object" || !T)
      return T;
    var L = T[Symbol.toPrimitive];
    if (L !== void 0) {
      var A = L.call(T, F || "default");
      if (e(A) != "object")
        return A;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (F === "string" ? String : Number)(T);
  }
  var l = Hr, m = or, y = m.isTextStart, d = m.isTextEnd, c = m.endsWith, g = m.startsWith, v = '<w:t xml:space="preserve">', x = v.length, U = "</w:t>", w = U.length;
  function _(T) {
    return y(T) && T.tag === "w:t";
  }
  function D(T, F) {
    var L = T[F].value;
    return T[F + 1].value === "</w:t>" || L.indexOf('xml:space="preserve"') !== -1 ? L : L.substr(0, L.length - 1) + ' xml:space="preserve">';
  }
  function k(T, F) {
    return T && T.basePart && F.length > 1;
  }
  var O = /* @__PURE__ */ function() {
    function T() {
      r(this, T), this.name = "SpacePreserveModule";
    }
    return i(T, [{
      key: "postparse",
      value: function(L, A) {
        var R = [], q = !1, S = 0, B = 0;
        function V(ee, te) {
          return ee.type === "placeholder" && te.length > 1;
        }
        var Y = L.reduce(function(ee, te) {
          return _(te) && (q = !0, B = R.length), q ? (R.push(te), k(A, R) && (S = A.basePart.endLindex, R[0].value = D(R, 0)), V(te, R) && (R[B].value = D(R, B), S = te.endLindex), d(te) && te.lIndex > S && (S !== 0 && (R[B].value = D(R, B)), Array.prototype.push.apply(ee, R), R = [], q = !1, S = 0, B = 0), ee) : (ee.push(te), ee);
        }, []);
        return Array.prototype.push.apply(Y, R), Y;
      }
    }, {
      key: "postrender",
      value: function(L) {
        for (var A = "", R = 0, q = 0, S = L.length; q < S; q++) {
          var B = q, V = L[q];
          V !== "" && (c(A, v) && g(V, U) && (L[R] = A.substr(0, A.length - x) + "<w:t/>", V = V.substr(w)), A = V, R = B, L[q] = V);
        }
        return L;
      }
    }]), T;
  }();
  return aa = function() {
    return l(new O());
  }, aa;
}
var ia, Eo;
function Bp() {
  if (Eo)
    return ia;
  Eo = 1;
  function e(_) {
    "@babel/helpers - typeof";
    return e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(D) {
      return typeof D;
    } : function(D) {
      return D && typeof Symbol == "function" && D.constructor === Symbol && D !== Symbol.prototype ? "symbol" : typeof D;
    }, e(_);
  }
  function r(_, D) {
    if (!(_ instanceof D))
      throw new TypeError("Cannot call a class as a function");
  }
  function t(_, D) {
    for (var k = 0; k < D.length; k++) {
      var O = D[k];
      O.enumerable = O.enumerable || !1, O.configurable = !0, "value" in O && (O.writable = !0), Object.defineProperty(_, o(O.key), O);
    }
  }
  function i(_, D, k) {
    return D && t(_.prototype, D), k && t(_, k), Object.defineProperty(_, "prototype", { writable: !1 }), _;
  }
  function o(_) {
    var D = s(_, "string");
    return e(D) == "symbol" ? D : String(D);
  }
  function s(_, D) {
    if (e(_) != "object" || !_)
      return _;
    var k = _[Symbol.toPrimitive];
    if (k !== void 0) {
      var O = k.call(_, D || "default");
      if (e(O) != "object")
        return O;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (D === "string" ? String : Number)(_);
  }
  var l = Va, m = or, y = m.isContent, d = ir, c = d.throwRawTagShouldBeOnlyTextInParagraph, g = d.getInvalidRawXMLValueException, v = "rawxml", x = Hr;
  function U(_) {
    var D = _.part, k = _.left, O = _.right, T = _.postparsed, F = _.index, L = T.slice(k + 1, O);
    return L.forEach(function(A, R) {
      R !== F - k - 1 && y(A) && c({
        paragraphParts: L,
        part: D
      });
    }), D;
  }
  var w = /* @__PURE__ */ function() {
    function _() {
      r(this, _), this.name = "RawXmlModule", this.prefix = "@";
    }
    return i(_, [{
      key: "optionsTransformer",
      value: function(k, O) {
        return this.fileTypeConfig = O.fileTypeConfig, k;
      }
    }, {
      key: "matchers",
      value: function() {
        return [[this.prefix, v]];
      }
    }, {
      key: "postparse",
      value: function(k) {
        return l.expandToOne(k, {
          moduleName: v,
          getInner: U,
          expandTo: this.fileTypeConfig.tagRawXml,
          error: {
            message: "Raw tag not in paragraph",
            id: "raw_tag_outerxml_invalid",
            explanation: function(T) {
              return 'The tag "'.concat(T.value, '" is not inside a paragraph, putting raw tags inside an inline loop is disallowed.');
            }
          }
        });
      }
    }, {
      key: "render",
      value: function(k, O) {
        if (k.module !== v)
          return null;
        var T, F = [];
        try {
          T = O.scopeManager.getValue(k.value, {
            part: k
          }), T == null && (T = O.nullGetter(k));
        } catch (L) {
          return F.push(L), {
            errors: F
          };
        }
        return T = T || "", typeof T == "string" ? {
          value: T
        } : {
          errors: [g({
            tag: k.value,
            value: T,
            offset: k.offset
          })]
        };
      }
    }]), _;
  }();
  return ia = function() {
    return x(new w());
  }, ia;
}
var oa, _o;
function Op() {
  if (_o)
    return oa;
  _o = 1;
  function e(r, t) {
    for (var i = -1, o = 0, s = r.length; o < s; o++)
      t[o] >= r[o].length || (i === -1 || r[o][t[o]].offset < r[i][t[i]].offset) && (i = o);
    return i;
  }
  return oa = function(r) {
    var t = r.reduce(function(m, y) {
      return m + y.length;
    }, 0);
    r = r.filter(function(m) {
      return m.length > 0;
    });
    for (var i = new Array(t), o = r.map(function() {
      return 0;
    }), s = 0; s < t; s++) {
      var l = e(r, o);
      i[s] = r[l][o[l]], o[l]++;
    }
    return i;
  }, oa;
}
var ua, Ao;
function Fp() {
  if (Ao)
    return ua;
  Ao = 1;
  function e(A) {
    "@babel/helpers - typeof";
    return e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(R) {
      return typeof R;
    } : function(R) {
      return R && typeof Symbol == "function" && R.constructor === Symbol && R !== Symbol.prototype ? "symbol" : typeof R;
    }, e(A);
  }
  function r(A, R) {
    if (!(A instanceof R))
      throw new TypeError("Cannot call a class as a function");
  }
  function t(A, R) {
    for (var q = 0; q < R.length; q++) {
      var S = R[q];
      S.enumerable = S.enumerable || !1, S.configurable = !0, "value" in S && (S.writable = !0), Object.defineProperty(A, o(S.key), S);
    }
  }
  function i(A, R, q) {
    return R && t(A.prototype, R), q && t(A, q), Object.defineProperty(A, "prototype", { writable: !1 }), A;
  }
  function o(A) {
    var R = s(A, "string");
    return e(R) == "symbol" ? R : String(R);
  }
  function s(A, R) {
    if (e(A) != "object" || !A)
      return A;
    var q = A[Symbol.toPrimitive];
    if (q !== void 0) {
      var S = q.call(A, R || "default");
      if (e(S) != "object")
        return S;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (R === "string" ? String : Number)(A);
  }
  var l = "expandPair", m = Op(), y = or, d = y.getLeft, c = y.getRight, g = Hr, v = Va, x = v.getExpandToDefault, U = ir, w = U.getUnmatchedLoopException, _ = U.getClosingTagNotMatchOpeningTag, D = U.getUnbalancedLoopException;
  function k(A) {
    switch (A.location) {
      case "start":
        return 1;
      case "end":
        return -1;
    }
  }
  function O(A, R) {
    return A != null && R != null && (A.part.location === "start" && R.part.location === "end" && A.part.value === R.part.value || R.part.value === "");
  }
  function T(A) {
    for (var R = 0, q = []; R < A.length; ) {
      var S = A[R].part;
      if (S.location === "end") {
        if (R === 0)
          return A.splice(0, 1), q.push(w(S)), {
            traits: A,
            errors: q
          };
        var B = R, V = R - 1, Y = 1;
        if (O(A[V], A[B]))
          return A.splice(B, 1), A.splice(V, 1), {
            errors: q,
            traits: A
          };
        for (; Y < 50; ) {
          var ee = A[V - Y], te = A[B + Y];
          if (O(ee, A[B]))
            return A.splice(B, 1), A.splice(V - Y, 1), {
              errors: q,
              traits: A
            };
          if (O(A[V], te))
            return A.splice(B + Y, 1), A.splice(V, 1), {
              errors: q,
              traits: A
            };
          Y++;
        }
        return q.push(_({
          tags: [A[V].part, A[B].part]
        })), A.splice(B, 1), A.splice(V, 1), {
          traits: A,
          errors: q
        };
      }
      R++;
    }
    return A.forEach(function(ne) {
      var oe = ne.part;
      q.push(w(oe));
    }), {
      traits: [],
      errors: q
    };
  }
  function F(A) {
    for (var R = {}, q = [], S = [], B = [], V = 0; V < A.length; V++)
      B.push(A[V]);
    for (; B.length > 0; ) {
      var Y = T(B);
      q = q.concat(Y.errors), B = Y.traits;
    }
    if (q.length > 0)
      return {
        pairs: S,
        errors: q
      };
    for (var ee = 0, te = 0; te < A.length; te++) {
      var ne = A[te], oe = ne.part, ue = k(oe);
      if (ee += ue, ue === 1)
        R[ee] = ne;
      else {
        var we = R[ee + 1];
        ee === 0 && (S = S.concat([[we, ne]]));
      }
      ee = ee >= 0 ? ee : 0;
    }
    return {
      pairs: S,
      errors: q
    };
  }
  var L = /* @__PURE__ */ function() {
    function A() {
      r(this, A), this.name = "ExpandPairTrait";
    }
    return i(A, [{
      key: "optionsTransformer",
      value: function(q, S) {
        return this.expandTags = S.fileTypeConfig.expandTags.concat(S.options.paragraphLoop ? S.fileTypeConfig.onParagraphLoop : []), q;
      }
    }, {
      key: "postparse",
      value: function(q, S) {
        var B = this, V = S.getTraits, Y = S.postparse, ee = S.fileType, te = V(l, q);
        te = te.map(function(X) {
          return X || [];
        }), te = m(te);
        var ne = F(te), oe = ne.pairs, ue = ne.errors, we = 0, fe = null, ve = oe.map(function(X) {
          var N = X[0].part.expandTo;
          if (N === "auto" && ee !== "text") {
            var P = x(q, X, B.expandTags);
            P.error && ue.push(P.error), N = P.value;
          }
          if (!N || ee === "text") {
            var Q = X[0].offset, Z = X[1].offset;
            return Q < we && ue.push(D(X, fe)), fe = X, we = Z, [Q, Z];
          }
          var xe, _e;
          try {
            xe = d(q, N, X[0].offset);
          } catch (Pe) {
            ue.push(Pe);
          }
          try {
            _e = c(q, N, X[1].offset);
          } catch (Pe) {
            ue.push(Pe);
          }
          return xe < we && ue.push(D(X, fe)), we = _e, fe = X, [xe, _e];
        });
        if (ue.length > 0)
          return {
            postparsed: q,
            errors: ue
          };
        var Ee = 0, Qe, ae = q.reduce(function(X, N, P) {
          var Q = Ee < oe.length && ve[Ee][0] <= P && P <= ve[Ee][1], Z = oe[Ee], xe = ve[Ee];
          if (!Q)
            return X.push(N), X;
          if (xe[0] === P && (Qe = []), Z[0].offset !== P && Z[1].offset !== P && Qe.push(N), xe[1] === P) {
            var _e = q[Z[0].offset];
            _e.subparsed = Y(Qe, {
              basePart: _e
            }), _e.endLindex = Z[1].part.lIndex, delete _e.location, delete _e.expandTo, X.push(_e), Ee++;
          }
          return X;
        }, []);
        return {
          postparsed: ae,
          errors: ue
        };
      }
    }]), A;
  }();
  return ua = function() {
    return g(new L());
  }, ua;
}
var sa, Co;
function Pp() {
  if (Co)
    return sa;
  Co = 1;
  function e(F) {
    "@babel/helpers - typeof";
    return e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(L) {
      return typeof L;
    } : function(L) {
      return L && typeof Symbol == "function" && L.constructor === Symbol && L !== Symbol.prototype ? "symbol" : typeof L;
    }, e(F);
  }
  function r(F, L) {
    if (!(F instanceof L))
      throw new TypeError("Cannot call a class as a function");
  }
  function t(F, L) {
    for (var A = 0; A < L.length; A++) {
      var R = L[A];
      R.enumerable = R.enumerable || !1, R.configurable = !0, "value" in R && (R.writable = !0), Object.defineProperty(F, o(R.key), R);
    }
  }
  function i(F, L, A) {
    return L && t(F.prototype, L), A && t(F, A), Object.defineProperty(F, "prototype", { writable: !1 }), F;
  }
  function o(F) {
    var L = s(F, "string");
    return e(L) == "symbol" ? L : String(L);
  }
  function s(F, L) {
    if (e(F) != "object" || !F)
      return F;
    var A = F[Symbol.toPrimitive];
    if (A !== void 0) {
      var R = A.call(F, L || "default");
      if (e(R) != "object")
        return R;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (L === "string" ? String : Number)(F);
  }
  var l = Hr, m = ir, y = m.getScopeCompilationError, d = or, c = d.utf8ToWord, g = d.hasCorruptCharacters, v = ir, x = v.getCorruptCharactersException, U = _u, w = U.settingsContentType, _ = U.coreContentType, D = U.appContentType, k = U.customContentType, O = {
    docx: "w",
    pptx: "a"
  }, T = /* @__PURE__ */ function() {
    function F() {
      r(this, F), this.name = "Render", this.recordRun = !1, this.recordedRun = [];
    }
    return i(F, [{
      key: "optionsTransformer",
      value: function(A, R) {
        return this.parser = R.parser, this.fileType = R.fileType, A;
      }
    }, {
      key: "set",
      value: function(A) {
        A.compiled && (this.compiled = A.compiled), A.data != null && (this.data = A.data);
      }
    }, {
      key: "getRenderedMap",
      value: function(A) {
        var R = this;
        return Object.keys(this.compiled).reduce(function(q, S) {
          return q[S] = {
            from: S,
            data: R.data
          }, q;
        }, A);
      }
    }, {
      key: "postparse",
      value: function(A, R) {
        var q = this, S = [];
        return A.forEach(function(B) {
          if (B.type === "placeholder") {
            var V = B.value;
            try {
              R.cachedParsers[B.lIndex] = q.parser(V, {
                tag: B
              });
            } catch (Y) {
              S.push(y({
                tag: V,
                rootError: Y,
                offset: B.offset
              }));
            }
          }
        }), {
          postparsed: A,
          errors: S
        };
      }
    }, {
      key: "render",
      value: function(A, R) {
        var q = R.contentType, S = R.scopeManager, B = R.linebreaks, V = R.nullGetter, Y = R.fileType;
        if (B && [w, _, D, k].indexOf(q) !== -1 && (B = !1), B && this.recordRuns(A), !(A.type !== "placeholder" || A.module)) {
          var ee;
          try {
            ee = S.getValue(A.value, {
              part: A
            });
          } catch (te) {
            return {
              errors: [te]
            };
          }
          return ee == null && (ee = V(A)), g(ee) ? {
            errors: [x({
              tag: A.value,
              value: ee,
              offset: A.offset
            })]
          } : Y === "text" ? {
            value: ee
          } : {
            value: B && typeof ee == "string" ? this.renderLineBreaks(ee) : c(ee)
          };
        }
      }
    }, {
      key: "recordRuns",
      value: function(A) {
        A.tag === "".concat(O[this.fileType], ":r") ? this.recordedRun = [] : A.tag === "".concat(O[this.fileType], ":rPr") ? (A.position === "start" && (this.recordRun = !0, this.recordedRun = [A.value]), (A.position === "end" || A.position === "selfclosing") && (this.recordedRun.push(A.value), this.recordRun = !1)) : this.recordRun && this.recordedRun.push(A.value);
      }
    }, {
      key: "renderLineBreaks",
      value: function(A) {
        var R = this, q = O[this.fileType], S = this.fileType === "docx" ? "<w:r><w:br/></w:r>" : "<a:br/>", B = A.split(`
`), V = this.recordedRun.join("");
        return B.map(function(Y) {
          return c(Y);
        }).reduce(function(Y, ee, te) {
          return Y.push(ee), te < B.length - 1 && Y.push("</".concat(q, ":t></").concat(q, ":r>").concat(S, "<").concat(q, ":r>").concat(V, "<").concat(q, ":t").concat(R.fileType === "docx" ? ' xml:space="preserve"' : "", ">")), Y;
        }, []);
      }
    }]), F;
  }();
  return sa = function() {
    return l(new T());
  }, sa;
}
var la, To;
function Rp() {
  if (To)
    return la;
  To = 1;
  var e = Sp(), r = kp(), t = Bp(), i = Fp(), o = Pp();
  function s() {
    return {
      getTemplatedFiles: function() {
        return [];
      },
      textPath: function(y) {
        return y.textTarget;
      },
      tagsXmlTextArray: ["Company", "HyperlinkBase", "Manager", "cp:category", "cp:keywords", "dc:creator", "dc:description", "dc:subject", "dc:title", "cp:contentStatus", "w:t", "m:t", "vt:lpstr", "vt:lpwstr"],
      tagsXmlLexedArray: ["w:proofState", "w:tc", "w:tr", "w:tbl", "w:body", "w:document", "w:p", "w:r", "w:br", "w:rPr", "w:pPr", "w:spacing", "w:sdtContent", "w:sdt", "w:drawing", "w:sectPr", "w:type", "w:headerReference", "w:footerReference", "w:bookmarkStart", "w:bookmarkEnd", "w:commentRangeStart", "w:commentRangeEnd", "w:commentReference"],
      droppedTagsInsidePlaceholder: ["w:p", "w:br", "w:bookmarkStart", "w:bookmarkEnd"],
      expandTags: [{
        contains: "w:tc",
        expand: "w:tr"
      }],
      onParagraphLoop: [{
        contains: "w:p",
        expand: "w:p",
        onlyTextInTag: !0
      }],
      tagRawXml: "w:p",
      baseModules: [e, r, i, t, o],
      tagShouldContain: [{
        tag: "w:tbl",
        shouldContain: ["w:tr"],
        drop: !0
      }, {
        tag: "w:tc",
        shouldContain: ["w:p"],
        value: "<w:p></w:p>"
      }, {
        tag: "w:sdtContent",
        shouldContain: ["w:p", "w:r", "w:commentRangeStart", "w:sdt"],
        value: "<w:p></w:p>"
      }]
    };
  }
  function l() {
    return {
      getTemplatedFiles: function() {
        return [];
      },
      textPath: function(y) {
        return y.textTarget;
      },
      tagsXmlTextArray: ["Company", "HyperlinkBase", "Manager", "cp:category", "cp:keywords", "dc:creator", "dc:description", "dc:subject", "dc:title", "a:t", "m:t", "vt:lpstr", "vt:lpwstr"],
      tagsXmlLexedArray: ["p:sp", "a:tc", "a:tr", "a:tbl", "a:graphicData", "a:p", "a:r", "a:rPr", "p:txBody", "a:txBody", "a:off", "a:ext", "p:graphicFrame", "p:xfrm", "a16:rowId", "a:endParaRPr"],
      droppedTagsInsidePlaceholder: ["a:p", "a:endParaRPr"],
      expandTags: [{
        contains: "a:tc",
        expand: "a:tr"
      }],
      onParagraphLoop: [{
        contains: "a:p",
        expand: "a:p",
        onlyTextInTag: !0
      }],
      tagRawXml: "p:sp",
      baseModules: [e, i, t, o],
      tagShouldContain: [{
        tag: "a:tbl",
        shouldContain: ["a:tr"],
        dropParent: "p:graphicFrame"
      }, {
        tag: "p:txBody",
        shouldContain: ["a:p"],
        value: "<a:p></a:p>"
      }, {
        tag: "a:txBody",
        shouldContain: ["a:p"],
        value: "<a:p></a:p>"
      }]
    };
  }
  return la = {
    docx: s,
    pptx: l
  }, la;
}
(function(e) {
  var r = ["modules"];
  function t(ae) {
    "@babel/helpers - typeof";
    return t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(X) {
      return typeof X;
    } : function(X) {
      return X && typeof Symbol == "function" && X.constructor === Symbol && X !== Symbol.prototype ? "symbol" : typeof X;
    }, t(ae);
  }
  function i(ae, X) {
    if (ae == null)
      return {};
    var N = o(ae, X), P, Q;
    if (Object.getOwnPropertySymbols) {
      var Z = Object.getOwnPropertySymbols(ae);
      for (Q = 0; Q < Z.length; Q++)
        P = Z[Q], !(X.indexOf(P) >= 0) && Object.prototype.propertyIsEnumerable.call(ae, P) && (N[P] = ae[P]);
    }
    return N;
  }
  function o(ae, X) {
    if (ae == null)
      return {};
    var N = {}, P = Object.keys(ae), Q, Z;
    for (Z = 0; Z < P.length; Z++)
      Q = P[Z], !(X.indexOf(Q) >= 0) && (N[Q] = ae[Q]);
    return N;
  }
  function s(ae, X) {
    if (!(ae instanceof X))
      throw new TypeError("Cannot call a class as a function");
  }
  function l(ae, X) {
    for (var N = 0; N < X.length; N++) {
      var P = X[N];
      P.enumerable = P.enumerable || !1, P.configurable = !0, "value" in P && (P.writable = !0), Object.defineProperty(ae, y(P.key), P);
    }
  }
  function m(ae, X, N) {
    return X && l(ae.prototype, X), N && l(ae, N), Object.defineProperty(ae, "prototype", { writable: !1 }), ae;
  }
  function y(ae) {
    var X = d(ae, "string");
    return t(X) == "symbol" ? X : String(X);
  }
  function d(ae, X) {
    if (t(ae) != "object" || !ae)
      return ae;
    var N = ae[Symbol.toPrimitive];
    if (N !== void 0) {
      var P = N.call(ae, X || "default");
      if (t(P) != "object")
        return P;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (X === "string" ? String : Number)(ae);
  }
  var c = or;
  c.traits = Va, c.moduleWrapper = Hr;
  var g = vf, v = ir, x = v.throwMultiError, U = v.throwResolveBeforeCompile, w = v.throwRenderInvalidTemplate, _ = v.throwRenderTwice, D = wf, k = Ef, O = "[Content_Types].xml", T = "_rels/.rels", F = Kf, L = Su, A = c.defaults, R = c.str2xml, q = c.xml2str, S = c.moduleWrapper, B = c.concatArrays, V = c.uniq, Y = c.getDuplicates, ee = c.stableSort, te = ir, ne = te.XTInternalError, oe = te.throwFileTypeNotIdentified, ue = te.throwFileTypeNotHandled, we = te.throwApiVersionError, fe = [3, 38, 0];
  function ve(ae) {
    ae.modules = ae.modules.filter(function(X) {
      if (X.supportedFileTypes) {
        if (!Array.isArray(X.supportedFileTypes))
          throw new Error("The supportedFileTypes field of the module must be an array");
        var N = X.supportedFileTypes.indexOf(ae.fileType) !== -1;
        return N || X.on("detached"), N;
      }
      return !0;
    });
  }
  var Ee = /* @__PURE__ */ function() {
    function ae(X) {
      var N = this, P = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, Q = P.modules, Z = Q === void 0 ? [] : Q, xe = i(P, r);
      if (s(this, ae), !Array.isArray(Z))
        throw new Error("The modules argument of docxtemplater's constructor must be an array");
      if (this.targets = [], this.rendered = !1, this.scopeManagers = {}, this.compiled = {}, this.modules = [F()], this.setOptions(xe), Z.forEach(function(_e) {
        N.attachModule(_e);
      }), arguments.length > 0) {
        if (!X || !X.files || typeof X.file != "function")
          throw new Error("The first argument of docxtemplater's constructor must be a valid zip file (jszip v2 or pizzip v3)");
        this.loadZip(X), this.compile(), this.v4Constructor = !0;
      }
    }
    return m(ae, [{
      key: "verifyApiVersion",
      value: function(N) {
        return N = N.split(".").map(function(P) {
          return parseInt(P, 10);
        }), N.length !== 3 && we("neededVersion is not a valid version", {
          neededVersion: N,
          explanation: "the neededVersion must be an array of length 3"
        }), N[0] !== fe[0] && we("The major api version do not match, you probably have to update docxtemplater with npm install --save docxtemplater", {
          neededVersion: N,
          currentModuleApiVersion: fe,
          explanation: "moduleAPIVersionMismatch : needed=".concat(N.join("."), ", current=").concat(fe.join("."))
        }), N[1] > fe[1] && we("The minor api version is not uptodate, you probably have to update docxtemplater with npm install --save docxtemplater", {
          neededVersion: N,
          currentModuleApiVersion: fe,
          explanation: "moduleAPIVersionMismatch : needed=".concat(N.join("."), ", current=").concat(fe.join("."))
        }), N[1] === fe[1] && N[2] > fe[2] && we("The patch api version is not uptodate, you probably have to update docxtemplater with npm install --save docxtemplater", {
          neededVersion: N,
          currentModuleApiVersion: fe,
          explanation: "moduleAPIVersionMismatch : needed=".concat(N.join("."), ", current=").concat(fe.join("."))
        }), !0;
      }
    }, {
      key: "setModules",
      value: function(N) {
        this.modules.forEach(function(P) {
          P.set(N);
        });
      }
    }, {
      key: "sendEvent",
      value: function(N) {
        this.modules.forEach(function(P) {
          P.on(N);
        });
      }
    }, {
      key: "attachModule",
      value: function(N) {
        if (this.v4Constructor)
          throw new ne("attachModule() should not be called manually when using the v4 constructor");
        var P = t(N);
        if (P === "function")
          throw new ne("Cannot attach a class/function as a module. Most probably you forgot to instantiate the module by using `new` on the module.");
        if (!N || P !== "object")
          throw new ne("Cannot attachModule with a falsy value");
        if (N.requiredAPIVersion && this.verifyApiVersion(N.requiredAPIVersion), N.attached === !0)
          if (typeof N.clone == "function")
            N = N.clone();
          else
            throw new Error('Cannot attach a module that was already attached : "'.concat(N.name, '". The most likely cause is that you are instantiating the module at the root level, and using it for multiple instances of Docxtemplater'));
        N.attached = !0;
        var Q = S(N);
        return this.modules.push(Q), Q.on("attached"), this.fileType && ve(this), this;
      }
    }, {
      key: "setOptions",
      value: function(N) {
        var P = this;
        if (this.v4Constructor)
          throw new Error("setOptions() should not be called manually when using the v4 constructor");
        if (!N)
          throw new Error("setOptions should be called with an object as first parameter");
        return this.options = {}, Object.keys(A).forEach(function(Q) {
          var Z = A[Q];
          P.options[Q] = N[Q] != null ? N[Q] : P[Q] || Z, P[Q] = P.options[Q];
        }), this.delimiters.start = c.utf8ToWord(this.delimiters.start), this.delimiters.end = c.utf8ToWord(this.delimiters.end), this;
      }
    }, {
      key: "loadZip",
      value: function(N) {
        if (this.v4Constructor)
          throw new Error("loadZip() should not be called manually when using the v4 constructor");
        if (N.loadAsync)
          throw new ne("Docxtemplater doesn't handle JSZip version >=3, please use pizzip");
        return this.zip = N, this.updateFileTypeConfig(), this.modules = B([this.fileTypeConfig.baseModules.map(function(P) {
          return P();
        }), this.modules]), ve(this), this;
      }
    }, {
      key: "precompileFile",
      value: function(N) {
        var P = this.createTemplateClass(N);
        P.preparse(), this.compiled[N] = P;
      }
    }, {
      key: "compileFile",
      value: function(N) {
        this.compiled[N].parse();
      }
    }, {
      key: "getScopeManager",
      value: function(N, P, Q) {
        return this.scopeManagers[N] || (this.scopeManagers[N] = g({
          tags: Q,
          parser: this.parser,
          cachedParsers: P.cachedParsers
        })), this.scopeManagers[N];
      }
    }, {
      key: "resolveData",
      value: function(N) {
        var P = this, Q = [];
        return Object.keys(this.compiled).length || U(), Promise.resolve(N).then(function(Z) {
          return P.setData(Z), P.setModules({
            data: P.data,
            Lexer: L
          }), P.mapper = P.modules.reduce(function(xe, _e) {
            return _e.getRenderedMap(xe);
          }, {}), Promise.all(Object.keys(P.mapper).map(function(xe) {
            var _e = P.mapper[xe], Pe = _e.from, Xe = _e.data;
            return Promise.resolve(Xe).then(function(Wr) {
              var je = P.compiled[Pe];
              return je.filePath = xe, je.scopeManager = P.getScopeManager(xe, je, Wr), je.resolveTags(Wr).then(function(zr) {
                return je.scopeManager.finishedResolving = !0, zr;
              }, function(zr) {
                Array.prototype.push.apply(Q, zr);
              });
            });
          })).then(function(xe) {
            return Q.length !== 0 && (P.options.errorLogging && D(Q, P.options.errorLogging), x(Q)), B(xe);
          });
        });
      }
    }, {
      key: "reorderModules",
      value: function() {
        this.modules = ee(this.modules, function(N, P) {
          return (P.priority || 0) - (N.priority || 0);
        });
      }
    }, {
      key: "throwIfDuplicateModules",
      value: function() {
        var N = Y(this.modules.map(function(P) {
          var Q = P.name;
          return Q;
        }));
        if (N.length > 0)
          throw new ne('Detected duplicate module "'.concat(N[0], '"'));
      }
    }, {
      key: "compile",
      value: function() {
        var N = this;
        return this.updateFileTypeConfig(), this.throwIfDuplicateModules(), this.reorderModules(), Object.keys(this.compiled).length ? this : (this.options = this.modules.reduce(function(P, Q) {
          return Q.optionsTransformer(P, N);
        }, this.options), this.options.xmlFileNames = V(this.options.xmlFileNames), this.xmlDocuments = this.options.xmlFileNames.reduce(function(P, Q) {
          var Z = N.zip.files[Q].asText();
          return P[Q] = R(Z), P;
        }, {}), this.setModules({
          zip: this.zip,
          xmlDocuments: this.xmlDocuments
        }), this.getTemplatedFiles(), this.templatedFiles.forEach(function(P) {
          N.zip.files[P] != null && N.precompileFile(P);
        }), this.templatedFiles.forEach(function(P) {
          N.zip.files[P] != null && N.compileFile(P);
        }), this.setModules({
          compiled: this.compiled
        }), Qe(this), this);
      }
    }, {
      key: "getRelsTypes",
      value: function() {
        for (var N = this.zip.files[T], P = N ? R(N.asText()) : null, Q = P ? P.getElementsByTagName("Relationship") : [], Z = {}, xe = 0, _e = Q.length; xe < _e; xe++) {
          var Pe = Q[xe];
          Z[Pe.getAttribute("Target")] = Pe.getAttribute("Type");
        }
        return Z;
      }
    }, {
      key: "getContentTypes",
      value: function() {
        var N = this.zip.files[O], P = N ? R(N.asText()) : null, Q = P ? P.getElementsByTagName("Override") : null, Z = P ? P.getElementsByTagName("Default") : null;
        return {
          overrides: Q,
          defaults: Z,
          contentTypes: N,
          contentTypeXml: P
        };
      }
    }, {
      key: "updateFileTypeConfig",
      value: function() {
        var N = this, P;
        this.zip.files.mimetype && (P = "odt"), this.relsTypes = this.getRelsTypes();
        var Q = this.getContentTypes(), Z = Q.overrides, xe = Q.defaults, _e = Q.contentTypes, Pe = Q.contentTypeXml;
        return Pe && (this.filesContentTypes = k(Z, xe, this.zip), this.invertedContentTypes = c.invertMap(this.filesContentTypes), this.setModules({
          contentTypes: this.contentTypes,
          invertedContentTypes: this.invertedContentTypes
        })), this.modules.forEach(function(Xe) {
          P = Xe.getFileType({
            zip: N.zip,
            contentTypes: _e,
            contentTypeXml: Pe,
            overrides: Z,
            defaults: xe,
            doc: N
          }) || P;
        }), P === "odt" && ue(P), P || oe(), this.fileType = P, ve(this), this.fileTypeConfig = this.options.fileTypeConfig || this.fileTypeConfig || ae.FileTypeConfig[this.fileType](), this;
      }
    }, {
      key: "renderAsync",
      value: function(N) {
        var P = this;
        return this.resolveData(N).then(function() {
          return P.render();
        });
      }
    }, {
      key: "render",
      value: function(N) {
        var P = this;
        return this.rendered && _(), this.rendered = !0, this.compile(), this.errors.length > 0 && w(), N && this.setData(N), this.setModules({
          data: this.data,
          Lexer: L
        }), this.mapper = this.mapper || this.modules.reduce(function(Q, Z) {
          return Z.getRenderedMap(Q);
        }, {}), Object.keys(this.mapper).forEach(function(Q) {
          var Z = P.mapper[Q], xe = Z.from, _e = Z.data, Pe = P.compiled[xe];
          Pe.scopeManager = P.getScopeManager(Q, Pe, _e), Pe.render(Q), P.zip.file(Q, Pe.content, {
            createFolders: !0
          });
        }), Qe(this), this.sendEvent("syncing-zip"), this.syncZip(), this;
      }
    }, {
      key: "syncZip",
      value: function() {
        var N = this;
        Object.keys(this.xmlDocuments).forEach(function(P) {
          N.zip.remove(P);
          var Q = q(N.xmlDocuments[P]);
          return N.zip.file(P, Q, {
            createFolders: !0
          });
        });
      }
    }, {
      key: "setData",
      value: function(N) {
        return this.data = N, this;
      }
    }, {
      key: "getZip",
      value: function() {
        return this.zip;
      }
    }, {
      key: "createTemplateClass",
      value: function(N) {
        var P = this.zip.files[N].asText();
        return this.createTemplateClassFromContent(P, N);
      }
    }, {
      key: "createTemplateClassFromContent",
      value: function(N, P) {
        var Q = this, Z = {
          filePath: P,
          contentType: this.filesContentTypes[P],
          relsType: this.relsTypes[P]
        };
        return Object.keys(A).concat(["filesContentTypes", "fileTypeConfig", "fileType", "modules"]).forEach(function(xe) {
          Z[xe] = Q[xe];
        }), new ae.XmlTemplater(N, Z);
      }
    }, {
      key: "getFullText",
      value: function(N) {
        return this.createTemplateClass(N || this.fileTypeConfig.textPath(this)).getFullText();
      }
    }, {
      key: "getTemplatedFiles",
      value: function() {
        var N = this;
        return this.templatedFiles = this.fileTypeConfig.getTemplatedFiles(this.zip), this.targets.forEach(function(P) {
          N.templatedFiles.push(P);
        }), this.templatedFiles = V(this.templatedFiles), this.templatedFiles;
      }
    }]), ae;
  }();
  function Qe(ae) {
    var X = ae.compiled;
    ae.errors = B(Object.keys(X).map(function(N) {
      return X[N].allErrors;
    })), ae.errors.length !== 0 && (ae.options.errorLogging && D(ae.errors, ae.options.errorLogging), x(ae.errors));
  }
  Ee.DocUtils = c, Ee.Errors = ir, Ee.XmlTemplater = Tp(), Ee.FileTypeConfig = Rp(), Ee.XmlMatcher = ku(), e.exports = Ee, e.exports.default = Ee;
})(Ro);
var Np = Ro.exports;
const Ip = /* @__PURE__ */ Fo(Np);
var Ou = { exports: {} }, Zt = {}, Nr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
Zt.encode = function(e) {
  for (var r = "", t, i, o, s, l, m, y, d = 0; d < e.length; )
    t = e.charCodeAt(d++), i = e.charCodeAt(d++), o = e.charCodeAt(d++), s = t >> 2, l = (t & 3) << 4 | i >> 4, m = (i & 15) << 2 | o >> 6, y = o & 63, isNaN(i) ? m = y = 64 : isNaN(o) && (y = 64), r = r + Nr.charAt(s) + Nr.charAt(l) + Nr.charAt(m) + Nr.charAt(y);
  return r;
};
Zt.decode = function(e) {
  var r = "", t, i, o, s, l, m, y, d = 0;
  for (e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); d < e.length; )
    s = Nr.indexOf(e.charAt(d++)), l = Nr.indexOf(e.charAt(d++)), m = Nr.indexOf(e.charAt(d++)), y = Nr.indexOf(e.charAt(d++)), t = s << 2 | l >> 4, i = (l & 15) << 4 | m >> 2, o = (m & 3) << 6 | y, r += String.fromCharCode(t), m !== 64 && (r += String.fromCharCode(i)), y !== 64 && (r += String.fromCharCode(o));
  return r;
};
var Ue = {}, fn;
Ue.base64 = !0;
Ue.array = !0;
Ue.string = !0;
Ue.arraybuffer = typeof ArrayBuffer < "u" && typeof Uint8Array < "u";
Ue.nodebuffer = typeof Buffer < "u";
Ue.uint8array = typeof Uint8Array < "u";
if (typeof ArrayBuffer > "u")
  fn = Ue.blob = !1;
else {
  var So = new ArrayBuffer(0);
  try {
    fn = Ue.blob = new Blob([So], {
      type: "application/zip"
    }).size === 0;
  } catch {
    try {
      var Lp = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder, ko = new Lp();
      ko.append(So), fn = Ue.blob = ko.getBlob("application/zip").size === 0;
    } catch {
      fn = Ue.blob = !1;
    }
  }
}
var ur = {}, Xt = {}, pt = {}, Da = { exports: {} };
/*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */
(function(e, r) {
  (function(t, i) {
    i(r);
  })(ot, function(t) {
    function i(n) {
      for (var u = n.length; --u >= 0; )
        n[u] = 0;
    }
    var o = 256, s = 286, l = 30, m = 15, y = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]), d = new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]), c = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]), g = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), v = new Array(576);
    i(v);
    var x = new Array(60);
    i(x);
    var U = new Array(512);
    i(U);
    var w = new Array(256);
    i(w);
    var _ = new Array(29);
    i(_);
    var D, k, O, T = new Array(l);
    function F(n, u, a, f, p) {
      this.static_tree = n, this.extra_bits = u, this.extra_base = a, this.elems = f, this.max_length = p, this.has_stree = n && n.length;
    }
    function L(n, u) {
      this.dyn_tree = n, this.max_code = 0, this.stat_desc = u;
    }
    i(T);
    var A = function(n) {
      return n < 256 ? U[n] : U[256 + (n >>> 7)];
    }, R = function(n, u) {
      n.pending_buf[n.pending++] = 255 & u, n.pending_buf[n.pending++] = u >>> 8 & 255;
    }, q = function(n, u, a) {
      n.bi_valid > 16 - a ? (n.bi_buf |= u << n.bi_valid & 65535, R(n, n.bi_buf), n.bi_buf = u >> 16 - n.bi_valid, n.bi_valid += a - 16) : (n.bi_buf |= u << n.bi_valid & 65535, n.bi_valid += a);
    }, S = function(n, u, a) {
      q(n, a[2 * u], a[2 * u + 1]);
    }, B = function(n, u) {
      var a = 0;
      do
        a |= 1 & n, n >>>= 1, a <<= 1;
      while (--u > 0);
      return a >>> 1;
    }, V = function(n, u, a) {
      var f, p, h = new Array(16), z = 0;
      for (f = 1; f <= m; f++)
        z = z + a[f - 1] << 1, h[f] = z;
      for (p = 0; p <= u; p++) {
        var b = n[2 * p + 1];
        b !== 0 && (n[2 * p] = B(h[b]++, b));
      }
    }, Y = function(n) {
      var u;
      for (u = 0; u < s; u++)
        n.dyn_ltree[2 * u] = 0;
      for (u = 0; u < l; u++)
        n.dyn_dtree[2 * u] = 0;
      for (u = 0; u < 19; u++)
        n.bl_tree[2 * u] = 0;
      n.dyn_ltree[512] = 1, n.opt_len = n.static_len = 0, n.sym_next = n.matches = 0;
    }, ee = function(n) {
      n.bi_valid > 8 ? R(n, n.bi_buf) : n.bi_valid > 0 && (n.pending_buf[n.pending++] = n.bi_buf), n.bi_buf = 0, n.bi_valid = 0;
    }, te = function(n, u, a, f) {
      var p = 2 * u, h = 2 * a;
      return n[p] < n[h] || n[p] === n[h] && f[u] <= f[a];
    }, ne = function(n, u, a) {
      for (var f = n.heap[a], p = a << 1; p <= n.heap_len && (p < n.heap_len && te(u, n.heap[p + 1], n.heap[p], n.depth) && p++, !te(u, f, n.heap[p], n.depth)); )
        n.heap[a] = n.heap[p], a = p, p <<= 1;
      n.heap[a] = f;
    }, oe = function(n, u, a) {
      var f, p, h, z, b = 0;
      if (n.sym_next !== 0)
        do
          f = 255 & n.pending_buf[n.sym_buf + b++], f += (255 & n.pending_buf[n.sym_buf + b++]) << 8, p = n.pending_buf[n.sym_buf + b++], f === 0 ? S(n, p, u) : (h = w[p], S(n, h + o + 1, u), (z = y[h]) !== 0 && (p -= _[h], q(n, p, z)), f--, h = A(f), S(n, h, a), (z = d[h]) !== 0 && (f -= T[h], q(n, f, z)));
        while (b < n.sym_next);
      S(n, 256, u);
    }, ue = function(n, u) {
      var a, f, p, h = u.dyn_tree, z = u.stat_desc.static_tree, b = u.stat_desc.has_stree, H = u.stat_desc.elems, E = -1;
      for (n.heap_len = 0, n.heap_max = 573, a = 0; a < H; a++)
        h[2 * a] !== 0 ? (n.heap[++n.heap_len] = E = a, n.depth[a] = 0) : h[2 * a + 1] = 0;
      for (; n.heap_len < 2; )
        h[2 * (p = n.heap[++n.heap_len] = E < 2 ? ++E : 0)] = 1, n.depth[p] = 0, n.opt_len--, b && (n.static_len -= z[2 * p + 1]);
      for (u.max_code = E, a = n.heap_len >> 1; a >= 1; a--)
        ne(n, h, a);
      p = H;
      do
        a = n.heap[1], n.heap[1] = n.heap[n.heap_len--], ne(n, h, 1), f = n.heap[1], n.heap[--n.heap_max] = a, n.heap[--n.heap_max] = f, h[2 * p] = h[2 * a] + h[2 * f], n.depth[p] = (n.depth[a] >= n.depth[f] ? n.depth[a] : n.depth[f]) + 1, h[2 * a + 1] = h[2 * f + 1] = p, n.heap[1] = p++, ne(n, h, 1);
      while (n.heap_len >= 2);
      n.heap[--n.heap_max] = n.heap[1], function(C, me) {
        var re, $, J, he, pe, ge, K = me.dyn_tree, W = me.max_code, se = me.stat_desc.static_tree, Se = me.stat_desc.has_stree, ie = me.stat_desc.extra_bits, ye = me.stat_desc.extra_base, be = me.stat_desc.max_length, ce = 0;
        for (he = 0; he <= m; he++)
          C.bl_count[he] = 0;
        for (K[2 * C.heap[C.heap_max] + 1] = 0, re = C.heap_max + 1; re < 573; re++)
          (he = K[2 * K[2 * ($ = C.heap[re]) + 1] + 1] + 1) > be && (he = be, ce++), K[2 * $ + 1] = he, $ > W || (C.bl_count[he]++, pe = 0, $ >= ye && (pe = ie[$ - ye]), ge = K[2 * $], C.opt_len += ge * (he + pe), Se && (C.static_len += ge * (se[2 * $ + 1] + pe)));
        if (ce !== 0) {
          do {
            for (he = be - 1; C.bl_count[he] === 0; )
              he--;
            C.bl_count[he]--, C.bl_count[he + 1] += 2, C.bl_count[be]--, ce -= 2;
          } while (ce > 0);
          for (he = be; he !== 0; he--)
            for ($ = C.bl_count[he]; $ !== 0; )
              (J = C.heap[--re]) > W || (K[2 * J + 1] !== he && (C.opt_len += (he - K[2 * J + 1]) * K[2 * J], K[2 * J + 1] = he), $--);
        }
      }(n, u), V(h, E, n.bl_count);
    }, we = function(n, u, a) {
      var f, p, h = -1, z = u[1], b = 0, H = 7, E = 4;
      for (z === 0 && (H = 138, E = 3), u[2 * (a + 1) + 1] = 65535, f = 0; f <= a; f++)
        p = z, z = u[2 * (f + 1) + 1], ++b < H && p === z || (b < E ? n.bl_tree[2 * p] += b : p !== 0 ? (p !== h && n.bl_tree[2 * p]++, n.bl_tree[32]++) : b <= 10 ? n.bl_tree[34]++ : n.bl_tree[36]++, b = 0, h = p, z === 0 ? (H = 138, E = 3) : p === z ? (H = 6, E = 3) : (H = 7, E = 4));
    }, fe = function(n, u, a) {
      var f, p, h = -1, z = u[1], b = 0, H = 7, E = 4;
      for (z === 0 && (H = 138, E = 3), f = 0; f <= a; f++)
        if (p = z, z = u[2 * (f + 1) + 1], !(++b < H && p === z)) {
          if (b < E)
            do
              S(n, p, n.bl_tree);
            while (--b != 0);
          else
            p !== 0 ? (p !== h && (S(n, p, n.bl_tree), b--), S(n, 16, n.bl_tree), q(n, b - 3, 2)) : b <= 10 ? (S(n, 17, n.bl_tree), q(n, b - 3, 3)) : (S(n, 18, n.bl_tree), q(n, b - 11, 7));
          b = 0, h = p, z === 0 ? (H = 138, E = 3) : p === z ? (H = 6, E = 3) : (H = 7, E = 4);
        }
    }, ve = !1, Ee = function(n, u, a, f) {
      q(n, 0 + (f ? 1 : 0), 3), ee(n), R(n, a), R(n, ~a), a && n.pending_buf.set(n.window.subarray(u, u + a), n.pending), n.pending += a;
    }, Qe = function(n, u, a, f) {
      var p, h, z = 0;
      n.level > 0 ? (n.strm.data_type === 2 && (n.strm.data_type = function(b) {
        var H, E = 4093624447;
        for (H = 0; H <= 31; H++, E >>>= 1)
          if (1 & E && b.dyn_ltree[2 * H] !== 0)
            return 0;
        if (b.dyn_ltree[18] !== 0 || b.dyn_ltree[20] !== 0 || b.dyn_ltree[26] !== 0)
          return 1;
        for (H = 32; H < o; H++)
          if (b.dyn_ltree[2 * H] !== 0)
            return 1;
        return 0;
      }(n)), ue(n, n.l_desc), ue(n, n.d_desc), z = function(b) {
        var H;
        for (we(b, b.dyn_ltree, b.l_desc.max_code), we(b, b.dyn_dtree, b.d_desc.max_code), ue(b, b.bl_desc), H = 18; H >= 3 && b.bl_tree[2 * g[H] + 1] === 0; H--)
          ;
        return b.opt_len += 3 * (H + 1) + 5 + 5 + 4, H;
      }(n), p = n.opt_len + 3 + 7 >>> 3, (h = n.static_len + 3 + 7 >>> 3) <= p && (p = h)) : p = h = a + 5, a + 4 <= p && u !== -1 ? Ee(n, u, a, f) : n.strategy === 4 || h === p ? (q(n, 2 + (f ? 1 : 0), 3), oe(n, v, x)) : (q(n, 4 + (f ? 1 : 0), 3), function(b, H, E, C) {
        var me;
        for (q(b, H - 257, 5), q(b, E - 1, 5), q(b, C - 4, 4), me = 0; me < C; me++)
          q(b, b.bl_tree[2 * g[me] + 1], 3);
        fe(b, b.dyn_ltree, H - 1), fe(b, b.dyn_dtree, E - 1);
      }(n, n.l_desc.max_code + 1, n.d_desc.max_code + 1, z + 1), oe(n, n.dyn_ltree, n.dyn_dtree)), Y(n), f && ee(n);
    }, ae = { _tr_init: function(n) {
      ve || (function() {
        var u, a, f, p, h, z = new Array(16);
        for (f = 0, p = 0; p < 28; p++)
          for (_[p] = f, u = 0; u < 1 << y[p]; u++)
            w[f++] = p;
        for (w[f - 1] = p, h = 0, p = 0; p < 16; p++)
          for (T[p] = h, u = 0; u < 1 << d[p]; u++)
            U[h++] = p;
        for (h >>= 7; p < l; p++)
          for (T[p] = h << 7, u = 0; u < 1 << d[p] - 7; u++)
            U[256 + h++] = p;
        for (a = 0; a <= m; a++)
          z[a] = 0;
        for (u = 0; u <= 143; )
          v[2 * u + 1] = 8, u++, z[8]++;
        for (; u <= 255; )
          v[2 * u + 1] = 9, u++, z[9]++;
        for (; u <= 279; )
          v[2 * u + 1] = 7, u++, z[7]++;
        for (; u <= 287; )
          v[2 * u + 1] = 8, u++, z[8]++;
        for (V(v, 287, z), u = 0; u < l; u++)
          x[2 * u + 1] = 5, x[2 * u] = B(u, 5);
        D = new F(v, y, 257, s, m), k = new F(x, d, 0, l, m), O = new F(new Array(0), c, 0, 19, 7);
      }(), ve = !0), n.l_desc = new L(n.dyn_ltree, D), n.d_desc = new L(n.dyn_dtree, k), n.bl_desc = new L(n.bl_tree, O), n.bi_buf = 0, n.bi_valid = 0, Y(n);
    }, _tr_stored_block: Ee, _tr_flush_block: Qe, _tr_tally: function(n, u, a) {
      return n.pending_buf[n.sym_buf + n.sym_next++] = u, n.pending_buf[n.sym_buf + n.sym_next++] = u >> 8, n.pending_buf[n.sym_buf + n.sym_next++] = a, u === 0 ? n.dyn_ltree[2 * a]++ : (n.matches++, u--, n.dyn_ltree[2 * (w[a] + o + 1)]++, n.dyn_dtree[2 * A(u)]++), n.sym_next === n.sym_end;
    }, _tr_align: function(n) {
      q(n, 2, 3), S(n, 256, v), function(u) {
        u.bi_valid === 16 ? (R(u, u.bi_buf), u.bi_buf = 0, u.bi_valid = 0) : u.bi_valid >= 8 && (u.pending_buf[u.pending++] = 255 & u.bi_buf, u.bi_buf >>= 8, u.bi_valid -= 8);
      }(n);
    } }, X = function(n, u, a, f) {
      for (var p = 65535 & n | 0, h = n >>> 16 & 65535 | 0, z = 0; a !== 0; ) {
        a -= z = a > 2e3 ? 2e3 : a;
        do
          h = h + (p = p + u[f++] | 0) | 0;
        while (--z);
        p %= 65521, h %= 65521;
      }
      return p | h << 16 | 0;
    }, N = new Uint32Array(function() {
      for (var n, u = [], a = 0; a < 256; a++) {
        n = a;
        for (var f = 0; f < 8; f++)
          n = 1 & n ? 3988292384 ^ n >>> 1 : n >>> 1;
        u[a] = n;
      }
      return u;
    }()), P = function(n, u, a, f) {
      var p = N, h = f + a;
      n ^= -1;
      for (var z = f; z < h; z++)
        n = n >>> 8 ^ p[255 & (n ^ u[z])];
      return -1 ^ n;
    }, Q = { 2: "need dictionary", 1: "stream end", 0: "", "-1": "file error", "-2": "stream error", "-3": "data error", "-4": "insufficient memory", "-5": "buffer error", "-6": "incompatible version" }, Z = { Z_NO_FLUSH: 0, Z_PARTIAL_FLUSH: 1, Z_SYNC_FLUSH: 2, Z_FULL_FLUSH: 3, Z_FINISH: 4, Z_BLOCK: 5, Z_TREES: 6, Z_OK: 0, Z_STREAM_END: 1, Z_NEED_DICT: 2, Z_ERRNO: -1, Z_STREAM_ERROR: -2, Z_DATA_ERROR: -3, Z_MEM_ERROR: -4, Z_BUF_ERROR: -5, Z_NO_COMPRESSION: 0, Z_BEST_SPEED: 1, Z_BEST_COMPRESSION: 9, Z_DEFAULT_COMPRESSION: -1, Z_FILTERED: 1, Z_HUFFMAN_ONLY: 2, Z_RLE: 3, Z_FIXED: 4, Z_DEFAULT_STRATEGY: 0, Z_BINARY: 0, Z_TEXT: 1, Z_UNKNOWN: 2, Z_DEFLATED: 8 }, xe = ae._tr_init, _e = ae._tr_stored_block, Pe = ae._tr_flush_block, Xe = ae._tr_tally, Wr = ae._tr_align, je = Z.Z_NO_FLUSH, zr = Z.Z_PARTIAL_FLUSH, M = Z.Z_FULL_FLUSH, j = Z.Z_FINISH, I = Z.Z_BLOCK, G = Z.Z_OK, le = Z.Z_STREAM_END, Ae = Z.Z_STREAM_ERROR, Oe = Z.Z_DATA_ERROR, He = Z.Z_BUF_ERROR, Ne = Z.Z_DEFAULT_COMPRESSION, ze = Z.Z_FILTERED, Le = Z.Z_HUFFMAN_ONLY, er = Z.Z_RLE, Ve = Z.Z_FIXED, hr = Z.Z_DEFAULT_STRATEGY, dt = Z.Z_UNKNOWN, Yr = Z.Z_DEFLATED, mr = 258, rr = 262, wr = 42, Ie = 113, Mr = 666, lr = function(n, u) {
      return n.msg = Q[u], u;
    }, Wt = function(n) {
      return 2 * n - (n > 4 ? 9 : 0);
    }, Ze = function(n) {
      for (var u = n.length; --u >= 0; )
        n[u] = 0;
    }, Bn = function(n) {
      var u, a, f, p = n.w_size;
      f = u = n.hash_size;
      do
        a = n.head[--f], n.head[f] = a >= p ? a - p : 0;
      while (--u);
      f = u = p;
      do
        a = n.prev[--f], n.prev[f] = a >= p ? a - p : 0;
      while (--u);
    }, kr = function(n, u, a) {
      return (u << n.hash_shift ^ a) & n.hash_mask;
    }, tr = function(n) {
      var u = n.state, a = u.pending;
      a > n.avail_out && (a = n.avail_out), a !== 0 && (n.output.set(u.pending_buf.subarray(u.pending_out, u.pending_out + a), n.next_out), n.next_out += a, u.pending_out += a, n.total_out += a, n.avail_out -= a, u.pending -= a, u.pending === 0 && (u.pending_out = 0));
    }, nr = function(n, u) {
      Pe(n, n.block_start >= 0 ? n.block_start : -1, n.strstart - n.block_start, u), n.block_start = n.strstart, tr(n.strm);
    }, De = function(n, u) {
      n.pending_buf[n.pending++] = u;
    }, ht = function(n, u) {
      n.pending_buf[n.pending++] = u >>> 8 & 255, n.pending_buf[n.pending++] = 255 & u;
    }, On = function(n, u, a, f) {
      var p = n.avail_in;
      return p > f && (p = f), p === 0 ? 0 : (n.avail_in -= p, u.set(n.input.subarray(n.next_in, n.next_in + p), a), n.state.wrap === 1 ? n.adler = X(n.adler, u, p, a) : n.state.wrap === 2 && (n.adler = P(n.adler, u, p, a)), n.next_in += p, n.total_in += p, p);
    }, ei = function(n, u) {
      var a, f, p = n.max_chain_length, h = n.strstart, z = n.prev_length, b = n.nice_match, H = n.strstart > n.w_size - rr ? n.strstart - (n.w_size - rr) : 0, E = n.window, C = n.w_mask, me = n.prev, re = n.strstart + mr, $ = E[h + z - 1], J = E[h + z];
      n.prev_length >= n.good_match && (p >>= 2), b > n.lookahead && (b = n.lookahead);
      do
        if (E[(a = u) + z] === J && E[a + z - 1] === $ && E[a] === E[h] && E[++a] === E[h + 1]) {
          h += 2, a++;
          do
            ;
          while (E[++h] === E[++a] && E[++h] === E[++a] && E[++h] === E[++a] && E[++h] === E[++a] && E[++h] === E[++a] && E[++h] === E[++a] && E[++h] === E[++a] && E[++h] === E[++a] && h < re);
          if (f = mr - (re - h), h = re - mr, f > z) {
            if (n.match_start = u, z = f, f >= b)
              break;
            $ = E[h + z - 1], J = E[h + z];
          }
        }
      while ((u = me[u & C]) > H && --p != 0);
      return z <= n.lookahead ? z : n.lookahead;
    }, Kr = function(n) {
      var u, a, f, p = n.w_size;
      do {
        if (a = n.window_size - n.lookahead - n.strstart, n.strstart >= p + (p - rr) && (n.window.set(n.window.subarray(p, p + p - a), 0), n.match_start -= p, n.strstart -= p, n.block_start -= p, n.insert > n.strstart && (n.insert = n.strstart), Bn(n), a += p), n.strm.avail_in === 0)
          break;
        if (u = On(n.strm, n.window, n.strstart + n.lookahead, a), n.lookahead += u, n.lookahead + n.insert >= 3)
          for (f = n.strstart - n.insert, n.ins_h = n.window[f], n.ins_h = kr(n, n.ins_h, n.window[f + 1]); n.insert && (n.ins_h = kr(n, n.ins_h, n.window[f + 3 - 1]), n.prev[f & n.w_mask] = n.head[n.ins_h], n.head[n.ins_h] = f, f++, n.insert--, !(n.lookahead + n.insert < 3)); )
            ;
      } while (n.lookahead < rr && n.strm.avail_in !== 0);
    }, ri = function(n, u) {
      var a, f, p, h = n.pending_buf_size - 5 > n.w_size ? n.w_size : n.pending_buf_size - 5, z = 0, b = n.strm.avail_in;
      do {
        if (a = 65535, p = n.bi_valid + 42 >> 3, n.strm.avail_out < p || (p = n.strm.avail_out - p, a > (f = n.strstart - n.block_start) + n.strm.avail_in && (a = f + n.strm.avail_in), a > p && (a = p), a < h && (a === 0 && u !== j || u === je || a !== f + n.strm.avail_in)))
          break;
        z = u === j && a === f + n.strm.avail_in ? 1 : 0, _e(n, 0, 0, z), n.pending_buf[n.pending - 4] = a, n.pending_buf[n.pending - 3] = a >> 8, n.pending_buf[n.pending - 2] = ~a, n.pending_buf[n.pending - 1] = ~a >> 8, tr(n.strm), f && (f > a && (f = a), n.strm.output.set(n.window.subarray(n.block_start, n.block_start + f), n.strm.next_out), n.strm.next_out += f, n.strm.avail_out -= f, n.strm.total_out += f, n.block_start += f, a -= f), a && (On(n.strm, n.strm.output, n.strm.next_out, a), n.strm.next_out += a, n.strm.avail_out -= a, n.strm.total_out += a);
      } while (z === 0);
      return (b -= n.strm.avail_in) && (b >= n.w_size ? (n.matches = 2, n.window.set(n.strm.input.subarray(n.strm.next_in - n.w_size, n.strm.next_in), 0), n.strstart = n.w_size, n.insert = n.strstart) : (n.window_size - n.strstart <= b && (n.strstart -= n.w_size, n.window.set(n.window.subarray(n.w_size, n.w_size + n.strstart), 0), n.matches < 2 && n.matches++, n.insert > n.strstart && (n.insert = n.strstart)), n.window.set(n.strm.input.subarray(n.strm.next_in - b, n.strm.next_in), n.strstart), n.strstart += b, n.insert += b > n.w_size - n.insert ? n.w_size - n.insert : b), n.block_start = n.strstart), n.high_water < n.strstart && (n.high_water = n.strstart), z ? 4 : u !== je && u !== j && n.strm.avail_in === 0 && n.strstart === n.block_start ? 2 : (p = n.window_size - n.strstart, n.strm.avail_in > p && n.block_start >= n.w_size && (n.block_start -= n.w_size, n.strstart -= n.w_size, n.window.set(n.window.subarray(n.w_size, n.w_size + n.strstart), 0), n.matches < 2 && n.matches++, p += n.w_size, n.insert > n.strstart && (n.insert = n.strstart)), p > n.strm.avail_in && (p = n.strm.avail_in), p && (On(n.strm, n.window, n.strstart, p), n.strstart += p, n.insert += p > n.w_size - n.insert ? n.w_size - n.insert : p), n.high_water < n.strstart && (n.high_water = n.strstart), p = n.bi_valid + 42 >> 3, h = (p = n.pending_buf_size - p > 65535 ? 65535 : n.pending_buf_size - p) > n.w_size ? n.w_size : p, ((f = n.strstart - n.block_start) >= h || (f || u === j) && u !== je && n.strm.avail_in === 0 && f <= p) && (a = f > p ? p : f, z = u === j && n.strm.avail_in === 0 && a === f ? 1 : 0, _e(n, n.block_start, a, z), n.block_start += a, tr(n.strm)), z ? 3 : 1);
    }, Fn = function(n, u) {
      for (var a, f; ; ) {
        if (n.lookahead < rr) {
          if (Kr(n), n.lookahead < rr && u === je)
            return 1;
          if (n.lookahead === 0)
            break;
        }
        if (a = 0, n.lookahead >= 3 && (n.ins_h = kr(n, n.ins_h, n.window[n.strstart + 3 - 1]), a = n.prev[n.strstart & n.w_mask] = n.head[n.ins_h], n.head[n.ins_h] = n.strstart), a !== 0 && n.strstart - a <= n.w_size - rr && (n.match_length = ei(n, a)), n.match_length >= 3)
          if (f = Xe(n, n.strstart - n.match_start, n.match_length - 3), n.lookahead -= n.match_length, n.match_length <= n.max_lazy_match && n.lookahead >= 3) {
            n.match_length--;
            do
              n.strstart++, n.ins_h = kr(n, n.ins_h, n.window[n.strstart + 3 - 1]), a = n.prev[n.strstart & n.w_mask] = n.head[n.ins_h], n.head[n.ins_h] = n.strstart;
            while (--n.match_length != 0);
            n.strstart++;
          } else
            n.strstart += n.match_length, n.match_length = 0, n.ins_h = n.window[n.strstart], n.ins_h = kr(n, n.ins_h, n.window[n.strstart + 1]);
        else
          f = Xe(n, 0, n.window[n.strstart]), n.lookahead--, n.strstart++;
        if (f && (nr(n, !1), n.strm.avail_out === 0))
          return 1;
      }
      return n.insert = n.strstart < 2 ? n.strstart : 2, u === j ? (nr(n, !0), n.strm.avail_out === 0 ? 3 : 4) : n.sym_next && (nr(n, !1), n.strm.avail_out === 0) ? 1 : 2;
    }, Jr = function(n, u) {
      for (var a, f, p; ; ) {
        if (n.lookahead < rr) {
          if (Kr(n), n.lookahead < rr && u === je)
            return 1;
          if (n.lookahead === 0)
            break;
        }
        if (a = 0, n.lookahead >= 3 && (n.ins_h = kr(n, n.ins_h, n.window[n.strstart + 3 - 1]), a = n.prev[n.strstart & n.w_mask] = n.head[n.ins_h], n.head[n.ins_h] = n.strstart), n.prev_length = n.match_length, n.prev_match = n.match_start, n.match_length = 2, a !== 0 && n.prev_length < n.max_lazy_match && n.strstart - a <= n.w_size - rr && (n.match_length = ei(n, a), n.match_length <= 5 && (n.strategy === ze || n.match_length === 3 && n.strstart - n.match_start > 4096) && (n.match_length = 2)), n.prev_length >= 3 && n.match_length <= n.prev_length) {
          p = n.strstart + n.lookahead - 3, f = Xe(n, n.strstart - 1 - n.prev_match, n.prev_length - 3), n.lookahead -= n.prev_length - 1, n.prev_length -= 2;
          do
            ++n.strstart <= p && (n.ins_h = kr(n, n.ins_h, n.window[n.strstart + 3 - 1]), a = n.prev[n.strstart & n.w_mask] = n.head[n.ins_h], n.head[n.ins_h] = n.strstart);
          while (--n.prev_length != 0);
          if (n.match_available = 0, n.match_length = 2, n.strstart++, f && (nr(n, !1), n.strm.avail_out === 0))
            return 1;
        } else if (n.match_available) {
          if ((f = Xe(n, 0, n.window[n.strstart - 1])) && nr(n, !1), n.strstart++, n.lookahead--, n.strm.avail_out === 0)
            return 1;
        } else
          n.match_available = 1, n.strstart++, n.lookahead--;
      }
      return n.match_available && (f = Xe(n, 0, n.window[n.strstart - 1]), n.match_available = 0), n.insert = n.strstart < 2 ? n.strstart : 2, u === j ? (nr(n, !0), n.strm.avail_out === 0 ? 3 : 4) : n.sym_next && (nr(n, !1), n.strm.avail_out === 0) ? 1 : 2;
    };
    function gr(n, u, a, f, p) {
      this.good_length = n, this.max_lazy = u, this.nice_length = a, this.max_chain = f, this.func = p;
    }
    var mt = [new gr(0, 0, 0, 0, ri), new gr(4, 4, 8, 4, Fn), new gr(4, 5, 16, 8, Fn), new gr(4, 6, 32, 32, Fn), new gr(4, 4, 16, 16, Jr), new gr(8, 16, 32, 32, Jr), new gr(8, 16, 128, 128, Jr), new gr(8, 32, 128, 256, Jr), new gr(32, 128, 258, 1024, Jr), new gr(32, 258, 258, 4096, Jr)];
    function Ju() {
      this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = Yr, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new Uint16Array(1146), this.dyn_dtree = new Uint16Array(122), this.bl_tree = new Uint16Array(78), Ze(this.dyn_ltree), Ze(this.dyn_dtree), Ze(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new Uint16Array(16), this.heap = new Uint16Array(573), Ze(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new Uint16Array(573), Ze(this.depth), this.sym_buf = 0, this.lit_bufsize = 0, this.sym_next = 0, this.sym_end = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
    }
    var gt = function(n) {
      if (!n)
        return 1;
      var u = n.state;
      return !u || u.strm !== n || u.status !== wr && u.status !== 57 && u.status !== 69 && u.status !== 73 && u.status !== 91 && u.status !== 103 && u.status !== Ie && u.status !== Mr ? 1 : 0;
    }, ti = function(n) {
      if (gt(n))
        return lr(n, Ae);
      n.total_in = n.total_out = 0, n.data_type = dt;
      var u = n.state;
      return u.pending = 0, u.pending_out = 0, u.wrap < 0 && (u.wrap = -u.wrap), u.status = u.wrap === 2 ? 57 : u.wrap ? wr : Ie, n.adler = u.wrap === 2 ? 0 : 1, u.last_flush = -2, xe(u), G;
    }, ni = function(n) {
      var u, a = ti(n);
      return a === G && ((u = n.state).window_size = 2 * u.w_size, Ze(u.head), u.max_lazy_match = mt[u.level].max_lazy, u.good_match = mt[u.level].good_length, u.nice_match = mt[u.level].nice_length, u.max_chain_length = mt[u.level].max_chain, u.strstart = 0, u.block_start = 0, u.lookahead = 0, u.insert = 0, u.match_length = u.prev_length = 2, u.match_available = 0, u.ins_h = 0), a;
    }, ai = function(n, u, a, f, p, h) {
      if (!n)
        return Ae;
      var z = 1;
      if (u === Ne && (u = 6), f < 0 ? (z = 0, f = -f) : f > 15 && (z = 2, f -= 16), p < 1 || p > 9 || a !== Yr || f < 8 || f > 15 || u < 0 || u > 9 || h < 0 || h > Ve || f === 8 && z !== 1)
        return lr(n, Ae);
      f === 8 && (f = 9);
      var b = new Ju();
      return n.state = b, b.strm = n, b.status = wr, b.wrap = z, b.gzhead = null, b.w_bits = f, b.w_size = 1 << b.w_bits, b.w_mask = b.w_size - 1, b.hash_bits = p + 7, b.hash_size = 1 << b.hash_bits, b.hash_mask = b.hash_size - 1, b.hash_shift = ~~((b.hash_bits + 3 - 1) / 3), b.window = new Uint8Array(2 * b.w_size), b.head = new Uint16Array(b.hash_size), b.prev = new Uint16Array(b.w_size), b.lit_bufsize = 1 << p + 6, b.pending_buf_size = 4 * b.lit_bufsize, b.pending_buf = new Uint8Array(b.pending_buf_size), b.sym_buf = b.lit_bufsize, b.sym_end = 3 * (b.lit_bufsize - 1), b.level = u, b.strategy = h, b.method = a, ni(n);
    }, vt = { deflateInit: function(n, u) {
      return ai(n, u, Yr, 15, 8, hr);
    }, deflateInit2: ai, deflateReset: ni, deflateResetKeep: ti, deflateSetHeader: function(n, u) {
      return gt(n) || n.state.wrap !== 2 ? Ae : (n.state.gzhead = u, G);
    }, deflate: function(n, u) {
      if (gt(n) || u > I || u < 0)
        return n ? lr(n, Ae) : Ae;
      var a = n.state;
      if (!n.output || n.avail_in !== 0 && !n.input || a.status === Mr && u !== j)
        return lr(n, n.avail_out === 0 ? He : Ae);
      var f = a.last_flush;
      if (a.last_flush = u, a.pending !== 0) {
        if (tr(n), n.avail_out === 0)
          return a.last_flush = -1, G;
      } else if (n.avail_in === 0 && Wt(u) <= Wt(f) && u !== j)
        return lr(n, He);
      if (a.status === Mr && n.avail_in !== 0)
        return lr(n, He);
      if (a.status === wr && a.wrap === 0 && (a.status = Ie), a.status === wr) {
        var p = Yr + (a.w_bits - 8 << 4) << 8;
        if (p |= (a.strategy >= Le || a.level < 2 ? 0 : a.level < 6 ? 1 : a.level === 6 ? 2 : 3) << 6, a.strstart !== 0 && (p |= 32), ht(a, p += 31 - p % 31), a.strstart !== 0 && (ht(a, n.adler >>> 16), ht(a, 65535 & n.adler)), n.adler = 1, a.status = Ie, tr(n), a.pending !== 0)
          return a.last_flush = -1, G;
      }
      if (a.status === 57) {
        if (n.adler = 0, De(a, 31), De(a, 139), De(a, 8), a.gzhead)
          De(a, (a.gzhead.text ? 1 : 0) + (a.gzhead.hcrc ? 2 : 0) + (a.gzhead.extra ? 4 : 0) + (a.gzhead.name ? 8 : 0) + (a.gzhead.comment ? 16 : 0)), De(a, 255 & a.gzhead.time), De(a, a.gzhead.time >> 8 & 255), De(a, a.gzhead.time >> 16 & 255), De(a, a.gzhead.time >> 24 & 255), De(a, a.level === 9 ? 2 : a.strategy >= Le || a.level < 2 ? 4 : 0), De(a, 255 & a.gzhead.os), a.gzhead.extra && a.gzhead.extra.length && (De(a, 255 & a.gzhead.extra.length), De(a, a.gzhead.extra.length >> 8 & 255)), a.gzhead.hcrc && (n.adler = P(n.adler, a.pending_buf, a.pending, 0)), a.gzindex = 0, a.status = 69;
        else if (De(a, 0), De(a, 0), De(a, 0), De(a, 0), De(a, 0), De(a, a.level === 9 ? 2 : a.strategy >= Le || a.level < 2 ? 4 : 0), De(a, 3), a.status = Ie, tr(n), a.pending !== 0)
          return a.last_flush = -1, G;
      }
      if (a.status === 69) {
        if (a.gzhead.extra) {
          for (var h = a.pending, z = (65535 & a.gzhead.extra.length) - a.gzindex; a.pending + z > a.pending_buf_size; ) {
            var b = a.pending_buf_size - a.pending;
            if (a.pending_buf.set(a.gzhead.extra.subarray(a.gzindex, a.gzindex + b), a.pending), a.pending = a.pending_buf_size, a.gzhead.hcrc && a.pending > h && (n.adler = P(n.adler, a.pending_buf, a.pending - h, h)), a.gzindex += b, tr(n), a.pending !== 0)
              return a.last_flush = -1, G;
            h = 0, z -= b;
          }
          var H = new Uint8Array(a.gzhead.extra);
          a.pending_buf.set(H.subarray(a.gzindex, a.gzindex + z), a.pending), a.pending += z, a.gzhead.hcrc && a.pending > h && (n.adler = P(n.adler, a.pending_buf, a.pending - h, h)), a.gzindex = 0;
        }
        a.status = 73;
      }
      if (a.status === 73) {
        if (a.gzhead.name) {
          var E, C = a.pending;
          do {
            if (a.pending === a.pending_buf_size) {
              if (a.gzhead.hcrc && a.pending > C && (n.adler = P(n.adler, a.pending_buf, a.pending - C, C)), tr(n), a.pending !== 0)
                return a.last_flush = -1, G;
              C = 0;
            }
            E = a.gzindex < a.gzhead.name.length ? 255 & a.gzhead.name.charCodeAt(a.gzindex++) : 0, De(a, E);
          } while (E !== 0);
          a.gzhead.hcrc && a.pending > C && (n.adler = P(n.adler, a.pending_buf, a.pending - C, C)), a.gzindex = 0;
        }
        a.status = 91;
      }
      if (a.status === 91) {
        if (a.gzhead.comment) {
          var me, re = a.pending;
          do {
            if (a.pending === a.pending_buf_size) {
              if (a.gzhead.hcrc && a.pending > re && (n.adler = P(n.adler, a.pending_buf, a.pending - re, re)), tr(n), a.pending !== 0)
                return a.last_flush = -1, G;
              re = 0;
            }
            me = a.gzindex < a.gzhead.comment.length ? 255 & a.gzhead.comment.charCodeAt(a.gzindex++) : 0, De(a, me);
          } while (me !== 0);
          a.gzhead.hcrc && a.pending > re && (n.adler = P(n.adler, a.pending_buf, a.pending - re, re));
        }
        a.status = 103;
      }
      if (a.status === 103) {
        if (a.gzhead.hcrc) {
          if (a.pending + 2 > a.pending_buf_size && (tr(n), a.pending !== 0))
            return a.last_flush = -1, G;
          De(a, 255 & n.adler), De(a, n.adler >> 8 & 255), n.adler = 0;
        }
        if (a.status = Ie, tr(n), a.pending !== 0)
          return a.last_flush = -1, G;
      }
      if (n.avail_in !== 0 || a.lookahead !== 0 || u !== je && a.status !== Mr) {
        var $ = a.level === 0 ? ri(a, u) : a.strategy === Le ? function(J, he) {
          for (var pe; ; ) {
            if (J.lookahead === 0 && (Kr(J), J.lookahead === 0)) {
              if (he === je)
                return 1;
              break;
            }
            if (J.match_length = 0, pe = Xe(J, 0, J.window[J.strstart]), J.lookahead--, J.strstart++, pe && (nr(J, !1), J.strm.avail_out === 0))
              return 1;
          }
          return J.insert = 0, he === j ? (nr(J, !0), J.strm.avail_out === 0 ? 3 : 4) : J.sym_next && (nr(J, !1), J.strm.avail_out === 0) ? 1 : 2;
        }(a, u) : a.strategy === er ? function(J, he) {
          for (var pe, ge, K, W, se = J.window; ; ) {
            if (J.lookahead <= mr) {
              if (Kr(J), J.lookahead <= mr && he === je)
                return 1;
              if (J.lookahead === 0)
                break;
            }
            if (J.match_length = 0, J.lookahead >= 3 && J.strstart > 0 && (ge = se[K = J.strstart - 1]) === se[++K] && ge === se[++K] && ge === se[++K]) {
              W = J.strstart + mr;
              do
                ;
              while (ge === se[++K] && ge === se[++K] && ge === se[++K] && ge === se[++K] && ge === se[++K] && ge === se[++K] && ge === se[++K] && ge === se[++K] && K < W);
              J.match_length = mr - (W - K), J.match_length > J.lookahead && (J.match_length = J.lookahead);
            }
            if (J.match_length >= 3 ? (pe = Xe(J, 1, J.match_length - 3), J.lookahead -= J.match_length, J.strstart += J.match_length, J.match_length = 0) : (pe = Xe(J, 0, J.window[J.strstart]), J.lookahead--, J.strstart++), pe && (nr(J, !1), J.strm.avail_out === 0))
              return 1;
          }
          return J.insert = 0, he === j ? (nr(J, !0), J.strm.avail_out === 0 ? 3 : 4) : J.sym_next && (nr(J, !1), J.strm.avail_out === 0) ? 1 : 2;
        }(a, u) : mt[a.level].func(a, u);
        if ($ !== 3 && $ !== 4 || (a.status = Mr), $ === 1 || $ === 3)
          return n.avail_out === 0 && (a.last_flush = -1), G;
        if ($ === 2 && (u === zr ? Wr(a) : u !== I && (_e(a, 0, 0, !1), u === M && (Ze(a.head), a.lookahead === 0 && (a.strstart = 0, a.block_start = 0, a.insert = 0))), tr(n), n.avail_out === 0))
          return a.last_flush = -1, G;
      }
      return u !== j ? G : a.wrap <= 0 ? le : (a.wrap === 2 ? (De(a, 255 & n.adler), De(a, n.adler >> 8 & 255), De(a, n.adler >> 16 & 255), De(a, n.adler >> 24 & 255), De(a, 255 & n.total_in), De(a, n.total_in >> 8 & 255), De(a, n.total_in >> 16 & 255), De(a, n.total_in >> 24 & 255)) : (ht(a, n.adler >>> 16), ht(a, 65535 & n.adler)), tr(n), a.wrap > 0 && (a.wrap = -a.wrap), a.pending !== 0 ? G : le);
    }, deflateEnd: function(n) {
      if (gt(n))
        return Ae;
      var u = n.state.status;
      return n.state = null, u === Ie ? lr(n, Oe) : G;
    }, deflateSetDictionary: function(n, u) {
      var a = u.length;
      if (gt(n))
        return Ae;
      var f = n.state, p = f.wrap;
      if (p === 2 || p === 1 && f.status !== wr || f.lookahead)
        return Ae;
      if (p === 1 && (n.adler = X(n.adler, u, a, 0)), f.wrap = 0, a >= f.w_size) {
        p === 0 && (Ze(f.head), f.strstart = 0, f.block_start = 0, f.insert = 0);
        var h = new Uint8Array(f.w_size);
        h.set(u.subarray(a - f.w_size, a), 0), u = h, a = f.w_size;
      }
      var z = n.avail_in, b = n.next_in, H = n.input;
      for (n.avail_in = a, n.next_in = 0, n.input = u, Kr(f); f.lookahead >= 3; ) {
        var E = f.strstart, C = f.lookahead - 2;
        do
          f.ins_h = kr(f, f.ins_h, f.window[E + 3 - 1]), f.prev[E & f.w_mask] = f.head[f.ins_h], f.head[f.ins_h] = E, E++;
        while (--C);
        f.strstart = E, f.lookahead = 2, Kr(f);
      }
      return f.strstart += f.lookahead, f.block_start = f.strstart, f.insert = f.lookahead, f.lookahead = 0, f.match_length = f.prev_length = 2, f.match_available = 0, n.next_in = b, n.input = H, n.avail_in = z, f.wrap = p, G;
    }, deflateInfo: "pako deflate (from Nodeca project)" };
    function Pn(n) {
      return Pn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(u) {
        return typeof u;
      } : function(u) {
        return u && typeof Symbol == "function" && u.constructor === Symbol && u !== Symbol.prototype ? "symbol" : typeof u;
      }, Pn(n);
    }
    var Qu = function(n, u) {
      return Object.prototype.hasOwnProperty.call(n, u);
    }, ii = function(n) {
      for (var u = Array.prototype.slice.call(arguments, 1); u.length; ) {
        var a = u.shift();
        if (a) {
          if (Pn(a) !== "object")
            throw new TypeError(a + "must be non-object");
          for (var f in a)
            Qu(a, f) && (n[f] = a[f]);
        }
      }
      return n;
    }, oi = function(n) {
      for (var u = 0, a = 0, f = n.length; a < f; a++)
        u += n[a].length;
      for (var p = new Uint8Array(u), h = 0, z = 0, b = n.length; h < b; h++) {
        var H = n[h];
        p.set(H, z), z += H.length;
      }
      return p;
    }, ui = !0;
    try {
      String.fromCharCode.apply(null, new Uint8Array(1));
    } catch {
      ui = !1;
    }
    for (var bt = new Uint8Array(256), Br = 0; Br < 256; Br++)
      bt[Br] = Br >= 252 ? 6 : Br >= 248 ? 5 : Br >= 240 ? 4 : Br >= 224 ? 3 : Br >= 192 ? 2 : 1;
    bt[254] = bt[254] = 1;
    var Rn = function(n) {
      if (typeof TextEncoder == "function" && TextEncoder.prototype.encode)
        return new TextEncoder().encode(n);
      var u, a, f, p, h, z = n.length, b = 0;
      for (p = 0; p < z; p++)
        (64512 & (a = n.charCodeAt(p))) == 55296 && p + 1 < z && (64512 & (f = n.charCodeAt(p + 1))) == 56320 && (a = 65536 + (a - 55296 << 10) + (f - 56320), p++), b += a < 128 ? 1 : a < 2048 ? 2 : a < 65536 ? 3 : 4;
      for (u = new Uint8Array(b), h = 0, p = 0; h < b; p++)
        (64512 & (a = n.charCodeAt(p))) == 55296 && p + 1 < z && (64512 & (f = n.charCodeAt(p + 1))) == 56320 && (a = 65536 + (a - 55296 << 10) + (f - 56320), p++), a < 128 ? u[h++] = a : a < 2048 ? (u[h++] = 192 | a >>> 6, u[h++] = 128 | 63 & a) : a < 65536 ? (u[h++] = 224 | a >>> 12, u[h++] = 128 | a >>> 6 & 63, u[h++] = 128 | 63 & a) : (u[h++] = 240 | a >>> 18, u[h++] = 128 | a >>> 12 & 63, u[h++] = 128 | a >>> 6 & 63, u[h++] = 128 | 63 & a);
      return u;
    }, es = function(n, u) {
      var a, f, p = u || n.length;
      if (typeof TextDecoder == "function" && TextDecoder.prototype.decode)
        return new TextDecoder().decode(n.subarray(0, u));
      var h = new Array(2 * p);
      for (f = 0, a = 0; a < p; ) {
        var z = n[a++];
        if (z < 128)
          h[f++] = z;
        else {
          var b = bt[z];
          if (b > 4)
            h[f++] = 65533, a += b - 1;
          else {
            for (z &= b === 2 ? 31 : b === 3 ? 15 : 7; b > 1 && a < p; )
              z = z << 6 | 63 & n[a++], b--;
            b > 1 ? h[f++] = 65533 : z < 65536 ? h[f++] = z : (z -= 65536, h[f++] = 55296 | z >> 10 & 1023, h[f++] = 56320 | 1023 & z);
          }
        }
      }
      return function(H, E) {
        if (E < 65534 && H.subarray && ui)
          return String.fromCharCode.apply(null, H.length === E ? H : H.subarray(0, E));
        for (var C = "", me = 0; me < E; me++)
          C += String.fromCharCode(H[me]);
        return C;
      }(h, f);
    }, rs = function(n, u) {
      (u = u || n.length) > n.length && (u = n.length);
      for (var a = u - 1; a >= 0 && (192 & n[a]) == 128; )
        a--;
      return a < 0 || a === 0 ? u : a + bt[n[a]] > u ? a : u;
    }, si = function() {
      this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
    }, li = Object.prototype.toString, ts = Z.Z_NO_FLUSH, ns = Z.Z_SYNC_FLUSH, as = Z.Z_FULL_FLUSH, is = Z.Z_FINISH, Yt = Z.Z_OK, os = Z.Z_STREAM_END, us = Z.Z_DEFAULT_COMPRESSION, ss = Z.Z_DEFAULT_STRATEGY, ls = Z.Z_DEFLATED;
    function yt(n) {
      this.options = ii({ level: us, method: ls, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: ss }, n || {});
      var u = this.options;
      u.raw && u.windowBits > 0 ? u.windowBits = -u.windowBits : u.gzip && u.windowBits > 0 && u.windowBits < 16 && (u.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new si(), this.strm.avail_out = 0;
      var a = vt.deflateInit2(this.strm, u.level, u.method, u.windowBits, u.memLevel, u.strategy);
      if (a !== Yt)
        throw new Error(Q[a]);
      if (u.header && vt.deflateSetHeader(this.strm, u.header), u.dictionary) {
        var f;
        if (f = typeof u.dictionary == "string" ? Rn(u.dictionary) : li.call(u.dictionary) === "[object ArrayBuffer]" ? new Uint8Array(u.dictionary) : u.dictionary, (a = vt.deflateSetDictionary(this.strm, f)) !== Yt)
          throw new Error(Q[a]);
        this._dict_set = !0;
      }
    }
    function Nn(n, u) {
      var a = new yt(u);
      if (a.push(n, !0), a.err)
        throw a.msg || Q[a.err];
      return a.result;
    }
    yt.prototype.push = function(n, u) {
      var a, f, p = this.strm, h = this.options.chunkSize;
      if (this.ended)
        return !1;
      for (f = u === ~~u ? u : u === !0 ? is : ts, typeof n == "string" ? p.input = Rn(n) : li.call(n) === "[object ArrayBuffer]" ? p.input = new Uint8Array(n) : p.input = n, p.next_in = 0, p.avail_in = p.input.length; ; )
        if (p.avail_out === 0 && (p.output = new Uint8Array(h), p.next_out = 0, p.avail_out = h), (f === ns || f === as) && p.avail_out <= 6)
          this.onData(p.output.subarray(0, p.next_out)), p.avail_out = 0;
        else {
          if ((a = vt.deflate(p, f)) === os)
            return p.next_out > 0 && this.onData(p.output.subarray(0, p.next_out)), a = vt.deflateEnd(this.strm), this.onEnd(a), this.ended = !0, a === Yt;
          if (p.avail_out !== 0) {
            if (f > 0 && p.next_out > 0)
              this.onData(p.output.subarray(0, p.next_out)), p.avail_out = 0;
            else if (p.avail_in === 0)
              break;
          } else
            this.onData(p.output);
        }
      return !0;
    }, yt.prototype.onData = function(n) {
      this.chunks.push(n);
    }, yt.prototype.onEnd = function(n) {
      n === Yt && (this.result = oi(this.chunks)), this.chunks = [], this.err = n, this.msg = this.strm.msg;
    };
    var Kt = { Deflate: yt, deflate: Nn, deflateRaw: function(n, u) {
      return (u = u || {}).raw = !0, Nn(n, u);
    }, gzip: function(n, u) {
      return (u = u || {}).gzip = !0, Nn(n, u);
    }, constants: Z }, Jt = 16209, cs = function(n, u) {
      var a, f, p, h, z, b, H, E, C, me, re, $, J, he, pe, ge, K, W, se, Se, ie, ye, be, ce, de = n.state;
      a = n.next_in, be = n.input, f = a + (n.avail_in - 5), p = n.next_out, ce = n.output, h = p - (u - n.avail_out), z = p + (n.avail_out - 257), b = de.dmax, H = de.wsize, E = de.whave, C = de.wnext, me = de.window, re = de.hold, $ = de.bits, J = de.lencode, he = de.distcode, pe = (1 << de.lenbits) - 1, ge = (1 << de.distbits) - 1;
      e:
        do {
          $ < 15 && (re += be[a++] << $, $ += 8, re += be[a++] << $, $ += 8), K = J[re & pe];
          r:
            for (; ; ) {
              if (re >>>= W = K >>> 24, $ -= W, (W = K >>> 16 & 255) === 0)
                ce[p++] = 65535 & K;
              else {
                if (!(16 & W)) {
                  if (!(64 & W)) {
                    K = J[(65535 & K) + (re & (1 << W) - 1)];
                    continue r;
                  }
                  if (32 & W) {
                    de.mode = 16191;
                    break e;
                  }
                  n.msg = "invalid literal/length code", de.mode = Jt;
                  break e;
                }
                se = 65535 & K, (W &= 15) && ($ < W && (re += be[a++] << $, $ += 8), se += re & (1 << W) - 1, re >>>= W, $ -= W), $ < 15 && (re += be[a++] << $, $ += 8, re += be[a++] << $, $ += 8), K = he[re & ge];
                t:
                  for (; ; ) {
                    if (re >>>= W = K >>> 24, $ -= W, !(16 & (W = K >>> 16 & 255))) {
                      if (!(64 & W)) {
                        K = he[(65535 & K) + (re & (1 << W) - 1)];
                        continue t;
                      }
                      n.msg = "invalid distance code", de.mode = Jt;
                      break e;
                    }
                    if (Se = 65535 & K, $ < (W &= 15) && (re += be[a++] << $, ($ += 8) < W && (re += be[a++] << $, $ += 8)), (Se += re & (1 << W) - 1) > b) {
                      n.msg = "invalid distance too far back", de.mode = Jt;
                      break e;
                    }
                    if (re >>>= W, $ -= W, Se > (W = p - h)) {
                      if ((W = Se - W) > E && de.sane) {
                        n.msg = "invalid distance too far back", de.mode = Jt;
                        break e;
                      }
                      if (ie = 0, ye = me, C === 0) {
                        if (ie += H - W, W < se) {
                          se -= W;
                          do
                            ce[p++] = me[ie++];
                          while (--W);
                          ie = p - Se, ye = ce;
                        }
                      } else if (C < W) {
                        if (ie += H + C - W, (W -= C) < se) {
                          se -= W;
                          do
                            ce[p++] = me[ie++];
                          while (--W);
                          if (ie = 0, C < se) {
                            se -= W = C;
                            do
                              ce[p++] = me[ie++];
                            while (--W);
                            ie = p - Se, ye = ce;
                          }
                        }
                      } else if (ie += C - W, W < se) {
                        se -= W;
                        do
                          ce[p++] = me[ie++];
                        while (--W);
                        ie = p - Se, ye = ce;
                      }
                      for (; se > 2; )
                        ce[p++] = ye[ie++], ce[p++] = ye[ie++], ce[p++] = ye[ie++], se -= 3;
                      se && (ce[p++] = ye[ie++], se > 1 && (ce[p++] = ye[ie++]));
                    } else {
                      ie = p - Se;
                      do
                        ce[p++] = ce[ie++], ce[p++] = ce[ie++], ce[p++] = ce[ie++], se -= 3;
                      while (se > 2);
                      se && (ce[p++] = ce[ie++], se > 1 && (ce[p++] = ce[ie++]));
                    }
                    break;
                  }
              }
              break;
            }
        } while (a < f && p < z);
      a -= se = $ >> 3, re &= (1 << ($ -= se << 3)) - 1, n.next_in = a, n.next_out = p, n.avail_in = a < f ? f - a + 5 : 5 - (a - f), n.avail_out = p < z ? z - p + 257 : 257 - (p - z), de.hold = re, de.bits = $;
    }, Qt = 15, fs = new Uint16Array([3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0]), ps = new Uint8Array([16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78]), ds = new Uint16Array([1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0]), hs = new Uint8Array([16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64]), wt = function(n, u, a, f, p, h, z, b) {
      var H, E, C, me, re, $, J, he, pe, ge = b.bits, K = 0, W = 0, se = 0, Se = 0, ie = 0, ye = 0, be = 0, ce = 0, de = 0, Te = 0, qr = null, Or = new Uint16Array(16), un = new Uint16Array(16), sn = null;
      for (K = 0; K <= Qt; K++)
        Or[K] = 0;
      for (W = 0; W < f; W++)
        Or[u[a + W]]++;
      for (ie = ge, Se = Qt; Se >= 1 && Or[Se] === 0; Se--)
        ;
      if (ie > Se && (ie = Se), Se === 0)
        return p[h++] = 20971520, p[h++] = 20971520, b.bits = 1, 0;
      for (se = 1; se < Se && Or[se] === 0; se++)
        ;
      for (ie < se && (ie = se), ce = 1, K = 1; K <= Qt; K++)
        if (ce <<= 1, (ce -= Or[K]) < 0)
          return -1;
      if (ce > 0 && (n === 0 || Se !== 1))
        return -1;
      for (un[1] = 0, K = 1; K < Qt; K++)
        un[K + 1] = un[K] + Or[K];
      for (W = 0; W < f; W++)
        u[a + W] !== 0 && (z[un[u[a + W]]++] = W);
      if (n === 0 ? (qr = sn = z, $ = 20) : n === 1 ? (qr = fs, sn = ps, $ = 257) : (qr = ds, sn = hs, $ = 0), Te = 0, W = 0, K = se, re = h, ye = ie, be = 0, C = -1, me = (de = 1 << ie) - 1, n === 1 && de > 852 || n === 2 && de > 592)
        return 1;
      for (; ; ) {
        J = K - be, z[W] + 1 < $ ? (he = 0, pe = z[W]) : z[W] >= $ ? (he = sn[z[W] - $], pe = qr[z[W] - $]) : (he = 96, pe = 0), H = 1 << K - be, se = E = 1 << ye;
        do
          p[re + (Te >> be) + (E -= H)] = J << 24 | he << 16 | pe | 0;
        while (E !== 0);
        for (H = 1 << K - 1; Te & H; )
          H >>= 1;
        if (H !== 0 ? (Te &= H - 1, Te += H) : Te = 0, W++, --Or[K] == 0) {
          if (K === Se)
            break;
          K = u[a + z[W]];
        }
        if (K > ie && (Te & me) !== C) {
          for (be === 0 && (be = ie), re += se, ce = 1 << (ye = K - be); ye + be < Se && !((ce -= Or[ye + be]) <= 0); )
            ye++, ce <<= 1;
          if (de += 1 << ye, n === 1 && de > 852 || n === 2 && de > 592)
            return 1;
          p[C = Te & me] = ie << 24 | ye << 16 | re - h | 0;
        }
      }
      return Te !== 0 && (p[re + Te] = K - be << 24 | 64 << 16 | 0), b.bits = ie, 0;
    }, ci = Z.Z_FINISH, ms = Z.Z_BLOCK, en = Z.Z_TREES, jr = Z.Z_OK, gs = Z.Z_STREAM_END, vs = Z.Z_NEED_DICT, cr = Z.Z_STREAM_ERROR, fi = Z.Z_DATA_ERROR, pi = Z.Z_MEM_ERROR, bs = Z.Z_BUF_ERROR, di = Z.Z_DEFLATED, rn = 16180, tn = 16190, xr = 16191, In = 16192, Ln = 16194, nn = 16199, an = 16200, zn = 16206, Be = 16209, hi = function(n) {
      return (n >>> 24 & 255) + (n >>> 8 & 65280) + ((65280 & n) << 8) + ((255 & n) << 24);
    };
    function ys() {
      this.strm = null, this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new Uint16Array(320), this.work = new Uint16Array(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
    }
    var Mn, jn, Ur = function(n) {
      if (!n)
        return 1;
      var u = n.state;
      return !u || u.strm !== n || u.mode < rn || u.mode > 16211 ? 1 : 0;
    }, mi = function(n) {
      if (Ur(n))
        return cr;
      var u = n.state;
      return n.total_in = n.total_out = u.total = 0, n.msg = "", u.wrap && (n.adler = 1 & u.wrap), u.mode = rn, u.last = 0, u.havedict = 0, u.flags = -1, u.dmax = 32768, u.head = null, u.hold = 0, u.bits = 0, u.lencode = u.lendyn = new Int32Array(852), u.distcode = u.distdyn = new Int32Array(592), u.sane = 1, u.back = -1, jr;
    }, gi = function(n) {
      if (Ur(n))
        return cr;
      var u = n.state;
      return u.wsize = 0, u.whave = 0, u.wnext = 0, mi(n);
    }, vi = function(n, u) {
      var a;
      if (Ur(n))
        return cr;
      var f = n.state;
      return u < 0 ? (a = 0, u = -u) : (a = 5 + (u >> 4), u < 48 && (u &= 15)), u && (u < 8 || u > 15) ? cr : (f.window !== null && f.wbits !== u && (f.window = null), f.wrap = a, f.wbits = u, gi(n));
    }, bi = function(n, u) {
      if (!n)
        return cr;
      var a = new ys();
      n.state = a, a.strm = n, a.window = null, a.mode = rn;
      var f = vi(n, u);
      return f !== jr && (n.state = null), f;
    }, yi = !0, ws = function(n) {
      if (yi) {
        Mn = new Int32Array(512), jn = new Int32Array(32);
        for (var u = 0; u < 144; )
          n.lens[u++] = 8;
        for (; u < 256; )
          n.lens[u++] = 9;
        for (; u < 280; )
          n.lens[u++] = 7;
        for (; u < 288; )
          n.lens[u++] = 8;
        for (wt(1, n.lens, 0, 288, Mn, 0, n.work, { bits: 9 }), u = 0; u < 32; )
          n.lens[u++] = 5;
        wt(2, n.lens, 0, 32, jn, 0, n.work, { bits: 5 }), yi = !1;
      }
      n.lencode = Mn, n.lenbits = 9, n.distcode = jn, n.distbits = 5;
    }, wi = function(n, u, a, f) {
      var p, h = n.state;
      return h.window === null && (h.wsize = 1 << h.wbits, h.wnext = 0, h.whave = 0, h.window = new Uint8Array(h.wsize)), f >= h.wsize ? (h.window.set(u.subarray(a - h.wsize, a), 0), h.wnext = 0, h.whave = h.wsize) : ((p = h.wsize - h.wnext) > f && (p = f), h.window.set(u.subarray(a - f, a - f + p), h.wnext), (f -= p) ? (h.window.set(u.subarray(a - f, a), 0), h.wnext = f, h.whave = h.wsize) : (h.wnext += p, h.wnext === h.wsize && (h.wnext = 0), h.whave < h.wsize && (h.whave += p))), 0;
    }, Dr = { inflateReset: gi, inflateReset2: vi, inflateResetKeep: mi, inflateInit: function(n) {
      return bi(n, 15);
    }, inflateInit2: bi, inflate: function(n, u) {
      var a, f, p, h, z, b, H, E, C, me, re, $, J, he, pe, ge, K, W, se, Se, ie, ye, be, ce, de = 0, Te = new Uint8Array(4), qr = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
      if (Ur(n) || !n.output || !n.input && n.avail_in !== 0)
        return cr;
      (a = n.state).mode === xr && (a.mode = In), z = n.next_out, p = n.output, H = n.avail_out, h = n.next_in, f = n.input, b = n.avail_in, E = a.hold, C = a.bits, me = b, re = H, ye = jr;
      e:
        for (; ; )
          switch (a.mode) {
            case rn:
              if (a.wrap === 0) {
                a.mode = In;
                break;
              }
              for (; C < 16; ) {
                if (b === 0)
                  break e;
                b--, E += f[h++] << C, C += 8;
              }
              if (2 & a.wrap && E === 35615) {
                a.wbits === 0 && (a.wbits = 15), a.check = 0, Te[0] = 255 & E, Te[1] = E >>> 8 & 255, a.check = P(a.check, Te, 2, 0), E = 0, C = 0, a.mode = 16181;
                break;
              }
              if (a.head && (a.head.done = !1), !(1 & a.wrap) || (((255 & E) << 8) + (E >> 8)) % 31) {
                n.msg = "incorrect header check", a.mode = Be;
                break;
              }
              if ((15 & E) !== di) {
                n.msg = "unknown compression method", a.mode = Be;
                break;
              }
              if (C -= 4, ie = 8 + (15 & (E >>>= 4)), a.wbits === 0 && (a.wbits = ie), ie > 15 || ie > a.wbits) {
                n.msg = "invalid window size", a.mode = Be;
                break;
              }
              a.dmax = 1 << a.wbits, a.flags = 0, n.adler = a.check = 1, a.mode = 512 & E ? 16189 : xr, E = 0, C = 0;
              break;
            case 16181:
              for (; C < 16; ) {
                if (b === 0)
                  break e;
                b--, E += f[h++] << C, C += 8;
              }
              if (a.flags = E, (255 & a.flags) !== di) {
                n.msg = "unknown compression method", a.mode = Be;
                break;
              }
              if (57344 & a.flags) {
                n.msg = "unknown header flags set", a.mode = Be;
                break;
              }
              a.head && (a.head.text = E >> 8 & 1), 512 & a.flags && 4 & a.wrap && (Te[0] = 255 & E, Te[1] = E >>> 8 & 255, a.check = P(a.check, Te, 2, 0)), E = 0, C = 0, a.mode = 16182;
            case 16182:
              for (; C < 32; ) {
                if (b === 0)
                  break e;
                b--, E += f[h++] << C, C += 8;
              }
              a.head && (a.head.time = E), 512 & a.flags && 4 & a.wrap && (Te[0] = 255 & E, Te[1] = E >>> 8 & 255, Te[2] = E >>> 16 & 255, Te[3] = E >>> 24 & 255, a.check = P(a.check, Te, 4, 0)), E = 0, C = 0, a.mode = 16183;
            case 16183:
              for (; C < 16; ) {
                if (b === 0)
                  break e;
                b--, E += f[h++] << C, C += 8;
              }
              a.head && (a.head.xflags = 255 & E, a.head.os = E >> 8), 512 & a.flags && 4 & a.wrap && (Te[0] = 255 & E, Te[1] = E >>> 8 & 255, a.check = P(a.check, Te, 2, 0)), E = 0, C = 0, a.mode = 16184;
            case 16184:
              if (1024 & a.flags) {
                for (; C < 16; ) {
                  if (b === 0)
                    break e;
                  b--, E += f[h++] << C, C += 8;
                }
                a.length = E, a.head && (a.head.extra_len = E), 512 & a.flags && 4 & a.wrap && (Te[0] = 255 & E, Te[1] = E >>> 8 & 255, a.check = P(a.check, Te, 2, 0)), E = 0, C = 0;
              } else
                a.head && (a.head.extra = null);
              a.mode = 16185;
            case 16185:
              if (1024 & a.flags && (($ = a.length) > b && ($ = b), $ && (a.head && (ie = a.head.extra_len - a.length, a.head.extra || (a.head.extra = new Uint8Array(a.head.extra_len)), a.head.extra.set(f.subarray(h, h + $), ie)), 512 & a.flags && 4 & a.wrap && (a.check = P(a.check, f, $, h)), b -= $, h += $, a.length -= $), a.length))
                break e;
              a.length = 0, a.mode = 16186;
            case 16186:
              if (2048 & a.flags) {
                if (b === 0)
                  break e;
                $ = 0;
                do
                  ie = f[h + $++], a.head && ie && a.length < 65536 && (a.head.name += String.fromCharCode(ie));
                while (ie && $ < b);
                if (512 & a.flags && 4 & a.wrap && (a.check = P(a.check, f, $, h)), b -= $, h += $, ie)
                  break e;
              } else
                a.head && (a.head.name = null);
              a.length = 0, a.mode = 16187;
            case 16187:
              if (4096 & a.flags) {
                if (b === 0)
                  break e;
                $ = 0;
                do
                  ie = f[h + $++], a.head && ie && a.length < 65536 && (a.head.comment += String.fromCharCode(ie));
                while (ie && $ < b);
                if (512 & a.flags && 4 & a.wrap && (a.check = P(a.check, f, $, h)), b -= $, h += $, ie)
                  break e;
              } else
                a.head && (a.head.comment = null);
              a.mode = 16188;
            case 16188:
              if (512 & a.flags) {
                for (; C < 16; ) {
                  if (b === 0)
                    break e;
                  b--, E += f[h++] << C, C += 8;
                }
                if (4 & a.wrap && E !== (65535 & a.check)) {
                  n.msg = "header crc mismatch", a.mode = Be;
                  break;
                }
                E = 0, C = 0;
              }
              a.head && (a.head.hcrc = a.flags >> 9 & 1, a.head.done = !0), n.adler = a.check = 0, a.mode = xr;
              break;
            case 16189:
              for (; C < 32; ) {
                if (b === 0)
                  break e;
                b--, E += f[h++] << C, C += 8;
              }
              n.adler = a.check = hi(E), E = 0, C = 0, a.mode = tn;
            case tn:
              if (a.havedict === 0)
                return n.next_out = z, n.avail_out = H, n.next_in = h, n.avail_in = b, a.hold = E, a.bits = C, vs;
              n.adler = a.check = 1, a.mode = xr;
            case xr:
              if (u === ms || u === en)
                break e;
            case In:
              if (a.last) {
                E >>>= 7 & C, C -= 7 & C, a.mode = zn;
                break;
              }
              for (; C < 3; ) {
                if (b === 0)
                  break e;
                b--, E += f[h++] << C, C += 8;
              }
              switch (a.last = 1 & E, C -= 1, 3 & (E >>>= 1)) {
                case 0:
                  a.mode = 16193;
                  break;
                case 1:
                  if (ws(a), a.mode = nn, u === en) {
                    E >>>= 2, C -= 2;
                    break e;
                  }
                  break;
                case 2:
                  a.mode = 16196;
                  break;
                case 3:
                  n.msg = "invalid block type", a.mode = Be;
              }
              E >>>= 2, C -= 2;
              break;
            case 16193:
              for (E >>>= 7 & C, C -= 7 & C; C < 32; ) {
                if (b === 0)
                  break e;
                b--, E += f[h++] << C, C += 8;
              }
              if ((65535 & E) != (E >>> 16 ^ 65535)) {
                n.msg = "invalid stored block lengths", a.mode = Be;
                break;
              }
              if (a.length = 65535 & E, E = 0, C = 0, a.mode = Ln, u === en)
                break e;
            case Ln:
              a.mode = 16195;
            case 16195:
              if ($ = a.length) {
                if ($ > b && ($ = b), $ > H && ($ = H), $ === 0)
                  break e;
                p.set(f.subarray(h, h + $), z), b -= $, h += $, H -= $, z += $, a.length -= $;
                break;
              }
              a.mode = xr;
              break;
            case 16196:
              for (; C < 14; ) {
                if (b === 0)
                  break e;
                b--, E += f[h++] << C, C += 8;
              }
              if (a.nlen = 257 + (31 & E), E >>>= 5, C -= 5, a.ndist = 1 + (31 & E), E >>>= 5, C -= 5, a.ncode = 4 + (15 & E), E >>>= 4, C -= 4, a.nlen > 286 || a.ndist > 30) {
                n.msg = "too many length or distance symbols", a.mode = Be;
                break;
              }
              a.have = 0, a.mode = 16197;
            case 16197:
              for (; a.have < a.ncode; ) {
                for (; C < 3; ) {
                  if (b === 0)
                    break e;
                  b--, E += f[h++] << C, C += 8;
                }
                a.lens[qr[a.have++]] = 7 & E, E >>>= 3, C -= 3;
              }
              for (; a.have < 19; )
                a.lens[qr[a.have++]] = 0;
              if (a.lencode = a.lendyn, a.lenbits = 7, be = { bits: a.lenbits }, ye = wt(0, a.lens, 0, 19, a.lencode, 0, a.work, be), a.lenbits = be.bits, ye) {
                n.msg = "invalid code lengths set", a.mode = Be;
                break;
              }
              a.have = 0, a.mode = 16198;
            case 16198:
              for (; a.have < a.nlen + a.ndist; ) {
                for (; ge = (de = a.lencode[E & (1 << a.lenbits) - 1]) >>> 16 & 255, K = 65535 & de, !((pe = de >>> 24) <= C); ) {
                  if (b === 0)
                    break e;
                  b--, E += f[h++] << C, C += 8;
                }
                if (K < 16)
                  E >>>= pe, C -= pe, a.lens[a.have++] = K;
                else {
                  if (K === 16) {
                    for (ce = pe + 2; C < ce; ) {
                      if (b === 0)
                        break e;
                      b--, E += f[h++] << C, C += 8;
                    }
                    if (E >>>= pe, C -= pe, a.have === 0) {
                      n.msg = "invalid bit length repeat", a.mode = Be;
                      break;
                    }
                    ie = a.lens[a.have - 1], $ = 3 + (3 & E), E >>>= 2, C -= 2;
                  } else if (K === 17) {
                    for (ce = pe + 3; C < ce; ) {
                      if (b === 0)
                        break e;
                      b--, E += f[h++] << C, C += 8;
                    }
                    C -= pe, ie = 0, $ = 3 + (7 & (E >>>= pe)), E >>>= 3, C -= 3;
                  } else {
                    for (ce = pe + 7; C < ce; ) {
                      if (b === 0)
                        break e;
                      b--, E += f[h++] << C, C += 8;
                    }
                    C -= pe, ie = 0, $ = 11 + (127 & (E >>>= pe)), E >>>= 7, C -= 7;
                  }
                  if (a.have + $ > a.nlen + a.ndist) {
                    n.msg = "invalid bit length repeat", a.mode = Be;
                    break;
                  }
                  for (; $--; )
                    a.lens[a.have++] = ie;
                }
              }
              if (a.mode === Be)
                break;
              if (a.lens[256] === 0) {
                n.msg = "invalid code -- missing end-of-block", a.mode = Be;
                break;
              }
              if (a.lenbits = 9, be = { bits: a.lenbits }, ye = wt(1, a.lens, 0, a.nlen, a.lencode, 0, a.work, be), a.lenbits = be.bits, ye) {
                n.msg = "invalid literal/lengths set", a.mode = Be;
                break;
              }
              if (a.distbits = 6, a.distcode = a.distdyn, be = { bits: a.distbits }, ye = wt(2, a.lens, a.nlen, a.ndist, a.distcode, 0, a.work, be), a.distbits = be.bits, ye) {
                n.msg = "invalid distances set", a.mode = Be;
                break;
              }
              if (a.mode = nn, u === en)
                break e;
            case nn:
              a.mode = an;
            case an:
              if (b >= 6 && H >= 258) {
                n.next_out = z, n.avail_out = H, n.next_in = h, n.avail_in = b, a.hold = E, a.bits = C, cs(n, re), z = n.next_out, p = n.output, H = n.avail_out, h = n.next_in, f = n.input, b = n.avail_in, E = a.hold, C = a.bits, a.mode === xr && (a.back = -1);
                break;
              }
              for (a.back = 0; ge = (de = a.lencode[E & (1 << a.lenbits) - 1]) >>> 16 & 255, K = 65535 & de, !((pe = de >>> 24) <= C); ) {
                if (b === 0)
                  break e;
                b--, E += f[h++] << C, C += 8;
              }
              if (ge && !(240 & ge)) {
                for (W = pe, se = ge, Se = K; ge = (de = a.lencode[Se + ((E & (1 << W + se) - 1) >> W)]) >>> 16 & 255, K = 65535 & de, !(W + (pe = de >>> 24) <= C); ) {
                  if (b === 0)
                    break e;
                  b--, E += f[h++] << C, C += 8;
                }
                E >>>= W, C -= W, a.back += W;
              }
              if (E >>>= pe, C -= pe, a.back += pe, a.length = K, ge === 0) {
                a.mode = 16205;
                break;
              }
              if (32 & ge) {
                a.back = -1, a.mode = xr;
                break;
              }
              if (64 & ge) {
                n.msg = "invalid literal/length code", a.mode = Be;
                break;
              }
              a.extra = 15 & ge, a.mode = 16201;
            case 16201:
              if (a.extra) {
                for (ce = a.extra; C < ce; ) {
                  if (b === 0)
                    break e;
                  b--, E += f[h++] << C, C += 8;
                }
                a.length += E & (1 << a.extra) - 1, E >>>= a.extra, C -= a.extra, a.back += a.extra;
              }
              a.was = a.length, a.mode = 16202;
            case 16202:
              for (; ge = (de = a.distcode[E & (1 << a.distbits) - 1]) >>> 16 & 255, K = 65535 & de, !((pe = de >>> 24) <= C); ) {
                if (b === 0)
                  break e;
                b--, E += f[h++] << C, C += 8;
              }
              if (!(240 & ge)) {
                for (W = pe, se = ge, Se = K; ge = (de = a.distcode[Se + ((E & (1 << W + se) - 1) >> W)]) >>> 16 & 255, K = 65535 & de, !(W + (pe = de >>> 24) <= C); ) {
                  if (b === 0)
                    break e;
                  b--, E += f[h++] << C, C += 8;
                }
                E >>>= W, C -= W, a.back += W;
              }
              if (E >>>= pe, C -= pe, a.back += pe, 64 & ge) {
                n.msg = "invalid distance code", a.mode = Be;
                break;
              }
              a.offset = K, a.extra = 15 & ge, a.mode = 16203;
            case 16203:
              if (a.extra) {
                for (ce = a.extra; C < ce; ) {
                  if (b === 0)
                    break e;
                  b--, E += f[h++] << C, C += 8;
                }
                a.offset += E & (1 << a.extra) - 1, E >>>= a.extra, C -= a.extra, a.back += a.extra;
              }
              if (a.offset > a.dmax) {
                n.msg = "invalid distance too far back", a.mode = Be;
                break;
              }
              a.mode = 16204;
            case 16204:
              if (H === 0)
                break e;
              if ($ = re - H, a.offset > $) {
                if (($ = a.offset - $) > a.whave && a.sane) {
                  n.msg = "invalid distance too far back", a.mode = Be;
                  break;
                }
                $ > a.wnext ? ($ -= a.wnext, J = a.wsize - $) : J = a.wnext - $, $ > a.length && ($ = a.length), he = a.window;
              } else
                he = p, J = z - a.offset, $ = a.length;
              $ > H && ($ = H), H -= $, a.length -= $;
              do
                p[z++] = he[J++];
              while (--$);
              a.length === 0 && (a.mode = an);
              break;
            case 16205:
              if (H === 0)
                break e;
              p[z++] = a.length, H--, a.mode = an;
              break;
            case zn:
              if (a.wrap) {
                for (; C < 32; ) {
                  if (b === 0)
                    break e;
                  b--, E |= f[h++] << C, C += 8;
                }
                if (re -= H, n.total_out += re, a.total += re, 4 & a.wrap && re && (n.adler = a.check = a.flags ? P(a.check, p, re, z - re) : X(a.check, p, re, z - re)), re = H, 4 & a.wrap && (a.flags ? E : hi(E)) !== a.check) {
                  n.msg = "incorrect data check", a.mode = Be;
                  break;
                }
                E = 0, C = 0;
              }
              a.mode = 16207;
            case 16207:
              if (a.wrap && a.flags) {
                for (; C < 32; ) {
                  if (b === 0)
                    break e;
                  b--, E += f[h++] << C, C += 8;
                }
                if (4 & a.wrap && E !== (4294967295 & a.total)) {
                  n.msg = "incorrect length check", a.mode = Be;
                  break;
                }
                E = 0, C = 0;
              }
              a.mode = 16208;
            case 16208:
              ye = gs;
              break e;
            case Be:
              ye = fi;
              break e;
            case 16210:
              return pi;
            default:
              return cr;
          }
      return n.next_out = z, n.avail_out = H, n.next_in = h, n.avail_in = b, a.hold = E, a.bits = C, (a.wsize || re !== n.avail_out && a.mode < Be && (a.mode < zn || u !== ci)) && wi(n, n.output, n.next_out, re - n.avail_out), me -= n.avail_in, re -= n.avail_out, n.total_in += me, n.total_out += re, a.total += re, 4 & a.wrap && re && (n.adler = a.check = a.flags ? P(a.check, p, re, n.next_out - re) : X(a.check, p, re, n.next_out - re)), n.data_type = a.bits + (a.last ? 64 : 0) + (a.mode === xr ? 128 : 0) + (a.mode === nn || a.mode === Ln ? 256 : 0), (me === 0 && re === 0 || u === ci) && ye === jr && (ye = bs), ye;
    }, inflateEnd: function(n) {
      if (Ur(n))
        return cr;
      var u = n.state;
      return u.window && (u.window = null), n.state = null, jr;
    }, inflateGetHeader: function(n, u) {
      if (Ur(n))
        return cr;
      var a = n.state;
      return 2 & a.wrap ? (a.head = u, u.done = !1, jr) : cr;
    }, inflateSetDictionary: function(n, u) {
      var a, f = u.length;
      return Ur(n) || (a = n.state).wrap !== 0 && a.mode !== tn ? cr : a.mode === tn && X(1, u, f, 0) !== a.check ? fi : wi(n, u, f, f) ? (a.mode = 16210, pi) : (a.havedict = 1, jr);
    }, inflateInfo: "pako inflate (from Nodeca project)" }, xs = function() {
      this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
    }, xi = Object.prototype.toString, Ds = Z.Z_NO_FLUSH, Es = Z.Z_FINISH, xt = Z.Z_OK, Un = Z.Z_STREAM_END, qn = Z.Z_NEED_DICT, _s = Z.Z_STREAM_ERROR, Di = Z.Z_DATA_ERROR, As = Z.Z_MEM_ERROR;
    function Dt(n) {
      this.options = ii({ chunkSize: 65536, windowBits: 15, to: "" }, n || {});
      var u = this.options;
      u.raw && u.windowBits >= 0 && u.windowBits < 16 && (u.windowBits = -u.windowBits, u.windowBits === 0 && (u.windowBits = -15)), !(u.windowBits >= 0 && u.windowBits < 16) || n && n.windowBits || (u.windowBits += 32), u.windowBits > 15 && u.windowBits < 48 && !(15 & u.windowBits) && (u.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new si(), this.strm.avail_out = 0;
      var a = Dr.inflateInit2(this.strm, u.windowBits);
      if (a !== xt)
        throw new Error(Q[a]);
      if (this.header = new xs(), Dr.inflateGetHeader(this.strm, this.header), u.dictionary && (typeof u.dictionary == "string" ? u.dictionary = Rn(u.dictionary) : xi.call(u.dictionary) === "[object ArrayBuffer]" && (u.dictionary = new Uint8Array(u.dictionary)), u.raw && (a = Dr.inflateSetDictionary(this.strm, u.dictionary)) !== xt))
        throw new Error(Q[a]);
    }
    function $n(n, u) {
      var a = new Dt(u);
      if (a.push(n), a.err)
        throw a.msg || Q[a.err];
      return a.result;
    }
    Dt.prototype.push = function(n, u) {
      var a, f, p, h = this.strm, z = this.options.chunkSize, b = this.options.dictionary;
      if (this.ended)
        return !1;
      for (f = u === ~~u ? u : u === !0 ? Es : Ds, xi.call(n) === "[object ArrayBuffer]" ? h.input = new Uint8Array(n) : h.input = n, h.next_in = 0, h.avail_in = h.input.length; ; ) {
        for (h.avail_out === 0 && (h.output = new Uint8Array(z), h.next_out = 0, h.avail_out = z), (a = Dr.inflate(h, f)) === qn && b && ((a = Dr.inflateSetDictionary(h, b)) === xt ? a = Dr.inflate(h, f) : a === Di && (a = qn)); h.avail_in > 0 && a === Un && h.state.wrap > 0 && n[h.next_in] !== 0; )
          Dr.inflateReset(h), a = Dr.inflate(h, f);
        switch (a) {
          case _s:
          case Di:
          case qn:
          case As:
            return this.onEnd(a), this.ended = !0, !1;
        }
        if (p = h.avail_out, h.next_out && (h.avail_out === 0 || a === Un))
          if (this.options.to === "string") {
            var H = rs(h.output, h.next_out), E = h.next_out - H, C = es(h.output, H);
            h.next_out = E, h.avail_out = z - E, E && h.output.set(h.output.subarray(H, H + E), 0), this.onData(C);
          } else
            this.onData(h.output.length === h.next_out ? h.output : h.output.subarray(0, h.next_out));
        if (a !== xt || p !== 0) {
          if (a === Un)
            return a = Dr.inflateEnd(this.strm), this.onEnd(a), this.ended = !0, !0;
          if (h.avail_in === 0)
            break;
        }
      }
      return !0;
    }, Dt.prototype.onData = function(n) {
      this.chunks.push(n);
    }, Dt.prototype.onEnd = function(n) {
      n === xt && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = oi(this.chunks)), this.chunks = [], this.err = n, this.msg = this.strm.msg;
    };
    var on = { Inflate: Dt, inflate: $n, inflateRaw: function(n, u) {
      return (u = u || {}).raw = !0, $n(n, u);
    }, ungzip: $n, constants: Z }, Ei = Kt.Deflate, _i = Kt.deflate, Ai = Kt.deflateRaw, Ci = Kt.gzip, Ti = on.Inflate, Si = on.inflate, ki = on.inflateRaw, Bi = on.ungzip, Oi = Z, Cs = { Deflate: Ei, deflate: _i, deflateRaw: Ai, gzip: Ci, Inflate: Ti, inflate: Si, inflateRaw: ki, ungzip: Bi, constants: Oi };
    t.Deflate = Ei, t.Inflate = Ti, t.constants = Oi, t.default = Cs, t.deflate = _i, t.deflateRaw = Ai, t.gzip = Ci, t.inflate = Si, t.inflateRaw = ki, t.ungzip = Bi, Object.defineProperty(t, "__esModule", { value: !0 });
  });
})(Da, Da.exports);
var zp = Da.exports, Fu = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Uint32Array < "u", Pu = zp;
pt.uncompressInputType = Fu ? "uint8array" : "array";
pt.compressInputType = Fu ? "uint8array" : "array";
pt.magic = "\b\0";
pt.compress = function(e, r) {
  return Pu.deflateRaw(e, {
    level: r.level || -1
    // default compression
  });
};
pt.uncompress = function(e) {
  return Pu.inflateRaw(e);
};
Xt.STORE = {
  magic: "\0\0",
  compress: function(r) {
    return r;
  },
  uncompress: function(r) {
    return r;
  },
  compressInputType: null,
  uncompressInputType: null
};
Xt.DEFLATE = pt;
var Ga = { exports: {} };
Ga.exports = function(e, r) {
  return typeof e == "number" ? Buffer.alloc(e) : Buffer.from(e, r);
};
Ga.exports.test = function(e) {
  return Buffer.isBuffer(e);
};
var Wa = Ga.exports;
(function(e) {
  function r(c) {
    "@babel/helpers - typeof";
    return r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(g) {
      return typeof g;
    } : function(g) {
      return g && typeof Symbol == "function" && g.constructor === Symbol && g !== Symbol.prototype ? "symbol" : typeof g;
    }, r(c);
  }
  var t = Ue, i = Xt, o = Wa;
  e.string2binary = function(c) {
    for (var g = "", v = 0; v < c.length; v++)
      g += String.fromCharCode(c.charCodeAt(v) & 255);
    return g;
  }, e.arrayBuffer2Blob = function(c, g) {
    e.checkSupport("blob"), g = g || "application/zip";
    try {
      return new Blob([c], {
        type: g
      });
    } catch {
      try {
        var v = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder, x = new v();
        return x.append(c), x.getBlob(g);
      } catch {
        throw new Error("Bug : can't construct the Blob.");
      }
    }
  };
  function s(c) {
    return c;
  }
  function l(c, g) {
    for (var v = 0; v < c.length; ++v)
      g[v] = c.charCodeAt(v) & 255;
    return g;
  }
  function m(c) {
    var g = 65536, v = [], x = c.length, U = e.getTypeOf(c), w = 0, _ = !0;
    try {
      switch (U) {
        case "uint8array":
          String.fromCharCode.apply(null, new Uint8Array(0));
          break;
        case "nodebuffer":
          String.fromCharCode.apply(null, o(0));
          break;
      }
    } catch {
      _ = !1;
    }
    if (!_) {
      for (var D = "", k = 0; k < c.length; k++)
        D += String.fromCharCode(c[k]);
      return D;
    }
    for (; w < x && g > 1; )
      try {
        U === "array" || U === "nodebuffer" ? v.push(String.fromCharCode.apply(null, c.slice(w, Math.min(w + g, x)))) : v.push(String.fromCharCode.apply(null, c.subarray(w, Math.min(w + g, x)))), w += g;
      } catch {
        g = Math.floor(g / 2);
      }
    return v.join("");
  }
  e.applyFromCharCode = m;
  function y(c, g) {
    for (var v = 0; v < c.length; v++)
      g[v] = c[v];
    return g;
  }
  var d = {};
  d.string = {
    string: s,
    array: function(g) {
      return l(g, new Array(g.length));
    },
    arraybuffer: function(g) {
      return d.string.uint8array(g).buffer;
    },
    uint8array: function(g) {
      return l(g, new Uint8Array(g.length));
    },
    nodebuffer: function(g) {
      return l(g, o(g.length));
    }
  }, d.array = {
    string: m,
    array: s,
    arraybuffer: function(g) {
      return new Uint8Array(g).buffer;
    },
    uint8array: function(g) {
      return new Uint8Array(g);
    },
    nodebuffer: function(g) {
      return o(g);
    }
  }, d.arraybuffer = {
    string: function(g) {
      return m(new Uint8Array(g));
    },
    array: function(g) {
      return y(new Uint8Array(g), new Array(g.byteLength));
    },
    arraybuffer: s,
    uint8array: function(g) {
      return new Uint8Array(g);
    },
    nodebuffer: function(g) {
      return o(new Uint8Array(g));
    }
  }, d.uint8array = {
    string: m,
    array: function(g) {
      return y(g, new Array(g.length));
    },
    arraybuffer: function(g) {
      return g.buffer;
    },
    uint8array: s,
    nodebuffer: function(g) {
      return o(g);
    }
  }, d.nodebuffer = {
    string: m,
    array: function(g) {
      return y(g, new Array(g.length));
    },
    arraybuffer: function(g) {
      return d.nodebuffer.uint8array(g).buffer;
    },
    uint8array: function(g) {
      return y(g, new Uint8Array(g.length));
    },
    nodebuffer: s
  }, e.transformTo = function(c, g) {
    if (g || (g = ""), !c)
      return g;
    e.checkSupport(c);
    var v = e.getTypeOf(g), x = d[v][c](g);
    return x;
  }, e.getTypeOf = function(c) {
    if (c != null) {
      if (typeof c == "string")
        return "string";
      if (Object.prototype.toString.call(c) === "[object Array]")
        return "array";
      if (t.nodebuffer && o.test(c))
        return "nodebuffer";
      if (t.uint8array && c instanceof Uint8Array)
        return "uint8array";
      if (t.arraybuffer && c instanceof ArrayBuffer)
        return "arraybuffer";
      if (c instanceof Promise)
        throw new Error("Cannot read data from a promise, you probably are running new PizZip(data) with a promise");
      if (r(c) === "object" && typeof c.file == "function")
        throw new Error("Cannot read data from a pizzip instance, you probably are running new PizZip(zip) with a zipinstance");
      if (c instanceof Date)
        throw new Error("Cannot read data from a Date, you probably are running new PizZip(data) with a date");
      if (r(c) === "object" && c.crc32 == null)
        throw new Error("Unsupported data given to new PizZip(data) (object given)");
    }
  }, e.checkSupport = function(c) {
    var g = t[c.toLowerCase()];
    if (!g)
      throw new Error(c + " is not supported by this browser");
  }, e.MAX_VALUE_16BITS = 65535, e.MAX_VALUE_32BITS = -1, e.pretty = function(c) {
    var g = "", v, x;
    for (x = 0; x < (c || "").length; x++)
      v = c.charCodeAt(x), g += "\\x" + (v < 16 ? "0" : "") + v.toString(16).toUpperCase();
    return g;
  }, e.findCompression = function(c) {
    for (var g in i)
      if (i.hasOwnProperty(g) && i[g].magic === c)
        return i[g];
    return null;
  }, e.isRegExp = function(c) {
    return Object.prototype.toString.call(c) === "[object RegExp]";
  }, e.extend = function() {
    var c = {}, g, v;
    for (g = 0; g < arguments.length; g++)
      for (v in arguments[g])
        arguments[g].hasOwnProperty(v) && typeof c[v] > "u" && (c[v] = arguments[g][v]);
    return c;
  };
})(ur);
var Mp = ur, jp = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918e3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117], Up = function(r, t) {
  if (typeof r > "u" || !r.length)
    return 0;
  var i = Mp.getTypeOf(r) !== "string";
  typeof t > "u" && (t = 0);
  var o = 0, s = 0, l = 0;
  t ^= -1;
  for (var m = 0, y = r.length; m < y; m++)
    l = i ? r[m] : r.charCodeAt(m), s = (t ^ l) & 255, o = jp[s], t = t >>> 8 ^ o;
  return t ^ -1;
}, Lr = {};
Lr.LOCAL_FILE_HEADER = "PK";
Lr.CENTRAL_FILE_HEADER = "PK";
Lr.CENTRAL_DIRECTORY_END = "PK";
Lr.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x07";
Lr.ZIP64_CENTRAL_DIRECTORY_END = "PK";
Lr.DATA_DESCRIPTOR = "PK\x07\b";
var sr = {};
sr.base64 = !1;
sr.binary = !1;
sr.dir = !1;
sr.createFolders = !1;
sr.date = null;
sr.compression = null;
sr.compressionOptions = null;
sr.comment = null;
sr.unixPermissions = null;
sr.dosPermissions = null;
function Ru() {
  this.compressedSize = 0, this.uncompressedSize = 0, this.crc32 = 0, this.compressionMethod = null, this.compressedContent = null;
}
Ru.prototype = {
  /**
   * Return the decompressed content in an unspecified format.
   * The format will depend on the decompressor.
   * @return {Object} the decompressed content.
   */
  getContent: function() {
    return null;
  },
  /**
   * Return the compressed content in an unspecified format.
   * The format will depend on the compressed conten source.
   * @return {Object} the compressed content.
   */
  getCompressedContent: function() {
    return null;
  }
};
var Nu = Ru, kn = {}, Ea = ur, St = Ue, qp = Wa, jt = new Array(256);
for (var Rr = 0; Rr < 256; Rr++)
  jt[Rr] = Rr >= 252 ? 6 : Rr >= 248 ? 5 : Rr >= 240 ? 4 : Rr >= 224 ? 3 : Rr >= 192 ? 2 : 1;
jt[254] = jt[254] = 1;
function $p(e) {
  var r, t, i, o, s, l = 0, m = e.length;
  for (o = 0; o < m; o++)
    t = e.charCodeAt(o), (t & 64512) === 55296 && o + 1 < m && (i = e.charCodeAt(o + 1), (i & 64512) === 56320 && (t = 65536 + (t - 55296 << 10) + (i - 56320), o++)), l += t < 128 ? 1 : t < 2048 ? 2 : t < 65536 ? 3 : 4;
  for (St.uint8array ? r = new Uint8Array(l) : r = new Array(l), s = 0, o = 0; s < l; o++)
    t = e.charCodeAt(o), (t & 64512) === 55296 && o + 1 < m && (i = e.charCodeAt(o + 1), (i & 64512) === 56320 && (t = 65536 + (t - 55296 << 10) + (i - 56320), o++)), t < 128 ? r[s++] = t : t < 2048 ? (r[s++] = 192 | t >>> 6, r[s++] = 128 | t & 63) : t < 65536 ? (r[s++] = 224 | t >>> 12, r[s++] = 128 | t >>> 6 & 63, r[s++] = 128 | t & 63) : (r[s++] = 240 | t >>> 18, r[s++] = 128 | t >>> 12 & 63, r[s++] = 128 | t >>> 6 & 63, r[s++] = 128 | t & 63);
  return r;
}
function Vp(e, r) {
  var t;
  for (r = r || e.length, r > e.length && (r = e.length), t = r - 1; t >= 0 && (e[t] & 192) === 128; )
    t--;
  return t < 0 || t === 0 ? r : t + jt[e[t]] > r ? t : r;
}
function Bo(e) {
  var r, t, i, o, s = e.length, l = new Array(s * 2);
  for (t = 0, r = 0; r < s; ) {
    if (i = e[r++], i < 128) {
      l[t++] = i;
      continue;
    }
    if (o = jt[i], o > 4) {
      l[t++] = 65533, r += o - 1;
      continue;
    }
    for (i &= o === 2 ? 31 : o === 3 ? 15 : 7; o > 1 && r < s; )
      i = i << 6 | e[r++] & 63, o--;
    if (o > 1) {
      l[t++] = 65533;
      continue;
    }
    i < 65536 ? l[t++] = i : (i -= 65536, l[t++] = 55296 | i >> 10 & 1023, l[t++] = 56320 | i & 1023);
  }
  return l.length !== t && (l.subarray ? l = l.subarray(0, t) : l.length = t), Ea.applyFromCharCode(l);
}
kn.utf8encode = function(r) {
  return St.nodebuffer ? qp(r, "utf-8") : $p(r);
};
kn.utf8decode = function(r) {
  if (St.nodebuffer)
    return Ea.transformTo("nodebuffer", r).toString("utf-8");
  r = Ea.transformTo(St.uint8array ? "uint8array" : "array", r);
  for (var t = [], i = r.length, o = 65536, s = 0; s < i; ) {
    var l = Vp(r, Math.min(s + o, i));
    St.uint8array ? t.push(Bo(r.subarray(s, l))) : t.push(Bo(r.slice(s, l))), s = l;
  }
  return t.join("");
};
var Zp = ur;
function Iu() {
  this.data = [];
}
Iu.prototype = {
  /**
   * Append any content to the current string.
   * @param {Object} input the content to add.
   */
  append: function(r) {
    r = Zp.transformTo("string", r), this.data.push(r);
  },
  /**
   * Finalize the construction an return the result.
   * @return {string} the generated string.
   */
  finalize: function() {
    return this.data.join("");
  }
};
var Xp = Iu, Hp = ur;
function Lu(e) {
  this.data = new Uint8Array(e), this.index = 0;
}
Lu.prototype = {
  /**
   * Append any content to the current array.
   * @param {Object} input the content to add.
   */
  append: function(r) {
    r.length !== 0 && (r = Hp.transformTo("uint8array", r), this.data.set(r, this.index), this.index += r.length);
  },
  /**
   * Finalize the construction an return the result.
   * @return {Uint8Array} the generated array.
   */
  finalize: function() {
    return this.data;
  }
};
var Gp = Lu, Wp = Ue, ke = ur, Ya = Up, _a = Lr, Yp = sr, zu = Zt, Aa = Xt, Dn = Nu, Kp = Wa, st = kn, Jp = Xp, Qp = Gp;
function Mu(e) {
  if (e._data instanceof Dn && (e._data = e._data.getContent(), e.options.binary = !0, e.options.base64 = !1, ke.getTypeOf(e._data) === "uint8array")) {
    var r = e._data;
    e._data = new Uint8Array(r.length), r.length !== 0 && e._data.set(r, 0);
  }
  return e._data;
}
function Ca(e) {
  var r = Mu(e), t = ke.getTypeOf(r);
  return t === "string" ? !e.options.binary && Wp.nodebuffer ? Kp(r, "utf-8") : e.asBinary() : r;
}
var Ta = {
  /**
   * Read an existing zip and merge the data in the current PizZip object.
   * The implementation is in pizzip-load.js, don't forget to include it.
   * @param {String|ArrayBuffer|Uint8Array|Buffer} stream  The stream to load
   * @param {Object} options Options for loading the stream.
   *  options.base64 : is the stream in base64 ? default : false
   * @return {PizZip} the current PizZip object
   */
  load: function() {
    throw new Error("Load method is not defined. Is the file pizzip-load.js included ?");
  },
  /**
   * Filter nested files/folders with the specified function.
   * @param {Function} search the predicate to use :
   * function (relativePath, file) {...}
   * It takes 2 arguments : the relative path and the file.
   * @return {Array} An array of matching elements.
   */
  filter: function(r) {
    var t = [], i, o, s, l;
    for (i in this.files)
      this.files.hasOwnProperty(i) && (s = this.files[i], l = new Ka(s.name, s._data, ke.extend(s.options)), o = i.slice(this.root.length, i.length), i.slice(0, this.root.length) === this.root && // the file is in the current root
      r(o, l) && t.push(l));
    return t;
  },
  /**
   * Add a file to the zip file, or search a file.
   * @param   {string|RegExp} name The name of the file to add (if data is defined),
   * the name of the file to find (if no data) or a regex to match files.
   * @param   {String|ArrayBuffer|Uint8Array|Buffer} data  The file data, either raw or base64 encoded
   * @param   {Object} o     File options
   * @return  {PizZip|Object|Array} this PizZip object (when adding a file),
   * a file (when searching by string) or an array of files (when searching by regex).
   */
  file: function(r, t, i) {
    if (arguments.length === 1) {
      if (ke.isRegExp(r)) {
        var o = r;
        return this.filter(function(s, l) {
          return !l.dir && o.test(s);
        });
      }
      return this.filter(function(s, l) {
        return !l.dir && s === r;
      })[0] || null;
    }
    return r = this.root + r, ju.call(this, r, t, i), this;
  },
  /**
   * Add a directory to the zip file, or search.
   * @param   {String|RegExp} arg The name of the directory to add, or a regex to search folders.
   * @return  {PizZip} an object with the new directory as the root, or an array containing matching folders.
   */
  folder: function(r) {
    if (!r)
      return this;
    if (ke.isRegExp(r))
      return this.filter(function(s, l) {
        return l.dir && r.test(s);
      });
    var t = this.root + r, i = qu.call(this, t), o = this.shallowClone();
    return o.root = i.name, o;
  },
  /**
   * Delete a file, or a directory and all sub-files, from the zip
   * @param {string} name the name of the file to delete
   * @return {PizZip} this PizZip object
   */
  remove: function(r) {
    r = this.root + r;
    var t = this.files[r];
    if (t || (r.slice(-1) !== "/" && (r += "/"), t = this.files[r]), t && !t.dir)
      delete this.files[r];
    else
      for (var i = this.filter(function(s, l) {
        return l.name.slice(0, r.length) === r;
      }), o = 0; o < i.length; o++)
        delete this.files[i[o].name];
    return this;
  },
  /**
   * Generate the complete zip file
   * @param {Object} options the options to generate the zip file :
   * - base64, (deprecated, use type instead) true to generate base64.
   * - compression, "STORE" by default.
   * - type, "base64" by default. Values are : string, base64, uint8array, arraybuffer, blob.
   * @return {String|Uint8Array|ArrayBuffer|Buffer|Blob} the zip file
   */
  generate: function(r) {
    r = ke.extend(r || {}, {
      base64: !0,
      compression: "STORE",
      compressionOptions: null,
      type: "base64",
      platform: "DOS",
      comment: null,
      mimeType: "application/zip",
      encodeFileName: st.utf8encode
    }), ke.checkSupport(r.type), (r.platform === "darwin" || r.platform === "freebsd" || r.platform === "linux" || r.platform === "sunos") && (r.platform = "UNIX"), r.platform === "win32" && (r.platform = "DOS");
    var t = [], i = ke.transformTo("string", r.encodeFileName(r.comment || this.comment || "")), o = 0, s = 0, l, m;
    for (var y in this.files)
      if (this.files.hasOwnProperty(y)) {
        var d = this.files[y], c = d.options.compression || r.compression.toUpperCase(), g = Aa[c];
        if (!g)
          throw new Error(c + " is not a valid compression method !");
        var v = d.options.compressionOptions || r.compressionOptions || {}, x = td.call(this, d, g, v), U = id.call(this, y, d, x, o, r.platform, r.encodeFileName);
        o += U.fileRecord.length + x.compressedSize, s += U.dirRecord.length, t.push(U);
      }
    var w = "";
    w = _a.CENTRAL_DIRECTORY_END + // number of this disk
    "\0\0\0\0" + // total number of entries in the central directory on this disk
    Fe(t.length, 2) + // total number of entries in the central directory
    Fe(t.length, 2) + // size of the central directory   4 bytes
    Fe(s, 4) + // offset of start of central directory with respect to the starting disk number
    Fe(o, 4) + // .ZIP file comment length
    Fe(i.length, 2) + // .ZIP file comment
    i;
    var _ = r.type.toLowerCase();
    for (_ === "uint8array" || _ === "arraybuffer" || _ === "blob" || _ === "nodebuffer" ? l = new Qp(o + s + w.length) : l = new Jp(o + s + w.length), m = 0; m < t.length; m++)
      l.append(t[m].fileRecord), l.append(t[m].compressedObject.compressedContent);
    for (m = 0; m < t.length; m++)
      l.append(t[m].dirRecord);
    l.append(w);
    var D = l.finalize();
    switch (r.type.toLowerCase()) {
      case "uint8array":
      case "arraybuffer":
      case "nodebuffer":
        return ke.transformTo(r.type.toLowerCase(), D);
      case "blob":
        return ke.arrayBuffer2Blob(ke.transformTo("arraybuffer", D), r.mimeType);
      case "base64":
        return r.base64 ? zu.encode(D) : D;
      default:
        return D;
    }
  },
  /**
   * @deprecated
   * This method will be removed in a future version without replacement.
   */
  crc32: function(r, t) {
    return Ya(r, t);
  },
  /**
   * @deprecated
   * This method will be removed in a future version without replacement.
   */
  utf8encode: function(r) {
    return ke.transformTo("string", st.utf8encode(r));
  },
  /**
   * @deprecated
   * This method will be removed in a future version without replacement.
   */
  utf8decode: function(r) {
    return st.utf8decode(r);
  }
};
function Oo(e) {
  var r = Mu(this);
  return r === null || typeof r > "u" ? "" : (this.options.base64 && (r = zu.decode(r)), e && this.options.binary ? r = Ta.utf8decode(r) : r = ke.transformTo("string", r), !e && !this.options.binary && (r = ke.transformTo("string", Ta.utf8encode(r))), r);
}
function Ka(e, r, t) {
  this.name = e, this.dir = t.dir, this.date = t.date, this.comment = t.comment, this.unixPermissions = t.unixPermissions, this.dosPermissions = t.dosPermissions, this._data = r, this.options = t, this._initialMetadata = {
    dir: t.dir,
    date: t.date
  };
}
Ka.prototype = {
  /**
   * Return the content as UTF8 string.
   * @return {string} the UTF8 string.
   */
  asText: function() {
    return Oo.call(this, !0);
  },
  /**
   * Returns the binary content.
   * @return {string} the content as binary.
   */
  asBinary: function() {
    return Oo.call(this, !1);
  },
  /**
   * Returns the content as a nodejs Buffer.
   * @return {Buffer} the content as a Buffer.
   */
  asNodeBuffer: function() {
    var r = Ca(this);
    return ke.transformTo("nodebuffer", r);
  },
  /**
   * Returns the content as an Uint8Array.
   * @return {Uint8Array} the content as an Uint8Array.
   */
  asUint8Array: function() {
    var r = Ca(this);
    return ke.transformTo("uint8array", r);
  },
  /**
   * Returns the content as an ArrayBuffer.
   * @return {ArrayBuffer} the content as an ArrayBufer.
   */
  asArrayBuffer: function() {
    return this.asUint8Array().buffer;
  }
};
function Fe(e, r) {
  var t = "", i;
  for (i = 0; i < r; i++)
    t += String.fromCharCode(e & 255), e >>>= 8;
  return t;
}
function ed(e) {
  return e = e || {}, e.base64 === !0 && (e.binary === null || e.binary === void 0) && (e.binary = !0), e = ke.extend(e, Yp), e.date = e.date || /* @__PURE__ */ new Date(), e.compression !== null && (e.compression = e.compression.toUpperCase()), e;
}
function ju(e, r, t) {
  var i = ke.getTypeOf(r), o;
  if (t = ed(t), typeof t.unixPermissions == "string" && (t.unixPermissions = parseInt(t.unixPermissions, 8)), t.unixPermissions && t.unixPermissions & 16384 && (t.dir = !0), t.dosPermissions && t.dosPermissions & 16 && (t.dir = !0), t.dir && (e = Uu(e)), t.createFolders && (o = rd(e)) && qu.call(this, o, !0), t.dir || r === null || typeof r > "u")
    t.base64 = !1, t.binary = !1, r = null, i = null;
  else if (i === "string")
    t.binary && !t.base64 && t.optimizedBinaryString !== !0 && (r = ke.string2binary(r));
  else {
    if (t.base64 = !1, t.binary = !0, !i && !(r instanceof Dn))
      throw new Error("The data of '" + e + "' is in an unsupported format !");
    i === "arraybuffer" && (r = ke.transformTo("uint8array", r));
  }
  var s = new Ka(e, r, t);
  return this.files[e] = s, s;
}
function rd(e) {
  e.slice(-1) === "/" && (e = e.substring(0, e.length - 1));
  var r = e.lastIndexOf("/");
  return r > 0 ? e.substring(0, r) : "";
}
function Uu(e) {
  return e.slice(-1) !== "/" && (e += "/"), e;
}
function qu(e, r) {
  return r = typeof r < "u" ? r : !1, e = Uu(e), this.files[e] || ju.call(this, e, null, {
    dir: !0,
    createFolders: r
  }), this.files[e];
}
function td(e, r, t) {
  var i = new Dn(), o;
  return e._data instanceof Dn ? (i.uncompressedSize = e._data.uncompressedSize, i.crc32 = e._data.crc32, i.uncompressedSize === 0 || e.dir ? (r = Aa.STORE, i.compressedContent = "", i.crc32 = 0) : e._data.compressionMethod === r.magic ? i.compressedContent = e._data.getCompressedContent() : (o = e._data.getContent(), i.compressedContent = r.compress(ke.transformTo(r.compressInputType, o), t))) : (o = Ca(e), (!o || o.length === 0 || e.dir) && (r = Aa.STORE, o = ""), i.uncompressedSize = o.length, i.crc32 = Ya(o), i.compressedContent = r.compress(ke.transformTo(r.compressInputType, o), t)), i.compressedSize = i.compressedContent.length, i.compressionMethod = r.magic, i;
}
function nd(e, r) {
  var t = e;
  return e || (t = r ? 16893 : 33204), (t & 65535) << 16;
}
function ad(e) {
  return (e || 0) & 63;
}
function id(e, r, t, i, o, s) {
  var l = s !== st.utf8encode, m = ke.transformTo("string", s(r.name)), y = ke.transformTo("string", st.utf8encode(r.name)), d = r.comment || "", c = ke.transformTo("string", s(d)), g = ke.transformTo("string", st.utf8encode(d)), v = y.length !== r.name.length, x = g.length !== d.length, U = r.options, w, _, D = "", k = "", O = "", T, F;
  r._initialMetadata.dir !== r.dir ? T = r.dir : T = U.dir, r._initialMetadata.date !== r.date ? F = r.date : F = U.date;
  var L = 0, A = 0;
  T && (L |= 16), o === "UNIX" ? (A = 798, L |= nd(r.unixPermissions, T)) : (A = 20, L |= ad(r.dosPermissions)), w = F.getHours(), w <<= 6, w |= F.getMinutes(), w <<= 5, w |= F.getSeconds() / 2, _ = F.getFullYear() - 1980, _ <<= 4, _ |= F.getMonth() + 1, _ <<= 5, _ |= F.getDate(), v && (k = // Version
  Fe(1, 1) + // NameCRC32
  Fe(Ya(m), 4) + // UnicodeName
  y, D += // Info-ZIP Unicode Path Extra Field
  "up" + // size
  Fe(k.length, 2) + // content
  k), x && (O = // Version
  Fe(1, 1) + // CommentCRC32
  Fe(this.crc32(c), 4) + // UnicodeName
  g, D += // Info-ZIP Unicode Path Extra Field
  "uc" + // size
  Fe(O.length, 2) + // content
  O);
  var R = "";
  R += `
\0`, R += !l && (v || x) ? "\0\b" : "\0\0", R += t.compressionMethod, R += Fe(w, 2), R += Fe(_, 2), R += Fe(t.crc32, 4), R += Fe(t.compressedSize, 4), R += Fe(t.uncompressedSize, 4), R += Fe(m.length, 2), R += Fe(D.length, 2);
  var q = _a.LOCAL_FILE_HEADER + R + m + D, S = _a.CENTRAL_FILE_HEADER + // version made by (00: DOS)
  Fe(A, 2) + // file header (common to file and central directory)
  R + // file comment length
  Fe(c.length, 2) + // disk number start
  "\0\0\0\0" + // external file attributes
  Fe(L, 4) + // relative offset of local header
  Fe(i, 4) + // file name
  m + // extra field
  D + // file comment
  c;
  return {
    fileRecord: q,
    dirRecord: S,
    compressedObject: t
  };
}
var $u = Ta, od = ur;
function Vu() {
  this.data = null, this.length = 0, this.index = 0, this.zero = 0;
}
Vu.prototype = {
  /**
   * Check that the offset will not go too far.
   * @param {string} offset the additional offset to check.
   * @throws {Error} an Error if the offset is out of bounds.
   */
  checkOffset: function(r) {
    this.checkIndex(this.index + r);
  },
  /**
   * Check that the specifed index will not be too far.
   * @param {string} newIndex the index to check.
   * @throws {Error} an Error if the index is out of bounds.
   */
  checkIndex: function(r) {
    if (this.length < this.zero + r || r < 0)
      throw new Error("End of data reached (data length = " + this.length + ", asked index = " + r + "). Corrupted zip ?");
  },
  /**
   * Change the index.
   * @param {number} newIndex The new index.
   * @throws {Error} if the new index is out of the data.
   */
  setIndex: function(r) {
    this.checkIndex(r), this.index = r;
  },
  /**
   * Skip the next n bytes.
   * @param {number} n the number of bytes to skip.
   * @throws {Error} if the new index is out of the data.
   */
  skip: function(r) {
    this.setIndex(this.index + r);
  },
  /**
   * Get the byte at the specified index.
   * @param {number} i the index to use.
   * @return {number} a byte.
   */
  byteAt: function() {
  },
  /**
   * Get the next number with a given byte size.
   * @param {number} size the number of bytes to read.
   * @return {number} the corresponding number.
   */
  readInt: function(r) {
    var t = 0, i;
    for (this.checkOffset(r), i = this.index + r - 1; i >= this.index; i--)
      t = (t << 8) + this.byteAt(i);
    return this.index += r, t;
  },
  /**
   * Get the next string with a given byte size.
   * @param {number} size the number of bytes to read.
   * @return {string} the corresponding string.
   */
  readString: function(r) {
    return od.transformTo("string", this.readData(r));
  },
  /**
   * Get raw data without conversion, <size> bytes.
   * @param {number} size the number of bytes to read.
   * @return {Object} the raw data, implementation specific.
   */
  readData: function() {
  },
  /**
   * Find the last occurence of a zip signature (4 bytes).
   * @param {string} sig the signature to find.
   * @return {number} the index of the last occurence, -1 if not found.
   */
  lastIndexOfSignature: function() {
  },
  /**
   * Get the next date.
   * @return {Date} the date.
   */
  readDate: function() {
    var r = this.readInt(4);
    return new Date(
      (r >> 25 & 127) + 1980,
      // year
      (r >> 21 & 15) - 1,
      // month
      r >> 16 & 31,
      // day
      r >> 11 & 31,
      // hour
      r >> 5 & 63,
      // minute
      (r & 31) << 1
    );
  }
};
var Zu = Vu, ud = Zu, sd = ur;
function Ht(e, r) {
  this.data = e, r || (this.data = sd.string2binary(this.data)), this.length = this.data.length, this.index = 0, this.zero = 0;
}
Ht.prototype = new ud();
Ht.prototype.byteAt = function(e) {
  return this.data.charCodeAt(this.zero + e);
};
Ht.prototype.lastIndexOfSignature = function(e) {
  return this.data.lastIndexOf(e) - this.zero;
};
Ht.prototype.readData = function(e) {
  this.checkOffset(e);
  var r = this.data.slice(this.zero + this.index, this.zero + this.index + e);
  return this.index += e, r;
};
var Xu = Ht, ld = Zu;
function Gt(e) {
  if (e) {
    this.data = e, this.length = this.data.length, this.index = 0, this.zero = 0;
    for (var r = 0; r < this.data.length; r++)
      e[r] &= e[r];
  }
}
Gt.prototype = new ld();
Gt.prototype.byteAt = function(e) {
  return this.data[this.zero + e];
};
Gt.prototype.lastIndexOfSignature = function(e) {
  for (var r = e.charCodeAt(0), t = e.charCodeAt(1), i = e.charCodeAt(2), o = e.charCodeAt(3), s = this.length - 4; s >= 0; --s)
    if (this.data[s] === r && this.data[s + 1] === t && this.data[s + 2] === i && this.data[s + 3] === o)
      return s - this.zero;
  return -1;
};
Gt.prototype.readData = function(e) {
  if (this.checkOffset(e), e === 0)
    return [];
  var r = this.data.slice(this.zero + this.index, this.zero + this.index + e);
  return this.index += e, r;
};
var Hu = Gt, cd = Hu;
function Ja(e) {
  e && (this.data = e, this.length = this.data.length, this.index = 0, this.zero = 0);
}
Ja.prototype = new cd();
Ja.prototype.readData = function(e) {
  if (this.checkOffset(e), e === 0)
    return new Uint8Array(0);
  var r = this.data.subarray(this.zero + this.index, this.zero + this.index + e);
  return this.index += e, r;
};
var Gu = Ja, fd = Gu;
function Qa(e) {
  this.data = e, this.length = this.data.length, this.index = 0, this.zero = 0;
}
Qa.prototype = new fd();
Qa.prototype.readData = function(e) {
  this.checkOffset(e);
  var r = this.data.slice(this.zero + this.index, this.zero + this.index + e);
  return this.index += e, r;
};
var pd = Qa, ca = Xu, fr = ur, dd = Nu, $r = $u, hd = Ue, md = 0, gd = 3;
function Wu(e, r) {
  this.options = e, this.loadOptions = r;
}
Wu.prototype = {
  /**
   * say if the file is encrypted.
   * @return {boolean} true if the file is encrypted, false otherwise.
   */
  isEncrypted: function() {
    return (this.bitFlag & 1) === 1;
  },
  /**
   * say if the file has utf-8 filename/comment.
   * @return {boolean} true if the filename/comment is in utf-8, false otherwise.
   */
  useUTF8: function() {
    return (this.bitFlag & 2048) === 2048;
  },
  /**
   * Prepare the function used to generate the compressed content from this ZipFile.
   * @param {DataReader} reader the reader to use.
   * @param {number} from the offset from where we should read the data.
   * @param {number} length the length of the data to read.
   * @return {Function} the callback to get the compressed content (the type depends of the DataReader class).
   */
  prepareCompressedContent: function(r, t, i) {
    return function() {
      var o = r.index;
      r.setIndex(t);
      var s = r.readData(i);
      return r.setIndex(o), s;
    };
  },
  /**
   * Prepare the function used to generate the uncompressed content from this ZipFile.
   * @param {DataReader} reader the reader to use.
   * @param {number} from the offset from where we should read the data.
   * @param {number} length the length of the data to read.
   * @param {PizZip.compression} compression the compression used on this file.
   * @param {number} uncompressedSize the uncompressed size to expect.
   * @return {Function} the callback to get the uncompressed content (the type depends of the DataReader class).
   */
  prepareContent: function(r, t, i, o, s) {
    return function() {
      var l = fr.transformTo(o.uncompressInputType, this.getCompressedContent()), m = o.uncompress(l);
      if (m.length !== s)
        throw new Error("Bug : uncompressed data size mismatch");
      return m;
    };
  },
  /**
   * Read the local part of a zip file and add the info in this object.
   * @param {DataReader} reader the reader to use.
   */
  readLocalPart: function(r) {
    r.skip(22), this.fileNameLength = r.readInt(2);
    var t = r.readInt(2);
    if (this.fileName = r.readData(this.fileNameLength), r.skip(t), this.compressedSize === -1 || this.uncompressedSize === -1)
      throw new Error("Bug or corrupted zip : didn't get enough informations from the central directory (compressedSize == -1 || uncompressedSize == -1)");
    var i = fr.findCompression(this.compressionMethod);
    if (i === null)
      throw new Error("Corrupted zip : compression " + fr.pretty(this.compressionMethod) + " unknown (inner file : " + fr.transformTo("string", this.fileName) + ")");
    if (this.decompressed = new dd(), this.decompressed.compressedSize = this.compressedSize, this.decompressed.uncompressedSize = this.uncompressedSize, this.decompressed.crc32 = this.crc32, this.decompressed.compressionMethod = this.compressionMethod, this.decompressed.getCompressedContent = this.prepareCompressedContent(r, r.index, this.compressedSize, i), this.decompressed.getContent = this.prepareContent(r, r.index, this.compressedSize, i, this.uncompressedSize), this.loadOptions.checkCRC32 && (this.decompressed = fr.transformTo("string", this.decompressed.getContent()), $r.crc32(this.decompressed) !== this.crc32))
      throw new Error("Corrupted zip : CRC32 mismatch");
  },
  /**
   * Read the central part of a zip file and add the info in this object.
   * @param {DataReader} reader the reader to use.
   */
  readCentralPart: function(r) {
    if (this.versionMadeBy = r.readInt(2), this.versionNeeded = r.readInt(2), this.bitFlag = r.readInt(2), this.compressionMethod = r.readString(2), this.date = r.readDate(), this.crc32 = r.readInt(4), this.compressedSize = r.readInt(4), this.uncompressedSize = r.readInt(4), this.fileNameLength = r.readInt(2), this.extraFieldsLength = r.readInt(2), this.fileCommentLength = r.readInt(2), this.diskNumberStart = r.readInt(2), this.internalFileAttributes = r.readInt(2), this.externalFileAttributes = r.readInt(4), this.localHeaderOffset = r.readInt(4), this.isEncrypted())
      throw new Error("Encrypted zip are not supported");
    this.fileName = r.readData(this.fileNameLength), this.readExtraFields(r), this.parseZIP64ExtraField(r), this.fileComment = r.readData(this.fileCommentLength);
  },
  /**
   * Parse the external file attributes and get the unix/dos permissions.
   */
  processAttributes: function() {
    this.unixPermissions = null, this.dosPermissions = null;
    var r = this.versionMadeBy >> 8;
    this.dir = !!(this.externalFileAttributes & 16), r === md && (this.dosPermissions = this.externalFileAttributes & 63), r === gd && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535), !this.dir && this.fileNameStr.slice(-1) === "/" && (this.dir = !0);
  },
  /**
   * Parse the ZIP64 extra field and merge the info in the current ZipEntry.
   */
  parseZIP64ExtraField: function() {
    if (this.extraFields[1]) {
      var r = new ca(this.extraFields[1].value);
      this.uncompressedSize === fr.MAX_VALUE_32BITS && (this.uncompressedSize = r.readInt(8)), this.compressedSize === fr.MAX_VALUE_32BITS && (this.compressedSize = r.readInt(8)), this.localHeaderOffset === fr.MAX_VALUE_32BITS && (this.localHeaderOffset = r.readInt(8)), this.diskNumberStart === fr.MAX_VALUE_32BITS && (this.diskNumberStart = r.readInt(4));
    }
  },
  /**
   * Read the central part of a zip file and add the info in this object.
   * @param {DataReader} reader the reader to use.
   */
  readExtraFields: function(r) {
    var t = r.index, i, o, s;
    for (this.extraFields = this.extraFields || {}; r.index < t + this.extraFieldsLength; )
      i = r.readInt(2), o = r.readInt(2), s = r.readString(o), this.extraFields[i] = {
        id: i,
        length: o,
        value: s
      };
  },
  /**
   * Apply an UTF8 transformation if needed.
   */
  handleUTF8: function() {
    var r = hd.uint8array ? "uint8array" : "array";
    if (this.useUTF8())
      this.fileNameStr = $r.utf8decode(this.fileName), this.fileCommentStr = $r.utf8decode(this.fileComment);
    else {
      var t = this.findExtraFieldUnicodePath();
      if (t !== null)
        this.fileNameStr = t;
      else {
        var i = fr.transformTo(r, this.fileName);
        this.fileNameStr = this.loadOptions.decodeFileName(i);
      }
      var o = this.findExtraFieldUnicodeComment();
      if (o !== null)
        this.fileCommentStr = o;
      else {
        var s = fr.transformTo(r, this.fileComment);
        this.fileCommentStr = this.loadOptions.decodeFileName(s);
      }
    }
  },
  /**
   * Find the unicode path declared in the extra field, if any.
   * @return {String} the unicode path, null otherwise.
   */
  findExtraFieldUnicodePath: function() {
    var r = this.extraFields[28789];
    if (r) {
      var t = new ca(r.value);
      return t.readInt(1) !== 1 || $r.crc32(this.fileName) !== t.readInt(4) ? null : $r.utf8decode(t.readString(r.length - 5));
    }
    return null;
  },
  /**
   * Find the unicode comment declared in the extra field, if any.
   * @return {String} the unicode comment, null otherwise.
   */
  findExtraFieldUnicodeComment: function() {
    var r = this.extraFields[25461];
    if (r) {
      var t = new ca(r.value);
      return t.readInt(1) !== 1 || $r.crc32(this.fileComment) !== t.readInt(4) ? null : $r.utf8decode(t.readString(r.length - 5));
    }
    return null;
  }
};
var vd = Wu, bd = Xu, yd = pd, wd = Gu, xd = Hu, ar = ur, pr = Lr, Dd = vd, pn = Ue;
function Yu(e, r) {
  this.files = [], this.loadOptions = r, e && this.load(e);
}
Yu.prototype = {
  /**
   * Check that the reader is on the speficied signature.
   * @param {string} expectedSignature the expected signature.
   * @throws {Error} if it is an other signature.
   */
  checkSignature: function(r) {
    var t = this.reader.readString(4);
    if (t !== r)
      throw new Error("Corrupted zip or bug : unexpected signature (" + ar.pretty(t) + ", expected " + ar.pretty(r) + ")");
  },
  /**
   * Check if the given signature is at the given index.
   * @param {number} askedIndex the index to check.
   * @param {string} expectedSignature the signature to expect.
   * @return {boolean} true if the signature is here, false otherwise.
   */
  isSignature: function(r, t) {
    var i = this.reader.index;
    this.reader.setIndex(r);
    var o = this.reader.readString(4), s = o === t;
    return this.reader.setIndex(i), s;
  },
  /**
   * Read the end of the central directory.
   */
  readBlockEndOfCentral: function() {
    this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
    var r = this.reader.readData(this.zipCommentLength), t = pn.uint8array ? "uint8array" : "array", i = ar.transformTo(t, r);
    this.zipComment = this.loadOptions.decodeFileName(i);
  },
  /**
   * Read the end of the Zip 64 central directory.
   * Not merged with the method readEndOfCentral :
   * The end of central can coexist with its Zip64 brother,
   * I don't want to read the wrong number of bytes !
   */
  readBlockZip64EndOfCentral: function() {
    this.zip64EndOfCentralSize = this.reader.readInt(8), this.versionMadeBy = this.reader.readString(2), this.versionNeeded = this.reader.readInt(2), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
    for (var r = this.zip64EndOfCentralSize - 44, t = 0, i, o, s; t < r; )
      i = this.reader.readInt(2), o = this.reader.readInt(4), s = this.reader.readString(o), this.zip64ExtensibleData[i] = {
        id: i,
        length: o,
        value: s
      };
  },
  /**
   * Read the end of the Zip 64 central directory locator.
   */
  readBlockZip64EndOfCentralLocator: function() {
    if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), this.disksCount > 1)
      throw new Error("Multi-volumes zip are not supported");
  },
  /**
   * Read the local files, based on the offset read in the central part.
   */
  readLocalFiles: function() {
    var r, t;
    for (r = 0; r < this.files.length; r++)
      t = this.files[r], this.reader.setIndex(t.localHeaderOffset), this.checkSignature(pr.LOCAL_FILE_HEADER), t.readLocalPart(this.reader), t.handleUTF8(), t.processAttributes();
  },
  /**
   * Read the central directory.
   */
  readCentralDir: function() {
    var r;
    for (this.reader.setIndex(this.centralDirOffset); this.reader.readString(4) === pr.CENTRAL_FILE_HEADER; )
      r = new Dd({
        zip64: this.zip64
      }, this.loadOptions), r.readCentralPart(this.reader), this.files.push(r);
    if (this.centralDirRecords !== this.files.length && this.centralDirRecords !== 0 && this.files.length === 0)
      throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
  },
  /**
   * Read the end of central directory.
   */
  readEndOfCentral: function() {
    var r = this.reader.lastIndexOfSignature(pr.CENTRAL_DIRECTORY_END);
    if (r < 0) {
      var t = !this.isSignature(0, pr.LOCAL_FILE_HEADER);
      throw t ? new Error("Can't find end of central directory : is this a zip file ?") : new Error("Corrupted zip : can't find end of central directory");
    }
    this.reader.setIndex(r);
    var i = r;
    if (this.checkSignature(pr.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === ar.MAX_VALUE_16BITS || this.diskWithCentralDirStart === ar.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === ar.MAX_VALUE_16BITS || this.centralDirRecords === ar.MAX_VALUE_16BITS || this.centralDirSize === ar.MAX_VALUE_32BITS || this.centralDirOffset === ar.MAX_VALUE_32BITS) {
      if (this.zip64 = !0, r = this.reader.lastIndexOfSignature(pr.ZIP64_CENTRAL_DIRECTORY_LOCATOR), r < 0)
        throw new Error("Corrupted zip : can't find the ZIP64 end of central directory locator");
      if (this.reader.setIndex(r), this.checkSignature(pr.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, pr.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(pr.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0))
        throw new Error("Corrupted zip : can't find the ZIP64 end of central directory");
      this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(pr.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
    }
    var o = this.centralDirOffset + this.centralDirSize;
    this.zip64 && (o += 20, o += 12 + this.zip64EndOfCentralSize);
    var s = i - o;
    if (s > 0)
      this.isSignature(i, pr.CENTRAL_FILE_HEADER) || (this.reader.zero = s);
    else if (s < 0)
      throw new Error("Corrupted zip: missing " + Math.abs(s) + " bytes.");
  },
  prepareReader: function(r) {
    var t = ar.getTypeOf(r);
    if (ar.checkSupport(t), t === "string" && !pn.uint8array)
      this.reader = new bd(r, this.loadOptions.optimizedBinaryString);
    else if (t === "nodebuffer")
      this.reader = new yd(r);
    else if (pn.uint8array)
      this.reader = new wd(ar.transformTo("uint8array", r));
    else if (pn.array)
      this.reader = new xd(ar.transformTo("array", r));
    else
      throw new Error("Unexpected error: unsupported type '" + t + "'");
  },
  /**
   * Read a zip file and create ZipEntries.
   * @param {String|ArrayBuffer|Uint8Array|Buffer} data the binary string representing a zip file.
   */
  load: function(r) {
    this.prepareReader(r), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
  }
};
var Ed = Yu, _d = Zt, Ad = kn, Cd = ur, Td = Ed, Sd = function(e, r) {
  var t, i;
  r = Cd.extend(r || {}, {
    base64: !1,
    checkCRC32: !1,
    optimizedBinaryString: !1,
    createFolders: !1,
    decodeFileName: Ad.utf8decode
  }), r.base64 && (e = _d.decode(e));
  var o = new Td(e, r), s = o.files;
  for (t = 0; t < s.length; t++)
    i = s[t], this.file(i.fileNameStr, i.decompressed, {
      binary: !0,
      optimizedBinaryString: !0,
      date: i.date,
      dir: i.dir,
      comment: i.fileCommentStr.length ? i.fileCommentStr : null,
      unixPermissions: i.unixPermissions,
      dosPermissions: i.dosPermissions,
      createFolders: r.createFolders
    });
  return o.zipComment.length && (this.comment = o.zipComment), this;
}, Je = {}, We = ur;
Je.string2binary = function(e) {
  return We.string2binary(e);
};
Je.string2Uint8Array = function(e) {
  return We.transformTo("uint8array", e);
};
Je.uint8Array2String = function(e) {
  return We.transformTo("string", e);
};
Je.string2Blob = function(e) {
  var r = We.transformTo("arraybuffer", e);
  return We.arrayBuffer2Blob(r);
};
Je.arrayBuffer2Blob = function(e) {
  return We.arrayBuffer2Blob(e);
};
Je.transformTo = function(e, r) {
  return We.transformTo(e, r);
};
Je.getTypeOf = function(e) {
  return We.getTypeOf(e);
};
Je.checkSupport = function(e) {
  return We.checkSupport(e);
};
Je.MAX_VALUE_16BITS = We.MAX_VALUE_16BITS;
Je.MAX_VALUE_32BITS = We.MAX_VALUE_32BITS;
Je.pretty = function(e) {
  return We.pretty(e);
};
Je.findCompression = function(e) {
  return We.findCompression(e);
};
Je.isRegExp = function(e) {
  return We.isRegExp(e);
};
(function(e) {
  var r = Zt;
  function t(i, o) {
    if (!(this instanceof t))
      return new t(i, o);
    this.files = {}, this.comment = null, this.root = "", i && this.load(i, o), this.clone = function() {
      var s = this, l = new t();
      return Object.keys(this.files).forEach(function(m) {
        l.file(m, s.files[m].asUint8Array());
      }), l;
    }, this.shallowClone = function() {
      var s = new t();
      for (var l in this)
        typeof this[l] != "function" && (s[l] = this[l]);
      return s;
    };
  }
  t.prototype = $u, t.prototype.load = Sd, t.support = Ue, t.defaults = sr, t.utils = Je, t.base64 = {
    /**
     * @deprecated
     * This method will be removed in a future version without replacement.
     */
    encode: function(o) {
      return r.encode(o);
    },
    /**
     * @deprecated
     * This method will be removed in a future version without replacement.
     */
    decode: function(o) {
      return r.decode(o);
    }
  }, t.compressions = Xt, e.exports = t, e.exports.default = t;
})(Ou);
var kd = Ou.exports;
const Bd = /* @__PURE__ */ Fo(kd);
var Ku = { exports: {} };
(function(e, r) {
  (function(t, i) {
    i();
  })(ot, function() {
    function t(d, c) {
      return typeof c > "u" ? c = { autoBom: !1 } : typeof c != "object" && (console.warn("Deprecated: Expected third argument to be a object"), c = { autoBom: !c }), c.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(d.type) ? new Blob(["\uFEFF", d], { type: d.type }) : d;
    }
    function i(d, c, g) {
      var v = new XMLHttpRequest();
      v.open("GET", d), v.responseType = "blob", v.onload = function() {
        y(v.response, c, g);
      }, v.onerror = function() {
        console.error("could not download file");
      }, v.send();
    }
    function o(d) {
      var c = new XMLHttpRequest();
      c.open("HEAD", d, !1);
      try {
        c.send();
      } catch {
      }
      return 200 <= c.status && 299 >= c.status;
    }
    function s(d) {
      try {
        d.dispatchEvent(new MouseEvent("click"));
      } catch {
        var c = document.createEvent("MouseEvents");
        c.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), d.dispatchEvent(c);
      }
    }
    var l = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof ot == "object" && ot.global === ot ? ot : void 0, m = l.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), y = l.saveAs || (typeof window != "object" || window !== l ? function() {
    } : "download" in HTMLAnchorElement.prototype && !m ? function(d, c, g) {
      var v = l.URL || l.webkitURL, x = document.createElement("a");
      c = c || d.name || "download", x.download = c, x.rel = "noopener", typeof d == "string" ? (x.href = d, x.origin === location.origin ? s(x) : o(x.href) ? i(d, c, g) : s(x, x.target = "_blank")) : (x.href = v.createObjectURL(d), setTimeout(function() {
        v.revokeObjectURL(x.href);
      }, 4e4), setTimeout(function() {
        s(x);
      }, 0));
    } : "msSaveOrOpenBlob" in navigator ? function(d, c, g) {
      if (c = c || d.name || "download", typeof d != "string")
        navigator.msSaveOrOpenBlob(t(d, g), c);
      else if (o(d))
        i(d, c, g);
      else {
        var v = document.createElement("a");
        v.href = d, v.target = "_blank", setTimeout(function() {
          s(v);
        });
      }
    } : function(d, c, g, v) {
      if (v = v || open("", "_blank"), v && (v.document.title = v.document.body.innerText = "downloading..."), typeof d == "string")
        return i(d, c, g);
      var x = d.type === "application/octet-stream", U = /constructor/i.test(l.HTMLElement) || l.safari, w = /CriOS\/[\d]+/.test(navigator.userAgent);
      if ((w || x && U || m) && typeof FileReader < "u") {
        var _ = new FileReader();
        _.onloadend = function() {
          var O = _.result;
          O = w ? O : O.replace(/^data:[^;]*;/, "data:attachment/file;"), v ? v.location.href = O : location = O, v = null;
        }, _.readAsDataURL(d);
      } else {
        var D = l.URL || l.webkitURL, k = D.createObjectURL(d);
        v ? v.location = k : location.href = k, v = null, setTimeout(function() {
          D.revokeObjectURL(k);
        }, 4e4);
      }
    });
    l.saveAs = y.saveAs = y, e.exports = y;
  });
})(Ku);
var Od = Ku.exports;
function Xd(e) {
  const r = new Bd(e.contentBase64, { base64: !0 }), t = new Ip(r, { paragraphLoop: !0, linebreaks: !0 });
  t.render(e.model);
  const i = t.getZip().generate({
    type: "blob",
    mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  });
  Od.saveAs(i, e.filename);
}
const Hd = (e) => {
  const r = Zr(e);
  return {
    loading: r,
    /**
     * Mantem o state do loading = true enquando a função async está em execução
     * @param {Function} asyncFunc
     */
    handler: async (t) => {
      try {
        r.value = !0, await t();
      } finally {
        r.value = !1;
      }
    }
  };
}, Fd = (e, r = "Email inválido") => String(e).toLowerCase().match(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
) ? !0 : r;
function Pd(e, r = "O CPF informado não é válido") {
  const t = Bs(e);
  return Rd(t) ? !0 : r;
}
function Rd(e) {
  let r, t;
  if (r = 0, e == "00000000000")
    return !1;
  for (let i = 1; i <= 9; i++)
    r = r + parseInt(e.substring(i - 1, i)) * (11 - i);
  if (t = r * 10 % 11, (t == 10 || t == 11) && (t = 0), t != parseInt(e.substring(9, 10)))
    return !1;
  r = 0;
  for (let i = 1; i <= 10; i++)
    r = r + parseInt(e.substring(i - 1, i)) * (12 - i);
  return t = r * 10 % 11, (t == 10 || t == 11) && (t = 0), t == parseInt(e.substring(10, 11));
}
const Gd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, isCpf: Pd, isEmail: Fd }, Symbol.toStringTag, { value: "Module" }));
async function Nd(e) {
  return await Sa("POST", "/nbox/storage", {}, e, !0);
}
async function Id(e) {
  const r = await Sa(
    "GET",
    "/nbox/storage/{fileId}",
    { fileId: e },
    null,
    !0
  ), t = `data:${r.contentType};base64,${r.contentBase64}`, i = document.createElement("a");
  i.href = t, i.download = r.filename, i.click();
}
async function Ld(e) {
  await Sa("DELETE", "/nbox/storage/{fileId}", { fileId: e }, null, !0);
}
const Wd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, download: Id, remove: Ld, upload: Nd }, Symbol.toStringTag, { value: "Module" })), zd = Rs(
  {
    Transfer: {
      clearAll: "Limpar todos",
      selectAll: "Selecionar todos"
    }
  },
  Ns
), Md = Is, Yd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({ __proto__: null, datePtBR: Md, ptBR: zd }, Symbol.toStringTag, { value: "Module" }));
export {
  Qd as _,
  Sa as api,
  Vd as createApp,
  Zd as device,
  eh as doLogin,
  rh as doLogout,
  Xd as downloadDocxReport,
  Ls as errorHandler,
  Yd as locale,
  th as mask,
  Et as notification,
  nh as objectPath,
  ah as permissions,
  ih as profile,
  oh as sitemap,
  Wd as storage,
  Ss as tryLogin,
  uh as useCulture,
  Hd as useLoading,
  ks as user,
  Gd as validators
};
