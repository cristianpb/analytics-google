import{S as t,i as s,s as a,p as e,e as n,t as o,H as i,d as r,u as c,c as l,a as u,q as h,b as p,f as d,v as f,y as m,n as v}from"./client.d6ce6027.js";function g(t){let s,a,g,x,y,H,j=t[0].title+"",E=t[0].html+"";return document.title=s=t[0].title,{c(){a=e(),g=n("h1"),x=o(j),y=e(),H=n("div"),this.h()},l(t){i('[data-svelte="svelte-1uty71u"]',document.head).forEach(r),a=c(t),g=l(t,"H1",{});var s=u(g);x=h(s,j),s.forEach(r),y=c(t),H=l(t,"DIV",{class:!0}),u(H).forEach(r),this.h()},h(){p(H,"class","content svelte-gnxal1")},m(t,s){d(t,a,s),d(t,g,s),f(g,x),d(t,y,s),d(t,H,s),H.innerHTML=E},p(t,[a]){1&a&&s!==(s=t[0].title)&&(document.title=s),1&a&&j!==(j=t[0].title+"")&&m(x,j),1&a&&E!==(E=t[0].html+"")&&(H.innerHTML=E)},i:v,o:v,d(t){t&&r(a),t&&r(g),t&&r(y),t&&r(H)}}}async function x({params:t,query:s}){const a=await this.fetch(`blog/${t.slug}.json`),e=await a.json();if(200===a.status)return{post:e};this.error(a.status,e.message)}function y(t,s,a){let{post:e}=s;return t.$set=t=>{"post"in t&&a(0,e=t.post)},[e]}export default class extends t{constructor(t){super(),s(this,t,y,g,a,{post:0})}}export{x as preload};