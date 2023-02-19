(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s=c(7),a=c.n(s),n=c(8),l=c(2),i=c(1),d=(c(13),c(14),c(5)),o=c.n(d),r=c(0),j=function(e){var t=e.todos,c=e.selectTodo,s=e.selectedTodo;return Object(r.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"#"}),Object(r.jsx)("th",{children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("th",{children:"Title"}),Object(r.jsx)("th",{children:" "})]})}),Object(r.jsx)("tbody",{children:t.map((function(e){var t=e.id,a=e.title,n=e.completed;return Object(r.jsxs)("tr",{"data-cy":"todo",className:o()({"has-background-info-light":s===e}),children:[" ",Object(r.jsx)("td",{className:"is-vcentered",children:t}),Object(r.jsx)("td",{className:"is-vcentered",children:n&&Object(r.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("td",{className:"is-vcentered is-expanded",children:Object(r.jsx)("p",{className:o()({"has-text-danger":!n,"has-text-success":n}),children:a})}),Object(r.jsx)("td",{className:"has-text-right is-vcentered",children:Object(r.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return c(e)},children:Object(r.jsxs)("span",{className:"icon",children:[Object(r.jsx)("i",{className:o()({"far fa-eye-slash":s===e,"far fa-eye":s!==e})})," "]})})})]})}))})]})},u=function(e){var t=e.status,c=e.setStatus,s=e.query,a=e.setQuery;return Object(r.jsxs)("form",{className:"field has-addons",children:[Object(r.jsx)("p",{className:"control",children:Object(r.jsx)("span",{className:"select",children:Object(r.jsxs)("select",{"data-cy":"statusSelect",value:t,onChange:function(e){return c(e.target.value)},children:[Object(r.jsx)("option",{value:"all",children:"All"}),Object(r.jsx)("option",{value:"active",children:"Active"}),Object(r.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(r.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(r.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:s,onChange:function(e){return a(e.target.value)}}),Object(r.jsx)("span",{className:"icon is-left",children:Object(r.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(r.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:s&&Object(r.jsx)("button",{"aria-label":"clear search","data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return a("")}})})]})]})};function b(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(16);var h=function(){return Object(r.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(r.jsx)("div",{className:"Loader__content"})})},m=function(e){var t=e.selectedTodo,c=e.closeModal,s=t.id,a=t.title,n=t.completed,d=t.userId,o=Object(i.useState)(null),j=Object(l.a)(o,2),u=j[0],m=j[1],O=Object(i.useState)(!0),x=Object(l.a)(O,2),f=x[0],v=x[1];return Object(i.useEffect)((function(){(function(e){return b("/users/".concat(e))})(d).then((function(e){m(e)})).finally((function(){v(!1)}))}),[]),Object(r.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(r.jsx)("div",{className:"modal-background"}),f?Object(r.jsx)(h,{}):Object(r.jsxs)("div",{className:"modal-card",children:[Object(r.jsxs)("header",{className:"modal-card-head",children:[Object(r.jsxs)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:["Todo #",s]}),Object(r.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:c})]}),Object(r.jsxs)("div",{className:"modal-card-body",children:[Object(r.jsx)("p",{className:"block","data-cy":"modal-title",children:a}),Object(r.jsxs)("p",{className:"block","data-cy":"modal-user",children:[n?Object(r.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(r.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(r.jsx)("a",{href:"mailto:".concat(null===u||void 0===u?void 0:u.email),children:null===u||void 0===u?void 0:u.name})]})]})]})]})},O=function(){var e=Object(i.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1],a=Object(i.useState)(!1),d=Object(l.a)(a,2),o=d[0],O=d[1],x=Object(i.useState)(null),f=Object(l.a)(x,2),v=f[0],N=f[1],p=Object(i.useState)("all"),y=Object(l.a)(p,2),g=y[0],k=y[1],S=Object(i.useState)(""),T=Object(l.a)(S,2),w=T[0],C=T[1];Object(i.useEffect)((function(){b("/todos").then((function(e){s(e)})).finally((function(){O(!1)})),O(!0)}),[]);var _=Object(n.a)(c);if("all"!==g&&(_=_.filter((function(e){switch(g){case"active":return!0!==e.completed;case"completed":return!0===e.completed;default:return!0}}))),w){var E=w.toLowerCase();_=_.filter((function(e){return e.title.toLowerCase().includes(E)}))}return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"box",children:[Object(r.jsx)("h1",{className:"title",children:"Todos:"}),Object(r.jsx)("div",{className:"block",children:Object(r.jsx)(u,{status:g,setStatus:k,query:w,setQuery:C})}),Object(r.jsxs)("div",{className:"block",children:[o&&Object(r.jsx)(h,{}),Object(r.jsx)(j,{todos:_,selectTodo:N,selectedTodo:v})]})]})})}),v&&Object(r.jsx)(m,{selectedTodo:v,closeModal:function(){N(null)}})]})};a.a.render(Object(r.jsx)(O,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.11bd79af.chunk.js.map