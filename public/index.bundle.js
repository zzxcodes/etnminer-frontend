webpackJsonp([0],[function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e(1);e.n(r)},function(n,t,e){var r=e(2);"string"==typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0};o.transform=void 0;e(5)(r,o);r.locals&&(n.exports=r.locals)},function(n,t,e){t=n.exports=e(3)(void 0),t.push([n.i,"@font-face {\n  font-family: avenirLight;\n  src: url("+e(4)+");\n}\n\nbody {\n  font-family: 'Lato', sans-serif;\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 25px;\n  color: #3b4045;\n  font: 14px/22px 'Lato', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n}\n\nh1, h2, h3, h4, h5, h6 {\n  font-weight: 300;\n  margin: 0px;\n}\n\nh1 {\n  font-size: 44px;\n  line-height: 56px;\n  color: #fff;\n}\n\nh2 {\n  font-size: 30px;\n  line-height: 35px;\n}\n\nh3 {\n  font-size: 23px;\n  line-height: 25px;\n}\n\nh4 {\n  font-size: 20px;\n  line-height: 24px;\n  font-weight: 400;\n}\n\np {\n  font-size: 16px;\n  line-height: 25px;\n  margin: 0px;\n}\n\n.section {\n  padding: 100px 0;\n}\n\n.btn {\n  border-radius: 0;\n}\n\n#hero-area {\n  padding: 80px 0;\n}\n\n#hero-area:before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0.9;\n}\n\n#hero-area .block {\n  padding-top: 0px;\n}\n\n#hero-area .block h1 {\n  margin-bottom: 35px;\n  text-transform: uppercase;\n  font-size: 40px;\n  letter-spacing: 6px;\n  position: relative;\n}\n\n#hero-area .block p {\n  color: #fff;\n  font-size: 18px;\n  font-weight: 300;\n  line-height: 30px;\n}\n\n.form-group {\n  margin-top: 20px;\n}\n\n.form-group .btn-submit {\n  border: 0 none;\n  border-radius: 5px;\n  color: black;\n  padding: 10px 20px;\n  font-size: 15px;\n  background: -webkit-gradient(linear, right top, right bottom, color-stop(0%, #f46542), color-stop(100%, #f4a641));\n}\n\n.font_6 {\n  font-family: avenirLight;\n  font-size: 21px;\n  letter-spacing: 0.1em;\n  color: black;\n  line-height: 1.6em;\n  text-align: center;\n}\n\n.video-block {\n  width: 100%;\n  height: 100vh;\n  position: relative;\n  overflow: hidden;\n  margin: 0;\n}\n\n.video-block .bg-vid {\n  width: 200%;\n}\n\n.video-block .bg-vid {\n  position: absolute;\n  left: 50%;\n  top: 33%;\n  -moz-transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  width: 70%;\n  height: 100%;\n  object-fit: contain;\n}\n\n#hashrate {\n  border: 0 none;\n  border-radius: 5px;\n  padding: 10px;\n  color: black;\n  font-size: 30px;\n  background: -webkit-gradient(linear, right top, right bottom, color-stop(0%, #f4a641), color-stop(100%, #f46542));\n}\n",""])},function(n,t){function e(n,t){var e=n[1]||"",o=n[3];if(!o)return e;if(t&&"function"==typeof btoa){var i=r(o);return[e].concat(o.sources.map(function(n){return"/*# sourceURL="+o.sourceRoot+n+" */"})).concat([i]).join("\n")}return[e].join("\n")}function r(n){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"}n.exports=function(n){var t=[];return t.toString=function(){return this.map(function(t){var r=e(t,n);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<n.length;o++){var a=n[o];"number"==typeof a[0]&&r[a[0]]||(e&&!a[2]?a[2]=e:e&&(a[2]="("+a[2]+") and ("+e+")"),t.push(a))}},t}},function(n,t,e){n.exports=e.p+"0b78ec9d509f67bfe3f8458c9d285df0.otf"},function(n,t,e){function r(n,t){for(var e=0;e<n.length;e++){var r=n[e],o=d[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(l(r.parts[i],t))}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(l(r.parts[i],t));d[r.id]={id:r.id,refs:1,parts:a}}}}function o(n,t){for(var e=[],r={},o=0;o<n.length;o++){var i=n[o],a=t.base?i[0]+t.base:i[0],s=i[1],f=i[2],c=i[3],l={css:s,media:f,sourceMap:c};r[a]?r[a].parts.push(l):e.push(r[a]={id:a,parts:[l]})}return e}function i(n,t){var e=v(n.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=x[x.length-1];if("top"===n.insertAt)r?r.nextSibling?e.insertBefore(t,r.nextSibling):e.appendChild(t):e.insertBefore(t,e.firstChild),x.push(t);else if("bottom"===n.insertAt)e.appendChild(t);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=v(n.insertInto+" "+n.insertAt.before);e.insertBefore(t,o)}}function a(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var t=x.indexOf(n);t>=0&&x.splice(t,1)}function s(n){var t=document.createElement("style");return n.attrs.type="text/css",c(t,n.attrs),i(n,t),t}function f(n){var t=document.createElement("link");return n.attrs.type="text/css",n.attrs.rel="stylesheet",c(t,n.attrs),i(n,t),t}function c(n,t){Object.keys(t).forEach(function(e){n.setAttribute(e,t[e])})}function l(n,t){var e,r,o,i;if(t.transform&&n.css){if(!(i=t.transform(n.css)))return function(){};n.css=i}if(t.singleton){var c=m++;e=g||(g=s(t)),r=p.bind(null,e,c,!1),o=p.bind(null,e,c,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=f(t),r=h.bind(null,e,t),o=function(){a(e),e.href&&URL.revokeObjectURL(e.href)}):(e=s(t),r=u.bind(null,e),o=function(){a(e)});return r(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;r(n=t)}else o()}}function p(n,t,e,r){var o=e?"":r.css;if(n.styleSheet)n.styleSheet.cssText=w(t,o);else{var i=document.createTextNode(o),a=n.childNodes;a[t]&&n.removeChild(a[t]),a.length?n.insertBefore(i,a[t]):n.appendChild(i)}}function u(n,t){var e=t.css,r=t.media;if(r&&n.setAttribute("media",r),n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}function h(n,t,e){var r=e.css,o=e.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=y(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var d={},b=function(n){var t;return function(){return void 0===t&&(t=n.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),v=function(n){var t={};return function(e){if(void 0===t[e]){var r=n.call(this,e);if(r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}t[e]=r}return t[e]}}(function(n){return document.querySelector(n)}),g=null,m=0,x=[],y=e(6);n.exports=function(n,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||(t.singleton=b()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var e=o(n,t);return r(e,t),function(n){for(var i=[],a=0;a<e.length;a++){var s=e[a],f=d[s.id];f.refs--,i.push(f)}if(n){r(o(n,t),t)}for(var a=0;a<i.length;a++){var f=i[a];if(0===f.refs){for(var c=0;c<f.parts.length;c++)f.parts[c]();delete d[f.id]}}}};var w=function(){var n=[];return function(t,e){return n[t]=e,n.filter(Boolean).join("\n")}}()},function(n,t){n.exports=function(n){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var e=t.protocol+"//"+t.host,r=e+t.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,t){var o=t.trim().replace(/^"(.*)"$/,function(n,t){return t}).replace(/^'(.*)'$/,function(n,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o))return n;var i;return i=0===o.indexOf("//")?o:0===o.indexOf("/")?e+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}}],[0]);