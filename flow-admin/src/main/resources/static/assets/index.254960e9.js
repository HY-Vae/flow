var B=(e,u,i)=>new Promise((c,p)=>{var h=o=>{try{n(i.next(o))}catch(a){p(a)}},l=o=>{try{n(i.throw(o))}catch(a){p(a)}},n=o=>o.done?c(o.value):Promise.resolve(o.value).then(h,l);n((i=i.apply(e,u)).next())});import{B as T}from"./TableImg.00c4ed04.js";import{l as k}from"./BasicForm.51e3eb56.js";import{u as _}from"./useTable.412b054f.js";import{g as F,c as P,s as S,d as y}from"./module.data.20ccf93f.js";import{az as D,a as V,an as A,aB as s,o as b,i as R,p as d,B as f,C as w,k as v,l as U,G as $}from"./index.da587afe.js";import I from"./ModuleModal.d4ce7dac.js";import N from"./PValueSettingModal.9745fef5.js";import{b as E}from"./index.e8eb4b57.js";import"./index.492229cd.js";import"./Checkbox.9d75a86f.js";import"./index.5aab84c4.js";import"./index.a85fa86f.js";import"./eagerComputed.3bbb876f.js";import"./useForm.d201bd46.js";import"./index.c0d22213.js";import"./index.a0d7e8a1.js";import"./index.6d85aa5b.js";import"./useSize.dbee3c08.js";import"./useWindowSizeFn.3fdab581.js";import"./useContentViewHeight.f2db75e2.js";import"./ArrowLeftOutlined.8a04d10c.js";import"./index.25a87437.js";import"./transButton.1d3b575b.js";import"./index.447b3242.js";import"./index.d7c8b760.js";import"./index.9d0fc194.js";import"./uuid.2b29000c.js";import"./index.3c9c3a6f.js";import"./_baseIteratee.78d8c020.js";import"./get.40c34cfc.js";import"./DeleteOutlined.690086a4.js";import"./index.d1cda802.js";import"./useRefs.1aead304.js";import"./Form.f8b72655.js";import"./Col.4ac749bb.js";import"./useFlexGapSupport.caa26b6d.js";import"./index.a64c8a60.js";import"./sortable.esm.c081a59d.js";import"./RedoOutlined.46184af0.js";import"./FullscreenOutlined.3d903e0f.js";import"./index.813f510f.js";import"./fromPairs.daf93cb7.js";import"./scrollTo.37d32e36.js";import"./index.176a852f.js";/* empty css              *//* empty css               */import"./index.b3a5d1df.js";import"./index.5d1da0c4.js";import"./index.72d53e09.js";import"./download.75f04d3f.js";import"./base64Conver.08b9f4ec.js";import"./index.9912aa68.js";import"./index.36675b6e.js";import"./uniqBy.f906dabc.js";import"./appPrivilegeValue.d91f089b.js";const{createMessage:x}=$(),z=V({name:"Module",components:{BasicTable:T,TableAction:k,ModuleModal:I,PValueSettingModal:N},setup(){const[e,{openModal:u,setModalProps:i}]=E(),[c,{openModal:p}]=E(),[h,{reload:l,expandAll:n}]=_({title:"\u5217\u8868",api:F,columns:P,isTreeTable:!0,formConfig:{labelWidth:120,schemas:S,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},expandRowByClick:!0,canColDrag:!0,useSearchForm:!0,pagination:!1,bordered:!0,showIndexColumn:!1,actionColumn:{width:170,title:"\u64CD\u4F5C",dataIndex:"action"}});A(()=>{setTimeout(()=>{n()},1e3)});function o(t){i({title:"\u65B0\u589E\u83DC\u5355"}),u(!0,{record:t,isUpdate:!1})}function a(t,m){m.stopPropagation(),i({title:"\u65B0\u589E\u3010"+t.name+"\u3011\u7684\u5B50\u83DC\u5355"}),t={pid:t.id},u(!0,{record:t,isUpdate:!0})}function g(t,m){m.stopPropagation(),p(!0,{record:t,isUpdate:!0})}function C(t,m){m.stopPropagation(),i({title:"\u4FEE\u6539\u83DC\u5355"}),u(!0,{record:t,isUpdate:!0})}function M(t){if(t.children&&t.children.length>0){x.warning("\u6709\u5B50\u8282\u70B9\uFF0C\u4E0D\u80FD\u5220\u9664\uFF01");return}y([t.id]).then(()=>{l()})}function r(){return B(this,null,function*(){setTimeout(()=>{l()},200),setTimeout(()=>{n()},100)})}return{registerTable:h,registerModal:e,registerPValueModal:c,handleCreate:o,handleEdit:C,handleEditPValue:g,handleCreateChild:a,handleDelete:M,handleSuccess:r}}});function G(e,u,i,c,p,h){const l=s("a-button"),n=s("Authority"),o=s("TableAction"),a=s("BasicTable"),g=s("ModuleModal"),C=s("PValueSettingModal");return b(),R("div",null,[d(a,{onRegister:e.registerTable},{toolbar:f(()=>[d(n,{value:"Module:0"},{default:f(()=>[d(l,{type:"primary",onClick:e.handleCreate},{default:f(()=>[w(" \u65B0\u589E ")]),_:1},8,["onClick"])]),_:1})]),bodyCell:f(({column:M,record:r})=>[M.key==="action"?(b(),v(o,{key:0,actions:[{auth:"Module:0",tooltip:"\u6DFB\u52A0\u5B50\u83DC\u5355",icon:"ant-design:plus-outlined",onClick:e.handleCreateChild.bind(null,r)},{auth:"Module:6",tooltip:"\u8BBE\u7F6E\u6743\u9650\u503C",icon:"ant-design:setting-outlined",onClick:e.handleEditPValue.bind(null,r)},{auth:"Module:2",tooltip:"\u4FEE\u6539",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,r)},{auth:"Module:3",tooltip:"\u5220\u9664",icon:"ant-design:delete-outlined",color:"error",onClick:t=>{t.stopPropagation()},popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:e.handleDelete.bind(null,r),placement:"left"}}]},null,8,["actions"])):U("",!0)]),_:1},8,["onRegister"]),d(g,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"]),d(C,{onRegister:e.registerPValueModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])}var jt=D(z,[["render",G]]);export{jt as default};