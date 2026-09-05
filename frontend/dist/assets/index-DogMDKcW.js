(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function ov(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var r0={exports:{}},hc={},s0={exports:{}},Xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var co=Symbol.for("react.element"),lv=Symbol.for("react.portal"),cv=Symbol.for("react.fragment"),uv=Symbol.for("react.strict_mode"),dv=Symbol.for("react.profiler"),fv=Symbol.for("react.provider"),hv=Symbol.for("react.context"),pv=Symbol.for("react.forward_ref"),mv=Symbol.for("react.suspense"),xv=Symbol.for("react.memo"),gv=Symbol.for("react.lazy"),kh=Symbol.iterator;function vv(t){return t===null||typeof t!="object"?null:(t=kh&&t[kh]||t["@@iterator"],typeof t=="function"?t:null)}var a0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},o0=Object.assign,l0={};function Qs(t,e,n){this.props=t,this.context=e,this.refs=l0,this.updater=n||a0}Qs.prototype.isReactComponent={};Qs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Qs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function c0(){}c0.prototype=Qs.prototype;function bf(t,e,n){this.props=t,this.context=e,this.refs=l0,this.updater=n||a0}var wf=bf.prototype=new c0;wf.constructor=bf;o0(wf,Qs.prototype);wf.isPureReactComponent=!0;var Bh=Array.isArray,u0=Object.prototype.hasOwnProperty,Ef={current:null},d0={key:!0,ref:!0,__self:!0,__source:!0};function f0(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)u0.call(e,i)&&!d0.hasOwnProperty(i)&&(r[i]=e[i]);var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];r.children=c}if(t&&t.defaultProps)for(i in l=t.defaultProps,l)r[i]===void 0&&(r[i]=l[i]);return{$$typeof:co,type:t,key:s,ref:a,props:r,_owner:Ef.current}}function _v(t,e){return{$$typeof:co,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Tf(t){return typeof t=="object"&&t!==null&&t.$$typeof===co}function yv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var zh=/\/+/g;function Dc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?yv(""+t.key):e.toString(36)}function pl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case co:case lv:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Dc(a,0):i,Bh(r)?(n="",t!=null&&(n=t.replace(zh,"$&/")+"/"),pl(r,e,n,"",function(u){return u})):r!=null&&(Tf(r)&&(r=_v(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(zh,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Bh(t))for(var l=0;l<t.length;l++){s=t[l];var c=i+Dc(s,l);a+=pl(s,e,n,c,r)}else if(c=vv(t),typeof c=="function")for(t=c.call(t),l=0;!(s=t.next()).done;)s=s.value,c=i+Dc(s,l++),a+=pl(s,e,n,c,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function To(t,e,n){if(t==null)return t;var i=[],r=0;return pl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Sv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ln={current:null},ml={transition:null},Mv={ReactCurrentDispatcher:ln,ReactCurrentBatchConfig:ml,ReactCurrentOwner:Ef};function h0(){throw Error("act(...) is not supported in production builds of React.")}Xe.Children={map:To,forEach:function(t,e,n){To(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return To(t,function(){e++}),e},toArray:function(t){return To(t,function(e){return e})||[]},only:function(t){if(!Tf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Xe.Component=Qs;Xe.Fragment=cv;Xe.Profiler=dv;Xe.PureComponent=bf;Xe.StrictMode=uv;Xe.Suspense=mv;Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mv;Xe.act=h0;Xe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=o0({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Ef.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(c in e)u0.call(e,c)&&!d0.hasOwnProperty(c)&&(i[c]=e[c]===void 0&&l!==void 0?l[c]:e[c])}var c=arguments.length-2;if(c===1)i.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];i.children=l}return{$$typeof:co,type:t.type,key:r,ref:s,props:i,_owner:a}};Xe.createContext=function(t){return t={$$typeof:hv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:fv,_context:t},t.Consumer=t};Xe.createElement=f0;Xe.createFactory=function(t){var e=f0.bind(null,t);return e.type=t,e};Xe.createRef=function(){return{current:null}};Xe.forwardRef=function(t){return{$$typeof:pv,render:t}};Xe.isValidElement=Tf;Xe.lazy=function(t){return{$$typeof:gv,_payload:{_status:-1,_result:t},_init:Sv}};Xe.memo=function(t,e){return{$$typeof:xv,type:t,compare:e===void 0?null:e}};Xe.startTransition=function(t){var e=ml.transition;ml.transition={};try{t()}finally{ml.transition=e}};Xe.unstable_act=h0;Xe.useCallback=function(t,e){return ln.current.useCallback(t,e)};Xe.useContext=function(t){return ln.current.useContext(t)};Xe.useDebugValue=function(){};Xe.useDeferredValue=function(t){return ln.current.useDeferredValue(t)};Xe.useEffect=function(t,e){return ln.current.useEffect(t,e)};Xe.useId=function(){return ln.current.useId()};Xe.useImperativeHandle=function(t,e,n){return ln.current.useImperativeHandle(t,e,n)};Xe.useInsertionEffect=function(t,e){return ln.current.useInsertionEffect(t,e)};Xe.useLayoutEffect=function(t,e){return ln.current.useLayoutEffect(t,e)};Xe.useMemo=function(t,e){return ln.current.useMemo(t,e)};Xe.useReducer=function(t,e,n){return ln.current.useReducer(t,e,n)};Xe.useRef=function(t){return ln.current.useRef(t)};Xe.useState=function(t){return ln.current.useState(t)};Xe.useSyncExternalStore=function(t,e,n){return ln.current.useSyncExternalStore(t,e,n)};Xe.useTransition=function(){return ln.current.useTransition()};Xe.version="18.3.1";s0.exports=Xe;var ce=s0.exports;const or=ov(ce);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bv=ce,wv=Symbol.for("react.element"),Ev=Symbol.for("react.fragment"),Tv=Object.prototype.hasOwnProperty,Av=bv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Cv={key:!0,ref:!0,__self:!0,__source:!0};function p0(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)Tv.call(e,i)&&!Cv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:wv,type:t,key:s,ref:a,props:r,_owner:Av.current}}hc.Fragment=Ev;hc.jsx=p0;hc.jsxs=p0;r0.exports=hc;var o=r0.exports,ku={},m0={exports:{}},Cn={},x0={exports:{}},g0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,W){var q=D.length;D.push(W);e:for(;0<q;){var ne=q-1>>>1,re=D[ne];if(0<r(re,W))D[ne]=W,D[q]=re,q=ne;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var W=D[0],q=D.pop();if(q!==W){D[0]=q;e:for(var ne=0,re=D.length,Fe=re>>>1;ne<Fe;){var Qe=2*(ne+1)-1,Ge=D[Qe],Q=Qe+1,de=D[Q];if(0>r(Ge,q))Q<re&&0>r(de,Ge)?(D[ne]=de,D[Q]=q,ne=Q):(D[ne]=Ge,D[Qe]=q,ne=Qe);else if(Q<re&&0>r(de,q))D[ne]=de,D[Q]=q,ne=Q;else break e}}return W}function r(D,W){var q=D.sortIndex-W.sortIndex;return q!==0?q:D.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,l=a.now();t.unstable_now=function(){return a.now()-l}}var c=[],u=[],h=1,p=null,f=3,m=!1,g=!1,w=!1,x=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function M(D){for(var W=n(u);W!==null;){if(W.callback===null)i(u);else if(W.startTime<=D)i(u),W.sortIndex=W.expirationTime,e(c,W);else break;W=n(u)}}function S(D){if(w=!1,M(D),!g)if(n(c)!==null)g=!0,Y(T);else{var W=n(u);W!==null&&j(S,W.startTime-D)}}function T(D,W){g=!1,w&&(w=!1,d(v),v=-1),m=!0;var q=f;try{for(M(W),p=n(c);p!==null&&(!(p.expirationTime>W)||D&&!P());){var ne=p.callback;if(typeof ne=="function"){p.callback=null,f=p.priorityLevel;var re=ne(p.expirationTime<=W);W=t.unstable_now(),typeof re=="function"?p.callback=re:p===n(c)&&i(c),M(W)}else i(c);p=n(c)}if(p!==null)var Fe=!0;else{var Qe=n(u);Qe!==null&&j(S,Qe.startTime-W),Fe=!1}return Fe}finally{p=null,f=q,m=!1}}var E=!1,C=null,v=-1,N=5,L=-1;function P(){return!(t.unstable_now()-L<N)}function F(){if(C!==null){var D=t.unstable_now();L=D;var W=!0;try{W=C(!0,D)}finally{W?I():(E=!1,C=null)}}else E=!1}var I;if(typeof y=="function")I=function(){y(F)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,z=$.port2;$.port1.onmessage=F,I=function(){z.postMessage(null)}}else I=function(){x(F,0)};function Y(D){C=D,E||(E=!0,I())}function j(D,W){v=x(function(){D(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){g||m||(g=!0,Y(T))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(D){switch(f){case 1:case 2:case 3:var W=3;break;default:W=f}var q=f;f=W;try{return D()}finally{f=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,W){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var q=f;f=D;try{return W()}finally{f=q}},t.unstable_scheduleCallback=function(D,W,q){var ne=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?ne+q:ne):q=ne,D){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=q+re,D={id:h++,callback:W,priorityLevel:D,startTime:q,expirationTime:re,sortIndex:-1},q>ne?(D.sortIndex=q,e(u,D),n(c)===null&&D===n(u)&&(w?(d(v),v=-1):w=!0,j(S,q-ne))):(D.sortIndex=re,e(c,D),g||m||(g=!0,Y(T))),D},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(D){var W=f;return function(){var q=f;f=W;try{return D.apply(this,arguments)}finally{f=q}}}})(g0);x0.exports=g0;var Nv=x0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rv=ce,An=Nv;function ae(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v0=new Set,ja={};function qr(t,e){zs(t,e),zs(t+"Capture",e)}function zs(t,e){for(ja[t]=e,t=0;t<e.length;t++)v0.add(e[t])}var Ui=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bu=Object.prototype.hasOwnProperty,Pv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Vh={},Hh={};function Lv(t){return Bu.call(Hh,t)?!0:Bu.call(Vh,t)?!1:Pv.test(t)?Hh[t]=!0:(Vh[t]=!0,!1)}function Dv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Iv(t,e,n,i){if(e===null||typeof e>"u"||Dv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function cn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Xt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Xt[t]=new cn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Xt[e]=new cn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Xt[t]=new cn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Xt[t]=new cn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Xt[t]=new cn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Xt[t]=new cn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Xt[t]=new cn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Xt[t]=new cn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Xt[t]=new cn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Af=/[\-:]([a-z])/g;function Cf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Af,Cf);Xt[e]=new cn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Af,Cf);Xt[e]=new cn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Af,Cf);Xt[e]=new cn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Xt[t]=new cn(t,1,!1,t.toLowerCase(),null,!1,!1)});Xt.xlinkHref=new cn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Xt[t]=new cn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Nf(t,e,n,i){var r=Xt.hasOwnProperty(e)?Xt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Iv(e,n,r,i)&&(n=null),i||r===null?Lv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Vi=Rv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ao=Symbol.for("react.element"),vs=Symbol.for("react.portal"),_s=Symbol.for("react.fragment"),Rf=Symbol.for("react.strict_mode"),zu=Symbol.for("react.profiler"),_0=Symbol.for("react.provider"),y0=Symbol.for("react.context"),Pf=Symbol.for("react.forward_ref"),Vu=Symbol.for("react.suspense"),Hu=Symbol.for("react.suspense_list"),Lf=Symbol.for("react.memo"),Ji=Symbol.for("react.lazy"),S0=Symbol.for("react.offscreen"),jh=Symbol.iterator;function fa(t){return t===null||typeof t!="object"?null:(t=jh&&t[jh]||t["@@iterator"],typeof t=="function"?t:null)}var wt=Object.assign,Ic;function Ta(t){if(Ic===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ic=e&&e[1]||""}return`
`+Ic+t}var Uc=!1;function Fc(t,e){if(!t||Uc)return"";Uc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,l=s.length-1;1<=a&&0<=l&&r[a]!==s[l];)l--;for(;1<=a&&0<=l;a--,l--)if(r[a]!==s[l]){if(a!==1||l!==1)do if(a--,l--,0>l||r[a]!==s[l]){var c=`
`+r[a].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=a&&0<=l);break}}}finally{Uc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ta(t):""}function Uv(t){switch(t.tag){case 5:return Ta(t.type);case 16:return Ta("Lazy");case 13:return Ta("Suspense");case 19:return Ta("SuspenseList");case 0:case 2:case 15:return t=Fc(t.type,!1),t;case 11:return t=Fc(t.type.render,!1),t;case 1:return t=Fc(t.type,!0),t;default:return""}}function ju(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case _s:return"Fragment";case vs:return"Portal";case zu:return"Profiler";case Rf:return"StrictMode";case Vu:return"Suspense";case Hu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case y0:return(t.displayName||"Context")+".Consumer";case _0:return(t._context.displayName||"Context")+".Provider";case Pf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Lf:return e=t.displayName||null,e!==null?e:ju(t.type)||"Memo";case Ji:e=t._payload,t=t._init;try{return ju(t(e))}catch{}}return null}function Fv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ju(e);case 8:return e===Rf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function xr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function M0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Ov(t){var e=M0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Co(t){t._valueTracker||(t._valueTracker=Ov(t))}function b0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=M0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Il(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Gu(t,e){var n=e.checked;return wt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Gh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=xr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function w0(t,e){e=e.checked,e!=null&&Nf(t,"checked",e,!1)}function Wu(t,e){w0(t,e);var n=xr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Xu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Xu(t,e.type,xr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Wh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Xu(t,e,n){(e!=="number"||Il(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Aa=Array.isArray;function Ps(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+xr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function $u(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ae(91));return wt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Xh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ae(92));if(Aa(n)){if(1<n.length)throw Error(ae(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:xr(n)}}function E0(t,e){var n=xr(e.value),i=xr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function $h(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function T0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?T0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var No,A0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(No=No||document.createElement("div"),No.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=No.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ga(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var La={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kv=["Webkit","ms","Moz","O"];Object.keys(La).forEach(function(t){kv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),La[e]=La[t]})});function C0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||La.hasOwnProperty(t)&&La[t]?(""+e).trim():e+"px"}function N0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=C0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Bv=wt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Yu(t,e){if(e){if(Bv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ae(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ae(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ae(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ae(62))}}function Ku(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zu=null;function Df(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Qu=null,Ls=null,Ds=null;function qh(t){if(t=ho(t)){if(typeof Qu!="function")throw Error(ae(280));var e=t.stateNode;e&&(e=vc(e),Qu(t.stateNode,t.type,e))}}function R0(t){Ls?Ds?Ds.push(t):Ds=[t]:Ls=t}function P0(){if(Ls){var t=Ls,e=Ds;if(Ds=Ls=null,qh(t),e)for(t=0;t<e.length;t++)qh(e[t])}}function L0(t,e){return t(e)}function D0(){}var Oc=!1;function I0(t,e,n){if(Oc)return t(e,n);Oc=!0;try{return L0(t,e,n)}finally{Oc=!1,(Ls!==null||Ds!==null)&&(D0(),P0())}}function Wa(t,e){var n=t.stateNode;if(n===null)return null;var i=vc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ae(231,e,typeof n));return n}var Ju=!1;if(Ui)try{var ha={};Object.defineProperty(ha,"passive",{get:function(){Ju=!0}}),window.addEventListener("test",ha,ha),window.removeEventListener("test",ha,ha)}catch{Ju=!1}function zv(t,e,n,i,r,s,a,l,c){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(h){this.onError(h)}}var Da=!1,Ul=null,Fl=!1,ed=null,Vv={onError:function(t){Da=!0,Ul=t}};function Hv(t,e,n,i,r,s,a,l,c){Da=!1,Ul=null,zv.apply(Vv,arguments)}function jv(t,e,n,i,r,s,a,l,c){if(Hv.apply(this,arguments),Da){if(Da){var u=Ul;Da=!1,Ul=null}else throw Error(ae(198));Fl||(Fl=!0,ed=u)}}function Yr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function U0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Yh(t){if(Yr(t)!==t)throw Error(ae(188))}function Gv(t){var e=t.alternate;if(!e){if(e=Yr(t),e===null)throw Error(ae(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Yh(r),t;if(s===i)return Yh(r),e;s=s.sibling}throw Error(ae(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,l=r.child;l;){if(l===n){a=!0,n=r,i=s;break}if(l===i){a=!0,i=r,n=s;break}l=l.sibling}if(!a){for(l=s.child;l;){if(l===n){a=!0,n=s,i=r;break}if(l===i){a=!0,i=s,n=r;break}l=l.sibling}if(!a)throw Error(ae(189))}}if(n.alternate!==i)throw Error(ae(190))}if(n.tag!==3)throw Error(ae(188));return n.stateNode.current===n?t:e}function F0(t){return t=Gv(t),t!==null?O0(t):null}function O0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=O0(t);if(e!==null)return e;t=t.sibling}return null}var k0=An.unstable_scheduleCallback,Kh=An.unstable_cancelCallback,Wv=An.unstable_shouldYield,Xv=An.unstable_requestPaint,Nt=An.unstable_now,$v=An.unstable_getCurrentPriorityLevel,If=An.unstable_ImmediatePriority,B0=An.unstable_UserBlockingPriority,Ol=An.unstable_NormalPriority,qv=An.unstable_LowPriority,z0=An.unstable_IdlePriority,pc=null,fi=null;function Yv(t){if(fi&&typeof fi.onCommitFiberRoot=="function")try{fi.onCommitFiberRoot(pc,t,void 0,(t.current.flags&128)===128)}catch{}}var Zn=Math.clz32?Math.clz32:Qv,Kv=Math.log,Zv=Math.LN2;function Qv(t){return t>>>=0,t===0?32:31-(Kv(t)/Zv|0)|0}var Ro=64,Po=4194304;function Ca(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function kl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var l=a&~r;l!==0?i=Ca(l):(s&=a,s!==0&&(i=Ca(s)))}else a=n&~r,a!==0?i=Ca(a):s!==0&&(i=Ca(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Zn(e),r=1<<n,i|=t[n],e&=~r;return i}function Jv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function e1(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Zn(s),l=1<<a,c=r[a];c===-1?(!(l&n)||l&i)&&(r[a]=Jv(l,e)):c<=e&&(t.expiredLanes|=l),s&=~l}}function td(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function V0(){var t=Ro;return Ro<<=1,!(Ro&4194240)&&(Ro=64),t}function kc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function uo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Zn(e),t[e]=n}function t1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Zn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Uf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Zn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ct=0;function H0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var j0,Ff,G0,W0,X0,nd=!1,Lo=[],lr=null,cr=null,ur=null,Xa=new Map,$a=new Map,tr=[],n1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zh(t,e){switch(t){case"focusin":case"focusout":lr=null;break;case"dragenter":case"dragleave":cr=null;break;case"mouseover":case"mouseout":ur=null;break;case"pointerover":case"pointerout":Xa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":$a.delete(e.pointerId)}}function pa(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ho(e),e!==null&&Ff(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function i1(t,e,n,i,r){switch(e){case"focusin":return lr=pa(lr,t,e,n,i,r),!0;case"dragenter":return cr=pa(cr,t,e,n,i,r),!0;case"mouseover":return ur=pa(ur,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Xa.set(s,pa(Xa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,$a.set(s,pa($a.get(s)||null,t,e,n,i,r)),!0}return!1}function $0(t){var e=Dr(t.target);if(e!==null){var n=Yr(e);if(n!==null){if(e=n.tag,e===13){if(e=U0(n),e!==null){t.blockedOn=e,X0(t.priority,function(){G0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function xl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=id(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Zu=i,n.target.dispatchEvent(i),Zu=null}else return e=ho(n),e!==null&&Ff(e),t.blockedOn=n,!1;e.shift()}return!0}function Qh(t,e,n){xl(t)&&n.delete(e)}function r1(){nd=!1,lr!==null&&xl(lr)&&(lr=null),cr!==null&&xl(cr)&&(cr=null),ur!==null&&xl(ur)&&(ur=null),Xa.forEach(Qh),$a.forEach(Qh)}function ma(t,e){t.blockedOn===e&&(t.blockedOn=null,nd||(nd=!0,An.unstable_scheduleCallback(An.unstable_NormalPriority,r1)))}function qa(t){function e(r){return ma(r,t)}if(0<Lo.length){ma(Lo[0],t);for(var n=1;n<Lo.length;n++){var i=Lo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(lr!==null&&ma(lr,t),cr!==null&&ma(cr,t),ur!==null&&ma(ur,t),Xa.forEach(e),$a.forEach(e),n=0;n<tr.length;n++)i=tr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<tr.length&&(n=tr[0],n.blockedOn===null);)$0(n),n.blockedOn===null&&tr.shift()}var Is=Vi.ReactCurrentBatchConfig,Bl=!0;function s1(t,e,n,i){var r=ct,s=Is.transition;Is.transition=null;try{ct=1,Of(t,e,n,i)}finally{ct=r,Is.transition=s}}function a1(t,e,n,i){var r=ct,s=Is.transition;Is.transition=null;try{ct=4,Of(t,e,n,i)}finally{ct=r,Is.transition=s}}function Of(t,e,n,i){if(Bl){var r=id(t,e,n,i);if(r===null)qc(t,e,i,zl,n),Zh(t,i);else if(i1(r,t,e,n,i))i.stopPropagation();else if(Zh(t,i),e&4&&-1<n1.indexOf(t)){for(;r!==null;){var s=ho(r);if(s!==null&&j0(s),s=id(t,e,n,i),s===null&&qc(t,e,i,zl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else qc(t,e,i,null,n)}}var zl=null;function id(t,e,n,i){if(zl=null,t=Df(i),t=Dr(t),t!==null)if(e=Yr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=U0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return zl=t,null}function q0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($v()){case If:return 1;case B0:return 4;case Ol:case qv:return 16;case z0:return 536870912;default:return 16}default:return 16}}var rr=null,kf=null,gl=null;function Y0(){if(gl)return gl;var t,e=kf,n=e.length,i,r="value"in rr?rr.value:rr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return gl=r.slice(t,1<i?1-i:void 0)}function vl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Do(){return!0}function Jh(){return!1}function Nn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Do:Jh,this.isPropagationStopped=Jh,this}return wt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Do)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Do)},persist:function(){},isPersistent:Do}),e}var Js={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bf=Nn(Js),fo=wt({},Js,{view:0,detail:0}),o1=Nn(fo),Bc,zc,xa,mc=wt({},fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==xa&&(xa&&t.type==="mousemove"?(Bc=t.screenX-xa.screenX,zc=t.screenY-xa.screenY):zc=Bc=0,xa=t),Bc)},movementY:function(t){return"movementY"in t?t.movementY:zc}}),ep=Nn(mc),l1=wt({},mc,{dataTransfer:0}),c1=Nn(l1),u1=wt({},fo,{relatedTarget:0}),Vc=Nn(u1),d1=wt({},Js,{animationName:0,elapsedTime:0,pseudoElement:0}),f1=Nn(d1),h1=wt({},Js,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),p1=Nn(h1),m1=wt({},Js,{data:0}),tp=Nn(m1),x1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},g1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},v1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=v1[t])?!!e[t]:!1}function zf(){return _1}var y1=wt({},fo,{key:function(t){if(t.key){var e=x1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=vl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?g1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zf,charCode:function(t){return t.type==="keypress"?vl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?vl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),S1=Nn(y1),M1=wt({},mc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),np=Nn(M1),b1=wt({},fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zf}),w1=Nn(b1),E1=wt({},Js,{propertyName:0,elapsedTime:0,pseudoElement:0}),T1=Nn(E1),A1=wt({},mc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),C1=Nn(A1),N1=[9,13,27,32],Vf=Ui&&"CompositionEvent"in window,Ia=null;Ui&&"documentMode"in document&&(Ia=document.documentMode);var R1=Ui&&"TextEvent"in window&&!Ia,K0=Ui&&(!Vf||Ia&&8<Ia&&11>=Ia),ip=" ",rp=!1;function Z0(t,e){switch(t){case"keyup":return N1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Q0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ys=!1;function P1(t,e){switch(t){case"compositionend":return Q0(e);case"keypress":return e.which!==32?null:(rp=!0,ip);case"textInput":return t=e.data,t===ip&&rp?null:t;default:return null}}function L1(t,e){if(ys)return t==="compositionend"||!Vf&&Z0(t,e)?(t=Y0(),gl=kf=rr=null,ys=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return K0&&e.locale!=="ko"?null:e.data;default:return null}}var D1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!D1[t.type]:e==="textarea"}function J0(t,e,n,i){R0(i),e=Vl(e,"onChange"),0<e.length&&(n=new Bf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ua=null,Ya=null;function I1(t){ux(t,0)}function xc(t){var e=bs(t);if(b0(e))return t}function U1(t,e){if(t==="change")return e}var ex=!1;if(Ui){var Hc;if(Ui){var jc="oninput"in document;if(!jc){var ap=document.createElement("div");ap.setAttribute("oninput","return;"),jc=typeof ap.oninput=="function"}Hc=jc}else Hc=!1;ex=Hc&&(!document.documentMode||9<document.documentMode)}function op(){Ua&&(Ua.detachEvent("onpropertychange",tx),Ya=Ua=null)}function tx(t){if(t.propertyName==="value"&&xc(Ya)){var e=[];J0(e,Ya,t,Df(t)),I0(I1,e)}}function F1(t,e,n){t==="focusin"?(op(),Ua=e,Ya=n,Ua.attachEvent("onpropertychange",tx)):t==="focusout"&&op()}function O1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return xc(Ya)}function k1(t,e){if(t==="click")return xc(e)}function B1(t,e){if(t==="input"||t==="change")return xc(e)}function z1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Jn=typeof Object.is=="function"?Object.is:z1;function Ka(t,e){if(Jn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Bu.call(e,r)||!Jn(t[r],e[r]))return!1}return!0}function lp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function cp(t,e){var n=lp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=lp(n)}}function nx(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?nx(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ix(){for(var t=window,e=Il();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Il(t.document)}return e}function Hf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function V1(t){var e=ix(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&nx(n.ownerDocument.documentElement,n)){if(i!==null&&Hf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=cp(n,s);var a=cp(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var H1=Ui&&"documentMode"in document&&11>=document.documentMode,Ss=null,rd=null,Fa=null,sd=!1;function up(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;sd||Ss==null||Ss!==Il(i)||(i=Ss,"selectionStart"in i&&Hf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Fa&&Ka(Fa,i)||(Fa=i,i=Vl(rd,"onSelect"),0<i.length&&(e=new Bf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ss)))}function Io(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ms={animationend:Io("Animation","AnimationEnd"),animationiteration:Io("Animation","AnimationIteration"),animationstart:Io("Animation","AnimationStart"),transitionend:Io("Transition","TransitionEnd")},Gc={},rx={};Ui&&(rx=document.createElement("div").style,"AnimationEvent"in window||(delete Ms.animationend.animation,delete Ms.animationiteration.animation,delete Ms.animationstart.animation),"TransitionEvent"in window||delete Ms.transitionend.transition);function gc(t){if(Gc[t])return Gc[t];if(!Ms[t])return t;var e=Ms[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in rx)return Gc[t]=e[n];return t}var sx=gc("animationend"),ax=gc("animationiteration"),ox=gc("animationstart"),lx=gc("transitionend"),cx=new Map,dp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _r(t,e){cx.set(t,e),qr(e,[t])}for(var Wc=0;Wc<dp.length;Wc++){var Xc=dp[Wc],j1=Xc.toLowerCase(),G1=Xc[0].toUpperCase()+Xc.slice(1);_r(j1,"on"+G1)}_r(sx,"onAnimationEnd");_r(ax,"onAnimationIteration");_r(ox,"onAnimationStart");_r("dblclick","onDoubleClick");_r("focusin","onFocus");_r("focusout","onBlur");_r(lx,"onTransitionEnd");zs("onMouseEnter",["mouseout","mouseover"]);zs("onMouseLeave",["mouseout","mouseover"]);zs("onPointerEnter",["pointerout","pointerover"]);zs("onPointerLeave",["pointerout","pointerover"]);qr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qr("onBeforeInput",["compositionend","keypress","textInput","paste"]);qr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Na="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),W1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Na));function fp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,jv(i,e,void 0,t),t.currentTarget=null}function ux(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var l=i[a],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==s&&r.isPropagationStopped())break e;fp(r,l,u),s=c}else for(a=0;a<i.length;a++){if(l=i[a],c=l.instance,u=l.currentTarget,l=l.listener,c!==s&&r.isPropagationStopped())break e;fp(r,l,u),s=c}}}if(Fl)throw t=ed,Fl=!1,ed=null,t}function xt(t,e){var n=e[ud];n===void 0&&(n=e[ud]=new Set);var i=t+"__bubble";n.has(i)||(dx(e,t,2,!1),n.add(i))}function $c(t,e,n){var i=0;e&&(i|=4),dx(n,t,i,e)}var Uo="_reactListening"+Math.random().toString(36).slice(2);function Za(t){if(!t[Uo]){t[Uo]=!0,v0.forEach(function(n){n!=="selectionchange"&&(W1.has(n)||$c(n,!1,t),$c(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Uo]||(e[Uo]=!0,$c("selectionchange",!1,e))}}function dx(t,e,n,i){switch(q0(e)){case 1:var r=s1;break;case 4:r=a1;break;default:r=Of}n=r.bind(null,e,n,t),r=void 0,!Ju||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function qc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var l=i.stateNode.containerInfo;if(l===r||l.nodeType===8&&l.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===r||c.nodeType===8&&c.parentNode===r))return;a=a.return}for(;l!==null;){if(a=Dr(l),a===null)return;if(c=a.tag,c===5||c===6){i=s=a;continue e}l=l.parentNode}}i=i.return}I0(function(){var u=s,h=Df(n),p=[];e:{var f=cx.get(t);if(f!==void 0){var m=Bf,g=t;switch(t){case"keypress":if(vl(n)===0)break e;case"keydown":case"keyup":m=S1;break;case"focusin":g="focus",m=Vc;break;case"focusout":g="blur",m=Vc;break;case"beforeblur":case"afterblur":m=Vc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=ep;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=c1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=w1;break;case sx:case ax:case ox:m=f1;break;case lx:m=T1;break;case"scroll":m=o1;break;case"wheel":m=C1;break;case"copy":case"cut":case"paste":m=p1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=np}var w=(e&4)!==0,x=!w&&t==="scroll",d=w?f!==null?f+"Capture":null:f;w=[];for(var y=u,M;y!==null;){M=y;var S=M.stateNode;if(M.tag===5&&S!==null&&(M=S,d!==null&&(S=Wa(y,d),S!=null&&w.push(Qa(y,S,M)))),x)break;y=y.return}0<w.length&&(f=new m(f,g,null,n,h),p.push({event:f,listeners:w}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&n!==Zu&&(g=n.relatedTarget||n.fromElement)&&(Dr(g)||g[Fi]))break e;if((m||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,m?(g=n.relatedTarget||n.toElement,m=u,g=g?Dr(g):null,g!==null&&(x=Yr(g),g!==x||g.tag!==5&&g.tag!==6)&&(g=null)):(m=null,g=u),m!==g)){if(w=ep,S="onMouseLeave",d="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(w=np,S="onPointerLeave",d="onPointerEnter",y="pointer"),x=m==null?f:bs(m),M=g==null?f:bs(g),f=new w(S,y+"leave",m,n,h),f.target=x,f.relatedTarget=M,S=null,Dr(h)===u&&(w=new w(d,y+"enter",g,n,h),w.target=M,w.relatedTarget=x,S=w),x=S,m&&g)t:{for(w=m,d=g,y=0,M=w;M;M=Jr(M))y++;for(M=0,S=d;S;S=Jr(S))M++;for(;0<y-M;)w=Jr(w),y--;for(;0<M-y;)d=Jr(d),M--;for(;y--;){if(w===d||d!==null&&w===d.alternate)break t;w=Jr(w),d=Jr(d)}w=null}else w=null;m!==null&&hp(p,f,m,w,!1),g!==null&&x!==null&&hp(p,x,g,w,!0)}}e:{if(f=u?bs(u):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var T=U1;else if(sp(f))if(ex)T=B1;else{T=O1;var E=F1}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(T=k1);if(T&&(T=T(t,u))){J0(p,T,n,h);break e}E&&E(t,f,u),t==="focusout"&&(E=f._wrapperState)&&E.controlled&&f.type==="number"&&Xu(f,"number",f.value)}switch(E=u?bs(u):window,t){case"focusin":(sp(E)||E.contentEditable==="true")&&(Ss=E,rd=u,Fa=null);break;case"focusout":Fa=rd=Ss=null;break;case"mousedown":sd=!0;break;case"contextmenu":case"mouseup":case"dragend":sd=!1,up(p,n,h);break;case"selectionchange":if(H1)break;case"keydown":case"keyup":up(p,n,h)}var C;if(Vf)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else ys?Z0(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(K0&&n.locale!=="ko"&&(ys||v!=="onCompositionStart"?v==="onCompositionEnd"&&ys&&(C=Y0()):(rr=h,kf="value"in rr?rr.value:rr.textContent,ys=!0)),E=Vl(u,v),0<E.length&&(v=new tp(v,t,null,n,h),p.push({event:v,listeners:E}),C?v.data=C:(C=Q0(n),C!==null&&(v.data=C)))),(C=R1?P1(t,n):L1(t,n))&&(u=Vl(u,"onBeforeInput"),0<u.length&&(h=new tp("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:u}),h.data=C))}ux(p,e)})}function Qa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Vl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Wa(t,n),s!=null&&i.unshift(Qa(t,s,r)),s=Wa(t,e),s!=null&&i.push(Qa(t,s,r))),t=t.return}return i}function Jr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function hp(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===i)break;l.tag===5&&u!==null&&(l=u,r?(c=Wa(n,s),c!=null&&a.unshift(Qa(n,c,l))):r||(c=Wa(n,s),c!=null&&a.push(Qa(n,c,l)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var X1=/\r\n?/g,$1=/\u0000|\uFFFD/g;function pp(t){return(typeof t=="string"?t:""+t).replace(X1,`
`).replace($1,"")}function Fo(t,e,n){if(e=pp(e),pp(t)!==e&&n)throw Error(ae(425))}function Hl(){}var ad=null,od=null;function ld(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var cd=typeof setTimeout=="function"?setTimeout:void 0,q1=typeof clearTimeout=="function"?clearTimeout:void 0,mp=typeof Promise=="function"?Promise:void 0,Y1=typeof queueMicrotask=="function"?queueMicrotask:typeof mp<"u"?function(t){return mp.resolve(null).then(t).catch(K1)}:cd;function K1(t){setTimeout(function(){throw t})}function Yc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),qa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);qa(e)}function dr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function xp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ea=Math.random().toString(36).slice(2),li="__reactFiber$"+ea,Ja="__reactProps$"+ea,Fi="__reactContainer$"+ea,ud="__reactEvents$"+ea,Z1="__reactListeners$"+ea,Q1="__reactHandles$"+ea;function Dr(t){var e=t[li];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Fi]||n[li]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=xp(t);t!==null;){if(n=t[li])return n;t=xp(t)}return e}t=n,n=t.parentNode}return null}function ho(t){return t=t[li]||t[Fi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function bs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ae(33))}function vc(t){return t[Ja]||null}var dd=[],ws=-1;function yr(t){return{current:t}}function gt(t){0>ws||(t.current=dd[ws],dd[ws]=null,ws--)}function ft(t,e){ws++,dd[ws]=t.current,t.current=e}var gr={},Jt=yr(gr),pn=yr(!1),zr=gr;function Vs(t,e){var n=t.type.contextTypes;if(!n)return gr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function mn(t){return t=t.childContextTypes,t!=null}function jl(){gt(pn),gt(Jt)}function gp(t,e,n){if(Jt.current!==gr)throw Error(ae(168));ft(Jt,e),ft(pn,n)}function fx(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ae(108,Fv(t)||"Unknown",r));return wt({},n,i)}function Gl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||gr,zr=Jt.current,ft(Jt,t),ft(pn,pn.current),!0}function vp(t,e,n){var i=t.stateNode;if(!i)throw Error(ae(169));n?(t=fx(t,e,zr),i.__reactInternalMemoizedMergedChildContext=t,gt(pn),gt(Jt),ft(Jt,t)):gt(pn),ft(pn,n)}var Ti=null,_c=!1,Kc=!1;function hx(t){Ti===null?Ti=[t]:Ti.push(t)}function J1(t){_c=!0,hx(t)}function Sr(){if(!Kc&&Ti!==null){Kc=!0;var t=0,e=ct;try{var n=Ti;for(ct=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ti=null,_c=!1}catch(r){throw Ti!==null&&(Ti=Ti.slice(t+1)),k0(If,Sr),r}finally{ct=e,Kc=!1}}return null}var Es=[],Ts=0,Wl=null,Xl=0,In=[],Un=0,Vr=null,Ci=1,Ni="";function Cr(t,e){Es[Ts++]=Xl,Es[Ts++]=Wl,Wl=t,Xl=e}function px(t,e,n){In[Un++]=Ci,In[Un++]=Ni,In[Un++]=Vr,Vr=t;var i=Ci;t=Ni;var r=32-Zn(i)-1;i&=~(1<<r),n+=1;var s=32-Zn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Ci=1<<32-Zn(e)+r|n<<r|i,Ni=s+t}else Ci=1<<s|n<<r|i,Ni=t}function jf(t){t.return!==null&&(Cr(t,1),px(t,1,0))}function Gf(t){for(;t===Wl;)Wl=Es[--Ts],Es[Ts]=null,Xl=Es[--Ts],Es[Ts]=null;for(;t===Vr;)Vr=In[--Un],In[Un]=null,Ni=In[--Un],In[Un]=null,Ci=In[--Un],In[Un]=null}var En=null,wn=null,yt=!1,$n=null;function mx(t,e){var n=On(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function _p(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,En=t,wn=dr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,En=t,wn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Vr!==null?{id:Ci,overflow:Ni}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=On(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,En=t,wn=null,!0):!1;default:return!1}}function fd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function hd(t){if(yt){var e=wn;if(e){var n=e;if(!_p(t,e)){if(fd(t))throw Error(ae(418));e=dr(n.nextSibling);var i=En;e&&_p(t,e)?mx(i,n):(t.flags=t.flags&-4097|2,yt=!1,En=t)}}else{if(fd(t))throw Error(ae(418));t.flags=t.flags&-4097|2,yt=!1,En=t}}}function yp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;En=t}function Oo(t){if(t!==En)return!1;if(!yt)return yp(t),yt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ld(t.type,t.memoizedProps)),e&&(e=wn)){if(fd(t))throw xx(),Error(ae(418));for(;e;)mx(t,e),e=dr(e.nextSibling)}if(yp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ae(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){wn=dr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}wn=null}}else wn=En?dr(t.stateNode.nextSibling):null;return!0}function xx(){for(var t=wn;t;)t=dr(t.nextSibling)}function Hs(){wn=En=null,yt=!1}function Wf(t){$n===null?$n=[t]:$n.push(t)}var e_=Vi.ReactCurrentBatchConfig;function ga(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ae(309));var i=n.stateNode}if(!i)throw Error(ae(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var l=r.refs;a===null?delete l[s]:l[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ae(284));if(!n._owner)throw Error(ae(290,t))}return t}function ko(t,e){throw t=Object.prototype.toString.call(e),Error(ae(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Sp(t){var e=t._init;return e(t._payload)}function gx(t){function e(d,y){if(t){var M=d.deletions;M===null?(d.deletions=[y],d.flags|=16):M.push(y)}}function n(d,y){if(!t)return null;for(;y!==null;)e(d,y),y=y.sibling;return null}function i(d,y){for(d=new Map;y!==null;)y.key!==null?d.set(y.key,y):d.set(y.index,y),y=y.sibling;return d}function r(d,y){return d=mr(d,y),d.index=0,d.sibling=null,d}function s(d,y,M){return d.index=M,t?(M=d.alternate,M!==null?(M=M.index,M<y?(d.flags|=2,y):M):(d.flags|=2,y)):(d.flags|=1048576,y)}function a(d){return t&&d.alternate===null&&(d.flags|=2),d}function l(d,y,M,S){return y===null||y.tag!==6?(y=iu(M,d.mode,S),y.return=d,y):(y=r(y,M),y.return=d,y)}function c(d,y,M,S){var T=M.type;return T===_s?h(d,y,M.props.children,S,M.key):y!==null&&(y.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Ji&&Sp(T)===y.type)?(S=r(y,M.props),S.ref=ga(d,y,M),S.return=d,S):(S=El(M.type,M.key,M.props,null,d.mode,S),S.ref=ga(d,y,M),S.return=d,S)}function u(d,y,M,S){return y===null||y.tag!==4||y.stateNode.containerInfo!==M.containerInfo||y.stateNode.implementation!==M.implementation?(y=ru(M,d.mode,S),y.return=d,y):(y=r(y,M.children||[]),y.return=d,y)}function h(d,y,M,S,T){return y===null||y.tag!==7?(y=Br(M,d.mode,S,T),y.return=d,y):(y=r(y,M),y.return=d,y)}function p(d,y,M){if(typeof y=="string"&&y!==""||typeof y=="number")return y=iu(""+y,d.mode,M),y.return=d,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ao:return M=El(y.type,y.key,y.props,null,d.mode,M),M.ref=ga(d,null,y),M.return=d,M;case vs:return y=ru(y,d.mode,M),y.return=d,y;case Ji:var S=y._init;return p(d,S(y._payload),M)}if(Aa(y)||fa(y))return y=Br(y,d.mode,M,null),y.return=d,y;ko(d,y)}return null}function f(d,y,M,S){var T=y!==null?y.key:null;if(typeof M=="string"&&M!==""||typeof M=="number")return T!==null?null:l(d,y,""+M,S);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Ao:return M.key===T?c(d,y,M,S):null;case vs:return M.key===T?u(d,y,M,S):null;case Ji:return T=M._init,f(d,y,T(M._payload),S)}if(Aa(M)||fa(M))return T!==null?null:h(d,y,M,S,null);ko(d,M)}return null}function m(d,y,M,S,T){if(typeof S=="string"&&S!==""||typeof S=="number")return d=d.get(M)||null,l(y,d,""+S,T);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ao:return d=d.get(S.key===null?M:S.key)||null,c(y,d,S,T);case vs:return d=d.get(S.key===null?M:S.key)||null,u(y,d,S,T);case Ji:var E=S._init;return m(d,y,M,E(S._payload),T)}if(Aa(S)||fa(S))return d=d.get(M)||null,h(y,d,S,T,null);ko(y,S)}return null}function g(d,y,M,S){for(var T=null,E=null,C=y,v=y=0,N=null;C!==null&&v<M.length;v++){C.index>v?(N=C,C=null):N=C.sibling;var L=f(d,C,M[v],S);if(L===null){C===null&&(C=N);break}t&&C&&L.alternate===null&&e(d,C),y=s(L,y,v),E===null?T=L:E.sibling=L,E=L,C=N}if(v===M.length)return n(d,C),yt&&Cr(d,v),T;if(C===null){for(;v<M.length;v++)C=p(d,M[v],S),C!==null&&(y=s(C,y,v),E===null?T=C:E.sibling=C,E=C);return yt&&Cr(d,v),T}for(C=i(d,C);v<M.length;v++)N=m(C,d,v,M[v],S),N!==null&&(t&&N.alternate!==null&&C.delete(N.key===null?v:N.key),y=s(N,y,v),E===null?T=N:E.sibling=N,E=N);return t&&C.forEach(function(P){return e(d,P)}),yt&&Cr(d,v),T}function w(d,y,M,S){var T=fa(M);if(typeof T!="function")throw Error(ae(150));if(M=T.call(M),M==null)throw Error(ae(151));for(var E=T=null,C=y,v=y=0,N=null,L=M.next();C!==null&&!L.done;v++,L=M.next()){C.index>v?(N=C,C=null):N=C.sibling;var P=f(d,C,L.value,S);if(P===null){C===null&&(C=N);break}t&&C&&P.alternate===null&&e(d,C),y=s(P,y,v),E===null?T=P:E.sibling=P,E=P,C=N}if(L.done)return n(d,C),yt&&Cr(d,v),T;if(C===null){for(;!L.done;v++,L=M.next())L=p(d,L.value,S),L!==null&&(y=s(L,y,v),E===null?T=L:E.sibling=L,E=L);return yt&&Cr(d,v),T}for(C=i(d,C);!L.done;v++,L=M.next())L=m(C,d,v,L.value,S),L!==null&&(t&&L.alternate!==null&&C.delete(L.key===null?v:L.key),y=s(L,y,v),E===null?T=L:E.sibling=L,E=L);return t&&C.forEach(function(F){return e(d,F)}),yt&&Cr(d,v),T}function x(d,y,M,S){if(typeof M=="object"&&M!==null&&M.type===_s&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case Ao:e:{for(var T=M.key,E=y;E!==null;){if(E.key===T){if(T=M.type,T===_s){if(E.tag===7){n(d,E.sibling),y=r(E,M.props.children),y.return=d,d=y;break e}}else if(E.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Ji&&Sp(T)===E.type){n(d,E.sibling),y=r(E,M.props),y.ref=ga(d,E,M),y.return=d,d=y;break e}n(d,E);break}else e(d,E);E=E.sibling}M.type===_s?(y=Br(M.props.children,d.mode,S,M.key),y.return=d,d=y):(S=El(M.type,M.key,M.props,null,d.mode,S),S.ref=ga(d,y,M),S.return=d,d=S)}return a(d);case vs:e:{for(E=M.key;y!==null;){if(y.key===E)if(y.tag===4&&y.stateNode.containerInfo===M.containerInfo&&y.stateNode.implementation===M.implementation){n(d,y.sibling),y=r(y,M.children||[]),y.return=d,d=y;break e}else{n(d,y);break}else e(d,y);y=y.sibling}y=ru(M,d.mode,S),y.return=d,d=y}return a(d);case Ji:return E=M._init,x(d,y,E(M._payload),S)}if(Aa(M))return g(d,y,M,S);if(fa(M))return w(d,y,M,S);ko(d,M)}return typeof M=="string"&&M!==""||typeof M=="number"?(M=""+M,y!==null&&y.tag===6?(n(d,y.sibling),y=r(y,M),y.return=d,d=y):(n(d,y),y=iu(M,d.mode,S),y.return=d,d=y),a(d)):n(d,y)}return x}var js=gx(!0),vx=gx(!1),$l=yr(null),ql=null,As=null,Xf=null;function $f(){Xf=As=ql=null}function qf(t){var e=$l.current;gt($l),t._currentValue=e}function pd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Us(t,e){ql=t,Xf=As=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(hn=!0),t.firstContext=null)}function Bn(t){var e=t._currentValue;if(Xf!==t)if(t={context:t,memoizedValue:e,next:null},As===null){if(ql===null)throw Error(ae(308));As=t,ql.dependencies={lanes:0,firstContext:t}}else As=As.next=t;return e}var Ir=null;function Yf(t){Ir===null?Ir=[t]:Ir.push(t)}function _x(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Yf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Oi(t,i)}function Oi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var er=!1;function Kf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yx(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Pi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function fr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,et&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Oi(t,n)}return r=i.interleaved,r===null?(e.next=e,Yf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Oi(t,n)}function _l(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Uf(t,n)}}function Mp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Yl(t,e,n,i){var r=t.updateQueue;er=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,l=r.shared.pending;if(l!==null){r.shared.pending=null;var c=l,u=c.next;c.next=null,a===null?s=u:a.next=u,a=c;var h=t.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==a&&(l===null?h.firstBaseUpdate=u:l.next=u,h.lastBaseUpdate=c))}if(s!==null){var p=r.baseState;a=0,h=u=c=null,l=s;do{var f=l.lane,m=l.eventTime;if((i&f)===f){h!==null&&(h=h.next={eventTime:m,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var g=t,w=l;switch(f=e,m=n,w.tag){case 1:if(g=w.payload,typeof g=="function"){p=g.call(m,p,f);break e}p=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=w.payload,f=typeof g=="function"?g.call(m,p,f):g,f==null)break e;p=wt({},p,f);break e;case 2:er=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[l]:f.push(l))}else m={eventTime:m,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(u=h=m,c=p):h=h.next=m,a|=f;if(l=l.next,l===null){if(l=r.shared.pending,l===null)break;f=l,l=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(h===null&&(c=p),r.baseState=c,r.firstBaseUpdate=u,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);jr|=a,t.lanes=a,t.memoizedState=p}}function bp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ae(191,r));r.call(i)}}}var po={},hi=yr(po),eo=yr(po),to=yr(po);function Ur(t){if(t===po)throw Error(ae(174));return t}function Zf(t,e){switch(ft(to,e),ft(eo,t),ft(hi,po),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:qu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=qu(e,t)}gt(hi),ft(hi,e)}function Gs(){gt(hi),gt(eo),gt(to)}function Sx(t){Ur(to.current);var e=Ur(hi.current),n=qu(e,t.type);e!==n&&(ft(eo,t),ft(hi,n))}function Qf(t){eo.current===t&&(gt(hi),gt(eo))}var Mt=yr(0);function Kl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Zc=[];function Jf(){for(var t=0;t<Zc.length;t++)Zc[t]._workInProgressVersionPrimary=null;Zc.length=0}var yl=Vi.ReactCurrentDispatcher,Qc=Vi.ReactCurrentBatchConfig,Hr=0,bt=null,It=null,zt=null,Zl=!1,Oa=!1,no=0,t_=0;function $t(){throw Error(ae(321))}function eh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Jn(t[n],e[n]))return!1;return!0}function th(t,e,n,i,r,s){if(Hr=s,bt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,yl.current=t===null||t.memoizedState===null?s_:a_,t=n(i,r),Oa){s=0;do{if(Oa=!1,no=0,25<=s)throw Error(ae(301));s+=1,zt=It=null,e.updateQueue=null,yl.current=o_,t=n(i,r)}while(Oa)}if(yl.current=Ql,e=It!==null&&It.next!==null,Hr=0,zt=It=bt=null,Zl=!1,e)throw Error(ae(300));return t}function nh(){var t=no!==0;return no=0,t}function ai(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return zt===null?bt.memoizedState=zt=t:zt=zt.next=t,zt}function zn(){if(It===null){var t=bt.alternate;t=t!==null?t.memoizedState:null}else t=It.next;var e=zt===null?bt.memoizedState:zt.next;if(e!==null)zt=e,It=t;else{if(t===null)throw Error(ae(310));It=t,t={memoizedState:It.memoizedState,baseState:It.baseState,baseQueue:It.baseQueue,queue:It.queue,next:null},zt===null?bt.memoizedState=zt=t:zt=zt.next=t}return zt}function io(t,e){return typeof e=="function"?e(t):e}function Jc(t){var e=zn(),n=e.queue;if(n===null)throw Error(ae(311));n.lastRenderedReducer=t;var i=It,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var l=a=null,c=null,u=s;do{var h=u.lane;if((Hr&h)===h)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var p={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=p,a=i):c=c.next=p,bt.lanes|=h,jr|=h}u=u.next}while(u!==null&&u!==s);c===null?a=i:c.next=l,Jn(i,e.memoizedState)||(hn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=c,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,bt.lanes|=s,jr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function eu(t){var e=zn(),n=e.queue;if(n===null)throw Error(ae(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Jn(s,e.memoizedState)||(hn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Mx(){}function bx(t,e){var n=bt,i=zn(),r=e(),s=!Jn(i.memoizedState,r);if(s&&(i.memoizedState=r,hn=!0),i=i.queue,ih(Tx.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||zt!==null&&zt.memoizedState.tag&1){if(n.flags|=2048,ro(9,Ex.bind(null,n,i,r,e),void 0,null),Vt===null)throw Error(ae(349));Hr&30||wx(n,e,r)}return r}function wx(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=bt.updateQueue,e===null?(e={lastEffect:null,stores:null},bt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Ex(t,e,n,i){e.value=n,e.getSnapshot=i,Ax(e)&&Cx(t)}function Tx(t,e,n){return n(function(){Ax(e)&&Cx(t)})}function Ax(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Jn(t,n)}catch{return!0}}function Cx(t){var e=Oi(t,1);e!==null&&Qn(e,t,1,-1)}function wp(t){var e=ai();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:io,lastRenderedState:t},e.queue=t,t=t.dispatch=r_.bind(null,bt,t),[e.memoizedState,t]}function ro(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=bt.updateQueue,e===null?(e={lastEffect:null,stores:null},bt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Nx(){return zn().memoizedState}function Sl(t,e,n,i){var r=ai();bt.flags|=t,r.memoizedState=ro(1|e,n,void 0,i===void 0?null:i)}function yc(t,e,n,i){var r=zn();i=i===void 0?null:i;var s=void 0;if(It!==null){var a=It.memoizedState;if(s=a.destroy,i!==null&&eh(i,a.deps)){r.memoizedState=ro(e,n,s,i);return}}bt.flags|=t,r.memoizedState=ro(1|e,n,s,i)}function Ep(t,e){return Sl(8390656,8,t,e)}function ih(t,e){return yc(2048,8,t,e)}function Rx(t,e){return yc(4,2,t,e)}function Px(t,e){return yc(4,4,t,e)}function Lx(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Dx(t,e,n){return n=n!=null?n.concat([t]):null,yc(4,4,Lx.bind(null,e,t),n)}function rh(){}function Ix(t,e){var n=zn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&eh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Ux(t,e){var n=zn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&eh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Fx(t,e,n){return Hr&21?(Jn(n,e)||(n=V0(),bt.lanes|=n,jr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,hn=!0),t.memoizedState=n)}function n_(t,e){var n=ct;ct=n!==0&&4>n?n:4,t(!0);var i=Qc.transition;Qc.transition={};try{t(!1),e()}finally{ct=n,Qc.transition=i}}function Ox(){return zn().memoizedState}function i_(t,e,n){var i=pr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},kx(t))Bx(e,n);else if(n=_x(t,e,n,i),n!==null){var r=an();Qn(n,t,i,r),zx(n,e,i)}}function r_(t,e,n){var i=pr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(kx(t))Bx(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,l=s(a,n);if(r.hasEagerState=!0,r.eagerState=l,Jn(l,a)){var c=e.interleaved;c===null?(r.next=r,Yf(e)):(r.next=c.next,c.next=r),e.interleaved=r;return}}catch{}finally{}n=_x(t,e,r,i),n!==null&&(r=an(),Qn(n,t,i,r),zx(n,e,i))}}function kx(t){var e=t.alternate;return t===bt||e!==null&&e===bt}function Bx(t,e){Oa=Zl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function zx(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Uf(t,n)}}var Ql={readContext:Bn,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useInsertionEffect:$t,useLayoutEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useMutableSource:$t,useSyncExternalStore:$t,useId:$t,unstable_isNewReconciler:!1},s_={readContext:Bn,useCallback:function(t,e){return ai().memoizedState=[t,e===void 0?null:e],t},useContext:Bn,useEffect:Ep,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Sl(4194308,4,Lx.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Sl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Sl(4,2,t,e)},useMemo:function(t,e){var n=ai();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ai();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=i_.bind(null,bt,t),[i.memoizedState,t]},useRef:function(t){var e=ai();return t={current:t},e.memoizedState=t},useState:wp,useDebugValue:rh,useDeferredValue:function(t){return ai().memoizedState=t},useTransition:function(){var t=wp(!1),e=t[0];return t=n_.bind(null,t[1]),ai().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=bt,r=ai();if(yt){if(n===void 0)throw Error(ae(407));n=n()}else{if(n=e(),Vt===null)throw Error(ae(349));Hr&30||wx(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Ep(Tx.bind(null,i,s,t),[t]),i.flags|=2048,ro(9,Ex.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ai(),e=Vt.identifierPrefix;if(yt){var n=Ni,i=Ci;n=(i&~(1<<32-Zn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=no++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=t_++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},a_={readContext:Bn,useCallback:Ix,useContext:Bn,useEffect:ih,useImperativeHandle:Dx,useInsertionEffect:Rx,useLayoutEffect:Px,useMemo:Ux,useReducer:Jc,useRef:Nx,useState:function(){return Jc(io)},useDebugValue:rh,useDeferredValue:function(t){var e=zn();return Fx(e,It.memoizedState,t)},useTransition:function(){var t=Jc(io)[0],e=zn().memoizedState;return[t,e]},useMutableSource:Mx,useSyncExternalStore:bx,useId:Ox,unstable_isNewReconciler:!1},o_={readContext:Bn,useCallback:Ix,useContext:Bn,useEffect:ih,useImperativeHandle:Dx,useInsertionEffect:Rx,useLayoutEffect:Px,useMemo:Ux,useReducer:eu,useRef:Nx,useState:function(){return eu(io)},useDebugValue:rh,useDeferredValue:function(t){var e=zn();return It===null?e.memoizedState=t:Fx(e,It.memoizedState,t)},useTransition:function(){var t=eu(io)[0],e=zn().memoizedState;return[t,e]},useMutableSource:Mx,useSyncExternalStore:bx,useId:Ox,unstable_isNewReconciler:!1};function Wn(t,e){if(t&&t.defaultProps){e=wt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function md(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:wt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Sc={isMounted:function(t){return(t=t._reactInternals)?Yr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=an(),r=pr(t),s=Pi(i,r);s.payload=e,n!=null&&(s.callback=n),e=fr(t,s,r),e!==null&&(Qn(e,t,r,i),_l(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=an(),r=pr(t),s=Pi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=fr(t,s,r),e!==null&&(Qn(e,t,r,i),_l(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=an(),i=pr(t),r=Pi(n,i);r.tag=2,e!=null&&(r.callback=e),e=fr(t,r,i),e!==null&&(Qn(e,t,i,n),_l(e,t,i))}};function Tp(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Ka(n,i)||!Ka(r,s):!0}function Vx(t,e,n){var i=!1,r=gr,s=e.contextType;return typeof s=="object"&&s!==null?s=Bn(s):(r=mn(e)?zr:Jt.current,i=e.contextTypes,s=(i=i!=null)?Vs(t,r):gr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Sc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Ap(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Sc.enqueueReplaceState(e,e.state,null)}function xd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Kf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Bn(s):(s=mn(e)?zr:Jt.current,r.context=Vs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(md(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Sc.enqueueReplaceState(r,r.state,null),Yl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ws(t,e){try{var n="",i=e;do n+=Uv(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function tu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function gd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var l_=typeof WeakMap=="function"?WeakMap:Map;function Hx(t,e,n){n=Pi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){ec||(ec=!0,Ad=i),gd(t,e)},n}function jx(t,e,n){n=Pi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){gd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){gd(t,e),typeof i!="function"&&(hr===null?hr=new Set([this]):hr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Cp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new l_;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=M_.bind(null,t,e,n),e.then(t,t))}function Np(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Rp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Pi(-1,1),e.tag=2,fr(n,e,1))),n.lanes|=1),t)}var c_=Vi.ReactCurrentOwner,hn=!1;function sn(t,e,n,i){e.child=t===null?vx(e,null,n,i):js(e,t.child,n,i)}function Pp(t,e,n,i,r){n=n.render;var s=e.ref;return Us(e,r),i=th(t,e,n,i,s,r),n=nh(),t!==null&&!hn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ki(t,e,r)):(yt&&n&&jf(e),e.flags|=1,sn(t,e,i,r),e.child)}function Lp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!fh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Gx(t,e,s,i,r)):(t=El(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ka,n(a,i)&&t.ref===e.ref)return ki(t,e,r)}return e.flags|=1,t=mr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Gx(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ka(s,i)&&t.ref===e.ref)if(hn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(hn=!0);else return e.lanes=t.lanes,ki(t,e,r)}return vd(t,e,n,i,r)}function Wx(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ft(Ns,bn),bn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ft(Ns,bn),bn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ft(Ns,bn),bn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ft(Ns,bn),bn|=i;return sn(t,e,r,n),e.child}function Xx(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function vd(t,e,n,i,r){var s=mn(n)?zr:Jt.current;return s=Vs(e,s),Us(e,r),n=th(t,e,n,i,s,r),i=nh(),t!==null&&!hn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ki(t,e,r)):(yt&&i&&jf(e),e.flags|=1,sn(t,e,n,r),e.child)}function Dp(t,e,n,i,r){if(mn(n)){var s=!0;Gl(e)}else s=!1;if(Us(e,r),e.stateNode===null)Ml(t,e),Vx(e,n,i),xd(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,l=e.memoizedProps;a.props=l;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Bn(u):(u=mn(n)?zr:Jt.current,u=Vs(e,u));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==i||c!==u)&&Ap(e,a,i,u),er=!1;var f=e.memoizedState;a.state=f,Yl(e,i,a,r),c=e.memoizedState,l!==i||f!==c||pn.current||er?(typeof h=="function"&&(md(e,n,h,i),c=e.memoizedState),(l=er||Tp(e,n,l,i,f,c,u))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=c),a.props=i,a.state=c,a.context=u,i=l):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,yx(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:Wn(e.type,l),a.props=u,p=e.pendingProps,f=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=Bn(c):(c=mn(n)?zr:Jt.current,c=Vs(e,c));var m=n.getDerivedStateFromProps;(h=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==p||f!==c)&&Ap(e,a,i,c),er=!1,f=e.memoizedState,a.state=f,Yl(e,i,a,r);var g=e.memoizedState;l!==p||f!==g||pn.current||er?(typeof m=="function"&&(md(e,n,m,i),g=e.memoizedState),(u=er||Tp(e,n,u,i,f,g,c)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,g,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,g,c)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),a.props=i,a.state=g,a.context=c,i=u):(typeof a.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return _d(t,e,n,i,s,r)}function _d(t,e,n,i,r,s){Xx(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&vp(e,n,!1),ki(t,e,s);i=e.stateNode,c_.current=e;var l=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=js(e,t.child,null,s),e.child=js(e,null,l,s)):sn(t,e,l,s),e.memoizedState=i.state,r&&vp(e,n,!0),e.child}function $x(t){var e=t.stateNode;e.pendingContext?gp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&gp(t,e.context,!1),Zf(t,e.containerInfo)}function Ip(t,e,n,i,r){return Hs(),Wf(r),e.flags|=256,sn(t,e,n,i),e.child}var yd={dehydrated:null,treeContext:null,retryLane:0};function Sd(t){return{baseLanes:t,cachePool:null,transitions:null}}function qx(t,e,n){var i=e.pendingProps,r=Mt.current,s=!1,a=(e.flags&128)!==0,l;if((l=a)||(l=t!==null&&t.memoizedState===null?!1:(r&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ft(Mt,r&1),t===null)return hd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=wc(a,i,0,null),t=Br(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Sd(n),e.memoizedState=yd,t):sh(e,a));if(r=t.memoizedState,r!==null&&(l=r.dehydrated,l!==null))return u_(t,e,a,i,l,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,l=r.sibling;var c={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=c,e.deletions=null):(i=mr(r,c),i.subtreeFlags=r.subtreeFlags&14680064),l!==null?s=mr(l,s):(s=Br(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Sd(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=yd,i}return s=t.child,t=s.sibling,i=mr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function sh(t,e){return e=wc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Bo(t,e,n,i){return i!==null&&Wf(i),js(e,t.child,null,n),t=sh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function u_(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=tu(Error(ae(422))),Bo(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=wc({mode:"visible",children:i.children},r,0,null),s=Br(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&js(e,t.child,null,a),e.child.memoizedState=Sd(a),e.memoizedState=yd,s);if(!(e.mode&1))return Bo(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var l=i.dgst;return i=l,s=Error(ae(419)),i=tu(s,i,void 0),Bo(t,e,a,i)}if(l=(a&t.childLanes)!==0,hn||l){if(i=Vt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Oi(t,r),Qn(i,t,r,-1))}return dh(),i=tu(Error(ae(421))),Bo(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=b_.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,wn=dr(r.nextSibling),En=e,yt=!0,$n=null,t!==null&&(In[Un++]=Ci,In[Un++]=Ni,In[Un++]=Vr,Ci=t.id,Ni=t.overflow,Vr=e),e=sh(e,i.children),e.flags|=4096,e)}function Up(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),pd(t.return,e,n)}function nu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Yx(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(sn(t,e,i.children,n),i=Mt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Up(t,n,e);else if(t.tag===19)Up(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ft(Mt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Kl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),nu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Kl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}nu(e,!0,n,null,s);break;case"together":nu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ml(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ki(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),jr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ae(153));if(e.child!==null){for(t=e.child,n=mr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=mr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function d_(t,e,n){switch(e.tag){case 3:$x(e),Hs();break;case 5:Sx(e);break;case 1:mn(e.type)&&Gl(e);break;case 4:Zf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ft($l,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ft(Mt,Mt.current&1),e.flags|=128,null):n&e.child.childLanes?qx(t,e,n):(ft(Mt,Mt.current&1),t=ki(t,e,n),t!==null?t.sibling:null);ft(Mt,Mt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Yx(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ft(Mt,Mt.current),i)break;return null;case 22:case 23:return e.lanes=0,Wx(t,e,n)}return ki(t,e,n)}var Kx,Md,Zx,Qx;Kx=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Md=function(){};Zx=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Ur(hi.current);var s=null;switch(n){case"input":r=Gu(t,r),i=Gu(t,i),s=[];break;case"select":r=wt({},r,{value:void 0}),i=wt({},i,{value:void 0}),s=[];break;case"textarea":r=$u(t,r),i=$u(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Hl)}Yu(n,i);var a;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var l=r[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ja.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var c=i[u];if(l=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(s||(s=[]),s.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ja.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&xt("scroll",t),s||l===c||(s=[])):(s=s||[]).push(u,c))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Qx=function(t,e,n,i){n!==i&&(e.flags|=4)};function va(t,e){if(!yt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function qt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function f_(t,e,n){var i=e.pendingProps;switch(Gf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qt(e),null;case 1:return mn(e.type)&&jl(),qt(e),null;case 3:return i=e.stateNode,Gs(),gt(pn),gt(Jt),Jf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Oo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,$n!==null&&(Rd($n),$n=null))),Md(t,e),qt(e),null;case 5:Qf(e);var r=Ur(to.current);if(n=e.type,t!==null&&e.stateNode!=null)Zx(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ae(166));return qt(e),null}if(t=Ur(hi.current),Oo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[li]=e,i[Ja]=s,t=(e.mode&1)!==0,n){case"dialog":xt("cancel",i),xt("close",i);break;case"iframe":case"object":case"embed":xt("load",i);break;case"video":case"audio":for(r=0;r<Na.length;r++)xt(Na[r],i);break;case"source":xt("error",i);break;case"img":case"image":case"link":xt("error",i),xt("load",i);break;case"details":xt("toggle",i);break;case"input":Gh(i,s),xt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},xt("invalid",i);break;case"textarea":Xh(i,s),xt("invalid",i)}Yu(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="children"?typeof l=="string"?i.textContent!==l&&(s.suppressHydrationWarning!==!0&&Fo(i.textContent,l,t),r=["children",l]):typeof l=="number"&&i.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Fo(i.textContent,l,t),r=["children",""+l]):ja.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&xt("scroll",i)}switch(n){case"input":Co(i),Wh(i,s,!0);break;case"textarea":Co(i),$h(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Hl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=T0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[li]=e,t[Ja]=i,Kx(t,e,!1,!1),e.stateNode=t;e:{switch(a=Ku(n,i),n){case"dialog":xt("cancel",t),xt("close",t),r=i;break;case"iframe":case"object":case"embed":xt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Na.length;r++)xt(Na[r],t);r=i;break;case"source":xt("error",t),r=i;break;case"img":case"image":case"link":xt("error",t),xt("load",t),r=i;break;case"details":xt("toggle",t),r=i;break;case"input":Gh(t,i),r=Gu(t,i),xt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=wt({},i,{value:void 0}),xt("invalid",t);break;case"textarea":Xh(t,i),r=$u(t,i),xt("invalid",t);break;default:r=i}Yu(n,r),l=r;for(s in l)if(l.hasOwnProperty(s)){var c=l[s];s==="style"?N0(t,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&A0(t,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Ga(t,c):typeof c=="number"&&Ga(t,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ja.hasOwnProperty(s)?c!=null&&s==="onScroll"&&xt("scroll",t):c!=null&&Nf(t,s,c,a))}switch(n){case"input":Co(t),Wh(t,i,!1);break;case"textarea":Co(t),$h(t);break;case"option":i.value!=null&&t.setAttribute("value",""+xr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ps(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ps(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Hl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return qt(e),null;case 6:if(t&&e.stateNode!=null)Qx(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ae(166));if(n=Ur(to.current),Ur(hi.current),Oo(e)){if(i=e.stateNode,n=e.memoizedProps,i[li]=e,(s=i.nodeValue!==n)&&(t=En,t!==null))switch(t.tag){case 3:Fo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Fo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[li]=e,e.stateNode=i}return qt(e),null;case 13:if(gt(Mt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(yt&&wn!==null&&e.mode&1&&!(e.flags&128))xx(),Hs(),e.flags|=98560,s=!1;else if(s=Oo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ae(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ae(317));s[li]=e}else Hs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;qt(e),s=!1}else $n!==null&&(Rd($n),$n=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Mt.current&1?Ut===0&&(Ut=3):dh())),e.updateQueue!==null&&(e.flags|=4),qt(e),null);case 4:return Gs(),Md(t,e),t===null&&Za(e.stateNode.containerInfo),qt(e),null;case 10:return qf(e.type._context),qt(e),null;case 17:return mn(e.type)&&jl(),qt(e),null;case 19:if(gt(Mt),s=e.memoizedState,s===null)return qt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)va(s,!1);else{if(Ut!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Kl(t),a!==null){for(e.flags|=128,va(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ft(Mt,Mt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Nt()>Xs&&(e.flags|=128,i=!0,va(s,!1),e.lanes=4194304)}else{if(!i)if(t=Kl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),va(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!yt)return qt(e),null}else 2*Nt()-s.renderingStartTime>Xs&&n!==1073741824&&(e.flags|=128,i=!0,va(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Nt(),e.sibling=null,n=Mt.current,ft(Mt,i?n&1|2:n&1),e):(qt(e),null);case 22:case 23:return uh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?bn&1073741824&&(qt(e),e.subtreeFlags&6&&(e.flags|=8192)):qt(e),null;case 24:return null;case 25:return null}throw Error(ae(156,e.tag))}function h_(t,e){switch(Gf(e),e.tag){case 1:return mn(e.type)&&jl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Gs(),gt(pn),gt(Jt),Jf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Qf(e),null;case 13:if(gt(Mt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ae(340));Hs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return gt(Mt),null;case 4:return Gs(),null;case 10:return qf(e.type._context),null;case 22:case 23:return uh(),null;case 24:return null;default:return null}}var zo=!1,Zt=!1,p_=typeof WeakSet=="function"?WeakSet:Set,be=null;function Cs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Tt(t,e,i)}else n.current=null}function bd(t,e,n){try{n()}catch(i){Tt(t,e,i)}}var Fp=!1;function m_(t,e){if(ad=Bl,t=ix(),Hf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,l=-1,c=-1,u=0,h=0,p=t,f=null;t:for(;;){for(var m;p!==n||r!==0&&p.nodeType!==3||(l=a+r),p!==s||i!==0&&p.nodeType!==3||(c=a+i),p.nodeType===3&&(a+=p.nodeValue.length),(m=p.firstChild)!==null;)f=p,p=m;for(;;){if(p===t)break t;if(f===n&&++u===r&&(l=a),f===s&&++h===i&&(c=a),(m=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=m}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(od={focusedElem:t,selectionRange:n},Bl=!1,be=e;be!==null;)if(e=be,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,be=t;else for(;be!==null;){e=be;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var w=g.memoizedProps,x=g.memoizedState,d=e.stateNode,y=d.getSnapshotBeforeUpdate(e.elementType===e.type?w:Wn(e.type,w),x);d.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var M=e.stateNode.containerInfo;M.nodeType===1?M.textContent="":M.nodeType===9&&M.documentElement&&M.removeChild(M.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ae(163))}}catch(S){Tt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,be=t;break}be=e.return}return g=Fp,Fp=!1,g}function ka(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&bd(e,n,s)}r=r.next}while(r!==i)}}function Mc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function wd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Jx(t){var e=t.alternate;e!==null&&(t.alternate=null,Jx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[li],delete e[Ja],delete e[ud],delete e[Z1],delete e[Q1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function eg(t){return t.tag===5||t.tag===3||t.tag===4}function Op(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||eg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ed(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Hl));else if(i!==4&&(t=t.child,t!==null))for(Ed(t,e,n),t=t.sibling;t!==null;)Ed(t,e,n),t=t.sibling}function Td(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Td(t,e,n),t=t.sibling;t!==null;)Td(t,e,n),t=t.sibling}var jt=null,Xn=!1;function Wi(t,e,n){for(n=n.child;n!==null;)tg(t,e,n),n=n.sibling}function tg(t,e,n){if(fi&&typeof fi.onCommitFiberUnmount=="function")try{fi.onCommitFiberUnmount(pc,n)}catch{}switch(n.tag){case 5:Zt||Cs(n,e);case 6:var i=jt,r=Xn;jt=null,Wi(t,e,n),jt=i,Xn=r,jt!==null&&(Xn?(t=jt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):jt.removeChild(n.stateNode));break;case 18:jt!==null&&(Xn?(t=jt,n=n.stateNode,t.nodeType===8?Yc(t.parentNode,n):t.nodeType===1&&Yc(t,n),qa(t)):Yc(jt,n.stateNode));break;case 4:i=jt,r=Xn,jt=n.stateNode.containerInfo,Xn=!0,Wi(t,e,n),jt=i,Xn=r;break;case 0:case 11:case 14:case 15:if(!Zt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&bd(n,e,a),r=r.next}while(r!==i)}Wi(t,e,n);break;case 1:if(!Zt&&(Cs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(l){Tt(n,e,l)}Wi(t,e,n);break;case 21:Wi(t,e,n);break;case 22:n.mode&1?(Zt=(i=Zt)||n.memoizedState!==null,Wi(t,e,n),Zt=i):Wi(t,e,n);break;default:Wi(t,e,n)}}function kp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new p_),e.forEach(function(i){var r=w_.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Vn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,l=a;e:for(;l!==null;){switch(l.tag){case 5:jt=l.stateNode,Xn=!1;break e;case 3:jt=l.stateNode.containerInfo,Xn=!0;break e;case 4:jt=l.stateNode.containerInfo,Xn=!0;break e}l=l.return}if(jt===null)throw Error(ae(160));tg(s,a,r),jt=null,Xn=!1;var c=r.alternate;c!==null&&(c.return=null),r.return=null}catch(u){Tt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)ng(e,t),e=e.sibling}function ng(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Vn(e,t),ii(t),i&4){try{ka(3,t,t.return),Mc(3,t)}catch(w){Tt(t,t.return,w)}try{ka(5,t,t.return)}catch(w){Tt(t,t.return,w)}}break;case 1:Vn(e,t),ii(t),i&512&&n!==null&&Cs(n,n.return);break;case 5:if(Vn(e,t),ii(t),i&512&&n!==null&&Cs(n,n.return),t.flags&32){var r=t.stateNode;try{Ga(r,"")}catch(w){Tt(t,t.return,w)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,l=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&w0(r,s),Ku(l,a);var u=Ku(l,s);for(a=0;a<c.length;a+=2){var h=c[a],p=c[a+1];h==="style"?N0(r,p):h==="dangerouslySetInnerHTML"?A0(r,p):h==="children"?Ga(r,p):Nf(r,h,p,u)}switch(l){case"input":Wu(r,s);break;case"textarea":E0(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Ps(r,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?Ps(r,!!s.multiple,s.defaultValue,!0):Ps(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ja]=s}catch(w){Tt(t,t.return,w)}}break;case 6:if(Vn(e,t),ii(t),i&4){if(t.stateNode===null)throw Error(ae(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(w){Tt(t,t.return,w)}}break;case 3:if(Vn(e,t),ii(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{qa(e.containerInfo)}catch(w){Tt(t,t.return,w)}break;case 4:Vn(e,t),ii(t);break;case 13:Vn(e,t),ii(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(lh=Nt())),i&4&&kp(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Zt=(u=Zt)||h,Vn(e,t),Zt=u):Vn(e,t),ii(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for(be=t,h=t.child;h!==null;){for(p=be=h;be!==null;){switch(f=be,m=f.child,f.tag){case 0:case 11:case 14:case 15:ka(4,f,f.return);break;case 1:Cs(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(w){Tt(i,n,w)}}break;case 5:Cs(f,f.return);break;case 22:if(f.memoizedState!==null){zp(p);continue}}m!==null?(m.return=f,be=m):zp(p)}h=h.sibling}e:for(h=null,p=t;;){if(p.tag===5){if(h===null){h=p;try{r=p.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,c=p.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=C0("display",a))}catch(w){Tt(t,t.return,w)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(w){Tt(t,t.return,w)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Vn(e,t),ii(t),i&4&&kp(t);break;case 21:break;default:Vn(e,t),ii(t)}}function ii(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(eg(n)){var i=n;break e}n=n.return}throw Error(ae(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ga(r,""),i.flags&=-33);var s=Op(t);Td(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,l=Op(t);Ed(t,l,a);break;default:throw Error(ae(161))}}catch(c){Tt(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function x_(t,e,n){be=t,ig(t)}function ig(t,e,n){for(var i=(t.mode&1)!==0;be!==null;){var r=be,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||zo;if(!a){var l=r.alternate,c=l!==null&&l.memoizedState!==null||Zt;l=zo;var u=Zt;if(zo=a,(Zt=c)&&!u)for(be=r;be!==null;)a=be,c=a.child,a.tag===22&&a.memoizedState!==null?Vp(r):c!==null?(c.return=a,be=c):Vp(r);for(;s!==null;)be=s,ig(s),s=s.sibling;be=r,zo=l,Zt=u}Bp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,be=s):Bp(t)}}function Bp(t){for(;be!==null;){var e=be;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Zt||Mc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Zt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Wn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&bp(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}bp(e,a,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&qa(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ae(163))}Zt||e.flags&512&&wd(e)}catch(f){Tt(e,e.return,f)}}if(e===t){be=null;break}if(n=e.sibling,n!==null){n.return=e.return,be=n;break}be=e.return}}function zp(t){for(;be!==null;){var e=be;if(e===t){be=null;break}var n=e.sibling;if(n!==null){n.return=e.return,be=n;break}be=e.return}}function Vp(t){for(;be!==null;){var e=be;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Mc(4,e)}catch(c){Tt(e,n,c)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(c){Tt(e,r,c)}}var s=e.return;try{wd(e)}catch(c){Tt(e,s,c)}break;case 5:var a=e.return;try{wd(e)}catch(c){Tt(e,a,c)}}}catch(c){Tt(e,e.return,c)}if(e===t){be=null;break}var l=e.sibling;if(l!==null){l.return=e.return,be=l;break}be=e.return}}var g_=Math.ceil,Jl=Vi.ReactCurrentDispatcher,ah=Vi.ReactCurrentOwner,kn=Vi.ReactCurrentBatchConfig,et=0,Vt=null,Pt=null,Wt=0,bn=0,Ns=yr(0),Ut=0,so=null,jr=0,bc=0,oh=0,Ba=null,fn=null,lh=0,Xs=1/0,Ei=null,ec=!1,Ad=null,hr=null,Vo=!1,sr=null,tc=0,za=0,Cd=null,bl=-1,wl=0;function an(){return et&6?Nt():bl!==-1?bl:bl=Nt()}function pr(t){return t.mode&1?et&2&&Wt!==0?Wt&-Wt:e_.transition!==null?(wl===0&&(wl=V0()),wl):(t=ct,t!==0||(t=window.event,t=t===void 0?16:q0(t.type)),t):1}function Qn(t,e,n,i){if(50<za)throw za=0,Cd=null,Error(ae(185));uo(t,n,i),(!(et&2)||t!==Vt)&&(t===Vt&&(!(et&2)&&(bc|=n),Ut===4&&nr(t,Wt)),xn(t,i),n===1&&et===0&&!(e.mode&1)&&(Xs=Nt()+500,_c&&Sr()))}function xn(t,e){var n=t.callbackNode;e1(t,e);var i=kl(t,t===Vt?Wt:0);if(i===0)n!==null&&Kh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Kh(n),e===1)t.tag===0?J1(Hp.bind(null,t)):hx(Hp.bind(null,t)),Y1(function(){!(et&6)&&Sr()}),n=null;else{switch(H0(i)){case 1:n=If;break;case 4:n=B0;break;case 16:n=Ol;break;case 536870912:n=z0;break;default:n=Ol}n=dg(n,rg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function rg(t,e){if(bl=-1,wl=0,et&6)throw Error(ae(327));var n=t.callbackNode;if(Fs()&&t.callbackNode!==n)return null;var i=kl(t,t===Vt?Wt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=nc(t,i);else{e=i;var r=et;et|=2;var s=ag();(Vt!==t||Wt!==e)&&(Ei=null,Xs=Nt()+500,kr(t,e));do try{y_();break}catch(l){sg(t,l)}while(!0);$f(),Jl.current=s,et=r,Pt!==null?e=0:(Vt=null,Wt=0,e=Ut)}if(e!==0){if(e===2&&(r=td(t),r!==0&&(i=r,e=Nd(t,r))),e===1)throw n=so,kr(t,0),nr(t,i),xn(t,Nt()),n;if(e===6)nr(t,i);else{if(r=t.current.alternate,!(i&30)&&!v_(r)&&(e=nc(t,i),e===2&&(s=td(t),s!==0&&(i=s,e=Nd(t,s))),e===1))throw n=so,kr(t,0),nr(t,i),xn(t,Nt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ae(345));case 2:Nr(t,fn,Ei);break;case 3:if(nr(t,i),(i&130023424)===i&&(e=lh+500-Nt(),10<e)){if(kl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){an(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=cd(Nr.bind(null,t,fn,Ei),e);break}Nr(t,fn,Ei);break;case 4:if(nr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Zn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Nt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*g_(i/1960))-i,10<i){t.timeoutHandle=cd(Nr.bind(null,t,fn,Ei),i);break}Nr(t,fn,Ei);break;case 5:Nr(t,fn,Ei);break;default:throw Error(ae(329))}}}return xn(t,Nt()),t.callbackNode===n?rg.bind(null,t):null}function Nd(t,e){var n=Ba;return t.current.memoizedState.isDehydrated&&(kr(t,e).flags|=256),t=nc(t,e),t!==2&&(e=fn,fn=n,e!==null&&Rd(e)),t}function Rd(t){fn===null?fn=t:fn.push.apply(fn,t)}function v_(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Jn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function nr(t,e){for(e&=~oh,e&=~bc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Zn(e),i=1<<n;t[n]=-1,e&=~i}}function Hp(t){if(et&6)throw Error(ae(327));Fs();var e=kl(t,0);if(!(e&1))return xn(t,Nt()),null;var n=nc(t,e);if(t.tag!==0&&n===2){var i=td(t);i!==0&&(e=i,n=Nd(t,i))}if(n===1)throw n=so,kr(t,0),nr(t,e),xn(t,Nt()),n;if(n===6)throw Error(ae(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Nr(t,fn,Ei),xn(t,Nt()),null}function ch(t,e){var n=et;et|=1;try{return t(e)}finally{et=n,et===0&&(Xs=Nt()+500,_c&&Sr())}}function Gr(t){sr!==null&&sr.tag===0&&!(et&6)&&Fs();var e=et;et|=1;var n=kn.transition,i=ct;try{if(kn.transition=null,ct=1,t)return t()}finally{ct=i,kn.transition=n,et=e,!(et&6)&&Sr()}}function uh(){bn=Ns.current,gt(Ns)}function kr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,q1(n)),Pt!==null)for(n=Pt.return;n!==null;){var i=n;switch(Gf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&jl();break;case 3:Gs(),gt(pn),gt(Jt),Jf();break;case 5:Qf(i);break;case 4:Gs();break;case 13:gt(Mt);break;case 19:gt(Mt);break;case 10:qf(i.type._context);break;case 22:case 23:uh()}n=n.return}if(Vt=t,Pt=t=mr(t.current,null),Wt=bn=e,Ut=0,so=null,oh=bc=jr=0,fn=Ba=null,Ir!==null){for(e=0;e<Ir.length;e++)if(n=Ir[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Ir=null}return t}function sg(t,e){do{var n=Pt;try{if($f(),yl.current=Ql,Zl){for(var i=bt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Zl=!1}if(Hr=0,zt=It=bt=null,Oa=!1,no=0,ah.current=null,n===null||n.return===null){Ut=1,so=e,Pt=null;break}e:{var s=t,a=n.return,l=n,c=e;if(e=Wt,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,h=l,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var m=Np(a);if(m!==null){m.flags&=-257,Rp(m,a,l,s,e),m.mode&1&&Cp(s,u,e),e=m,c=u;var g=e.updateQueue;if(g===null){var w=new Set;w.add(c),e.updateQueue=w}else g.add(c);break e}else{if(!(e&1)){Cp(s,u,e),dh();break e}c=Error(ae(426))}}else if(yt&&l.mode&1){var x=Np(a);if(x!==null){!(x.flags&65536)&&(x.flags|=256),Rp(x,a,l,s,e),Wf(Ws(c,l));break e}}s=c=Ws(c,l),Ut!==4&&(Ut=2),Ba===null?Ba=[s]:Ba.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=Hx(s,c,e);Mp(s,d);break e;case 1:l=c;var y=s.type,M=s.stateNode;if(!(s.flags&128)&&(typeof y.getDerivedStateFromError=="function"||M!==null&&typeof M.componentDidCatch=="function"&&(hr===null||!hr.has(M)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=jx(s,l,e);Mp(s,S);break e}}s=s.return}while(s!==null)}lg(n)}catch(T){e=T,Pt===n&&n!==null&&(Pt=n=n.return);continue}break}while(!0)}function ag(){var t=Jl.current;return Jl.current=Ql,t===null?Ql:t}function dh(){(Ut===0||Ut===3||Ut===2)&&(Ut=4),Vt===null||!(jr&268435455)&&!(bc&268435455)||nr(Vt,Wt)}function nc(t,e){var n=et;et|=2;var i=ag();(Vt!==t||Wt!==e)&&(Ei=null,kr(t,e));do try{__();break}catch(r){sg(t,r)}while(!0);if($f(),et=n,Jl.current=i,Pt!==null)throw Error(ae(261));return Vt=null,Wt=0,Ut}function __(){for(;Pt!==null;)og(Pt)}function y_(){for(;Pt!==null&&!Wv();)og(Pt)}function og(t){var e=ug(t.alternate,t,bn);t.memoizedProps=t.pendingProps,e===null?lg(t):Pt=e,ah.current=null}function lg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=h_(n,e),n!==null){n.flags&=32767,Pt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ut=6,Pt=null;return}}else if(n=f_(n,e,bn),n!==null){Pt=n;return}if(e=e.sibling,e!==null){Pt=e;return}Pt=e=t}while(e!==null);Ut===0&&(Ut=5)}function Nr(t,e,n){var i=ct,r=kn.transition;try{kn.transition=null,ct=1,S_(t,e,n,i)}finally{kn.transition=r,ct=i}return null}function S_(t,e,n,i){do Fs();while(sr!==null);if(et&6)throw Error(ae(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ae(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(t1(t,s),t===Vt&&(Pt=Vt=null,Wt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Vo||(Vo=!0,dg(Ol,function(){return Fs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=kn.transition,kn.transition=null;var a=ct;ct=1;var l=et;et|=4,ah.current=null,m_(t,n),ng(n,t),V1(od),Bl=!!ad,od=ad=null,t.current=n,x_(n),Xv(),et=l,ct=a,kn.transition=s}else t.current=n;if(Vo&&(Vo=!1,sr=t,tc=r),s=t.pendingLanes,s===0&&(hr=null),Yv(n.stateNode),xn(t,Nt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(ec)throw ec=!1,t=Ad,Ad=null,t;return tc&1&&t.tag!==0&&Fs(),s=t.pendingLanes,s&1?t===Cd?za++:(za=0,Cd=t):za=0,Sr(),null}function Fs(){if(sr!==null){var t=H0(tc),e=kn.transition,n=ct;try{if(kn.transition=null,ct=16>t?16:t,sr===null)var i=!1;else{if(t=sr,sr=null,tc=0,et&6)throw Error(ae(331));var r=et;for(et|=4,be=t.current;be!==null;){var s=be,a=s.child;if(be.flags&16){var l=s.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(be=u;be!==null;){var h=be;switch(h.tag){case 0:case 11:case 15:ka(8,h,s)}var p=h.child;if(p!==null)p.return=h,be=p;else for(;be!==null;){h=be;var f=h.sibling,m=h.return;if(Jx(h),h===u){be=null;break}if(f!==null){f.return=m,be=f;break}be=m}}}var g=s.alternate;if(g!==null){var w=g.child;if(w!==null){g.child=null;do{var x=w.sibling;w.sibling=null,w=x}while(w!==null)}}be=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,be=a;else e:for(;be!==null;){if(s=be,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ka(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,be=d;break e}be=s.return}}var y=t.current;for(be=y;be!==null;){a=be;var M=a.child;if(a.subtreeFlags&2064&&M!==null)M.return=a,be=M;else e:for(a=y;be!==null;){if(l=be,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Mc(9,l)}}catch(T){Tt(l,l.return,T)}if(l===a){be=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,be=S;break e}be=l.return}}if(et=r,Sr(),fi&&typeof fi.onPostCommitFiberRoot=="function")try{fi.onPostCommitFiberRoot(pc,t)}catch{}i=!0}return i}finally{ct=n,kn.transition=e}}return!1}function jp(t,e,n){e=Ws(n,e),e=Hx(t,e,1),t=fr(t,e,1),e=an(),t!==null&&(uo(t,1,e),xn(t,e))}function Tt(t,e,n){if(t.tag===3)jp(t,t,n);else for(;e!==null;){if(e.tag===3){jp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(hr===null||!hr.has(i))){t=Ws(n,t),t=jx(e,t,1),e=fr(e,t,1),t=an(),e!==null&&(uo(e,1,t),xn(e,t));break}}e=e.return}}function M_(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=an(),t.pingedLanes|=t.suspendedLanes&n,Vt===t&&(Wt&n)===n&&(Ut===4||Ut===3&&(Wt&130023424)===Wt&&500>Nt()-lh?kr(t,0):oh|=n),xn(t,e)}function cg(t,e){e===0&&(t.mode&1?(e=Po,Po<<=1,!(Po&130023424)&&(Po=4194304)):e=1);var n=an();t=Oi(t,e),t!==null&&(uo(t,e,n),xn(t,n))}function b_(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),cg(t,n)}function w_(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ae(314))}i!==null&&i.delete(e),cg(t,n)}var ug;ug=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||pn.current)hn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return hn=!1,d_(t,e,n);hn=!!(t.flags&131072)}else hn=!1,yt&&e.flags&1048576&&px(e,Xl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ml(t,e),t=e.pendingProps;var r=Vs(e,Jt.current);Us(e,n),r=th(null,e,i,t,r,n);var s=nh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,mn(i)?(s=!0,Gl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Kf(e),r.updater=Sc,e.stateNode=r,r._reactInternals=e,xd(e,i,t,n),e=_d(null,e,i,!0,s,n)):(e.tag=0,yt&&s&&jf(e),sn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ml(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=T_(i),t=Wn(i,t),r){case 0:e=vd(null,e,i,t,n);break e;case 1:e=Dp(null,e,i,t,n);break e;case 11:e=Pp(null,e,i,t,n);break e;case 14:e=Lp(null,e,i,Wn(i.type,t),n);break e}throw Error(ae(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Wn(i,r),vd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Wn(i,r),Dp(t,e,i,r,n);case 3:e:{if($x(e),t===null)throw Error(ae(387));i=e.pendingProps,s=e.memoizedState,r=s.element,yx(t,e),Yl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ws(Error(ae(423)),e),e=Ip(t,e,i,n,r);break e}else if(i!==r){r=Ws(Error(ae(424)),e),e=Ip(t,e,i,n,r);break e}else for(wn=dr(e.stateNode.containerInfo.firstChild),En=e,yt=!0,$n=null,n=vx(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Hs(),i===r){e=ki(t,e,n);break e}sn(t,e,i,n)}e=e.child}return e;case 5:return Sx(e),t===null&&hd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,ld(i,r)?a=null:s!==null&&ld(i,s)&&(e.flags|=32),Xx(t,e),sn(t,e,a,n),e.child;case 6:return t===null&&hd(e),null;case 13:return qx(t,e,n);case 4:return Zf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=js(e,null,i,n):sn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Wn(i,r),Pp(t,e,i,r,n);case 7:return sn(t,e,e.pendingProps,n),e.child;case 8:return sn(t,e,e.pendingProps.children,n),e.child;case 12:return sn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,ft($l,i._currentValue),i._currentValue=a,s!==null)if(Jn(s.value,a)){if(s.children===r.children&&!pn.current){e=ki(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){a=s.child;for(var c=l.firstContext;c!==null;){if(c.context===i){if(s.tag===1){c=Pi(-1,n&-n),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?c.next=c:(c.next=h.next,h.next=c),u.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),pd(s.return,n,e),l.lanes|=n;break}c=c.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ae(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),pd(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}sn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Us(e,n),r=Bn(r),i=i(r),e.flags|=1,sn(t,e,i,n),e.child;case 14:return i=e.type,r=Wn(i,e.pendingProps),r=Wn(i.type,r),Lp(t,e,i,r,n);case 15:return Gx(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Wn(i,r),Ml(t,e),e.tag=1,mn(i)?(t=!0,Gl(e)):t=!1,Us(e,n),Vx(e,i,r),xd(e,i,r,n),_d(null,e,i,!0,t,n);case 19:return Yx(t,e,n);case 22:return Wx(t,e,n)}throw Error(ae(156,e.tag))};function dg(t,e){return k0(t,e)}function E_(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function On(t,e,n,i){return new E_(t,e,n,i)}function fh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function T_(t){if(typeof t=="function")return fh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Pf)return 11;if(t===Lf)return 14}return 2}function mr(t,e){var n=t.alternate;return n===null?(n=On(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function El(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")fh(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case _s:return Br(n.children,r,s,e);case Rf:a=8,r|=8;break;case zu:return t=On(12,n,e,r|2),t.elementType=zu,t.lanes=s,t;case Vu:return t=On(13,n,e,r),t.elementType=Vu,t.lanes=s,t;case Hu:return t=On(19,n,e,r),t.elementType=Hu,t.lanes=s,t;case S0:return wc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _0:a=10;break e;case y0:a=9;break e;case Pf:a=11;break e;case Lf:a=14;break e;case Ji:a=16,i=null;break e}throw Error(ae(130,t==null?t:typeof t,""))}return e=On(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Br(t,e,n,i){return t=On(7,t,i,e),t.lanes=n,t}function wc(t,e,n,i){return t=On(22,t,i,e),t.elementType=S0,t.lanes=n,t.stateNode={isHidden:!1},t}function iu(t,e,n){return t=On(6,t,null,e),t.lanes=n,t}function ru(t,e,n){return e=On(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function A_(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=kc(0),this.expirationTimes=kc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=kc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function hh(t,e,n,i,r,s,a,l,c){return t=new A_(t,e,n,l,c),e===1?(e=1,s===!0&&(e|=8)):e=0,s=On(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Kf(s),t}function C_(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:vs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function fg(t){if(!t)return gr;t=t._reactInternals;e:{if(Yr(t)!==t||t.tag!==1)throw Error(ae(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(mn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ae(171))}if(t.tag===1){var n=t.type;if(mn(n))return fx(t,n,e)}return e}function hg(t,e,n,i,r,s,a,l,c){return t=hh(n,i,!0,t,r,s,a,l,c),t.context=fg(null),n=t.current,i=an(),r=pr(n),s=Pi(i,r),s.callback=e??null,fr(n,s,r),t.current.lanes=r,uo(t,r,i),xn(t,i),t}function Ec(t,e,n,i){var r=e.current,s=an(),a=pr(r);return n=fg(n),e.context===null?e.context=n:e.pendingContext=n,e=Pi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=fr(r,e,a),t!==null&&(Qn(t,r,a,s),_l(t,r,a)),a}function ic(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Gp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ph(t,e){Gp(t,e),(t=t.alternate)&&Gp(t,e)}function N_(){return null}var pg=typeof reportError=="function"?reportError:function(t){console.error(t)};function mh(t){this._internalRoot=t}Tc.prototype.render=mh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ae(409));Ec(t,e,null,null)};Tc.prototype.unmount=mh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Gr(function(){Ec(null,t,null,null)}),e[Fi]=null}};function Tc(t){this._internalRoot=t}Tc.prototype.unstable_scheduleHydration=function(t){if(t){var e=W0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<tr.length&&e!==0&&e<tr[n].priority;n++);tr.splice(n,0,t),n===0&&$0(t)}};function xh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ac(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Wp(){}function R_(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=ic(a);s.call(u)}}var a=hg(e,i,t,0,null,!1,!1,"",Wp);return t._reactRootContainer=a,t[Fi]=a.current,Za(t.nodeType===8?t.parentNode:t),Gr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var l=i;i=function(){var u=ic(c);l.call(u)}}var c=hh(t,0,!1,null,null,!1,!1,"",Wp);return t._reactRootContainer=c,t[Fi]=c.current,Za(t.nodeType===8?t.parentNode:t),Gr(function(){Ec(e,c,n,i)}),c}function Cc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var l=r;r=function(){var c=ic(a);l.call(c)}}Ec(e,a,t,r)}else a=R_(n,e,t,r,i);return ic(a)}j0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ca(e.pendingLanes);n!==0&&(Uf(e,n|1),xn(e,Nt()),!(et&6)&&(Xs=Nt()+500,Sr()))}break;case 13:Gr(function(){var i=Oi(t,1);if(i!==null){var r=an();Qn(i,t,1,r)}}),ph(t,1)}};Ff=function(t){if(t.tag===13){var e=Oi(t,134217728);if(e!==null){var n=an();Qn(e,t,134217728,n)}ph(t,134217728)}};G0=function(t){if(t.tag===13){var e=pr(t),n=Oi(t,e);if(n!==null){var i=an();Qn(n,t,e,i)}ph(t,e)}};W0=function(){return ct};X0=function(t,e){var n=ct;try{return ct=t,e()}finally{ct=n}};Qu=function(t,e,n){switch(e){case"input":if(Wu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=vc(i);if(!r)throw Error(ae(90));b0(i),Wu(i,r)}}}break;case"textarea":E0(t,n);break;case"select":e=n.value,e!=null&&Ps(t,!!n.multiple,e,!1)}};L0=ch;D0=Gr;var P_={usingClientEntryPoint:!1,Events:[ho,bs,vc,R0,P0,ch]},_a={findFiberByHostInstance:Dr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},L_={bundleType:_a.bundleType,version:_a.version,rendererPackageName:_a.rendererPackageName,rendererConfig:_a.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Vi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=F0(t),t===null?null:t.stateNode},findFiberByHostInstance:_a.findFiberByHostInstance||N_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ho=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ho.isDisabled&&Ho.supportsFiber)try{pc=Ho.inject(L_),fi=Ho}catch{}}Cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P_;Cn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xh(e))throw Error(ae(200));return C_(t,e,null,n)};Cn.createRoot=function(t,e){if(!xh(t))throw Error(ae(299));var n=!1,i="",r=pg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=hh(t,1,!1,null,null,n,!1,i,r),t[Fi]=e.current,Za(t.nodeType===8?t.parentNode:t),new mh(e)};Cn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ae(188)):(t=Object.keys(t).join(","),Error(ae(268,t)));return t=F0(e),t=t===null?null:t.stateNode,t};Cn.flushSync=function(t){return Gr(t)};Cn.hydrate=function(t,e,n){if(!Ac(e))throw Error(ae(200));return Cc(null,t,e,!0,n)};Cn.hydrateRoot=function(t,e,n){if(!xh(t))throw Error(ae(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=pg;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=hg(e,null,t,1,n??null,r,!1,s,a),t[Fi]=e.current,Za(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Tc(e)};Cn.render=function(t,e,n){if(!Ac(e))throw Error(ae(200));return Cc(null,t,e,!1,n)};Cn.unmountComponentAtNode=function(t){if(!Ac(t))throw Error(ae(40));return t._reactRootContainer?(Gr(function(){Cc(null,null,t,!1,function(){t._reactRootContainer=null,t[Fi]=null})}),!0):!1};Cn.unstable_batchedUpdates=ch;Cn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Ac(n))throw Error(ae(200));if(t==null||t._reactInternals===void 0)throw Error(ae(38));return Cc(t,e,n,!1,i)};Cn.version="18.3.1-next-f1338f8080-20240426";function mg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(mg)}catch(t){console.error(t)}}mg(),m0.exports=Cn;var D_=m0.exports,Xp=D_;ku.createRoot=Xp.createRoot,ku.hydrateRoot=Xp.hydrateRoot;var xg={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},$p=or.createContext&&or.createContext(xg),I_=["attr","size","title"];function U_(t,e){if(t==null)return{};var n,i,r=F_(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)n=s[i],e.indexOf(n)===-1&&{}.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function F_(t,e){if(t==null)return{};var n={};for(var i in t)if({}.hasOwnProperty.call(t,i)){if(e.indexOf(i)!==-1)continue;n[i]=t[i]}return n}function rc(){return rc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},rc.apply(null,arguments)}function qp(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function sc(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?qp(Object(n),!0).forEach(function(i){O_(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):qp(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function O_(t,e,n){return(e=k_(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function k_(t){var e=B_(t,"string");return typeof e=="symbol"?e:e+""}function B_(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function gg(t){return t&&t.map((e,n)=>or.createElement(e.tag,sc({key:n},e.attr),gg(e.child)))}function Ue(t){return e=>or.createElement(z_,rc({attr:sc({},t.attr)},e),gg(t.child))}function z_(t){var e=n=>{var i=t.attr,r=t.size,s=t.title,a=U_(t,I_),l=r||n.size||"1em",c;return n.className&&(c=n.className),t.className&&(c=(c?c+" ":"")+t.className),or.createElement("svg",rc({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,i,a,{className:c,style:sc(sc({color:t.color||n.color},n.style),t.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),s&&or.createElement("title",null,s),t.children)};return $p!==void 0?or.createElement($p.Consumer,null,n=>e(n)):e(xg)}function Rs(t){return Ue({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"},child:[]}]})(t)}function Yp(t){return Ue({attr:{viewBox:"0 0 488 512"},child:[{tag:"path",attr:{d:"M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"},child:[]}]})(t)}function V_(t){return Ue({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(t)}function Tl(t){return Ue({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4zm323-128.4l-27.8-28.1c-4.6-4.7-12.1-4.7-16.8-.1l-104.8 104-45.5-45.8c-4.6-4.7-12.1-4.7-16.8-.1l-28.1 27.9c-4.7 4.6-4.7 12.1-.1 16.8l81.7 82.3c4.6 4.7 12.1 4.7 16.8.1l141.3-140.2c4.6-4.7 4.7-12.2.1-16.8z"},child:[]}]})(t)}function H_(t){return Ue({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(t)}function es(t){return Ue({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M440.65 12.57l4 82.77A247.16 247.16 0 0 0 255.83 8C134.73 8 33.91 94.92 12.29 209.82A12 12 0 0 0 24.09 224h49.05a12 12 0 0 0 11.67-9.26 175.91 175.91 0 0 1 317-56.94l-101.46-4.86a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12H500a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12h-47.37a12 12 0 0 0-11.98 12.57zM255.83 432a175.61 175.61 0 0 1-146-77.8l101.8 4.87a12 12 0 0 0 12.57-12v-47.4a12 12 0 0 0-12-12H12a12 12 0 0 0-12 12V500a12 12 0 0 0 12 12h47.35a12 12 0 0 0 12-12.6l-4.15-82.57A247.17 247.17 0 0 0 255.83 504c121.11 0 221.93-86.92 243.55-201.82a12 12 0 0 0-11.8-14.18h-49.05a12 12 0 0 0-11.67 9.26A175.86 175.86 0 0 1 255.83 432z"},child:[]}]})(t)}function Kp(t){return Ue({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"},child:[]}]})(t)}function j_(t){return Ue({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"},child:[]}]})(t)}function Zp(t){return Ue({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"},child:[]}]})(t)}function G_(t){return Ue({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M480 160H32c-17.673 0-32-14.327-32-32V64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24z"},child:[]}]})(t)}function W_(t){return Ue({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M0 224v272c0 8.84 7.16 16 16 16h80V192H32c-17.67 0-32 14.33-32 32zm360-48h-24v-40c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8v64c0 4.42 3.58 8 8 8h48c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8zm137.75-63.96l-160-106.67a32.02 32.02 0 0 0-35.5 0l-160 106.67A32.002 32.002 0 0 0 128 138.66V512h128V368c0-8.84 7.16-16 16-16h96c8.84 0 16 7.16 16 16v144h128V138.67c0-10.7-5.35-20.7-14.25-26.63zM320 256c-44.18 0-80-35.82-80-80s35.82-80 80-80 80 35.82 80 80-35.82 80-80 80zm288-64h-64v320h80c8.84 0 16-7.16 16-16V224c0-17.67-14.33-32-32-32z"},child:[]}]})(t)}function X_(t){return Ue({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z"},child:[]}]})(t)}function ci(t){return Ue({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M32,224H64V416H32A31.96166,31.96166,0,0,1,0,384V256A31.96166,31.96166,0,0,1,32,224Zm512-48V448a64.06328,64.06328,0,0,1-64,64H160a64.06328,64.06328,0,0,1-64-64V176a79.974,79.974,0,0,1,80-80H288V32a32,32,0,0,1,64,0V96H464A79.974,79.974,0,0,1,544,176ZM264,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,264,256Zm-8,128H192v32h64Zm96,0H288v32h64ZM456,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,456,256Zm-8,128H384v32h64ZM640,256V384a31.96166,31.96166,0,0,1-32,32H576V224h32A31.96166,31.96166,0,0,1,640,256Z"},child:[]}]})(t)}function $_(t){return Ue({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"},child:[]}]})(t)}function vg(t){return Ue({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"},child:[]}]})(t)}function q_(t){return Ue({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M621.16 54.46C582.37 38.19 543.55 32 504.75 32c-123.17-.01-246.33 62.34-369.5 62.34-30.89 0-61.76-3.92-92.65-13.72-3.47-1.1-6.95-1.62-10.35-1.62C15.04 79 0 92.32 0 110.81v317.26c0 12.63 7.23 24.6 18.84 29.46C57.63 473.81 96.45 480 135.25 480c123.17 0 246.34-62.35 369.51-62.35 30.89 0 61.76 3.92 92.65 13.72 3.47 1.1 6.95 1.62 10.35 1.62 17.21 0 32.25-13.32 32.25-31.81V83.93c-.01-12.64-7.24-24.6-18.85-29.47zM48 132.22c20.12 5.04 41.12 7.57 62.72 8.93C104.84 170.54 79 192.69 48 192.69v-60.47zm0 285v-47.78c34.37 0 62.18 27.27 63.71 61.4-22.53-1.81-43.59-6.31-63.71-13.62zM320 352c-44.19 0-80-42.99-80-96 0-53.02 35.82-96 80-96s80 42.98 80 96c0 53.03-35.83 96-80 96zm272 27.78c-17.52-4.39-35.71-6.85-54.32-8.44 5.87-26.08 27.5-45.88 54.32-49.28v57.72zm0-236.11c-30.89-3.91-54.86-29.7-55.81-61.55 19.54 2.17 38.09 6.23 55.81 12.66v48.89z"},child:[]}]})(t)}function Y_(t){return Ue({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M416 48v416c0 26.51-21.49 48-48 48H144c-26.51 0-48-21.49-48-48V48c0-26.51 21.49-48 48-48h224c26.51 0 48 21.49 48 48zm96 58v12a6 6 0 0 1-6 6h-18v6a6 6 0 0 1-6 6h-42V88h42a6 6 0 0 1 6 6v6h18a6 6 0 0 1 6 6zm0 96v12a6 6 0 0 1-6 6h-18v6a6 6 0 0 1-6 6h-42v-48h42a6 6 0 0 1 6 6v6h18a6 6 0 0 1 6 6zm0 96v12a6 6 0 0 1-6 6h-18v6a6 6 0 0 1-6 6h-42v-48h42a6 6 0 0 1 6 6v6h18a6 6 0 0 1 6 6zm0 96v12a6 6 0 0 1-6 6h-18v6a6 6 0 0 1-6 6h-42v-48h42a6 6 0 0 1 6 6v6h18a6 6 0 0 1 6 6zM30 376h42v48H30a6 6 0 0 1-6-6v-6H6a6 6 0 0 1-6-6v-12a6 6 0 0 1 6-6h18v-6a6 6 0 0 1 6-6zm0-96h42v48H30a6 6 0 0 1-6-6v-6H6a6 6 0 0 1-6-6v-12a6 6 0 0 1 6-6h18v-6a6 6 0 0 1 6-6zm0-96h42v48H30a6 6 0 0 1-6-6v-6H6a6 6 0 0 1-6-6v-12a6 6 0 0 1 6-6h18v-6a6 6 0 0 1 6-6zm0-96h42v48H30a6 6 0 0 1-6-6v-6H6a6 6 0 0 1-6-6v-12a6 6 0 0 1 6-6h18v-6a6 6 0 0 1 6-6z"},child:[]}]})(t)}function Al(t){return Ue({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"},child:[]}]})(t)}function K_(t){return Ue({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"},child:[]}]})(t)}function Z_(t){return Ue({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M272,288H208a16,16,0,0,1-16-16V208a16,16,0,0,1,16-16h64a16,16,0,0,1,16,16v37.12C299.11,232.24,315,224,332.8,224H469.74l6.65-7.53A16.51,16.51,0,0,0,480,207a16.31,16.31,0,0,0-4.75-10.61L416,144V48a16,16,0,0,0-16-16H368a16,16,0,0,0-16,16V87.3L263.5,8.92C258,4,247.45,0,240.05,0s-17.93,4-23.47,8.92L4.78,196.42A16.15,16.15,0,0,0,0,207a16.4,16.4,0,0,0,3.55,9.39L22.34,237.7A16.22,16.22,0,0,0,33,242.48,16.51,16.51,0,0,0,42.34,239L64,219.88V384a32,32,0,0,0,32,32H272ZM629.33,448H592V288c0-17.67-12.89-32-28.8-32H332.8c-15.91,0-28.8,14.33-28.8,32V448H266.67A10.67,10.67,0,0,0,256,458.67v10.66A42.82,42.82,0,0,0,298.6,512H597.4A42.82,42.82,0,0,0,640,469.33V458.67A10.67,10.67,0,0,0,629.33,448ZM544,448H352V304H544Z"},child:[]}]})(t)}function Qp(t){return Ue({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M512 176.001C512 273.203 433.202 352 336 352c-11.22 0-22.19-1.062-32.827-3.069l-24.012 27.014A23.999 23.999 0 0 1 261.223 384H224v40c0 13.255-10.745 24-24 24h-40v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24v-78.059c0-6.365 2.529-12.47 7.029-16.971l161.802-161.802C163.108 213.814 160 195.271 160 176 160 78.798 238.797.001 335.999 0 433.488-.001 512 78.511 512 176.001zM336 128c0 26.51 21.49 48 48 48s48-21.49 48-48-21.49-48-48-48-48 21.49-48 48z"},child:[]}]})(t)}function Jp(t){return Ue({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"},child:[]}]})(t)}function Q_(t){return Ue({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 255.531c.253 136.64-111.18 248.372-247.82 248.468-59.015.042-113.223-20.53-155.822-54.911-11.077-8.94-11.905-25.541-1.839-35.607l11.267-11.267c8.609-8.609 22.353-9.551 31.891-1.984C173.062 425.135 212.781 440 256 440c101.705 0 184-82.311 184-184 0-101.705-82.311-184-184-184-48.814 0-93.149 18.969-126.068 49.932l50.754 50.754c10.08 10.08 2.941 27.314-11.313 27.314H24c-8.837 0-16-7.163-16-16V38.627c0-14.254 17.234-21.393 27.314-11.314l49.372 49.372C129.209 34.136 189.552 8 256 8c136.81 0 247.747 110.78 248 247.531zm-180.912 78.784l9.823-12.63c8.138-10.463 6.253-25.542-4.21-33.679L288 256.349V152c0-13.255-10.745-24-24-24h-16c-13.255 0-24 10.745-24 24v135.651l65.409 50.874c10.463 8.137 25.541 6.253 33.679-4.21z"},child:[]}]})(t)}function em(t){return Ue({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 0 1-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 0 1-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 0 0-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 0 0-15.55-3.1l-31.17 10.39a11.95 11.95 0 0 0-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 0 1 8.93 21.57 46.536 46.536 0 0 1-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 0 1 0-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z"},child:[]}]})(t)}function ts(t){return Ue({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},child:[]}]})(t)}function tm(t){return Ue({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M0 432c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V256H0v176zm192-68c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H204c-6.6 0-12-5.4-12-12v-40zm-128 0c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM576 80v48H0V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48z"},child:[]}]})(t)}function jo(t){return Ue({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M416 192c0-88.4-93.1-160-208-160S0 103.6 0 192c0 34.3 14.1 65.9 38 92-13.4 30.2-35.5 54.2-35.8 54.5-2.2 2.3-2.8 5.7-1.5 8.7S4.8 352 8 352c36.6 0 66.9-12.3 88.7-25 32.2 15.7 70.3 25 111.3 25 114.9 0 208-71.6 208-160zm122 220c23.9-26 38-57.7 38-92 0-66.9-53.5-124.2-129.3-148.1.9 6.6 1.3 13.3 1.3 20.1 0 105.9-107.7 192-240 192-10.8 0-21.3-.8-31.7-1.9C207.8 439.6 281.8 480 368 480c41 0 79.1-9.2 111.3-25 21.8 12.7 52.1 25 88.7 25 3.2 0 6.1-1.9 7.3-4.8 1.3-2.9.7-6.3-1.5-8.7-.3-.3-22.4-24.2-35.8-54.5z"},child:[]}]})(t)}function su(t){return Ue({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"},child:[]}]})(t)}function J_(t){return Ue({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"},child:[]}]})(t)}function e2(t){return Ue({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"},child:[]}]})(t)}function _g(t){return Ue({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"},child:[]}]})(t)}function Bt(t){return Ue({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},child:[]}]})(t)}function t2(t){return Ue({attr:{viewBox:"0 0 544 512"},child:[{tag:"path",attr:{d:"M527.79 288H290.5l158.03 158.03c6.04 6.04 15.98 6.53 22.19.68 38.7-36.46 65.32-85.61 73.13-140.86 1.34-9.46-6.51-17.85-16.06-17.85zm-15.83-64.8C503.72 103.74 408.26 8.28 288.8.04 279.68-.59 272 7.1 272 16.24V240h223.77c9.14 0 16.82-7.68 16.19-16.8zM224 288V50.71c0-9.55-8.39-17.4-17.84-16.06C86.99 51.49-4.1 155.6.14 280.37 4.5 408.51 114.83 513.59 243.03 511.98c50.4-.63 96.97-16.87 135.26-44.03 7.9-5.6 8.42-17.23 1.57-24.08L224 288z"},child:[]}]})(t)}function nm(t){return Ue({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M332.8 320h38.4c6.4 0 12.8-6.4 12.8-12.8V172.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-288 0h38.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zM496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"},child:[]}]})(t)}function n2(t){return Ue({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M458.622 255.92l45.985-45.005c13.708-12.977 7.316-36.039-10.664-40.339l-62.65-15.99 17.661-62.015c4.991-17.838-11.829-34.663-29.661-29.671l-61.994 17.667-15.984-62.671C337.085.197 313.765-6.276 300.99 7.228L256 53.57 211.011 7.229c-12.63-13.351-36.047-7.234-40.325 10.668l-15.984 62.671-61.995-17.667C74.87 57.907 58.056 74.738 63.046 92.572l17.661 62.015-62.65 15.99C.069 174.878-6.31 197.944 7.392 210.915l45.985 45.005-45.985 45.004c-13.708 12.977-7.316 36.039 10.664 40.339l62.65 15.99-17.661 62.015c-4.991 17.838 11.829 34.663 29.661 29.671l61.994-17.667 15.984 62.671c4.439 18.575 27.696 24.018 40.325 10.668L256 458.61l44.989 46.001c12.5 13.488 35.987 7.486 40.325-10.668l15.984-62.671 61.994 17.667c17.836 4.994 34.651-11.837 29.661-29.671l-17.661-62.015 62.65-15.99c17.987-4.302 24.366-27.367 10.664-40.339l-45.984-45.004z"},child:[]}]})(t)}function i2(t){return Ue({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"},child:[]}]})(t)}function r2(t){return Ue({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49 69.18-34.82 169.23-44.32 218.7-46.92 16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31.01 0 45.04 0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z"},child:[]}]})(t)}function ns(t){return Ue({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"},child:[]}]})(t)}function yg(t){return Ue({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(t)}function s2(t){return Ue({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M97.12 362.63c-8.69-8.69-4.16-6.24-25.12-11.85-9.51-2.55-17.87-7.45-25.43-13.32L1.2 448.7c-4.39 10.77 3.81 22.47 15.43 22.03l52.69-2.01L105.56 507c8 8.44 22.04 5.81 26.43-4.96l52.05-127.62c-10.84 6.04-22.87 9.58-35.31 9.58-19.5 0-37.82-7.59-51.61-21.37zM382.8 448.7l-45.37-111.24c-7.56 5.88-15.92 10.77-25.43 13.32-21.07 5.64-16.45 3.18-25.12 11.85-13.79 13.78-32.12 21.37-51.62 21.37-12.44 0-24.47-3.55-35.31-9.58L252 502.04c4.39 10.77 18.44 13.4 26.43 4.96l36.25-38.28 52.69 2.01c11.62.44 19.82-11.27 15.43-22.03zM263 340c15.28-15.55 17.03-14.21 38.79-20.14 13.89-3.79 24.75-14.84 28.47-28.98 7.48-28.4 5.54-24.97 25.95-45.75 10.17-10.35 14.14-25.44 10.42-39.58-7.47-28.38-7.48-24.42 0-52.83 3.72-14.14-.25-29.23-10.42-39.58-20.41-20.78-18.47-17.36-25.95-45.75-3.72-14.14-14.58-25.19-28.47-28.98-27.88-7.61-24.52-5.62-44.95-26.41-10.17-10.35-25-14.4-38.89-10.61-27.87 7.6-23.98 7.61-51.9 0-13.89-3.79-28.72.25-38.89 10.61-20.41 20.78-17.05 18.8-44.94 26.41-13.89 3.79-24.75 14.84-28.47 28.98-7.47 28.39-5.54 24.97-25.95 45.75-10.17 10.35-14.15 25.44-10.42 39.58 7.47 28.36 7.48 24.4 0 52.82-3.72 14.14.25 29.23 10.42 39.59 20.41 20.78 18.47 17.35 25.95 45.75 3.72 14.14 14.58 25.19 28.47 28.98C104.6 325.96 106.27 325 121 340c13.23 13.47 33.84 15.88 49.74 5.82a39.676 39.676 0 0 1 42.53 0c15.89 10.06 36.5 7.65 49.73-5.82zM97.66 175.96c0-53.03 42.24-96.02 94.34-96.02s94.34 42.99 94.34 96.02-42.24 96.02-94.34 96.02-94.34-42.99-94.34-96.02z"},child:[]}]})(t)}function a2(t){return Ue({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"},child:[]}]})(t)}function Xi(t){return Ue({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"},child:[]}]})(t)}function Pd(t){return Ue({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"},child:[]}]})(t)}function o2(t){return Ue({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z"},child:[]}]})(t)}function l2(t){return Ue({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M5.033 14.649H.743a.74.74 0 0 1-.686-.458.74.74 0 0 1 .16-.808L3.19 10.41H1.06A1.06 1.06 0 0 1 0 9.35h3.957c.301 0 .57.18.686.458a.74.74 0 0 1-.161.808L1.51 13.59h2.464c.585 0 1.06.475 1.06 1.06zM24 11.338c0-1.14-.927-2.066-2.066-2.066-.61 0-1.158.265-1.537.686a2.061 2.061 0 0 0-1.536-.686c-1.14 0-2.066.926-2.066 2.066v3.311a1.06 1.06 0 0 0 1.06-1.06v-2.251a1.004 1.004 0 0 1 2.013 0v2.251c0 .586.474 1.06 1.06 1.06v-3.311a1.004 1.004 0 0 1 2.012 0v2.251c0 .586.475 1.06 1.06 1.06zM16.265 12a2.728 2.728 0 1 1-5.457 0 2.728 2.728 0 0 1 5.457 0zm-1.06 0a1.669 1.669 0 1 0-3.338 0 1.669 1.669 0 0 0 3.338 0zm-4.82 0a2.728 2.728 0 1 1-5.458 0 2.728 2.728 0 0 1 5.457 0zm-1.06 0a1.669 1.669 0 1 0-3.338 0 1.669 1.669 0 0 0 3.338 0z"},child:[]}]})(t)}function c2(t){return Ue({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M5.53 2.13 0 7.75h5.53zm.398 0v5.62h7.608v3.65l5.47-4.45c-.014-1.22.031-2.25-.025-3.46-.148-1.09-1.287-1.47-2.236-1.36zM23.1 4.32c-.802.295-1.358.995-2.047 1.49-2.506 2.05-4.982 4.12-7.468 6.19 3.025 2.59 6.04 5.18 9.065 7.76 1.218.671 1.428-.814 1.328-1.64v-13a.828.828 0 0 0-.877-.825zM.038 8.15v7.7h5.53v-7.7zm13.577 8.1H6.008v5.62c3.864-.006 7.737.011 11.58-.009 1.02-.07 1.618-1.12 1.468-2.07v-2.51l-5.47-4.68v3.65zm-13.577 0c.02 1.44-.041 2.88.033 4.31.162.948 1.158 1.43 2.047 1.31h3.464v-5.62z"},child:[]}]})(t)}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gh="185",u2=0,im=1,d2=2,Cl=1,f2=2,Ra=3,vr=0,gn=1,Ai=2,Li=0,Os=1,rm=2,sm=3,am=4,h2=5,Pr=100,p2=101,m2=102,x2=103,g2=104,v2=200,_2=201,y2=202,S2=203,Ld=204,Dd=205,M2=206,b2=207,w2=208,E2=209,T2=210,A2=211,C2=212,N2=213,R2=214,Id=0,Ud=1,Fd=2,$s=3,Od=4,kd=5,Bd=6,zd=7,Sg=0,P2=1,L2=2,pi=0,Mg=1,bg=2,wg=3,Eg=4,Tg=5,Ag=6,Cg=7,Ng=300,Wr=301,qs=302,au=303,ou=304,Nc=306,Vd=1e3,Ri=1001,Hd=1002,Gt=1003,D2=1004,Go=1005,Qt=1006,lu=1007,Fr=1008,Fn=1009,Rg=1010,Pg=1011,ao=1012,vh=1013,gi=1014,ui=1015,Bi=1016,_h=1017,yh=1018,oo=1020,Lg=35902,Dg=35899,Ig=1021,Ug=1022,Kn=1023,zi=1026,Or=1027,Fg=1028,Sh=1029,Xr=1030,Mh=1031,bh=1033,Nl=33776,Rl=33777,Pl=33778,Ll=33779,jd=35840,Gd=35841,Wd=35842,Xd=35843,$d=36196,qd=37492,Yd=37496,Kd=37488,Zd=37489,ac=37490,Qd=37491,Jd=37808,ef=37809,tf=37810,nf=37811,rf=37812,sf=37813,af=37814,of=37815,lf=37816,cf=37817,uf=37818,df=37819,ff=37820,hf=37821,pf=36492,mf=36494,xf=36495,gf=36283,vf=36284,oc=36285,_f=36286,I2=3200,om=0,U2=1,ir="",Dn="srgb",lc="srgb-linear",cc="linear",lt="srgb",is=7680,lm=519,F2=512,O2=513,k2=514,wh=515,B2=516,z2=517,Eh=518,V2=519,cm=35044,um="300 es",di=2e3,uc=2001;function H2(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function dc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function j2(){const t=dc("canvas");return t.style.display="block",t}const dm={};function fm(...t){const e="THREE."+t.shift();console.log(e,...t)}function Og(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ie(...t){t=Og(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function Je(...t){t=Og(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function ks(...t){const e=t.join(" ");e in dm||(dm[e]=!0,Ie(...t))}function G2(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const W2={[Id]:Ud,[Fd]:Bd,[Od]:zd,[$s]:kd,[Ud]:Id,[Bd]:Fd,[zd]:Od,[kd]:$s};class Kr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let hm=1234567;const Va=Math.PI/180,lo=180/Math.PI;function ta(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Yt[t&255]+Yt[t>>8&255]+Yt[t>>16&255]+Yt[t>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[n&63|128]+Yt[n>>8&255]+"-"+Yt[n>>16&255]+Yt[n>>24&255]+Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]).toLowerCase()}function $e(t,e,n){return Math.max(e,Math.min(n,t))}function Th(t,e){return(t%e+e)%e}function X2(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function $2(t,e,n){return t!==e?(n-t)/(e-t):0}function Ha(t,e,n){return(1-n)*t+n*e}function q2(t,e,n,i){return Ha(t,e,1-Math.exp(-n*i))}function Y2(t,e=1){return e-Math.abs(Th(t,e*2)-e)}function K2(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function Z2(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function Q2(t,e){return t+Math.floor(Math.random()*(e-t+1))}function J2(t,e){return t+Math.random()*(e-t)}function ey(t){return t*(.5-Math.random())}function ty(t){t!==void 0&&(hm=t);let e=hm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ny(t){return t*Va}function iy(t){return t*lo}function ry(t){return(t&t-1)===0&&t!==0}function sy(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function ay(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function oy(t,e,n,i,r){const s=Math.cos,a=Math.sin,l=s(n/2),c=a(n/2),u=s((e+i)/2),h=a((e+i)/2),p=s((e-i)/2),f=a((e-i)/2),m=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":t.set(l*h,c*p,c*f,l*u);break;case"YZY":t.set(c*f,l*h,c*p,l*u);break;case"ZXZ":t.set(c*p,c*f,l*h,l*u);break;case"XZX":t.set(l*h,c*g,c*m,l*u);break;case"YXY":t.set(c*m,l*h,c*g,l*u);break;case"ZYZ":t.set(c*g,c*m,l*h,l*u);break;default:Ie("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function gs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function nn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const pm={DEG2RAD:Va,RAD2DEG:lo,generateUUID:ta,clamp:$e,euclideanModulo:Th,mapLinear:X2,inverseLerp:$2,lerp:Ha,damp:q2,pingpong:Y2,smoothstep:K2,smootherstep:Z2,randInt:Q2,randFloat:J2,randFloatSpread:ey,seededRandom:ty,degToRad:ny,radToDeg:iy,isPowerOfTwo:ry,ceilPowerOfTwo:sy,floorPowerOfTwo:ay,setQuaternionFromProperEuler:oy,normalize:nn,denormalize:gs},Rh=class Rh{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Rh.prototype.isVector2=!0;let qe=Rh;class na{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,l){let c=i[r+0],u=i[r+1],h=i[r+2],p=i[r+3],f=s[a+0],m=s[a+1],g=s[a+2],w=s[a+3];if(p!==w||c!==f||u!==m||h!==g){let x=c*f+u*m+h*g+p*w;x<0&&(f=-f,m=-m,g=-g,w=-w,x=-x);let d=1-l;if(x<.9995){const y=Math.acos(x),M=Math.sin(y);d=Math.sin(d*y)/M,l=Math.sin(l*y)/M,c=c*d+f*l,u=u*d+m*l,h=h*d+g*l,p=p*d+w*l}else{c=c*d+f*l,u=u*d+m*l,h=h*d+g*l,p=p*d+w*l;const y=1/Math.sqrt(c*c+u*u+h*h+p*p);c*=y,u*=y,h*=y,p*=y}}e[n]=c,e[n+1]=u,e[n+2]=h,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,s,a){const l=i[r],c=i[r+1],u=i[r+2],h=i[r+3],p=s[a],f=s[a+1],m=s[a+2],g=s[a+3];return e[n]=l*g+h*p+c*m-u*f,e[n+1]=c*g+h*f+u*p-l*m,e[n+2]=u*g+h*m+l*f-c*p,e[n+3]=h*g-l*p-c*f-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,l=Math.cos,c=Math.sin,u=l(i/2),h=l(r/2),p=l(s/2),f=c(i/2),m=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=f*h*p+u*m*g,this._y=u*m*p-f*h*g,this._z=u*h*g+f*m*p,this._w=u*h*p-f*m*g;break;case"YXZ":this._x=f*h*p+u*m*g,this._y=u*m*p-f*h*g,this._z=u*h*g-f*m*p,this._w=u*h*p+f*m*g;break;case"ZXY":this._x=f*h*p-u*m*g,this._y=u*m*p+f*h*g,this._z=u*h*g+f*m*p,this._w=u*h*p-f*m*g;break;case"ZYX":this._x=f*h*p-u*m*g,this._y=u*m*p+f*h*g,this._z=u*h*g-f*m*p,this._w=u*h*p+f*m*g;break;case"YZX":this._x=f*h*p+u*m*g,this._y=u*m*p+f*h*g,this._z=u*h*g-f*m*p,this._w=u*h*p-f*m*g;break;case"XZY":this._x=f*h*p-u*m*g,this._y=u*m*p-f*h*g,this._z=u*h*g+f*m*p,this._w=u*h*p+f*m*g;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],l=n[5],c=n[9],u=n[2],h=n[6],p=n[10],f=i+l+p;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-c)*m,this._y=(s-u)*m,this._z=(a-r)*m}else if(i>l&&i>p){const m=2*Math.sqrt(1+i-l-p);this._w=(h-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+u)/m}else if(l>p){const m=2*Math.sqrt(1+l-i-p);this._w=(s-u)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+p-i-l);this._w=(a-r)/m,this._x=(s+u)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,l=n._x,c=n._y,u=n._z,h=n._w;return this._x=i*h+a*l+r*u-s*c,this._y=r*h+a*c+s*l-i*u,this._z=s*h+a*u+i*c-r*l,this._w=a*h-i*l-r*c-s*u,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,l=this.dot(e);l<0&&(i=-i,r=-r,s=-s,a=-a,l=-l);let c=1-n;if(l<.9995){const u=Math.acos(l),h=Math.sin(u);c=Math.sin(c*u)/h,n=Math.sin(n*u)/h,this._x=this._x*c+i*n,this._y=this._y*c+r*n,this._z=this._z*c+s*n,this._w=this._w*c+a*n,this._onChangeCallback()}else this._x=this._x*c+i*n,this._y=this._y*c+r*n,this._z=this._z*c+s*n,this._w=this._w*c+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Ph=class Ph{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(mm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(mm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,l=e.z,c=e.w,u=2*(a*r-l*i),h=2*(l*n-s*r),p=2*(s*i-a*n);return this.x=n+c*u+a*p-l*h,this.y=i+c*h+l*u-s*p,this.z=r+c*p+s*h-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this.z=$e(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this.z=$e(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,l=n.y,c=n.z;return this.x=r*c-s*l,this.y=s*a-i*c,this.z=i*l-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return cu.copy(this).projectOnVector(e),this.sub(cu)}reflect(e){return this.sub(cu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ph.prototype.isVector3=!0;let X=Ph;const cu=new X,mm=new na,Lh=class Lh{constructor(e,n,i,r,s,a,l,c,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,l,c,u)}set(e,n,i,r,s,a,l,c,u){const h=this.elements;return h[0]=e,h[1]=r,h[2]=l,h[3]=n,h[4]=s,h[5]=c,h[6]=i,h[7]=a,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],l=i[3],c=i[6],u=i[1],h=i[4],p=i[7],f=i[2],m=i[5],g=i[8],w=r[0],x=r[3],d=r[6],y=r[1],M=r[4],S=r[7],T=r[2],E=r[5],C=r[8];return s[0]=a*w+l*y+c*T,s[3]=a*x+l*M+c*E,s[6]=a*d+l*S+c*C,s[1]=u*w+h*y+p*T,s[4]=u*x+h*M+p*E,s[7]=u*d+h*S+p*C,s[2]=f*w+m*y+g*T,s[5]=f*x+m*M+g*E,s[8]=f*d+m*S+g*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],l=e[5],c=e[6],u=e[7],h=e[8];return n*a*h-n*l*u-i*s*h+i*l*c+r*s*u-r*a*c}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],l=e[5],c=e[6],u=e[7],h=e[8],p=h*a-l*u,f=l*c-h*s,m=u*s-a*c,g=n*p+i*f+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/g;return e[0]=p*w,e[1]=(r*u-h*i)*w,e[2]=(l*i-r*a)*w,e[3]=f*w,e[4]=(h*n-r*c)*w,e[5]=(r*s-l*n)*w,e[6]=m*w,e[7]=(i*c-u*n)*w,e[8]=(a*n-i*s)*w,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,l){const c=Math.cos(s),u=Math.sin(s);return this.set(i*c,i*u,-i*(c*a+u*l)+a+e,-r*u,r*c,-r*(-u*a+c*l)+l+n,0,0,1),this}scale(e,n){return ks("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(uu.makeScale(e,n)),this}rotate(e){return ks("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(uu.makeRotation(-e)),this}translate(e,n){return ks("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(uu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Lh.prototype.isMatrix3=!0;let Be=Lh;const uu=new Be,xm=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gm=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ly(){const t={enabled:!0,workingColorSpace:lc,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===lt&&(r.r=Di(r.r),r.g=Di(r.g),r.b=Di(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===lt&&(r.r=Bs(r.r),r.g=Bs(r.g),r.b=Bs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ir?cc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ks("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ks("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[lc]:{primaries:e,whitePoint:i,transfer:cc,toXYZ:xm,fromXYZ:gm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Dn},outputColorSpaceConfig:{drawingBufferColorSpace:Dn}},[Dn]:{primaries:e,whitePoint:i,transfer:lt,toXYZ:xm,fromXYZ:gm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Dn}}}),t}const Ze=ly();function Di(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Bs(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let rs;class cy{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{rs===void 0&&(rs=dc("canvas")),rs.width=e.width,rs.height=e.height;const r=rs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=rs}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=dc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Di(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Di(n[i]/255)*255):n[i]=Di(n[i]);return{data:n,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let uy=0;class Ah{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uy++}),this.uuid=ta(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,l=r.length;a<l;a++)r[a].isDataTexture?s.push(du(r[a].image)):s.push(du(r[a]))}else s=du(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function du(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?cy.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}let dy=0;const fu=new X;class on extends Kr{constructor(e=on.DEFAULT_IMAGE,n=on.DEFAULT_MAPPING,i=Ri,r=Ri,s=Qt,a=Fr,l=Kn,c=Fn,u=on.DEFAULT_ANISOTROPY,h=ir){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dy++}),this.uuid=ta(),this.name="",this.source=new Ah(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=l,this.internalFormat=null,this.type=c,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(fu).x}get height(){return this.source.getSize(fu).y}get depth(){return this.source.getSize(fu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ie(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ie(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ng)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vd:e.x=e.x-Math.floor(e.x);break;case Ri:e.x=e.x<0?0:1;break;case Hd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vd:e.y=e.y-Math.floor(e.y);break;case Ri:e.y=e.y<0?0:1;break;case Hd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=Ng;on.DEFAULT_ANISOTROPY=1;const Dh=class Dh{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const c=e.elements,u=c[0],h=c[4],p=c[8],f=c[1],m=c[5],g=c[9],w=c[2],x=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(p-w)<.01&&Math.abs(g-x)<.01){if(Math.abs(h+f)<.1&&Math.abs(p+w)<.1&&Math.abs(g+x)<.1&&Math.abs(u+m+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const M=(u+1)/2,S=(m+1)/2,T=(d+1)/2,E=(h+f)/4,C=(p+w)/4,v=(g+x)/4;return M>S&&M>T?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=E/i,s=C/i):S>T?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=E/r,s=v/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=C/s,r=v/s),this.set(i,r,s,n),this}let y=Math.sqrt((x-g)*(x-g)+(p-w)*(p-w)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(x-g)/y,this.y=(p-w)/y,this.z=(f-h)/y,this.w=Math.acos((u+m+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this.z=$e(this.z,e.z,n.z),this.w=$e(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this.z=$e(this.z,e,n),this.w=$e(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Dh.prototype.isVector4=!0;let At=Dh;class fy extends Kr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new At(0,0,e,n),this.scissorTest=!1,this.viewport=new At(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new on(r),a=i.count;for(let l=0;l<a;l++)this.textures[l]=s.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:Qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Ah(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mi extends fy{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class kg extends on{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class hy extends on{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const fc=class fc{constructor(e,n,i,r,s,a,l,c,u,h,p,f,m,g,w,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,l,c,u,h,p,f,m,g,w,x)}set(e,n,i,r,s,a,l,c,u,h,p,f,m,g,w,x){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=l,d[13]=c,d[2]=u,d[6]=h,d[10]=p,d[14]=f,d[3]=m,d[7]=g,d[11]=w,d[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fc().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/ss.setFromMatrixColumn(e,0).length(),s=1/ss.setFromMatrixColumn(e,1).length(),a=1/ss.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),l=Math.sin(i),c=Math.cos(r),u=Math.sin(r),h=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const f=a*h,m=a*p,g=l*h,w=l*p;n[0]=c*h,n[4]=-c*p,n[8]=u,n[1]=m+g*u,n[5]=f-w*u,n[9]=-l*c,n[2]=w-f*u,n[6]=g+m*u,n[10]=a*c}else if(e.order==="YXZ"){const f=c*h,m=c*p,g=u*h,w=u*p;n[0]=f+w*l,n[4]=g*l-m,n[8]=a*u,n[1]=a*p,n[5]=a*h,n[9]=-l,n[2]=m*l-g,n[6]=w+f*l,n[10]=a*c}else if(e.order==="ZXY"){const f=c*h,m=c*p,g=u*h,w=u*p;n[0]=f-w*l,n[4]=-a*p,n[8]=g+m*l,n[1]=m+g*l,n[5]=a*h,n[9]=w-f*l,n[2]=-a*u,n[6]=l,n[10]=a*c}else if(e.order==="ZYX"){const f=a*h,m=a*p,g=l*h,w=l*p;n[0]=c*h,n[4]=g*u-m,n[8]=f*u+w,n[1]=c*p,n[5]=w*u+f,n[9]=m*u-g,n[2]=-u,n[6]=l*c,n[10]=a*c}else if(e.order==="YZX"){const f=a*c,m=a*u,g=l*c,w=l*u;n[0]=c*h,n[4]=w-f*p,n[8]=g*p+m,n[1]=p,n[5]=a*h,n[9]=-l*h,n[2]=-u*h,n[6]=m*p+g,n[10]=f-w*p}else if(e.order==="XZY"){const f=a*c,m=a*u,g=l*c,w=l*u;n[0]=c*h,n[4]=-p,n[8]=u*h,n[1]=f*p+w,n[5]=a*h,n[9]=m*p-g,n[2]=g*p-m,n[6]=l*h,n[10]=w*p+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(py,e,my)}lookAt(e,n,i){const r=this.elements;return Sn.subVectors(e,n),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),$i.crossVectors(i,Sn),$i.lengthSq()===0&&(Math.abs(i.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),$i.crossVectors(i,Sn)),$i.normalize(),Wo.crossVectors(Sn,$i),r[0]=$i.x,r[4]=Wo.x,r[8]=Sn.x,r[1]=$i.y,r[5]=Wo.y,r[9]=Sn.y,r[2]=$i.z,r[6]=Wo.z,r[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],l=i[4],c=i[8],u=i[12],h=i[1],p=i[5],f=i[9],m=i[13],g=i[2],w=i[6],x=i[10],d=i[14],y=i[3],M=i[7],S=i[11],T=i[15],E=r[0],C=r[4],v=r[8],N=r[12],L=r[1],P=r[5],F=r[9],I=r[13],$=r[2],z=r[6],Y=r[10],j=r[14],D=r[3],W=r[7],q=r[11],ne=r[15];return s[0]=a*E+l*L+c*$+u*D,s[4]=a*C+l*P+c*z+u*W,s[8]=a*v+l*F+c*Y+u*q,s[12]=a*N+l*I+c*j+u*ne,s[1]=h*E+p*L+f*$+m*D,s[5]=h*C+p*P+f*z+m*W,s[9]=h*v+p*F+f*Y+m*q,s[13]=h*N+p*I+f*j+m*ne,s[2]=g*E+w*L+x*$+d*D,s[6]=g*C+w*P+x*z+d*W,s[10]=g*v+w*F+x*Y+d*q,s[14]=g*N+w*I+x*j+d*ne,s[3]=y*E+M*L+S*$+T*D,s[7]=y*C+M*P+S*z+T*W,s[11]=y*v+M*F+S*Y+T*q,s[15]=y*N+M*I+S*j+T*ne,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],l=e[5],c=e[9],u=e[13],h=e[2],p=e[6],f=e[10],m=e[14],g=e[3],w=e[7],x=e[11],d=e[15],y=c*m-u*f,M=l*m-u*p,S=l*f-c*p,T=a*m-u*h,E=a*f-c*h,C=a*p-l*h;return n*(w*y-x*M+d*S)-i*(g*y-x*T+d*E)+r*(g*M-w*T+d*C)-s*(g*S-w*E+x*C)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10];return n*(a*h-l*u)-i*(s*h-l*c)+r*(s*u-a*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],l=e[5],c=e[6],u=e[7],h=e[8],p=e[9],f=e[10],m=e[11],g=e[12],w=e[13],x=e[14],d=e[15],y=n*l-i*a,M=n*c-r*a,S=n*u-s*a,T=i*c-r*l,E=i*u-s*l,C=r*u-s*c,v=h*w-p*g,N=h*x-f*g,L=h*d-m*g,P=p*x-f*w,F=p*d-m*w,I=f*d-m*x,$=y*I-M*F+S*P+T*L-E*N+C*v;if($===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/$;return e[0]=(l*I-c*F+u*P)*z,e[1]=(r*F-i*I-s*P)*z,e[2]=(w*C-x*E+d*T)*z,e[3]=(f*E-p*C-m*T)*z,e[4]=(c*L-a*I-u*N)*z,e[5]=(n*I-r*L+s*N)*z,e[6]=(x*S-g*C-d*M)*z,e[7]=(h*C-f*S+m*M)*z,e[8]=(a*F-l*L+u*v)*z,e[9]=(i*L-n*F-s*v)*z,e[10]=(g*E-w*S+d*y)*z,e[11]=(p*S-h*E-m*y)*z,e[12]=(l*N-a*P-c*v)*z,e[13]=(n*P-i*N+r*v)*z,e[14]=(w*M-g*T-x*y)*z,e[15]=(h*T-p*M+f*y)*z,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,l=e.y,c=e.z,u=s*a,h=s*l;return this.set(u*a+i,u*l-r*c,u*c+r*l,0,u*l+r*c,h*l+i,h*c-r*a,0,u*c-r*l,h*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,l=n._z,c=n._w,u=s+s,h=a+a,p=l+l,f=s*u,m=s*h,g=s*p,w=a*h,x=a*p,d=l*p,y=c*u,M=c*h,S=c*p,T=i.x,E=i.y,C=i.z;return r[0]=(1-(w+d))*T,r[1]=(m+S)*T,r[2]=(g-M)*T,r[3]=0,r[4]=(m-S)*E,r[5]=(1-(f+d))*E,r[6]=(x+y)*E,r[7]=0,r[8]=(g+M)*C,r[9]=(x-y)*C,r[10]=(1-(f+w))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let a=ss.set(r[0],r[1],r[2]).length();const l=ss.set(r[4],r[5],r[6]).length(),c=ss.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Hn.copy(this);const u=1/a,h=1/l,p=1/c;return Hn.elements[0]*=u,Hn.elements[1]*=u,Hn.elements[2]*=u,Hn.elements[4]*=h,Hn.elements[5]*=h,Hn.elements[6]*=h,Hn.elements[8]*=p,Hn.elements[9]*=p,Hn.elements[10]*=p,n.setFromRotationMatrix(Hn),i.x=a,i.y=l,i.z=c,this}makePerspective(e,n,i,r,s,a,l=di,c=!1){const u=this.elements,h=2*s/(n-e),p=2*s/(i-r),f=(n+e)/(n-e),m=(i+r)/(i-r);let g,w;if(c)g=s/(a-s),w=a*s/(a-s);else if(l===di)g=-(a+s)/(a-s),w=-2*a*s/(a-s);else if(l===uc)g=-a/(a-s),w=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return u[0]=h,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=p,u[9]=m,u[13]=0,u[2]=0,u[6]=0,u[10]=g,u[14]=w,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,n,i,r,s,a,l=di,c=!1){const u=this.elements,h=2/(n-e),p=2/(i-r),f=-(n+e)/(n-e),m=-(i+r)/(i-r);let g,w;if(c)g=1/(a-s),w=a/(a-s);else if(l===di)g=-2/(a-s),w=-(a+s)/(a-s);else if(l===uc)g=-1/(a-s),w=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return u[0]=h,u[4]=0,u[8]=0,u[12]=f,u[1]=0,u[5]=p,u[9]=0,u[13]=m,u[2]=0,u[6]=0,u[10]=g,u[14]=w,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};fc.prototype.isMatrix4=!0;let Lt=fc;const ss=new X,Hn=new Lt,py=new X(0,0,0),my=new X(1,1,1),$i=new X,Wo=new X,Sn=new X,vm=new Lt,_m=new na;class $r{constructor(e=0,n=0,i=0,r=$r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],l=r[8],c=r[1],u=r[5],h=r[9],p=r[2],f=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,m),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin($e(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-$e(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin($e(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(l,m));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return vm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return _m.setFromEuler(this),this.setFromQuaternion(_m,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$r.DEFAULT_ORDER="XYZ";class Bg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xy=0;const ym=new X,as=new na,yi=new Lt,Xo=new X,ya=new X,gy=new X,vy=new na,Sm=new X(1,0,0),Mm=new X(0,1,0),bm=new X(0,0,1),wm={type:"added"},_y={type:"removed"},os={type:"childadded",child:null},hu={type:"childremoved",child:null};class Tn extends Kr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xy++}),this.uuid=ta(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tn.DEFAULT_UP.clone();const e=new X,n=new $r,i=new na,r=new X(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Lt},normalMatrix:{value:new Be}}),this.matrix=new Lt,this.matrixWorld=new Lt,this.matrixAutoUpdate=Tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return as.setFromAxisAngle(e,n),this.quaternion.multiply(as),this}rotateOnWorldAxis(e,n){return as.setFromAxisAngle(e,n),this.quaternion.premultiply(as),this}rotateX(e){return this.rotateOnAxis(Sm,e)}rotateY(e){return this.rotateOnAxis(Mm,e)}rotateZ(e){return this.rotateOnAxis(bm,e)}translateOnAxis(e,n){return ym.copy(e).applyQuaternion(this.quaternion),this.position.add(ym.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Sm,e)}translateY(e){return this.translateOnAxis(Mm,e)}translateZ(e){return this.translateOnAxis(bm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Xo.copy(e):Xo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ya.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yi.lookAt(ya,Xo,this.up):yi.lookAt(Xo,ya,this.up),this.quaternion.setFromRotationMatrix(yi),r&&(yi.extractRotation(r.matrixWorld),as.setFromRotationMatrix(yi),this.quaternion.premultiply(as.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wm),os.child=e,this.dispatchEvent(os),os.child=null):Je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(_y),hu.child=e,this.dispatchEvent(hu),hu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(yi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wm),os.child=e,this.dispatchEvent(os),os.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ya,e,gy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ya,vy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let a=0,l=s.length;a<l;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(l=>({...l})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const c=l.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){const p=c[u];s(e.shapes,p)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let c=0,u=this.material.length;c<u;c++)l.push(s(e.materials,this.material[c]));r.material=l}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const c=this.animations[l];r.animations.push(s(e.animations,c))}}if(n){const l=a(e.geometries),c=a(e.materials),u=a(e.textures),h=a(e.images),p=a(e.shapes),f=a(e.skeletons),m=a(e.animations),g=a(e.nodes);l.length>0&&(i.geometries=l),c.length>0&&(i.materials=c),u.length>0&&(i.textures=u),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(l){const c=[];for(const u in l){const h=l[u];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Tn.DEFAULT_UP=new X(0,1,0);Tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class $o extends Tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yy={type:"move"};class pu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $o,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $o,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $o,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const l=this._targetRay,c=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const w of e.hand.values()){const x=n.getJointPose(w,i),d=this._getHandJoint(u,w);x!==null&&(d.matrix.fromArray(x.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=x.radius),d.visible=x!==null}const h=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],f=h.position.distanceTo(p.position),m=.02,g=.005;u.inputState.pinching&&f>m+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=m-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));l!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(yy)))}return l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new $o;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const zg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qi={h:0,s:0,l:0},qo={h:0,s:0,l:0};function mu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class st{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Ze.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ze.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Ze.workingColorSpace){if(e=Th(e,1),n=$e(n,0,1),i=$e(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=mu(a,s,e+1/3),this.g=mu(a,s,e),this.b=mu(a,s,e-1/3)}return Ze.colorSpaceToWorking(this,r),this}setStyle(e,n=Dn){function i(s){s!==void 0&&parseFloat(s)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],l=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Ie("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Dn){const i=zg[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Di(e.r),this.g=Di(e.g),this.b=Di(e.b),this}copyLinearToSRGB(e){return this.r=Bs(e.r),this.g=Bs(e.g),this.b=Bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dn){return Ze.workingToColorSpace(Kt.copy(this),e),Math.round($e(Kt.r*255,0,255))*65536+Math.round($e(Kt.g*255,0,255))*256+Math.round($e(Kt.b*255,0,255))}getHexString(e=Dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ze.workingColorSpace){Ze.workingToColorSpace(Kt.copy(this),n);const i=Kt.r,r=Kt.g,s=Kt.b,a=Math.max(i,r,s),l=Math.min(i,r,s);let c,u;const h=(l+a)/2;if(l===a)c=0,u=0;else{const p=a-l;switch(u=h<=.5?p/(a+l):p/(2-a-l),a){case i:c=(r-s)/p+(r<s?6:0);break;case r:c=(s-i)/p+2;break;case s:c=(i-r)/p+4;break}c/=6}return e.h=c,e.s=u,e.l=h,e}getRGB(e,n=Ze.workingColorSpace){return Ze.workingToColorSpace(Kt.copy(this),n),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=Dn){Ze.workingToColorSpace(Kt.copy(this),e);const n=Kt.r,i=Kt.g,r=Kt.b;return e!==Dn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(qi),this.setHSL(qi.h+e,qi.s+n,qi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(qi),e.getHSL(qo);const i=Ha(qi.h,qo.h,n),r=Ha(qi.s,qo.s,n),s=Ha(qi.l,qo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kt=new st;st.NAMES=zg;class Sy extends Tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $r,this.environmentIntensity=1,this.environmentRotation=new $r,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const jn=new X,Si=new X,xu=new X,Mi=new X,ls=new X,cs=new X,Em=new X,gu=new X,vu=new X,_u=new X,yu=new At,Su=new At,Mu=new At;class Yn{constructor(e=new X,n=new X,i=new X){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),jn.subVectors(e,n),r.cross(jn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){jn.subVectors(r,n),Si.subVectors(i,n),xu.subVectors(e,n);const a=jn.dot(jn),l=jn.dot(Si),c=jn.dot(xu),u=Si.dot(Si),h=Si.dot(xu),p=a*u-l*l;if(p===0)return s.set(0,0,0),null;const f=1/p,m=(u*c-l*h)*f,g=(a*h-l*c)*f;return s.set(1-m-g,g,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Mi)===null?!1:Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getInterpolation(e,n,i,r,s,a,l,c){return this.getBarycoord(e,n,i,r,Mi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Mi.x),c.addScaledVector(a,Mi.y),c.addScaledVector(l,Mi.z),c)}static getInterpolatedAttribute(e,n,i,r,s,a){return yu.setScalar(0),Su.setScalar(0),Mu.setScalar(0),yu.fromBufferAttribute(e,n),Su.fromBufferAttribute(e,i),Mu.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(yu,s.x),a.addScaledVector(Su,s.y),a.addScaledVector(Mu,s.z),a}static isFrontFacing(e,n,i,r){return jn.subVectors(i,n),Si.subVectors(e,n),jn.cross(Si).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jn.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),jn.cross(Si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Yn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Yn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,l;ls.subVectors(r,i),cs.subVectors(s,i),gu.subVectors(e,i);const c=ls.dot(gu),u=cs.dot(gu);if(c<=0&&u<=0)return n.copy(i);vu.subVectors(e,r);const h=ls.dot(vu),p=cs.dot(vu);if(h>=0&&p<=h)return n.copy(r);const f=c*p-h*u;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),n.copy(i).addScaledVector(ls,a);_u.subVectors(e,s);const m=ls.dot(_u),g=cs.dot(_u);if(g>=0&&m<=g)return n.copy(s);const w=m*u-c*g;if(w<=0&&u>=0&&g<=0)return l=u/(u-g),n.copy(i).addScaledVector(cs,l);const x=h*g-m*p;if(x<=0&&p-h>=0&&m-g>=0)return Em.subVectors(s,r),l=(p-h)/(p-h+(m-g)),n.copy(r).addScaledVector(Em,l);const d=1/(x+w+f);return a=w*d,l=f*d,n.copy(i).addScaledVector(ls,a).addScaledVector(cs,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class mo{constructor(e=new X(1/0,1/0,1/0),n=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Gn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Gn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Gn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,l=s.count;a<l;a++)e.isMesh===!0?e.getVertexPosition(a,Gn):Gn.fromBufferAttribute(s,a),Gn.applyMatrix4(e.matrixWorld),this.expandByPoint(Gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Yo.copy(i.boundingBox)),Yo.applyMatrix4(e.matrixWorld),this.union(Yo)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gn),Gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Sa),Ko.subVectors(this.max,Sa),us.subVectors(e.a,Sa),ds.subVectors(e.b,Sa),fs.subVectors(e.c,Sa),Yi.subVectors(ds,us),Ki.subVectors(fs,ds),wr.subVectors(us,fs);let n=[0,-Yi.z,Yi.y,0,-Ki.z,Ki.y,0,-wr.z,wr.y,Yi.z,0,-Yi.x,Ki.z,0,-Ki.x,wr.z,0,-wr.x,-Yi.y,Yi.x,0,-Ki.y,Ki.x,0,-wr.y,wr.x,0];return!bu(n,us,ds,fs,Ko)||(n=[1,0,0,0,1,0,0,0,1],!bu(n,us,ds,fs,Ko))?!1:(Zo.crossVectors(Yi,Ki),n=[Zo.x,Zo.y,Zo.z],bu(n,us,ds,fs,Ko))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const bi=[new X,new X,new X,new X,new X,new X,new X,new X],Gn=new X,Yo=new mo,us=new X,ds=new X,fs=new X,Yi=new X,Ki=new X,wr=new X,Sa=new X,Ko=new X,Zo=new X,Er=new X;function bu(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Er.fromArray(t,s);const l=r.x*Math.abs(Er.x)+r.y*Math.abs(Er.y)+r.z*Math.abs(Er.z),c=e.dot(Er),u=n.dot(Er),h=i.dot(Er);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>l)return!1}return!0}const Rt=new X,Qo=new qe;let My=0;class xi extends Kr{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:My++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=cm,this.updateRanges=[],this.gpuType=ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Qo.fromBufferAttribute(this,n),Qo.applyMatrix3(e),this.setXY(n,Qo.x,Qo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.applyMatrix3(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.applyMatrix4(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.applyNormalMatrix(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.transformDirection(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=gs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=nn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=gs(n,this.array)),n}setX(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=gs(n,this.array)),n}setY(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=gs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=gs(n,this.array)),n}setW(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array),r=nn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array),r=nn(r,this.array),s=nn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==cm&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Vg extends xi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Hg extends xi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Ii extends xi{constructor(e,n,i){super(new Float32Array(e),n,i)}}const by=new mo,Ma=new X,wu=new X;class Ch{constructor(e=new X,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):by.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ma.subVectors(e,this.center);const n=Ma.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ma,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ma.copy(e.center).add(wu)),this.expandByPoint(Ma.copy(e.center).sub(wu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let wy=0;const Ln=new Lt,Eu=new Tn,hs=new X,Mn=new mo,ba=new mo,kt=new X;class Hi extends Kr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wy++}),this.uuid=ta(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(H2(e)?Hg:Vg)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Be().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ln.makeRotationFromQuaternion(e),this.applyMatrix4(Ln),this}rotateX(e){return Ln.makeRotationX(e),this.applyMatrix4(Ln),this}rotateY(e){return Ln.makeRotationY(e),this.applyMatrix4(Ln),this}rotateZ(e){return Ln.makeRotationZ(e),this.applyMatrix4(Ln),this}translate(e,n,i){return Ln.makeTranslation(e,n,i),this.applyMatrix4(Ln),this}scale(e,n,i){return Ln.makeScale(e,n,i),this.applyMatrix4(Ln),this}lookAt(e){return Eu.lookAt(e),Eu.updateMatrix(),this.applyMatrix4(Eu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ii(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Mn.setFromBufferAttribute(s),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ch);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const l=n[s];ba.setFromBufferAttribute(l),this.morphTargetsRelative?(kt.addVectors(Mn.min,ba.min),Mn.expandByPoint(kt),kt.addVectors(Mn.max,ba.max),Mn.expandByPoint(kt)):(Mn.expandByPoint(ba.min),Mn.expandByPoint(ba.max))}Mn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)kt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(kt));if(n)for(let s=0,a=n.length;s<a;s++){const l=n[s],c=this.morphTargetsRelative;for(let u=0,h=l.count;u<h;u++)kt.fromBufferAttribute(l,u),c&&(hs.fromBufferAttribute(e,u),kt.add(hs)),r=Math.max(r,i.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new xi(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const l=[],c=[];for(let v=0;v<i.count;v++)l[v]=new X,c[v]=new X;const u=new X,h=new X,p=new X,f=new qe,m=new qe,g=new qe,w=new X,x=new X;function d(v,N,L){u.fromBufferAttribute(i,v),h.fromBufferAttribute(i,N),p.fromBufferAttribute(i,L),f.fromBufferAttribute(s,v),m.fromBufferAttribute(s,N),g.fromBufferAttribute(s,L),h.sub(u),p.sub(u),m.sub(f),g.sub(f);const P=1/(m.x*g.y-g.x*m.y);isFinite(P)&&(w.copy(h).multiplyScalar(g.y).addScaledVector(p,-m.y).multiplyScalar(P),x.copy(p).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(P),l[v].add(w),l[N].add(w),l[L].add(w),c[v].add(x),c[N].add(x),c[L].add(x))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let v=0,N=y.length;v<N;++v){const L=y[v],P=L.start,F=L.count;for(let I=P,$=P+F;I<$;I+=3)d(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const M=new X,S=new X,T=new X,E=new X;function C(v){T.fromBufferAttribute(r,v),E.copy(T);const N=l[v];M.copy(N),M.sub(T.multiplyScalar(T.dot(N))).normalize(),S.crossVectors(E,N);const P=S.dot(c[v])<0?-1:1;a.setXYZW(v,M.x,M.y,M.z,P)}for(let v=0,N=y.length;v<N;++v){const L=y[v],P=L.start,F=L.count;for(let I=P,$=P+F;I<$;I+=3)C(e.getX(I+0)),C(e.getX(I+1)),C(e.getX(I+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new xi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new X,s=new X,a=new X,l=new X,c=new X,u=new X,h=new X,p=new X;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),w=e.getX(f+1),x=e.getX(f+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,w),a.fromBufferAttribute(n,x),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,w),u.fromBufferAttribute(i,x),l.add(h),c.add(h),u.add(h),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(w,c.x,c.y,c.z),i.setXYZ(x,u.x,u.y,u.z)}else for(let f=0,m=n.count;f<m;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)kt.fromBufferAttribute(e,n),kt.normalize(),e.setXYZ(n,kt.x,kt.y,kt.z)}toNonIndexed(){function e(l,c){const u=l.array,h=l.itemSize,p=l.normalized,f=new u.constructor(c.length*h);let m=0,g=0;for(let w=0,x=c.length;w<x;w++){l.isInterleavedBufferAttribute?m=c[w]*l.data.stride+l.offset:m=c[w]*h;for(let d=0;d<h;d++)f[g++]=u[m++]}return new xi(f,h,p)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Hi,i=this.index.array,r=this.attributes;for(const l in r){const c=r[l],u=e(c,i);n.setAttribute(l,u)}const s=this.morphAttributes;for(const l in s){const c=[],u=s[l];for(let h=0,p=u.length;h<p;h++){const f=u[h],m=e(f,i);c.push(m)}n.morphAttributes[l]=c}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let l=0,c=a.length;l<c;l++){const u=a[l];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const u=i[c];e.data.attributes[c]=u.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],h=[];for(let p=0,f=u.length;p<f;p++){const m=u[p];h.push(m.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const h=r[u];this.setAttribute(u,h.clone(n))}const s=e.morphAttributes;for(const u in s){const h=[],p=s[u];for(let f=0,m=p.length;f<m;f++)h.push(p[f].clone(n));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,h=a.length;u<h;u++){const p=a[u];this.addGroup(p.start,p.count,p.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Ey=0;class Rc extends Kr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ey++}),this.uuid=ta(),this.name="",this.type="Material",this.blending=Os,this.side=vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ld,this.blendDst=Dd,this.blendEquation=Pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=$s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=is,this.stencilZFail=is,this.stencilZPass=is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ie(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ie(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Os&&(i.blending=this.blending),this.side!==vr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ld&&(i.blendSrc=this.blendSrc),this.blendDst!==Dd&&(i.blendDst=this.blendDst),this.blendEquation!==Pr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==$s&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==is&&(i.stencilFail=this.stencilFail),this.stencilZFail!==is&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==is&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const l in s){const c=s[l];delete c.metadata,a.push(c)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new st().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new qe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new qe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const wi=new X,Tu=new X,Jo=new X,Zi=new X,Au=new X,el=new X,Cu=new X;class Ty{constructor(e=new X,n=new X(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=wi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(wi.copy(this.origin).addScaledVector(this.direction,n),wi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Tu.copy(e).add(n).multiplyScalar(.5),Jo.copy(n).sub(e).normalize(),Zi.copy(this.origin).sub(Tu);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Jo),l=Zi.dot(this.direction),c=-Zi.dot(Jo),u=Zi.lengthSq(),h=Math.abs(1-a*a);let p,f,m,g;if(h>0)if(p=a*c-l,f=a*l-c,g=s*h,p>=0)if(f>=-g)if(f<=g){const w=1/h;p*=w,f*=w,m=p*(p+a*f+2*l)+f*(a*p+f+2*c)+u}else f=s,p=Math.max(0,-(a*f+l)),m=-p*p+f*(f+2*c)+u;else f=-s,p=Math.max(0,-(a*f+l)),m=-p*p+f*(f+2*c)+u;else f<=-g?(p=Math.max(0,-(-a*s+l)),f=p>0?-s:Math.min(Math.max(-s,-c),s),m=-p*p+f*(f+2*c)+u):f<=g?(p=0,f=Math.min(Math.max(-s,-c),s),m=f*(f+2*c)+u):(p=Math.max(0,-(a*s+l)),f=p>0?s:Math.min(Math.max(-s,-c),s),m=-p*p+f*(f+2*c)+u);else f=a>0?-s:s,p=Math.max(0,-(a*f+l)),m=-p*p+f*(f+2*c)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Tu).addScaledVector(Jo,f),m}intersectSphere(e,n){wi.subVectors(e.center,this.origin);const i=wi.dot(this.direction),r=wi.dot(wi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),l=i-a,c=i+a;return c<0?null:l<0?this.at(c,n):this.at(l,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,l,c;const u=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),h>=0?(s=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),p>=0?(l=(e.min.z-f.z)*p,c=(e.max.z-f.z)*p):(l=(e.max.z-f.z)*p,c=(e.min.z-f.z)*p),i>c||l>r)||((l>i||i!==i)&&(i=l),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,wi)!==null}intersectTriangle(e,n,i,r,s){Au.subVectors(n,e),el.subVectors(i,e),Cu.crossVectors(Au,el);let a=this.direction.dot(Cu),l;if(a>0){if(r)return null;l=1}else if(a<0)l=-1,a=-a;else return null;Zi.subVectors(this.origin,e);const c=l*this.direction.dot(el.crossVectors(Zi,el));if(c<0)return null;const u=l*this.direction.dot(Au.cross(Zi));if(u<0||c+u>a)return null;const h=-l*Zi.dot(Cu);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jg extends Rc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $r,this.combine=Sg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tm=new Lt,Tr=new Ty,tl=new Ch,Am=new X,nl=new X,il=new X,rl=new X,Nu=new X,sl=new X,Cm=new X,al=new X;class vi extends Tn{constructor(e=new Hi,n=new jg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const l=this.morphTargetInfluences;if(s&&l){sl.set(0,0,0);for(let c=0,u=s.length;c<u;c++){const h=l[c],p=s[c];h!==0&&(Nu.fromBufferAttribute(p,e),a?sl.addScaledVector(Nu,h):sl.addScaledVector(Nu.sub(n),h))}n.add(sl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),tl.copy(i.boundingSphere),tl.applyMatrix4(s),Tr.copy(e.ray).recast(e.near),!(tl.containsPoint(Tr.origin)===!1&&(Tr.intersectSphere(tl,Am)===null||Tr.origin.distanceToSquared(Am)>(e.far-e.near)**2))&&(Tm.copy(s).invert(),Tr.copy(e.ray).applyMatrix4(Tm),!(i.boundingBox!==null&&Tr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Tr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,l=s.index,c=s.attributes.position,u=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,f=s.groups,m=s.drawRange;if(l!==null)if(Array.isArray(a))for(let g=0,w=f.length;g<w;g++){const x=f[g],d=a[x.materialIndex],y=Math.max(x.start,m.start),M=Math.min(l.count,Math.min(x.start+x.count,m.start+m.count));for(let S=y,T=M;S<T;S+=3){const E=l.getX(S),C=l.getX(S+1),v=l.getX(S+2);r=ol(this,d,e,i,u,h,p,E,C,v),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const g=Math.max(0,m.start),w=Math.min(l.count,m.start+m.count);for(let x=g,d=w;x<d;x+=3){const y=l.getX(x),M=l.getX(x+1),S=l.getX(x+2);r=ol(this,a,e,i,u,h,p,y,M,S),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,w=f.length;g<w;g++){const x=f[g],d=a[x.materialIndex],y=Math.max(x.start,m.start),M=Math.min(c.count,Math.min(x.start+x.count,m.start+m.count));for(let S=y,T=M;S<T;S+=3){const E=S,C=S+1,v=S+2;r=ol(this,d,e,i,u,h,p,E,C,v),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const g=Math.max(0,m.start),w=Math.min(c.count,m.start+m.count);for(let x=g,d=w;x<d;x+=3){const y=x,M=x+1,S=x+2;r=ol(this,a,e,i,u,h,p,y,M,S),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}}}function Ay(t,e,n,i,r,s,a,l){let c;if(e.side===gn?c=i.intersectTriangle(a,s,r,!0,l):c=i.intersectTriangle(r,s,a,e.side===vr,l),c===null)return null;al.copy(l),al.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(al);return u<n.near||u>n.far?null:{distance:u,point:al.clone(),object:t}}function ol(t,e,n,i,r,s,a,l,c,u){t.getVertexPosition(l,nl),t.getVertexPosition(c,il),t.getVertexPosition(u,rl);const h=Ay(t,e,n,i,nl,il,rl,Cm);if(h){const p=new X;Yn.getBarycoord(Cm,nl,il,rl,p),r&&(h.uv=Yn.getInterpolatedAttribute(r,l,c,u,p,new qe)),s&&(h.uv1=Yn.getInterpolatedAttribute(s,l,c,u,p,new qe)),a&&(h.normal=Yn.getInterpolatedAttribute(a,l,c,u,p,new X),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:l,b:c,c:u,normal:new X,materialIndex:0};Yn.getNormal(nl,il,rl,f.normal),h.face=f,h.barycoord=p}return h}class Cy extends on{constructor(e=null,n=1,i=1,r,s,a,l,c,u=Gt,h=Gt,p,f){super(null,a,l,c,u,h,r,s,p,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ru=new X,Ny=new X,Ry=new Be;class Rr{constructor(e=new X(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Ru.subVectors(i,n).cross(Ny.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(Ru),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Ry.getNormalMatrix(e),r=this.coplanarPoint(Ru).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ar=new Ch,Py=new qe(.5,.5),ll=new X;class Gg{constructor(e=new Rr,n=new Rr,i=new Rr,r=new Rr,s=new Rr,a=new Rr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const l=this.planes;return l[0].copy(e),l[1].copy(n),l[2].copy(i),l[3].copy(r),l[4].copy(s),l[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=di,i=!1){const r=this.planes,s=e.elements,a=s[0],l=s[1],c=s[2],u=s[3],h=s[4],p=s[5],f=s[6],m=s[7],g=s[8],w=s[9],x=s[10],d=s[11],y=s[12],M=s[13],S=s[14],T=s[15];if(r[0].setComponents(u-a,m-h,d-g,T-y).normalize(),r[1].setComponents(u+a,m+h,d+g,T+y).normalize(),r[2].setComponents(u+l,m+p,d+w,T+M).normalize(),r[3].setComponents(u-l,m-p,d-w,T-M).normalize(),i)r[4].setComponents(c,f,x,S).normalize(),r[5].setComponents(u-c,m-f,d-x,T-S).normalize();else if(r[4].setComponents(u-c,m-f,d-x,T-S).normalize(),n===di)r[5].setComponents(u+c,m+f,d+x,T+S).normalize();else if(n===uc)r[5].setComponents(c,f,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ar.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ar.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ar)}intersectsSprite(e){Ar.center.set(0,0,0);const n=Py.distanceTo(e.center);return Ar.radius=.7071067811865476+n,Ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ar)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ll.x=r.normal.x>0?e.max.x:e.min.x,ll.y=r.normal.y>0?e.max.y:e.min.y,ll.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ll)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Wg extends on{constructor(e=[],n=Wr,i,r,s,a,l,c,u,h){super(e,n,i,r,s,a,l,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ys extends on{constructor(e,n,i=gi,r,s,a,l=Gt,c=Gt,u,h=zi,p=1){if(h!==zi&&h!==Or)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:p};super(f,r,s,a,l,c,h,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ah(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Ly extends Ys{constructor(e,n=gi,i=Wr,r,s,a=Gt,l=Gt,c,u=zi){const h={width:e,height:e,depth:1},p=[h,h,h,h,h,h];super(e,e,n,i,r,s,a,l,c,u),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Xg extends on{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class xo extends Hi{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const l=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],u=[],h=[],p=[];let f=0,m=0;g("z","y","x",-1,-1,i,n,e,a,s,0),g("z","y","x",1,-1,i,n,-e,a,s,1),g("x","z","y",1,1,e,i,n,r,a,2),g("x","z","y",1,-1,e,i,-n,r,a,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Ii(u,3)),this.setAttribute("normal",new Ii(h,3)),this.setAttribute("uv",new Ii(p,2));function g(w,x,d,y,M,S,T,E,C,v,N){const L=S/C,P=T/v,F=S/2,I=T/2,$=E/2,z=C+1,Y=v+1;let j=0,D=0;const W=new X;for(let q=0;q<Y;q++){const ne=q*P-I;for(let re=0;re<z;re++){const Fe=re*L-F;W[w]=Fe*y,W[x]=ne*M,W[d]=$,u.push(W.x,W.y,W.z),W[w]=0,W[x]=0,W[d]=E>0?1:-1,h.push(W.x,W.y,W.z),p.push(re/C),p.push(1-q/v),j+=1}}for(let q=0;q<v;q++)for(let ne=0;ne<C;ne++){const re=f+ne+z*q,Fe=f+ne+z*(q+1),Qe=f+(ne+1)+z*(q+1),Ge=f+(ne+1)+z*q;c.push(re,Fe,Ge),c.push(Fe,Qe,Ge),D+=6}l.addGroup(m,D,N),m+=D,f+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class go extends Hi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,l=Math.floor(i),c=Math.floor(r),u=l+1,h=c+1,p=e/l,f=n/c,m=[],g=[],w=[],x=[];for(let d=0;d<h;d++){const y=d*f-a;for(let M=0;M<u;M++){const S=M*p-s;g.push(S,-y,0),w.push(0,0,1),x.push(M/l),x.push(1-d/c)}}for(let d=0;d<c;d++)for(let y=0;y<l;y++){const M=y+u*d,S=y+u*(d+1),T=y+1+u*(d+1),E=y+1+u*d;m.push(M,S,E),m.push(S,T,E)}this.setIndex(m),this.setAttribute("position",new Ii(g,3)),this.setAttribute("normal",new Ii(w,3)),this.setAttribute("uv",new Ii(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new go(e.width,e.height,e.widthSegments,e.heightSegments)}}function Ks(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(Nm(r))r.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(Nm(r[0])){const s=[];for(let a=0,l=r.length;a<l;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function rn(t){const e={};for(let n=0;n<t.length;n++){const i=Ks(t[n]);for(const r in i)e[r]=i[r]}return e}function Nm(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function Dy(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function $g(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const Iy={clone:Ks,merge:rn};var Uy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ei extends Rc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Uy,this.fragmentShader=Fy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ks(e.uniforms),this.uniformsGroups=Dy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new st().setHex(r.value);break;case"v2":this.uniforms[i].value=new qe().fromArray(r.value);break;case"v3":this.uniforms[i].value=new X().fromArray(r.value);break;case"v4":this.uniforms[i].value=new At().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Be().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Lt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Oy extends ei{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ky extends Rc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=I2,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class By extends Rc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const cl=new X,ul=new na,ri=new X;class qg extends Tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Lt,this.projectionMatrix=new Lt,this.projectionMatrixInverse=new Lt,this.coordinateSystem=di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(cl,ul,ri),ri.x===1&&ri.y===1&&ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(cl,ul,ri.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(cl,ul,ri),ri.x===1&&ri.y===1&&ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(cl,ul,ri.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Qi=new X,Rm=new qe,Pm=new qe;class qn extends qg{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=lo*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Va*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return lo*2*Math.atan(Math.tan(Va*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z),Qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z)}getViewSize(e,n){return this.getViewBounds(e,Rm,Pm),n.subVectors(Pm,Rm)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Va*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/c,n-=a.offsetY*i/u,r*=a.width/c,i*=a.height/u}const l=this.filmOffset;l!==0&&(s+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Nh extends qg{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,l=r+n,c=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,l-=h*this.view.offsetY,c=l-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,l,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ps=-90,ms=1;class zy extends Tn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new qn(ps,ms,e,n);r.layers=this.layers,this.add(r);const s=new qn(ps,ms,e,n);s.layers=this.layers,this.add(s);const a=new qn(ps,ms,e,n);a.layers=this.layers,this.add(a);const l=new qn(ps,ms,e,n);l.layers=this.layers,this.add(l);const c=new qn(ps,ms,e,n);c.layers=this.layers,this.add(c);const u=new qn(ps,ms,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,l,c]=n;for(const u of n)this.remove(u);if(e===di)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===uc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,l,c,u,h]=this.children,p=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const w=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,3,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(i,4,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),i.texture.generateMipmaps=w,e.setRenderTarget(i,5,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(p,f,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Vy extends qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Ih=class Ih{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};Ih.prototype.isMatrix2=!0;let Lm=Ih;function Dm(t,e,n,i){const r=Hy(i);switch(n){case Ig:return t*e;case Fg:return t*e/r.components*r.byteLength;case Sh:return t*e/r.components*r.byteLength;case Xr:return t*e*2/r.components*r.byteLength;case Mh:return t*e*2/r.components*r.byteLength;case Ug:return t*e*3/r.components*r.byteLength;case Kn:return t*e*4/r.components*r.byteLength;case bh:return t*e*4/r.components*r.byteLength;case Nl:case Rl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Pl:case Ll:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Gd:case Xd:return Math.max(t,16)*Math.max(e,8)/4;case jd:case Wd:return Math.max(t,8)*Math.max(e,8)/2;case $d:case qd:case Kd:case Zd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Yd:case ac:case Qd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Jd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ef:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case tf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case nf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case rf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case sf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case af:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case of:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case lf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case cf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case uf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case df:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case ff:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case hf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case pf:case mf:case xf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case gf:case vf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case oc:case _f:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Hy(t){switch(t){case Fn:case Rg:return{byteLength:1,components:1};case ao:case Pg:case Bi:return{byteLength:2,components:1};case _h:case yh:return{byteLength:2,components:4};case gi:case vh:case ui:return{byteLength:4,components:1};case Lg:case Dg:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gh}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Yg(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function jy(t){const e=new WeakMap;function n(l,c){const u=l.array,h=l.usage,p=u.byteLength,f=t.createBuffer();t.bindBuffer(c,f),t.bufferData(c,u,h),l.onUploadCallback();let m;if(u instanceof Float32Array)m=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)m=t.HALF_FLOAT;else if(u instanceof Uint16Array)l.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=t.SHORT;else if(u instanceof Uint32Array)m=t.UNSIGNED_INT;else if(u instanceof Int32Array)m=t.INT;else if(u instanceof Int8Array)m=t.BYTE;else if(u instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:p}}function i(l,c,u){const h=c.array,p=c.updateRanges;if(t.bindBuffer(u,l),p.length===0)t.bufferSubData(u,0,h);else{p.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<p.length;m++){const g=p[f],w=p[m];w.start<=g.start+g.count+1?g.count=Math.max(g.count,w.start+w.count-g.start):(++f,p[f]=w)}p.length=f+1;for(let m=0,g=p.length;m<g;m++){const w=p[m];t.bufferSubData(u,w.start*h.BYTES_PER_ELEMENT,h,w.start,w.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function s(l){l.isInterleavedBufferAttribute&&(l=l.data);const c=e.get(l);c&&(t.deleteBuffer(c.buffer),e.delete(l))}function a(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const h=e.get(l);(!h||h.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const u=e.get(l);if(u===void 0)e.set(l,n(l,c));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,l,c),u.version=l.version}}return{get:r,remove:s,update:a}}var Gy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Xy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$y=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ky=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Zy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Jy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,eS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,rS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,sS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,aS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,oS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,uS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,dS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,fS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,hS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,pS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,mS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,xS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_S=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yS="gl_FragColor = linearToOutputTexel( gl_FragColor );",SS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,MS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,bS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,wS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ES=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,TS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,AS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,CS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,NS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,RS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,PS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,LS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,DS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,IS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,US=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,FS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,OS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,BS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,VS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,HS=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,jS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,GS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,WS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,XS=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,$S=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,YS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ZS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,QS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,JS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,eM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,iM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,oM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,cM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,uM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,hM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,pM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_M=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,yM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,SM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,MM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,EM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,TM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,AM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,CM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,NM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,RM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,PM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,LM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,DM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,IM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,UM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,FM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,OM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,kM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,BM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,zM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,VM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,HM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,jM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const GM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,WM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$M=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ZM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,QM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,JM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,eb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ib=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,sb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ab=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ob=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,cb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ub=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,db=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,fb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,mb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_b=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Mb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:Gy,alphahash_pars_fragment:Wy,alphamap_fragment:Xy,alphamap_pars_fragment:$y,alphatest_fragment:qy,alphatest_pars_fragment:Yy,aomap_fragment:Ky,aomap_pars_fragment:Zy,batching_pars_vertex:Qy,batching_vertex:Jy,begin_vertex:eS,beginnormal_vertex:tS,bsdfs:nS,iridescence_fragment:iS,bumpmap_pars_fragment:rS,clipping_planes_fragment:sS,clipping_planes_pars_fragment:aS,clipping_planes_pars_vertex:oS,clipping_planes_vertex:lS,color_fragment:cS,color_pars_fragment:uS,color_pars_vertex:dS,color_vertex:fS,common:hS,cube_uv_reflection_fragment:pS,defaultnormal_vertex:mS,displacementmap_pars_vertex:xS,displacementmap_vertex:gS,emissivemap_fragment:vS,emissivemap_pars_fragment:_S,colorspace_fragment:yS,colorspace_pars_fragment:SS,envmap_fragment:MS,envmap_common_pars_fragment:bS,envmap_pars_fragment:wS,envmap_pars_vertex:ES,envmap_physical_pars_fragment:FS,envmap_vertex:TS,fog_vertex:AS,fog_pars_vertex:CS,fog_fragment:NS,fog_pars_fragment:RS,gradientmap_pars_fragment:PS,lightmap_pars_fragment:LS,lights_lambert_fragment:DS,lights_lambert_pars_fragment:IS,lights_pars_begin:US,lights_toon_fragment:OS,lights_toon_pars_fragment:kS,lights_phong_fragment:BS,lights_phong_pars_fragment:zS,lights_physical_fragment:VS,lights_physical_pars_fragment:HS,lights_fragment_begin:jS,lights_fragment_maps:GS,lights_fragment_end:WS,lightprobes_pars_fragment:XS,logdepthbuf_fragment:$S,logdepthbuf_pars_fragment:qS,logdepthbuf_pars_vertex:YS,logdepthbuf_vertex:KS,map_fragment:ZS,map_pars_fragment:QS,map_particle_fragment:JS,map_particle_pars_fragment:eM,metalnessmap_fragment:tM,metalnessmap_pars_fragment:nM,morphinstance_vertex:iM,morphcolor_vertex:rM,morphnormal_vertex:sM,morphtarget_pars_vertex:aM,morphtarget_vertex:oM,normal_fragment_begin:lM,normal_fragment_maps:cM,normal_pars_fragment:uM,normal_pars_vertex:dM,normal_vertex:fM,normalmap_pars_fragment:hM,clearcoat_normal_fragment_begin:pM,clearcoat_normal_fragment_maps:mM,clearcoat_pars_fragment:xM,iridescence_pars_fragment:gM,opaque_fragment:vM,packing:_M,premultiplied_alpha_fragment:yM,project_vertex:SM,dithering_fragment:MM,dithering_pars_fragment:bM,roughnessmap_fragment:wM,roughnessmap_pars_fragment:EM,shadowmap_pars_fragment:TM,shadowmap_pars_vertex:AM,shadowmap_vertex:CM,shadowmask_pars_fragment:NM,skinbase_vertex:RM,skinning_pars_vertex:PM,skinning_vertex:LM,skinnormal_vertex:DM,specularmap_fragment:IM,specularmap_pars_fragment:UM,tonemapping_fragment:FM,tonemapping_pars_fragment:OM,transmission_fragment:kM,transmission_pars_fragment:BM,uv_pars_fragment:zM,uv_pars_vertex:VM,uv_vertex:HM,worldpos_vertex:jM,background_vert:GM,background_frag:WM,backgroundCube_vert:XM,backgroundCube_frag:$M,cube_vert:qM,cube_frag:YM,depth_vert:KM,depth_frag:ZM,distance_vert:QM,distance_frag:JM,equirect_vert:eb,equirect_frag:tb,linedashed_vert:nb,linedashed_frag:ib,meshbasic_vert:rb,meshbasic_frag:sb,meshlambert_vert:ab,meshlambert_frag:ob,meshmatcap_vert:lb,meshmatcap_frag:cb,meshnormal_vert:ub,meshnormal_frag:db,meshphong_vert:fb,meshphong_frag:hb,meshphysical_vert:pb,meshphysical_frag:mb,meshtoon_vert:xb,meshtoon_frag:gb,points_vert:vb,points_frag:_b,shadow_vert:yb,shadow_frag:Sb,sprite_vert:Mb,sprite_frag:bb},ye={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new X},probesMax:{value:new X},probesResolution:{value:new X}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},oi={basic:{uniforms:rn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:rn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new st(0)},envMapIntensity:{value:1}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:rn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:rn([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:rn([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new st(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:rn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:rn([ye.points,ye.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:rn([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:rn([ye.common,ye.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:rn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:rn([ye.sprite,ye.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distance:{uniforms:rn([ye.common,ye.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distance_vert,fragmentShader:Ve.distance_frag},shadow:{uniforms:rn([ye.lights,ye.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};oi.physical={uniforms:rn([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const dl={r:0,b:0,g:0},wb=new Lt,Kg=new Be;Kg.set(-1,0,0,0,1,0,0,0,1);function Eb(t,e,n,i,r,s){const a=new st(0);let l=r===!0?0:1,c,u,h=null,p=0,f=null;function m(y){let M=y.isScene===!0?y.background:null;if(M&&M.isTexture){const S=y.backgroundBlurriness>0;M=e.get(M,S)}return M}function g(y){let M=!1;const S=m(y);S===null?x(a,l):S&&S.isColor&&(x(S,1),M=!0);const T=t.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function w(y,M){const S=m(M);S&&(S.isCubeTexture||S.mapping===Nc)?(u===void 0&&(u=new vi(new xo(1,1,1),new ei({name:"BackgroundCubeMaterial",uniforms:Ks(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=S,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(wb.makeRotationFromEuler(M.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(Kg),u.material.toneMapped=Ze.getTransfer(S.colorSpace)!==lt,(h!==S||p!==S.version||f!==t.toneMapping)&&(u.material.needsUpdate=!0,h=S,p=S.version,f=t.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new vi(new go(2,2),new ei({name:"BackgroundMaterial",uniforms:Ks(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:vr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(S.colorSpace)!==lt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||p!==S.version||f!==t.toneMapping)&&(c.material.needsUpdate=!0,h=S,p=S.version,f=t.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function x(y,M){y.getRGB(dl,$g(t)),n.buffers.color.setClear(dl.r,dl.g,dl.b,M,s)}function d(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,M=1){a.set(y),l=M,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,x(a,l)},render:g,addToRenderList:w,dispose:d}}function Tb(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function l(P,F,I,$,z){let Y=!1;const j=p(P,$,I,F);s!==j&&(s=j,u(s.object)),Y=m(P,$,I,z),Y&&g(P,$,I,z),z!==null&&e.update(z,t.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,S(P,F,I,$),z!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function c(){return t.createVertexArray()}function u(P){return t.bindVertexArray(P)}function h(P){return t.deleteVertexArray(P)}function p(P,F,I,$){const z=$.wireframe===!0;let Y=i[F.id];Y===void 0&&(Y={},i[F.id]=Y);const j=P.isInstancedMesh===!0?P.id:0;let D=Y[j];D===void 0&&(D={},Y[j]=D);let W=D[I.id];W===void 0&&(W={},D[I.id]=W);let q=W[z];return q===void 0&&(q=f(c()),W[z]=q),q}function f(P){const F=[],I=[],$=[];for(let z=0;z<n;z++)F[z]=0,I[z]=0,$[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:I,attributeDivisors:$,object:P,attributes:{},index:null}}function m(P,F,I,$){const z=s.attributes,Y=F.attributes;let j=0;const D=I.getAttributes();for(const W in D)if(D[W].location>=0){const ne=z[W];let re=Y[W];if(re===void 0&&(W==="instanceMatrix"&&P.instanceMatrix&&(re=P.instanceMatrix),W==="instanceColor"&&P.instanceColor&&(re=P.instanceColor)),ne===void 0||ne.attribute!==re||re&&ne.data!==re.data)return!0;j++}return s.attributesNum!==j||s.index!==$}function g(P,F,I,$){const z={},Y=F.attributes;let j=0;const D=I.getAttributes();for(const W in D)if(D[W].location>=0){let ne=Y[W];ne===void 0&&(W==="instanceMatrix"&&P.instanceMatrix&&(ne=P.instanceMatrix),W==="instanceColor"&&P.instanceColor&&(ne=P.instanceColor));const re={};re.attribute=ne,ne&&ne.data&&(re.data=ne.data),z[W]=re,j++}s.attributes=z,s.attributesNum=j,s.index=$}function w(){const P=s.newAttributes;for(let F=0,I=P.length;F<I;F++)P[F]=0}function x(P){d(P,0)}function d(P,F){const I=s.newAttributes,$=s.enabledAttributes,z=s.attributeDivisors;I[P]=1,$[P]===0&&(t.enableVertexAttribArray(P),$[P]=1),z[P]!==F&&(t.vertexAttribDivisor(P,F),z[P]=F)}function y(){const P=s.newAttributes,F=s.enabledAttributes;for(let I=0,$=F.length;I<$;I++)F[I]!==P[I]&&(t.disableVertexAttribArray(I),F[I]=0)}function M(P,F,I,$,z,Y,j){j===!0?t.vertexAttribIPointer(P,F,I,z,Y):t.vertexAttribPointer(P,F,I,$,z,Y)}function S(P,F,I,$){w();const z=$.attributes,Y=I.getAttributes(),j=F.defaultAttributeValues;for(const D in Y){const W=Y[D];if(W.location>=0){let q=z[D];if(q===void 0&&(D==="instanceMatrix"&&P.instanceMatrix&&(q=P.instanceMatrix),D==="instanceColor"&&P.instanceColor&&(q=P.instanceColor)),q!==void 0){const ne=q.normalized,re=q.itemSize,Fe=e.get(q);if(Fe===void 0)continue;const Qe=Fe.buffer,Ge=Fe.type,Q=Fe.bytesPerElement,de=Ge===t.INT||Ge===t.UNSIGNED_INT||q.gpuType===vh;if(q.isInterleavedBufferAttribute){const se=q.data,De=se.stride,ke=q.offset;if(se.isInstancedInterleavedBuffer){for(let Re=0;Re<W.locationSize;Re++)d(W.location+Re,se.meshPerAttribute);P.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Re=0;Re<W.locationSize;Re++)x(W.location+Re);t.bindBuffer(t.ARRAY_BUFFER,Qe);for(let Re=0;Re<W.locationSize;Re++)M(W.location+Re,re/W.locationSize,Ge,ne,De*Q,(ke+re/W.locationSize*Re)*Q,de)}else{if(q.isInstancedBufferAttribute){for(let se=0;se<W.locationSize;se++)d(W.location+se,q.meshPerAttribute);P.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let se=0;se<W.locationSize;se++)x(W.location+se);t.bindBuffer(t.ARRAY_BUFFER,Qe);for(let se=0;se<W.locationSize;se++)M(W.location+se,re/W.locationSize,Ge,ne,re*Q,re/W.locationSize*se*Q,de)}}else if(j!==void 0){const ne=j[D];if(ne!==void 0)switch(ne.length){case 2:t.vertexAttrib2fv(W.location,ne);break;case 3:t.vertexAttrib3fv(W.location,ne);break;case 4:t.vertexAttrib4fv(W.location,ne);break;default:t.vertexAttrib1fv(W.location,ne)}}}}y()}function T(){N();for(const P in i){const F=i[P];for(const I in F){const $=F[I];for(const z in $){const Y=$[z];for(const j in Y)h(Y[j].object),delete Y[j];delete $[z]}}delete i[P]}}function E(P){if(i[P.id]===void 0)return;const F=i[P.id];for(const I in F){const $=F[I];for(const z in $){const Y=$[z];for(const j in Y)h(Y[j].object),delete Y[j];delete $[z]}}delete i[P.id]}function C(P){for(const F in i){const I=i[F];for(const $ in I){const z=I[$];if(z[P.id]===void 0)continue;const Y=z[P.id];for(const j in Y)h(Y[j].object),delete Y[j];delete z[P.id]}}}function v(P){for(const F in i){const I=i[F],$=P.isInstancedMesh===!0?P.id:0,z=I[$];if(z!==void 0){for(const Y in z){const j=z[Y];for(const D in j)h(j[D].object),delete j[D];delete z[Y]}delete I[$],Object.keys(I).length===0&&delete i[F]}}}function N(){L(),a=!0,s!==r&&(s=r,u(s.object))}function L(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:l,reset:N,resetDefaultState:L,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfObject:v,releaseStatesOfProgram:C,initAttributes:w,enableAttribute:x,disableUnusedAttributes:y}}function Ab(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function a(c,u,h){h!==0&&(t.drawArraysInstanced(i,c,u,h),n.update(u,i,h))}function l(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let f=0;for(let m=0;m<h;m++)f+=u[m];n.update(f,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=l}function Cb(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==Kn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(C){const v=C===Bi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Fn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==ui&&!v)}function c(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const h=c(u);h!==u&&(Ie("WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const p=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&f===!1&&Ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),y=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),M=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),T=t.getParameter(t.MAX_SAMPLES),E=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:l,precision:u,logarithmicDepthBuffer:p,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:w,maxCubemapSize:x,maxAttributes:d,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:S,maxSamples:T,samples:E}}function Nb(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Rr,l=new Be,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){const m=p.length!==0||f||i!==0||r;return r=f,i=p.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,f){n=h(p,f,0)},this.setState=function(p,f,m){const g=p.clippingPlanes,w=p.clipIntersection,x=p.clipShadows,d=t.get(p);if(!r||g===null||g.length===0||s&&!x)s?h(null):u();else{const y=s?0:i,M=y*4;let S=d.clippingState||null;c.value=S,S=h(g,f,M,m);for(let T=0;T!==M;++T)S[T]=n[T];d.clippingState=S,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=y}};function u(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(p,f,m,g){const w=p!==null?p.length:0;let x=null;if(w!==0){if(x=c.value,g!==!0||x===null){const d=m+w*4,y=f.matrixWorldInverse;l.getNormalMatrix(y),(x===null||x.length<d)&&(x=new Float32Array(d));for(let M=0,S=m;M!==w;++M,S+=4)a.copy(p[M]).applyMatrix4(y,l),a.normal.toArray(x,S),x[S+3]=a.constant}c.value=x,c.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,x}}const ar=4,Im=[.125,.215,.35,.446,.526,.582],Lr=20,Rb=256,wa=new Nh,Um=new st;let Pu=null,Lu=0,Du=0,Iu=!1;const Pb=new X;class Fm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:l=Pb}=s;Pu=this._renderer.getRenderTarget(),Lu=this._renderer.getActiveCubeFace(),Du=this._renderer.getActiveMipmapLevel(),Iu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,l),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=km(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Pu,Lu,Du),this._renderer.xr.enabled=Iu,e.scissorTest=!1,xs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Wr||e.mapping===qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pu=this._renderer.getRenderTarget(),Lu=this._renderer.getActiveCubeFace(),Du=this._renderer.getActiveMipmapLevel(),Iu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:Bi,format:Kn,colorSpace:lc,depthBuffer:!1},r=Om(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Om(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Lb(s)),this._blurMaterial=Ib(s,e,n),this._ggxMaterial=Db(s,e,n)}return r}_compileMaterial(e){const n=new vi(new Hi,e);this._renderer.compile(n,wa)}_sceneToCubeUV(e,n,i,r,s){const c=new qn(90,1,n,i),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,f=p.autoClear,m=p.toneMapping;p.getClearColor(Um),p.toneMapping=pi,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(r),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new vi(new xo,new jg({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,x=w.material;let d=!1;const y=e.background;y?y.isColor&&(x.color.copy(y),e.background=null,d=!0):(x.color.copy(Um),d=!0);for(let M=0;M<6;M++){const S=M%3;S===0?(c.up.set(0,u[M],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[M],s.y,s.z)):S===1?(c.up.set(0,0,u[M]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[M],s.z)):(c.up.set(0,u[M],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[M]));const T=this._cubeSize;xs(r,S*T,M>2?T:0,T,T),p.setRenderTarget(r),d&&p.render(w,c),p.render(e,c)}p.toneMapping=m,p.autoClear=f,e.background=y}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Wr||e.mapping===qs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=km());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const l=s.uniforms;l.envMap.value=e;const c=this._cubeSize;xs(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(a,wa)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,l=this._lodMeshes[i];l.material=a;const c=a.uniforms,u=i/(this._lodMeshes.length-1),h=n/(this._lodMeshes.length-1),p=Math.sqrt(u*u-h*h),f=0+u*1.25,m=p*f,{_lodMax:g}=this,w=this._sizeLods[i],x=3*w*(i>g-ar?i-g+ar:0),d=4*(this._cubeSize-w);c.envMap.value=e.texture,c.roughness.value=m,c.mipInt.value=g-n,xs(s,x,d,3*w,2*w),r.setRenderTarget(s),r.render(l,wa),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=g-i,xs(e,x,d,3*w,2*w),r.setRenderTarget(e),r.render(l,wa)}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,l){const c=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Je("blur direction must be either latitudinal or longitudinal!");const h=3,p=this._lodMeshes[r];p.material=u;const f=u.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Lr-1),w=s/g,x=isFinite(s)?1+Math.floor(h*w):Lr;x>Lr&&Ie(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Lr}`);const d=[];let y=0;for(let C=0;C<Lr;++C){const v=C/w,N=Math.exp(-v*v/2);d.push(N),C===0?y+=N:C<x&&(y+=2*N)}for(let C=0;C<d.length;C++)d[C]=d[C]/y;f.envMap.value=e.texture,f.samples.value=x,f.weights.value=d,f.latitudinal.value=a==="latitudinal",l&&(f.poleAxis.value=l);const{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-i;const S=this._sizeLods[r],T=3*S*(r>M-ar?r-M+ar:0),E=4*(this._cubeSize-S);xs(n,T,E,3*S,2*S),c.setRenderTarget(n),c.render(p,wa)}}function Lb(t){const e=[],n=[],i=[];let r=t;const s=t-ar+1+Im.length;for(let a=0;a<s;a++){const l=Math.pow(2,r);e.push(l);let c=1/l;a>t-ar?c=Im[a-t+ar-1]:a===0&&(c=0),n.push(c);const u=1/(l-2),h=-u,p=1+u,f=[h,h,p,h,p,p,h,h,p,p,h,p],m=6,g=6,w=3,x=2,d=1,y=new Float32Array(w*g*m),M=new Float32Array(x*g*m),S=new Float32Array(d*g*m);for(let E=0;E<m;E++){const C=E%3*2/3-1,v=E>2?0:-1,N=[C,v,0,C+2/3,v,0,C+2/3,v+1,0,C,v,0,C+2/3,v+1,0,C,v+1,0];y.set(N,w*g*E),M.set(f,x*g*E);const L=[E,E,E,E,E,E];S.set(L,d*g*E)}const T=new Hi;T.setAttribute("position",new xi(y,w)),T.setAttribute("uv",new xi(M,x)),T.setAttribute("faceIndex",new xi(S,d)),i.push(new vi(T,null)),r>ar&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function Om(t,e,n){const i=new mi(t,e,n);return i.texture.mapping=Nc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function xs(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Db(t,e,n){return new ei({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Rb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Pc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Ib(t,e,n){const i=new Float32Array(Lr),r=new X(0,1,0);return new ei({name:"SphericalGaussianBlur",defines:{n:Lr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function km(){return new ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Bm(){return new ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Pc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Zg extends mi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Wg(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new xo(5,5,5),s=new ei({name:"CubemapFromEquirect",uniforms:Ks(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:gn,blending:Li});s.uniforms.tEquirect.value=n;const a=new vi(r,s),l=n.minFilter;return n.minFilter===Fr&&(n.minFilter=Qt),new zy(1,10,this).update(e,a),n.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}function Ub(t){let e=new WeakMap,n=new WeakMap,i=null;function r(f,m=!1){return f==null?null:m?a(f):s(f)}function s(f){if(f&&f.isTexture){const m=f.mapping;if(m===au||m===ou)if(e.has(f)){const g=e.get(f).texture;return l(g,f.mapping)}else{const g=f.image;if(g&&g.height>0){const w=new Zg(g.height);return w.fromEquirectangularTexture(t,f),e.set(f,w),f.addEventListener("dispose",u),l(w.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){const m=f.mapping,g=m===au||m===ou,w=m===Wr||m===qs;if(g||w){let x=n.get(f);const d=x!==void 0?x.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==d)return i===null&&(i=new Fm(t)),x=g?i.fromEquirectangular(f,x):i.fromCubemap(f,x),x.texture.pmremVersion=f.pmremVersion,n.set(f,x),x.texture;if(x!==void 0)return x.texture;{const y=f.image;return g&&y&&y.height>0||w&&y&&c(y)?(i===null&&(i=new Fm(t)),x=g?i.fromEquirectangular(f):i.fromCubemap(f),x.texture.pmremVersion=f.pmremVersion,n.set(f,x),f.addEventListener("dispose",h),x.texture):null}}}return f}function l(f,m){return m===au?f.mapping=Wr:m===ou&&(f.mapping=qs),f}function c(f){let m=0;const g=6;for(let w=0;w<g;w++)f[w]!==void 0&&m++;return m===g}function u(f){const m=f.target;m.removeEventListener("dispose",u);const g=e.get(m);g!==void 0&&(e.delete(m),g.dispose())}function h(f){const m=f.target;m.removeEventListener("dispose",h);const g=n.get(m);g!==void 0&&(n.delete(m),g.dispose())}function p(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:p}}function Fb(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&ks("WebGLRenderer: "+i+" extension not supported."),r}}}function Ob(t,e,n,i){const r={},s=new WeakMap;function a(p){const f=p.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function l(p,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,n.memory.geometries++),f}function c(p){const f=p.attributes;for(const m in f)e.update(f[m],t.ARRAY_BUFFER)}function u(p){const f=[],m=p.index,g=p.attributes.position;let w=0;if(g===void 0)return;if(m!==null){const y=m.array;w=m.version;for(let M=0,S=y.length;M<S;M+=3){const T=y[M+0],E=y[M+1],C=y[M+2];f.push(T,E,E,C,C,T)}}else{const y=g.array;w=g.version;for(let M=0,S=y.length/3-1;M<S;M+=3){const T=M+0,E=M+1,C=M+2;f.push(T,E,E,C,C,T)}}const x=new(g.count>=65535?Hg:Vg)(f,1);x.version=w;const d=s.get(p);d&&e.remove(d),s.set(p,x)}function h(p){const f=s.get(p);if(f){const m=p.index;m!==null&&f.version<m.version&&u(p)}else u(p);return s.get(p)}return{get:l,update:c,getWireframeAttribute:h}}function kb(t,e,n){let i;function r(p){i=p}let s,a;function l(p){s=p.type,a=p.bytesPerElement}function c(p,f){t.drawElements(i,f,s,p*a),n.update(f,i,1)}function u(p,f,m){m!==0&&(t.drawElementsInstanced(i,f,s,p*a,m),n.update(f,i,m))}function h(p,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,p,0,m);let w=0;for(let x=0;x<m;x++)w+=f[x];n.update(w,i,1)}this.setMode=r,this.setIndex=l,this.render=c,this.renderInstances=u,this.renderMultiDraw=h}function Bb(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,l){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=l*(s/3);break;case t.LINES:n.lines+=l*(s/2);break;case t.LINE_STRIP:n.lines+=l*(s-1);break;case t.LINE_LOOP:n.lines+=l*s;break;case t.POINTS:n.points+=l*s;break;default:Je("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function zb(t,e,n){const i=new WeakMap,r=new At;function s(a,l,c){const u=a.morphTargetInfluences,h=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,p=h!==void 0?h.length:0;let f=i.get(l);if(f===void 0||f.count!==p){let L=function(){v.dispose(),i.delete(l),l.removeEventListener("dispose",L)};var m=L;f!==void 0&&f.texture.dispose();const g=l.morphAttributes.position!==void 0,w=l.morphAttributes.normal!==void 0,x=l.morphAttributes.color!==void 0,d=l.morphAttributes.position||[],y=l.morphAttributes.normal||[],M=l.morphAttributes.color||[];let S=0;g===!0&&(S=1),w===!0&&(S=2),x===!0&&(S=3);let T=l.attributes.position.count*S,E=1;T>e.maxTextureSize&&(E=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const C=new Float32Array(T*E*4*p),v=new kg(C,T,E,p);v.type=ui,v.needsUpdate=!0;const N=S*4;for(let P=0;P<p;P++){const F=d[P],I=y[P],$=M[P],z=T*E*4*P;for(let Y=0;Y<F.count;Y++){const j=Y*N;g===!0&&(r.fromBufferAttribute(F,Y),C[z+j+0]=r.x,C[z+j+1]=r.y,C[z+j+2]=r.z,C[z+j+3]=0),w===!0&&(r.fromBufferAttribute(I,Y),C[z+j+4]=r.x,C[z+j+5]=r.y,C[z+j+6]=r.z,C[z+j+7]=0),x===!0&&(r.fromBufferAttribute($,Y),C[z+j+8]=r.x,C[z+j+9]=r.y,C[z+j+10]=r.z,C[z+j+11]=$.itemSize===4?r.w:1)}}f={count:p,texture:v,size:new qe(T,E)},i.set(l,f),l.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let g=0;for(let x=0;x<u.length;x++)g+=u[x];const w=l.morphTargetsRelative?1:1-g;c.getUniforms().setValue(t,"morphTargetBaseInfluence",w),c.getUniforms().setValue(t,"morphTargetInfluences",u)}c.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),c.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function Vb(t,e,n,i,r){let s=new WeakMap;function a(u){const h=r.render.frame,p=u.geometry,f=e.get(u,p);if(s.get(f)!==h&&(e.update(f),s.set(f,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),s.get(u)!==h&&(n.update(u.instanceMatrix,t.ARRAY_BUFFER),u.instanceColor!==null&&n.update(u.instanceColor,t.ARRAY_BUFFER),s.set(u,h))),u.isSkinnedMesh){const m=u.skeleton;s.get(m)!==h&&(m.update(),s.set(m,h))}return f}function l(){s=new WeakMap}function c(u){const h=u.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:a,dispose:l}}const Hb={[Mg]:"LINEAR_TONE_MAPPING",[bg]:"REINHARD_TONE_MAPPING",[wg]:"CINEON_TONE_MAPPING",[Eg]:"ACES_FILMIC_TONE_MAPPING",[Ag]:"AGX_TONE_MAPPING",[Cg]:"NEUTRAL_TONE_MAPPING",[Tg]:"CUSTOM_TONE_MAPPING"};function jb(t,e,n,i,r,s){const a=new mi(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,depthTexture:r?new Ys(e,n):void 0}),l=new mi(e,n,{type:Bi,depthBuffer:!1,stencilBuffer:!1}),c=new Hi;c.setAttribute("position",new Ii([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Ii([0,2,0,0,2,0],2));const u=new Oy({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new vi(c,u),p=new Nh(-1,1,1,-1,0,1);let f=null,m=null,g=!1,w,x=null,d=[],y=!1;this.setSize=function(M,S){a.setSize(M,S),l.setSize(M,S);for(let T=0;T<d.length;T++){const E=d[T];E.setSize&&E.setSize(M,S)}},this.setEffects=function(M){d=M,y=d.length>0&&d[0].isRenderPass===!0;const S=a.width,T=a.height;for(let E=0;E<d.length;E++){const C=d[E];C.setSize&&C.setSize(S,T)}},this.begin=function(M,S){if(g||M.toneMapping===pi&&d.length===0)return!1;if(x=S,S!==null){const T=S.width,E=S.height;(a.width!==T||a.height!==E)&&this.setSize(T,E)}return y===!1&&M.setRenderTarget(a),w=M.toneMapping,M.toneMapping=pi,!0},this.hasRenderPass=function(){return y},this.end=function(M,S){M.toneMapping=w,g=!0;let T=a,E=l;for(let C=0;C<d.length;C++){const v=d[C];if(v.enabled!==!1&&(v.render(M,E,T,S),v.needsSwap!==!1)){const N=T;T=E,E=N}}if(f!==M.outputColorSpace||m!==M.toneMapping){f=M.outputColorSpace,m=M.toneMapping,u.defines={},Ze.getTransfer(f)===lt&&(u.defines.SRGB_TRANSFER="");const C=Hb[m];C&&(u.defines[C]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=T.texture,M.setRenderTarget(x),M.render(h,p),x=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),l.dispose(),c.dispose(),u.dispose()}}const Qg=new on,yf=new Ys(1,1),Jg=new kg,ev=new hy,tv=new Wg,zm=[],Vm=[],Hm=new Float32Array(16),jm=new Float32Array(9),Gm=new Float32Array(4);function ia(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=zm[r];if(s===void 0&&(s=new Float32Array(r),zm[r]=s),e!==0){i.toArray(s,0);for(let a=1,l=0;a!==e;++a)l+=n,t[a].toArray(s,l)}return s}function Ft(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ot(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Lc(t,e){let n=Vm[e];n===void 0&&(n=new Int32Array(e),Vm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Gb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Wb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2fv(this.addr,e),Ot(n,e)}}function Xb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ft(n,e))return;t.uniform3fv(this.addr,e),Ot(n,e)}}function $b(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4fv(this.addr,e),Ot(n,e)}}function qb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ot(n,e)}else{if(Ft(n,i))return;Gm.set(i),t.uniformMatrix2fv(this.addr,!1,Gm),Ot(n,i)}}function Yb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ot(n,e)}else{if(Ft(n,i))return;jm.set(i),t.uniformMatrix3fv(this.addr,!1,jm),Ot(n,i)}}function Kb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ot(n,e)}else{if(Ft(n,i))return;Hm.set(i),t.uniformMatrix4fv(this.addr,!1,Hm),Ot(n,i)}}function Zb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Qb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2iv(this.addr,e),Ot(n,e)}}function Jb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3iv(this.addr,e),Ot(n,e)}}function e3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4iv(this.addr,e),Ot(n,e)}}function t3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function n3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2uiv(this.addr,e),Ot(n,e)}}function i3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3uiv(this.addr,e),Ot(n,e)}}function r3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4uiv(this.addr,e),Ot(n,e)}}function s3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(yf.compareFunction=n.isReversedDepthBuffer()?Eh:wh,s=yf):s=Qg,n.setTexture2D(e||s,r)}function a3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||ev,r)}function o3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||tv,r)}function l3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Jg,r)}function c3(t){switch(t){case 5126:return Gb;case 35664:return Wb;case 35665:return Xb;case 35666:return $b;case 35674:return qb;case 35675:return Yb;case 35676:return Kb;case 5124:case 35670:return Zb;case 35667:case 35671:return Qb;case 35668:case 35672:return Jb;case 35669:case 35673:return e3;case 5125:return t3;case 36294:return n3;case 36295:return i3;case 36296:return r3;case 35678:case 36198:case 36298:case 36306:case 35682:return s3;case 35679:case 36299:case 36307:return a3;case 35680:case 36300:case 36308:case 36293:return o3;case 36289:case 36303:case 36311:case 36292:return l3}}function u3(t,e){t.uniform1fv(this.addr,e)}function d3(t,e){const n=ia(e,this.size,2);t.uniform2fv(this.addr,n)}function f3(t,e){const n=ia(e,this.size,3);t.uniform3fv(this.addr,n)}function h3(t,e){const n=ia(e,this.size,4);t.uniform4fv(this.addr,n)}function p3(t,e){const n=ia(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function m3(t,e){const n=ia(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function x3(t,e){const n=ia(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function g3(t,e){t.uniform1iv(this.addr,e)}function v3(t,e){t.uniform2iv(this.addr,e)}function _3(t,e){t.uniform3iv(this.addr,e)}function y3(t,e){t.uniform4iv(this.addr,e)}function S3(t,e){t.uniform1uiv(this.addr,e)}function M3(t,e){t.uniform2uiv(this.addr,e)}function b3(t,e){t.uniform3uiv(this.addr,e)}function w3(t,e){t.uniform4uiv(this.addr,e)}function E3(t,e,n){const i=this.cache,r=e.length,s=Lc(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=yf:a=Qg;for(let l=0;l!==r;++l)n.setTexture2D(e[l]||a,s[l])}function T3(t,e,n){const i=this.cache,r=e.length,s=Lc(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||ev,s[a])}function A3(t,e,n){const i=this.cache,r=e.length,s=Lc(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||tv,s[a])}function C3(t,e,n){const i=this.cache,r=e.length,s=Lc(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Jg,s[a])}function N3(t){switch(t){case 5126:return u3;case 35664:return d3;case 35665:return f3;case 35666:return h3;case 35674:return p3;case 35675:return m3;case 35676:return x3;case 5124:case 35670:return g3;case 35667:case 35671:return v3;case 35668:case 35672:return _3;case 35669:case 35673:return y3;case 5125:return S3;case 36294:return M3;case 36295:return b3;case 36296:return w3;case 35678:case 36198:case 36298:case 36306:case 35682:return E3;case 35679:case 36299:case 36307:return T3;case 35680:case 36300:case 36308:case 36293:return A3;case 36289:case 36303:case 36311:case 36292:return C3}}class R3{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=c3(n.type)}}class P3{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=N3(n.type)}}class L3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const l=r[s];l.setValue(e,n[l.id],i)}}}const Uu=/(\w+)(\])?(\[|\.)?/g;function Wm(t,e){t.seq.push(e),t.map[e.id]=e}function D3(t,e,n){const i=t.name,r=i.length;for(Uu.lastIndex=0;;){const s=Uu.exec(i),a=Uu.lastIndex;let l=s[1];const c=s[2]==="]",u=s[3];if(c&&(l=l|0),u===void 0||u==="["&&a+2===r){Wm(n,u===void 0?new R3(l,t,e):new P3(l,t,e));break}else{let p=n.map[l];p===void 0&&(p=new L3(l),Wm(n,p)),n=p}}}class Dl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const l=e.getActiveUniform(n,a),c=e.getUniformLocation(n,l.name);D3(l,c,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const l=n[s],c=i[l.id];c.needsUpdate!==!1&&l.setValue(e,c.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Xm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const I3=37297;let U3=0;function F3(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const l=a+1;i.push(`${l===e?">":" "} ${l}: ${n[a]}`)}return i.join(`
`)}const $m=new Be;function O3(t){Ze._getMatrix($m,Ze.workingColorSpace,t);const e=`mat3( ${$m.elements.map(n=>n.toFixed(4))} )`;switch(Ze.getTransfer(t)){case cc:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function qm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const l=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+F3(t.getShaderSource(e),l)}else return s}function k3(t,e){const n=O3(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const B3={[Mg]:"Linear",[bg]:"Reinhard",[wg]:"Cineon",[Eg]:"ACESFilmic",[Ag]:"AgX",[Cg]:"Neutral",[Tg]:"Custom"};function z3(t,e){const n=B3[e];return n===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const fl=new X;function V3(){Ze.getLuminanceCoefficients(fl);const t=fl.x.toFixed(4),e=fl.y.toFixed(4),n=fl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function H3(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pa).join(`
`)}function j3(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function G3(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let l=1;s.type===t.FLOAT_MAT2&&(l=2),s.type===t.FLOAT_MAT3&&(l=3),s.type===t.FLOAT_MAT4&&(l=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:l}}return n}function Pa(t){return t!==""}function Ym(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Km(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const W3=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sf(t){return t.replace(W3,$3)}const X3=new Map;function $3(t,e){let n=Ve[e];if(n===void 0){const i=X3.get(e);if(i!==void 0)n=Ve[i],Ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Sf(n)}const q3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zm(t){return t.replace(q3,Y3)}function Y3(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Qm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const K3={[Cl]:"SHADOWMAP_TYPE_PCF",[Ra]:"SHADOWMAP_TYPE_VSM"};function Z3(t){return K3[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Q3={[Wr]:"ENVMAP_TYPE_CUBE",[qs]:"ENVMAP_TYPE_CUBE",[Nc]:"ENVMAP_TYPE_CUBE_UV"};function J3(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":Q3[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const ew={[qs]:"ENVMAP_MODE_REFRACTION"};function tw(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":ew[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const nw={[Sg]:"ENVMAP_BLENDING_MULTIPLY",[P2]:"ENVMAP_BLENDING_MIX",[L2]:"ENVMAP_BLENDING_ADD"};function iw(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":nw[t.combine]||"ENVMAP_BLENDING_NONE"}function rw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function sw(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,l=n.fragmentShader;const c=Z3(n),u=J3(n),h=tw(n),p=iw(n),f=rw(n),m=H3(n),g=j3(s),w=r.createProgram();let x,d,y=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Pa).join(`
`),x.length>0&&(x+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Pa).join(`
`),d.length>0&&(d+=`
`)):(x=[Qm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pa).join(`
`),d=[Qm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",n.envMap?"#define "+p:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==pi?"#define TONE_MAPPING":"",n.toneMapping!==pi?Ve.tonemapping_pars_fragment:"",n.toneMapping!==pi?z3("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,k3("linearToOutputTexel",n.outputColorSpace),V3(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Pa).join(`
`)),a=Sf(a),a=Ym(a,n),a=Km(a,n),l=Sf(l),l=Ym(l,n),l=Km(l,n),a=Zm(a),l=Zm(l),n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,x=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,d=["#define varying in",n.glslVersion===um?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===um?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const M=y+x+a,S=y+d+l,T=Xm(r,r.VERTEX_SHADER,M),E=Xm(r,r.FRAGMENT_SHADER,S);r.attachShader(w,T),r.attachShader(w,E),n.index0AttributeName!==void 0?r.bindAttribLocation(w,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(w,0,"position"),r.linkProgram(w);function C(P){if(t.debug.checkShaderErrors){const F=r.getProgramInfoLog(w)||"",I=r.getShaderInfoLog(T)||"",$=r.getShaderInfoLog(E)||"",z=F.trim(),Y=I.trim(),j=$.trim();let D=!0,W=!0;if(r.getProgramParameter(w,r.LINK_STATUS)===!1)if(D=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,w,T,E);else{const q=qm(r,T,"vertex"),ne=qm(r,E,"fragment");Je("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(w,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+z+`
`+q+`
`+ne)}else z!==""?Ie("WebGLProgram: Program Info Log:",z):(Y===""||j==="")&&(W=!1);W&&(P.diagnostics={runnable:D,programLog:z,vertexShader:{log:Y,prefix:x},fragmentShader:{log:j,prefix:d}})}r.deleteShader(T),r.deleteShader(E),v=new Dl(r,w),N=G3(r,w)}let v;this.getUniforms=function(){return v===void 0&&C(this),v};let N;this.getAttributes=function(){return N===void 0&&C(this),N};let L=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=r.getProgramParameter(w,I3)),L},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(w),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=U3++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=T,this.fragmentShader=E,this}let aw=0;class ow{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new lw(e),n.set(e,i)),i}}class lw{constructor(e){this.id=aw++,this.code=e,this.usedTimes=0}}function cw(t){return t===Xr||t===ac||t===oc}function uw(t,e,n,i,r,s){const a=new Bg,l=new ow,c=new Set,u=[],h=new Map,p=i.logarithmicDepthBuffer;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return c.add(v),v===0?"uv":`uv${v}`}function w(v,N,L,P,F,I){const $=P.fog,z=F.geometry,Y=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?P.environment:null,j=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,D=e.get(v.envMap||Y,j),W=D&&D.mapping===Nc?D.image.height:null,q=m[v.type];v.precision!==null&&(f=i.getMaxPrecision(v.precision),f!==v.precision&&Ie("WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));const ne=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,re=ne!==void 0?ne.length:0;let Fe=0;z.morphAttributes.position!==void 0&&(Fe=1),z.morphAttributes.normal!==void 0&&(Fe=2),z.morphAttributes.color!==void 0&&(Fe=3);let Qe,Ge,Q,de;if(q){const we=oi[q];Qe=we.vertexShader,Ge=we.fragmentShader}else{Qe=v.vertexShader,Ge=v.fragmentShader;const we=l.getVertexShaderStage(v),mt=l.getFragmentShaderStage(v);l.update(v,we,mt),Q=we.id,de=mt.id}const se=t.getRenderTarget(),De=t.state.buffers.depth.getReversed(),ke=F.isInstancedMesh===!0,Re=F.isBatchedMesh===!0,ie=!!v.map,He=!!v.matcap,nt=!!D,Ye=!!v.aoMap,je=!!v.lightMap,St=!!v.bumpMap&&v.wireframe===!1,vt=!!v.normalMap,Ct=!!v.displacementMap,Et=!!v.emissiveMap,ht=!!v.metalnessMap,pt=!!v.roughnessMap,k=v.anisotropy>0,Ht=v.clearcoat>0,tt=v.dispersion>0,A=v.iridescence>0,_=v.sheen>0,H=v.transmission>0,G=k&&!!v.anisotropyMap,K=Ht&&!!v.clearcoatMap,ue=Ht&&!!v.clearcoatNormalMap,he=Ht&&!!v.clearcoatRoughnessMap,Z=A&&!!v.iridescenceMap,ee=A&&!!v.iridescenceThicknessMap,pe=_&&!!v.sheenColorMap,Ae=_&&!!v.sheenRoughnessMap,ge=!!v.specularMap,xe=!!v.specularColorMap,Ne=!!v.specularIntensityMap,Pe=H&&!!v.transmissionMap,Oe=H&&!!v.thicknessMap,U=!!v.gradientMap,fe=!!v.alphaMap,J=v.alphaTest>0,me=!!v.alphaHash,_e=!!v.extensions;let te=pi;v.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(te=t.toneMapping);const Ee={shaderID:q,shaderType:v.type,shaderName:v.name,vertexShader:Qe,fragmentShader:Ge,defines:v.defines,customVertexShaderID:Q,customFragmentShaderID:de,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:Re,batchingColor:Re&&F._colorsTexture!==null,instancing:ke,instancingColor:ke&&F.instanceColor!==null,instancingMorph:ke&&F.morphTexture!==null,outputColorSpace:se===null?t.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Ze.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:ie,matcap:He,envMap:nt,envMapMode:nt&&D.mapping,envMapCubeUVHeight:W,aoMap:Ye,lightMap:je,bumpMap:St,normalMap:vt,displacementMap:Ct,emissiveMap:Et,normalMapObjectSpace:vt&&v.normalMapType===U2,normalMapTangentSpace:vt&&v.normalMapType===om,packedNormalMap:vt&&v.normalMapType===om&&cw(v.normalMap.format),metalnessMap:ht,roughnessMap:pt,anisotropy:k,anisotropyMap:G,clearcoat:Ht,clearcoatMap:K,clearcoatNormalMap:ue,clearcoatRoughnessMap:he,dispersion:tt,iridescence:A,iridescenceMap:Z,iridescenceThicknessMap:ee,sheen:_,sheenColorMap:pe,sheenRoughnessMap:Ae,specularMap:ge,specularColorMap:xe,specularIntensityMap:Ne,transmission:H,transmissionMap:Pe,thicknessMap:Oe,gradientMap:U,opaque:v.transparent===!1&&v.blending===Os&&v.alphaToCoverage===!1,alphaMap:fe,alphaTest:J,alphaHash:me,combine:v.combine,mapUv:ie&&g(v.map.channel),aoMapUv:Ye&&g(v.aoMap.channel),lightMapUv:je&&g(v.lightMap.channel),bumpMapUv:St&&g(v.bumpMap.channel),normalMapUv:vt&&g(v.normalMap.channel),displacementMapUv:Ct&&g(v.displacementMap.channel),emissiveMapUv:Et&&g(v.emissiveMap.channel),metalnessMapUv:ht&&g(v.metalnessMap.channel),roughnessMapUv:pt&&g(v.roughnessMap.channel),anisotropyMapUv:G&&g(v.anisotropyMap.channel),clearcoatMapUv:K&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:ue&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&g(v.sheenRoughnessMap.channel),specularMapUv:ge&&g(v.specularMap.channel),specularColorMapUv:xe&&g(v.specularColorMap.channel),specularIntensityMapUv:Ne&&g(v.specularIntensityMap.channel),transmissionMapUv:Pe&&g(v.transmissionMap.channel),thicknessMapUv:Oe&&g(v.thicknessMap.channel),alphaMapUv:fe&&g(v.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(vt||k),vertexNormals:!!z.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!z.attributes.uv&&(ie||fe),fog:!!$,useFog:v.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||z.attributes.normal===void 0&&vt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:De,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:Fe,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:I.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:te,decodeVideoTexture:ie&&v.map.isVideoTexture===!0&&Ze.getTransfer(v.map.colorSpace)===lt,decodeVideoTextureEmissive:Et&&v.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(v.emissiveMap.colorSpace)===lt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ai,flipSided:v.side===gn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:_e&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&v.extensions.multiDraw===!0||Re)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ee.vertexUv1s=c.has(1),Ee.vertexUv2s=c.has(2),Ee.vertexUv3s=c.has(3),c.clear(),Ee}function x(v){const N=[];if(v.shaderID?N.push(v.shaderID):(N.push(v.customVertexShaderID),N.push(v.customFragmentShaderID)),v.defines!==void 0)for(const L in v.defines)N.push(L),N.push(v.defines[L]);return v.isRawShaderMaterial===!1&&(d(N,v),y(N,v),N.push(t.outputColorSpace)),N.push(v.customProgramCacheKey),N.join()}function d(v,N){v.push(N.precision),v.push(N.outputColorSpace),v.push(N.envMapMode),v.push(N.envMapCubeUVHeight),v.push(N.mapUv),v.push(N.alphaMapUv),v.push(N.lightMapUv),v.push(N.aoMapUv),v.push(N.bumpMapUv),v.push(N.normalMapUv),v.push(N.displacementMapUv),v.push(N.emissiveMapUv),v.push(N.metalnessMapUv),v.push(N.roughnessMapUv),v.push(N.anisotropyMapUv),v.push(N.clearcoatMapUv),v.push(N.clearcoatNormalMapUv),v.push(N.clearcoatRoughnessMapUv),v.push(N.iridescenceMapUv),v.push(N.iridescenceThicknessMapUv),v.push(N.sheenColorMapUv),v.push(N.sheenRoughnessMapUv),v.push(N.specularMapUv),v.push(N.specularColorMapUv),v.push(N.specularIntensityMapUv),v.push(N.transmissionMapUv),v.push(N.thicknessMapUv),v.push(N.combine),v.push(N.fogExp2),v.push(N.sizeAttenuation),v.push(N.morphTargetsCount),v.push(N.morphAttributeCount),v.push(N.numDirLights),v.push(N.numPointLights),v.push(N.numSpotLights),v.push(N.numSpotLightMaps),v.push(N.numHemiLights),v.push(N.numRectAreaLights),v.push(N.numDirLightShadows),v.push(N.numPointLightShadows),v.push(N.numSpotLightShadows),v.push(N.numSpotLightShadowsWithMaps),v.push(N.numLightProbes),v.push(N.shadowMapType),v.push(N.toneMapping),v.push(N.numClippingPlanes),v.push(N.numClipIntersection),v.push(N.depthPacking)}function y(v,N){a.disableAll(),N.instancing&&a.enable(0),N.instancingColor&&a.enable(1),N.instancingMorph&&a.enable(2),N.matcap&&a.enable(3),N.envMap&&a.enable(4),N.normalMapObjectSpace&&a.enable(5),N.normalMapTangentSpace&&a.enable(6),N.clearcoat&&a.enable(7),N.iridescence&&a.enable(8),N.alphaTest&&a.enable(9),N.vertexColors&&a.enable(10),N.vertexAlphas&&a.enable(11),N.vertexUv1s&&a.enable(12),N.vertexUv2s&&a.enable(13),N.vertexUv3s&&a.enable(14),N.vertexTangents&&a.enable(15),N.anisotropy&&a.enable(16),N.alphaHash&&a.enable(17),N.batching&&a.enable(18),N.dispersion&&a.enable(19),N.batchingColor&&a.enable(20),N.gradientMap&&a.enable(21),N.packedNormalMap&&a.enable(22),N.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),N.fog&&a.enable(0),N.useFog&&a.enable(1),N.flatShading&&a.enable(2),N.logarithmicDepthBuffer&&a.enable(3),N.reversedDepthBuffer&&a.enable(4),N.skinning&&a.enable(5),N.morphTargets&&a.enable(6),N.morphNormals&&a.enable(7),N.morphColors&&a.enable(8),N.premultipliedAlpha&&a.enable(9),N.shadowMapEnabled&&a.enable(10),N.doubleSided&&a.enable(11),N.flipSided&&a.enable(12),N.useDepthPacking&&a.enable(13),N.dithering&&a.enable(14),N.transmission&&a.enable(15),N.sheen&&a.enable(16),N.opaque&&a.enable(17),N.pointsUvs&&a.enable(18),N.decodeVideoTexture&&a.enable(19),N.decodeVideoTextureEmissive&&a.enable(20),N.alphaToCoverage&&a.enable(21),N.numLightProbeGrids>0&&a.enable(22),N.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function M(v){const N=m[v.type];let L;if(N){const P=oi[N];L=Iy.clone(P.uniforms)}else L=v.uniforms;return L}function S(v,N){let L=h.get(N);return L!==void 0?++L.usedTimes:(L=new sw(t,N,v,r),u.push(L),h.set(N,L)),L}function T(v){if(--v.usedTimes===0){const N=u.indexOf(v);u[N]=u[u.length-1],u.pop(),h.delete(v.cacheKey),v.destroy()}}function E(v){l.remove(v)}function C(){l.dispose()}return{getParameters:w,getProgramCacheKey:x,getUniforms:M,acquireProgram:S,releaseProgram:T,releaseShaderCache:E,programs:u,dispose:C}}function dw(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let l=t.get(a);return l===void 0&&(l={},t.set(a,l)),l}function i(a){t.delete(a)}function r(a,l,c){t.get(a)[l]=c}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function fw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Jm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function e0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f){let m=0;return f.isInstancedMesh&&(m+=2),f.isSkinnedMesh&&(m+=1),m}function l(f,m,g,w,x,d){let y=t[e];return y===void 0?(y={id:f.id,object:f,geometry:m,material:g,materialVariant:a(f),groupOrder:w,renderOrder:f.renderOrder,z:x,group:d},t[e]=y):(y.id=f.id,y.object=f,y.geometry=m,y.material=g,y.materialVariant=a(f),y.groupOrder=w,y.renderOrder=f.renderOrder,y.z=x,y.group=d),e++,y}function c(f,m,g,w,x,d){const y=l(f,m,g,w,x,d);g.transmission>0?i.push(y):g.transparent===!0?r.push(y):n.push(y)}function u(f,m,g,w,x,d){const y=l(f,m,g,w,x,d);g.transmission>0?i.unshift(y):g.transparent===!0?r.unshift(y):n.unshift(y)}function h(f,m,g){n.length>1&&n.sort(f||fw),i.length>1&&i.sort(m||Jm),r.length>1&&r.sort(m||Jm),g&&(n.reverse(),i.reverse(),r.reverse())}function p(){for(let f=e,m=t.length;f<m;f++){const g=t[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:c,unshift:u,finish:p,sort:h}}function hw(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new e0,t.set(i,[a])):r>=s.length?(a=new e0,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function pw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new X,color:new st};break;case"SpotLight":n={position:new X,direction:new X,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new X,color:new st,distance:0,decay:0};break;case"HemisphereLight":n={direction:new X,skyColor:new st,groundColor:new st};break;case"RectAreaLight":n={color:new st,position:new X,halfWidth:new X,halfHeight:new X};break}return t[e.id]=n,n}}}function mw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let xw=0;function gw(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function vw(t){const e=new pw,n=mw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new X);const r=new X,s=new Lt,a=new Lt;function l(u){let h=0,p=0,f=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let m=0,g=0,w=0,x=0,d=0,y=0,M=0,S=0,T=0,E=0,C=0;u.sort(gw);for(let N=0,L=u.length;N<L;N++){const P=u[N],F=P.color,I=P.intensity,$=P.distance;let z=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Xr?z=P.shadow.map.texture:z=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=F.r*I,p+=F.g*I,f+=F.b*I;else if(P.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(P.sh.coefficients[Y],I);C++}else if(P.isDirectionalLight){const Y=e.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const j=P.shadow,D=n.get(P);D.shadowIntensity=j.intensity,D.shadowBias=j.bias,D.shadowNormalBias=j.normalBias,D.shadowRadius=j.radius,D.shadowMapSize=j.mapSize,i.directionalShadow[m]=D,i.directionalShadowMap[m]=z,i.directionalShadowMatrix[m]=P.shadow.matrix,y++}i.directional[m]=Y,m++}else if(P.isSpotLight){const Y=e.get(P);Y.position.setFromMatrixPosition(P.matrixWorld),Y.color.copy(F).multiplyScalar(I),Y.distance=$,Y.coneCos=Math.cos(P.angle),Y.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Y.decay=P.decay,i.spot[w]=Y;const j=P.shadow;if(P.map&&(i.spotLightMap[T]=P.map,T++,j.updateMatrices(P),P.castShadow&&E++),i.spotLightMatrix[w]=j.matrix,P.castShadow){const D=n.get(P);D.shadowIntensity=j.intensity,D.shadowBias=j.bias,D.shadowNormalBias=j.normalBias,D.shadowRadius=j.radius,D.shadowMapSize=j.mapSize,i.spotShadow[w]=D,i.spotShadowMap[w]=z,S++}w++}else if(P.isRectAreaLight){const Y=e.get(P);Y.color.copy(F).multiplyScalar(I),Y.halfWidth.set(P.width*.5,0,0),Y.halfHeight.set(0,P.height*.5,0),i.rectArea[x]=Y,x++}else if(P.isPointLight){const Y=e.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),Y.distance=P.distance,Y.decay=P.decay,P.castShadow){const j=P.shadow,D=n.get(P);D.shadowIntensity=j.intensity,D.shadowBias=j.bias,D.shadowNormalBias=j.normalBias,D.shadowRadius=j.radius,D.shadowMapSize=j.mapSize,D.shadowCameraNear=j.camera.near,D.shadowCameraFar=j.camera.far,i.pointShadow[g]=D,i.pointShadowMap[g]=z,i.pointShadowMatrix[g]=P.shadow.matrix,M++}i.point[g]=Y,g++}else if(P.isHemisphereLight){const Y=e.get(P);Y.skyColor.copy(P.color).multiplyScalar(I),Y.groundColor.copy(P.groundColor).multiplyScalar(I),i.hemi[d]=Y,d++}}x>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=f;const v=i.hash;(v.directionalLength!==m||v.pointLength!==g||v.spotLength!==w||v.rectAreaLength!==x||v.hemiLength!==d||v.numDirectionalShadows!==y||v.numPointShadows!==M||v.numSpotShadows!==S||v.numSpotMaps!==T||v.numLightProbes!==C)&&(i.directional.length=m,i.spot.length=w,i.rectArea.length=x,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=S+T-E,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=C,v.directionalLength=m,v.pointLength=g,v.spotLength=w,v.rectAreaLength=x,v.hemiLength=d,v.numDirectionalShadows=y,v.numPointShadows=M,v.numSpotShadows=S,v.numSpotMaps=T,v.numLightProbes=C,i.version=xw++)}function c(u,h){let p=0,f=0,m=0,g=0,w=0;const x=h.matrixWorldInverse;for(let d=0,y=u.length;d<y;d++){const M=u[d];if(M.isDirectionalLight){const S=i.directional[p];S.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(x),p++}else if(M.isSpotLight){const S=i.spot[m];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(x),S.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(x),m++}else if(M.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(x),a.identity(),s.copy(M.matrixWorld),s.premultiply(x),a.extractRotation(s),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(x),f++}else if(M.isHemisphereLight){const S=i.hemi[w];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(x),w++}}}return{setup:l,setupView:c,state:i}}function t0(t){const e=new vw(t),n=[],i=[],r=[];function s(f){p.camera=f,n.length=0,i.length=0,r.length=0}function a(f){n.push(f)}function l(f){i.push(f)}function c(f){r.push(f)}function u(){e.setup(n)}function h(f){e.setupView(n,f)}const p={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:p,setupLights:u,setupLightsView:h,pushLight:a,pushShadow:l,pushLightProbeGrid:c}}function _w(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let l;return a===void 0?(l=new t0(t),e.set(r,[l])):s>=a.length?(l=new t0(t),a.push(l)):l=a[s],l}function i(){e=new WeakMap}return{get:n,dispose:i}}const yw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Mw=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],bw=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],n0=new Lt,Ea=new X,Fu=new X;function ww(t,e,n){let i=new Gg;const r=new qe,s=new qe,a=new At,l=new ky,c=new By,u={},h=n.maxTextureSize,p={[vr]:gn,[gn]:vr,[Ai]:Ai},f=new ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:yw,fragmentShader:Sw}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new Hi;g.setAttribute("position",new xi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new vi(g,f),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cl;let d=this.type;this.render=function(E,C,v){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||E.length===0)return;this.type===f2&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Cl);const N=t.getRenderTarget(),L=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),F=t.state;F.setBlending(Li),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const I=d!==this.type;I&&C.traverse(function($){$.material&&(Array.isArray($.material)?$.material.forEach(z=>z.needsUpdate=!0):$.material.needsUpdate=!0)});for(let $=0,z=E.length;$<z;$++){const Y=E[$],j=Y.shadow;if(j===void 0){Ie("WebGLShadowMap:",Y,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);const D=j.getFrameExtents();r.multiply(D),s.copy(j.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/D.x),r.x=s.x*D.x,j.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/D.y),r.y=s.y*D.y,j.mapSize.y=s.y));const W=t.state.buffers.depth.getReversed();if(j.camera._reversedDepth=W,j.map===null||I===!0){if(j.map!==null&&(j.map.depthTexture!==null&&(j.map.depthTexture.dispose(),j.map.depthTexture=null),j.map.dispose()),this.type===Ra){if(Y.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}j.map=new mi(r.x,r.y,{format:Xr,type:Bi,minFilter:Qt,magFilter:Qt,generateMipmaps:!1}),j.map.texture.name=Y.name+".shadowMap",j.map.depthTexture=new Ys(r.x,r.y,ui),j.map.depthTexture.name=Y.name+".shadowMapDepth",j.map.depthTexture.format=zi,j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=Gt,j.map.depthTexture.magFilter=Gt}else Y.isPointLight?(j.map=new Zg(r.x),j.map.depthTexture=new Ly(r.x,gi)):(j.map=new mi(r.x,r.y),j.map.depthTexture=new Ys(r.x,r.y,gi)),j.map.depthTexture.name=Y.name+".shadowMap",j.map.depthTexture.format=zi,this.type===Cl?(j.map.depthTexture.compareFunction=W?Eh:wh,j.map.depthTexture.minFilter=Qt,j.map.depthTexture.magFilter=Qt):(j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=Gt,j.map.depthTexture.magFilter=Gt);j.camera.updateProjectionMatrix()}const q=j.map.isWebGLCubeRenderTarget?6:1;for(let ne=0;ne<q;ne++){if(j.map.isWebGLCubeRenderTarget)t.setRenderTarget(j.map,ne),t.clear();else{ne===0&&(t.setRenderTarget(j.map),t.clear());const re=j.getViewport(ne);a.set(s.x*re.x,s.y*re.y,s.x*re.z,s.y*re.w),F.viewport(a)}if(Y.isPointLight){const re=j.camera,Fe=j.matrix,Qe=Y.distance||re.far;Qe!==re.far&&(re.far=Qe,re.updateProjectionMatrix()),Ea.setFromMatrixPosition(Y.matrixWorld),re.position.copy(Ea),Fu.copy(re.position),Fu.add(Mw[ne]),re.up.copy(bw[ne]),re.lookAt(Fu),re.updateMatrixWorld(),Fe.makeTranslation(-Ea.x,-Ea.y,-Ea.z),n0.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),j._frustum.setFromProjectionMatrix(n0,re.coordinateSystem,re.reversedDepth)}else j.updateMatrices(Y);i=j.getFrustum(),S(C,v,j.camera,Y,this.type)}j.isPointLightShadow!==!0&&this.type===Ra&&y(j,v),j.needsUpdate=!1}d=this.type,x.needsUpdate=!1,t.setRenderTarget(N,L,P)};function y(E,C){const v=e.update(w);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new mi(r.x,r.y,{format:Xr,type:Bi})),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,t.setRenderTarget(E.mapPass),t.clear(),t.renderBufferDirect(C,null,v,f,w,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value=E.mapSize,m.uniforms.radius.value=E.radius,t.setRenderTarget(E.map),t.clear(),t.renderBufferDirect(C,null,v,m,w,null)}function M(E,C,v,N){let L=null;const P=v.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)L=P;else if(L=v.isPointLight===!0?c:l,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const F=L.uuid,I=C.uuid;let $=u[F];$===void 0&&($={},u[F]=$);let z=$[I];z===void 0&&(z=L.clone(),$[I]=z,C.addEventListener("dispose",T)),L=z}if(L.visible=C.visible,L.wireframe=C.wireframe,N===Ra?L.side=C.shadowSide!==null?C.shadowSide:C.side:L.side=C.shadowSide!==null?C.shadowSide:p[C.side],L.alphaMap=C.alphaMap,L.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,L.map=C.map,L.clipShadows=C.clipShadows,L.clippingPlanes=C.clippingPlanes,L.clipIntersection=C.clipIntersection,L.displacementMap=C.displacementMap,L.displacementScale=C.displacementScale,L.displacementBias=C.displacementBias,L.wireframeLinewidth=C.wireframeLinewidth,L.linewidth=C.linewidth,v.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const F=t.properties.get(L);F.light=v}return L}function S(E,C,v,N,L){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&L===Ra)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,E.matrixWorld);const I=e.update(E),$=E.material;if(Array.isArray($)){const z=I.groups;for(let Y=0,j=z.length;Y<j;Y++){const D=z[Y],W=$[D.materialIndex];if(W&&W.visible){const q=M(E,W,N,L);E.onBeforeShadow(t,E,C,v,I,q,D),t.renderBufferDirect(v,null,I,q,E,D),E.onAfterShadow(t,E,C,v,I,q,D)}}}else if($.visible){const z=M(E,$,N,L);E.onBeforeShadow(t,E,C,v,I,z,null),t.renderBufferDirect(v,null,I,z,E,null),E.onAfterShadow(t,E,C,v,I,z,null)}}const F=E.children;for(let I=0,$=F.length;I<$;I++)S(F[I],C,v,N,L)}function T(E){E.target.removeEventListener("dispose",T);for(const v in u){const N=u[v],L=E.target.uuid;L in N&&(N[L].dispose(),delete N[L])}}}function Ew(t,e){function n(){let U=!1;const fe=new At;let J=null;const me=new At(0,0,0,0);return{setMask:function(_e){J!==_e&&!U&&(t.colorMask(_e,_e,_e,_e),J=_e)},setLocked:function(_e){U=_e},setClear:function(_e,te,Ee,we,mt){mt===!0&&(_e*=we,te*=we,Ee*=we),fe.set(_e,te,Ee,we),me.equals(fe)===!1&&(t.clearColor(_e,te,Ee,we),me.copy(fe))},reset:function(){U=!1,J=null,me.set(-1,0,0,0)}}}function i(){let U=!1,fe=!1,J=null,me=null,_e=null;return{setReversed:function(te){if(fe!==te){const Ee=e.get("EXT_clip_control");te?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT),fe=te;const we=_e;_e=null,this.setClear(we)}},getReversed:function(){return fe},setTest:function(te){te?se(t.DEPTH_TEST):De(t.DEPTH_TEST)},setMask:function(te){J!==te&&!U&&(t.depthMask(te),J=te)},setFunc:function(te){if(fe&&(te=W2[te]),me!==te){switch(te){case Id:t.depthFunc(t.NEVER);break;case Ud:t.depthFunc(t.ALWAYS);break;case Fd:t.depthFunc(t.LESS);break;case $s:t.depthFunc(t.LEQUAL);break;case Od:t.depthFunc(t.EQUAL);break;case kd:t.depthFunc(t.GEQUAL);break;case Bd:t.depthFunc(t.GREATER);break;case zd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}me=te}},setLocked:function(te){U=te},setClear:function(te){_e!==te&&(_e=te,fe&&(te=1-te),t.clearDepth(te))},reset:function(){U=!1,J=null,me=null,_e=null,fe=!1}}}function r(){let U=!1,fe=null,J=null,me=null,_e=null,te=null,Ee=null,we=null,mt=null;return{setTest:function(ot){U||(ot?se(t.STENCIL_TEST):De(t.STENCIL_TEST))},setMask:function(ot){fe!==ot&&!U&&(t.stencilMask(ot),fe=ot)},setFunc:function(ot,vn,_n){(J!==ot||me!==vn||_e!==_n)&&(t.stencilFunc(ot,vn,_n),J=ot,me=vn,_e=_n)},setOp:function(ot,vn,_n){(te!==ot||Ee!==vn||we!==_n)&&(t.stencilOp(ot,vn,_n),te=ot,Ee=vn,we=_n)},setLocked:function(ot){U=ot},setClear:function(ot){mt!==ot&&(t.clearStencil(ot),mt=ot)},reset:function(){U=!1,fe=null,J=null,me=null,_e=null,te=null,Ee=null,we=null,mt=null}}}const s=new n,a=new i,l=new r,c=new WeakMap,u=new WeakMap;let h={},p={},f={},m=new WeakMap,g=[],w=null,x=!1,d=null,y=null,M=null,S=null,T=null,E=null,C=null,v=new st(0,0,0),N=0,L=!1,P=null,F=null,I=null,$=null,z=null;const Y=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,D=0;const W=t.getParameter(t.VERSION);W.indexOf("WebGL")!==-1?(D=parseFloat(/^WebGL (\d)/.exec(W)[1]),j=D>=1):W.indexOf("OpenGL ES")!==-1&&(D=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),j=D>=2);let q=null,ne={};const re=t.getParameter(t.SCISSOR_BOX),Fe=t.getParameter(t.VIEWPORT),Qe=new At().fromArray(re),Ge=new At().fromArray(Fe);function Q(U,fe,J,me){const _e=new Uint8Array(4),te=t.createTexture();t.bindTexture(U,te),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ee=0;Ee<J;Ee++)U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?t.texImage3D(fe,0,t.RGBA,1,1,me,0,t.RGBA,t.UNSIGNED_BYTE,_e):t.texImage2D(fe+Ee,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,_e);return te}const de={};de[t.TEXTURE_2D]=Q(t.TEXTURE_2D,t.TEXTURE_2D,1),de[t.TEXTURE_CUBE_MAP]=Q(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[t.TEXTURE_2D_ARRAY]=Q(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),de[t.TEXTURE_3D]=Q(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),l.setClear(0),se(t.DEPTH_TEST),a.setFunc($s),St(!1),vt(im),se(t.CULL_FACE),Ye(Li);function se(U){h[U]!==!0&&(t.enable(U),h[U]=!0)}function De(U){h[U]!==!1&&(t.disable(U),h[U]=!1)}function ke(U,fe){return f[U]!==fe?(t.bindFramebuffer(U,fe),f[U]=fe,U===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=fe),U===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=fe),!0):!1}function Re(U,fe){let J=g,me=!1;if(U){J=m.get(fe),J===void 0&&(J=[],m.set(fe,J));const _e=U.textures;if(J.length!==_e.length||J[0]!==t.COLOR_ATTACHMENT0){for(let te=0,Ee=_e.length;te<Ee;te++)J[te]=t.COLOR_ATTACHMENT0+te;J.length=_e.length,me=!0}}else J[0]!==t.BACK&&(J[0]=t.BACK,me=!0);me&&t.drawBuffers(J)}function ie(U){return w!==U?(t.useProgram(U),w=U,!0):!1}const He={[Pr]:t.FUNC_ADD,[p2]:t.FUNC_SUBTRACT,[m2]:t.FUNC_REVERSE_SUBTRACT};He[x2]=t.MIN,He[g2]=t.MAX;const nt={[v2]:t.ZERO,[_2]:t.ONE,[y2]:t.SRC_COLOR,[Ld]:t.SRC_ALPHA,[T2]:t.SRC_ALPHA_SATURATE,[w2]:t.DST_COLOR,[M2]:t.DST_ALPHA,[S2]:t.ONE_MINUS_SRC_COLOR,[Dd]:t.ONE_MINUS_SRC_ALPHA,[E2]:t.ONE_MINUS_DST_COLOR,[b2]:t.ONE_MINUS_DST_ALPHA,[A2]:t.CONSTANT_COLOR,[C2]:t.ONE_MINUS_CONSTANT_COLOR,[N2]:t.CONSTANT_ALPHA,[R2]:t.ONE_MINUS_CONSTANT_ALPHA};function Ye(U,fe,J,me,_e,te,Ee,we,mt,ot){if(U===Li){x===!0&&(De(t.BLEND),x=!1);return}if(x===!1&&(se(t.BLEND),x=!0),U!==h2){if(U!==d||ot!==L){if((y!==Pr||T!==Pr)&&(t.blendEquation(t.FUNC_ADD),y=Pr,T=Pr),ot)switch(U){case Os:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case rm:t.blendFunc(t.ONE,t.ONE);break;case sm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case am:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Je("WebGLState: Invalid blending: ",U);break}else switch(U){case Os:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case rm:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case sm:Je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case am:Je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Je("WebGLState: Invalid blending: ",U);break}M=null,S=null,E=null,C=null,v.set(0,0,0),N=0,d=U,L=ot}return}_e=_e||fe,te=te||J,Ee=Ee||me,(fe!==y||_e!==T)&&(t.blendEquationSeparate(He[fe],He[_e]),y=fe,T=_e),(J!==M||me!==S||te!==E||Ee!==C)&&(t.blendFuncSeparate(nt[J],nt[me],nt[te],nt[Ee]),M=J,S=me,E=te,C=Ee),(we.equals(v)===!1||mt!==N)&&(t.blendColor(we.r,we.g,we.b,mt),v.copy(we),N=mt),d=U,L=!1}function je(U,fe){U.side===Ai?De(t.CULL_FACE):se(t.CULL_FACE);let J=U.side===gn;fe&&(J=!J),St(J),U.blending===Os&&U.transparent===!1?Ye(Li):Ye(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);const me=U.stencilWrite;l.setTest(me),me&&(l.setMask(U.stencilWriteMask),l.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),l.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Et(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?se(t.SAMPLE_ALPHA_TO_COVERAGE):De(t.SAMPLE_ALPHA_TO_COVERAGE)}function St(U){P!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),P=U)}function vt(U){U!==u2?(se(t.CULL_FACE),U!==F&&(U===im?t.cullFace(t.BACK):U===d2?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):De(t.CULL_FACE),F=U}function Ct(U){U!==I&&(j&&t.lineWidth(U),I=U)}function Et(U,fe,J){U?(se(t.POLYGON_OFFSET_FILL),($!==fe||z!==J)&&($=fe,z=J,a.getReversed()&&(fe=-fe),t.polygonOffset(fe,J))):De(t.POLYGON_OFFSET_FILL)}function ht(U){U?se(t.SCISSOR_TEST):De(t.SCISSOR_TEST)}function pt(U){U===void 0&&(U=t.TEXTURE0+Y-1),q!==U&&(t.activeTexture(U),q=U)}function k(U,fe,J){J===void 0&&(q===null?J=t.TEXTURE0+Y-1:J=q);let me=ne[J];me===void 0&&(me={type:void 0,texture:void 0},ne[J]=me),(me.type!==U||me.texture!==fe)&&(q!==J&&(t.activeTexture(J),q=J),t.bindTexture(U,fe||de[U]),me.type=U,me.texture=fe)}function Ht(){const U=ne[q];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function tt(){try{t.compressedTexImage2D(...arguments)}catch(U){Je("WebGLState:",U)}}function A(){try{t.compressedTexImage3D(...arguments)}catch(U){Je("WebGLState:",U)}}function _(){try{t.texSubImage2D(...arguments)}catch(U){Je("WebGLState:",U)}}function H(){try{t.texSubImage3D(...arguments)}catch(U){Je("WebGLState:",U)}}function G(){try{t.compressedTexSubImage2D(...arguments)}catch(U){Je("WebGLState:",U)}}function K(){try{t.compressedTexSubImage3D(...arguments)}catch(U){Je("WebGLState:",U)}}function ue(){try{t.texStorage2D(...arguments)}catch(U){Je("WebGLState:",U)}}function he(){try{t.texStorage3D(...arguments)}catch(U){Je("WebGLState:",U)}}function Z(){try{t.texImage2D(...arguments)}catch(U){Je("WebGLState:",U)}}function ee(){try{t.texImage3D(...arguments)}catch(U){Je("WebGLState:",U)}}function pe(U){return p[U]!==void 0?p[U]:t.getParameter(U)}function Ae(U,fe){p[U]!==fe&&(t.pixelStorei(U,fe),p[U]=fe)}function ge(U){Qe.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),Qe.copy(U))}function xe(U){Ge.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),Ge.copy(U))}function Ne(U,fe){let J=u.get(fe);J===void 0&&(J=new WeakMap,u.set(fe,J));let me=J.get(U);me===void 0&&(me=t.getUniformBlockIndex(fe,U.name),J.set(U,me))}function Pe(U,fe){const me=u.get(fe).get(U);c.get(fe)!==me&&(t.uniformBlockBinding(fe,me,U.__bindingPointIndex),c.set(fe,me))}function Oe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),h={},p={},q=null,ne={},f={},m=new WeakMap,g=[],w=null,x=!1,d=null,y=null,M=null,S=null,T=null,E=null,C=null,v=new st(0,0,0),N=0,L=!1,P=null,F=null,I=null,$=null,z=null,Qe.set(0,0,t.canvas.width,t.canvas.height),Ge.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),l.reset()}return{buffers:{color:s,depth:a,stencil:l},enable:se,disable:De,bindFramebuffer:ke,drawBuffers:Re,useProgram:ie,setBlending:Ye,setMaterial:je,setFlipSided:St,setCullFace:vt,setLineWidth:Ct,setPolygonOffset:Et,setScissorTest:ht,activeTexture:pt,bindTexture:k,unbindTexture:Ht,compressedTexImage2D:tt,compressedTexImage3D:A,texImage2D:Z,texImage3D:ee,pixelStorei:Ae,getParameter:pe,updateUBOMapping:Ne,uniformBlockBinding:Pe,texStorage2D:ue,texStorage3D:he,texSubImage2D:_,texSubImage3D:H,compressedTexSubImage2D:G,compressedTexSubImage3D:K,scissor:ge,viewport:xe,reset:Oe}}function Tw(t,e,n,i,r,s,a){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new qe,h=new WeakMap,p=new Set;let f;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(A,_){return g?new OffscreenCanvas(A,_):dc("canvas")}function x(A,_,H){let G=1;const K=tt(A);if((K.width>H||K.height>H)&&(G=H/Math.max(K.width,K.height)),G<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const ue=Math.floor(G*K.width),he=Math.floor(G*K.height);f===void 0&&(f=w(ue,he));const Z=_?w(ue,he):f;return Z.width=ue,Z.height=he,Z.getContext("2d").drawImage(A,0,0,ue,he),Ie("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+ue+"x"+he+")."),Z}else return"data"in A&&Ie("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),A;return A}function d(A){return A.generateMipmaps}function y(A){t.generateMipmap(A)}function M(A){return A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?t.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function S(A,_,H,G,K,ue=!1){if(A!==null){if(t[A]!==void 0)return t[A];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let he;G&&(he=e.get("EXT_texture_norm16"),he||Ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=_;if(_===t.RED&&(H===t.FLOAT&&(Z=t.R32F),H===t.HALF_FLOAT&&(Z=t.R16F),H===t.UNSIGNED_BYTE&&(Z=t.R8),H===t.UNSIGNED_SHORT&&he&&(Z=he.R16_EXT),H===t.SHORT&&he&&(Z=he.R16_SNORM_EXT)),_===t.RED_INTEGER&&(H===t.UNSIGNED_BYTE&&(Z=t.R8UI),H===t.UNSIGNED_SHORT&&(Z=t.R16UI),H===t.UNSIGNED_INT&&(Z=t.R32UI),H===t.BYTE&&(Z=t.R8I),H===t.SHORT&&(Z=t.R16I),H===t.INT&&(Z=t.R32I)),_===t.RG&&(H===t.FLOAT&&(Z=t.RG32F),H===t.HALF_FLOAT&&(Z=t.RG16F),H===t.UNSIGNED_BYTE&&(Z=t.RG8),H===t.UNSIGNED_SHORT&&he&&(Z=he.RG16_EXT),H===t.SHORT&&he&&(Z=he.RG16_SNORM_EXT)),_===t.RG_INTEGER&&(H===t.UNSIGNED_BYTE&&(Z=t.RG8UI),H===t.UNSIGNED_SHORT&&(Z=t.RG16UI),H===t.UNSIGNED_INT&&(Z=t.RG32UI),H===t.BYTE&&(Z=t.RG8I),H===t.SHORT&&(Z=t.RG16I),H===t.INT&&(Z=t.RG32I)),_===t.RGB_INTEGER&&(H===t.UNSIGNED_BYTE&&(Z=t.RGB8UI),H===t.UNSIGNED_SHORT&&(Z=t.RGB16UI),H===t.UNSIGNED_INT&&(Z=t.RGB32UI),H===t.BYTE&&(Z=t.RGB8I),H===t.SHORT&&(Z=t.RGB16I),H===t.INT&&(Z=t.RGB32I)),_===t.RGBA_INTEGER&&(H===t.UNSIGNED_BYTE&&(Z=t.RGBA8UI),H===t.UNSIGNED_SHORT&&(Z=t.RGBA16UI),H===t.UNSIGNED_INT&&(Z=t.RGBA32UI),H===t.BYTE&&(Z=t.RGBA8I),H===t.SHORT&&(Z=t.RGBA16I),H===t.INT&&(Z=t.RGBA32I)),_===t.RGB&&(H===t.UNSIGNED_SHORT&&he&&(Z=he.RGB16_EXT),H===t.SHORT&&he&&(Z=he.RGB16_SNORM_EXT),H===t.UNSIGNED_INT_5_9_9_9_REV&&(Z=t.RGB9_E5),H===t.UNSIGNED_INT_10F_11F_11F_REV&&(Z=t.R11F_G11F_B10F)),_===t.RGBA){const ee=ue?cc:Ze.getTransfer(K);H===t.FLOAT&&(Z=t.RGBA32F),H===t.HALF_FLOAT&&(Z=t.RGBA16F),H===t.UNSIGNED_BYTE&&(Z=ee===lt?t.SRGB8_ALPHA8:t.RGBA8),H===t.UNSIGNED_SHORT&&he&&(Z=he.RGBA16_EXT),H===t.SHORT&&he&&(Z=he.RGBA16_SNORM_EXT),H===t.UNSIGNED_SHORT_4_4_4_4&&(Z=t.RGBA4),H===t.UNSIGNED_SHORT_5_5_5_1&&(Z=t.RGB5_A1)}return(Z===t.R16F||Z===t.R32F||Z===t.RG16F||Z===t.RG32F||Z===t.RGBA16F||Z===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function T(A,_){let H;return A?_===null||_===gi||_===oo?H=t.DEPTH24_STENCIL8:_===ui?H=t.DEPTH32F_STENCIL8:_===ao&&(H=t.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===gi||_===oo?H=t.DEPTH_COMPONENT24:_===ui?H=t.DEPTH_COMPONENT32F:_===ao&&(H=t.DEPTH_COMPONENT16),H}function E(A,_){return d(A)===!0||A.isFramebufferTexture&&A.minFilter!==Gt&&A.minFilter!==Qt?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function C(A){const _=A.target;_.removeEventListener("dispose",C),N(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&p.delete(_)}function v(A){const _=A.target;_.removeEventListener("dispose",v),P(_)}function N(A){const _=i.get(A);if(_.__webglInit===void 0)return;const H=A.source,G=m.get(H);if(G){const K=G[_.__cacheKey];K.usedTimes--,K.usedTimes===0&&L(A),Object.keys(G).length===0&&m.delete(H)}i.remove(A)}function L(A){const _=i.get(A);t.deleteTexture(_.__webglTexture);const H=A.source,G=m.get(H);delete G[_.__cacheKey],a.memory.textures--}function P(A){const _=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(_.__webglFramebuffer[G]))for(let K=0;K<_.__webglFramebuffer[G].length;K++)t.deleteFramebuffer(_.__webglFramebuffer[G][K]);else t.deleteFramebuffer(_.__webglFramebuffer[G]);_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer[G])}else{if(Array.isArray(_.__webglFramebuffer))for(let G=0;G<_.__webglFramebuffer.length;G++)t.deleteFramebuffer(_.__webglFramebuffer[G]);else t.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&t.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let G=0;G<_.__webglColorRenderbuffer.length;G++)_.__webglColorRenderbuffer[G]&&t.deleteRenderbuffer(_.__webglColorRenderbuffer[G]);_.__webglDepthRenderbuffer&&t.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const H=A.textures;for(let G=0,K=H.length;G<K;G++){const ue=i.get(H[G]);ue.__webglTexture&&(t.deleteTexture(ue.__webglTexture),a.memory.textures--),i.remove(H[G])}i.remove(A)}let F=0;function I(){F=0}function $(){return F}function z(A){F=A}function Y(){const A=F;return A>=r.maxTextures&&Ie("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),F+=1,A}function j(A){const _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function D(A,_){const H=i.get(A);if(A.isVideoTexture&&k(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&H.__version!==A.version){const G=A.image;if(G===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{De(H,A,_);return}}else A.isExternalTexture&&(H.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,H.__webglTexture,t.TEXTURE0+_)}function W(A,_){const H=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){De(H,A,_);return}else A.isExternalTexture&&(H.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,H.__webglTexture,t.TEXTURE0+_)}function q(A,_){const H=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){De(H,A,_);return}n.bindTexture(t.TEXTURE_3D,H.__webglTexture,t.TEXTURE0+_)}function ne(A,_){const H=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&H.__version!==A.version){ke(H,A,_);return}n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture,t.TEXTURE0+_)}const re={[Vd]:t.REPEAT,[Ri]:t.CLAMP_TO_EDGE,[Hd]:t.MIRRORED_REPEAT},Fe={[Gt]:t.NEAREST,[D2]:t.NEAREST_MIPMAP_NEAREST,[Go]:t.NEAREST_MIPMAP_LINEAR,[Qt]:t.LINEAR,[lu]:t.LINEAR_MIPMAP_NEAREST,[Fr]:t.LINEAR_MIPMAP_LINEAR},Qe={[F2]:t.NEVER,[V2]:t.ALWAYS,[O2]:t.LESS,[wh]:t.LEQUAL,[k2]:t.EQUAL,[Eh]:t.GEQUAL,[B2]:t.GREATER,[z2]:t.NOTEQUAL};function Ge(A,_){if(_.type===ui&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Qt||_.magFilter===lu||_.magFilter===Go||_.magFilter===Fr||_.minFilter===Qt||_.minFilter===lu||_.minFilter===Go||_.minFilter===Fr)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(A,t.TEXTURE_WRAP_S,re[_.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,re[_.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,re[_.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,Fe[_.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,Fe[_.minFilter]),_.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,Qe[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Gt||_.minFilter!==Go&&_.minFilter!==Fr||_.type===ui&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Q(A,_){let H=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",C));const G=_.source;let K=m.get(G);K===void 0&&(K={},m.set(G,K));const ue=j(_);if(ue!==A.__cacheKey){K[ue]===void 0&&(K[ue]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,H=!0),K[ue].usedTimes++;const he=K[A.__cacheKey];he!==void 0&&(K[A.__cacheKey].usedTimes--,he.usedTimes===0&&L(_)),A.__cacheKey=ue,A.__webglTexture=K[ue].texture}return H}function de(A,_,H){return Math.floor(Math.floor(A/H)/_)}function se(A,_,H,G){const ue=A.updateRanges;if(ue.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,_.width,_.height,H,G,_.data);else{ue.sort((Ae,ge)=>Ae.start-ge.start);let he=0;for(let Ae=1;Ae<ue.length;Ae++){const ge=ue[he],xe=ue[Ae],Ne=ge.start+ge.count,Pe=de(xe.start,_.width,4),Oe=de(ge.start,_.width,4);xe.start<=Ne+1&&Pe===Oe&&de(xe.start+xe.count-1,_.width,4)===Pe?ge.count=Math.max(ge.count,xe.start+xe.count-ge.start):(++he,ue[he]=xe)}ue.length=he+1;const Z=n.getParameter(t.UNPACK_ROW_LENGTH),ee=n.getParameter(t.UNPACK_SKIP_PIXELS),pe=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,_.width);for(let Ae=0,ge=ue.length;Ae<ge;Ae++){const xe=ue[Ae],Ne=Math.floor(xe.start/4),Pe=Math.ceil(xe.count/4),Oe=Ne%_.width,U=Math.floor(Ne/_.width),fe=Pe,J=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Oe),n.pixelStorei(t.UNPACK_SKIP_ROWS,U),n.texSubImage2D(t.TEXTURE_2D,0,Oe,U,fe,J,H,G,_.data)}A.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,Z),n.pixelStorei(t.UNPACK_SKIP_PIXELS,ee),n.pixelStorei(t.UNPACK_SKIP_ROWS,pe)}}function De(A,_,H){let G=t.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(G=t.TEXTURE_2D_ARRAY),_.isData3DTexture&&(G=t.TEXTURE_3D);const K=Q(A,_),ue=_.source;n.bindTexture(G,A.__webglTexture,t.TEXTURE0+H);const he=i.get(ue);if(ue.version!==he.__version||K===!0){if(n.activeTexture(t.TEXTURE0+H),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const J=Ze.getPrimaries(Ze.workingColorSpace),me=_.colorSpace===ir?null:Ze.getPrimaries(_.colorSpace),_e=_.colorSpace===ir||J===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e)}n.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment);let ee=x(_.image,!1,r.maxTextureSize);ee=Ht(_,ee);const pe=s.convert(_.format,_.colorSpace),Ae=s.convert(_.type);let ge=S(_.internalFormat,pe,Ae,_.normalized,_.colorSpace,_.isVideoTexture);Ge(G,_);let xe;const Ne=_.mipmaps,Pe=_.isVideoTexture!==!0,Oe=he.__version===void 0||K===!0,U=ue.dataReady,fe=E(_,ee);if(_.isDepthTexture)ge=T(_.format===Or,_.type),Oe&&(Pe?n.texStorage2D(t.TEXTURE_2D,1,ge,ee.width,ee.height):n.texImage2D(t.TEXTURE_2D,0,ge,ee.width,ee.height,0,pe,Ae,null));else if(_.isDataTexture)if(Ne.length>0){Pe&&Oe&&n.texStorage2D(t.TEXTURE_2D,fe,ge,Ne[0].width,Ne[0].height);for(let J=0,me=Ne.length;J<me;J++)xe=Ne[J],Pe?U&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,xe.width,xe.height,pe,Ae,xe.data):n.texImage2D(t.TEXTURE_2D,J,ge,xe.width,xe.height,0,pe,Ae,xe.data);_.generateMipmaps=!1}else Pe?(Oe&&n.texStorage2D(t.TEXTURE_2D,fe,ge,ee.width,ee.height),U&&se(_,ee,pe,Ae)):n.texImage2D(t.TEXTURE_2D,0,ge,ee.width,ee.height,0,pe,Ae,ee.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Pe&&Oe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,ge,Ne[0].width,Ne[0].height,ee.depth);for(let J=0,me=Ne.length;J<me;J++)if(xe=Ne[J],_.format!==Kn)if(pe!==null)if(Pe){if(U)if(_.layerUpdates.size>0){const _e=Dm(xe.width,xe.height,_.format,_.type);for(const te of _.layerUpdates){const Ee=xe.data.subarray(te*_e/xe.data.BYTES_PER_ELEMENT,(te+1)*_e/xe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,te,xe.width,xe.height,1,pe,Ee)}_.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,0,xe.width,xe.height,ee.depth,pe,xe.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,J,ge,xe.width,xe.height,ee.depth,0,xe.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pe?U&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,0,xe.width,xe.height,ee.depth,pe,Ae,xe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,J,ge,xe.width,xe.height,ee.depth,0,pe,Ae,xe.data)}else{Pe&&Oe&&n.texStorage2D(t.TEXTURE_2D,fe,ge,Ne[0].width,Ne[0].height);for(let J=0,me=Ne.length;J<me;J++)xe=Ne[J],_.format!==Kn?pe!==null?Pe?U&&n.compressedTexSubImage2D(t.TEXTURE_2D,J,0,0,xe.width,xe.height,pe,xe.data):n.compressedTexImage2D(t.TEXTURE_2D,J,ge,xe.width,xe.height,0,xe.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?U&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,xe.width,xe.height,pe,Ae,xe.data):n.texImage2D(t.TEXTURE_2D,J,ge,xe.width,xe.height,0,pe,Ae,xe.data)}else if(_.isDataArrayTexture)if(Pe){if(Oe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,ge,ee.width,ee.height,ee.depth),U)if(_.layerUpdates.size>0){const J=Dm(ee.width,ee.height,_.format,_.type);for(const me of _.layerUpdates){const _e=ee.data.subarray(me*J/ee.data.BYTES_PER_ELEMENT,(me+1)*J/ee.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,me,ee.width,ee.height,1,pe,Ae,_e)}_.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,pe,Ae,ee.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ge,ee.width,ee.height,ee.depth,0,pe,Ae,ee.data);else if(_.isData3DTexture)Pe?(Oe&&n.texStorage3D(t.TEXTURE_3D,fe,ge,ee.width,ee.height,ee.depth),U&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,pe,Ae,ee.data)):n.texImage3D(t.TEXTURE_3D,0,ge,ee.width,ee.height,ee.depth,0,pe,Ae,ee.data);else if(_.isFramebufferTexture){if(Oe)if(Pe)n.texStorage2D(t.TEXTURE_2D,fe,ge,ee.width,ee.height);else{let J=ee.width,me=ee.height;for(let _e=0;_e<fe;_e++)n.texImage2D(t.TEXTURE_2D,_e,ge,J,me,0,pe,Ae,null),J>>=1,me>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in t){const J=t.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),ee.parentNode!==J){J.appendChild(ee),p.add(_),J.onpaint=me=>{const _e=me.changedElements;for(const te of p)_e.includes(te.image)&&(te.needsUpdate=!0)},J.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,ee);else{const _e=t.RGBA,te=t.RGBA,Ee=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,_e,te,Ee,ee)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Ne.length>0){if(Pe&&Oe){const J=tt(Ne[0]);n.texStorage2D(t.TEXTURE_2D,fe,ge,J.width,J.height)}for(let J=0,me=Ne.length;J<me;J++)xe=Ne[J],Pe?U&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,pe,Ae,xe):n.texImage2D(t.TEXTURE_2D,J,ge,pe,Ae,xe);_.generateMipmaps=!1}else if(Pe){if(Oe){const J=tt(ee);n.texStorage2D(t.TEXTURE_2D,fe,ge,J.width,J.height)}U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,pe,Ae,ee)}else n.texImage2D(t.TEXTURE_2D,0,ge,pe,Ae,ee);d(_)&&y(G),he.__version=ue.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function ke(A,_,H){if(_.image.length!==6)return;const G=Q(A,_),K=_.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+H);const ue=i.get(K);if(K.version!==ue.__version||G===!0){n.activeTexture(t.TEXTURE0+H);const he=Ze.getPrimaries(Ze.workingColorSpace),Z=_.colorSpace===ir?null:Ze.getPrimaries(_.colorSpace),ee=_.colorSpace===ir||he===Z?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);const pe=_.isCompressedTexture||_.image[0].isCompressedTexture,Ae=_.image[0]&&_.image[0].isDataTexture,ge=[];for(let te=0;te<6;te++)!pe&&!Ae?ge[te]=x(_.image[te],!0,r.maxCubemapSize):ge[te]=Ae?_.image[te].image:_.image[te],ge[te]=Ht(_,ge[te]);const xe=ge[0],Ne=s.convert(_.format,_.colorSpace),Pe=s.convert(_.type),Oe=S(_.internalFormat,Ne,Pe,_.normalized,_.colorSpace),U=_.isVideoTexture!==!0,fe=ue.__version===void 0||G===!0,J=K.dataReady;let me=E(_,xe);Ge(t.TEXTURE_CUBE_MAP,_);let _e;if(pe){U&&fe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,me,Oe,xe.width,xe.height);for(let te=0;te<6;te++){_e=ge[te].mipmaps;for(let Ee=0;Ee<_e.length;Ee++){const we=_e[Ee];_.format!==Kn?Ne!==null?U?J&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee,0,0,we.width,we.height,Ne,we.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee,Oe,we.width,we.height,0,we.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee,0,0,we.width,we.height,Ne,Pe,we.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee,Oe,we.width,we.height,0,Ne,Pe,we.data)}}}else{if(_e=_.mipmaps,U&&fe){_e.length>0&&me++;const te=tt(ge[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,me,Oe,te.width,te.height)}for(let te=0;te<6;te++)if(Ae){U?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ge[te].width,ge[te].height,Ne,Pe,ge[te].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Oe,ge[te].width,ge[te].height,0,Ne,Pe,ge[te].data);for(let Ee=0;Ee<_e.length;Ee++){const mt=_e[Ee].image[te].image;U?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee+1,0,0,mt.width,mt.height,Ne,Pe,mt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee+1,Oe,mt.width,mt.height,0,Ne,Pe,mt.data)}}else{U?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ne,Pe,ge[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Oe,Ne,Pe,ge[te]);for(let Ee=0;Ee<_e.length;Ee++){const we=_e[Ee];U?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee+1,0,0,Ne,Pe,we.image[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee+1,Oe,Ne,Pe,we.image[te])}}}d(_)&&y(t.TEXTURE_CUBE_MAP),ue.__version=K.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function Re(A,_,H,G,K,ue){const he=s.convert(H.format,H.colorSpace),Z=s.convert(H.type),ee=S(H.internalFormat,he,Z,H.normalized,H.colorSpace),pe=i.get(_),Ae=i.get(H);if(Ae.__renderTarget=_,!pe.__hasExternalTextures){const ge=Math.max(1,_.width>>ue),xe=Math.max(1,_.height>>ue);K===t.TEXTURE_3D||K===t.TEXTURE_2D_ARRAY?n.texImage3D(K,ue,ee,ge,xe,_.depth,0,he,Z,null):n.texImage2D(K,ue,ee,ge,xe,0,he,Z,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),pt(_)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,G,K,Ae.__webglTexture,0,ht(_)):(K===t.TEXTURE_2D||K>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,G,K,Ae.__webglTexture,ue),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ie(A,_,H){if(t.bindRenderbuffer(t.RENDERBUFFER,A),_.depthBuffer){const G=_.depthTexture,K=G&&G.isDepthTexture?G.type:null,ue=T(_.stencilBuffer,K),he=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;pt(_)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ht(_),ue,_.width,_.height):H?t.renderbufferStorageMultisample(t.RENDERBUFFER,ht(_),ue,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,ue,_.width,_.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,he,t.RENDERBUFFER,A)}else{const G=_.textures;for(let K=0;K<G.length;K++){const ue=G[K],he=s.convert(ue.format,ue.colorSpace),Z=s.convert(ue.type),ee=S(ue.internalFormat,he,Z,ue.normalized,ue.colorSpace);pt(_)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ht(_),ee,_.width,_.height):H?t.renderbufferStorageMultisample(t.RENDERBUFFER,ht(_),ee,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,ee,_.width,_.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function He(A,_,H){const G=_.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const K=i.get(_.depthTexture);if(K.__renderTarget=_,(!K.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),G){if(K.__webglInit===void 0&&(K.__webglInit=!0,_.depthTexture.addEventListener("dispose",C)),K.__webglTexture===void 0){K.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,K.__webglTexture),Ge(t.TEXTURE_CUBE_MAP,_.depthTexture);const pe=s.convert(_.depthTexture.format),Ae=s.convert(_.depthTexture.type);let ge;_.depthTexture.format===zi?ge=t.DEPTH_COMPONENT24:_.depthTexture.format===Or&&(ge=t.DEPTH24_STENCIL8);for(let xe=0;xe<6;xe++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ge,_.width,_.height,0,pe,Ae,null)}}else D(_.depthTexture,0);const ue=K.__webglTexture,he=ht(_),Z=G?t.TEXTURE_CUBE_MAP_POSITIVE_X+H:t.TEXTURE_2D,ee=_.depthTexture.format===Or?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(_.depthTexture.format===zi)pt(_)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,Z,ue,0,he):t.framebufferTexture2D(t.FRAMEBUFFER,ee,Z,ue,0);else if(_.depthTexture.format===Or)pt(_)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,Z,ue,0,he):t.framebufferTexture2D(t.FRAMEBUFFER,ee,Z,ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function nt(A){const _=i.get(A),H=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){const G=A.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),G){const K=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,G.removeEventListener("dispose",K)};G.addEventListener("dispose",K),_.__depthDisposeCallback=K}_.__boundDepthTexture=G}if(A.depthTexture&&!_.__autoAllocateDepthBuffer)if(H)for(let G=0;G<6;G++)He(_.__webglFramebuffer[G],A,G);else{const G=A.texture.mipmaps;G&&G.length>0?He(_.__webglFramebuffer[0],A,0):He(_.__webglFramebuffer,A,0)}else if(H){_.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[G]),_.__webglDepthbuffer[G]===void 0)_.__webglDepthbuffer[G]=t.createRenderbuffer(),ie(_.__webglDepthbuffer[G],A,!1);else{const K=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=_.__webglDepthbuffer[G];t.bindRenderbuffer(t.RENDERBUFFER,ue),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,ue)}}else{const G=A.texture.mipmaps;if(G&&G.length>0?n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=t.createRenderbuffer(),ie(_.__webglDepthbuffer,A,!1);else{const K=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=_.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ue),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,ue)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ye(A,_,H){const G=i.get(A);_!==void 0&&Re(G.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),H!==void 0&&nt(A)}function je(A){const _=A.texture,H=i.get(A),G=i.get(_);A.addEventListener("dispose",v);const K=A.textures,ue=A.isWebGLCubeRenderTarget===!0,he=K.length>1;if(he||(G.__webglTexture===void 0&&(G.__webglTexture=t.createTexture()),G.__version=_.version,a.memory.textures++),ue){H.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(_.mipmaps&&_.mipmaps.length>0){H.__webglFramebuffer[Z]=[];for(let ee=0;ee<_.mipmaps.length;ee++)H.__webglFramebuffer[Z][ee]=t.createFramebuffer()}else H.__webglFramebuffer[Z]=t.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){H.__webglFramebuffer=[];for(let Z=0;Z<_.mipmaps.length;Z++)H.__webglFramebuffer[Z]=t.createFramebuffer()}else H.__webglFramebuffer=t.createFramebuffer();if(he)for(let Z=0,ee=K.length;Z<ee;Z++){const pe=i.get(K[Z]);pe.__webglTexture===void 0&&(pe.__webglTexture=t.createTexture(),a.memory.textures++)}if(A.samples>0&&pt(A)===!1){H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Z=0;Z<K.length;Z++){const ee=K[Z];H.__webglColorRenderbuffer[Z]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,H.__webglColorRenderbuffer[Z]);const pe=s.convert(ee.format,ee.colorSpace),Ae=s.convert(ee.type),ge=S(ee.internalFormat,pe,Ae,ee.normalized,ee.colorSpace,A.isXRRenderTarget===!0),xe=ht(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,xe,ge,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Z,t.RENDERBUFFER,H.__webglColorRenderbuffer[Z])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),ie(H.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ue){n.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture),Ge(t.TEXTURE_CUBE_MAP,_);for(let Z=0;Z<6;Z++)if(_.mipmaps&&_.mipmaps.length>0)for(let ee=0;ee<_.mipmaps.length;ee++)Re(H.__webglFramebuffer[Z][ee],A,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ee);else Re(H.__webglFramebuffer[Z],A,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);d(_)&&y(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(he){for(let Z=0,ee=K.length;Z<ee;Z++){const pe=K[Z],Ae=i.get(pe);let ge=t.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ge=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ge,Ae.__webglTexture),Ge(ge,pe),Re(H.__webglFramebuffer,A,pe,t.COLOR_ATTACHMENT0+Z,ge,0),d(pe)&&y(ge)}n.unbindTexture()}else{let Z=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Z=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Z,G.__webglTexture),Ge(Z,_),_.mipmaps&&_.mipmaps.length>0)for(let ee=0;ee<_.mipmaps.length;ee++)Re(H.__webglFramebuffer[ee],A,_,t.COLOR_ATTACHMENT0,Z,ee);else Re(H.__webglFramebuffer,A,_,t.COLOR_ATTACHMENT0,Z,0);d(_)&&y(Z),n.unbindTexture()}A.depthBuffer&&nt(A)}function St(A){const _=A.textures;for(let H=0,G=_.length;H<G;H++){const K=_[H];if(d(K)){const ue=M(A),he=i.get(K).__webglTexture;n.bindTexture(ue,he),y(ue),n.unbindTexture()}}}const vt=[],Ct=[];function Et(A){if(A.samples>0){if(pt(A)===!1){const _=A.textures,H=A.width,G=A.height;let K=t.COLOR_BUFFER_BIT;const ue=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,he=i.get(A),Z=_.length>1;if(Z)for(let pe=0;pe<_.length;pe++)n.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer);const ee=A.texture.mipmaps;ee&&ee.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let pe=0;pe<_.length;pe++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(K|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(K|=t.STENCIL_BUFFER_BIT)),Z){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,he.__webglColorRenderbuffer[pe]);const Ae=i.get(_[pe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ae,0)}t.blitFramebuffer(0,0,H,G,0,0,H,G,K,t.NEAREST),c===!0&&(vt.length=0,Ct.length=0,vt.push(t.COLOR_ATTACHMENT0+pe),A.depthBuffer&&A.resolveDepthBuffer===!1&&(vt.push(ue),Ct.push(ue),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ct)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,vt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Z)for(let pe=0;pe<_.length;pe++){n.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,he.__webglColorRenderbuffer[pe]);const Ae=i.get(_[pe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,Ae,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const _=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[_])}}}function ht(A){return Math.min(r.maxSamples,A.samples)}function pt(A){const _=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function k(A){const _=a.render.frame;h.get(A)!==_&&(h.set(A,_),A.update())}function Ht(A,_){const H=A.colorSpace,G=A.format,K=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||H!==lc&&H!==ir&&(Ze.getTransfer(H)===lt?(G!==Kn||K!==Fn)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Je("WebGLTextures: Unsupported texture color space:",H)),_}function tt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(u.width=A.naturalWidth||A.width,u.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(u.width=A.displayWidth,u.height=A.displayHeight):(u.width=A.width,u.height=A.height),u}this.allocateTextureUnit=Y,this.resetTextureUnits=I,this.getTextureUnits=$,this.setTextureUnits=z,this.setTexture2D=D,this.setTexture2DArray=W,this.setTexture3D=q,this.setTextureCube=ne,this.rebindTextures=Ye,this.setupRenderTarget=je,this.updateRenderTargetMipmap=St,this.updateMultisampleRenderTarget=Et,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=pt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Aw(t,e){function n(i,r=ir){let s;const a=Ze.getTransfer(r);if(i===Fn)return t.UNSIGNED_BYTE;if(i===_h)return t.UNSIGNED_SHORT_4_4_4_4;if(i===yh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Lg)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Dg)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Rg)return t.BYTE;if(i===Pg)return t.SHORT;if(i===ao)return t.UNSIGNED_SHORT;if(i===vh)return t.INT;if(i===gi)return t.UNSIGNED_INT;if(i===ui)return t.FLOAT;if(i===Bi)return t.HALF_FLOAT;if(i===Ig)return t.ALPHA;if(i===Ug)return t.RGB;if(i===Kn)return t.RGBA;if(i===zi)return t.DEPTH_COMPONENT;if(i===Or)return t.DEPTH_STENCIL;if(i===Fg)return t.RED;if(i===Sh)return t.RED_INTEGER;if(i===Xr)return t.RG;if(i===Mh)return t.RG_INTEGER;if(i===bh)return t.RGBA_INTEGER;if(i===Nl||i===Rl||i===Pl||i===Ll)if(a===lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Nl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Rl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Pl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ll)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Nl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Rl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Pl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ll)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===jd||i===Gd||i===Wd||i===Xd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===jd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Gd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Wd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Xd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===$d||i===qd||i===Yd||i===Kd||i===Zd||i===ac||i===Qd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===$d||i===qd)return a===lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Yd)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Kd)return s.COMPRESSED_R11_EAC;if(i===Zd)return s.COMPRESSED_SIGNED_R11_EAC;if(i===ac)return s.COMPRESSED_RG11_EAC;if(i===Qd)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Jd||i===ef||i===tf||i===nf||i===rf||i===sf||i===af||i===of||i===lf||i===cf||i===uf||i===df||i===ff||i===hf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Jd)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ef)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===tf)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===nf)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===rf)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===sf)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===af)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===of)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===lf)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===cf)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===uf)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===df)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ff)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===hf)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===pf||i===mf||i===xf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===pf)return a===lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===mf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===xf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===gf||i===vf||i===oc||i===_f)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===gf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===vf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===oc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===_f)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===oo?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const Cw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Nw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Rw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Xg(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new ei({vertexShader:Cw,fragmentShader:Nw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new vi(new go(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Pw extends Kr{constructor(e,n){super();const i=this;let r=null,s=1,a=null,l="local-floor",c=1,u=null,h=null,p=null,f=null,m=null,g=null;const w=typeof XRWebGLBinding<"u",x=new Rw,d={},y=n.getContextAttributes();let M=null,S=null;const T=[],E=[],C=new qe;let v=null;const N=new qn;N.viewport=new At;const L=new qn;L.viewport=new At;const P=[N,L],F=new Vy;let I=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let de=T[Q];return de===void 0&&(de=new pu,T[Q]=de),de.getTargetRaySpace()},this.getControllerGrip=function(Q){let de=T[Q];return de===void 0&&(de=new pu,T[Q]=de),de.getGripSpace()},this.getHand=function(Q){let de=T[Q];return de===void 0&&(de=new pu,T[Q]=de),de.getHandSpace()};function z(Q){const de=E.indexOf(Q.inputSource);if(de===-1)return;const se=T[de];se!==void 0&&(se.update(Q.inputSource,Q.frame,u||a),se.dispatchEvent({type:Q.type,data:Q.inputSource}))}function Y(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",j);for(let Q=0;Q<T.length;Q++){const de=E[Q];de!==null&&(E[Q]=null,T[Q].disconnect(de))}I=null,$=null,x.reset();for(const Q in d)delete d[Q];e.setRenderTarget(M),m=null,f=null,p=null,r=null,S=null,Ge.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,i.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){l=Q,i.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(Q){u=Q},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return p===null&&w&&(p=new XRWebGLBinding(r,n)),p},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(M=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",j),y.xrCompatible!==!0&&await n.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(C),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,De=null,ke=null;y.depth&&(ke=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,se=y.stencil?Or:zi,De=y.stencil?oo:gi);const Re={colorFormat:n.RGBA8,depthFormat:ke,scaleFactor:s};p=this.getBinding(),f=p.createProjectionLayer(Re),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new mi(f.textureWidth,f.textureHeight,{format:Kn,type:Fn,depthTexture:new Ys(f.textureWidth,f.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const se={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,se),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new mi(m.framebufferWidth,m.framebufferHeight,{format:Kn,type:Fn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await r.requestReferenceSpace(l),Ge.setContext(r),Ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function j(Q){for(let de=0;de<Q.removed.length;de++){const se=Q.removed[de],De=E.indexOf(se);De>=0&&(E[De]=null,T[De].disconnect(se))}for(let de=0;de<Q.added.length;de++){const se=Q.added[de];let De=E.indexOf(se);if(De===-1){for(let Re=0;Re<T.length;Re++)if(Re>=E.length){E.push(se),De=Re;break}else if(E[Re]===null){E[Re]=se,De=Re;break}if(De===-1)break}const ke=T[De];ke&&ke.connect(se)}}const D=new X,W=new X;function q(Q,de,se){D.setFromMatrixPosition(de.matrixWorld),W.setFromMatrixPosition(se.matrixWorld);const De=D.distanceTo(W),ke=de.projectionMatrix.elements,Re=se.projectionMatrix.elements,ie=ke[14]/(ke[10]-1),He=ke[14]/(ke[10]+1),nt=(ke[9]+1)/ke[5],Ye=(ke[9]-1)/ke[5],je=(ke[8]-1)/ke[0],St=(Re[8]+1)/Re[0],vt=ie*je,Ct=ie*St,Et=De/(-je+St),ht=Et*-je;if(de.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(ht),Q.translateZ(Et),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),ke[10]===-1)Q.projectionMatrix.copy(de.projectionMatrix),Q.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const pt=ie+Et,k=He+Et,Ht=vt-ht,tt=Ct+(De-ht),A=nt*He/k*pt,_=Ye*He/k*pt;Q.projectionMatrix.makePerspective(Ht,tt,A,_,pt,k),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function ne(Q,de){de===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(de.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;let de=Q.near,se=Q.far;x.texture!==null&&(x.depthNear>0&&(de=x.depthNear),x.depthFar>0&&(se=x.depthFar)),F.near=L.near=N.near=de,F.far=L.far=N.far=se,(I!==F.near||$!==F.far)&&(r.updateRenderState({depthNear:F.near,depthFar:F.far}),I=F.near,$=F.far),F.layers.mask=Q.layers.mask|6,N.layers.mask=F.layers.mask&-5,L.layers.mask=F.layers.mask&-3;const De=Q.parent,ke=F.cameras;ne(F,De);for(let Re=0;Re<ke.length;Re++)ne(ke[Re],De);ke.length===2?q(F,N,L):F.projectionMatrix.copy(N.projectionMatrix),re(Q,F,De)};function re(Q,de,se){se===null?Q.matrix.copy(de.matrixWorld):(Q.matrix.copy(se.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(de.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(de.projectionMatrix),Q.projectionMatrixInverse.copy(de.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=lo*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(Q){c=Q,f!==null&&(f.fixedFoveation=Q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Q)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(F)},this.getCameraTexture=function(Q){return d[Q]};let Fe=null;function Qe(Q,de){if(h=de.getViewerPose(u||a),g=de,h!==null){const se=h.views;m!==null&&(e.setRenderTargetFramebuffer(S,m.framebuffer),e.setRenderTarget(S));let De=!1;se.length!==F.cameras.length&&(F.cameras.length=0,De=!0);for(let He=0;He<se.length;He++){const nt=se[He];let Ye=null;if(m!==null)Ye=m.getViewport(nt);else{const St=p.getViewSubImage(f,nt);Ye=St.viewport,He===0&&(e.setRenderTargetTextures(S,St.colorTexture,St.depthStencilTexture),e.setRenderTarget(S))}let je=P[He];je===void 0&&(je=new qn,je.layers.enable(He),je.viewport=new At,P[He]=je),je.matrix.fromArray(nt.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(nt.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),He===0&&(F.matrix.copy(je.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),De===!0&&F.cameras.push(je)}const ke=r.enabledFeatures;if(ke&&ke.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&w){p=i.getBinding();const He=p.getDepthInformation(se[0]);He&&He.isValid&&He.texture&&x.init(He,r.renderState)}if(ke&&ke.includes("camera-access")&&w){e.state.unbindTexture(),p=i.getBinding();for(let He=0;He<se.length;He++){const nt=se[He].camera;if(nt){let Ye=d[nt];Ye||(Ye=new Xg,d[nt]=Ye);const je=p.getCameraImage(nt);Ye.sourceTexture=je}}}}for(let se=0;se<T.length;se++){const De=E[se],ke=T[se];De!==null&&ke!==void 0&&ke.update(De,de,u||a)}Fe&&Fe(Q,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),g=null}const Ge=new Yg;Ge.setAnimationLoop(Qe),this.setAnimationLoop=function(Q){Fe=Q},this.dispose=function(){}}}const Lw=new Lt,nv=new Be;nv.set(-1,0,0,0,1,0,0,0,1);function Dw(t,e){function n(x,d){x.matrixAutoUpdate===!0&&x.updateMatrix(),d.value.copy(x.matrix)}function i(x,d){d.color.getRGB(x.fogColor.value,$g(t)),d.isFog?(x.fogNear.value=d.near,x.fogFar.value=d.far):d.isFogExp2&&(x.fogDensity.value=d.density)}function r(x,d,y,M,S){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?s(x,d):d.isMeshLambertMaterial?(s(x,d),d.envMap&&(x.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(x,d),p(x,d)):d.isMeshPhongMaterial?(s(x,d),h(x,d),d.envMap&&(x.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(x,d),f(x,d),d.isMeshPhysicalMaterial&&m(x,d,S)):d.isMeshMatcapMaterial?(s(x,d),g(x,d)):d.isMeshDepthMaterial?s(x,d):d.isMeshDistanceMaterial?(s(x,d),w(x,d)):d.isMeshNormalMaterial?s(x,d):d.isLineBasicMaterial?(a(x,d),d.isLineDashedMaterial&&l(x,d)):d.isPointsMaterial?c(x,d,y,M):d.isSpriteMaterial?u(x,d):d.isShadowMaterial?(x.color.value.copy(d.color),x.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(x,d){x.opacity.value=d.opacity,d.color&&x.diffuse.value.copy(d.color),d.emissive&&x.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(x.map.value=d.map,n(d.map,x.mapTransform)),d.alphaMap&&(x.alphaMap.value=d.alphaMap,n(d.alphaMap,x.alphaMapTransform)),d.bumpMap&&(x.bumpMap.value=d.bumpMap,n(d.bumpMap,x.bumpMapTransform),x.bumpScale.value=d.bumpScale,d.side===gn&&(x.bumpScale.value*=-1)),d.normalMap&&(x.normalMap.value=d.normalMap,n(d.normalMap,x.normalMapTransform),x.normalScale.value.copy(d.normalScale),d.side===gn&&x.normalScale.value.negate()),d.displacementMap&&(x.displacementMap.value=d.displacementMap,n(d.displacementMap,x.displacementMapTransform),x.displacementScale.value=d.displacementScale,x.displacementBias.value=d.displacementBias),d.emissiveMap&&(x.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,x.emissiveMapTransform)),d.specularMap&&(x.specularMap.value=d.specularMap,n(d.specularMap,x.specularMapTransform)),d.alphaTest>0&&(x.alphaTest.value=d.alphaTest);const y=e.get(d),M=y.envMap,S=y.envMapRotation;M&&(x.envMap.value=M,x.envMapRotation.value.setFromMatrix4(Lw.makeRotationFromEuler(S)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(nv),x.reflectivity.value=d.reflectivity,x.ior.value=d.ior,x.refractionRatio.value=d.refractionRatio),d.lightMap&&(x.lightMap.value=d.lightMap,x.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,x.lightMapTransform)),d.aoMap&&(x.aoMap.value=d.aoMap,x.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,x.aoMapTransform))}function a(x,d){x.diffuse.value.copy(d.color),x.opacity.value=d.opacity,d.map&&(x.map.value=d.map,n(d.map,x.mapTransform))}function l(x,d){x.dashSize.value=d.dashSize,x.totalSize.value=d.dashSize+d.gapSize,x.scale.value=d.scale}function c(x,d,y,M){x.diffuse.value.copy(d.color),x.opacity.value=d.opacity,x.size.value=d.size*y,x.scale.value=M*.5,d.map&&(x.map.value=d.map,n(d.map,x.uvTransform)),d.alphaMap&&(x.alphaMap.value=d.alphaMap,n(d.alphaMap,x.alphaMapTransform)),d.alphaTest>0&&(x.alphaTest.value=d.alphaTest)}function u(x,d){x.diffuse.value.copy(d.color),x.opacity.value=d.opacity,x.rotation.value=d.rotation,d.map&&(x.map.value=d.map,n(d.map,x.mapTransform)),d.alphaMap&&(x.alphaMap.value=d.alphaMap,n(d.alphaMap,x.alphaMapTransform)),d.alphaTest>0&&(x.alphaTest.value=d.alphaTest)}function h(x,d){x.specular.value.copy(d.specular),x.shininess.value=Math.max(d.shininess,1e-4)}function p(x,d){d.gradientMap&&(x.gradientMap.value=d.gradientMap)}function f(x,d){x.metalness.value=d.metalness,d.metalnessMap&&(x.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,x.metalnessMapTransform)),x.roughness.value=d.roughness,d.roughnessMap&&(x.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,x.roughnessMapTransform)),d.envMap&&(x.envMapIntensity.value=d.envMapIntensity)}function m(x,d,y){x.ior.value=d.ior,d.sheen>0&&(x.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),x.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(x.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,x.sheenColorMapTransform)),d.sheenRoughnessMap&&(x.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,x.sheenRoughnessMapTransform))),d.clearcoat>0&&(x.clearcoat.value=d.clearcoat,x.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(x.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,x.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(x.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===gn&&x.clearcoatNormalScale.value.negate())),d.dispersion>0&&(x.dispersion.value=d.dispersion),d.iridescence>0&&(x.iridescence.value=d.iridescence,x.iridescenceIOR.value=d.iridescenceIOR,x.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(x.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,x.iridescenceMapTransform)),d.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),d.transmission>0&&(x.transmission.value=d.transmission,x.transmissionSamplerMap.value=y.texture,x.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(x.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,x.transmissionMapTransform)),x.thickness.value=d.thickness,d.thicknessMap&&(x.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=d.attenuationDistance,x.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(x.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(x.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=d.specularIntensity,x.specularColor.value.copy(d.specularColor),d.specularColorMap&&(x.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,x.specularColorMapTransform)),d.specularIntensityMap&&(x.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,x.specularIntensityMapTransform))}function g(x,d){d.matcap&&(x.matcap.value=d.matcap)}function w(x,d){const y=e.get(d).light;x.referencePosition.value.setFromMatrixPosition(y.matrixWorld),x.nearDistance.value=y.shadow.camera.near,x.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Iw(t,e,n,i){let r={},s={},a=[];const l=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,T){const E=T.program;i.uniformBlockBinding(S,E)}function u(S,T){let E=r[S.id];E===void 0&&(x(S),E=h(S),r[S.id]=E,S.addEventListener("dispose",y));const C=T.program;i.updateUBOMapping(S,C);const v=e.render.frame;s[S.id]!==v&&(f(S),s[S.id]=v)}function h(S){const T=p();S.__bindingPointIndex=T;const E=t.createBuffer(),C=S.__size,v=S.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,C,v),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,T,E),E}function p(){for(let S=0;S<l;S++)if(a.indexOf(S)===-1)return a.push(S),S;return Je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const T=r[S.id],E=S.uniforms,C=S.__cache;t.bindBuffer(t.UNIFORM_BUFFER,T);for(let v=0,N=E.length;v<N;v++){const L=E[v];if(Array.isArray(L))for(let P=0,F=L.length;P<F;P++)m(L[P],v,P,C);else m(L,v,0,C)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(S,T,E,C){if(w(S,T,E,C)===!0){const v=S.__offset,N=S.value;if(Array.isArray(N)){let L=0;for(let P=0;P<N.length;P++){const F=N[P],I=d(F);g(F,S.__data,L),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(L+=I.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(N,S.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,v,S.__data)}}function g(S,T,E){typeof S=="number"||typeof S=="boolean"?T[0]=S:S.isMatrix3?(T[0]=S.elements[0],T[1]=S.elements[1],T[2]=S.elements[2],T[3]=0,T[4]=S.elements[3],T[5]=S.elements[4],T[6]=S.elements[5],T[7]=0,T[8]=S.elements[6],T[9]=S.elements[7],T[10]=S.elements[8],T[11]=0):ArrayBuffer.isView(S)?T.set(new S.constructor(S.buffer,S.byteOffset,T.length)):S.toArray(T,E)}function w(S,T,E,C){const v=S.value,N=T+"_"+E;if(C[N]===void 0)return typeof v=="number"||typeof v=="boolean"?C[N]=v:ArrayBuffer.isView(v)?C[N]=v.slice():C[N]=v.clone(),!0;{const L=C[N];if(typeof v=="number"||typeof v=="boolean"){if(L!==v)return C[N]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(L.equals(v)===!1)return L.copy(v),!0}}return!1}function x(S){const T=S.uniforms;let E=0;const C=16;for(let N=0,L=T.length;N<L;N++){const P=Array.isArray(T[N])?T[N]:[T[N]];for(let F=0,I=P.length;F<I;F++){const $=P[F],z=Array.isArray($.value)?$.value:[$.value];for(let Y=0,j=z.length;Y<j;Y++){const D=z[Y],W=d(D),q=E%C,ne=q%W.boundary,re=q+ne;E+=ne,re!==0&&C-re<W.storage&&(E+=C-re),$.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=E,E+=W.storage}}}const v=E%C;return v>0&&(E+=C-v),S.__size=E,S.__cache={},this}function d(S){const T={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(T.boundary=4,T.storage=4):S.isVector2?(T.boundary=8,T.storage=8):S.isVector3||S.isColor?(T.boundary=16,T.storage=12):S.isVector4?(T.boundary=16,T.storage=16):S.isMatrix3?(T.boundary=48,T.storage=48):S.isMatrix4?(T.boundary=64,T.storage=64):S.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(T.boundary=16,T.storage=S.byteLength):Ie("WebGLRenderer: Unsupported uniform value type.",S),T}function y(S){const T=S.target;T.removeEventListener("dispose",y);const E=a.indexOf(T.__bindingPointIndex);a.splice(E,1),t.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function M(){for(const S in r)t.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:c,update:u,dispose:M}}const Uw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let si=null;function Fw(){return si===null&&(si=new Cy(Uw,16,16,Xr,Bi),si.name="DFG_LUT",si.minFilter=Qt,si.magFilter=Qt,si.wrapS=Ri,si.wrapT=Ri,si.generateMipmaps=!1,si.needsUpdate=!0),si}class Ow{constructor(e={}){const{canvas:n=j2(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:f=!1,outputBufferType:m=Fn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const w=m,x=new Set([bh,Mh,Sh]),d=new Set([Fn,gi,ao,oo,_h,yh]),y=new Uint32Array(4),M=new Int32Array(4),S=new X;let T=null,E=null;const C=[],v=[];let N=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let P=!1,F=null,I=null,$=null,z=null;this._outputColorSpace=Dn;let Y=0,j=0,D=null,W=-1,q=null;const ne=new At,re=new At;let Fe=null;const Qe=new st(0);let Ge=0,Q=n.width,de=n.height,se=1,De=null,ke=null;const Re=new At(0,0,Q,de),ie=new At(0,0,Q,de);let He=!1;const nt=new Gg;let Ye=!1,je=!1;const St=new Lt,vt=new X,Ct=new At,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function pt(){return D===null?se:1}let k=i;function Ht(b,V){return n.getContext(b,V)}try{const b={alpha:!0,depth:r,stencil:s,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${gh}`),n.addEventListener("webglcontextlost",mt,!1),n.addEventListener("webglcontextrestored",ot,!1),n.addEventListener("webglcontextcreationerror",vn,!1),k===null){const V="webgl2";if(k=Ht(V,b),k===null)throw Ht(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(b){throw Je("WebGLRenderer: "+b.message),b}let tt,A,_,H,G,K,ue,he,Z,ee,pe,Ae,ge,xe,Ne,Pe,Oe,U,fe,J,me,_e,te;function Ee(){tt=new Fb(k),tt.init(),me=new Aw(k,tt),A=new Cb(k,tt,e,me),_=new Ew(k,tt),A.reversedDepthBuffer&&f&&_.buffers.depth.setReversed(!0),I=k.createFramebuffer(),$=k.createFramebuffer(),z=k.createFramebuffer(),H=new Bb(k),G=new dw,K=new Tw(k,tt,_,G,A,me,H),ue=new Ub(L),he=new jy(k),_e=new Tb(k,he),Z=new Ob(k,he,H,_e),ee=new Vb(k,Z,he,_e,H),U=new zb(k,A,K),Ne=new Nb(G),pe=new uw(L,ue,tt,A,_e,Ne),Ae=new Dw(L,G),ge=new hw,xe=new _w(tt),Oe=new Eb(L,ue,_,ee,g,c),Pe=new ww(L,ee,A),te=new Iw(k,H,A,_),fe=new Ab(k,tt,H),J=new kb(k,tt,H),H.programs=pe.programs,L.capabilities=A,L.extensions=tt,L.properties=G,L.renderLists=ge,L.shadowMap=Pe,L.state=_,L.info=H}Ee(),w!==Fn&&(N=new jb(w,n.width,n.height,l,r,s));const we=new Pw(L,k);this.xr=we,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const b=tt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=tt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(b){b!==void 0&&(se=b,this.setSize(Q,de,!1))},this.getSize=function(b){return b.set(Q,de)},this.setSize=function(b,V,R=!0){if(we.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}Q=b,de=V,n.width=Math.floor(b*se),n.height=Math.floor(V*se),R===!0&&(n.style.width=b+"px",n.style.height=V+"px"),N!==null&&N.setSize(n.width,n.height),this.setViewport(0,0,b,V)},this.getDrawingBufferSize=function(b){return b.set(Q*se,de*se).floor()},this.setDrawingBufferSize=function(b,V,R){Q=b,de=V,se=R,n.width=Math.floor(b*R),n.height=Math.floor(V*R),this.setViewport(0,0,b,V)},this.setEffects=function(b){if(w===Fn){Je("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let V=0;V<b.length;V++)if(b[V].isOutputPass===!0){Ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(ne)},this.getViewport=function(b){return b.copy(Re)},this.setViewport=function(b,V,R,O){b.isVector4?Re.set(b.x,b.y,b.z,b.w):Re.set(b,V,R,O),_.viewport(ne.copy(Re).multiplyScalar(se).round())},this.getScissor=function(b){return b.copy(ie)},this.setScissor=function(b,V,R,O){b.isVector4?ie.set(b.x,b.y,b.z,b.w):ie.set(b,V,R,O),_.scissor(re.copy(ie).multiplyScalar(se).round())},this.getScissorTest=function(){return He},this.setScissorTest=function(b){_.setScissorTest(He=b)},this.setOpaqueSort=function(b){De=b},this.setTransparentSort=function(b){ke=b},this.getClearColor=function(b){return b.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor(...arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha(...arguments)},this.clear=function(b=!0,V=!0,R=!0){let O=0;if(b){let B=!1;if(D!==null){const oe=D.texture.format;B=x.has(oe)}if(B){const oe=D.texture.type,ve=d.has(oe),le=Oe.getClearColor(),Se=Oe.getClearAlpha(),Te=le.r,Le=le.g,ze=le.b;ve?(y[0]=Te,y[1]=Le,y[2]=ze,y[3]=Se,k.clearBufferuiv(k.COLOR,0,y)):(M[0]=Te,M[1]=Le,M[2]=ze,M[3]=Se,k.clearBufferiv(k.COLOR,0,M))}else O|=k.COLOR_BUFFER_BIT}V&&(O|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),R&&(O|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O!==0&&k.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),F=b},this.dispose=function(){n.removeEventListener("webglcontextlost",mt,!1),n.removeEventListener("webglcontextrestored",ot,!1),n.removeEventListener("webglcontextcreationerror",vn,!1),Oe.dispose(),ge.dispose(),xe.dispose(),G.dispose(),ue.dispose(),ee.dispose(),_e.dispose(),te.dispose(),pe.dispose(),we.dispose(),we.removeEventListener("sessionstart",sa),we.removeEventListener("sessionend",aa),ti.stop()};function mt(b){b.preventDefault(),fm("WebGLRenderer: Context Lost."),P=!0}function ot(){fm("WebGLRenderer: Context Restored."),P=!1;const b=H.autoReset,V=Pe.enabled,R=Pe.autoUpdate,O=Pe.needsUpdate,B=Pe.type;Ee(),H.autoReset=b,Pe.enabled=V,Pe.autoUpdate=R,Pe.needsUpdate=O,Pe.type=B}function vn(b){Je("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function _n(b){const V=b.target;V.removeEventListener("dispose",_n),vo(V)}function vo(b){_o(b),G.remove(b)}function _o(b){const V=G.get(b).programs;V!==void 0&&(V.forEach(function(R){pe.releaseProgram(R)}),b.isShaderMaterial&&pe.releaseShaderCache(b))}this.renderBufferDirect=function(b,V,R,O,B,oe){V===null&&(V=Et);const ve=B.isMesh&&B.matrixWorld.determinantAffine()<0,le=Mo(b,V,R,O,B);_.setMaterial(O,ve);let Se=R.index,Te=1;if(O.wireframe===!0){if(Se=Z.getWireframeAttribute(R),Se===void 0)return;Te=2}const Le=R.drawRange,ze=R.attributes.position;let Ce=Le.start*Te,We=(Le.start+Le.count)*Te;oe!==null&&(Ce=Math.max(Ce,oe.start*Te),We=Math.min(We,(oe.start+oe.count)*Te)),Se!==null?(Ce=Math.max(Ce,0),We=Math.min(We,Se.count)):ze!=null&&(Ce=Math.max(Ce,0),We=Math.min(We,ze.count));const ut=We-Ce;if(ut<0||ut===1/0)return;_e.setup(B,O,le,R,Se);let dt,it=fe;if(Se!==null&&(dt=he.get(Se),it=J,it.setIndex(dt)),B.isMesh)O.wireframe===!0?(_.setLineWidth(O.wireframeLinewidth*pt()),it.setMode(k.LINES)):it.setMode(k.TRIANGLES);else if(B.isLine){let Dt=O.linewidth;Dt===void 0&&(Dt=1),_.setLineWidth(Dt*pt()),B.isLineSegments?it.setMode(k.LINES):B.isLineLoop?it.setMode(k.LINE_LOOP):it.setMode(k.LINE_STRIP)}else B.isPoints?it.setMode(k.POINTS):B.isSprite&&it.setMode(k.TRIANGLES);if(B.isBatchedMesh)if(tt.get("WEBGL_multi_draw"))it.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Dt=B._multiDrawStarts,Me=B._multiDrawCounts,en=B._multiDrawCount,Ke=Se?he.get(Se).bytesPerElement:1,dn=G.get(O).currentProgram.getUniforms();for(let tn=0;tn<en;tn++)dn.setValue(k,"_gl_DrawID",tn),it.render(Dt[tn]/Ke,Me[tn])}else if(B.isInstancedMesh)it.renderInstances(Ce,ut,B.count);else if(R.isInstancedBufferGeometry){const Dt=R._maxInstanceCount!==void 0?R._maxInstanceCount:1/0,Me=Math.min(R.instanceCount,Dt);it.renderInstances(Ce,ut,Me)}else it.render(Ce,ut)};function ra(b,V,R){b.transparent===!0&&b.side===Ai&&b.forceSinglePass===!1?(b.side=gn,b.needsUpdate=!0,br(b,V,R),b.side=vr,b.needsUpdate=!0,br(b,V,R),b.side=Ai):br(b,V,R)}this.compile=function(b,V,R=null){R===null&&(R=b),E=xe.get(R),E.init(V),v.push(E),R.traverseVisible(function(B){B.isLight&&B.layers.test(V.layers)&&(E.pushLight(B),B.castShadow&&E.pushShadow(B))}),b!==R&&b.traverseVisible(function(B){B.isLight&&B.layers.test(V.layers)&&(E.pushLight(B),B.castShadow&&E.pushShadow(B))}),E.setupLights();const O=new Set;return b.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const oe=B.material;if(oe)if(Array.isArray(oe))for(let ve=0;ve<oe.length;ve++){const le=oe[ve];ra(le,R,B),O.add(le)}else ra(oe,R,B),O.add(oe)}),E=v.pop(),O},this.compileAsync=function(b,V,R=null){const O=this.compile(b,V,R);return new Promise(B=>{function oe(){if(O.forEach(function(ve){G.get(ve).currentProgram.isReady()&&O.delete(ve)}),O.size===0){B(b);return}setTimeout(oe,10)}tt.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let Zr=null;function yo(b){Zr&&Zr(b)}function sa(){ti.stop()}function aa(){ti.start()}const ti=new Yg;ti.setAnimationLoop(yo),typeof self<"u"&&ti.setContext(self),this.setAnimationLoop=function(b){Zr=b,we.setAnimationLoop(b),b===null?ti.stop():ti.start()},we.addEventListener("sessionstart",sa),we.addEventListener("sessionend",aa),this.render=function(b,V){if(V!==void 0&&V.isCamera!==!0){Je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;F!==null&&F.renderStart(b,V);const R=we.enabled===!0&&we.isPresenting===!0,O=N!==null&&(D===null||R)&&N.begin(L,D);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(we.cameraAutoUpdate===!0&&we.updateCamera(V),V=we.getCamera()),b.isScene===!0&&b.onBeforeRender(L,b,V,D),E=xe.get(b,v.length),E.init(V),E.state.textureUnits=K.getTextureUnits(),v.push(E),St.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),nt.setFromProjectionMatrix(St,di,V.reversedDepth),je=this.localClippingEnabled,Ye=Ne.init(this.clippingPlanes,je),T=ge.get(b,C.length),T.init(),C.push(T),we.enabled===!0&&we.isPresenting===!0){const ve=L.xr.getDepthSensingMesh();ve!==null&&Qr(ve,V,-1/0,L.sortObjects)}Qr(b,V,0,L.sortObjects),T.finish(),L.sortObjects===!0&&T.sort(De,ke,V.reversedDepth),ht=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,ht&&Oe.addToRenderList(T,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ye===!0&&Ne.beginShadows();const B=E.state.shadowsArray;if(Pe.render(B,b,V),Ye===!0&&Ne.endShadows(),(O&&N.hasRenderPass())===!1){const ve=T.opaque,le=T.transmissive;if(E.setupLights(),V.isArrayCamera){const Se=V.cameras;if(le.length>0)for(let Te=0,Le=Se.length;Te<Le;Te++){const ze=Se[Te];la(ve,le,b,ze)}ht&&Oe.render(b);for(let Te=0,Le=Se.length;Te<Le;Te++){const ze=Se[Te];oa(T,b,ze,ze.viewport)}}else le.length>0&&la(ve,le,b,V),ht&&Oe.render(b),oa(T,b,V)}D!==null&&j===0&&(K.updateMultisampleRenderTarget(D),K.updateRenderTargetMipmap(D)),O&&N.end(L),b.isScene===!0&&b.onAfterRender(L,b,V),_e.resetDefaultState(),W=-1,q=null,v.pop(),v.length>0?(E=v[v.length-1],K.setTextureUnits(E.state.textureUnits),Ye===!0&&Ne.setGlobalState(L.clippingPlanes,E.state.camera)):E=null,C.pop(),C.length>0?T=C[C.length-1]:T=null,F!==null&&F.renderEnd()};function Qr(b,V,R,O){if(b.visible===!1)return;if(b.layers.test(V.layers)){if(b.isGroup)R=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(V);else if(b.isLightProbeGrid)E.pushLightProbeGrid(b);else if(b.isLight)E.pushLight(b),b.castShadow&&E.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||nt.intersectsSprite(b)){O&&Ct.setFromMatrixPosition(b.matrixWorld).applyMatrix4(St);const ve=ee.update(b),le=b.material;le.visible&&T.push(b,ve,le,R,Ct.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||nt.intersectsObject(b))){const ve=ee.update(b),le=b.material;if(O&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ct.copy(b.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Ct.copy(ve.boundingSphere.center)),Ct.applyMatrix4(b.matrixWorld).applyMatrix4(St)),Array.isArray(le)){const Se=ve.groups;for(let Te=0,Le=Se.length;Te<Le;Te++){const ze=Se[Te],Ce=le[ze.materialIndex];Ce&&Ce.visible&&T.push(b,ve,Ce,R,Ct.z,ze)}}else le.visible&&T.push(b,ve,le,R,Ct.z,null)}}const oe=b.children;for(let ve=0,le=oe.length;ve<le;ve++)Qr(oe[ve],V,R,O)}function oa(b,V,R,O){const{opaque:B,transmissive:oe,transparent:ve}=b;E.setupLightsView(R),Ye===!0&&Ne.setGlobalState(L.clippingPlanes,R),O&&_.viewport(ne.copy(O)),B.length>0&&Mr(B,V,R),oe.length>0&&Mr(oe,V,R),ve.length>0&&Mr(ve,V,R),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function la(b,V,R,O){if((R.isScene===!0?R.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[O.id]===void 0){const Ce=tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[O.id]=new mi(1,1,{generateMipmaps:!0,type:Ce?Bi:Fn,minFilter:Fr,samples:Math.max(4,A.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace})}const oe=E.state.transmissionRenderTarget[O.id],ve=O.viewport||ne;oe.setSize(ve.z*L.transmissionResolutionScale,ve.w*L.transmissionResolutionScale);const le=L.getRenderTarget(),Se=L.getActiveCubeFace(),Te=L.getActiveMipmapLevel();L.setRenderTarget(oe),L.getClearColor(Qe),Ge=L.getClearAlpha(),Ge<1&&L.setClearColor(16777215,.5),L.clear(),ht&&Oe.render(R);const Le=L.toneMapping;L.toneMapping=pi;const ze=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),E.setupLightsView(O),Ye===!0&&Ne.setGlobalState(L.clippingPlanes,O),Mr(b,R,O),K.updateMultisampleRenderTarget(oe),K.updateRenderTargetMipmap(oe),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let We=0,ut=V.length;We<ut;We++){const dt=V[We],{object:it,geometry:Dt,material:Me,group:en}=dt;if(Me.side===Ai&&it.layers.test(O.layers)){const Ke=Me.side;Me.side=gn,Me.needsUpdate=!0,ca(it,R,O,Dt,Me,en),Me.side=Ke,Me.needsUpdate=!0,Ce=!0}}Ce===!0&&(K.updateMultisampleRenderTarget(oe),K.updateRenderTargetMipmap(oe))}L.setRenderTarget(le,Se,Te),L.setClearColor(Qe,Ge),ze!==void 0&&(O.viewport=ze),L.toneMapping=Le}function Mr(b,V,R){const O=V.isScene===!0?V.overrideMaterial:null;for(let B=0,oe=b.length;B<oe;B++){const ve=b[B],{object:le,geometry:Se,group:Te}=ve;let Le=ve.material;Le.allowOverride===!0&&O!==null&&(Le=O),le.layers.test(R.layers)&&ca(le,V,R,Se,Le,Te)}}function ca(b,V,R,O,B,oe){b.onBeforeRender(L,V,R,O,B,oe),b.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),B.onBeforeRender(L,V,R,O,b,oe),B.transparent===!0&&B.side===Ai&&B.forceSinglePass===!1?(B.side=gn,B.needsUpdate=!0,L.renderBufferDirect(R,V,O,B,b,oe),B.side=vr,B.needsUpdate=!0,L.renderBufferDirect(R,V,O,B,b,oe),B.side=Ai):L.renderBufferDirect(R,V,O,B,b,oe),b.onAfterRender(L,V,R,O,B,oe)}function br(b,V,R){V.isScene!==!0&&(V=Et);const O=G.get(b),B=E.state.lights,oe=E.state.shadowsArray,ve=B.state.version,le=pe.getParameters(b,B.state,oe,V,R,E.state.lightProbeGridArray),Se=pe.getProgramCacheKey(le);let Te=O.programs;O.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?V.environment:null,O.fog=V.fog;const Le=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;O.envMap=ue.get(b.envMap||O.environment,Le),O.envMapRotation=O.environment!==null&&b.envMap===null?V.environmentRotation:b.envMapRotation,Te===void 0&&(b.addEventListener("dispose",_n),Te=new Map,O.programs=Te);let ze=Te.get(Se);if(ze!==void 0){if(O.currentProgram===ze&&O.lightsStateVersion===ve)return da(b,le),ze}else le.uniforms=pe.getUniforms(b),F!==null&&b.isNodeMaterial&&F.build(b,R,le),b.onBeforeCompile(le,L),ze=pe.acquireProgram(le,Se),Te.set(Se,ze),O.uniforms=le.uniforms;const Ce=O.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ce.clippingPlanes=Ne.uniform),da(b,le),O.needsLights=wo(b),O.lightsStateVersion=ve,O.needsLights&&(Ce.ambientLightColor.value=B.state.ambient,Ce.lightProbe.value=B.state.probe,Ce.directionalLights.value=B.state.directional,Ce.directionalLightShadows.value=B.state.directionalShadow,Ce.spotLights.value=B.state.spot,Ce.spotLightShadows.value=B.state.spotShadow,Ce.rectAreaLights.value=B.state.rectArea,Ce.ltc_1.value=B.state.rectAreaLTC1,Ce.ltc_2.value=B.state.rectAreaLTC2,Ce.pointLights.value=B.state.point,Ce.pointLightShadows.value=B.state.pointShadow,Ce.hemisphereLights.value=B.state.hemi,Ce.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ce.spotLightMatrix.value=B.state.spotLightMatrix,Ce.spotLightMap.value=B.state.spotLightMap,Ce.pointShadowMatrix.value=B.state.pointShadowMatrix),O.lightProbeGrid=E.state.lightProbeGridArray.length>0,O.currentProgram=ze,O.uniformsList=null,ze}function ua(b){if(b.uniformsList===null){const V=b.currentProgram.getUniforms();b.uniformsList=Dl.seqWithValue(V.seq,b.uniforms)}return b.uniformsList}function da(b,V){const R=G.get(b);R.outputColorSpace=V.outputColorSpace,R.batching=V.batching,R.batchingColor=V.batchingColor,R.instancing=V.instancing,R.instancingColor=V.instancingColor,R.instancingMorph=V.instancingMorph,R.skinning=V.skinning,R.morphTargets=V.morphTargets,R.morphNormals=V.morphNormals,R.morphColors=V.morphColors,R.morphTargetsCount=V.morphTargetsCount,R.numClippingPlanes=V.numClippingPlanes,R.numIntersection=V.numClipIntersection,R.vertexAlphas=V.vertexAlphas,R.vertexTangents=V.vertexTangents,R.toneMapping=V.toneMapping}function So(b,V){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;S.setFromMatrixPosition(V.matrixWorld);for(let R=0,O=b.length;R<O;R++){const B=b[R];if(B.texture!==null&&B.boundingBox.containsPoint(S))return B}return null}function Mo(b,V,R,O,B){V.isScene!==!0&&(V=Et),K.resetTextureUnits();const oe=V.fog,ve=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?V.environment:null,le=D===null?L.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Ze.workingColorSpace,Se=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,Te=ue.get(O.envMap||ve,Se),Le=O.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,ze=!!R.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Ce=!!R.morphAttributes.position,We=!!R.morphAttributes.normal,ut=!!R.morphAttributes.color;let dt=pi;O.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(dt=L.toneMapping);const it=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,Dt=it!==void 0?it.length:0,Me=G.get(O),en=E.state.lights;if(Ye===!0&&(je===!0||b!==q)){const rt=b===q&&O.id===W;Ne.setState(O,b,rt)}let Ke=!1;O.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==en.state.version||Me.outputColorSpace!==le||B.isBatchedMesh&&Me.batching===!1||!B.isBatchedMesh&&Me.batching===!0||B.isBatchedMesh&&Me.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Me.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Me.instancing===!1||!B.isInstancedMesh&&Me.instancing===!0||B.isSkinnedMesh&&Me.skinning===!1||!B.isSkinnedMesh&&Me.skinning===!0||B.isInstancedMesh&&Me.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Me.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Me.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Me.instancingMorph===!1&&B.morphTexture!==null||Me.envMap!==Te||O.fog===!0&&Me.fog!==oe||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==Ne.numPlanes||Me.numIntersection!==Ne.numIntersection)||Me.vertexAlphas!==Le||Me.vertexTangents!==ze||Me.morphTargets!==Ce||Me.morphNormals!==We||Me.morphColors!==ut||Me.toneMapping!==dt||Me.morphTargetsCount!==Dt||!!Me.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(Ke=!0):(Ke=!0,Me.__version=O.version);let dn=Me.currentProgram;Ke===!0&&(dn=br(O,V,B),F&&O.isNodeMaterial&&F.onUpdateProgram(O,dn,Me));let tn=!1,yn=!1,Rn=!1;const at=dn.getUniforms(),_t=Me.uniforms;if(_.useProgram(dn.program)&&(tn=!0,yn=!0,Rn=!0),O.id!==W&&(W=O.id,yn=!0),Me.needsLights){const rt=So(E.state.lightProbeGridArray,B);Me.lightProbeGrid!==rt&&(Me.lightProbeGrid=rt,yn=!0)}if(tn||q!==b){_.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),at.setValue(k,"projectionMatrix",b.projectionMatrix),at.setValue(k,"viewMatrix",b.matrixWorldInverse);const ni=at.map.cameraPosition;ni!==void 0&&ni.setValue(k,vt.setFromMatrixPosition(b.matrixWorld)),A.logarithmicDepthBuffer&&at.setValue(k,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&at.setValue(k,"isOrthographic",b.isOrthographicCamera===!0),q!==b&&(q=b,yn=!0,Rn=!0)}if(Me.needsLights&&(en.state.directionalShadowMap.length>0&&at.setValue(k,"directionalShadowMap",en.state.directionalShadowMap,K),en.state.spotShadowMap.length>0&&at.setValue(k,"spotShadowMap",en.state.spotShadowMap,K),en.state.pointShadowMap.length>0&&at.setValue(k,"pointShadowMap",en.state.pointShadowMap,K)),B.isSkinnedMesh){at.setOptional(k,B,"bindMatrix"),at.setOptional(k,B,"bindMatrixInverse");const rt=B.skeleton;rt&&(rt.boneTexture===null&&rt.computeBoneTexture(),at.setValue(k,"boneTexture",rt.boneTexture,K))}B.isBatchedMesh&&(at.setOptional(k,B,"batchingTexture"),at.setValue(k,"batchingTexture",B._matricesTexture,K),at.setOptional(k,B,"batchingIdTexture"),at.setValue(k,"batchingIdTexture",B._indirectTexture,K),at.setOptional(k,B,"batchingColorTexture"),B._colorsTexture!==null&&at.setValue(k,"batchingColorTexture",B._colorsTexture,K));const Pn=R.morphAttributes;if((Pn.position!==void 0||Pn.normal!==void 0||Pn.color!==void 0)&&U.update(B,R,dn),(yn||Me.receiveShadow!==B.receiveShadow)&&(Me.receiveShadow=B.receiveShadow,at.setValue(k,"receiveShadow",B.receiveShadow)),(O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&V.environment!==null&&(_t.envMapIntensity.value=V.environmentIntensity),_t.dfgLUT!==void 0&&(_t.dfgLUT.value=Fw()),yn){if(at.setValue(k,"toneMappingExposure",L.toneMappingExposure),Me.needsLights&&bo(_t,Rn),oe&&O.fog===!0&&Ae.refreshFogUniforms(_t,oe),Ae.refreshMaterialUniforms(_t,O,se,de,E.state.transmissionRenderTarget[b.id]),Me.needsLights&&Me.lightProbeGrid){const rt=Me.lightProbeGrid;_t.probesSH.value=rt.texture,_t.probesMin.value.copy(rt.boundingBox.min),_t.probesMax.value.copy(rt.boundingBox.max),_t.probesResolution.value.copy(rt.resolution)}Dl.upload(k,ua(Me),_t,K)}if(O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Dl.upload(k,ua(Me),_t,K),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&at.setValue(k,"center",B.center),at.setValue(k,"modelViewMatrix",B.modelViewMatrix),at.setValue(k,"normalMatrix",B.normalMatrix),at.setValue(k,"modelMatrix",B.matrixWorld),O.uniformsGroups!==void 0){const rt=O.uniformsGroups;for(let ni=0,Gi=rt.length;ni<Gi;ni++){const Eo=rt[ni];te.update(Eo,dn),te.bind(Eo,dn)}}return dn}function bo(b,V){b.ambientLightColor.needsUpdate=V,b.lightProbe.needsUpdate=V,b.directionalLights.needsUpdate=V,b.directionalLightShadows.needsUpdate=V,b.pointLights.needsUpdate=V,b.pointLightShadows.needsUpdate=V,b.spotLights.needsUpdate=V,b.spotLightShadows.needsUpdate=V,b.rectAreaLights.needsUpdate=V,b.hemisphereLights.needsUpdate=V}function wo(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(b,V,R){const O=G.get(b);O.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),G.get(b.texture).__webglTexture=V,G.get(b.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:R,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,V){const R=G.get(b);R.__webglFramebuffer=V,R.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(b,V=0,R=0){D=b,Y=V,j=R;let O=null,B=!1,oe=!1;if(b){const le=G.get(b);if(le.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(k.FRAMEBUFFER,le.__webglFramebuffer),ne.copy(b.viewport),re.copy(b.scissor),Fe=b.scissorTest,_.viewport(ne),_.scissor(re),_.setScissorTest(Fe),W=-1;return}else if(le.__webglFramebuffer===void 0)K.setupRenderTarget(b);else if(le.__hasExternalTextures)K.rebindTextures(b,G.get(b.texture).__webglTexture,G.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Le=b.depthTexture;if(le.__boundDepthTexture!==Le){if(Le!==null&&G.has(Le)&&(b.width!==Le.image.width||b.height!==Le.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(b)}}const Se=b.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(oe=!0);const Te=G.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Te[V])?O=Te[V][R]:O=Te[V],B=!0):b.samples>0&&K.useMultisampledRTT(b)===!1?O=G.get(b).__webglMultisampledFramebuffer:Array.isArray(Te)?O=Te[R]:O=Te,ne.copy(b.viewport),re.copy(b.scissor),Fe=b.scissorTest}else ne.copy(Re).multiplyScalar(se).floor(),re.copy(ie).multiplyScalar(se).floor(),Fe=He;if(R!==0&&(O=I),_.bindFramebuffer(k.FRAMEBUFFER,O)&&_.drawBuffers(b,O),_.viewport(ne),_.scissor(re),_.setScissorTest(Fe),B){const le=G.get(b.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+V,le.__webglTexture,R)}else if(oe){const le=V;for(let Se=0;Se<b.textures.length;Se++){const Te=G.get(b.textures[Se]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Se,Te.__webglTexture,R,le)}}else if(b!==null&&R!==0){const le=G.get(b.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,le.__webglTexture,R)}W=-1},this.readRenderTargetPixels=function(b,V,R,O,B,oe,ve,le=0){if(!(b&&b.isWebGLRenderTarget)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=G.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ve!==void 0&&(Se=Se[ve]),Se){_.bindFramebuffer(k.FRAMEBUFFER,Se);try{const Te=b.textures[le],Le=Te.format,ze=Te.type;if(b.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+le),!A.textureFormatReadable(Le)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!A.textureTypeReadable(ze)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=b.width-O&&R>=0&&R<=b.height-B&&k.readPixels(V,R,O,B,me.convert(Le),me.convert(ze),oe)}finally{const Te=D!==null?G.get(D).__webglFramebuffer:null;_.bindFramebuffer(k.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(b,V,R,O,B,oe,ve,le=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=G.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ve!==void 0&&(Se=Se[ve]),Se)if(V>=0&&V<=b.width-O&&R>=0&&R<=b.height-B){_.bindFramebuffer(k.FRAMEBUFFER,Se);const Te=b.textures[le],Le=Te.format,ze=Te.type;if(b.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+le),!A.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!A.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ce=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Ce),k.bufferData(k.PIXEL_PACK_BUFFER,oe.byteLength,k.STREAM_READ),k.readPixels(V,R,O,B,me.convert(Le),me.convert(ze),0);const We=D!==null?G.get(D).__webglFramebuffer:null;_.bindFramebuffer(k.FRAMEBUFFER,We);const ut=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await G2(k,ut,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Ce),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,oe),k.deleteBuffer(Ce),k.deleteSync(ut),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,V=null,R=0){const O=Math.pow(2,-R),B=Math.floor(b.image.width*O),oe=Math.floor(b.image.height*O),ve=V!==null?V.x:0,le=V!==null?V.y:0;K.setTexture2D(b,0),k.copyTexSubImage2D(k.TEXTURE_2D,R,0,0,ve,le,B,oe),_.unbindTexture()},this.copyTextureToTexture=function(b,V,R=null,O=null,B=0,oe=0){let ve,le,Se,Te,Le,ze,Ce,We,ut;const dt=b.isCompressedTexture?b.mipmaps[oe]:b.image;if(R!==null)ve=R.max.x-R.min.x,le=R.max.y-R.min.y,Se=R.isBox3?R.max.z-R.min.z:1,Te=R.min.x,Le=R.min.y,ze=R.isBox3?R.min.z:0;else{const _t=Math.pow(2,-B);ve=Math.floor(dt.width*_t),le=Math.floor(dt.height*_t),b.isDataArrayTexture?Se=dt.depth:b.isData3DTexture?Se=Math.floor(dt.depth*_t):Se=1,Te=0,Le=0,ze=0}O!==null?(Ce=O.x,We=O.y,ut=O.z):(Ce=0,We=0,ut=0);const it=me.convert(V.format),Dt=me.convert(V.type);let Me;V.isData3DTexture?(K.setTexture3D(V,0),Me=k.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(K.setTexture2DArray(V,0),Me=k.TEXTURE_2D_ARRAY):(K.setTexture2D(V,0),Me=k.TEXTURE_2D),_.activeTexture(k.TEXTURE0),_.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,V.flipY),_.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),_.pixelStorei(k.UNPACK_ALIGNMENT,V.unpackAlignment);const en=_.getParameter(k.UNPACK_ROW_LENGTH),Ke=_.getParameter(k.UNPACK_IMAGE_HEIGHT),dn=_.getParameter(k.UNPACK_SKIP_PIXELS),tn=_.getParameter(k.UNPACK_SKIP_ROWS),yn=_.getParameter(k.UNPACK_SKIP_IMAGES);_.pixelStorei(k.UNPACK_ROW_LENGTH,dt.width),_.pixelStorei(k.UNPACK_IMAGE_HEIGHT,dt.height),_.pixelStorei(k.UNPACK_SKIP_PIXELS,Te),_.pixelStorei(k.UNPACK_SKIP_ROWS,Le),_.pixelStorei(k.UNPACK_SKIP_IMAGES,ze);const Rn=b.isDataArrayTexture||b.isData3DTexture,at=V.isDataArrayTexture||V.isData3DTexture;if(b.isDepthTexture){const _t=G.get(b),Pn=G.get(V),rt=G.get(_t.__renderTarget),ni=G.get(Pn.__renderTarget);_.bindFramebuffer(k.READ_FRAMEBUFFER,rt.__webglFramebuffer),_.bindFramebuffer(k.DRAW_FRAMEBUFFER,ni.__webglFramebuffer);for(let Gi=0;Gi<Se;Gi++)Rn&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,G.get(b).__webglTexture,B,ze+Gi),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,G.get(V).__webglTexture,oe,ut+Gi)),k.blitFramebuffer(Te,Le,ve,le,Ce,We,ve,le,k.DEPTH_BUFFER_BIT,k.NEAREST);_.bindFramebuffer(k.READ_FRAMEBUFFER,null),_.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(B!==0||b.isRenderTargetTexture||G.has(b)){const _t=G.get(b),Pn=G.get(V);_.bindFramebuffer(k.READ_FRAMEBUFFER,$),_.bindFramebuffer(k.DRAW_FRAMEBUFFER,z);for(let rt=0;rt<Se;rt++)Rn?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,_t.__webglTexture,B,ze+rt):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,_t.__webglTexture,B),at?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Pn.__webglTexture,oe,ut+rt):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Pn.__webglTexture,oe),B!==0?k.blitFramebuffer(Te,Le,ve,le,Ce,We,ve,le,k.COLOR_BUFFER_BIT,k.NEAREST):at?k.copyTexSubImage3D(Me,oe,Ce,We,ut+rt,Te,Le,ve,le):k.copyTexSubImage2D(Me,oe,Ce,We,Te,Le,ve,le);_.bindFramebuffer(k.READ_FRAMEBUFFER,null),_.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else at?b.isDataTexture||b.isData3DTexture?k.texSubImage3D(Me,oe,Ce,We,ut,ve,le,Se,it,Dt,dt.data):V.isCompressedArrayTexture?k.compressedTexSubImage3D(Me,oe,Ce,We,ut,ve,le,Se,it,dt.data):k.texSubImage3D(Me,oe,Ce,We,ut,ve,le,Se,it,Dt,dt):b.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,oe,Ce,We,ve,le,it,Dt,dt.data):b.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,oe,Ce,We,dt.width,dt.height,it,dt.data):k.texSubImage2D(k.TEXTURE_2D,oe,Ce,We,ve,le,it,Dt,dt);_.pixelStorei(k.UNPACK_ROW_LENGTH,en),_.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ke),_.pixelStorei(k.UNPACK_SKIP_PIXELS,dn),_.pixelStorei(k.UNPACK_SKIP_ROWS,tn),_.pixelStorei(k.UNPACK_SKIP_IMAGES,yn),oe===0&&V.generateMipmaps&&k.generateMipmap(Me),_.unbindTexture()},this.initRenderTarget=function(b){G.get(b).__webglFramebuffer===void 0&&K.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?K.setTextureCube(b,0):b.isData3DTexture?K.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?K.setTexture2DArray(b,0):K.setTexture2D(b,0),_.unbindTexture()},this.resetState=function(){Y=0,j=0,D=null,_.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ze._getUnpackColorSpace()}}function kw({className:t="",style:e={},trailLength:n=26,inertia:i=.72,brightness:r=.85,color:s="#bdf052",zIndex:a=0}){const l=ce.useRef(null);return ce.useEffect(()=>{const c=l.current;if(!c)return;const u=c.parentElement||document.body;let h=!0;const p="ontouchstart"in window||navigator.maxTouchPoints>0,f=new Ow({antialias:!1,alpha:!0,depth:!1,stencil:!1,powerPreference:p?"low-power":"high-performance",premultipliedAlpha:!1,preserveDrawingBuffer:!1});f.setClearColor(0,0),f.domElement.style.pointerEvents="none",f.domElement.style.position="absolute",f.domElement.style.inset="0",f.domElement.style.width="100%",f.domElement.style.height="100%",f.domElement.style.background="transparent",c.appendChild(f.domElement);const m=new Sy,g=new Nh(-1,1,1,-1,0,1),w=new go(2,2),x=Math.max(8,Math.floor(n)),d=Array.from({length:x},()=>new qe(.5,.5));let y=0;const M=new st(s),S=`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `,T=`
      precision highp float;
      uniform float iTime;
      uniform vec2 iResolution;
      uniform vec2 iMouse;
      uniform vec2 iPrevMouse[${x}];
      uniform float iOpacity;
      uniform float iScale;
      uniform vec3 iBaseColor;
      uniform float iBrightness;
      varying vec2 vUv;

      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
      }
      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
      }
      float fbm(vec2 p) {
        float v = 0.0;
        float a = 0.5;
        mat2 m = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
        for (int i = 0; i < 3; i++) {
          v += a * noise(p);
          p = m * p * 2.0;
          a *= 0.5;
        }
        return v;
      }

      vec4 blob(vec2 p, vec2 mp, float intensity, float activity) {
        vec2 q = vec2(fbm(p * iScale + iTime * 0.1), fbm(p * iScale + vec2(5.2, 1.3) + iTime * 0.1));
        float smoke = fbm(p * iScale + q * 1.5 + iTime * 0.15);
        float radius = 0.40 + 0.25 * (1.0 / iScale);
        float dist = length(p - mp);
        float distFactor = 1.0 - smoothstep(0.0, radius * activity, dist);
        float alpha = pow(smoke, 2.0) * distFactor;
        vec3 col = mix(iBaseColor, vec3(0.9, 1.0, 0.6), sin(iTime * 0.5) * 0.5 + 0.5);
        return vec4(col * alpha * intensity, alpha * intensity);
      }

      void main() {
        vec2 uv = (gl_FragCoord.xy / iResolution.xy * 2.0 - 1.0) * vec2(iResolution.x / iResolution.y, 1.0);
        vec2 mouse = (iMouse * 2.0 - 1.0) * vec2(iResolution.x / iResolution.y, 1.0);
        vec3 colorAcc = vec3(0.0);
        float alphaAcc = 0.0;

        vec4 b = blob(uv, mouse, 1.2, iOpacity);
        colorAcc += b.rgb;
        alphaAcc += b.a;

        for (int i = 0; i < ${x}; i++) {
          vec2 pm = (iPrevMouse[i] * 2.0 - 1.0) * vec2(iResolution.x / iResolution.y, 1.0);
          float t = 1.0 - float(i) / float(${x});
          t = pow(t, 2.0);
          if (t > 0.03) {
            vec4 bt = blob(uv, pm, t * 0.85, iOpacity);
            colorAcc += bt.rgb;
            alphaAcc += bt.a;
          }
        }

        colorAcc *= iBrightness;
        float outAlpha = clamp(alphaAcc * iOpacity * 0.55, 0.0, 0.55);
        gl_FragColor = vec4(colorAcc, outAlpha);
      }
    `,E=new ei({uniforms:{iTime:{value:0},iResolution:{value:new qe(window.innerWidth,window.innerHeight)},iMouse:{value:new qe(.5,.5)},iPrevMouse:{value:d.map(D=>D.clone())},iOpacity:{value:1},iScale:{value:1},iBaseColor:{value:new X(M.r,M.g,M.b)},iBrightness:{value:r}},vertexShader:S,fragmentShader:T,transparent:!0,depthTest:!1,depthWrite:!1}),C=new vi(w,E);m.add(C);const v=()=>{if(!h||!c)return;const D=u.getBoundingClientRect(),W=Math.max(1,Math.floor(D.width||window.innerWidth)),q=Math.max(1,Math.floor(D.height||window.innerHeight)),ne=Math.min(window.devicePixelRatio||1,1.5);f.setPixelRatio(ne),f.setSize(W,q,!1),E.uniforms.iResolution.value.set(W*ne,q*ne),E.uniforms.iScale.value=Math.max(.6,Math.min(1.8,Math.min(W,q)/600))};v(),window.addEventListener("resize",v,{passive:!0});const N=performance.now(),L=new qe(.5,.5),P=new qe(0,0);let F=1,I=performance.now(),$=!0,z=null;const Y=()=>{if(!h)return;const D=performance.now(),W=(D-N)/1e3;if($)P.set(L.x-E.uniforms.iMouse.value.x,L.y-E.uniforms.iMouse.value.y),E.uniforms.iMouse.value.copy(L),F=1;else{P.multiplyScalar(i),P.lengthSq()>1e-6&&E.uniforms.iMouse.value.add(P);const re=D-I;if(re>800){const Fe=Math.min(1,(re-800)/1200);F=Math.max(.15,1-Fe)}}const q=d.length;y=(y+1)%q,d[y].copy(E.uniforms.iMouse.value);const ne=E.uniforms.iPrevMouse.value;for(let re=0;re<q;re++){const Fe=(y-re+q)%q;ne[re].copy(d[Fe])}E.uniforms.iOpacity.value=F,E.uniforms.iTime.value=W,f.render(m,g),z=requestAnimationFrame(Y)},j=D=>{const W=u.getBoundingClientRect(),q=D.clientX??(D.touches&&D.touches[0]?D.touches[0].clientX:window.innerWidth/2),ne=D.clientY??(D.touches&&D.touches[0]?D.touches[0].clientY:window.innerHeight/2),re=pm.clamp((q-W.left)/Math.max(1,W.width),0,1),Fe=pm.clamp(1-(ne-W.top)/Math.max(1,W.height),0,1);L.set(re,Fe),$=!0,I=performance.now()};return window.addEventListener("pointermove",j,{passive:!0}),window.addEventListener("touchmove",j,{passive:!0}),z=requestAnimationFrame(Y),()=>{h=!1,z&&cancelAnimationFrame(z),window.removeEventListener("pointermove",j),window.removeEventListener("touchmove",j),window.removeEventListener("resize",v),m.clear(),w.dispose(),E.dispose(),f.dispose(),f.forceContextLoss(),f.domElement.parentElement&&f.domElement.parentElement.removeChild(f.domElement)}},[n,i,r,s]),o.jsx("div",{ref:l,className:`pointer-events-none absolute inset-0 overflow-hidden ${t}`,style:{zIndex:a,...e}})}function Zs({size:t="md",showText:e=!0,subtitle:n="Academia de Idiomas",className:i=""}){const r={sm:{icon:"w-7 h-7",text:"text-base",sub:"text-[8px]"},md:{icon:"w-9 h-9",text:"text-xl",sub:"text-[9px]"},lg:{icon:"w-11 h-11",text:"text-2xl",sub:"text-[10px]"},xl:{icon:"w-14 h-14",text:"text-3xl",sub:"text-xs"}},s=r[t]||r.md;return o.jsxs("div",{className:`flex items-center gap-3 select-none ${i}`,children:[o.jsx("div",{className:`relative ${s.icon} flex-shrink-0 group-hover:scale-105 transition-transform duration-300`,children:o.jsxs("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-full h-full drop-shadow-[0_4px_14px_rgba(189,240,82,0.22)]",children:[o.jsxs("defs",{children:[o.jsxs("linearGradient",{id:"vg-lime-grad",x1:"6",y1:"8",x2:"24",y2:"42",gradientUnits:"userSpaceOnUse",children:[o.jsx("stop",{offset:"0%",stopColor:"#e2fd70"}),o.jsx("stop",{offset:"55%",stopColor:"#bdf052"}),o.jsx("stop",{offset:"100%",stopColor:"#84cc16"})]}),o.jsxs("linearGradient",{id:"vg-blue-grad",x1:"42",y1:"8",x2:"24",y2:"42",gradientUnits:"userSpaceOnUse",children:[o.jsx("stop",{offset:"0%",stopColor:"#38bdf8"}),o.jsx("stop",{offset:"65%",stopColor:"#0284c7"}),o.jsx("stop",{offset:"100%",stopColor:"#1e1848"})]}),o.jsxs("linearGradient",{id:"vg-core-grad",x1:"24",y1:"14",x2:"24",y2:"28",gradientUnits:"userSpaceOnUse",children:[o.jsx("stop",{offset:"0%",stopColor:"#ffffff"}),o.jsx("stop",{offset:"100%",stopColor:"#bdf052"})]})]}),o.jsx("rect",{x:"2.5",y:"2.5",width:"43",height:"43",rx:"12",fill:"#0c0926",stroke:"#ffffff",strokeOpacity:"0.12",strokeWidth:"1.5"}),o.jsx("line",{x1:"24",y1:"6",x2:"24",y2:"42",stroke:"#ffffff",strokeOpacity:"0.08",strokeWidth:"1",strokeDasharray:"2 2"}),o.jsx("path",{d:"M10 12 L17.5 12 L24 32.5 L20 36.5 L10 12 Z",fill:"url(#vg-lime-grad)"}),o.jsx("path",{d:"M38 12 L30.5 12 L24 32.5 L28 36.5 L38 12 Z",fill:"url(#vg-blue-grad)"}),o.jsx("path",{d:"M24 16 L27.5 21.5 L24 27 L20.5 21.5 Z",fill:"url(#vg-core-grad)"}),o.jsx("circle",{cx:"24",cy:"38",r:"1.5",fill:"#bdf052"})]})}),e&&o.jsxs("div",{className:"flex flex-col",children:[o.jsx("span",{className:`font-display ${s.text} tracking-[0.16em] uppercase text-white font-bold leading-none`,children:"Vanguard"}),o.jsx("span",{className:`${s.sub} text-brand-lime font-mono tracking-[0.22em] uppercase font-semibold mt-1 hidden sm:block`,children:n})]})]})}const Bw="Vanguard_academy_bot",hl=`https://t.me/${Bw}`;function zw({onNavigateToChat:t,onNavigateToAdmin:e}){const[n,i]=ce.useState("inicio"),[r,s]=ce.useState(!1),[a,l]=ce.useState(!1),[c,u]=ce.useState(!1),[h,p]=ce.useState({name:"",phone:"",email:"",language:"Inglés",modality:"100% Virtual en Vivo"}),[f,m]=ce.useState(!1);ce.useEffect(()=>{const d=["inicio","programas","modalidades","horarios","precios","placement-test"],y=()=>{const M=window.scrollY;if(l(M>40),s(M>280),M<180){i("inicio");return}if(window.innerHeight+Math.ceil(M)>=document.documentElement.scrollHeight-60){i("placement-test");return}const S=200;let T="inicio";for(const E of d){const C=document.getElementById(E);if(C){const v=C.getBoundingClientRect();if(v.top<=S&&v.bottom>S){T=E;break}}}i(T)};return window.addEventListener("scroll",y,{passive:!0}),y(),()=>window.removeEventListener("scroll",y)},[]),ce.useEffect(()=>{const d=M=>{M.key==="Escape"&&u(!1)},y=()=>{window.innerWidth>=1280&&u(!1)};return window.addEventListener("keydown",d),window.addEventListener("resize",y),()=>{window.removeEventListener("keydown",d),window.removeEventListener("resize",y)}},[]);const g=d=>{d&&d.preventDefault(),u(!1),window.scrollTo({top:0,behavior:"smooth"}),i("inicio")},w=(d,y)=>{d&&d.preventDefault(),u(!1);const M=document.getElementById(y);if(M){const S=a?76:84,T=M.getBoundingClientRect().top+window.scrollY,E=Math.max(0,T-S);window.scrollTo({top:E,behavior:"smooth"}),i(y)}},x=d=>{d.preventDefault(),m(!0)};return o.jsxs("div",{className:"bg-[#070515] text-slate-200 min-h-screen flex flex-col font-sans relative overflow-x-hidden selection:bg-brand-lime selection:text-brand-dark",children:[o.jsx("div",{className:`fixed top-0 inset-x-0 h-28 sm:h-32 z-40 pointer-events-none transition-opacity duration-500 ${a?"opacity-100":"opacity-0"}`,style:{background:"linear-gradient(to bottom, rgba(7, 5, 21, 0.95) 0%, rgba(7, 5, 21, 0.7) 40%, rgba(7, 5, 21, 0.25) 75%, transparent 100%)",backdropFilter:"blur(16px)",WebkitBackdropFilter:"blur(16px)",maskImage:"linear-gradient(to bottom, black 50%, transparent 100%)",WebkitMaskImage:"linear-gradient(to bottom, black 50%, transparent 100%)"}}),c&&o.jsx("div",{className:"fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden pointer-events-auto transition-opacity duration-300",onClick:()=>u(!1),"aria-hidden":"true"}),o.jsxs("header",{className:`fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-out pointer-events-none ${a?"pt-3 sm:pt-4 px-3 sm:px-6":"pt-0 px-0"}`,children:[o.jsxs("div",{className:`mx-auto pointer-events-auto transition-all duration-500 ease-out flex items-center justify-between ${a?"max-w-6xl border border-white/15 rounded-full px-4 sm:px-6 py-2.5 shadow-[0_16px_40px_-6px_rgba(0,0,0,0.9),0_0_24px_rgba(189,240,82,0.06)] ring-1 ring-white/10":"max-w-7xl border-b border-white/10 px-5 sm:px-6 py-3.5"}`,style:{backgroundColor:a?"rgba(10, 7, 34, 0.75)":"rgba(7, 5, 21, 0.70)",backdropFilter:"blur(28px) saturate(190%)",WebkitBackdropFilter:"blur(28px) saturate(190%)"},children:[o.jsx("a",{href:"#inicio",onClick:g,className:"group transition-transform hover:opacity-95",title:"Vanguard Academia de Idiomas - Ir al Inicio",children:o.jsx(Zs,{size:"md"})}),o.jsxs("nav",{className:"hidden xl:flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/10 text-xs font-medium",children:[o.jsxs("a",{href:"#inicio",onClick:g,className:`inline-flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium transition-all duration-200 leading-none whitespace-nowrap ${n==="inicio"?"text-brand-lime bg-brand-lime/15 font-bold shadow-sm":"text-slate-300 hover:text-white hover:bg-white/5"}`,children:[o.jsx(Jp,{className:"text-xs"}),o.jsx("span",{children:"Inicio"})]}),o.jsx("a",{href:"#programas",onClick:d=>w(d,"programas"),className:`inline-flex items-center justify-center py-1.5 px-3 rounded-full text-xs font-medium transition-all duration-200 leading-none whitespace-nowrap ${n==="programas"?"text-brand-lime bg-brand-lime/15 font-bold shadow-sm":"text-slate-300 hover:text-white hover:bg-white/5"}`,children:"Idiomas & MCER"}),o.jsx("a",{href:"#modalidades",onClick:d=>w(d,"modalidades"),className:`inline-flex items-center justify-center py-1.5 px-3 rounded-full text-xs font-medium transition-all duration-200 leading-none whitespace-nowrap ${n==="modalidades"?"text-brand-lime bg-brand-lime/15 font-bold shadow-sm":"text-slate-300 hover:text-white hover:bg-white/5"}`,children:"Sedes & Modalidades"}),o.jsx("a",{href:"#horarios",onClick:d=>w(d,"horarios"),className:`inline-flex items-center justify-center py-1.5 px-3 rounded-full text-xs font-medium transition-all duration-200 leading-none whitespace-nowrap ${n==="horarios"?"text-brand-lime bg-brand-lime/15 font-bold shadow-sm":"text-slate-300 hover:text-white hover:bg-white/5"}`,children:"Horarios"}),o.jsx("a",{href:"#precios",onClick:d=>w(d,"precios"),className:`inline-flex items-center justify-center py-1.5 px-3 rounded-full text-xs font-medium transition-all duration-200 leading-none whitespace-nowrap ${n==="precios"?"text-brand-lime bg-brand-lime/15 font-bold shadow-sm":"text-slate-300 hover:text-white hover:bg-white/5"}`,children:"Precios COP"}),o.jsx("a",{href:"#placement-test",onClick:d=>w(d,"placement-test"),className:`inline-flex items-center justify-center py-1.5 px-3.5 rounded-full text-xs font-medium transition-all duration-200 leading-none whitespace-nowrap ${n==="placement-test"?"text-brand-lime bg-brand-lime/15 font-bold shadow-sm":"text-brand-lime/90 hover:text-brand-lime hover:bg-white/5"}`,children:"Placement Test"})]}),o.jsxs("div",{className:"flex items-center gap-2 sm:gap-2.5 flex-shrink-0",children:[o.jsxs("a",{href:hl,target:"_blank",rel:"noopener noreferrer",className:"hidden sm:inline-flex items-center justify-center gap-1.5 h-8 px-3.5 rounded-full font-semibold text-xs text-white bg-[#229ED9] hover:bg-[#1e8ec3] transition-all hover:scale-105 shadow-sm shadow-[#229ED9]/25 flex-shrink-0 leading-none text-center whitespace-nowrap",title:"Abrir Bot Oficial en Telegram",children:[o.jsx(Rs,{className:"text-xs flex-shrink-0"}),o.jsx("span",{children:"Bot Telegram"})]}),o.jsxs("button",{onClick:t,className:"inline-flex items-center justify-center gap-1.5 h-8 px-3 sm:px-3.5 rounded-full font-bold text-xs text-brand-dark bg-brand-lime hover:bg-[#b0f55c] transition-all hover:scale-105 shadow-sm shadow-brand-lime/25 flex-shrink-0 leading-none text-center whitespace-nowrap",title:"Chatear con Vanguard AI",children:[o.jsx(ci,{className:"text-xs flex-shrink-0"}),o.jsx("span",{children:"Vanguard AI"})]}),o.jsxs("button",{onClick:e,className:"hidden md:inline-flex items-center justify-center gap-1.5 h-8 px-3 rounded-full border border-white/20 text-white/80 hover:text-white hover:border-white/40 bg-white/5 hover:bg-white/10 text-xs font-medium transition-all flex-shrink-0 leading-none text-center whitespace-nowrap",title:"Acceso Portal Staff / Administrativo",children:[o.jsx(Zp,{className:"text-xs flex-shrink-0"}),o.jsx("span",{children:"Staff"})]}),o.jsx("button",{type:"button",onClick:()=>u(!c),className:"xl:hidden inline-flex items-center justify-center w-8 h-8 rounded-full border border-white/20 text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 transition-colors focus:outline-none flex-shrink-0","aria-label":c?"Cerrar menú de navegación":"Abrir menú de navegación",title:c?"Cerrar menú":"Menú de navegación",children:c?o.jsx(H_,{className:"text-sm"}):o.jsx(yg,{className:"text-sm"})})]})]}),c&&o.jsx("div",{className:"xl:hidden pointer-events-auto max-w-lg mx-auto mt-2 px-3 sm:px-4",children:o.jsxs("div",{className:"rounded-2xl border border-white/15 bg-[#0a0722]/95 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_30px_rgba(189,240,82,0.08)] ring-1 ring-white/10 p-4 sm:p-5 flex flex-col gap-3 animate-in fade-in slide-in-from-top-3 duration-200",children:[o.jsxs("div",{className:"flex items-center justify-between pb-2.5 border-b border-white/10",children:[o.jsx("span",{className:"text-[11px] font-bold tracking-wider text-slate-400 uppercase",children:"Navegación"}),o.jsx("span",{className:"text-[10px] font-semibold text-brand-lime bg-brand-lime/10 px-2 py-0.5 rounded-full border border-brand-lime/20",children:"Vanguard 2026"})]}),o.jsxs("nav",{className:"flex flex-col gap-1.5",children:[o.jsxs("a",{href:"#inicio",onClick:g,className:`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${n==="inicio"?"text-brand-lime bg-brand-lime/15 font-bold shadow-sm":"text-slate-300 hover:text-white hover:bg-white/5"}`,children:[o.jsxs("div",{className:"flex items-center gap-2.5",children:[o.jsx("div",{className:"w-6 h-6 rounded-lg bg-white/5 flex items-center justify-center text-brand-lime flex-shrink-0",children:o.jsx(Jp,{className:"text-xs"})}),o.jsx("span",{children:"Inicio"})]}),o.jsx(Xi,{className:"text-[10px] text-slate-500"})]}),o.jsxs("a",{href:"#programas",onClick:d=>w(d,"programas"),className:`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${n==="programas"?"text-brand-lime bg-brand-lime/15 font-bold shadow-sm":"text-slate-300 hover:text-white hover:bg-white/5"}`,children:[o.jsxs("div",{className:"flex items-center gap-2.5",children:[o.jsx("div",{className:"w-6 h-6 rounded-lg bg-white/5 flex items-center justify-center text-brand-lime flex-shrink-0",children:o.jsx(em,{className:"text-xs"})}),o.jsx("span",{children:"Idiomas & MCER"})]}),o.jsx(Xi,{className:"text-[10px] text-slate-500"})]}),o.jsxs("a",{href:"#modalidades",onClick:d=>w(d,"modalidades"),className:`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${n==="modalidades"?"text-brand-lime bg-brand-lime/15 font-bold shadow-sm":"text-slate-300 hover:text-white hover:bg-white/5"}`,children:[o.jsxs("div",{className:"flex items-center gap-2.5",children:[o.jsx("div",{className:"w-6 h-6 rounded-lg bg-white/5 flex items-center justify-center text-brand-lime flex-shrink-0",children:o.jsx(Al,{className:"text-xs"})}),o.jsx("span",{children:"Sedes & Modalidades"})]}),o.jsx(Xi,{className:"text-[10px] text-slate-500"})]}),o.jsxs("a",{href:"#horarios",onClick:d=>w(d,"horarios"),className:`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${n==="horarios"?"text-brand-lime bg-brand-lime/15 font-bold shadow-sm":"text-slate-300 hover:text-white hover:bg-white/5"}`,children:[o.jsxs("div",{className:"flex items-center gap-2.5",children:[o.jsx("div",{className:"w-6 h-6 rounded-lg bg-white/5 flex items-center justify-center text-brand-lime flex-shrink-0",children:o.jsx(su,{className:"text-xs"})}),o.jsx("span",{children:"Horarios"})]}),o.jsx(Xi,{className:"text-[10px] text-slate-500"})]}),o.jsxs("a",{href:"#precios",onClick:d=>w(d,"precios"),className:`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${n==="precios"?"text-brand-lime bg-brand-lime/15 font-bold shadow-sm":"text-slate-300 hover:text-white hover:bg-white/5"}`,children:[o.jsxs("div",{className:"flex items-center gap-2.5",children:[o.jsx("div",{className:"w-6 h-6 rounded-lg bg-white/5 flex items-center justify-center text-brand-lime flex-shrink-0",children:o.jsx(tm,{className:"text-xs"})}),o.jsx("span",{children:"Precios COP"})]}),o.jsx(Xi,{className:"text-[10px] text-slate-500"})]}),o.jsxs("a",{href:"#placement-test",onClick:d=>w(d,"placement-test"),className:`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${n==="placement-test"?"text-brand-lime bg-brand-lime/15 font-bold shadow-sm":"text-brand-lime/90 hover:text-brand-lime hover:bg-white/5"}`,children:[o.jsxs("div",{className:"flex items-center gap-2.5",children:[o.jsx("div",{className:"w-6 h-6 rounded-lg bg-white/5 flex items-center justify-center text-brand-lime flex-shrink-0",children:o.jsx(X_,{className:"text-xs"})}),o.jsx("span",{children:"Placement Test"})]}),o.jsx(Xi,{className:"text-[10px] text-slate-500"})]})]}),o.jsxs("div",{className:"pt-2.5 border-t border-white/10 flex flex-col gap-2",children:[o.jsxs("a",{href:hl,target:"_blank",rel:"noopener noreferrer",className:"w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#229ED9] hover:bg-[#1e8ec3] transition-all shadow-md shadow-[#229ED9]/20",children:[o.jsxs("div",{className:"flex items-center gap-2.5",children:[o.jsx("div",{className:"w-6 h-6 rounded-lg bg-white/20 flex items-center justify-center text-white flex-shrink-0",children:o.jsx(Rs,{className:"text-xs"})}),o.jsx("span",{children:"Bot Telegram Oficial"})]}),o.jsx("span",{className:"text-[10px] font-mono bg-black/25 px-2 py-0.5 rounded-full",children:"24/7"})]}),o.jsxs("button",{type:"button",onClick:()=>{u(!1),t()},className:"w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold text-brand-dark bg-brand-lime hover:bg-[#b0f55c] transition-all shadow-md shadow-brand-lime/20",children:[o.jsxs("div",{className:"flex items-center gap-2.5",children:[o.jsx("div",{className:"w-6 h-6 rounded-lg bg-brand-dark/15 flex items-center justify-center text-brand-dark flex-shrink-0",children:o.jsx(ci,{className:"text-xs"})}),o.jsx("span",{children:"Chatear con Vanguard AI"})]}),o.jsx("span",{className:"text-[10px] font-mono bg-brand-dark/15 px-2 py-0.5 rounded-full",children:"En Vivo"})]}),o.jsxs("button",{type:"button",onClick:()=>{u(!1),e()},className:"w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium border border-white/20 text-white/80 hover:text-white hover:border-white/40 bg-white/5 hover:bg-white/10 transition-all",children:[o.jsxs("div",{className:"flex items-center gap-2.5",children:[o.jsx("div",{className:"w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center text-white flex-shrink-0",children:o.jsx(Zp,{className:"text-xs"})}),o.jsx("span",{children:"Acceso Portal Staff"})]}),o.jsx(Xi,{className:"text-[10px] text-slate-500"})]})]})]})})]}),o.jsxs("section",{id:"inicio",className:"relative min-h-[85vh] flex flex-col justify-center items-center text-center px-4 sm:px-6 pt-24 sm:pt-28 pb-16 overflow-hidden bg-gradient-to-b from-[#070515] via-[#0c0926] to-[#070515]",children:[o.jsx(kw,{color:"#bdf052",trailLength:24,inertia:.74,brightness:.8,zIndex:0,className:"opacity-55 pointer-events-none"}),o.jsxs("div",{className:"relative z-10 max-w-4xl mx-auto space-y-5 pointer-events-auto",children:[o.jsxs("div",{className:"inline-flex items-center justify-center text-center gap-2 px-3 sm:px-3.5 py-1 rounded-full bg-brand-lime/10 border border-brand-lime/30 text-brand-lime text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider sm:tracking-widest animate-pulse max-w-full",children:[o.jsx(s2,{className:"text-xs flex-shrink-0"}),o.jsx("span",{className:"truncate sm:overflow-visible",children:"Acreditación Oficial MCER (A1 a C1) • Sedes Bogotá & Medellín"})]}),o.jsxs("h1",{className:"font-display text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white leading-[1.08]",children:["Aprende idiomas con ",o.jsx("span",{className:"text-brand-lime",children:"Fluidez Real"})," y Tecnología ",o.jsx("span",{className:"text-brand-blue",children:"Inteligente"})]}),o.jsxs("p",{className:"text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed",children:["Formación inmersiva en ",o.jsx("strong",{className:"text-white",children:"Inglés, Francés, Alemán, Italiano y Portugués"}),". Clases presenciales en sedes exclusivas o 100% virtual en vivo con tutores certificados y asistencia 24/7."]}),o.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-3 pt-2",children:[o.jsxs("a",{href:"#placement-test",onClick:d=>w(d,"placement-test"),className:"w-full sm:w-auto px-6 py-3 bg-brand-lime hover:bg-[#b5f85e] text-brand-dark rounded-full font-bold text-sm uppercase tracking-wide transition-transform hover:scale-105 shadow-lg shadow-brand-lime/20 flex items-center justify-center gap-2.5",children:[o.jsx("span",{children:"Prueba de Nivel Gratuita"}),o.jsx(Xi,{className:"text-xs"})]}),o.jsxs("button",{onClick:t,className:"w-full sm:w-auto px-6 py-3 bg-white/10 hover:bg-white/15 border border-white/20 text-white rounded-full font-bold text-sm uppercase tracking-wide transition-colors flex items-center justify-center gap-2.5",children:[o.jsx(ci,{className:"text-brand-blue text-base"}),o.jsx("span",{children:"Consultar al Asistente IA"})]}),o.jsxs("a",{href:hl,target:"_blank",rel:"noopener noreferrer",className:"w-full sm:w-auto px-5 py-3 bg-[#229ED9]/20 hover:bg-[#229ED9]/30 border border-[#229ED9]/40 text-[#229ED9] hover:text-white rounded-full font-bold text-sm uppercase tracking-wide transition-colors flex items-center justify-center gap-2.5",children:[o.jsx(Rs,{className:"text-base"}),o.jsx("span",{children:"Canal Telegram"})]})]}),o.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-2.5 pt-6 text-left",children:[o.jsxs("div",{className:"p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm",children:[o.jsx("span",{className:"text-[11px] text-brand-lime font-mono block",children:"Matrículas 2026"}),o.jsx("span",{className:"text-white font-bold text-xs sm:text-sm",children:"Ciclos Abiertos"}),o.jsx("p",{className:"text-slate-400 text-[11px] mt-0.5",children:"Intensivos y Sabatinos"})]}),o.jsxs("div",{className:"p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm",children:[o.jsx("span",{className:"text-[11px] text-brand-blue font-mono block",children:"Tarifas en COP"}),o.jsx("span",{className:"text-white font-bold text-xs sm:text-sm",children:"Desde $520.000"}),o.jsx("p",{className:"text-slate-400 text-[11px] mt-0.5",children:"10% de dcto por pronto pago"})]}),o.jsxs("div",{className:"p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm",children:[o.jsx("span",{className:"text-[11px] text-brand-yellow font-mono block",children:"Sedes Físicas"}),o.jsx("span",{className:"text-white font-bold text-xs sm:text-sm",children:"Bogotá & Medellín"}),o.jsx("p",{className:"text-slate-400 text-[11px] mt-0.5",children:"Chapinero, Cl 100, Poblado"})]}),o.jsxs("div",{className:"p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm",children:[o.jsx("span",{className:"text-[11px] text-brand-purple font-mono block",children:"Certificaciones"}),o.jsx("span",{className:"text-white font-bold text-xs sm:text-sm",children:"IELTS / TOEFL / DELF"}),o.jsx("p",{className:"text-slate-400 text-[11px] mt-0.5",children:"Simulacros evaluados"})]})]})]})]}),o.jsx("section",{id:"programas",className:"relative z-10 py-16 sm:py-20 px-4 sm:px-6 border-t border-white/10 bg-[#070515]",children:o.jsxs("div",{className:"max-w-6xl mx-auto space-y-10",children:[o.jsxs("div",{className:"text-center max-w-2xl mx-auto space-y-3",children:[o.jsx("span",{className:"text-[11px] font-mono uppercase tracking-widest text-brand-lime bg-brand-lime/10 px-3 py-1 rounded-full border border-brand-lime/20",children:"Oferta Curricular"}),o.jsx("h2",{className:"font-display text-3xl sm:text-4xl md:text-5xl uppercase text-white",children:"5 Idiomas Globales • Marco Común Europeo (MCER)"}),o.jsx("p",{className:"text-slate-400 text-xs sm:text-sm leading-relaxed",children:"Todos nuestros cursos siguen los estándares internacionales de dominio lingüístico: desde el nivel introductorio A1 hasta el nivel avanzado operacional C1."})]}),o.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5",children:[{code:"EN",name:"Inglés",desc:"A1, A2, B1, B2, C1 con enfoque conversacional y preparación IELTS/TOEFL.",flag:"🇺🇸 / 🇬🇧",color:"border-brand-lime/40"},{code:"FR",name:"Francés",desc:"Preparación para certificaciones DELF/DALF. Enfoque profesional y cultural.",flag:"🇫🇷",color:"border-brand-blue/40"},{code:"DE",name:"Alemán",desc:"Desde A1 hasta B2 con preparación para exámenes oficiales Goethe-Zertifikat.",flag:"🇩🇪",color:"border-brand-yellow/40"},{code:"IT",name:"Italiano",desc:"Inmersión comunicativa y gramatical para negocios, turismo y ciudadanía CELI.",flag:"🇮🇹",color:"border-brand-orange/40"},{code:"PT",name:"Portugués",desc:"Portugués de Brasil y Portugal, preparación para examen internacional Celpe-Bras.",flag:"🇧🇷",color:"border-brand-purple/40"}].map(d=>o.jsxs("div",{className:`p-5 rounded-2xl bg-[#100c2a] border ${d.color} hover:border-brand-lime transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1`,children:[o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-center justify-between mb-3",children:[o.jsx("span",{className:"text-xl",children:d.flag}),o.jsx("span",{className:"font-mono text-[11px] font-bold px-2 py-0.5 rounded bg-white/10 text-white",children:d.code})]}),o.jsx("h3",{className:"text-base sm:text-lg font-bold text-white mb-1.5",children:d.name}),o.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:d.desc})]}),o.jsxs("div",{className:"mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-300",children:[o.jsx("span",{children:"Niveles A1 - C1"}),o.jsx("button",{onClick:t,className:"text-brand-lime font-bold hover:underline",children:"Consultar"})]})]},d.code))})]})}),o.jsx("section",{id:"modalidades",className:"relative z-10 py-16 sm:py-20 px-4 sm:px-6 border-t border-white/10 bg-[#0a0720]",children:o.jsxs("div",{className:"max-w-6xl mx-auto space-y-10",children:[o.jsxs("div",{className:"text-center max-w-2xl mx-auto space-y-3",children:[o.jsx("span",{className:"text-[11px] font-mono uppercase tracking-widest text-brand-blue bg-brand-blue/10 px-3 py-1 rounded-full border border-brand-blue/20",children:"Flexibilidad Total"}),o.jsx("h2",{className:"font-display text-3xl sm:text-4xl md:text-5xl uppercase text-white",children:"Sedes Físicas & Modalidad Virtual en Vivo"}),o.jsx("p",{className:"text-slate-400 text-xs sm:text-sm leading-relaxed",children:"Estudia en nuestras modernas sedes en Bogotá y Medellín o conéctate desde cualquier lugar de Colombia con clases 100% en tiempo real."})]}),o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-5",children:[o.jsxs("div",{className:"p-6 rounded-2xl bg-[#100c2a] border border-white/10 hover:border-brand-lime/50 transition-all space-y-4",children:[o.jsx("div",{className:"w-10 h-10 rounded-xl bg-brand-lime/10 text-brand-lime flex items-center justify-center text-lg",children:o.jsx(W_,{})}),o.jsx("h3",{className:"text-xl font-bold text-white",children:"Presencial en Sede"}),o.jsx("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:"Aulas climatizadas, laboratorios multimedia y clubes de conversación presenciales."}),o.jsxs("div",{className:"space-y-1.5 text-xs text-slate-400 pt-2 border-t border-white/10",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx(Al,{className:"text-brand-lime text-xs"})," ",o.jsx("strong",{children:"Bogotá:"})," Sede Chapinero & Sede Calle 100"]}),o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx(Al,{className:"text-brand-lime text-xs"})," ",o.jsx("strong",{children:"Medellín:"})," Sede El Poblado & Sede Laureles"]})]})]}),o.jsxs("div",{className:"p-6 rounded-2xl bg-[#100c2a] border border-white/10 hover:border-brand-blue/50 transition-all space-y-4",children:[o.jsx("div",{className:"w-10 h-10 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center text-lg",children:o.jsx(Z_,{})}),o.jsx("h3",{className:"text-xl font-bold text-white",children:"100% Virtual en Vivo"}),o.jsx("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:"Clases interactivas en vivo con profesores en directo a través de Zoom & Google Meet. Acceso a plataforma 24/7."}),o.jsxs("div",{className:"flex items-center gap-3 text-xs text-slate-400 pt-2 border-t border-white/10",children:[o.jsxs("span",{className:"flex items-center gap-1",children:[o.jsx(l2,{className:"text-brand-blue text-xs"})," Zoom Pro"]}),o.jsxs("span",{className:"flex items-center gap-1",children:[o.jsx(c2,{className:"text-brand-lime text-xs"})," Meet"]}),o.jsxs("span",{className:"flex items-center gap-1",children:[o.jsx(su,{className:"text-brand-yellow text-xs"})," Grabaciones 30d"]})]})]}),o.jsxs("div",{className:"p-6 rounded-2xl bg-[#100c2a] border border-white/10 hover:border-brand-yellow/50 transition-all space-y-4",children:[o.jsx("div",{className:"w-10 h-10 rounded-xl bg-brand-yellow/10 text-brand-yellow flex items-center justify-center text-lg",children:o.jsx(em,{})}),o.jsx("h3",{className:"text-xl font-bold text-white",children:"Modalidad Híbrida / Blended"}),o.jsx("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:"Alterna entre asistencia a sede física y sesiones virtuales según tu agenda laboral y académica semanal."}),o.jsxs("div",{className:"space-y-1 text-xs text-slate-400 pt-2 border-t border-white/10",children:[o.jsx("p",{children:"• Flexibilidad para ejecutivos y universitarios"}),o.jsx("p",{children:"• Mismo avance curricular y certificación oficial"})]})]})]})]})}),o.jsx("section",{id:"horarios",className:"relative z-10 py-16 sm:py-20 px-4 sm:px-6 border-t border-white/10 bg-[#070515]",children:o.jsxs("div",{className:"max-w-6xl mx-auto space-y-10",children:[o.jsxs("div",{className:"text-center max-w-2xl mx-auto space-y-3",children:[o.jsx("span",{className:"text-[11px] font-mono uppercase tracking-widest text-brand-yellow bg-brand-yellow/10 px-3 py-1 rounded-full border border-brand-yellow/20",children:"Disponibilidad Horaria"}),o.jsx("h2",{className:"font-display text-3xl sm:text-4xl md:text-5xl uppercase text-white",children:"Turnos Intensivos y Sabatinos"}),o.jsx("p",{className:"text-slate-400 text-xs sm:text-sm leading-relaxed",children:"Ajusta tu aprendizaje a tu estilo de vida con horarios matutinos, nocturnos o fines de semana."})]}),o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:[o.jsxs("div",{className:"p-6 rounded-2xl bg-[#100c2a] border border-white/10 space-y-4",children:[o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsxs("div",{className:"flex items-center gap-2.5",children:[o.jsx(su,{className:"text-xl text-brand-lime"}),o.jsx("h3",{className:"text-lg sm:text-xl font-bold text-white",children:"Intensivo Lunes a Viernes"})]}),o.jsx("span",{className:"text-[11px] font-mono px-2.5 py-0.5 bg-brand-lime/10 text-brand-lime rounded-full border border-brand-lime/30",children:"40 horas / mes"})]}),o.jsx("p",{className:"text-xs sm:text-sm text-slate-300",children:"2 horas diarias de clase interactiva:"}),o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs",children:[o.jsxs("div",{className:"p-2.5 rounded-xl bg-white/5 border border-white/10",children:[o.jsx("span",{className:"text-slate-400 block text-[11px]",children:"Mañana:"}),o.jsx("strong",{className:"text-white text-xs",children:"6:00 AM - 8:00 AM"})]}),o.jsxs("div",{className:"p-2.5 rounded-xl bg-white/5 border border-white/10",children:[o.jsx("span",{className:"text-slate-400 block text-[11px]",children:"Intermedio:"}),o.jsx("strong",{className:"text-white text-xs",children:"8:30 AM - 10:30 AM"})]}),o.jsxs("div",{className:"p-2.5 rounded-xl bg-white/5 border border-white/10",children:[o.jsx("span",{className:"text-slate-400 block text-[11px]",children:"Noche:"}),o.jsx("strong",{className:"text-white text-xs",children:"6:30 PM - 8:30 PM"})]})]})]}),o.jsxs("div",{className:"p-6 rounded-2xl bg-[#100c2a] border border-white/10 space-y-4",children:[o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsxs("div",{className:"flex items-center gap-2.5",children:[o.jsx(i2,{className:"text-xl text-brand-blue"}),o.jsx("h3",{className:"text-lg sm:text-xl font-bold text-white",children:"Sabatino Concentrado"})]}),o.jsx("span",{className:"text-[11px] font-mono px-2.5 py-0.5 bg-brand-blue/10 text-brand-blue rounded-full border border-brand-blue/30",children:"20 horas / mes"})]}),o.jsx("p",{className:"text-xs sm:text-sm text-slate-300",children:"Sesión única de fin de semana:"}),o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs",children:[o.jsxs("div",{className:"p-2.5 rounded-xl bg-white/5 border border-white/10",children:[o.jsx("span",{className:"text-slate-400 block text-[11px]",children:"Sábados Mañana:"}),o.jsx("strong",{className:"text-white text-xs",children:"8:00 AM - 1:00 PM"})]}),o.jsxs("div",{className:"p-2.5 rounded-xl bg-white/5 border border-white/10",children:[o.jsx("span",{className:"text-slate-400 block text-[11px]",children:"Sábados Tarde:"}),o.jsx("strong",{className:"text-white text-xs",children:"1:30 PM - 6:30 PM"})]})]})]})]})]})}),o.jsx("section",{id:"precios",className:"relative z-10 py-16 sm:py-20 px-4 sm:px-6 border-t border-white/10 bg-[#0a0720]",children:o.jsxs("div",{className:"max-w-6xl mx-auto space-y-10",children:[o.jsxs("div",{className:"text-center max-w-2xl mx-auto space-y-3",children:[o.jsx("span",{className:"text-[11px] font-mono uppercase tracking-widest text-brand-lime bg-brand-lime/10 px-3 py-1 rounded-full border border-brand-lime/20",children:"Tarifas Transparentes en COP"}),o.jsx("h2",{className:"font-display text-3xl sm:text-4xl md:text-5xl uppercase text-white",children:"Inversión Mensual & Descuentos"}),o.jsx("p",{className:"text-slate-400 text-xs sm:text-sm leading-relaxed",children:"Precios oficiales sin costos ocultos. Todos los programas incluyen acceso a la plataforma digital y material de estudio."})]}),o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-5",children:[o.jsxs("div",{className:"p-6 rounded-2xl bg-[#100c2a] border border-white/10 hover:border-brand-lime transition-all space-y-5 flex flex-col justify-between",children:[o.jsxs("div",{children:[o.jsx("span",{className:"text-[11px] font-mono uppercase text-slate-400",children:"Programa Sabatino"}),o.jsx("h3",{className:"text-xl font-bold text-white mt-0.5",children:"Sabatino Standard"}),o.jsxs("div",{className:"my-4",children:[o.jsx("span",{className:"text-3xl font-display text-white",children:"$520.000"}),o.jsx("span",{className:"text-slate-400 text-xs ml-1.5",children:"COP / módulo"})]}),o.jsxs("ul",{className:"space-y-2.5 text-xs text-slate-300",children:[o.jsxs("li",{className:"flex items-center gap-2",children:[o.jsx(Bt,{className:"text-brand-lime text-xs"})," 20 horas académicas al mes"]}),o.jsxs("li",{className:"flex items-center gap-2",children:[o.jsx(Bt,{className:"text-brand-lime text-xs"})," Plataforma interactiva 24/7"]}),o.jsxs("li",{className:"flex items-center gap-2",children:[o.jsx(Bt,{className:"text-brand-lime text-xs"})," Clubes de conversación virtuales"]})]})]}),o.jsx("button",{onClick:t,className:"w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-wider transition-colors",children:"Consultar con Asistente"})]}),o.jsxs("div",{className:"p-6 rounded-2xl bg-[#130f35] border-2 border-brand-lime shadow-xl shadow-brand-lime/10 space-y-5 flex flex-col justify-between relative",children:[o.jsx("div",{className:"absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-brand-lime text-brand-dark rounded-full text-[10px] font-bold uppercase tracking-widest",children:"Más Popular"}),o.jsxs("div",{children:[o.jsx("span",{className:"text-[11px] font-mono uppercase text-brand-lime",children:"Programa Intensivo"}),o.jsx("h3",{className:"text-xl font-bold text-white mt-0.5",children:"Intensivo L-V"}),o.jsxs("div",{className:"my-4",children:[o.jsx("span",{className:"text-3xl font-display text-white",children:"$650.000"}),o.jsx("span",{className:"text-slate-400 text-xs ml-1.5",children:"COP / módulo"})]}),o.jsxs("ul",{className:"space-y-2.5 text-xs text-slate-300",children:[o.jsxs("li",{className:"flex items-center gap-2",children:[o.jsx(Bt,{className:"text-brand-lime text-xs"})," 40 horas al mes (2h diarias)"]}),o.jsxs("li",{className:"flex items-center gap-2",children:[o.jsx(Bt,{className:"text-brand-lime text-xs"})," 10% dcto pronto pago ($585.000 COP)"]}),o.jsxs("li",{className:"flex items-center gap-2",children:[o.jsx(Bt,{className:"text-brand-lime text-xs"})," Simulacros internacionales"]})]})]}),o.jsx("button",{onClick:t,className:"w-full py-2.5 rounded-xl bg-brand-lime hover:bg-[#b0f55c] text-brand-dark font-bold text-xs uppercase tracking-wider transition-transform hover:scale-105",children:"Iniciar Asesoría IA"})]}),o.jsxs("div",{className:"p-6 rounded-2xl bg-[#100c2a] border border-white/10 hover:border-brand-purple transition-all space-y-5 flex flex-col justify-between",children:[o.jsxs("div",{children:[o.jsx("span",{className:"text-[11px] font-mono uppercase text-slate-400",children:"Exámenes Internacionales"}),o.jsx("h3",{className:"text-xl font-bold text-white mt-0.5",children:"Prep IELTS / TOEFL"}),o.jsxs("div",{className:"my-4",children:[o.jsx("span",{className:"text-3xl font-display text-white",children:"$780.000"}),o.jsx("span",{className:"text-slate-400 text-xs ml-1.5",children:"COP / módulo"})]}),o.jsxs("ul",{className:"space-y-2.5 text-xs text-slate-300",children:[o.jsxs("li",{className:"flex items-center gap-2",children:[o.jsx(Bt,{className:"text-brand-lime text-xs"})," 40 horas especializadas técnicas examen"]}),o.jsxs("li",{className:"flex items-center gap-2",children:[o.jsx(Bt,{className:"text-brand-lime text-xs"})," Simulacros oficiales con retroalimentación"]}),o.jsxs("li",{className:"flex items-center gap-2",children:[o.jsx(Bt,{className:"text-brand-lime text-xs"})," Material Cambridge/ETS incluido"]})]})]}),o.jsx("button",{onClick:t,className:"w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-wider transition-colors",children:"Consultar con Asistente"})]})]}),o.jsxs("div",{className:"p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs",children:[o.jsxs("div",{className:"flex items-center gap-2.5",children:[o.jsx(tm,{className:"text-lg text-brand-lime"}),o.jsxs("span",{children:[o.jsx("strong",{children:"Medios de Pago:"})," PSE, Bancolombia, Nequi, Tarjetas Débito/Crédito y Financiación Directa."]})]}),o.jsx("span",{className:"text-slate-400 font-mono text-[11px]",children:"Matrícula anual: $120.000 COP"})]})]})}),o.jsx("section",{id:"placement-test",className:"relative z-10 py-16 sm:py-20 px-4 sm:px-6 border-t border-white/10 bg-[#070515]",children:o.jsx("div",{className:"max-w-4xl mx-auto rounded-3xl bg-gradient-to-r from-[#120d36] to-[#18114a] border border-brand-lime/30 p-6 sm:p-10 shadow-2xl relative overflow-hidden",children:o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center relative z-10",children:[o.jsxs("div",{className:"space-y-4",children:[o.jsx("span",{className:"text-[11px] font-mono uppercase tracking-widest text-brand-lime bg-brand-lime/10 px-3 py-1 rounded-full border border-brand-lime/30",children:"100% Gratuita • 25 Minutos"}),o.jsx("h2",{className:"font-display text-2xl sm:text-3xl md:text-4xl uppercase text-white leading-tight",children:"Prueba de Clasificación de Nivel"}),o.jsx("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:"Descubre tu nivel exacto según el marco MCER (A1 a C1). Evaluación gramatical, de comprensión auditiva y entrevista diagnóstica."}),o.jsxs("div",{className:"space-y-1.5 text-xs text-slate-300",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx(Bt,{className:"text-brand-lime text-xs"})," Sin costo de presentación"]}),o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx(Bt,{className:"text-brand-lime text-xs"})," Resultados inmediatos y recomendación de curso"]}),o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx(Bt,{className:"text-brand-lime text-xs"})," Asesoría directa con nuestro Asistente Inteligente"]})]})]}),o.jsx("div",{className:"bg-[#0c0926]/90 p-5 rounded-2xl border border-white/10",children:f?o.jsxs("div",{className:"text-center py-6 space-y-2.5",children:[o.jsx("div",{className:"w-10 h-10 rounded-full bg-brand-lime/20 text-brand-lime flex items-center justify-center mx-auto text-lg",children:o.jsx(Bt,{})}),o.jsx("h3",{className:"text-base font-bold text-white",children:"¡Solicitud Recibida!"}),o.jsx("p",{className:"text-xs text-slate-300",children:"Te enviaremos el enlace para tu prueba de clasificación a tu correo electrónico. Puedes consultar detalles con nuestro Asistente IA."}),o.jsx("button",{onClick:t,className:"mt-3 px-5 py-2 rounded-full bg-brand-lime text-brand-dark font-bold text-xs uppercase",children:"Abrir Asistente IA"})]}):o.jsxs("form",{onSubmit:x,className:"space-y-3",children:[o.jsx("h3",{className:"text-sm font-bold text-white mb-1",children:"Solicita tu Prueba Online"}),o.jsxs("div",{children:[o.jsx("label",{className:"text-[10px] text-slate-400 block mb-1",children:"Nombre Completo"}),o.jsx("input",{type:"text",required:!0,placeholder:"Ej. Laura Gómez",value:h.name,onChange:d=>p({...h,name:d.target.value}),className:"w-full px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-lime"})]}),o.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[o.jsxs("div",{children:[o.jsx("label",{className:"text-[10px] text-slate-400 block mb-1",children:"Teléfono / WhatsApp"}),o.jsx("input",{type:"tel",required:!0,placeholder:"Ej. 310 123 4567",value:h.phone,onChange:d=>p({...h,phone:d.target.value}),className:"w-full px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-lime"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"text-[10px] text-slate-400 block mb-1",children:"Idioma de Interés"}),o.jsxs("select",{value:h.language,onChange:d=>p({...h,language:d.target.value}),className:"w-full px-3 py-1.5 rounded-xl bg-[#141038] border border-white/10 text-xs text-white focus:outline-none focus:border-brand-lime",children:[o.jsx("option",{children:"Inglés"}),o.jsx("option",{children:"Francés"}),o.jsx("option",{children:"Alemán"}),o.jsx("option",{children:"Italiano"}),o.jsx("option",{children:"Portugués"})]})]})]}),o.jsxs("div",{children:[o.jsx("label",{className:"text-[10px] text-slate-400 block mb-1",children:"Correo Electrónico"}),o.jsx("input",{type:"email",required:!0,placeholder:"Ej. laura@correo.com",value:h.email,onChange:d=>p({...h,email:d.target.value}),className:"w-full px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-lime"})]}),o.jsx("button",{type:"submit",className:"w-full py-2.5 rounded-xl bg-brand-lime hover:bg-[#b0f55c] text-brand-dark font-bold text-xs uppercase tracking-wide transition-all shadow-md mt-1",children:"Agendar Prueba Gratuita"})]})})]})})}),o.jsx("footer",{className:"py-10 px-4 sm:px-6 border-t border-white/10 bg-[#050310] text-xs text-slate-400",children:o.jsxs("div",{className:"max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5",children:[o.jsx("a",{href:"#inicio",onClick:g,className:"hover:opacity-90 transition-opacity",title:"Vanguard Academia de Idiomas - Ir al Inicio",children:o.jsx(Zs,{size:"sm",subtitle:"Colombia 2026"})}),o.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-center",children:[o.jsx("a",{href:"#programas",onClick:d=>w(d,"programas"),className:"hover:text-white transition-colors",children:"Programas"}),o.jsx("a",{href:"#precios",onClick:d=>w(d,"precios"),className:"hover:text-white transition-colors",children:"Tarifas COP"}),o.jsxs("a",{href:hl,target:"_blank",rel:"noopener noreferrer",className:"hover:text-[#229ED9] transition-colors flex items-center gap-1",children:[o.jsx(Rs,{})," Telegram Bot"]}),o.jsxs("button",{onClick:t,className:"hover:text-brand-lime transition-colors flex items-center gap-1",children:[o.jsx(ci,{})," Asistente IA"]}),o.jsx("button",{onClick:e,className:"hover:text-white transition-colors",children:"Portal Staff"})]}),o.jsx("p",{className:"text-[11px] text-slate-500",children:"© 2026 Academia de Idiomas Colombiana. Todos los derechos reservados."})]})}),o.jsx("button",{onClick:g,"aria-label":"Volver al inicio",className:`fixed bottom-5 right-5 z-40 w-10 h-10 rounded-xl bg-[#0c0926]/90 border border-brand-lime/40 text-brand-lime shadow-lg shadow-brand-lime/20 backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-brand-lime hover:text-brand-dark active:scale-95 group ${r?"opacity-100 translate-y-0 pointer-events-auto":"opacity-0 translate-y-6 pointer-events-none"}`,title:"Ir al inicio",children:o.jsx(a2,{className:"text-xs group-hover:-translate-y-0.5 transition-transform"})})]})}function Vw(){if(typeof window<"u"){const t=window.location.hostname;if(t!=="localhost"&&t!=="127.0.0.1")return"/api/v1"}return"http://localhost:8000/api/v1"}const un=Vw();async function Hw(t,e,n="web"){const i=await fetch(`${un}/chat`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:t,session_id:e,channel:n})});if(!i.ok){const r=await i.json().catch(()=>({}));throw new Error(r.detail||`Server error (${i.status})`)}return i.json()}async function jw(t,e){const n=await fetch(`${un}/auth/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t.trim(),password:e})});if(!n.ok){const i=await n.json().catch(()=>({}));throw new Error(i.detail||"Usuario o contraseña incorrectos.")}return n.json()}function _i(t){const e={"Content-Type":"application/json"};return t&&(e.Authorization=`Bearer ${t}`,e["X-Admin-Key"]=t),e}async function Gw(t){const e=await fetch(`${un}/settings/providers`,{method:"GET",headers:_i(t)});if(!e.ok)throw new Error("Error al cargar configuración de proveedores.");return e.json()}async function Ww(t,e){const n=await fetch(`${un}/settings/providers`,{method:"POST",headers:_i(t),body:JSON.stringify(e)});if(!n.ok){const i=await n.json().catch(()=>({}));throw new Error(i.detail||"Error al actualizar configuración.")}return n.json()}async function Xw(t,e,n=null){const i=await fetch(`${un}/settings/providers/test`,{method:"POST",headers:_i(t),body:JSON.stringify({provider:e,api_key:n||null})});if(!i.ok){const r=await i.json().catch(()=>({}));throw new Error(r.detail||"Fallo al verificar proveedor.")}return i.json()}async function $w(t){const e=await fetch(`${un}/metrics`,{method:"GET",headers:_i(t)});if(!e.ok)throw e.status===401||e.status===422?new Error("Clave de Administrador inválida. Acceso Denegado."):new Error(`Error al obtener métricas (${e.status})`);return e.json()}async function qw(t,e,n="",i="web",r=null){const s=await fetch(`${un}/escalation/start`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({full_name:t,national_id:e,initial_inquiry:n,channel:i,telegram_chat_id:r})});if(!s.ok){const a=await s.json().catch(()=>({}));throw new Error(a.detail||"Error al iniciar sesión con asesor")}return s.json()}async function Yw(t){const e=await fetch(`${un}/escalation/sessions`,{method:"GET",headers:_i(t)});if(!e.ok)throw new Error("No autorizado para ver sesiones de escalación");return e.json()}async function iv(t){const e=await fetch(`${un}/escalation/sessions/${t}/messages`);if(!e.ok)throw new Error("Error al cargar mensajes");return e.json()}async function Kw(t,e,n,i=null){const r=await fetch(`${un}/escalation/telegram/reply`,{method:"POST",headers:_i(t),body:JSON.stringify({telegram_chat_id:e,message:n,session_id:i})});if(!r.ok){const s=await r.json().catch(()=>({}));throw new Error(s.detail||"Error al enviar mensaje a Telegram")}return r.json()}async function Zw(t,e){const n=await fetch(`${un}/escalation/sessions/${e}/close`,{method:"POST",headers:_i(t)});if(!n.ok){const i=await n.json().catch(()=>({}));throw new Error(i.detail||"Error al finalizar la sesión")}return n.json()}async function Qw(t,e,n=""){const i=await fetch(`${un}/escalation/sessions/${t}/review`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rating:Number(e),notes:n.trim()})});if(!i.ok){const r=await i.json().catch(()=>({}));throw new Error(r.detail||"Error al enviar la calificación")}return i.json()}async function Jw(t){const e=await fetch(`${un}/escalation/crm/profiles`,{headers:_i(t)});if(!e.ok)throw new Error("Error al cargar perfiles CRM");return e.json()}async function eE(t){const e=await fetch(`${un}/escalation/crm/reviews`,{headers:_i(t)});if(!e.ok)throw new Error("Error al cargar reseñas CRM");return e.json()}async function tE(t){const e=await fetch(`${un}/escalation/crm/summary`,{headers:_i(t)});if(!e.ok)throw new Error("Error al cargar resumen CRM");return e.json()}function rv(t){const e=window.location.protocol==="https:"?"wss:":"ws:",n=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?"127.0.0.1:8000":window.location.host;return`${e}//${n}/api/v1/escalation/ws/chat/${t}`}/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nE=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),sv=(...t)=>t.filter((e,n,i)=>!!e&&i.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var iE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rE=ce.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:a,...l},c)=>ce.createElement("svg",{ref:c,...iE,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:sv("lucide",r),...l},[...a.map(([u,h])=>ce.createElement(u,h)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ji=(t,e)=>{const n=ce.forwardRef(({className:i,...r},s)=>ce.createElement(rE,{ref:s,iconNode:e,className:sv(`lucide-${nE(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sE=ji("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aE=ji("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oE=ji("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lE=ji("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cE=ji("Minimize2",[["polyline",{points:"4 14 10 14 10 20",key:"11kfnr"}],["polyline",{points:"20 10 14 10 14 4",key:"rlmsce"}],["line",{x1:"14",x2:"21",y1:"10",y2:"3",key:"o5lafz"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uE=ji("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dE=ji("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mf=ji("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fE=ji("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function hE({isOpen:t,onClose:e,onStartLiveChat:n,initialQuery:i=""}){const[r,s]=ce.useState(""),[a,l]=ce.useState(""),[c,u]=ce.useState(!1),[h,p]=ce.useState("");if(!t)return null;const f=async m=>{if(m.preventDefault(),!r.trim()||!a.trim()){p("Por favor ingresa tu nombre completo y número de cédula.");return}u(!0),p("");try{const g=await qw(r.trim(),a.trim(),i);n({sessionId:g.session_id,fullName:g.full_name}),e()}catch(g){p(g.message||"Error al conectar con un asesor.")}finally{u(!1)}};return o.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fadeIn",children:o.jsxs("div",{className:"bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-md w-full overflow-hidden",children:[o.jsxs("div",{className:"bg-gradient-to-r from-amber-600 to-amber-700 px-6 py-5 text-white flex items-center justify-between",children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("div",{className:"p-2 bg-white/15 rounded-lg",children:o.jsx(Mf,{className:"w-6 h-6 text-white"})}),o.jsxs("div",{children:[o.jsx("h3",{className:"text-lg font-bold",children:"Conectar con Asesor Académico"}),o.jsx("p",{className:"text-xs text-amber-100 font-medium",children:"Mesa de Asesoría en Vivo de la Academia"})]})]}),o.jsx("button",{onClick:e,className:"text-white/80 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors cursor-pointer",children:"✕"})]}),o.jsxs("form",{onSubmit:f,className:"p-6 space-y-4",children:[o.jsx("p",{className:"text-sm text-slate-600",children:"Para transferirte con un asesor académico especializado, por favor verifica tus datos de contacto."}),h&&o.jsxs("div",{className:"p-3 bg-rose-50 border border-rose-200 rounded-xl flex items-center gap-2 text-xs text-rose-700 font-medium",children:[o.jsx(sE,{className:"w-4 h-4 flex-shrink-0"}),o.jsx("span",{children:h})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5",children:"Nombre Completo *"}),o.jsx("input",{type:"text",required:!0,placeholder:"Ej: Carlos Rodríguez",value:r,onChange:m=>s(m.target.value),className:"w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-sm font-medium text-slate-800 transition-all"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5",children:"Cédula / Documento de Identidad *"}),o.jsx("input",{type:"text",required:!0,placeholder:"Ej: 1020491823",value:a,onChange:m=>l(m.target.value),className:"w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-sm font-medium text-slate-800 transition-all"}),o.jsx("p",{className:"text-[11px] text-slate-400 mt-1",children:"Tu ID de sesión único será generado automáticamente a partir de tus datos."})]}),o.jsxs("div",{className:"pt-2 flex items-center justify-end gap-3",children:[o.jsx("button",{type:"button",onClick:e,className:"px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer",children:"Cancelar"}),o.jsx("button",{type:"submit",disabled:c,className:"px-5 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 rounded-xl shadow-md shadow-amber-600/20 transition-all flex items-center gap-2 disabled:opacity-50 cursor-pointer",children:c?o.jsxs(o.Fragment,{children:[o.jsx(lE,{className:"w-4 h-4 animate-spin"}),"Conectando..."]}):"Iniciar Chat en Vivo"})]})]})]})})}function pE({sessionInfo:t,onClose:e}){const{sessionId:n,fullName:i}=t,[r,s]=ce.useState([]),[a,l]=ce.useState(""),[c,u]=ce.useState(!1),[h,p]=ce.useState(!1),[f,m]=ce.useState(!1),[g,w]=ce.useState(5),[x,d]=ce.useState(0),[y,M]=ce.useState(""),[S,T]=ce.useState(!1),[E,C]=ce.useState(!1),v=ce.useRef(null),N=ce.useRef(null);ce.useEffect(()=>{async function F(){try{const I=await iv(n);s(I),I.some($=>$.sender==="system"&&($.message.includes("finalizada")||$.message.includes("cerrada")))&&m(!0)}catch(I){console.error("Failed to load chat history:",I)}}F()},[n]),ce.useEffect(()=>{const F=rv(n),I=new WebSocket(F);return v.current=I,I.onopen=()=>{u(!0)},I.onmessage=$=>{try{const z=JSON.parse($.data);if(z.type==="SESSION_CLOSED"){m(!0);return}s(Y=>z.id&&Y.some(D=>D.id===z.id)||Y.some(D=>D.sender===z.sender&&D.message===z.message&&Math.abs(new Date(D.timestamp||Date.now())-new Date(z.timestamp||Date.now()))<4e3)?Y:[...Y,z])}catch(z){console.error("Error parsing live WS message:",z)}},I.onclose=()=>{u(!1)},I.onerror=()=>{u(!1)},()=>{I.readyState===WebSocket.OPEN&&I.close()}},[n]),ce.useEffect(()=>{var F;(F=N.current)==null||F.scrollIntoView({behavior:"smooth"})},[r,f]);const L=F=>{if(F.preventDefault(),!a.trim()||!v.current||v.current.readyState!==WebSocket.OPEN)return;const I={sender:"user",sender_name:i,message:a.trim()};v.current.send(JSON.stringify(I)),l("")},P=async F=>{F.preventDefault(),C(!0);try{await Qw(n,g,y),T(!0)}catch(I){console.error("Error submitting review:",I)}finally{C(!1)}};return h?o.jsx("div",{className:"fixed bottom-5 right-5 z-50",children:o.jsxs("button",{onClick:()=>p(!1),className:"bg-amber-600 hover:bg-amber-700 text-white px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 border border-amber-500 font-semibold text-sm transition-all hover:scale-105",children:[o.jsxs("div",{className:"relative",children:[o.jsx(Mf,{className:"w-5 h-5"}),o.jsx("span",{className:"absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping"})]}),o.jsxs("span",{children:["Chat Asesor Humano (",n,")"]})]})}):o.jsxs("div",{className:"fixed bottom-5 right-5 z-50 w-96 sm:w-[420px] h-[540px] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-slideUp",children:[o.jsxs("div",{className:"bg-gradient-to-r from-amber-600 to-amber-700 px-4 py-3 text-white flex items-center justify-between shadow-sm",children:[o.jsxs("div",{className:"flex items-center gap-2.5",children:[o.jsx("div",{className:"p-1.5 bg-white/20 rounded-lg",children:o.jsx(Mf,{className:"w-5 h-5 text-white"})}),o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-center gap-1.5",children:[o.jsx("h4",{className:"text-sm font-bold leading-none",children:"Asesor Académico"}),o.jsxs("span",{className:`inline-flex items-center gap-1 text-[10px] px-1.5 py-0.5 rounded-full font-bold ${f?"bg-slate-500/30 text-slate-100":c?"bg-emerald-500/20 text-emerald-100":"bg-rose-500/20 text-rose-100"}`,children:[o.jsx(oE,{className:`w-2 h-2 fill-current ${f?"text-slate-300":c?"text-emerald-400":"text-rose-400"}`}),f?"Finalizada":c?"En Línea":"Desconectado"]})]}),o.jsxs("p",{className:"text-[11px] text-amber-100 font-mono mt-0.5",children:["Sesión: ",n]})]})]}),o.jsxs("div",{className:"flex items-center gap-1",children:[o.jsx("button",{onClick:()=>p(!0),className:"text-white/80 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors",title:"Minimizar",children:o.jsx(cE,{className:"w-4 h-4"})}),o.jsx("button",{onClick:e,className:"text-white/80 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors",title:"Cerrar chat",children:o.jsx(fE,{className:"w-4 h-4"})})]})]}),f?o.jsx("div",{className:"flex-1 p-6 bg-slate-50 flex flex-col items-center justify-center text-center animate-fadeIn",children:S?o.jsxs("div",{className:"space-y-3 py-6",children:[o.jsx("div",{className:"w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm",children:o.jsx(aE,{className:"w-6 h-6"})}),o.jsx("h4",{className:"text-base font-bold text-slate-800",children:"¡Gracias por tu retroalimentación!"}),o.jsx("p",{className:"text-xs text-slate-500 max-w-xs mx-auto",children:"Tu calificación nos permite seguir elevando la calidad de atención de la Academia de Idiomas."}),o.jsx("button",{onClick:e,className:"mt-4 px-5 py-2 text-xs font-bold text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-100 transition-colors",children:"Cerrar Ventana"})]}):o.jsxs("form",{onSubmit:P,className:"w-full space-y-4",children:[o.jsxs("div",{className:"space-y-1",children:[o.jsx("h4",{className:"text-sm font-bold text-slate-800",children:"Atención Finalizada"}),o.jsx("p",{className:"text-xs text-slate-500",children:"¿Cómo calificarías la atención recibida por tu asesor?"})]}),o.jsx("div",{className:"flex items-center justify-center gap-1.5 py-1",children:[1,2,3,4,5].map(F=>o.jsx("button",{type:"button",onClick:()=>w(F),onMouseEnter:()=>d(F),onMouseLeave:()=>d(0),className:"p-1 text-slate-300 hover:text-amber-400 focus:outline-none transition-colors",children:o.jsx(dE,{className:`w-7 h-7 transition-transform duration-150 ${(x||g)>=F?"fill-amber-400 text-amber-400 scale-110":"fill-slate-100 text-slate-300"}`})},F))}),o.jsxs("span",{className:"text-xs font-bold text-amber-700 block",children:[g===5&&"⭐️⭐️⭐️⭐️⭐️ Excelente",g===4&&"⭐️⭐️⭐️⭐️ Muy Buena",g===3&&"⭐️⭐️⭐️ Buena",g===2&&"⭐️⭐️ Regular",g===1&&"⭐️ Deficiente"]}),o.jsx("div",{children:o.jsx("textarea",{rows:3,placeholder:"Comentarios adicionales opcionales...",value:y,onChange:F=>M(F.target.value),className:"w-full p-3 text-xs rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 font-medium text-slate-700 resize-none"})}),o.jsx("div",{className:"flex items-center justify-center gap-2 pt-1",children:o.jsx("button",{type:"submit",disabled:E,className:"w-full py-2.5 text-xs font-bold text-white bg-amber-600 hover:bg-amber-700 rounded-xl shadow-md transition-all disabled:opacity-50",children:E?"Enviando...":"Enviar Calificación"})})]})}):o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50",children:[r.map((F,I)=>{const $=F.sender==="user";return F.sender==="system"?o.jsx("div",{className:"text-center my-2",children:o.jsx("span",{className:"text-[11px] font-medium text-slate-500 bg-slate-200/60 px-3 py-1 rounded-full inline-block",children:F.message})},I):o.jsxs("div",{className:`flex flex-col ${$?"items-end":"items-start"}`,children:[o.jsx("span",{className:"text-[10px] font-bold text-slate-400 mb-1 px-1",children:$?"Tú":F.sender_name||"Asesor Académico"}),o.jsx("div",{className:`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed shadow-sm ${$?"bg-amber-600 text-white rounded-br-none":"bg-white text-slate-800 border border-slate-200/80 rounded-bl-none"}`,children:F.message})]},I)}),o.jsx("div",{ref:N})]}),o.jsxs("form",{onSubmit:L,className:"p-3 bg-white border-t border-slate-100 flex items-center gap-2",children:[o.jsx("input",{type:"text",placeholder:c?"Escribe a tu asesor humano...":"Conectando al servidor...",disabled:!c,value:a,onChange:F=>l(F.target.value),className:"flex-1 px-3.5 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 font-medium text-slate-800 disabled:opacity-50"}),o.jsx("button",{type:"submit",disabled:!a.trim()||!c,className:"p-2 bg-amber-600 hover:bg-amber-700 text-white rounded-xl shadow-sm transition-all disabled:opacity-50",children:o.jsx(uE,{className:"w-4 h-4"})})]})]})]})}const mE="Vanguard_academy_bot",i0=`https://t.me/${mE}`,xE=["¿Cuánto cuesta el intensivo de inglés y qué horarios tienen en Bogotá?","¿Cuáles son los requisitos de inscripción y documentos requeridos?","¿Cómo funciona la prueba de clasificación gratuita de 25 minutos?","¿Qué medios de pago reciben (Nequi, Bancolombia, PSE)?","¿Tienen preparación para exámenes IELTS, TOEFL y Cambridge?","¿Cuáles son los horarios de sábados y tarifas de la Sede Medellín?"],Ou={id:"welcome_init",sender:"assistant",content:`¡Hola! Bienvenido a **Vanguard Assistant**, tu asesor académico inteligente oficial. Estoy capacitado con los reglamentos, planes de estudio, horarios y tarifas de la **Academia de Idiomas Colombiana**.

¿En qué idioma o programa estás interesado el día de hoy?`,sources:[{document:"cursos_y_modalidades.md",section:"Oferta Académica"},{document:"precios_y_metodos_de_pago.md",section:"Tarifas 2026"}],confidence_score:1,latency_ms:120,created_at:new Date().toISOString()};function gE({onNavigateToLanding:t,onNavigateToAdmin:e}){const[n,i]=ce.useState(()=>typeof window<"u"?window.innerWidth>=1024:!1),[r,s]=ce.useState(""),[a,l]=ce.useState(!1),[c,u]=ce.useState(!1),[h,p]=ce.useState(!1),[f,m]=ce.useState(""),[g,w]=ce.useState(null),[x,d]=ce.useState(()=>localStorage.getItem("vanguard_active_session_id")||`sess_${Date.now()}`),[y,M]=ce.useState(()=>{try{const I=localStorage.getItem("vanguard_sessions_index");return I?JSON.parse(I):[]}catch{return[]}}),[S,T]=ce.useState(()=>{const I=localStorage.getItem(`vanguard_chat_${x}`);if(I)try{return JSON.parse(I)}catch{}return[Ou]}),E=ce.useRef(null);ce.useEffect(()=>{localStorage.setItem("vanguard_active_session_id",x),localStorage.setItem(`vanguard_chat_${x}`,JSON.stringify(S)),M(I=>{const $=S.find(D=>D.sender==="user"),z=$?$.content.slice(0,36)+"...":"Nueva Consulta",Y=I.find(D=>D.id===x);let j;return Y?j=I.map(D=>D.id===x?{...D,title:z,updatedAt:Date.now()}:D):j=[{id:x,title:z,updatedAt:Date.now()},...I],localStorage.setItem("vanguard_sessions_index",JSON.stringify(j)),j})},[x,S]),ce.useEffect(()=>{var I;(I=E.current)==null||I.scrollIntoView({behavior:"smooth"})},[S,a]);const C=()=>{const I=`sess_${Date.now()}`;d(I),T([{id:`welcome_${Date.now()}`,sender:"assistant",content:"Nueva consulta iniciada. Puedes preguntarme sobre programas de **Inglés, Francés, Alemán, Italiano o Portugués**, sedes en Bogotá y Medellín, tarifas en COP o pruebas de nivelación.",sources:[{document:"cursos_y_modalidades.md",section:"General"}],confidence_score:1,latency_ms:85,created_at:new Date().toISOString()}])},v=I=>{d(I);const $=localStorage.getItem(`vanguard_chat_${I}`);if($)try{T(JSON.parse($))}catch{T([Ou])}},N=()=>{y.forEach($=>localStorage.removeItem(`vanguard_chat_${$.id}`)),localStorage.removeItem("vanguard_sessions_index"),localStorage.removeItem(`vanguard_chat_${x}`),M([]);const I=`sess_${Date.now()}`;d(I),T([Ou])},L=I=>I?String(I).replace(/\[\[ESCALATE\]\]/g,"").replace(/\[NO_INFO\]/g,"").replace(/Failed to process inquiry:[^.]*\./gi,"").replace(/Error getting collection:[^.]*\./gi,"").replace(/Collection \[[a-f0-9-]+\] does not exist\.?/gi,"").replace(/\*{1,3}([^*\n]+)\*{1,3}/g,"$1").replace(/^\s*\*\s+/gm,"• ").replace(/\*/g,"").replace(/\s{2,}/g," ").trim():"",P=async I=>{var Y;const $=(I||r).trim();if(!$||a)return;s("");const z={id:`user_${Date.now()}`,sender:"user",content:$,created_at:new Date().toISOString()};T(j=>[...j,z]),l(!0);try{const j=await Hw($,x,"web"),D=j.escalated||j.status==="ESCALATED_TO_HUMAN",W={id:`bot_${Date.now()}`,sender:"assistant",content:L(j.response)||"No se obtuvo información para esta consulta.",status:j.status,sources:j.sources||[],confidence_score:j.confidence_score||0,latency_ms:((Y=j.telemetry)==null?void 0:Y.latency_ms)||0,escalated:D,created_at:new Date().toISOString()};T(q=>[...q,W]),D&&(m($),setTimeout(()=>{p(!0)},600))}catch{const D={id:`err_${Date.now()}`,sender:"assistant",content:"En este momento estamos experimentando una breve intermitencia técnica en el servicio. Si deseas atención inmediata, puedes solicitar conexión con un asesor académico.",sources:[],confidence_score:0,latency_ms:0,escalated:!0,created_at:new Date().toISOString()};T(W=>[...W,D]),m($),setTimeout(()=>{p(!0)},600)}finally{l(!1)}},F=I=>{navigator.clipboard.writeText(I),u(!0),setTimeout(()=>u(!1),2e3)};return o.jsxs("div",{className:"flex h-screen bg-[#070515] text-slate-100 font-sans overflow-hidden antialiased",children:[n&&o.jsx("div",{className:"fixed inset-0 z-40 bg-black/75 backdrop-blur-sm lg:hidden transition-opacity duration-300",onClick:()=>i(!1),"aria-hidden":"true"}),o.jsx("aside",{className:`fixed lg:relative inset-y-0 left-0 z-50 lg:z-20 w-72 lg:${n?"w-64":"w-16"} bg-[#0c0926] border-r border-white/10 flex-shrink-0 flex flex-col justify-between transition-transform lg:transition-all duration-300 shadow-2xl lg:shadow-none ${n?"translate-x-0":"-translate-x-full lg:translate-x-0"}`,children:o.jsxs("div",{className:"flex flex-col h-full overflow-hidden",children:[o.jsxs("div",{className:"p-3.5 border-b border-white/10",children:[o.jsxs("div",{className:"flex items-center justify-between",children:[n?o.jsx("button",{onClick:t,className:"flex items-center gap-2.5 text-left group hover:opacity-90 transition-opacity",children:o.jsx(Zs,{size:"sm",subtitle:"AI Assistant"})}):o.jsx("button",{onClick:t,className:"mx-auto block hover:opacity-90 transition-opacity",title:"Vanguard AI Assistant",children:o.jsx(Zs,{size:"sm",showText:!1})}),o.jsx("button",{onClick:()=>i(!n),className:"text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-white/5 transition-colors",title:n?"Cerrar panel":"Expandir panel",children:n?o.jsx(e2,{className:"text-xs"}):o.jsx(J_,{className:"text-xs"})})]}),n&&o.jsxs("button",{onClick:()=>{C(),typeof window<"u"&&window.innerWidth<1024&&i(!1)},className:"mt-3 w-full flex items-center justify-between px-3 py-2 rounded-xl bg-brand-lime/10 border border-brand-lime/30 hover:bg-brand-lime/20 text-xs font-semibold text-brand-lime transition-all group",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx($_,{className:"text-xs"}),o.jsx("span",{children:"Nueva Consulta"})]}),o.jsx("span",{className:"text-[10px] bg-brand-lime/20 px-1.5 py-0.5 rounded font-mono",children:"RAG"})]})]}),n&&o.jsxs("div",{className:"p-2.5 space-y-1 text-xs border-b border-white/5",children:[o.jsxs("button",{onClick:()=>{P("¿Cuáles son los horarios y sedes en Bogotá y Medellín?"),typeof window<"u"&&window.innerWidth<1024&&i(!1)},className:"w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-colors text-left",children:[o.jsx(Al,{className:"text-brand-orange text-xs flex-shrink-0"}),o.jsx("span",{className:"truncate",children:"Sedes Bogotá & Medellín"})]}),o.jsxs("button",{onClick:()=>{P("¿Cuáles son los precios y formas de pago en COP?"),typeof window<"u"&&window.innerWidth<1024&&i(!1)},className:"w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-colors text-left",children:[o.jsx(q_,{className:"text-brand-lime text-xs flex-shrink-0"}),o.jsx("span",{className:"truncate",children:"Precios & Pagos COP"})]}),o.jsxs("button",{onClick:()=>{P("¿Cómo son los niveles del Marco Común Europeo MCER?"),typeof window<"u"&&window.innerWidth<1024&&i(!1)},className:"w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-colors text-left",children:[o.jsx(n2,{className:"text-brand-blue text-xs flex-shrink-0"}),o.jsx("span",{className:"truncate",children:"Pensum MCER (A1 a C1)"})]})]}),o.jsxs("div",{className:"flex-1 overflow-y-auto px-3 py-3 space-y-1 custom-scroll",children:[n&&o.jsxs("div",{className:"flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2 mb-2",children:[o.jsxs("span",{className:"flex items-center gap-1.5",children:[o.jsx(Q_,{})," Historial"]}),y.length>0&&o.jsx("button",{onClick:N,className:"hover:text-red-400 text-[10px] normal-case transition-colors",children:"Limpiar"})]}),n&&(y.length>0?y.map(I=>o.jsx("button",{onClick:()=>{v(I.id),typeof window<"u"&&window.innerWidth<1024&&i(!1)},className:`w-full text-left px-2.5 py-2 rounded-lg text-xs truncate transition-all block ${x===I.id?"bg-brand-lime/10 text-brand-lime border border-brand-lime/30 font-medium":"text-slate-400 hover:text-white hover:bg-white/5"}`,children:o.jsx("span",{className:"block truncate",children:I.title})},I.id)):n&&o.jsx("p",{className:"text-[11px] text-slate-500 px-2 italic",children:"Sin consultas previas"}))]}),n&&o.jsxs("div",{className:"p-3 border-t border-white/10 space-y-2",children:[o.jsxs("a",{href:i0,target:"_blank",rel:"noopener noreferrer",className:"w-full flex items-center justify-between px-3 py-2 rounded-xl bg-[#229ED9]/10 hover:bg-[#229ED9]/20 border border-[#229ED9]/30 text-[#229ED9] text-xs font-semibold transition-colors",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx(Rs,{}),o.jsx("span",{children:"Bot Telegram"})]}),o.jsx("span",{className:"text-[10px] bg-[#229ED9]/20 px-1.5 py-0.5 rounded font-mono",children:"24/7"})]}),o.jsxs("button",{onClick:t,className:"w-full flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-medium transition-colors",children:[o.jsx(Pd,{className:"text-xs"}),o.jsx("span",{children:"Volver a la Landing"})]})]})]})}),o.jsxs("main",{className:"flex-1 flex flex-col h-full overflow-hidden relative bg-[#070515]",children:[o.jsxs("header",{className:"h-14 border-b border-white/10 bg-[#0c0926]/90 backdrop-blur-md px-3 sm:px-6 flex items-center justify-between flex-shrink-0 z-10",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("button",{type:"button",onClick:()=>i(!n),className:"lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors","aria-label":"Abrir panel lateral",title:"Panel lateral",children:o.jsx(yg,{className:"text-sm"})}),o.jsx("button",{type:"button",onClick:t,className:"p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors",title:"Volver a la Landing",children:o.jsx(Pd,{className:"text-xs"})}),o.jsxs("div",{className:"flex items-center gap-2 text-xs text-slate-400",children:[o.jsx("span",{className:"w-2 h-2 rounded-full bg-brand-lime animate-ping flex-shrink-0"}),o.jsx("span",{className:"text-slate-200 font-semibold text-xs truncate max-w-[130px] sm:max-w-none",children:"Vanguard Assistant"}),o.jsx("span",{className:"text-slate-500 hidden sm:inline",children:"•"}),o.jsx("span",{className:"font-mono text-[11px] text-slate-400 hidden md:inline truncate max-w-[110px]",children:x})]})]}),o.jsxs("div",{className:"flex items-center gap-2 sm:gap-3",children:[o.jsxs("a",{href:i0,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center justify-center gap-1.5 h-8 px-2.5 sm:px-3 rounded-full bg-[#229ED9]/15 hover:bg-[#229ED9]/25 border border-[#229ED9]/30 text-[#229ED9] text-xs font-bold transition-all whitespace-nowrap",title:"Abrir en Telegram",children:[o.jsx(Rs,{className:"text-xs flex-shrink-0"}),o.jsx("span",{className:"hidden sm:inline",children:"Telegram"})]}),o.jsx("button",{onClick:e,className:"inline-flex items-center justify-center h-8 text-xs text-slate-400 hover:text-white px-2.5 sm:px-3 rounded-full border border-white/10 hover:border-white/30 transition-colors whitespace-nowrap",children:"Staff"})]})]}),o.jsxs("div",{className:"flex-1 overflow-y-auto px-3 sm:px-6 md:px-12 py-4 sm:py-6 max-w-4xl w-full mx-auto space-y-4 sm:space-y-6 custom-scroll",children:[S.map(I=>{const $=I.sender==="user",z=I.escalated||I.status==="ESCALATED_TO_HUMAN";return $?o.jsx("div",{className:"flex justify-end animate-fadeIn",children:o.jsx("div",{className:"bg-[#1e1948] text-white px-5 py-3.5 rounded-3xl rounded-br-md max-w-2xl text-sm leading-relaxed border border-white/10 shadow-lg",children:I.content})},I.id):o.jsxs("div",{className:"space-y-3 animate-fadeIn",children:[o.jsxs("div",{className:"flex items-center gap-2 text-xs text-slate-400",children:[o.jsx("div",{className:"w-6 h-6 rounded-lg bg-brand-lime text-brand-dark flex items-center justify-center font-bold text-xs",children:o.jsx(ci,{})}),o.jsx("span",{className:"font-bold text-white",children:"Vanguard Assistant"}),o.jsx("span",{className:"text-slate-600",children:"•"}),o.jsxs("span",{className:"inline-flex items-center gap-1 text-[11px] font-mono text-brand-lime",children:[o.jsx(Bt,{className:"text-[10px]"}),z?"Escalamiento Asesor":"Verificado por Documentos Oficiales"]}),I.latency_ms>0&&o.jsxs(o.Fragment,{children:[o.jsx("span",{className:"text-slate-600",children:"•"}),o.jsxs("span",{className:"text-[10px] font-mono text-slate-500",children:["Latencia: ",I.latency_ms.toFixed(0),"ms"]})]})]}),o.jsxs("div",{className:`p-6 rounded-3xl border shadow-xl leading-relaxed text-sm ${z?"bg-amber-950/20 border-amber-500/40 text-slate-100":"bg-[#100c2a] border-white/10 text-slate-200"}`,children:[o.jsx("div",{className:"prose prose-invert max-w-none text-sm leading-relaxed whitespace-pre-wrap",children:L(I.content)}),z&&o.jsxs("div",{className:"mt-5 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-3",children:[o.jsxs("div",{className:"flex items-center gap-2.5 text-amber-300 text-xs font-semibold",children:[o.jsx(Tl,{className:"text-base"}),o.jsx("span",{children:"¿Deseas atención personalizada en vivo con un asesor?"})]}),o.jsx("button",{onClick:()=>{m(I.content),p(!0)},className:"px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all hover:scale-105 cursor-pointer",children:"Conectar con Asesor"})]}),I.sources&&I.sources.length>0&&o.jsxs("div",{className:"mt-5 pt-4 border-t border-white/10 space-y-2",children:[o.jsx("span",{className:"text-[11px] font-mono uppercase tracking-wider text-slate-400 block",children:"Fuentes Citadas:"}),o.jsx("div",{className:"flex flex-wrap gap-2",children:I.sources.map((Y,j)=>o.jsxs("div",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/5 border border-white/10 text-xs text-brand-lime font-mono",children:[o.jsx(r2,{className:"text-[10px]"}),o.jsx("span",{children:Y.document}),o.jsx("span",{className:"text-slate-500",children:"•"}),o.jsx("span",{className:"text-slate-300",children:Y.section})]},j))})]}),o.jsxs("div",{className:"mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-400",children:[o.jsxs("span",{className:"text-[10px] font-mono text-slate-500",children:["Estado: ",I.status||"RESOLVED_BY_RAG"]}),o.jsxs("button",{onClick:()=>F(I.content),className:"flex items-center gap-1 hover:text-white transition-colors text-[11px]",children:[c?o.jsx(_g,{className:"text-brand-lime"}):o.jsx(o2,{}),o.jsx("span",{children:c?"Copiado":"Copiar respuesta"})]})]})]})]},I.id)}),a&&o.jsxs("div",{className:"flex items-center gap-3 p-4 rounded-2xl bg-[#100c2a] border border-white/10 text-xs text-slate-400 animate-pulse max-w-md",children:[o.jsx(ci,{className:"text-brand-lime text-base animate-bounce"}),o.jsx("span",{children:"Consultando documentos oficiales y sintetizando respuesta..."})]}),o.jsx("div",{ref:E})]}),o.jsx("div",{className:"px-3 sm:px-6 py-2 border-t border-white/5 bg-[#070515] flex-shrink-0",children:o.jsxs("div",{className:"max-w-4xl mx-auto flex items-center gap-2 overflow-x-auto pb-1 text-xs no-scrollbar",children:[o.jsx("span",{className:"text-slate-500 font-mono text-[10px] whitespace-nowrap",children:"Sugerencias:"}),xE.map((I,$)=>o.jsx("button",{onClick:()=>P(I),className:"px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white text-xs whitespace-nowrap transition-colors flex-shrink-0",children:I},$))]})}),o.jsx("div",{className:"p-3 sm:p-4 md:px-12 bg-[#0c0926]/95 border-t border-white/10 flex-shrink-0",children:o.jsxs("div",{className:"max-w-4xl mx-auto",children:[o.jsxs("form",{onSubmit:I=>{I.preventDefault(),P()},className:"relative rounded-2xl bg-[#141038] border border-white/15 focus-within:border-brand-lime shadow-2xl p-2 transition-colors",children:[o.jsx("textarea",{rows:2,placeholder:"Pregunta sobre programas, sedes Bogotá/Medellín, precios COP o pruebas de clasificación...",value:r,onChange:I=>s(I.target.value),onKeyDown:I=>{I.key==="Enter"&&!I.shiftKey&&(I.preventDefault(),P())},className:"w-full bg-transparent border-0 focus:ring-0 text-sm text-white placeholder:text-slate-500 resize-none outline-none px-3 py-1 block"}),o.jsxs("div",{className:"flex items-center justify-between pt-2 border-t border-white/10 px-2",children:[o.jsx("div",{className:"flex items-center gap-2 text-xs text-slate-400",children:o.jsxs("span",{className:"inline-flex items-center gap-1 bg-white/5 px-2.5 py-1 rounded-md text-[11px] font-mono text-brand-lime border border-white/10",children:[o.jsx(ci,{className:"text-xs"}),"Cero Alucinaciones"]})}),o.jsx("button",{type:"submit",disabled:!r.trim()||a,className:"w-9 h-9 rounded-xl bg-brand-lime hover:bg-[#b0f55c] disabled:opacity-30 disabled:hover:bg-brand-lime text-brand-dark flex items-center justify-center font-bold shadow-md transition-transform active:scale-95 cursor-pointer",children:o.jsx(vg,{className:"text-xs"})})]})]}),o.jsx("p",{className:"text-[10px] text-center text-slate-500 mt-2",children:"Vanguard Assistant responde únicamente con base en documentos oficiales institucionales."})]})})]}),o.jsx(hE,{isOpen:h,initialQuery:f,onClose:()=>p(!1),onStartLiveChat:I=>{w(I)}}),g&&o.jsx(pE,{sessionInfo:g,onClose:()=>w(null)})]})}function vE({onNavigateToLanding:t,onNavigateToChat:e}){var Pe,Oe,U,fe,J,me,_e,te,Ee,we,mt,ot,vn,_n,vo,_o,ra,Zr,yo,sa,aa,ti,Qr,oa,la,Mr,ca,br,ua,da,So,Mo,bo,wo,b,V;const[n,i]=ce.useState(()=>localStorage.getItem("vanguard_admin_jwt")||""),[r,s]=ce.useState(()=>{const R=localStorage.getItem("vanguard_admin_user");return R?JSON.parse(R):null}),[a,l]=ce.useState("admin"),[c,u]=ce.useState(""),[h,p]=ce.useState(""),[f,m]=ce.useState(!1),[g,w]=ce.useState("escalations"),[x,d]=ce.useState([]),[y,M]=ce.useState(!1),[S,T]=ce.useState(null),[E,C]=ce.useState([]),[v,N]=ce.useState(""),[L,P]=ce.useState(!1),[F,I]=ce.useState(!1),[$,z]=ce.useState(!1),[Y,j]=ce.useState(""),D=ce.useRef(null),W=ce.useRef(null),[q,ne]=ce.useState(null),[re,Fe]=ce.useState(!1),[Qe,Ge]=ce.useState([]),[Q,de]=ce.useState([]),[se,De]=ce.useState(null),[ke,Re]=ce.useState(!1),[ie,He]=ce.useState(null),[nt,Ye]=ce.useState("gemini"),[je,St]=ce.useState(""),[vt,Ct]=ce.useState(""),[Et,ht]=ce.useState(""),[pt,k]=ce.useState({type:"",text:""}),[Ht,tt]=ce.useState(!1),[A,_]=ce.useState(null),[H,G]=ce.useState({}),K=async(R,O)=>{_(R);try{const B=await Xw(n,R,O||null);G(oe=>({...oe,[R]:{status:B.status,message:B.message}}))}catch(B){G(oe=>({...oe,[R]:{status:"error",message:B.message||"Fallo de conexión."}}))}finally{_(null)}},ue=async R=>{R.preventDefault(),p(""),m(!0);try{const O=await jw(a,c);i(O.access_token),s(O.user),localStorage.setItem("vanguard_admin_jwt",O.access_token),localStorage.setItem("vanguard_admin_user",JSON.stringify(O.user))}catch(O){p(O.message||"Credenciales inválidas.")}finally{m(!1)}},he=()=>{i(""),s(null),localStorage.removeItem("vanguard_admin_jwt"),localStorage.removeItem("vanguard_admin_user")},Z=async()=>{if(n){M(!0);try{const R=await Yw(n);d(Array.isArray(R)?R:[])}catch(R){console.error("Error loading escalated sessions:",R)}finally{M(!1)}}},ee=async()=>{if(n){Fe(!0);try{const R=await $w(n);ne(R)}catch(R){console.error("Error loading metrics:",R)}finally{Fe(!1)}}},pe=async()=>{if(n){Re(!0);try{const[R,O,B]=await Promise.all([Jw(n).catch(()=>[]),eE(n).catch(()=>[]),tE(n).catch(()=>null)]);Ge(R),de(O),De(B)}catch(R){console.error("Error loading CRM:",R)}finally{Re(!1)}}},Ae=async()=>{if(n)try{const R=await Gw(n);He(R),R.active_provider&&Ye(R.active_provider)}catch(R){console.error("Error loading provider settings:",R)}};ce.useEffect(()=>{if(n){if(g==="escalations"){Z();const R=setInterval(()=>Z(),3e3);return()=>clearInterval(R)}g==="metrics"&&ee(),g==="crm"&&pe(),g==="settings"&&Ae()}},[n,g]),ce.useEffect(()=>{if(!S){D.current&&D.current.close();return}async function R(){try{const ve=await iv(S.session_id);C(ve)}catch{}}R();const O=setInterval(()=>{R()},1200),B=rv(S.session_id),oe=new WebSocket(B);return D.current=oe,oe.onmessage=ve=>{try{const le=JSON.parse(ve.data);C(Se=>le.id&&Se.some(Le=>Le.id===le.id)||Se.some(Le=>Le.sender===le.sender&&Le.message===le.message&&Math.abs(new Date(Le.timestamp||Date.now())-new Date(le.timestamp||Date.now()))<4e3)?Se:[...Se,le])}catch(le){console.error("WS parse error:",le)}},()=>{clearInterval(O),oe.readyState===WebSocket.OPEN&&oe.close()}},[S]),ce.useEffect(()=>{var R;(R=W.current)==null||R.scrollIntoView({behavior:"smooth"})},[E]);const ge=async R=>{if(R.preventDefault(),!v.trim()||!S)return;P(!0);const O=v.trim();if(N(""),S.channel==="telegram"&&S.telegram_chat_id){try{await Kw(n,S.telegram_chat_id,O,S.session_id),C(B=>[...B,{id:`admin_${Date.now()}`,session_id:S.session_id,sender:"admin",sender_name:(r==null?void 0:r.full_name)||"Asesor Académico",message:O,timestamp:new Date().toISOString()}])}catch(B){alert(`Error al enviar a Telegram: ${B.message}`)}finally{P(!1)}return}if(D.current&&D.current.readyState===WebSocket.OPEN){const B={sender:"admin",sender_name:(r==null?void 0:r.full_name)||"Asesor Académico",message:O};D.current.send(JSON.stringify(B))}P(!1)},xe=async()=>{if(S){z(!0),j("");try{await Zw(n,S.session_id),I(!1),T(null),Z()}catch(R){j(R.message||"Error al finalizar la sesión.")}finally{z(!1)}}},Ne=async R=>{R.preventDefault(),tt(!0),k({type:"",text:""});try{const O={active_provider:nt,gemini_api_key:je.trim()||void 0,groq_api_key:vt.trim()||void 0,openai_api_key:Et.trim()||void 0},B=await Ww(n,O);He(B),B.active_provider&&Ye(B.active_provider),k({type:"success",text:"¡Configuración de proveedores actualizada exitosamente!"}),St(""),Ct(""),ht("")}catch(O){k({type:"error",text:O.message||"Error al actualizar proveedores"})}finally{tt(!1)}};return n?o.jsxs("div",{className:"min-h-screen bg-[#070515] text-slate-100 flex flex-col font-sans selection:bg-brand-lime selection:text-brand-dark",children:[o.jsxs("header",{className:"h-16 border-b border-white/10 bg-[#0c0926]/90 backdrop-blur-md px-3 sm:px-6 flex items-center justify-between flex-shrink-0 z-20",children:[o.jsxs("div",{className:"flex items-center gap-3 sm:gap-4",children:[o.jsx("button",{onClick:t,className:"hover:opacity-90 transition-opacity text-left",children:o.jsx(Zs,{size:"sm",subtitle:"Staff Administration"})}),o.jsxs("nav",{className:"hidden md:flex items-center gap-2 ml-4 lg:ml-8 bg-white/5 p-1 rounded-xl border border-white/10 text-xs",children:[o.jsxs("button",{onClick:()=>w("escalations"),className:`px-3.5 py-1.5 rounded-lg font-semibold transition-all flex items-center gap-1.5 ${g==="escalations"?"bg-brand-lime text-brand-dark shadow-sm":"text-slate-400 hover:text-white"}`,children:[o.jsx(jo,{}),o.jsx("span",{children:"Casos Escalados"}),x.filter(R=>R.status==="WAITING").length>0&&o.jsx("span",{className:"bg-rose-500 text-white text-[9px] px-1.5 py-0.2 rounded-full font-mono",children:x.filter(R=>R.status==="WAITING").length})]}),o.jsxs("button",{onClick:()=>w("metrics"),className:`px-3.5 py-1.5 rounded-lg font-semibold transition-all flex items-center gap-1.5 ${g==="metrics"?"bg-brand-lime text-brand-dark shadow-sm":"text-slate-400 hover:text-white"}`,children:[o.jsx(nm,{}),o.jsx("span",{children:"Métricas KPI"})]}),o.jsxs("button",{onClick:()=>w("crm"),className:`px-3.5 py-1.5 rounded-lg font-semibold transition-all flex items-center gap-1.5 ${g==="crm"?"bg-brand-lime text-brand-dark shadow-sm":"text-slate-400 hover:text-white"}`,children:[o.jsx(Tl,{}),o.jsx("span",{children:"CRM & Reseñas"})]}),o.jsxs("button",{onClick:()=>w("settings"),className:`px-3.5 py-1.5 rounded-lg font-semibold transition-all flex items-center gap-1.5 ${g==="settings"?"bg-brand-lime text-brand-dark shadow-sm":"text-slate-400 hover:text-white"}`,children:[o.jsx(Qp,{}),o.jsx("span",{children:"Proveedores & Keys"})]})]})]}),o.jsxs("div",{className:"flex items-center gap-2 sm:gap-3 text-xs",children:[o.jsxs("button",{onClick:e,className:"hidden sm:flex items-center gap-1.5 text-slate-400 hover:text-white px-3 py-1.5 rounded-lg border border-white/10 hover:bg-white/5 transition-colors",children:[o.jsx(ci,{}),o.jsx("span",{children:"Asistente IA"})]}),o.jsxs("div",{className:"flex items-center gap-2 pl-2 border-l border-white/10",children:[o.jsx("span",{className:"font-mono text-slate-300 font-bold hidden md:inline",children:(r==null?void 0:r.username)||"admin"}),o.jsxs("button",{onClick:he,className:"flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 font-semibold border border-red-500/30 transition-colors",children:[o.jsx(j_,{}),o.jsx("span",{className:"hidden sm:inline",children:"Salir"})]})]})]})]}),o.jsxs("div",{className:"md:hidden bg-[#0c0926] border-b border-white/10 px-3 py-2 flex items-center gap-2 overflow-x-auto no-scrollbar z-10 flex-shrink-0",children:[o.jsxs("button",{onClick:()=>w("escalations"),className:`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 flex-shrink-0 ${g==="escalations"?"bg-brand-lime text-brand-dark shadow-sm":"text-slate-400 bg-white/5 hover:text-white"}`,children:[o.jsx(jo,{className:"text-xs"}),o.jsx("span",{children:"Casos"}),x.filter(R=>R.status==="WAITING").length>0&&o.jsx("span",{className:"bg-rose-500 text-white text-[9px] px-1.5 py-0.2 rounded-full font-mono",children:x.filter(R=>R.status==="WAITING").length})]}),o.jsxs("button",{onClick:()=>w("metrics"),className:`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 flex-shrink-0 ${g==="metrics"?"bg-brand-lime text-brand-dark shadow-sm":"text-slate-400 bg-white/5 hover:text-white"}`,children:[o.jsx(nm,{className:"text-xs"}),o.jsx("span",{children:"Métricas"})]}),o.jsxs("button",{onClick:()=>w("crm"),className:`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 flex-shrink-0 ${g==="crm"?"bg-brand-lime text-brand-dark shadow-sm":"text-slate-400 bg-white/5 hover:text-white"}`,children:[o.jsx(Tl,{className:"text-xs"}),o.jsx("span",{children:"CRM"})]}),o.jsxs("button",{onClick:()=>w("settings"),className:`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 flex-shrink-0 ${g==="settings"?"bg-brand-lime text-brand-dark shadow-sm":"text-slate-400 bg-white/5 hover:text-white"}`,children:[o.jsx(Qp,{className:"text-xs"}),o.jsx("span",{children:"Proveedores"})]})]}),o.jsxs("main",{className:"flex-1 overflow-y-auto p-3 sm:p-6 max-w-7xl w-full mx-auto space-y-4 sm:space-y-6",children:[g==="escalations"&&o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:h-[calc(100vh-140px)]",children:[o.jsxs("div",{className:`lg:col-span-1 bg-[#100c2a] border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-5 flex flex-col overflow-hidden ${S?"hidden lg:flex":"flex"} min-h-[480px] lg:min-h-0`,children:[o.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-white/10",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx(jo,{className:"text-brand-lime"}),o.jsx("h3",{className:"font-bold text-sm text-white",children:"Casos de Asesoría en Vivo"})]}),o.jsx("button",{onClick:Z,className:"text-slate-400 hover:text-white p-1 rounded hover:bg-white/5 transition-colors",title:"Actualizar",children:o.jsx(es,{className:`text-xs ${y?"animate-spin":""}`})})]}),o.jsx("div",{className:"flex-1 overflow-y-auto pt-3 space-y-2 custom-scroll",children:x.length===0?o.jsx("p",{className:"text-xs text-slate-500 italic text-center py-12",children:"No hay casos escalados pendientes."}):x.map(R=>{const O=(S==null?void 0:S.session_id)===R.session_id,B=R.status==="WAITING";return o.jsxs("button",{onClick:()=>T(R),className:`w-full text-left p-3.5 rounded-2xl border transition-all block relative ${O?"bg-brand-lime/15 border-brand-lime text-white shadow-md":"bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"}`,children:[o.jsxs("div",{className:"flex items-center justify-between mb-1",children:[o.jsx("span",{className:"font-bold text-xs truncate max-w-[140px] text-white",children:R.full_name}),o.jsx("span",{className:`text-[9px] px-2 py-0.5 rounded-full font-mono font-bold uppercase ${B?"bg-amber-500/20 text-amber-300 border border-amber-500/30 animate-pulse":"bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"}`,children:R.status})]}),o.jsxs("p",{className:"text-[11px] font-mono text-slate-400 truncate",children:["ID: ",R.session_id," • Cédula: ",R.national_id]}),R.initial_inquiry&&o.jsxs("p",{className:"text-[11px] text-slate-400 line-clamp-1 italic mt-1",children:['"',R.initial_inquiry,'"']}),o.jsx("span",{className:"text-[9px] text-slate-500 block mt-1",children:new Date(R.created_at).toLocaleTimeString()})]},R.id)})})]}),o.jsx("div",{className:`lg:col-span-2 bg-[#100c2a] border border-white/10 rounded-2xl sm:rounded-3xl flex flex-col overflow-hidden ${S?"flex":"hidden lg:flex"} min-h-[480px] lg:min-h-0`,children:S?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"p-3 sm:p-4 border-b border-white/10 bg-[#141038] flex items-center justify-between",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("button",{onClick:()=>T(null),className:"lg:hidden p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors",title:"Volver a la lista de casos",children:o.jsx(Pd,{className:"text-xs"})}),o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("h4",{className:"font-bold text-sm text-white",children:S.full_name}),o.jsx("span",{className:"text-[10px] font-mono bg-white/10 px-2 py-0.5 rounded text-brand-lime",children:S.channel.toUpperCase()})]}),o.jsxs("p",{className:"text-xs text-slate-400 font-mono",children:["Sesión: ",S.session_id," • Doc: ",S.national_id]})]})]}),o.jsx("div",{className:"flex items-center gap-2",children:o.jsx("button",{onClick:()=>I(!0),className:"px-3.5 py-1.5 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 border border-rose-500/40 text-rose-300 text-xs font-bold transition-all",children:"Finalizar Atención"})})]}),o.jsxs("div",{className:"flex-1 overflow-y-auto p-5 space-y-3 bg-[#0c0926]/50 custom-scroll",children:[E.length===0?o.jsx("p",{className:"text-xs text-slate-500 text-center py-12",children:"No hay mensajes previos en esta sesión."}):E.map((R,O)=>{const B=R.sender==="admin";return R.sender==="system"?o.jsx("div",{className:"text-center my-2",children:o.jsx("span",{className:"text-[10px] bg-white/5 px-3 py-1 rounded-full text-slate-400 border border-white/10",children:R.message})},O):o.jsxs("div",{className:`flex flex-col ${B?"items-end":"items-start"}`,children:[o.jsx("span",{className:"text-[10px] text-slate-400 px-1 mb-0.5",children:B?"Tú (Asesor)":S.full_name}),o.jsx("div",{className:`max-w-[75%] p-3 rounded-2xl text-xs leading-relaxed ${B?"bg-brand-lime text-brand-dark font-medium rounded-br-none":"bg-white/10 text-white border border-white/10 rounded-bl-none"}`,children:R.message})]},O)}),o.jsx("div",{ref:W})]}),o.jsxs("form",{onSubmit:ge,className:"p-3 bg-[#141038] border-t border-white/10 flex items-center gap-2",children:[o.jsx("input",{type:"text",placeholder:`Escribir respuesta a ${S.full_name}...`,value:v,onChange:R=>N(R.target.value),className:"flex-1 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-lime"}),o.jsxs("button",{type:"submit",disabled:!v.trim()||L,className:"px-5 py-2.5 rounded-xl bg-brand-lime hover:bg-[#b0f55c] disabled:opacity-40 text-brand-dark font-bold text-xs flex items-center gap-2 transition-transform active:scale-95",children:[o.jsx(vg,{className:"text-xs"}),o.jsx("span",{children:"Responder"})]})]})]}):o.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center text-center p-8 space-y-3 text-slate-500",children:[o.jsx(jo,{className:"text-4xl text-slate-600"}),o.jsx("p",{className:"text-sm",children:"Selecciona una sesión de la lista para atender la consulta en tiempo real."})]})})]}),g==="metrics"&&o.jsxs("div",{className:"space-y-6",children:[o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsxs("div",{children:[o.jsx("h3",{className:"text-lg font-bold text-white",children:"Telemetría Operacional & Métricas RAG"}),o.jsx("p",{className:"text-xs text-slate-400",children:"Consumo de tokens, latencias y tasas de resolución de la Academia"})]}),o.jsxs("button",{onClick:ee,className:"flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10",children:[o.jsx(es,{className:`text-xs ${re?"animate-spin":""}`}),o.jsx("span",{children:"Actualizar Métricas"})]})]}),q&&(()=>{var Uh,Fh,Oh;const R=q.total_queries_processed||0,O=q.resolved_by_faq_triage||0,B=q.resolved_by_cache||0,oe=q.resolved_by_rag||0,ve=q.escalated_to_human||0,le=R>0?R:1,Se=R>0?O/le*100:0,Te=R>0?B/le*100:0,Le=R>0?oe/le*100:0,ze=R>0?ve/le*100:0,Ce=R>0?((O+B)/le*100).toFixed(1):"100.0",We=2*Math.PI*58,ut=Se/100*We,dt=Te/100*We,it=Le/100*We,Dt=ze/100*We,Me=0,en=-ut,Ke=-(ut+dt),dn=-(ut+dt+it),tn=((Uh=q.total_tokens_consumed)==null?void 0:Uh.prompt_tokens)||0,yn=((Fh=q.total_tokens_consumed)==null?void 0:Fh.completion_tokens)||0,Rn=((Oh=q.total_tokens_consumed)==null?void 0:Oh.total)||tn+yn||0,at=Rn>0?(tn/Rn*100).toFixed(1):"50.0",_t=Rn>0?(yn/Rn*100).toFixed(1):"50.0",Pn=q.average_latency_ms||420,rt=Math.max(600,Math.ceil(Pn*1.35/50)*50),ni=Math.max(2,3.5/rt*100),Gi=Math.max(4,18.5/rt*100),Eo=Math.min(96,Math.max(8,Pn/rt*100)),av=Math.max(6,42/rt*100);return o.jsxs("div",{className:"space-y-6",children:[o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",children:[o.jsxs("div",{className:"p-5 rounded-2xl bg-[#100c2a] border border-white/10 space-y-2",children:[o.jsx("span",{className:"text-xs text-slate-400 font-mono uppercase block",children:"Total Consultas"}),o.jsxs("div",{className:"flex items-baseline gap-2",children:[o.jsx("span",{className:"font-display text-4xl text-white",children:R}),o.jsx("span",{className:"text-xs text-brand-lime font-mono",children:"100%"})]}),o.jsx("p",{className:"text-[11px] text-slate-500",children:"Inquiries procesadas por todos los canales"})]}),o.jsxs("div",{className:"p-5 rounded-2xl bg-[#100c2a] border border-white/10 space-y-2",children:[o.jsx("span",{className:"text-xs text-slate-400 font-mono uppercase block",children:"Triage & Cache Hits"}),o.jsxs("div",{className:"flex items-baseline gap-2",children:[o.jsx("span",{className:"font-display text-4xl text-brand-lime",children:O+B}),o.jsxs("span",{className:"text-xs text-slate-400 font-mono",children:["$0 Costo (",Ce,"%)"]})]}),o.jsx("p",{className:"text-[11px] text-slate-500",children:"Resueltos sin consumo de tokens de generación"})]}),o.jsxs("div",{className:"p-5 rounded-2xl bg-[#100c2a] border border-white/10 space-y-2",children:[o.jsx("span",{className:"text-xs text-slate-400 font-mono uppercase block",children:"Tasa de Escalamiento"}),o.jsxs("div",{className:"flex items-baseline gap-2",children:[o.jsxs("span",{className:"font-display text-4xl text-amber-400",children:[q.escalation_rate_pct,"%"]}),o.jsxs("span",{className:"text-xs text-slate-400 font-mono",children:[ve," casos"]})]}),o.jsx("p",{className:"text-[11px] text-slate-500",children:"Transferencias a asesores académicos"})]}),o.jsxs("div",{className:"p-5 rounded-2xl bg-[#100c2a] border border-white/10 space-y-2",children:[o.jsx("span",{className:"text-xs text-slate-400 font-mono uppercase block",children:"Costo Estimado USD"}),o.jsx("div",{className:"flex items-baseline gap-2",children:o.jsxs("span",{className:"font-display text-4xl text-brand-blue",children:["$",(q.total_cost_usd||q.estimated_total_cost_usd||0).toFixed(4)]})}),o.jsxs("p",{className:"text-[11px] text-slate-500",children:["Latencia promedio: ",(q.average_latency_ms||0).toFixed(0)," ms"]})]})]}),o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[o.jsxs("div",{className:"p-6 rounded-3xl bg-[#100c2a] border border-white/10 flex flex-col justify-between space-y-6",children:[o.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-white/10",children:[o.jsxs("div",{className:"flex items-center gap-2.5",children:[o.jsx("div",{className:"w-8 h-8 rounded-lg bg-brand-lime/20 text-brand-lime flex items-center justify-center",children:o.jsx(t2,{className:"text-sm"})}),o.jsxs("div",{children:[o.jsx("h4",{className:"font-bold text-sm text-white",children:"Embudo de Resolución y Eficiencia"}),o.jsx("p",{className:"text-[11px] text-slate-400",children:"Distribución de consultas por capa de procesamiento"})]})]}),o.jsxs("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-brand-lime font-bold",children:[Ce,"% sin costo LLM"]})]}),o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-12 gap-6 items-center",children:[o.jsxs("div",{className:"sm:col-span-5 flex justify-center items-center relative",children:[o.jsxs("svg",{className:"w-44 h-44 transform -rotate-90",viewBox:"0 0 160 160",children:[o.jsx("circle",{cx:"80",cy:"80",r:"58",fill:"transparent",stroke:"#1e1848",strokeWidth:"16"}),R>0&&O>0&&o.jsx("circle",{cx:"80",cy:"80",r:"58",fill:"transparent",stroke:"#bdf052",strokeWidth:"16",strokeDasharray:`${ut} ${We-ut}`,strokeDashoffset:Me,className:"transition-all duration-700 ease-out"}),R>0&&B>0&&o.jsx("circle",{cx:"80",cy:"80",r:"58",fill:"transparent",stroke:"#38bdf8",strokeWidth:"16",strokeDasharray:`${dt} ${We-dt}`,strokeDashoffset:en,className:"transition-all duration-700 ease-out"}),R>0&&oe>0&&o.jsx("circle",{cx:"80",cy:"80",r:"58",fill:"transparent",stroke:"#a855f7",strokeWidth:"16",strokeDasharray:`${it} ${We-it}`,strokeDashoffset:Ke,className:"transition-all duration-700 ease-out"}),R>0&&ve>0&&o.jsx("circle",{cx:"80",cy:"80",r:"58",fill:"transparent",stroke:"#f59e0b",strokeWidth:"16",strokeDasharray:`${Dt} ${We-Dt}`,strokeDashoffset:dn,className:"transition-all duration-700 ease-out"})]}),o.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none",children:[o.jsx("span",{className:"font-display text-2xl text-white font-bold",children:R}),o.jsx("span",{className:"text-[10px] text-slate-400 font-mono uppercase tracking-wider",children:"Consultas"})]})]}),o.jsxs("div",{className:"sm:col-span-7 space-y-2.5",children:[o.jsxs("div",{className:"p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-[#bdf052] flex-shrink-0"}),o.jsxs("div",{children:[o.jsx("span",{className:"text-xs font-semibold text-white block",children:"Triage Determinista"}),o.jsx("span",{className:"text-[10px] text-slate-400 font-mono",children:"< 5ms • 0 Tokens"})]})]}),o.jsxs("div",{className:"text-right",children:[o.jsx("span",{className:"text-xs font-bold text-[#bdf052] font-mono",children:O}),o.jsxs("span",{className:"text-[10px] text-slate-400 font-mono block",children:["(",Se.toFixed(1),"%)"]})]})]}),o.jsxs("div",{className:"p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-[#38bdf8] flex-shrink-0"}),o.jsxs("div",{children:[o.jsx("span",{className:"text-xs font-semibold text-white block",children:"Caché Semántico"}),o.jsx("span",{className:"text-[10px] text-slate-400 font-mono",children:"~18ms • 0 Tokens"})]})]}),o.jsxs("div",{className:"text-right",children:[o.jsx("span",{className:"text-xs font-bold text-[#38bdf8] font-mono",children:B}),o.jsxs("span",{className:"text-[10px] text-slate-400 font-mono block",children:["(",Te.toFixed(1),"%)"]})]})]}),o.jsxs("div",{className:"p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-[#a855f7] flex-shrink-0"}),o.jsxs("div",{children:[o.jsx("span",{className:"text-xs font-semibold text-white block",children:"Generación RAG (LLM)"}),o.jsx("span",{className:"text-[10px] text-slate-400 font-mono",children:"Documentos Grounded"})]})]}),o.jsxs("div",{className:"text-right",children:[o.jsx("span",{className:"text-xs font-bold text-[#a855f7] font-mono",children:oe}),o.jsxs("span",{className:"text-[10px] text-slate-400 font-mono block",children:["(",Le.toFixed(1),"%)"]})]})]}),o.jsxs("div",{className:"p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-[#f59e0b] flex-shrink-0"}),o.jsxs("div",{children:[o.jsx("span",{className:"text-xs font-semibold text-white block",children:"Escalamiento Asesor"}),o.jsx("span",{className:"text-[10px] text-slate-400 font-mono",children:"Atención Humana"})]})]}),o.jsxs("div",{className:"text-right",children:[o.jsx("span",{className:"text-xs font-bold text-[#f59e0b] font-mono",children:ve}),o.jsxs("span",{className:"text-[10px] text-slate-400 font-mono block",children:["(",ze.toFixed(1),"%)"]})]})]})]})]})]}),o.jsxs("div",{className:"p-6 rounded-3xl bg-[#100c2a] border border-white/10 flex flex-col justify-between space-y-6",children:[o.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-white/10",children:[o.jsxs("div",{className:"flex items-center gap-2.5",children:[o.jsx("div",{className:"w-8 h-8 rounded-lg bg-[#38bdf8]/20 text-[#38bdf8] flex items-center justify-center",children:o.jsx(G_,{className:"text-sm"})}),o.jsxs("div",{children:[o.jsx("h4",{className:"font-bold text-sm text-white",children:"Composición de Tokens & Latencias"}),o.jsx("p",{className:"text-[11px] text-slate-400",children:"Consumo de contexto y velocidad por subsistema"})]})]}),o.jsxs("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300 font-bold",children:[Rn.toLocaleString()," tokens"]})]}),o.jsxs("div",{className:"space-y-2",children:[o.jsxs("div",{className:"flex items-center justify-between text-xs",children:[o.jsxs("span",{className:"text-slate-400 flex items-center gap-1.5 font-medium",children:[o.jsx(Y_,{className:"text-brand-blue text-[10px]"}),o.jsxs("span",{children:["Prompt Context (",at,"%)"]})]}),o.jsxs("span",{className:"text-slate-400 flex items-center gap-1.5 font-medium",children:[o.jsx(ns,{className:"text-brand-lime text-[10px]"}),o.jsxs("span",{children:["Completion (",_t,"%)"]})]})]}),o.jsxs("div",{className:"h-3.5 w-full bg-[#1e1848] rounded-full overflow-hidden flex p-0.5 border border-white/10",children:[o.jsx("div",{style:{width:`${at}%`},className:"h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-l-full transition-all duration-500",title:`Prompt: ${tn.toLocaleString()} tokens`}),o.jsx("div",{style:{width:`${_t}%`},className:"h-full bg-gradient-to-r from-lime-400 to-emerald-400 rounded-r-full transition-all duration-500",title:`Completion: ${yn.toLocaleString()} tokens`})]}),o.jsxs("div",{className:"flex items-center justify-between text-[11px] font-mono text-slate-400 pt-0.5",children:[o.jsxs("span",{children:[tn.toLocaleString()," in"]}),o.jsxs("span",{children:[yn.toLocaleString()," out"]})]})]}),o.jsxs("div",{className:"space-y-3 pt-2 border-t border-white/10",children:[o.jsx("span",{className:"text-[11px] font-mono text-slate-400 uppercase tracking-wider block",children:"Latencia por Capa de Servicio (ms)"}),o.jsxs("div",{className:"space-y-2.5",children:[o.jsxs("div",{className:"space-y-1",children:[o.jsxs("div",{className:"flex justify-between text-xs",children:[o.jsx("span",{className:"text-slate-300",children:"Triage Determinista (Regex / Guardrails)"}),o.jsx("span",{className:"font-mono text-brand-lime font-bold",children:"~3.5 ms"})]}),o.jsx("div",{className:"h-2 w-full bg-white/5 rounded-full overflow-hidden",children:o.jsx("div",{style:{width:`${ni}%`},className:"h-full bg-brand-lime rounded-full transition-all duration-500"})})]}),o.jsxs("div",{className:"space-y-1",children:[o.jsxs("div",{className:"flex justify-between text-xs",children:[o.jsx("span",{className:"text-slate-300",children:"Caché Vectorial Semántico"}),o.jsx("span",{className:"font-mono text-[#38bdf8] font-bold",children:"~18.5 ms"})]}),o.jsx("div",{className:"h-2 w-full bg-white/5 rounded-full overflow-hidden",children:o.jsx("div",{style:{width:`${Gi}%`},className:"h-full bg-[#38bdf8] rounded-full transition-all duration-500"})})]}),o.jsxs("div",{className:"space-y-1",children:[o.jsxs("div",{className:"flex justify-between text-xs",children:[o.jsx("span",{className:"text-slate-300",children:"Pipeline RAG + Inferencia LLM"}),o.jsxs("span",{className:"font-mono text-[#a855f7] font-bold",children:["~",Pn.toFixed(0)," ms"]})]}),o.jsx("div",{className:"h-2 w-full bg-white/5 rounded-full overflow-hidden",children:o.jsx("div",{style:{width:`${Eo}%`},className:"h-full bg-[#a855f7] rounded-full transition-all duration-500"})})]}),o.jsxs("div",{className:"space-y-1",children:[o.jsxs("div",{className:"flex justify-between text-xs",children:[o.jsx("span",{className:"text-slate-300",children:"Conexión WebSocket Asesor Humano"}),o.jsx("span",{className:"font-mono text-amber-400 font-bold",children:"~42.0 ms"})]}),o.jsx("div",{className:"h-2 w-full bg-white/5 rounded-full overflow-hidden",children:o.jsx("div",{style:{width:`${av}%`},className:"h-full bg-amber-400 rounded-full transition-all duration-500"})})]})]})]})]})]})]})})()]}),g==="crm"&&o.jsxs("div",{className:"space-y-6",children:[o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsxs("div",{children:[o.jsx("h3",{className:"text-lg font-bold text-white",children:"Directorio CRM & Reseñas de Aspirantes"}),o.jsx("p",{className:"text-xs text-slate-400",children:"Historial de calificaciones y perfiles de estudiantes atendidos"})]}),o.jsxs("button",{onClick:pe,className:"flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10",children:[o.jsx(es,{className:`text-xs ${ke?"animate-spin":""}`}),o.jsx("span",{children:"Actualizar CRM"})]})]}),se&&o.jsxs("div",{className:"p-4 sm:p-5 rounded-2xl bg-[#100c2a] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4",children:[o.jsxs("div",{className:"flex items-center gap-3 sm:gap-4",children:[o.jsx("div",{className:"w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-xl font-bold flex-shrink-0",children:o.jsx(Kp,{})}),o.jsxs("div",{children:[o.jsx("h4",{className:"text-sm sm:text-base font-bold text-white",children:"Calificación Promedio de Atención"}),o.jsxs("p",{className:"text-xs text-slate-400",children:[se.total_reviews," reseñas de satisfacción enviadas"]})]})]}),o.jsxs("div",{className:"font-display text-3xl sm:text-4xl text-amber-400",children:[se.average_rating," / 5.0"]})]}),o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[o.jsxs("div",{className:"p-6 rounded-3xl bg-[#100c2a] border border-white/10 space-y-4",children:[o.jsxs("h4",{className:"font-bold text-sm text-white flex items-center gap-2",children:[o.jsx(Tl,{className:"text-brand-lime"}),o.jsx("span",{children:"Perfiles Registrados en CRM"})]}),o.jsx("div",{className:"overflow-x-auto",children:o.jsxs("table",{className:"w-full text-left text-xs text-slate-300",children:[o.jsx("thead",{className:"bg-white/5 text-slate-400 uppercase text-[10px] border-b border-white/10",children:o.jsxs("tr",{children:[o.jsx("th",{className:"p-3",children:"Nombre"}),o.jsx("th",{className:"p-3",children:"Cédula"}),o.jsx("th",{className:"p-3",children:"Canal"}),o.jsx("th",{className:"p-3 text-center",children:"Escalaciones"})]})}),o.jsx("tbody",{className:"divide-y divide-white/5",children:Qe.length===0?o.jsx("tr",{children:o.jsx("td",{colSpan:"4",className:"text-center py-6 text-slate-500",children:"Sin perfiles registrados"})}):Qe.map(R=>o.jsxs("tr",{children:[o.jsx("td",{className:"p-3 font-bold text-white",children:R.full_name}),o.jsx("td",{className:"p-3 font-mono text-slate-400",children:R.national_id}),o.jsx("td",{className:"p-3 uppercase font-mono text-[10px] text-brand-lime",children:R.channel}),o.jsx("td",{className:"p-3 text-center font-bold text-amber-400",children:R.total_escalations_count})]},R.id))})]})})]}),o.jsxs("div",{className:"p-6 rounded-3xl bg-[#100c2a] border border-white/10 space-y-4",children:[o.jsxs("h4",{className:"font-bold text-sm text-white flex items-center gap-2",children:[o.jsx(Kp,{className:"text-amber-400"}),o.jsx("span",{children:"Últimas Reseñas Recibidas"})]}),o.jsx("div",{className:"overflow-x-auto",children:o.jsxs("table",{className:"w-full text-left text-xs text-slate-300",children:[o.jsx("thead",{className:"bg-white/5 text-slate-400 uppercase text-[10px] border-b border-white/10",children:o.jsxs("tr",{children:[o.jsx("th",{className:"p-3",children:"Sesión"}),o.jsx("th",{className:"p-3",children:"Calificación"}),o.jsx("th",{className:"p-3",children:"Comentarios"})]})}),o.jsx("tbody",{className:"divide-y divide-white/5",children:Q.length===0?o.jsx("tr",{children:o.jsx("td",{colSpan:"3",className:"text-center py-6 text-slate-500",children:"Sin reseñas enviadas"})}):Q.map(R=>o.jsxs("tr",{children:[o.jsx("td",{className:"p-3 font-mono text-brand-lime",children:R.session_id}),o.jsxs("td",{className:"p-3 text-amber-400 font-bold",children:[R.rating," ★"]}),o.jsx("td",{className:"p-3 italic text-slate-400 max-w-[200px] truncate",children:R.notes||"Sin notas"})]},R.id))})]})})]})]})]}),g==="settings"&&o.jsxs("div",{className:"max-w-4xl mx-auto space-y-6",children:[o.jsxs("div",{children:[o.jsx("h3",{className:"text-lg font-bold text-white",children:"Configuración de Proveedores LLM & API Keys"}),o.jsx("p",{className:"text-xs text-slate-400",children:"Alterna en tiempo de ejecución entre Google Gemini, Groq LPU y OpenAI sin reiniciar el servidor."})]}),pt.text&&o.jsxs("div",{className:`p-4 rounded-2xl text-xs flex items-center gap-2 ${pt.type==="success"?"bg-emerald-500/10 border border-emerald-500/30 text-emerald-300":"bg-red-500/10 border border-red-500/30 text-red-400"}`,children:[pt.type==="success"?o.jsx(Bt,{}):o.jsx(ts,{}),o.jsx("span",{children:pt.text})]}),o.jsxs("form",{onSubmit:Ne,className:"p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#100c2a] border border-white/10 space-y-6",children:[o.jsxs("div",{children:[o.jsx("label",{className:"text-xs font-bold uppercase text-slate-400 block mb-3",children:"Proveedor LLM Activo"}),o.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:[{id:"gemini",name:"Google Gemini",defaultModel:"gemini-3.1-flash-lite",icon:o.jsx(Yp,{className:"text-xl text-[#4285F4]"})},{id:"groq",name:"Groq LPU (Ultra-Fast)",defaultModel:"llama-3.1-8b-instant",icon:o.jsx(ns,{className:"text-xl text-brand-lime"})},{id:"openai",name:"OpenAI",defaultModel:"gpt-4o-mini",icon:o.jsx(ci,{className:"text-xl text-brand-blue"})}].map(R=>{var oe;const O=((oe=ie==null?void 0:ie.providers)==null?void 0:oe[R.id])||(ie==null?void 0:ie[R.id]),B=(O==null?void 0:O.model)||R.defaultModel;return o.jsxs("button",{type:"button",onClick:()=>Ye(R.id),className:`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between ${nt===R.id?"bg-brand-lime/10 border-brand-lime text-white shadow-lg shadow-brand-lime/10":"bg-white/5 border-white/10 text-slate-400 hover:border-white/30"}`,children:[o.jsxs("div",{className:"flex items-center justify-between mb-3",children:[R.icon,nt===R.id&&o.jsx(_g,{className:"text-brand-lime text-xs"})]}),o.jsxs("div",{children:[o.jsx("strong",{className:"text-sm block text-white",children:R.name}),o.jsx("span",{className:"text-[11px] font-mono text-brand-lime/80 font-medium",children:B})]})]},R.id)})})]}),o.jsxs("div",{className:"space-y-5 pt-4 border-t border-white/10",children:[o.jsxs("div",{className:"p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2",children:[o.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx(Yp,{className:"text-sm text-[#4285F4]"}),o.jsx("label",{className:"text-xs font-bold uppercase text-slate-300",children:"Google Gemini API Key"})]}),o.jsx("div",{className:"flex items-center gap-2",children:H.gemini?o.jsxs("span",{className:`text-[10px] px-2 py-0.5 rounded-full font-medium flex items-center gap-1 ${H.gemini.status==="verified"?"bg-emerald-500/20 text-emerald-300 border border-emerald-500/30":"bg-red-500/20 text-red-300 border border-red-500/30"}`,children:[H.gemini.status==="verified"?o.jsx(Bt,{className:"text-[9px]"}):o.jsx(ts,{className:"text-[9px]"}),H.gemini.message]}):o.jsx("span",{className:`text-[10px] px-2 py-0.5 rounded-full font-mono ${((Oe=(Pe=ie==null?void 0:ie.providers)==null?void 0:Pe.gemini)==null?void 0:Oe.is_configured)??((U=ie==null?void 0:ie.gemini)==null?void 0:U.is_configured)?"bg-emerald-500/10 text-emerald-400 border border-emerald-500/20":"bg-slate-800 text-slate-500"}`,children:((J=(fe=ie==null?void 0:ie.providers)==null?void 0:fe.gemini)==null?void 0:J.is_configured)??((me=ie==null?void 0:ie.gemini)==null?void 0:me.is_configured)?`Configurada (${((te=(_e=ie==null?void 0:ie.providers)==null?void 0:_e.gemini)==null?void 0:te.masked_key)||((Ee=ie==null?void 0:ie.gemini)==null?void 0:Ee.masked_key)||"Activa"})`:"No configurada"})})]}),o.jsxs("div",{className:"flex gap-2",children:[o.jsx("input",{type:"password",placeholder:"AIzaSy... (Deja en blanco para conservar actual)",value:je,onChange:R=>St(R.target.value),className:"flex-1 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-lime font-mono"}),o.jsxs("button",{type:"button",disabled:A==="gemini"||!(((mt=(we=ie==null?void 0:ie.providers)==null?void 0:we.gemini)==null?void 0:mt.is_configured)??((ot=ie==null?void 0:ie.gemini)==null?void 0:ot.is_configured))&&!je.trim(),onClick:()=>K("gemini",je),className:"px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-40 text-white text-[11px] font-semibold transition-all flex items-center gap-1.5 cursor-pointer",children:[A==="gemini"?o.jsx(es,{className:"animate-spin text-xs"}):o.jsx(ns,{className:"text-brand-lime text-xs"}),o.jsx("span",{children:A==="gemini"?"Probando...":"Probar"})]})]})]}),o.jsxs("div",{className:"p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2",children:[o.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx(ns,{className:"text-sm text-brand-lime"}),o.jsx("label",{className:"text-xs font-bold uppercase text-slate-300",children:"Groq API Key"})]}),o.jsx("div",{className:"flex items-center gap-2",children:H.groq?o.jsxs("span",{className:`text-[10px] px-2 py-0.5 rounded-full font-medium flex items-center gap-1 ${H.groq.status==="verified"?"bg-emerald-500/20 text-emerald-300 border border-emerald-500/30":"bg-red-500/20 text-red-300 border border-red-500/30"}`,children:[H.groq.status==="verified"?o.jsx(Bt,{className:"text-[9px]"}):o.jsx(ts,{className:"text-[9px]"}),H.groq.message]}):o.jsx("span",{className:`text-[10px] px-2 py-0.5 rounded-full font-mono ${((_n=(vn=ie==null?void 0:ie.providers)==null?void 0:vn.groq)==null?void 0:_n.is_configured)??((vo=ie==null?void 0:ie.groq)==null?void 0:vo.is_configured)?"bg-emerald-500/10 text-emerald-400 border border-emerald-500/20":"bg-slate-800 text-slate-500"}`,children:((ra=(_o=ie==null?void 0:ie.providers)==null?void 0:_o.groq)==null?void 0:ra.is_configured)??((Zr=ie==null?void 0:ie.groq)==null?void 0:Zr.is_configured)?`Configurada (${((sa=(yo=ie==null?void 0:ie.providers)==null?void 0:yo.groq)==null?void 0:sa.masked_key)||((aa=ie==null?void 0:ie.groq)==null?void 0:aa.masked_key)||"Activa"})`:"No configurada"})})]}),o.jsxs("div",{className:"flex gap-2",children:[o.jsx("input",{type:"password",placeholder:"gsk_... (Deja en blanco para conservar actual)",value:vt,onChange:R=>Ct(R.target.value),className:"flex-1 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-lime font-mono"}),o.jsxs("button",{type:"button",disabled:A==="groq"||!(((Qr=(ti=ie==null?void 0:ie.providers)==null?void 0:ti.groq)==null?void 0:Qr.is_configured)??((oa=ie==null?void 0:ie.groq)==null?void 0:oa.is_configured))&&!vt.trim(),onClick:()=>K("groq",vt),className:"px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-40 text-white text-[11px] font-semibold transition-all flex items-center gap-1.5 cursor-pointer",children:[A==="groq"?o.jsx(es,{className:"animate-spin text-xs"}):o.jsx(ns,{className:"text-brand-lime text-xs"}),o.jsx("span",{children:A==="groq"?"Probando...":"Probar"})]})]})]}),o.jsxs("div",{className:"p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2",children:[o.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx(ci,{className:"text-sm text-brand-blue"}),o.jsx("label",{className:"text-xs font-bold uppercase text-slate-300",children:"OpenAI API Key"})]}),o.jsx("div",{className:"flex items-center gap-2",children:H.openai?o.jsxs("span",{className:`text-[10px] px-2 py-0.5 rounded-full font-medium flex items-center gap-1 ${H.openai.status==="verified"?"bg-emerald-500/20 text-emerald-300 border border-emerald-500/30":"bg-red-500/20 text-red-300 border border-red-500/30"}`,children:[H.openai.status==="verified"?o.jsx(Bt,{className:"text-[9px]"}):o.jsx(ts,{className:"text-[9px]"}),H.openai.message]}):o.jsx("span",{className:`text-[10px] px-2 py-0.5 rounded-full font-mono ${((Mr=(la=ie==null?void 0:ie.providers)==null?void 0:la.openai)==null?void 0:Mr.is_configured)??((ca=ie==null?void 0:ie.openai)==null?void 0:ca.is_configured)?"bg-emerald-500/10 text-emerald-400 border border-emerald-500/20":"bg-slate-800 text-slate-500"}`,children:((ua=(br=ie==null?void 0:ie.providers)==null?void 0:br.openai)==null?void 0:ua.is_configured)??((da=ie==null?void 0:ie.openai)==null?void 0:da.is_configured)?`Configurada (${((Mo=(So=ie==null?void 0:ie.providers)==null?void 0:So.openai)==null?void 0:Mo.masked_key)||((bo=ie==null?void 0:ie.openai)==null?void 0:bo.masked_key)||"Activa"})`:"No configurada"})})]}),o.jsxs("div",{className:"flex gap-2",children:[o.jsx("input",{type:"password",placeholder:"sk-proj-... (Deja en blanco para conservar actual)",value:Et,onChange:R=>ht(R.target.value),className:"flex-1 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-lime font-mono"}),o.jsxs("button",{type:"button",disabled:A==="openai"||!(((b=(wo=ie==null?void 0:ie.providers)==null?void 0:wo.openai)==null?void 0:b.is_configured)??((V=ie==null?void 0:ie.openai)==null?void 0:V.is_configured))&&!Et.trim(),onClick:()=>K("openai",Et),className:"px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-40 text-white text-[11px] font-semibold transition-all flex items-center gap-1.5 cursor-pointer",children:[A==="openai"?o.jsx(es,{className:"animate-spin text-xs"}):o.jsx(ns,{className:"text-brand-lime text-xs"}),o.jsx("span",{children:A==="openai"?"Probando...":"Probar"})]})]})]})]}),o.jsx("div",{className:"flex items-center justify-end pt-4 border-t border-white/10",children:o.jsx("button",{type:"submit",disabled:Ht,className:"px-6 py-3 rounded-xl bg-brand-lime hover:bg-[#b0f55c] disabled:opacity-50 text-brand-dark font-bold text-xs uppercase tracking-wider shadow-lg shadow-brand-lime/20 transition-all hover:scale-105 cursor-pointer",children:Ht?"Guardando ajustes...":"Guardar Configuración"})})]})]})]}),F&&S&&o.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn",children:o.jsxs("div",{className:"bg-[#100c2a] border border-white/20 rounded-3xl max-w-md w-full p-6 text-white shadow-2xl space-y-4",children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("div",{className:"p-2.5 bg-rose-500/20 text-rose-400 border border-rose-500/30 rounded-xl",children:o.jsx(ts,{className:"text-xl"})}),o.jsxs("div",{children:[o.jsx("h4",{className:"text-base font-bold",children:"¿Finalizar Atención Personalizada?"}),o.jsxs("p",{className:"text-xs text-slate-400",children:["Sesión: ",S.session_id]})]})]}),o.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["¿Estás seguro de dar por concluida la asesoría con ",o.jsx("strong",{className:"text-white",children:S.full_name}),"? Se notificará al aspirante y se le solicitará calificar el servicio del 1 al 5."]}),Y&&o.jsx("div",{className:"p-3 bg-rose-500/20 border border-rose-500/40 rounded-xl text-xs text-rose-300",children:Y}),o.jsxs("div",{className:"flex items-center justify-end gap-3 pt-2",children:[o.jsx("button",{type:"button",onClick:()=>I(!1),className:"px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-xl transition-colors",children:"Cancelar"}),o.jsx("button",{type:"button",onClick:xe,disabled:$,className:"px-5 py-2 text-xs font-bold text-white bg-rose-600 hover:bg-rose-700 rounded-xl shadow-md transition-all disabled:opacity-50",children:$?"Finalizando...":"Sí, Finalizar"})]})]})})]}):o.jsx("div",{className:"min-h-screen bg-[#070515] flex flex-col items-center justify-center p-5 font-sans relative selection:bg-brand-lime selection:text-brand-dark",children:o.jsxs("div",{className:"max-w-md w-full p-8 rounded-3xl bg-[#100c2a] border border-white/10 shadow-2xl space-y-6 relative z-10",children:[o.jsxs("div",{className:"text-center space-y-2",children:[o.jsx("div",{className:"flex justify-center pb-2",children:o.jsx(Zs,{size:"lg",showText:!1})}),o.jsx("h2",{className:"font-display text-2xl uppercase tracking-wider text-white",children:"Staff Management Portal"}),o.jsx("p",{className:"text-xs text-slate-400",children:"Acceso seguro para Asesores Académicos y Administradores"})]}),h&&o.jsxs("div",{className:"p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2",children:[o.jsx(ts,{}),o.jsx("span",{children:h})]}),o.jsxs("form",{onSubmit:ue,className:"space-y-4",children:[o.jsxs("div",{children:[o.jsx("label",{className:"text-xs font-bold uppercase text-slate-400 block mb-1.5",children:"Usuario Administrador"}),o.jsxs("div",{className:"relative",children:[o.jsx(V_,{className:"absolute left-3.5 top-3.5 text-slate-500 text-xs"}),o.jsx("input",{type:"text",required:!0,placeholder:"admin",value:a,onChange:R=>l(R.target.value),className:"w-full pl-9 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-brand-lime font-mono"})]})]}),o.jsxs("div",{children:[o.jsx("label",{className:"text-xs font-bold uppercase text-slate-400 block mb-1.5",children:"Contraseña"}),o.jsxs("div",{className:"relative",children:[o.jsx(K_,{className:"absolute left-3.5 top-3.5 text-slate-500 text-xs"}),o.jsx("input",{type:"password",required:!0,placeholder:"••••••••",value:c,onChange:R=>u(R.target.value),className:"w-full pl-9 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-brand-lime"})]})]}),o.jsx("button",{type:"submit",disabled:f,className:"w-full py-3 rounded-xl bg-brand-lime hover:bg-[#b0f55c] disabled:opacity-50 text-brand-dark font-bold text-xs uppercase tracking-wider shadow-lg shadow-brand-lime/20 transition-all hover:scale-[1.02] cursor-pointer mt-2",children:f?"Verificando credenciales...":"Iniciar Sesión"})]}),o.jsx("div",{className:"pt-4 border-t border-white/10 text-center",children:o.jsx("button",{onClick:t,className:"text-xs text-slate-400 hover:text-white transition-colors",children:"← Volver a la Landing Page"})})]})})}function _E(){const[t,e]=ce.useState(()=>{const i=window.location.hash.toLowerCase();return i==="#chat"||i==="#assistant"?"assistant":i==="#admin"?"admin":"landing"});ce.useEffect(()=>{const i=()=>{const r=window.location.hash.toLowerCase();r==="#chat"||r==="#assistant"?e("assistant"):r==="#admin"?e("admin"):(r==="#landing"||r===""||r==="#")&&e("landing")};return window.addEventListener("hashchange",i),()=>window.removeEventListener("hashchange",i)},[]);const n=i=>{e(i),i==="assistant"?window.location.hash="chat":i==="admin"?window.location.hash="admin":(window.location.hash="landing",window.scrollTo({top:0,behavior:"smooth"}))};return o.jsxs("div",{className:"min-h-screen bg-[#070515] text-slate-100 font-sans selection:bg-brand-lime selection:text-brand-dark",children:[t==="landing"&&o.jsx(zw,{onNavigateToChat:()=>n("assistant"),onNavigateToAdmin:()=>n("admin")}),t==="assistant"&&o.jsx(gE,{onNavigateToLanding:()=>n("landing"),onNavigateToAdmin:()=>n("admin")}),t==="admin"&&o.jsx(vE,{onNavigateToLanding:()=>n("landing"),onNavigateToChat:()=>n("assistant")})]})}ku.createRoot(document.getElementById("root")).render(o.jsx(or.StrictMode,{children:o.jsx(_E,{})}));
