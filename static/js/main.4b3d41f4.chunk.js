(this.webpackJsonpgame=this.webpackJsonpgame||[]).push([[0],{25:function(t,e,n){},26:function(t,e,n){},27:function(t,e,n){},29:function(t,e,n){},30:function(t,e,n){},31:function(t,e,n){},37:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),o=n(18),r=n.n(o),s=n(14),u=(n(25),n(2)),i=n.p+"static/media/logo.88baa581.svg",l=(n(26),n(27),n(1)),b=function(){return Object(l.jsxs)("div",{className:"authorization",children:[Object(l.jsx)("img",{src:i,alt:"logo",className:"authorization__logo"}),Object(l.jsx)("p",{children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0451 \u0438\u043c\u044f"}),Object(l.jsx)("input",{type:"text",placeholder:"\u0418\u043c\u044f",className:"authorization__login-field"}),Object(l.jsx)("button",{type:"button",className:"authorization__button button",children:"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c"})]})},d=c.a.memo(b),j=n(11),f=n(20),h=n.p+"static/media/sound1.28d0f02a.wav",m=n.p+"static/media/sound2.80f01a1b.wav",p=(n(29),function(t){var e=t.handleClickChoose,n=t.shuffledCollors,a=0;return Object(l.jsx)("div",{className:"Board",children:n.map((function(t){return Object(l.jsx)("button",{type:"button",className:"".concat(t," Board__field"),value:t,onClick:e,"data-button-number":a+=1},Math.random())}))})}),O=c.a.memo(p);n(30);var g=function(){return function(t){for(var e,n,a=Object(f.a)(t),c=a.length-1;c>0;c-=1)n=a[e=Math.floor(Math.random()*(c+1))],a[e]=a[c],a[c]=n;return a}(function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:" ",e=[],n=arguments.length,a=new Array(n>1?n-1:0),c=1;c<n;c++)a[c-1]=arguments[c];if(5!==a.length)throw new Error("Should be 5 colors!");return a.forEach((function(n){e=e.concat((n+t).repeat(5).trim().split(t))})),e}(" ","green","red","blue","pink","orange"))},v=function(t){var e=new Audio(t);e.preload="auto",e.play()},x=function(){var t=Object(a.useState)("#787878"),e=Object(j.a)(t,2),n=e[0],c=e[1],o=Object(a.useState)("\u041f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c"),r=Object(j.a)(o,2),s=r[0],u=r[1],b=Object(a.useState)([]),d=Object(j.a)(b,2),f=d[0],p=d[1];Object(a.useEffect)((function(){p(g())}),[]);var x=[],_=function(){return new Set(x.map((function(t){return t.value}))).size},k=Object(a.useCallback)((function(){if(x.length>1){var t=x[0].value.split(" ")[0];_()>1?(c("#FF0000"),u("\u041e\u0448\u0438\u0431\u043a\u0430")):(x.map((function(e){return e.classList.remove(t)})),x.length=0)}}));return Object(l.jsxs)("div",{className:"Game",children:[Object(l.jsx)("img",{src:i,alt:"",className:"Game__logo"}),Object(l.jsx)("button",{className:"button button--shuffle",type:"button",onClick:Object(a.useCallback)((function(){return p(g())})),children:"\u041f\u0435\u0440\u0435\u043c\u0435\u0448\u0430\u0442\u044c"}),Object(l.jsx)("div",{className:"Game__timer",children:"10:30"}),Object(l.jsx)(O,{handleClickChoose:function(t){var e=t.target.classList,n=t.target,a=n.dataset.buttonNumber,o=/(red )|(green )|(blue )|(pink )|(orange )/g;if(e.toggle("Board__field--checked"),e.value.includes("Board__field--checked"))o.test(e.value)&&(v(h),x.push(n));else if(o.test(e.value)){v(m);var r=x.findIndex((function(t){return t.dataset.buttonNumber===a}));x.splice(r,1)}x.length>=2&&1===_()&&(c("#2562FF"),u("\u041f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c"))},shuffledCollors:f}),Object(l.jsx)("button",{style:{backgroundColor:n},type:"button",className:"button Game__button-check",onClick:k,children:s}),Object(l.jsx)("button",{type:"button",className:"button Game__button-complete",children:"\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044c"})]})},_=c.a.memo(x);n(31);var k=function(){return Object(l.jsxs)(u.c,{children:[Object(l.jsx)(u.a,{path:"/game",children:Object(l.jsx)(_,{})}),Object(l.jsx)(u.a,{path:"/",exact:!0,children:Object(l.jsx)(d,{})}),Object(l.jsx)("p",{children:"page not found"})]})};r.a.render(Object(l.jsx)(s.a,{children:Object(l.jsx)(k,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.4b3d41f4.chunk.js.map