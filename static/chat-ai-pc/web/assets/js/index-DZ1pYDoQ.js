import{u as N,_ as w,e as D,a as Q,s as R,D as X}from"./index.js";import{e as $,J as O,f as A,B as V,C as g,H as m,h as M,I as r,u as y,K as H,L as I,M as Y,r as b,w as Z,b as z,N as j,O as F,P as U,Q as ee,n as K,F as k,S as E,o as se,D as te,U as oe,V as ne,W as ae,A as le}from"./vue-chunks-BpMrDWVc.js";import"./axios-B4uVmeYG.js";import"./qs-DrHefV6n.js";import"./dayjs-C4iS2aBk.js";import"./crypto-js-BJ7SvduI.js";function J(i,u){if(u)try{u=JSON.parse(JSON.stringify(u))}catch(n){console.error("Failed to stringify data:",n);return}if(window.parent&&typeof window.parent.postMessage=="function")try{window.parent.postMessage({action:i,data:u},"*")}catch(n){console.error("Failed to post message:",n)}else console.warn("window.parent is not available or postMessage is not supported.")}function ie(i){J("init",i)}function ce(){J("closeChat")}const re={class:"chat-header-body"},ue=["src"],de={class:"robot-info"},ge={class:"robot-name"},me={class:"robot-intro"},pe=$({__name:"chat-header",setup(i){const u=N(),{externalConfigPC:n}=O(u),{headBackgroundColor:s}=n.value.pageStyle,a=A(()=>{const[t,d,l,c]=s.split(",");return t==="color"?l:`${t}(${d}, ${l}, ${c})`}),e=()=>{ce()};return(t,d)=>{const l=V("svg-icon");return g(),m("div",{class:"chat-header",style:Y({background:a.value})},[M(l,{class:"close-btn",name:"close",onClick:e}),r("div",re,[y(n).headImage?(g(),m("img",{key:0,class:"avatar",src:y(n).headImage,alt:""},null,8,ue)):H("",!0),r("div",de,[r("div",ge,I(y(n).headTitle),1),r("div",me,I(y(n).headSubTitle),1)])])],4)}}}),ve=w(pe,[["__scopeId","data-v-4b52de1f"]]),_e=["value","onKeydown"],L=22,fe=3,he=$({__name:"auto-size-textarea",props:{value:{type:String,default:""}},emits:["update:value","change","focus","blur","enter","shiftEnter"],setup(i,{emit:u}){const n=i,s=u,a=L*fe,e=b(null);function t(){s("focus")}function d(){s("blur")}function l(o){o.shiftKey||s("enter")}function c(o){var p=o.value,h=o.selectionStart;return h===p.length}function v(){if(e.value){const o=e.value.selectionStart,p=e.value.value.slice(0,o)+`
`+e.value.value.slice(o);e.value.value=p,c(e.value)&&(e.value.scrollTop=e.value.scrollHeight),e.value.setSelectionRange(o+1,o+1),S()}}function x(o){o.preventDefault(),v(),s("shiftEnter")}function T(o){const p=o.target;s("update:value",p.value),s("change",p.value),S()}function S(){e.value&&(e.value.style.height="auto",e.value.scrollHeight>a?e.value.style.height=`${a}px`:e.value.value.length==0?e.value.style.height=`${L}px`:e.value.style.height=`${e.value.scrollHeight}px`)}return Z(()=>n.value,()=>{!n.value&&e.value&&(e.value.style.height=`${L}px`)}),z(()=>{e.value&&S()}),(o,p)=>(g(),m("textarea",{class:"auto-size-textarea",rows:"1",ref_key:"textareaRef",ref:e,value:n.value,onInput:T,onFocus:t,onBlur:d,onKeydown:[j(F(l,["prevent","exact"]),["enter"]),j(F(x,["shift","prevent"]),["enter"])],placeholder:"在此输入，Shift+Enter换行"},null,40,_e))}}),ye=w(he,[["__scopeId","data-v-663f5138"]]),Te={class:"message-input-box"},Se={class:"message-input-body"},xe=$({__name:"message-input",props:{value:{type:String,default:""}},emits:["update:value","send"],setup(i,{emit:u}){const n=u,s=i,a=b(!1),e=d=>{n("update:value",d)},t=()=>{s.value.trim()&&n("send",s.value)};return(d,l)=>{const c=V("svg-icon");return g(),m("div",Te,[r("div",Se,[r("div",{class:U(["message-input",{"is-focus":a.value}])},[M(ye,{value:i.value,class:"text-input",onChange:e,onFocus:l[0]||(l[0]=v=>a.value=!0),onBlur:l[1]||(l[1]=v=>a.value=!1),onEnter:t},null,8,["value"]),M(c,{name:"paper-airplane",class:"send-btn",onClick:t})],2)])])}}}),Me=w(xe,[["__scopeId","data-v-8f75943c"]]),we=$({__name:"message-list",props:{messages:{type:Array,default:()=>[]}},emits:["clickMsgMeun","scroll","scrollStart","scrollEnd"],setup(i,{expose:u,emit:n}){const s=n,a=i,e=b(null),t={scrollTop:0,scrollHeight:0,clientHeight:0,scrollStartDiff:60,scrollEndDiff:60};let d=null,l=!1;function c(){a.messages.length!=0&&s("scrollStart",{msg:a.messages[0]})}function v(){a.messages.length!=0&&s("scrollEnd",{msg:a.messages[a.messages.length-1]})}function x(o){l||(d!==null&&(clearTimeout(d),d=null),d=window.setTimeout(()=>{t.scrollTop=o.target.scrollTop,t.scrollHeight=o.target.scrollHeight,t.clientHeight=o.target.clientHeight,s("scroll",{...t}),Math.abs(t.scrollTop)<=t.scrollStartDiff&&c(),Math.abs(t.scrollHeight-t.scrollTop-t.clientHeight)<=t.scrollEndDiff&&v()},50))}const T=()=>{e.value&&K(()=>{l=!0,e.value&&(e.value.scrollTop=e.value.scrollHeight+1,setTimeout(()=>{l=!1},50))})};function S(o,p){K(()=>{l=!0,p||(p="top");let h=e.value,f=document.querySelector("#msg-"+o);!h||!f||(p=="top"?h.scrollTop=f.offsetTop:h.scrollTop=f.offsetTop-h.clientHeight+f.clientHeight,setTimeout(()=>{l=!1},50))})}return u({scrollToBottom:T,scrollToMessage:S}),(o,p)=>(g(),m("div",{class:"message-list",ref_key:"scrollBoxRef",ref:e,onScroll:x},[ee(o.$slots,"default",{},void 0)],544))}}),$e=w(we,[["__scopeId","data-v-87e9df55"]]),ke=["id"],be={class:"message-item-left"},Ce=["src"],He={class:"message-item-body"},Ie={class:"message-content"},Be=["innerHTML"],Le={key:0,class:"question-list"},Ae=["onClick"],Ee=["innerHTML"],qe={key:0,class:"question-list"},De=["onClick"],Re=$({__name:"message-item",props:{msg:{type:Object,required:!0}},emits:["sendTextMessage"],setup(i,{emit:u}){const n=u,s=i,a=A(()=>s.msg.is_customer==1),e=A(()=>({"user-message-item":a.value===!0,"robot-message-item":a.value===!1,"welcome-message-item":s.msg.menu_json&&s.msg.menu_json.question})),t=d=>{n("sendTextMessage",d)};return(d,l)=>(g(),m("div",{class:U(["message-item",e.value]),id:"msg-"+i.msg.uid},[r("div",be,[r("img",{class:"avatar",src:s.msg.avatar},null,8,Ce)]),r("div",He,[r("div",Ie,[s.msg.msg_type==1?(g(),m(k,{key:0},[r("div",{class:"text-message",innerHTML:y(D)(s.msg.content)},null,8,Be),s.msg.menu_json&&s.msg.menu_json.question.length?(g(),m("div",Le,[(g(!0),m(k,null,E(s.msg.menu_json.question,(c,v)=>(g(),m("div",{class:"question-item",onClick:x=>t(c),key:v},I(c),9,Ae))),128))])):H("",!0)],64)):s.msg.msg_type==2?(g(),m(k,{key:1},[r("div",{class:"text-message",innerHTML:y(D)(s.msg.menu_json.content)},null,8,Ee),s.msg.menu_json&&s.msg.menu_json.question.length?(g(),m("div",qe,[(g(!0),m(k,null,E(s.msg.menu_json.question,c=>(g(),m("div",{class:"question-item",key:c,onClick:v=>t(c)},[r("span",null,I(c),1)],8,De))),128))])):H("",!0)],64)):H("",!0)])])],10,ke))}}),je=w(Re,[["__scopeId","data-v-77765388"]]),Fe=i=>(ne("data-v-7451b1b9"),i=i(),ae(),i),Ke={class:"chat-page"},Ne={class:"chat-page-header"},Oe={class:"chat-page-body"},Ve={class:"messages-list-wrap"},ze={class:"chat-page-footer"},Ue=Fe(()=>r("div",{class:"technical-support-text"},"由chatwiki提供软件支持",-1)),Je=$({__name:"index",setup(i){const u=Q(),n=N(),{sendMessage:s,onGetChatMessage:a,$reset:e}=n,{messageList:t,sendLock:d,robot:l}=O(n);let c=!0;const v=b(null),x=_=>{v.value&&v.value.scrollToMessage(_)},T=()=>{v.value&&c&&v.value.scrollToBottom()},S=async()=>{c=!1;let _=t.value[0].uid;await a()&&x(_)},o=()=>{},p=_=>{_.sdkFloatAvatar=X,ie(_)},h=async()=>{c=!0,await a()&&T(),p(oe(l.value))},f=b(""),q=_=>{if(!_)return R("请输入消息内容");s({message:_})},P=async()=>{if(!f.value)return R("请输入消息内容");c=!0,q(f.value),f.value=""},W=()=>{T()},G=()=>{T()};return z(()=>{h(),u.on("updateAiMessage",W),u.on("openWindow",G)}),se(()=>{e()}),(_,B)=>(g(),m("div",Ke,[r("div",Ne,[M(ve)]),r("div",Oe,[r("div",Ve,[M($e,{ref_key:"messageListRef",ref:v,messages:y(t),onScrollStart:S,onScrollEnd:o},{default:te(()=>[(g(!0),m(k,null,E(y(t),C=>(g(),le(je,{key:C.uid,msg:C,onSendTextMessage:q},null,8,["msg"]))),128))]),_:1},8,["messages"])])]),r("div",ze,[M(Me,{value:f.value,"onUpdate:value":B[0]||(B[0]=C=>f.value=C),onSend:P,loading:y(d)},null,8,["value","loading"]),Ue])]))}}),Ze=w(Je,[["__scopeId","data-v-7451b1b9"]]);export{Ze as default};