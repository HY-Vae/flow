import{B as b}from"./TableImg.73863b69.js";import{T as x}from"./BasicForm.6afa01de.js";import{u as T}from"./useTable.7c1e4a10.js";import{g as h,d as y}from"./dept.5a8fb534.js";import{P as D}from"./index.77f474a0.js";import g from"./DictTypeTree.9de46f80.js";import _ from"./DictionaryTable.dafa2b31.js";import w from"./DictionaryItemTable.2d13b4f3.js";import{_ as C,h as S}from"./index.9eb02b52.js";import{b as B}from"./index.30115123.js";import{k as F,l as v}from"./dictionary.685eae49.js";import{A as I,r as u,a0 as n,B as M,a1 as R,a6 as H,w as m}from"./vendor.7bee64cc.js";/* empty css                *//* empty css              */import"./useForm.1fd322f5.js";/* empty css                *//* empty css                *//* empty css               */import"./uuid.2b29000c.js";import"./useWindowSizeFn.30e15ddc.js";/* empty css               */import"./useSortable.dd731734.js";/* empty css                *//* empty css                *//* empty css               *//* empty css               */import"./index.1445cecb.js";/* empty css                *//* empty css                *//* empty css                */import"./download.78bd314d.js";import"./base64Conver.bb012c73.js";import"./index.83641cbd.js";/* empty css                *//* empty css                */import"./useContentViewHeight.52836077.js";import"./Tree.vue_vue&type=style&index=0&lang.43e63f89.js";import"./useContextMenu.e899090d.js";import"./dicType.4fa424d6.js";import"./DictionaryModal.3026d797.js";import"./DictionaryItemModal.1e91cf7c.js";const{createMessage:W}=S(),P=I({components:{BasicTable:b,PageWrapper:D,DictTypeTree:g,DictionaryTable:_,DictionaryItemTable:w,TableAction:x},setup(){const[t,{openModal:a}]=B(),o=u(),i=u(),[p,{reload:s}]=T({title:"\u5217\u8868",api:h,columns:F,formConfig:{labelWidth:120,schemas:v,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},useSearchForm:!0,showIndexColumn:!1,bordered:!0,pagination:!1,actionColumn:{width:150,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"}}});function r(){a(!0,{isUpdate:!1})}function c(e){console.log(e),a(!0,{record:e,isUpdate:!0})}function l(e){if(e.children&&e.children.length>0){W.warning("\u6709\u5B50\u8282\u70B9\uFF0C\u4E0D\u80FD\u5220\u9664\uFF01");return}y([e.id]).then(()=>{s()})}function d(){s()}function f(e=""){e?(o.value.filterByDictType(e),i.value.cleanTableData()):o.value.cleanTableData()}function j(e){e&&i.value.filterByDict(e)}return{dictionaryRef:o,dictionaryItemRef:i,registerTable:p,registerModal:t,handleCreate:r,handleEdit:c,handleDictSelect:j,handleDelete:l,handleSuccess:d,handleDictTypeSelect:f}}});function $(t,a,o,i,p,s){const r=n("DictTypeTree"),c=n("DictionaryTable"),l=n("DictionaryItemTable"),d=n("PageWrapper");return M(),R(d,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:H(()=>[m(r,{class:"w-1/5 xl:w-1/5",onSelect:t.handleDictTypeSelect},null,8,["onSelect"]),m(c,{ref:"dictionaryRef",onHandleSelect:t.handleDictSelect,class:"w-2/5 xl:w-2/5"},null,8,["onHandleSelect"]),m(l,{ref:"dictionaryItemRef",class:"w-2/5 xl:w-2/5"},null,512)]),_:1})}var we=C(P,[["render",$]]);export{we as default};