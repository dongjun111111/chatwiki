import{j as S,I as c,J as o,M as H,N as F,D as n,O as j,P as q,Q as U,K as O,k as I,C as z,r as w,S as J,n as A,e as D,F as y,u as f,U as L,V as C,W as G,b as P,o as Q,B as N,E as W}from"./vue-chunks-DTK9OVjH.js";import{I as M,J as R,K as X,L as Y,M as K}from"../../index.js";import"./axios-B4uVmeYG.js";import"./qs-DrHefV6n.js";import"./dayjs-C4iS2aBk.js";import"./crypto-js-BJ7SvduI.js";const Z=s=>(j("data-v-d1f32249"),s=s(),q(),s),ee={class:"navbar-body"},se={class:"navbar-title van-ellipsis"},te=Z(()=>o("div",{class:"navbar-right"},null,-1)),oe=S({__name:"index",props:{backgroundColor:{type:String,default:"#2475FC"},title:{type:String,default:""}},setup(s){const g=s;return(_,e)=>(n(),c("div",{class:"cu-navbar",style:F({background:g.backgroundColor})},[o("div",ee,[o("div",se,H(s.title),1)]),te],4))}}),ne=M(oe,[["__scopeId","data-v-d1f32249"]]),ae={class:"message-input-box"},le={class:"message-input-body"},ce=["value"],ie=S({__name:"message-input",props:{value:{type:String,default:""}},emits:["update:value","send"],setup(s,{emit:g}){const _=g,e=s,i=l=>{const u=l.target;_("update:value",u.value)},r=()=>{e.value.trim()&&_("send",e.value)},t=l=>{e.value.trim()&&(l.preventDefault(),r())};return(l,u)=>{const a=z("svg-icon");return n(),c("div",ae,[o("div",le,[o("div",{class:U(["message-input",{"is-set":e.value.length>0}])},[o("input",{class:"text-input",type:"text",value:s.value,placeholder:"在此输入您想了解的内容",onChange:i,onKeyup:O(t,["enter"])},null,40,ce),I(a,{name:"paper-airplane",class:"send-btn",onClick:r})],2)])])}}}),re=M(ie,[["__scopeId","data-v-62b46a50"]]),ue=S({__name:"message-list",props:{messages:{type:Array,default:()=>[]}},emits:["clickMsgMeun","scroll","scrollStart","scrollEnd"],setup(s,{expose:g,emit:_}){const e=_,i=s,r=w(null),t={scrollTop:0,scrollHeight:0,clientHeight:0,scrollStartDiff:60,scrollEndDiff:60};let l=null,u=!1;function a(){i.messages.length!=0&&e("scrollStart",{msg:i.messages[0]})}function d(){i.messages.length!=0&&e("scrollEnd",{msg:i.messages[i.messages.length-1]})}function k(p){u||(l!==null&&(clearTimeout(l),l=null),l=window.setTimeout(()=>{t.scrollTop=p.target.scrollTop,t.scrollHeight=p.target.scrollHeight,t.clientHeight=p.target.clientHeight,e("scroll",{...t}),Math.abs(t.scrollTop)<=t.scrollStartDiff&&a(),Math.abs(t.scrollHeight-t.scrollTop-t.clientHeight)<=t.scrollEndDiff&&d()},50))}const b=()=>{r.value&&A(()=>{u=!0,r.value&&(r.value.scrollTop=r.value.scrollHeight+1,setTimeout(()=>{u=!1},50))})};function $(p,h){A(()=>{u=!0,h||(h="top");let m=r.value,T=document.querySelector("#msg-"+p);!m||!T||(h=="top"?m.scrollTop=T.offsetTop:m.scrollTop=T.offsetTop-m.clientHeight+T.clientHeight,setTimeout(()=>{u=!1},50))})}return g({scrollToBottom:b,scrollToMessage:$}),(p,h)=>(n(),c("div",{class:"message-list",ref_key:"scrollBoxRef",ref:r,onScroll:k},[J(p.$slots,"default",{},void 0)],544))}}),de=M(ue,[["__scopeId","data-v-87e9df55"]]),me=s=>(j("data-v-fb3020c2"),s=s(),q(),s),ge=["id"],_e={class:"message-item-left"},pe=["src"],ve={class:"message-item-body"},fe={class:"message-content"},he=me(()=>o("span",{class:"triangle"},null,-1)),Te=["innerHTML"],ye={key:0,class:"question-list"},Se=["onClick"],Me=["innerHTML"],ke={key:0,class:"question-list"},be=["onClick"],xe=S({__name:"message-item",props:{msg:{type:Object,required:!0}},emits:["sendTextMessage"],setup(s,{emit:g}){const _=g,e=s,i=D(()=>e.msg.is_customer==1),r=D(()=>({"user-message-item":i.value===!0,"robot-message-item":i.value===!1,"welcome-message-item":e.msg.menu_json&&e.msg.menu_json.question})),t=l=>{_("sendTextMessage",l)};return(l,u)=>(n(),c("div",{class:U(["ignore-message-item",r.value]),id:"msg-"+s.msg.uid},[o("div",_e,[o("img",{class:"avatar",src:e.msg.avatar},null,8,pe)]),o("div",ve,[o("div",fe,[he,e.msg.msg_type==1?(n(),c(y,{key:0},[o("div",{class:"text-message",innerHTML:f(R)(e.msg.content)},null,8,Te),e.msg.menu_json&&e.msg.menu_json.question.length?(n(),c("div",ye,[(n(!0),c(y,null,L(e.msg.menu_json.question,(a,d)=>(n(),c("div",{class:"question-item",onClick:k=>t(a),key:d},H(a),9,Se))),128))])):C("",!0)],64)):e.msg.msg_type==2?(n(),c(y,{key:1},[o("div",{class:"text-message",innerHTML:f(R)(e.msg.menu_json.content)},null,8,Me),e.msg.menu_json&&e.msg.menu_json.question.length?(n(),c("div",ke,[(n(!0),c(y,null,L(e.msg.menu_json.question,a=>(n(),c("div",{class:"question-item",key:a,onClick:d=>t(a)},[o("span",null,H(a),1)],8,be))),128))])):C("",!0)],64)):C("",!0)])])],10,ge))}}),Ce=M(xe,[["__scopeId","data-v-fb3020c2"]]),$e=s=>(j("data-v-5254ed7a"),s=s(),q(),s),Be={class:"chat-page"},He={class:"chat-page-header"},Ie={class:"chat-page-body"},we={class:"messages-list-wrap"},Le={class:"chat-page-footer"},je=$e(()=>o("div",{class:"technical-support-text"},"由chatwiki提供软件支持",-1)),qe=S({__name:"index",setup(s){const g=Y(),_=X(),{sendMessage:e,onGetChatMessage:i,$reset:r}=_,{messageList:t,sendLock:l,externalConfigH5:u}=G(_);let a=!0;const d=w(null),k=v=>{d.value&&d.value.scrollToMessage(v)},b=()=>{d.value&&a&&d.value.scrollToBottom()},$=async()=>{a=!1;let v=t.value[0].uid;await i()&&k(v)},p=()=>{},h=async()=>{a=!0,await i()&&b()},m=w(""),T=v=>{if(!v)return K("请输入消息内容");e({message:v})},V=async()=>{if(!m.value)return K("请输入消息内容");a=!0,T(m.value),m.value=""},E=()=>{d.value&&b()};return P(()=>{h(),g.on("updateAiMessage",E)}),Q(()=>{r(),g.off("updateAiMessage",E)}),(v,B)=>(n(),c("div",Be,[o("div",He,[f(u).navbarShow==1?(n(),N(ne,{key:0,title:f(u).pageTitle,"background-color":f(u).pageStyle.navbarBackgroundColor},null,8,["title","background-color"])):C("",!0)]),o("div",Ie,[o("div",we,[I(de,{ref_key:"messageListRef",ref:d,messages:f(t),onScrollStart:$,onScrollEnd:p},{default:W(()=>[(n(!0),c(y,null,L(f(t),x=>(n(),N(Ce,{key:x.uid,msg:x,onSendTextMessage:T},null,8,["msg"]))),128))]),_:1},8,["messages"])])]),o("div",Le,[I(re,{value:m.value,"onUpdate:value":B[0]||(B[0]=x=>m.value=x),onSend:V,loading:f(l)},null,8,["value","loading"]),je])]))}}),Ue=M(qe,[["__scopeId","data-v-5254ed7a"]]);export{Ue as default};
