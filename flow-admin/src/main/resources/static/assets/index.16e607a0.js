import{k as a,ad as e,a as r,f as t,u as s,K as n,o,n as p,Q as u,Y as d,s as m,q as i}from"./vendor.9d9efc92.js";import{_ as c}from"./PageWrapper.fad7568d.js";import"./index.10276049.js";import"./usePageContext.d3e060c8.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.b73559bc.js";var f=a({name:"TestTab",components:{PageWrapper:c,Input:e},setup(){const{currentRoute:a}=r();return{params:t((()=>s(a).params))}}});const l=i("br",null,null,-1),j=d(" Keep Alive ");f.render=function(a,e,r,t,s,c){const f=n("Input"),b=n("PageWrapper");return o(),p(b,{title:"带参数标签页",content:"支持带参数多tab缓存"},{default:u((()=>[d(" Current Param : "+m(a.params)+" ",1),l,j,i(f)])),_:1})};export default f;