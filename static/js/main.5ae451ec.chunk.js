(this.webpackJsonpautowash=this.webpackJsonpautowash||[]).push([[0],{14:function(e){e.exports=JSON.parse('[{"Fnavdata":[{"id":0,"mainclassname":"ele2","imagesrc":"./images/clock.png","headercontent":"Opening Hours","spancontent":"Mon - Fri, 8:00 - 9:00","altimage":"clockimage"},{"id":1,"mainclassname":"ele3","imagesrc":"./images/phone.png","headercontent":"Call Us ","spancontent":" +966-50-6293772 ","altimage":"callimage"},{"id":2,"mainclassname":"ele4","imagesrc":"./images/mail.png","headercontent":"Email Us","spancontent":" info@autowash.com ","altimage":"emailimage"}]}]')},19:function(e,n,t){},20:function(e,n,t){},21:function(e,n,t){},27:function(e,n,t){},28:function(e,n,t){},30:function(e,n,t){},32:function(e,n,t){"use strict";t.r(n);var c=t(1),i=t.n(c),a=t(13),s=t.n(a),j=(t(19),t(20),t(5)),r=(t(21),t(8)),l=t(9),o=t(4),d=(t(27),t(28),t(0));function b(e){return console.log(e.view),Object(d.jsxs)("div",{className:"dropdowncomponentcontainer",style:{display:e.view?"block":"none"},children:[Object(d.jsx)(o.b,{to:"/BlogGrid",className:"DropDownlink",children:" Blog Grid  "}),Object(d.jsx)(o.b,{to:"/DetailPage",className:"DropDownlink",children:" Detail Page  "}),Object(d.jsx)(o.b,{to:"/TeamMember",className:"DropDownlink",children:" Team Member  "}),Object(d.jsx)(o.b,{to:"/SchduleBooking",className:"DropDownlink",children:" Schdule Booking "})]})}function h(){var e=Object(c.useState)(window.innerWidth),n=Object(j.a)(e,2),t=n[0],i=n[1],a=Object(c.useState)(window.innerHeight),s=Object(j.a)(a,2),r=s[0],l=s[1];return Object(c.useLayoutEffect)((function(){function e(){i(window.innerWidth),l(window.innerHeight)}e(),window.addEventListener("resize",e)}),[]),{Width:t,AvailHeight:r}}function O(e){var n=Object(c.useState)(!1),t=Object(j.a)(n,2),i=t[0],a=t[1],s=h(),O=s.Width,u=s.AvailHeight;function x(){a(!i)}return console.log(O,u),Object(d.jsxs)("div",{className:"MainNavcomponent",style:{height:O>820?"80px":u+"px",display:e.viewMenu||O>820?"grid":"none"},children:[Object(d.jsxs)("nav",{className:"menunavbar ",children:[Object(d.jsx)("div",{children:Object(d.jsx)(o.c,{to:"/AutoWash",className:"menunavbarlink activelink",children:" Home  "})}),Object(d.jsxs)("div",{children:[" ",Object(d.jsx)(o.b,{to:"/About",className:"menunavbarlink",children:" About "})," "]}),Object(d.jsxs)("div",{children:[" ",Object(d.jsx)(o.b,{to:"/Service",className:"menunavbarlink",children:" Service  "})," "]}),Object(d.jsxs)("div",{children:[" ",Object(d.jsx)(o.b,{to:"/Price",className:"menunavbarlink",children:" Price  "})," "]}),Object(d.jsxs)("div",{children:[" ",Object(d.jsx)(o.b,{to:"/WashingPoints",className:"menunavbarlink",children:" Washing Point  "})]}),Object(d.jsxs)("div",{children:[Object(d.jsxs)(o.b,{to:"/Pages",className:"menunavbarlink ",onMouseOver:x,onMouseOut:x,children:[" Pages ",Object(d.jsx)(r.a,{icon:l.b,className:"icon"})," "]}),Object(d.jsx)("div",{onMouseOver:x,onMouseOut:x,children:Object(d.jsx)(b,{view:i})})]}),Object(d.jsxs)("div",{children:[" ",Object(d.jsx)(o.b,{to:"/Contact",className:"menunavbarlink",children:" Contact  "})," "]})]}),Object(d.jsx)("div",{className:"takeappointment",children:Object(d.jsx)("p",{children:" left bar   "})})]})}function u(e){var n=Object(c.useState)(!1),t=Object(j.a)(n,2),a=t[0],s=t[1];return console.log(" ele "+a),Object(d.jsxs)(i.a.Fragment,{children:[Object(d.jsxs)("div",{className:"BarComponent",children:[Object(d.jsx)("div",{className:"MenuSide",children:Object(d.jsx)("p",{children:" Menu "})}),Object(d.jsx)("div",{className:"BarSide",onClick:function(){s(!a)},children:Object(d.jsx)(r.a,{icon:l.a,className:"icon"})})]}),Object(d.jsx)(O,{viewMenu:a})]})}t(30);var x=t(14);var m=function(e){return{fnavdata:e.map((function(e){return e}))}};function v(){var e=x[0].Fnavdata,n=m(e).fnavdata.map((function(e){return Object(d.jsxs)("div",{className:e.mainclassname,children:[Object(d.jsx)("div",{className:"imagepart",children:Object(d.jsx)("img",{src:e.imagesrc,alt:e.altimage})}),Object(d.jsxs)("div",{className:"textpart",children:[Object(d.jsxs)("p",{children:["   ",e.headercontent,"  "]}),Object(d.jsxs)("span",{children:[e.spancontent," "]})]})]},e.id)}));return Object(d.jsx)("div",{className:"FNavcomponent ",children:Object(d.jsxs)("nav",{className:"firstnavcontainer",children:[Object(d.jsxs)("div",{className:"ele1",children:[" ",Object(d.jsxs)("a",{href:"/",children:[" ",Object(d.jsx)("span",{children:" Auto "})," Wash "]})]}),n]})})}function p(){return Object(d.jsxs)(i.a.Fragment,{children:[Object(d.jsx)(v,{}),Object(d.jsx)(u,{})]})}function g(){return Object(d.jsx)("div",{children:Object(d.jsx)("div",{children:"About  page"})})}function f(){return Object(d.jsx)("div",{children:Object(d.jsx)("div",{children:"contact  page"})})}function N(){var e=h().Width;return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{children:[" home page  ",e," "]})})}function w(){return Object(d.jsx)("div",{children:Object(d.jsx)("div",{children:"pages page"})})}function k(){return Object(d.jsx)("div",{children:Object(d.jsx)("div",{children:"price page"})})}function P(){return Object(d.jsx)("div",{children:Object(d.jsx)("div",{children:"service  page"})})}function S(){return Object(d.jsx)("div",{children:Object(d.jsx)("div",{children:"Washing Point   page"})})}var M=t(2);function D(){return Object(d.jsx)("div",{children:Object(d.jsx)("div",{children:"404 Compone t"})})}function W(){return Object(d.jsx)("div",{children:"Detail PAge component"})}function B(){return Object(d.jsx)("div",{children:"BlogGrid component"})}function A(){return Object(d.jsx)("div",{children:"team member component"})}function C(){return Object(d.jsx)("div",{children:"Schdule booking  component"})}var F=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(o.a,{children:[Object(d.jsx)(p,{}),Object(d.jsxs)(M.c,{children:[Object(d.jsx)(M.a,{exact:!0,path:"/AutoWash",element:Object(d.jsx)(N,{})}),Object(d.jsx)(M.a,{path:"/Contact",element:Object(d.jsx)(f,{})}),Object(d.jsx)(M.a,{path:"/About",element:Object(d.jsx)(g,{})}),Object(d.jsx)(M.a,{path:"/Price",element:Object(d.jsx)(k,{})}),Object(d.jsx)(M.a,{path:"/Pages",element:Object(d.jsx)(w,{})}),Object(d.jsx)(M.a,{path:"/Service",element:Object(d.jsx)(P,{})}),Object(d.jsx)(M.a,{path:"/WashingPoints",element:Object(d.jsx)(S,{})}),Object(d.jsx)(M.a,{path:"/DetailPage",element:Object(d.jsx)(W,{})}),Object(d.jsx)(M.a,{path:"/BlogGrid",element:Object(d.jsx)(B,{})}),Object(d.jsx)(M.a,{path:"/TeamMember",element:Object(d.jsx)(A,{})}),Object(d.jsx)(M.a,{path:"/SchduleBooking",element:Object(d.jsx)(C,{})}),Object(d.jsx)(M.a,{path:"*",element:Object(d.jsx)(D,{})})]})]})})},y=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,33)).then((function(n){var t=n.getCLS,c=n.getFID,i=n.getFCP,a=n.getLCP,s=n.getTTFB;t(e),c(e),i(e),a(e),s(e)}))};t(31);s.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(F,{})}),document.getElementById("root")),y()}},[[32,1,2]]]);
//# sourceMappingURL=main.5ae451ec.chunk.js.map