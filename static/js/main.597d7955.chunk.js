(this.webpackJsonpcovidapp=this.webpackJsonpcovidapp||[]).push([[0],{101:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a.n(c),n=a(15),l=a.n(n),i=(a(63),a(64),a(114)),r=a(110),o=a(104),d=a(9),j=a(11),b=a(115),u=a(112),m=a(57),O=a(111),g=a(108),h=a(109),p=a(30),f=a.n(p),v=a(13),x=a(103),S=a(105),N=a(106),y=a(113),_=a(107),I=a(1);var k=function(e){var t=Object(c.useState)({fee:"All",availbility:"All",age:"All",vaccine:"All",block_name:"All"}),a=Object(j.a)(t,2),s=a[0],n=a[1],l=Object(c.useState)(),i=Object(j.a)(l,2),r=i[0],b=i[1],g=Object(c.useState)(),h=Object(j.a)(g,2),p=h[0],f=h[1],k=Object(c.useState)(!1),w=Object(j.a)(k,2),C=w[0],A=w[1],L=Object(c.useState)({center:""}),D=Object(j.a)(L,2),T=D[0],J=D[1];Object(c.useEffect)((function(){null!==localStorage.getItem("filter")&&""!==localStorage.getItem("filter")&&void 0!==localStorage.getItem("filter")&&n(JSON.parse(localStorage.getItem("filter")))}),[]),Object(c.useEffect)((function(){F(),Object.keys(E).find((function(e){return"All"!==s[e]})),localStorage.setItem("filter",JSON.stringify(s))}),[s]),Object(c.useEffect)((function(){console.log(r)}),[r]),Object(c.useEffect)((function(){console.log(T)}),[T]),Object(c.useEffect)((function(){F()}),[e]);var B=[],E={fee:[],availbility:["Available","Book"],age:[],vaccine:[],block_name:[]};function F(){console.log("render");var t,a,c,n=e.centerList.centers;("All"!==s.fee&&(n=n.filter((function(e){return e.fee_type.toLowerCase().includes(s.fee.toLowerCase())}))),"All"!==s.block_name&&(n=n.filter((function(e){return e.block_name==s.block_name}))),"All"!==s.age)&&(console.log(s.age),n=n.filter((function(e){return 0!==(t=e.sessions.filter((function(e){return e.min_age_limit===s.age}))).length&&(e.sessions=t,!0)})),console.log(t));"All"!==s.vaccine&&(n=n.filter((function(e){return 0!==(a=e.sessions.filter((function(e){return e.vaccine.toLowerCase().includes(s.vaccine.toLowerCase())}))).length&&(e.sessions=a,!0)})));"All"!==s.availbility&&(n=n.filter((function(e){return 0!==(c=e.sessions.filter((function(e){return"Available"===s.availbility?e.available_capacity>0:0==e.available_capacity}))).length&&(e.sessions=c,!0)})));"All"==s.fee&&"All"==s.age&&"All"==s.vaccine&&"All"==s.availbility&&"All"==s.block_name?b():(b({centers:n}),localStorage.setItem("filter",JSON.stringify(s))),console.log(n)}function Y(e){return new Date(e.split("-").reverse().join("/")).toLocaleString(void 0,{day:"numeric",month:"short",year:"numeric"})}function z(e,t){"block_name"==e.split(" ")[0]&&(f(t),console.log(e+" = "+t)),n(Object(d.a)(Object(d.a)({},s),{},Object(v.a)({},e,t)))}function R(){return Object.keys(E).map((function(e){return"block_name"!==e?Object(I.jsxs)("div",{className:"mr-2 my-2",children:[Object(I.jsxs)(x.a,{children:[Object(I.jsx)(o.a,{size:"sm",variant:"outline-secondary",className:"All"==s[e]?"active":"inactive",onClick:function(){return z(e,"All")},children:"All"}),E[e].map((function(t){return Object(I.jsx)(o.a,{size:"sm",variant:"outline-secondary",className:s[e]==t?"active":"inactive",onClick:function(){return z(e,t)},children:t},e+"_"+t)}))]}),Object(I.jsx)("small",{className:"text-muted form-text",children:e})]},e):Object(I.jsxs)(u.a.Group,{controlId:"exampleForm.ControlSelect1",className:"mr-2 my-2",children:[Object(I.jsxs)(u.a.Control,{as:"select",value:p,onChange:function(e){return z("block_name",e.target.value)},children:[Object(I.jsx)("option",{children:"All"}),E[e].map((function(e){return e?Object(I.jsx)("option",{children:e}):Object(I.jsx)("option",{children:"No Block"})}))]}),Object(I.jsx)("small",{className:"text-muted form-text",children:"Block"})]},e)}))}function G(){return console.log(T),T.center?Object(I.jsxs)(O.a,{show:C,onHide:function(){return A(!1)},centered:!0,children:[Object(I.jsx)(O.a.Header,{closeButton:!0,className:"py-3",children:Object(I.jsx)("h5",{className:"my-auto",children:"Center Details"})}),Object(I.jsxs)(O.a.Body,{children:[Object(I.jsx)("div",{children:Object(I.jsx)(S.a,{children:Object(I.jsxs)(m.a,{md:6,sm:12,className:"mb-4",children:[Object(I.jsxs)("span",{children:[Object(I.jsxs)("span",{className:"centerTitle",children:[T.center.name," "]}),Object(I.jsx)("br",{}),Object(I.jsx)("span",{className:"centerSubTitle",children:T.center.block_name+", "+T.center.district_name+", "+T.center.state_name+","+T.center.pincode})]}),Object(I.jsx)("br",{}),Object(I.jsx)("a",{href:"https://www.google.co.in/maps/search/"+T.center.name,target:"blank",className:"btn btn-outline-secondary searchBtn",children:"Get Direction"})]})})}),Object(I.jsx)("hr",{}),T.center.sessions.map((function(e){return Object(I.jsxs)("div",{className:"border border-top-0 border-left-0 border-right-0 py-2",children:[Object(I.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(I.jsxs)("span",{children:[Object(I.jsx)("h5",{children:"Slot Details"}),Object(I.jsx)("h5",{children:Y(e.date)})]}),Object(I.jsxs)("span",{className:"modelList",children:[Object(I.jsx)("span",{children:e.vaccine}),Object(I.jsx)("br",{}),0!==e.available_capacity?Object(I.jsx)(N.a,{pill:!0,variant:"info",className:"border",children:"Available : "+e.available_capacity}):Object(I.jsx)(N.a,{pill:!0,variant:"danger",className:"border",children:"Booked"}),Object(I.jsx)("br",{}),Object(I.jsx)("span",{children:"Age "+e.min_age_limit+"+"})]})]}),Object(I.jsxs)(S.a,{children:[Object(I.jsxs)(m.a,{md:6,sm:12,className:"mb-4",children:[Object(I.jsx)("h6",{children:"Time"}),Object(I.jsx)(y.a,{className:"modeltimeSlotList",children:e.slots.map((function(e){return Object(I.jsx)(y.a.Item,{children:e})}))})]}),Object(I.jsxs)(m.a,{md:6,sm:12,children:[Object(I.jsx)("h6",{children:"Vaccin "}),Object(I.jsxs)(y.a,{className:"list-group-numbered",children:[Object(I.jsxs)(y.a.Item,{className:"d-flex justify-content-between align-items-center",children:[Object(I.jsx)("span",{children:"1st Dose :"}),Object(I.jsx)("span",{children:e.available_capacity_dose1})]}),Object(I.jsxs)(y.a.Item,{className:"d-flex justify-content-between align-items-center",children:[Object(I.jsx)("span",{children:"2nd Dose :"}),Object(I.jsx)("span",{children:e.available_capacity_dose2})]})]})]})]})]})}))]})]}):null}function P(t){if("L"==t){document.getElementById("wrapper").scrollLeft-=100,console.log(B);var a=new Date(B[0].split("-").reverse().join("-"));console.log(a),(c=new Date(a)).setDate(a.getDate()-6),console.log(c.toISOString().split("T")[0].split("-").reverse().join("-")),e.searchCal(null,c.toISOString().split("T")[0].split("-").reverse().join("-"))}else{document.getElementById("wrapper").scrollLeft+=100,console.log(B);var c;a=new Date(B[B.length-1].split("-").reverse().join("-"));console.log(a),(c=new Date(a)).setDate(a.getDate()+1),console.log(c.toISOString().split("T")[0].split("-").reverse().join("-")),e.searchCal(null,c.toISOString().split("T")[0].split("-").reverse().join("-"))}}e.centerList.centers.map((function(e){E.block_name.includes(e.block_name)||E.block_name.push(e.block_name),E.fee.includes(e.fee_type)||E.fee.push(e.fee_type),e.sessions.map((function(e){B.includes(e.date)||B.push(e.date),E.vaccine.includes(e.vaccine)||E.vaccine.push(e.vaccine),E.age.includes(e.min_age_limit)||E.age.push(e.min_age_limit)}))}));var H=function(t,a){var c=e.centerList.centers.find((function(e){return t===e.center_id}));J(Object(d.a)(Object(d.a)({},T),{},{center:c,select_date:a})),A(!0)};function M(e){return e.data.centers.map((function(e){return Object(I.jsxs)("tr",{children:[Object(I.jsxs)("td",{className:"sticky-col first-col",children:[Object(I.jsxs)("span",{className:"centerTitle",children:[e.name," "]}),"Paid"==e.fee_type?Object(I.jsx)(N.a,{variant:"info",children:e.fee_type}):Object(I.jsx)("span",{})," ",Object(I.jsx)("br",{}),Object(I.jsx)("span",{className:"centerSubTitle",children:e.block_name+", "+e.district_name+", "+e.state_name+","+e.pincode}),e.vaccine_fees?e.vaccine_fees.map((function(e){return Object(I.jsxs)("span",{className:"feetext",children:[Object(I.jsx)("br",{}),Object(I.jsxs)("span",{children:[e.vaccine+" : \u20b9"+e.fee," "]})]})})):null]}),B.map((function(t){var a,c=[],s=[],n=0;return(a=e.sessions.filter((function(e){return t===e.date}))).map((function(e){c.includes(e.vaccine)||c.push(e.vaccine),s.includes(e.min_age_limit)||s.push(e.min_age_limit),0!==e.available_capacity&&(n+=e.available_capacity)})),Object(I.jsx)("td",{className:"text-center ",children:0!==a.length?Object(I.jsxs)("span",{children:[0!==n?Object(I.jsx)(N.a,{pill:!0,variant:"info",className:"border",children:"Available : "+n}):Object(I.jsx)(N.a,{pill:!0,variant:"danger",className:"border",children:"Booked"}),Object(I.jsx)("br",{}),Object(I.jsxs)("span",{className:"centerTitle ",children:[" ",c.join(" | ")]}),Object(I.jsx)("br",{}),Object(I.jsx)("span",{className:"centerSubTitle ",children:"Age "+s.join(" | ")+"+"}),Object(I.jsx)("br",{}),Object(I.jsx)(o.a,{variant:"outline-secondary",size:"sm",className:"detailBtn",onClick:function(){return H(e.center_id)},children:"Detail"})]}):Object(I.jsx)("span",{children:Object(I.jsx)(N.a,{pill:!0,variant:"light",className:"border",children:"N/A"})})})}))]})}))}return Object(I.jsxs)("div",{children:[Object(I.jsx)(G,{}),Object(I.jsxs)("div",{className:"filterSec",children:[Object(I.jsx)("h5",{children:"Filter"}),Object(I.jsxs)("div",{className:"filterOptSec",children:[Object(I.jsx)(R,{}),Object(I.jsx)("div",{className:"mr-2 my-2",children:Object(I.jsx)(o.a,{size:"sm",variant:"outline-secondary",className:"resetbtn",onClick:function(){return n({fee:"All",availbility:"All",age:"All",vaccine:"All",block_name:"All"})},children:"Reset"})})]})]}),Object(I.jsx)("hr",{}),Object(I.jsx)("br",{}),Object(I.jsx)("div",{children:Object(I.jsxs)(S.a,{children:[Object(I.jsx)(m.a,{className:"d-flex my-1 align-items-center",sm:8,children:Object.keys(E).find((function(e){return"All"!==s[e]}))&&r?Object(I.jsxs)("div",{className:"filterOptSeclist",children:[Object(I.jsxs)("h5",{className:"filterTitleTxt",children:[r.centers.length," - Result For :"]}),Object.keys(E).map((function(e){if("All"!==s[e])return Object(I.jsx)(o.a,{size:"sm",variant:"outline-dark",className:"filterTag mx-1",onClick:function(){return function(e){console.log(e)}(e)},children:"age"==e?"Age "+s[e]+"+":s[e]},e+"_Tag")}))]}):Object(I.jsx)("h5",{className:"filterTitleTxt",children:e.centerList.centers.length+" - Result"})}),Object(I.jsx)(m.a,{className:"d-flex flex-row-reverse my-1 align-items-center",sm:4,children:Object(I.jsxs)(x.a,{className:"ml-2","aria-label":"First group",children:[Object(I.jsx)(o.a,{variant:"outline-secondary",size:"sm",onClick:function(){return P("L")},children:"Prev"}),Object(I.jsx)(o.a,{variant:"outline-secondary",size:"sm",onClick:function(){return P("R")},children:"Next"})]})})]})}),Object(I.jsx)("div",{className:"wrapper",id:"wrapper",children:Object(I.jsxs)(_.a,{striped:!0,bordered:!0,hover:!0,children:[Object(I.jsx)("thead",{children:Object(I.jsxs)("tr",{children:[Object(I.jsx)("th",{className:"sticky-col first-col",children:"Center"}),B.map((function(e){return Object(I.jsx)("th",{children:Y(e)},e)}))]})}),r?Object(I.jsxs)("tbody",{children:[console.log("filterlist"),Object(I.jsx)(M,{data:r})]}):e.centerList?Object(I.jsxs)("tbody",{children:[console.log("mianlist"),Object(I.jsx)(M,{data:e.centerList})," "]}):null]})}),r&&0==r.centers.length?Object(I.jsx)("h5",{className:"text-center",children:"No Result Found"}):null]})},w=(a(55),a(45));var C=function(){var e=Object(c.useState)({id:"",name:""}),t=Object(j.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)({id:"",name:""}),l=Object(j.a)(n,2),i=l[0],r=l[1],p=Object(c.useState)(),v=Object(j.a)(p,2),x=(v[0],v[1]),S=Object(c.useState)(),N=Object(j.a)(S,2),y=(N[0],N[1]),_=Object(c.useState)(),C=Object(j.a)(_,2),A=C[0],L=C[1],D=Object(c.useState)([]),T=Object(j.a)(D,2),J=T[0],B=T[1],E=Object(c.useState)([]),F=Object(j.a)(E,2),Y=F[0],z=F[1],R=Object(c.useState)({display:!1,msg:""}),G=Object(j.a)(R,2),P=G[0],H=G[1],M=Object(c.useState)({status:!0,msg:"Your Online !"}),V=Object(j.a)(M,2),q=V[0],K=V[1],Q=Object(c.useState)(!1),U=Object(j.a)(Q,2),W=U[0],X=U[1];function Z(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:$(),a=i.id;e&&(a=e),window.navigator.onLine?(H(Object(d.a)(Object(d.a)({},P),{},{display:!0})),f.a.get("https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id="+a+"&date="+t).then((function(e){console.log(e),200===e.status?0!==e.data.centers.length?(L(e.data),localStorage.setItem("centerlist",JSON.stringify(e.data)),H(Object(d.a)(Object(d.a)({},P),{},{display:!1,msg:"Data get sucessfully"}))):(H(Object(d.a)(Object(d.a)({},P),{},{display:!1,msg:"Sry No Data Found"})),alert(P.msg+" "+e.status)):(H(Object(d.a)(Object(d.a)({},P),{},{display:!1,msg:"Network Error"})),alert(P.msg+" "+e.status))})),K({status:!0,msg:"Your Online !"})):(K({status:!1,msg:"Your Offline. plese Check Connection !"}),X(!0))}function $(){return(new Date).toISOString().slice(0,10).split("-").reverse().join("-")}return Object(c.useEffect)((function(){!function(){if(window.navigator.onLine)f.a.get("https://cdn-api.co-vin.in/api/v2/admin/location/states").then((function(e){var t=[];e.data.states.map((function(e){return t.push({value:e.state_id,label:e.state_name})})),B(t),x(e.data.states),localStorage.setItem("statelist",JSON.stringify(e.data.states))})),null!==localStorage.getItem("prevstate")&&""!==localStorage.getItem("prevstate")&&void 0!==localStorage.getItem("prevstate")&&(s(JSON.parse(localStorage.getItem("prevstate"))),f.a.get("https://cdn-api.co-vin.in/api/v2/admin/location/districts/"+JSON.parse(localStorage.getItem("prevstate")).id).then((function(e){var t=[];e.data.districts.map((function(e){return t.push({value:e.district_id,label:e.district_name})})),z(t),y(e.data.districts),localStorage.setItem("distlist",JSON.stringify(e.data.districts))}))),null!==localStorage.getItem("prevdistrict")&&""!==localStorage.getItem("prevdistrict")&&void 0!==localStorage.getItem("prevdistrict")&&(r(JSON.parse(localStorage.getItem("prevdistrict"))),Z(JSON.parse(localStorage.getItem("prevdistrict")).id,$())),K({status:!0,msg:"Your Online !"});else{if(null!==localStorage.getItem("statelist")&&""!==localStorage.getItem("statelist")&&void 0!==localStorage.getItem("statelist")){var e=[];x(JSON.parse(localStorage.getItem("statelist"))),JSON.parse(localStorage.getItem("statelist")).map((function(t){return e.push({value:t.state_id,label:t.state_name})})),B(e)}if(null!==localStorage.getItem("prevstate")&&""!==localStorage.getItem("prevstate")&&void 0!==localStorage.getItem("prevstate")&&s(JSON.parse(localStorage.getItem("prevstate"))),null!==localStorage.getItem("distlist")&&""!==localStorage.getItem("distlist")&&void 0!==localStorage.getItem("distlist")){var t=[];y(JSON.parse(localStorage.getItem("distlist"))),JSON.parse(localStorage.getItem("distlist")).map((function(e){return t.push({value:e.district_id,label:e.district_name})})),z(t)}null!==localStorage.getItem("prevdistrict")&&""!==localStorage.getItem("prevdistrict")&&void 0!==localStorage.getItem("prevdistrict")&&r(JSON.parse(localStorage.getItem("prevdistrict"))),null!==localStorage.getItem("centerlist")&&""!==localStorage.getItem("centerlist")&&void 0!==localStorage.getItem("centerlist")&&L(JSON.parse(localStorage.getItem("centerlist"))),K({status:!1,msg:"Your Offline. plese Check Connection !"}),X(!0)}}(),window.navigator.onLine||(K({status:!1,msg:"Your Offline. plese Check Connection !"}),X(!0))}),[]),Object(I.jsxs)("div",{children:[Object(I.jsx)(b.a,{className:"bg-white shadow",children:Object(I.jsxs)(b.a.Body,{children:[Object(I.jsx)(b.a.Title,{children:Object(I.jsx)("h5",{children:"Search vaccination center near you."})}),Object(I.jsxs)(u.a.Row,{className:"seachfrm",children:[Object(I.jsx)(m.a,{md:4,sm:12,children:Object(I.jsx)(u.a.Group,{children:Object(I.jsx)(w.a,{options:J,isClearable:!0,onChange:function(e){window.navigator.onLine?(s({name:e.label,id:e.value}),localStorage.setItem("prevstate",JSON.stringify({name:e.label,id:e.value})),localStorage.setItem("prevdistrict",null),r({name:"",id:""}),H(Object(d.a)(Object(d.a)({},P),{},{display:!0})),f.a.get("https://cdn-api.co-vin.in/api/v2/admin/location/districts/"+e.value).then((function(e){var t=[];e.data.districts.map((function(e){return t.push({value:e.district_id,label:e.district_name})})),localStorage.setItem("optarry",JSON.stringify(t)),z(t),H(Object(d.a)(Object(d.a)({},P),{},{display:!1,msg:"Data get sucessfully"}))})),K({status:!0,msg:"Your Online !"})):(K({status:!1,msg:"Your Offline. plese Check Connection !"}),X(!0))},isSearchable:!0,value:J?J[J.findIndex((function(e){return e.value===parseInt(a.id)}))]:{value:a.id,label:a.name}})})}),Object(I.jsx)(m.a,{md:4,sm:12,children:Object(I.jsx)(u.a.Group,{children:Object(I.jsx)(w.a,{options:Y,isClearable:!0,onChange:function(e){window.navigator.onLine?(r({name:e.label,id:e.value}),localStorage.setItem("prevdistrict",JSON.stringify({name:e.label,id:e.value}))):(K({status:!1,msg:"Your Offline. plese Check Connection !"}),X(!0))},value:Y?Y[Y.findIndex((function(e){return e.value===parseInt(i.id)}))]:{value:i.id,label:i.name}})})}),Object(I.jsx)(m.a,{md:4,sm:12,children:Object(I.jsx)(o.a,{className:"searchBtn",onClick:function(){return Z(i.id)},variant:"outline-dark",children:"Search"})})]}),Object(I.jsx)("hr",{}),A?Object(I.jsx)(k,{searchCal:Z,centerList:A}):Object(I.jsx)("p",{children:"Select Sate and Dist"})]})}),Object(I.jsx)(O.a,{size:"sm",show:P.display,"aria-labelledby":"contained-modal-title-vcenter",centered:!0,className:"spinnerModel",children:Object(I.jsx)(O.a.Body,{children:Object(I.jsx)("div",{className:"d-flex justify-content-center",children:Object(I.jsx)(g.a,{animation:"border",role:"status",variant:"dark",children:Object(I.jsx)("span",{className:"sr-only",children:"Loading..."})})})})}),q.status?null:Object(I.jsx)("div",{className:"fixed-bottom",children:Object(I.jsx)(h.a,{show:W,variant:"danger",className:"m-0",onClose:function(){return X(!1)},dismissible:!0,children:Object(I.jsx)("div",{className:"container d-flex align-items-center",children:Object(I.jsx)("h5",{children:q.msg})})})})]})};var A=function(){return Object(I.jsxs)("div",{children:[Object(I.jsxs)("div",{className:"mb-5",children:[Object(I.jsx)(i.a,{bg:"light",className:"bg-white shadow mb-3 sticky-top",children:Object(I.jsx)(r.a,{children:Object(I.jsx)(i.a.Brand,{href:"#",children:"COVID"})})}),Object(I.jsx)(r.a,{children:Object(I.jsx)(C,{},"srchfrm")})]}),Object(I.jsx)(o.a,{className:"toTop shadow",variant:"outline-dark",onClick:function(){return document.body.scrollTop=0,void(document.documentElement.scrollTop=0)},children:Object(I.jsx)("box-icon",{name:"up-arrow-alt"})})]})},L=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,116)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,l=t.getTTFB;a(e),c(e),s(e),n(e),l(e)}))};l.a.render(Object(I.jsx)(s.a.StrictMode,{children:Object(I.jsx)(A,{})}),document.getElementById("root")),L()},63:function(e,t,a){},64:function(e,t,a){}},[[101,1,2]]]);
//# sourceMappingURL=main.597d7955.chunk.js.map