import e from"./CurrentPermissionMode.c413e4cf.js";import{ak as s,f as o,X as t,b1 as n,b2 as i}from"./index.44a64fe8.js";import{P as r}from"./index.30fbc9dc.js";import{j as a,bB as d,i as c,k as m,l as f,K as u,o as l,m as p,x as k,n as b,Y as j}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              */import"./useContentViewHeight.7797c6a9.js";import"./useWindowSizeFn.d82e06bf.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.172ad1ec.js";var h=a({components:{Alert:d,CurrentPermissionMode:e,PageWrapper:r},setup(){const{refreshMenu:e}=s(),r=o(),a=t(),d=c((()=>a.getProjectConfig.permissionMode===i.BACK));return{RoleEnum:n,refreshMenu:e,switchToken:function(s){return o=this,t=null,n=function*(){const o="fakeToken"+s;r.setToken(o),r.getUserInfoAction(),e()},new Promise(((e,s)=>{var i=e=>{try{a(n.next(e))}catch(o){s(o)}},r=e=>{try{a(n.throw(e))}catch(o){s(o)}},a=s=>s.done?e(s.value):Promise.resolve(s.value).then(i,r);a((n=n.apply(o,t)).next())}));var o,t,n},isBackPremissionMode:d}}});const P=k();m("data-v-45cf91b6");const v={class:"mt-4"},x=j(" 权限切换(请先切换权限模式为后台权限模式): "),M=j(" 获取用户id为1的菜单 "),g=j(" 获取用户id为2的菜单 ");f();const C=P(((e,s,o,t,n,i)=>{const r=u("CurrentPermissionMode"),a=u("Alert"),d=u("a-button"),c=u("a-button-group"),m=u("PageWrapper");return l(),p(m,{title:"后台权限示例",contentBackground:"",contentClass:"p-4",content:"目前mock了两组数据， id为1 和 2 具体返回的菜单可以在mock/sys/menu.ts内查看"},{default:P((()=>[b(r),b(a,{class:"mt-4",type:"info",message:"点击后请查看左侧菜单变化","show-icon":""}),b("div",v,[x,b(c,null,{default:P((()=>[b(d,{onClick:s[1]||(s[1]=s=>e.switchToken(1)),disabled:!e.isBackPremissionMode},{default:P((()=>[M])),_:1},8,["disabled"]),b(d,{onClick:s[2]||(s[2]=s=>e.switchToken(2)),disabled:!e.isBackPremissionMode},{default:P((()=>[g])),_:1},8,["disabled"])])),_:1})])])),_:1})}));h.render=C,h.__scopeId="data-v-45cf91b6";export default h;