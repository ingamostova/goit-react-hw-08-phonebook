"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[630],{9630:function(n,e,r){r.r(e),r.d(e,{default:function(){return M}});var t,i,a,s,o,c,l,u=r(2791),d=r(9434),m=r(4270),x=r(208),f=r(501),h=r(2716),p=r(7621),j=r(9504),g=r(890),b=r(2363),v=r(3736),Z=r(184),y=function(n){var e=n.contact,r=e.id,t=e.name,i=e.number,a=(0,d.I0)();return(0,Z.jsxs)(p.Z,{children:[(0,Z.jsxs)(j.Z,{container:!0,direction:"column",justifyContent:"center",alignItems:"flex-start",children:[(0,Z.jsxs)(g.Z,{variant:"h6",sx:{display:"flex",alignItems:"center"},children:[(0,Z.jsx)(f.Z,{color:"primary"})," ",t]}),(0,Z.jsxs)(g.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,Z.jsx)(h.Z,{color:"primary"})," ",i]})]}),(0,Z.jsx)(b.Z,{children:(0,Z.jsx)(v.Z,{type:"button",onClick:function(){return a((0,x.GK)(r))},children:"Delete"})})]})},k=function(n){return n.contacts.items},w=function(n){return n.filter},C=function(n){return n.contacts.isLoading},F=function(n){return n.contacts.error},I=r(1889),z=function(){var n=function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))}((0,d.v9)(k),(0,d.v9)(w));return(0,Z.jsx)(I.ZP,{container:!0,spacing:2,direction:"row",sx:{mt:"0.5rem"},children:n.map((function(n){return(0,Z.jsx)(I.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,Z.jsx)(y,{contact:n})},n.id)}))})},L=r(5705),q=r(5282),A=(r(7270),r(168)),H=r(225),P=(0,H.Z)(L.l0)(t||(t=(0,A.Z)(["\n  padding: 20px 0;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  margin-bottom: 30px;\n"]))),_=(0,H.Z)(L.gN)(i||(i=(0,A.Z)(["\n  display: block;\n  padding: 5px;\n  font-size: 20px;\n  font-family: Arial, Helvetica, sans-serif;\n  color: #2a2a2a;\n"]))),N=H.Z.label(a||(a=(0,A.Z)(["\n  font-size: 20px;\n  font-family: Arial, Helvetica, sans-serif;\n  color: #2a2a2a;\n"]))),S=H.Z.div(s||(s=(0,A.Z)(["\n  font-size: 15px;\n  padding: 5px;\n  color: red;\n"]))),B=H.Z.button(o||(o=(0,A.Z)(["\n  width: 150px;\n  font-size: 20px;\n  padding: 5px;\n  border-radius: 5px;\n  border: none;\n  transition: all 250ms ease-out;\n\n  :hover,\n  :focus {\n    outline: 1px solid #2a2a2a;\n    cursor: pointer;\n    background-color: #bbceeb;\n  }\n"]))),K=q.object().shape({name:q.string().min(3,"Too short!").required(),number:q.string().phone().required()}),T={name:"",number:""},W=function(){var n=(0,d.I0)(),e=(0,d.v9)(k);return(0,Z.jsx)(L.J9,{initialValues:T,validationSchema:K,onSubmit:function(r,t){var i=t.resetForm,a=r.name,s=r.number;if(e.find((function(n){return n.name.toLowerCase()===a.toLowerCase()})))alert("".concat(a," is already in contacts"));else{var o={name:a,number:s};n((0,x.uK)(o)),i()}},children:(0,Z.jsxs)(P,{autoComplete:"off",children:[(0,Z.jsxs)(N,{htmlFor:"name",children:["Name",(0,Z.jsx)(_,{type:"text",name:"name"}),(0,Z.jsx)(L.Bc,{name:"name",render:function(n){return(0,Z.jsx)(S,{children:n})}})]}),(0,Z.jsxs)(N,{htmlFor:"number",children:["Phone Number",(0,Z.jsx)(_,{type:"tel",name:"number"}),(0,Z.jsx)(L.Bc,{name:"number",render:function(n){return(0,Z.jsx)(S,{children:n})}})]}),(0,Z.jsx)(B,{type:"submit",children:"Add contact"})]})})},D=H.Z.h2(c||(c=(0,A.Z)(["\n  font-size: 40px;\n  margin: 0;\n  padding: 0;\n  font-family: Helvetica, sans-serif;\n"]))),E=function(n){var e=n.title,r=n.children;return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(D,{children:e}),r]})},G=r(6895),J=r(1614),O=r(9926),R=function(){var n=(0,d.I0)(),e=(0,d.v9)(w);return(0,Z.jsx)(J.Z,{maxWidth:"sm",sx:{ml:"0"},children:(0,Z.jsx)(O.Z,{variant:"standard",label:"Search by name",fullWidth:!0,type:"text",onChange:function(e){n((0,G.Tv)(e.target.value))},value:e})})},V=H.Z.p(l||(l=(0,A.Z)(["\n  font-size: 25px;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: 500;\n  margin: 0;\n  padding: 0;\n  margin-top: 20px;\n"]))),Y=function(n){var e=n.message;return(0,Z.jsx)(V,{children:e})};function M(){var n=(0,d.I0)(),e=(0,d.v9)(C),r=(0,d.v9)(k),t=(0,d.v9)(F);return(0,u.useEffect)((function(){n((0,x.yF)())}),[n]),(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(m.q,{children:(0,Z.jsx)("title",{children:"Your tasks"})}),(0,Z.jsx)(E,{title:"Phonebook",children:(0,Z.jsx)(W,{})}),t&&!e?t:(0,Z.jsx)("div",{children:e&&!t?(0,Z.jsx)("b",{children:"Request in progress..."}):(0,Z.jsx)(Z.Fragment,{children:r.length>0?(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(R,{}),(0,Z.jsx)(z,{})]}):(0,Z.jsx)(Y,{message:"Ooops, there is no contact in your phonebook"})})})]})}}}]);
//# sourceMappingURL=630.79ea7315.chunk.js.map