import{d as oe,w as k,g as L,r as i,a as R,l as ne,j as N,k as y,T as K,U as Y,V as j,e as ae,n as se,b as le,c as ce,p as re,W as ie,P as ue,q as A,F as de,f as ve}from"./vue-chunks-Dt9l9PfJ.js";import{G as fe,j as me,e as T,n as b,t as C,i as M,T as E,H as ye,J as he,K as F,c as X,M as $,N as Ie,C as H,d as V,m as x,O as pe,P as Ce,I as Oe}from"./index.js";function Pe(e,{args:t=[],done:o,canceled:a,error:n}){if(e){const s=e.apply(null,t);fe(s)?s.then(l=>{l?o():a&&a()}).catch(n||me):s?o():a&&a()}else o()}const G=Symbol();function Le(e){const t=oe(G,null);t&&k(t,o=>{o&&e()})}function U(e){const t=L();t&&T(t.proxy,e)}const W={show:Boolean,zIndex:b,overlay:C,duration:b,teleport:[String,Object],lockScroll:C,lazyRender:C,beforeClose:Function,overlayStyle:Object,overlayClass:M,transitionAppear:Boolean,closeOnClickOverlay:C},Re=Object.keys(W);function we(e,t){return e>t?"horizontal":t>e?"vertical":""}function Se(){const e=i(0),t=i(0),o=i(0),a=i(0),n=i(0),s=i(0),l=i(""),r=i(!0),O=()=>l.value==="vertical",p=()=>l.value==="horizontal",u=()=>{o.value=0,a.value=0,n.value=0,s.value=0,l.value="",r.value=!0};return{move:d=>{const v=d.touches[0];o.value=(v.clientX<0?0:v.clientX)-e.value,a.value=v.clientY-t.value,n.value=Math.abs(o.value),s.value=Math.abs(a.value);const I=10;(!l.value||n.value<I&&s.value<I)&&(l.value=we(n.value,s.value)),r.value&&(n.value>E||s.value>E)&&(r.value=!1)},start:d=>{u(),e.value=d.touches[0].clientX,t.value=d.touches[0].clientY},reset:u,startX:e,startY:t,deltaX:o,deltaY:a,offsetX:n,offsetY:s,direction:l,isVertical:O,isHorizontal:p,isTap:r}}let P=0;const _="van-overflow-hidden";function be(e,t){const o=Se(),a="01",n="10",s=u=>{o.move(u);const h=o.deltaY.value>0?n:a,w=he(u.target,e.value),{scrollHeight:d,offsetHeight:v,scrollTop:I}=w;let f="11";I===0?f=v>=d?"00":"01":I+v>=d&&(f="10"),f!=="11"&&o.isVertical()&&!(parseInt(f,2)&parseInt(h,2))&&F(u,!0)},l=()=>{document.addEventListener("touchstart",o.start),document.addEventListener("touchmove",s,{passive:!1}),P||document.body.classList.add(_),P++},r=()=>{P&&(document.removeEventListener("touchstart",o.start),document.removeEventListener("touchmove",s),P--,P||document.body.classList.remove(_))},O=()=>t()&&l(),p=()=>t()&&r();ye(O),R(p),ne(p),k(t,u=>{u?l():r()})}function Z(e){const t=i(!1);return k(e,o=>{o&&(t.value=o)},{immediate:!0}),o=>()=>t.value?o():null}const D=()=>{var e;const{scopeId:t}=((e=L())==null?void 0:e.vnode)||{};return t?{[t]:""}:null},[ke,Te]=X("overlay"),ge={show:Boolean,zIndex:b,duration:b,className:M,lockScroll:C,lazyRender:C,customStyle:Object};var xe=N({name:ke,props:ge,setup(e,{slots:t}){const o=i(),a=Z(()=>e.show||!e.lazyRender),n=l=>{e.lockScroll&&F(l,!0)},s=a(()=>{var l;const r=T(Ie(e.zIndex),e.customStyle);return H(e.duration)&&(r.animationDuration=`${e.duration}s`),Y(y("div",{ref:o,style:r,class:[Te(),e.className]},[(l=t.default)==null?void 0:l.call(t)]),[[j,e.show]])});return $("touchmove",n,{target:o}),()=>y(K,{name:"van-fade",appear:!0},{default:s})}});const ze=V(xe),Ae=T({},W,{round:Boolean,position:x("center"),closeIcon:x("cross"),closeable:Boolean,transition:String,iconPrefix:String,closeOnPopstate:Boolean,closeIconPosition:x("top-right"),safeAreaInsetTop:Boolean,safeAreaInsetBottom:Boolean}),[Ee,B]=X("popup");var _e=N({name:Ee,inheritAttrs:!1,props:Ae,emits:["open","close","opened","closed","keydown","update:show","clickOverlay","clickCloseIcon"],setup(e,{emit:t,attrs:o,slots:a}){let n,s;const l=i(),r=i(),O=Z(()=>e.show||!e.lazyRender),p=ae(()=>{const c={zIndex:l.value};if(H(e.duration)){const m=e.position==="center"?"animationDuration":"transitionDuration";c[m]=`${e.duration}s`}return c}),u=()=>{n||(n=!0,l.value=e.zIndex!==void 0?+e.zIndex:pe(),t("open"))},h=()=>{n&&Pe(e.beforeClose,{done(){n=!1,t("close"),t("update:show",!1)}})},w=c=>{t("clickOverlay",c),e.closeOnClickOverlay&&h()},d=()=>{if(e.overlay)return y(ze,A({show:e.show,class:e.overlayClass,zIndex:l.value,duration:e.duration,customStyle:e.overlayStyle,role:e.closeOnClickOverlay?"button":void 0,tabindex:e.closeOnClickOverlay?0:void 0},D(),{onClick:w}),{default:a["overlay-content"]})},v=c=>{t("clickCloseIcon",c),h()},I=()=>{if(e.closeable)return y(Oe,{role:"button",tabindex:0,name:e.closeIcon,class:[B("close-icon",e.closeIconPosition),Ce],classPrefix:e.iconPrefix,onClick:v},null)};let f;const q=()=>{f&&clearTimeout(f),f=setTimeout(()=>{t("opened")})},J=()=>t("closed"),Q=c=>t("keydown",c),ee=O(()=>{var c;const{round:m,position:S,safeAreaInsetTop:g,safeAreaInsetBottom:te}=e;return Y(y("div",A({ref:r,style:p.value,role:"dialog",tabindex:0,class:[B({round:m,[S]:S}),{"van-safe-area-top":g,"van-safe-area-bottom":te}],onKeydown:Q},o,D()),[(c=a.default)==null?void 0:c.call(a),I()]),[[j,e.show]])}),z=()=>{const{position:c,transition:m,transitionAppear:S}=e,g=c==="center"?"van-fade":`van-popup-slide-${c}`;return y(K,{name:m||g,appear:S,onAfterEnter:q,onAfterLeave:J},{default:ee})};return k(()=>e.show,c=>{c&&!n&&(u(),o.tabindex===0&&se(()=>{var m;(m=r.value)==null||m.focus()})),!c&&n&&(n=!1,t("close"))}),U({popupRef:r}),be(r,()=>e.show&&e.lockScroll),$("popstate",()=>{e.closeOnPopstate&&(h(),s=!1)}),le(()=>{e.show&&u()}),ce(()=>{s&&(t("update:show",!0),s=!1)}),R(()=>{e.show&&e.teleport&&(h(),s=!0)}),re(G,()=>e.show),()=>e.teleport?y(ie,{to:e.teleport},{default:()=>[d(),z()]}):y(ue,null,[d(),z()])}});const Ne=V(_e);function Ke(){const e=ve({show:!1}),t=n=>{e.show=n},o=n=>{T(e,n,{transitionAppear:!0}),t(!0)},a=()=>t(!1);return U({open:o,close:a,toggle:t}),{open:o,close:a,state:e,toggle:t}}function Ye(e){const t=de(e),o=document.createElement("div");return document.body.appendChild(o),{instance:t.mount(o),unmount(){t.unmount(),document.body.removeChild(o)}}}export{Ne as P,Re as a,Ke as b,Pe as c,Ye as m,Le as o,W as p,U as u};
