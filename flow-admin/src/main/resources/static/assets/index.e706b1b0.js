var e=Object.defineProperty,t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,i=(t,n,r)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r;import o from"./Step1.38bdde24.js";import p from"./Step2.da5239a6.js";import a from"./Step3.e9ab129a.js";import{P as d}from"./index.27db6639.js";import{j as s,cd as c,r as m,z as f,G as j,k as l,l as u,K as x,o as b,m as S,x as v,n as h,w as P,v as y,X as N}from"./vendor.686fd1d4.js";/* empty css              */import"./BasicForm.ccc180d0.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.91a03d82.js";import"./index.66e49cf5.js";/* empty css              *//* empty css              *//* empty css              */import"./index.cf90a7d3.js";import"./useWindowSizeFn.d82e06bf.js";/* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./download.c38f734c.js";import"./base64Conver.bb012c73.js";import"./index.10e7af93.js";import"./useForm.753834fe.js";import"./data.2505cb7f.js";/* empty css              *//* empty css              */import"./useContentViewHeight.5e4dffd7.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.172ad1ec.js";var w=s({components:{Step1:o,Step2:p,Step3:a,PageWrapper:d,[c.name]:c,[c.Step.name]:c.Step},setup(){const e=m(0),o=f({initSetp2:!1,initSetp3:!1});return((e,o)=>{for(var p in o||(o={}))n.call(o,p)&&i(e,p,o[p]);if(t)for(var p of t(o))r.call(o,p)&&i(e,p,o[p]);return e})({current:e,handleStep1Next:function(t){e.value++,o.initSetp2=!0},handleStep2Next:function(t){e.value++,o.initSetp3=!0},handleRedo:function(){e.value=0,o.initSetp2=!1,o.initSetp3=!1},handleStepPrev:function(){e.value--}},j(o))}});const O=v();l("data-v-3b1653d3");const g={class:"step-form-form"},k={class:"mt-5"};u();const R=O(((e,t,n,r,i,o)=>{const p=x("a-step"),a=x("a-steps"),d=x("Step1"),s=x("Step2"),c=x("Step3"),m=x("PageWrapper");return b(),S(m,{title:"分步表单",contentBackground:"",content:" 将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。",contentClass:"p-4"},{default:O((()=>[h("div",g,[h(a,{current:e.current},{default:O((()=>[h(p,{title:"填写转账信息"}),h(p,{title:"确认转账信息"}),h(p,{title:"完成"})])),_:1},8,["current"])]),h("div",k,[P(h(d,{onNext:e.handleStep1Next},null,8,["onNext"]),[[y,0===e.current]]),e.initSetp2?P((b(),S(s,{key:0,onPrev:e.handleStepPrev,onNext:e.handleStep2Next},null,8,["onPrev","onNext"])),[[y,1===e.current]]):N("",!0),e.initSetp3?P((b(),S(c,{key:1,onRedo:e.handleRedo},null,8,["onRedo"])),[[y,2===e.current]]):N("",!0)])])),_:1})}));w.render=R,w.__scopeId="data-v-3b1653d3";export default w;