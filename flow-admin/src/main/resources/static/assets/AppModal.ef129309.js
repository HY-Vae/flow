var v=Object.defineProperty,M=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var B=(s,t,e)=>t in s?v(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,x=(s,t)=>{for(var e in t||(t={}))A.call(t,e)&&B(s,e,t[e]);if(g)for(var e of g(t))C.call(t,e)&&B(s,e,t[e]);return s},E=(s,t)=>M(s,y(t));var f=(s,t,e)=>new Promise((m,a)=>{var c=i=>{try{o(e.next(i))}catch(u){a(u)}},n=i=>{try{o(e.throw(i))}catch(u){a(u)}},o=i=>i.done?m(i.value):Promise.resolve(i.value).then(c,n);o((e=e.apply(s,t)).next())});import{B as D,a as P}from"./index.309f7e13.js";import{B as R}from"./BasicForm.bfb70ce4.js";import{u as N}from"./useForm.9d0149a6.js";import{f as S}from"./app.data.1e80cc44.js";import{c as k,s as V}from"./app.19f09dd6.js";import{F as $}from"./constantEnum.82824ec7.js";import{_ as L}from"./index.aeb7d9f7.js";import{A as O,r as U,u as F,j as T,a0 as b,B as W,a1 as q,a6 as z,w as G,a4 as I}from"./vendor.5879c5ca.js";import"./useWindowSizeFn.6a6adedd.js";/* empty css               *//* empty css               *//* empty css               *//* empty css                *//* empty css              *//* empty css               *//* empty css                *//* empty css                */import"./index.661e65ad.js";/* empty css                *//* empty css                *//* empty css                *//* empty css                */import"./uuid.2b29000c.js";import"./download.6c7231a4.js";import"./base64Conver.bb012c73.js";import"./index.77bdba74.js";const H=O({name:"AppModal",components:{BasicModal:D,BasicForm:R},emits:["success","register"],setup(s,{emit:t}){const e=U(!0),[m,{resetFields:a,updateSchema:c,setFieldsValue:n,validate:o}]=N({labelWidth:100,schemas:S,showActionButtonGroup:!1}),i=r=>[{trigger:"blur",validator:(d,j)=>j?k({id:r.id,field:r.field,fieldValue:j,fieldName:r.fieldName}).then(p=>p?Promise.resolve():Promise.reject(r.fieldName+"\u5DF2\u5B58\u5728\uFF0C\u8BF7\u4FEE\u6539\uFF01")).catch(p=>Promise.reject(p)):Promise.resolve()}],[u,{setModalProps:l,closeModal:h}]=P(r=>f(this,null,function*(){yield a(),l({confirmLoading:!1}),e.value=!!(r==null?void 0:r.isUpdate);let d=r.record;yield c([{field:"sn",dynamicRules:()=>[{required:!0,whitespace:!0,message:"\u6807\u8BC6\u4E0D\u80FD\u4E3A\u7A7A\uFF01"},{pattern:new RegExp($.SN),type:"string",message:"\u8BF7\u8F93\u5165\u82F1\u6587\u6216\u6570\u5B57\uFF01"},{max:40,message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E40\uFF01"},...i({id:F(e)&&d&&d.id||"",field:"sn",fieldValue:"",fieldName:"\u6807\u8BC6"})]}]),F(e)&&n(E(x({},d),{status:d.status===1}))})),w=T(()=>F(e)?"\u4FEE\u6539":"\u65B0\u589E");function _(){return f(this,null,function*(){try{l({confirmLoading:!0});const r=yield o();r.status=r.status?1:0,yield V(r),h(),t("success")}finally{l({confirmLoading:!1})}})}return{registerModal:u,registerForm:m,getTitle:w,handleSubmit:_}}});function J(s,t,e,m,a,c){const n=b("BasicForm"),o=b("BasicModal");return W(),q(o,I(s.$attrs,{onRegister:s.registerModal,title:s.getTitle,onOk:s.handleSubmit}),{default:z(()=>[G(n,{onRegister:s.registerForm},null,8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}var he=L(H,[["render",J]]);export{he as default};