(this.webpackJsonpautowash=this.webpackJsonpautowash||[]).push([[6],{100:function(e,t,c){"use strict";c.d(t,"a",(function(){return s}));c(0);var n=c(4),i=(c(101),c(1));function s(e){var t=Object(n.g)().pathname.slice(1);return Object(i.jsxs)("div",{className:"HeaderContainer",children:[Object(i.jsx)("p",{children:t}),Object(i.jsxs)("p",{children:["AutoWash / ",t]})]})}},101:function(e,t,c){},106:function(e,t,c){},114:function(e,t,c){"use strict";c.d(t,"a",(function(){return u}));var n,i=c(40),s=(c(115),c(0),c(16)),a=c(41),r=c(1),o=a.b.div(n||(n=Object(i.a)(["\n    top:","\n    \n    "])),(function(e){return e.top}));function u(e){var t=e.socialmediaLinks,c=null===t||void 0===t?void 0:t.map((function(e){var t=e.id,c=e.icon,n=e.link;return Object(r.jsx)("a",{href:n,className:"socialmedialink",children:Object(r.jsx)(s.a,{className:"icon icon2",icon:["fab",c]})},t)}));return Object(r.jsx)(o,{className:"socialmediadiv",top:e.top,children:c})}},115:function(e,t,c){},123:function(e,t,c){"use strict";c.d(t,"a",(function(){return u}));var n=c(10),i=c(0),s=(c(124),c(16)),a=c(17),r=c(38),o=c(1);function u(){var e=Object(i.useState)(null),t=Object(n.a)(e,2),c=t[0],u=t[1],l=Object(i.useState)(null),j=Object(n.a)(l,2),d=j[0],b=j[1],m=Object(a.c)(r.a).CustomerNumbers;return Object(i.useLayoutEffect)((function(){var e=function(e,t){var c=e,n=t;var i=setInterval((function(){c=function(e,t){return Math.floor(Math.random()*(t-e+1))+e}(c+1,n),u(c),c===n&&(clearInterval(i),u(null))}),100)};new IntersectionObserver((function(t){!0===t[0].isIntersecting&&e(5,5e3)}),{threshold:[0]}).observe(document.querySelector(".NumberContainer"))}),[]),Object(i.useLayoutEffect)((function(){b(null===m||void 0===m?void 0:m.map((function(e){var t=e.id,n=e.icon,i=e.number,a=e.details;return Object(o.jsxs)("div",{className:"numberdiv",children:[Object(o.jsxs)("div",{className:"icondiv",children:[" ",Object(o.jsx)(s.a,{className:"icon",icon:n}),"  "]}),Object(o.jsxs)("div",{className:"details",children:[Object(o.jsxs)("p",{children:[" ",c||i,"  +  "]}),Object(o.jsxs)("p",{children:[" ",a,"  "]})]})]},t)})))}),[m,c]),Object(o.jsx)("div",{className:"NumberContainer",children:d})}},124:function(e,t,c){},125:function(e,t,c){"use strict";c.d(t,"a",(function(){return j}));var n=c(10),i=c(0),s=(c(126),c(99)),a=c(16),r=c(39),o=c(17),u=c(38),l=c(1);function j(e){var t=Object(o.c)(u.a).AboutBreifComponent,j=Object(i.useState)(),d=Object(n.a)(j,2),b=d[0],m=d[1];return Object(i.useLayoutEffect)((function(){m(null===t||void 0===t?void 0:t.map((function(e){var t=e.id,n=e.imageSrc,i=e.title,o=e.header,u=e.details;return Object(l.jsxs)("div",{className:"BreifComponent",children:[Object(l.jsx)("div",{className:"Beifimage",children:Object(l.jsx)("img",{src:c(105)("./images"+n).default,alt:"beifimage"})}),Object(l.jsxs)("div",{className:"breiftext",children:[Object(l.jsx)(s.a,{title:i,header:o,dirction:"left",margintop:"0px"}),Object(l.jsxs)("div",{className:"Details",children:[" ",Object(l.jsx)("p",{children:u})," "]}),Object(l.jsx)("div",{className:"AboutService",children:e.Aboutservice.map((function(e){var t=e.id,c=e.servicename;return Object(l.jsxs)("div",{className:"Aboutserviceelement",children:[" ",Object(l.jsx)(a.a,{icon:"check-circle",className:"icon"})," ",Object(l.jsxs)("p",{children:[" ",c," "]})]},t)}))}),Object(l.jsx)(r.a,{child:e.buttonchild,font:"#202C45",back:"#E81C2E",hoverback:"#202C45",hoverfont:"white"})]})]},t)})))}),[t]),Object(l.jsx)(l.Fragment,{children:b})}},126:function(e,t,c){},133:function(e,t,c){"use strict";c.d(t,"a",(function(){return l}));var n=c(10),i=(c(134),c(0)),s=c(99),a=c(114),r=c(17),o=c(38),u=c(1);function l(e){var t=Object(r.c)(o.a).workersData,l=Object(i.useState)(null),j=Object(n.a)(l,2),d=j[0],b=j[1];return Object(i.useLayoutEffect)((function(){b(null===t||void 0===t?void 0:t.map((function(e){var t=e.id,n=e.srcimage,i=e.socialmedialinks,s=e.name,r=e.job;return Object(u.jsxs)("div",{className:"workerelement",children:[Object(u.jsx)("img",{src:c(105)("./images"+n).default,alt:"workerimage"}),Object(u.jsx)(a.a,{socialmediaLinks:i,top:"-30px"}),Object(u.jsxs)("div",{className:"detailsdiv",children:[Object(u.jsxs)("p",{children:[" ",s,"  "]}),Object(u.jsxs)("p",{children:[" ",r,"  "]})]})]},t)})))}),[t]),Object(u.jsxs)("div",{className:"workercontainer",children:[Object(u.jsx)(s.a,{title:"Meet Our Team",header:" Our Engineers And Workers ",dirction:"center"}),Object(u.jsx)("div",{className:"workersdiv",children:d})]})}},134:function(e,t,c){},202:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return o}));c(0);var n=c(125),i=c(123),s=c(133),a=c(100),r=c(1);function o(){return Object(r.jsxs)("div",{className:"MainAbout",children:[Object(r.jsx)(a.a,{}),Object(r.jsx)(n.a,{}),Object(r.jsx)(i.a,{}),Object(r.jsx)(s.a,{})]})}},99:function(e,t,c){"use strict";c.d(t,"a",(function(){return i}));c(0),c(106);var n=c(1);function i(e){var t=e.dirction,c=e.margintop,i=e.title,s=e.header;return Object(n.jsxs)("div",{className:"componenttitle",style:{textAlign:t,marginTop:c},children:[Object(n.jsx)("div",{className:"title",children:i}),Object(n.jsx)("div",{className:"titleHeader",children:s})]})}}}]);
//# sourceMappingURL=6.ac753871.chunk.js.map