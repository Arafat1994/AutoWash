(this.webpackJsonpautowash=this.webpackJsonpautowash||[]).push([[8],{104:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var a=r(0),n=r(39),s=(r(110),r(1));function o(e){var t=e.header,r=e.message,o=e.closeModal;return Object(a.useEffect)((function(){document.body.style.overflowY="hidden"}),[]),Object(s.jsx)("div",{className:"modalContainer",children:Object(s.jsx)("div",{className:"modalMessage",children:Object(s.jsxs)("div",{className:"modalElement",children:[Object(s.jsx)("p",{className:"header",children:t}),Object(s.jsx)("p",{className:"message",children:r}),Object(s.jsx)("div",{className:"buttons",children:Object(s.jsx)(n.a,{onclick:o,child:"Okay",font:"white",width:"100px",back:"#E81C2E",hoverfont:"#E81C2E",hoverback:"white"})})]})})})}},108:function(e,t,r){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}r.d(t,"a",(function(){return a}))},109:function(e,t,r){"use strict";function a(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function n(e,t,r){return t&&a(e.prototype,t),r&&a(e,r),e}r.d(t,"a",(function(){return n}))},110:function(e,t,r){},112:function(e,t,r){"use strict";r.d(t,"a",(function(){return E}));var a=r(18),n=r(10);function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o,i,c,u=r(40),l=(r(116),r(0)),d=r(41),m=r(1),g=["id","errormessage","inputtype","onChnage"],h=Object(d.a)(o||(o=Object(u.a)(["\n border : "," ;\n color : ","  ; \n ::placeholder  { color:"," ;  }\n"])),(function(e){return e.border?"1px solid ".concat(e.border):"1px solid white"}),(function(e){return e.border?"".concat(e.border):"white"}),(function(e){return e.border?"".concat(e.border):"white"})),b=d.b.input.attrs((function(e){return{"data-focused":e.focused}}))(i||(i=Object(u.a)(["\n    "," ;\n    height:40px;\n "])),h),f=d.b.textarea.attrs((function(e){return{"data-focused":e.focused}}))(c||(c=Object(u.a)(["\n   "," ;\n   height:150px ; \n "])),h);function E(e){e.id;var t=e.errormessage,r=e.inputtype,o=e.onChnage,i=s(e,g),c=Object(l.useState)(!1),u=Object(n.a)(c,2),d=u[0],h=u[1],E=function(e){h(!0)};return Object(m.jsxs)("div",{className:"Formdiv",children:["textbox"===r?Object(m.jsx)(b,Object(a.a)(Object(a.a)({className:"forminput",onChange:o,onFocus:E},i),{},{border:e.border,focused:d.toString()})):Object(m.jsx)(f,Object(a.a)(Object(a.a)({className:"forminput",onChange:o,onFocus:E},i),{},{border:e.border,focused:d.toString()})),Object(m.jsxs)("span",{className:"errormessage",children:[" ",t," "]})]})}},113:function(e,t,r){"use strict";r.d(t,"a",(function(){return h}));var a=r(43),n=r(18),s=r(10),o=r(24),i=r.n(o),c=r(0),u=r(17),l=r(104),d=r(15),m=r(42),g=(r(108),r(109),r(1));function h(e,t){var r=Object(u.b)(),o=Object(u.c)(m.b),h=Object(c.useState)(e),b=Object(s.a)(h,2),f=b[0],E=b[1],j=Object(c.useState)({ContactErr:{},NewsErr:{},SigninErr:{},RegisterErr:{}}),p=Object(s.a)(j,2),O=p[0],y=p[1],R=Object(c.useState)(!1),v=Object(s.a)(R,2),x=v[0],w=v[1],N=Object(c.useState)(),C=Object(s.a)(N,2),P=C[0],k=C[1],F=Math.floor(1514e3*Math.random())+1,S=Object(c.useState)(""),L=Object(s.a)(S,2),q=L[0],M=L[1],U=function(e){var t={ContactErr:{},NewsErr:{},SigninErr:{},RegisterErr:{}},r=new RegExp("^[A-zA-Z0-9_ ]{3,16}$"),a=new RegExp("^[A-zA-Z0-9_ ]{10,40}$"),n=/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,s=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})");return e.Contactfullname?r.test(e.Contactfullname)||(t.ContactErr.Contactfullname="fullname must have at least 3 chars and max 16 chars  "):t.ContactErr.Contactfullname=" Fullname required ",e.ContactEmail?n.test(e.ContactEmail)||(t.ContactErr.ContactEmail="Please enter A valid email "):t.ContactErr.ContactEmail=" Email required ",e.ContactSubject?a.test(e.ContactSubject)||(t.ContactErr.ContactSubject=" subject must be at least 10 chars and maximum 40  chars "):t.ContactErr.ContactSubject=" Subject is required ",e.ContactMessage||(t.ContactErr.ContactMessage=" Message  is required "),e.NewsFullname?r.test(e.NewsFullname)||(t.NewsErr.NewsFullname="fullname must have at least 3 chars and max 16 chars  "):t.NewsErr.NewsFullname=" Fullname required ",e.NewsEmail?n.test(e.NewsEmail)||(t.NewsErr.NewsEmail=" please Enter A valid Email "):t.NewsErr.NewsEmail="Email Required ",e.LoginEmail?n.test(e.LoginEmail)||(t.SigninErr.LoginEmail="Please enter A valid email "):t.SigninErr.LoginEmail=" Email Required ",e.LoginPassword?s.test(e.LoginPassword)||(t.SigninErr.LoginPassword="Please Enter a valid Password  "):t.SigninErr.LoginPassword=" Password Required ",e.RegFName||(t.RegisterErr.RegFName=" Fullname required "),e.RegLName||(t.RegisterErr.RegLName=" Lastname required "),e.RegEmail?n.test(e.RegEmail)||(t.RegisterErr.RegEmail=" Enter a valid Email "):t.RegisterErr.RegEmail=" Email required ",e.RegPassword?s.test(e.RegPassword)?e.RegPassword!==e.RegConfirmPass&&(t.RegisterErr.RegConfirmPass="Passwords not matched "):t.RegisterErr.RegPassword=" Enter a valid password ":t.RegisterErr.RegPassword="Password required ",e.RegConfirmPass||(t.RegisterErr.RegConfirmPass=" Confirm Pass required "),e.RegPhoneNumber||(t.RegisterErr.RegPhoneNumber=" Phone Number required "),e.RegBirthday||(t.RegisterErr.RegBirthday=" Birthday required "),e.RegNationality||(t.RegisterErr.RegNationality=" Nationality required "),e.RegAdress||(t.RegisterErr.RegAdress=" Address  required "),e.RegCity||(t.RegisterErr.RegCity=" City required "),y(t),t};function T(){document.body.style.overflowY="auto",M(null)}Object(c.useEffect)((function(){t&&function(e){i.a.get("https://autowash-api.herokuapp.com/".concat(e)).then((function(e){k(e.data.length+1)}))}(t)}),[t]);return{Values:f,Formerrors:O,Issubmit:x,users:o,ErorrModal:q,url:t,setValues:E,LoginService:function(){var e=U(f).SigninErr;if(0===Object.keys(e).length){var t=null===o||void 0===o?void 0:o.filter((function(e){return e.data.RegEmail===f.LoginEmail&&e.data.RegPassword===f.LoginPassword}));0!==t.length?(localStorage.setItem("UserToken",JSON.stringify(t[0].userToken)),r(Object(d.c)(t)),window.location.replace("/AutoWash")):M(Object(g.jsx)(l.a,{header:"Authentication Error ",message:" The Email or Password May Have Error  ",closeModalFun:T}))}},ErrorCatch:function(){return U(f)},setFormErrors:y,setIssubmit:w,ValidationFun:U,SendData:function(r){var a=U(f)[r];0===Object.keys(a).length&&(function(e){var t=o.find((function(t){return t.data.RegEmail===e?(console.log("Email exist from func hook  "),!0):(console.log("Email doesnot Exist from func hook "),!1)}));return console.log(t),t}(f.RegEmail)?M(Object(g.jsx)(l.a,{header:"Authentication Error",message:" the email has been reigsted before try login ",closeModalFun:T})):i()({baseURL:"https://autowash-api.herokuapp.com/",url:t,method:"post",data:{id:P,data:f,userToken:F+Number(f.RegPhoneNumber?f.RegPhoneNumber:0)+P}}).then((function(t){w(!1),E(e),alert("data sent successfully")})).catch((function(e){M(Object(g.jsx)(l.a,{header:"Authentication Error ",message:e,closeModalFun:T}))})))},handlechange:function(e){E(Object(n.a)(Object(n.a)({},f),{},Object(a.a)({},e.target.name,e.target.value)))}}}},116:function(e,t,r){},117:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var a=r(108),n=r(109),s=r(24),o=r.n(s),i=function(){function e(t,r,n,s){var o,i=this;Object(a.a)(this,e),this.baseURL="https://autowash-api.herokuapp.com/",this.Token=function(){return Math.floor(1514e3*Math.random())+1+Number(i.dataFromUser.RegPhoneNumber?i.dataFromUser.RegPhoneNumber:0)+i.lastId},this.ErrorStateFun=function(){return 0!==Object.keys(i.ErrorObject).length},this.EmailExist=function(e){var t=i.Users.find((function(t){return t.data.RegEmail===e?(console.log("Email exist from func hook"),!0):(console.log("Email doesnot Exist from func hook "),!1)}));return console.log(t),t},this.dataFromUser=t,this.destinationUrl=r,this.ErrorObject=n,this.Users=s,this.lastId=(null===(o=this.Users)||void 0===o?void 0:o.length)+1}return Object(n.a)(e,[{key:"RegisterUserData",value:function(){return this.ErrorStateFun()?{Error:"Error Message ",Message:" Error Found in the data you Entered "}:this.EmailExist(this.dataFromUser.RegEmail)?{Error:"Auth Error",Message:" The Email have already exist , Try Sign in   "}:void o()({baseURL:this.baseURL,data:{id:this.lastId,data:this.dataFromUser,userToken:this.Token()},url:this.destinationUrl,method:"post"}).then((function(e){localStorage.setItem("Token",e.data.userToken),window.location.replace("/AutoWash")}))}},{key:"RegisterUserLetterData",value:function(){return this.ErrorStateFun()?{Error:" Validation Error ",Message:"please enter a valid data "}:(o()({baseURL:this.baseURL,url:this.destinationUrl,method:"post",data:{data:this.dataFromUser}}),{Error:"",Message:" data sent successfuly"})}},{key:"RegisterContactData",value:function(){return this.ErrorStateFun()?{Error:" Validation Error ",Message:"please enter a valid data "}:(o()({baseURL:this.baseURL,url:this.destinationUrl,method:"post",data:{data:this.dataFromUser}}),{Error:"",Message:" Message sent successfuly"})}}]),e}()},182:function(e,t,r){},183:function(e,t,r){},184:function(e,t,r){},185:function(e,t,r){},215:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),s=r(10),o=r(18),i=r(113),c=(r(182),r(39)),u=r(112),l=r(108),d=r(109),m=function(){function e(t,r,a){Object(l.a)(this,e),this.Values=t,this.Users=r,this.ErrorObject=a}return Object(d.a)(e,[{key:"UserLogin",value:function(){var e=this;if(0===Object.keys(this.ErrorObject).length){var t=this.Users.filter((function(t){return t.data.RegEmail===e.Values.LoginEmail&&t.data.RegPassword===e.Values.LoginPassword}));return 0!==t.length?(localStorage.setItem("Token",JSON.stringify(t[0].userToken)),t):{Error:"Error Message",Message:"The Email or password may have Errors "}}}}]),e}(),g=r(17),h=r(42),b=r(15),f=r(104),E=r(1);function j(){var e=Object(a.useState)(),t=Object(s.a)(e,2),r=t[0],n=t[1],l=Object(i.a)({LoginEmail:"",LoginPassword:""},"RegisterData"),d=l.Values,j=l.Formerrors,p=l.ErrorCatch,O=l.handlechange,y=Object(g.c)(h.b),R=Object(g.b)(),v=function(){document.body.style.overflowY="auto",n(null)};return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("div",{className:"login_form   ",children:Object(E.jsxs)("div",{className:"form",children:[[{id:0,name:"LoginEmail",type:"email",placeholder:"Type Your email ",required:!0,inputtype:"textbox"},{id:1,name:"LoginPassword",type:"text",placeholder:"Type your password  ",required:!0,inputtype:"textbox"}].map((function(e){return Object(E.jsx)(u.a,Object(o.a)(Object(o.a)({},e),{},{border:"#202C45",value:d[e.name],onChange:O,errormessage:j.SigninErr[e.name]}),e.id)})),Object(E.jsx)(c.a,{onclick:function(){var e=new m(d,y,p().SigninErr).UserLogin();1===(null===e||void 0===e?void 0:e.length)?(R(Object(b.c)(e)),window.location.replace("/AutoWash")):(null===e||void 0===e?void 0:e.Error)&&(null===e||void 0===e?void 0:e.Message)&&n(Object(E.jsx)(f.a,{header:null===e||void 0===e?void 0:e.Error,message:null===e||void 0===e?void 0:e.Message,closeModal:v}))},child:"Sign-in",font:"white",back:"#202C45",hoverfont:"white",hoverback:"#E81C2E",width:"100%"})]})}),r||Object(E.jsx)(E.Fragment,{})]})}var p=n.a.memo(j),O=(r(183),r(117));function y(){var e="RegisterData",t=Object(i.a)({RegFName:"",RegLName:"",RegEmail:"",RegPassword:"",RegConfirmPass:"",RegPhoneNumber:"",RegBirthday:"",RegNationality:"",RegAdress:"",RegCity:""},e),r=t.Values,n=t.Formerrors,l=t.ErrorCatch,d=t.handlechange,m=Object(a.useState)(),b=Object(s.a)(m,2),j=b[0],p=b[1],y=Object(g.c)(h.b),R=function(){document.body.style.overflowY="auto",p(null)};return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("div",{className:"login_form   ",children:Object(E.jsxs)("div",{className:"form",children:[[{id:0,name:"RegFName",type:"text",placeholder:"Type Your FirstName ",required:!0,inputtype:"textbox"},{id:1,name:"RegLName",type:"text",placeholder:"Type your LastName  ",required:!0,inputtype:"textbox"},{id:2,name:"RegEmail",type:"email",placeholder:"Type Your Email ",required:!0,inputtype:"textbox"},{id:3,name:"RegPassword",type:"password",placeholder:"Type your password  ",required:!0,inputtype:"textbox"},{id:4,name:"RegConfirmPass",type:"password",placeholder:"Password confirm ",required:!0,inputtype:"textbox"},{id:5,name:"RegPhoneNumber",type:"number",placeholder:"Type your PhoneNumber  ",required:!0,inputtype:"textbox"},{id:6,name:"RegBirthday",type:"date",placeholder:"Enter Your  Birhtday",required:!0,inputtype:"textbox"},{id:7,name:"RegNationality",type:"text",placeholder:"Type your Nationality  ",required:!0,inputtype:"textbox"},{id:8,name:"RegAdress",type:"text",placeholder:"Type Your Address ",required:!0,inputtype:"textbox"},{id:9,name:"RegCity",type:"text",placeholder:"your  City  ",required:!0,inputtype:"textbox"}].map((function(e){return Object(E.jsx)(u.a,Object(o.a)(Object(o.a)({},e),{},{border:"#202C45",value:r[e.name],onChange:d,errormessage:n.RegisterErr[e.name]}),e.id)})),Object(E.jsx)(c.a,{onclick:function(){var t=new O.a(r,e,l().RegisterErr,y).RegisterUserData();t&&p(Object(E.jsx)(f.a,{header:t.Error,message:t.Message,closeModal:R}))},child:"Register",font:"white",back:"#202C45",hoverfont:"white",hoverback:"#E81C2E",width:"100%"})]})}),j||Object(E.jsx)(E.Fragment,{})]})}r(184);function R(){var e=Object(a.useState)("login"),t=Object(s.a)(e,2),r=t[0],n=t[1],o=function(e,t){var r;r=e?e.target.id:0,n(t),document.getElementsByClassName("button")[r].classList.add("activelink")};return Object(a.useEffect)((function(e){r&&o(e,r)}),[]),Object(E.jsxs)("div",{className:"log_regs",children:[Object(E.jsxs)("div",{className:"log_reg_buttons",children:[Object(E.jsx)("button",{id:"0",className:"login"===r?"button activelink":"button",onClick:function(e){return o(e,"login")},children:" Signin  "}),Object(E.jsx)("button",{id:"1",className:"register"===r?"button activelink":"button",onClick:function(e){return o(e,"register")},children:" Register "})]}),Object(E.jsx)(E.Fragment,{children:"login"===r?Object(E.jsxs)(E.Fragment,{children:[" ",Object(E.jsx)(p,{})," "]}):Object(E.jsxs)(E.Fragment,{children:[" ",Object(E.jsx)(y,{})," "]})})]})}r(185),t.default=function(e){return Object(E.jsx)("div",{className:"MainloginReg",children:Object(E.jsx)(R,{})})}}}]);
//# sourceMappingURL=8.1731d45b.chunk.js.map