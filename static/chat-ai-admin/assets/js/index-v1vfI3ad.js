import{_ as z,b as fe,L as ge,d as G,M as N,l as te,m as he,r as ke,a as we,n as ye,o as ae,E as se,p as be,B as oe,q as Ce,t as xe,v as Ae,w as Ue}from"../../index.js";import{e as w,M as v,N as M,F as K,a2 as X,a3 as Se,Z as b,u as x,w as Oe,k as t,S as a,Q as D,W as f,a4 as ne,a5 as le,B as R,V as E,Y as I,a9 as j,aa as re,a7 as Pe,b as Be}from"./vue-chunks-Chs-lyDX.js";import{v as ue}from"./validate-xCEgzF0A.js";import{F as T,_ as W}from"./index-VeYSCPCu.js";import{P as $}from"./PlusOutlined-BUnPSW1-.js";import{_ as Ie}from"./index-DHBKO1se.js";import{_ as ie}from"./index-9H-48H6s.js";import{I as de,_ as ce}from"./Password-cmG-BlhH.js";import{S as Me,_ as Le}from"./index-MD3V6K2I.js";import{_ as J}from"./index-CXtWJzyp.js";import{_ as pe,a as _e}from"./index-DP_X7UEl.js";import{_ as Fe}from"./TextArea-DvaABMYL.js";import{C as De,_ as Ee}from"./index-DdoCKw3y.js";import{_ as Re,a as ze}from"./index-DLoJwMpp.js";import"./dayjs-CkLU8sYs.js";import"./axios-Cm0UX6qg.js";import"./qs-DjYKlG5V.js";import"./crypto-js-BUUKnz8c.js";import"./index-DBNqHYGh.js";import"./Col-CvDsueo7.js";import"./collapseMotion-DN2MDQ98.js";import"./QuestionCircleOutlined-B0hVewZq.js";import"./inputProps-DYO7gEw-.js";import"./CheckOutlined-D4HtVfaw.js";import"./slide-CP07UJ8x.js";import"./index-CwZHIw9t.js";import"./DownOutlined-DRniQ56W.js";import"./move-DwQ0mPkQ.js";import"./index-B8boHKw3.js";import"./LeftOutlined-DnP_dahC.js";import"./RightOutlined-BSM_93j-.js";import"./index-Bz3n5ObF.js";import"./dropdown-T3bZiTSp.js";import"./index-C9DKKAWk.js";import"./index-B7-ex2lw.js";const Ge={class:"page-tabs"},Te=["onClick"],Ne={__name:"page-tabs",props:{value:{type:[Number,String]}},emits:["update:value","change"],setup(O,{emit:p}){const{t:A}=fe(),_=p,P=O,i=w([{value:1,title:A("views.user.model.teamMembers"),langKey:"views.user.model.teamMembers"},{value:0,title:A("views.user.model.rolePermissions"),langKey:"views.user.model.rolePermissions"}]),h=e=>{_("update:value",e),_("change",e)};return(e,S)=>(v(),M("div",Ge,[(v(!0),M(K,null,X(i.value,U=>(v(),M("div",{class:Se(["tab-item",{active:P.value==U.value}]),onClick:g=>h(U.value),key:U.value},b(x(A)(U.langKey)),11,Te))),128))]))}},He=z(Ne,[["__scopeId","data-v-e344f7b9"]]),qe=O=>(ne("data-v-c21fed10"),O=O(),le(),O),Ke={class:"avatar-uploader"},Xe=["src"],Ze={key:1},Ve=qe(()=>f("div",{class:"ant-upload-text"},"上传照片",-1)),Ye=["src"],je={__name:"avatar-input",props:{value:{type:String,default:""}},emits:["update:value","change"],setup(O,{emit:p}){function A(l){return new Promise((r,u)=>{const o=new FileReader;o.readAsDataURL(l),o.onload=()=>r(o.result),o.onerror=c=>u(c)})}const _=p,P=O,i=w([]),h=w(!1),e=w("");Oe(()=>P.value,l=>{e.value=l},{immediate:!0});const S=T.useInjectFormItemContext(),U=()=>{let l={imageUrl:e.value,file:i.value[0].originFileObj};_("change",l),_("update:value",l.imageUrl),S.onFieldChange()},g=l=>l.type==="image/jpeg"||l.type==="image/png"?l.size/1024<1024?(i.value=[l],A(l).then(o=>{e.value=o,h.value=!1,U()}),!1):(G.error("成员头像图片大小不能超过1M"),!1):(G.error("机器人头像只支持JPG、PNG格式的图片"),!1),s=w(!1),B=w(""),C=w(""),m=()=>{s.value=!1,C.value=""},d=async l=>{!l.url&&!l.preview&&(l.preview=await A(l.originFileObj)),B.value=l.url||l.preview,s.value=!0,C.value=l.name||l.url.substring(l.url.lastIndexOf("/")+1)};return(l,r)=>{const u=Ie,o=N;return v(),M("div",Ke,[t(u,{"file-list":i.value,"onUpdate:fileList":r[0]||(r[0]=c=>i.value=c),"list-type":"picture-card","show-upload-list":!1,"before-upload":g,accept:".jpg,.png,.jpeg",onPreview:d},{default:a(()=>[e.value?(v(),M("img",{key:0,class:"avatar",src:e.value,alt:"avatar"},null,8,Xe)):(v(),M("div",Ze,[h.value?(v(),D(x(ge),{key:0})):(v(),D(x($),{key:1})),Ve]))]),_:1},8,["file-list"]),t(o,{open:s.value,title:C.value,footer:null,onCancel:m},{default:a(()=>[f("img",{alt:"example",style:{width:"100%"},src:B.value},null,8,Ye)]),_:1},8,["open","title"])])}}},Qe=z(je,[["__scopeId","data-v-c21fed10"]]),Q="data:image/png;base64,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",We={class:"form-box"},$e={__name:"add-team-members",emits:["ok"],setup(O,{expose:p,emit:A}){const _=A,P=T.useForm,i=w(!1),h=w("添加团队成员"),e=R({user_name:"",nick_name:"",avatar:"",avatar_url:"",user_roles:"3",password:"",check_password:"",id:""}),S=u=>{e.avatar=u.file},U=w([]);te({page:1,size:200,search:""}).then(u=>{let o=u.data.list||[];U.value=o.filter(c=>c.id!="1")});const g=R({user_name:[{message:"请输入登录账号",required:!0},{validator:async(u,o)=>!/^[a-zA-Z0-9_.-]+$/.test(o)&&o?Promise.reject("账号只能为字母、数字、“-”、“_”,“.”的组合"):Promise.resolve()}],nick_name:[{message:"请输入昵称",required:!0}],avatar_url:[{message:"请上传头像",required:!0}],user_roles:[{message:"请选择成员角色",required:!0}],password:[{message:"请输入登录密码",required:!0},{validator:async(u,o)=>!ue(o)&&o?Promise.reject("密码必须包含字母、数字或者字符中的两种，6-32位"):Promise.resolve()}],check_password:[{message:"请输入确认密码",required:!0},{validator:async(u,o)=>o!=e.password&&o?Promise.reject("两次输入的密码不一致"):Promise.resolve()}]}),{resetFields:s,validate:B,validateInfos:C}=P(e,g),m=()=>{h.value="添加团队成员",i.value=!0,s(),e.user_name="",e.nick_name="",e.avatar="",e.avatar_url=Q,e.user_roles="3",e.password="",e.check_password="",e.id=""},d=u=>{h.value="编辑团队成员",e.user_name=u.user_name,e.nick_name=u.nick_name,e.avatar_url=u.avatar||Q,e.avatar="",e.user_roles=u.user_roles,e.password="",e.check_password="",e.id=u.id,delete g.password,delete g.check_password,i.value=!0},l=w(!1),r=()=>{B().then(()=>{let u={...re(e)};delete u.avatar_url,l.value=!0,he(u).then(o=>{G.success(`${h.value}成功`),i.value=!1,_("ok")}).finally(()=>{l.value=!1})})};return p({add:m,edit:d}),(u,o)=>{const c=de,n=W,L=Me,F=Le,Z=ce,H=T,q=N;return v(),M("div",null,[t(q,{open:i.value,"onUpdate:open":o[6]||(o[6]=y=>i.value=y),title:h.value,onOk:r,width:"476px"},{default:a(()=>[f("div",We,[t(H,{layout:"vertical"},{default:a(()=>[t(n,E({label:"登录账号"},x(C).user_name),{default:a(()=>[t(c,{disabled:e.id!="",type:"text",placeholder:"账号只能为字母、数字、“-”、“_”,“.”的组合",value:e.user_name,"onUpdate:value":o[0]||(o[0]=y=>e.user_name=y)},null,8,["disabled","value"])]),_:1},16),t(n,E({label:"成员昵称"},x(C).nick_name),{default:a(()=>[t(c,{maxlength:100,type:"text",placeholder:"请输入昵称",value:e.nick_name,"onUpdate:value":o[1]||(o[1]=y=>e.nick_name=y)},null,8,["value"])]),_:1},16),t(n,{label:"成员头像"},{default:a(()=>[t(Qe,{value:e.avatar_url,"onUpdate:value":o[2]||(o[2]=y=>e.avatar_url=y),onChange:S},null,8,["value"])]),_:1}),t(n,E({label:"成员角色"},x(C).user_roles),{default:a(()=>[t(F,{value:e.user_roles,"onUpdate:value":o[3]||(o[3]=y=>e.user_roles=y),style:{width:"100%"},placeholder:"请选择成员角色"},{default:a(()=>[(v(!0),M(K,null,X(U.value,y=>(v(),D(L,{key:y.id,value:y.id},{default:a(()=>[I(b(y.name),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1},16),e.id?j("",!0):(v(),D(n,E({key:0,label:"登录密码"},x(C).password),{default:a(()=>[t(Z,{value:e.password,"onUpdate:value":o[4]||(o[4]=y=>e.password=y),placeholder:"密码必须包含字母、数字或者字符中的两种，6-32位"},null,8,["value"])]),_:1},16)),e.id?j("",!0):(v(),D(n,E({key:1,label:"确认密码"},x(C).check_password),{default:a(()=>[t(Z,{value:e.check_password,"onUpdate:value":o[5]||(o[5]=y=>e.check_password=y),placeholder:"请重新输入密码"},null,8,["value"])]),_:1},16))]),_:1})])]),_:1},8,["open","title"])])}}},Je=z($e,[["__scopeId","data-v-9931da5a"]]),et={class:"form-box"},tt={__name:"reset-password",emits:["ok"],setup(O,{expose:p,emit:A}){const _=A,P=T.useForm,i=w(!1),h=w("重置登录密码"),e=R({password:"",check_password:"",id:""}),S=R({password:[{message:"请输入登录密码",required:!0},{validator:async(m,d)=>!ue(d)&&d?Promise.reject("密码必须包含字母、数字或者字符中的两种，6-32位"):Promise.resolve()}],check_password:[{message:"请输入确认密码",required:!0},{validator:async(m,d)=>d!=e.password&&d?Promise.reject("两次输入的密码不一致"):Promise.resolve()}]}),{resetFields:U,validate:g,validateInfos:s}=P(e,S),B=m=>{m.id,i.value=!0,U(),e.password="",e.check_password="",e.id=m.id},C=()=>{g().then(()=>{ke({...re(e)}).then(m=>{G.success("修改成功"),i.value=!1,_("ok")})})};return p({open:B}),(m,d)=>{const l=ce,r=W,u=T,o=N;return v(),M("div",null,[t(o,{open:i.value,"onUpdate:open":d[2]||(d[2]=c=>i.value=c),title:h.value,onOk:C,width:"476px"},{default:a(()=>[f("div",et,[t(u,{layout:"vertical"},{default:a(()=>[t(r,E({label:"登录密码"},x(s).password),{default:a(()=>[t(l,{value:e.password,"onUpdate:value":d[0]||(d[0]=c=>e.password=c),placeholder:"密码必须包含字母、数字或者字符中的两种，6-32位"},null,8,["value"])]),_:1},16),t(r,E({label:"确认密码"},x(s).check_password),{default:a(()=>[t(l,{value:e.check_password,"onUpdate:value":d[1]||(d[1]=c=>e.check_password=c),placeholder:"请重新输入密码"},null,8,["value"])]),_:1},16)]),_:1})])]),_:1},8,["open","title"])])}}},at=z(tt,[["__scopeId","data-v-d0706fa4"]]),st={class:"team-members-pages"},ot={class:"list-box"},nt={class:"user-box"},lt=["src"],rt={class:"name-info"},ut={class:"user-name"},it={class:"nick-name"},dt=["onClick"],ct=["onClick"],pt=["onClick"],_t={__name:"team-members",setup(O){const p=we(),{userInfo:A}=Pe(p);Be(()=>A.value.user_roles);const _=R({page:1,size:10,total:0,search:""}),P=m=>{_.page=m.current,_.size=m.pageSize,e()},i=()=>{_.page=1,e()},h=w([]),e=()=>{let m={page:_.page,size:_.size,search:_.search};ye(m).then(d=>{let l=d.data.list;l.forEach(r=>{r.login_time=r.login_time>0?ae(r.login_time*1e3).format("YYYY-MM-DD HH:mm"):"--"}),h.value=l,_.total=+d.data.total})};i();const S=w(null),U=()=>{S.value.add()},g=m=>{S.value.edit(m)},s=w(null),B=m=>{s.value.open(m)},C=m=>{N.confirm({title:"提示?",icon:t(se),content:"确认删除该用户",okText:"确认",okType:"danger",cancelText:"取消",onOk:()=>{be({id:m.id}).then(d=>{G.success("删除成功"),e()})},onCancel(){}})};return(m,d)=>{const l=oe,r=ie,u=J,o=pe,c=_e;return v(),M("div",st,[t(u,{justify:"space-between"},{default:a(()=>[t(l,{type:"primary",onClick:U},{icon:a(()=>[t(x($))]),default:a(()=>[I(" 添加团队成员 ")]),_:1}),t(r,{value:_.search,"onUpdate:value":d[0]||(d[0]=n=>_.search=n),placeholder:"输入成员账号或昵称搜索",style:{width:"288px"},onSearch:i},null,8,["value"])]),_:1}),f("div",ot,[t(c,{"data-source":h.value,pagination:{current:_.page,total:_.total,pageSize:_.size,showQuickJumper:!0,showSizeChanger:!0,pageSizeOptions:["10","20","50","100"]},onChange:P},{default:a(()=>[t(o,{title:"姓名","data-index":"user_name",width:"340px"},{default:a(({record:n})=>[f("div",nt,[f("img",{src:n.avatar||x(Q),alt:""},null,8,lt),f("div",rt,[f("div",ut,b(n.user_name),1),f("div",it,b(n.nick_name),1)])])]),_:1}),t(o,{title:"角色","data-index":"user_roles",width:"190px"},{default:a(({record:n})=>[I(b(n.role),1)]),_:1}),t(o,{title:"最近登录时间","data-index":"login_time",width:"190px"},{default:a(({record:n})=>[I(b(n.login_time),1)]),_:1}),t(o,{title:"最近登录IP","data-index":"IP",width:"190px"},{default:a(({record:n})=>[I(b(n.login_ip),1)]),_:1}),t(o,{title:"操作","data-index":"action",width:"178px"},{default:a(({record:n})=>[n.user_roles!=1?(v(),D(u,{key:0,gap:16},{default:a(()=>[f("a",{onClick:L=>g(n)},"编辑",8,dt),f("a",{onClick:L=>B(n)},"重置密码",8,ct),f("a",{onClick:L=>C(n)},"移除",8,pt)]),_:2},1024)):j("",!0)]),_:1})]),_:1},8,["data-source","pagination"])]),t(Je,{ref_key:"addTeamMembersRef",ref:S,onOk:e},null,512),t(at,{ref_key:"resetPasswordRef",ref:s,onOk:e},null,512)])}}},mt=z(_t,[["__scopeId","data-v-6e296833"]]),ee=O=>(ne("data-v-4cb29cfa"),O=O(),le(),O),vt={class:"form-box"},ft={class:"role-check-box"},gt=ee(()=>f("div",{class:"title-row"},"机器人管理",-1)),ht={class:"check-num"},kt={class:"role-check-box"},wt=ee(()=>f("div",{class:"title-row"},"知识库管理",-1)),yt={class:"check-num"},bt={class:"role-check-box"},Ct=ee(()=>f("div",{class:"title-row"},"系统设置",-1)),xt={class:"check-num"},At={__name:"add-role",emits:["ok"],setup(O,{expose:p,emit:A}){const _=A,P=T.useForm;let i=[],h=[],e=[];Ce().then(c=>{i=[{label:c.data[1].name,value:c.data[1].uni_key}],h=[{label:c.data[2].name,value:c.data[2].uni_key}],e=[{label:c.data[3].name,value:c.data[3].uni_key}]});const S=w(!1),U=w("添加角色"),g=w(""),s=R({name:"",mark:"",robotChecked:[],libraryChecked:[],systemChecked:[],role_type:""}),B=R({name:[{message:"请输入角色名称",required:!0}]}),{resetFields:C,validate:m,validateInfos:d}=P(s,B),l=()=>{U.value="添加角色",g.value="",S.value=!0,s.name="",s.mark="",C()},r=c=>{U.value="编辑角色",g.value=c.id,xe({id:c.id}).then(n=>{let L=n.data,F=L.role_permission||[];s.name=L.name,s.mark=L.mark,s.role_type=L.role_type,s.robotChecked=u(i,F),s.libraryChecked=u(h,F),s.systemChecked=u(e,F),S.value=!0})},u=(c,n)=>{let L=[];return c.forEach(F=>{n.includes(F.value)&&L.push(F.value)}),L},o=()=>{m().then(()=>{let c=[...s.robotChecked,...s.libraryChecked,...s.systemChecked],n={id:g.value,name:s.name,mark:s.mark,role_type:s.role_type,uni_keys:c.join(",")};Ae(n).then(L=>{S.value=!1,G.success("保存成功"),_("ok")})})};return p({add:l,edit:r}),(c,n)=>{const L=de,F=W,Z=Fe,H=J,q=De,y=Re,V=ze,Y=Ee,me=T,ve=N;return v(),M("div",null,[t(ve,{open:S.value,"onUpdate:open":n[5]||(n[5]=k=>S.value=k),title:U.value,onOk:o,width:"746px"},{default:a(()=>[f("div",vt,[t(me,{layout:"vertical"},{default:a(()=>[t(F,E({label:"角色名称"},x(d).name),{default:a(()=>[t(L,{type:"text",maxlength:100,placeholder:"请输入角色名称",value:s.name,"onUpdate:value":n[0]||(n[0]=k=>s.name=k)},null,8,["value"])]),_:1},16),t(F,{label:"角色备注"},{default:a(()=>[t(Z,{value:s.mark,"onUpdate:value":n[1]||(n[1]=k=>s.mark=k),placeholder:"请输入知识库介绍"},null,8,["value"])]),_:1}),t(F,{label:"角色权限"},{default:a(()=>[f("div",ft,[t(H,{class:"title-boock",justify:"space-between"},{default:a(()=>[gt,f("div",ht,b(s.robotChecked.length)+"/"+b(x(i).length),1)]),_:1}),t(Y,{value:s.robotChecked,"onUpdate:value":n[2]||(n[2]=k=>s.robotChecked=k),style:{width:"100%"}},{default:a(()=>[t(V,{gutter:[0,12]},{default:a(()=>[(v(!0),M(K,null,X(x(i),k=>(v(),D(y,{span:6,key:k.value},{default:a(()=>[t(q,{value:k.value},{default:a(()=>[I(b(k.label),1)]),_:2},1032,["value"])]),_:2},1024))),128))]),_:1})]),_:1},8,["value"])]),f("div",kt,[t(H,{class:"title-boock",justify:"space-between"},{default:a(()=>[wt,f("div",yt,b(s.libraryChecked.length)+"/"+b(x(h).length),1)]),_:1}),t(Y,{value:s.libraryChecked,"onUpdate:value":n[3]||(n[3]=k=>s.libraryChecked=k),style:{width:"100%"}},{default:a(()=>[t(V,{gutter:[0,12]},{default:a(()=>[(v(!0),M(K,null,X(x(h),k=>(v(),D(y,{span:6,key:k.value},{default:a(()=>[t(q,{value:k.value},{default:a(()=>[I(b(k.label),1)]),_:2},1032,["value"])]),_:2},1024))),128))]),_:1})]),_:1},8,["value"])]),f("div",bt,[t(H,{class:"title-boock",justify:"space-between"},{default:a(()=>[Ct,f("div",xt,b(s.systemChecked.length)+"/"+b(x(e).length),1)]),_:1}),t(Y,{value:s.systemChecked,"onUpdate:value":n[4]||(n[4]=k=>s.systemChecked=k),style:{width:"100%"}},{default:a(()=>[t(V,{gutter:[0,12]},{default:a(()=>[(v(!0),M(K,null,X(x(e),k=>(v(),D(y,{span:6,key:k.value},{default:a(()=>[t(q,{value:k.value},{default:a(()=>[I(b(k.label),1)]),_:2},1032,["value"])]),_:2},1024))),128))]),_:1})]),_:1},8,["value"])])]),_:1})]),_:1})])]),_:1},8,["open","title"])])}}},Ut=z(At,[["__scopeId","data-v-4cb29cfa"]]),St={class:"team-members-pages"},Ot={class:"list-box"},Pt={__name:"role-permissions",setup(O){w("");const p=R({page:1,size:10,total:0,search:""}),A=w([{}]),_=g=>{p.page=g.current,p.size=g.pageSize,i()},P=()=>{p.page=1,i()},i=()=>{let g={page:p.page,size:p.size,search:p.search};te(g).then(s=>{let B=s.data.list;B.forEach(C=>{C.update_time=ae(C.update_time*1e3).format("YYYY-MM-DD HH:mm")}),A.value=B,p.total=+s.data.total})};P();const h=w(null),e=()=>{h.value.add()},S=g=>{h.value.edit(g)},U=g=>{N.confirm({title:"提示?",icon:t(se),content:"确认删除该角色",okText:"确认",okType:"danger",cancelText:"取消",onOk:()=>{Ue({id:g.id}).then(s=>{G.success("删除成功"),i()})},onCancel(){}})};return(g,s)=>{const B=oe,C=ie,m=J,d=pe,l=_e;return v(),M("div",St,[t(m,{justify:"space-between"},{default:a(()=>[t(B,{type:"primary",onClick:e},{icon:a(()=>[t(x($))]),default:a(()=>[I(" 添加角色 ")]),_:1}),t(C,{value:p.search,"onUpdate:value":s[0]||(s[0]=r=>p.search=r),placeholder:"输入角色名称",style:{width:"288px"},onSearch:P},null,8,["value"])]),_:1}),f("div",Ot,[t(l,{"data-source":A.value,pagination:{current:p.page,total:p.total,pageSize:p.size,showQuickJumper:!0,showSizeChanger:!0,pageSizeOptions:["10","20","50","100"]},onChange:_},{default:a(()=>[t(d,{title:"角色","data-index":"name",width:"157px"},{default:a(({record:r})=>[I(b(r.name),1)]),_:1}),t(d,{title:"备注","data-index":"mark",width:"480px"},{default:a(({record:r})=>[I(b(r.mark),1)]),_:1}),t(d,{title:"最近修改时间","data-index":"update_time",width:"130px"},{default:a(({record:r})=>[I(b(r.update_time),1)]),_:1}),t(d,{title:"最近修改人","data-index":"operate_name",width:"130px"},{default:a(({record:r})=>[I(b(r.operate_name),1)]),_:1}),t(d,{title:"创建人","data-index":"create_name",width:"130px"},{default:a(({record:r})=>[I(b(r.create_name),1)]),_:1}),t(d,{title:"操作","data-index":"action",width:"178px"},{default:a(({record:r})=>[t(m,{gap:16,class:"action-box"},{default:a(()=>[t(B,{type:"link",onClick:u=>S(r),disabled:r.role_type=="1"},{default:a(()=>[I("编辑")]),_:2},1032,["onClick","disabled"]),t(B,{type:"link",onClick:u=>U(r),disabled:r.id<=3},{default:a(()=>[I("删除")]),_:2},1032,["onClick","disabled"])]),_:2},1024)]),_:1})]),_:1},8,["data-source","pagination"])]),t(Ut,{ref_key:"addRoleRef",ref:h,onOk:i},null,512)])}}},Bt=z(Pt,[["__scopeId","data-v-adb445d6"]]),It={class:"user-model-page"},Mt={class:"list-wrapper"},Lt={__name:"index",setup(O){const p=w(1),A=()=>{p.value};return(_,P)=>(v(),M("div",It,[t(He,{value:p.value,"onUpdate:value":P[0]||(P[0]=i=>p.value=i),onChange:A},null,8,["value"]),f("div",Mt,[p.value==1?(v(),D(mt,{key:0})):(v(),D(Bt,{key:1}))])]))}},va=z(Lt,[["__scopeId","data-v-752bf84e"]]);export{va as default};
