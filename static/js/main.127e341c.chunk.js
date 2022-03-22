(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{29:function(e,t,n){"use strict";n.r(t);var a,i,r=n(2),l=n.n(r),c=n(17),o=n.n(c),d=n(4),s=n(5),j=Object(d.b)(a||(a=Object(s.a)(["\n    *, *::before, *::after {\n        box-sizing: border-box;\n    }\n\n    * {\n        margin: 0;\n    }\n\n    html, body {\n        height: 100%;\n    }\n\n    body {\n        line-height: 1.5;\n        -webkit-font-smoothing: antialiased;\n    }\n\n    input, button, textarea, select {\n        font: inherit;\n    }\n\n    p, h1, h2, h3, h4, h5, h6 {\n        overflow-wrap: break-word;\n    }\n\n    #root, #__next {\n        isolation: isolate;\n    }\n"]))),b=d.c.header(i||(i=Object(s.a)(["\n  h1 {\n    font-style: italic;\n    font-weight: bold;\n    text-align: center;\n    text-shadow: 2px 2px #d5cece;\n  }\n"]))),x=n(1);function m(){return Object(x.jsx)(b,{children:Object(x.jsx)("h1",{children:"CV Generator"})})}var p,h,u,g,O,y,f,C=n(3),w=d.c.input(p||(p=Object(s.a)(["\n  border: 1px solid black;\n  border-radius: 5px;\n"]))),k=function(e){var t=e.data,n=e.required,a=t.text,i=t.name,r=t.type,l=t.description,c=t.example,o=!0===n;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("label",{htmlFor:a,children:l}),Object(x.jsx)(w,{value:a,name:i,type:r,placeholder:c,onChange:function(t){return e.onChange(t)},required:o})]})},v=n(13),S=n(9),N=n(14),D=n(6),E=n.n(D);function L(e){var t=Object(r.useState)([]),n=Object(N.a)(t,2),a=n[0],i=n[1],l=Object(r.useState)(Object(C.a)({},e)),c=Object(N.a)(l,2),o=c[0],d=c[1];return{entry:o,list:a,deleteEntry:function(e){var t=a.filter((function(t){return t.id!==e.id}));i(Object(v.a)(t))},addDetail:function(t){t.preventDefault(),d((function(t){return Object(C.a)(Object(C.a)({},t),{},{details:t.details.concat(Object(C.a)(Object(C.a)({},o.detailInput),{},{id:E()()})),detailInput:Object(C.a)({},e.detailInput)})}))},deleteDetail:function(e){var t=o.details.filter((function(t){return t.id!==e.id}));d(Object(C.a)(Object(C.a)({},o),{},{details:Object(v.a)(t)}))},handleSubmit:function(t){t.preventDefault(),i(Object(C.a)({display:!0},o)),d(Object(C.a)({},e))},handleSubmitExt:function(t){t.preventDefault(),i(a.concat(o)),d(Object(C.a)(Object(C.a)({},e),{},{id:E()()}))},handleChange:function(e){d((function(t){return Object(C.a)(Object(C.a)({},t),{},Object(S.a)({},e.target.name,Object(C.a)(Object(C.a)({},t[e.target.name]),{},{text:e.target.value})))}))}}}var F,T=d.c.section(h||(h=Object(s.a)(["\n  margin: 0 auto;\n  margin-bottom: 2%;\n\n  & > h2 {\n    padding-left: 1.25%;\n  }\n\n  @media (max-width: ",") {\n    margin-bottom: 5%;\n  }\n"])),(function(e){return e.theme.mobile})),P=d.c.article(u||(u=Object(s.a)(['\n  align-items: end;\n  display: grid;\n  grid-template-areas:\n    "email name github"\n    "phone site linkedin";\n  grid-template-columns: fit-content(125px) 1fr fit-content(125px);\n  margin: 0 auto;\n  width: 95%;\n\n  & > .email {\n    grid-area: email;\n  }\n\n  & > .name {\n    font-weight: bold;\n    font-size: 1.5rem;\n    grid-area: name;\n    text-align: center;\n  }\n\n  & > .github {\n    grid-area: github;\n    text-align: end;\n  }\n\n  & > .linkedin {\n    grid-area: linkedin;\n    text-align: end;\n  }\n\n  & > .phone {\n    grid-area: phone;\n  }\n\n  & > .site {\n    grid-area: site;\n    text-align: center;\n    text-transform: lowercase;\n  }\n\n  @media (max-width: ',') {\n    align-items: end;\n    display: grid;\n    grid-template-areas:\n      "email name github"\n      "phone site linkedin";\n    grid-template-columns: fit-content(125px) 1fr fit-content(125px);\n  }\n'])),(function(e){return e.theme.mobile})),I=d.c.article(g||(g=Object(s.a)(['\n  align-items: end;\n  display: grid;\n  grid-template-areas:\n    "location college date"\n    "degree degree degree";\n  grid-template-columns: auto 1fr auto;\n  margin: 0 auto;\n  width: 95%;\n\n  & > .location {\n    grid-area: location;\n  }\n\n  & > .college {\n    font-weight: bold;\n    grid-area: college;\n    text-align: center;\n  }\n\n  & > .date {\n    grid-area: date;\n    text-align: end;\n  }\n\n  & > .degree {\n    grid-area: degree;\n    text-align: center;\n  }\n\n  button {\n    grid-column-end: span 4;\n  }\n\n  @media (max-width: ',') {\n    align-items: end;\n    display: grid;\n    grid-template-areas:\n      "location college date"\n      "degree degree degree";\n    grid-template-columns: auto 1fr auto;\n  }\n'])),(function(e){return e.theme.mobile})),J=d.c.article(O||(O=Object(s.a)(['\n  display: grid;\n  grid-template-areas:\n    "job company date"\n    "list . ."\n    "button . .";\n  grid-template-columns: auto 1fr auto auto;\n  margin: 0 auto;\n  width: 95%;\n\n  & > .job {\n    font-weight: bold;\n    grid-area: job;\n  }\n\n  & > .company {\n    font-weight: bold;\n    grid-area: company;\n    text-align: center;\n  }\n\n  & > .date {\n    font-weight: bold;\n    grid-area: date;\n    text-align: end;\n  }\n\n  & > .list {\n    grid-area: list;\n    grid-column-end: span 4;\n  }\n\n  button {\n    grid-area: button;\n    grid-column-end: span 4;\n  }\n\n  @media (max-width: ',') {\n    display: grid;\n    grid-template-areas:\n      "job company date"\n      "list . ."\n      "button . .";\n    grid-template-columns: auto 1fr auto auto;\n  }\n'])),(function(e){return e.theme.mobile})),M=d.c.article(y||(y=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 2%;\n  margin: 0 auto;\n  width: 95%;\n\n  & > .title {\n    font-weight: bold;\n  }\n\n  & > .link {\n    font-style: italic;\n    line-height: 1;\n    text-transform: lowercase;\n  }\n"]))),z=d.c.article(f||(f=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 0 auto;\n  width: 95%;\n"])));function G(e){var t=e.list;return!0===t.display&&Object(x.jsxs)(P,{children:[Object(x.jsx)("p",{className:"email",children:t.email.text}),Object(x.jsx)("p",{className:"phone",children:t.phone.text}),Object(x.jsx)("p",{className:"name",children:t.name.text}),Object(x.jsx)("p",{className:"site",children:t.website.text}),Object(x.jsxs)("p",{className:"github",children:["GitHub: ",t.github.text]}),Object(x.jsxs)("p",{className:"linkedin",children:["LinkedIn: ",t.linkedin.text]})]})}var q,A=d.c.form(F||(F=Object(s.a)(["\n  background-color: #e0e0e0;\n\n  @media (max-width: ",") {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n\n    & > label {\n      align-self: normal;\n      line-height: 1.75;\n      padding-left: 5%;\n    }\n\n    & > input {\n      width: 90%;\n    }\n  }\n\n  @media (min-width: ",") {\n    display: flex;\n    flex-direction: column;\n  }\n"])),(function(e){return e.theme.mobile}),(function(e){return e.theme.mobile})),H=d.c.button(q||(q=Object(s.a)(["\n  background-color: ",";\n  border: none;\n  border-radius: ",";\n  color: white;\n  cursor: pointer;\n  font-weight: bold;\n  margin-top: ",";\n  width: ",";\n\n  &:active {\n    opacity: 0.9;\n    transform: scale(0.98);\n  }\n"])),(function(e){return e.color||"#595959"}),(function(e){return e.radius||"0px"}),(function(e){return e.top||"10px"}),(function(e){return e.size||"100%"}));function R(e){var t=e.data,n=L(Object(C.a)({},t));return Object(x.jsxs)(T,{children:[Object(x.jsx)("h2",{children:"Contact"}),Object(x.jsx)("hr",{}),Object(x.jsxs)(A,{onSubmit:n.handleSubmit,children:[Object(x.jsx)(k,{data:n.entry.email,onChange:n.handleChange,required:!0}),Object(x.jsx)(k,{data:n.entry.phone,onChange:n.handleChange,required:!0}),Object(x.jsx)(k,{data:n.entry.name,onChange:n.handleChange,required:!0}),Object(x.jsx)(k,{data:n.entry.website,onChange:n.handleChange}),Object(x.jsx)(k,{data:n.entry.github,onChange:n.handleChange}),Object(x.jsx)(k,{data:n.entry.linkedin,onChange:n.handleChange}),Object(x.jsx)(H,{type:"submit",children:"Submit"})]}),Object(x.jsx)(G,{list:n.list})]})}var _=function(e){var t=e.slice(0,4).toString(),n=e.slice(5,7).toString();return"".concat(["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"][[n]-1]," ").concat(t)};function B(e){var t=e.list,n=e.deleteEntry;return t.length>0&&t.map((function(e){return Object(x.jsxs)(I,{children:[Object(x.jsx)("p",{className:"location",children:e.location.text}),Object(x.jsx)("p",{className:"college",children:e.college.text}),Object(x.jsxs)("p",{className:"date",children:[_(e.dateFrom.text)," - ",_(e.dateTo.text)]}),Object(x.jsx)("p",{className:"degree",children:e.degree.text}),Object(x.jsx)(H,{color:"red",type:"button",onClick:function(){return n(e)},children:"Delete"})]},e.id)}))}function U(e){var t=e.data,n=L(Object(C.a)({},t));return Object(x.jsxs)(T,{children:[Object(x.jsx)("h2",{children:"Education"}),Object(x.jsx)("hr",{}),Object(x.jsxs)(A,{onSubmit:n.handleSubmitExt,children:[Object(x.jsx)(k,{data:n.entry.location,onChange:n.handleChange}),Object(x.jsx)(k,{data:n.entry.college,onChange:n.handleChange}),Object(x.jsx)(k,{data:n.entry.dateFrom,onChange:n.handleChange}),Object(x.jsx)(k,{data:n.entry.dateTo,onChange:n.handleChange}),Object(x.jsx)(k,{data:n.entry.degree,onChange:n.handleChange}),Object(x.jsx)(H,{type:"submit",children:"Submit"})]}),Object(x.jsx)(B,{list:n.list,deleteEntry:n.deleteEntry})]})}function W(e){var t=e.list,n=e.deleteEntry;return t.length>0&&t.map((function(e){return Object(x.jsxs)(J,{children:[Object(x.jsx)("p",{className:"job",children:e.job.text}),Object(x.jsx)("p",{className:"company",children:e.company.text}),Object(x.jsxs)("p",{className:"date",children:[_(e.dateFrom.text)," "," - ",_(e.dateTo.text)]}),Object(x.jsx)("ul",{className:"list",children:e.details.length>0&&e.details.map((function(e){return Object(x.jsx)("li",{children:e.text},e.id)}))}),Object(x.jsx)(H,{color:"red",type:"button",onClick:function(){return n(e)},children:"Delete"})]},e.id)}))}function X(e){var t=e.entry,n=e.deleteDetail;return Object(x.jsx)("ul",{children:t.details.length>0&&t.details.map((function(e){return Object(x.jsxs)("li",{children:[e.text," ",Object(x.jsx)(H,{top:"0px",color:"red",type:"button",onClick:function(){return n(e)},children:"Delete"})]},e.id)}))})}function Q(e){var t=e.data,n=L(Object(C.a)({},t));return Object(x.jsxs)(T,{children:[Object(x.jsx)("h2",{children:"Employment"}),Object(x.jsx)("hr",{}),Object(x.jsxs)(A,{onSubmit:n.handleSubmitExt,children:[Object(x.jsx)(k,{data:n.entry.job,onChange:n.handleChange}),Object(x.jsx)(k,{data:n.entry.company,onChange:n.handleChange}),Object(x.jsx)(k,{data:n.entry.dateFrom,onChange:n.handleChange}),Object(x.jsx)(k,{data:n.entry.dateTo,onChange:n.handleChange}),Object(x.jsx)(k,{data:n.entry.detailInput,onChange:n.handleChange})," ",Object(x.jsx)(H,{top:"0px",color:"#2822bf",size:"90%",type:"button",radius:"5px",onClick:n.addDetail,children:"Add"}),Object(x.jsx)(X,{entry:n.entry,deleteDetail:n.deleteDetail}),Object(x.jsx)(H,{type:"submit",children:"Submit"})]}),Object(x.jsx)(W,{list:n.list,deleteEntry:n.deleteEntry})]})}function V(e){var t=e.list,n=e.deleteEntry;return t.length>0&&t.map((function(e){return Object(x.jsxs)(M,{children:[Object(x.jsx)("p",{className:"title",children:e.pName.text}),Object(x.jsx)("p",{className:"link",children:e.link.text}),Object(x.jsx)("ul",{className:"list",children:e.details.length>0&&e.details.map((function(e){return Object(x.jsx)("li",{children:e.text},e.id)}))}),Object(x.jsx)(H,{color:"red",type:"button",onClick:function(){return n(e)},children:"Delete"})]},e.id)}))}function Y(e){var t=e.data,n=L(Object(C.a)({},t));return Object(x.jsxs)(T,{children:[Object(x.jsx)("h2",{children:"Projects"}),Object(x.jsx)("hr",{}),Object(x.jsxs)(A,{onSubmit:n.handleSubmitExt,children:[Object(x.jsx)(k,{data:n.entry.pName,onChange:n.handleChange,required:!0}),Object(x.jsx)(k,{data:n.entry.link,onChange:n.handleChange}),Object(x.jsx)(k,{data:n.entry.detailInput,onChange:n.handleChange}),Object(x.jsx)(H,{top:"0px",color:"#2822bf",type:"button",size:"90%",radius:"5px",onClick:n.addDetail,children:"Add"}),Object(x.jsx)(X,{entry:n.entry,deleteDetail:n.deleteDetail}),Object(x.jsx)(H,{type:"submit",children:"Submit"})]}),Object(x.jsx)(V,{list:n.list,deleteEntry:n.deleteEntry})]})}function Z(e){var t=e.list;return!0===t.display&&Object(x.jsxs)(z,{children:[Object(x.jsxs)("p",{children:["Languages: ",t.languages.text]}),Object(x.jsxs)("p",{children:["Frameworks and Libraries: ",t.frameLibs.text]}),Object(x.jsxs)("p",{children:["Tools: ",t.tools.text]})]})}function K(e){var t=e.data,n=L(Object(C.a)({},t));return Object(x.jsxs)(T,{children:[Object(x.jsx)("h2",{children:"Technical Skills"}),Object(x.jsx)("hr",{}),Object(x.jsxs)(A,{onSubmit:n.handleSubmit,children:[Object(x.jsx)(k,{data:n.entry.languages,onChange:n.handleChange}),Object(x.jsx)(k,{data:n.entry.frameLibs,onChange:n.handleChange}),Object(x.jsx)(k,{data:n.entry.tools,onChange:n.handleChange}),Object(x.jsx)(H,{type:"submit",children:"Submit"})]}),Object(x.jsx)(Z,{list:n.list})]})}var $,ee=n(21),te=n(22),ne=d.c.footer($||($=Object(s.a)(["\n  background-color: #e0e0e0;\n  border-top: 1px solid black;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n\n  a {\n    display: contents;\n    color: black;\n    font-weight: bold;\n    text-decoration: none;\n  }\n\n  p {\n    font-size: 10px;\n  }\n\n  span {\n    display: flex;\n    padding-top: 10px;\n    margin: 0 auto;\n    justify-content: center;\n    padding-bottom: 5px;\n    width: 25%;\n    gap: 5px;\n  }\n\n  span > .child {\n    margin-right: 5px;\n  }\n\n  svg {\n    align-self: center;\n    font-size: 35px;\n  }\n"])));function ae(){return Object(x.jsxs)(ne,{children:[Object(x.jsxs)("span",{children:[Object(x.jsx)("a",{title:"Github Profile",target:"_blank",href:"https://github.com/jayxp",rel:"noreferrer noopener",children:Object(x.jsx)(ee.a,{})}),Object(x.jsx)("a",{title:"Send Email",href:"mailto:pattenjaym@gmail.com",children:Object(x.jsx)(te.a,{})})]}),Object(x.jsxs)("p",{children:["Made with \u2665 by"," ",Object(x.jsx)("a",{target:"_blank",href:"https://github.com/jayxp",rel:"noreferrer noopener",children:"Jayxp"})]})]})}var ie,re={email:{text:"firstlast@mail.com",name:"email",type:"email",description:"Email Address",example:"mail@example.com"},phone:{text:"1234567890",name:"phone",type:"tel",description:"Phone Number",example:"(999) 999-9999"},name:{text:"First Last",name:"name",type:"text",description:"Full Name",example:"John Doe"},website:{text:"https://example.com",name:"website",type:"url",description:"Personal Website",example:"https://example.com"},github:{text:"example",name:"github",type:"text",description:"GitHub Handle",example:"username"},linkedin:{text:"Example",name:"linkedin",type:"text",description:"LinkedIn Handle",example:"username"}},le={id:E()(),location:{text:"City, State",name:"location",type:"text",description:"Location",example:"City, State"},college:{text:"University of Example",name:"college",type:"text",description:"College",example:"University of X"},dateFrom:{text:"2014-08",name:"dateFrom",type:"month",description:"Date From",example:"2014-08"},dateTo:{text:"2018-05",name:"dateTo",type:"month",description:"Date To",example:"2018-05"},degree:{text:"BS in Example Systems",name:"degree",type:"text",description:"Degree Program",example:"BS in X"}},ce={id:E()(),job:{text:"Example Analyst",name:"job",type:"text",description:"Position",example:"Software Developer"},company:{text:"Example Inc.",name:"company",type:"text",description:"Company Name",example:"Google"},dateFrom:{text:"2018-06",name:"dateFrom",type:"month",description:"Date From",example:"2018-06"},dateTo:{text:"2020-08",name:"dateTo",type:"month",description:"Date To",example:"2020-08"},details:[],detailInput:{text:"",name:"detailInput",type:"text",description:"Details",example:"Regular standups, sprints, ..."}},oe={id:E()(),pName:{text:"Example Project",name:"pName",type:"text",description:"Project Name",example:"Example Project"},link:{text:"https://github.com/example/example-project",name:"link",type:"url",description:"Project URL",example:"https://github.com/user/link"},details:[],detailInput:{text:"",name:"detailInput",type:"text",description:"Details",example:"XYZ"}},de={languages:{text:"HTML, CSS, JavaScript, SQL, Python",name:"languages",type:"text",description:"Languages",example:"HTML, CSS, JavaScript, SQL, Python"},frameLibs:{text:"React, React-Native, Node.js",name:"frameLibs",type:"text",description:"Frameworks & Libraries",example:"React, React-Native, Node.js"},tools:{text:"Git, Linux, Webpack, NPM, Jira",name:"tools",type:"text",description:"Tools",example:"Git, Linux, Webpack, NPM, Jira"}},se=d.c.main(ie||(ie=Object(s.a)(["\n  @media (min-width: ",") {\n    margin: 0 auto;\n    width: 80%;\n    border: none;\n    border-radius: 15px;\n    box-shadow: rgb(0 0 0 / 35%) 0px 6px 25px;\n    margin-bottom: 1rem;\n  }\n"])),(function(e){return e.theme.mobile})),je={mobile:"768px",tablet:"1024px"};function be(){return Object(x.jsxs)(d.a,{theme:je,children:[Object(x.jsx)(j,{}),Object(x.jsx)(m,{}),Object(x.jsxs)(se,{children:[Object(x.jsx)(R,{data:re}),Object(x.jsx)(U,{data:le}),Object(x.jsx)(Q,{data:ce}),Object(x.jsx)(Y,{data:oe}),Object(x.jsx)(K,{data:de})]}),Object(x.jsx)(ae,{})]})}o.a.render(Object(x.jsx)(l.a.StrictMode,{children:Object(x.jsx)(be,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.127e341c.chunk.js.map