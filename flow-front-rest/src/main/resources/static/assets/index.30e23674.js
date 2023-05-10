import{m as c,r as _e,a as ge,w as Le,K as ye,v as me,J as Re,e as J,S as R,f3 as tt,bc as de,f4 as nt,V as Ae,_ as y,Q as ae,R as at,d6 as De,a3 as W,Y as it,bb as pe,ar as Te,X as rt,Z as Q,bq as lt,ad as ot,bn as V,F as we,aq as st,bk as ut,bX as fe,cH as ct,dz as dt,f5 as pt}from"./index.f3fe0f3f.js";import{T as Oe}from"./transButton.b11946f6.js";import{C as ft}from"./CopyOutlined.09a0657f.js";var vt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"},yt=vt;function Ne(t){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(a);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(a).filter(function(s){return Object.getOwnPropertyDescriptor(a,s).enumerable}))),r.forEach(function(s){mt(t,s,a[s])})}return t}function mt(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var be=function(e,a){var r=Ne({},e,a.attrs);return c(_e,Ne({},r,{icon:yt}),null)};be.displayName="EnterOutlined";be.inheritAttrs=!1;var gt=be,bt=function(){return{prefixCls:String,value:String,maxlength:Number,autoSize:{type:[Boolean,Object]},onSave:Function,onCancel:Function,onEnd:Function,onChange:Function,originContent:String,direction:String}},ht=ge({compatConfig:{MODE:3},name:"Editable",props:bt(),setup:function(e,a){var r=a.emit,s=a.slots,l=Le({current:e.value||"",lastKeyCode:void 0,inComposition:!1,cancelFlag:!1});ye(function(){return e.value},function(d){l.current=d});var u=me();Re(function(){if(u.value){var d,x=(d=u.value)===null||d===void 0?void 0:d.resizableTextArea,L=x==null?void 0:x.textArea;L.focus();var j=L.value.length;L.setSelectionRange(j,j)}});function v(d){u.value=d}function m(d){var x=d.target.value;l.current=x.replace(/[\r\n]/g,""),r("change",l.current)}function i(){l.inComposition=!0}function g(){l.inComposition=!1}function S(d){var x=d.keyCode;x===de.ENTER&&d.preventDefault(),!l.inComposition&&(l.lastKeyCode=x)}function $(d){var x=d.keyCode,L=d.ctrlKey,j=d.altKey,p=d.metaKey,C=d.shiftKey;l.lastKeyCode===x&&!l.inComposition&&!L&&!j&&!p&&!C&&(x===de.ENTER?(z(),r("end")):x===de.ESC&&(l.current=e.originContent,r("cancel")))}function K(){z()}function z(){r("save",l.current.trim())}var B=J(function(){var d;return d={},R(d,"".concat(e.prefixCls),!0),R(d,"".concat(e.prefixCls,"-edit-content"),!0),R(d,"".concat(e.prefixCls,"-rtl"),e.direction==="rtl"),d});return function(){return c("div",{class:B.value},[c(tt,{ref:v,maxlength:e.maxlength,value:l.current,onChange:m,onKeydown:S,onKeyup:$,onCompositionstart:i,onCompositionend:g,onBlur:K,rows:1,autoSize:e.autoSize===void 0||e.autoSize},null),s.enterIcon?s.enterIcon({className:"".concat(e.prefixCls,"-edit-content-confirm")}):c(gt,{class:"".concat(e.prefixCls,"-edit-content-confirm")},null)])}}}),Ct=ht,xt=3,Et=8,O,ve={padding:0,margin:0,display:"inline",lineHeight:"inherit"};function St(t){var e=Array.prototype.slice.apply(t);return e.map(function(a){return"".concat(a,": ").concat(t.getPropertyValue(a),";")}).join("")}function Ie(t,e){t.setAttribute("aria-hidden","true");var a=window.getComputedStyle(e),r=St(a);t.setAttribute("style",r),t.style.position="fixed",t.style.left="0",t.style.height="auto",t.style.minHeight="auto",t.style.maxHeight="auto",t.style.paddingTop="0",t.style.paddingBottom="0",t.style.borderTopWidth="0",t.style.borderBottomWidth="0",t.style.top="-999999px",t.style.zIndex="-1000",t.style.textOverflow="clip",t.style.whiteSpace="normal",t.style.webkitLineClamp="none"}function Tt(t){var e=document.createElement("div");Ie(e,t),e.appendChild(document.createTextNode("text")),document.body.appendChild(e);var a=e.getBoundingClientRect().height;return document.body.removeChild(e),a}var wt=function(t,e,a,r,s){O||(O=document.createElement("div"),O.setAttribute("aria-hidden","true"),document.body.appendChild(O));var l=e.rows,u=e.suffix,v=u===void 0?"":u,m=Tt(t),i=Math.round(m*l*100)/100;Ie(O,t);var g=nt({render:function(){return c("div",{style:ve},[c("span",{style:ve},[a,v]),c("span",{style:ve},[r])])}});g.mount(O);function S(){var p=Math.round(O.getBoundingClientRect().height*100)/100;return p-.1<=i}if(S())return g.unmount(),{content:a,text:O.innerHTML,ellipsis:!1};var $=Array.prototype.slice.apply(O.childNodes[0].childNodes[0].cloneNode(!0).childNodes).filter(function(p){var C=p.nodeType,T=p.data;return C!==Et&&T!==""}),K=Array.prototype.slice.apply(O.childNodes[0].childNodes[1].cloneNode(!0).childNodes);g.unmount();var z=[];O.innerHTML="";var B=document.createElement("span");O.appendChild(B);var d=document.createTextNode(s+v);B.appendChild(d),K.forEach(function(p){O.appendChild(p)});function x(p){B.insertBefore(p,d)}function L(p,C){var T=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,N=arguments.length>3&&arguments[3]!==void 0?arguments[3]:C.length,se=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0,M=Math.floor((T+N)/2),G=C.slice(0,M);if(p.textContent=G,T>=N-1)for(var H=N;H>=T;H-=1){var X=C.slice(0,H);if(p.textContent=X,S()||!X)return H===C.length?{finished:!1,vNode:C}:{finished:!0,vNode:X}}return S()?L(p,C,M,N,M):L(p,C,T,M,se)}function j(p){var C=p.nodeType;if(C===xt){var T=p.textContent||"",N=document.createTextNode(T);return x(N),L(N,T)}return{finished:!1,vNode:null}}return $.some(function(p){var C=j(p),T=C.finished,N=C.vNode;return N&&z.push(N),T}),{content:z,text:O.innerHTML,ellipsis:!0}},Ot=["prefixCls","class","direction","component"],Nt=function(){return{prefixCls:String,direction:String,component:String}},Pt=ge({name:"ATypography",inheritAttrs:!1,props:Nt(),setup:function(e,a){var r=a.slots,s=a.attrs,l=Ae("typography",e),u=l.prefixCls,v=l.direction;return function(){var m,i=y(y({},e),s);i.prefixCls,i.class,i.direction;var g=i.component,S=g===void 0?"article":g,$=ae(i,Ot);return c(S,y({class:at(u.value,R({},"".concat(u.value,"-rtl"),v.value==="rtl"),s.class)},$),{default:function(){return[(m=r.default)===null||m===void 0?void 0:m.call(r)]}})}}}),P=Pt,$t=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var a=document.activeElement,r=[],s=0;s<e.rangeCount;s++)r.push(e.getRangeAt(s));switch(a.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":a.blur();break;default:a=null;break}return e.removeAllRanges(),function(){e.type==="Caret"&&e.removeAllRanges(),e.rangeCount||r.forEach(function(l){e.addRange(l)}),a&&a.focus()}},kt=$t,Pe={"text/plain":"Text","text/html":"Url",default:"Text"},_t="Copy to clipboard: #{key}, Enter";function Lt(t){var e=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return t.replace(/#{\s*key\s*}/g,e)}function Rt(t,e){var a,r,s,l,u,v=!1;e||(e={});var m=e.debug||!1;try{r=kt(),s=document.createRange(),l=document.getSelection(),u=document.createElement("span"),u.textContent=t,u.style.all="unset",u.style.position="fixed",u.style.top=0,u.style.clip="rect(0, 0, 0, 0)",u.style.whiteSpace="pre",u.style.webkitUserSelect="text",u.style.MozUserSelect="text",u.style.msUserSelect="text",u.style.userSelect="text",u.addEventListener("copy",function(g){if(g.stopPropagation(),e.format)if(g.preventDefault(),typeof g.clipboardData=="undefined"){m&&console.warn("unable to use e.clipboardData"),m&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var S=Pe[e.format]||Pe.default;window.clipboardData.setData(S,t)}else g.clipboardData.clearData(),g.clipboardData.setData(e.format,t);e.onCopy&&(g.preventDefault(),e.onCopy(g.clipboardData))}),document.body.appendChild(u),s.selectNodeContents(u),l.addRange(s);var i=document.execCommand("copy");if(!i)throw new Error("copy command was unsuccessful");v=!0}catch(g){m&&console.error("unable to copy using execCommand: ",g),m&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(e.format||"text",t),e.onCopy&&e.onCopy(window.clipboardData),v=!0}catch(S){m&&console.error("unable to copy using clipboardData: ",S),m&&console.error("falling back to prompt"),a=Lt("message"in e?e.message:_t),window.prompt(a,t)}}finally{l&&(typeof l.removeRange=="function"?l.removeRange(s):l.removeAllRanges()),u&&document.body.removeChild(u),r()}return v}var At={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},Dt=At;function $e(t){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(a);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(a).filter(function(s){return Object.getOwnPropertyDescriptor(a,s).enumerable}))),r.forEach(function(s){It(t,s,a[s])})}return t}function It(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var he=function(e,a){var r=$e({},e,a.attrs);return c(_e,$e({},r,{icon:Dt}),null)};he.displayName="EditOutlined";he.inheritAttrs=!1;var Bt=he,jt=["type","disabled","content","class","style"],Mt=De("webkitLineClamp"),zt=De("textOverflow"),ke="...",Y=function(){return{editable:{type:[Boolean,Object],default:void 0},copyable:{type:[Boolean,Object],default:void 0},prefixCls:String,component:String,type:String,disabled:{type:Boolean,default:void 0},ellipsis:{type:[Boolean,Object],default:void 0},code:{type:Boolean,default:void 0},mark:{type:Boolean,default:void 0},underline:{type:Boolean,default:void 0},delete:{type:Boolean,default:void 0},strong:{type:Boolean,default:void 0},keyboard:{type:Boolean,default:void 0},content:String,"onUpdate:content":Function}},Ht=ge({compatConfig:{MODE:3},name:"Base",inheritAttrs:!1,props:Y(),setup:function(e,a){var r=a.slots,s=a.attrs,l=a.emit,u=Ae("typography",e),v=u.prefixCls,m=u.direction,i=Le({copied:!1,ellipsisText:"",ellipsisContent:null,isEllipsis:!1,expanded:!1,clientRendered:!1,expandStr:"",copyStr:"",copiedStr:"",editStr:"",copyId:void 0,rafId:void 0,prevProps:void 0,originContent:""}),g=me(),S=me(),$=J(function(){var n=e.ellipsis;return n?y({rows:1,expandable:!1},W(n)==="object"?n:null):{}});Re(function(){i.clientRendered=!0}),it(function(){clearTimeout(i.copyId),pe.cancel(i.rafId)}),ye([function(){return $.value.rows},function(){return e.content}],function(){Te(function(){G()})},{flush:"post",deep:!0,immediate:!0}),rt(function(){e.content===void 0&&(Q(!e.editable,"Typography","When `editable` is enabled, please use `content` instead of children"),Q(!e.ellipsis,"Typography","When `ellipsis` is enabled, please use `content` instead of children"))});function K(){var n,o;return e.ellipsis||e.editable?e.content:(n=g.value)===null||n===void 0||(o=n.$el)===null||o===void 0?void 0:o.innerText}function z(n){var o=$.value.onExpand;i.expanded=!0,o==null||o(n)}function B(n){n.preventDefault(),i.originContent=e.content,M(!0)}function d(n){x(n),M(!1)}function x(n){var o=p.value.onChange;n!==e.content&&(l("update:content",n),o==null||o(n))}function L(){var n,o;(n=(o=p.value).onCancel)===null||n===void 0||n.call(o),M(!1)}function j(n){n.preventDefault(),n.stopPropagation();var o=e.copyable,f=y({},W(o)==="object"?o:null);f.text===void 0&&(f.text=K()),Rt(f.text||""),i.copied=!0,Te(function(){f.onCopy&&f.onCopy(),i.copyId=setTimeout(function(){i.copied=!1},3e3)})}var p=J(function(){var n=e.editable;return n?y({},W(n)==="object"?n:null):{editing:!1}}),C=lt(!1,{value:J(function(){return p.value.editing})}),T=ot(C,2),N=T[0],se=T[1];function M(n){var o=p.value.onStart;n&&o&&o(),se(n)}ye(N,function(n){if(!n){var o;(o=S.value)===null||o===void 0||o.focus()}},{flush:"post"});function G(){pe.cancel(i.rafId),i.rafId=pe(function(){X()})}var H=J(function(){var n=$.value,o=n.rows,f=n.expandable,b=n.suffix,w=n.onEllipsis,h=n.tooltip;return b||h||e.editable||e.copyable||f||w?!1:o===1?zt:Mt}),X=function(){var o,f,b=i.ellipsisText,w=i.isEllipsis,h=$.value,E=h.rows,k=h.suffix,A=h.onEllipsis;if(!(!E||E<0||!((o=g.value)!==null&&o!==void 0&&o.$el)||i.expanded||e.content===void 0)&&!H.value){var _=wt((f=g.value)===null||f===void 0?void 0:f.$el,{rows:E,suffix:k},e.content,Ce(!0),ke),q=_.content,U=_.text,D=_.ellipsis;(b!==U||i.isEllipsis!==D)&&(i.ellipsisText=U,i.ellipsisContent=q,i.isEllipsis=D,w!==D&&A&&A(D))}};function He(n,o){var f=n.mark,b=n.code,w=n.underline,h=n.delete,E=n.strong,k=n.keyboard,A=o;function _(q,U){if(!!q){var D=function(){return A}();A=c(U,null,{default:function(){return[D]}})}}return _(E,"strong"),_(w,"u"),_(h,"del"),_(b,"code"),_(f,"mark"),_(k,"kbd"),A}function Ke(n){var o=$.value,f=o.expandable,b=o.symbol;if(!f||!n&&(i.expanded||!i.isEllipsis))return null;var w=(r.ellipsisSymbol?r.ellipsisSymbol():b)||i.expandStr;return c("a",{key:"expand",class:"".concat(v.value,"-expand"),onClick:z,"aria-label":i.expandStr},[w])}function Ue(){if(!!e.editable){var n=e.editable,o=n.tooltip,f=n.triggerType,b=f===void 0?["icon"]:f,w=r.editableIcon?r.editableIcon():c(Bt,{role:"button"},null),h=r.editableTooltip?r.editableTooltip():i.editStr,E=typeof h=="string"?h:"";return b.indexOf("icon")!==-1?c(fe,{key:"edit",title:o===!1?"":h},{default:function(){return[c(Oe,{ref:S,class:"".concat(v.value,"-edit"),onClick:B,"aria-label":E},{default:function(){return[w]}})]}}):null}}function Fe(){if(!!e.copyable){var n=e.copyable.tooltip,o=i.copied?i.copiedStr:i.copyStr,f=r.copyableTooltip?r.copyableTooltip({copied:i.copied}):o,b=typeof f=="string"?f:"",w=i.copied?c(dt,null,null):c(ft,null,null),h=r.copyableIcon?r.copyableIcon({copied:!!i.copied}):w;return c(fe,{key:"copy",title:n===!1?"":f},{default:function(){return[c(Oe,{class:["".concat(v.value,"-copy"),R({},"".concat(v.value,"-copy-success"),i.copied)],onClick:j,"aria-label":b},{default:function(){return[h]}})]}})}}function We(){var n=s.class,o=s.style,f=p.value,b=f.maxlength,w=f.autoSize,h=f.onEnd;return c(Ct,{class:n,style:o,prefixCls:v.value,value:e.content,originContent:i.originContent,maxlength:b,autoSize:w,onSave:d,onChange:x,onCancel:L,onEnd:h,direction:m.value},{enterIcon:r.editableEnterIcon})}function Ce(n){return[Ke(n),Ue(),Fe()].filter(function(o){return o})}return function(){var n,o=p.value.triggerType,f=o===void 0?["icon"]:o,b=e.ellipsis||e.editable?e.content!==void 0?e.content:(n=r.default)===null||n===void 0?void 0:n.call(r):r.default?r.default():e.content;return N.value?We():c(ct,{componentName:"Text",children:function(h){var E,k=y(y({},e),s),A=k.type,_=k.disabled;k.content;var q=k.class,U=k.style,D=ae(k,jt),ee=$.value,I=ee.rows,xe=ee.suffix,ue=ee.tooltip,Ve=h.edit,Xe=h.copy,qe=h.copied,Je=h.expand;i.editStr=Ve,i.copyStr=Xe,i.copiedStr=qe,i.expandStr=Je;var Qe=V(D,["prefixCls","editable","copyable","ellipsis","mark","code","delete","underline","strong","keyboard","onUpdate:content"]),te=H.value,Ye=I===1&&te,Ee=I&&I>1&&te,F=b,Ze;if(I&&i.isEllipsis&&!i.expanded&&!te){var ce,Se=D.title,ne=Se||"";!Se&&(typeof b=="string"||typeof b=="number")&&(ne=String(b)),ne=(ce=ne)===null||ce===void 0?void 0:ce.slice(String(i.ellipsisContent||"").length),F=c(we,null,[st(i.ellipsisContent),c("span",{title:ne,"aria-hidden":"true"},[ke]),xe])}else F=c(we,null,[b,xe]);F=He(e,F);var Ge=ue&&I&&i.isEllipsis&&!i.expanded&&!te,et=r.ellipsisTooltip?r.ellipsisTooltip():ue;return c(ut,{onResize:G,disabled:!I},{default:function(){return[c(P,y({ref:g,class:[(E={},R(E,"".concat(v.value,"-").concat(A),A),R(E,"".concat(v.value,"-disabled"),_),R(E,"".concat(v.value,"-ellipsis"),I),R(E,"".concat(v.value,"-single-line"),I===1&&!i.isEllipsis),R(E,"".concat(v.value,"-ellipsis-single-line"),Ye),R(E,"".concat(v.value,"-ellipsis-multiple-line"),Ee),E),q],style:y(y({},U),{},{WebkitLineClamp:Ee?I:void 0}),"aria-label":Ze,direction:m.value,onClick:f.indexOf("text")!==-1?B:function(){}},Qe),{default:function(){return[Ge?c(fe,{title:ue===!0?b:et},{default:function(){return[c("span",null,[F])]}}):F,Ce()]}})]}})}},null)}}}),Z=Ht,Kt=["ellipsis","rel"],Ut=function(){return V(y(y({},Y()),{},{ellipsis:{type:Boolean,default:void 0}}),["component"])},ie=function(e,a){var r=a.slots,s=a.attrs,l=y(y({},e),s),u=l.ellipsis,v=l.rel,m=ae(l,Kt);Q(W(u)!=="object","Typography.Link","`ellipsis` only supports boolean value.");var i=y(y({},m),{},{rel:v===void 0&&m.target==="_blank"?"noopener noreferrer":v,ellipsis:!!u,component:"a"});return delete i.navigate,c(Z,i,r)};ie.displayName="ATypographyLink";ie.inheritAttrs=!1;ie.props=Ut();var Be=ie,Ft=function(){return V(Y(),["component"])},re=function(e,a){var r=a.slots,s=a.attrs,l=y(y({},e),{},{component:"div"},s);return c(Z,l,r)};re.displayName="ATypographyParagraph";re.inheritAttrs=!1;re.props=Ft();var je=re,Wt=function(){return y(y({},V(Y(),["component"])),{},{ellipsis:{type:[Boolean,Object],default:void 0}})},le=function(e,a){var r=a.slots,s=a.attrs,l=e.ellipsis;Q(W(l)!=="object"||!l||!("expandable"in l)&&!("rows"in l),"Typography.Text","`ellipsis` do not support `expandable` or `rows` props.");var u=y(y({},e),{},{ellipsis:l&&W(l)==="object"?V(l,["expandable","rows"]):l,component:"span"},s);return c(Z,u,r)};le.displayName="ATypographyText";le.inheritAttrs=!1;le.props=Wt();var Me=le,Vt=["level"],Xt=pt(1,2,3,4,5),qt=function(){return y(y({},V(Y(),["component","strong"])),{},{level:Number})},oe=function(e,a){var r=a.slots,s=a.attrs,l=e.level,u=l===void 0?1:l,v=ae(e,Vt),m;Xt.indexOf(u)!==-1?m="h".concat(u):(Q(!1,"Typography","Title only accept `1 | 2 | 3 | 4 | 5` as `level` value."),m="h1");var i=y(y({},v),{},{component:m},s);return c(Z,i,r)};oe.displayName="ATypographyTitle";oe.inheritAttrs=!1;oe.props=qt();var ze=oe;P.Text=Me;P.Title=ze;P.Paragraph=je;P.Link=Be;P.Base=Z;P.install=function(t){return t.component(P.name,P),t.component(P.Text.displayName,Me),t.component(P.Title.displayName,ze),t.component(P.Paragraph.displayName,je),t.component(P.Link.displayName,Be),t};export{P as T};