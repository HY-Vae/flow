import{_ as e}from"./TableImg.53dad38d.js";import{f as o}from"./BasicForm.2372b7e8.js";import{u as t}from"./useTable.8df61517.js";import{g as i,d as n}from"./category.9eb21f77.js";import{_ as a,c as r,s}from"./CategoryModal.0bb78cc1.js";import{h as d}from"./index.ba319b32.js";import{b as c}from"./index.131f7f29.js";import{j as l,K as m,o as p,m as f,n as u,Q as b,Y as j}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              */import"./useForm.61e11b2d.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.5cefd2fe.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.c3ebc3c0.js";/* empty css              *//* empty css              *//* empty css              */import"./download.6c35d74f.js";import"./base64Conver.bb012c73.js";import"./index.ed23997c.js";import"./company.4e589c78.js";const{createMessage:g}=d();var h=l({name:"Category",components:{BasicTable:e,TableAction:o,CategoryModal:a},setup(){const[e,{openModal:o,setModalProps:a}]=c(),[d,{reload:l}]=t({title:"列表",api:i,columns:r,formConfig:{labelWidth:120,schemas:s,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},expandRowByClick:!0,canColDrag:!0,pagination:!1,useSearchForm:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:120,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:!1}});return{registerTable:d,registerModal:e,handleCreate:function(e){a({title:"新增流程分类"}),o(!0,{isUpdate:!1})},handleEdit:function(e,t){t.stopPropagation(),a({title:"修改流程分类"}),o(!0,{record:e,isUpdate:!0})},handleCreateChild:function(e,t){t.stopPropagation(),a({title:"新增【"+e.name+"】的子分类"}),e={pid:e.id},o(!0,{record:e,isUpdate:!0})},handleDelete:function(e,o){o.stopPropagation(),e.children&&e.children.length>0?g.warning("有子节点，不能删除！"):n([e.id]).then((e=>{l()}))},handleSuccess:function(){l()},doSearch:function(){l()}}}});const x=j(" 新增 ");h.render=function(e,o,t,i,n,a){const r=m("a-button"),s=m("TableAction"),d=m("BasicTable"),c=m("CategoryModal");return p(),f("div",null,[u(d,{onRegister:e.registerTable},{toolbar:b((()=>[u(r,{type:"primary",onClick:e.handleCreate},{default:b((()=>[x])),_:1},8,["onClick"])])),action:b((({record:o})=>[u(s,{actions:[{title:"添加子分类",icon:"ant-design:plus-outlined",onClick:e.handleCreateChild.bind(null,o)},{title:"修改",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{title:"删除",icon:"ant-design:delete-outlined",color:"error",onClick:e=>{e.stopPropagation()},popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),u(c,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])};export default h;