parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"rBqF":[function(require,module,exports) {
"use strict";function r(r,n,t){for(var e=new Array(t),o=0,a=n;o<t;)e[o]=r[a],o=o+1|0,a=a+1|0;return e}function n(r,n){for(;;){var t=n,e=r;if(!t)return e;n=t.tl,r=t.hd.length+e|0}}function t(r,n,t){for(;;){var e=t,o=n;if(!e)return;for(var a=e.hd,u=a.length,f=o,c=0;c<u;)r[f]=a[c],f=f+1|0,c=c+1|0;t=e.tl,n=f}}function e(r){var e=n(0,r),o=new Array(e);return t(o,0,r),o}function o(r,n,t){if(n<0||n>=r.length)throw{RE_EXN_ID:"Invalid_argument",_1:"index out of bounds",Error:new Error};r[n]=t}function a(r,n){if(n<0||n>=r.length)throw{RE_EXN_ID:"Invalid_argument",_1:"index out of bounds",Error:new Error};return r[n]}function u(r,n){for(var t=new Array(r),e=0;e<r;++e)t[e]=n;return t}function f(r){for(var n=new Array(r),t=0;t<r;++t)n[t]=0;return n}function c(r,n,t,e,o){if(e<=n)for(var a=0;a<o;++a)t[a+e|0]=r[a+n|0];else for(var u=o-1|0;u>=0;--u)t[u+e|0]=r[u+n|0]}function i(r){return r.slice(0)}exports.caml_array_dup=i,exports.caml_array_sub=r,exports.caml_array_concat=e,exports.caml_make_vect=u,exports.caml_make_float_vect=f,exports.caml_array_blit=c,exports.get=a,exports.set=o;
},{}],"Zxig":[function(require,module,exports) {
"use strict";var r=require("./caml_array.js");function n(e,t){for(;;){var u=t,c=e,a=c.length,s=0===a?1:a,i=s-u.length|0;if(0===i)return c.apply(null,u);if(i>=0)return function(r,e){return function(t){return n(r,e.concat([t]))}}(c,u);t=r.caml_array_sub(u,s,0|-i),e=c.apply(null,r.caml_array_sub(u,0,s))}}function e(r,e){var t=r.length;if(1===t)return r(e);switch(t){case 1:return r(e);case 2:return function(n){return r(e,n)};case 3:return function(n,t){return r(e,n,t)};case 4:return function(n,t,u){return r(e,n,t,u)};case 5:return function(n,t,u,c){return r(e,n,t,u,c)};case 6:return function(n,t,u,c,a){return r(e,n,t,u,c,a)};case 7:return function(n,t,u,c,a,s){return r(e,n,t,u,c,a,s)};default:return n(r,[e])}}function t(r){return 1===r.length?r:function(n){return e(r,n)}}function u(r,e,t){var u=r.length;if(2===u)return r(e,t);switch(u){case 1:return n(r(e),[t]);case 2:return r(e,t);case 3:return function(n){return r(e,t,n)};case 4:return function(n,u){return r(e,t,n,u)};case 5:return function(n,u,c){return r(e,t,n,u,c)};case 6:return function(n,u,c,a){return r(e,t,n,u,c,a)};case 7:return function(n,u,c,a,s){return r(e,t,n,u,c,a,s)};default:return n(r,[e,t])}}function c(r){return 2===r.length?r:function(n,e){return u(r,n,e)}}function a(r,e,t,u){var c=r.length;if(3===c)return r(e,t,u);switch(c){case 1:return n(r(e),[t,u]);case 2:return n(r(e,t),[u]);case 3:return r(e,t,u);case 4:return function(n){return r(e,t,u,n)};case 5:return function(n,c){return r(e,t,u,n,c)};case 6:return function(n,c,a){return r(e,t,u,n,c,a)};case 7:return function(n,c,a,s){return r(e,t,u,n,c,a,s)};default:return n(r,[e,t,u])}}function s(r){return 3===r.length?r:function(n,e,t){return a(r,n,e,t)}}function i(r,e,t,u,c){var a=r.length;if(4===a)return r(e,t,u,c);switch(a){case 1:return n(r(e),[t,u,c]);case 2:return n(r(e,t),[u,c]);case 3:return n(r(e,t,u),[c]);case 4:return r(e,t,u,c);case 5:return function(n){return r(e,t,u,c,n)};case 6:return function(n,a){return r(e,t,u,c,n,a)};case 7:return function(n,a,s){return r(e,t,u,c,n,a,s)};default:return n(r,[e,t,u,c])}}function f(r){return 4===r.length?r:function(n,e,t,u){return i(r,n,e,t,u)}}function o(r,e,t,u,c,a){var s=r.length;if(5===s)return r(e,t,u,c,a);switch(s){case 1:return n(r(e),[t,u,c,a]);case 2:return n(r(e,t),[u,c,a]);case 3:return n(r(e,t,u),[c,a]);case 4:return n(r(e,t,u,c),[a]);case 5:return r(e,t,u,c,a);case 6:return function(n){return r(e,t,u,c,a,n)};case 7:return function(n,s){return r(e,t,u,c,a,n,s)};default:return n(r,[e,t,u,c,a])}}function l(r){return 5===r.length?r:function(n,e,t,u,c){return o(r,n,e,t,u,c)}}function _(r,e,t,u,c,a,s){var i=r.length;if(6===i)return r(e,t,u,c,a,s);switch(i){case 1:return n(r(e),[t,u,c,a,s]);case 2:return n(r(e,t),[u,c,a,s]);case 3:return n(r(e,t,u),[c,a,s]);case 4:return n(r(e,t,u,c),[a,s]);case 5:return n(r(e,t,u,c,a),[s]);case 6:return r(e,t,u,c,a,s);case 7:return function(n){return r(e,t,u,c,a,s,n)};default:return n(r,[e,t,u,c,a,s])}}function h(r){return 6===r.length?r:function(n,e,t,u,c,a){return _(r,n,e,t,u,c,a)}}function p(r,e,t,u,c,a,s,i){var f=r.length;if(7===f)return r(e,t,u,c,a,s,i);switch(f){case 1:return n(r(e),[t,u,c,a,s,i]);case 2:return n(r(e,t),[u,c,a,s,i]);case 3:return n(r(e,t,u),[c,a,s,i]);case 4:return n(r(e,t,u,c),[a,s,i]);case 5:return n(r(e,t,u,c,a),[s,i]);case 6:return n(r(e,t,u,c,a,s),[i]);case 7:return r(e,t,u,c,a,s,i);default:return n(r,[e,t,u,c,a,s,i])}}function g(r){return 7===r.length?r:function(n,e,t,u,c,a,s){return p(r,n,e,t,u,c,a,s)}}function x(r,e,t,u,c,a,s,i,f){var o=r.length;if(8===o)return r(e,t,u,c,a,s,i,f);switch(o){case 1:return n(r(e),[t,u,c,a,s,i,f]);case 2:return n(r(e,t),[u,c,a,s,i,f]);case 3:return n(r(e,t,u),[c,a,s,i,f]);case 4:return n(r(e,t,u,c),[a,s,i,f]);case 5:return n(r(e,t,u,c,a),[s,i,f]);case 6:return n(r(e,t,u,c,a,s),[i,f]);case 7:return n(r(e,t,u,c,a,s,i),[f]);default:return n(r,[e,t,u,c,a,s,i,f])}}function v(r){return 8===r.length?r:function(n,e,t,u,c,a,s,i){return x(r,n,e,t,u,c,a,s,i)}}exports.app=n,exports._1=e,exports.__1=t,exports._2=u,exports.__2=c,exports._3=a,exports.__3=s,exports._4=i,exports.__4=f,exports._5=o,exports.__5=l,exports._6=_,exports.__6=h,exports._7=p,exports.__7=g,exports._8=x,exports.__8=v;
},{"./caml_array.js":"rBqF"}],"DdCv":[function(require,module,exports) {
"use strict";function r(r,t){return r===t}var t=2147483647,e=-2147483648;exports.equal=r,exports.max=t,exports.min=e;
},{}],"jRlH":[function(require,module,exports) {
"use strict";var r=require("./js_int.js");function t(r){return Math.ceil(r)}function n(t){return t>r.max?r.max:t<r.min?r.min:Math.ceil(t)}function o(r){return Math.floor(r)}function e(t){return t>r.max?r.max:t<r.min?r.min:Math.floor(t)}function i(r,t){return e(Math.random()*(t-r|0))+r|0}var a=n,u=e;exports.unsafe_ceil=t,exports.ceil_int=n,exports.ceil=a,exports.unsafe_floor=o,exports.floor_int=e,exports.floor=u,exports.random_int=i;
},{"./js_int.js":"DdCv"}],"e2Or":[function(require,module,exports) {
"use strict";function o(o){return void 0!==o.BS_PRIVATE_NESTED_SOME_NONE}function E(o){return void 0===o?{BS_PRIVATE_NESTED_SOME_NONE:0}:null!==o&&void 0!==o.BS_PRIVATE_NESTED_SOME_NONE?{BS_PRIVATE_NESTED_SOME_NONE:o.BS_PRIVATE_NESTED_SOME_NONE+1|0}:o}function _(o){return null==o?void 0:E(o)}function t(o){return void 0===o?void 0:E(o)}function n(o){return null===o?void 0:E(o)}function r(o){if(null===o||void 0===o.BS_PRIVATE_NESTED_SOME_NONE)return o;var E=o.BS_PRIVATE_NESTED_SOME_NONE;return 0===E?void 0:{BS_PRIVATE_NESTED_SOME_NONE:E-1|0}}function i(o){return void 0===o?void 0:r(o)}function u(o){return void 0!==o?o.VAL:o}exports.nullable_to_opt=_,exports.undefined_to_opt=t,exports.null_to_opt=n,exports.valFromOption=r,exports.some=E,exports.isNested=o,exports.option_get=i,exports.option_unwrap=u;
},{}],"QCFr":[function(require,module,exports) {
"use strict";function t(t,n){return t<n?-1:t===n?0:1}function n(t,n){return t?n?0:1:n?-1:0}function r(t,n){return t===n?0:t<n?-1:t>n||t==t?1:n==n?-1:0}function o(t,n){return t===n?0:t<n?-1:1}function e(t,n){return t?n:t}function c(t,n){return t<n?t:n}function i(t,n){return t<n?t:n}function a(t,n){return t<n?t:n}function m(t,n){return t<n?t:n}function _(t,n){return t<n?t:n}function u(t,n){return t||n}function l(t,n){return t>n?t:n}function p(t,n){return t>n?t:n}function x(t,n){return t>n?t:n}function s(t,n){return t>n?t:n}function f(t,n){return t>n?t:n}var v=t,b=t;exports.caml_int_compare=t,exports.caml_bool_compare=n,exports.caml_float_compare=r,exports.caml_nativeint_compare=v,exports.caml_string_compare=o,exports.caml_int32_compare=b,exports.caml_bool_min=e,exports.caml_int_min=c,exports.caml_float_min=i,exports.caml_string_min=a,exports.caml_nativeint_min=m,exports.caml_int32_min=_,exports.caml_bool_max=u,exports.caml_int_max=l,exports.caml_float_max=p,exports.caml_string_max=x,exports.caml_nativeint_max=s,exports.caml_int32_max=f;
},{}],"wJn3":[function(require,module,exports) {
"use strict";var r=require("./curry.js"),e=require("./js_math.js"),n=require("./caml_option.js"),t=require("./caml_primitive.js");function o(r,e){if(e>=0&&e<r.length)return n.some(r[e])}function u(r,e){if(!(e>=0&&e<r.length))throw{RE_EXN_ID:"Assert_failure",_1:["belt_Array.ml",27,4],Error:new Error};return r[e]}function f(r,e,n){return e>=0&&e<r.length&&(r[e]=n,!0)}function i(r,e,n){if(!(e>=0&&e<r.length))throw{RE_EXN_ID:"Assert_failure",_1:["belt_Array.ml",33,2],Error:new Error};r[e]=n}function a(r,e,n){var t=r[e];r[e]=r[n],r[n]=t}function c(r){for(var n=r.length,t=0;t<n;++t)a(r,t,e.random_int(t,n))}function s(r){var e=r.slice(0);return c(e),e}function p(r){for(var e=r.length,n=0,t=e/2|0;n<t;++n)a(r,0+n|0,((0+e|0)-n|0)-1|0)}function l(r){for(var e=r.length,n=new Array(e),t=0;t<e;++t)n[t]=r[(e-1|0)-t|0];return n}function x(r,e){if(r<=0)return[];for(var n=new Array(r),t=0;t<r;++t)n[t]=e;return n}function _(r,e){if(r<=0)return[];for(var n=new Array(r),t=0;t<r;++t)n[t]=e(t);return n}function v(e,n){return _(e,r.__1(n))}function h(r,e){var n=_(r,e);return c(n),n}function g(e,n){return h(e,r.__1(n))}function m(r,e){var n=e-r|0;if(n<0)return[];for(var t=new Array(n+1|0),o=0;o<=n;++o)t[o]=r+o|0;return t}function y(r,e,n){var t=e-r|0;if(t<0||n<=0)return[];for(var o=1+(t/n|0)|0,u=new Array(o),f=r,i=0;i<o;++i)u[i]=f,f=f+n|0;return u}function A(r,e){for(var n=r.length,t=e.length,o=n<t?n:t,u=new Array(o),f=0;f<o;++f)u[f]=[r[f],e[f]];return u}function d(r,e,n){for(var t=r.length,o=e.length,u=t<o?t:o,f=new Array(u),i=0;i<u;++i)f[i]=n(r[i],e[i]);return f}function w(e,n,t){return d(e,n,r.__2(t))}function U(r,e){for(var n=r.length,t=e.length,o=new Array(n+t|0),u=0;u<n;++u)o[u]=r[u];for(var f=0;f<t;++f)o[n+f|0]=e[f];return o}function E(r){for(var e=r.length,n=0,t=0;t<e;++t)n=n+r[t].length|0;var o=new Array(n);n=0;for(var u=0;u<e;++u)for(var f=r[u],i=0,a=f.length;i<a;++i)o[n]=f[i],n=n+1|0;return o}function I(r,e,n){if(n<=0)return[];var o=r.length,u=e<0?t.caml_int_max(o+e|0,0):e,f=o-u|0,i=f<n?f:n;if(i<=0)return[];for(var a=new Array(i),c=0;c<i;++c)a[c]=r[u+c|0];return a}function k(r,e){for(var n=r.length,o=e<0?t.caml_int_max(n+e|0,0):e,u=n-o|0,f=new Array(u),i=0;i<u;++i)f[i]=r[o+i|0];return f}function B(r,e,n,o){if(!(n<=0)){var u=r.length,f=e<0?t.caml_int_max(u+e|0,0):e,i=u-f|0,a=i<n?i:n;if(!(a<=0))for(var c=f,s=f+a|0;c<s;++c)r[c]=o}}function W(r,e,n,t,o){if(t<=e)for(var u=0;u<o;++u)n[u+t|0]=r[u+e|0];else for(var f=o-1|0;f>=0;--f)n[f+t|0]=r[f+e|0]}function q(r,e,n,o,u){var f=r.length,i=n.length,a=e<0?t.caml_int_max(f+e|0,0):e,c=o<0?t.caml_int_max(i+o|0,0):o,s=t.caml_int_min(u,t.caml_int_min(f-a|0,i-c|0));if(c<=a)for(var p=0;p<s;++p)n[p+c|0]=r[p+a|0];else for(var l=s-1|0;l>=0;--l)n[l+c|0]=r[l+a|0]}function R(r,e){for(var n=0,t=r.length;n<t;++n)e(r[n])}function j(e,n){return R(e,r.__1(n))}function b(r,e){for(var n=r.length,t=new Array(n),o=0;o<n;++o)t[o]=e(r[o]);return t}function z(e,n){return b(e,r.__1(n))}function M(r,e){for(var t,o=r.length,u=0;void 0===t&&u<o;){var f=r[u];e(f)&&(t=n.some(f)),u=u+1|0}return t}function D(e,n){return M(e,r.__1(n))}function N(r,e){for(var n,t=r.length,o=0;void 0===n&&o<t;){e(r[o])&&(n=o),o=o+1|0}return n}function P(e,n){return N(e,r.__1(n))}function S(r,e){for(var n=r.length,t=new Array(n),o=0,u=0;u<n;++u){var f=r[u];e(f)&&(t[o]=f,o=o+1|0)}return t.length=o,t}function X(e,n){return S(e,r.__1(n))}function F(r,e){for(var n=r.length,t=new Array(n),o=0,u=0;u<n;++u){var f=r[u];e(f,u)&&(t[o]=f,o=o+1|0)}return t.length=o,t}function O(e,n){return F(e,r.__2(n))}function T(r,e){for(var t=r.length,o=new Array(t),u=0,f=0;f<t;++f){var i=e(r[f]);void 0!==i&&(o[u]=n.valFromOption(i),u=u+1|0)}return o.length=u,o}function C(e,n){return T(e,r.__1(n))}function G(r,e){for(var n=0,t=r.length;n<t;++n)e(n,r[n])}function H(e,n){return G(e,r.__2(n))}function J(r,e){for(var n=r.length,t=new Array(n),o=0;o<n;++o)t[o]=e(o,r[o]);return t}function K(e,n){return J(e,r.__2(n))}function L(r,e,n){for(var t=e,o=0,u=r.length;o<u;++o)t=n(t,r[o]);return t}function Q(e,n,t){return L(e,n,r.__2(t))}function V(r,e,n){for(var t=e,o=r.length-1|0;o>=0;--o)t=n(t,r[o]);return t}function Y(e,n,t){return V(e,n,r.__2(t))}function Z(r,e,n,o){for(var u=n,f=t.caml_int_min(r.length,e.length)-1|0;f>=0;--f)u=o(u,r[f],e[f]);return u}function $(e,n,t,o){return Z(e,n,t,r.__3(o))}function rr(r,e,n){for(var t=e,o=0,u=r.length;o<u;++o)t=n(t,r[o],o);return t}function er(e,n,t){return rr(e,n,r.__3(t))}function nr(r,e){for(var n=r.length,t=0;;){var o=t;if(o===n)return!0;if(!e(r[o]))return!1;t=o+1|0}}function tr(e,n){return nr(e,r.__1(n))}function or(r,e){for(var n=r.length,t=0;;){var o=t;if(o===n)return!1;if(e(r[o]))return!0;t=o+1|0}}function ur(e,n){return or(e,r.__1(n))}function fr(r,e,n,t,o){for(;;){var u=n;if(u===o)return!0;if(!t(r[u],e[u]))return!1;n=u+1|0}}function ir(r,e,n){return fr(r,e,0,n,t.caml_int_min(r.length,e.length))}function ar(e,n,t){return ir(e,n,r.__2(t))}function cr(r,e,n){for(var o=0,u=t.caml_int_min(r.length,e.length);;){var f=o;if(f===u)return!1;if(n(r[f],e[f]))return!0;o=f+1|0}}function sr(e,n,t){return cr(e,n,r.__2(t))}function pr(r,e,n){var t=r.length;return t===e.length&&fr(r,e,0,n,t)}function lr(e,n,t){return pr(e,n,r.__2(t))}function xr(r,e,n){var t=r.length,o=e.length;if(t>o)return 1;if(t<o)return-1;for(var u=0;;){var f=u;if(f===t)return 0;var i=n(r[f],e[f]);if(0!==i)return i;u=f+1|0}}function _r(e,n,t){return xr(e,n,r.__2(t))}function vr(r,e){for(var n=r.length,t=0,o=0,u=new Array(n),f=new Array(n),i=0;i<n;++i){var a=r[i];e(a)?(u[t]=a,t=t+1|0):(f[o]=a,o=o+1|0)}return u.length=t,f.length=o,[u,f]}function hr(e,n){return vr(e,r.__1(n))}function gr(r){for(var e=r.length,n=new Array(e),t=new Array(e),o=0;o<e;++o){var u=r[o];n[o]=u[0],t[o]=u[1]}return[n,t]}exports.get=o,exports.getExn=u,exports.set=f,exports.setExn=i,exports.shuffleInPlace=c,exports.shuffle=s,exports.reverseInPlace=p,exports.reverse=l,exports.make=x,exports.range=m,exports.rangeBy=y,exports.makeByU=_,exports.makeBy=v,exports.makeByAndShuffleU=h,exports.makeByAndShuffle=g,exports.zip=A,exports.zipByU=d,exports.zipBy=w,exports.unzip=gr,exports.concat=U,exports.concatMany=E,exports.slice=I,exports.sliceToEnd=k,exports.fill=B,exports.blit=q,exports.blitUnsafe=W,exports.forEachU=R,exports.forEach=j,exports.mapU=b,exports.map=z,exports.getByU=M,exports.getBy=D,exports.getIndexByU=N,exports.getIndexBy=P,exports.keepU=S,exports.keep=X,exports.keepWithIndexU=F,exports.keepWithIndex=O,exports.keepMapU=T,exports.keepMap=C,exports.forEachWithIndexU=G,exports.forEachWithIndex=H,exports.mapWithIndexU=J,exports.mapWithIndex=K,exports.partitionU=vr,exports.partition=hr,exports.reduceU=L,exports.reduce=Q,exports.reduceReverseU=V,exports.reduceReverse=Y,exports.reduceReverse2U=Z,exports.reduceReverse2=$,exports.reduceWithIndexU=rr,exports.reduceWithIndex=er,exports.someU=or,exports.some=ur,exports.everyU=nr,exports.every=tr,exports.every2U=ir,exports.every2=ar,exports.some2U=cr,exports.some2=sr,exports.cmpU=xr,exports.cmp=_r,exports.eqU=pr,exports.eq=lr;
},{"./curry.js":"Zxig","./js_math.js":"jRlH","./caml_option.js":"e2Or","./caml_primitive.js":"QCFr"}],"Z2V9":[function(require,module,exports) {
"use strict";var r,t,e=require("./curry.js"),n=require("./belt_Array.js");function i(r,t,e,n,i){for(;;){var f=e,u=t;if(f>=n)return f;var a=r[f];if(!i(a,u))return f;e=f+1|0,t=a}}function f(r,t){var e=r.length;if(0===e||1===e)return e;var n=r[0],f=r[1];if(!t(n,f))return t(f,n)?0|-i(r,f,2,e,t):1;for(var u=f,a=2;;){var o=a,s=u;if(o>=e)return o;var v=r[o];if(!t(s,v))return o;a=o+1|0,u=v}}function u(r,t){return f(r,e.__2(t))}function a(r,t){var e=r.length;if(0===e)return!0;for(var n=0,i=e-1|0;;){var f=n;if(f===i)return!0;if(t(r[f],r[f+1|0])>0)return!1;n=f+1|0}}function o(r,t){return a(r,e.__2(t))}function s(r,t,e,i,f,u,a,o,s){for(var v=t+e|0,c=f+u|0,l=t,p=r[t],x=f,_=i[f],U=o;;){var b=U,y=_,S=x,h=p,g=l;if(s(h,y)<=0){a[b]=h;var d=g+1|0;if(d>=v)return n.blitUnsafe(i,S,a,b+1|0,c-S|0);U=b+1|0,p=r[d],l=d}else{a[b]=y;var B=S+1|0;if(B>=c)return n.blitUnsafe(r,g,a,b+1|0,v-g|0);U=b+1|0,_=i[B],x=B}}}function v(r,t,e,i,f,u,a,o,s){for(var v=t+e|0,c=f+u|0,l=t,p=r[t],x=f,_=i[f],U=o;;){var b=U,y=_,S=x,h=p,g=l,d=s(h,y);if(d<0){a[b]=h;var B=g+1|0,I=b+1|0;if(B<v){U=I,p=r[B],l=B;continue}return n.blitUnsafe(i,S,a,I,c-S|0),(I+c|0)-S|0}if(0!==d){a[b]=y;var j=S+1|0,q=b+1|0;if(!(j<c))return n.blitUnsafe(r,g,a,q,v-g|0),(q+v|0)-g|0;U=q,_=i[j],x=j}else{a[b]=h;var A=g+1|0,L=S+1|0,P=b+1|0;if(!(A<v&&L<c))return A===v?(n.blitUnsafe(i,L,a,P,c-L|0),(P+c|0)-L|0):(n.blitUnsafe(r,A,a,P,v-A|0),(P+v|0)-A|0);U=P,_=i[L],x=L,p=r[A],l=A}}}function c(r,t,n,i,f,u,a,o,s){return v(r,t,n,i,f,u,a,o,e.__2(s))}function l(r,t,e,n,i,f,u,a,o){for(var s=t+e|0,v=i+f|0,c=t,l=r[t],p=i,x=n[i],_=a;;){var U=_,b=p,y=l,S=c,h=o(y,x);if(h<0){var g=S+1|0;if(g>=s)return U;l=r[g],c=g}else if(0!==h){var d=b+1|0;if(d>=v)return U;x=n[d],p=d}else{u[U]=y;var B=S+1|0,I=b+1|0,j=U+1|0;if(!(B<s&&I<v))return j;_=j,x=n[I],p=I,l=r[B],c=B}}}function p(r,t,n,i,f,u,a,o,s){return l(r,t,n,i,f,u,a,o,e.__2(s))}function x(r,t,e,i,f,u,a,o,s){for(var v=t+e|0,c=f+u|0,l=t,p=r[t],x=f,_=i[f],U=o;;){var b=U,y=x,S=p,h=l,g=s(S,_);if(g<0){a[b]=S;var d=b+1|0,B=h+1|0;if(B>=v)return d;U=d,p=r[B],l=B}else if(0!==g){var I=y+1|0;if(!(I<c))return n.blitUnsafe(r,h,a,b,v-h|0),(b+v|0)-h|0;_=i[I],x=I}else{var j=h+1|0,q=y+1|0;if(!(j<v&&q<c))return j===v?b:(n.blitUnsafe(r,j,a,b,v-j|0),(b+v|0)-j|0);_=i[q],x=q,p=r[j],l=j}}}function _(r,t,n,i,f,u,a,o,s){return x(r,t,n,i,f,u,a,o,e.__2(s))}function U(r,t,e,n,i,f){for(var u=0;u<i;++u){for(var a=r[t+u|0],o=(n+u|0)-1|0;o>=n&&f(e[o],a)>0;)e[o+1|0]=e[o],o=o-1|0;e[o+1|0]=a}}function b(r,t,e,n,i,f){if(i<=5)return U(r,t,e,n,i,f);var u=i/2|0,a=i-u|0;return b(r,t+u|0,e,n+u|0,a,f),b(r,t,r,t+a|0,u,f),s(r,t+a|0,u,e,n+u|0,a,e,n,f)}function y(r,t){var e=r.length;if(e<=5)return U(r,0,r,0,e,t);var n=e/2|0,i=e-n|0,f=new Array(i);return b(r,n,f,0,i,t),b(r,0,r,i,n,t),s(r,i,n,f,0,i,r,0,t)}function S(r,t){return y(r,e.__2(t))}function h(r,t){var e=r.slice(0);return y(e,t),e}function g(r,t){return h(r,e.__2(t))}function d(r,t,e){var n=r.length;if(0===n)return-1;if(e(t,r[0])<0)return-1;if(e(t,r[n-1|0])>0)return 0|-(n+1|0);for(var i=0,f=n-1|0;;){var u=f,a=i,o=(a+u|0)/2|0,s=e(t,r[o]);if(0===s)return o;if(s<0){if(u===o)return 0===e(r[a],t)?a:0|-(u+1|0);f=o}else{if(a===o)return 0===e(r[u],t)?u:0|-(u+1|0);i=o}}}function B(r,t,n){return d(r,t,e.__2(n))}exports.Int=r,exports.$$String=t,exports.strictlySortedLengthU=f,exports.strictlySortedLength=u,exports.isSortedU=a,exports.isSorted=o,exports.stableSortInPlaceByU=y,exports.stableSortInPlaceBy=S,exports.stableSortByU=h,exports.stableSortBy=g,exports.binarySearchByU=d,exports.binarySearchBy=B,exports.unionU=v,exports.union=c,exports.intersectU=l,exports.intersect=p,exports.diffU=x,exports.diff=_;
},{"./curry.js":"Zxig","./belt_Array.js":"wJn3"}],"Q4KM":[function(require,module,exports) {
"use strict";var r=require("./curry.js"),t=require("./belt_Array.js"),n=require("./caml_option.js"),e=require("./belt_SortArray.js");function o(r){if(r)return n.some(r.hd)}function u(r){if(r)return r.hd;throw{RE_EXN_ID:"Not_found",Error:new Error}}function f(r){if(r)return r.tl}function i(r){if(r)return r.tl;throw{RE_EXN_ID:"Not_found",Error:new Error}}function l(r,t){return{hd:t,tl:r}}function a(r,t){if(!(t<0))for(var e=r,o=t;;){var u=o,f=e;if(!f)return;if(0===u)return n.some(f.hd);o=u-1|0,e=f.tl}}function d(r,t){if(t<0)throw{RE_EXN_ID:"Not_found",Error:new Error};for(var n=r,e=t;;){var o=e,u=n;if(!u)throw{RE_EXN_ID:"Not_found",Error:new Error};if(0===o)return u.hd;e=o-1|0,n=u.tl}}function h(r,t,n,e){for(;;){var o=e,u=n,f=t;if(!f)return;var i=f.tl,l=f.hd,a={hd:l,tl:0};r(l)?(u.tl=a,n=a,t=i):(o.tl=a,e=a,t=i)}}function s(r,t,n){for(;;){var e=n,o=t,u=r;if(!u)return;var f=u.hd,i={hd:f[0],tl:0},l={hd:f[1],tl:0};o.tl=i,e.tl=l,n=l,t=i,r=u.tl}}function c(r,t){for(;;){var n=t,e=r;if(!e)return n;var o={hd:e.hd,tl:0};n.tl=o,t=o,r=e.tl}}function v(r,t,n){for(;;){var e=n,o=t;if(!o)return;var u=o.tl,f=o.hd;if(r(f)){var i={hd:f,tl:0};e.tl=i,n=i,t=u}else t=u}}function p(r,t,n,e){for(;;){var o=e,u=n,f=t;if(!f)return;var i=f.tl,l=f.hd;if(r(l,o)){var a={hd:l,tl:0};u.tl=a,e=o+1|0,n=a,t=i}else e=o+1|0,t=i}}function x(r,t,e){for(;;){var o=e,u=t;if(!u)return;var f=u.tl,i=r(u.hd);if(void 0===i)t=f;else{var l={hd:n.valFromOption(i),tl:0};o.tl=l,e=l,t=f}}}function _(r,t,n,e){for(;;){var o=n,u=r;if(!u)return!1;var f=u.tl,i=u.hd;if(e(i[0],t))return o.tl=f,!0;var l={hd:i,tl:0};o.tl=l,n=l,r=f}}function U(r,t,n,e,o){for(;;){var u=e,f=r;if(!f)return!1;var i=f.tl,l=f.hd;if(o(l[0],t))return u.tl={hd:[t,n],tl:i},!0;var a={hd:l,tl:0};u.tl=a,e=a,r=i}}function m(r,t,n){for(;;){var e=t,o=r;if(!o)return;var u={hd:n(o.hd),tl:0};e.tl=u,t=u,r=o.tl}}function E(r,t,n){for(;;){var e=n,o=t,u=r;if(!u)return;if(!o)return;var f={hd:[u.hd,o.hd],tl:0};e.tl=f,n=f,t=o.tl,r=u.tl}}function y(r,t,n,e){for(;;){var o=e,u=n,f=t;if(!f)return;if(!u)return;var i={hd:r(f.hd,u.hd),tl:0};o.tl=i,e=i,n=u.tl,t=f.tl}}function I(r,t,n,e){for(;;){var o=e,u=n,f=t;if(!u)return;var i={hd:r(f,u.hd),tl:0};o.tl=i,e=i,n=u.tl,t=f+1|0}}function A(r,t,n){for(;;){var e=n,o=t,u=r;if(0===u)return!0;if(!o)return!1;var f={hd:o.hd,tl:0};e.tl=f,n=f,t=o.tl,r=u-1|0}}function R(r,t,n){for(;;){var e=n,o=t,u=r;if(0===u)return o;if(!o)return;var f={hd:o.hd,tl:0};e.tl=f,n=f,t=o.tl,r=u-1|0}}function g(r,t){if(!(t<0)){if(0===t)return 0;if(r){var n={hd:r.hd,tl:0};return A(t-1|0,r.tl,n)?n:void 0}}}function k(r,t){if(!(t<0))for(var n=r,e=t;;){if(0===e)return n;if(!n)return;e=e-1|0,n=n.tl}}function w(r,t){if(!(t<0)){if(0===t)return[0,r];if(r){var n={hd:r.hd,tl:0},e=R(t-1|0,r.tl,n);return void 0!==e?[n,e]:void 0}}}function W(r,t){if(!r)return t;var n={hd:r.hd,tl:0};return c(r.tl,n).tl=t,n}function B(r,t){if(!r)return 0;var n={hd:t(r.hd),tl:0};return m(r.tl,n,t),n}function N(t,n){return B(t,r.__1(n))}function q(r,t,n){if(!r)return 0;if(!t)return 0;var e={hd:n(r.hd,t.hd),tl:0};return y(n,r.tl,t.tl,e),e}function z(t,n,e){return q(t,n,r.__2(e))}function j(r,t){if(!r)return 0;var n={hd:t(0,r.hd),tl:0};return I(t,1,r.tl,n),n}function D(t,n){return j(t,r.__2(n))}function X(r,t){if(r<=0)return 0;for(var n={hd:t(0),tl:0},e=n,o=1;o<r;){var u={hd:t(o),tl:0};e.tl=u,e=u,o=o+1|0}return n}function b(t,n){return X(t,r.__1(n))}function M(r,t){if(r<=0)return 0;for(var n={hd:t,tl:0},e=n,o=1;o<r;){var u={hd:t,tl:0};e.tl=u,e=u,o=o+1|0}return n}function F(r){for(var t=r,n=0;;){if(!t)return n;n=n+1|0,t=t.tl}}function O(r,t,n){for(;;){var e=n,o=t;if(!e)return;r[o]=e.hd,n=e.tl,t=o+1|0}}function P(r){for(var t=r.length-1|0,n=0;;){var e=n,o=t;if(o<0)return e;n={hd:r[o],tl:e},t=o-1|0}}function S(r){var t=F(r),n=new Array(t);return O(n,0,r),n}function C(r){var n=S(r);return t.shuffleInPlace(n),P(n)}function L(r,t){for(;;){var n=t,e=r;if(!e)return n;t={hd:e.hd,tl:n},r=e.tl}}function G(r){return L(r,0)}function H(r,t){for(;;){var n=t,e=r;if(!n)return void(e.tl=0);t=n.tl,r=c(n.hd,e)}}function J(r){for(;;){var t=r;if(!t)return 0;var n=t.hd;if(n){var e={hd:n.hd,tl:0};return H(c(n.tl,e),t.tl),e}r=t.tl}}function K(r){var t=r.length;if(1===t)return r[0];if(0===t)return 0;for(var n=r.length,e=r[n-1|0],o=n-2|0;o>=0;--o)e=W(r[o],e);return e}function Q(r,t){for(var n=0,e=r;;){var o=e,u=n;if(!o)return u;e=o.tl,n={hd:t(o.hd),tl:u}}}function T(t,n){return Q(t,r.__1(n))}function V(r,t){for(;;){var n=r;if(!n)return;t(n.hd),r=n.tl}}function Y(t,n){return V(t,r.__1(n))}function Z(r,t){for(var n=r,e=0;;){var o=e,u=n;if(!u)return;t(o,u.hd),e=o+1|0,n=u.tl}}function $(t,n){return Z(t,r.__2(n))}function rr(r,t,n){for(;;){var e=r;if(!e)return t;t=n(t,e.hd),r=e.tl}}function tr(t,n,e){return rr(t,n,r.__2(e))}function nr(r,t,n){return r?n(nr(r.tl,t,n),r.hd):t}function er(r,n,e){return F(r)<1e3?nr(r,n,e):t.reduceReverseU(S(r),n,e)}function or(t,n,e){return er(t,n,r.__2(e))}function ur(r,t,n){for(var e=r,o=t,u=0;;){var f=u,i=e;if(!i)return o;u=f+1|0,o=n(o,i.hd,f),e=i.tl}}function fr(t,n,e){return ur(t,n,r.__3(e))}function ir(r,t,n){for(var e=r,o=t,u=0;;){var f=u,i=o,l=e;if(!l)return f;if(!i)return f;u={hd:n(l.hd,i.hd),tl:f},o=i.tl,e=l.tl}}function lr(t,n,e){return ir(t,n,r.__2(e))}function ar(r,t,n){for(;;){var e=t,o=r;if(!o)return;if(!e)return;n(o.hd,e.hd),t=e.tl,r=o.tl}}function dr(t,n,e){return ar(t,n,r.__2(e))}function hr(r,t,n,e){for(;;){var o=t,u=r;if(!u)return n;if(!o)return n;n=e(n,u.hd,o.hd),t=o.tl,r=u.tl}}function sr(t,n,e,o){return hr(t,n,e,r.__3(o))}function cr(r,t,n,e){return r&&t?e(cr(r.tl,t.tl,n,e),r.hd,t.hd):n}function vr(r,n,e,o){return F(r)<1e3?cr(r,n,e,o):t.reduceReverse2U(S(r),S(n),e,o)}function pr(t,n,e,o){return vr(t,n,e,r.__3(o))}function xr(r,t){for(;;){var n=r;if(!n)return!0;if(!t(n.hd))return!1;r=n.tl}}function _r(t,n){return xr(t,r.__1(n))}function Ur(r,t){for(;;){var n=r;if(!n)return!1;if(t(n.hd))return!0;r=n.tl}}function mr(t,n){return Ur(t,r.__1(n))}function Er(r,t,n){for(;;){var e=t,o=r;if(!o)return!0;if(!e)return!0;if(!n(o.hd,e.hd))return!1;t=e.tl,r=o.tl}}function yr(t,n,e){return Er(t,n,r.__2(e))}function Ir(r,t){for(;;){var n=r;if(!n)return t?-1:0;if(!t)return 1;t=t.tl,r=n.tl}}function Ar(r,t,n){for(;;){var e=t,o=r;if(!o)return e?-1:0;if(!e)return 1;var u=n(o.hd,e.hd);if(0!==u)return u;t=e.tl,r=o.tl}}function Rr(t,n,e){return Ar(t,n,r.__2(e))}function gr(r,t,n){for(;;){var e=t,o=r;if(!o)return!e;if(!e)return!1;if(!n(o.hd,e.hd))return!1;t=e.tl,r=o.tl}}function kr(t,n,e){return gr(t,n,r.__2(e))}function wr(r,t,n){for(;;){var e=t,o=r;if(!o)return!1;if(!e)return!1;if(n(o.hd,e.hd))return!0;t=e.tl,r=o.tl}}function Wr(t,n,e){return wr(t,n,r.__2(e))}function Br(r,t,n){for(;;){var e=r;if(!e)return!1;if(n(e.hd,t))return!0;r=e.tl}}function Nr(t,n,e){return Br(t,n,r.__2(e))}function qr(r,t,e){for(;;){var o=r;if(!o)return;var u=o.hd;if(e(u[0],t))return n.some(u[1]);r=o.tl}}function zr(t,n,e){return qr(t,n,r.__2(e))}function jr(r,t,n){for(;;){var e=r;if(!e)return!1;if(n(e.hd[0],t))return!0;r=e.tl}}function Dr(t,n,e){return jr(t,n,r.__2(e))}function Xr(r,t,n){if(!r)return 0;var e=r.tl,o=r.hd;if(n(o[0],t))return e;var u={hd:o,tl:0};return _(e,t,u,n)?u:r}function br(t,n,e){return Xr(t,n,r.__2(e))}function Mr(r,t,n,e){if(!r)return{hd:[t,n],tl:0};var o=r.tl,u=r.hd;if(e(u[0],t))return{hd:[t,n],tl:o};var f={hd:u,tl:0};return U(o,t,n,f,e)?f:{hd:[t,n],tl:r}}function Fr(t,n,e,o){return Mr(t,n,e,r.__2(o))}function Or(r,t){var n=S(r);return e.stableSortInPlaceByU(n,t),P(n)}function Pr(t,n){return Or(t,r.__2(n))}function Sr(r,t){for(;;){var e=r;if(!e)return;var o=e.hd;if(t(o))return n.some(o);r=e.tl}}function Cr(t,n){return Sr(t,r.__1(n))}function Lr(r,t){for(;;){var n=r;if(!n)return 0;var e=n.tl,o=n.hd;if(t(o)){var u={hd:o,tl:0};return v(t,e,u),u}r=e}}function Gr(t,n){return Lr(t,r.__1(n))}function Hr(r,t){for(var n=r,e=0;;){var o=e,u=n;if(!u)return 0;var f=u.tl,i=u.hd;if(t(i,o)){var l={hd:i,tl:0};return p(t,f,l,o+1|0),l}e=o+1|0,n=f}}function Jr(t,n){return Hr(t,r.__2(n))}function Kr(r,t){for(;;){var e=r;if(!e)return 0;var o=e.tl,u=t(e.hd);if(void 0!==u){var f={hd:n.valFromOption(u),tl:0};return x(t,o,f),f}r=o}}function Qr(t,n){return Kr(t,r.__1(n))}function Tr(r,t){if(!r)return[0,0];var n=r.hd,e={hd:n,tl:0},o={hd:n,tl:0},u=t(n);return h(t,r.tl,e,o),u?[e,o.tl]:[e.tl,o]}function Vr(t,n){return Tr(t,r.__1(n))}function Yr(r){if(!r)return[0,0];var t=r.hd,n={hd:t[0],tl:0},e={hd:t[1],tl:0};return s(r.tl,n,e),[n,e]}function Zr(r,t){if(!r)return 0;if(!t)return 0;var n={hd:[r.hd,t.hd],tl:0};return E(r.tl,t.tl,n),n}var $r=F,rt=Gr,tt=Jr;exports.length=F,exports.size=$r,exports.head=o,exports.headExn=u,exports.tail=f,exports.tailExn=i,exports.add=l,exports.get=a,exports.getExn=d,exports.make=M,exports.makeByU=X,exports.makeBy=b,exports.shuffle=C,exports.drop=k,exports.take=g,exports.splitAt=w,exports.concat=W,exports.concatMany=K,exports.reverseConcat=L,exports.flatten=J,exports.mapU=B,exports.map=N,exports.zip=Zr,exports.zipByU=q,exports.zipBy=z,exports.mapWithIndexU=j,exports.mapWithIndex=D,exports.fromArray=P,exports.toArray=S,exports.reverse=G,exports.mapReverseU=Q,exports.mapReverse=T,exports.forEachU=V,exports.forEach=Y,exports.forEachWithIndexU=Z,exports.forEachWithIndex=$,exports.reduceU=rr,exports.reduce=tr,exports.reduceWithIndexU=ur,exports.reduceWithIndex=fr,exports.reduceReverseU=er,exports.reduceReverse=or,exports.mapReverse2U=ir,exports.mapReverse2=lr,exports.forEach2U=ar,exports.forEach2=dr,exports.reduce2U=hr,exports.reduce2=sr,exports.reduceReverse2U=vr,exports.reduceReverse2=pr,exports.everyU=xr,exports.every=_r,exports.someU=Ur,exports.some=mr,exports.every2U=Er,exports.every2=yr,exports.some2U=wr,exports.some2=Wr,exports.cmpByLength=Ir,exports.cmpU=Ar,exports.cmp=Rr,exports.eqU=gr,exports.eq=kr,exports.hasU=Br,exports.has=Nr,exports.getByU=Sr,exports.getBy=Cr,exports.keepU=Lr,exports.keep=Gr,exports.filter=rt,exports.keepWithIndexU=Hr,exports.keepWithIndex=Jr,exports.filterWithIndex=tt,exports.keepMapU=Kr,exports.keepMap=Qr,exports.partitionU=Tr,exports.partition=Vr,exports.unzip=Yr,exports.getAssocU=qr,exports.getAssoc=zr,exports.hasAssocU=jr,exports.hasAssoc=Dr,exports.removeAssocU=Xr,exports.removeAssoc=br,exports.setAssocU=Mr,exports.setAssoc=Fr,exports.sortU=Or,exports.sort=Pr;
},{"./curry.js":"Zxig","./belt_Array.js":"wJn3","./caml_option.js":"e2Or","./belt_SortArray.js":"Z2V9"}],"kx9t":[function(require,module,exports) {
"use strict";var t=require("bs-platform/lib/js/belt_Array.js");function r(t,r){return[t[0]+r[0],t[1]+r[1],t[2]+r[2]]}function e(t,r){return[t[0]*r,t[1]*r,t[2]*r]}function n(t,n,u){return r(e(t,u),e(n,1-u))}function u(r){var e=new Float32Array(Math.imul(3,r.length));return t.forEachWithIndex(r,function(t,r){e[Math.imul(t,3)]=r[0],e[1+Math.imul(3,t)|0]=r[1],e[2+Math.imul(3,t)|0]=r[2]}),e.buffer}var a=12;exports.size=a,exports.add=r,exports.scale=e,exports.mix=n,exports.flatten=u;
},{"bs-platform/lib/js/belt_Array.js":"wJn3"}],"cnZ9":[function(require,module,exports) {
"use strict";var o=require("./curry.js"),r=require("./caml_option.js");function t(o,t){if(void 0!==o)return t(r.valFromOption(o))}function n(r,n){return t(r,o.__1(n))}function i(o){if(void 0!==o)return r.valFromOption(o);throw{RE_EXN_ID:"Not_found",Error:new Error}}function e(o,t,n){return void 0!==o?n(r.valFromOption(o)):t}function u(r,t,n){return e(r,t,o.__1(n))}function p(o,t){if(void 0!==o)return r.some(t(r.valFromOption(o)))}function f(r,t){return p(r,o.__1(t))}function a(o,t){if(void 0!==o)return t(r.valFromOption(o))}function v(r,t){return a(r,o.__1(t))}function c(o,t){return void 0!==o?r.valFromOption(o):t}function s(o){return void 0!==o}function m(o){return void 0===o}function x(o,t,n){return void 0!==o?void 0!==t&&n(r.valFromOption(o),r.valFromOption(t)):void 0===t}function l(r,t,n){return x(r,t,o.__2(n))}function _(o,t,n){return void 0!==o?void 0!==t?n(r.valFromOption(o),r.valFromOption(t)):1:void 0!==t?-1:0}function d(r,t,n){return _(r,t,o.__2(n))}exports.forEachU=t,exports.forEach=n,exports.getExn=i,exports.mapWithDefaultU=e,exports.mapWithDefault=u,exports.mapU=p,exports.map=f,exports.flatMapU=a,exports.flatMap=v,exports.getWithDefault=c,exports.isSome=s,exports.isNone=m,exports.eqU=x,exports.eq=l,exports.cmpU=_,exports.cmp=d;
},{"./curry.js":"Zxig","./caml_option.js":"e2Or"}],"i88R":[function(require,module,exports) {
"use strict";var r=require("bs-platform/lib/js/belt_Option.js"),e=require("bs-platform/lib/js/caml_option.js");function t(t,a,n){return r.flatMap(e.nullable_to_opt(t.createShader(function(){switch(a){case"VertexShader":return 35633;case"FragmentShader":return 35632}}())),function(r){if(t.shaderSource(r,n),t.compileShader(r),t.getShaderParameter(r,35713))return e.some(r)})}function a(r,e){return t(r,"VertexShader",e)}function n(r,e){return t(r,"FragmentShader",e)}function o(t,a,n){return r.flatMap(t.createProgram(),function(r){if(t.attachShader(r,a),t.attachShader(r,n),t.linkProgram(r),t.getProgramParameter(r,35714))return e.some(r)})}function i(r,e,t){var a=r.getAttribLocation(e,t);if(-1!==a)return a}exports.makeVertexShader=a,exports.makeFragmentShader=n,exports.makeProgram=o,exports.getAttribLocation=i;
},{"bs-platform/lib/js/belt_Option.js":"cnZ9","bs-platform/lib/js/caml_option.js":"e2Or"}],"d9YP":[function(require,module,exports) {
"use strict";var t=require("bs-platform/lib/js/belt_List.js"),r=require("./Vec3.bs.js"),e=require("bs-platform/lib/js/belt_Option.js"),o=require("bs-platform/lib/js/caml_option.js"),n=require("./WebGl.bs.js"),i=e.getExn(o.nullable_to_opt(document.querySelector("canvas"))),a=e.getExn(o.nullable_to_opt(i.getContext("webgl"))),l=e.getExn(n.makeVertexShader(a,"\n    attribute vec4 vPosition;\n    attribute vec4 vColor;\n    varying vec4 fColor;\n\n    void main() {\n      fColor = vColor;\n      gl_Position = vPosition;\n    }")),s=e.getExn(n.makeFragmentShader(a,"\n    precision mediump float;\n    \n    varying vec4 fColor;\n    \n    void main() {\n      gl_FragColor = fColor;\n    }")),b=e.getExn(n.makeProgram(a,l,s));function f(t,r,e,o,n){return[{hd:r,tl:{hd:e,tl:{hd:o,tl:t[0]}}},{hd:n,tl:{hd:n,tl:{hd:n,tl:t[1]}}}]}function u(t,e,o,n,i,a){for(;;){var l=a,s=n,b=o,v=e,x=t;if(0===l)return f(f(f(f(x,v,s,b,[1,0,0]),v,s,i,[0,1,0]),v,b,i,[0,0,1]),b,s,i,[0,0,0]);var g=r.mix(v,b,.5),c=r.mix(v,s,.5),p=r.mix(v,i,.5),m=r.mix(b,s,.5),d=r.mix(b,i,.5),_=r.mix(s,i,.5);a=l-1|0,n=_,o=d,e=p,t=u(u(u(x,v,g,c,p,l-1|0),g,b,m,d,l-1|0),c,m,s,_,l-1|0)}}function v(r,e,o,n,i){var a=u([0,0],r,e,o,n,i);return[t.toArray(a[0]),t.toArray(a[1])]}a.useProgram(b);var x=v([0,0,-1],[0,.9428,.3333],[-.8165,-.4714,.3333],[.8165,-.4714,.3333],3),g=x[1],c=x[0],p=e.getExn(o.nullable_to_opt(a.createBuffer()));a.bindBuffer(34962,p),a.bufferData(34962,r.flatten(c),35044);var m=e.getExn(n.getAttribLocation(a,b,"vPosition"));a.vertexAttribPointer(m,3,5126,!1,0,0),a.enableVertexAttribArray(m);var d=e.getExn(o.nullable_to_opt(a.createBuffer()));a.bindBuffer(34962,d),a.bufferData(34962,r.flatten(g),35044);var _=e.getExn(n.getAttribLocation(a,b,"vColor"));a.vertexAttribPointer(_,3,5126,!1,0,0),a.enableVertexAttribArray(_),a.enable(2929),a.viewport(0,0,i.width,i.height),a.clearColor(1,1,1,1),a.clear(16384),a.drawArrays(4,0,c.length),exports.canvas=i,exports.gl=a,exports.program=b,exports.points=c,exports.colors=g,exports.vBuffer=p,exports.vPosition=m,exports.cBuffer=d,exports.vColor=_;
},{"bs-platform/lib/js/belt_List.js":"Q4KM","./Vec3.bs.js":"kx9t","bs-platform/lib/js/belt_Option.js":"cnZ9","bs-platform/lib/js/caml_option.js":"e2Or","./WebGl.bs.js":"i88R"}]},{},["d9YP"], null)
//# sourceMappingURL=Sierpinski3D.bs.57f525c7.js.map