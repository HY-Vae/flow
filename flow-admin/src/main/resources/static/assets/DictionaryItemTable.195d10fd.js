import{B as C}from"./TableImg.b4edebb6.js";import{l as I}from"./BasicForm.d977d74c.js";import{u as T}from"./useTable.2d6a625d.js";import{a as v,i as E,b as D,e as k}from"./dictionary.da74d644.js";import{P as w}from"./index.0b8e7721.js";import{az as M,a as F,w as S,aB as a,o as d,i as A,p as h,B as f,k as B,C as P,l as _,G as R}from"./index.7ea10544.js";import{b as $}from"./index.61c914e7.js";import N from"./DictionaryItemModal.354432e4.js";import"./index.e5a472bb.js";import"./Checkbox.fc744a85.js";import"./index.f8eff8ab.js";import"./index.60e2cd93.js";import"./eagerComputed.087e7096.js";import"./useForm.d5452096.js";import"./index.cca6a300.js";import"./index.c247c1b6.js";import"./index.6954dcaa.js";import"./uuid.2b29000c.js";import"./index.c5147852.js";import"./_baseIteratee.31b374d5.js";import"./get.4066932b.js";import"./DeleteOutlined.f1932d42.js";import"./index.e40c323f.js";import"./useRefs.08da6c2b.js";import"./Form.6886a72a.js";import"./Col.a6a2600f.js";import"./useFlexGapSupport.5af5008f.js";import"./useSize.b4cfb06d.js";import"./useWindowSizeFn.3dc14e02.js";import"./index.5d6fdc93.js";import"./sortable.esm.c081a59d.js";import"./RedoOutlined.495d4eff.js";import"./FullscreenOutlined.8864dded.js";import"./index.32756aa0.js";import"./fromPairs.daf93cb7.js";import"./scrollTo.17e7a4de.js";import"./index.056b642d.js";/* empty css              *//* empty css               */import"./index.c6794bd1.js";import"./transButton.331b5127.js";import"./index.a8777167.js";import"./index.d3af8cb2.js";import"./download.bfb09172.js";import"./base64Conver.08b9f4ec.js";import"./index.245189e1.js";import"./index.2f8b90c5.js";import"./uniqBy.fea10226.js";import"./index.b58cbcfd.js";import"./index.a5ac6dd4.js";import"./useContentViewHeight.6992291a.js";import"./ArrowLeftOutlined.89ac5398.js";import"./index.9d34ef87.js";import"./constantEnum.bf6653fb.js";const{createMessage:V}=R(),U=F({name:"DictionaryItemTable",components:{BasicTable:C,DictionaryItemModal:N,PageWrapper:w,TableAction:I},setup(){const[e,{openModal:n,setModalProps:m}]=$(),t=S(""),[b,{reload:i,setProps:s,setTableData:l}]=T({title:"\u5B57\u5178\u9879\u5217\u8868",api:v,columns:E,formConfig:{labelWidth:120,schemas:D,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},immediate:!1,useSearchForm:!0,showIndexColumn:!1,showTableSetting:!1,bordered:!0,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action"}});function u(){if(t.value===""){V.warning("\u8BF7\u9009\u62E9\u6570\u636E\u5B57\u5178\uFF01",2);return}m({title:"\u65B0\u589E\u5B57\u5178\u9879"}),n(!0,{record:{mainId:t.value},isUpdate:!1})}function p(o){t.value=o,s({searchInfo:{mainId:t.value}}),i({page:1})}function c(){l([]),t.value=""}function r(o){m({title:"\u4FEE\u6539\u5B57\u5178\u9879"}),n(!0,{record:o,isUpdate:!0})}function y(o){k(o.id).then(()=>{i()})}function g(){setTimeout(()=>{i()},200)}return{dictId:t,registerTable:b,registerModal:e,cleanTableData:c,handleCreate:u,handleEdit:r,filterByDict:p,handleDelete:y,handleSuccess:g}}}),W={class:"bg-white overflow-hidden dictionary"};function x(e,n,m,t,b,i){const s=a("a-button"),l=a("TableAction"),u=a("BasicTable"),p=a("DictionaryItemModal");return d(),A("div",W,[h(u,{onRegister:e.registerTable},{toolbar:f(()=>[e.dictId!==""?(d(),B(s,{key:0,type:"primary",onClick:e.handleCreate},{default:f(()=>[P("\u65B0\u589E")]),_:1},8,["onClick"])):_("",!0)]),bodyCell:f(({column:c,record:r})=>[c.key==="action"?(d(),B(l,{key:0,actions:[{tooltip:"\u4FEE\u6539\u5B57\u5178\u9879",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,r)},{tooltip:"\u5220\u9664",icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:e.handleDelete.bind(null,r),placement:"left"}}]},null,8,["actions"])):_("",!0)]),_:1},8,["onRegister"]),h(p,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])}var ze=M(U,[["render",x]]);export{ze as default};