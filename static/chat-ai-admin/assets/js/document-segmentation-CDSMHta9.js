import{W as ye,ax as be,X as xe,S as ee,ay as ke,a1 as de,az as ie,a7 as ue,V as me,aA as we,_ as se,d as le,c as _e,M as X,E as ne,aB as $e,B as Se}from"../../index-3zhUo7yB.js";import{e as qe,b as W,r as S,w as Ce,j as n,F as Q,A as te,L as d,M as p,V as e,a2 as L,P as H,Q as g,a8 as U,a1 as Y,X as j,Y as E,a9 as ve,a3 as pe,a4 as fe,ag as Fe,E as Ie,U as oe,u as ae,a0 as Pe,$ as ze}from"./vue-chunks-BqR2sv6q.js";import{a as Te,b as je,e as Ee,f as Oe,s as Ne}from"./index-C_GzEAjs.js";import{u as Le,F as re,I as ge,_ as Ue}from"./Password-B44zxURS.js";import"./index-DD-RdiGP.js";import{_ as Ae}from"./index-HdjsShQ2.js";import{S as De,_ as Be}from"./index-iNvt8ZKo.js";import{_ as Qe}from"./index-o-WYMvpV.js";import{_ as Re}from"./index-BTnBzn0A.js";import{U as Ve}from"./index-BFCb0iDf.js";import{_ as Me,T as Ge}from"./index-pAgR-zzF.js";import{_ as Ke}from"./TextArea-DzoZEWPA.js";import{S as We}from"./index-vrWa0o1m.js";import"./dayjs-CuJbp_-a.js";import"./axios-Cm0UX6qg.js";import"./qs-B6vlU9Aj.js";import"./crypto-js-Dyh51M5x.js";import"./index-Ds1Q0oJ4.js";import"./collapseMotion-CZutXYv2.js";import"./inputProps-C4OjRA3_.js";import"./FormItemContext-BTP630fU.js";import"./slide-ZCl6ZFDX.js";import"./index-iH-Nu7mF.js";import"./isMobile-D_4OiXLP.js";import"./CheckOutlined-BEWUgocd.js";import"./DownOutlined-BGIGKQLl.js";import"./move-MIaOwSfN.js";import"./index-CEML8ldC.js";import"./index-DtZiJi1p.js";import"./useRefs-BBK5dDsO.js";import"./index-BRrao2Ax.js";import"./Dropdown-dAJ9ZCrS.js";import"./PlusOutlined-C0SjZwHg.js";const Je={small:8,middle:16,large:24},Xe=()=>({prefixCls:String,size:{type:[String,Number,Array]},direction:ue.oneOf(me("horizontal","vertical")).def("horizontal"),align:ue.oneOf(me("start","end","center","baseline")),wrap:we()});function He(r){return typeof r=="string"?Je[r]:r||0}const Z=qe({compatConfig:{MODE:3},name:"ASpace",inheritAttrs:!1,props:Xe(),slots:Object,setup(r,A){let{slots:q,attrs:m}=A;const{prefixCls:u,space:F,direction:s}=ye("space",r),[c,R]=be(u),D=Le(),I=W(()=>{var f,v,l;return(l=(f=r.size)!==null&&f!==void 0?f:(v=F==null?void 0:F.value)===null||v===void 0?void 0:v.size)!==null&&l!==void 0?l:"small"}),x=S(),k=S();Ce(I,()=>{[x.value,k.value]=(Array.isArray(I.value)?I.value:[I.value,I.value]).map(f=>He(f))},{immediate:!0});const P=W(()=>r.align===void 0&&r.direction==="horizontal"?"center":r.align),z=W(()=>xe(u.value,R.value,`${u.value}-${r.direction}`,{[`${u.value}-rtl`]:s.value==="rtl",[`${u.value}-align-${P.value}`]:P.value})),b=W(()=>s.value==="rtl"?"marginLeft":"marginRight"),i=W(()=>{const f={};return D.value&&(f.columnGap=`${x.value}px`,f.rowGap=`${k.value}px`),ee(ee({},f),r.wrap&&{flexWrap:"wrap",marginBottom:`${-k.value}px`})});return()=>{var f,v;const{wrap:l,direction:t="horizontal"}=r,O=(f=q.default)===null||f===void 0?void 0:f.call(q),w=ke(O),N=w.length;if(N===0)return null;const C=(v=q.split)===null||v===void 0?void 0:v.call(q),_=`${u.value}-item`,B=x.value,V=N-1;return n("div",de(de({},m),{},{class:[z.value,m.class],style:[i.value,m.style]}),[w.map((o,M)=>{let J=O.indexOf(o);J===-1&&(J=`$$space-${M}`);let a={};return D.value||(t==="vertical"?M<V&&(a={marginBottom:`${B/(C?2:1)}px`}):a=ee(ee({},M<V&&{[b.value]:`${B/(C?2:1)}px`}),l&&{paddingBottom:`${k.value}px`})),c(n(Q,{key:J},[n("div",{class:_,style:a},[o]),M<V&&C&&n("span",{class:`${_}-split`,style:a},[C])]))})])}}});Z.Compact=ie;Z.install=function(r){return r.component(Z.name,Z),r.component(ie.name,ie),r};const Ye=Z,h=r=>(pe("data-v-057c1203"),r=r(),fe(),r),Ze={class:"segmentation-setting"},et={class:"setting-items"},tt=h(()=>e("div",{class:"setting-item-info"},[e("div",{class:"setting-item-name"},"智能分段"),e("div",{class:"setting-item-desc"},"系统自动分段，推荐不了解分段规则时使用")],-1)),st={key:0,class:"setting-item-body"},nt=h(()=>e("div",{class:"sub-setting-item-name"},"文档类型",-1)),ot={class:"document-types"},at={class:"form-item"},it=h(()=>e("div",{class:"form-item-label"},"提取图片",-1)),lt={class:"form-item-body"},rt=h(()=>e("div",{class:"form-tip"},"开启提取图片功能，将自动从文档中提取图片，作为图片上方文本分段的附件。仅支持.docx文件和网页",-1)),ct=h(()=>e("div",{class:"sub-setting-item-name"},"文件切分",-1)),dt={key:0,class:"custom-setting-form excel-qa-form"},ut={class:"form-item"},mt=h(()=>e("div",{class:"form-item-label"},"问题所在列：",-1)),_t={class:"form-item-body"},vt={class:"form-item"},pt=h(()=>e("div",{class:"form-item-label"},"答案所在列：",-1)),ft={class:"form-item-body"},gt=h(()=>e("div",{class:"sub-setting-item-name"},"索引方式",-1)),ht={class:"indexing-methods-box"},yt={class:"list-title-block"},bt=h(()=>e("div",{class:"list-content"},"回答用户提问时，将用户提问与导入的问题和答案一起对比相似度，根据相似度高的问题和答案回复",-1)),xt={class:"list-title-block"},kt=h(()=>e("div",{class:"list-content"},"回答用户提问时，将用户提问与导入的问题一起对比相似度，再根据相似度高的问题和对应的答案来回复",-1)),wt={key:1,class:"custom-setting-form"},$t={class:"form-item"},St=h(()=>e("div",{class:"form-item-label"},"问题开始标识符：",-1)),qt={class:"form-item-body"},Ct={class:"form-item"},Ft=h(()=>e("div",{class:"form-item-label"},"答案开始标识符：",-1)),It={class:"form-item-body"},Pt=h(()=>e("div",{class:"sub-setting-item-name"},"索引方式",-1)),zt={class:"indexing-methods-box"},Tt={class:"list-title-block"},jt=h(()=>e("div",{class:"list-content"},"回答用户提问时，将用户提问与导入的问题和答案一起对比相似度，根据相似度高的问题和答案回复",-1)),Et={class:"list-title-block"},Ot=h(()=>e("div",{class:"list-content"},"回答用户提问时，将用户提问与导入的问题一起对比相似度，再根据相似度高的问题和对应的答案来回复",-1)),Nt=h(()=>e("div",{class:"setting-item-info"},[e("div",{class:"setting-item-name"},"自定义分段"),e("div",{class:"setting-item-desc"},"根据文档自行设置分段标识符、分段长度等")],-1)),Lt={key:0,class:"setting-item-body"},Ut={class:"custom-setting-form subsection-form"},At={class:"form-item",style:{"margin-bottom":"18px"}},Dt=h(()=>e("div",{class:"form-item-label"},"分段标识符：",-1)),Bt={class:"form-item-body"},Qt={class:"form-item"},Rt=h(()=>e("div",{class:"form-item-label"},"分段最大长度：",-1)),Vt={class:"form-item-body"},Mt=h(()=>e("span",{class:"unit-text"},"字符",-1)),Gt={class:"form-item"},Kt=h(()=>e("div",{class:"form-item-label"},"分段重叠长度：",-1)),Wt={class:"form-item-body"},Jt=h(()=>e("span",{class:"unit-text"},"字符",-1)),Xt={__name:"segmentation-setting",props:{mode:{type:Number,default:0},excellQaLists:{type:Array,default:()=>[]},libFileInfo:{type:Object,default:()=>{}}},emits:["change","validate"],setup(r,{emit:A}){const q=re.useForm,m=A,u=r,F=W(()=>u.libFileInfo.doc_type=="1"&&(u.libFileInfo.file_ext=="docx"||u.libFileInfo.file_ext=="html")),s=te({is_diy_split:0,separators_no:[],chunk_size:512,chunk_overlap:50,is_qa_doc:0,question_lable:"",answer_lable:"",question_column:void 0,answer_column:void 0,qa_index_type:1,enable_extract_image:!0}),c=te({question_lable:[{message:"请输入问题开始标识符",validator:async(l,t)=>s.is_diy_split==0&&s.is_qa_doc==1&&u.mode==0?t?Promise.resolve():Promise.reject("请输入问题开始标识符"):Promise.resolve()}],answer_lable:[{message:"请输入答案开始标识符",validator:async(l,t)=>s.is_diy_split==0&&s.is_qa_doc==1&&u.mode==0?t?Promise.resolve():Promise.reject("请输入答案开始标识符"):Promise.resolve()}],separators_no:[{message:"请选择分段标识符",validator:async(l,t)=>s.is_diy_split==1&&t.length==0?Promise.reject("请选择分段标识符"):Promise.resolve()}],chunk_size:[{validator:async(l,t)=>{if(s.is_diy_split==1){if(t){if(t>2e3)return Promise.reject("最大分段长最大值不得超过2000")}else return Promise.reject("请输入分段最大长度");return Promise.resolve()}return Promise.resolve()}}],chunk_overlap:[{validator:async(l,t)=>{if(s.is_diy_split==1){if(t){if(t<2)return Promise.reject("分段重叠长度最小不得低于2");if(t>parseInt(s.chunk_size/2))return Promise.reject("分段重叠长度最大不得超过最大分段长度的50%")}else return Promise.reject("请输入分段重叠长度");return Promise.resolve()}return Promise.resolve()}}],question_column:[{message:"请选择问题所在列",validator:async(l,t)=>u.mode==1&&s.is_qa_doc==1?t?Promise.resolve():Promise.reject("请选择问题所在列"):Promise.resolve()}],answer_column:[{message:"请选择答案所在列",validator:async(l,t)=>u.mode==1&&s.is_qa_doc==1?t?Promise.resolve():Promise.reject("请选择答案所在列"):Promise.resolve()}]}),{resetFields:R,validate:D,validateInfos:I}=q(s,c),x=l=>{s.is_diy_split=l,P(!1)},k=l=>{s.is_qa_doc=l,P(!1)},P=(l=!0)=>{let t=ve(s);D().then(()=>{m("change",{...t}),m("validate","")}).catch(O=>{const{errorFields:w}=O;if(w.length>0){l&&le.error(w[0].errors[0]),m("validate",w[0].errors[0]);return}m("validate",""),m("change",{...t})})};let z=null;const b=()=>{z&&(clearTimeout(z),z=null),z=setTimeout(()=>{P()},500)},i=S([]);(()=>{Te().then(l=>{i.value=l.data||[]})})();const v=l=>{l!=s.qa_index_type&&(s.qa_index_type=l,P())};return(l,t)=>{const O=Ae,w=Ye,N=De,C=Be,_=_e,B=ge,V=Qe;return d(),p("div",Ze,[e("div",et,[e("div",{class:L(["setting-item intelligent-setting",{active:s.is_diy_split==0}])},[e("div",{class:"setting-item-header",onClick:t[0]||(t[0]=o=>x(0))},[e("span",{class:L(["setting-item-icon intelligent-icon",{active:s.is_diy_split==0}])},null,2),tt]),s.is_diy_split==0?(d(),p("div",st,[nt,e("div",ot,[e("div",{class:L(["document-type",{active:s.is_qa_doc==0}]),onClick:t[1]||(t[1]=o=>k(0))}," 普通文档 ",2),e("div",{class:L(["document-type",{active:s.is_qa_doc==1}]),onClick:t[2]||(t[2]=o=>k(1))}," QA文档 ",2)]),F.value?(d(),H(w,{key:0,class:"custom-setting-form"},{default:g(()=>[e("div",at,[it,e("div",lt,[n(O,{onChange:P,checked:s.enable_extract_image,"onUpdate:checked":t[3]||(t[3]=o=>s.enable_extract_image=o)},null,8,["checked"]),rt])])]),_:1})):U("",!0),s.is_qa_doc==1?(d(),p(Q,{key:1},[ct,u.mode==1?(d(),p("div",dt,[e("div",ut,[mt,e("div",_t,[n(C,{value:s.question_column,"onUpdate:value":t[4]||(t[4]=o=>s.question_column=o),onChange:b,placeholder:"请选择列名",style:{width:"100%"}},{default:g(()=>[(d(!0),p(Q,null,Y(u.excellQaLists,o=>(d(),H(N,{value:o.value,key:o.value},{default:g(()=>[j(E(o.lable),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])])]),e("div",vt,[pt,e("div",ft,[n(C,{value:s.answer_column,"onUpdate:value":t[5]||(t[5]=o=>s.answer_column=o),onChange:b,placeholder:"请选择答案所在列",style:{width:"100%"}},{default:g(()=>[(d(!0),p(Q,null,Y(u.excellQaLists,o=>(d(),H(N,{value:o.value,key:o.value},{default:g(()=>[j(E(o.lable),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])])]),gt,e("div",ht,[e("div",{class:L(["list-item",{active:s.qa_index_type==1}]),onClick:t[6]||(t[6]=o=>v(1))},[n(_,{class:"check-icon",name:"check-arrow-filled"}),e("div",yt,[n(_,{name:"file-search"}),j(" 问题与答案一起生成索引 ")]),bt],2),e("div",{class:L(["list-item",{active:s.qa_index_type==2}]),onClick:t[7]||(t[7]=o=>v(2))},[n(_,{class:"check-icon",name:"check-arrow-filled"}),e("div",xt,[n(_,{name:"comment-search"}),j(" 仅对问题生成索引 ")]),kt],2)])])):(d(),p("div",wt,[n(w,{size:16},{default:g(()=>[e("div",$t,[St,e("div",qt,[n(B,{placeholder:"请输入标识符",value:s.question_lable,"onUpdate:value":t[8]||(t[8]=o=>s.question_lable=o),onChange:b},null,8,["value"])])]),e("div",Ct,[Ft,e("div",It,[n(B,{placeholder:"请输入标识符",value:s.answer_lable,"onUpdate:value":t[9]||(t[9]=o=>s.answer_lable=o),onChange:b},null,8,["value"])])])]),_:1}),Pt,e("div",zt,[e("div",{class:L(["list-item",{active:s.qa_index_type==1}]),onClick:t[10]||(t[10]=o=>v(1))},[n(_,{class:"check-icon",name:"check-arrow-filled"}),e("div",Tt,[n(_,{name:"file-search"}),j(" 问题与答案一起生成索引 ")]),jt],2),e("div",{class:L(["list-item",{active:s.qa_index_type==2}]),onClick:t[11]||(t[11]=o=>v(2))},[n(_,{class:"check-icon",name:"check-arrow-filled"}),e("div",Et,[n(_,{name:"comment-search"}),j(" 仅对问题生成索引 ")]),Ot],2)])]))],64)):U("",!0)])):U("",!0)],2),u.mode!=1?(d(),p("div",{key:0,class:L(["setting-item custom-setting",{active:s.is_diy_split==1}])},[e("div",{class:"setting-item-header",onClick:t[12]||(t[12]=o=>x(1))},[e("span",{class:L(["setting-item-icon custom-icon",{active:s.is_diy_split==1}])},null,2),Nt]),s.is_diy_split==1?(d(),p("div",Lt,[e("div",Ut,[e("div",At,[Dt,e("div",Bt,[n(C,{placeholder:"请选择",style:{width:"100%"},mode:"multiple",value:s.separators_no,"onUpdate:value":t[13]||(t[13]=o=>s.separators_no=o),onChange:b},{default:g(()=>[(d(!0),p(Q,null,Y(i.value,o=>(d(),H(N,{value:o.no,key:o.no},{default:g(()=>[j(E(o.name),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])])]),n(w,{size:16},{default:g(()=>[e("div",Qt,[Rt,e("div",Vt,[n(w,null,{default:g(()=>[n(V,{style:{width:"140px"},value:s.chunk_size,"onUpdate:value":t[14]||(t[14]=o=>s.chunk_size=o),placeholder:"分段最大长度",min:200,max:2e3,precision:0,formatter:o=>parseInt(o),parser:o=>parseInt(o),onChange:b},null,8,["value","formatter","parser"]),Mt]),_:1})])]),e("div",Gt,[Kt,e("div",Wt,[n(w,null,{default:g(()=>[n(V,{style:{width:"140px"},value:s.chunk_overlap,"onUpdate:value":t[15]||(t[15]=o=>s.chunk_overlap=o),placeholder:"分段重叠长度",min:2,formatter:o=>parseInt(o),parser:o=>parseInt(o),onChange:b},null,8,["value","formatter","parser"]),Jt]),_:1})])])]),_:1})])])):U("",!0)],2)):U("",!0)])])}}},Ht=se(Xt,[["__scopeId","data-v-057c1203"]]),Yt={class:"document-fragment"},Zt={class:"fragment-header"},es={class:"fragment-info"},ts={class:"fragment-number"},ss={key:0,class:"fragment-title"},ns={class:"fragment-content-lenght"},os={class:"fragment-action"},as={class:"fragment-content"},is={key:0,class:"fragment-content"},ls={key:1,class:"fragment-content"},rs={class:"fragment-img"},cs=["src"],ds={__name:"document-fragment",props:{number:{type:[Number,String]},total:{type:[Number,String]},title:{type:[Number,String]},content:{type:[Number,String]},question:{type:[Number,String]},answer:{type:[Number,String]},images:{type:[Array,String]}},emits:["edit","delete"],setup(r,{emit:A}){const q=A,m=r,u=()=>{q("edit")},F=()=>{q("delete")};return(s,c)=>{const R=Re,D=Fe("viewer");return d(),p("div",Yt,[e("div",Zt,[e("div",es,[e("span",ts,"#"+E(m.number),1),m.title?(d(),p("span",ss,E(m.title),1)):U("",!0),e("span",ns,"共"+E(m.total)+"个字符",1)]),e("div",os,[e("a",{onClick:u},"编辑"),n(R,{type:"vertical"}),e("a",{onClick:F},"删除")])]),e("div",as,E(m.content),1),m.question?(d(),p("div",is,"Q："+E(m.question),1)):U("",!0),m.answer?(d(),p("div",ls,"A："+E(m.answer),1)):U("",!0),Ie((d(),p("div",rs,[(d(!0),p(Q,null,Y(m.images,(I,x)=>(d(),p("img",{key:x,src:I,alt:""},null,8,cs))),128))])),[[D]])])}}},us=se(ds,[["__scopeId","data-v-3a2afee8"]]),ms={class:"upload-box-wrapper"},_s={key:0},vs={__name:"edit-fragment-alert",emits:["ok"],setup(r,{expose:A,emit:q}){const m=q,u=S("1"),F=re.useForm,s=S(!1),c=te({title:"",content:"",question:"",answer:"",images:[]}),R=te({content:[{message:"请输入分段内容",validator:async(b,i)=>k.value||i?Promise.resolve():Promise.reject("请输入分段内容")}],question:[{message:"请输入分段问题",validator:async(b,i)=>k.value?i?Promise.resolve():Promise.reject("请输入分段问题"):Promise.resolve()}],answer:[{message:"请输入分段答案",validator:async(b,i)=>k.value?i?Promise.resolve():Promise.reject("请输入分段答案"):Promise.resolve()}]}),{resetFields:D,validate:I,validateInfos:x}=F(c,R),k=S(!1),P=({title:b,content:i,question:f,answer:v,images:l})=>{c.title=b,c.content=i,c.question=f,c.answer=v,c.images=l||[],k.value=f!="",s.value=!0},z=()=>{I().then(()=>{s.value=!1,m("ok",ve(c))})};return A({open:P}),(b,i)=>{const f=ge,v=Ue,l=Ke,t=_e,O=Me,w=Ge,N=re,C=X;return d(),p("div",null,[n(C,{open:s.value,"onUpdate:open":i[6]||(i[6]=_=>s.value=_),title:"编辑分段",onOk:z,width:"746px"},{default:g(()=>[n(N,{layout:"vertical"},{default:g(()=>[n(v,{label:"分段标题："},{default:g(()=>[n(f,{type:"text",placeholder:"请输入分段标题",value:c.title,"onUpdate:value":i[0]||(i[0]=_=>c.title=_)},null,8,["value"])]),_:1}),k.value?(d(),p(Q,{key:0},[n(v,oe({label:"分段问题："},ae(x).question),{default:g(()=>[n(l,{placeholder:"请输入分段问题",value:c.question,"onUpdate:value":i[1]||(i[1]=_=>c.question=_),style:{height:"100px"}},null,8,["value"])]),_:1},16),n(v,oe({label:"分段答案："},ae(x).answer),{default:g(()=>[n(l,{placeholder:"请输入分段答案",value:c.answer,"onUpdate:value":i[2]||(i[2]=_=>c.answer=_),style:{height:"140px"}},null,8,["value"])]),_:1},16)],64)):(d(),H(v,oe({key:1,label:"分段内容："},ae(x).content),{default:g(()=>[n(l,{placeholder:"请输入分段内容",value:c.content,"onUpdate:value":i[3]||(i[3]=_=>c.content=_),style:{height:"150px"}},null,8,["value"])]),_:1},16)),n(v,{label:"附件"},{default:g(()=>[e("div",ms,[n(w,{activeKey:u.value,"onUpdate:activeKey":i[4]||(i[4]=_=>u.value=_),size:"small"},{default:g(()=>[n(O,{key:"1"},{tab:g(()=>[e("span",null,[n(t,{name:"img-icon",style:{"font-size":"14px",color:"#2475fc"}}),j(" 图片 "),c.images.length?(d(),p("span",_s,"("+E(c.images.length)+")",1)):U("",!0)])]),_:1})]),_:1},8,["activeKey"]),n(Ve,{value:c.images,"onUpdate:value":i[5]||(i[5]=_=>c.images=_)},null,8,["value"])])]),_:1})]),_:1})]),_:1},8,["open"])])}}},ps=se(vs,[["__scopeId","data-v-6df5439f"]]),fs=r=>(pe("data-v-880d558e"),r=r(),fe(),r),gs={key:0,class:"loading-wrap"},hs={class:"document-segmentation"},ys={class:"page-container"},bs={class:"page-left"},xs={class:"page-right"},ks={class:"document-fragment-preview"},ws={class:"preview-header"},$s=fs(()=>e("span",{class:"label-text"},"分段预览",-1)),Ss={class:"fragment-number"},qs={class:"footer-btn-box"},Cs={__name:"document-segmentation",setup(r){const A=Pe(),q=ze(),{document_id:m}=A.query,u=S(!0),F=S(1);let s=!1,c={id:m,is_diy_split:0,separators_no:"",chunk_size:512,chunk_overlap:50,is_qa_doc:0,question_lable:"",answer_lable:"",enable_extract_image:!0};const R=a=>{a.is_diy_split==1&&(a.is_qa_doc=0),typeof a.separators_no=="object"&&(a.separators_no=a.separators_no.join(",")),c={...c,...a},s?X.confirm({title:"提醒",icon:n(ne),content:"文档片段已被编辑重新获取文档片段会丢失当前修改过的文档片段内容，确定要重新获取吗？",okText:"确定",okType:"danger",cancelText:"取消",onOk(){s=!1,v()},onCancel(){}}):(s=!1,v())};let D=60*10,I=0,x=null;const k=S({}),P=()=>{u.value||(u.value=!0),je({id:m}).then(a=>{const{status:y}=a.data;if(k.value=a.data,y==0){if(I++,I>D){X.error({title:"提醒",content:"文档解析速度慢请稍后再试"});return}setTimeout(()=>{P()},1e3)}else y==4?(u.value=!1,F.value=parseInt(a.data.is_table_file),x=a.data.library_id,v()):q.replace("/library/details?id="+a.data.library_id);a.data.is_table_file==1&&b()})};P();const z=S([]),b=()=>{Ee({id:m}).then(a=>{let y=[];for(let $ in a.data)y.push({lable:a.data[$],value:$});z.value=y})},i=S([]),f=S(0),v=()=>{Oe(c).then(a=>{i.value=a.data.list||[],f.value=a.data.list.length||0})},l=S(null);let t=null;const O=({title:a,content:y,question:$,answer:G,images:K},T)=>{t=T,l.value.open({title:a,content:y,question:$,answer:G,images:K})},w=({title:a,content:y,question:$,answer:G,images:K})=>{(i.value[t].title!=a||i.value[t].content!=y||i.value[t].question!=$||i.value[t].answer!=G)&&(s=!0),i.value[t].title=a,i.value[t].content=y,i.value[t].question=$,i.value[t].answer=G,i.value[t].images=K,i.value[t].word_total=G.length+$.length+y.length},N=a=>{X.confirm({title:"提醒",icon:n(ne),content:"确定要删除这个片段吗?",okText:"确定",okType:"danger",cancelText:"取消",onOk(){s=!0,i.value.splice(a,1)},onCancel(){}})},C=S(""),_=a=>{C.value=a},B=S(!1),V=()=>{if(C.value)return le.error(C.value);let a={...c,is_table_file:F.value};delete a.id;let y={id:m,word_total:f.value,split_params:JSON.stringify(a),list:JSON.stringify(i.value)};a.is_qa_doc==1&&(y.qa_index_type=a.qa_index_type),B.value=!0,Ne(y).then(()=>{le.success("保存成功"),q.replace("/library/details?id="+x)}).finally(()=>{B.value=!1}).catch($=>{$.data&&$.data.index&&J($.data.index)})},o=()=>{X.confirm({title:"确定要退出吗?",icon:n(ne),content:"",okText:"确定",okType:"danger",cancelText:"取消",onOk(){q.replace("/library/details?id="+x)},onCancel(){}})},M=S(null),J=a=>{a=a-1;let y=M.value.querySelectorAll(".fragment-item");y.length>=a&&y[a].scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})};return(a,y)=>{const $=We,G=$e,K=Se;return d(),p(Q,null,[u.value?(d(),p("div",gs,[n($)])):U("",!0),e("div",hs,[n(G,null,{default:g(()=>[j("文档分段与清洗")]),_:1}),e("div",ys,[e("div",bs,[n(Ht,{excellQaLists:z.value,libFileInfo:k.value,mode:F.value,onChange:R,onValidate:_},null,8,["excellQaLists","libFileInfo","mode"])]),e("div",xs,[e("div",ks,[e("div",ws,[$s,e("span",Ss,"共"+E(f.value)+"个分段",1)]),e("div",{class:"preview-box",ref_key:"previewBoxRef",ref:M},[(d(!0),p(Q,null,Y(i.value,(T,ce)=>(d(),p("div",{class:"fragment-item",key:T.number},[n(us,{number:T.number,title:T.title,content:T.content,total:T.word_total,question:T.question,answer:T.answer,images:T.images,onDelete:he=>N(ce),onEdit:he=>O(T,ce)},null,8,["number","title","content","total","question","answer","images","onDelete","onEdit"])]))),128))],512)])])]),e("div",qs,[n(K,{onClick:o},{default:g(()=>[j("取消")]),_:1}),n(K,{type:"primary",loading:B.value,onClick:V},{default:g(()=>[j("保存")]),_:1},8,["loading"])]),n(ps,{ref_key:"editFragmentAlertRef",ref:l,onOk:w},null,512)])],64)}}},rn=se(Cs,[["__scopeId","data-v-880d558e"]]);export{rn as default};
