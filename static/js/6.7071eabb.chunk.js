(this.webpackJsonpautowash=this.webpackJsonpautowash||[]).push([[6],{100:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));r(0);var a=r(4),n=(r(101),r(1));function s(e){var t=Object(a.g)().pathname.slice(1);return Object(n.jsxs)("div",{className:"HeaderContainer",children:[Object(n.jsx)("p",{children:t}),Object(n.jsxs)("p",{children:["AutoWash / ",t]})]})}},101:function(e,t,r){},103:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var a=r(0),n=r(39),s=(r(107),r(1));function i(e){var t=e.header,r=e.message,i=e.closeModal;return Object(a.useEffect)((function(){document.body.style.overflowY="hidden"}),[]),Object(s.jsx)("div",{className:"modalContainer",children:Object(s.jsx)("div",{className:"modalMessage",children:Object(s.jsxs)("div",{className:"modalElement",children:[Object(s.jsx)("p",{className:"header",children:t}),Object(s.jsx)("p",{className:"message",children:r}),Object(s.jsx)("div",{className:"buttons",children:Object(s.jsx)(n.a,{onclick:i,child:"Okay",font:"white",width:"100px",back:"#E81C2E",hoverfont:"#E81C2E",hoverback:"white"})})]})})})}},106:function(e,t,r){},107:function(e,t,r){},108:function(e,t,r){"use strict";r.d(t,"a",(function(){return g}));var a=r(43),n=r(18),s=r(10),i=r(24),o=r.n(i),c=r(0),l=r(17),u=r(103),d=r(15),h=r(42),m=r(1);function g(e,t){var r=Object(l.b)(),i=Object(l.c)(h.b),g=Object(c.useState)(e),b=Object(s.a)(g,2),E=b[0],j=b[1],f=Object(c.useState)({ContactErr:{},NewsErr:{},SigninErr:{},RegisterErr:{},WashRequestErr:{}}),R=Object(s.a)(f,2),O=R[0],p=R[1],v=Object(c.useState)(!1),x=Object(s.a)(v,2),w=x[0],N=x[1],y=Object(c.useState)(),q=Object(s.a)(y,2),C=q[0],F=q[1],P=Math.floor(1514e3*Math.random())+1,S=Object(c.useState)(""),k=Object(s.a)(S,2),U=k[0],M=k[1],L=function(e){var t={ContactErr:{},NewsErr:{},SigninErr:{},RegisterErr:{},WashRequestErr:{}},r=new RegExp("^[A-zA-Z0-9_ ]{3,16}$"),a=new RegExp("^[A-zA-Z0-9_ ]{10,40}$"),n=/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,s=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})");return e.Contactfullname?r.test(e.Contactfullname)||(t.ContactErr.Contactfullname="fullname must have at least 3 chars and max 16 chars  "):t.ContactErr.Contactfullname=" Fullname required ",e.ContactEmail?n.test(e.ContactEmail)||(t.ContactErr.ContactEmail="Please enter A valid email "):t.ContactErr.ContactEmail=" Email required ",e.ContactSubject?a.test(e.ContactSubject)||(t.ContactErr.ContactSubject=" subject must be at least 10 chars and maximum 40  chars "):t.ContactErr.ContactSubject=" Subject is required ",e.ContactMessage||(t.ContactErr.ContactMessage=" Message  is required "),e.NewsFullname?r.test(e.NewsFullname)||(t.NewsErr.NewsFullname="fullname must have at least 3 chars and max 16 chars  "):t.NewsErr.NewsFullname=" Fullname required ",e.NewsEmail?n.test(e.NewsEmail)||(t.NewsErr.NewsEmail=" please Enter A valid Email "):t.NewsErr.NewsEmail="Email Required ",e.LoginEmail?n.test(e.LoginEmail)||(t.SigninErr.LoginEmail="Please enter A valid email "):t.SigninErr.LoginEmail=" Email Required ",e.LoginPassword?s.test(e.LoginPassword)||(t.SigninErr.LoginPassword="Please Enter a valid Password  "):t.SigninErr.LoginPassword=" Password Required ",e.RegFName||(t.RegisterErr.RegFName=" Fullname required "),e.RegLName||(t.RegisterErr.RegLName=" Lastname required "),e.RegEmail?n.test(e.RegEmail)||(t.RegisterErr.RegEmail=" Enter a valid Email "):t.RegisterErr.RegEmail=" Email required ",e.RegPassword?s.test(e.RegPassword)?e.RegPassword!==e.RegConfirmPass&&(t.RegisterErr.RegConfirmPass="Passwords not matched "):t.RegisterErr.RegPassword=" Enter a valid password ":t.RegisterErr.RegPassword="Password required ",e.RegConfirmPass||(t.RegisterErr.RegConfirmPass=" Confirm Pass required "),e.RegPhoneNumber||(t.RegisterErr.RegPhoneNumber=" Phone Number required "),e.RegBirthday||(t.RegisterErr.RegBirthday=" Birthday required "),e.RegNationality||(t.RegisterErr.RegNationality=" Nationality required "),e.RegAdress||(t.RegisterErr.RegAdress=" Address  required "),e.RegCity||(t.RegisterErr.RegCity=" City required "),e.ReqFullname||(t.WashRequestErr.ReqFullname="  Fullname required   "),e.ReqEmail?n.test(e.ReqEmail)||(t.WashRequestErr.ReqEmail=" Enter a valid Email "):t.WashRequestErr.ReqEmail="Email required ",e.ReqDescription||(t.WashRequestErr.ReqDescription="  Description required "),p(t),t};function W(){document.body.style.overflowY="auto",M(null)}Object(c.useEffect)((function(){t&&function(e){o.a.get("https://autowash-api.herokuapp.com/".concat(e)).then((function(e){F(e.data.length+1)}))}(t)}),[t]);return{Values:E,Formerrors:O,Issubmit:w,users:i,ErorrModal:U,url:t,setValues:j,LoginService:function(){var e=L(E).SigninErr;if(0===Object.keys(e).length){var t=null===i||void 0===i?void 0:i.filter((function(e){return e.data.RegEmail===E.LoginEmail&&e.data.RegPassword===E.LoginPassword}));0!==t.length?(localStorage.setItem("UserToken",JSON.stringify(t[0].userToken)),r(Object(d.c)(t)),window.location.replace("/AutoWash")):M(Object(m.jsx)(u.a,{header:"Authentication Error ",message:" The Email or Password May Have Error  ",closeModalFun:W}))}},ErrorCatch:function(){return L(E)},setFormErrors:p,setIssubmit:N,ValidationFun:L,SendData:function(r){var a=L(E)[r];0===Object.keys(a).length&&(function(e){var t=i.find((function(t){return t.data.RegEmail===e?(console.log("Email exist from func hook  "),!0):(console.log("Email doesnot Exist from func hook "),!1)}));return console.log(t),t}(E.RegEmail)?M(Object(m.jsx)(u.a,{header:"Authentication Error",message:" the email has been reigsted before try login ",closeModalFun:W})):o()({baseURL:"https://autowash-api.herokuapp.com/",url:t,method:"post",data:{id:C,data:E,userToken:P+Number(E.RegPhoneNumber?E.RegPhoneNumber:0)+C}}).then((function(t){N(!1),j(e),alert("data sent successfully")})).catch((function(e){M(Object(m.jsx)(u.a,{header:"Authentication Error ",message:e,closeModalFun:W}))})))},handlechange:function(e){j(Object(n.a)(Object(n.a)({},E),{},Object(a.a)({},e.target.name,e.target.value)))}}}},109:function(e,t,r){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}r.d(t,"a",(function(){return a}))},110:function(e,t,r){"use strict";function a(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function n(e,t,r){return t&&a(e.prototype,t),r&&a(e,r),e}r.d(t,"a",(function(){return n}))},111:function(e,t,r){"use strict";r.d(t,"a",(function(){return j}));var a=r(18),n=r(10);function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i,o,c,l=r(40),u=(r(113),r(0)),d=r(41),h=r(1),m=["id","errormessage","inputtype","onChnage"],g=Object(d.a)(i||(i=Object(l.a)(["\n border : "," ;\n color : ","  ; \n ::placeholder  { color:"," ;  }\n"])),(function(e){return e.border?"1px solid ".concat(e.border):"1px solid white"}),(function(e){return e.border?"".concat(e.border):"white"}),(function(e){return e.border?"".concat(e.border):"white"})),b=d.b.input.attrs((function(e){return{"data-focused":e.focused}}))(o||(o=Object(l.a)(["\n    "," ;\n    height:40px;\n "])),g),E=d.b.textarea.attrs((function(e){return{"data-focused":e.focused}}))(c||(c=Object(l.a)(["\n   "," ;\n   height:150px ; \n "])),g);function j(e){e.id;var t=e.errormessage,r=e.inputtype,i=e.onChnage,o=s(e,m),c=Object(u.useState)(!1),l=Object(n.a)(c,2),d=l[0],g=l[1],j=function(e){g(!0)};return Object(h.jsxs)("div",{className:"Formdiv",children:["textbox"===r?Object(h.jsx)(b,Object(a.a)(Object(a.a)({className:"forminput",onChange:i,onFocus:j},o),{},{border:e.border,focused:d.toString()})):Object(h.jsx)(E,Object(a.a)(Object(a.a)({className:"forminput",onChange:i,onFocus:j},o),{},{border:e.border,focused:d.toString()})),Object(h.jsxs)("span",{className:"errormessage",children:[" ",t," "]})]})}},113:function(e,t,r){},114:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var a=r(109),n=r(110),s=r(24),i=r.n(s),o=function(){function e(t,r,n,s){var i,o=this;Object(a.a)(this,e),this.baseURL="https://autowash-api.herokuapp.com/",this.Token=function(){return Math.floor(1514e3*Math.random())+1+Number(o.dataFromUser.RegPhoneNumber?o.dataFromUser.RegPhoneNumber:0)+o.lastId},this.ErrorStateFun=function(){return 0!==Object.keys(o.ErrorObject).length},this.EmailExist=function(e){var t=o.Users.find((function(t){return t.data.RegEmail===e?(console.log("Email exist from func hook"),!0):(console.log("Email doesnot Exist from func hook "),!1)}));return console.log(t),t},this.dataFromUser=t,this.destinationUrl=r,this.ErrorObject=n,this.Users=s,this.lastId=(null===(i=this.Users)||void 0===i?void 0:i.length)+1}return Object(n.a)(e,[{key:"RegisterUserData",value:function(){return this.ErrorStateFun()?{Error:"Error Message ",Message:" Error Found in the data you Entered "}:this.EmailExist(this.dataFromUser.RegEmail)?{Error:"Auth Error",Message:" The Email have already exist , Try Sign in   "}:void i()({baseURL:this.baseURL,data:{id:this.lastId,data:this.dataFromUser,userToken:this.Token()},url:this.destinationUrl,method:"post"}).then((function(e){localStorage.setItem("Token",e.data.userToken),window.location.replace("/AutoWash")}))}},{key:"RegisterUserLetterData",value:function(){return this.ErrorStateFun()?{Error:" Validation Error ",Message:"please enter a valid data "}:(i()({baseURL:this.baseURL,url:this.destinationUrl,method:"post",data:{data:this.dataFromUser}}),{Error:"",Message:" data sent successfuly"})}},{key:"RegisterContactData",value:function(){return this.ErrorStateFun()?{Error:" Validation Error ",Message:"please enter a valid data "}:(i()({baseURL:this.baseURL,url:this.destinationUrl,method:"post",data:{data:this.dataFromUser}}),{Error:"",Message:" Message sent successfuly"})}},{key:"RegisterCarWashRequest",value:function(){return console.log(this.destinationUrl),this.ErrorStateFun()?{Error:" Validtion Error ",Message:" Please enter a valid data "}:(i()({baseURL:this.baseURL,url:this.destinationUrl,method:"post",data:{data:this.dataFromUser}}),{Error:"",Message:" Request Send Successfully  "})}}]),e}()},131:function(e,t,r){},132:function(e,t,r){},140:function(e,t,r){"use strict";r.d(t,"a",(function(){return j}));var a=r(10),n=r(0),s=r(99),i=(r(131),r(16)),o=r(18),c=r(39),l=(r(132),r(111)),u=r(108),d=r(114),h=r(103),m=r(1);function g(){var e="carWashRequests",t=Object(u.a)({ReqFullname:"",ReqEmail:"",ReqDescription:""},e),r=t.Values,s=t.Formerrors,i=t.ErrorCatch,g=t.handlechange,b=(t.setValues,Object(n.useState)()),E=Object(a.a)(b,2),j=E[0],f=E[1],R=function(){document.body.style.overflowY="auto",f(null)};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"carWashRequest",children:[Object(m.jsxs)("div",{className:"title",children:[Object(m.jsx)("p",{children:" Request  Car Wash  "})," "]}),[{id:0,name:"ReqFullname",type:"text",placeholder:"FullName",required:!0,inputtype:"textbox"},{id:1,name:"ReqEmail",type:"email",placeholder:" Email ",required:!0,inputtype:"textbox"},{id:2,name:"ReqDescription",type:"text",placeholder:"Enter your Message",required:!0,inputtype:"textarea"}].map((function(e){return Object(m.jsx)(l.a,Object(o.a)(Object(o.a)({},e),{},{value:r[e.name],onChange:g,errormessage:s.WashRequestErr[e.name]}),e.id)})),Object(m.jsx)(c.a,{onclick:function(){console.log(r),console.log(e),console.log(i().WashRequestErr);var t=new d.a(r,e,i().WashRequestErr,null).RegisterCarWashRequest();t&&f(Object(m.jsx)(h.a,{header:t.Error,message:t.Message,closeModal:R}))},child:" Send Request ",font:"#E81C2E",back:"white",hoverfont:"white",hoverback:"#202C45",width:"100%"})]}),j||Object(m.jsx)(m.Fragment,{})]})}var b=r(17),E=r(38);function j(){var e=Object(b.c)(E.a).WashingPointData,t=Object(n.useState)(null),r=Object(a.a)(t,2),o=r[0],c=r[1];return Object(n.useLayoutEffect)((function(){c(null===e||void 0===e?void 0:e.map((function(e){var t=e.id,r=e.title,a=e.address,n=e.phonenumber;return Object(m.jsxs)("div",{className:"washingpoint ",children:[Object(m.jsx)("div",{className:"mapicon",children:Object(m.jsx)(i.a,{className:"icon",icon:"map-marker-alt"})}),Object(m.jsxs)("div",{className:"details",children:[Object(m.jsxs)("p",{children:[" ",r]}),Object(m.jsxs)("p",{children:[" ",a," "]}),Object(m.jsxs)("p",{children:[" Call: ",n,"  "]})]})]},t)})))}),[e]),Object(m.jsx)("div",{className:"WashingPointComponent",children:Object(m.jsxs)("div",{className:"washingContainer",children:[Object(m.jsxs)("div",{className:"washingleftelement",children:[Object(m.jsx)(s.a,{title:" Washing Points  ",header:"Car Washing & Car Points ",dirction:"left",margintop:"0px"}),Object(m.jsx)("div",{className:"washingpointelement",children:o})]}),Object(m.jsx)("div",{className:"washingrightelement",children:Object(m.jsx)(g,{})})]})})}},206:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return i}));r(0);var a=r(140),n=r(100),s=r(1);function i(){return Object(s.jsxs)("div",{className:"MainWashing",children:[Object(s.jsx)(n.a,{}),Object(s.jsx)(a.a,{})]})}},99:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));r(0),r(106);var a=r(1);function n(e){var t=e.dirction,r=e.margintop,n=e.title,s=e.header;return Object(a.jsxs)("div",{className:"componenttitle",style:{textAlign:t,marginTop:r},children:[Object(a.jsx)("div",{className:"title",children:n}),Object(a.jsx)("div",{className:"titleHeader",children:s})]})}}}]);
//# sourceMappingURL=6.7071eabb.chunk.js.map