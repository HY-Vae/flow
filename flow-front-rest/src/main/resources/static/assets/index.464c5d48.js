import{L as I,a as $,cP as U,bf as D,c2 as v,aM as b,b as N,q as O,s as P,e as S,aF as t,o as n,f as A,m as r,z as d,i as f,j as _,l as s,p as a,t as x,F as E,aP as R}from"./index.bd2622a4.js";import{D as V}from"./siteSetting.b6bf29aa.js";import{c as y,u as B}from"./index.c7e31164.js";import{b as F}from"./index.08f383df.js";import{h as T}from"./header.d801b988.js";import"./FullscreenOutlined.0d0c0c2d.js";import"./index.248b5bf2.js";import"./useWindowSizeFn.67ef7ff7.js";import"./uniqBy.41fe84d3.js";import"./_baseIteratee.a0786c1b.js";import"./get.20c5cbf9.js";import"./useContentViewHeight.8f4c0ff9.js";import"./index.fb349c07.js";import"./useRefs.4ffc2415.js";import"./PlusOutlined.f9ed6f81.js";import"./RedoOutlined.36268724.js";import"./index.c4d4ea51.js";import"./lock.b9c78e66.js";const z=$({name:"UserDropdown",components:{Dropdown:U,Menu:D,MenuItem:y(()=>v(()=>import("./DropMenuItem.c62c27e1.js"),["assets/DropMenuItem.c62c27e1.js","assets/index.bd2622a4.js","assets/index.376ee235.css"])),MenuDivider:D.Divider,LockAction:y(()=>v(()=>import("./LockModal.6431dfa1.js"),["assets/LockModal.6431dfa1.js","assets/LockModal.0068f88c.css","assets/index.bd2622a4.js","assets/index.376ee235.css","assets/index.08f383df.js","assets/index.cea505c1.css","assets/useWindowSizeFn.67ef7ff7.js","assets/FullscreenOutlined.0d0c0c2d.js","assets/useForm.b09515ad.js","assets/useForm.9fe0ab02.css","assets/index.aa874616.js","assets/index.85b409f6.css","assets/index.34f9998b.js","assets/index.a18cc309.css","assets/useFlexGapSupport.4d2f8b85.js","assets/_baseIteratee.a0786c1b.js","assets/get.20c5cbf9.js","assets/useSize.8a6ae0ee.js","assets/index.43820172.js","assets/index.3a3c1369.css","assets/index.ed2abe14.js","assets/index.d0e0ddc5.css","assets/index.c0db3e6e.js","assets/index.509096c8.css","assets/index.011eee67.js","assets/index.9cc25cf1.css","assets/index.a1f6a0e2.js","assets/index.fd6807f6.css","assets/index.a002d195.js","assets/index.7b8b5e30.css","assets/eagerComputed.e93fe3c7.js","assets/transButton.6e9f0377.js","assets/index.644e7005.js","assets/index.cd256673.css","assets/useRefs.4ffc2415.js","assets/download.d61a3495.js","assets/index.c7a7383a.js","assets/index.88b1d373.css","assets/ClockCircleOutlined.3d5ad35f.js","assets/index.0e48b9d8.js","assets/uniqBy.41fe84d3.js","assets/lock.b9c78e66.js","assets/header.d801b988.js"]))},props:{theme:b.oneOf(["dark","light"])},setup(){const{prefixCls:e}=N("header-user-dropdown"),{t:g}=O(),{getShowDoc:k,getUseLockPage:h}=B(),i=P(),C=S(()=>{const{realName:u="",image:L,desc:M}=i.getUserInfo||{};return{realName:u,avatar:L||T,desc:M}}),[o,{openModal:l}]=F();function c(){l(!0)}function p(){i.confirmLoginOut()}function m(){R(V)}function w(u){switch(u.key){case"logout":p();break;case"doc":m();break;case"lock":c();break}}return{prefixCls:e,t:g,getUserInfo:C,handleMenuClick:w,getShowDoc:k,register:o,getUseLockPage:h}}}),j=["src"];function q(e,g,k,h,i,C){const o=t("MenuItem"),l=t("MenuDivider"),c=t("Menu"),p=t("Dropdown"),m=t("LockAction");return n(),A(E,null,[r(p,{placement:"bottomLeft",overlayClassName:`${e.prefixCls}-dropdown-overlay`},{overlay:d(()=>[r(c,{onClick:e.handleMenuClick},{default:d(()=>[e.getShowDoc?(n(),f(o,{key:"doc",text:e.t("layout.header.dropdownItemDoc"),icon:"ion:document-text-outline"},null,8,["text"])):_("",!0),e.getShowDoc?(n(),f(l,{key:1})):_("",!0),e.getUseLockPage?(n(),f(o,{key:"lock",text:e.t("layout.header.tooltipLock"),icon:"ion:lock-closed-outline"},null,8,["text"])):_("",!0),r(o,{key:"logout",text:e.t("layout.header.dropdownItemLoginOut"),icon:"ion:power-outline"},null,8,["text"])]),_:1},8,["onClick"])]),default:d(()=>[s("span",{class:a([[e.prefixCls,`${e.prefixCls}--${e.theme}`],"flex"])},[s("img",{class:a(`${e.prefixCls}__header`),src:e.getUserInfo.avatar},null,10,j),s("span",{class:a(`${e.prefixCls}__info hidden md:block`)},[s("span",{class:a([`${e.prefixCls}__name  `,"truncate"])},x(e.getUserInfo.realName),3)],2)],2)]),_:1},8,["overlayClassName"]),r(m,{onRegister:e.register},null,8,["onRegister"])],64)}var ce=I(z,[["render",q]]);export{ce as default};