import{M as e}from"./index.bd98c6bf.js";import{_ as n}from"./PageWrapper.fad7568d.js";import{k as a,r as t,u as o,K as r,o as s,n as i,Q as d,q as l,Y as m}from"./vendor.9d9efc92.js";import"./index.10276049.js";import"./createAsyncComponent.516e1800.js";import"./usePageContext.d3e060c8.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.b73559bc.js";var p=a({components:{MarkDown:e,PageWrapper:n},setup(){const e=t(null),n=t("\n# title\n\n# content\n");return{value:n,toggleTheme:function(){const n=o(e);if(!n)return;n.getVditor().setTheme("dark")},markDownRef:e,handleChange:function(e){n.value=e}}}});const u=m(" 黑暗主题 ");p.render=function(e,n,a,t,o,m){const p=r("a-button"),c=r("MarkDown"),f=r("PageWrapper");return s(),i(f,{title:"MarkDown组件示例"},{default:d((()=>[l(p,{onClick:e.toggleTheme,class:"mb-2",type:"primary"},{default:d((()=>[u])),_:1},8,["onClick"]),l(c,{value:e.value,onChange:e.handleChange,ref:"markDownRef"},null,8,["value","onChange"])])),_:1})};export default p;