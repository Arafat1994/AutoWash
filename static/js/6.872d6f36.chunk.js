(this.webpackJsonpautowash=this.webpackJsonpautowash||[]).push([[6],{100:function(e,t,c){"use strict";c.d(t,"a",(function(){return i}));c(0),c(105);var n=c(1);function i(e){var t=e.dirction,c=e.margintop,i=e.title,r=e.header;return Object(n.jsxs)("div",{className:"componenttitle",style:{textAlign:t,marginTop:c},children:[Object(n.jsx)("div",{className:"title",children:i}),Object(n.jsx)("div",{className:"titleHeader",children:r})]})}},101:function(e,t,c){"use strict";c.d(t,"a",(function(){return r}));c(0);var n=c(4),i=(c(102),c(1));function r(e){var t=Object(n.e)().pathname.slice(1);return Object(i.jsxs)("div",{className:"HeaderContainer",children:[Object(i.jsx)("p",{children:t}),Object(i.jsxs)("p",{children:["AutoWash / ",t]})]})}},102:function(e,t,c){},105:function(e,t,c){},112:function(e,t,c){"use strict";c.d(t,"a",(function(){return u}));var n=c(6),i=c(0),r=(c(113),c(14)),s=c(13),a=c(1);function u(){var e=Object(i.useState)(null),t=Object(n.a)(e,2),c=t[0],u=t[1],o=Object(i.useState)(null),d=Object(n.a)(o,2),j=d[0],l=d[1],b=Object(s.c)((function(e){return e.datareducer.data.CustomerNumbers}));return Object(i.useLayoutEffect)((function(){var e=function(e,t){var c=e,n=t;var i=setInterval((function(){c=function(e,t){return Math.floor(Math.random()*(t-e+1))+e}(c+1,n),u(c),c===n&&(clearInterval(i),u(null))}),100)};new IntersectionObserver((function(t){!0===t[0].isIntersecting&&e(5,5e3)}),{threshold:[0]}).observe(document.querySelector(".NumberContainer"))}),[]),Object(i.useLayoutEffect)((function(){l(null===b||void 0===b?void 0:b.map((function(e){var t=e.id,n=e.icon,i=e.number,s=e.details;return Object(a.jsxs)("div",{className:"numberdiv",children:[Object(a.jsxs)("div",{className:"icondiv",children:[" ",Object(a.jsx)(r.a,{className:"icon",icon:n}),"  "]}),Object(a.jsxs)("div",{className:"details",children:[Object(a.jsxs)("p",{children:[" ",c||i,"  +  "]}),Object(a.jsxs)("p",{children:[" ",s,"  "]})]})]},t)})))}),[b,c]),Object(a.jsx)("div",{className:"NumberContainer",children:j})}},113:function(e,t,c){},114:function(e,t,c){"use strict";c.d(t,"a",(function(){return d}));var n=c(6),i=c(0),r=(c(115),c(100)),s=c(14),a=c(26),u=c(13),o=c(1);function d(e){var t=Object(u.c)((function(e){return e.datareducer.data.AboutBreifComponent})),c=Object(i.useState)(),d=Object(n.a)(c,2),j=d[0],l=d[1];return Object(i.useLayoutEffect)((function(){l(null===t||void 0===t?void 0:t.map((function(e){var t=e.id,c=e.imageSrc,n=e.title,i=e.header,u=e.details;return Object(o.jsxs)("div",{className:"BreifComponent",children:[Object(o.jsx)("div",{className:"Beifimage",children:Object(o.jsx)("img",{src:c,alt:"beifimage"})}),Object(o.jsxs)("div",{className:"breiftext",children:[Object(o.jsx)(r.a,{title:n,header:i,dirction:"left"}),Object(o.jsxs)("div",{className:"Details",children:[" ",Object(o.jsx)("p",{children:u})," "]}),Object(o.jsx)("div",{className:"AboutService",children:e.Aboutservice.map((function(e){var t=e.id,c=e.servicename;return Object(o.jsxs)("div",{className:"Aboutserviceelement",children:[" ",Object(o.jsx)(s.a,{icon:"check-circle",className:"icon"})," ",Object(o.jsxs)("p",{children:[" ",c," "]})]},t)}))}),Object(o.jsxs)("div",{children:[Object(o.jsx)(a.a,{child:e.buttonchild,font:"#202C45",back:"#E81C2E",hoverback:"#202C45",hoverfont:"white"})," "]})]})]},t)})))}),[t]),Object(o.jsx)(o.Fragment,{children:j})}},115:function(e,t,c){},122:function(e,t,c){"use strict";c.d(t,"a",(function(){return o}));var n=c(6),i=(c(123),c(0)),r=c(100),s=c(41),a=c(13),u=c(1);function o(e){var t=Object(a.c)((function(e){return e.datareducer.data.workersData})),c=Object(i.useState)(null),o=Object(n.a)(c,2),d=o[0],j=o[1];return Object(i.useLayoutEffect)((function(){j(null===t||void 0===t?void 0:t.map((function(e){var t=e.id,c=e.srcimage,n=e.socialmedialinks,i=e.name,r=e.job;return Object(u.jsxs)("div",{className:"workerelement",children:[Object(u.jsx)("img",{src:c,alt:"workerimage"}),Object(u.jsx)(s.a,{socialmediaLinks:n,top:"-30px"}),Object(u.jsxs)("div",{className:"detailsdiv",children:[Object(u.jsxs)("p",{children:[" ",i,"  "]}),Object(u.jsxs)("p",{children:[" ",r,"  "]})]})]},t)})))}),[t]),Object(u.jsxs)("div",{className:"workercontainer",children:[Object(u.jsx)(r.a,{title:"Meet Our Team",header:" Our Engineers And Workers ",dirction:"center"}),Object(u.jsx)("div",{className:"workersdiv",children:d})]})}},123:function(e,t,c){},146:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return u}));c(0);var n=c(114),i=c(112),r=c(122),s=c(101),a=c(1);function u(){return Object(a.jsxs)("div",{className:"MainAbout",children:[Object(a.jsx)(s.a,{}),Object(a.jsx)(n.a,{}),Object(a.jsx)(i.a,{}),Object(a.jsx)(r.a,{})]})}}}]);
//# sourceMappingURL=6.872d6f36.chunk.js.map