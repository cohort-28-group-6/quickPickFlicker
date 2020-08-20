(this["webpackJsonpquick-pick-flicker"]=this["webpackJsonpquick-pick-flicker"]||[]).push([[0],{36:function(e,t,a){e.exports=a.p+"static/media/Header.b6199035.png"},40:function(e,t,a){e.exports=a(68)},45:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(35),l=a.n(r),c=(a(45),a(7)),o=a(8),s=a(10),u=a(9),m=a(14),d=a.n(m),h=function(e){return d()({url:"https://api.themoviedb.org/3/search/movie",params:{api_key:"f012df5d63927931e82fe659a8aaa3ac",language:"en-US",sort_by:"popularity.desc",include_adult:"false",include_video:"false",page:1,query:e}}).then((function(e){return e=e.data.results}))},v=a(39),p=a(17),f=a.n(p);a(62);f.a.initializeApp({apiKey:"AIzaSyCGTiHiUbOdDgDWLE_5L-vE5Ti1Nr9FyDw",authDomain:"quick-flick-picker-1d7bd.firebaseapp.com",databaseURL:"https://quick-flick-picker-1d7bd.firebaseio.com",projectId:"quick-flick-picker-1d7bd",storageBucket:"quick-flick-picker-1d7bd.appspot.com",messagingSenderId:"1031062113355",appId:"1:1031062113355:web:f817b635cd825646d151ce"});var E=f.a,b=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleAddMovie=function(e,t){E.database().ref().on("value",(function(a){var i=[],r=a.val();for(var l in r)l===e&&(i=Object(v.a)(r[l].list));i.push(t),n.setState({movieListToPush:i})})),E.database().ref("".concat(e,"/list")).update(n.state.movieListToPush)},n.state={movieListToPush:[],usersQuery:""},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.movies,r=t.movieData;return i.a.createElement("div",{className:"catalogue"},a.map((function(t){return i.a.createElement(n.Fragment,{key:"frag-".concat(t.id)},i.a.createElement("div",{className:"movie"},i.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500/".concat(t.poster_path),alt:"Movie poster for ".concat(t.title)}),i.a.createElement("p",null,"".concat(t.title))),i.a.createElement("ul",null,r.map((function(a){return i.a.createElement("li",null,i.a.createElement("button",{onClick:function(){e.handleAddMovie(a.key,t.title)}},"Add movie to ".concat(a.info.name," list")))}))))})))}}]),a}(n.Component),k=function(e){var t=e.handleSearchText,a=e.handleSearch,n=e.handleSubmit;return i.a.createElement("div",null,i.a.createElement("form",{action:"submit",onSubmit:n},i.a.createElement("input",{type:"text",onChange:function(e){return t(e)}}),i.a.createElement("button",{onClick:a},"SEARCH")))},g=function(){return i.a.createElement("p",null,"loading...")},y=function(e){return i.a.createElement("button",null,"Save Movie")},L=function(e){var t=e.handleChange,a=e.handleClick,n=e.userListName;return i.a.createElement("div",{className:"formContainer"},i.a.createElement("form",{action:"text"},i.a.createElement("fieldset",null,i.a.createElement("legend",null,"Create your list"),i.a.createElement("div",{className:"newListContainer"},i.a.createElement("label",{className:"srOnly",htmlFor:"newList"},"New list here"),i.a.createElement("input",{onChange:t,type:"text",name:"newList",value:n,placeholder:"New list here",id:"newList",className:"newList"}),i.a.createElement("button",{className:"newListButton",onClick:a},"+")))))},S=function(e){var t=e.userList,a=e.handleDeleteList,n=e.handleDeleteMovie;return i.a.createElement("ul",{className:"movieListContainer"},t.map((function(e){return i.a.createElement("li",{className:"movieList",key:e.key},i.a.createElement("div",{className:"movieListTitle"},i.a.createElement("p",null,e.info.name),i.a.createElement("button",{onClick:function(){a(e.key)}},"Delete List")),i.a.createElement("div",{className:"selectedMoviesinList"},i.a.createElement("ul",null,e.info.list.map((function(t,a){return i.a.createElement("li",{key:"".concat(e.key,"-").concat(a),className:"selectedMovies"},t,i.a.createElement("button",{onClick:function(){n(e.key,a)}},"Delete Movie"))})))))})))},D=a(36),C=a.n(D),N=function(){return i.a.createElement("header",null,i.a.createElement("div",{className:"wrapper headerContainer"},i.a.createElement("div",{className:"titleContainer"},i.a.createElement("h1",null,"Quick Flick Picker"),i.a.createElement("h2",null,"A curator for blockbusters and movies")),i.a.createElement("div",{className:"imageContainer"},i.a.createElement("img",{src:C.a,alt:"Retro camera"}))))},w=function(){return i.a.createElement("footer",null,i.a.createElement("div",{className:"wrapper"},i.a.createElement("p",null,"Developed by Krupali Thakkar, David Allen-Jordan, Clayton Puno, Pik Lin Hoe")))},O=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState({userListName:e.target.value})},n.handleClick=function(e){e.preventDefault();var t=E.database().ref(),a={name:n.state.userListName,list:n.state.movies};t.push(a),n.setState({userListName:""})},n.handleDeleteList=function(e){E.database().ref().child(e).remove()},n.handleDeleteMovie=function(e,t){E.database().ref("".concat(e,"/list")).child(t).remove()},n.state={userList:[],userListName:"",movies:["Start adding to this list"]},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;E.database().ref().on("value",(function(t){var a=[],n=t.val();for(var i in n){var r={key:i,info:n[i]};a.push(r)}e.props.galleryInfo(a),e.setState({userList:a})}))}},{key:"render",value:function(){return i.a.createElement("div",{className:"wrapper"},i.a.createElement(L,{handleChange:this.handleChange,handleClick:this.handleClick,userListName:this.state.userListName}),i.a.createElement(S,{userList:this.state.userList,handleDeleteList:this.handleDeleteList,handleDeleteMovie:this.handleDeleteMovie}))}}]),a}(n.Component),j=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleSearchText=function(e){n.setState({searchText:e.target.value})},n.handleSearch=function(){h(n.state.searchText).then((function(e){return n.setState({movies:e})}))},n.handleSubmit=function(e){e.preventDefault(),h(n.state.searchText).then((function(e){return n.setState({movies:e,searched:!0})}))},n.movieData=function(e){n.setState({galleryData:e})},n.state={movies:[],searchText:"",searched:!1,galleryData:[]},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;d()({url:"https://api.themoviedb.org/3/discover/movie",params:{api_key:"f012df5d63927931e82fe659a8aaa3ac",language:"en-US",sort_by:"popularity.desc",include_adult:"false",include_video:"false",page:1}}).then((function(e){return e=e.data.results})).then((function(t){return e.setState({movies:t})}))}},{key:"render",value:function(){var e=this.state,t=e.movies,a=e.galleryData;return i.a.createElement("div",null,i.a.createElement(O,{galleryInfo:this.movieData}),i.a.createElement(k,{handleSearchText:this.handleSearchText,handleSearch:this.handleSearch,handleSubmit:this.handleSubmit}),i.a.createElement(b,{movies:t,movieData:a,userQuery:this.state.searchText}))}}]),a}(n.Component),x=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={movie:{},loading:!0,savedMovie:[]},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e,t=this,a=this.props.match;(e=a.params.movieID,d()({url:"https://api.themoviedb.org/3/movie/".concat(e),params:{api_key:"f012df5d63927931e82fe659a8aaa3ac",language:"en-US",sort_by:"popularity.desc",include_adult:"false",include_video:"false",page:"1"}}).then((function(e){return e.data}))).then((function(e){return t.setState({movie:e,loading:!1})}))}},{key:"render",value:function(){var e=this.state.movie,t=e.title,a=e.tagline,n=e.overview,r=e.poster_path,l=this.state.loading;return i.a.createElement(i.a.Fragment,null,l?i.a.createElement(g,null):i.a.createElement("div",{className:"poster"},i.a.createElement("div",{className:"description"},i.a.createElement("h1",null,t),i.a.createElement("h2",null,a),i.a.createElement("p",null,n)),i.a.createElement("div",{className:"image"},i.a.createElement("img",{src:"http://image.tmdb.org/t/p/w500/".concat(r),alt:"Movie poster for ".concat(t)})),i.a.createElement(y,null)))}}]),a}(n.Component),M=a(37),T=a(1),_=function(){return i.a.createElement(M.a,{basename:"/quickPickFlicker"},i.a.createElement(T.a,{exact:!0,path:"/movie/:movieID",component:O}),i.a.createElement(T.a,{exact:!0,path:"/movie/:movieID",component:x}),i.a.createElement(T.a,{exact:!0,path:"/",component:j}))},I=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(N,null),i.a.createElement(_,null),i.a.createElement(w,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.f60d7162.chunk.js.map