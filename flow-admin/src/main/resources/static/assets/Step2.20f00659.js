var e=(e,t,s)=>new Promise(((i,a)=>{var n=e=>{try{r(s.next(e))}catch(t){a(t)}},o=e=>{try{r(s.throw(e))}catch(t){a(t)}},r=e=>e.done?i(e.value):Promise.resolve(e.value).then(n,o);r((s=s.apply(e,t)).next())}));import{_ as t}from"./BasicForm.f3cb7023.js";import{u as s}from"./useForm.c6cb6ef5.js";import{step2Schemas as i}from"./data.2505cb7f.js";import{y as a,bE as n,aZ as o,bp as r,z as c,A as m,Z as d,B as p,F as l,v as u,K as f,a9 as b}from"./vendor.880b4c6c.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.a33a5e4d.js";import"./index.08ac3aaf.js";/* empty css              *//* empty css              */import"./index.98d9f37c.js";import"./useWindowSizeFn.564cf32e.js";/* empty css              */import"./uuid.2b29000c.js";import"./download.2ac02f88.js";import"./base64Conver.bb012c73.js";import"./index.ce488518.js";var j=a({components:{BasicForm:t,[n.name]:n,[o.name]:o,[r.name]:r,[r.Item.name]:r.Item},emits:["next","prev"],setup(t,{emit:a}){const[n,{validate:o,setProps:r}]=s({labelWidth:80,schemas:i,actionColOptions:{span:14},resetButtonOptions:{text:"上一步"},submitButtonOptions:{text:"提交"},resetFunc:function(){return e(this,null,(function*(){a("prev")}))},submitFunc:function(){return e(this,null,(function*(){try{const e=yield o();r({submitButtonOptions:{loading:!0}}),setTimeout((()=>{r({submitButtonOptions:{loading:!1}}),a("next",e)}),1500)}catch(e){}}))}});return{register:n}}});const x=f("data-v-0c66c08b");c("data-v-0c66c08b");const v={class:"step2"},h=b(" ant-design@alipay.com "),g=b(" test@example.com "),B=b(" Vben "),F=b(" 500元 ");m();const _=x(((e,t,s,i,a,n)=>{const o=d("a-alert"),r=d("a-descriptions-item"),c=d("a-descriptions"),m=d("a-divider"),f=d("BasicForm");return p(),l("div",v,[u(o,{message:"确认转账后，资金将直接打入对方账户，无法退回。","show-icon":""}),u(c,{column:1,class:"mt-5"},{default:x((()=>[u(r,{label:"付款账户"},{default:x((()=>[h])),_:1}),u(r,{label:"收款账户"},{default:x((()=>[g])),_:1}),u(r,{label:"收款人姓名"},{default:x((()=>[B])),_:1}),u(r,{label:"转账金额"},{default:x((()=>[F])),_:1})])),_:1}),u(m),u(f,{onRegister:e.register},null,8,["onRegister"])])}));j.render=_,j.__scopeId="data-v-0c66c08b";export default j;