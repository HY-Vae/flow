import{az as S,a as _,cY as m,eG as f,eH as T,eI as R,eJ as x,eK as X,eL as Y,eM as h,eN as B,eO as C,eP as y,eQ as E,eR as w,eS as b,x as n,aB as o,i as r,l as i,C as s,p as l,q as p,D as k,aL as F,z as P,B as $}from"./index.ef013507.js";import{P as g}from"./index.4dfdb4ab.js";import"./index.1eabbb9a.js";import"./index.0210df95.js";import"./useSize.55446702.js";import"./eagerComputed.487f958f.js";import"./useWindowSizeFn.37be93ea.js";import"./useContentViewHeight.d02bb685.js";import"./ArrowLeftOutlined.5616a4a1.js";import"./index.412dcca9.js";import"./transButton.750f7635.js";const N=["Fade","Scale","SlideY","ScrollY","SlideYReverse","ScrollYReverse","SlideX","ScrollX","SlideXReverse","ScrollXReverse","ScaleRotate","ExpandX","Expand"],A=N.map(e=>({label:e,value:e,key:e})),D=_({components:{Select:m,PageWrapper:g,FadeTransition:f,ScaleTransition:T,SlideYTransition:R,ScrollYTransition:x,SlideYReverseTransition:X,ScrollYReverseTransition:Y,SlideXTransition:h,ScrollXTransition:B,SlideXReverseTransition:C,ScrollXReverseTransition:y,ScaleRotateTransition:E,ExpandXTransition:w,ExpandTransition:b},setup(){const e=n("Fade"),a=n(!0);function t(){a.value=!1,setTimeout(()=>{a.value=!0},300)}return{options:A,value:e,start:t,show:a}}}),L={class:"flex"},V={class:"box"};function W(e,a,t,z,I,q){const c=o("Select"),u=o("a-button"),d=o("PageWrapper");return r(),i(d,{title:"\u52A8\u753B\u7EC4\u4EF6\u793A\u4F8B"},{default:s(()=>[l("div",L,[p(c,{options:e.options,value:e.value,"onUpdate:value":a[0]||(a[0]=v=>e.value=v),placeholder:"\u9009\u62E9\u52A8\u753B",style:{width:"150px"}},null,8,["options","value"]),p(u,{type:"primary",class:"ml-4",onClick:e.start},{default:s(()=>[k(" start ")]),_:1},8,["onClick"])]),(r(),i(F(`${e.value}Transition`),null,{default:s(()=>[P(l("div",V,null,512),[[$,e.show]])]),_:1}))]),_:1})}var ae=S(D,[["render",W],["__scopeId","data-v-45b1f032"]]);export{ae as default};