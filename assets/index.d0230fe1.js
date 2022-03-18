import{j as h,R as l,a as g,B as _,r as y,u as v}from"./vendor.ad3450ce.js";const E=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerpolicy&&(n.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?n.credentials="include":r.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(r){if(r.ep)return;r.ep=!0;const n=o(r);fetch(r.href,n)}};E();const L="modulepreload",u={},x="/sample-cssreset/",a=function(s,o){return!o||o.length===0?s():Promise.all(o.map(t=>{if(t=`${x}${t}`,t in u)return;u[t]=!0;const r=t.endsWith(".css"),n=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${n}`))return;const i=document.createElement("link");if(i.rel=r?"stylesheet":L,r||(i.as="script",i.crossOrigin=""),i.href=t,document.head.appendChild(i),r)return new Promise((p,f)=>{i.addEventListener("load",p),i.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>s())},e=h.exports.jsx,c=h.exports.jsxs,m=h.exports.Fragment,S=()=>c(m,{children:[e("h1",{children:"Heading1"}),e("h2",{children:"Heading2"}),e("h3",{children:"Heading3"}),e("h4",{children:"Heading4"}),e("h5",{children:"Heading5"}),e("h6",{children:"Heading6"}),e("button",{children:"Button"}),e("input",{type:"text"}),e("input",{type:"password"}),e("p",{children:"Paragraph"}),e("a",{href:"https://www.google.com",children:"Link"}),e("img",{src:"https://via.placeholder.com/300",alt:"placeholder"}),c("div",{children:[e("p",{children:"Div"}),e("p",{children:"Div"})]}),c("ul",{children:[e("li",{children:"List Item 1"}),e("li",{children:"List Item 2"})]})]});var R=()=>c("div",{children:[e("h1",{children:"Default"}),e(S,{})]});const w=[{caseSensitive:!1,path:"eric-meyer",element:l.createElement(l.lazy(()=>a(()=>import("./eric-meyer.9f18993a.js"),["assets/eric-meyer.9f18993a.js","assets/eric-meyer.44dfacfe.css","assets/vendor.ad3450ce.js"])))},{caseSensitive:!1,element:l.createElement(R),index:!0},{caseSensitive:!1,path:"modern-normalize",element:l.createElement(l.lazy(()=>a(()=>import("./modern-normalize.49a3946a.js"),["assets/modern-normalize.49a3946a.js","assets/modern-normalize.490b812b.css","assets/vendor.ad3450ce.js"])))},{caseSensitive:!1,path:"normalize",element:l.createElement(l.lazy(()=>a(()=>import("./normalize.dd702a9f.js"),["assets/normalize.dd702a9f.js","assets/normalize.6eadb83e.css","assets/vendor.ad3450ce.js"])))},{caseSensitive:!1,path:"tailwind",element:l.createElement(l.lazy(()=>a(()=>import("./tailwind.665083d6.js"),["assets/tailwind.665083d6.js","assets/tailwind.af274bd3.css","assets/vendor.ad3450ce.js"])))}],O=({children:d})=>{const s=({name:t})=>e("li",{children:e("a",{href:`/${t}`,children:t})});return c(m,{children:[e("nav",{children:c("ul",{style:{display:"flex",gap:"2rem",padding:"1rem"},children:[e("li",{children:e("a",{href:"/",children:"Home"})}),["modern-normalize","normalize","eric-meyer","tailwind"].map(t=>e(s,{name:t},t))]})}),d]})},P=()=>e(O,{children:e(y.exports.Suspense,{fallback:e("p",{children:"Loading..."}),children:v(w)})});g.render(e(_,{children:e(P,{})}),document.getElementById("root"));export{S,e as a,c as j};
