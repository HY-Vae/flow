import{a as l,s as p,v as s,cU as d,L as u,aF as a,o as f,f as _,m as n,l as e,t as m}from"./index.c5d747fc.js";import v from"./QuickNav.13ee8c37.js";import{A as g}from"./index.efb43125.js";import{h}from"./header.d801b988.js";import"./index.6c8974ca.js";import"./index.88e0a121.js";import"./index.d8a8c0df.js";import"./index.296ee04a.js";import"./useRefs.42a2da00.js";import"./PlusOutlined.20270b2a.js";import"./index.4287c510.js";import"./index.57253b57.js";import"./useFlexGapSupport.6f7d1d35.js";import"./index.eca2a50c.js";import"./data.93390901.js";import"./process.fa055655.js";import"./useSize.cc8786ae.js";import"./eagerComputed.10c3fbd5.js";const k=l({components:{Avatar:g,QuickNav:v},setup(){const t=p(),o=s(),r=s(!1);return s(new Date),o.value=t.getUserInfo||{},{headerImg:h,loading:r,loginUser:o,currentDate:d(new Date)}}}),x={class:"lg:flex"},F={class:"md:ml-6 flex flex-col justify-center md:mt-0 mt-2"},D={class:"md:text-lg text-md"},N={class:"text-secondary"},U={class:"flex-1 md:mt-0 mt-4"};function y(t,o,r,A,C,$){const i=a("Avatar"),c=a("QuickNav");return f(),_("div",x,[n(i,{src:t.headerImg,size:72,class:"!mx-auto !block"},null,8,["src"]),e("div",F,[e("h1",D,m(t.loginUser.name),1),e("span",N,m(t.currentDate)+"\uFF0C\u6674\uFF0C20\u2103 - 32\u2103\uFF01 ",1)]),e("div",U,[n(c,{loading:t.loading,class:"enter-y"},null,8,["loading"])])])}var M=u(k,[["render",y]]);export{M as default};