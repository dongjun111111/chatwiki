const __vite__fileDeps=["./en-US-CMIkWmGN.js","./index.js","./vue-chunks-bivF63W1.js","../css/index-CYyqW3H1.css","./zh-CN-BCIWmfCT.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{w as q,a as G,u as Y,c as O,b as J,t as S,d as D,e as w,r as Q,f as X,h as Z,B as T,n as ee,i as te,m as ne,j as E,p as oe,k as ae,l as le,o as se,q as ce,s as re,v as b,_ as ie,x as I,y as ue,z as de}from"./index.js";import{o as fe,u as me,p as ge,a as he,P as Be,c as ve,m as be,b as we}from"./mount-component-CykHHX7s.js";import{r as L,b as Ce,n as R,w as pe,k as s,j as C,e as H,f as ye,G as _e,q as z,D as Pe,A as k,y as ke,z as xe,H as x}from"./vue-chunks-bivF63W1.js";const Se=(e,n)=>{const t=L(),o=()=>{t.value=Y(e).height};return Ce(()=>{R(o);for(let l=1;l<=3;l++)setTimeout(o,100*l)}),fe(()=>R(o)),pe([q,G],o),t};function Te(e,n){const t=Se(e);return o=>s("div",{class:n("placeholder"),style:{height:t.value?`${t.value}px`:void 0}},[o()])}const[F,N]=O("action-bar"),U=Symbol(F),Ae={placeholder:Boolean,safeAreaInsetBottom:S};var Oe=C({name:F,props:Ae,setup(e,{slots:n}){const t=L(),o=Te(t,N),{linkChildren:l}=J(U);l();const i=()=>{var u;return s("div",{ref:t,class:[N(),{"van-safe-area-bottom":e.safeAreaInsetBottom}]},[(u=n.default)==null?void 0:u.call(n)])};return()=>e.placeholder?o(i):i()}});const De=D(Oe),[Le,Ee]=O("action-bar-button"),Ie=w({},Q,{type:String,text:String,icon:String,color:String,loading:Boolean,disabled:Boolean});var Re=C({name:Le,props:Ie,setup(e,{slots:n}){const t=X(),{parent:o,index:l}=Z(U),i=H(()=>{if(o){const c=o.children[l.value-1];return!(c&&"isButton"in c)}}),u=H(()=>{if(o){const c=o.children[l.value+1];return!(c&&"isButton"in c)}});return me({isButton:!0}),()=>{const{type:c,icon:g,text:h,color:p,loading:y,disabled:_}=e;return s(T,{class:Ee([c,{last:u.value,first:i.value}]),size:"large",type:c,icon:g,color:p,loading:y,disabled:_,onClick:t},{default:()=>[n.default?n.default():h]})}}});const $=D(Re),[He,d,v]=O("dialog"),Ne=w({},ge,{title:String,theme:String,width:ee,message:[String,Function],callback:Function,allowHtml:Boolean,className:te,transition:ne("van-dialog-bounce"),messageAlign:String,closeOnPopstate:S,showCancelButton:Boolean,cancelButtonText:String,cancelButtonColor:String,cancelButtonDisabled:Boolean,confirmButtonText:String,confirmButtonColor:String,confirmButtonDisabled:Boolean,showConfirmButton:S,closeOnClickOverlay:Boolean}),$e=[...he,"transition","closeOnPopstate"];var K=C({name:He,props:Ne,emits:["confirm","cancel","keydown","update:show"],setup(e,{emit:n,slots:t}){const o=L(),l=ye({confirm:!1,cancel:!1}),i=a=>n("update:show",a),u=a=>{var r;i(!1),(r=e.callback)==null||r.call(e,a)},c=a=>()=>{e.show&&(n(a),e.beforeClose?(l[a]=!0,ve(e.beforeClose,{args:[a],done(){u(a),l[a]=!1},canceled(){l[a]=!1}})):u(a))},g=c("cancel"),h=c("confirm"),p=_e(a=>{var r,f;if(a.target!==((f=(r=o.value)==null?void 0:r.popupRef)==null?void 0:f.value))return;({Enter:e.showConfirmButton?h:E,Escape:e.showCancelButton?g:E})[a.key](),n("keydown",a)},["enter","esc"]),y=()=>{const a=t.title?t.title():e.title;if(a)return s("div",{class:d("header",{isolated:!e.message&&!t.default})},[a])},_=a=>{const{message:r,allowHtml:f,messageAlign:m}=e,B=d("message",{"has-title":a,[m]:m}),P=le(r)?r():r;return f&&typeof P=="string"?s("div",{class:B,innerHTML:P},null):s("div",{class:B},[P])},M=()=>{if(t.default)return s("div",{class:d("content")},[t.default()]);const{title:a,message:r,allowHtml:f}=e;if(r){const m=!!(a||t.title);return s("div",{key:f?1:0,class:d("content",{isolated:!m})},[_(m)])}},V=()=>s("div",{class:[ce,d("footer")]},[e.showCancelButton&&s(T,{size:"large",text:e.cancelButtonText||v("cancel"),class:d("cancel"),style:{color:e.cancelButtonColor},loading:l.cancel,disabled:e.cancelButtonDisabled,onClick:g},null),e.showConfirmButton&&s(T,{size:"large",text:e.confirmButtonText||v("confirm"),class:[d("confirm"),{[se]:e.showCancelButton}],style:{color:e.confirmButtonColor},loading:l.confirm,disabled:e.confirmButtonDisabled,onClick:h},null)]),W=()=>s(De,{class:d("footer")},{default:()=>[e.showCancelButton&&s($,{type:"warning",text:e.cancelButtonText||v("cancel"),class:d("cancel"),color:e.cancelButtonColor,loading:l.cancel,disabled:e.cancelButtonDisabled,onClick:g},null),e.showConfirmButton&&s($,{type:"danger",text:e.confirmButtonText||v("confirm"),class:d("confirm"),color:e.confirmButtonColor,loading:l.confirm,disabled:e.confirmButtonDisabled,onClick:h},null)]}),j=()=>t.footer?t.footer():e.theme==="round-button"?W():V();return()=>{const{width:a,title:r,theme:f,message:m,className:B}=e;return s(Be,z({ref:o,role:"dialog",class:[d([f]),B],style:{width:ae(a)},tabindex:0,"aria-labelledby":r||m,onKeydown:p,"onUpdate:show":i},oe(e,$e)),{default:()=>[y(),M(),j()]})}}});let A;const ze={title:"",width:"",theme:null,message:"",overlay:!0,callback:null,teleport:"body",className:"",allowHtml:!1,lockScroll:!0,transition:void 0,beforeClose:null,overlayClass:"",overlayStyle:void 0,messageAlign:"",cancelButtonText:"",cancelButtonColor:null,cancelButtonDisabled:!1,confirmButtonText:"",confirmButtonColor:null,confirmButtonDisabled:!1,showConfirmButton:!0,showCancelButton:!1,closeOnPopstate:!0,closeOnClickOverlay:!1};let Fe=w({},ze);function Ue(){({instance:A}=be({setup(){const{state:n,toggle:t}=we();return()=>s(K,z(n,{"onUpdate:show":t}),null)}}))}function Ke(e){return re?new Promise((n,t)=>{A||Ue(),A.open(w({},Fe,e,{callback:o=>{(o==="confirm"?n:t)(o)}}))}):Promise.resolve(void 0)}D(K);const Me=e=>{const n=ue();b.mode==="legacy"?b.global.locale=e:b.global.locale.value=e,n.setCurrentLocale({lang:e}),de(e)},Ve=()=>({changeLocale:async n=>{const t=b.global,o=await ie(Object.assign({"../../locales/lang/en-US.ts":()=>I(()=>import("./en-US-CMIkWmGN.js"),__vite__mapDeps([0,1,2,3]),import.meta.url),"../../locales/lang/zh-CN.ts":()=>I(()=>import("./zh-CN-BCIWmfCT.js"),__vite__mapDeps([4,1,2,3]),import.meta.url)}),`../../locales/lang/${n}.ts`,5);t.setLocaleMessage(n,o.default),Me(n)}}),We={class:"main"},Ye=C({__name:"index",setup(e){const{changeLocale:n}=Ve();function t(){Ke({title:"Title",message:"The code is written for people to see and can be run on a machine."}).then(()=>{})}function o(l){n(l)}return(l,i)=>{const u=ke("van-button");return xe(),Pe("div",We,[s(u,{type:"primary",onClick:t},{default:k(()=>[x("showAlert")]),_:1}),s(u,{type:"success",onClick:i[0]||(i[0]=c=>o("en-US"))},{default:k(()=>[x("en-US")]),_:1}),s(u,{type:"default",onClick:i[1]||(i[1]=c=>o("zh-CN"))},{default:k(()=>[x("zh-CN")]),_:1})])}}});export{Ye as default};
