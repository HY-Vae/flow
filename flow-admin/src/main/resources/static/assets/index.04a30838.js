import{_ as e}from"./Description.vue_vue&type=script&lang.1d49bf69.js";import{_ as t}from"./TableImg.5256107f.js";import"./BasicForm.9118d7fd.js";import{u as r}from"./useTable.46ace9df.js";import{_ as a}from"./PageWrapper.45ba9367.js";import{k as o,aV as s,K as i,o as n,n as d,x as m,q as p}from"./vendor.56d2c57f.js";/* empty css              */import{refundSchema as c,refundData as u,personSchema as f,personData as l,refundTableData as j,refundTableSchema as b,refundTimeTableSchema as x,refundTimeTableData as g}from"./data.817ff3ae.js";/* empty css              */import"./index.bfbdc958.js";/* empty css              *//* empty css              */import"./useForm.7b000bd0.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.d0559e60.js";import"./useModal.ddd2c5cc.js";import"./onMountedOrActivated.1a8745f8.js";import"./useSortable.97fe3b93.js";import"./useExpose.46777d04.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.a238b96b.js";/* empty css              *//* empty css              */import"./download.c3ab6d96.js";import"./StrengthMeter.ab008fc6.js";import"./usePageContext.30475202.js";/* empty css              *//* empty css              *//* empty css              */var h=o({components:{Description:e,BasicTable:t,PageWrapper:a,[s.name]:s},setup(){const[e]=r({title:"退货商品",dataSource:j,columns:b,pagination:!1,showIndexColumn:!1,scroll:{y:300},showSummary:!0,summaryFunc:function(e){let t=0,r=0;return e.forEach((e=>{t+=e.t5,r+=e.t6})),[{t1:"总计",t5:t,t6:r}]}}),[t]=r({title:"退货进度",columns:x,pagination:!1,dataSource:g,showIndexColumn:!1,scroll:{y:300}});return{registerRefundTable:e,registerTimeTable:t,refundSchema:c,refundData:u,personSchema:f,personData:l}}});const S=m(),T=S(((e,t,r,a,o,s)=>{const m=i("Description"),c=i("a-divider"),u=i("BasicTable"),f=i("PageWrapper");return n(),d(f,{title:"基础详情页",contentBackground:""},{default:S((()=>[p(m,{size:"middle",title:"退款申请",bordered:!1,column:3,data:e.refundData,schema:e.refundSchema},null,8,["data","schema"]),p(c),p(m,{size:"middle",title:"用户信息",bordered:!1,column:3,data:e.personData,schema:e.personSchema},null,8,["data","schema"]),p(c),p(u,{onRegister:e.registerRefundTable},null,8,["onRegister"]),p(c),p(u,{onRegister:e.registerTimeTable},null,8,["onRegister"])])),_:1})}));h.render=T,h.__scopeId="data-v-109959ad";export default h;