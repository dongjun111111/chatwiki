import{_ as u}from"../../index.js";import{e as r,M as i,N as d,W as n,U as f}from"./vue-chunks-Chs-lyDX.js";const m={class:"cu-upload"},_=["name","accept"],h={__name:"cu-upload",props:{name:{type:String,default:""},accept:{type:String,default:"*"}},emits:["change"],setup(a,{emit:c}){const s=c,o=a,e=r(null),l=t=>{s("change",t.target.files)},p=()=>{e.value.value="",e.value.click()};return(t,g)=>(i(),d("div",m,[n("input",{ref_key:"fileInput",ref:e,class:"file-input",type:"file",name:a.name,accept:o.accept,onChange:l},null,40,_),n("span",{class:"upload-btn",onClick:p},[f(t.$slots,"default",{},void 0,!0)])]))}},C=u(h,[["__scopeId","data-v-538e9867"]]);export{C};
