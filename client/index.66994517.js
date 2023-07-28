import{S as e,i as t,s,e as a,c as r,a as n,d as c,b as i,f as o,l,n as d,g as h,h as u,j as f,k as g,r as p,o as b,m,t as v,p as y,q as $,u as E,v as x,w as k,x as O,y as C,z as A,A as D,B as j,C as w,D as P,E as I,F as T,G as V,H as S}from"./client.b26de1b7.js";import{C as R,f as B,l as N,a as _}from"./Chart.6c8b7727.js";function L(e){let t,s,h;return{c(){t=a("canvas"),this.h()},l(e){t=r(e,"CANVAS",{id:!0}),n(t).forEach(c),this.h()},h(){i(t,"id","visits-chart")},m(a,r){o(a,t,r),s||(h=l(t,"click",e[0]),s=!0)},p:d,i:d,o:d,d(e){e&&c(t),s=!1,h()}}}function z(e,t){return t.day in e?e[t.day].y+=t.sessions:e[t.day]={x:t.dd,y:t.sessions},e}function H(e,t,s){let a,r,n,c,i,o,l;h(e,u,e=>s(4,a=e)),h(e,f,e=>s(5,r=e)),h(e,g,e=>s(6,n=e)),h(e,p,e=>s(7,c=e));let d={0:"Sunday",1:"Monday",2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday"};function v(e,t){o.data.datasets[t].data=e.map(e=>({x:e.x,y:e.y})),o.update()}return b(async()=>{const e=document.getElementById("visits-chart").getContext("2d");o=new R(e,{type:"line",data:{datasets:[{label:"This week",backgroundColor:"#2171b5",borderColor:"#2171b5",fill:!1,data:[]},{label:"Last week",backgroundColor:"#c6dbef",borderColor:"#c6dbef",fill:!1,borderDash:[10,5],xAxisID:"axisLastWeek",data:[]}]},options:{responsive:!0,maintainAspectRatio:!1,scales:{xAxes:[{id:"axisThisWeek",type:"time",ticks:{min:0,max:1586e9}},{id:"axisLastWeek",type:"time",display:!1,gridLines:{drawOnChartArea:!1}}],yAxes:[{id:"temp-y-axis",type:"linear",position:"left",scaleLabel:{display:!0,labelString:"Number of sessions"}}]},tooltips:{mode:"nearest",intersect:!1,callbacks:{title(e,t){let{index:s}=e[0],{datasetIndex:a}=e[0],r=t.datasets[a].data[s].x;return`${d[r.getDay()]} ${("0"+r.getDate()).slice(-2)} / ${("0"+(r.getMonth()+1)).slice(-2)} / ${r.getFullYear()}`}}}}})}),p.subscribe(e=>{e.length>0&&o&&(i=e.reduce(z,{}),v(Object.values(i),0),1===Object.values(i).length?(o.options.scales.xAxes[0].ticks.min=+Object.values(i)[0].x-3e8,o.options.scales.xAxes[0].ticks.max=+Object.values(i)[0].x+3e8):(o.options.scales.xAxes[0].ticks.min=+Object.values(i)[0].x,o.options.scales.xAxes[0].ticks.max=+Object.values(i)[Object.keys(i).length-1].x),o.update())}),f.subscribe(e=>{e&&e.length>0&&o&&(l=e.reduce(z,{}),v(Object.values(l),1),1===Object.values(l).length?(o.options.scales.xAxes[1].ticks.min=+Object.values(l)[0].x-3e8,o.options.scales.xAxes[1].ticks.max=+Object.values(l)[0].x+3e8):(o.options.scales.xAxes[1].ticks.min=+Object.values(l)[0].x,o.options.scales.xAxes[1].ticks.max=+Object.values(l)[Object.keys(l).length-1].x),o.update())}),[function(e){const t=o.getElementsAtEvent(e);if(t[0]){const e=t[0]._index,s=Object.keys(l)[e];m(p,c=n.filter(e=>e.day===s),c),m(f,r=a.filter(e=>e.day===s),r)}}]}class M extends e{constructor(e){super(),t(this,e,H,L,s,{})}}function F(e){let t,s,h;return{c(){t=a("canvas"),this.h()},l(e){t=r(e,"CANVAS",{id:!0}),n(t).forEach(c),this.h()},h(){i(t,"id","countries-chart")},m(a,r){o(a,t,r),s||(h=l(t,"click",e[0]),s=!0)},p:d,i:d,o:d,d(e){e&&c(t),s=!1,h()}}}function U(e,t,s){let a,r,n,c,i,o;return h(e,u,e=>s(3,a=e)),h(e,f,e=>s(4,r=e)),h(e,g,e=>s(5,n=e)),h(e,p,e=>s(6,c=e)),b(async()=>{const e=document.getElementById("countries-chart").getContext("2d");o=new R(e,{type:"bar",data:{labels:[],datasets:[{backgroundColor:"rgb(255, 99, 132)",borderColor:"rgb(255, 99, 132)",data:[]}]},options:{legend:{display:!1},tooltips:{mode:"nearest",intersect:!1},responsive:!0,maintainAspectRatio:!1}})}),p.subscribe(e=>{if(e.length>0&&o){let t=e.reduce((e,t)=>(t.country in e?e[t.country]+=t.sessions:e[t.country]=t.sessions,e),{});i=Object.keys(t).map((e,s)=>({data:t[e],label:e})).sort((function(e,t){return t.data-e.data})).reduce((e,t,s)=>(s>10?"Others"in e?e.Others+=t.data:e.Others=t.data:e[t.label]=t.data,e),{}),function(e,t){o.data.labels=e,o.data.datasets[0].data=t,o.update()}(Object.keys(i),Object.values(i))}}),[function(e){const t=o.getElementsAtEvent(e);if(t[0]){const e=t[0]._index,s=Object.keys(i)[e];m(p,c=n.filter(e=>e.country===s),c),m(f,r=a.filter(e=>e.country===s),r)}}]}class W extends e{constructor(e){super(),t(this,e,U,F,s,{})}}function G(e){let t,s,h,u,f,g;return{c(){t=a("p"),s=v("Visits per pages:"),h=y(),u=a("canvas"),this.h()},l(e){t=r(e,"P",{});var a=n(t);s=$(a,"Visits per pages:"),a.forEach(c),h=E(e),u=r(e,"CANVAS",{id:!0,height:!0}),n(u).forEach(c),this.h()},h(){i(u,"id","pages-chart"),i(u,"height","400px")},m(a,r){o(a,t,r),x(t,s),o(a,h,r),o(a,u,r),f||(g=l(u,"click",e[0]),f=!0)},p:d,i:d,o:d,d(e){e&&c(t),e&&c(h),e&&c(u),f=!1,g()}}}function J(e,t,s){let a,r,n,c,i,o;return h(e,u,e=>s(3,a=e)),h(e,f,e=>s(4,r=e)),h(e,g,e=>s(5,n=e)),h(e,p,e=>s(6,c=e)),b(async()=>{const e=document.getElementById("pages-chart").getContext("2d");o=new R(e,{type:"horizontalBar",data:{labels:[],datasets:[{label:"",backgroundColor:"rgb(255, 99, 132)",borderColor:"rgb(255, 99, 132)",data:[]}]},options:{legend:{display:!1},tooltips:{mode:"nearest",intersect:!1}}})}),p.subscribe(e=>{if(e.length>0&&o){let t=e.reduce((e,t)=>(t.pagePath in e?e[t.pagePath]+=t.sessions:e[t.pagePath]=t.sessions,e),{});i=Object.keys(t).map((e,s)=>({label:e,data:t[e]})).sort((function(e,t){return t.data-e.data})).reduce((e,t,s)=>(s>10?"Others"in e?e.Others+=t.data:e.Others=t.data:e[t.label]=t.data,e),{}),function(e,t){o.data.labels=e,o.data.datasets[0].data=t,o.update()}(Object.keys(i),Object.values(i))}}),[function(e){const t=o.getElementsAtEvent(e);if(t[0]){const e=t[0]._index,s=Object.keys(i)[e];m(p,c=n.filter(e=>e.pagePath===s),c),m(f,r=a.filter(e=>e.pagePath===s),r)}}]}class Y extends e{constructor(e){super(),t(this,e,J,G,s,{})}}function q(e){let t;return{c(){t=a("div"),this.h()},l(e){t=r(e,"DIV",{id:!0,style:!0}),n(t).forEach(c),this.h()},h(){i(t,"id","map"),k(t,"width","100%"),k(t,"height","400px")},m(s,a){o(s,t,a),e[1](t)},p:d,i:d,o:d,d(s){s&&c(t),e[1](null)}}}function Z(e){return{fillColor:(t=e.properties.density,t>1e3?"#800026":t>120?"#723122":t>100?"#8B4225":t>75?"#A25626":t>40?"#B86B25":t>20?"#CA8323":t>10?"#DA9C20":t>5?"#E6B71E":t>=1?"#EED322":"white"),weight:2,opacity:1,color:"white",dashArray:"3",fillOpacity:.7};var t}function K(e,t,s){let a,r,n,c,i=[20,15.8];return b(async()=>{const e=await Promise.all([import("./leaflet-src.bcb52619.js"),]).then((function(e){return e[0]})).then((function(e){return e.l}));r=e.default,a=r.map(n,{svgSprite:!1,preferCanvas:!1,zoomControl:!1,center:i,zoom:1}),a.doubleClickZoom.disable(),r.control.zoom({position:"topright"}).addTo(a);const t=await fetch("/analytics-google/countries.geo.json"),s=await t.json();p.subscribe(e=>{e.length>0&&(s.features.forEach(t=>{let s=e.filter(e=>e.countryIsoCode===t.id).reduce((e,t)=>e+t.sessions,0);t.properties.density=s}),a.eachLayer(e=>a.removeLayer(e)),c=r.geoJson(s,{style:Z,onEachFeature:(e,t)=>t.bindPopup(`${e.properties.name}: ${e.properties.density}`)}),c.addTo(a))})}),[n,function(e){O[e?"unshift":"push"](()=>{n=e,s(0,n)})}]}class Q extends e{constructor(e){super(),t(this,e,K,q,s,{})}}function X(e){let t,s,h,u,f,g;return{c(){t=a("p"),s=v("Devices :"),h=y(),u=a("canvas"),this.h()},l(e){t=r(e,"P",{});var a=n(t);s=$(a,"Devices :"),a.forEach(c),h=E(e),u=r(e,"CANVAS",{id:!0,height:!0}),n(u).forEach(c),this.h()},h(){i(u,"id","devices-chart"),i(u,"height","400px")},m(a,r){o(a,t,r),x(t,s),o(a,h,r),o(a,u,r),f||(g=l(u,"click",e[0]),f=!0)},p:d,i:d,o:d,d(e){e&&c(t),e&&c(h),e&&c(u),f=!1,g()}}}function ee(e,t,s){let a,r,n,c,i,o;h(e,u,e=>s(3,a=e)),h(e,f,e=>s(4,r=e)),h(e,g,e=>s(5,n=e)),h(e,p,e=>s(6,c=e));let l=["#b35806","#e08214","#fdb863","#fee0b6","#f7f7f7","#d8daeb","#b2abd2","#8073ac","#542788"];return b(async()=>{const e=document.getElementById("devices-chart").getContext("2d");o=new R(e,{type:"doughnut",data:{labels:[],datasets:[{label:"My First dataset",backgroundColor:"",borderColor:"",data:[]}]},options:{}})}),p.subscribe(e=>{e.length>0&&o&&(i=e.reduce((e,t)=>(t.device in e?e[t.device]+=t.sessions:e[t.device]=t.sessions,e),{}),function(e,t){o.data.labels=e,o.data.datasets[0].data=t,o.data.datasets[0].backgroundColor=l.slice(0,e.length),o.data.datasets[0].borderColor=l.slice(0,e.length),o.update()}(Object.keys(i),Object.values(i)))}),[function(e){const t=o.getElementsAtEvent(e);if(t[0]){const e=t[0]._index,s=Object.keys(i)[e];m(p,c=n.filter(e=>e.device===s),c),m(f,r=a.filter(e=>e.device===s),r)}}]}class te extends e{constructor(e){super(),t(this,e,ee,X,s,{})}}function se(e){let t,s,h,u,f,g;return{c(){t=a("p"),s=v("Provenance :"),h=y(),u=a("canvas"),this.h()},l(e){t=r(e,"P",{});var a=n(t);s=$(a,"Provenance :"),a.forEach(c),h=E(e),u=r(e,"CANVAS",{id:!0,height:!0}),n(u).forEach(c),this.h()},h(){i(u,"id","provenances-chart"),i(u,"height","400px")},m(a,r){o(a,t,r),x(t,s),o(a,h,r),o(a,u,r),f||(g=l(u,"click",e[0]),f=!0)},p:d,i:d,o:d,d(e){e&&c(t),e&&c(h),e&&c(u),f=!1,g()}}}function ae(e,t,s){let a,r,n,c,i,o;h(e,u,e=>s(3,a=e)),h(e,f,e=>s(4,r=e)),h(e,g,e=>s(5,n=e)),h(e,p,e=>s(6,c=e));let l=["#b35806","#e08214","#fdb863","#fee0b6","#f7f7f7","#d8daeb","#b2abd2","#8073ac","#542788","#fee0b6","#fdb863","#e08214","#b35806"];return b(async()=>{const e=document.getElementById("provenances-chart").getContext("2d");o=new R(e,{type:"horizontalBar",data:{labels:[],datasets:[{backgroundColor:"",borderColor:"",data:[]}]},options:{legend:{display:!1},tooltips:{mode:"nearest",intersect:!1}}})}),p.subscribe(e=>{e.length>0&&o&&(i=e.reduce((e,t)=>(t.pageReferrer in e?e[t.pageReferrer]+=t.sessions:e[t.pageReferrer]=t.sessions,e),{}),function(e,t){let s=e.map((s,a)=>({data:t[a],label:e[a]})).sort((function(e,t){return t.data-e.data})).reduce((e,t,s)=>(s>10||""==t.label?"Others"in e?e.Others+=t.data:e.Others=t.data:e[t.label]=t.data,e),{});o.data.labels=Object.keys(s),o.data.datasets[0].data=Object.values(s),o.data.datasets[0].backgroundColor=l.slice(0,e.length),o.data.datasets[0].borderColor=l.slice(0,e.length),o.update()}(Object.keys(i),Object.values(i)))}),[function(e){const t=o.getElementsAtEvent(e);if(t[0]){const e=t[0]._index,s=Object.keys(i)[e];m(p,c=n.filter(e=>e.pageReferrer===s),c),m(f,r=a.filter(e=>e.pageReferrer===s),r)}}]}class re extends e{constructor(e){super(),t(this,e,ae,se,s,{})}}function ne(e,t,s){const a=e.slice();return a[2]=t[s],a}function ce(e){let t,s,l,d,h,u,f,g,p,b,m,k,O,C,D,j,w,P,I,T,V,S,R,B,N,_,L,z,H,M=Object.values(e[0]),F=[];for(let t=0;t<M.length;t+=1)F[t]=ie(ne(e,M,t));return{c(){t=a("div"),s=a("table"),l=a("thead"),d=a("tr"),h=a("th"),u=v("Day"),f=y(),g=a("th"),p=v("Country"),b=y(),m=a("th"),k=v("City"),O=y(),C=a("th"),D=v("Page path"),j=y(),w=a("th"),P=v("Devices"),I=y(),T=a("th"),V=v("Referrer"),S=y(),R=a("th"),B=v("Sessions"),N=y(),_=a("th"),L=v("Users"),z=y(),H=a("tbody");for(let e=0;e<F.length;e+=1)F[e].c();this.h()},l(e){t=r(e,"DIV",{class:!0});var a=n(t);s=r(a,"TABLE",{class:!0});var i=n(s);l=r(i,"THEAD",{});var o=n(l);d=r(o,"TR",{});var v=n(d);h=r(v,"TH",{});var y=n(h);u=$(y,"Day"),y.forEach(c),f=E(v),g=r(v,"TH",{});var x=n(g);p=$(x,"Country"),x.forEach(c),b=E(v),m=r(v,"TH",{});var A=n(m);k=$(A,"City"),A.forEach(c),O=E(v),C=r(v,"TH",{});var M=n(C);D=$(M,"Page path"),M.forEach(c),j=E(v),w=r(v,"TH",{});var U=n(w);P=$(U,"Devices"),U.forEach(c),I=E(v),T=r(v,"TH",{});var W=n(T);V=$(W,"Referrer"),W.forEach(c),S=E(v),R=r(v,"TH",{});var G=n(R);B=$(G,"Sessions"),G.forEach(c),N=E(v),_=r(v,"TH",{});var J=n(_);L=$(J,"Users"),J.forEach(c),v.forEach(c),o.forEach(c),z=E(i),H=r(i,"TBODY",{});var Y=n(H);for(let e=0;e<F.length;e+=1)F[e].l(Y);Y.forEach(c),i.forEach(c),a.forEach(c),this.h()},h(){i(s,"class","table is-bordered is-striped is-narrow is-hoverable is-fullwidth"),i(t,"class","table-container")},m(e,a){o(e,t,a),x(t,s),x(s,l),x(l,d),x(d,h),x(h,u),x(d,f),x(d,g),x(g,p),x(d,b),x(d,m),x(m,k),x(d,O),x(d,C),x(C,D),x(d,j),x(d,w),x(w,P),x(d,I),x(d,T),x(T,V),x(d,S),x(d,R),x(R,B),x(d,N),x(d,_),x(_,L),x(s,z),x(s,H);for(let e=0;e<F.length;e+=1)F[e]&&F[e].m(H,null)},p(e,t){if(1&t){let s;for(M=Object.values(e[0]),s=0;s<M.length;s+=1){const a=ne(e,M,s);F[s]?F[s].p(a,t):(F[s]=ie(a),F[s].c(),F[s].m(H,null))}for(;s<F.length;s+=1)F[s].d(1);F.length=M.length}},d(e){e&&c(t),A(F,e)}}}function ie(e){let t,s,i,l,d,h,u,f,g,p,b,m,k,O,C,A,j,w,P,I,T,V,S,R,B,N,_,L,z,H=e[2].day.substring(6,8)+"",M=e[2].day.substring(4,6)+"",F=e[2].day.substring(0,4)+"",U=e[2].country+"",W=e[2].city+"",G=e[2].pagePath+"",J=e[2].device+"",Y=e[2].pageReferrer+"",q=e[2].sessions+"",Z=e[2].totalUsers+"";return{c(){t=a("tr"),s=a("td"),i=v(H),l=v("/"),d=v(M),h=v("/"),u=v(F),f=y(),g=a("td"),p=v(U),b=y(),m=a("td"),k=v(W),O=y(),C=a("td"),A=v(G),j=y(),w=a("td"),P=v(J),I=y(),T=a("td"),V=v(Y),S=y(),R=a("td"),B=v(q),N=y(),_=a("td"),L=v(Z),z=y()},l(e){t=r(e,"TR",{});var a=n(t);s=r(a,"TD",{});var o=n(s);i=$(o,H),l=$(o,"/"),d=$(o,M),h=$(o,"/"),u=$(o,F),o.forEach(c),f=E(a),g=r(a,"TD",{});var v=n(g);p=$(v,U),v.forEach(c),b=E(a),m=r(a,"TD",{});var y=n(m);k=$(y,W),y.forEach(c),O=E(a),C=r(a,"TD",{});var x=n(C);A=$(x,G),x.forEach(c),j=E(a),w=r(a,"TD",{});var D=n(w);P=$(D,J),D.forEach(c),I=E(a),T=r(a,"TD",{});var K=n(T);V=$(K,Y),K.forEach(c),S=E(a),R=r(a,"TD",{});var Q=n(R);B=$(Q,q),Q.forEach(c),N=E(a),_=r(a,"TD",{});var X=n(_);L=$(X,Z),X.forEach(c),z=E(a),a.forEach(c)},m(e,a){o(e,t,a),x(t,s),x(s,i),x(s,l),x(s,d),x(s,h),x(s,u),x(t,f),x(t,g),x(g,p),x(t,b),x(t,m),x(m,k),x(t,O),x(t,C),x(C,A),x(t,j),x(t,w),x(w,P),x(t,I),x(t,T),x(T,V),x(t,S),x(t,R),x(R,B),x(t,N),x(t,_),x(_,L),x(t,z)},p(e,t){1&t&&H!==(H=e[2].day.substring(6,8)+"")&&D(i,H),1&t&&M!==(M=e[2].day.substring(4,6)+"")&&D(d,M),1&t&&F!==(F=e[2].day.substring(0,4)+"")&&D(u,F),1&t&&U!==(U=e[2].country+"")&&D(p,U),1&t&&W!==(W=e[2].city+"")&&D(k,W),1&t&&G!==(G=e[2].pagePath+"")&&D(A,G),1&t&&J!==(J=e[2].device+"")&&D(P,J),1&t&&Y!==(Y=e[2].pageReferrer+"")&&D(V,Y),1&t&&q!==(q=e[2].sessions+"")&&D(B,q),1&t&&Z!==(Z=e[2].totalUsers+"")&&D(L,Z)},d(e){e&&c(t)}}}function oe(e){let t,s=e[0]&&ce(e);return{c(){s&&s.c(),t=C()},l(e){s&&s.l(e),t=C()},m(e,a){s&&s.m(e,a),o(e,t,a)},p(e,[a]){e[0]?s?s.p(e,a):(s=ce(e),s.c(),s.m(t.parentNode,t)):s&&(s.d(1),s=null)},i:d,o:d,d(e){s&&s.d(e),e&&c(t)}}}function le(e,t,s){let a;return p.subscribe(e=>{e.length>0&&s(0,a=e.slice(0,20))}),[a]}class de extends e{constructor(e){super(),t(this,e,le,oe,s,{})}}function he(e){let t,s,l,d;return{c(){t=a("p"),s=v("+ "),l=v(e[5]),d=v(" %"),this.h()},l(a){t=r(a,"P",{class:!0});var i=n(t);s=$(i,"+ "),l=$(i,e[5]),d=$(i," %"),i.forEach(c),this.h()},h(){i(t,"class","title is-size-5 has-text-success")},m(e,a){o(e,t,a),x(t,s),x(t,l),x(t,d)},p(e,t){32&t&&D(l,e[5])},d(e){e&&c(t)}}}function ue(e){let t,s,l;return{c(){t=a("p"),s=v(e[5]),l=v(" %"),this.h()},l(a){t=r(a,"P",{class:!0});var i=n(t);s=$(i,e[5]),l=$(i," %"),i.forEach(c),this.h()},h(){i(t,"class","title is-size-5 has-text-danger")},m(e,a){o(e,t,a),x(t,s),x(t,l)},p(e,t){32&t&&D(s,e[5])},d(e){e&&c(t)}}}function fe(e){let t,s,l,d;return{c(){t=a("p"),s=v("+ "),l=v(e[4]),d=v(" %"),this.h()},l(a){t=r(a,"P",{class:!0});var i=n(t);s=$(i,"+ "),l=$(i,e[4]),d=$(i," %"),i.forEach(c),this.h()},h(){i(t,"class","title is-size-5 has-text-success")},m(e,a){o(e,t,a),x(t,s),x(t,l),x(t,d)},p(e,t){16&t&&D(l,e[4])},d(e){e&&c(t)}}}function ge(e){let t,s,l;return{c(){t=a("p"),s=v(e[4]),l=v(" %"),this.h()},l(a){t=r(a,"P",{class:!0});var i=n(t);s=$(i,e[4]),l=$(i," %"),i.forEach(c),this.h()},h(){i(t,"class","title is-size-5 has-text-danger")},m(e,a){o(e,t,a),x(t,s),x(t,l)},p(e,t){16&t&&D(s,e[4])},d(e){e&&c(t)}}}function pe(e){let t,s,l,h,u,f,g,p,b,m,k,O,C,A,j,w,P,I,T,V,S,R,B,N,_,L,z,H,M,F,U,W,G,J;function Y(e,t){return e[5]<0?ue:he}let q=Y(e),Z=q(e);function K(e,t){return e[4]<0?ge:fe}let Q=K(e),X=Q(e);return{c(){t=a("nav"),s=a("div"),l=a("div"),h=a("div"),u=a("div"),f=a("p"),g=v(e[2]),p=y(),b=a("p"),m=v("sessions"),k=y(),Z.c(),O=y(),C=a("br"),A=y(),j=a("p"),w=v(e[3]),P=v(" last week"),I=y(),T=a("div"),V=a("div"),S=a("div"),R=a("div"),B=a("p"),N=v(e[0]),_=y(),L=a("p"),z=v("users"),H=y(),X.c(),M=y(),F=a("br"),U=y(),W=a("p"),G=v(e[1]),J=v(" last week"),this.h()},l(a){t=r(a,"NAV",{class:!0});var i=n(t);s=r(i,"DIV",{class:!0});var o=n(s);l=r(o,"DIV",{class:!0});var d=n(l);h=r(d,"DIV",{class:!0});var v=n(h);u=r(v,"DIV",{class:!0});var y=n(u);f=r(y,"P",{class:!0});var x=n(f);g=$(x,e[2]),x.forEach(c),p=E(y),b=r(y,"P",{class:!0});var D=n(b);m=$(D,"sessions"),D.forEach(c),k=E(y),Z.l(y),O=E(y),C=r(y,"BR",{}),A=E(y),j=r(y,"P",{});var Y=n(j);w=$(Y,e[3]),P=$(Y," last week"),Y.forEach(c),y.forEach(c),v.forEach(c),d.forEach(c),o.forEach(c),I=E(i),T=r(i,"DIV",{class:!0});var q=n(T);V=r(q,"DIV",{class:!0});var K=n(V);S=r(K,"DIV",{class:!0});var Q=n(S);R=r(Q,"DIV",{class:!0});var ee=n(R);B=r(ee,"P",{class:!0});var te=n(B);N=$(te,e[0]),te.forEach(c),_=E(ee),L=r(ee,"P",{class:!0});var se=n(L);z=$(se,"users"),se.forEach(c),H=E(ee),X.l(ee),M=E(ee),F=r(ee,"BR",{}),U=E(ee),W=r(ee,"P",{});var ae=n(W);G=$(ae,e[1]),J=$(ae," last week"),ae.forEach(c),ee.forEach(c),Q.forEach(c),K.forEach(c),q.forEach(c),i.forEach(c),this.h()},h(){i(f,"class","title"),i(b,"class","heading"),i(u,"class","content"),i(h,"class","card-content"),i(l,"class","card"),i(s,"class","level-item has-text-centered"),i(B,"class","title"),i(L,"class","heading"),i(R,"class","content"),i(S,"class","card-content"),i(V,"class","card"),i(T,"class","level-item has-text-centered"),i(t,"class","level is-mobile")},m(e,a){o(e,t,a),x(t,s),x(s,l),x(l,h),x(h,u),x(u,f),x(f,g),x(u,p),x(u,b),x(b,m),x(u,k),Z.m(u,null),x(u,O),x(u,C),x(u,A),x(u,j),x(j,w),x(j,P),x(t,I),x(t,T),x(T,V),x(V,S),x(S,R),x(R,B),x(B,N),x(R,_),x(R,L),x(L,z),x(R,H),X.m(R,null),x(R,M),x(R,F),x(R,U),x(R,W),x(W,G),x(W,J)},p(e,[t]){4&t&&D(g,e[2]),q===(q=Y(e))&&Z?Z.p(e,t):(Z.d(1),Z=q(e),Z&&(Z.c(),Z.m(u,O))),8&t&&D(w,e[3]),1&t&&D(N,e[0]),Q===(Q=K(e))&&X?X.p(e,t):(X.d(1),X=Q(e),X&&(X.c(),X.m(R,M))),2&t&&D(G,e[1])},i:d,o:d,d(e){e&&c(t),Z.d(),X.d()}}}function be(e,t,s){let a,r,n,c,i,o,l,d;return h(e,f,e=>s(6,l=e)),h(e,p,e=>s(7,d=e)),e.$$.update=()=>{128&e.$$.dirty&&s(2,a=d.reduce((e,t)=>e+t.sessions,0)),128&e.$$.dirty&&s(0,r=d.reduce((e,t)=>e+t.totalUsers,0)),64&e.$$.dirty&&s(3,n=l.reduce((e,t)=>e+t.sessions,0)),64&e.$$.dirty&&s(1,c=l.reduce((e,t)=>e+t.totalUsers,0)),12&e.$$.dirty&&s(5,i=Math.round(100*((a-n)/a+Number.EPSILON))),3&e.$$.dirty&&s(4,o=Math.round(100*((r-c)/r+Number.EPSILON)))},[r,c,a,n,o,i,l,d]}class me extends e{constructor(e){super(),t(this,e,be,pe,s,{})}}function ve(e){let t,s,l,h;return{c(){t=a("p"),s=v("Popular content:"),l=y(),h=a("canvas"),this.h()},l(e){t=r(e,"P",{});var a=n(t);s=$(a,"Popular content:"),a.forEach(c),l=E(e),h=r(e,"CANVAS",{id:!0}),n(h).forEach(c),this.h()},h(){i(h,"id","tags-chart")},m(e,a){o(e,t,a),x(t,s),o(e,l,a),o(e,h,a)},p:d,i:d,o:d,d(e){e&&c(t),e&&c(l),e&&c(h)}}}function ye(e){let t,s;return b(async()=>{t=await B();const e=document.getElementById("tags-chart").getContext("2d");s=new R(e,{type:"bubble",data:{datasets:[{label:"",backgroundColor:"rgb(255, 99, 132)",borderColor:"rgb(255, 99, 132)",data:[]}]},options:{legend:{display:!1},tooltips:{mode:"nearest",intersect:!1,callbacks:{title(e,t){let{index:s}=e[0],{datasetIndex:a}=e[0],r=t.datasets[a].data[s].x,n=t.datasets[a].data[s].y;return t.datasets[a].data[s].tag,`Visits: ${n}, Posts: ${r}`},label(e,t){let{index:s}=e,{datasetIndex:a}=e;return""+t.datasets[a].data[s].tag}}},scales:{xAxes:[{id:"posts-x-axis",type:"linear",scaleLabel:{display:!0,labelString:"Number of posts"}}],yAxes:[{id:"visits-y-axis",type:"logarithmic",ticks:{userCallback(e){var t=e/Math.pow(10,Math.floor(R.helpers.log10(e)));return 1===t||2===t||5===t?e.toString():""}},position:"left",scaleLabel:{display:!0,labelString:"Number of visits"}}]}}})}),p.subscribe(e=>{if(e.length>0&&t){let a=e.reduce((e,t)=>(t.pagePath in e?e[t.pagePath]+=t.sessions:e[t.pagePath]=t.sessions,e),{}),r=t.reduce((e,t)=>(t.link||t.tags.forEach(s=>{s in e?(e[s].count+=1,e[s].visits+=a[t.url]?a[t.url]:0):e[s]={tag:s,count:1,visits:a[t.url]?a[t.url]:0}}),e),{});!function(e){s.data.datasets[0].data=e.map(e=>({x:e.count,y:e.visits,tag:e.tag,r:Math.log(e.visits/e.count*10+1)})),s.update()}(Object.values(r))}}),[]}class $e extends e{constructor(e){super(),t(this,e,ye,ve,s,{})}}function Ee(e){let t,s;return{c(){t=a("progress"),s=v("15%"),this.h()},l(e){t=r(e,"PROGRESS",{class:!0,max:!0});var a=n(t);s=$(a,"15%"),a.forEach(c),this.h()},h(){i(t,"class","progress is-small is-primary"),i(t,"max","100")},m(e,a){o(e,t,a),x(t,s)},d(e){e&&c(t)}}}function xe(e){let t,s,l,d,h,u,f,g,p,b,m,v,$,k,O,C,A,D,S,R,B,N,_,L,z,H,F,U,G,J,q=0===e[0].length&&Ee();return d=new me({}),g=new M({}),m=new W({}),k=new Q({}),A=new Y({}),R=new te({}),_=new re({}),H=new $e({}),G=new de({}),{c(){t=a("section"),s=a("div"),q&&q.c(),l=y(),j(d.$$.fragment),h=y(),u=a("div"),f=a("div"),j(g.$$.fragment),p=y(),b=a("div"),j(m.$$.fragment),v=y(),$=a("div"),j(k.$$.fragment),O=y(),C=a("div"),j(A.$$.fragment),D=y(),S=a("div"),j(R.$$.fragment),B=y(),N=a("div"),j(_.$$.fragment),L=y(),z=a("div"),j(H.$$.fragment),F=y(),U=a("div"),j(G.$$.fragment),this.h()},l(e){t=r(e,"SECTION",{class:!0});var a=n(t);s=r(a,"DIV",{class:!0});var i=n(s);q&&q.l(i),l=E(i),w(d.$$.fragment,i),h=E(i),u=r(i,"DIV",{class:!0});var o=n(u);f=r(o,"DIV",{class:!0});var y=n(f);w(g.$$.fragment,y),y.forEach(c),p=E(o),b=r(o,"DIV",{class:!0});var x=n(b);w(m.$$.fragment,x),x.forEach(c),v=E(o),$=r(o,"DIV",{class:!0});var j=n($);w(k.$$.fragment,j),j.forEach(c),O=E(o),C=r(o,"DIV",{class:!0});var P=n(C);w(A.$$.fragment,P),P.forEach(c),D=E(o),S=r(o,"DIV",{class:!0});var I=n(S);w(R.$$.fragment,I),I.forEach(c),B=E(o),N=r(o,"DIV",{class:!0});var T=n(N);w(_.$$.fragment,T),T.forEach(c),L=E(o),z=r(o,"DIV",{class:!0});var V=n(z);w(H.$$.fragment,V),V.forEach(c),F=E(o),U=r(o,"DIV",{class:!0});var M=n(U);w(G.$$.fragment,M),M.forEach(c),o.forEach(c),i.forEach(c),a.forEach(c),this.h()},h(){i(f,"class","column is-4"),i(b,"class","column is-4"),i($,"class","column is-4"),i(C,"class","column is-4"),i(S,"class","column is-4-desktop is-6-mobile"),i(N,"class","column is-4"),i(z,"class","column is-4"),i(U,"class","column is-12"),i(u,"class","columns is-multiline"),i(s,"class","container is-fullhd"),i(t,"class","section")},m(e,a){o(e,t,a),x(t,s),q&&q.m(s,null),x(s,l),P(d,s,null),x(s,h),x(s,u),x(u,f),P(g,f,null),x(u,p),x(u,b),P(m,b,null),x(u,v),x(u,$),P(k,$,null),x(u,O),x(u,C),P(A,C,null),x(u,D),x(u,S),P(R,S,null),x(u,B),x(u,N),P(_,N,null),x(u,L),x(u,z),P(H,z,null),x(u,F),x(u,U),P(G,U,null),J=!0},p(e,[t]){0===e[0].length?q||(q=Ee(),q.c(),q.m(s,l)):q&&(q.d(1),q=null)},i(e){J||(I(d.$$.fragment,e),I(g.$$.fragment,e),I(m.$$.fragment,e),I(k.$$.fragment,e),I(A.$$.fragment,e),I(R.$$.fragment,e),I(_.$$.fragment,e),I(H.$$.fragment,e),I(G.$$.fragment,e),J=!0)},o(e){T(d.$$.fragment,e),T(g.$$.fragment,e),T(m.$$.fragment,e),T(k.$$.fragment,e),T(A.$$.fragment,e),T(R.$$.fragment,e),T(_.$$.fragment,e),T(H.$$.fragment,e),T(G.$$.fragment,e),J=!1},d(e){e&&c(t),q&&q.d(),V(d),V(g),V(m),V(k),V(A),V(R),V(_),V(H),V(G)}}}function ke(e,t,s){let a;return h(e,g,e=>s(0,a=e)),[a]}class Oe extends e{constructor(e){super(),t(this,e,ke,xe,s,{})}}function Ce(e){let t,s,l,h,u,f,g,p,b;return{c(){t=a("footer"),s=a("div"),l=a("p"),h=v("This dashboard shows the traffic data from "),u=a("a"),f=v("cristianpb.github.io"),g=v(". The code source of this dashboard is published in\n      "),p=a("a"),b=v("this github repository"),this.h()},l(e){t=r(e,"FOOTER",{class:!0});var a=n(t);s=r(a,"DIV",{class:!0});var i=n(s);l=r(i,"P",{});var o=n(l);h=$(o,"This dashboard shows the traffic data from "),u=r(o,"A",{href:!0});var d=n(u);f=$(d,"cristianpb.github.io"),d.forEach(c),g=$(o,". The code source of this dashboard is published in\n      "),p=r(o,"A",{class:!0,href:!0});var m=n(p);b=$(m,"this github repository"),m.forEach(c),o.forEach(c),i.forEach(c),a.forEach(c),this.h()},h(){i(u,"href","https://cristianpb.github.io"),i(p,"class","is-danger"),i(p,"href","https://github.com/cristianpb/analytics-google"),i(s,"class","content has-text-centered"),i(t,"class","footer")},m(e,a){o(e,t,a),x(t,s),x(s,l),x(l,h),x(l,u),x(u,f),x(l,g),x(l,p),x(p,b)},p:d,i:d,o:d,d(e){e&&c(t)}}}class Ae extends e{constructor(e){super(),t(this,e,null,Ce,s,{})}}function De(e){let t,s,l,h,u,f;return l=new Oe({}),u=new Ae({}),{c(){t=y(),s=a("div"),j(l.$$.fragment),h=y(),j(u.$$.fragment),this.h()},l(e){S("svelte-35vdxi",document.head).forEach(c),t=E(e),s=r(e,"DIV",{class:!0});var a=n(s);w(l.$$.fragment,a),h=E(a),w(u.$$.fragment,a),a.forEach(c),this.h()},h(){document.title="Analytics - Cristian Perez Brokate",i(s,"class","app")},m(e,a){o(e,t,a),o(e,s,a),P(l,s,null),x(s,h),P(u,s,null),f=!0},p:d,i(e){f||(I(l.$$.fragment,e),I(u.$$.fragment,e),f=!0)},o(e){T(l.$$.fragment,e),T(u.$$.fragment,e),f=!1},d(e){e&&c(t),e&&c(s),V(l),V(u)}}}function je(e,t,s){let a,r,n,c;return h(e,f,e=>s(0,a=e)),h(e,u,e=>s(1,r=e)),h(e,p,e=>s(2,n=e)),h(e,g,e=>s(3,c=e)),b(async()=>{const e=await N(),t=await _();m(g,c=e,c),m(p,n=e,n),m(u,r=t,r),m(f,a=t,a)}),[]}class we extends e{constructor(e){super(),t(this,e,je,De,s,{})}}export{we as default};
