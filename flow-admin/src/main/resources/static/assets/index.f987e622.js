import{w as W,ah as v,j as c,fv as x,fw as y,N as _,fx as b,aw as $,dK as g,az as B,a as R,cF as I,aB as C,o as P,k as z,B as m,p as u,C as k}from"./index.0280002f.js";import{P as M}from"./index.432b4215.js";import"./index.4266ca8e.js";import"./index.02c8bfe1.js";import"./useSize.71621680.js";import"./eagerComputed.832d624f.js";import"./useWindowSizeFn.c0eea5f2.js";import"./useContentViewHeight.084217e3.js";import"./ArrowLeftOutlined.e9ea5e65.js";import"./index.e0f520b3.js";import"./transButton.fa31f1ed.js";const N=Symbol("watermark-dom");function S(n=W(document.body)){const r=b(function(){const t=c(n);if(!t)return;const{clientHeight:e,clientWidth:o}=t;i({height:e,width:o})}),s=N.toString(),l=v(),f=()=>{const t=c(l);l.value=void 0;const e=c(n);!e||(t&&e.removeChild(t),x(e,r))};function w(t){const e=document.createElement("canvas"),o=300,d=240;Object.assign(e,{width:o,height:d});const a=e.getContext("2d");return a&&(a.rotate(-20*Math.PI/120),a.font="15px Vedana",a.fillStyle="rgba(0, 0, 0, 0.15)",a.textAlign="left",a.textBaseline="middle",a.fillText(t,o/20,d)),e.toDataURL("image/png")}function i(t={}){const e=c(l);!e||(g(t.width)&&(e.style.width=`${t.width}px`),g(t.height)&&(e.style.height=`${t.height}px`),g(t.str)&&(e.style.background=`url(${w(t.str)}) left top repeat`))}const p=t=>{if(c(l))return i({str:t}),s;const e=document.createElement("div");l.value=e,e.id=s,e.style.pointerEvents="none",e.style.top="0px",e.style.left="0px",e.style.position="absolute",e.style.zIndex="100000";const o=c(n);if(!o)return s;const{clientHeight:d,clientWidth:a}=o;return i({str:t,width:a,height:d}),o.appendChild(e),s};function h(t){p(t),y(document.documentElement,r),$()&&_(()=>{f()})}return{setWatermark:h,clear:f}}const E=R({components:{CollapseContainer:I,PageWrapper:M},setup(){const n=W(null),{setWatermark:r,clear:s}=S();return{setWatermark:r,clear:s,areaRef:n}}});function L(n,r,s,l,f,w){const i=C("a-button"),p=C("CollapseContainer"),h=C("PageWrapper");return P(),z(h,{title:"\u6C34\u5370\u793A\u4F8B"},{default:m(()=>[u(p,{class:"w-full h-32 bg-white rounded-md",title:"Global WaterMark"},{default:m(()=>[u(i,{type:"primary",class:"mr-2",onClick:r[0]||(r[0]=t=>n.setWatermark("WaterMark Info"))},{default:m(()=>[k(" Create ")]),_:1}),u(i,{color:"error",class:"mr-2",onClick:n.clear},{default:m(()=>[k(" Clear ")]),_:1},8,["onClick"]),u(i,{color:"warning",class:"mr-2",onClick:r[1]||(r[1]=t=>n.setWatermark("WaterMark Info New"))},{default:m(()=>[k(" Reset ")]),_:1})]),_:1})]),_:1})}var q=B(E,[["render",L]]);export{q as default};