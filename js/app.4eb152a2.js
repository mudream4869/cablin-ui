(function(n){function e(e){for(var u,c,o=e[0],i=e[1],s=e[2],d=0,l=[];d<o.length;d++)c=o[d],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&l.push(r[c][0]),r[c]=0;for(u in i)Object.prototype.hasOwnProperty.call(i,u)&&(n[u]=i[u]);f&&f(e);while(l.length)l.shift()();return a.push.apply(a,s||[]),t()}function t(){for(var n,e=0;e<a.length;e++){for(var t=a[e],u=!0,c=1;c<t.length;c++){var o=t[c];0!==r[o]&&(u=!1)}u&&(a.splice(e--,1),n=i(i.s=t[0]))}return n}var u={},c={app:0},r={app:0},a=[];function o(n){return i.p+"js/"+({}[n]||n)+"."+{"chunk-0113c2ca":"6dd90e19","chunk-1d91cc13":"ab68fbad","chunk-2d0d7619":"acfe5ace","chunk-2d0e5982":"ebb0bc76","chunk-3223a243":"cb5930ae","chunk-33e9d05b":"1d401186","chunk-fe9d3a32":"4390a2f0","chunk-02d07b6a":"2ed08d88","chunk-e1b910f4":"fe831e17","chunk-2d0b304e":"4fbbada4","chunk-2d0c26d8":"2fe998ff","chunk-2d212f66":"0afe61e5","chunk-6c6f637f":"42e49027","chunk-2d0c741e":"14e4b0b4","chunk-6884dd39":"23d1bef6","chunk-72b6052a":"cbc66a74"}[n]+".js"}function i(e){if(u[e])return u[e].exports;var t=u[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(n){var e=[],t={"chunk-1d91cc13":1};c[n]?e.push(c[n]):0!==c[n]&&t[n]&&e.push(c[n]=new Promise((function(e,t){for(var u="css/"+({}[n]||n)+"."+{"chunk-0113c2ca":"31d6cfe0","chunk-1d91cc13":"7d88351a","chunk-2d0d7619":"31d6cfe0","chunk-2d0e5982":"31d6cfe0","chunk-3223a243":"31d6cfe0","chunk-33e9d05b":"31d6cfe0","chunk-fe9d3a32":"31d6cfe0","chunk-02d07b6a":"31d6cfe0","chunk-e1b910f4":"31d6cfe0","chunk-2d0b304e":"31d6cfe0","chunk-2d0c26d8":"31d6cfe0","chunk-2d212f66":"31d6cfe0","chunk-6c6f637f":"31d6cfe0","chunk-2d0c741e":"31d6cfe0","chunk-6884dd39":"31d6cfe0","chunk-72b6052a":"31d6cfe0"}[n]+".css",r=i.p+u,a=document.getElementsByTagName("link"),o=0;o<a.length;o++){var s=a[o],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===u||d===r))return e()}var l=document.getElementsByTagName("style");for(o=0;o<l.length;o++){s=l[o],d=s.getAttribute("data-href");if(d===u||d===r)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var u=e&&e.target&&e.target.src||r,a=new Error("Loading CSS chunk "+n+" failed.\n("+u+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=u,delete c[n],f.parentNode.removeChild(f),t(a)},f.href=r;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){c[n]=0})));var u=r[n];if(0!==u)if(u)e.push(u[2]);else{var a=new Promise((function(e,t){u=r[n]=[e,t]}));e.push(u[2]=a);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=o(n);var l=new Error;s=function(e){d.onerror=d.onload=null,clearTimeout(f);var t=r[n];if(0!==t){if(t){var u=e&&("load"===e.type?"missing":e.type),c=e&&e.target&&e.target.src;l.message="Loading chunk "+n+" failed.\n("+u+": "+c+")",l.name="ChunkLoadError",l.type=u,l.request=c,t[1](l)}r[n]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(e)},i.m=n,i.c=u,i.d=function(n,e,t){i.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},i.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,e){if(1&e&&(n=i(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var u in n)i.d(t,u,function(e){return n[e]}.bind(null,u));return t},i.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return i.d(e,"a",e),e},i.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},i.p="",i.oe=function(n){throw console.error(n),n};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var f=d;a.push([0,"chunk-vendors"]),t()})({0:function(n,e,t){n.exports=t("cd49")},"034f":function(n,e,t){"use strict";t("85ec")},2842:function(n,e,t){"use strict";var u=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",["CommandList"===n.cmdType()?t("CommandListComp",{attrs:{cmd:n.cmd}}):n._e(),"CommandAssign"==n.cmdType()?t("command-assign-comp",{attrs:{cmd:n.cmd}}):n._e(),"CommandIf"==n.cmdType()?t("command-if-comp",{attrs:{cmd:n.cmd}}):n._e(),"CommandWhile"==n.cmdType()?t("command-while-comp",{attrs:{cmd:n.cmd}}):n._e(),"CommandCall"==n.cmdType()?t("command-call-comp",{attrs:{cmd:n.cmd}}):n._e(),"CommandReturn"==n.cmdType()?t("command-return-comp",{attrs:{cmd:n.cmd}}):n._e(),"CommandBreak"==n.cmdType()?t("command-break-comp",{attrs:{cmd:n.cmd}}):n._e(),"CommandContinue"==n.cmdType()?t("command-continue-comp",{attrs:{cmd:n.cmd}}):n._e(),"CommandVar"==n.cmdType()?t("command-var-comp",{attrs:{cmd:n.cmd}}):n._e()],1)},c=[],r=t("d4ec"),a=t("bee2"),o=t("262e"),i=t("2caf"),s=(t("d3b7"),t("3ca3"),t("ddb0"),t("9ab4")),d=t("1b40"),l=function(n){Object(o["a"])(t,n);var e=Object(i["a"])(t);function t(){return Object(r["a"])(this,t),e.apply(this,arguments)}return Object(a["a"])(t,[{key:"cmdType",value:function(){return this.cmd.cmdName()}}]),t}(d["c"]);Object(s["a"])([Object(d["b"])()],l.prototype,"cmd",void 0),l=Object(s["a"])([Object(d["a"])({components:{CommandIfComp:function(){return Promise.all([t.e("chunk-fe9d3a32"),t.e("chunk-e1b910f4")]).then(t.bind(null,"3d1f"))},CommandWhileComp:function(){return Promise.all([t.e("chunk-fe9d3a32"),t.e("chunk-02d07b6a")]).then(t.bind(null,"33cd"))},CommandListComp:function(){return t.e("chunk-fe9d3a32").then(t.bind(null,"3767"))},CommandAssignComp:function(){return t.e("chunk-33e9d05b").then(t.bind(null,"66a2"))},CommandCallComp:function(){return t.e("chunk-1d91cc13").then(t.bind(null,"1c11"))},CommandReturnComp:function(){return t.e("chunk-3223a243").then(t.bind(null,"ba9c"))},CommandContinueComp:function(){return t.e("chunk-2d0d7619").then(t.bind(null,"7725"))},CommandBreakComp:function(){return t.e("chunk-2d0e5982").then(t.bind(null,"94c4"))},CommandVarComp:function(){return t.e("chunk-0113c2ca").then(t.bind(null,"0a3c"))}}})],l);var f=l,m=f,h=t("2877"),p=Object(h["a"])(m,u,c,!1,null,"d56fc50e",null);e["a"]=p.exports},"4db1":function(n,e,t){"use strict";t.d(e,"c",(function(){return f})),t.d(e,"a",(function(){return m})),t.d(e,"f",(function(){return h})),t.d(e,"e",(function(){return p})),t.d(e,"i",(function(){return b})),t.d(e,"h",(function(){return v})),t.d(e,"g",(function(){return y})),t.d(e,"b",(function(){return k})),t.d(e,"d",(function(){return g}));var u=t("d4ec"),c=t("bee2"),r=(t("4ec9"),t("d3b7"),t("3ca3"),t("ddb0"),t("b0c0"),t("159b"),t("766f")),a=t("a316"),o=new Map;o.set("CommandList","list"),o.set("CommandAssign","assign"),o.set("CommandIf","if"),o.set("CommandWhile","while"),o.set("CommandVar","var"),o.set("CommandCall","call"),o.set("CommandReturn","return"),o.set("CommandBreak","break"),o.set("CommandContinue","continue");var i=new Map;function s(n){var e=o.get(n.cmdName());return void 0===e?"":e}function d(n){var e=s(n),t={};return t[e]=n.output(),t}function l(n){for(var e in console.log(n),console.log(i),n){var t=n[e];console.log(e,t);var u=i.get(e);if(void 0!==u){var c=u();return console.log(c),c.input(t),c}}throw"command type name error"}var f=function(){function n(){Object(u["a"])(this,n),this.funcName="",this.params=[]}return Object(c["a"])(n,[{key:"cmdName",value:function(){return"CommandCall"}},{key:"input",value:function(n){var e=this;this.funcName=n["name"],this.params=[],n["params"].forEach((function(n){e.params.push(Object(r["h"])(n))}))}},{key:"output",value:function(){var n=[];return this.params.forEach((function(e){n.push(Object(r["i"])(e))})),{params:n,name:this.funcName}}}]),n}(),m=function(){function n(){Object(u["a"])(this,n),this.target="",this.source=new r["d"]}return Object(c["a"])(n,[{key:"cmdName",value:function(){return"CommandAssign"}},{key:"input",value:function(n){this.target=n["target"],this.source=Object(r["h"])(n["source"])}},{key:"output",value:function(){return{target:this.target,source:Object(r["i"])(this.source)}}}]),n}(),h=function(){function n(){Object(u["a"])(this,n),this.cmds=[]}return Object(c["a"])(n,[{key:"cmdName",value:function(){return"CommandList"}},{key:"input",value:function(n){var e=this;this.cmds=[],n.forEach((function(n){e.cmds.push(l(n))}))}},{key:"output",value:function(){var n=[];return this.cmds.forEach((function(e){n.push(d(e))})),n}}]),n}(),p=function(){function n(){Object(u["a"])(this,n),this.cond=new r["d"],this.body=new h,this.else=new h}return Object(c["a"])(n,[{key:"cmdName",value:function(){return"CommandIf"}},{key:"input",value:function(n){this.cond=Object(r["h"])(n["condition"]),n["then"]&&this.body.input(n["then"]),n["else"]&&this.else.input(n["else"])}},{key:"output",value:function(){return{condition:Object(r["i"])(this.cond),then:this.body.output(),else:this.else.output()}}}]),n}(),b=function(){function n(){Object(u["a"])(this,n),this.cond=new r["d"],this.body=new h}return Object(c["a"])(n,[{key:"cmdName",value:function(){return"CommandWhile"}},{key:"input",value:function(n){this.cond=Object(r["h"])(n["condition"]),this.body.input(n["body"])}},{key:"output",value:function(){return{condition:Object(r["i"])(this.cond),body:this.body.output()}}}]),n}(),v=function(){function n(){Object(u["a"])(this,n),this.name="",this.value=null}return Object(c["a"])(n,[{key:"cmdName",value:function(){return"CommandVar"}},{key:"input",value:function(n){this.name=n["name"],this.value=n["value"]}},{key:"output",value:function(){return{name:this.name,type:Object(a["c"])(this.value),value:this.value}}}]),n}(),y=function(){function n(){Object(u["a"])(this,n),this.retValue=new r["d"]}return Object(c["a"])(n,[{key:"cmdName",value:function(){return"CommandReturn"}},{key:"input",value:function(n){this.retValue=Object(r["h"])(n)}},{key:"output",value:function(){return Object(r["i"])(this.retValue)}}]),n}(),k=function(){function n(){Object(u["a"])(this,n)}return Object(c["a"])(n,[{key:"cmdName",value:function(){return"CommandBreak"}},{key:"input",value:function(n){}},{key:"output",value:function(){return{}}}]),n}(),g=function(){function n(){Object(u["a"])(this,n)}return Object(c["a"])(n,[{key:"cmdName",value:function(){return"CommandContinue"}},{key:"input",value:function(n){}},{key:"output",value:function(){return{}}}]),n}();i.set("list",(function(){return new h})),i.set("assign",(function(){return new m})),i.set("if",(function(){return new p})),i.set("while",(function(){return new b})),i.set("var",(function(){return new v})),i.set("call",(function(){return new f})),i.set("return",(function(){return new y})),i.set("break",(function(){return new k})),i.set("continue",(function(){return new g}))},"766f":function(n,e,t){"use strict";t.d(e,"i",(function(){return i})),t.d(e,"h",(function(){return s})),t.d(e,"d",(function(){return d})),t.d(e,"f",(function(){return l})),t.d(e,"c",(function(){return f})),t.d(e,"e",(function(){return m})),t.d(e,"b",(function(){return h})),t.d(e,"g",(function(){return p})),t.d(e,"a",(function(){return b}));var u=t("d4ec"),c=t("bee2"),r=(t("4ec9"),t("d3b7"),t("3ca3"),t("ddb0"),t("b0c0"),t("4db1")),a=t("a316"),o=new Map;function i(n){var e=n.exprName(),t={};return t[e]=n.output(),t}function s(n){for(var e in n){var t=n[e],u=o.get(e);if(void 0!==u){var c=u();return c.input(t),c}}throw"Expr type name error"}var d=function(){function n(){Object(u["a"])(this,n),this.val=null}return Object(c["a"])(n,[{key:"exprName",value:function(){return"const"}},{key:"input",value:function(n){this.val=Object(a["a"])(n)}},{key:"output",value:function(){return Object(a["b"])(this.val)}}]),n}(),l=function(){function n(){Object(u["a"])(this,n),this.name=""}return Object(c["a"])(n,[{key:"exprName",value:function(){return"get"}},{key:"input",value:function(n){this.name=n}},{key:"output",value:function(){return this.name}}]),n}(),f=function(){function n(){Object(u["a"])(this,n),this.cmdCall=new r["c"]}return Object(c["a"])(n,[{key:"exprName",value:function(){return"call"}},{key:"input",value:function(n){this.cmdCall.input(n)}},{key:"output",value:function(){return this.cmdCall.output()}}]),n}(),m=function(){function n(e){Object(u["a"])(this,n),this.expr=new d,this.name="neg",this.name=e}return Object(c["a"])(n,[{key:"exprName",value:function(){return this.name}},{key:"input",value:function(n){this.expr=s(n)}},{key:"output",value:function(){return i(this.expr)}}]),n}(),h=function(){function n(e){Object(u["a"])(this,n),this.expr1=new d,this.expr2=new d,this.name="plus",this.name=e}return Object(c["a"])(n,[{key:"exprName",value:function(){return this.name}},{key:"input",value:function(n){this.expr1=s(n[0]),this.expr2=s(n[1])}},{key:"output",value:function(){return[i(this.expr1),i(this.expr2)]}}]),n}();o.set("const",(function(){return new d})),o.set("get",(function(){return new l})),o.set("call",(function(){return new f}));var p=["not","neg"];p.forEach((function(n){o.set(n,(function(){return new m(n)}))}));var b=["plus","minus","multiply","divide","mod","and","or","equal","not_equal","less","greater","less_equal","greater_equal"];b.forEach((function(n){o.set(n,(function(){return new h(n)}))}))},"85ec":function(n,e,t){},9263:function(n,e,t){"use strict";t("c954")},a316:function(n,e,t){"use strict";t.d(e,"c",(function(){return c})),t.d(e,"b",(function(){return r})),t.d(e,"a",(function(){return a}));var u=t("53ca");function c(n){switch(Object(u["a"])(n)){case"string":return"string";case"number":return"int";case"boolean":return"bool";default:return"null"}}function r(n){return{type:c(n),value:n}}function a(n){return n["value"]}},c954:function(n,e,t){},cd49:function(n,e,t){"use strict";t.r(e);t("e260"),t("e6cf"),t("cca6"),t("a79d");var u=t("5f5b"),c=t("b1e0"),r=(t("2dd8"),t("f9e3"),t("2b0e")),a=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("HelloWorld")],1)},o=[],i=t("d4ec"),s=t("262e"),d=t("2caf"),l=t("9ab4"),f=t("1b40"),m=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("b-tabs",{attrs:{"content-class":"mt-3",pills:"",card:""},model:{value:n.tabIndex,callback:function(e){n.tabIndex=e},expression:"tabIndex"}},[t("b-tab",{attrs:{title:"GUI",active:""}},[t("b-button-toolbar",{staticClass:"mx-1"},[t("b-button-group",n._l(Object.keys(n.examples),(function(e){return t("b-button",{key:e,on:{click:function(t){return n.testExample(e)}}},[n._v(" "+n._s(e)+" ")])})),1),t("b-button",{staticClass:"mx-1",attrs:{variant:"primary"},on:{click:n.execute}},[t("b-icon",{attrs:{icon:"play"}}),n._v("Run")],1)],1),t("CommandComp",{key:n.forceKey,attrs:{cmd:n.cmd}})],1),t("b-tab",{attrs:{title:"YAML"}},[t("highlight-code",{attrs:{lang:"yaml"}},[n._v(" "+n._s(n.yamlDump)+" ")])],1),t("b-tab",{attrs:{title:"Execute Result"}},[""!=n.stderr?t("b-alert",{attrs:{show:"",variant:"danger"}},[n._v(n._s(n.stderr))]):n._e(),t("pre",{staticClass:"code-block"},[t("code",[n._v(n._s(n.stdout))])])],1)],1)],1)},h=[],p=t("bee2"),b=t("2842"),v=t("4db1"),y=t("651e"),k="\n- call:\n    name: 'my::print'\n    params:\n      - const:\n          type: string\n          value: Hello world!\n",g="\n- call:\n    name: 'my::print'\n    params:\n      - plus:\n        - const:\n            type: number\n            value: 1\n        - const:\n            type: number\n            value: 2\n",O="\n- if:\n    condition:\n      const:\n        type: boolean\n        value: true\n    else:\n      - call:\n          name: 'my::print'\n          params:\n            - const:\n                type: string\n                value: ':''('\n    then:\n      - call:\n          name: 'my::print'\n          params:\n            - const:\n                type: string\n                value: IF works!\n",j="\n- var:\n    name: i\n    type: int\n    value: 0\n- while:\n    condition:\n      less:\n        - get: i\n        - const:\n            type: int\n            value: 10\n    body:\n      - call:\n          name: 'my::print'\n          params:\n            - get: i\n      - assign:\n          target: i\n          source:\n            plus:\n              - get: i\n              - const:\n                  type: int\n                  value: 1\n";function C(n,e){var t=Module.cwrap("cablinRun","number",["string"],["pointer"]),u=Module.cwrap("getCablinError","string"),c=Module.addFunction((function(n){e(Module.UTF8ToString(n))}));return 0!=t(n,c)?(Module.removeFunction(c),u()):(Module.removeFunction(c),"")}var w=function(n){Object(s["a"])(t,n);var e=Object(d["a"])(t);function t(){var n;return Object(i["a"])(this,t),n=e.apply(this,arguments),n.cmd=new v["f"],n.stdout="",n.stderr="",n.tabIndex=0,n.examples={"Hello world":k,"1 + 2":g,"If Branch":O,"While Loop":j},n.forceKey=0,n}return Object(p["a"])(t,[{key:"mounted",value:function(){var n=new v["f"];this.cmd=n}},{key:"testExample",value:function(n){this.cmd.input(y["load"](this.examples[n])),this.forceKey=1-this.forceKey}},{key:"yamlDump",get:function(){var n=[{import:"my"},{import:"cast"},{func:{name:"main",body:this.cmd.output()}}];return y["dump"](n,{sortKeys:!0})}},{key:"logging",value:function(n){this.stdout+=n+"\n"}},{key:"execute",value:function(){this.stdout="",this.tabIndex=2,console.log(this.yamlDump),this.stderr=C(this.yamlDump,this.logging)}}]),t}(f["c"]);w=Object(l["a"])([Object(f["a"])({components:{CommandComp:b["a"]}})],w);var x=w,_=x,N=(t("9263"),t("2877")),E=Object(N["a"])(_,m,h,!1,null,"99c46cc4",null),T=E.exports,M=function(n){Object(s["a"])(t,n);var e=Object(d["a"])(t);function t(){return Object(i["a"])(this,t),e.apply(this,arguments)}return t}(f["c"]);M=Object(l["a"])([Object(f["a"])({components:{HelloWorld:T}})],M);var I=M,L=I,P=(t("034f"),Object(N["a"])(L,a,o,!1,null,null,null)),A=P.exports,S=t("c964"),B=t("2e7b"),R=t.n(B);t("8da8");r["default"].use(u["a"]),r["default"].use(c["a"]),r["default"].use(S["a"],{languages:{yaml:R.a}}),r["default"].config.productionTip=!1,new r["default"]({render:function(n){return n(A)}}).$mount("#app")}});
//# sourceMappingURL=app.4eb152a2.js.map