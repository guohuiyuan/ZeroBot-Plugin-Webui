import{bx as o,af as d,T as a}from"./vendor.0a46d435.js";function c(s,i=150,n){let e=()=>{s()};e=a(e,i);const t=()=>{n&&n.immediate&&e(),window.addEventListener("resize",e)},r=()=>{window.removeEventListener("resize",e)};return o(()=>{t()}),d(()=>{r()}),[t,r]}export{c as u};
