var z=Object.defineProperty;var V=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var b=(t,a,e)=>a in t?z(t,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[a]=e,h=(t,a)=>{for(var e in a||(a={}))D.call(a,e)&&b(t,e,a[e]);if(V)for(var e of V(a))A.call(a,e)&&b(t,e,a[e]);return t};import{ai as I,_ as L,w as q,I as G}from"./index.42731010.js";import{A as w,r as B,bE as E,j as H,u as l,al as J,S as K,_ as M,bF as P,B as i,D as p,J as x,X,aa as O,ao as Q,a1 as R,a5 as m,w as u,ad as U,bq as W,H as g,K as Y,bG as Z}from"./vendor.0a46d435.js";/* empty css               *//* empty css                *//* empty css               *//* empty css               */const tt={startVal:{type:Number,default:0},endVal:{type:Number,default:2021},duration:{type:Number,default:1500},autoplay:{type:Boolean,default:!0},decimals:{type:Number,default:0,validator(t){return t>=0}},prefix:{type:String,default:""},suffix:{type:String,default:""},separator:{type:String,default:","},decimal:{type:String,default:"."},color:{type:String},useEasing:{type:Boolean,default:!0},transition:{type:String,default:"linear"}},et=w({name:"CountTo",props:tt,emits:["onStarted","onFinished"],setup(t,{emit:a}){const e=B(t.startVal),n=B(!1);let s=E(e);const y=H(()=>j(l(s)));J(()=>{e.value=t.startVal}),K([()=>t.startVal,()=>t.endVal],()=>{t.autoplay&&c()}),M(()=>{t.autoplay&&c()});function c(){v(),e.value=t.endVal}function N(){e.value=t.startVal,v()}function v(){s=E(e,h({disabled:n,duration:t.duration,onFinished:()=>a("onFinished"),onStarted:()=>a("onStarted")},t.useEasing?{transition:P[t.transition]}:{}))}function j(o){if(!o&&o!==0)return"";const{decimals:$,decimal:F,separator:d,suffix:C,prefix:T}=t;o=Number(o).toFixed($),o+="";const f=o.split(".");let r=f[0];const k=f.length>1?F+f[1]:"",_=/(\d+)(\d{3})/;if(d&&!I(d))for(;_.test(r);)r=r.replace(_,"$1"+d+"$2");return T+r+k+C}return{value:y,start:c,reset:N}}});function at(t,a,e,n,s,y){return i(),p("span",{style:X({color:t.color})},x(t.value),5)}var nt=L(et,[["render",at]]);const S=q(nt),lt=[{title:"\u8BBF\u95EE\u6570",icon:"visit-count|svg",value:2e3,total:12e4,color:"green",action:"\u6708"},{title:"\u6210\u4EA4\u989D",icon:"total-sales|svg",value:2e4,total:5e5,color:"blue",action:"\u6708"},{title:"\u4E0B\u8F7D\u6570",icon:"download-count|svg",value:8e3,total:12e4,color:"orange",action:"\u5468"},{title:"\u6210\u4EA4\u6570",icon:"transaction|svg",value:5e3,total:5e4,color:"purple",action:"\u5E74"}],ot={class:"md:flex"},st={class:"py-4 px-4 flex justify-between"},rt={class:"p-2 px-4 flex justify-between"},mt=w({props:{loading:{type:Boolean}},setup(t){return(a,e)=>(i(),p("div",ot,[(i(!0),p(O,null,Q(l(lt),(n,s)=>(i(),R(l(Z),{key:n.title,size:"small",loading:t.loading,title:n.title,class:Y(["md:w-1/4 w-full !md:mt-0 !mt-4",[s+1<4&&"!md:mr-4"]]),canExpan:!1},{extra:m(()=>[u(l(W),{color:n.color},{default:m(()=>[U(x(n.action),1)]),_:2},1032,["color"])]),default:m(()=>[g("div",st,[u(l(S),{prefix:"$",startVal:1,endVal:n.value,class:"text-2xl"},null,8,["endVal"]),u(l(G),{icon:n.icon,size:40},null,8,["icon"])]),g("div",rt,[g("span",null,"\u603B"+x(n.title),1),u(l(S),{prefix:"$",startVal:1,endVal:n.total},null,8,["endVal"])])]),_:2},1032,["loading","title","class"]))),128))]))}});export{mt as default};
