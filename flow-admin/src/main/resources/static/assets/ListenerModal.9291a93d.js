var e=Object.defineProperty,i=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,o=(i,r,t)=>r in i?e(i,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[r]=t,s=(e,i,r)=>new Promise(((t,o)=>{var s=e=>{try{n(r.next(e))}catch(i){o(i)}},a=e=>{try{n(r.throw(e))}catch(i){o(i)}},n=e=>e.done?t(e.value):Promise.resolve(e.value).then(s,a);n((r=r.apply(e,i)).next())}));import{B as a,a as n}from"./index.116df12f.js";import{_ as l}from"./BasicForm.d6bc90d8.js";import{u as d}from"./useForm.1b895cf0.js";import{h as m,b as c,d as f,i as p,j as u}from"./listener.data.e41e9a80.js";import{y as b,r as j,u as v,j as y,Z as g,B as x,F as h,a2 as P,v as F,a0 as w}from"./vendor.880b4c6c.js";import"./index.10e3b51a.js";import"./useWindowSizeFn.564cf32e.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.981ceacd.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./download.db26d4fe.js";import"./base64Conver.bb012c73.js";import"./index.f38aca4b.js";var B=b({name:"ListenerModal",components:{BasicModal:a,BasicForm:l},emits:["success","register"],setup(e,{emit:a}){const l=j(!0),[b,{resetFields:g,updateSchema:x,setFieldsValue:h,validate:P}]=d({labelWidth:100,schemas:m,showActionButtonGroup:!1}),[F,{setModalProps:w,closeModal:B}]=n((e=>s(this,null,(function*(){yield g(),w({confirmLoading:!1}),l.value=!!(null==e?void 0:e.isUpdate);let s=e.record;const a=yield c(),n=yield f(),d={};a.forEach((e=>{d[e.value]=e.label})),x({field:"value",label:d[s.type||"class"]}),yield x([{field:"name",dynamicRules:()=>{return[{required:!0,whitespace:!0,message:"名称不能为空！"},{max:80,message:"字符长度不能大于80！"},...(e={id:v(l)&&s&&s.id||"",field:"name",fieldValue:"",fieldName:"名称"},[{trigger:"blur",validator:(i,r)=>r?p({id:e.id,field:e.field,fieldValue:r,fieldName:e.fieldName}).then((i=>i?Promise.resolve():Promise.reject(e.fieldName+"已存在，请修改！"))).catch((e=>Promise.reject(e))):Promise.resolve()}])];var e}},{field:"type",componentProps:{options:a,onChange:e=>{x({field:"value",label:d[e.target.value]})}}},{field:"listenerType",componentProps:{options:n}}]),h(((e,s)=>{for(var a in s||(s={}))r.call(s,a)&&o(e,a,s[a]);if(i)for(var a of i(s))t.call(s,a)&&o(e,a,s[a]);return e})({},e.record))}))));return{registerModal:F,registerForm:b,getTitle:y((()=>v(l)?"修改":"新增")),handleSubmit:function(){return s(this,null,(function*(){try{w({confirmLoading:!0});const e=yield P();yield u(e),B(),a("success")}finally{w({confirmLoading:!1})}}))}}}});B.render=function(e,i,r,t,o,s){const a=g("BasicForm"),n=g("BasicModal");return x(),h(n,w(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:P((()=>[F(a,{onRegister:e.registerForm},null,8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};export default B;