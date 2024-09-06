import{A as C,Y as u,a0 as S,a1 as z,al as M,a6 as $,a4 as A,a3 as R}from"../../index-C3D4HQO4.js";import{I as L}from"./Input-BVrvRKk_.js";import{j as o,e as D,s as O,h as N,b as q}from"./vue-chunks-DrvJJrR0.js";import{c as B}from"./inputProps-AgB5Odoi.js";var T={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"}}]},name:"eye",theme:"outlined"};const Q=T;function P(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?Object(arguments[t]):{},i=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable}))),i.forEach(function(r){V(e,r,n[r])})}return e}function V(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g=function(t,n){var i=P({},t,n.attrs);return o(C,P({},i,{icon:Q}),null)};g.displayName="EyeOutlined";g.inheritAttrs=!1;const F=g;var U={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"};const Y=U;function h(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?Object(arguments[t]):{},i=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable}))),i.forEach(function(r){k(e,r,n[r])})}return e}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y=function(t,n){var i=h({},t,n.attrs);return o(C,h({},i,{icon:Y}),null)};y.displayName="EyeInvisibleOutlined";y.inheritAttrs=!1;const G=y;var H=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]]);return n};const J={click:"onClick",hover:"onMouseover"},W=e=>e?o(F,null,null):o(G,null,null),ie=D({compatConfig:{MODE:3},name:"AInputPassword",inheritAttrs:!1,props:u(u({},B()),{prefixCls:String,inputPrefixCls:String,action:{type:String,default:"click"},visibilityToggle:{type:Boolean,default:!0},visible:{type:Boolean,default:void 0},"onUpdate:visible":Function,iconRender:Function}),setup(e,t){let{slots:n,attrs:i,expose:r,emit:E}=t;const l=O(!1),x=()=>{const{disabled:a}=e;a||(l.value=!l.value,E("update:visible",l.value))};N(()=>{e.visible!==void 0&&(l.value=!!e.visible)});const f=O();r({focus:()=>{var a;(a=f.value)===null||a===void 0||a.focus()},blur:()=>{var a;(a=f.value)===null||a===void 0||a.blur()}});const w=a=>{const{action:p,iconRender:v=n.iconRender||W}=e,b=J[p]||"",s=v(l.value),c={[b]:x,class:`${a}-icon`,key:"passwordIcon",onMousedown:m=>{m.preventDefault()},onMouseup:m=>{m.preventDefault()}};return A(R(s)?s:o("span",null,[s]),c)},{prefixCls:d,getPrefixCls:_}=S("input-password",e),I=q(()=>_("input",e.inputPrefixCls)),j=()=>{const{size:a,visibilityToggle:p}=e,v=H(e,["size","visibilityToggle"]),b=p&&w(d.value),s=z(d.value,i.class,{[`${d.value}-${a}`]:!!a}),c=u(u(u({},M(v,["suffix","iconRender","action"])),i),{type:l.value?"text":"password",class:s,prefixCls:I.value,suffix:b});return a&&(c.size=a),o(L,$({ref:f},c),n)};return()=>j()}});export{F as E,ie as _};
