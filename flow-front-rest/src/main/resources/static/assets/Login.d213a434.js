import{A as e,a as o,b as s,u as r,c as t,d as l,e as i}from"./index.b41e2c0e.js";import n from"./LoginForm.fc7d6668.js";import a from"./ForgetPasswordForm.b2ee1fe3.js";import m from"./RegisterForm.ad9153af.js";import d from"./MobileForm.bc2cf168.js";import x from"./QrCodeForm.63d5721d.js";import{y as p,j as c,Z as f,B as g,F as u,a7 as w,v as h,J as F}from"./vendor.3dc066e5.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./LoginFormTitle.fb63eb16.js";import"./index.82d0d758.js";import"./index.c14dc721.js";import"./download.55ddd36a.js";var v=p({name:"Login",components:{AppLogo:e,LoginForm:n,ForgetPasswordForm:a,RegisterForm:m,MobileForm:d,QrCodeForm:x,AppLocalePicker:o,AppDarkModeToggle:s},props:{sessionTimeout:{type:Boolean}},setup(){const e=r(),{prefixCls:o}=t("login"),{t:s}=i(),n=l();return{t:s,prefixCls:o,title:c((()=>{var o;return null!=(o=null==e?void 0:e.title)?o:""})),showLocale:n.getShowPicker}}});const j={class:"-enter-x xl:hidden"},y={class:"container relative h-full py-2 mx-auto sm:px-10"},b={class:"flex h-full"},L={class:"hidden min-h-full pl-4 mr-4 xl:flex xl:flex-col xl:w-6/12"},k={class:"my-auto"},T={class:"mt-10 font-medium text-white -enter-x"},A={class:"inline-block mt-4 text-3xl"},C={class:"mt-5 font-normal text-white text-md dark:text-gray-500 -enter-x"},P={class:"flex w-full h-full py-5 xl:h-auto xl:py-0 xl:my-0 xl:w-6/12"};v.render=function(e,o,s,r,t,l){const i=f("AppLocalePicker"),n=f("AppDarkModeToggle"),a=f("AppLogo"),m=f("LoginForm"),d=f("ForgetPasswordForm"),x=f("RegisterForm"),p=f("MobileForm"),c=f("QrCodeForm");return g(),u("div",{class:[e.prefixCls,"relative w-full h-full px-4"]},[!e.sessionTimeout&&e.showLocale?(g(),u(i,{key:0,class:"absolute text-white top-4 right-4 enter-x xl:text-gray-600",showText:!1})):w("",!0),e.sessionTimeout?w("",!0):(g(),u(n,{key:1,class:"absolute top-3 right-7 enter-x"})),h("span",j,[h(a,{alwaysShowTitle:!0})]),h("div",y,[h("div",b,[h("div",L,[h(a,{class:"-enter-x"}),h("div",k,[h("img",{alt:e.title,src:"/assets/login-box-bg.9027741f.svg",class:"w-1/2 -mt-16 -enter-x"},null,8,["alt"]),h("div",T,[h("span",A,F(e.t("sys.login.signInTitle")),1)]),h("div",C,F(e.t("sys.login.signInDesc")),1)])]),h("div",P,[h("div",{class:[`${e.prefixCls}-form`,"\r\n              relative\r\n              w-full\r\n              px-5\r\n              py-8\r\n              mx-auto\r\n              my-auto\r\n              rounded-md\r\n              shadow-md\r\n              xl:ml-16 xl:bg-transparent\r\n              sm:px-8\r\n              xl:p-4 xl:shadow-none\r\n              sm:w-3/4\r\n              lg:w-2/4\r\n              xl:w-auto\r\n              enter-x\r\n            "]},[h(m),h(d),h(x),h(p),h(c)],2)])])])],2)};export default v;