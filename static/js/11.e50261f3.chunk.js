(this.webpackJsonpautowash=this.webpackJsonpautowash||[]).push([[11],{100:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));a(0);var n=a(4),s=(a(101),a(1));function i(e){var t=Object(n.g)().pathname.slice(1);return Object(s.jsxs)("div",{className:"HeaderContainer",children:[Object(s.jsx)("p",{children:t}),Object(s.jsxs)("p",{children:["AutoWash / ",t]})]})}},101:function(e,t,a){},105:function(e,t,a){},131:function(e,t,a){},132:function(e,t,a){},140:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(10),s=a(0),i=a.n(s),c=a(99),l=(a(131),a(16)),r=a(43),d=a(18),u=a(39),j=(a(132),a(24)),o=a.n(j),m=a(1);function h(){var e=i.a.useRef(),t=i.a.useRef(),a=i.a.useRef(),c={id:Math.floor(1e4*Math.random()),fullname:"",email:"",description:""},l=Object(s.useState)(c),j=Object(n.a)(l,2),h=j[0],b=j[1],f=Object(s.useState)({}),p=Object(n.a)(f,2),O=p[0],x=p[1],v=Object(s.useState)(!1),N=Object(n.a)(v,2),g=N[0],w=N[1],C=function(e){e.preventDefault();var t=e.target,a=t.name,n=t.value;b(Object(d.a)(Object(d.a)({},h),{},Object(r.a)({},a,n)))},q=function(e){e.preventDefault(),x(W(h))},W=function(e){var t={};return e.fullname||(t.fullname="fullname is required "),e.email?e.email&&!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e.email)&&(t.email=" enter valid email format "):t.email="email is requied ",e.description?e.description&&e.description.length<20&&(t.description=" you must enter more than 20 char "):t.description="description is required ",t};Object(s.useEffect)((function(){0===Object.keys(O).length&&h.fullname&&h.email&&h.description?(w(!0),console.log(h)):w(!1)}),[O,h]);return Object(m.jsxs)("div",{className:"carWashRequest",children:[Object(m.jsxs)("div",{className:"title",children:[Object(m.jsx)("p",{children:" Request  Car Wash  "})," "]}),Object(m.jsxs)("div",{className:"formele",children:[Object(m.jsx)("input",{type:"text",className:"inputfield",name:"fullname",value:h.fullname,ref:e,onChange:C,onBlur:q,required:!0}),Object(m.jsx)("span",{className:"label",children:" Full name "}),Object(m.jsxs)("p",{className:"validateText",children:[" ",O.fullname," "]})]}),Object(m.jsxs)("div",{className:"formele",children:[Object(m.jsx)("input",{type:"text",className:"inputfield",name:"email",value:h.email,ref:t,onChange:C,onBlur:q,required:!0}),Object(m.jsx)("span",{className:"label",children:" Email  "}),Object(m.jsxs)("p",{className:"validateText",children:[" ",O.email]})]}),Object(m.jsxs)("div",{className:"formele",children:[Object(m.jsx)("textarea",{className:"inputfield textarea",name:"description",value:h.description,ref:a,onChange:C,onBlur:q,required:!0}),Object(m.jsx)("span",{className:"label textarealabel",children:" Description "}),Object(m.jsxs)("p",{className:"validateText",children:["  ",O.description," "]})]}),Object(m.jsx)(u.a,{onclick:function(){o()({baseURL:"http://autowash-api.herokuapp.com/",url:"/carWashRequests",method:"post",data:h}).then((function(){w(!1),b(c)}))},disabled:!g,child:" Send Request ",font:"#E81C2E",back:"white",hoverfont:"white",hoverback:"#202C45",width:"100%"})]})}var b=a(17),f=a(38);function p(){var e=Object(b.c)(f.a).WashingPointData,t=Object(s.useState)(null),a=Object(n.a)(t,2),i=a[0],r=a[1];return Object(s.useLayoutEffect)((function(){r(null===e||void 0===e?void 0:e.map((function(e){var t=e.id,a=e.title,n=e.address,s=e.phonenumber;return Object(m.jsxs)("div",{className:"washingpoint ",children:[Object(m.jsx)("div",{className:"mapicon",children:Object(m.jsx)(l.a,{className:"icon",icon:"map-marker-alt"})}),Object(m.jsxs)("div",{className:"details",children:[Object(m.jsxs)("p",{children:[" ",a]}),Object(m.jsxs)("p",{children:[" ",n," "]}),Object(m.jsxs)("p",{children:[" Call: ",s,"  "]})]})]},t)})))}),[e]),Object(m.jsx)("div",{className:"WashingPointComponent",children:Object(m.jsxs)("div",{className:"washingContainer",children:[Object(m.jsxs)("div",{className:"washingleftelement",children:[Object(m.jsx)(c.a,{title:" Washing Points  ",header:"Car Washing & Car Points ",dirction:"left",margintop:"0px"}),Object(m.jsx)("div",{className:"washingpointelement",children:i})]}),Object(m.jsx)("div",{className:"washingrightelement",children:Object(m.jsx)(h,{})})]})})}},206:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return c}));a(0);var n=a(140),s=a(100),i=a(1);function c(){return Object(i.jsxs)("div",{className:"MainWashing",children:[Object(i.jsx)(s.a,{}),Object(i.jsx)(n.a,{})]})}},99:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));a(0),a(105);var n=a(1);function s(e){var t=e.dirction,a=e.margintop,s=e.title,i=e.header;return Object(n.jsxs)("div",{className:"componenttitle",style:{textAlign:t,marginTop:a},children:[Object(n.jsx)("div",{className:"title",children:s}),Object(n.jsx)("div",{className:"titleHeader",children:i})]})}}}]);
//# sourceMappingURL=11.e50261f3.chunk.js.map