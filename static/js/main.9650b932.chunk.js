(this.webpackJsonpgame=this.webpackJsonpgame||[]).push([[0],{26:function(t,e,n){},27:function(t,e,n){},28:function(t,e,n){},30:function(t,e,n){},31:function(t,e,n){},32:function(t,e,n){},33:function(t,e,n){},39:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),o=n(19),r=n.n(o),i=n(15),s=(n(26),n(2)),u=n.p+"static/media/logo.88baa581.svg",l=(n(27),n(28),n(1)),b=function(){return Object(l.jsxs)("div",{className:"authorization",children:[Object(l.jsx)("img",{src:u,alt:"logo",className:"authorization__logo"}),Object(l.jsx)("p",{children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0451 \u0438\u043c\u044f"}),Object(l.jsx)("input",{type:"text",placeholder:"\u0418\u043c\u044f",className:"authorization__login-field"}),Object(l.jsx)("button",{type:"button",className:"authorization__button button",children:"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c"})]})},d=a.a.memo(b),j=n(10),h=n(12),m=n(20),f=n.n(m),O=n.p+"static/media/sound1.28d0f02a.wav",p=n.p+"static/media/sound2.80f01a1b.wav",x=(n(30),function(t){var e=new Audio(t);e.preload="auto",e.play()}),g=function(t){var e=t.color,n=t.id,a=t.setCheckedFields,o=Object(c.useState)(!1),r=Object(j.a)(o,2),i=r[0],s=r[1];return Object(l.jsx)("button",{type:"button",className:f()(e,{"Field--checked":i},"Field"),value:e,onClick:function(t){x(i?p:O),a((function(e){return i?e.filter((function(e){return e!==t.target})):[].concat(Object(h.a)(e),[t.target])})),s((function(t){return!t}))},"data-button-number":n})},v=a.a.memo(g),_=(n(31),function(t){var e=t.squares,n=t.setCheckedFields;return Object(l.jsx)("div",{className:"Board",children:e.map((function(t){var e=t.id,c=t.color;return Object(l.jsx)(v,{id:e,color:c,setCheckedFields:n},e)}))})}),N=a.a.memo(_),k=(n(32),0);var y=function(){return function(t){for(var e,n,c=Object(h.a)(t),a=c.length-1;a>0;a-=1)n=c[e=Math.floor(Math.random()*(a+1))],c[e]=c[a],c[a]=n;return c}(function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:" ",e=[],n=arguments.length,c=new Array(n>1?n-1:0),a=1;a<n;a++)c[a-1]=arguments[a];if(5!==c.length)throw new Error("Should be 5 colors!");return c.forEach((function(n){e=e.concat((n+t).repeat(5).trim().split(t))})),e}(" ","green","red","blue","pink","orange"))},w=function(t){return t.map((function(t){return{color:t,id:k+=1}}))},C=function(){var t=Object(c.useState)([]),e=Object(j.a)(t,2),n=e[0],a=e[1],o=Object(c.useState)([]),r=Object(j.a)(o,2),i=r[0],s=r[1];Object(c.useEffect)((function(){a(w(y()))}),[]);return Object(l.jsxs)("div",{className:"Game",children:[Object(l.jsx)("img",{src:u,alt:"",className:"Game__logo"}),Object(l.jsx)("button",{className:"button button--shuffle",type:"button",onClick:function(){k=0,a(w(y()))},children:"\u041f\u0435\u0440\u0435\u043c\u0435\u0448\u0430\u0442\u044c"}),Object(l.jsx)("div",{className:"Game__timer",children:"10:30"}),Object(l.jsx)(N,{squares:n,setCheckedFields:s}),Object(l.jsx)("button",{type:"button",className:"button Game__button-check ".concat(i.length<2?"gray":"blue"),disabled:i.length<2,children:"\u041f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c"}),Object(l.jsx)("button",{type:"button",className:"button Game__button-complete",children:"\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044c"})]})},F=a.a.memo(C);n(33);var G=function(){return Object(l.jsxs)(s.c,{children:[Object(l.jsx)(s.a,{path:"/game",children:Object(l.jsx)(F,{})}),Object(l.jsx)(s.a,{path:"/",exact:!0,children:Object(l.jsx)(d,{})}),Object(l.jsx)("p",{children:"page not found"})]})};r.a.render(Object(l.jsx)(i.a,{children:Object(l.jsx)(G,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.9650b932.chunk.js.map