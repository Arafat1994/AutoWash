(this.webpackJsonpautowash=this.webpackJsonpautowash||[]).push([[1],{26:function(e,t,n){"use strict";var a,c=n(17),r=n(0),i=n.n(r),s=(n(72),n(18)),o=n(1),l=s.b.button(a||(a=Object(c.a)(["\ncolor:","  ;\nwidth:","  ; \nbackground:linear-gradient(to right,  "," 50% , "," 50%);\n&:hover  {background-position:left bottom;  color:","  }\n"])),(function(e){return e.font}),(function(e){return e.width?e.width:"auto"}),(function(e){return e.hoverback}),(function(e){return e.back}),(function(e){return e.hoverfont}));function u(e){var t=e.onclick,n=e.disabled,a=e.font,c=e.back,r=e.hoverfont,i=e.hoverback,s=e.width,u=e.child;return Object(o.jsx)("div",{className:"MainButton",children:Object(o.jsx)(l,{className:"appoint",onClick:t,disabled:n,font:a,back:c,hoverfont:r,hoverback:i,width:s,children:u})})}t.a=i.a.memo(u)},31:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(6),c=n(0);function r(){var e=Object(c.useState)(window.innerWidth),t=Object(a.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(window.innerHeight),s=Object(a.a)(i,2),o=s[0],l=s[1];return Object(c.useLayoutEffect)((function(){function e(){r(window.innerWidth),l(window.innerHeight)}e(),window.addEventListener("resize",e)}),[]),{Width:n,AvailHeight:o}}},39:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a,c,r,i=n(10),s=n(6),o=n(55),l=n(17),u=(n(77),n(0)),d=n(18),j=n(1),b=["id","errormessage","inputtype","onChnage"],h=Object(d.a)(a||(a=Object(l.a)(["\n border : "," ;\n color : ","  ; \n ::placeholder  { color:"," ;  }\n"])),(function(e){return e.border?"1px solid ".concat(e.border):"1px solid white"}),(function(e){return e.border?"".concat(e.border):"white"}),(function(e){return e.border?"".concat(e.border):"white"})),m=d.b.input.attrs((function(e){return{"data-focused":e.focused}}))(c||(c=Object(l.a)(["\n    "," ;\n    height:40px;\n "])),h),O=d.b.textarea.attrs((function(e){return{"data-focused":e.focused}}))(r||(r=Object(l.a)(["\n   "," ;\n   height:150px ; \n "])),h);function f(e){e.id;var t=e.errormessage,n=e.inputtype,a=e.onChnage,c=Object(o.a)(e,b),r=Object(u.useState)(!1),l=Object(s.a)(r,2),d=l[0],h=l[1],f=function(e){h(!0)};return Object(j.jsxs)("div",{className:"Formdiv",children:["textbox"===n?Object(j.jsx)(m,Object(i.a)(Object(i.a)({className:"forminput",onChange:a,onFocus:f},c),{},{border:e.border,focused:d.toString()})):Object(j.jsx)(O,Object(i.a)(Object(i.a)({className:"forminput",onChange:a,onFocus:f},c),{},{border:e.border,focused:d.toString()})),Object(j.jsxs)("span",{className:"errormessage",children:[" ",t," "]})]})}},40:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(27),c=n(10),r=n(6),i=n(25),s=n.n(i),o=n(0);function l(e,t){var n=Object(o.useState)(e),i=Object(r.a)(n,2),l=i[0],u=i[1],d=Object(o.useState)({ContactErr:{},NewsErr:{},SigninErr:{},RegisterErr:{}}),j=Object(r.a)(d,2),b=j[0],h=j[1],m=Object(o.useState)(!1),O=Object(r.a)(m,2),f=O[0],x=O[1],g=Object(o.useState)(),p=Object(r.a)(g,2),v=p[0],E=p[1],w=function(e){var t={ContactErr:{},NewsErr:{},SigninErr:{},RegisterErr:{}},n=new RegExp("^[A-zA-Z0-9_ ]{3,16}$"),a=new RegExp("^[A-zA-Z0-9_ ]{10,40}$"),c=/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,r=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})");return e.Contactfullname?n.test(e.Contactfullname)||(t.ContactErr.Contactfullname="fullname must have at least 3 chars and max 16 chars  "):t.ContactErr.Contactfullname=" Fullname required ",e.ContactEmail?c.test(e.ContactEmail)||(t.ContactErr.ContactEmail="Please enter A valid email "):t.ContactErr.ContactEmail=" Email required ",e.ContactSubject?a.test(e.ContactSubject)||(t.ContactErr.ContactSubject=" subject must be at least 10 chars and maximum 40  chars "):t.ContactErr.ContactSubject=" Subject is required ",e.ContactMessage||(t.ContactErr.ContactMessage=" Message  is required "),e.NewsFullname?n.test(e.NewsFullname)||(t.NewsErr.NewsFullname="fullname must have at least 3 chars and max 16 chars  "):t.NewsErr.NewsFullname=" Fullname required ",e.NewsEmail?c.test(e.NewsEmail)||(t.NewsErr.NewsEmail=" please Enter A valid Email "):t.NewsErr.NewsEmail="Email Required ",e.LoginEmail?c.test(e.LoginEmail)||(t.SigninErr.LoginEmail="Please enter A valid email "):t.SigninErr.LoginEmail=" Email Required ",e.LoginPassword?r.test(e.LoginPassword)||(t.SigninErr.LoginPassword="Please Enter a valid Password  "):t.SigninErr.LoginPassword=" Password Required ",e.RegFName||(t.RegisterErr.RegFName=" Fullname required "),e.RegLName||(t.RegisterErr.RegLName=" Lastname required "),e.RegEmail?c.test(e.RegEmail)||(t.RegisterErr.RegEmail=" Enter a valid Email "):t.RegisterErr.RegEmail=" Email required ",e.RegPassword?r.test(e.RegPassword)?e.RegPassword!==e.RegConfirmPass&&(t.RegisterErr.RegConfirmPass="Passwords not matched "):t.RegisterErr.RegPassword=" Enter a valid password ":t.RegisterErr.RegPassword="Password required ",e.RegConfirmPass||(t.RegisterErr.RegConfirmPass=" Confirm Pass required "),e.RegPhoneNumber||(t.RegisterErr.RegPhoneNumber=" Phone Number required "),e.RegBirthday||(t.RegisterErr.RegBirthday=" Birthday required "),e.RegNationality||(t.RegisterErr.RegNationality=" Nationality required "),e.RegAdress||(t.RegisterErr.RegAdress=" Address  required "),e.RegCity||(t.RegisterErr.RegCity=" City required "),t};Object(o.useEffect)((function(){!function(e){s.a.get("http://localhost:3001/".concat(e)).then((function(e){E(e.data.length+1)}))}(t)}));return{Values:l,Formerrors:b,Issubmit:f,ErrorCatch:function(){h(w(l))},setFormErrors:h,setIssubmit:x,ValidationFun:w,SendData:function(){console.log(v),console.log(t),s()({baseURL:"http://localhost:3001/",url:t,method:"post",data:{id:v,data:l}}).then((function(t){x(!1),u(e),alert("data sent successfully")})).catch((function(e){alert(" Error error when data sending  ")}))},handlechange:function(e){u(Object(c.a)(Object(c.a)({},l),{},Object(a.a)({},e.target.name,e.target.value)))}}}},41:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a,c=n(17),r=(n(76),n(0),n(14)),i=n(18),s=n(1),o=i.b.div(a||(a=Object(c.a)(["\n    top:","\n    \n    "])),(function(e){return e.top}));function l(e){var t=e.socialmediaLinks,n=null===t||void 0===t?void 0:t.map((function(e){var t=e.id,n=e.icon,a=e.link;return Object(s.jsx)("a",{href:a,className:"socialmedialink",children:Object(s.jsx)(r.a,{className:"icon icon2",icon:["fab",n]})},t)}));return Object(s.jsx)(o,{className:"socialmediadiv",top:e.top,children:n})}},60:function(e,t,n){},61:function(e,t,n){},66:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},95:function(e,t,n){},97:function(e,t,n){},99:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(30),i=n.n(r),s=(n(60),n(61),n(21)),o=n(4),l=n(13),u=(n(66),n(14)),d=n(6),j=(n(69),n(70),n(1));function b(e){var t=Object(o.f)(),n=Object(a.useState)(null),c=Object(d.a)(n,2),r=c[0],i=c[1];return Object(a.useLayoutEffect)((function(){e.dropdownele?i(e.dropdownele.map((function(e){var n=e.id,a=e.path,c=e.content;return Object(j.jsxs)("div",{onClick:function(){return t(a)},to:a,className:e.class,children:[" ",c,"  "]},n)}))):i(null)}),[e.dropdownele,t]),Object(j.jsx)("div",{className:"dropdowncomponentcontainer",children:r})}var h=n(31),m=n(26);function O(){var e=Object(a.useState)(!1),t=Object(d.a)(e,2),n=t[0],c=t[1];return{view:n,viewfunction:function(){c(!n)}}}function f(e){var t=Object(a.useState)(0),n=Object(d.a)(t,2),c=n[0],r=n[1],i=O(),f=i.view,x=i.viewfunction,g=Object(h.a)(),p=g.Width,v=g.AvailHeight,E=Object(o.f)(),w=Object(a.useState)({}),N=Object(d.a)(w,2),R=N[0],C=N[1],y=e.viewMenu,S=Object(l.c)((function(e){return e.datareducer.data.MainNavbardata})),k=Object(a.useState)(null),P=Object(d.a)(k,2),F=P[0],L=P[1];Object(a.useEffect)((function(){L(null===S||void 0===S?void 0:S.map((function(e){var t=e.id,n=e.to,a=e.content,r=e.linkclass,i=e.iconView,o=e.DropdownmenuElement;return Object(j.jsx)("div",{children:Object(j.jsxs)(s.b,{id:t,to:{pathname:n},state:a,className:r,onMouseEnter:q,onMouseLeave:q,children:[" ",a,Object(j.jsx)(u.a,{icon:"chevron-down",className:"icon",style:{display:i?"inline-block":"none"}}),Object(j.jsx)(b,{dropdownele:t===Number(c)?o:null})]})},t)})))}),[S]),Object(a.useLayoutEffect)((function(){C({height:p>820?"80px":v+"px",display:y||p>820?"grid":"none"})}),[v,y,p]);var q=function(e){f?(x(),r(0)):(x(),r(e.target.id))};return Object(j.jsxs)("div",{className:"MainNavcomponent ",style:R,children:[Object(j.jsx)("nav",{className:"menunavbar ",children:F}),Object(j.jsx)("div",{className:"LoginReg",children:Object(j.jsx)(s.b,{to:"/login",children:" Login/Register "})}),Object(j.jsx)("div",{className:"takeappointment ",children:Object(j.jsx)(m.a,{onclick:function(){E("/CarWashReq")},child:"Get Appointment",font:"#202C45",back:"White",hoverfont:"white",hoverback:"#E81C2E"})})]})}function x(e){var t=O(),n=t.view,a=t.viewfunction,r=Object(h.a)().Width;return Object(j.jsxs)(c.a.Fragment,{children:[Object(j.jsxs)("div",{className:"BarComponent",children:[Object(j.jsx)("div",{className:"MenuSide  ",children:Object(j.jsx)("p",{className:"",children:" Menu "})}),Object(j.jsx)("div",{className:"BarSide ",onClick:a,children:Object(j.jsx)(u.a,{icon:"bars",className:"icon"})})]}),Object(j.jsx)(f,{viewMenu:n}),n&&r<820?Object(j.jsxs)("button",{className:"close",onClick:a,children:[" ",Object(j.jsx)(u.a,{icon:{prefix:"fab",iconName:"xing"},className:"icon"})," "]}):Object(j.jsx)(j.Fragment,{})]})}n(73),n(74);function g(){return Object(j.jsxs)("div",{className:"ele1",children:[" ",Object(j.jsxs)("a",{href:"/AutoWash",children:[" ",Object(j.jsx)("span",{children:" Auto "})," Wash "]})]})}function p(){var e=Object(l.c)((function(e){return e.datareducer.data.FNavbardata})),t=Object(a.useState)(null),n=Object(d.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){r(null===e||void 0===e?void 0:e.map((function(e){var t=e.id,n=e.mainclassname,a=e.imagesrc,c=e.altimage,r=e.headercontent,i=e.spancontent;return Object(j.jsxs)("div",{className:n,children:[Object(j.jsx)("div",{className:"imagepart",children:Object(j.jsx)("img",{src:a,alt:c})}),Object(j.jsxs)("div",{className:"textpart",children:[Object(j.jsxs)("p",{children:["   ",r,"  "]}),Object(j.jsxs)("span",{children:[i," "]})]})]},t)})))}),[e]),Object(j.jsx)("div",{className:"FNavcomponent ",children:Object(j.jsxs)("nav",{className:"firstnavcontainer",children:[Object(j.jsx)(g,{}),c]})})}var v={Get_data:"Get_data",Set_data:"Set_data"},E=function(e){return{type:v.Set_data,data:e}};function w(){var e=Object(l.b)();return Object(a.useLayoutEffect)((function(){e({type:v.Get_data,id:"AllData"})}),[e]),Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"Navbars",style:{position:"fixed",top:0,zIndex:"20",width:"100%"},children:[Object(j.jsx)(p,{}),Object(j.jsx)(x,{})]})})}var N=n(10),R=(n(75),n(41)),C=n(39),y=n(40);function S(e){var t=Object(y.a)({NewsFullname:"",NewsEmail:""},"newsletterRequests"),n=t.Values,c=t.Formerrors,r=t.Issubmit,i=t.setIssubmit,s=t.ErrorCatch,o=t.SendData,b=t.handlechange,h=Object(l.c)((function(e){return e.datareducer.data.FooterData})),O=Object(l.c)((function(e){return e.datareducer.data.SocialmediaData})),f=Object(a.useState)(null),x=Object(d.a)(f,2),g=x[0],p=x[1];return Object(a.useLayoutEffect)((function(){p(null===h||void 0===h?void 0:h.map((function(e){return Object(j.jsxs)("div",{className:"footerelement",children:[Object(j.jsxs)("p",{className:"headerofelement",children:[" ",e.title,"   "]}),e.elements.map((function(e){return Object(j.jsxs)("a",{href:e.link,className:"linkelement",children:[Object(j.jsx)(u.a,{icon:e.icon,className:e.iconClassName}),Object(j.jsxs)("span",{className:e.spanClassName,children:[" ",e.spantext," "]})]},e.id)})),"Get In Touch"===e.title?Object(j.jsx)(R.a,{socialmediaLinks:O,top:"0"}):Object(j.jsx)(j.Fragment,{children:" "})]},e.id)})))}),[h,O]),Object(a.useLayoutEffect)((function(){s()}),[n.NewsFullname,n.NewsEmail]),Object(a.useEffect)((function(){0===Object.keys(c.NewsErr).length?i(!0):i(!1)})),Object(j.jsxs)("div",{className:"footercontainer",children:[g,Object(j.jsxs)("div",{className:"footerelement",children:[Object(j.jsx)("p",{className:"headerofelement",children:" Newsletter  "}),[{id:0,name:"NewsFullname",type:"text",placeholder:"FullName",required:!0,inputtype:"textbox"},{id:1,name:"NewsEmail",type:"email",placeholder:" Email ",required:!0,inputtype:"textbox"}].map((function(e){return Object(j.jsx)(C.a,Object(N.a)(Object(N.a)({},e),{},{value:n[e.name],onChange:b,errormessage:c.NewsErr[e.name]}),e.id)})),Object(j.jsx)(m.a,{onclick:o,disabled:!r,child:"Submit",font:"#202C45",back:"white",hoverfont:"white",hoverback:"#E81C2E",width:"100%"})]})]})}n(95);function k(){return Object(j.jsx)("div",{className:"footerEndContainer",children:Object(j.jsxs)("p",{children:["\xa9 ",Object(j.jsx)("span",{children:" AutoWash "}),", All Right Reserved. Designed By  ",Object(j.jsx)("span",{children:" Arafat.Ali "})]})})}var P=Object(a.lazy)((function(){return n.e(11).then(n.bind(null,159))})),F=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,160))})),L=Object(a.lazy)((function(){return n.e(6).then(n.bind(null,146))})),q=Object(a.lazy)((function(){return n.e(10).then(n.bind(null,161))})),A=Object(a.lazy)((function(){return n.e(8).then(n.bind(null,147))})),z=Object(a.lazy)((function(){return n.e(9).then(n.bind(null,148))})),_=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,149))})),M=Object(a.lazy)((function(){return n.e(7).then(n.bind(null,150))})),W=Object(a.lazy)((function(){return n.e(16).then(n.bind(null,151))})),B=Object(a.lazy)((function(){return n.e(13).then(n.bind(null,152))})),D=Object(a.lazy)((function(){return n.e(12).then(n.bind(null,153))})),I=Object(a.lazy)((function(){return n.e(15).then(n.bind(null,154))})),G=Object(a.lazy)((function(){return n.e(14).then(n.bind(null,155))}));var T=function(){return Object(j.jsx)("div",{children:Object(j.jsxs)(s.a,{children:[Object(j.jsx)(w,{}),Object(j.jsx)("div",{className:"MainAppcomponent",children:Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{exact:!0,path:"/AutoWash",element:Object(j.jsx)(F,{})}),Object(j.jsx)(o.a,{path:"/CarWashReq",element:Object(j.jsx)(M,{})}),Object(j.jsx)(o.a,{path:"/Contact",element:Object(j.jsx)(q,{})}),Object(j.jsx)(o.a,{path:"/AboutUs",element:Object(j.jsx)(L,{})}),Object(j.jsx)(o.a,{path:"/OurPrices",element:Object(j.jsx)(z,{})}),Object(j.jsx)(o.a,{path:"/Pages",element:Object(j.jsx)(A,{})}),Object(j.jsx)(o.a,{path:"/OurService",element:Object(j.jsx)(_,{})}),Object(j.jsx)(o.a,{path:"/WashingPoints",element:Object(j.jsx)(M,{})}),Object(j.jsx)(o.a,{path:"/DetailPage",element:Object(j.jsx)(B,{})}),Object(j.jsx)(o.a,{path:"/BlogGrid",element:Object(j.jsx)(D,{})}),Object(j.jsx)(o.a,{path:"/TeamMember",element:Object(j.jsx)(I,{})}),Object(j.jsx)(o.a,{path:"/SchduleBooking",element:Object(j.jsx)(G,{})}),Object(j.jsx)(o.a,{path:"/login/*",element:Object(j.jsx)(P,{})}),Object(j.jsx)(o.a,{path:"*",element:Object(j.jsx)(W,{})})]})}),Object(j.jsx)(S,{}),Object(j.jsx)(k,{})]})})},H=function(e){e&&e instanceof Function&&n.e(17).then(n.bind(null,156)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))},V=(n(96),n(97),function(){var e=window.innerHeight;return Object(j.jsxs)("div",{className:"fa-3x Spinner",style:{height:e},children:[Object(j.jsx)(g,{}),Object(j.jsx)(u.a,{icon:"spinner",className:"icon fa-spin"})]})}),U=n(20),$={data:[]},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;if(t.type===v.Set_data){var n=t.data;return Object(N.a)(Object(N.a)({},e),{},{data:n})}return e},J=n(54),X=n(22),K=n.n(X),Q=n(24),Y=n(25),ee=n.n(Y);function te(e){return ee.a.request({baseURL:"https://autowash-api.herokuapp.com/".concat(e),method:"get"})}var ne=K.a.mark(ae);function ae(e){var t,n;return K.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(Q.b)(te,e.id);case 3:return t=a.sent,n=t.data,a.next=7,Object(Q.c)(E(n));case 7:a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),console.log(a.t0);case 12:case"end":return a.stop()}}),ne,null,[[0,9]])}var ce=ae,re=K.a.mark(ie);function ie(){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Q.a)([Object(Q.d)(v.Get_data,ce)]);case 2:case"end":return e.stop()}}),re)}var se=ie,oe=Object(U.b)({datareducer:Z}),le=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||U.c,ue=Object(J.a)(),de=Object(U.d)(oe,{},le(Object(U.a)(ue)));ue.run(se);var je=de,be=n(19),he=n(9),me=n(16);be.b.add(me.g,me.d,me.c,me.a,me.b,me.f,me.e),be.b.add(he.r,he.o,he.q,he.j,he.b,he.a,he.c,he.e,he.m,he.n,he.k,he.g,he.f,he.p,he.i,he.d,he.l,he.h),i.a.render(Object(j.jsx)(l.a,{store:je,children:Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(a.Suspense,{fallback:Object(j.jsx)(V,{}),children:Object(j.jsx)(T,{})})})}),document.getElementById("root")),H()}},[[99,2,3]]]);
//# sourceMappingURL=main.964f12a1.chunk.js.map