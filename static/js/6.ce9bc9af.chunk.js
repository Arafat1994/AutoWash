(this.webpackJsonpautowash=this.webpackJsonpautowash||[]).push([[6],{100:function(e,t,c){},101:function(e,t,c){"use strict";c.d(t,"a",(function(){return l}));var n=c(4),i=c(0),s=(c(102),c(87)),r=c(9),a=c(14),j=c(16),o=c(1);function l(e){var t=Object(i.useState)(),c=Object(n.a)(t,2),l=c[0],d=c[1],u=a[0].AboutBreifComponent;return Object(i.useLayoutEffect)((function(){var e=u.map((function(e){var t=e.id,c=e.imageSrc,n=e.title,i=e.header,a=e.details;return Object(o.jsxs)("div",{className:"BreifComponent",children:[Object(o.jsx)("div",{className:"Beifimage",children:Object(o.jsx)("img",{src:c,alt:"beifimage"})}),Object(o.jsxs)("div",{className:"breiftext",children:[Object(o.jsx)(s.a,{title:n,header:i,dirction:"left"}),Object(o.jsxs)("div",{className:"Details",children:[" ",Object(o.jsx)("p",{children:a})," "]}),Object(o.jsx)("div",{className:"AboutService",children:e.Aboutservice.map((function(e){var t=e.id,c=e.servicename;return Object(o.jsxs)("div",{className:"Aboutserviceelement",children:[" ",Object(o.jsx)(r.a,{icon:"check-circle",className:"icon"})," ",Object(o.jsxs)("p",{children:[" ",c," "]})]},t)}))}),Object(o.jsx)("div",{children:Object(o.jsx)(j.a,{child:e.buttonchild,font:"#202C45",back:"#E81C2E",hoverback:"#202C45",hoverfont:"white"})})]})]},t)}));d(e)}),[u]),Object(o.jsx)(o.Fragment,{children:l})}},102:function(e,t,c){},109:function(e,t,c){"use strict";c.d(t,"a",(function(){return a}));c(110),c(0);var n=c(87),i=c(14),s=c(28),r=c(1);function a(e){var t=i[0].workersData.map((function(e){var t=e.id,c=e.srcimage,n=e.socialmedialinks,i=e.name,a=e.job;return Object(r.jsxs)("div",{className:"workerelement",children:[Object(r.jsx)("img",{src:c,alt:"workerimage"}),Object(r.jsx)(s.a,{socialmediaLinks:n,top:"-30px"}),Object(r.jsxs)("div",{className:"detailsdiv",children:[Object(r.jsxs)("p",{children:[" ",i,"  "]}),Object(r.jsxs)("p",{children:[" ",a,"  "]})]})]},t)}));return Object(r.jsxs)("div",{className:"workercontainer",children:[Object(r.jsx)(n.a,{title:"Meet Our Team",header:" Our Engineers And Workers ",dirction:"center"}),Object(r.jsx)("div",{className:"workersdiv",children:t})]})}},110:function(e,t,c){},128:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return j}));c(0);var n=c(101),i=c(99),s=c(109),r=c(88),a=c(1);function j(){return Object(a.jsxs)("div",{className:"MainAbout",children:[Object(a.jsx)(r.a,{}),Object(a.jsx)(n.a,{}),Object(a.jsx)(i.a,{}),Object(a.jsx)(s.a,{})]})}},87:function(e,t,c){"use strict";c.d(t,"a",(function(){return i}));c(0),c(92);var n=c(1);function i(e){var t=e.dirction,c=e.margintop,i=e.title,s=e.header;return Object(n.jsxs)("div",{className:"componenttitle",style:{textAlign:t,marginTop:c},children:[Object(n.jsx)("div",{className:"title",children:i}),Object(n.jsx)("div",{className:"titleHeader",children:s})]})}},88:function(e,t,c){"use strict";c.d(t,"a",(function(){return s}));c(0);var n=c(2),i=(c(89),c(1));function s(e){var t=Object(n.e)().pathname.slice(1);return Object(i.jsxs)("div",{className:"HeaderContainer",children:[Object(i.jsx)("p",{children:t}),Object(i.jsxs)("p",{children:["AutoWash / ",t]})]})}},89:function(e,t,c){},92:function(e,t,c){},99:function(e,t,c){"use strict";c.d(t,"a",(function(){return j}));var n=c(4),i=c(0),s=(c(100),c(14)),r=c(9),a=c(1);function j(){var e=Object(i.useState)(null),t=Object(n.a)(e,2),c=t[0],j=t[1];Object(i.useLayoutEffect)((function(){var e=function(e,t){var c=e,n=t;var i=setInterval((function(){c=function(e,t){return Math.floor(Math.random()*(t-e+1))+e}(c+1,n),j(c),c===n&&(clearInterval(i),j(null))}),100)};new IntersectionObserver((function(t){!0===t[0].isIntersecting&&e(5,5e3)}),{threshold:[0]}).observe(document.querySelector(".NumberContainer"))}),[]);var o=s[0].CustomerNumbers.map((function(e){var t=e.id,n=e.icon,i=e.number,s=e.details;return Object(a.jsxs)("div",{className:"numberdiv",children:[Object(a.jsxs)("div",{className:"icondiv",children:[" ",Object(a.jsx)(r.a,{className:"icon",icon:n}),"  "]}),Object(a.jsxs)("div",{className:"details",children:[Object(a.jsxs)("p",{children:[" ",c||i,"  +  "]}),Object(a.jsxs)("p",{children:[" ",s,"  "]})]})]},t)}));return Object(a.jsx)("div",{className:"NumberContainer",children:o})}}}]);
//# sourceMappingURL=6.ce9bc9af.chunk.js.map