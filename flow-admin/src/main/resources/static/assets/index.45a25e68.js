import{B as g}from"./TableImg.6b85bf08.js";import{l as b}from"./BasicForm.d8aa86d3.js";import{u as B}from"./useTable.60e7369f.js";import{b as F}from"./index.4ff668bf.js";import{P as E,c as S,s as T}from"./PositionSeqModal.99ef20e3.js";import{g as _,d as k}from"./positionSeq.8293e7d6.js";import{az as D,a as M,aB as a,i as C,j as P,q as c,C as d,D as y,l as w,m as q,H as A}from"./index.ef013507.js";import"./index.64234a26.js";import"./Checkbox.d561740d.js";import"./index.d845ac75.js";import"./index.4dfcf0e9.js";import"./eagerComputed.487f958f.js";import"./useForm.d7bb3373.js";import"./index.4dfdb4ab.js";import"./index.1eabbb9a.js";import"./index.0210df95.js";import"./useSize.55446702.js";import"./useWindowSizeFn.37be93ea.js";import"./useContentViewHeight.d02bb685.js";import"./ArrowLeftOutlined.5616a4a1.js";import"./index.412dcca9.js";import"./transButton.750f7635.js";import"./index.4822de2c.js";import"./index.7f88299e.js";import"./index.0b0495b0.js";import"./uuid.2b29000c.js";import"./index.ac5849f2.js";import"./_baseIteratee.39b06e56.js";import"./get.fbc063d7.js";import"./DeleteOutlined.fda42126.js";import"./index.7e4b5f10.js";import"./useRefs.5ed2b70f.js";import"./Form.36fbea16.js";import"./Col.55ed0272.js";import"./useFlexGapSupport.e51c8524.js";import"./index.8a7cb11f.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.01e40c90.js";import"./FullscreenOutlined.d97e6502.js";import"./index.27c2d820.js";import"./fromPairs.84aabb58.js";import"./scrollTo.f0dd617b.js";import"./index.eaeab232.js";/* empty css              *//* empty css               */import"./index.0e08ed6e.js";import"./index.edd8ff4a.js";import"./index.0bfe1343.js";import"./download.c25570af.js";import"./base64Conver.08b9f4ec.js";import"./index.30e1f68c.js";import"./index.4e2ec58e.js";import"./uniqBy.4bac5850.js";import"./constantEnum.bf6653fb.js";const{createMessage:R}=A(),v=M({name:"PositionSeq",components:{BasicTable:g,TableAction:b,PositionSeqModal:E},setup(){const[o,{openModal:i,setModalProps:n}]=F(),[f,{reload:r}]=B({title:"\u5217\u8868",api:_,columns:S,formConfig:{labelWidth:120,schemas:T,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},isTreeTable:!0,expandRowByClick:!0,canColDrag:!0,pagination:!1,useSearchForm:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:120,title:"\u64CD\u4F5C",dataIndex:"action",fixed:!1}});function h(){i(!0,{isUpdate:!1}),n({title:"\u65B0\u589E\u5C97\u4F4D\u5E8F\u5217"})}function u(t,e){e.stopPropagation(),i(!0,{record:t,isUpdate:!0}),n({title:"\u4FEE\u6539\u5C97\u4F4D\u5E8F\u5217"})}function s(t,e){e.stopPropagation(),n({title:"\u65B0\u589E\u3010"+t.name+"\u3011\u7684\u5B50\u5E8F\u5217"}),t={pid:t.id,status:1},i(!0,{record:t,isUpdate:!0})}function l(t){if(t.children&&t.children.length>0){R.warning("\u6709\u5B50\u8282\u70B9\uFF0C\u4E0D\u80FD\u5220\u9664\uFF01");return}k([t.id]).then(e=>{r()})}function p(){r()}function m(){setTimeout(()=>{r()},200)}return{registerTable:f,registerModal:o,handleCreate:h,handleEdit:u,handleCreateChild:s,handleDelete:l,handleSuccess:m,doSearch:p}}});function $(o,i,n,f,r,h){const u=a("a-button"),s=a("TableAction"),l=a("BasicTable"),p=a("PositionSeqModal");return C(),P("div",null,[c(l,{onRegister:o.registerTable},{toolbar:d(()=>[c(u,{type:"primary",onClick:o.handleCreate},{default:d(()=>[y(" \u65B0\u589E ")]),_:1},8,["onClick"])]),bodyCell:d(({column:m,record:t})=>[m.key==="action"?(C(),w(s,{key:0,actions:[{tooltip:"\u6DFB\u52A0\u5B50\u5E8F\u5217",icon:"ant-design:plus-outlined",onClick:o.handleCreateChild.bind(null,t)},{tooltip:"\u4FEE\u6539",icon:"clarity:note-edit-line",onClick:o.handleEdit.bind(null,t)},{tooltip:"\u5220\u9664",icon:"ant-design:delete-outlined",color:"error",onClick:e=>{e.stopPropagation()},popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:o.handleDelete.bind(null,t),placement:"left"}}]},null,8,["actions"])):q("",!0)]),_:1},8,["onRegister"]),c(p,{onRegister:o.registerModal,onSuccess:o.handleSuccess},null,8,["onRegister","onSuccess"])])}var xt=D(v,[["render",$]]);export{xt as default};