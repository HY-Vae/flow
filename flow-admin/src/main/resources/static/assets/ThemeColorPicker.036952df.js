import{c as e}from"./index.eb9d6ed9.js";import{b as i}from"./index.38802916.js";import{j as s,bQ as t,K as r,o as n,m as o,V as a,ah as d,n as p}from"./vendor.686fd1d4.js";import"./index.a5a7ac1b.js";/* empty css              *//* empty css              */import"./index.01adf479.js";import"./index.ec14f0c5.js";import"./useWindowSizeFn.d82e06bf.js";import"./useFrameKeepAlive.2b8a1113.js";import"./useContentViewHeight.2141a994.js";/* empty css              */import"./useSortable.28b3aabe.js";import"./lock.96b63d62.js";var l=s({name:"ThemeColorPicker",components:{CheckOutlined:t},props:{colorList:{type:Array,defualt:[]},event:{type:Number},def:{type:String}},setup(s){const{prefixCls:t}=e("setting-theme-picker");return{prefixCls:t,handleClick:function(e){s.event&&i(s.event,e)}}}});l.render=function(e,i,s,t,l,m){const c=r("CheckOutlined");return n(),o("div",{class:e.prefixCls},[(n(!0),o(a,null,d(e.colorList||[],(i=>(n(),o("span",{key:i,onClick:s=>e.handleClick(i),class:[`${e.prefixCls}__item`,{[`${e.prefixCls}__item--active`]:e.def===i}],style:{background:i}},[p(c)],14,["onClick"])))),128))],2)};export default l;