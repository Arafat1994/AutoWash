(this.webpackJsonpautowash=this.webpackJsonpautowash||[]).push([[11],{103:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var a=r(0),n=r(39),s=(r(107),r(1));function o(e){var t=e.header,r=e.message,o=e.closeModal;return Object(a.useEffect)((function(){document.body.style.overflowY="hidden"}),[]),Object(s.jsx)("div",{className:"modalContainer",children:Object(s.jsx)("div",{className:"modalMessage",children:Object(s.jsxs)("div",{className:"modalElement",children:[Object(s.jsx)("p",{className:"header",children:t}),Object(s.jsx)("p",{className:"message",children:r}),Object(s.jsx)("div",{className:"buttons",children:Object(s.jsx)(n.a,{onclick:o,child:"Okay",font:"white",width:"100px",back:"#E81C2E",hoverfont:"#E81C2E",hoverback:"white"})})]})})})}},107:function(e,t,r){},108:function(e,t,r){"use strict";r.d(t,"a",(function(){return b}));var a=r(43),n=r(18),s=r(10),o=r(24),i=r.n(o),c=r(0),l=r(17),u=r(103),d=r(15),m=r(42),h=r(1);function b(e,t){var r=Object(l.b)(),o=Object(l.c)(m.b),b=Object(c.useState)(e),f=Object(s.a)(b,2),g=f[0],E=f[1],j=Object(c.useState)({ContactErr:{},NewsErr:{},SigninErr:{},RegisterErr:{},WashRequestErr:{}}),R=Object(s.a)(j,2),O=R[0],p=R[1],v=Object(c.useState)(!1),w=Object(s.a)(v,2),N=w[0],x=w[1],y=Object(c.useState)(),C=Object(s.a)(y,2),F=C[0],q=C[1],k=Math.floor(1514e3*Math.random())+1,S=Object(c.useState)(""),P=Object(s.a)(S,2),U=P[0],L=P[1],M=function(e){var t={ContactErr:{},NewsErr:{},SigninErr:{},RegisterErr:{},WashRequestErr:{}},r=new RegExp("^[A-zA-Z0-9_ ]{3,16}$"),a=new RegExp("^[A-zA-Z0-9_ ]{10,40}$"),n=/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,s=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})");return e.Contactfullname?r.test(e.Contactfullname)||(t.ContactErr.Contactfullname="fullname must have at least 3 chars and max 16 chars  "):t.ContactErr.Contactfullname=" Fullname required ",e.ContactEmail?n.test(e.ContactEmail)||(t.ContactErr.ContactEmail="Please enter A valid email "):t.ContactErr.ContactEmail=" Email required ",e.ContactSubject?a.test(e.ContactSubject)||(t.ContactErr.ContactSubject=" subject must be at least 10 chars and maximum 40  chars "):t.ContactErr.ContactSubject=" Subject is required ",e.ContactMessage||(t.ContactErr.ContactMessage=" Message  is required "),e.NewsFullname?r.test(e.NewsFullname)||(t.NewsErr.NewsFullname="fullname must have at least 3 chars and max 16 chars  "):t.NewsErr.NewsFullname=" Fullname required ",e.NewsEmail?n.test(e.NewsEmail)||(t.NewsErr.NewsEmail=" please Enter A valid Email "):t.NewsErr.NewsEmail="Email Required ",e.LoginEmail?n.test(e.LoginEmail)||(t.SigninErr.LoginEmail="Please enter A valid email "):t.SigninErr.LoginEmail=" Email Required ",e.LoginPassword?s.test(e.LoginPassword)||(t.SigninErr.LoginPassword="Please Enter a valid Password  "):t.SigninErr.LoginPassword=" Password Required ",e.RegFName||(t.RegisterErr.RegFName=" Fullname required "),e.RegLName||(t.RegisterErr.RegLName=" Lastname required "),e.RegEmail?n.test(e.RegEmail)||(t.RegisterErr.RegEmail=" Enter a valid Email "):t.RegisterErr.RegEmail=" Email required ",e.RegPassword?s.test(e.RegPassword)?e.RegPassword!==e.RegConfirmPass&&(t.RegisterErr.RegConfirmPass="Passwords not matched "):t.RegisterErr.RegPassword=" Enter a valid password ":t.RegisterErr.RegPassword="Password required ",e.RegConfirmPass||(t.RegisterErr.RegConfirmPass=" Confirm Pass required "),e.RegPhoneNumber||(t.RegisterErr.RegPhoneNumber=" Phone Number required "),e.RegBirthday||(t.RegisterErr.RegBirthday=" Birthday required "),e.RegNationality||(t.RegisterErr.RegNationality=" Nationality required "),e.RegAdress||(t.RegisterErr.RegAdress=" Address  required "),e.RegCity||(t.RegisterErr.RegCity=" City required "),e.ReqFullname||(t.WashRequestErr.ReqFullname="  Fullname required   "),e.ReqEmail?n.test(e.ReqEmail)||(t.WashRequestErr.ReqEmail=" Enter a valid Email "):t.WashRequestErr.ReqEmail="Email required ",e.ReqDescription||(t.WashRequestErr.ReqDescription="  Description required "),p(t),t};function A(){document.body.style.overflowY="auto",L(null)}Object(c.useEffect)((function(){t&&function(e){i.a.get("https://autowash-api.herokuapp.com/".concat(e)).then((function(e){q(e.data.length+1)}))}(t)}),[t]);return{Values:g,Formerrors:O,Issubmit:N,users:o,ErorrModal:U,url:t,setValues:E,LoginService:function(){var e=M(g).SigninErr;if(0===Object.keys(e).length){var t=null===o||void 0===o?void 0:o.filter((function(e){return e.data.RegEmail===g.LoginEmail&&e.data.RegPassword===g.LoginPassword}));0!==t.length?(localStorage.setItem("UserToken",JSON.stringify(t[0].userToken)),r(Object(d.c)(t)),window.location.replace("/AutoWash")):L(Object(h.jsx)(u.a,{header:"Authentication Error ",message:" The Email or Password May Have Error  ",closeModalFun:A}))}},ErrorCatch:function(){return M(g)},setFormErrors:p,setIssubmit:x,ValidationFun:M,SendData:function(r){var a=M(g)[r];0===Object.keys(a).length&&(function(e){var t=o.find((function(t){return t.data.RegEmail===e?(console.log("Email exist from func hook  "),!0):(console.log("Email doesnot Exist from func hook "),!1)}));return console.log(t),t}(g.RegEmail)?L(Object(h.jsx)(u.a,{header:"Authentication Error",message:" the email has been reigsted before try login ",closeModalFun:A})):i()({baseURL:"https://autowash-api.herokuapp.com/",url:t,method:"post",data:{id:F,data:g,userToken:k+Number(g.RegPhoneNumber?g.RegPhoneNumber:0)+F}}).then((function(t){x(!1),E(e),alert("data sent successfully")})).catch((function(e){L(Object(h.jsx)(u.a,{header:"Authentication Error ",message:e,closeModalFun:A}))})))},handlechange:function(e){E(Object(n.a)(Object(n.a)({},g),{},Object(a.a)({},e.target.name,e.target.value)))}}}},109:function(e,t,r){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}r.d(t,"a",(function(){return a}))},110:function(e,t,r){"use strict";function a(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function n(e,t,r){return t&&a(e.prototype,t),r&&a(e,r),e}r.d(t,"a",(function(){return n}))},111:function(e,t,r){"use strict";r.d(t,"a",(function(){return E}));var a=r(18),n=r(10);function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o,i,c,l=r(40),u=(r(113),r(0)),d=r(41),m=r(1),h=["id","errormessage","inputtype","onChnage"],b=Object(d.a)(o||(o=Object(l.a)(["\n border : "," ;\n color : ","  ; \n ::placeholder  { color:"," ;  }\n"])),(function(e){return e.border?"1px solid ".concat(e.border):"1px solid white"}),(function(e){return e.border?"".concat(e.border):"white"}),(function(e){return e.border?"".concat(e.border):"white"})),f=d.b.input.attrs((function(e){return{"data-focused":e.focused}}))(i||(i=Object(l.a)(["\n    "," ;\n    height:40px;\n "])),b),g=d.b.textarea.attrs((function(e){return{"data-focused":e.focused}}))(c||(c=Object(l.a)(["\n   "," ;\n   height:150px ; \n "])),b);function E(e){e.id;var t=e.errormessage,r=e.inputtype,o=e.onChnage,i=s(e,h),c=Object(u.useState)(!1),l=Object(n.a)(c,2),d=l[0],b=l[1],E=function(e){b(!0)};return Object(m.jsxs)("div",{className:"Formdiv",children:["textbox"===r?Object(m.jsx)(f,Object(a.a)(Object(a.a)({className:"forminput",onChange:o,onFocus:E},i),{},{border:e.border,focused:d.toString()})):Object(m.jsx)(g,Object(a.a)(Object(a.a)({className:"forminput",onChange:o,onFocus:E},i),{},{border:e.border,focused:d.toString()})),Object(m.jsxs)("span",{className:"errormessage",children:[" ",t," "]})]})}},113:function(e,t,r){},114:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var a=r(109),n=r(110),s=r(24),o=r.n(s),i=function(){function e(t,r,n,s){var o,i=this;Object(a.a)(this,e),this.baseURL="https://autowash-api.herokuapp.com/",this.Token=function(){return Math.floor(1514e3*Math.random())+1+Number(i.dataFromUser.RegPhoneNumber?i.dataFromUser.RegPhoneNumber:0)+i.lastId},this.ErrorStateFun=function(){return 0!==Object.keys(i.ErrorObject).length},this.EmailExist=function(e){var t=i.Users.find((function(t){return t.data.RegEmail===e?(console.log("Email exist from func hook"),!0):(console.log("Email doesnot Exist from func hook "),!1)}));return console.log(t),t},this.dataFromUser=t,this.destinationUrl=r,this.ErrorObject=n,this.Users=s,this.lastId=(null===(o=this.Users)||void 0===o?void 0:o.length)+1}return Object(n.a)(e,[{key:"RegisterUserData",value:function(){return this.ErrorStateFun()?{Error:"Error Message ",Message:" Error Found in the data you Entered "}:this.EmailExist(this.dataFromUser.RegEmail)?{Error:"Auth Error",Message:" The Email have already exist , Try Sign in   "}:void o()({baseURL:this.baseURL,data:{id:this.lastId,data:this.dataFromUser,userToken:this.Token()},url:this.destinationUrl,method:"post"}).then((function(e){localStorage.setItem("Token",e.data.userToken),window.location.replace("/AutoWash")}))}},{key:"RegisterUserLetterData",value:function(){return this.ErrorStateFun()?{Error:" Validation Error ",Message:"please enter a valid data "}:(o()({baseURL:this.baseURL,url:this.destinationUrl,method:"post",data:{data:this.dataFromUser}}),{Error:"",Message:" data sent successfuly"})}},{key:"RegisterContactData",value:function(){return this.ErrorStateFun()?{Error:" Validation Error ",Message:"please enter a valid data "}:(o()({baseURL:this.baseURL,url:this.destinationUrl,method:"post",data:{data:this.dataFromUser}}),{Error:"",Message:" Message sent successfuly"})}},{key:"RegisterCarWashRequest",value:function(){return console.log(this.destinationUrl),this.ErrorStateFun()?{Error:" Validtion Error ",Message:" Please enter a valid data "}:(o()({baseURL:this.baseURL,url:this.destinationUrl,method:"post",data:{data:this.dataFromUser}}),{Error:"",Message:" Request Send Successfully  "})}}]),e}()},116:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var a,n=r(40),s=(r(117),r(0),r(16)),o=r(41),i=r(1),c=o.b.div(a||(a=Object(n.a)(["\n    top:","\n    \n    "])),(function(e){return e.top}));function l(e){var t=e.socialmediaLinks,r=null===t||void 0===t?void 0:t.map((function(e){var t=e.id,r=e.icon,a=e.link;return Object(i.jsx)("a",{href:a,className:"socialmedialink",children:Object(i.jsx)(s.a,{className:"icon icon2",icon:["fab",r]})},t)}));return Object(i.jsx)(c,{className:"socialmediadiv",top:e.top,children:r})}},117:function(e,t,r){},179:function(e,t,r){},194:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return E}));var a=r(18),n=r(10),s=(r(179),r(0)),o=r(16),i=r(116),c=r(111),l=r(39),u=r(108),d=r(17),m=r(26),h=r(114),b=r(103),f=r(1),g=Object(m.a)((function(e){return e.datareducer.data}),(function(e){return e}));function E(e){var t={NewsFullname:"",NewsEmail:""},r="newsletterRequests",m=Object(u.a)(t,r),E=m.Values,j=m.Formerrors,R=m.ErrorCatch,O=m.handlechange,p=m.setValues,v=Object(d.c)(g),w=v.FooterData,N=v.SocialmediaData,x=Object(s.useState)(null),y=Object(n.a)(x,2),C=y[0],F=y[1],q=Object(s.useState)(),k=Object(n.a)(q,2),S=k[0],P=k[1],U=function(){document.body.style.overflowY="auto",P(null)};return Object(s.useLayoutEffect)((function(){w&&N&&F(null===w||void 0===w?void 0:w.map((function(e){var t=e.id,r=e.title,a=e.elements;return Object(f.jsxs)("div",{className:"footerelement",children:[Object(f.jsxs)("p",{className:"headerofelement",children:[" ",r,"   "]}),a.map((function(e){var t=e.id,r=e.link,a=e.icon,n=e.iconClassName,s=e.spanClassName,i=e.spantext;return Object(f.jsxs)("a",{href:r,className:"linkelement",children:[Object(f.jsx)(o.a,{icon:a,className:n}),Object(f.jsxs)("span",{className:s,children:[" ",i," "]})]},t)})),"Get In Touch"===e.title?Object(f.jsx)(i.a,{socialmediaLinks:N,top:"0"}):Object(f.jsx)(f.Fragment,{children:" "})]},t)})))}),[w,N]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("div",{className:"footercontainer",children:[C,Object(f.jsxs)("div",{className:"footerelement",children:[Object(f.jsx)("p",{className:"headerofelement",children:" Newsletter  "}),[{id:0,name:"NewsFullname",type:"text",placeholder:"FullName",required:!0,inputtype:"textbox"},{id:1,name:"NewsEmail",type:"email",placeholder:" Email ",required:!0,inputtype:"textbox"}].map((function(e){return Object(f.jsx)(c.a,Object(a.a)(Object(a.a)({},e),{},{value:E[e.name],onChange:O,errormessage:j.NewsErr[e.name]}),e.id)})),Object(f.jsx)(l.a,{onclick:function(){var e=new h.a(E,r,R().NewsErr,null).RegisterUserLetterData();e&&P(Object(f.jsx)(b.a,{header:e.Error,message:e.Message,closeModal:U})),p(t)},child:"Submit",font:"#202C45",back:"white",hoverfont:"white",hoverback:"#E81C2E",width:"100%"})]})]}),S||Object(f.jsx)(f.Fragment,{})]})}}}]);
//# sourceMappingURL=11.b00a49cb.chunk.js.map