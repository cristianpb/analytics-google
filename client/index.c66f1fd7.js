import{S as t,i as s,s as e,e as l,t as r,c as n,a as o,p as a,d as h,b as c,f,u as i,x as u,m as p,I as g,q as d,n as m,y as v}from"./client.f974f063.js";function E(t,s,e){const l=t.slice();return l[1]=s[e],l}function b(t){let s,e,p,g,d=t[1].title+"";return{c(){s=l("li"),e=l("a"),p=r(d),this.h()},l(t){s=n(t,"LI",{});var l=o(s);e=n(l,"A",{rel:!0,href:!0});var r=o(e);p=a(r,d),r.forEach(h),l.forEach(h),this.h()},h(){c(e,"rel","prefetch"),c(e,"href",g="blog/"+t[1].slug)},m(t,l){f(t,s,l),i(s,e),i(e,p)},p(t,s){1&s&&d!==(d=t[1].title+"")&&u(p,d),1&s&&g!==(g="blog/"+t[1].slug)&&c(e,"href",g)},d(t){t&&h(s)}}}function x(t){let s,e,u,x,j,q=t[0],y=[];for(let s=0;s<q.length;s+=1)y[s]=b(E(t,q,s));return{c(){s=p(),e=l("h1"),u=r("Recent posts"),x=p(),j=l("ul");for(let t=0;t<y.length;t+=1)y[t].c();this.h()},l(t){g('[data-svelte="svelte-hfp9t8"]',document.head).forEach(h),s=d(t),e=n(t,"H1",{});var l=o(e);u=a(l,"Recent posts"),l.forEach(h),x=d(t),j=n(t,"UL",{class:!0});var r=o(j);for(let t=0;t<y.length;t+=1)y[t].l(r);r.forEach(h),this.h()},h(){document.title="Blog",c(j,"class","svelte-1frg2tf")},m(t,l){f(t,s,l),f(t,e,l),i(e,u),f(t,x,l),f(t,j,l);for(let t=0;t<y.length;t+=1)y[t].m(j,null)},p(t,[s]){if(1&s){let e;for(q=t[0],e=0;e<q.length;e+=1){const l=E(t,q,e);y[e]?y[e].p(l,s):(y[e]=b(l),y[e].c(),y[e].m(j,null))}for(;e<y.length;e+=1)y[e].d(1);y.length=q.length}},i:m,o:m,d(t){t&&h(s),t&&h(e),t&&h(x),t&&h(j),v(y,t)}}}function j({params:t,query:s}){return this.fetch("blog.json").then(t=>t.json()).then(t=>({posts:t}))}function q(t,s,e){let{posts:l}=s;return t.$set=t=>{"posts"in t&&e(0,l=t.posts)},[l]}export default class extends t{constructor(t){super(),s(this,t,q,x,e,{posts:0})}}export{j as preload};
