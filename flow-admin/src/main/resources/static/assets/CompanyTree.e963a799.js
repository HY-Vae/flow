var p=(o,c,t)=>new Promise((n,r)=>{var l=e=>{try{a(t.next(e))}catch(s){r(s)}},i=e=>{try{a(t.throw(e))}catch(s){r(s)}},a=e=>e.done?n(e.value):Promise.resolve(e.value).then(l,i);a((t=t.apply(o,c)).next())});import{az as u,a as _,b4 as h,x as d,o as v,aB as T,bT as g,z as y,i as B,j as b,q as k,an as C,k as m,fF as D}from"./index.ef013507.js";import{_ as S}from"./index.154de31a.js";import{g as $}from"./company.ba5e6b72.js";import"./fromPairs.84aabb58.js";import"./index.4dfcf0e9.js";import"./eagerComputed.487f958f.js";import"./useContextMenu.eed63f27.js";import"./index.8a7cb11f.js";import"./get.fbc063d7.js";const w=_({name:"CompanyTree",components:{BasicTree:S,Spin:h},emits:["select"],setup(o,{emit:c}){const t=d([]),n=d(!1),r=d(null);function l(){return p(this,null,function*(){n.value=!0,$().then(a=>{t.value=a,C(()=>{var e;m(t).length<10&&((e=m(r))==null||e.filterByLevel(1))})}).finally(()=>{n.value=!1})})}function i(a,e){const s=D(t.value,f=>f.id===a[0],{id:"id",pid:"pid",children:"children"});c("select",s)}return v(()=>{l()}),{treeData:t,treeLoading:n,basicTreeRef:r,handleSelect:i}}}),x={class:"company-tree bg-white m-4 mr-0 overflow-hidden"};function F(o,c,t,n,r,l){const i=T("BasicTree"),a=g("loading");return y((B(),b("div",x,[k(i,{title:"\u516C\u53F8",toolbar:"",search:"",clickRowToExpand:!1,treeData:o.treeData,replaceFields:{key:"id",title:"shortName"},onSelect:o.handleSelect,ref:"basicTreeRef"},null,8,["treeData","onSelect"])])),[[a,o.treeLoading]])}var G=u(w,[["render",F]]);export{G as default};