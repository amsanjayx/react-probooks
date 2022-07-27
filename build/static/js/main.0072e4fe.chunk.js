(this["webpackJsonppro-books"]=this["webpackJsonppro-books"]||[]).push([[0],{38:function(t,e,o){},39:function(t,e,o){},64:function(t,e,o){"use strict";o.r(e);var s=o(1),i=o.n(s),n=o(30),r=o.n(n),a=(o(38),o(8)),c=o(9),l=o(11),h=o(10),b=(o(39),o(20)),d=o(0),j=function(t){Object(l.a)(o,t);var e=Object(h.a)(o);function o(){var t;Object(a.a)(this,o);for(var s=arguments.length,i=new Array(s),n=0;n<s;n++)i[n]=arguments[n];return(t=e.call.apply(e,[this].concat(i))).selectType=function(e){var o;switch(e.target.value){case"read":o={type:"read",id:t.props.id};break;case"like":o={type:"like",id:t.props.id};break;case"dislike":o={type:"dislike",id:t.props.id};break;case"del":o={type:"all",id:t.props.id}}t.props.setBook(o)},t}return Object(c.a)(o,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"book-cont",children:[Object(d.jsx)("img",{src:this.props.img,alt:""}),Object(d.jsx)("p",{className:"bname",children:this.props.title}),Object(d.jsx)("p",{className:"bauthor",children:this.props.author}),Object(d.jsx)("div",{className:"arrow"}),Object(d.jsxs)("select",{onChange:this.selectType,children:[Object(d.jsx)("option",{className:"dis",value:"non",children:"Move to..."}),Object(d.jsx)("option",{value:"read",children:"Read \ud83d\udcd6"}),Object(d.jsx)("option",{value:"like",children:"Like \ud83d\udc4d"}),Object(d.jsx)("option",{value:"dislike",children:"Dislike \ud83d\udc4e"}),Object(d.jsx)("option",{value:"del",children:"Delete \u274c"})]})]})}}]),o}(s.Component),u=o(13),p=function(t){Object(l.a)(o,t);var e=Object(h.a)(o);function o(t){var s;return Object(a.a)(this,o),(s=e.call(this,t)).setBookType=function(t){var e=s.state.books.findIndex((function(e){return e.id===t.id})),o=s.state.books;o[e].type=t.type,s.setState({books:Object(b.a)(o)})},s.componentDidMount=function(){var t=s.props.sobj;if(""!==t.type){var e=s.state.books.findIndex((function(e){return e.id===t.id})),o=s.state.books;o[e].type=t.type,s.setState({books:Object(b.a)(o)})}},s.state={books:s.props.books},s}return Object(c.a)(o,[{key:"render",value:function(){var t=this;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("header",{children:"ProBook"}),Object(d.jsxs)("div",{className:"home-cont",children:[Object(d.jsxs)("h1",{children:["\ud83d\udcd6Reading (",this.state.books.filter((function(t){return"read"===t.type})).length,")"]}),Object(d.jsx)("hr",{}),Object(d.jsx)("div",{className:"read",children:0===this.state.books.filter((function(t){return"read"===t.type})).length?"No books reading":this.state.books.filter((function(t){return"read"===t.type})).map((function(e){return Object(d.jsx)(j,{id:e.id,title:e.title,author:e.author,img:e.img,setBook:t.setBookType},e.id)}))}),Object(d.jsxs)("h1",{children:["\ud83d\udc4dLike (",this.state.books.filter((function(t){return"like"===t.type})).length,")"]}),Object(d.jsx)("hr",{}),Object(d.jsx)("div",{className:"like",children:0===this.state.books.filter((function(t){return"like"===t.type})).length?"No books liked":this.state.books.filter((function(t){return"like"===t.type})).map((function(e){return Object(d.jsx)(j,{id:e.id,title:e.title,author:e.author,img:e.img,setBook:t.setBookType},e.id)}))}),Object(d.jsxs)("h1",{children:["\ud83d\udc4eDislike (",this.state.books.filter((function(t){return"dislike"===t.type})).length,")"]}),Object(d.jsx)("hr",{}),Object(d.jsx)("div",{className:"dislike",children:0===this.state.books.filter((function(t){return"dislike"===t.type})).length?"No books disliked":this.state.books.filter((function(t){return"dislike"===t.type})).map((function(e){return Object(d.jsx)(j,{id:e.id,title:e.title,author:e.author,img:e.img,setBook:t.setBookType},e.id)}))})]}),Object(d.jsx)(u.b,{to:"/search",className:"search-btn",children:"+"})]})}}]),o}(s.Component),k=o(2),O=function(t){Object(l.a)(o,t);var e=Object(h.a)(o);function o(t){var s;return Object(a.a)(this,o),(s=e.call(this,t)).onSearch=function(t){s.setState({search:t.target.value})},s.setBookType=function(t){s.props.type(t)},s.state={search:""},s}return Object(c.a)(o,[{key:"render",value:function(){var t=this;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"search-head",children:[Object(d.jsx)(u.b,{to:"/",children:"<-"}),Object(d.jsx)("input",{type:"text",placeholder:"Search by title or author",onChange:this.onSearch})]}),Object(d.jsxs)("h1",{children:[this.props.books.filter((function(e){return e.title.toLowerCase().includes(t.state.search)})).length," books found"]}),Object(d.jsx)("br",{}),Object(d.jsx)("div",{className:"search-res",children:this.props.books.filter((function(e){return e.title.toLowerCase().includes(t.state.search)})).map((function(e){return Object(d.jsx)(j,{id:e.id,title:e.title,author:e.author,img:e.img,setBook:t.setBookType},e.id)}))})]})}}]),o}(s.Component),f=o(33),x=o.n(f),m=function(t){Object(l.a)(o,t);var e=Object(h.a)(o);function o(){var t;return Object(a.a)(this,o),(t=e.call(this)).componentDidMount=function(){var e;e||(e=localStorage.token=Math.random().toString(36).substr(-8));var o={Accept:"application/json",Authorization:e};x.a.get("https://reactnd-books-api.udacity.com/books",{headers:o}).then((function(e){var o=[];e.data.books.forEach((function(t){var e={id:t.id,title:t.title,author:t.authors[0],img:t.imageLinks.thumbnail,type:"all"};o.push(e)})),t.setState({books:[].concat(o)}),console.log(t.state.books)})).catch((function(t){console.log(t)}))},t.setBookSearch=function(e){var o=t.state.obj;o.type=e.type,o.id=e.id,t.setState({obj:o}),console.log(t.state.obj)},t.state={books:[],obj:{type:"",id:""}},t}return Object(c.a)(o,[{key:"render",value:function(){return 0===this.state.books.length?Object(d.jsx)("div",{className:"load",children:Object(d.jsx)("img",{src:"https://raw.githubusercontent.com/AaryanShaikh/react-probooks/main/pro-books/src/res/load.gif",alt:"loading"})}):Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(u.a,{children:Object(d.jsxs)(k.c,{children:[Object(d.jsx)(k.a,{exact:!0,path:"/",children:Object(d.jsx)(p,{books:this.state.books,sobj:this.state.obj})}),Object(d.jsx)(k.a,{path:"/search",children:Object(d.jsx)(O,{books:this.state.books,type:this.setBookSearch})})]})})})}}]),o}(s.Component),g=function(t){t&&t instanceof Function&&o.e(3).then(o.bind(null,65)).then((function(e){var o=e.getCLS,s=e.getFID,i=e.getFCP,n=e.getLCP,r=e.getTTFB;o(t),s(t),i(t),n(t),r(t)}))};r.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root")),g()}},[[64,1,2]]]);
//# sourceMappingURL=main.0072e4fe.chunk.js.map