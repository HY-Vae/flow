import{_ as e}from"./TableImg.3a357da5.js";import{f as t}from"./BasicForm.9dacb4c6.js";import{u as o}from"./useTable.4c66a5b7.js";import{g as n,d as i}from"./dept.274e33af.js";import{P as a}from"./index.2b3a6879.js";import r from"./CompanyTree.55c7ddf5.js";import{h as s}from"./index.643db95a.js";import{b as d}from"./index.2d1288e4.js";import{_ as l,c,s as p}from"./DeptModal.a80ab316.js";import{j as m,r as u,u as f,K as b,o as j,m as h,Q as x,n as g,Y as C}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              */import"./useForm.04030879.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.b1caa3b4.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.f4281d2c.js";/* empty css              *//* empty css              *//* empty css              */import"./download.4e141cfb.js";import"./base64Conver.bb012c73.js";import"./index.945905d0.js";import"./useContentViewHeight.dc5cb96c.js";/* empty css              *//* empty css              */import"./Tree.vue_vue&type=style&index=0&lang.550db6bb.js";import"./useContextMenu.9c927229.js";import"./company.45885224.js";import"./index.7891cc65.js";import"./personal.489fe6b1.js";import"./OrgTree.290d707f.js";const{createMessage:w}=s();var S=m({name:"DeptManagement",components:{BasicTable:e,PageWrapper:a,CompanyTree:r,DeptModal:l,TableAction:t},setup(){const[e,{openModal:t,setModalProps:a}]=d(),r=u({}),[s,{reload:l}]=o({title:"列表",api:n,columns:c,formConfig:{labelWidth:120,schemas:p,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},expandRowByClick:!0,useSearchForm:!0,showIndexColumn:!1,bordered:!0,pagination:!1,actionColumn:{width:150,title:"操作",dataIndex:"action",slots:{customRender:"action"}}});return{registerTable:s,registerModal:e,handleCreate:function(){var e;a({title:"新增部门"}),t(!0,{record:{companyId:null==(e=f(r))?void 0:e.id},isUpdate:!1})},handleEdit:function(e,o){o.stopPropagation(),a({title:"修改部门"}),t(!0,{record:e,isUpdate:!0})},handleCreateChild:function(e,o){o.stopPropagation(),a({title:"新增【"+e.name+"】的子部门"}),e={pid:e.id},t(!0,{record:e,isUpdate:!0})},handleDelete:function(e){e.children&&e.children.length>0?w.warning("有子节点，不能删除！"):i([e.id]).then((e=>{l()}))},handleSuccess:function(){l()},handleSelect:function(e){r.value=e,l({searchInfo:{companyId:e?e.id:""}})},doSearch:function(){l()}}}});const T=C("新增");S.render=function(e,t,o,n,i,a){const r=b("CompanyTree"),s=b("a-button"),d=b("TableAction"),l=b("BasicTable"),c=b("DeptModal"),p=b("PageWrapper");return j(),h(p,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:x((()=>[g(r,{class:"w-1/4 xl:w-1/5",onSelect:e.handleSelect},null,8,["onSelect"]),g(l,{onRegister:e.registerTable,class:"w-3/4 xl:w-4/5"},{toolbar:x((()=>[g(s,{type:"primary",onClick:e.handleCreate},{default:x((()=>[T])),_:1},8,["onClick"])])),action:x((({record:t})=>[g(d,{actions:[{title:"添加子部门",icon:"ant-design:plus-outlined",onClick:e.handleCreateChild.bind(null,t)},{title:"修改",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,t)},{title:"删除",icon:"ant-design:delete-outlined",color:"error",onClick:e=>{e.stopPropagation()},popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,t)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),g(c,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])),_:1})};export default S;