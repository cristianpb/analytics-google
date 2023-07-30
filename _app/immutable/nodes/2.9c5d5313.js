import{s as ae,n as I,c as V,o as ve,d as G,b as Be}from"../chunks/scheduler.e2f6cd0d.js";import{S as re,i as ne,g as v,h as m,j as y,f as p,k as C,a as j,A as Ce,s as A,x as ye,c as P,l as Ae,e as Pe,y as f,D as We,m as w,n as O,o as U,r as le,u as ie,v as oe,d as ce,t as de,w as ue,E as Re}from"../chunks/index.708e6756.js";import{C as me,f as Ne,a as je}from"../chunks/Chart.5a5b95fb.js";import{l as _e,a as ee,d as be,r as W}from"../chunks/stores.4dc67179.js";import{_ as Ue}from"../chunks/preload-helper.cf010ec4.js";function Te(r){return(r==null?void 0:r.length)!==void 0?r:Array.from(r)}const He=!0,St=Object.freeze(Object.defineProperty({__proto__:null,prerender:He},Symbol.toStringTag,{value:"Module"}));function ze(r){let e,t,a;return{c(){e=v("canvas"),this.h()},l(s){e=m(s,"CANVAS",{id:!0}),y(e).forEach(p),this.h()},h(){C(e,"id","visits-chart")},m(s,n){j(s,e,n),t||(a=Ce(e,"click",r[0]),t=!0)},p:I,i:I,o:I,d(s){s&&p(e),t=!1,a()}}}function Ie(r,e){return e.day in r?r[e.day].y+=e.sessions:r[e.day]={x:e.dd,y:e.sessions},r}function Fe(r,e,t){let a,s,n,o;V(r,_e,c=>t(4,a=c)),V(r,ee,c=>t(5,s=c)),V(r,be,c=>t(6,n=c)),V(r,W,c=>t(7,o=c));let i,l,g,x={0:"Sunday",1:"Monday",2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday"};ve(async()=>{const c=document.getElementById("visits-chart").getContext("2d");l=new me(c,{type:"line",data:{datasets:[{label:"This week",backgroundColor:"#2171b5",borderColor:"#2171b5",fill:!1,data:[]},{label:"Last week",backgroundColor:"#c6dbef",borderColor:"#c6dbef",fill:!1,borderDash:[10,5],xAxisID:"axisLastWeek",data:[]}]},options:{responsive:!0,maintainAspectRatio:!1,scales:{xAxes:[{id:"axisThisWeek",type:"time",ticks:{min:0,max:1586e9}},{id:"axisLastWeek",type:"time",display:!1,gridLines:{drawOnChartArea:!1}}],yAxes:[{id:"temp-y-axis",type:"linear",position:"left",scaleLabel:{display:!0,labelString:"Number of sessions"}}]},tooltips:{mode:"nearest",intersect:!1,callbacks:{title(h,b){let{index:_}=h[0],{datasetIndex:D}=h[0],H=b.datasets[D].data[_].x;return`${x[H.getDay()]} ${("0"+H.getDate()).slice(-2)} / ${("0"+(H.getMonth()+1)).slice(-2)} / ${H.getFullYear()}`}}}}})}),W.subscribe(c=>{c.length>0&&l&&(i=c.reduce(Ie,{}),d(Object.values(i),0),Object.values(i).length===1?(l.options.scales.xAxes[0].ticks.min=+Object.values(i)[0].x-3e8,l.options.scales.xAxes[0].ticks.max=+Object.values(i)[0].x+3e8):(l.options.scales.xAxes[0].ticks.min=+Object.values(i)[0].x,l.options.scales.xAxes[0].ticks.max=+Object.values(i)[Object.keys(i).length-1].x),l.update())}),ee.subscribe(c=>{c&&c.length>0&&l&&(g=c.reduce(Ie,{}),d(Object.values(g),1),Object.values(g).length===1?(l.options.scales.xAxes[1].ticks.min=+Object.values(g)[0].x-3e8,l.options.scales.xAxes[1].ticks.max=+Object.values(g)[0].x+3e8):(l.options.scales.xAxes[1].ticks.min=+Object.values(g)[0].x,l.options.scales.xAxes[1].ticks.max=+Object.values(g)[Object.keys(g).length-1].x),l.update())});function d(c,h){l.data.datasets[h].data=c.map(b=>({x:b.x,y:b.y})),l.update()}function u(c){const h=l.getElementsAtEvent(c);if(h[0]){const b=h[0]._index,_=Object.keys(g)[b];G(W,o=n.filter(D=>D.day===_),o),G(ee,s=a.filter(D=>D.day===_),s)}}return[u]}class Ze extends re{constructor(e){super(),ne(this,e,Fe,ze,ae,{})}}function qe(r){let e,t,a;return{c(){e=v("canvas"),this.h()},l(s){e=m(s,"CANVAS",{id:!0}),y(e).forEach(p),this.h()},h(){C(e,"id","countries-chart")},m(s,n){j(s,e,n),t||(a=Ce(e,"click",r[0]),t=!0)},p:I,i:I,o:I,d(s){s&&p(e),t=!1,a()}}}function Je(r,e,t){let a,s,n,o;V(r,_e,d=>t(3,a=d)),V(r,ee,d=>t(4,s=d)),V(r,be,d=>t(5,n=d)),V(r,W,d=>t(6,o=d));let i,l;ve(async()=>{const d=document.getElementById("countries-chart").getContext("2d");l=new me(d,{type:"bar",data:{labels:[],datasets:[{backgroundColor:"rgb(255, 99, 132)",borderColor:"rgb(255, 99, 132)",data:[]}]},options:{legend:{display:!1},tooltips:{mode:"nearest",intersect:!1},responsive:!0,maintainAspectRatio:!1}})}),W.subscribe(d=>{if(d.length>0&&l){let u=d.reduce((c,h)=>(h.country in c?c[h.country]+=h.sessions:c[h.country]=h.sessions,c),{});i=Object.keys(u).map((c,h)=>({data:u[c],label:c})).sort(function(c,h){return h.data-c.data}).reduce((c,h,b)=>(b>10?"Others"in c?c.Others+=h.data:c.Others=h.data:c[h.label]=h.data,c),{}),g(Object.keys(i),Object.values(i))}});function g(d,u){l.data.labels=d,l.data.datasets[0].data=u,l.update()}function x(d){const u=l.getElementsAtEvent(d);if(u[0]){const c=u[0]._index,h=Object.keys(i)[c];G(W,o=n.filter(b=>b.country===h),o),G(ee,s=a.filter(b=>b.country===h),s)}}return[x]}class Ye extends re{constructor(e){super(),ne(this,e,Je,qe,ae,{})}}function Ge(r){let e,t="Visits per pages:",a,s,n,o;return{c(){e=v("p"),e.textContent=t,a=A(),s=v("canvas"),this.h()},l(i){e=m(i,"P",{"data-svelte-h":!0}),ye(e)!=="svelte-15dyb0z"&&(e.textContent=t),a=P(i),s=m(i,"CANVAS",{id:!0,height:!0}),y(s).forEach(p),this.h()},h(){C(s,"id","pages-chart"),C(s,"height","400px")},m(i,l){j(i,e,l),j(i,a,l),j(i,s,l),n||(o=Ce(s,"click",r[0]),n=!0)},p:I,i:I,o:I,d(i){i&&(p(e),p(a),p(s)),n=!1,o()}}}function Ke(r,e,t){let a,s,n,o;V(r,_e,d=>t(3,a=d)),V(r,ee,d=>t(4,s=d)),V(r,be,d=>t(5,n=d)),V(r,W,d=>t(6,o=d));let i,l;ve(async()=>{const d=document.getElementById("pages-chart").getContext("2d");l=new me(d,{type:"horizontalBar",data:{labels:[],datasets:[{label:"",backgroundColor:"rgb(255, 99, 132)",borderColor:"rgb(255, 99, 132)",data:[]}]},options:{legend:{display:!1},tooltips:{mode:"nearest",intersect:!1}}})}),W.subscribe(d=>{if(d.length>0&&l){let u=d.reduce((c,h)=>(h.pagePath in c?c[h.pagePath]+=h.sessions:c[h.pagePath]=h.sessions,c),{});i=Object.keys(u).map((c,h)=>({label:c,data:u[c]})).sort(function(c,h){return h.data-c.data}).reduce((c,h,b)=>(b>10?"Others"in c?c.Others+=h.data:c.Others=h.data:c[h.label]=h.data,c),{}),g(Object.keys(i),Object.values(i))}});function g(d,u){l.data.labels=d,l.data.datasets[0].data=u,l.update()}function x(d){const u=l.getElementsAtEvent(d);if(u[0]){const c=u[0]._index,h=Object.keys(i)[c];G(W,o=n.filter(b=>b.pagePath===h),o),G(ee,s=a.filter(b=>b.pagePath===h),s)}}return[x]}class Qe extends re{constructor(e){super(),ne(this,e,Ke,Ge,ae,{})}}const De=globalThis.__sveltekit_i2quwh.env;function Xe(r){let e;return{c(){e=v("div"),this.h()},l(t){e=m(t,"DIV",{id:!0,style:!0}),y(e).forEach(p),this.h()},h(){C(e,"id","map"),Ae(e,"width","100%"),Ae(e,"height","400px")},m(t,a){j(t,e,a),r[1](e)},p:I,i:I,o:I,d(t){t&&p(e),r[1](null)}}}let et=1;function tt(r){return r>1e3?"#800026":r>120?"#723122":r>100?"#8B4225":r>75?"#A25626":r>40?"#B86B25":r>20?"#CA8323":r>10?"#DA9C20":r>5?"#E6B71E":r>=1?"#EED322":"white"}function st(r){return{fillColor:tt(r.properties.density),weight:2,opacity:1,color:"white",dashArray:"3",fillOpacity:.7}}function at(r,e,t){let a,s,n,o,i=[20,15.8];ve(async()=>{s=(await Ue(()=>import("../chunks/leaflet-src.506cba83.js").then(u=>u.l),["_app/immutable/chunks/leaflet-src.506cba83.js","_app/immutable/chunks/Chart.5a5b95fb.js"])).default,a=s.map(n,{svgSprite:!1,preferCanvas:!1,zoomControl:!1,center:i,zoom:et}),a.doubleClickZoom.disable(),s.control.zoom({position:"topright"}).addTo(a);const d=await(await fetch(`${De.PUBLIC_BASEURL?De.PUBLIC_BASEURL:""}/countries.geo.json`)).json();W.subscribe(u=>{u.length>0&&(d.features.forEach(c=>{let h=u.filter(b=>b.countryIsoCode===c.id).reduce((b,_)=>b+_.sessions,0);c.properties.density=h}),a.eachLayer(c=>a.removeLayer(c)),o=s.geoJson(d,{style:st,onEachFeature:(c,h)=>h.bindPopup(`${c.properties.name}: ${c.properties.density}`)}),o.addTo(a))})});function l(g){Be[g?"unshift":"push"](()=>{n=g,t(0,n)})}return[n,l]}let rt=class extends re{constructor(e){super(),ne(this,e,at,Xe,ae,{})}};function nt(r){let e,t="Devices :",a,s,n,o;return{c(){e=v("p"),e.textContent=t,a=A(),s=v("canvas"),this.h()},l(i){e=m(i,"P",{"data-svelte-h":!0}),ye(e)!=="svelte-1u9i28h"&&(e.textContent=t),a=P(i),s=m(i,"CANVAS",{id:!0,height:!0}),y(s).forEach(p),this.h()},h(){C(s,"id","devices-chart"),C(s,"height","400px")},m(i,l){j(i,e,l),j(i,a,l),j(i,s,l),n||(o=Ce(s,"click",r[0]),n=!0)},p:I,i:I,o:I,d(i){i&&(p(e),p(a),p(s)),n=!1,o()}}}function lt(r,e,t){let a,s,n,o;V(r,_e,u=>t(3,a=u)),V(r,ee,u=>t(4,s=u)),V(r,be,u=>t(5,n=u)),V(r,W,u=>t(6,o=u));let i,l,g=["#b35806","#e08214","#fdb863","#fee0b6","#f7f7f7","#d8daeb","#b2abd2","#8073ac","#542788"];ve(async()=>{const u=document.getElementById("devices-chart").getContext("2d");l=new me(u,{type:"doughnut",data:{labels:[],datasets:[{label:"My First dataset",backgroundColor:"",borderColor:"",data:[]}]},options:{}})}),W.subscribe(u=>{u.length>0&&l&&(i=u.reduce((c,h)=>(h.device in c?c[h.device]+=h.sessions:c[h.device]=h.sessions,c),{}),x(Object.keys(i),Object.values(i)))});function x(u,c){l.data.labels=u,l.data.datasets[0].data=c,l.data.datasets[0].backgroundColor=g.slice(0,u.length),l.data.datasets[0].borderColor=g.slice(0,u.length),l.update()}function d(u){const c=l.getElementsAtEvent(u);if(c[0]){const h=c[0]._index,b=Object.keys(i)[h];G(W,o=n.filter(_=>_.device===b),o),G(ee,s=a.filter(_=>_.device===b),s)}}return[d]}class it extends re{constructor(e){super(),ne(this,e,lt,nt,ae,{})}}function ot(r){let e,t="Provenance :",a,s,n,o;return{c(){e=v("p"),e.textContent=t,a=A(),s=v("canvas"),this.h()},l(i){e=m(i,"P",{"data-svelte-h":!0}),ye(e)!=="svelte-s7cod3"&&(e.textContent=t),a=P(i),s=m(i,"CANVAS",{id:!0,height:!0}),y(s).forEach(p),this.h()},h(){C(s,"id","provenances-chart"),C(s,"height","400px")},m(i,l){j(i,e,l),j(i,a,l),j(i,s,l),n||(o=Ce(s,"click",r[0]),n=!0)},p:I,i:I,o:I,d(i){i&&(p(e),p(a),p(s)),n=!1,o()}}}function ct(r,e,t){let a,s,n,o;V(r,_e,u=>t(3,a=u)),V(r,ee,u=>t(4,s=u)),V(r,be,u=>t(5,n=u)),V(r,W,u=>t(6,o=u));let i,l,g=["#b35806","#e08214","#fdb863","#fee0b6","#f7f7f7","#d8daeb","#b2abd2","#8073ac","#542788","#fee0b6","#fdb863","#e08214","#b35806"];ve(async()=>{const u=document.getElementById("provenances-chart").getContext("2d");l=new me(u,{type:"horizontalBar",data:{labels:[],datasets:[{backgroundColor:"",borderColor:"",data:[]}]},options:{legend:{display:!1},tooltips:{mode:"nearest",intersect:!1}}})}),W.subscribe(u=>{u.length>0&&l&&(i=u.reduce((c,h)=>(h.pageReferrer in c?c[h.pageReferrer]+=h.sessions:c[h.pageReferrer]=h.sessions,c),{}),x(Object.keys(i),Object.values(i)))});function x(u,c){let h=u.map((b,_)=>({data:c[_],label:u[_]})).sort(function(b,_){return _.data-b.data}).reduce((b,_,D)=>(D>10||_.label==""?"Others"in b?b.Others+=_.data:b.Others=_.data:b[_.label]=_.data,b),{});l.data.labels=Object.keys(h),l.data.datasets[0].data=Object.values(h),l.data.datasets[0].backgroundColor=g.slice(0,u.length),l.data.datasets[0].borderColor=g.slice(0,u.length),l.update()}function d(u){const c=l.getElementsAtEvent(u);if(c[0]){const h=c[0]._index,b=Object.keys(i)[h];G(W,o=n.filter(_=>_.pageReferrer===b),o),G(ee,s=a.filter(_=>_.pageReferrer===b),s)}}return[d]}class dt extends re{constructor(e){super(),ne(this,e,ct,ot,ae,{})}}function Le(r,e,t){const a=r.slice();return a[2]=e[t],a}function Ve(r){let e,t,a,s='<tr class="bg-gray-100"><th>Day</th> <th>Country</th> <th>City</th> <th>Page path</th> <th>Devices</th> <th>Referrer</th> <th>Sessions</th> <th>Users</th></tr>',n,o,i=Te(Object.values(r[0])),l=[];for(let g=0;g<i.length;g+=1)l[g]=Se(Le(r,i,g));return{c(){e=v("div"),t=v("table"),a=v("thead"),a.innerHTML=s,n=A(),o=v("tbody");for(let g=0;g<l.length;g+=1)l[g].c();this.h()},l(g){e=m(g,"DIV",{class:!0});var x=y(e);t=m(x,"TABLE",{class:!0});var d=y(t);a=m(d,"THEAD",{"data-svelte-h":!0}),ye(a)!=="svelte-1szg5gs"&&(a.innerHTML=s),n=P(d),o=m(d,"TBODY",{});var u=y(o);for(let c=0;c<l.length;c+=1)l[c].l(u);u.forEach(p),d.forEach(p),x.forEach(p),this.h()},h(){C(t,"class","w-full table-auto"),C(e,"class","overflow-x-auto")},m(g,x){j(g,e,x),f(e,t),f(t,a),f(t,n),f(t,o);for(let d=0;d<l.length;d+=1)l[d]&&l[d].m(o,null)},p(g,x){if(x&1){i=Te(Object.values(g[0]));let d;for(d=0;d<i.length;d+=1){const u=Le(g,i,d);l[d]?l[d].p(u,x):(l[d]=Se(u),l[d].c(),l[d].m(o,null))}for(;d<l.length;d+=1)l[d].d(1);l.length=i.length}},d(g){g&&p(e),We(l,g)}}}function Se(r){let e,t,a=r[2].day.substring(6,8)+"",s,n,o=r[2].day.substring(4,6)+"",i,l,g=r[2].day.substring(0,4)+"",x,d,u,c=r[2].country+"",h,b,_,D=r[2].city+"",H,Y,R,K=r[2].pagePath+"",N,q,Q,z=r[2].device+"",F,fe,Z,L=r[2].pageReferrer+"",te,S,k,E=r[2].sessions+"",T,M,J,se=r[2].totalUsers+"",he,pe;return{c(){e=v("tr"),t=v("td"),s=w(a),n=w("/"),i=w(o),l=w("/"),x=w(g),d=A(),u=v("td"),h=w(c),b=A(),_=v("td"),H=w(D),Y=A(),R=v("td"),N=w(K),q=A(),Q=v("td"),F=w(z),fe=A(),Z=v("td"),te=w(L),S=A(),k=v("td"),T=w(E),M=A(),J=v("td"),he=w(se),pe=A(),this.h()},l(B){e=m(B,"TR",{class:!0});var $=y(e);t=m($,"TD",{});var X=y(t);s=O(X,a),n=O(X,"/"),i=O(X,o),l=O(X,"/"),x=O(X,g),X.forEach(p),d=P($),u=m($,"TD",{});var ge=y(u);h=O(ge,c),ge.forEach(p),b=P($),_=m($,"TD",{});var ke=y(_);H=O(ke,D),ke.forEach(p),Y=P($),R=m($,"TD",{});var xe=y(R);N=O(xe,K),xe.forEach(p),q=P($),Q=m($,"TD",{});var $e=y(Q);F=O($e,z),$e.forEach(p),fe=P($),Z=m($,"TD",{});var Ee=y(Z);te=O(Ee,L),Ee.forEach(p),S=P($),k=m($,"TD",{});var we=y(k);T=O(we,E),we.forEach(p),M=P($),J=m($,"TD",{});var Oe=y(J);he=O(Oe,se),Oe.forEach(p),pe=P($),$.forEach(p),this.h()},h(){C(e,"class","hover:bg-blue-100")},m(B,$){j(B,e,$),f(e,t),f(t,s),f(t,n),f(t,i),f(t,l),f(t,x),f(e,d),f(e,u),f(u,h),f(e,b),f(e,_),f(_,H),f(e,Y),f(e,R),f(R,N),f(e,q),f(e,Q),f(Q,F),f(e,fe),f(e,Z),f(Z,te),f(e,S),f(e,k),f(k,T),f(e,M),f(e,J),f(J,he),f(e,pe)},p(B,$){$&1&&a!==(a=B[2].day.substring(6,8)+"")&&U(s,a),$&1&&o!==(o=B[2].day.substring(4,6)+"")&&U(i,o),$&1&&g!==(g=B[2].day.substring(0,4)+"")&&U(x,g),$&1&&c!==(c=B[2].country+"")&&U(h,c),$&1&&D!==(D=B[2].city+"")&&U(H,D),$&1&&K!==(K=B[2].pagePath+"")&&U(N,K),$&1&&z!==(z=B[2].device+"")&&U(F,z),$&1&&L!==(L=B[2].pageReferrer+"")&&U(te,L),$&1&&E!==(E=B[2].sessions+"")&&U(T,E),$&1&&se!==(se=B[2].totalUsers+"")&&U(he,se)},d(B){B&&p(e)}}}function ut(r){let e,t=r[0]&&Ve(r);return{c(){t&&t.c(),e=Pe()},l(a){t&&t.l(a),e=Pe()},m(a,s){t&&t.m(a,s),j(a,e,s)},p(a,[s]){a[0]?t?t.p(a,s):(t=Ve(a),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:I,o:I,d(a){a&&p(e),t&&t.d(a)}}}function ft(r,e,t){let a;return W.subscribe(s=>{s.length>0&&t(0,a=s.slice(0,20))}),[a]}class ht extends re{constructor(e){super(),ne(this,e,ft,ut,ae,{})}}function pt(r){let e,t,a,s;return{c(){e=v("p"),t=w("+ "),a=w(r[4]),s=w(" %"),this.h()},l(n){e=m(n,"P",{class:!0});var o=y(e);t=O(o,"+ "),a=O(o,r[4]),s=O(o," %"),o.forEach(p),this.h()},h(){C(e,"class","text-green-700 text dark:text-green-400")},m(n,o){j(n,e,o),f(e,t),f(e,a),f(e,s)},p(n,o){o&16&&U(a,n[4])},d(n){n&&p(e)}}}function gt(r){let e,t,a;return{c(){e=v("p"),t=w(r[4]),a=w(" %"),this.h()},l(s){e=m(s,"P",{class:!0});var n=y(e);t=O(n,r[4]),a=O(n," %"),n.forEach(p),this.h()},h(){C(e,"class","text-pink-700 text dark:text-pink-400")},m(s,n){j(s,e,n),f(e,t),f(e,a)},p(s,n){n&16&&U(t,s[4])},d(s){s&&p(e)}}}function bt(r){let e,t,a,s;return{c(){e=v("p"),t=w("+ "),a=w(r[5]),s=w(" %"),this.h()},l(n){e=m(n,"P",{class:!0});var o=y(e);t=O(o,"+ "),a=O(o,r[5]),s=O(o," %"),o.forEach(p),this.h()},h(){C(e,"class","text-green-700 text dark:text-green-400")},m(n,o){j(n,e,o),f(e,t),f(e,a),f(e,s)},p(n,o){o&32&&U(a,n[5])},d(n){n&&p(e)}}}function vt(r){let e,t,a;return{c(){e=v("p"),t=w(r[5]),a=w(" %"),this.h()},l(s){e=m(s,"P",{class:!0});var n=y(e);t=O(n,r[5]),a=O(n," %"),n.forEach(p),this.h()},h(){C(e,"class","text-pink-700 text dark:text-pink-400")},m(s,n){j(s,e,n),f(e,t),f(e,a)},p(s,n){n&32&&U(t,s[5])},d(s){s&&p(e)}}}function mt(r){let e,t,a,s,n,o,i,l,g,x,d,u,c,h,b,_,D,H,Y,R,K,N,q,Q,z,F;function fe(E,T){return E[4]<0?gt:pt}let Z=fe(r),L=Z(r);function te(E,T){return E[5]<0?vt:bt}let S=te(r),k=S(r);return{c(){e=v("nav"),t=v("div"),a=v("a"),s=v("h5"),n=w(r[0]),o=w(" sessions"),i=A(),l=v("p"),L.c(),g=A(),x=v("p"),d=w(r[2]),u=w(" last week"),c=A(),h=v("div"),b=v("a"),_=v("h5"),D=w(r[1]),H=w(" users"),Y=A(),R=v("p"),k.c(),K=A(),N=v("p"),q=w(r[3]),Q=w(" last week"),z=A(),F=v("br"),this.h()},l(E){e=m(E,"NAV",{class:!0});var T=y(e);t=m(T,"DIV",{class:!0});var M=y(t);a=m(M,"A",{href:!0,class:!0});var J=y(a);s=m(J,"H5",{class:!0});var se=y(s);n=O(se,r[0]),o=O(se," sessions"),se.forEach(p),i=P(J),l=m(J,"P",{class:!0});var he=y(l);L.l(he),he.forEach(p),g=P(J),x=m(J,"P",{});var pe=y(x);d=O(pe,r[2]),u=O(pe," last week"),pe.forEach(p),J.forEach(p),M.forEach(p),c=P(T),h=m(T,"DIV",{class:!0});var B=y(h);b=m(B,"A",{href:!0,class:!0});var $=y(b);_=m($,"H5",{class:!0});var X=y(_);D=O(X,r[1]),H=O(X," users"),X.forEach(p),Y=P($),R=m($,"P",{class:!0});var ge=y(R);k.l(ge),ge.forEach(p),K=P($),N=m($,"P",{});var ke=y(N);q=O(ke,r[3]),Q=O(ke," last week"),ke.forEach(p),$.forEach(p),B.forEach(p),T.forEach(p),z=P(E),F=m(E,"BR",{}),this.h()},h(){C(s,"class","mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"),C(l,"class","font-normal"),C(a,"href","#"),C(a,"class","block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"),C(t,"class","flex-initial"),C(_,"class","mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"),C(R,"class","font-normal"),C(b,"href","#"),C(b,"class","block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"),C(h,"class","flex-initial"),C(e,"class","flex justify-center gap-x-8")},m(E,T){j(E,e,T),f(e,t),f(t,a),f(a,s),f(s,n),f(s,o),f(a,i),f(a,l),L.m(l,null),f(a,g),f(a,x),f(x,d),f(x,u),f(e,c),f(e,h),f(h,b),f(b,_),f(_,D),f(_,H),f(b,Y),f(b,R),k.m(R,null),f(b,K),f(b,N),f(N,q),f(N,Q),j(E,z,T),j(E,F,T)},p(E,[T]){T&1&&U(n,E[0]),Z===(Z=fe(E))&&L?L.p(E,T):(L.d(1),L=Z(E),L&&(L.c(),L.m(l,null))),T&4&&U(d,E[2]),T&2&&U(D,E[1]),S===(S=te(E))&&k?k.p(E,T):(k.d(1),k=S(E),k&&(k.c(),k.m(R,null))),T&8&&U(q,E[3])},i:I,o:I,d(E){E&&(p(e),p(z),p(F)),L.d(),k.d()}}}function _t(r,e,t){let a,s,n,o,i,l;return W.subscribe(g=>{W.subscribe(x=>{g.length>0&&(t(0,a=g.reduce((d,u)=>d+u.sessions,0)),t(1,s=g.reduce((d,u)=>d+u.totalUsers,0)),t(2,n=x.reduce((d,u)=>d+u.sessions,0)),t(3,o=x.reduce((d,u)=>d+u.totalUsers,0)),t(4,i=Math.round(((a-n)/a+Number.EPSILON)*100)),t(5,l=Math.round(((s-o)/s+Number.EPSILON)*100)))})}),[a,s,n,o,i,l]}class yt extends re{constructor(e){super(),ne(this,e,_t,mt,ae,{})}}function kt(r){let e,t="Popular content:",a,s;return{c(){e=v("p"),e.textContent=t,a=A(),s=v("canvas"),this.h()},l(n){e=m(n,"P",{"data-svelte-h":!0}),ye(e)!=="svelte-1s4cb32"&&(e.textContent=t),a=P(n),s=m(n,"CANVAS",{id:!0}),y(s).forEach(p),this.h()},h(){C(s,"id","tags-chart")},m(n,o){j(n,e,o),j(n,a,o),j(n,s,o)},p:I,i:I,o:I,d(n){n&&(p(e),p(a),p(s))}}}function Ct(r){let e,t;ve(async()=>{e=await Ne();const s=document.getElementById("tags-chart").getContext("2d");t=new me(s,{type:"bubble",data:{datasets:[{label:"",backgroundColor:"rgb(255, 99, 132)",borderColor:"rgb(255, 99, 132)",data:[]}]},options:{legend:{display:!1},tooltips:{mode:"nearest",intersect:!1,callbacks:{title(n,o){let{index:i}=n[0],{datasetIndex:l}=n[0],g=o.datasets[l].data[i].x,x=o.datasets[l].data[i].y;return o.datasets[l].data[i].tag,`Visits: ${x}, Posts: ${g}`},label(n,o){let{index:i}=n,{datasetIndex:l}=n;return`${o.datasets[l].data[i].tag}`}}},scales:{xAxes:[{id:"posts-x-axis",type:"linear",scaleLabel:{display:!0,labelString:"Number of posts"}}],yAxes:[{id:"visits-y-axis",type:"logarithmic",ticks:{userCallback(n){var o=n/Math.pow(10,Math.floor(me.helpers.log10(n)));return o===1||o===2||o===5?n.toString():""}},position:"left",scaleLabel:{display:!0,labelString:"Number of visits"}}]}}})}),W.subscribe(s=>{if(s.length>0&&e){let n=s.reduce((i,l)=>(l.pagePath in i?i[l.pagePath]+=l.sessions:i[l.pagePath]=l.sessions,i),{}),o=e.reduce((i,l)=>(l.link||l.tags.forEach(g=>{g in i?(i[g].count+=1,i[g].visits+=n[l.url]?n[l.url]:0):i[g]={tag:g,count:1,visits:n[l.url]?n[l.url]:0}}),i),{});a(Object.values(o))}});function a(s){t.data.datasets[0].data=s.map(n=>({x:n.count,y:n.visits,tag:n.tag,r:Math.log(n.visits/n.count*10+1)})),t.update()}return[]}class xt extends re{constructor(e){super(),ne(this,e,Ct,kt,ae,{})}}function Me(r){let e,t='<svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"></path></svg> <span class="sr-only">Loading...</span>';return{c(){e=v("div"),e.innerHTML=t,this.h()},l(a){e=m(a,"DIV",{role:!0,class:!0,"data-svelte-h":!0}),ye(e)!=="svelte-1hftwox"&&(e.innerHTML=t),this.h()},h(){C(e,"role","status"),C(e,"class","absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2")},m(a,s){j(a,e,s)},d(a){a&&p(e)}}}function $t(r){let e,t,a,s,n,o,i,l,g,x,d,u,c,h,b,_,D,H,Y,R,K,N,q,Q,z,F,fe,Z,L,te,S=r[0].length===0&&Me();return s=new yt({}),l=new Ze({}),d=new Ye({}),h=new rt({}),D=new Qe({}),R=new it({}),q=new dt({}),F=new xt({}),L=new ht({}),{c(){e=v("section"),t=v("div"),S&&S.c(),a=A(),le(s.$$.fragment),n=A(),o=v("div"),i=v("div"),le(l.$$.fragment),g=A(),x=v("div"),le(d.$$.fragment),u=A(),c=v("div"),le(h.$$.fragment),b=A(),_=v("div"),le(D.$$.fragment),H=A(),Y=v("div"),le(R.$$.fragment),K=A(),N=v("div"),le(q.$$.fragment),Q=A(),z=v("div"),le(F.$$.fragment),fe=A(),Z=v("div"),le(L.$$.fragment),this.h()},l(k){e=m(k,"SECTION",{class:!0});var E=y(e);t=m(E,"DIV",{class:!0});var T=y(t);S&&S.l(T),a=P(T),ie(s.$$.fragment,T),n=P(T),o=m(T,"DIV",{class:!0});var M=y(o);i=m(M,"DIV",{class:!0});var J=y(i);ie(l.$$.fragment,J),J.forEach(p),g=P(M),x=m(M,"DIV",{class:!0});var se=y(x);ie(d.$$.fragment,se),se.forEach(p),u=P(M),c=m(M,"DIV",{class:!0});var he=y(c);ie(h.$$.fragment,he),he.forEach(p),b=P(M),_=m(M,"DIV",{class:!0});var pe=y(_);ie(D.$$.fragment,pe),pe.forEach(p),H=P(M),Y=m(M,"DIV",{class:!0});var B=y(Y);ie(R.$$.fragment,B),B.forEach(p),K=P(M),N=m(M,"DIV",{class:!0});var $=y(N);ie(q.$$.fragment,$),$.forEach(p),Q=P(M),z=m(M,"DIV",{class:!0});var X=y(z);ie(F.$$.fragment,X),X.forEach(p),fe=P(M),Z=m(M,"DIV",{class:!0});var ge=y(Z);ie(L.$$.fragment,ge),ge.forEach(p),M.forEach(p),T.forEach(p),E.forEach(p),this.h()},h(){C(i,"class","col-span-3 sm:col-span-1"),C(x,"class","col-span-3 sm:col-span-1"),C(c,"class","col-span-3 sm:col-span-1"),C(_,"class","col-span-3 sm:col-span-1"),C(Y,"class","col-span-3 sm:col-span-1"),C(N,"class","col-span-3 sm:col-span-1"),C(z,"class","col-span-3 sm:col-span-1"),C(Z,"class","col-span-3 sm:col-span-3"),C(o,"class","grid grid-cols-3 gap-5"),C(t,"class","w-full"),C(e,"class","px-8")},m(k,E){j(k,e,E),f(e,t),S&&S.m(t,null),f(t,a),oe(s,t,null),f(t,n),f(t,o),f(o,i),oe(l,i,null),f(o,g),f(o,x),oe(d,x,null),f(o,u),f(o,c),oe(h,c,null),f(o,b),f(o,_),oe(D,_,null),f(o,H),f(o,Y),oe(R,Y,null),f(o,K),f(o,N),oe(q,N,null),f(o,Q),f(o,z),oe(F,z,null),f(o,fe),f(o,Z),oe(L,Z,null),te=!0},p(k,[E]){k[0].length===0?S||(S=Me(),S.c(),S.m(t,a)):S&&(S.d(1),S=null)},i(k){te||(ce(s.$$.fragment,k),ce(l.$$.fragment,k),ce(d.$$.fragment,k),ce(h.$$.fragment,k),ce(D.$$.fragment,k),ce(R.$$.fragment,k),ce(q.$$.fragment,k),ce(F.$$.fragment,k),ce(L.$$.fragment,k),te=!0)},o(k){de(s.$$.fragment,k),de(l.$$.fragment,k),de(d.$$.fragment,k),de(h.$$.fragment,k),de(D.$$.fragment,k),de(R.$$.fragment,k),de(q.$$.fragment,k),de(F.$$.fragment,k),de(L.$$.fragment,k),te=!1},d(k){k&&p(e),S&&S.d(),ue(s),ue(l),ue(d),ue(h),ue(D),ue(R),ue(q),ue(F),ue(L)}}}function Et(r,e,t){let a;return V(r,be,s=>t(0,a=s)),[a]}class wt extends re{constructor(e){super(),ne(this,e,Et,$t,ae,{})}}function Ot(r){let e,t=`<div class="w-full p-4 mx-auto max-w-screen-xl md:py-8"><hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>

			This dashboard shows the traffic data from <a href="https://cristianpb.github.io">cristianpb.github.io</a>. The code source of this dashboard is published in
			<a class="is-danger" href="https://github.com/cristianpb/analytics-google">this github repository</a></div>`;return{c(){e=v("footer"),e.innerHTML=t,this.h()},l(a){e=m(a,"FOOTER",{class:!0,"data-svelte-h":!0}),ye(e)!=="svelte-1y42hc1"&&(e.innerHTML=t),this.h()},h(){C(e,"class","m-4 bg-white rounded-lg shadow dark:bg-gray-900")},m(a,s){j(a,e,s)},p:I,i:I,o:I,d(a){a&&p(e)}}}class At extends re{constructor(e){super(),ne(this,e,null,Ot,ae,{})}}function Pt(r){let e,t,a,s,n,o;return a=new wt({}),n=new At({}),{c(){e=A(),t=v("div"),le(a.$$.fragment),s=A(),le(n.$$.fragment),this.h()},l(i){Re("svelte-35vdxi",document.head).forEach(p),e=P(i),t=m(i,"DIV",{class:!0});var g=y(t);ie(a.$$.fragment,g),s=P(g),ie(n.$$.fragment,g),g.forEach(p),this.h()},h(){document.title="Analytics - Cristian Perez Brokate",C(t,"class","app")},m(i,l){j(i,e,l),j(i,t,l),oe(a,t,null),f(t,s),oe(n,t,null),o=!0},p:I,i(i){o||(ce(a.$$.fragment,i),ce(n.$$.fragment,i),o=!0)},o(i){de(a.$$.fragment,i),de(n.$$.fragment,i),o=!1},d(i){i&&(p(e),p(t)),ue(a),ue(n)}}}function jt(r,e,t){let a,s,n,o;return V(r,ee,i=>t(0,a=i)),V(r,_e,i=>t(1,s=i)),V(r,W,i=>t(2,n=i)),V(r,be,i=>t(3,o=i)),ve(async()=>{const i=await je(0),l=await je(7);G(be,o=i,o),G(W,n=i,n),G(_e,s=l,s),G(ee,a=l,a)}),[]}class Bt extends re{constructor(e){super(),ne(this,e,jt,Pt,ae,{})}}export{Bt as component,St as universal};
