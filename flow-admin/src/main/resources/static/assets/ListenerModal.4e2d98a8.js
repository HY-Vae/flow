var e=Object.defineProperty,i=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,o=(i,r,t)=>r in i?e(i,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[r]=t,a=(e,i,r)=>new Promise(((t,o)=>{var a=e=>{try{n(r.next(e))}catch(i){o(i)}},s=e=>{try{n(r.throw(e))}catch(i){o(i)}},n=e=>e.done?t(e.value):Promise.resolve(e.value).then(a,s);n((r=r.apply(e,i)).next())}));import{B as s,a as n}from"./index.13a30da8.js";import{_ as d}from"./BasicForm.adb2a199.js";import{u as l}from"./useForm.40c52001.js";import{h as m,b as c,d as f,i as p,j as u}from"./listener.data.f2114452.js";import{j,r as b,u as g,i as v,K as y,o as x,m as h,Q as P,n as w,N as F}from"./vendor.686fd1d4.js";import"./index.04486bdf.js";import"./useWindowSizeFn.d82e06bf.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.a84c0e16.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./download.45a835c8.js";import"./base64Conver.bb012c73.js";import"./index.9702aa73.js";var O=j({name:"ListenerModal",components:{BasicModal:s,BasicForm:d},emits:["success","register"],setup(e,{emit:s}){const d=b(!0),[j,{resetFields:y,updateSchema:x,setFieldsValue:h,validate:P}]=l({labelWidth:100,schemas:m,showActionButtonGroup:!1}),[w,{setModalProps:F,closeModal:O}]=n((e=>a(this,null,(function*(){yield y(),F({confirmLoading:!1}),d.value=!!(null==e?void 0:e.isUpdate);let a=e.record;const s=yield c(),n=yield f(),l={};s.forEach((e=>{l[e.value]=e.label})),x({field:"value",label:l[a.type||"class"]}),yield x([{field:"name",dynamicRules:()=>{return[{required:!0,whitespace:!0,message:"名称不能为空！"},{max:80,message:"字符长度不能大于80！"},...(e={id:g(d)&&a&&a.id||"",field:"name",fieldValue:"",fieldName:"名称"},[{trigger:"blur",validator:(i,r)=>r?p({id:e.id,field:e.field,fieldValue:r,fieldName:e.fieldName}).then((i=>i?Promise.resolve():Promise.reject(e.fieldName+"已存在，请修改！"))).catch((e=>Promise.reject(e))):Promise.resolve()}])];var e}},{field:"type",componentProps:{options:s,onChange:e=>{x({field:"value",label:l[e.target.value]})}}},{field:"listenerType",componentProps:{options:n}}]),h(((e,a)=>{for(var s in a||(a={}))r.call(a,s)&&o(e,s,a[s]);if(i)for(var s of i(a))t.call(a,s)&&o(e,s,a[s]);return e})({},e.record))}))));return{registerModal:w,registerForm:j,getTitle:v((()=>g(d)?"修改":"新增")),handleSubmit:function(){return a(this,null,(function*(){try{F({confirmLoading:!0});const e=yield P();yield u(e),O(),s("success")}finally{F({confirmLoading:!1})}}))}}}});O.render=function(e,i,r,t,o,a){const s=y("BasicForm"),n=y("BasicModal");return x(),h(n,F(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:P((()=>[w(s,{onRegister:e.registerForm},null,8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};export default O;