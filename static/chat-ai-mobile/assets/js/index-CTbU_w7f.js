import{j as S,I as d,J as o,M as k,N as F,D as r,O as H,P as E,Q as R,k as b,C as O,r as I,S as z,n as A,e as j,u as T,F as w,U,V as q,W as J,b as G,o as K,E as P,B as Q}from"./vue-chunks-DTK9OVjH.js";import{I as y,J as D,K as W,L as X,M as N}from"../../index.js";import"./axios-B4uVmeYG.js";import"./qs-DrHefV6n.js";import"./dayjs-C4iS2aBk.js";import"./crypto-js-BJ7SvduI.js";const Y=e=>(H("data-v-ed8600a6"),e=e(),E(),e),Z={class:"navbar-body"},ee={class:"navbar-title van-ellipsis"},se=Y(()=>o("div",{class:"navbar-right"},null,-1)),te=S({__name:"index",props:{backgroundColor:{type:String,default:"#2475FC"},title:{type:String,default:""}},setup(e){const m=e;return(g,s)=>(r(),d("div",{class:"cu-navbar",style:F({background:m.backgroundColor})},[o("div",Z,[o("div",ee,k(e.title),1)]),se],4))}}),oe=y(te,[["__scopeId","data-v-ed8600a6"]]),ae={class:"message-input-box"},ne={class:"message-input-body"},le=["value"],ce=S({__name:"message-input",props:{value:{type:String,default:""}},emits:["update:value","send"],setup(e,{emit:m}){const g=m,s=e,n=a=>{const c=a.target;g("update:value",c.value)},l=()=>{s.value.trim()&&g("send",s.value)},t=a=>{s.value.trim()&&(a.preventDefault(),l())};return(a,c)=>{const i=O("svg-icon");return r(),d("div",ae,[o("div",ne,[o("div",{class:R(["message-input",{"is-set":s.value.length>0}])},[o("input",{class:"text-input",type:"text",value:e.value,placeholder:"在此输入您想了解的内容",onChange:n,"on:pressEnter":t},null,40,le),b(i,{name:"paper-airplane",class:"send-btn",onClick:l})],2)])])}}}),ie=y(ce,[["__scopeId","data-v-91b15b4d"]]),re=S({__name:"message-list",props:{messages:{type:Array,default:()=>[]}},emits:["clickMsgMeun","scroll","scrollStart","scrollEnd"],setup(e,{expose:m,emit:g}){const s=g,n=e,l=I(null),t={scrollTop:0,scrollHeight:0,clientHeight:0,scrollStartDiff:60,scrollEndDiff:60};let a=null,c=!1;function i(){n.messages.length!=0&&s("scrollStart",{msg:n.messages[0]})}function p(){n.messages.length!=0&&s("scrollEnd",{msg:n.messages[n.messages.length-1]})}function $(_){c||(a!==null&&(clearTimeout(a),a=null),a=window.setTimeout(()=>{t.scrollTop=_.target.scrollTop,t.scrollHeight=_.target.scrollHeight,t.clientHeight=_.target.clientHeight,s("scroll",{...t}),Math.abs(t.scrollTop)<=t.scrollStartDiff&&i(),Math.abs(t.scrollHeight-t.scrollTop-t.clientHeight)<=t.scrollEndDiff&&p()},50))}const M=()=>{l.value&&A(()=>{c=!0,l.value&&(l.value.scrollTop=l.value.scrollHeight+1,setTimeout(()=>{c=!1},50))})};function C(_,f){A(()=>{c=!0,f||(f="top");let u=l.value,h=document.querySelector("#msg-"+_);!u||!h||(f=="top"?u.scrollTop=h.offsetTop:u.scrollTop=h.offsetTop-u.clientHeight+h.clientHeight,setTimeout(()=>{c=!1},50))})}return m({scrollToBottom:M,scrollToMessage:C}),(_,f)=>(r(),d("div",{class:"message-list",ref_key:"scrollBoxRef",ref:l,onScroll:$},[z(_.$slots,"default",{},void 0)],544))}}),ue=y(re,[["__scopeId","data-v-7e037515"]]),de=e=>(H("data-v-3e647e1d"),e=e(),E(),e),me=["id"],ge={class:"message-item-left"},pe=["src"],_e={class:"message-item-body"},ve={class:"message-content"},fe=de(()=>o("span",{class:"triangle"},null,-1)),he={key:0,class:"text-message"},Te={class:"text-message"},Se={key:0,class:"question-list"},ye=["onClick"],Me=S({__name:"message-item",props:{msg:{type:Object,required:!0}},emits:["sendTextMessage"],setup(e,{emit:m}){const g=m,s=e,n=j(()=>s.msg.is_customer==1),l=j(()=>({"user-message-item":n.value===!0,"robot-message-item":n.value===!1,"welcome-message-item":s.msg.menu_json&&s.msg.menu_json.question})),t=a=>{g("sendTextMessage",a)};return(a,c)=>(r(),d("div",{class:R(["ignore-message-item",l.value]),id:"msg-"+e.msg.uid},[o("div",ge,[o("img",{class:"avatar",src:s.msg.avatar},null,8,pe)]),o("div",_e,[o("div",ve,[fe,s.msg.msg_type==1?(r(),d("div",he,k(T(D)(s.msg.content)),1)):s.msg.msg_type==2?(r(),d(w,{key:1},[o("div",Te,k(T(D)(s.msg.menu_json.content)),1),s.msg.menu_json&&s.msg.menu_json.question.length?(r(),d("div",Se,[(r(!0),d(w,null,U(s.msg.menu_json.question,i=>(r(),d("div",{class:"question-item",key:i,onClick:p=>t(i)},[o("span",null,k(i),1)],8,ye))),128))])):q("",!0)],64)):q("",!0)])])],10,me))}}),xe=y(Me,[["__scopeId","data-v-3e647e1d"]]),ke=e=>(H("data-v-7ea2225a"),e=e(),E(),e),be={class:"chat-page"},$e={class:"chat-page-header"},Ce={class:"chat-page-body"},Be={class:"messages-list-wrap"},Ie={class:"chat-page-footer"},we=ke(()=>o("div",{class:"technical-support-text"},"由chatwiki提供软件支持",-1)),He=S({__name:"index",setup(e){const m=X(),g=W(),{sendMessage:s,onGetChatMessage:n,$reset:l}=g,{messageList:t,sendLock:a,externalConfigH5:c}=J(g);let i=!0;const p=I(null),$=v=>{p.value&&p.value.scrollToMessage(v)},M=()=>{p.value&&i&&p.value.scrollToBottom()},C=async()=>{i=!1;let v=t.value[0].uid;await n()&&$(v)},_=()=>{},f=async()=>{i=!0,await n()&&M()},u=I(""),h=v=>{if(!v)return N("请输入消息内容");s({message:v})},V=async()=>{if(!u.value)return N("请输入消息内容");i=!0,h(u.value),u.value=""},L=()=>{p.value&&M()};return G(()=>{f(),m.on("updateAiMessage",L)}),K(()=>{l(),m.off("updateAiMessage",L)}),(v,B)=>(r(),d("div",be,[o("div",$e,[b(oe,{title:T(c).pageTitle,"background-color":T(c).style.navbarBackgroundColor},null,8,["title","background-color"])]),o("div",Ce,[o("div",Be,[b(ue,{ref_key:"messageListRef",ref:p,messages:T(t),onScrollStart:C,onScrollEnd:_},{default:P(()=>[(r(!0),d(w,null,U(T(t),x=>(r(),Q(xe,{key:x.uid,msg:x,onSendTextMessage:h},null,8,["msg"]))),128))]),_:1},8,["messages"])])]),o("div",Ie,[b(ie,{value:u.value,"onUpdate:value":B[0]||(B[0]=x=>u.value=x),onSend:V,loading:T(a)},null,8,["value","loading"]),we])]))}}),Ne=y(He,[["__scopeId","data-v-7ea2225a"]]);export{Ne as default};
