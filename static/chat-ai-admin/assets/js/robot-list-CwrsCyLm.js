import{_ as j,L as K,d as P,M as O,G as V,H as Q,E as X,c as Y}from"../../index-3zhUo7yB.js";import{r as p,w as Z,L as f,M as y,j as s,Q as d,P as T,u as C,V as t,a3 as B,a4 as S,$ as J,A as E,U as F,k as oo,v as to,F as eo,a1 as ao,a7 as A,Y as G,X as N}from"./vue-chunks-BqR2sv6q.js";import{s as no,g as so,d as ro}from"./index-CzfeLrV-.js";import{b as lo}from"./index-D7Q4ADdI.js";import{F as U,I as io,_ as co}from"./Password-B44zxURS.js";import{P as _o}from"./PlusOutlined-C0SjZwHg.js";import{_ as uo}from"./index-DtZiJi1p.js";import"./index-DD-RdiGP.js";import{_ as po}from"./TextArea-DzoZEWPA.js";import{P as mo,M as vo}from"./PlusCircleOutlined-UejYJvjF.js";import{_ as fo,M as bo}from"./index-BRrao2Ax.js";import"./index-BnvbLpNa.js";import{D as go}from"./dropdown-BzleFHKH.js";import"./dayjs-CuJbp_-a.js";import"./axios-Cm0UX6qg.js";import"./qs-B6vlU9Aj.js";import"./crypto-js-Dyh51M5x.js";import"./index-Ds1Q0oJ4.js";import"./collapseMotion-CZutXYv2.js";import"./inputProps-C4OjRA3_.js";import"./FormItemContext-BTP630fU.js";import"./CheckOutlined-BEWUgocd.js";import"./useRefs-BBK5dDsO.js";import"./index-iH-Nu7mF.js";import"./slide-ZCl6ZFDX.js";import"./Dropdown-dAJ9ZCrS.js";import"./RightOutlined-GbTdcqbp.js";import"./move-MIaOwSfN.js";const ho=r=>(B("data-v-60ead55d"),r=r(),S(),r),ko={class:"avatar-uploader"},Co=["src"],wo={key:1},Lo=ho(()=>t("div",{class:"ant-upload-text"},"上传照片",-1)),xo=["src"],yo={__name:"avatar-input",props:{value:{type:String,default:""}},emits:["update:value","change"],setup(r,{emit:$}){function b(o){return new Promise((c,x)=>{const n=new FileReader;n.readAsDataURL(o),n.onload=()=>c(n.result),n.onerror=i=>x(i)})}const h=$,w=r,g=p([]),m=p(!1),_=p("");Z(()=>w.value,o=>{_.value=o},{immediate:!0});const e=U.useInjectFormItemContext(),I=()=>{let o={imageUrl:_.value,file:g.value[0].originFileObj};h("change",o),h("update:value",o.imageUrl),e.onFieldChange()},l=o=>o.type==="image/jpeg"||o.type==="image/png"?o.size/1024<100?(g.value=[o],b(o).then(n=>{_.value=n,m.value=!1,I()}),!1):(P.error("机器人头像图片大小不能超过100kb"),!1):(P.error("机器人头像只支持JPG、PNG格式的图片"),!1),a=p(!1),v=p(""),u=p(""),M=()=>{a.value=!1,u.value=""},L=async o=>{!o.url&&!o.preview&&(o.preview=await b(o.originFileObj)),v.value=o.url||o.preview,a.value=!0,u.value=o.name||o.url.substring(o.url.lastIndexOf("/")+1)};return(o,c)=>{const x=uo,n=O;return f(),y("div",ko,[s(x,{"file-list":g.value,"onUpdate:fileList":c[0]||(c[0]=i=>g.value=i),"list-type":"picture-card","show-upload-list":!1,"before-upload":l,accept:".jpg,.png,.jpeg",onPreview:L},{default:d(()=>[r.value?(f(),y("img",{key:0,class:"avatar",src:r.value,alt:"avatar"},null,8,Co)):(f(),y("div",wo,[m.value?(f(),T(C(K),{key:0})):(f(),T(C(_o),{key:1})),Lo]))]),_:1},8,["file-list"]),s(n,{open:a.value,title:u.value,footer:null,onCancel:M},{default:d(()=>[t("img",{alt:"example",style:{width:"100%"},src:v.value},null,8,xo)]),_:1},8,["open","title"])])}}},$o=j(yo,[["__scopeId","data-v-60ead55d"]]),Io=r=>(B("data-v-c17833ff"),r=r(),S(),r),Mo={class:"form-box"},Po=Io(()=>t("div",{class:"form-item-tip"},"请上传机器人头像，建议尺寸为100*100px,大小不超过100KB",-1)),Oo={__name:"add-robot-alert",setup(r,{expose:$}){const b=J(),h=U.useForm,w={span:4},g={span:20},m=p(!1),_=p(!1),e=E({robot_name:"",robot_intro:"",robot_avatar:void 0,robot_avatar_url:""}),I=E({robot_name:[{required:!0,message:"请输入机器人名称",trigger:"change"},{min:1,max:20,message:"最多20个字",trigger:"change"}]}),{validate:l,validateInfos:a,clearValidate:v}=h(e,I),u=n=>{e.robot_avatar=n.file},M=()=>{let n={robot_name:e.robot_name,robot_intro:e.robot_intro,robot_avatar:e.robot_avatar||V};_.value=!0,no(n).then(i=>{if(_.value=!1,i.res!=0)return P.error(i.msg);P.success("机器人创建成功"),b.push("/robot/config/basic-config?id="+i.data.id)}).catch(()=>{_.value=!1})},L=async()=>{let n=await lo({model_type:"LLM"});return!n||n.data.length==0?(O.confirm({title:"请先添加LLM模型服务商?",icon:oo(Q,{style:{color:"red"}}),content:"机器人聊天基于LLM(大语言模型)，请先完成LLM服务商配置",onOk(){b.push("/user/model")},onCancel(){}}),!1):!0},o=async()=>{await L()&&(e.robot_avatar="",e.robot_avatar_url=V,e.robot_name="",e.robot_intro="",m.value=!0)},c=()=>{v()},x=()=>{l().then(()=>{M()}).catch(n=>{})};return $({open:o}),(n,i)=>{const q=io,R=co,z=po,W=U,H=O;return f(),T(H,{width:"746px",open:m.value,"onUpdate:open":i[3]||(i[3]=k=>m.value=k),confirmLoading:_.value,title:"新建机器人",onOk:x,onCancel:c},{default:d(()=>[t("div",Mo,[s(W,{"label-col":w,"wrapper-col":g},{default:d(()=>[s(R,F({ref:"name",label:"机器人名称"},C(a).robot_name),{default:d(()=>[s(q,{value:e.robot_name,"onUpdate:value":i[0]||(i[0]=k=>e.robot_name=k),placeholder:"请输入机器人名称"},null,8,["value"])]),_:1},16),s(R,F({label:"简介"},C(a).robot_intro),{default:d(()=>[s(z,{rows:4,value:e.robot_intro,"onUpdate:value":i[1]||(i[1]=k=>e.robot_intro=k),placeholder:"请输入机器人简介，比如ChatWiki产品帮助机器人，可以通过提问获取ChatWiki的使用帮助，比如如何创建机器人，如何新建知识库，如何添加模型等。"},null,8,["value"])]),_:1},16),s(R,F({ref:"name",label:"机器人头像"},C(a).robot_avatar_url),{default:d(()=>[s($o,{value:e.robot_avatar_url,"onUpdate:value":i[2]||(i[2]=k=>e.robot_avatar_url=k),onChange:u},null,8,["value"]),Po]),_:1},16)]),_:1})])]),_:1},8,["open","confirmLoading"])}}},Ro=j(Oo,[["__scopeId","data-v-c17833ff"]]),D=r=>(B("data-v-08843380"),r=r(),S(),r),Fo={class:"robot-page"},Ao=D(()=>t("div",{class:"top-banner"},[t("div",null," 1.可以创建多个不同的机器人，不同机器人应用在不同场景中，不同机器人可以关联不同的知识库 "),t("div",null," 2.您可以复制链接将机器人提供给您的用户使用。在对外提供服务之前，建议您进行充分测试，并适当调整知识库 ")],-1)),To={class:"list-box"},Uo={class:"list-item-wrapper"},jo=D(()=>t("span",{class:"add-text"},"新增机器人",-1)),Bo=["onClick"],So={class:"list-item"},Do=["onClick"],Vo={class:"robot-info"},Eo=["src"],Go={class:"robot-info-content"},No={class:"robot-name"},Jo={class:"robot-desc"},qo=["onClick"],zo=D(()=>t("div",{class:"robot-action-line"},null,-1)),Wo=["onClick"],Ho={__name:"robot-list",setup(r){const $=J(),b=p([]),h=()=>{so().then(l=>{b.value=l.data}).catch(()=>{})},w=p(null),g=()=>{w.value.open()},m=l=>{$.push({path:"/robot/config/basic-config",query:{id:l}})},_=l=>{let a=3,v=O.confirm({title:`删除机器人${l.robot_name}`,icon:s(X),content:"您确定要删除此机器人吗？",okText:a+" 确 定",okType:"danger",cancelText:"取 消",okButtonProps:{disabled:!0},onOk(){e(l)},onCancel(){}}),u=setInterval(()=>{a==1?(v.update({okText:"确 定",okButtonProps:{disabled:!1}}),clearInterval(u),u=void 0):(a-=1,v.update({okText:a+" 确 定",okButtonProps:{disabled:!0}}))},1e3)},e=({id:l})=>{ro({id:l}).then(()=>{P.success("删除成功"),h()})},I=l=>{window.open(`#/robot/test?robot_key=${l.robot_key}&id=${l.id}`)};return to(()=>{h()}),(l,a)=>{const v=fo,u=bo,M=go,L=Y;return f(),y("div",Fo,[Ao,t("div",To,[t("div",Uo,[t("div",{class:"list-item add-robot",onClick:g},[s(C(mo),{class:"add-icon"}),jo])]),(f(!0),y(eo,null,ao(b.value,o=>(f(),y("div",{class:"list-item-wrapper",key:o.id,onClick:c=>m(o.id)},[t("div",So,[t("span",{class:"item-action",onClick:a[1]||(a[1]=A(()=>{},["stop"]))},[s(M,null,{overlay:d(()=>[s(u,null,{default:d(()=>[s(v,null,{default:d(()=>[t("a",{class:"delete-text-color",href:"javascript:;",onClick:c=>_(o)},"删 除",8,Do)]),_:2},1024)]),_:2},1024)]),default:d(()=>[t("span",{class:"menu-btn",onClick:a[0]||(a[0]=A(()=>{},["stop"]))},[s(C(vo))])]),_:2},1024)]),t("div",Vo,[t("img",{class:"robot-avatar",src:o.robot_avatar,alt:""},null,8,Eo),t("div",Go,[t("div",No,G(o.robot_name),1),t("div",Jo,G(o.robot_intro),1)])]),t("div",{class:"robot-action",onClick:a[2]||(a[2]=A(()=>{},["stop"]))},[t("a",{class:"robot-action-item",href:"javascript:;",onClick:c=>m(o.id)},[s(L,{class:"action-icon",name:"jibenpeizhi"}),N(" 管理")],8,qo),zo,t("a",{class:"robot-action-item",onClick:c=>I(o)},[s(L,{class:"action-icon",name:"cmd"}),N(" 测试")],8,Wo)])])],8,Bo))),128))]),s(Ro,{ref_key:"addRobotAlertRef",ref:w},null,512)])}}},Lt=j(Ho,[["__scopeId","data-v-08843380"]]);export{Lt as default};