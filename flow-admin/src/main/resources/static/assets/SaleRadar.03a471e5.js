import{y as t,b6 as e,r as a,Q as i,Z as s,B as d,F as o,a2 as r,v as l}from"./vendor.880b4c6c.js";/* empty css              *//* empty css              *//* empty css              */import{u as n}from"./useECharts.d1d7e7d3.js";import"./index.4926e6da.js";var m=t({components:{Card:e},props:{loading:Boolean,width:{type:String,default:"100%"},height:{type:String,default:"400px"}},setup(t){const e=a(null),{setOptions:s}=n(e);return i((()=>t.loading),(()=>{t.loading||s({legend:{bottom:0,data:["Visits","Sales"]},tooltip:{},radar:{radius:"60%",splitNumber:8,indicator:[{text:"2017",max:100},{text:"2017",max:100},{text:"2018",max:100},{text:"2019",max:100},{text:"2020",max:100},{text:"2021",max:100}]},series:[{type:"radar",symbolSize:0,areaStyle:{shadowBlur:0,shadowColor:"rgba(0,0,0,.2)",shadowOffsetX:0,shadowOffsetY:10,opacity:1},data:[{value:[90,50,86,40,50,20],name:"Visits",itemStyle:{color:"#b6a2de"}},{value:[70,75,70,76,20,85],name:"Sales",itemStyle:{color:"#67e0e3"}}]}]})}),{immediate:!0}),{chartRef:e}}});m.render=function(t,e,a,i,n,m){const p=s("Card");return d(),o(p,{title:"销售统计",loading:t.loading},{default:r((()=>[l("div",{ref:"chartRef",style:{width:t.width,height:t.height}},null,4)])),_:1},8,["loading"])};export default m;