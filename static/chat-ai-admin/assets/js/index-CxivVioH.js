import{e as p,w as O,M as d,N as f,k as c,W as i,S as P,a8 as F,F as I,a2 as B,u as b,a3 as J}from"./vue-chunks-C4JOcZXM.js";import{u as h}from"./index-Cw5btzCW.js";import{_ as V,d as s,bl as z}from"../../index-CkphMBlH.js";import{E as A,I as G}from"./Password-C4pJDvMr.js";import{D as R,U as S}from"./index-DjPSPmWl.js";import"./index-DV57irlB.js";const $={class:"upload-box"},q={class:"mask-box"},W=["src"],y=3,H={__name:"index",props:{value:{type:[String,Array],default:""}},emits:["update:value"],setup(k,{emit:D}){const g=D,m=p([]),t=p([]),v=p(""),w=k;O(()=>w.value,e=>{t.value=e},{immediate:!0});const x=e=>{if(!(e.type==="image/jpeg"||e.type==="image/png"))return s.error("只支持JPG、PNG格式的图片"),!1;const r=e.size/1024<1024*2;return t.value.length>=y?s.error("最多上传三张图片"):r?(h({category:"library_image",file:e}).then(l=>{t.value.push(l.data.link),g("update:value",t.value)}),!1):(s.error("图片大小不能超过2M"),!1)},U=e=>{z({images:[e]})},M=e=>{t.value.splice(e,1)};let n=!1;const C=async e=>{if(t.value.length>=y)return s.error("最多上传三张图片");if(!(e.clipboardData&&e.clipboardData.items)){s.error("当前浏览器不支持粘贴上传操作！");return}if(!n)try{if(e.clipboardData||e.originalEvent||window.clipboardData){var o=e.clipboardData||e.originalEvent.clipboardData||window.clipboardData,r=o.items;let l=null;for(let a=0;a<r.length;a++)if(r[a].type.indexOf("image")!==-1){l=r[a].getAsFile();break}v.value="",l?(e.preventDefault(),n=!0,h({category:"library_image",file:l}).then(a=>{n=!1,t.value.push(a.data.link),g("update:value",t.value)})):(error("请粘贴正确图片"),n=!1,v.value="")}}catch{n=!1,s.error("上传失败")}},u=p(null),L=()=>{u.value,u.value.focus()},E=()=>{u.value.blur()};function j(e){}return(e,o)=>{const r=G,l=S;return d(),f("div",$,[c(r,{class:"hidden-input",ref_key:"inputRef",ref:u,onPaste:C},null,512),i("div",{onMouseenter:L,onMouseleave:E},[c(l,{fileList:m.value,"onUpdate:fileList":o[1]||(o[1]=a=>m.value=a),name:"file",multiple:!1,"list-type":"picture","show-upload-list":!1,accept:".jpg,.png,.jpeg","before-upload":x,onDrop:j},{default:P(()=>[i("div",{class:"img-list-box",onClick:o[0]||(o[0]=F(()=>{},["stop"]))},[(d(!0),f(I,null,B(t.value,(a,_)=>(d(),f("div",{class:"img-item",key:_},[i("div",q,[c(b(A),{onClick:N=>U(a)},null,8,["onClick"]),c(b(R),{onClick:N=>M(_)},null,8,["onClick"])]),i("img",{src:a,alt:""},null,8,W)]))),128))]),i("p",{class:J(["upload-text",{"center-content":t.value.length==0}])}," 支持点击空白处、拖拽、粘贴图片，上传图片不得超过2M，仅支持png、jpg、jpeg格式 ",2)]),_:1},8,["fileList"])],32)])}}},ee=V(H,[["__scopeId","data-v-1d3b2a42"]]);export{ee as U};