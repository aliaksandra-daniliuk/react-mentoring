!function(){"use strict";var e={7068:function(e,n,r){var t,i,c,l=r(7294),a=r(3935),u=r(9163),o=u.ZP.div(t||(i=["\n    width: 70%;\n    margin-left: auto;\n    margin-right: auto;\n"],c||(c=i.slice(0)),t=Object.freeze(Object.defineProperties(i,{raw:{value:Object.freeze(c)}}))));function f(e){return l.createElement(o,null,e.children)}var p,d,s=r.p+"ac1ef038182f3950a1db8e3568542461.png",b=u.ZP.div(p||(p=function(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n    padding: 30px 0px;\n    background: black;\n    background-image:linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(",");\n    background-size: cover;\n    background-position: center center;\n"])),s);function m(e){return l.createElement(b,null,l.createElement(f,null,e.children))}var g,v=u.ZP.div(d||(d=function(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n    display: flex;\n    justify-content: space-between;\n    align-items: baseline;\n"])));function j(e){return l.createElement(v,null,e.children)}var O,E=u.ZP.p(g||(g=function(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n    color: #f65261;\n"])));function h(){return l.createElement(E,null,l.createElement("strong",null,"netflix"),"roulette")}var x,w=u.ZP.button(O||(O=function(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n    border: none;\n    border-radius: 4px;\n    color: #f65261;\n    background: rgba(255, 255, 255, 0.2);     \n    padding: 10px 15px;\n"])));function P(){return l.createElement(w,null,l.createElement("strong",null,"+ ADD MOVIE"))}var z,y=u.ZP.div(x||(x=function(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n    display: flex;\n    flex-wrap: wrap;\n    padding: 100px 60px;\n"])));function Z(e){return l.createElement(y,null,e.children)}var k,R=u.ZP.p(z||(z=function(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n    color: white;\n    font-size: 35px;\n    flex-basis: 100%;\n    margin-bottom: 40px;\n"])));function S(){return l.createElement(R,null,"FIND YOUR MOVIE")}var T,q=u.ZP.input(k||(k=function(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n    background: rgba(255, 255, 255, 0.2); \n    border: none;\n    border-radius: 4px;\n    height: 40px;\n    flex-grow: 1;\n    margin-right: 10px;\n"])));function A(){return l.createElement(q,{placeholder:"What do you want to watch?"})}var D=u.ZP.button(T||(T=function(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n    border: none;\n    border-radius: 5px;\n    color: white;\n    background: #f65261; \n    width: 170px;\n"])));function C(){return l.createElement(D,null,"SEARCH")}function M(){return l.createElement(m,null,l.createElement(j,null,l.createElement(h,null),l.createElement(P,null)),l.createElement(Z,null,l.createElement(S,null),l.createElement(A,null),l.createElement(C,null)))}r(1249),r(8309);var _,B,I,Y,F,H=r(5697),L=r.n(H);function N(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var $,U=u.ZP.div(_||(_=N(["\n    padding: 30px 20px;\n    flex-basis: 33.33%;\n    color: #808080;\n    &:nth-child(3n+3) {\n        padding-right: 0px;\n        padding-left: 40px;\n    }\n    &:nth-child(3n+1) {\n        padding-right: 40px;\n        padding-left: 0px;\n    }\n"]))),V=u.ZP.img(B||(B=N(["\n    width: 100%;\n"]))),W=u.ZP.div(I||(I=N(["\n    padding: 5px 0;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n"]))),G=u.ZP.p(Y||(Y=N(["\n    font-size: 25px;\n"]))),J=u.ZP.div(F||(F=N(["\n    border: 1px solid #808080;\n    border-radius: 3px;\n    padding: 3px 5px;\n"])));function K(e){return l.createElement(U,null,l.createElement(V,{src:e.imgSrc}),l.createElement(W,null,l.createElement(G,null,e.name),l.createElement(J,null,e.age)),e.genre)}K.propTypes={name:L().string.isRequired,age:L().number.isRequired,genre:L().string.isRequired,imgSrc:L().string.isRequired};var Q,X=u.ZP.div($||($=function(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n    display: flex;\n    color: white;\n"])));function ee(e){return l.createElement(X,null,e.children)}var ne=u.ZP.div(Q||(Q=function(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n    padding: 10px 0;\n    margin: 0 10px;\n    cursor: pointer;\n    border-bottom: ",";\n    &:nth-child(1) {\n        margin-left: 0;\n    }\n"])),(function(e){return e.choosed?"3px solid #f65261":"none"}));function re(e){return l.createElement(ne,{choosed:e.choosed},e.option)}re.propTypes={choosed:L().bool.isRequired,option:L().string.isRequired};var te,ie=["ALL","DOCUMENTARY","COMEDY","HORROR","CRIME"],ce=function(e){return e==ie[0]};function le(){return l.createElement(ee,null,ie.map((function(e){return l.createElement(re,{key:e,option:e,choosed:ce(e)})})))}var ae,ue=u.ZP.div(te||(te=function(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n    display: flex;\n    color: white;\n"])));function oe(e){return l.createElement(ue,null,e.children)}var fe,pe=u.ZP.p(ae||(ae=function(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n    color: #808080;\n"])));function de(){return l.createElement(pe,null,"SORT BY")}var se,be=u.ZP.div(fe||(fe=function(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n    padding-left: 15px;\n    &:after {\n        content: '▾';\n        color: #f65261;\n        padding: 3px;\n        cursor: pointer;\n    }\n"])));function me(e){return l.createElement(be,null,e.option)}function ge(){return l.createElement(oe,null,l.createElement(de,null),l.createElement(me,{option:"RELEASE DATE"}))}me.propTypes={option:L().string.isRequired};var ve,je=u.ZP.div(se||(se=function(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n    background: #232323;\n    padding: 20px 0;\n"])));function Oe(e){return l.createElement(je,null,l.createElement(f,null,e.children))}var Ee,he=u.ZP.div(ve||(ve=function(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n    display: flex;\n    justify-content: space-between;\n    align-items: baseline;\n"])));function xe(e){return l.createElement(he,null,e.children)}var we,Pe=u.ZP.div(Ee||(Ee=function(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n    display: flex;\n    flex-wrap: wrap;\n    padding: 20px 0; \n"])));function ze(e){return l.createElement(Pe,null,e.children)}var ye=u.ZP.div(we||(we=function(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n    color: white;\n    margin-top: 35px;\n    font-size: 25px;\n"])));function Ze(e){return l.createElement(ye,null,l.createElement("strong",null,e.count)," movies found")}Ze.propTypes={count:L().number.isRequired};var ke,Re=[{name:"Memento",imgSrc:"./movies/memento.jpg",genre:"Thriller, Detective",age:2e3},{name:"1408",imgSrc:"./movies/1408.jpg",genre:"Horror, Thriller",age:2007},{name:"Titanic",imgSrc:"./movies/titanic.jpg",genre:"Romance, Drama",age:1997},{name:"Breaking Bad",imgSrc:"./movies/breaking_bad.jpg",genre:"Crime",age:2008},{name:"Over the Garden Wall",imgSrc:"./movies/over_the_garden_wall.jpg",genre:"Adventure",age:2014}];function Se(){return l.createElement(Oe,null,l.createElement(xe,null,l.createElement(le,null),l.createElement(ge,null)),l.createElement(Ze,{count:Re.length}),l.createElement(ze,null,Re.map((function(e){return l.createElement(K,{key:e.name,name:e.name,imgSrc:e.imgSrc,genre:e.genre,age:e.age})}))))}var Te,qe=u.ZP.div(ke||(ke=function(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n    background-color: #424242;\n    text-align: center;\n    padding: 20px 0px;\n"])));function Ae(){return l.createElement(qe,null,l.createElement(h,null))}function De(e){return l.createElement(l.Fragment,null,e.children)}function Ce(){return l.createElement(De,null,l.createElement(M,null),l.createElement(Se,null),l.createElement(Ae,null))}u.ZP.p(Te||(Te=function(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n    margin-top: 100px;\n    font-size: 40px;\n    text-align: center;\n"]))),a.render(l.createElement(Ce,null),document.getElementById("app"))}},n={};function r(t){if(n[t])return n[t].exports;var i=n[t]={exports:{}};return e[t](i,i.exports,r),i.exports}r.m=e,r.x=function(){},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,{a:n}),n},r.d=function(e,n){for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},function(){var e;r.g.importScripts&&(e=r.g.location+"");var n=r.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var t=n.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e}(),function(){var e={179:0},n=[[7068,15]],t=function(){},i=function(i,c){for(var l,a,u=c[0],o=c[1],f=c[2],p=c[3],d=0,s=[];d<u.length;d++)a=u[d],r.o(e,a)&&e[a]&&s.push(e[a][0]),e[a]=0;for(l in o)r.o(o,l)&&(r.m[l]=o[l]);for(f&&f(r),i&&i(c);s.length;)s.shift()();return p&&n.push.apply(n,p),t()},c=self.webpackChunkapp=self.webpackChunkapp||[];function l(){for(var t,i=0;i<n.length;i++){for(var c=n[i],l=!0,a=1;a<c.length;a++){var u=c[a];0!==e[u]&&(l=!1)}l&&(n.splice(i--,1),t=r(r.s=c[0]))}return 0===n.length&&(r.x(),r.x=function(){}),t}c.forEach(i.bind(null,0)),c.push=i.bind(null,c.push.bind(c));var a=r.x;r.x=function(){return r.x=a||function(){},(t=l)()}}(),r.x()}();