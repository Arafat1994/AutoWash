(this.webpackJsonpautowash=this.webpackJsonpautowash||[]).push([[11],{103:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var a=r(40),n=r(24),s=r(8),i=r(25),c=r.n(i),o=r(0);function u(e,t){var r=Object(o.useState)(e),i=Object(s.a)(r,2),u=i[0],l=i[1],d=Object(o.useState)({ContactErr:{},NewsErr:{},SigninErr:{},RegisterErr:{}}),m=Object(s.a)(d,2),b=m[0],g=m[1],f=Object(o.useState)(!1),j=Object(s.a)(f,2),E=j[0],h=j[1],O=Object(o.useState)(),p=Object(s.a)(O,2),w=p[0],N=p[1],R=function(e){var t={ContactErr:{},NewsErr:{},SigninErr:{},RegisterErr:{}},r=new RegExp("^[A-zA-Z0-9_ ]{3,16}$"),a=new RegExp("^[A-zA-Z0-9_ ]{10,40}$"),n=/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,s=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})");return e.Contactfullname?r.test(e.Contactfullname)||(t.ContactErr.Contactfullname="fullname must have at least 3 chars and max 16 chars  "):t.ContactErr.Contactfullname=" Fullname required ",e.ContactEmail?n.test(e.ContactEmail)||(t.ContactErr.ContactEmail="Please enter A valid email "):t.ContactErr.ContactEmail=" Email required ",e.ContactSubject?a.test(e.ContactSubject)||(t.ContactErr.ContactSubject=" subject must be at least 10 chars and maximum 40  chars "):t.ContactErr.ContactSubject=" Subject is required ",e.ContactMessage||(t.ContactErr.ContactMessage=" Message  is required "),e.NewsFullname?r.test(e.NewsFullname)||(t.NewsErr.NewsFullname="fullname must have at least 3 chars and max 16 chars  "):t.NewsErr.NewsFullname=" Fullname required ",e.NewsEmail?n.test(e.NewsEmail)||(t.NewsErr.NewsEmail=" please Enter A valid Email "):t.NewsErr.NewsEmail="Email Required ",e.LoginEmail?n.test(e.LoginEmail)||(t.SigninErr.LoginEmail="Please enter A valid email "):t.SigninErr.LoginEmail=" Email Required ",e.LoginPassword?s.test(e.LoginPassword)||(t.SigninErr.LoginPassword="Please Enter a valid Password  "):t.SigninErr.LoginPassword=" Password Required ",e.RegFName||(t.RegisterErr.RegFName=" Fullname required "),e.RegLName||(t.RegisterErr.RegLName=" Lastname required "),e.RegEmail?n.test(e.RegEmail)||(t.RegisterErr.RegEmail=" Enter a valid Email "):t.RegisterErr.RegEmail=" Email required ",e.RegPassword?s.test(e.RegPassword)?e.RegPassword!==e.RegConfirmPass&&(t.RegisterErr.RegConfirmPass="Passwords not matched "):t.RegisterErr.RegPassword=" Enter a valid password ":t.RegisterErr.RegPassword="Password required ",e.RegConfirmPass||(t.RegisterErr.RegConfirmPass=" Confirm Pass required "),e.RegPhoneNumber||(t.RegisterErr.RegPhoneNumber=" Phone Number required "),e.RegBirthday||(t.RegisterErr.RegBirthday=" Birthday required "),e.RegNationality||(t.RegisterErr.RegNationality=" Nationality required "),e.RegAdress||(t.RegisterErr.RegAdress=" Address  required "),e.RegCity||(t.RegisterErr.RegCity=" City required "),t};Object(o.useEffect)((function(){!function(e){c.a.get("https://autowash-api.herokuapp.com/".concat(e)).then((function(e){N(e.data.length+1)}))}(t)}));return{Values:u,Formerrors:b,Issubmit:E,ErrorCatch:function(){g(R(u))},setFormErrors:g,setIssubmit:h,ValidationFun:R,SendData:function(){console.log(w),console.log(t),c()({baseURL:"https://autowash-api.herokuapp.com/",url:t,method:"post",data:{id:w,data:u}}).then((function(t){h(!1),l(e),alert("data sent successfully")})).catch((function(e){alert(" Error error when data sending  ")}))},handlechange:function(e){l(Object(n.a)(Object(n.a)({},u),{},Object(a.a)({},e.target.name,e.target.value)))}}}},105:function(e,t,r){"use strict";r.d(t,"a",(function(){return E}));var a=r(24),n=r(8);function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i,c,o,u=r(38),l=(r(108),r(0)),d=r(39),m=r(2),b=["id","errormessage","inputtype","onChnage"],g=Object(d.a)(i||(i=Object(u.a)(["\n border : "," ;\n color : ","  ; \n ::placeholder  { color:"," ;  }\n"])),(function(e){return e.border?"1px solid ".concat(e.border):"1px solid white"}),(function(e){return e.border?"".concat(e.border):"white"}),(function(e){return e.border?"".concat(e.border):"white"})),f=d.b.input.attrs((function(e){return{"data-focused":e.focused}}))(c||(c=Object(u.a)(["\n    "," ;\n    height:40px;\n "])),g),j=d.b.textarea.attrs((function(e){return{"data-focused":e.focused}}))(o||(o=Object(u.a)(["\n   "," ;\n   height:150px ; \n "])),g);function E(e){e.id;var t=e.errormessage,r=e.inputtype,i=e.onChnage,c=s(e,b),o=Object(l.useState)(!1),u=Object(n.a)(o,2),d=u[0],g=u[1],E=function(e){g(!0)};return Object(m.jsxs)("div",{className:"Formdiv",children:["textbox"===r?Object(m.jsx)(f,Object(a.a)(Object(a.a)({className:"forminput",onChange:i,onFocus:E},c),{},{border:e.border,focused:d.toString()})):Object(m.jsx)(j,Object(a.a)(Object(a.a)({className:"forminput",onChange:i,onFocus:E},c),{},{border:e.border,focused:d.toString()})),Object(m.jsxs)("span",{className:"errormessage",children:[" ",t," "]})]})}},106:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var a,n=r(38),s=(r(107),r(0),r(14)),i=r(39),c=r(2),o=i.b.div(a||(a=Object(n.a)(["\n    top:","\n    \n    "])),(function(e){return e.top}));function u(e){var t=e.socialmediaLinks,r=null===t||void 0===t?void 0:t.map((function(e){var t=e.id,r=e.icon,a=e.link;return Object(c.jsx)("a",{href:a,className:"socialmedialink",children:Object(c.jsx)(s.a,{className:"icon icon2",icon:["fab",r]})},t)}));return Object(c.jsx)(o,{className:"socialmediadiv",top:e.top,children:r})}},107:function(e,t,r){},108:function(e,t,r){},168:function(e,t,r){},181:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return b}));var a=r(24),n=r(8),s=(r(168),r(0)),i=r(14),c=r(106),o=r(105),u=r(37),l=r(103),d=r(20),m=r(2);function b(e){var t=Object(l.a)({NewsFullname:"",NewsEmail:""},"newsletterRequests"),r=t.Values,b=t.Formerrors,g=t.Issubmit,f=t.setIssubmit,j=t.ErrorCatch,E=t.SendData,h=t.handlechange,O=Object(d.c)((function(e){return e.datareducer.data.FooterData})),p=Object(d.c)((function(e){return e.datareducer.data.SocialmediaData})),w=Object(s.useState)(null),N=Object(n.a)(w,2),R=N[0],C=N[1];return Object(s.useLayoutEffect)((function(){C(null===O||void 0===O?void 0:O.map((function(e){return Object(m.jsxs)("div",{className:"footerelement",children:[Object(m.jsxs)("p",{className:"headerofelement",children:[" ",e.title,"   "]}),e.elements.map((function(e){return Object(m.jsxs)("a",{href:e.link,className:"linkelement",children:[Object(m.jsx)(i.a,{icon:e.icon,className:e.iconClassName}),Object(m.jsxs)("span",{className:e.spanClassName,children:[" ",e.spantext," "]})]},e.id)})),"Get In Touch"===e.title?Object(m.jsx)(c.a,{socialmediaLinks:p,top:"0"}):Object(m.jsx)(m.Fragment,{children:" "})]},e.id)})))}),[O,p]),Object(s.useLayoutEffect)((function(){j()}),[r.NewsFullname,r.NewsEmail]),Object(s.useEffect)((function(){0===Object.keys(b.NewsErr).length?f(!0):f(!1)})),Object(m.jsxs)("div",{className:"footercontainer",children:[R,Object(m.jsxs)("div",{className:"footerelement",children:[Object(m.jsx)("p",{className:"headerofelement",children:" Newsletter  "}),[{id:0,name:"NewsFullname",type:"text",placeholder:"FullName",required:!0,inputtype:"textbox"},{id:1,name:"NewsEmail",type:"email",placeholder:" Email ",required:!0,inputtype:"textbox"}].map((function(e){return Object(m.jsx)(o.a,Object(a.a)(Object(a.a)({},e),{},{value:r[e.name],onChange:h,errormessage:b.NewsErr[e.name]}),e.id)})),Object(m.jsx)(u.a,{onclick:E,disabled:!g,child:"Submit",font:"#202C45",back:"white",hoverfont:"white",hoverback:"#E81C2E",width:"100%"})]})]})}}}]);
//# sourceMappingURL=11.77ac10be.chunk.js.map