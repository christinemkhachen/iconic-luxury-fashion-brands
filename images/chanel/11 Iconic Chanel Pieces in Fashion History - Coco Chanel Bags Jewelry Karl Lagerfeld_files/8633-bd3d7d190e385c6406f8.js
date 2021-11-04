"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8633],{8507:function(t,e,n){e.__esModule=!0,function(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}(n(505))},505:function(t,e){var n=this&&this.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},o=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function u(t){try{c(r.next(t))}catch(e){i(e)}}function a(t){try{c(r.throw(t))}catch(e){i(e)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(u,a)}c((r=r.apply(t,e||[])).next())}))},i=this&&this.__generator||function(t,e){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=e.call(t,u)}catch(a){i=[6,a],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};function u(t){var e=t.baseUrl,n=t.preview,r=t.environment,o=e;return r&&(o+="/environments/"+r),n&&(o+="/preview"),o}e.__esModule=!0;var a=function(t){function e(n){var r=t.call(this,n)||this;return Object.setPrototypeOf(r,e.prototype),r}return n(e,t),e}(Error),c=function(t){function e(n){var r=t.call(this,n)||this;return Object.setPrototypeOf(r,e.prototype),r}return n(e,t),e}(Error),s=function(t){function e(n){var r=t.call(this,n)||this;return Object.setPrototypeOf(r,e.prototype),r}return n(e,t),e}(Error);e.subscribeToQuery=function t(e){return o(this,void 0,void 0,(function(){var n,f,l,p,h,y,b,v,d,w,g,O,_,m,j,S,P,E,x,k,T,C=this;return i(this,(function(A){switch(A.label){case 0:n=e.query,f=e.token,l=e.variables,p=e.preview,h=e.environment,y=e.fetcher,b=e.eventSourceClass,v=e.onStatusChange,d=e.onUpdate,w=e.onChannelError,g=e.reconnectionPeriod,O=e.baseUrl,_=y||window.fetch,m=b||window.EventSource,j=g||1e3,S=O||"https://graphql-listen.datocms.com",P=function(){return o(C,void 0,void 0,(function(){return i(this,(function(n){switch(n.label){case 0:return[4,new Promise((function(t){return setTimeout(t,j)}))];case 1:return n.sent(),[2,t(r(r({},e),{reconnectionPeriod:(e.reconnectionPeriod||1e3)+j}))]}}))}))},v&&v("connecting"),A.label=1;case 1:return A.trys.push([1,4,,5]),[4,_(u({baseUrl:S,preview:p,environment:h}),{headers:{Authorization:"Bearer "+f,Accept:"application/json"},method:"POST",body:JSON.stringify({query:n,variables:l})})];case 2:if((x=A.sent()).status>=300&&x.status<500)throw new c("Invalid status code: "+x.status+" "+x.statusText);if(x.status>=500)throw new a("Invalid status code: "+x.status+" "+x.statusText);if("application/json"!==x.headers.get("Content-Type"))throw new s("Invalid content type: "+x.headers.get("Content-Type"));return[4,x.json()];case 3:return k=A.sent(),E=k.url,[3,5];case 4:if((T=A.sent())instanceof c||T instanceof s)throw T;if(T instanceof a)return[2,P()];if(T.message.includes("fetch"))return[2,P()];throw T;case 5:return[2,new Promise((function(t){var e=new m(E),n=!1,r=function(){2!==e.readyState&&e.close()};e.addEventListener("open",(function(){v&&v("connected"),t(r)})),e.addEventListener("update",(function(t){var e=JSON.parse(t.data);d(e)})),e.addEventListener("channelError",(function(t){var e=JSON.parse(t.data);e.fatal&&(v&&v("closed"),n=!0,r()),w&&w(e)})),e.onerror=function(){return o(C,void 0,void 0,(function(){return i(this,(function(t){return e.close(),n||P(),[2]}))}))}}))]}}))}))}},8633:function(t,e,n){n.d(e,{L:function(){return h}});var r=n(3882),o=n(8507),i=Object.prototype.hasOwnProperty;function u(t,e,n){for(n of t.keys())if(a(n,e))return n}function a(t,e){var n,r,o;if(t===e)return!0;if(t&&e&&(n=t.constructor)===e.constructor){if(n===Date)return t.getTime()===e.getTime();if(n===RegExp)return t.toString()===e.toString();if(n===Array){if((r=t.length)===e.length)for(;r--&&a(t[r],e[r]););return-1===r}if(n===Set){if(t.size!==e.size)return!1;for(r of t){if((o=r)&&"object"===typeof o&&!(o=u(e,o)))return!1;if(!e.has(o))return!1}return!0}if(n===Map){if(t.size!==e.size)return!1;for(r of t){if((o=r[0])&&"object"===typeof o&&!(o=u(e,o)))return!1;if(!a(r[1],e.get(o)))return!1}return!0}if(n===ArrayBuffer)t=new Uint8Array(t),e=new Uint8Array(e);else if(n===DataView){if((r=t.byteLength)===e.byteLength)for(;r--&&t.getInt8(r)===e.getInt8(r););return-1===r}if(ArrayBuffer.isView(t)){if((r=t.byteLength)===e.byteLength)for(;r--&&t[r]===e[r];);return-1===r}if(!n||"object"===typeof t){for(n in r=0,t){if(i.call(t,n)&&++r&&!i.call(e,n))return!1;if(!(n in e)||!a(t[n],e[n]))return!1}return Object.keys(e).length===r}}return t!==t&&e!==e}function c(t){var e=r.useRef(t),n=r.useRef(0);return a(t,e.current)||(e.current=t,n.current+=1),r.useMemo((function(){return e.current}),[n.current])}var s=function(){return(s=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},f=function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function u(t){try{c(r.next(t))}catch(e){i(e)}}function a(t){try{c(r.throw(t))}catch(e){i(e)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(u,a)}c((r=r.apply(t,e||[])).next())}))},l=function(t,e){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=e.call(t,u)}catch(a){i=[6,a],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},p=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n};function h(t){var e,n,i=t.enabled,u=t.initialData,a=p(t,["enabled","initialData"]),h=(0,r.useState)(null),y=h[0],b=h[1],v=(0,r.useState)(null),d=v[0],w=v[1],g=(0,r.useState)(i?"connecting":"closed"),O=g[0],_=g[1],m=a;return e=function(){return!1===i?(_("closed"),function(){}):(function(){f(this,void 0,void 0,(function(){return l(this,(function(e){switch(e.label){case 0:return[4,(0,o.subscribeToQuery)(s(s({},m),{onStatusChange:function(t){_(t)},onUpdate:function(t){b(null),w(t.response.data)},onChannelError:function(t){w(null),b(t)}}))];case 1:return t=e.sent(),[2]}}))}))}(),function(){t&&t()});var t},n=Object.values(m),r.useEffect(e,c(n)),{error:y,status:O,data:d||u}}}}]);