(this.webpackJsonpautowash=this.webpackJsonpautowash||[]).push([[3],{56:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},86:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return k}));var s=c(0),i=c.n(s),a=c(4),n=c(72),r=c(87),l=(c(55),c(56),c(57),c(58),c(85)),j=c(68),d=c(69),o=c(70),h=c(71),b=c(17),u=c(1);function m(e){var t=e.carouseldata,c=Object(s.useState)(null),i=Object(a.a)(c,2),l=i[0],j=i[1];return Object(s.useEffect)((function(){j(t.map((function(e){return Object(u.jsxs)(n.a,{className:".swiper-slide",children:[Object(u.jsx)("img",{src:e.imgsrc,alt:"img"}),Object(u.jsxs)("div",{className:"carousel-div",children:[Object(u.jsxs)("p",{className:"header",children:["  ",e.header,"  "]}),Object(u.jsxs)("p",{className:"main-header",children:[" ",e.mainheader," "]}),Object(u.jsxs)("div",{className:"Some-details",children:[" ",Object(u.jsx)("p",{children:e.firstdetails})," ",Object(u.jsx)("p",{children:e.seconddtails})]}),Object(u.jsx)(b.a,{child:"Explore More",font:"#202C45",back:"#E81C2E",hoverback:"#202C45",hoverfont:"white"})]})]},e.id)})))}),[t]),Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(r.a,{className:"swiper",slidesPerView:e.carouselview,autoplay:{delay:3e3},navigation:!0,pagination:!0,children:l})})}l.a.use([j.a,d.a,o.a,h.a]);var O=c(19),x=c(10),v=(c(59),c(8));function f(){var e=Object(s.useState)(null),t=Object(a.a)(e,2),c=t[0],i=t[1];Object(s.useLayoutEffect)((function(){var e=function(e,t){var c=e,s=t;var a=setInterval((function(){c=function(e,t){return Math.floor(Math.random()*(t-e+1))+e}(c+1,s),i(c),c===s&&(clearInterval(a),i(null))}),100)};new IntersectionObserver((function(t){!0===t[0].isIntersecting&&e(5,5e3)}),{threshold:[0]}).observe(document.querySelector(".NumberContainer"))}),[]);var n=x[0].CustomerNumbers.map((function(e){return Object(u.jsxs)("div",{className:"numberdiv",children:[Object(u.jsxs)("div",{className:"icondiv",children:[" ",Object(u.jsx)(v.a,{className:"icon",icon:e.icon}),"  "]}),Object(u.jsxs)("div",{className:"details",children:[Object(u.jsxs)("p",{children:[" ",c||e.number,"  +  "]}),Object(u.jsxs)("p",{children:[" ",e.details,"  "]})]})]},e.id)}));return Object(u.jsx)("div",{className:"NumberContainer",children:n})}c(60),c(61);function p(e){return Object(u.jsxs)("div",{className:"componenttitle",style:{textAlign:e.dirction},children:[Object(u.jsx)("div",{className:"title",children:e.title}),Object(u.jsx)("div",{className:"titleHeader",children:e.header})]})}function N(e){var t=Object(s.useState)(),c=Object(a.a)(t,2),i=c[0],n=c[1],r=x[0].AboutBreifComponent;return Object(s.useLayoutEffect)((function(){var e=r.map((function(e){return Object(u.jsxs)("div",{className:"BreifComponent",children:[Object(u.jsx)("div",{className:"Beifimage",children:Object(u.jsx)("img",{src:e.imageSrc,alt:"beifimage"})}),Object(u.jsxs)("div",{className:"breiftext",children:[Object(u.jsx)(p,{title:e.title,header:e.header,dirction:"left"}),Object(u.jsxs)("div",{className:"Details",children:[" ",Object(u.jsx)("p",{children:e.details})," "]}),Object(u.jsx)("div",{className:"AboutService",children:e.Aboutservice.map((function(e){return Object(u.jsxs)("div",{className:"Aboutserviceelement",children:[" ",Object(u.jsx)(v.a,{icon:"check-circle",className:"icon"})," ",Object(u.jsxs)("p",{children:[" ",e.servicename," "]})]},e.id)}))}),Object(u.jsx)("div",{children:Object(u.jsx)(b.a,{child:e.buttonchild,font:"#202C45",back:"#E81C2E",hoverback:"#202C45",hoverfont:"white"})})]})]},e.id)}));n(e)}),[r]),Object(u.jsx)(u.Fragment,{children:i})}c(62),c(63);var g=function(e){return Object(u.jsxs)("div",{className:"whatwedoelement",children:[Object(u.jsxs)("div",{className:"Whatwedoeledivimg",children:["  ",Object(u.jsx)("img",{src:e.imgsrc,alt:"carwash"})," "]}),Object(u.jsxs)("div",{className:"whatwedoelementtext",children:[Object(u.jsxs)("p",{children:[" ",e.header," "]}),Object(u.jsxs)("p",{children:[" ",e.somedetail," "]})]})]},e.id)};function w(){var e=Object(s.useState)(null),t=Object(a.a)(e,2),c=t[0],n=t[1],r=x[0].WhatwedoComponent;return Object(s.useLayoutEffect)((function(){var e=r.map((function(e){return Object(u.jsx)(i.a.Fragment,{children:Object(u.jsx)(g,{id:e.id,imgsrc:e.imgsrc,header:e.header,somedetail:e.somedetail})},e.id)}));n(e)}),[r]),Object(u.jsxs)("div",{className:"Whatwedo",children:[Object(u.jsx)(p,{title:"What We Do ? ",header:"Premium Washing Services",dirction:"center"}),Object(u.jsx)("div",{className:"whatwedoContainer",children:c})]})}c(64);function C(){var e=x[0].PlansData.map((function(e){return Object(u.jsxs)("div",{className:"plansdiv",children:[Object(u.jsxs)("div",{className:"titlePrice",children:[Object(u.jsxs)("p",{className:"title",children:[" ",e.title,"  "]}),Object(u.jsxs)("p",{className:"price",children:[" ",e.price," $  "]})]}),Object(u.jsx)("div",{className:"planservice",children:e.service.map((function(e){return Object(u.jsxs)("p",{children:[Object(u.jsx)(v.a,{className:"icon",icon:e.availability?"check-circle":"times-circle",style:{color:e.availability?"#E81C2E":"gray"}}),Object(u.jsxs)("span",{children:[" ",e.servicename," "]})]},e.id)}))}),Object(u.jsx)(b.a,{child:"Book Now",font:"#202C45",back:"#E81C2E",hoverback:"#202C45",hoverfont:"white"})]},e.id)}));return Object(u.jsxs)("div",{className:"PlanComponent",children:[Object(u.jsx)(p,{dirction:"center",title:"Washing Plans ?",header:"Choose your Plan"}),Object(u.jsx)("div",{className:"PlansContainer",children:e})]})}c(65),c(66);function y(){return Object(u.jsxs)("div",{className:"carWashRequest",children:[Object(u.jsx)("input",{type:"text",placeholder:"Enter your name",className:"inputfield"}),Object(u.jsx)("input",{type:"text",placeholder:"Enter your email",className:"inputfield"}),Object(u.jsx)("input",{type:"text",placeholder:"Description",className:"inputfield",style:{height:"150px"}}),Object(u.jsx)(b.a,{child:" Send Request ",font:"#E81C2E",back:"white",hoverfont:"white",hoverback:"#202C45"})]})}function E(){var e=x[0].WashingPointData.map((function(e){return Object(u.jsxs)("div",{className:"washingpoint ",children:[Object(u.jsx)("div",{className:"mapicon",children:Object(u.jsx)(v.a,{className:"icon",icon:"map-marker-alt"})}),Object(u.jsxs)("div",{className:"details",children:[Object(u.jsxs)("p",{children:[" ",e.title]}),Object(u.jsxs)("p",{children:[" ",e.address," "]}),Object(u.jsxs)("p",{children:[" Call: ",e.phonenumber,"  "]})]})]},e.id)}));return Object(u.jsxs)("div",{className:"WashingPointComponent",children:[Object(u.jsx)(p,{title:" Washing Points  ",header:"Car Washing & Car Points ",dirction:"center"}),Object(u.jsxs)("div",{className:"washingContainer",children:[Object(u.jsx)("div",{className:"washingleftelement",children:e}),Object(u.jsx)("div",{className:"washingrightelement",children:Object(u.jsx)(y,{})})]})]})}function k(){var e=x[0].CarouselData,t=Object(O.a)().Width;return Object(u.jsxs)("div",{className:"MainHomepage",children:[Object(u.jsx)(m,{carouselview:1,carouseldata:e}),Object(u.jsx)(N,{}),Object(u.jsx)(w,{}),Object(u.jsx)(f,{}),Object(u.jsx)(C,{}),Object(u.jsx)(E,{}),Object(u.jsxs)("div",{children:[" home page  ",t," "]})]})}}}]);
//# sourceMappingURL=3.eb2b88ad.chunk.js.map