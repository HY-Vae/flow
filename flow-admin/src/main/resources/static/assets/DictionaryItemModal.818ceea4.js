var v=Object.defineProperty;var g=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var B=(t,r,e)=>r in t?v(t,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[r]=e,E=(t,r)=>{for(var e in r||(r={}))w.call(r,e)&&B(t,e,r[e]);if(g)for(var e of g(r))C.call(r,e)&&B(t,e,r[e]);return t};var f=(t,r,e)=>new Promise((n,a)=>{var p=i=>{try{s(e.next(i))}catch(u){a(u)}},m=i=>{try{s(e.throw(i))}catch(u){a(u)}},s=i=>i.done?n(i.value):Promise.resolve(i.value).then(p,m);s((e=e.apply(t,r)).next())});import{B as P,a as R}from"./index.4ff668bf.js";import{B as k}from"./BasicForm.d8aa86d3.js";import{u as I}from"./useForm.d7bb3373.js";import{d as N,c as A,s as S}from"./dictionary.9f8ae2b3.js";import{F as V}from"./constantEnum.bf6653fb.js";import{az as $,a as b,x as O,k as h,h as x,aB as y,i as L,l as U,C as j,q,aC as T}from"./index.ef013507.js";import"./useWindowSizeFn.37be93ea.js";import"./FullscreenOutlined.d97e6502.js";/* empty css              *//* empty css               */import"./index.8a7cb11f.js";import"./index.64234a26.js";import"./Checkbox.d561740d.js";import"./index.d845ac75.js";import"./index.0b0495b0.js";import"./index.4822de2c.js";import"./index.7f88299e.js";import"./index.0e08ed6e.js";import"./get.fbc063d7.js";import"./index.4dfcf0e9.js";import"./eagerComputed.487f958f.js";import"./index.ac5849f2.js";import"./_baseIteratee.39b06e56.js";import"./DeleteOutlined.fda42126.js";import"./index.7e4b5f10.js";import"./useRefs.5ed2b70f.js";import"./Form.36fbea16.js";import"./Col.55ed0272.js";import"./useFlexGapSupport.e51c8524.js";import"./useSize.55446702.js";import"./transButton.750f7635.js";import"./index.edd8ff4a.js";import"./index.0bfe1343.js";import"./index.27c2d820.js";import"./uuid.2b29000c.js";import"./download.c25570af.js";import"./base64Conver.08b9f4ec.js";import"./index.30e1f68c.js";import"./index.4e2ec58e.js";import"./uniqBy.4bac5850.js";const z=b({name:"DictionaryItemModal",components:{BasicModal:P,BasicForm:k},emits:["success","register"],setup(t,{emit:r}){const e=O(!0),[n,{setFieldsValue:a,updateSchema:p,resetFields:m,validate:s}]=I({labelWidth:100,schemas:N,showActionButtonGroup:!1,actionColOptions:{span:23}}),i=o=>[{trigger:"blur",validator:(c,F)=>F?A({id:o.id,field:o.field,fieldValue:F,fieldName:o.fieldName}).then(d=>d?Promise.resolve():Promise.reject(o.fieldName+"\u5DF2\u5B58\u5728\uFF0C\u8BF7\u4FEE\u6539\uFF01")).catch(d=>Promise.reject(d)):Promise.resolve()}],[u,{setModalProps:l,closeModal:D}]=R(o=>f(this,null,function*(){yield m(),l({confirmLoading:!1}),e.value=!!(o!=null&&o.isUpdate);let c=o.record;yield p([{field:"code",dynamicRules:()=>[{required:!0,whitespace:!0,message:"\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A\uFF01"},{pattern:new RegExp(V.SN),type:"string",message:"\u8BF7\u8F93\u5165\u82F1\u6587\u6216\u6570\u5B57\uFF01"},{max:32,message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E32\uFF01"},...i({id:h(e)&&c&&c.id||"",field:"code",fieldValue:"",fieldName:"\u7F16\u7801"})]}]),a(E({},o.record))})),M=x(()=>h(e)?"\u4FEE\u6539":"\u65B0\u589E");function _(){return f(this,null,function*(){try{l({confirmLoading:!0});const o=yield s();yield S(o),D(),r("success")}finally{l({confirmLoading:!1})}})}return{registerModal:u,registerForm:n,getTitle:M,handleSubmit:_}}});function G(t,r,e,n,a,p){const m=y("BasicForm"),s=y("BasicModal");return L(),U(s,T(t.$attrs,{onRegister:t.registerModal,title:t.getTitle,onOk:t.handleSubmit}),{default:j(()=>[q(m,{onRegister:t.registerForm},null,8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}var Se=$(z,[["render",G]]);export{Se as default};