import{_ as e}from"./TableImg.4999f0f8.js";import"./useForm.6952a806.js";import{u as s}from"./useTable.56e0200e.js";import{P as o}from"./index.55f1fb99.js";import{y as t,aX as a,b6 as r,am as n,bn as i,c3 as m,bk as d,Z as p,B as c,F as f,a1 as u,v as j,a8 as b,J as l}from"./vendor.3dc066e5.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import{todoTableSchema as x,searchFormSchema as h}from"./data.59a6f3c8.js";import g from"./ProcessHeader.5bab29be.js";import I from"./LaunchButton.544e0d2e.js";import{a as T,h as B}from"./process.99e51905.js";/* empty css              */import"./index.f77a0916.js";/* empty css              *//* empty css              *//* empty css              */import"./useWindowSizeFn.308e6090.js";import"./index.f892cb46.js";import"./onMountedOrActivated.c01d8630.js";import"./useSortable.121e2df4.js";/* empty css              *//* empty css              */import"./index.d12a2c0f.js";import"./download.36d5ff94.js";import"./index.932a5062.js";/* empty css              *//* empty css              */import"./useContentViewHeight.0ff5ff24.js";var P=t({components:{BasicTable:e,ProcessHeader:g,LaunchButton:I,PageWrapper:o,[a.name]:a,[r.name]:r,AEmpty:n,[i.name]:i,[i.Item.name]:i.Item,[m.name]:m,[m.Step.name]:m.Step,[d.name]:d,[d.TabPane.name]:d.TabPane},setup(){const[e,{getForm:o}]=s({api:T,title:"",columns:x,formConfig:{labelWidth:120,schemas:h,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},useSearchForm:!0,pagination:!0,showIndexColumn:!0,canResize:!1});return B().then((e=>{const{updateSchema:s}=o();s({field:"appSn",componentProps:{options:e}})})),{registerTodoTable:e}}});const S={class:"m-1 desc-wrap process"};P.render=function(e,s,o,t,a,r){const n=p("launch-button"),i=p("process-header"),m=p("router-link"),d=p("BasicTable"),x=p("PageWrapper");return c(),f(x,{title:"流程中心",contentBackground:"",class:"!mt-4"},{extra:u((()=>[j(n)])),footer:u((()=>[j(i,{current:"todo"})])),default:u((()=>[j("div",S,[j(d,{onRegister:e.registerTodoTable},{nameRender:u((({record:e})=>[j(m,{to:`/process/approve/${e.processDefinitionKey}?taskId=${e.taskId}&procInstId=${e.processInstanceId}&businessKey=${e.businessKey}`},{default:u((()=>[b(l(e.formName),1)])),_:2},1032,["to"])])),_:1},8,["onRegister"])])])),_:1})};export default P;