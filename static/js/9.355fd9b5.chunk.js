(window["webpackJsonplifeapp-client"]=window["webpackJsonplifeapp-client"]||[]).push([[9],{420:function(e,t){},506:function(e,t,a){"use strict";a.r(t);var n=a(480),r=a(479),c=a(446),o=a(458),i=a(0),s=a.n(i),l=a(20),u=a(269),p=a(270),d=a(271),m=a(302),f=a(273),h=a(272),b=a(303),v=a(501),E=a(391),w=a.n(E),g="https://lifeapp-server.herokuapp.com",O=function(e,t){var a="".concat(g,"/auth/").concat(e,"?socketId=").concat(t);return window.open(a)},I=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={disabled:!1},a.authWindow=null,a.checkWindow=function(){var e=setInterval((function(){var t=Object(h.a)(a).authWindow;t&&!t.closed&&void 0!==t.closed||(clearInterval(e),w()(g).emit("end"),a.setState({disabled:!1}))}),1e3)},a.startAuth=function(){if(!a.state.disabled){var e=a.props.provider,t=w()(g);t.on("connect",(function(){a.authWindow=O(e,t.id),a.checkWindow(),a.setState({disabled:!0}),t.on(e,(function(e){a.authWindow&&a.authWindow.close(),a.props.onUserInfo(e)}))}))}},a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.provider,a=e.userInfo,c=this.state.disabled;return s.a.createElement("div",null,a&&a.name?s.a.createElement(r.a,{container:!0,justify:"center",alignItems:"center"},s.a.createElement(v.a,{alt:a.name,src:a.photo})):s.a.createElement(n.a,{onClick:this.startAuth,disabled:c},"LOGIN WITH ".concat(t.toUpperCase())))}}]),t}(i.Component),j=a(217),k=a(69),W=a.n(k)()((function(e){return Object(j.a)({button:{margin:e.spacing(1)},root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}})})),C=["google"];t.default=function(){var e=W(),t=Object(l.g)(),a=Object(i.useContext)(u.a),p=a.loading,d=a.userInfo,m=a.setUserInfo,f=Object(i.useCallback)((function(){t.push("/app")}),[t]),h=Object(i.useCallback)((function(e){m(e),t.push("/app")}),[t,m]);return s.a.createElement("div",{className:e.root},s.a.createElement("div",null,s.a.createElement("div",{className:e.root},s.a.createElement(r.a,{container:!0,spacing:3},s.a.createElement(r.a,{item:!0,xs:12},s.a.createElement(c.a,{className:e.paper},s.a.createElement(o.a,{variant:"h3",gutterBottom:!0},"WELCOME TO LIFEAPP"))),s.a.createElement(r.a,{item:!0,xs:6},s.a.createElement(c.a,{className:e.paper},p?"Preparing authorization...":C.map((function(e){return s.a.createElement(I,{provider:e,key:e,onUserInfo:h,userInfo:d})})))),s.a.createElement(r.a,{item:!0,xs:6},s.a.createElement(c.a,{className:e.paper},s.a.createElement(n.a,{size:"large",onClick:f,className:e.button},"Try Demo")))))))}}}]);
//# sourceMappingURL=9.355fd9b5.chunk.js.map