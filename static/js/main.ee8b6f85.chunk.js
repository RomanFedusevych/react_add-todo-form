(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{19:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(9),i=a.n(n),s=a(10),r=a(2),o=a(3),c=a(6),l=a(5),d=a(8),u=a(1),m=a.n(u),h=a(4),b=(a(19),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}]),p=a(0),j=function(e){var t=e.user,a=t.name,n=t.email;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("td",{children:a}),Object(p.jsx)("td",{children:n})]})},g=function(e){var t=e.todo,a=t.user,n=t.title,i=t.completed;return Object(p.jsxs)(p.Fragment,{children:[a&&Object(p.jsx)(j,{user:a}),Object(p.jsx)("td",{children:n}),Object(p.jsx)("td",{children:i?"Completed":"Not completed"})]})},y=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={title:"",name:"",isValidInput:!0,isValidSelect:!0},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.name?0!==e.state.title.length?e.setState((function(){var t={uuid:Object(h.uuid)(),user:e.props.users.find((function(t){return t.name===e.state.name}))||null,userId:0,title:e.state.title,completed:!1};return e.props.addTodo(t),{title:"",name:""}})):e.setState({isValidInput:!1}):e.setState({isValidSelect:!1})},e.addTitle=function(t){var a=t.target.value;e.setState({title:a,isValidInput:!0})},e.addUser=function(t){var a=t.target.value;e.setState({name:a,isValidSelect:!0})},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.todos,t=this.state,a=t.title,n=t.name;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("form",{className:"App__form",onSubmit:this.handleSubmit,children:[Object(p.jsx)("input",{type:"text",className:"form-control",placeholder:"Write task here",onChange:this.addTitle,value:a}),!this.state.isValidInput&&Object(p.jsx)("div",{className:"alert alert-warning",role:"alert",children:"Please enter the title!"}),Object(p.jsxs)("select",{name:"user",className:"form-select","aria-label":"Default select example",value:n,onChange:this.addUser,children:[Object(p.jsx)("option",{value:"",children:"Choose a user"}),b.map((function(e){return Object(p.jsx)("option",{value:e.name,children:e.name},e.id)}))]}),!this.state.isValidSelect&&Object(p.jsx)("div",{className:"alert alert-warning",role:"alert",children:"Please choose a user!"}),Object(p.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Add"})]}),Object(p.jsxs)("table",{className:"table table-dark table-striped",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{scope:"col",children:"Name"}),Object(p.jsx)("th",{scope:"col",children:"Email"}),Object(p.jsx)("th",{scope:"col",children:"Task"}),Object(p.jsx)("th",{scope:"col",children:"Status"})]})}),Object(p.jsx)("tbody",{children:e.map((function(e){return Object(p.jsx)("tr",{children:Object(p.jsx)(g,{todo:e})},e.uuid)}))})]})]})}}]),a}(m.a.Component),f=[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}].map((function(e){var t=b.find((function(t){return t.id===e.userId}))||null;return Object(d.a)(Object(d.a)({},e),{},{user:t,uuid:Object(h.uuid)()})})),O=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={todos:f},e.addTodo=function(t){e.setState((function(e){return{todos:[].concat(Object(s.a)(e.todos),[t])}}))},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("h1",{children:"Static list of todos"}),Object(p.jsx)(y,{addTodo:this.addTodo,todos:this.state.todos,users:b})]})}}]),a}(m.a.Component);i.a.render(Object(p.jsx)(O,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.ee8b6f85.chunk.js.map