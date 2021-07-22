import{_ as e}from"./TableImg.41359114.js";import{f as o}from"./BasicForm.2ed1f7b7.js";import{u as i}from"./useTable.9b3a557e.js";import{a as t,d as n}from"./positionInfo.c3043447.js";import{P as s}from"./index.e2991800.js";import r from"./PositionSeqTree.2fab2670.js";import{b as a}from"./index.d939de4e.js";import{_ as d,c,s as l}from"./PositionInfoModal.b4e5af5c.js";import{j as m,ay as p,r as f,u,K as b,o as j,m as x,Q as h,n as g,Y as S}from"./vendor.686fd1d4.js";import{h as C}from"./index.5dab9bd2.js";/* empty css              *//* empty css              */import"./useForm.16917873.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.d45a4f2e.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.98a0466e.js";/* empty css              *//* empty css              *//* empty css              */import"./download.37bc3259.js";import"./base64Conver.bb012c73.js";import"./index.f0f47cc5.js";import"./useContentViewHeight.e8047e09.js";/* empty css              *//* empty css              */import"./Tree.vue_vue&type=style&index=0&lang.6cd0544e.js";import"./useContextMenu.9bc3c6cc.js";import"./positionSeq.81fb4542.js";const{createMessage:P}=C();var w=m({name:"PositionInfo",components:{BasicTable:e,PageWrapper:s,PositionSeqTree:r,PositionInfoModal:d,TableAction:o,Popconfirm:p},setup(){const[e,{openModal:o,setModalProps:s}]=a(),r=f({}),[d,{reload:m,setProps:p}]=i({title:"列表",api:t,columns:c,formConfig:{labelWidth:120,schemas:l,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},canColDrag:!0,useSearchForm:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:100,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:!1}});function b(e){r.value=e;let o={positionSeqId:e?e.id:""};p({searchInfo:o}),m({searchInfo:o})}return{registerTable:d,registerModal:e,handleCreate:function(){u(r).id?(s({title:"新增岗位"}),o(!0,{record:{positionSeqId:u(r).id,positionSeqCode:u(r).code},isUpdate:!0})):P.warning("请选择岗位序列！",2)},handleEdit:function(e){s({title:"修改岗位"}),o(!0,{record:e,isUpdate:!0})},handleDelete:function(e){n(e.id).then((()=>{m()}))},handleSuccess:function(){b(r.value)},handleSelect:b}}});const I=S("新增");w.render=function(e,o,i,t,n,s){const r=b("PositionSeqTree"),a=b("a-button"),d=b("TableAction"),c=b("BasicTable"),l=b("PositionInfoModal"),m=b("PageWrapper");return j(),x(m,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:h((()=>[g(r,{class:"w-1/4 xl:w-1/5",onSelect:e.handleSelect},null,8,["onSelect"]),g(c,{onRegister:e.registerTable,class:"w-3/4 xl:w-4/5"},{toolbar:h((()=>[g(a,{type:"primary",onClick:e.handleCreate},{default:h((()=>[I])),_:1},8,["onClick"])])),action:h((({record:o})=>[g(d,{actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),g(l,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])),_:1})};export default w;