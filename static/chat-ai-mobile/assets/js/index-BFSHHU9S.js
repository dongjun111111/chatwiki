var Be=Object.defineProperty;var He=(e,t,s)=>t in e?Be(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var R=(e,t,s)=>(He(e,typeof t!="symbol"?t+"":t,s),s);import{j as z,w as se,b as _e,o as be,k as E,q as ye,r as O,g as De,t as ke,f as G,y as we,z as I,D as L,E as k,I as Se,J as Te,K as Ce,L as Ue,n as ie,e as le,M as Y,u as U,N as oe,O as Me,P as ce,Q as ze,A as Fe,S as Je,x as We}from"./vue-chunks-DGcK8bw_.js";import{a as Ve}from"./axios-B4uVmeYG.js";import{q as Ge}from"./qs-DrHefV6n.js";import{c as Ke,p as Qe,m as Z,n as ee,A as Xe,i as ue,I as Ye,L as Ze,C as et,e as Oe,s as tt,D as st,d as ot,S as de,v as me,y as at,E as F}from"../../index.js";import{P as nt,m as rt,b as it}from"./mount-component-qMWRoL3E.js";import"./dayjs-C4iS2aBk.js";import"./crypto-js-BJ7SvduI.js";let H=0;function lt(e){e?(H||document.body.classList.add("van-toast--unclickable"),H++):H&&(H--,H||document.body.classList.remove("van-toast--unclickable"))}const[ct,N]=Ke("toast"),ut=["show","overlay","teleport","transition","overlayClass","overlayStyle","closeOnClickOverlay","zIndex"],dt={icon:String,show:Boolean,type:Z("text"),overlay:Boolean,message:ee,iconSize:ee,duration:Xe(2e3),position:Z("middle"),teleport:[String,Object],wordBreak:String,className:ue,iconPrefix:String,transition:Z("van-fade"),loadingType:String,forbidClick:Boolean,overlayClass:ue,overlayStyle:Object,closeOnClick:Boolean,closeOnClickOverlay:Boolean,zIndex:ee};var xe=z({name:ct,props:dt,emits:["update:show"],setup(e,{emit:t,slots:s}){let o,a=!1;const r=()=>{const m=e.show&&e.forbidClick;a!==m&&(a=m,lt(a))},n=m=>t("update:show",m),l=()=>{e.closeOnClick&&n(!1)},c=()=>clearTimeout(o),d=()=>{const{icon:m,type:p,iconSize:w,iconPrefix:v,loadingType:h}=e;if(m||p==="success"||p==="fail")return E(Ye,{name:m||p,size:w,class:N("icon"),classPrefix:v},null);if(p==="loading")return E(Ze,{class:N("loading"),size:w,type:h},null)},g=()=>{const{type:m,message:p}=e;if(s.message)return E("div",{class:N("text")},[s.message()]);if(et(p)&&p!=="")return m==="html"?E("div",{key:0,class:N("text"),innerHTML:String(p)},null):E("div",{class:N("text")},[p])};return se(()=>[e.show,e.forbidClick],r),se(()=>[e.show,e.type,e.message,e.duration],()=>{c(),e.show&&e.duration>0&&(o=setTimeout(()=>{n(!1)},e.duration))}),_e(r),be(r),()=>E(nt,ye({class:[N([e.position,e.wordBreak==="normal"?"break-normal":e.wordBreak,{[e.type]:!e.icon}]),e.className],lockScroll:!1,onClick:l,onClosed:c,"onUpdate:show":n},Qe(e,ut)),{default:()=>[d(),g()]})}});const mt={icon:"",type:"text",message:"",className:"",overlay:!1,onClose:void 0,onOpened:void 0,duration:2e3,teleport:"body",iconSize:void 0,iconPrefix:void 0,position:"middle",transition:"van-fade",forbidClick:!1,loadingType:void 0,overlayClass:"",overlayStyle:void 0,closeOnClick:!1,closeOnClickOverlay:!1};let J=[],ft=!1,fe=Oe({},mt);const pt=new Map;function gt(e){return st(e)?e:{message:e}}function vt(){const{instance:e,unmount:t}=rt({setup(){const s=O(""),{open:o,state:a,close:r,toggle:n}=it(),l=()=>{},c=()=>E(xe,ye(a,{onClosed:l,"onUpdate:show":n}),null);return se(s,d=>{a.message=d}),De().render=c,{open:o,close:r,message:s}}});return e}function ht(){if(!J.length||ft){const e=vt();J.push(e)}return J[J.length-1]}function K(e={}){if(!tt)return{};const t=ht(),s=gt(e);return t.open(Oe({},fe,pt.get(s.type||fe.type),s)),t}ot(xe);function _t(e){return{all:e=e||new Map,on:function(t,s){var o=e.get(t);o?o.push(s):e.set(t,[s])},off:function(t,s){var o=e.get(t);o&&(s?o.splice(o.indexOf(s)>>>0,1):e.set(t,[]))},emit:function(t,s){var o=e.get(t);o&&o.slice().map(function(a){a(s)}),(o=e.get("*"))&&o.slice().map(function(a){a(t,s)})}}}const W=_t(),qe=e=>({on:W.on,off:W.off,emit:W.emit,all:W.all});async function bt(e,t){const s=e.getReader();let o;for(;!(o=await s.read()).done;)t(o.value)}function yt(e){let t,s,o,a=!1;return function(n){t===void 0?(t=n,s=0,o=-1):t=wt(t,n);const l=t.length;let c=0;for(;s<l;){a&&(t[s]===10&&(c=++s),a=!1);let d=-1;for(;s<l&&d===-1;++s)switch(t[s]){case 58:o===-1&&(o=s-c);break;case 13:a=!0;case 10:d=s;break}if(d===-1)break;e(t.subarray(c,d),o),c=s,o=-1}c===l?t=void 0:c!==0&&(t=t.subarray(c),s-=c)}}function kt(e,t,s){let o=pe();const a=new TextDecoder;return function(n,l){if(n.length===0)s==null||s(o),o=pe();else if(l>0){const c=a.decode(n.subarray(0,l)),d=l+(n[l+1]===32?2:1),g=a.decode(n.subarray(d));switch(c){case"data":o.data=o.data?o.data+`
`+g:g;break;case"event":o.event=g;break;case"id":e(o.id=g);break;case"retry":const m=parseInt(g,10);isNaN(m)||t(o.retry=m);break}}}}function wt(e,t){const s=new Uint8Array(e.length+t.length);return s.set(e),s.set(t,e.length),s}function pe(){return{data:"",event:"",id:"",retry:void 0}}var St=function(e,t){var s={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(s[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(s[o[a]]=e[o[a]]);return s};const Q="text/event-stream",Tt=1e3,ge="last-event-id";function Ct(e,t){var{signal:s,headers:o,onopen:a,onmessage:r,onclose:n,onerror:l,openWhenHidden:c,fetch:d}=t,g=St(t,["signal","headers","onopen","onmessage","onclose","onerror","openWhenHidden","fetch"]);return new Promise((m,p)=>{const w=Object.assign({},o);w.accept||(w.accept=Q);let v;function h(){v.abort(),document.hidden||P()}c||document.addEventListener("visibilitychange",h);let C=Tt,x=0;function S(){document.removeEventListener("visibilitychange",h),window.clearTimeout(x),v.abort()}s==null||s.addEventListener("abort",()=>{S(),m()});const A=d??window.fetch,j=a??Mt;async function P(){var y;v=new AbortController;try{const q=await A(e,Object.assign(Object.assign({},g),{headers:w,signal:v.signal}));await j(q),await bt(q.body,yt(kt(_=>{_?w[ge]=_:delete w[ge]},_=>{C=_},r))),n==null||n(),S(),m()}catch(q){if(!v.signal.aborted)try{const _=(y=l==null?void 0:l(q))!==null&&y!==void 0?y:C;window.clearTimeout(x),x=window.setTimeout(P,_)}catch(_){S(),p(_)}}}P()})}function Mt(e){const t=e.headers.get("content-type");if(!(t!=null&&t.startsWith(Q)))throw new Error(`Expected content-type to be ${Q}, Actual: ${t}`)}class Ot{constructor(t={}){R(this,"onOpen");R(this,"onClose");R(this,"onError");R(this,"onMessage");R(this,"opt",{url:"",data:{}});R(this,"controller",new AbortController);this.opt={...this.opt,...t},this.open()}open(){const t=new FormData;for(const s in this.opt.data)Object.prototype.hasOwnProperty.call(this.opt.data,s)&&t.append(s,this.opt.data[s]);Ct(this.opt.url,{method:"POST",signal:this.controller.signal,openWhenHidden:!0,body:t,onopen:async s=>{if(s.ok&&s.headers.get("content-type")===Q)typeof this.onOpen=="function"&&this.onOpen();else throw s.status>=400&&s.status<500&&s.status!==429?new Error("连接出错"):new Error("连接出错")},onmessage:s=>{typeof this.onMessage=="function"&&this.onMessage(s)},onclose:()=>{typeof this.onClose=="function"&&this.onClose(),this.controller.abort()},onerror:s=>{typeof this.onError=="function"&&this.onError(s)}})}abort(){this.controller.abort()}}const xt=0,qt="application/x-www-form-urlencoded;charset=UTF-8",Et=5*60*1e3,ae=new URL("/assets/img/user_avatar_2x-D7HF6Y-m.png",import.meta.url).href,It={avater:ae},re=ke("user",()=>G({...It}));function Lt(e){const t=new FormData;return Object.keys(e).forEach(s=>{e[s]!==void 0&&e[s]!==null&&t.append(s,e[s])}),t}function D(e=16,t=0){const s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),o=[];let a;if(t=t||s.length,e)for(a=0;a<e;a++)o[a]=s[0|Math.random()*t];else{let r;for(o[8]=o[13]=o[18]=o[23]="-",o[14]="4",a=0;a<36;a++)o[a]||(r=0|Math.random()*16,o[a]=s[a==19?r&3|8:r])}return o.join("")}function Ee(){let e=de.get("openid");return e||(e=D(16),de.set("openid",e)),e}function ve(e){return e.replace(/[&<"']/g,function(t){switch(t){case"&":return"&amp;";case"<":return"&lt;";case'"':return"&quot;";default:return"&#039;"}})}const he=(e,t)=>t,Ie=e=>{const t={t:r=>he(e,r)};if(!me)return t;const{t:s,...o}=me.global;return{...o,t:(r,...n)=>r?!r.includes(".")&&!e?r:s(he(e,r),...n):""}};function At(e){const{t}=Ie();let s=e.response.status,o=e.response.data.message||e.message,a="";switch(s){case 400:a=`${o}`;break;case 401:a=t("common.errMsg401");break;case 403:a=t("common.errMsg403");break;case 404:a=t("common.errMsg404");break;case 405:a=t("common.errMsg405");break;case 408:a=t("common.errMsg408");break;case 500:a=t("common.errMsg500");break;case 501:a=t("common.errMsg501");break;case 502:a=t("common.errMsg502");break;case 503:a=t("common.errMsg503");break;case 504:a=t("common.errMsg504");break;case 505:a=t("common.errMsg505");break;default:a=`${o}`}return a}let te=!1;function Le(e){te||(te=!0,K(e),setTimeout(()=>{te=!1},200))}const Pt=e=>{if(e.method==="post"&&e.headers["Content-Type"]==="application/x-www-form-urlencoded"?e.data=Ge.stringify(e.data):e.method==="post"&&e.headers["Content-Type"]==="multipart/form-data"&&(e.data=Lt(e.data)),e.method==="get"&&e.params){let t=e.url;t+="?";const s=Object.keys(e.params);for(const o of s)e.params[o]!==void 0&&e.params[o]!==null&&(t+=`${o}=${encodeURIComponent(e.params[o])}&`);t=t.substring(0,t.length-1),e.params={},e.url=t}return e},jt=e=>{var t,s,o;if(e.data&&typeof e.data.res<"u"&&(e.data.code=e.data.res,e.data.message=e.data.msg||""),((t=e==null?void 0:e.config)==null?void 0:t.responseType)==="blob")return e;if(e.data.code===xt)return e.data;if(K((s=e==null?void 0:e.data)==null?void 0:s.message),((o=e==null?void 0:e.data)==null?void 0:o.code)===401)re().logout();else return Promise.reject(e.data)},Rt=e=>e.response?(console.log("response err： "+e),$t(e)):e.request?(console.log("request err： "+e),Nt(e)):Promise.reject(e),Nt=e=>{var c,d,g;const{t}=Ie(),{response:s,code:o,message:a}=e||{},r=((d=(c=s==null?void 0:s.data)==null?void 0:c.error)==null?void 0:d.message)??"",n=((g=e==null?void 0:e.toString)==null?void 0:g.call(e))??"";let l="";return o==="ECONNABORTED"&&a.indexOf("timeout")!==-1?l=t("common.apiTimeoutMessage"):n!=null&&n.includes("Network Error")?l=t("common.networkExceptionMsg"):l=r,Le(l),Promise.reject(e)},$t=e=>{var o;let t=(o=e==null?void 0:e.response)==null?void 0:o.status,s=At(e);return Le(s),t===401&&re().logout(),Promise.reject(e)},Bt="",$=new Map,B=Ve.create({timeout:Et,baseURL:Bt});B.interceptors.request.use(e=>{const t=new AbortController,s=e.url||"";return e.signal=t.signal,$.set(s,t),e});B.interceptors.response.use(e=>{const t=e.config.url||"";return $.delete(t),e},e=>Promise.reject(e));B.interceptors.request.use(Pt);B.interceptors.response.use(jt);B.interceptors.response.use(void 0,Rt);const ne={request:e=>new Promise((t,s)=>{var o;(o=e.interceptors)!=null&&o.requestInterceptors&&(e=e.interceptors.requestInterceptors(e)),B.request(e).then(a=>{t(a)}).catch(a=>{s(a)})}),cancelRequest:e=>{var s;const t=Array.isArray(e)?e:[e];for(const o of t)(s=$.get(o))==null||s.abort(),$.delete(o)},cancelAllRequest(){for(const[e,t]of $)t.abort();$.clear()}},V=e=>{const t=re(),s=at(),{url:o,method:a,params:r,data:n,headers:l,responseType:c,withToken:d}=e,g=s.getCurrentLocale,m={"Content-Type":qt,"X-Requested-With":"XMLHttpRequest",lang:g.lang,...l};return d||(m.token=t.getToken??""),ne.request({url:o,method:a,params:r,data:n,responseType:c,headers:{...m}})},X={get:e=>V({method:"get",...e}),post:e=>V({method:"post",...e}),delete:e=>V({method:"delete",...e}),put:e=>V({method:"put",...e}),cancelRequest:e=>ne.cancelRequest(e),cancelAllRequest:()=>ne.cancelAllRequest()},Ht="",Dt=e=>new Ot({url:Ht+"/chat/request",data:e}),Ut=e=>X.post({url:"/chat/welcome",data:e}),zt=e=>X.post({url:"/manage/getDialogueList",data:e}),Ft=e=>X.post({url:"/chat/message",data:e}),Jt=({id:e,prompt:t})=>X.post({url:"/manage/editPrompt",data:{id:e,prompt:t}}),Wt=ke("chat",()=>{const e=qe(),t=O([]);let s=null;const o=O(0),a=O(""),r=G({admin_user_id:"",avatar:"",id:"",name:"",nickname:"",openid:""}),n=G({id:null,library_ids:"",prompt:"",robot_avatar:"",robot_intro:"",robot_key:"",robot_name:"",openid:"",welcomes:{content:"",question:[]}}),l=G({pageTitle:"",lang:"",logo:"",accessRestrictionsType:1}),c=O(!1),d=async i=>{s&&(s.abort(),s=null),t.value=[],_.value=!1,h.value=!1,i.dialogue_id?(c.value=!1,o.value=i.dialogue_id):(c.value=!0,o.value=0),a.value=i.openid||Ee(),n.robot_key=i.robot_key,n.openid=a.value,r.openid=a.value,r.avatar=i.avatar||ae,r.name=i.name||"",r.nickname=i.nickname||"";const f=await Ut({robot_key:n.robot_key,openid:a.value,nickname:r.nickname,name:r.name,avatar:r.avatar||ae});try{const T=f.data.customer,u=f.data.robot;r.admin_user_id=T.admin_user_id,r.avatar=T.avatar,r.id=T.id,r.name=T.name,r.nickname=T.nickname,n.library_ids=u.library_ids,n.prompt=u.prompt,n.robot_avatar=u.robot_avatar,n.robot_intro=u.robot_intro,n.robot_key=u.robot_key,n.robot_name=u.robot_name,n.library_ids=u.library_ids,n.id=u.id,u.welcomes&&(n.welcomes=JSON.parse(u.welcomes)),g(f.data.message),u.external_config_h5?Object.assign(l,JSON.parse(u.external_config_h5)):(l.pageTitle=u.robot_name,l.logo=u.robot_avatar),document.title=l.pageTitle;const b=document.querySelector('link[rel="icon"]');return b&&l.logo&&b.setAttribute("href",l.logo),f}catch(T){Promise.reject(T)}},g=i=>{i&&(i.uid=D(32),i.loading=!1,i.isWelcome=!0,i.avatar=n.robot_avatar,i.menu_json&&(i.menu_json=JSON.parse(i.menu_json)),i.quote_file&&(i.quote_file=JSON.parse(i.quote_file)),t.value.push(i))},m=i=>{i.uid=D(32),i.loading=!1,i.avatar=r.avatar,i.openid=r.openid,i.msg_type=1,i.is_customer=1,t.value.push(i)},p=i=>{t.value.push(i),e.emit("updateAiMessage",i)},w=(i,f,T)=>{const u=t.value.findIndex(b=>b.uid==T);if(i=="sending"){const b=t.value[u].content;t.value[u].content=b+f}i=="quote_file"&&(t.value[u].quote_file=f.length>0?f:[]),i=="ai_message"&&(t.value[u].id=f.id),i=="debug"&&(t.value[u].debug=f.length>0?f:[]),e.emit("updateAiMessage",t.value[u])},v=()=>{const i=t.value.length-1;t.value[i].loading=!1},h=O(!1),C=i=>{if(h.value)return;const f={loading:!0,id:"",content:"",uid:D(32),avatar:n.robot_avatar,msg_type:1,quote_file:[],is_customer:0,debug:[]},T={robot_key:n.robot_key,openid:n.openid,question:i.message,prompt:n.prompt,library_ids:n.library_ids,dialogue_id:o.value};h.value=!0,s=Dt(T),s.onMessage=u=>{if(u.event=="dialogue_id"&&(o.value=u.data),u.event=="c_message"){const b=JSON.parse(u.data);m(b)}if(u.event=="robot"&&(p(f),c.value&&(c.value=!1)),u.event=="sending"&&w("sending",u.data,f.uid),u.event=="ai_message"){const b=JSON.parse(u.data);w("ai_message",b,f.uid)}if(u.event=="quote_file"){const b=JSON.parse(u.data);w("quote_file",b,f.uid)}if(u.event=="debug"){const b=JSON.parse(u.data);w("debug",b,f.uid)}},s.onClose=()=>{v(),h.value=!1,s=null}},x=25,S=O([]),A=O(!1),j=O(!1),P=async()=>{if(j.value||A.value)return!1;let i=0;S.value.length>0&&(i=S.value[S.value.length-1].id),A.value=!0;const f=await zt({min_id:i,size:x,robot_key:n.robot_key});A.value=!1;const T=f.data||[];return T.length===0?(j.value=!0,!1):(S.value=[...S.value,...T],f)},y=async i=>await d(i),q=20,_=O(!1),Pe=async()=>{if(_.value)return;let i=0;const f=t.value.filter(u=>!u.isWelcome);f.length>0&&(i=f[0].id);const T={robot_key:n.robot_key,openid:r.openid,min_id:i,size:q,dialogue_id:o.value};try{const u=await Ft(T),b=u.data.list||[];if(b.length===0){_.value=!0;return}return b.sort((M,$e)=>M.id-$e.id),b.forEach(M=>{M.loading=!1,M.uid=D(32),M.is_customer==1?M.avatar=r.avatar:M.avatar=n.robot_avatar,M.menu_json&&(M.menu_json=JSON.parse(M.menu_json)),M.quote_file&&(M.quote_file=JSON.parse(M.quote_file))}),t.value=[...b,...t.value],u}catch(u){Promise.reject(u)}},je=i=>{n.prompt=i},Re=()=>Jt({id:n.id,prompt:n.prompt});function Ne(){o.value=0,t.value=[],a.value="",r.admin_user_id="",r.avatar="",r.id="",r.name="",r.nickname="",r.openid="",n.id=null,n.library_ids="",n.prompt="",n.robot_avatar="",n.robot_intro="",n.robot_key="",n.robot_key="",n.robot_name="",n.openid="",n.welcomes={content:"",question:[]},c.value=!1,_.value=!1,h.value=!1,A.value=!1,j.value=!1,S.value=[]}return{$reset:Ne,user:r,robot:n,dialogue_id:o,openid:a,sendLock:h,messageList:t,createChat:d,sendMessage:C,getMyChatList:P,myChatList:S,openChat:y,onGetChatMessage:Pe,changeRobotPrompt:je,saveRobotPrompt:Re}}),Vt={},Ae=e=>(Se("data-v-7906b4b9"),e=e(),Te(),e),Gt={class:"cu-navbar"},Kt={class:"navbar-left"},Qt=Ae(()=>k("div",{class:"navbar-body"},[k("div",{class:"navbar-title van-ellipsis"},"ZHIMA CHATAI")],-1)),Xt=Ae(()=>k("div",{class:"navbar-right"},null,-1));function Yt(e,t){const s=we("van-icon");return I(),L("div",Gt,[k("div",Kt,[E(s,{class:"navbar-arrow",name:"arrow-left"})]),Qt,Xt])}const Zt=F(Vt,[["render",Yt],["__scopeId","data-v-7906b4b9"]]),es={class:"message-input-box"},ts={class:"message-input-body"},ss=["value"],os=z({__name:"message-input",props:{value:{type:String,default:""}},emits:["update:value","send"],setup(e,{emit:t}){const s=t,o=e,a=l=>{const c=l.target;s("update:value",c.value)},r=()=>{o.value.trim()&&s("send",o.value)},n=l=>{o.value.trim()&&(l.preventDefault(),r())};return(l,c)=>{const d=we("svg-icon");return I(),L("div",es,[k("div",ts,[k("div",{class:Ce(["message-input",{"is-set":o.value.length>0}])},[k("input",{class:"text-input",type:"text",value:e.value,placeholder:"在此输入您想了解的内容",onChange:a,"on:pressEnter":n},null,40,ss),E(d,{name:"paper-airplane",class:"send-btn",onClick:r})],2)])])}}}),as=F(os,[["__scopeId","data-v-cd8c7bb6"]]),ns=z({__name:"message-list",props:{messages:{type:Array,default:()=>[]}},emits:["clickMsgMeun","scroll","scrollStart","scrollEnd"],setup(e,{expose:t,emit:s}){const o=s,a=e,r=O(null),n={scrollTop:0,scrollHeight:0,clientHeight:0,scrollStartDiff:60,scrollEndDiff:60};let l=null,c=!1;function d(){a.messages.length!=0&&o("scrollStart",{msg:a.messages[0]})}function g(){a.messages.length!=0&&o("scrollEnd",{msg:a.messages[a.messages.length-1]})}function m(v){c||(l!==null&&(clearTimeout(l),l=null),l=window.setTimeout(()=>{n.scrollTop=v.target.scrollTop,n.scrollHeight=v.target.scrollHeight,n.clientHeight=v.target.clientHeight,o("scroll",{...n}),Math.abs(n.scrollTop)<=n.scrollStartDiff&&d(),Math.abs(n.scrollHeight-n.scrollTop-n.clientHeight)<=n.scrollEndDiff&&g()},50))}const p=()=>{r.value&&ie(()=>{c=!0,r.value&&(r.value.scrollTop=r.value.scrollHeight+1,setTimeout(()=>{c=!1},50))})};function w(v,h){ie(()=>{c=!0,h||(h="top");let C=r.value,x=document.querySelector("#msg-"+v);!C||!x||(h=="top"?C.scrollTop=x.offsetTop:C.scrollTop=x.offsetTop-C.clientHeight+x.clientHeight,setTimeout(()=>{c=!1},50))})}return t({scrollToBottom:p,scrollToMessage:w}),(v,h)=>(I(),L("div",{class:"message-list",ref_key:"scrollBoxRef",ref:r,onScroll:m},[Ue(v.$slots,"default",{},void 0)],544))}}),rs=F(ns,[["__scopeId","data-v-7e037515"]]),is=e=>(Se("data-v-3e647e1d"),e=e(),Te(),e),ls=["id"],cs={class:"message-item-left"},us=["src"],ds={class:"message-item-body"},ms={class:"message-content"},fs=is(()=>k("span",{class:"triangle"},null,-1)),ps={key:0,class:"text-message"},gs={class:"text-message"},vs={key:0,class:"question-list"},hs=["onClick"],_s=z({__name:"message-item",props:{msg:{type:Object,required:!0}},emits:["sendTextMessage"],setup(e,{emit:t}){const s=t,o=e,a=le(()=>o.msg.is_customer==1),r=le(()=>({"user-message-item":a.value===!0,"robot-message-item":a.value===!1,"welcome-message-item":o.msg.menu_json&&o.msg.menu_json.question})),n=l=>{s("sendTextMessage",l)};return(l,c)=>(I(),L("div",{class:Ce(["ignore-message-item",r.value]),id:"msg-"+e.msg.uid},[k("div",cs,[k("img",{class:"avatar",src:o.msg.avatar},null,8,us)]),k("div",ds,[k("div",ms,[fs,o.msg.msg_type==1?(I(),L("div",ps,Y(U(ve)(o.msg.content)),1)):o.msg.msg_type==2?(I(),L(oe,{key:1},[k("div",gs,Y(U(ve)(o.msg.menu_json.content)),1),o.msg.menu_json&&o.msg.menu_json.question.length?(I(),L("div",vs,[(I(!0),L(oe,null,Me(o.msg.menu_json.question,d=>(I(),L("div",{class:"question-item",key:d,onClick:g=>n(d)},[k("span",null,Y(d),1)],8,hs))),128))])):ce("",!0)],64)):ce("",!0)])])],10,ls))}}),bs=F(_s,[["__scopeId","data-v-3e647e1d"]]),ys={class:"chat-page"},ks={class:"chat-page-header"},ws={class:"chat-page-body"},Ss={class:"messages-list-wrap"},Ts={class:"chat-page-footer"},Cs=z({__name:"index",setup(e){const t=Je(),s=qe(),o=Wt(),{sendMessage:a,openChat:r,onGetChatMessage:n,$reset:l}=o,{messageList:c,sendLock:d,dialogue_id:g}=ze(o);let m=!0;const p=O(null),w=y=>{p.value&&p.value.scrollToMessage(y)},v=()=>{p.value&&m&&p.value.scrollToBottom()},h=async()=>{m=!1;let y=c.value[0].uid;await n()&&w(y)},C=()=>{},x=async()=>{m=!0;let y=t.query||{},q={robot_key:y.robot_key,avatar:y.avatar||"",name:y.name||"",nickname:y.nickname||"",openid:Ee(),dialogue_id:g.value};await r(q),await n()&&v()},S=O(""),A=y=>{if(!y)return K("请输入消息内容");a({message:y})},j=async()=>{if(!S.value)return K("请输入消息内容");m=!0,A(S.value),S.value=""},P=()=>{p.value&&v()};return _e(()=>{x(),s.on("updateAiMessage",P)}),be(()=>{l(),s.off("updateAiMessage",P)}),(y,q)=>(I(),L("div",ys,[k("div",ks,[E(Zt)]),k("div",ws,[k("div",Ss,[E(rs,{ref_key:"messageListRef",ref:p,messages:U(c),onScrollStart:h,onScrollEnd:C},{default:Fe(()=>[(I(!0),L(oe,null,Me(U(c),_=>(I(),We(bs,{key:_.uid,msg:_,onSendTextMessage:A},null,8,["msg"]))),128))]),_:1},8,["messages"])])]),k("div",Ts,[E(as,{value:S.value,"onUpdate:value":q[0]||(q[0]=_=>S.value=_),onSend:j,loading:U(d)},null,8,["value","loading"])])]))}}),Ps=F(Cs,[["__scopeId","data-v-57c274c0"]]);export{Ps as default};