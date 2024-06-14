import{A as Ce,av as we,a2 as ze,Q as Ae,as as E,V as ne,S as N,C as Ie,aE as H,al as Re,a6 as ue,O as I,X as V,R as $e,b2 as Ee}from"../../index.js";import{k as R,f as K,e as T,o as le,j as de,b as L,w as J,h as ce,G as Te,s as P,z as oe}from"./vue-chunks-Chs-lyDX.js";import{F as fe,l as ve,k as ge,y as me,a as _e,u as Oe,o as Fe,v as Pe,w as Ve,x as X}from"./inputProps-DYO7gEw-.js";import{R as je}from"./index-CwZHIw9t.js";var Be={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"}}]},name:"search",theme:"outlined"};const Me=Be;function se(e){for(var u=1;u<arguments.length;u++){var a=arguments[u]!=null?Object(arguments[u]):{},o=Object.keys(a);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(a).filter(function(r){return Object.getOwnPropertyDescriptor(a,r).enumerable}))),o.forEach(function(r){De(e,r,a[r])})}return e}function De(e,u,a){return u in e?Object.defineProperty(e,u,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[u]=a,e}var ee=function(u,a){var o=se({},u,a.attrs);return R(Ce,se({},o,{icon:Me}),null)};ee.displayName="SearchOutlined";ee.inheritAttrs=!1;const Ke=ee,re=e=>e!=null&&(Array.isArray(e)?we(e).length:!0);function ke(e){return re(e.addonBefore)||re(e.addonAfter)}const He=["text","input"],Le=K({compatConfig:{MODE:3},name:"ClearableLabeledInput",inheritAttrs:!1,props:{prefixCls:String,inputType:ze.oneOf(Ae("text","input")),value:E(),defaultValue:E(),allowClear:{type:Boolean,default:void 0},element:E(),handleReset:Function,disabled:{type:Boolean,default:void 0},direction:{type:String},size:{type:String},suffix:E(),prefix:E(),addonBefore:E(),addonAfter:E(),readonly:{type:Boolean,default:void 0},focused:{type:Boolean,default:void 0},bordered:{type:Boolean,default:!0},triggerFocus:{type:Function},hidden:Boolean,status:String,hashId:String},setup(e,u){let{slots:a,attrs:o}=u;const r=fe.useInject(),b=s=>{const{value:d,disabled:n,readonly:f,handleReset:l,suffix:g=a.suffix}=e,m=!n&&!f&&d,y=`${s}-clear-icon`;return R(Ie,{onClick:l,onMousedown:w=>w.preventDefault(),class:N({[`${y}-hidden`]:!m,[`${y}-has-suffix`]:!!g},y),role:"button"},null)},v=(s,d)=>{const{value:n,allowClear:f,direction:l,bordered:g,hidden:m,status:y,addonAfter:w=a.addonAfter,addonBefore:_=a.addonBefore,hashId:C}=e,{status:z,hasFeedback:A}=r;if(!f)return ne(d,{value:n,disabled:e.disabled});const O=N(`${s}-affix-wrapper`,`${s}-affix-wrapper-textarea-with-clear-btn`,ve(`${s}-affix-wrapper`,ge(z,y),A),{[`${s}-affix-wrapper-rtl`]:l==="rtl",[`${s}-affix-wrapper-borderless`]:!g,[`${o.class}`]:!ke({addonAfter:w,addonBefore:_})&&o.class},C);return R("span",{class:O,style:o.style,hidden:m},[ne(d,{style:null,value:n,disabled:e.disabled}),b(s)])};return()=>{var s;const{prefixCls:d,inputType:n,element:f=(s=a.element)===null||s===void 0?void 0:s.call(a)}=e;return n===He[0]?v(d,f):null}}}),Ne=`
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
  pointer-events: none !important;
`,Ye=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","font-variant","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing","word-break","white-space"],U={};let S;function Ze(e){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const a=e.getAttribute("id")||e.getAttribute("data-reactid")||e.getAttribute("name");if(u&&U[a])return U[a];const o=window.getComputedStyle(e),r=o.getPropertyValue("box-sizing")||o.getPropertyValue("-moz-box-sizing")||o.getPropertyValue("-webkit-box-sizing"),b=parseFloat(o.getPropertyValue("padding-bottom"))+parseFloat(o.getPropertyValue("padding-top")),v=parseFloat(o.getPropertyValue("border-bottom-width"))+parseFloat(o.getPropertyValue("border-top-width")),d={sizingStyle:Ye.map(n=>`${n}:${o.getPropertyValue(n)}`).join(";"),paddingSize:b,borderSize:v,boxSizing:r};return u&&a&&(U[a]=d),d}function Ge(e){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null;S||(S=document.createElement("textarea"),S.setAttribute("tab-index","-1"),S.setAttribute("aria-hidden","true"),document.body.appendChild(S)),e.getAttribute("wrap")?S.setAttribute("wrap",e.getAttribute("wrap")):S.removeAttribute("wrap");const{paddingSize:r,borderSize:b,boxSizing:v,sizingStyle:s}=Ze(e,u);S.setAttribute("style",`${s};${Ne}`),S.value=e.value||e.placeholder||"";let d,n,f,l=S.scrollHeight;if(v==="border-box"?l+=b:v==="content-box"&&(l-=r),a!==null||o!==null){S.value=" ";const m=S.scrollHeight-r;a!==null&&(d=m*a,v==="border-box"&&(d=d+r+b),l=Math.max(d,l)),o!==null&&(n=m*o,v==="border-box"&&(n=n+r+b),f=l>n?"":"hidden",l=Math.min(n,l))}const g={height:`${l}px`,overflowY:f,resize:"none"};return d&&(g.minHeight=`${d}px`),n&&(g.maxHeight=`${n}px`),g}const W=0,Q=1,q=2,Xe=K({compatConfig:{MODE:3},name:"ResizableTextArea",inheritAttrs:!1,props:me(),setup(e,u){let{attrs:a,emit:o,expose:r}=u,b,v;const s=T(),d=T({}),n=T(q);le(()=>{H.cancel(b),H.cancel(v)});const f=()=>{try{if(document.activeElement===s.value){const h=s.value.selectionStart,B=s.value.selectionEnd,M=s.value.scrollTop;s.value.setSelectionRange(h,B),s.value.scrollTop=M}}catch{}},l=T(),g=T();de(()=>{const h=e.autoSize||e.autosize;h?(l.value=h.minRows,g.value=h.maxRows):(l.value=void 0,g.value=void 0)});const m=L(()=>!!(e.autoSize||e.autosize)),y=()=>{n.value=W};J([()=>e.value,l,g,m],()=>{m.value&&y()},{immediate:!0,flush:"post"});const w=T();J([n,s],()=>{if(s.value)if(n.value===W)n.value=Q;else if(n.value===Q){const h=Ge(s.value,!1,l.value,g.value);n.value=q,w.value=h}else f()},{immediate:!0,flush:"post"});const _=ce(),C=T(),z=()=>{H.cancel(C.value)},A=h=>{n.value===q&&(o("resize",h),m.value&&(z(),C.value=H(()=>{y()})))};le(()=>{z()}),r({resizeTextarea:()=>{y()},textArea:s,instance:_}),Re(e.autosize===void 0);const j=()=>{const{prefixCls:h,disabled:B}=e,M=ue(e,["prefixCls","onPressEnter","autoSize","autosize","defaultValue","allowClear","type","lazy","maxlength","valueModifiers"]),D=N(h,a.class,{[`${h}-disabled`]:B}),Y=m.value?w.value:null,F=[a.style,d.value,Y],$=I(I(I({},M),a),{style:F,class:D});return(n.value===W||n.value===Q)&&F.push({overflowX:"hidden",overflowY:"hidden"}),$.autofocus||delete $.autofocus,$.rows===0&&delete $.rows,R(je,{onResize:A,disabled:!m.value},{default:()=>[Te(R("textarea",V(V({},$),{},{ref:s}),null),[[_e]])]})};return()=>j()}}),Ue=Xe;function he(e,u){return[...e||""].slice(0,u).join("")}function ie(e,u,a,o){let r=a;return e?r=he(a,o):[...u||""].length<a.length&&[...a||""].length>o&&(r=u),r}const et=K({compatConfig:{MODE:3},name:"ATextarea",inheritAttrs:!1,props:me(),setup(e,u){let{attrs:a,expose:o,emit:r}=u;const b=Oe(),v=fe.useInject(),s=L(()=>ge(v.status,e.status)),d=P(e.value===void 0?e.defaultValue:e.value),n=P(),f=P(""),{prefixCls:l,size:g,direction:m}=$e("input",e),[y,w]=Fe(l),_=Ee(),C=L(()=>e.showCount===""||e.showCount||!1),z=L(()=>Number(e.maxlength)>0),A=P(!1),O=P(),j=P(0),h=t=>{A.value=!0,O.value=f.value,j.value=t.currentTarget.selectionStart,r("compositionstart",t)},B=t=>{var i;A.value=!1;let c=t.currentTarget.value;if(z.value){const p=j.value>=e.maxlength+1||j.value===((i=O.value)===null||i===void 0?void 0:i.length);c=ie(p,O.value,c,e.maxlength)}c!==f.value&&(F(c),X(t.currentTarget,t,Z,c)),r("compositionend",t)},M=ce();J(()=>e.value,()=>{var t;"value"in M.vnode.props,d.value=(t=e.value)!==null&&t!==void 0?t:""});const D=t=>{var i;Ve((i=n.value)===null||i===void 0?void 0:i.textArea,t)},Y=()=>{var t,i;(i=(t=n.value)===null||t===void 0?void 0:t.textArea)===null||i===void 0||i.blur()},F=(t,i)=>{d.value!==t&&(e.value===void 0?d.value=t:oe(()=>{var c,p,x;n.value.textArea.value!==f.value&&((x=(c=n.value)===null||c===void 0?void 0:(p=c.instance).update)===null||x===void 0||x.call(p))}),oe(()=>{i&&i()}))},$=t=>{t.keyCode===13&&r("pressEnter",t),r("keydown",t)},xe=t=>{const{onBlur:i}=e;i==null||i(t),b.onFieldBlur()},Z=t=>{r("update:value",t.target.value),r("change",t),r("input",t),b.onFieldChange()},be=t=>{X(n.value.textArea,t,Z),F("",()=>{D()})},te=t=>{const{composing:i}=t.target;let c=t.target.value;if(A.value=!!(t.isComposing||i),!(A.value&&e.lazy||d.value===c)){if(z.value){const p=t.target,x=p.selectionStart>=e.maxlength+1||p.selectionStart===c.length||!p.selectionStart;c=ie(x,f.value,c,e.maxlength)}X(t.currentTarget,t,Z,c),F(c)}},pe=()=>{var t,i;const{class:c}=a,{bordered:p=!0}=e,x=I(I(I({},ue(e,["allowClear"])),a),{class:[{[`${l.value}-borderless`]:!p,[`${c}`]:c&&!C.value,[`${l.value}-sm`]:g.value==="small",[`${l.value}-lg`]:g.value==="large"},ve(l.value,s.value),w.value],disabled:_.value,showCount:null,prefixCls:l.value,onInput:te,onChange:te,onBlur:xe,onKeydown:$,onCompositionstart:h,onCompositionend:B});return!((t=e.valueModifiers)===null||t===void 0)&&t.lazy&&delete x.onInput,R(Ue,V(V({},x),{},{id:(i=x==null?void 0:x.id)!==null&&i!==void 0?i:b.id.value,ref:n,maxlength:e.maxlength}),null)};return o({focus:D,blur:Y,resizableTextArea:n}),de(()=>{let t=Pe(d.value);!A.value&&z.value&&(e.value===null||e.value===void 0)&&(t=he(t,e.maxlength)),f.value=t}),()=>{var t;const{maxlength:i,bordered:c=!0,hidden:p}=e,{style:x,class:Se}=a,ye=I(I(I({},e),a),{prefixCls:l.value,inputType:"text",handleReset:be,direction:m.value,bordered:c,style:C.value?void 0:x,hashId:w.value,disabled:(t=e.disabled)!==null&&t!==void 0?t:_.value});let G=R(Le,V(V({},ye),{},{value:f.value,status:e.status}),{element:pe});if(C.value||v.hasFeedback){const ae=[...f.value].length;let k="";typeof C.value=="object"?k=C.value.formatter({value:f.value,count:ae,maxlength:i}):k=`${ae}${z.value?` / ${i}`:""}`,G=R("div",{hidden:p,class:N(`${l.value}-textarea`,{[`${l.value}-textarea-rtl`]:m.value==="rtl",[`${l.value}-textarea-show-count`]:C.value,[`${l.value}-textarea-in-form-item`]:v.isFormItemInput},`${l.value}-textarea-show-count`,Se,w.value),style:x,"data-count":typeof k!="object"?k:void 0},[G,v.hasFeedback&&R("span",{class:`${l.value}-textarea-suffix`},[v.feedbackIcon])])}return y(G)}}});export{Ke as S,et as _};
