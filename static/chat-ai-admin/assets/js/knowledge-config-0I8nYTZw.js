import{_ as j,d as x,c as D}from"../../index-3zhUo7yB.js";import{a0 as G,A as C,r as c,L as t,M as i,V as n,j as l,Q as r,U as I,u as L,F as m,a1 as p,a2 as B,Y as f,P as v,a8 as Q}from"./vue-chunks-BqR2sv6q.js";import{h as R,n as Y}from"./index-C_GzEAjs.js";/* empty css                                                                         */import{F,I as H,_ as J}from"./Password-B44zxURS.js";import"./index-DD-RdiGP.js";import{_ as K}from"./TextArea-DzoZEWPA.js";import{S as T,a as W,_ as X}from"./index-iNvt8ZKo.js";import"./dayjs-CuJbp_-a.js";import"./axios-Cm0UX6qg.js";import"./qs-B6vlU9Aj.js";import"./crypto-js-Dyh51M5x.js";import"./index-Ds1Q0oJ4.js";import"./collapseMotion-CZutXYv2.js";import"./inputProps-C4OjRA3_.js";import"./FormItemContext-BTP630fU.js";import"./index-iH-Nu7mF.js";import"./slide-ZCl6ZFDX.js";import"./isMobile-D_4OiXLP.js";import"./CheckOutlined-BEWUgocd.js";import"./DownOutlined-BGIGKQLl.js";import"./move-MIaOwSfN.js";const Z={class:"add-library-page"},ee={class:"form-box"},oe={class:"card-box"},ae=["onClick"],te=["src"],ne={__name:"knowledge-config",setup(le){const b=G(),N=b.query,o=C({library_name:"",library_intro:"",use_model:"",is_offline:""}),_=c(0),y=c({});(()=>{R({id:N.id}).then(a=>{y.value=a.data,_.value=y.value.is_offline?2:1,o.library_name=a.data.library_name,o.library_intro=a.data.library_intro,o.use_model=a.data.use_model,o.is_offline=a.data.is_offline})})();const S=c([{iconName:"high",title:"高质量",value:1,is_offline:!1,desc:"使用在线的嵌入模型，在召回时具有更高的准确度，但需要花费token"},{iconName:"economic",title:"经济",value:2,is_offline:!0,desc:"使用离线的向量模型，较在线模型准确度稍低，但是不需要消耗token"}]),q=F.useForm,w=C({library_name:[{required:!0,message:"请输入库名称",trigger:"blur"}],use_model:[{required:!0,message:"请选择嵌入模型",trigger:"change"}]}),{validateInfos:g}=q(o,w),U=()=>!1,V=()=>!1,M=c([]),h=()=>{if(!o.library_name)return x.error("请输入知识库名称");let a={library_name:o.library_name,library_intro:o.library_intro,id:b.query.id};Y(a).then(s=>{x.success("修改成功")})};return(a,s)=>{const z=H,d=J,A=K,k=D,E=T,O=W,P=X,$=F;return t(),i("div",Z,[n("div",ee,[l($,{"label-col":{span:4}},{default:r(()=>[l(d,I({ref:"name",label:"知识库名称"},L(g).library_name),{default:r(()=>[l(z,{onBlur:h,value:o.library_name,"onUpdate:value":s[0]||(s[0]=e=>o.library_name=e),placeholder:"请输入知识库名称，最多20个字"},null,8,["value"])]),_:1},16),l(d,{label:"知识库简介"},{default:r(()=>[l(A,{onBlur:h,value:o.library_intro,"onUpdate:value":s[1]||(s[1]=e=>o.library_intro=e),placeholder:"请输入知识库介绍"},null,8,["value"])]),_:1}),l(d,I({label:"嵌入模型"},L(g).use_model),{default:r(()=>[n("div",oe,[(t(!0),i(m,null,p(S.value,e=>(t(),i("div",{class:B(["use-model-item",{active:_.value==e.value}]),key:e.value,onClick:u=>V(e)},[n("div",{class:B(["use-model-item-top",{active:_.value==e.value}])},[l(k,{class:"use-model-item-top-icon",style:{color:"red"},name:e.iconName},null,8,["name"]),n("p",null,f(e.title),1)],2),n("p",null,f(e.desc),1),_.value==e.value?(t(),v(k,{key:0,class:"check-arrow",name:"select-disabled",style:{"font-size":"24px",color:"#fff"}})):Q("",!0)],10,ae))),128))]),l(P,{disabled:"",value:o.use_model,"onUpdate:value":s[2]||(s[2]=e=>o.use_model=e),placeholder:"请选择嵌入模型",onChange:U},{default:r(()=>[(t(!0),i(m,null,p(M.value,e=>(t(),v(O,{key:e.id},{label:r(()=>[n("span",null,[n("img",{class:"model-icon",src:e.icon,alt:""},null,8,te)])]),default:r(()=>[(t(!0),i(m,null,p(e.children,u=>(t(),v(E,{value:u,model_config_id:e.id,key:u},{default:r(()=>[n("span",null,f(u),1)]),_:2},1032,["value","model_config_id"]))),128))]),_:2},1024))),128))]),_:1},8,["value"])]),_:1},16)]),_:1})])])}}},Se=j(ne,[["__scopeId","data-v-caeb8cd4"]]);export{Se as default};