import{I as e}from"./index.8707028f.js";import{_ as t}from"./TableImg.f7de9836.js";import"./BasicForm.49b9f6b2.js";import{P as s}from"./index.9f071deb.js";import{j as o,r as i,K as a,o as r,m as d,Q as n,n as m,V as c,ah as p,Y as f}from"./vendor.686fd1d4.js";import"./index.0bb7f928.js";import"./index.b444bbac.js";import"./useWindowSizeFn.d82e06bf.js";import"./useForm.bcbbeb77.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.146ae02b.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.b52b2976.js";/* empty css              *//* empty css              *//* empty css              */import"./download.e39a543f.js";import"./base64Conver.bb012c73.js";import"./index.19c34870.js";import"./useContentViewHeight.099c9658.js";/* empty css              *//* empty css              */var u=o({components:{BasicTable:t,ImpExcel:e,PageWrapper:s},setup(){const e=i([]);return{loadDataSuccess:function(t){e.value=[];for(const s of t){const{header:t,results:o,meta:{sheetName:i}}=s,a=[];for(const e of t)a.push({title:e,dataIndex:e});e.value.push({title:i,dataSource:o,columns:a})}},tableListRef:e}}});const b=f(" 导入Excel ");u.render=function(e,t,s,o,i,f){const u=a("a-button"),l=a("ImpExcel"),j=a("BasicTable"),x=a("PageWrapper");return r(),d(x,{title:"excel数据导入示例"},{default:n((()=>[m(l,{onSuccess:e.loadDataSuccess},{default:n((()=>[m(u,{class:"m-3"},{default:n((()=>[b])),_:1})])),_:1},8,["onSuccess"]),(r(!0),d(c,null,p(e.tableListRef,((e,t)=>(r(),d(j,{key:t,title:e.title,columns:e.columns,dataSource:e.dataSource},null,8,["title","columns","dataSource"])))),128))])),_:1})};export default u;