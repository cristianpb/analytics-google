import{e as t,f as n,i as r,s as e,g as s,S as o,h as c,B as a,j as f,k as u,D as i,l,m as h,n as p,F as v,I as g,C as m,T as d,E as y,L as R,p as E,J as b,y as j,z as x}from"./client.95bc172e.js";function D(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function L(t,n,r){var e=t.slice();return e[1]=n[r],e}function B(t){var n,r,e,s,o=t[1].title+"";return{c:function(){n=c("li"),r=c("a"),e=a(o),this.h()},l:function(t){n=f(t,"LI",{});var s=u(n);r=f(s,"A",{rel:!0,href:!0});var c=u(r);e=i(c,o),c.forEach(l),s.forEach(l),this.h()},h:function(){h(r,"rel","prefetch"),h(r,"href",s="blog/"+t[1].slug)},m:function(t,s){p(t,n,s),v(n,r),v(r,e)},p:function(t,n){1&n&&o!==(o=t[1].title+"")&&g(e,o),1&n&&s!==(s="blog/"+t[1].slug)&&h(r,"href",s)},d:function(t){t&&l(n)}}}function I(t){for(var n,r,e,s,o,g=t[0],j=[],x=0;x<g.length;x+=1)j[x]=B(L(t,g,x));return{c:function(){n=m(),r=c("h1"),e=a("Recent posts"),s=m(),o=c("ul");for(var t=0;t<j.length;t+=1)j[t].c();this.h()},l:function(t){d('[data-svelte="svelte-hfp9t8"]',document.head).forEach(l),n=y(t),r=f(t,"H1",{});var c=u(r);e=i(c,"Recent posts"),c.forEach(l),s=y(t),o=f(t,"UL",{class:!0});for(var a=u(o),h=0;h<j.length;h+=1)j[h].l(a);a.forEach(l),this.h()},h:function(){document.title="Blog",h(o,"class","svelte-1frg2tf")},m:function(t,c){p(t,n,c),p(t,r,c),v(r,e),p(t,s,c),p(t,o,c);for(var a=0;a<j.length;a+=1)j[a].m(o,null)},p:function(t,n){var r=R(n,1)[0];if(1&r){var e;for(g=t[0],e=0;e<g.length;e+=1){var s=L(t,g,e);j[e]?j[e].p(s,r):(j[e]=B(s),j[e].c(),j[e].m(o,null))}for(;e<j.length;e+=1)j[e].d(1);j.length=g.length}},i:E,o:E,d:function(t){t&&l(n),t&&l(r),t&&l(s),t&&l(o),b(j,t)}}}function S(t){t.params,t.query;return this.fetch("blog.json").then((function(t){return t.json()})).then((function(t){return{posts:t}}))}function k(t,n,r){var e=n.posts;return t.$set=function(t){"posts"in t&&r(0,e=t.posts)},[e]}var q=function(c){t(u,o);var a,f=(a=u,function(){var t,n=j(a);if(D()){var r=j(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return x(this,t)});function u(t){var o;return n(this,u),o=f.call(this),r(s(o),t,k,I,e,{posts:0}),o}return u}();export default q;export{S as preload};
