var B=(t,a,r)=>new Promise((s,i)=>{var e=o=>{try{n(r.next(o))}catch(l){i(l)}},p=o=>{try{n(r.throw(o))}catch(l){i(l)}},n=o=>o.done?s(o.value):Promise.resolve(o.value).then(e,p);n((r=r.apply(t,a)).next())});import{B as $,w as P}from"./useForm.501e4ed1.js";import{L as g,a as h,cM as F,I as _,ew as k,v as I,aF as u,o as d,i as f,z as m,m as b,B as C,j as v}from"./index.2df1abd3.js";import{P as y}from"./index.e96bd3d2.js";import"./index.ae21daf0.js";import"./index.321c37f5.js";import"./useFlexGapSupport.ce5faf33.js";import"./_baseIteratee.fefabcb6.js";import"./get.da017085.js";import"./useSize.562f40a4.js";import"./index.9376414a.js";import"./index.63ef69ac.js";import"./index.c123daea.js";import"./index.1842654c.js";import"./index.6fe01a31.js";import"./index.07432cb9.js";import"./eagerComputed.4f79ce77.js";import"./transButton.7cce5fb9.js";import"./index.293eed21.js";import"./index.333b79ae.js";import"./useWindowSizeFn.3d5076e0.js";import"./FullscreenOutlined.ee3d4b15.js";import"./useRefs.a1ab229d.js";import"./download.3fe8ec36.js";import"./index.2fe33a0c.js";import"./ClockCircleOutlined.75f6f42f.js";import"./index.31030814.js";import"./uniqBy.6c725a77.js";import"./index.c03d9706.js";import"./index.d567a6cf.js";import"./useContentViewHeight.448b2691.js";import"./ArrowLeftOutlined.a6198073.js";import"./index.9dd6ae39.js";const S=h({components:{BasicForm:$,CollapseContainer:F,PageWrapper:y,[_.name]:_,Button:k},setup(){const[t,{appendSchemaByField:a,removeSchemaByFiled:r,validate:s}]=P({schemas:[{field:"field0a",component:"Input",label:"\u5B57\u6BB50",colProps:{span:8},required:!0},{field:"field0b",component:"Input",label:"\u5B57\u6BB50",colProps:{span:8},required:!0},{field:"0",component:"Input",label:" ",colProps:{span:8},slot:"add"}],labelWidth:100,actionColOptions:{span:24}});function i(){return B(this,null,function*(){try{const o=yield s()}catch(o){}})}const e=I(1);function p(){a({field:`field${e.value}a`,component:"Input",label:"\u5B57\u6BB5"+e.value,colProps:{span:8},required:!0},""),a({field:`field${e.value}b`,component:"Input",label:"\u5B57\u6BB5"+e.value,colProps:{span:8},required:!0},""),a({field:`${e.value}`,component:"Input",label:" ",colProps:{span:8},slot:"add"},""),e.value++}function n(o){r([`field${o}a`,`field${o}b`,`${o}`]),e.value--}return{register:t,handleSubmit:i,add:p,del:n}}});function q(t,a,r,s,i,e){const p=u("Button"),n=u("BasicForm"),o=u("CollapseContainer"),l=u("PageWrapper");return d(),f(l,{title:"\u8868\u5355\u589E\u5220\u793A\u4F8B"},{default:m(()=>[b(o,{title:"\u8868\u5355\u589E\u5220"},{default:m(()=>[b(n,{onRegister:t.register,onSubmit:t.handleSubmit},{add:m(({field:c})=>[Number(c)===0?(d(),f(p,{key:0,onClick:t.add},{default:m(()=>[C("+")]),_:1},8,["onClick"])):v("",!0),c>0?(d(),f(p,{key:1,onClick:w=>t.del(c)},{default:m(()=>[C("-")]),_:2},1032,["onClick"])):v("",!0)]),_:1},8,["onRegister","onSubmit"])]),_:1})]),_:1})}var so=g(S,[["render",q]]);export{so as default};