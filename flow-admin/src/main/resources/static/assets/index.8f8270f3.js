import{M as e}from"./index.2c9b3d58.js";import{P as n}from"./index.0aed0d9d.js";import{y as a,r as t,u as o,Z as r,B as l,F as i,a2 as s,v as d,a9 as u}from"./vendor.880b4c6c.js";import"./index.4926e6da.js";import"./index.0795d69f.js";import"./useWindowSizeFn.564cf32e.js";import"./onMountedOrActivated.8f899bfb.js";/* empty css              *//* empty css              */import"./useContentViewHeight.dbded6ea.js";var c=a({components:{MarkDown:e,PageWrapper:n},setup(){const e=t(null),n=t("\n# title\n\n# content\n");return{value:n,toggleTheme:function(){const n=o(e);if(!n)return;n.getVditor().setTheme("dark")},markDownRef:e,handleChange:function(e){n.value=e},clearValue:function(){n.value=""}}}});const m=u(" 黑暗主题 "),p=u(" 清空内容 ");c.render=function(e,n,a,t,o,u){const c=r("a-button"),f=r("MarkDown"),g=r("PageWrapper");return l(),i(g,{title:"MarkDown组件示例"},{default:s((()=>[d(c,{onClick:e.toggleTheme,class:"mb-2",type:"primary"},{default:s((()=>[m])),_:1},8,["onClick"]),d(c,{onClick:e.clearValue,class:"mb-2",type:"default"},{default:s((()=>[p])),_:1},8,["onClick"]),d(f,{value:e.value,"onUpdate:value":n[1]||(n[1]=n=>e.value=n),onChange:e.handleChange,ref:"markDownRef",placeholder:"这是占位文本"},null,8,["value","onChange"])])),_:1})};export default c;