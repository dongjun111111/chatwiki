import{a2 as u,X as I,S as B,V as E,b3 as me,ar as ge,a3 as M,aq as A,b4 as ve,O as g,ai as fe,K as be,N as ye,P as $e,aj as U,ay as we,a8 as J,R as Q,B as X,al as he,aa as W,a6 as Ce,U as Y}from"../../index.js";import{T as Se,r as xe,b as Oe,c as Pe}from"./index-DBNqHYGh.js";import{f as H,e as G,w as _e,b as O,k as b,F as Ne}from"./vue-chunks-Chs-lyDX.js";import{R as K}from"./RightOutlined-BSM_93j-.js";import{i as q}from"./move-DwQ0mPkQ.js";import{s as Ae,a as De,b as Re,c as Te,i as Z}from"./slide-CP07UJ8x.js";import{E as Ie,u as Be}from"./index-C9DKKAWk.js";const R={adjustX:1,adjustY:1},T=[0,0],Ee={topLeft:{points:["bl","tl"],overflow:R,offset:[0,-4],targetOffset:T},topCenter:{points:["bc","tc"],overflow:R,offset:[0,-4],targetOffset:T},topRight:{points:["br","tr"],overflow:R,offset:[0,-4],targetOffset:T},bottomLeft:{points:["tl","bl"],overflow:R,offset:[0,4],targetOffset:T},bottomCenter:{points:["tc","bc"],overflow:R,offset:[0,4],targetOffset:T},bottomRight:{points:["tr","br"],overflow:R,offset:[0,4],targetOffset:T}},Le=Ee;var je=function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(o[a[r]]=e[a[r]]);return o};const ze=H({compatConfig:{MODE:3},props:{minOverlayWidthMatchTrigger:{type:Boolean,default:void 0},arrow:{type:Boolean,default:!1},prefixCls:u.string.def("rc-dropdown"),transitionName:String,overlayClassName:u.string.def(""),openClassName:String,animation:u.any,align:u.object,overlayStyle:{type:Object,default:void 0},placement:u.string.def("bottomLeft"),overlay:u.any,trigger:u.oneOfType([u.string,u.arrayOf(u.string)]).def("hover"),alignPoint:{type:Boolean,default:void 0},showAction:u.array,hideAction:u.array,getPopupContainer:Function,visible:{type:Boolean,default:void 0},defaultVisible:{type:Boolean,default:!1},mouseEnterDelay:u.number.def(.15),mouseLeaveDelay:u.number.def(.1)},emits:["visibleChange","overlayClick"],setup(e,t){let{slots:o,emit:a,expose:r}=t;const s=G(!!e.visible);_e(()=>e.visible,l=>{l!==void 0&&(s.value=l)});const f=G();r({triggerRef:f});const n=l=>{e.visible===void 0&&(s.value=!1),a("overlayClick",l)},m=l=>{e.visible===void 0&&(s.value=l),a("visibleChange",l)},y=()=>{var l;const p=(l=o.overlay)===null||l===void 0?void 0:l.call(o),$={prefixCls:`${e.prefixCls}-menu`,onClick:n};return b(Ne,{key:me},[e.arrow&&b("div",{class:`${e.prefixCls}-arrow`},null),E(p,$,!1)])},h=O(()=>{const{minOverlayWidthMatchTrigger:l=!e.alignPoint}=e;return l}),C=()=>{var l;const p=(l=o.default)===null||l===void 0?void 0:l.call(o);return s.value&&p?E(p[0],{class:e.openClassName||`${e.prefixCls}-open`},!1):p},c=O(()=>!e.hideAction&&e.trigger.indexOf("contextmenu")!==-1?["click"]:e.hideAction);return()=>{const{prefixCls:l,arrow:p,showAction:$,overlayStyle:i,trigger:d,placement:w,align:P,getPopupContainer:v,transitionName:S,animation:x,overlayClassName:_}=e,N=je(e,["prefixCls","arrow","showAction","overlayStyle","trigger","placement","align","getPopupContainer","transitionName","animation","overlayClassName"]);return b(Se,I(I({},N),{},{prefixCls:l,ref:f,popupClassName:B(_,{[`${l}-show-arrow`]:p}),popupStyle:i,builtinPlacements:Le,action:d,showAction:$,hideAction:c.value||[],popupPlacement:w,popupAlign:P,popupTransitionName:S,popupAnimation:x,popupVisible:s.value,stretch:h.value?"minWidth":"",onPopupVisibleChange:m,getPopupContainer:v}),{popup:y,default:C})}}}),ee=()=>({arrow:ge([Boolean,Object]),trigger:{type:[Array,String]},menu:M(),overlay:u.any,visible:A(),open:A(),disabled:A(),danger:A(),autofocus:A(),align:M(),getPopupContainer:Function,prefixCls:String,transitionName:String,placement:String,overlayClassName:String,overlayStyle:M(),forceRender:A(),mouseEnterDelay:Number,mouseLeaveDelay:Number,openClassName:String,minOverlayWidthMatchTrigger:A(),destroyPopupOnHide:A(),onVisibleChange:{type:Function},"onUpdate:visible":{type:Function},onOpenChange:{type:Function},"onUpdate:open":{type:Function}}),V=ve(),Me=()=>g(g({},ee()),{type:V.type,size:String,htmlType:V.htmlType,href:String,disabled:A(),prefixCls:String,icon:u.any,title:String,loading:V.loading,onClick:fe()}),Ve=e=>{const{componentCls:t,antCls:o,paddingXS:a,opacityLoading:r}=e;return{[`${t}-button`]:{whiteSpace:"nowrap",[`&${o}-btn-group > ${o}-btn`]:{[`&-loading, &-loading + ${o}-btn`]:{cursor:"default",pointerEvents:"none",opacity:r},[`&:last-child:not(:first-child):not(${o}-btn-icon-only)`]:{paddingInline:a}}}}},Xe=e=>{const{componentCls:t,menuCls:o,colorError:a,colorTextLightSolid:r}=e,s=`${o}-item`;return{[`${t}, ${t}-menu-submenu`]:{[`${o} ${s}`]:{[`&${s}-danger:not(${s}-disabled)`]:{color:a,"&:hover":{color:r,backgroundColor:a}}}}}},He=e=>{const{componentCls:t,menuCls:o,zIndexPopup:a,dropdownArrowDistance:r,dropdownArrowOffset:s,sizePopupArrow:f,antCls:n,iconCls:m,motionDurationMid:y,dropdownPaddingVertical:h,fontSize:C,dropdownEdgeChildPadding:c,colorTextDisabled:l,fontSizeIcon:p,controlPaddingHorizontal:$,colorBgElevated:i,boxShadowPopoverArrow:d}=e;return[{[t]:g(g({},$e(e)),{position:"absolute",top:-9999,left:{_skip_check_:!0,value:-9999},zIndex:a,display:"block","&::before":{position:"absolute",insetBlock:-r+f/2,zIndex:-9999,opacity:1e-4,content:'""'},[`${t}-wrap`]:{position:"relative",[`${n}-btn > ${m}-down`]:{fontSize:p},[`${m}-down::before`]:{transition:`transform ${y}`}},[`${t}-wrap-open`]:{[`${m}-down::before`]:{transform:"rotate(180deg)"}},"\n        &-hidden,\n        &-menu-hidden,\n        &-menu-submenu-hidden\n      ":{display:"none"},[`
        &-show-arrow${t}-placement-topLeft,
        &-show-arrow${t}-placement-top,
        &-show-arrow${t}-placement-topRight
      `]:{paddingBottom:r},[`
        &-show-arrow${t}-placement-bottomLeft,
        &-show-arrow${t}-placement-bottom,
        &-show-arrow${t}-placement-bottomRight
      `]:{paddingTop:r},[`${t}-arrow`]:g({position:"absolute",zIndex:1,display:"block"},xe(f,e.borderRadiusXS,e.borderRadiusOuter,i,d)),[`
        &-placement-top > ${t}-arrow,
        &-placement-topLeft > ${t}-arrow,
        &-placement-topRight > ${t}-arrow
      `]:{bottom:r,transform:"translateY(100%) rotate(180deg)"},[`&-placement-top > ${t}-arrow`]:{left:{_skip_check_:!0,value:"50%"},transform:"translateX(-50%) translateY(100%) rotate(180deg)"},[`&-placement-topLeft > ${t}-arrow`]:{left:{_skip_check_:!0,value:s}},[`&-placement-topRight > ${t}-arrow`]:{right:{_skip_check_:!0,value:s}},[`
          &-placement-bottom > ${t}-arrow,
          &-placement-bottomLeft > ${t}-arrow,
          &-placement-bottomRight > ${t}-arrow
        `]:{top:r,transform:"translateY(-100%)"},[`&-placement-bottom > ${t}-arrow`]:{left:{_skip_check_:!0,value:"50%"},transform:"translateY(-100%) translateX(-50%)"},[`&-placement-bottomLeft > ${t}-arrow`]:{left:{_skip_check_:!0,value:s}},[`&-placement-bottomRight > ${t}-arrow`]:{right:{_skip_check_:!0,value:s}},[`&${n}-slide-down-enter${n}-slide-down-enter-active${t}-placement-bottomLeft,
          &${n}-slide-down-appear${n}-slide-down-appear-active${t}-placement-bottomLeft,
          &${n}-slide-down-enter${n}-slide-down-enter-active${t}-placement-bottom,
          &${n}-slide-down-appear${n}-slide-down-appear-active${t}-placement-bottom,
          &${n}-slide-down-enter${n}-slide-down-enter-active${t}-placement-bottomRight,
          &${n}-slide-down-appear${n}-slide-down-appear-active${t}-placement-bottomRight`]:{animationName:Ae},[`&${n}-slide-up-enter${n}-slide-up-enter-active${t}-placement-topLeft,
          &${n}-slide-up-appear${n}-slide-up-appear-active${t}-placement-topLeft,
          &${n}-slide-up-enter${n}-slide-up-enter-active${t}-placement-top,
          &${n}-slide-up-appear${n}-slide-up-appear-active${t}-placement-top,
          &${n}-slide-up-enter${n}-slide-up-enter-active${t}-placement-topRight,
          &${n}-slide-up-appear${n}-slide-up-appear-active${t}-placement-topRight`]:{animationName:De},[`&${n}-slide-down-leave${n}-slide-down-leave-active${t}-placement-bottomLeft,
          &${n}-slide-down-leave${n}-slide-down-leave-active${t}-placement-bottom,
          &${n}-slide-down-leave${n}-slide-down-leave-active${t}-placement-bottomRight`]:{animationName:Re},[`&${n}-slide-up-leave${n}-slide-up-leave-active${t}-placement-topLeft,
          &${n}-slide-up-leave${n}-slide-up-leave-active${t}-placement-top,
          &${n}-slide-up-leave${n}-slide-up-leave-active${t}-placement-topRight`]:{animationName:Te}})},{[`${t} ${o}`]:{position:"relative",margin:0},[`${o}-submenu-popup`]:{position:"absolute",zIndex:a,background:"transparent",boxShadow:"none",transformOrigin:"0 0","ul,li":{listStyle:"none"},ul:{marginInline:"0.3em"}},[`${t}, ${t}-menu-submenu`]:{[o]:g(g({padding:c,listStyleType:"none",backgroundColor:i,backgroundClip:"padding-box",borderRadius:e.borderRadiusLG,outline:"none",boxShadow:e.boxShadowSecondary},U(e)),{[`${o}-item-group-title`]:{padding:`${h}px ${$}px`,color:e.colorTextDescription,transition:`all ${y}`},[`${o}-item`]:{position:"relative",display:"flex",alignItems:"center",borderRadius:e.borderRadiusSM},[`${o}-item-icon`]:{minWidth:C,marginInlineEnd:e.marginXS,fontSize:e.fontSizeSM},[`${o}-title-content`]:{flex:"auto","> a":{color:"inherit",transition:`all ${y}`,"&:hover":{color:"inherit"},"&::after":{position:"absolute",inset:0,content:'""'}}},[`${o}-item, ${o}-submenu-title`]:g(g({clear:"both",margin:0,padding:`${h}px ${$}px`,color:e.colorText,fontWeight:"normal",fontSize:C,lineHeight:e.lineHeight,cursor:"pointer",transition:`all ${y}`,"&:hover, &-active":{backgroundColor:e.controlItemBgHover}},U(e)),{"&-selected":{color:e.colorPrimary,backgroundColor:e.controlItemBgActive,"&:hover, &-active":{backgroundColor:e.controlItemBgActiveHover}},"&-disabled":{color:l,cursor:"not-allowed","&:hover":{color:l,backgroundColor:i,cursor:"not-allowed"},a:{pointerEvents:"none"}},"&-divider":{height:1,margin:`${e.marginXXS}px 0`,overflow:"hidden",lineHeight:0,backgroundColor:e.colorSplit},[`${t}-menu-submenu-expand-icon`]:{position:"absolute",insetInlineEnd:e.paddingXS,[`${t}-menu-submenu-arrow-icon`]:{marginInlineEnd:"0 !important",color:e.colorTextDescription,fontSize:p,fontStyle:"normal"}}}),[`${o}-item-group-list`]:{margin:`0 ${e.marginXS}px`,padding:0,listStyle:"none"},[`${o}-submenu-title`]:{paddingInlineEnd:$+e.fontSizeSM},[`${o}-submenu-vertical`]:{position:"relative"},[`${o}-submenu${o}-submenu-disabled ${t}-menu-submenu-title`]:{[`&, ${t}-menu-submenu-arrow-icon`]:{color:l,backgroundColor:i,cursor:"not-allowed"}},[`${o}-submenu-selected ${t}-menu-submenu-title`]:{color:e.colorPrimary}})}},[Z(e,"slide-up"),Z(e,"slide-down"),q(e,"move-up"),q(e,"move-down"),we(e,"zoom-big")]]},te=be("Dropdown",(e,t)=>{let{rootPrefixCls:o}=t;const{marginXXS:a,sizePopupArrow:r,controlHeight:s,fontSize:f,lineHeight:n,paddingXXS:m,componentCls:y,borderRadiusOuter:h,borderRadiusLG:C}=e,c=(s-f*n)/2,{dropdownArrowOffset:l}=Oe({sizePopupArrow:r,contentRadius:C,borderRadiusOuter:h}),p=ye(e,{menuCls:`${y}-menu`,rootPrefixCls:o,dropdownArrowDistance:r/2+a,dropdownArrowOffset:l,dropdownPaddingVertical:c,dropdownEdgeChildPadding:m});return[He(p),Ve(p),Xe(p)]},e=>({zIndexPopup:e.zIndexPopupBase+50}));var ke=function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(o[a[r]]=e[a[r]]);return o};const Fe=X.Group,Ue=H({compatConfig:{MODE:3},name:"ADropdownButton",inheritAttrs:!1,__ANT_BUTTON:!0,props:J(Me(),{trigger:"hover",placement:"bottomRight",type:"default"}),slots:Object,setup(e,t){let{slots:o,attrs:a,emit:r}=t;const s=c=>{r("update:visible",c),r("visibleChange",c),r("update:open",c),r("openChange",c)},{prefixCls:f,direction:n,getPopupContainer:m}=Q("dropdown",e),y=O(()=>`${f.value}-button`),[h,C]=te(f);return()=>{var c,l;const p=g(g({},e),a),{type:$="default",disabled:i,danger:d,loading:w,htmlType:P,class:v="",overlay:S=(c=o.overlay)===null||c===void 0?void 0:c.call(o),trigger:x,align:_,open:N,visible:D,onVisibleChange:L,placement:j=n.value==="rtl"?"bottomLeft":"bottomRight",href:z,title:ne,icon:ae=((l=o.icon)===null||l===void 0?void 0:l.call(o))||b(Ie,null,null),mouseEnterDelay:re,mouseLeaveDelay:ie,overlayClassName:le,overlayStyle:se,destroyPopupOnHide:de,onClick:pe,"onUpdate:open":Ye}=p,ce=ke(p,["type","disabled","danger","loading","htmlType","class","overlay","trigger","align","open","visible","onVisibleChange","placement","href","title","icon","mouseEnterDelay","mouseLeaveDelay","overlayClassName","overlayStyle","destroyPopupOnHide","onClick","onUpdate:open"]),ue={align:_,disabled:i,trigger:i?[]:x,placement:j,getPopupContainer:m==null?void 0:m.value,onOpenChange:s,mouseEnterDelay:re,mouseLeaveDelay:ie,open:N??D,overlayClassName:le,overlayStyle:se,destroyPopupOnHide:de},k=b(X,{danger:d,type:$,disabled:i,loading:w,onClick:pe,htmlType:P,href:z,title:ne},{default:o.default}),F=b(X,{danger:d,type:$,icon:ae},null);return h(b(Fe,I(I({},ce),{},{class:B(y.value,v,C.value)}),{default:()=>[o.leftButton?o.leftButton({button:k}):k,b(We,ue,{default:()=>[o.rightButton?o.rightButton({button:F}):F],overlay:()=>S})]}))}}}),oe=H({compatConfig:{MODE:3},name:"ADropdown",inheritAttrs:!1,props:J(ee(),{mouseEnterDelay:.15,mouseLeaveDelay:.1,placement:"bottomLeft",trigger:"hover"}),slots:Object,setup(e,t){let{slots:o,attrs:a,emit:r}=t;const{prefixCls:s,rootPrefixCls:f,direction:n,getPopupContainer:m}=Q("dropdown",e),[y,h]=te(s),C=O(()=>{const{placement:i="",transitionName:d}=e;return d!==void 0?d:i.includes("top")?`${f.value}-slide-down`:`${f.value}-slide-up`});Be({prefixCls:O(()=>`${s.value}-menu`),expandIcon:O(()=>b("span",{class:`${s.value}-menu-submenu-arrow`},[b(K,{class:`${s.value}-menu-submenu-arrow-icon`},null)])),mode:O(()=>"vertical"),selectable:O(()=>!1),onClick:()=>{},validator:i=>{he()}});const c=()=>{var i,d,w;const P=e.overlay||((i=o.overlay)===null||i===void 0?void 0:i.call(o)),v=Array.isArray(P)?P[0]:P;if(!v)return null;const S=v.props||{};W(!S.mode||S.mode==="vertical","Dropdown",`mode="${S.mode}" is not supported for Dropdown's Menu.`);const{selectable:x=!1,expandIcon:_=(w=(d=v.children)===null||d===void 0?void 0:d.expandIcon)===null||w===void 0?void 0:w.call(d)}=S,N=typeof _<"u"&&Y(_)?_:b("span",{class:`${s.value}-menu-submenu-arrow`},[b(K,{class:`${s.value}-menu-submenu-arrow-icon`},null)]);return Y(v)?E(v,{mode:"vertical",selectable:x,expandIcon:()=>N}):v},l=O(()=>{const i=e.placement;if(!i)return n.value==="rtl"?"bottomRight":"bottomLeft";if(i.includes("Center")){const d=i.slice(0,i.indexOf("Center"));return W(!i.includes("Center"),"Dropdown",`You are using '${i}' placement in Dropdown, which is deprecated. Try to use '${d}' instead.`),d}return i}),p=O(()=>typeof e.visible=="boolean"?e.visible:e.open),$=i=>{r("update:visible",i),r("visibleChange",i),r("update:open",i),r("openChange",i)};return()=>{var i,d;const{arrow:w,trigger:P,disabled:v,overlayClassName:S}=e,x=(i=o.default)===null||i===void 0?void 0:i.call(o)[0],_=E(x,g({class:B((d=x==null?void 0:x.props)===null||d===void 0?void 0:d.class,{[`${s.value}-rtl`]:n.value==="rtl"},`${s.value}-trigger`)},v?{disabled:v}:{})),N=B(S,h.value,{[`${s.value}-rtl`]:n.value==="rtl"}),D=v?[]:P;let L;D&&D.includes("contextmenu")&&(L=!0);const j=Pe({arrowPointAtCenter:typeof w=="object"&&w.pointAtCenter,autoAdjustOverflow:!0}),z=Ce(g(g(g({},e),a),{visible:p.value,builtinPlacements:j,overlayClassName:N,arrow:!!w,alignPoint:L,prefixCls:s.value,getPopupContainer:m==null?void 0:m.value,transitionName:C.value,trigger:D,onVisibleChange:$,placement:l.value}),["overlay","onUpdate:visible"]);return y(b(ze,z,{default:()=>[_],overlay:c}))}}});oe.Button=Ue;const We=oe;export{We as D,Ue as a};