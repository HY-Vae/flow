var C=(r,a,p)=>new Promise((m,u)=>{var o=t=>{try{i(p.next(t))}catch(e){u(e)}},n=t=>{try{i(p.throw(t))}catch(e){u(e)}},i=t=>t.done?m(t.value):Promise.resolve(t.value).then(o,n);i((p=p.apply(r,a)).next())});import{B as $}from"./BasicForm.51e3eb56.js";import{u as P}from"./useForm.d201bd46.js";import{az as k,a as F,cE as I,I as v,dE as h,w as g,aB as c,o as d,k as B,B as l,p as _,C as f,l as b}from"./index.da587afe.js";import{P as y}from"./index.c0d22213.js";/* empty css              *//* empty css               */import"./index.a64c8a60.js";import"./index.492229cd.js";import"./Checkbox.9d75a86f.js";import"./index.5aab84c4.js";import"./index.9d0fc194.js";import"./index.447b3242.js";import"./index.d7c8b760.js";import"./index.b3a5d1df.js";import"./get.40c34cfc.js";import"./index.a85fa86f.js";import"./eagerComputed.3bbb876f.js";import"./index.3c9c3a6f.js";import"./_baseIteratee.78d8c020.js";import"./DeleteOutlined.690086a4.js";import"./index.d1cda802.js";import"./useRefs.1aead304.js";import"./Form.f8b72655.js";import"./Col.4ac749bb.js";import"./useFlexGapSupport.caa26b6d.js";import"./useSize.dbee3c08.js";import"./transButton.1d3b575b.js";import"./index.5d1da0c4.js";import"./index.e8eb4b57.js";import"./useWindowSizeFn.3fdab581.js";import"./FullscreenOutlined.3d903e0f.js";import"./index.72d53e09.js";import"./index.813f510f.js";import"./uuid.2b29000c.js";import"./download.75f04d3f.js";import"./base64Conver.08b9f4ec.js";import"./index.9912aa68.js";import"./index.36675b6e.js";import"./uniqBy.f906dabc.js";import"./index.a0d7e8a1.js";import"./index.6d85aa5b.js";import"./useContentViewHeight.f2db75e2.js";import"./ArrowLeftOutlined.8a04d10c.js";import"./index.25a87437.js";const q=F({components:{BasicForm:$,CollapseContainer:I,PageWrapper:y,[v.name]:v,Button:h},setup(){const[r,{appendSchemaByField:a,removeSchemaByField:p,validate:m}]=P({schemas:[{field:"field0a",component:"Input",label:"\u5B57\u6BB50",colProps:{span:8},required:!0},{field:"field0b",component:"Input",label:"\u5B57\u6BB50",colProps:{span:8},required:!0},{field:"0",component:"Input",label:" ",colProps:{span:8},slot:"add"}],labelWidth:100,actionColOptions:{span:24}});function u(){return C(this,null,function*(){try{const e=yield m()}catch(e){}})}const o=g(1);function n(){a({field:`field${o.value}a`,component:"Input",label:"\u5B57\u6BB5"+o.value,colProps:{span:8},required:!0},""),a({field:`field${o.value}b`,component:"Input",label:"\u5B57\u6BB5"+o.value,colProps:{span:8},required:!0},""),a({field:`${o.value}`,component:"Input",label:" ",colProps:{span:8},slot:"add"},""),o.value++}function i(){a([{field:`field${o.value}a`,component:"Input",label:"\u5B57\u6BB5"+o.value,colProps:{span:8},required:!0},{field:`field${o.value}b`,component:"Input",label:"\u5B57\u6BB5"+o.value,colProps:{span:8},required:!0},{field:`${o.value}`,component:"Input",label:" ",colProps:{span:8},slot:"add"}],""),o.value++}function t(e){p([`field${e}a`,`field${e}b`,`${e}`]),o.value--}return{register:r,handleSubmit:u,add:n,del:t,batchAdd:i}}});function S(r,a,p,m,u,o){const n=c("Button"),i=c("BasicForm"),t=c("CollapseContainer"),e=c("PageWrapper");return d(),B(e,{title:"\u8868\u5355\u589E\u5220\u793A\u4F8B"},{default:l(()=>[_(t,{title:"\u8868\u5355\u589E\u5220"},{default:l(()=>[_(i,{onRegister:r.register,onSubmit:r.handleSubmit},{add:l(({field:s})=>[Number(s)===0?(d(),B(n,{key:0,onClick:r.add},{default:l(()=>[f("+")]),_:1},8,["onClick"])):b("",!0),Number(s)===0?(d(),B(n,{key:1,class:"ml-2",onClick:r.add},{default:l(()=>[f("\u6279\u91CF\u6DFB\u52A0\u8868\u5355\u914D\u7F6E")]),_:1},8,["onClick"])):b("",!0),s>0?(d(),B(n,{key:2,onClick:E=>r.del(s)},{default:l(()=>[f("-")]),_:2},1032,["onClick"])):b("",!0)]),_:1},8,["onRegister","onSubmit"])]),_:1})]),_:1})}var Fo=k(q,[["render",S]]);export{Fo as default};