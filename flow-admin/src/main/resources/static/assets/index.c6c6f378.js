import{j as o,bB as e,K as i,o as r,m as s,Q as n,n as d,Y as a}from"./vendor.686fd1d4.js";/* empty css              */import{b as t}from"./index.08cdb95c.js";import p from"./Modal1.9cab5756.js";import l from"./Modal2.32d50d5a.js";import m from"./Modal3.ab0b0c82.js";import c from"./Modal4.f42d74da.js";import{P as f}from"./index.52d50d5a.js";import"./index.ffeb6485.js";import"./useWindowSizeFn.d82e06bf.js";import"./BasicForm.99631a91.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.f6d89420.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./download.a58b74c3.js";import"./base64Conver.bb012c73.js";import"./index.dc4f899a.js";import"./useForm.29bf2c0c.js";import"./useContentViewHeight.7085396b.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.172ad1ec.js";var j=o({components:{Alert:e,Modal1:p,Modal2:l,Modal3:m,Modal4:c,PageWrapper:f},setup(){const[o,{openModal:e}]=t(),[i,{openModal:r}]=t(),[s,{openModal:n}]=t(),[d,{openModal:a}]=t();return{register1:o,openModal1:e,register2:i,openModal2:r,register3:s,openModal3:n,register4:d,openModal4:a,send:function(){a(!0,{data:"content",info:"Info"})},openModalLoading:function(){e(!0)}}}});const g=a(" 打开弹窗,加载动态数据并自动调整高度(默认可以拖动/全屏) "),M=a(" 打开弹窗 "),b=a(" 打开弹窗 "),u=a(" 打开弹窗并传递数据 ");j.render=function(o,e,a,t,p,l){const m=i("Alert"),c=i("a-button"),f=i("Modal1"),j=i("Modal2"),x=i("Modal3"),y=i("Modal4"),C=i("PageWrapper");return r(),s(C,{title:"modal组件使用示例"},{default:n((()=>[d(m,{message:"使用 useModal 进行弹窗操作，默认可以拖动，可以通过 draggable\r\n    参数进行控制是否可以拖动/全屏，并演示了在Modal内动态加载内容并自动调整高度","show-icon":""}),d(c,{type:"primary",class:"my-4",onClick:o.openModalLoading},{default:n((()=>[g])),_:1},8,["onClick"]),d(m,{message:"内外同时同时显示隐藏","show-icon":""}),d(c,{type:"primary",class:"my-4",onClick:o.openModal2},{default:n((()=>[M])),_:1},8,["onClick"]),d(m,{message:"自适应高度","show-icon":""}),d(c,{type:"primary",class:"my-4",onClick:o.openModal3},{default:n((()=>[b])),_:1},8,["onClick"]),d(m,{message:"内外数据交互","show-icon":""}),d(c,{type:"primary",class:"my-4",onClick:o.send},{default:n((()=>[u])),_:1},8,["onClick"]),d(f,{onRegister:o.register1,minHeight:100},null,8,["onRegister"]),d(j,{onRegister:o.register2},null,8,["onRegister"]),d(x,{onRegister:o.register3},null,8,["onRegister"]),d(y,{onRegister:o.register4},null,8,["onRegister"])])),_:1})};export default j;