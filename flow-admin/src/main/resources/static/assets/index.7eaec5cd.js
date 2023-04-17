import{P as S}from"./perEnum.1877da10.js";import{A as b}from"./index.b0586fd4.js";import{B as g}from"./TableImg.00c4ed04.js";import{l as B}from"./BasicForm.51e3eb56.js";import{u as T}from"./useTable.412b054f.js";import{g as M,d as k}from"./app.944c893d.js";import{c as F,s as K}from"./app.data.a468cf41.js";import P from"./AppModal.1a361cb1.js";import _ from"./SecretKeyModal.0ca70909.js";import{b as y}from"./index.e8eb4b57.js";import{az as D,a as R,aB as r,o as A,i as v,p as i,B as a,C as w,k as U,l as $}from"./index.da587afe.js";import"./index.492229cd.js";import"./Checkbox.9d75a86f.js";import"./index.5aab84c4.js";import"./index.a85fa86f.js";import"./eagerComputed.3bbb876f.js";import"./useForm.d201bd46.js";import"./index.c0d22213.js";import"./index.a0d7e8a1.js";import"./index.6d85aa5b.js";import"./useSize.dbee3c08.js";import"./useWindowSizeFn.3fdab581.js";import"./useContentViewHeight.f2db75e2.js";import"./ArrowLeftOutlined.8a04d10c.js";import"./index.25a87437.js";import"./transButton.1d3b575b.js";import"./index.447b3242.js";import"./index.d7c8b760.js";import"./index.9d0fc194.js";import"./uuid.2b29000c.js";import"./index.3c9c3a6f.js";import"./_baseIteratee.78d8c020.js";import"./get.40c34cfc.js";import"./DeleteOutlined.690086a4.js";import"./index.d1cda802.js";import"./useRefs.1aead304.js";import"./Form.f8b72655.js";import"./Col.4ac749bb.js";import"./useFlexGapSupport.caa26b6d.js";import"./index.a64c8a60.js";import"./sortable.esm.c081a59d.js";import"./RedoOutlined.46184af0.js";import"./FullscreenOutlined.3d903e0f.js";import"./index.813f510f.js";import"./fromPairs.daf93cb7.js";import"./scrollTo.37d32e36.js";import"./index.176a852f.js";/* empty css              *//* empty css               */import"./index.b3a5d1df.js";import"./index.5d1da0c4.js";import"./index.72d53e09.js";import"./download.75f04d3f.js";import"./base64Conver.08b9f4ec.js";import"./index.9912aa68.js";import"./index.36675b6e.js";import"./uniqBy.f906dabc.js";import"./constantEnum.bf6653fb.js";const I=R({name:"App",components:{BasicTable:g,TableAction:B,AppModal:P,SecretKeyModal:_,Authority:b},setup(){const[e,{openModal:p}]=y(),[f,{openModal:h,setModalProps:E}]=y(),[C,{reload:t}]=T({title:"\u5217\u8868",api:M,columns:F,formConfig:{labelWidth:100,schemas:K,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},canColDrag:!0,useSearchForm:!0,bordered:!0,showIndexColumn:!0,actionColumn:{width:140,title:"\u64CD\u4F5C",dataIndex:"action"}});function s(){p(!0,{isUpdate:!1})}function u(o){h(!0,{record:o,isUpdate:!0}),E({title:`\u4FEE\u6539\u3010${o.name}\u3011\u7684\u5BC6\u94A5`,showOkBtn:!1,cancelText:"\u5173\u95ED",width:700})}function m(o){p(!0,{record:o,isUpdate:!0})}function l(o){k([o.id]).then(()=>{t()})}function c(){setTimeout(()=>{t()},200)}function d(){return setTimeout(()=>{t()},200),Promise.resolve(!0)}function n(){setTimeout(()=>{t()},200)}return{registerTable:C,registerModal:e,registerSecretKeyModal:f,handleCloseFunc:d,handleCreate:s,handleEditSecretKey:u,handleEdit:m,handleDelete:l,handleSuccess:c,handleUpdateSecretKeySuccess:n,PerEnum:S}}});function N(e,p,f,h,E,C){const t=r("a-button"),s=r("Authority"),u=r("TableAction"),m=r("BasicTable"),l=r("AppModal"),c=r("SecretKeyModal");return A(),v("div",null,[i(m,{onRegister:e.registerTable},{toolbar:a(()=>[i(s,{value:"App:"+e.PerEnum.ADD},{default:a(()=>[i(t,{type:"primary",onClick:e.handleCreate},{default:a(()=>[w("\u65B0\u589E")]),_:1},8,["onClick"])]),_:1},8,["value"])]),bodyCell:a(({column:d,record:n})=>[d.key==="action"?(A(),U(u,{key:0,actions:[{auth:"App:"+e.PerEnum.QUERY,tooltip:"\u67E5\u770B\u5BC6\u94A5",icon:"ant-design:key-outlined",onClick:e.handleEditSecretKey.bind(null,n)},{auth:"App:"+e.PerEnum.UPDATE,tooltip:"\u4FEE\u6539",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,n)},{auth:"App:"+e.PerEnum.DELETE,tooltip:"\u5220\u9664",icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:e.handleDelete.bind(null,n)}}]},null,8,["actions"])):$("",!0)]),_:1},8,["onRegister"]),i(l,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"]),i(c,{onRegister:e.registerSecretKeyModal,onSuccess:e.handleUpdateSecretKeySuccess,closeFunc:e.handleCloseFunc},null,8,["onRegister","onSuccess","closeFunc"])])}var Qe=D(I,[["render",N]]);export{Qe as default};