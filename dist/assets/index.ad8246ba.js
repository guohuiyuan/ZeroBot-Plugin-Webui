import{_ as S,F as _,Q as b,aW as T,a as L,Y as l}from"./index.42731010.js";import{A as k,c8 as F,j as f,u as o,a0 as n,B as s,D as w,w as B,a1 as m,ac as p,K as y,aa as v}from"./vendor.0a46d435.js";import{c as x,u as C}from"./index.d2159fcb.js";import D from"./SessionTimeoutLogin.7b3b865e.js";import"./index.8210271b.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               *//* empty css              *//* empty css              *//* empty css               *//* empty css               */import"./index.f21ef536.js";import"./useWindowSizeFn.59168b39.js";import"./useContentViewHeight.aee99d3c.js";/* empty css               */import"./useSortable.9845e9f4.js";import"./lock.40f429c9.js";import"./Login.ac35bbb7.js";import"./LoginForm.0972cdac.js";import"./LoginFormTitle.08d068ea.js";import"./ForgetPasswordForm.3b550399.js";import"./index.ea00d705.js";import"./RegisterForm.4db67f06.js";import"./index.ea94feba.js";import"./MobileForm.3c0da5bb.js";import"./QrCodeForm.1fd25376.js";import"./download.da95ce38.js";const P=k({name:"LayoutFeatures",components:{BackTop:F,LayoutLockPage:x(()=>_(()=>import("./index.3688f38b.js"),["assets/index.3688f38b.js","assets/vendor.0a46d435.js","assets/vendor.d7f2c096.css","assets/LockPage.f896f077.js","assets/LockPage.2bff9ea2.css","assets/index.42731010.js","assets/index.9a418476.css","assets/lock.40f429c9.js","assets/header.d801b988.js"])),SettingDrawer:x(()=>_(()=>import("./index.509aeb5d.js").then(function(e){return e.i}),["assets/index.509aeb5d.js","assets/index.5c7227e9.css","assets/index.35b5cf30.css","assets/index.42731010.js","assets/index.9a418476.css","assets/vendor.0a46d435.js","assets/vendor.d7f2c096.css","assets/index.d2159fcb.js","assets/index.3445f5e4.css","assets/index.65674215.css","assets/index.8210271b.js","assets/index.2f91864e.css","assets/index.43ba843e.css","assets/index.858d32f5.css","assets/index.ccc15a38.css","assets/index.676b77b5.css","assets/index.7959f7e6.css","assets/index.c4896195.css","assets/index.4eb149b8.css","assets/index.f21ef536.js","assets/index.0935299d.css","assets/useWindowSizeFn.59168b39.js","assets/useContentViewHeight.aee99d3c.js","assets/useSortable.9845e9f4.js","assets/lock.40f429c9.js"])),SessionTimeoutLogin:D},setup(){const{getUseOpenBackTop:e,getShowSettingButton:d,getSettingButtonPosition:c,getFullContent:u}=b(),g=T(),{prefixCls:j}=L("setting-drawer-fearure"),{getShowHeader:i}=C(),r=f(()=>g.getSessionTimeout),a=f(()=>{if(!o(d))return!1;const t=o(c);return t===l.AUTO?!o(i)||o(u):t===l.FIXED});return{getTarget:()=>document.body,getUseOpenBackTop:e,getIsFixedSettingDrawer:a,prefixCls:j,getIsSessionTimeout:r}}});function E(e,d,c,u,g,j){const i=n("LayoutLockPage"),r=n("BackTop"),a=n("SettingDrawer"),t=n("SessionTimeoutLogin");return s(),w(v,null,[B(i),e.getUseOpenBackTop?(s(),m(r,{key:0,target:e.getTarget},null,8,["target"])):p("",!0),e.getIsFixedSettingDrawer?(s(),m(a,{key:1,class:y(e.prefixCls)},null,8,["class"])):p("",!0),e.getIsSessionTimeout?(s(),m(t,{key:2})):p("",!0)],64)}var me=S(P,[["render",E]]);export{me as default};
