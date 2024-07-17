import{W as j,aj as O,a1 as b,a7 as B,a9 as E,ap as w,P as N,Q as X,S as A,aq as z,T as H,ar as D,as as L}from"../../index-3zhUo7yB.js";import{D as F}from"./dropdown-BzleFHKH.js";import{D as U}from"./DownOutlined-BGIGKQLl.js";import{e as I,j as i,l as V}from"./vue-chunks-BqR2sv6q.js";import{M as W}from"./index-BRrao2Ax.js";var q=function(r,t){var a={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&t.indexOf(e)<0&&(a[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(r);n<e.length;n++)t.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(r,e[n])&&(a[e[n]]=r[e[n]]);return a};const K=()=>({prefixCls:String,href:String,separator:B.any,dropdownProps:E(),overlay:B.any,onClick:w()}),$=I({compatConfig:{MODE:3},name:"ABreadcrumbItem",inheritAttrs:!1,__ANT_BREADCRUMB_ITEM:!0,props:K(),slots:Object,setup(r,t){let{slots:a,attrs:e,emit:n}=t;const{prefixCls:s}=j("breadcrumb",r),y=(u,m)=>{const p=O(a,r,"overlay");return p?i(F,b(b({},r.dropdownProps),{},{overlay:p,placement:"bottom"}),{default:()=>[i("span",{class:`${m}-overlay-link`},[u,i(U,null,null)])]}):u},h=u=>{n("click",u)};return()=>{var u;const m=(u=O(a,r,"separator"))!==null&&u!==void 0?u:"/",p=O(a,r),{class:l,style:c}=e,o=q(e,["class","style"]);let d;return r.href!==void 0?d=i("a",b({class:`${s.value}-link`,onClick:h},o),[p]):d=i("span",b({class:`${s.value}-link`,onClick:h},o),[p]),d=y(d,s.value),p!=null?i("li",{class:l,style:c},[d,m&&i("span",{class:`${s.value}-separator`},[m])]):null}}}),Q=r=>{const{componentCls:t,iconCls:a}=r;return{[t]:A(A({},H(r)),{color:r.breadcrumbBaseColor,fontSize:r.breadcrumbFontSize,[a]:{fontSize:r.breadcrumbIconFontSize},ol:{display:"flex",flexWrap:"wrap",margin:0,padding:0,listStyle:"none"},a:A({color:r.breadcrumbLinkColor,transition:`color ${r.motionDurationMid}`,padding:`0 ${r.paddingXXS}px`,borderRadius:r.borderRadiusSM,height:r.lineHeight*r.fontSize,display:"inline-block",marginInline:-r.marginXXS,"&:hover":{color:r.breadcrumbLinkColorHover,backgroundColor:r.colorBgTextHover}},z(r)),"li:last-child":{color:r.breadcrumbLastItemColor,[`& > ${t}-separator`]:{display:"none"}},[`${t}-separator`]:{marginInline:r.breadcrumbSeparatorMargin,color:r.breadcrumbSeparatorColor},[`${t}-link`]:{[`
          > ${a} + span,
          > ${a} + a
        `]:{marginInlineStart:r.marginXXS}},[`${t}-overlay-link`]:{borderRadius:r.borderRadiusSM,height:r.lineHeight*r.fontSize,display:"inline-block",padding:`0 ${r.paddingXXS}px`,marginInline:-r.marginXXS,[`> ${a}`]:{marginInlineStart:r.marginXXS,fontSize:r.fontSizeIcon},"&:hover":{color:r.breadcrumbLinkColorHover,backgroundColor:r.colorBgTextHover,a:{color:r.breadcrumbLinkColorHover}},a:{"&:hover":{backgroundColor:"transparent"}}},[`&${r.componentCls}-rtl`]:{direction:"rtl"}})}},G=N("Breadcrumb",r=>{const t=X(r,{breadcrumbBaseColor:r.colorTextDescription,breadcrumbFontSize:r.fontSize,breadcrumbIconFontSize:r.fontSize,breadcrumbLinkColor:r.colorTextDescription,breadcrumbLinkColorHover:r.colorText,breadcrumbLastItemColor:r.colorText,breadcrumbSeparatorMargin:r.marginXS,breadcrumbSeparatorColor:r.colorTextDescription});return[Q(t)]}),J=()=>({prefixCls:String,routes:{type:Array},params:B.any,separator:B.any,itemRender:{type:Function}});function Y(r,t){if(!r.breadcrumbName)return null;const a=Object.keys(t).join("|");return r.breadcrumbName.replace(new RegExp(`:(${a})`,"g"),(n,s)=>t[s]||n)}function M(r){const{route:t,params:a,routes:e,paths:n}=r,s=e.indexOf(t)===e.length-1,y=Y(t,a);return s?i("span",null,[y]):i("a",{href:`#/${n.join("/")}`},[y])}const x=I({compatConfig:{MODE:3},name:"ABreadcrumb",inheritAttrs:!1,props:J(),slots:Object,setup(r,t){let{slots:a,attrs:e}=t;const{prefixCls:n,direction:s}=j("breadcrumb",r),[y,h]=G(n),u=(l,c)=>(l=(l||"").replace(/^\//,""),Object.keys(c).forEach(o=>{l=l.replace(`:${o}`,c[o])}),l),m=(l,c,o)=>{const d=[...l],f=u(c||"",o);return f&&d.push(f),d},p=l=>{let{routes:c=[],params:o={},separator:d,itemRender:f=M}=l;const v=[];return c.map(g=>{const C=u(g.path,o);C&&v.push(C);const S=[...v];let _=null;g.children&&g.children.length&&(_=i(W,{items:g.children.map(R=>({key:R.path||R.breadcrumbName,label:f({route:R,params:o,routes:c,paths:m(S,R.path,o)})}))},null));const T={separator:d};return _&&(T.overlay=_),i($,b(b({},T),{},{key:C||g.breadcrumbName}),{default:()=>[f({route:g,params:o,routes:c,paths:S})]})})};return()=>{var l;let c;const{routes:o,params:d={}}=r,f=D(O(a,r)),v=(l=O(a,r,"separator"))!==null&&l!==void 0?l:"/",g=r.itemRender||a.itemRender||M;o&&o.length>0?c=p({routes:o,params:d,separator:v,itemRender:g}):f.length&&(c=f.map((S,_)=>(L(typeof S.type=="object"&&(S.type.__ANT_BREADCRUMB_ITEM||S.type.__ANT_BREADCRUMB_SEPARATOR)),V(S,{separator:v,key:_}))));const C={[n.value]:!0,[`${n.value}-rtl`]:s.value==="rtl",[`${e.class}`]:!!e.class,[h.value]:!0};return y(i("nav",b(b({},e),{},{class:C}),[i("ol",null,[c])]))}}});var Z=function(r,t){var a={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&t.indexOf(e)<0&&(a[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(r);n<e.length;n++)t.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(r,e[n])&&(a[e[n]]=r[e[n]]);return a};const k=()=>({prefixCls:String}),P=I({compatConfig:{MODE:3},name:"ABreadcrumbSeparator",__ANT_BREADCRUMB_SEPARATOR:!0,inheritAttrs:!1,props:k(),setup(r,t){let{slots:a,attrs:e}=t;const{prefixCls:n}=j("breadcrumb",r);return()=>{var s;const{separator:y,class:h}=e,u=Z(e,["separator","class"]),m=D((s=a.default)===null||s===void 0?void 0:s.call(a));return i("span",b({class:[`${n.value}-separator`,h]},u),[m.length>0?m:"/"])}}});x.Item=$;x.Separator=P;x.install=function(r){return r.component(x.name,x),r.component($.name,$),r.component(P.name,P),r};export{x as B,$ as _};