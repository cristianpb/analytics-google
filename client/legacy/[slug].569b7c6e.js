import{v as t,w as n,d as e,e as s,i as r,s as a,f as c,S as o,B as u,g as i,A as f,U as l,k as h,D as p,h as v,j as m,C as d,l as y,m as x,E as g,K as b,H as R,o as j,x as D,y as E}from"./client.5abb8102.js";function H(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function k(t){var n,e,s,r,a,c,o=t[0].title+"",D=t[0].html+"";return document.title=n=t[0].title,{c:function(){e=u(),s=i("h1"),r=f(o),a=u(),c=i("div"),this.h()},l:function(t){l('[data-svelte="svelte-1uty71u"]',document.head).forEach(h),e=p(t),s=v(t,"H1",{});var n=m(s);r=d(n,o),n.forEach(h),a=p(t),c=v(t,"DIV",{class:!0}),m(c).forEach(h),this.h()},h:function(){y(c,"class","content svelte-gnxal1")},m:function(t,n){x(t,e,n),x(t,s,n),g(s,r),x(t,a,n),x(t,c,n),c.innerHTML=D},p:function(t,e){var s=b(e,1)[0];1&s&&n!==(n=t[0].title)&&(document.title=n),1&s&&o!==(o=t[0].title+"")&&R(r,o),1&s&&D!==(D=t[0].html+"")&&(c.innerHTML=D)},i:j,o:j,d:function(t){t&&h(e),t&&h(s),t&&h(a),t&&h(c)}}}function w(t){return L.apply(this,arguments)}function L(){return(L=t(n.mark((function t(e){var s,r,a;return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=e.params,e.query,t.next=3,this.fetch("blog/".concat(s.slug,".json"));case 3:return r=t.sent,t.next=6,r.json();case 6:if(a=t.sent,200!==r.status){t.next=11;break}return t.abrupt("return",{post:a});case 11:this.error(r.status,a.message);case 12:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function M(t,n,e){var s=n.post;return t.$set=function(t){"post"in t&&e(0,s=t.post)},[s]}var S=function(t){e(i,o);var n,u=(n=i,function(){var t,e=D(n);if(H()){var s=D(this).constructor;t=Reflect.construct(e,arguments,s)}else t=e.apply(this,arguments);return E(this,t)});function i(t){var n;return s(this,i),n=u.call(this),r(c(n),t,M,k,a,{post:0}),n}return i}();export default S;export{w as preload};
