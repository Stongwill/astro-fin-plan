(()=>{"use strict";var e={370:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),t.hash&&(e+=t.hash),t.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(e)?'"'.concat(e,'"'):e):e}},309:(e,t,s)=>{e.exports=s.p+"assets/answers.png"},879:(e,t,s)=>{e.exports=s.p+"assets/astrofinplan.png"},402:(e,t,s)=>{e.exports=s.p+"assets/download.png"},66:(e,t,s)=>{e.exports=s.p+"assets/favicon.svg"},310:(e,t,s)=>{e.exports=s.p+"assets/footer__logo.png"},575:(e,t,s)=>{e.exports=s.p+"assets/footer_whatsapp.svg"},712:(e,t,s)=>{e.exports=s.p+"assets/list-no.png"},135:(e,t,s)=>{e.exports=s.p+"assets/list.png"},763:(e,t,s)=>{e.exports=s.p+"assets/live-1.png"},332:(e,t,s)=>{e.exports=s.p+"assets/live-2.png"},758:(e,t,s)=>{e.exports=s.p+"assets/live-3.png"},830:(e,t,s)=>{e.exports=s.p+"assets/live-4.png"},317:(e,t,s)=>{e.exports=s.p+"assets/logo.png"},194:(e,t,s)=>{e.exports=s.p+"assets/number-ipad.png"},303:(e,t,s)=>{e.exports=s.p+"assets/number-mobile.png"},828:(e,t,s)=>{e.exports=s.p+"assets/numbers.png"},165:(e,t,s)=>{e.exports=s.p+"assets/plan.png"},391:(e,t,s)=>{e.exports=s.p+"assets/telegram.png"},323:(e,t,s)=>{e.exports=s.p+"assets/telegram.svg"},218:(e,t,s)=>{e.exports=s.p+"assets/whatsapp.png"},113:(e,t,s)=>{e.exports=s.p+"assets/why.png"},675:(e,t,s)=>{e.exports=s.p+"assets/znakomo.png"}},t={};function s(o){var n=t[o];if(void 0!==n)return n.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,s),r.exports}s.m=e,s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var o in t)s.o(t,o)&&!s.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;s.g.importScripts&&(e=s.g.location+"");var t=s.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),s.p=e})(),s.b=document.baseURI||self.location.href,(()=>{var e=s(370),t=s.n(e),o=new URL(s(66),s.b),n=new URL(s(317),s.b),r=new URL(s(218),s.b),p=new URL(s(391),s.b),a=new URL(s(763),s.b),c=new URL(s(675),s.b),l=new URL(s(332),s.b),i=new URL(s(758),s.b),u=new URL(s(830),s.b),d=new URL(s(113),s.b),g=new URL(s(879),s.b),b=new URL(s(828),s.b),L=new URL(s(194),s.b),m=new URL(s(303),s.b),w=new URL(s(165),s.b),v=new URL(s(135),s.b),f=new URL(s(712),s.b),x=new URL(s(402),s.b),R=new URL(s(309),s.b),U=new URL(s(218),s.b),y=new URL(s(391),s.b),_=new URL(s(310),s.b),h=new URL(s(575),s.b),S=new URL(s(323),s.b);t()(o),t()(n),t()(r),t()(p),t()(a),t()(c),t()(l),t()(i),t()(u),t()(d),t()(g),t()(b),t()(L),t()(m),t()(w),t()(v),t()(f),t()(x);t()(R),t()(U),t()(y),t()(_),t()(h),t()(S);const q=document.querySelector("#burger"),k=document.querySelector("#sidebar"),E=document.querySelector(".sidebar__body"),N=document.querySelector(".header__menu").cloneNode(1),j=document.querySelector(".social__messanger").cloneNode(1),D=document.body,O=document.querySelector(".btn").cloneNode(1),P=document.querySelector(".closed"),T=document.querySelector(".footer__company-link"),$=document.querySelector("#popup__form-mobile"),M=document.querySelector(".questions__input").cloneNode(1);q.addEventListener("click",(function(e){e.preventDefault(),k.classList.toggle("open"),D.classList.toggle("noscroll"),k.addEventListener("click",(e=>{e.target.closest(".sidebar__body")||(k.classList.remove("open"),D.classList.remove("noscroll"))})),E.append(N,j,T,O),O.addEventListener("click",(e=>{e.preventDefault(),E.classList.remove("open")}))})),O.addEventListener("click",(function(e){e.preventDefault(),k.classList.toggle("open"),$.classList.toggle("open-popup"),$.append(M,P),$.addEventListener("click",(e=>{e.target.closest(".questions__input")||($.classList.remove("open-popup"),D.classList.remove("noscroll"))}))})),P.addEventListener("click",(function(e){e.preventDefault(),k.classList.remove("open"),D.classList.remove("noscroll")}))})()})();
//# sourceMappingURL=main.c0cfeff414b96a8d152a.js.map