(this["webpackJsonpgoit-react-hw-03-phonebooks"]=this["webpackJsonpgoit-react-hw-03-phonebooks"]||[]).push([[0],{13:function(t,e,n){t.exports={container:"ContactForm_container__1iAYU",label:"ContactForm_label__kYpwy"}},38:function(t,e,n){t.exports={contactList:"ContactList_contactList__16VGq"}},71:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(15),o=n.n(r),u=n(18),i=n(19),s=n(22),b=n(20),l=n(9),j=n(5),d=n(13),h=n.n(d),f=n(72),O=n(17),p=function(t){return t.contacts.loading},m=function(t){return t.contacts.filter},C=function(t){return t.contacts.items},v=Object(O.a)([C,m],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),x=n(25),g=n.n(x),k=n(37),y=n(14),_=n.n(y),w=n(3),A=Object(w.b)("phonebooks/fetchContactRequest"),N=Object(w.b)("phonebooks/fetchContactSuccess"),S=Object(w.b)("phonebooks/fetchContactError"),I=Object(w.b)("phonebooks/addContactRequest"),L=Object(w.b)("phonebooks/addContactSuccess"),q=Object(w.b)("phonebooks/addContactError"),z=Object(w.b)("phonebooks/deleteContactRequest"),D=Object(w.b)("phonebooks/deleteContactSuccess"),F=Object(w.b)("phonebooks/deleteContactError"),E=Object(w.b)("phonebooks/changeFilter");_.a.defaults.baseURL="http://localhost:4040";var R,T,J=n(1),M=function(t){Object(s.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(u.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).inputId=Object(f.a)(),t.state={name:"",number:""},t.handleInputChange=function(e){console.log(e.currentTarget.value);var n=e.currentTarget,c=n.name,a=n.value;t.setState(Object(j.a)({},c,a))},t.handleSubmit=function(e){if(e.preventDefault(),t.props.contacts.find((function(e){return e.name===t.state.name&&e.number===t.state.number})))return alert("".concat(t.state.name," is already in contacts!")),void t.reset();t.props.addContact(t.state.name,t.state.number),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(i.a)(n,[{key:"render",value:function(){return Object(J.jsx)("div",{className:h.a.container,children:Object(J.jsxs)("form",{onSubmit:this.handleSubmit,className:h.a.form,children:[Object(J.jsxs)("label",{htmlFor:this.inputId,className:h.a.label,children:["Name:",Object(J.jsx)("input",{className:"Container-form__input",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.name,onChange:this.handleInputChange,id:this.inputId})]}),Object(J.jsxs)("label",{className:h.a.label,children:["Number:",Object(J.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",value:this.state.number,onChange:this.handleInputChange,required:!0})]}),Object(J.jsx)("button",{type:"submit",className:"Container-form__btn",children:"Add Contact"})]})})}}]),n}(c.Component),Z=Object(l.b)((function(t){return{contacts:C(t)}}),(function(t){return{addContact:function(e,n){return t(function(t,e){return function(n){var c={name:t,number:e};n(I()),_.a.post("/contacts",c).then((function(t){var e=t.data;return n(L(e))})).catch((function(t){return n(q(t))}))}}(e,n))}}}))(M),B=Object(l.b)((function(t){return{value:m(t)}}),(function(t){return{"\u043enChange":function(e){return t(E(e.currentTarget.value))}}}))((function(t){var e=t.value,n=t.\u043enChange;return Object(J.jsxs)("label",{children:["FInd contacts by name",Object(J.jsx)("input",{type:"text",value:e,onChange:n})]})})),U=n(38),Y=n.n(U),G=Object(l.b)((function(t){return{contacts:v(t)}}),(function(t){return{onDeleteContact:function(e){return t(function(t){return function(e){e(z()),_.a.delete("/contacts/".concat(t)).then((function(){return e(D(t))})).catch((function(t){return e(F(t))}))}}(e))}}}))((function(t){var e=t.contacts,n=t.onDeleteContact;return Object(J.jsx)("div",{className:"Contact-container",children:Object(J.jsx)("ul",{children:e.map((function(t){return Object(J.jsxs)("li",{className:Y.a.contactList,children:[t.name," : ",t.number,Object(J.jsx)("button",{onClick:function(){return n(t.id)},children:"Delete"})]},Object(f.a)())}))})})})),P=function(t){Object(s.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(u.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContact()}},{key:"render",value:function(){return Object(J.jsxs)("div",{children:[Object(J.jsx)("h1",{children:"Phonebook"}),Object(J.jsx)(Z,{}),Object(J.jsx)("h2",{children:"Contacts"}),Object(J.jsx)(B,{}),this.props.isloadingContacts&&Object(J.jsx)("h1",{children:"loading..."}),Object(J.jsx)(G,{})]})}}]),n}(c.Component),V=Object(l.b)((function(t){return{isloadingContacts:p(t)}}),(function(t){return{fetchContact:function(){return t(function(){var t=Object(k.a)(g.a.mark((function t(e){var n,c;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(A()),t.prev=1,t.next=4,_.a.get("./contacts");case 4:n=t.sent,c=n.data,e(N(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(S(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}())}}}))(P),$=(n(69),n(21)),H=n(39),K=n.n(H),Q=n(10),W=n(4),X=Object(w.c)([],(R={},Object(j.a)(R,N,(function(t,e){return e.payload})),Object(j.a)(R,L,(function(t,e){return[e.payload].concat(Object($.a)(t))})),Object(j.a)(R,D,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),R)),tt=Object(w.c)(!1,(T={},Object(j.a)(T,A,(function(){return!0})),Object(j.a)(T,N,(function(){return!1})),Object(j.a)(T,S,(function(){return!1})),Object(j.a)(T,I,(function(){return!0})),Object(j.a)(T,L,(function(){return!1})),Object(j.a)(T,q,(function(){return!1})),Object(j.a)(T,z,(function(){return!0})),Object(j.a)(T,D,(function(){return!1})),Object(j.a)(T,F,(function(){return!1})),T)),et=Object(w.c)("",Object(j.a)({},E,(function(t,e){return e.payload}))),nt=Object(W.b)({items:X,filter:et,loading:tt}),ct=[].concat(Object($.a)(Object(w.d)({serializableCheck:{ignoredActions:[Q.a,Q.f,Q.b,Q.c,Q.d,Q.e]}})),[K.a]),at=Object(w.a)({reducer:{contacts:nt},middleware:ct,devTools:!1}),rt=n(40);o.a.render(Object(J.jsx)(a.a.StrictMode,{children:Object(J.jsx)(l.a,{store:at,children:Object(J.jsx)(rt.a,{children:Object(J.jsx)(V,{})})})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.bd431170.chunk.js.map