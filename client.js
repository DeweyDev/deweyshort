var gapi=window.gapi=window.gapi||{};gapi._bs=new Date().getTime();(function(){var e=null,f=window,g="push",i="replace",k="length";var l=f,q=document,u=l.location,y=function(){},z=/\[native code\]/,A=function(a,b,c){return a[b]=a[b]||c},C=function(a){for(var b=0;b<this[k];b++)if(this[b]===a)return b;return-1},D=function(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a[k];d++){var h=a[d];h!=c&&b[g](h);c=h}return b},E=function(){var a;if((a=Object.create)&&z.test(a))a=a(e);else{a={};for(var b in a)a[b]=void 0}return a},F=A(l,"gapi",{});var G;G=A(l,"___jsl",E());A(G,"I",0);A(G,"hel",10);var H=function(){var a=u.href,b;if(G.dpo)b=G.h;else{b=G.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),d=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||d.exec(a)))try{b=decodeURIComponent(a[2])}catch(h){}}return b},I=function(a){return A(A(G,"H",E()),a,E())};var K=A(G,"perf",E()),L=A(K,"g",E()),M=A(K,"i",E());A(K,"r",[]);E();E();var N=function(a,b,c){var d=K.r;"function"===typeof d?d(a,b,c):d[g]([a,b,c])},P=function(a,b,c){b&&0<b[k]&&(b=O(b),c&&0<c[k]&&(b+="___"+O(c)),28<b[k]&&(b=b.substr(0,28)+(b[k]-28)),c=b,b=A(M,"_p",E()),A(b,c,E())[a]=(new Date).getTime(),N(a,"_p",c))},O=function(a){return a.join("__")[i](/\./g,"_")[i](/\-/g,"_")[i](/\,/g,"_")};var Q=E(),R=[],S;S={a:"callback",e:"sync",c:"config",g:"_c",f:"h",l:"platform",i:"jsl",TIMEOUT:"timeout",d:"ontimeout",k:"mh",j:"u"};R[g]([S.i,function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?G[b]=A(G,b,[]).concat(c):A(G,b,c)}if(b=a[S.j])a=A(G,"us",[]),a[g](b),(b=/^https:(.*)$/.exec(b))&&a[g]("http:"+b[1])}]);var T=decodeURI("%73cript");Q.m=function(a){var b=G.ms||"https://apis.google.com";a=a[0];var c;if(!(c=!a))c=0<=a.indexOf("..");if(c)throw"Bad hint";return b+"/"+a[i](/^\//,"")};
var U=function(a){return a.join(",")[i](/\./g,"_")[i](/-/g,"_")},V=function(a,b){for(var c=[],d=0;d<a[k];++d){var h=a[d];h&&0>C.call(b,h)&&c[g](h)}return c},W=function(){var a=H();if(!a)throw"Bad hint";return a},aa=function(a){var b=a.split(";"),c=Q[b.shift()],b=c&&c(b);if(!b)throw"Bad hint:"+a;return b},ba=/^[\/_a-zA-Z0-9,.\-!:=]+$/,ca=/^https?:\/\/[^\/\?#]+\.google\.com(:\d+)?\/[^\?#]+$/,da=/\/cb=/g,ea=/\/\//g,fa=function(a){var b=a.match(ea),c=a.match(da);return!!c&&1===c[k]&&ca.test(a)&&ba.test(a)&&
!!b&&1===b[k]},ga=function(a){"loading"!=q.readyState?X(a):q.write("<"+T+' src="'+encodeURI(a)+'"></'+T+">")},X=function(a){var b=q.createElement(T);b.setAttribute("src",a);b.async="true";(a=q.getElementsByTagName(T)[0])?a.parentNode.insertBefore(b,a):(q.head||q.body||q.documentElement).appendChild(b)},ha=function(a,b){var c=b&&b[S.g];if(c)for(var d=0;d<R[k];d++){var h=R[d][0],j=R[d][1];j&&Object.prototype.hasOwnProperty.call(c,h)&&j(c[h],a,b)}},ia=function(a,b){Y(function(){var c;c=b===H()?A(F,"_",
E()):E();c=A(I(b),"_",c);a(c)})},$=function(a,b){var c=b||{};"function"==typeof b&&(c={},c[S.a]=b);ha(a,c);var d=a?a.split(":"):[],h=c[S.f]||W(),j=A(G,"ah",E());if(!j["::"]||!d[k])Z(d||[],c,h);else{for(var m=[],v=e;v=d.shift();){var r=v.split("."),r=j[v]||j[r[1]&&"ns:"+r[0]||""]||h,n=m[k]&&m[m[k]-1]||e,w=n;if(!n||n.hint!=r)w={hint:r,b:[]},m[g](w);w.b[g](v)}var x=m[k];if(1<x){var B=c[S.a];B&&(c[S.a]=function(){0==--x&&B()})}for(;d=m.shift();)Z(d.b,c,d.hint)}},Z=function(a,b,c){a=D(a)||[];var d=b[S.a],
h=b[S.c],j=b[S.TIMEOUT],m=b[S.d],v=e,r=!1;if(j&&!m||!j&&m)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";var n=A(I(c),"r",[]).sort(),w=A(I(c),"L",[]).sort(),x=[].concat(n),B=function(a,b){if(r)return 0;l.clearTimeout(v);w[g].apply(w,p);var j=((F||{}).config||{}).update;j?j(h):h&&A(G,"cu",[])[g](h);if(b){P("me0",a,x);try{ia(b,c)}finally{P("me1",a,x)}}d&&d();return 1};0<j&&(v=l.setTimeout(function(){r=!0;m()},j));var p=V(a,w);if(p[k]){var p=V(a,n),s=A(G,"CP",[]),
t=s[k];s[t]=function(a){if(!a)return 0;P("ml1",p,x);var b=function(){s[t]=e;return B(p,a)};if(0<t&&s[t-1])s[t]=b;else for(b();(b=s[++t])&&b(););};if(p[k]){var J="loaded_"+G.I++;F[J]=function(a){s[t](a);F[J]=e};a=aa(c);a=a[i]("__features__",U(p))[i](/\/$/,"")+(n[k]?"/ed=1/exm="+U(n):"")+("/cb=gapi."+J);if(!fa(a))throw"Bad URL "+a;n[g].apply(n,p);P("ml0",p,x);b[S.e]||l.___gapisync?ga(a):X(a)}else s[t](y)}else B(p)};var Y=function(a){if(G.hee&&0<G.hel)try{return a()}catch(b){G.hel--,$("debug_error",function(){f.___jsl.hefn(b)})}else return a()};F.load=function(a,b){return Y(function(){return $(a,b)})};L.bs0=f.gapi._bs||(new Date).getTime();N("bs0");L.bs1=(new Date).getTime();N("bs1");delete f.gapi._bs;})();
gapi.load("client",{callback:window["gapi_onload"],_c:{"jsl":{"ci":{"services":{},"deviceType":"desktop","lexps":[100,71,98,96,79,74,45,17,86,82,92,94,61,90,30],"inline":{"css":1},"report":{},"oauth-flow":{"authUrl":"https://accounts.google.com/o/oauth2/auth","proxyUrl":"https://accounts.google.com/o/oauth2/postmessageRelay"},"isPlusUser":false,"iframes":{"additnow":{"methods":["launchurl"],"url":"https://apis.google.com/additnow/additnow.html?bsv"},"plus":{"methods":["onauth"],"url":":socialhost:/u/:session_index:/_/pages/badge?bsv"},":socialhost:":"https://plusone.google.com","plus_followers":{"params":{"url":""},"url":":socialhost:/_/im/_/widget/render/plus/followers?bsv"},"recobox":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/recobox?bsv"},"autocomplete":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/autocomplete?bsv"},"plus_share":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/+1/sharebutton?plusShare\u003dtrue\u0026bsv"},"savetowallet":{"url":"https://clients5.google.com/s2w/o/savetowallet?bsv"},"plus_circle":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/plus/circle?bsv"},"hangout":{"url":"https://talkgadget.google.com/widget/go?bsv"},"savetodrive":{"methods":["save"],"url":"https://drive.google.com/savetodrivebutton?bsv"},"card":{"url":":socialhost:/:session_prefix:_/hovercard/card?bsv"},"evwidget":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/events/widget?bsv"},":signuphost:":"https://plus.google.com","plusone":{"preloadUrl":["https://ssl.gstatic.com/s2/oz/images/stars/po/Publisher/sprite4-a67f741843ffc4220554c34bd01bb0bb.png"],"params":{"count":"","size":"","url":""},"url":":socialhost:/:session_prefix:_/+1/fastbutton?bsv"}},"debug":{"host":"https://plusone.google.com","reportExceptionRate":0.05,"rethrowException":true},"csi":{"rate":0.0},"googleapis.config":{"mobilesignupurl":"https://m.google.com/app/plus/oob?"}},"h":"m;/_/scs/apps-static/_/js/k\u003doz.gapi.en.uaHPNehDcNc.O/m\u003d__features__/am\u003dgQI/rt\u003dj/d\u003d1/rs\u003dAItRSTMkzr6t2vTyhhSvY6p4h_D-JU1YmA","u":"https://apis.google.com/js/client.js","hee":true,"fp":"6a4ca813bba77f0610975e018d3be01d3747a6ed","dpo":false},"fp":"6a4ca813bba77f0610975e018d3be01d3747a6ed","annotation":["autocomplete","profile"],"bimodal":[]}});