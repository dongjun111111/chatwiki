import{W as g,a9 as U,Z as V,a2 as F,B as W,$ as Z,a4 as h,az as q}from"../../index-pGVpQMA0.js";import{i as G,I as H}from"./Input-BpoOlxnx.js";import{S as J}from"./SearchOutlined-C_Q6hh1x.js";import{i as K}from"./inputProps-DZRcc7xF.js";import{e as L,s as j,b as Q,j as C}from"./vue-chunks-XeeYQ2kA.js";var X=function(t,p){var o={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&p.indexOf(n)<0&&(o[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(t);s<n.length;s++)p.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(t,n[s])&&(o[n[s]]=t[n[s]]);return o};const se=L({compatConfig:{MODE:3},name:"AInputSearch",inheritAttrs:!1,props:g(g({},K()),{inputPrefixCls:String,enterButton:U.any,onSearch:{type:Function}}),setup(t,p){let{slots:o,attrs:n,expose:s,emit:r}=p;const u=j(),m=j(!1);s({focus:()=>{var e;(e=u.value)===null||e===void 0||e.focus()},blur:()=>{var e;(e=u.value)===null||e===void 0||e.blur()}});const E=e=>{r("update:value",e.target.value),e&&e.target&&e.type==="click"&&r("search",e.target.value,e),r("change",e)},O=e=>{var a;document.activeElement===((a=u.value)===null||a===void 0?void 0:a.input)&&e.preventDefault()},b=e=>{var a,i;r("search",(i=(a=u.value)===null||a===void 0?void 0:a.input)===null||i===void 0?void 0:i.stateValue,e)},w=e=>{m.value||t.loading||b(e)},I=e=>{m.value=!0,r("compositionstart",e)},N=e=>{m.value=!1,r("compositionend",e)},{prefixCls:c,getPrefixCls:$,direction:k,size:d}=V("input-search",t),z=Q(()=>$("input",t.inputPrefixCls));return()=>{var e,a,i,y;const{disabled:x,loading:T,addonAfter:P=(e=o.addonAfter)===null||e===void 0?void 0:e.call(o),suffix:M=(a=o.suffix)===null||a===void 0?void 0:a.call(o)}=t,R=X(t,["disabled","loading","addonAfter","suffix"]);let{enterButton:l=(y=(i=o.enterButton)===null||i===void 0?void 0:i.call(o))!==null&&y!==void 0?y:!1}=t;l=l||l==="";const _=typeof l=="boolean"?C(J,null,null):null,A=`${c.value}-button`,f=Array.isArray(l)?l[0]:l;let v;const B=f.type&&G(f.type)&&f.type.__ANT_BUTTON;if(B||f.tagName==="button")v=F(f,g({onMousedown:O,onClick:b,key:"enterButton"},B?{class:A,size:d.value}:{}),!1);else{const S=_&&!l;v=C(W,{class:A,type:l?"primary":void 0,size:d.value,disabled:x,key:"enterButton",onMousedown:O,onClick:b,loading:T,icon:S?_:null},{default:()=>[S?null:_||l]})}P&&(v=[v,P]);const D=Z(c.value,{[`${c.value}-rtl`]:k.value==="rtl",[`${c.value}-${d.value}`]:!!d.value,[`${c.value}-with-button`]:!!l},n.class);return C(H,h(h(h({ref:u},q(R,["onUpdate:value","onSearch","enterButton"])),n),{},{onPressEnter:w,onCompositionstart:I,onCompositionend:N,size:d.value,prefixCls:z.value,addonAfter:v,suffix:M,onChange:E,class:D,disabled:x}),o)}}});export{se as _};