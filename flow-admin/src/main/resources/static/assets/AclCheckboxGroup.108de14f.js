var e,l,t=(e,l,t)=>new Promise(((n,c)=>{var o=e=>{try{i(t.next(e))}catch(l){c(l)}},a=e=>{try{i(t.throw(e))}catch(l){c(l)}},i=e=>e.done?n(e.value):Promise.resolve(e.value).then(o,a);i((t=t.apply(e,l)).next())}));import{b3 as n,aR as c,aw as o,p as a}from"./index.04486bdf.js";import{j as i,aT as r,aJ as d,r as s,K as u,o as h,m as p,n as g,Q as k,X as v,Y as f}from"./vendor.686fd1d4.js";/* empty css              */(l=e||(e={})).SetAcl="/flow/privilege/acl/setAcl",l.GetModuleAclsByGroupId="/flow/privilege/acl/getModuleAclsByGroupId",l.SetAllAcl="/flow/privilege/acl/setAllAcl",l.SetAclModuleList="/flow/privilege/acl/setAclModuleList",l.SetAclByModule="/flow/privilege/acl/setAclByModule";const m=l=>{const t=o.get({url:e.GetModuleAclsByGroupId+"/"+l.groupId});return Promise.resolve(t).then((e=>{const l=n(e,{id:"id",children:"children",pid:"pid"});return c(l,(e=>{0===e.children.length&&delete e.children}),{id:"id",children:"children",pid:"pid"}),l}))},A=l=>o.post({url:e.SetAllAcl+`/${l.checked}`,params:l.aclInfo});var b=i({name:"AclCheckboxGroup",components:{Checkbox:r,CheckboxGroup:r.Group,Spin:d},props:{checkboxList:a.arrayOf(a.object).def([]),groupId:a.string.def(""),moduleSn:a.string.def(""),moduleId:a.string.def("")},setup(l,{emit:n}){const c=l.checkboxList.filter((e=>e.checked)),a=s(!1),i=s(c.length>0&&l.checkboxList.length===c.length);0!==c.length&&l.checkboxList.length!==c.length&&(a.value=!0);const r=s(!1),d=s(c.map((e=>e.value)));return{spinning:r,indeterminate:a,checkAll:i,checkedList:d,onChange:function(c){return t(this,null,(function*(){r.value=!0,a.value=!!c.length&&c.length<l.checkboxList.length,i.value=c.length===l.checkboxList.length;const t={moduleId:l.moduleId,groupId:l.groupId,aclList:c};try{yield(l=>o.post({url:e.SetAclModuleList+`/${l.moduleId}/${l.groupId}`,params:l.aclList}))(t),n("changeCheckAllStatus")}finally{r.value=!1}}))},onCheckAllChange:function(c){return t(this,null,(function*(){var t;d.value=c.target.checked?l.checkboxList.map((e=>e.value)):[],a.value=!1,i.value=c.target.checked,r.value=!0,yield(t={checked:c.target.checked?1:0,aclInfo:{releaseId:l.groupId,moduleId:l.moduleId}},o.post({url:e.SetAclByModule+"/"+t.checked,params:t.aclInfo})),n("changeCheckAllStatus"),r.value=!1}))}}}});const x=f(" 全选 ");b.render=function(e,l,t,n,c,o){const a=u("Checkbox"),i=u("CheckboxGroup"),r=u("Spin");return h(),p("div",null,[g(r,{spinning:e.spinning},{default:k((()=>[e.checkboxList&&e.checkboxList.length>0?(h(),p(a,{key:0,indeterminate:e.indeterminate,checked:e.checkAll,onChange:e.onCheckAllChange},{default:k((()=>[x])),_:1},8,["indeterminate","checked","onChange"])):v("",!0),g(i,{value:e.checkedList,"onUpdate:value":l[1]||(l[1]=l=>e.checkedList=l),options:e.checkboxList,onChange:e.onChange},null,8,["value","options","onChange"])])),_:1},8,["spinning"])])};var I=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:b});export{I as A,b as _,m as g,A as s};