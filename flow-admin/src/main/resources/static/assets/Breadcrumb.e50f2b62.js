var N=Object.defineProperty,T=Object.defineProperties;var V=Object.getOwnPropertyDescriptors;var $=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var P=(e,t,r)=>t in e?N(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,k=(e,t)=>{for(var r in t||(t={}))L.call(t,r)&&P(e,r,t[r]);if($)for(var r of $(t))O.call(t,r)&&P(e,r,t[r]);return e},y=(e,t)=>T(e,V(t));var w=(e,t,r)=>new Promise((h,f)=>{var g=u=>{try{d(r.next(u))}catch(c){f(c)}},p=u=>{try{d(r.throw(u))}catch(c){f(c)}},d=u=>u.done?h(u.value):Promise.resolve(u.value).then(g,p);d((r=r.apply(e,t)).next())});import{A as x,cF as A,r as z,a as F,am as G,a0 as B,B as b,D as E,w as J,a6 as M,a1 as S,ad as K,J as D,ae as W,K as q}from"./vendor.7bee64cc.js";/* empty css                */import{_ as H,I as Q,p as U,a as X,l as Y,r as Z,b as ee,R as te,S as ne,y as ae,aW as re,j as se}from"./index.9eb02b52.js";const oe=x({name:"LayoutBreadcrumb",components:{Icon:Q,[A.name]:A},props:{theme:U.oneOf(["dark","light"])},setup(){const e=z([]),{currentRoute:t}=F(),{prefixCls:r}=X("layout-breadcrumb"),{getShowBreadCrumbIcon:h}=Y(),f=Z(),{t:g}=ee();G(()=>w(this,null,function*(){var C,I,R;if(t.value.name===te)return;const s=yield ne(),n=t.value.matched,a=n==null?void 0:n[n.length-1];let o=t.value.path;a&&((C=a==null?void 0:a.meta)==null?void 0:C.currentActiveMenu)&&(o=a.meta.currentActiveMenu);const i=ae(s,o),m=s.filter(j=>j.path===i[0]),l=p(m,i);if(!l||l.length===0)return;const _=d(l);((I=t.value.meta)==null?void 0:I.currentActiveMenu)&&_.push(y(k({},t.value),{name:((R=t.value.meta)==null?void 0:R.title)||t.value.name})),e.value=_}));function p(s,n){const a=[];return s.forEach(o=>{var i,m;n.includes(o.path)&&a.push(y(k({},o),{name:((i=o.meta)==null?void 0:i.title)||o.name})),((m=o.children)==null?void 0:m.length)&&a.push(...p(o.children,n))}),a}function d(s){return re(s,n=>{const{meta:a,name:o}=n;if(!a)return!!o;const{title:i,hideBreadcrumb:m}=a;return!(!i||m)}).filter(n=>{var a;return!((a=n.meta)==null?void 0:a.hideBreadcrumb)})}function u(s,n,a){a==null||a.preventDefault();const{children:o,redirect:i,meta:m}=s;if((o==null?void 0:o.length)&&!i){a==null||a.stopPropagation();return}if(!(m==null?void 0:m.carryParam))if(i&&se(i))f(i);else{let l="";n.length===1?l=n[0]:l=`${n.slice(1).pop()||""}`,l=/^\//.test(l)?l:`/${l}`,f(l)}}function c(s,n){return s.indexOf(n)!==s.length-1}function v(s){var n;return s.icon||((n=s.meta)==null?void 0:n.icon)}return{routes:e,t:g,prefixCls:r,getIcon:v,getShowBreadCrumbIcon:h,handleClick:u,hasRedirect:c}}}),ce={key:1};function ie(e,t,r,h,f,g){const p=B("Icon"),d=B("router-link"),u=B("a-breadcrumb");return b(),E("div",{class:q([e.prefixCls,`${e.prefixCls}--${e.theme}`])},[J(u,{routes:e.routes},{itemRender:M(({route:c,routes:v,paths:s})=>[e.getShowBreadCrumbIcon&&e.getIcon(c)?(b(),S(p,{key:0,icon:e.getIcon(c)},null,8,["icon"])):K("",!0),e.hasRedirect(v,c)?(b(),S(d,{key:2,to:"",onClick:n=>e.handleClick(c,s,n)},{default:M(()=>[W(D(e.t(c.name||c.meta.title)),1)]),_:2},1032,["onClick"])):(b(),E("span",ce,D(e.t(c.name||c.meta.title)),1))]),_:1},8,["routes"])],2)}var fe=H(oe,[["render",ie]]);export{fe as default};