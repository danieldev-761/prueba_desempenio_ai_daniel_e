(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Yg(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var qm={exports:{}},oc={},Ym={exports:{}},We={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oo=Symbol.for("react.element"),Kg=Symbol.for("react.portal"),Zg=Symbol.for("react.fragment"),Qg=Symbol.for("react.strict_mode"),Jg=Symbol.for("react.profiler"),ev=Symbol.for("react.provider"),tv=Symbol.for("react.context"),nv=Symbol.for("react.forward_ref"),iv=Symbol.for("react.suspense"),rv=Symbol.for("react.memo"),sv=Symbol.for("react.lazy"),Lh=Symbol.iterator;function av(t){return t===null||typeof t!="object"?null:(t=Lh&&t[Lh]||t["@@iterator"],typeof t=="function"?t:null)}var Km={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zm=Object.assign,Qm={};function qs(t,e,n){this.props=t,this.context=e,this.refs=Qm,this.updater=n||Km}qs.prototype.isReactComponent={};qs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};qs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Jm(){}Jm.prototype=qs.prototype;function _f(t,e,n){this.props=t,this.context=e,this.refs=Qm,this.updater=n||Km}var yf=_f.prototype=new Jm;yf.constructor=_f;Zm(yf,qs.prototype);yf.isPureReactComponent=!0;var Dh=Array.isArray,e0=Object.prototype.hasOwnProperty,Sf={current:null},t0={key:!0,ref:!0,__self:!0,__source:!0};function n0(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)e0.call(e,i)&&!t0.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),u=0;u<o;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:oo,type:t,key:s,ref:a,props:r,_owner:Sf.current}}function ov(t,e){return{$$typeof:oo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Mf(t){return typeof t=="object"&&t!==null&&t.$$typeof===oo}function lv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ih=/\/+/g;function Ac(t,e){return typeof t=="object"&&t!==null&&t.key!=null?lv(""+t.key):e.toString(36)}function cl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case oo:case Kg:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Ac(a,0):i,Dh(r)?(n="",t!=null&&(n=t.replace(Ih,"$&/")+"/"),cl(r,e,n,"",function(u){return u})):r!=null&&(Mf(r)&&(r=ov(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Ih,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Dh(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+Ac(s,o);a+=cl(s,e,n,l,r)}else if(l=av(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+Ac(s,o++),a+=cl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Eo(t,e,n){if(t==null)return t;var i=[],r=0;return cl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function cv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var an={current:null},ul={transition:null},uv={ReactCurrentDispatcher:an,ReactCurrentBatchConfig:ul,ReactCurrentOwner:Sf};function i0(){throw Error("act(...) is not supported in production builds of React.")}We.Children={map:Eo,forEach:function(t,e,n){Eo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Eo(t,function(){e++}),e},toArray:function(t){return Eo(t,function(e){return e})||[]},only:function(t){if(!Mf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};We.Component=qs;We.Fragment=Zg;We.Profiler=Jg;We.PureComponent=_f;We.StrictMode=Qg;We.Suspense=iv;We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uv;We.act=i0;We.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Zm({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Sf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)e0.call(e,l)&&!t0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var u=0;u<l;u++)o[u]=arguments[u+2];i.children=o}return{$$typeof:oo,type:t.type,key:r,ref:s,props:i,_owner:a}};We.createContext=function(t){return t={$$typeof:tv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:ev,_context:t},t.Consumer=t};We.createElement=n0;We.createFactory=function(t){var e=n0.bind(null,t);return e.type=t,e};We.createRef=function(){return{current:null}};We.forwardRef=function(t){return{$$typeof:nv,render:t}};We.isValidElement=Mf;We.lazy=function(t){return{$$typeof:sv,_payload:{_status:-1,_result:t},_init:cv}};We.memo=function(t,e){return{$$typeof:rv,type:t,compare:e===void 0?null:e}};We.startTransition=function(t){var e=ul.transition;ul.transition={};try{t()}finally{ul.transition=e}};We.unstable_act=i0;We.useCallback=function(t,e){return an.current.useCallback(t,e)};We.useContext=function(t){return an.current.useContext(t)};We.useDebugValue=function(){};We.useDeferredValue=function(t){return an.current.useDeferredValue(t)};We.useEffect=function(t,e){return an.current.useEffect(t,e)};We.useId=function(){return an.current.useId()};We.useImperativeHandle=function(t,e,n){return an.current.useImperativeHandle(t,e,n)};We.useInsertionEffect=function(t,e){return an.current.useInsertionEffect(t,e)};We.useLayoutEffect=function(t,e){return an.current.useLayoutEffect(t,e)};We.useMemo=function(t,e){return an.current.useMemo(t,e)};We.useReducer=function(t,e,n){return an.current.useReducer(t,e,n)};We.useRef=function(t){return an.current.useRef(t)};We.useState=function(t){return an.current.useState(t)};We.useSyncExternalStore=function(t,e,n){return an.current.useSyncExternalStore(t,e,n)};We.useTransition=function(){return an.current.useTransition()};We.version="18.3.1";Ym.exports=We;var ue=Ym.exports;const rr=Yg(ue);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dv=ue,fv=Symbol.for("react.element"),hv=Symbol.for("react.fragment"),pv=Object.prototype.hasOwnProperty,mv=dv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,xv={key:!0,ref:!0,__self:!0,__source:!0};function r0(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)pv.call(e,i)&&!xv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:fv,type:t,key:s,ref:a,props:r,_owner:mv.current}}oc.Fragment=hv;oc.jsx=r0;oc.jsxs=r0;qm.exports=oc;var c=qm.exports,Du={},s0={exports:{}},wn={},a0={exports:{}},o0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,W){var Y=D.length;D.push(W);e:for(;0<Y;){var ne=Y-1>>>1,re=D[ne];if(0<r(re,W))D[ne]=W,D[Y]=re,Y=ne;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var W=D[0],Y=D.pop();if(Y!==W){D[0]=Y;e:for(var ne=0,re=D.length,Ie=re>>>1;ne<Ie;){var Ke=2*(ne+1)-1,je=D[Ke],Q=Ke+1,ce=D[Q];if(0>r(je,Y))Q<re&&0>r(ce,je)?(D[ne]=ce,D[Q]=Y,ne=Q):(D[ne]=je,D[Ke]=Y,ne=Ke);else if(Q<re&&0>r(ce,Y))D[ne]=ce,D[Q]=Y,ne=Q;else break e}}return W}function r(D,W){var Y=D.sortIndex-W.sortIndex;return Y!==0?Y:D.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],u=[],h=1,p=null,d=3,m=!1,g=!1,b=!1,x=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function M(D){for(var W=n(u);W!==null;){if(W.callback===null)i(u);else if(W.startTime<=D)i(u),W.sortIndex=W.expirationTime,e(l,W);else break;W=n(u)}}function S(D){if(b=!1,M(D),!g)if(n(l)!==null)g=!0,q(T);else{var W=n(u);W!==null&&G(S,W.startTime-D)}}function T(D,W){g=!1,b&&(b=!1,f(_),_=-1),m=!0;var Y=d;try{for(M(W),p=n(l);p!==null&&(!(p.expirationTime>W)||D&&!P());){var ne=p.callback;if(typeof ne=="function"){p.callback=null,d=p.priorityLevel;var re=ne(p.expirationTime<=W);W=t.unstable_now(),typeof re=="function"?p.callback=re:p===n(l)&&i(l),M(W)}else i(l);p=n(l)}if(p!==null)var Ie=!0;else{var Ke=n(u);Ke!==null&&G(S,Ke.startTime-W),Ie=!1}return Ie}finally{p=null,d=Y,m=!1}}var w=!1,C=null,_=-1,R=5,L=-1;function P(){return!(t.unstable_now()-L<R)}function F(){if(C!==null){var D=t.unstable_now();L=D;var W=!0;try{W=C(!0,D)}finally{W?I():(w=!1,C=null)}}else w=!1}var I;if(typeof y=="function")I=function(){y(F)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,B=$.port2;$.port1.onmessage=F,I=function(){B.postMessage(null)}}else I=function(){x(F,0)};function q(D){C=D,w||(w=!0,I())}function G(D,W){_=x(function(){D(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){g||m||(g=!0,q(T))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(d){case 1:case 2:case 3:var W=3;break;default:W=d}var Y=d;d=W;try{return D()}finally{d=Y}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,W){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var Y=d;d=D;try{return W()}finally{d=Y}},t.unstable_scheduleCallback=function(D,W,Y){var ne=t.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?ne+Y:ne):Y=ne,D){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=Y+re,D={id:h++,callback:W,priorityLevel:D,startTime:Y,expirationTime:re,sortIndex:-1},Y>ne?(D.sortIndex=Y,e(u,D),n(l)===null&&D===n(u)&&(b?(f(_),_=-1):b=!0,G(S,Y-ne))):(D.sortIndex=re,e(l,D),g||m||(g=!0,q(T))),D},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(D){var W=d;return function(){var Y=d;d=W;try{return D.apply(this,arguments)}finally{d=Y}}}})(o0);a0.exports=o0;var gv=a0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vv=ue,bn=gv;function ae(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var l0=new Set,Va={};function Wr(t,e){Os(t,e),Os(t+"Capture",e)}function Os(t,e){for(Va[t]=e,t=0;t<e.length;t++)l0.add(e[t])}var Pi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Iu=Object.prototype.hasOwnProperty,_v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Uh={},Fh={};function yv(t){return Iu.call(Fh,t)?!0:Iu.call(Uh,t)?!1:_v.test(t)?Fh[t]=!0:(Uh[t]=!0,!1)}function Sv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Mv(t,e,n,i){if(e===null||typeof e>"u"||Sv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function on(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Wt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Wt[t]=new on(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Wt[e]=new on(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Wt[t]=new on(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Wt[t]=new on(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Wt[t]=new on(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Wt[t]=new on(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Wt[t]=new on(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Wt[t]=new on(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Wt[t]=new on(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ef=/[\-:]([a-z])/g;function bf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ef,bf);Wt[e]=new on(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ef,bf);Wt[e]=new on(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ef,bf);Wt[e]=new on(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Wt[t]=new on(t,1,!1,t.toLowerCase(),null,!1,!1)});Wt.xlinkHref=new on("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Wt[t]=new on(t,1,!1,t.toLowerCase(),null,!0,!0)});function wf(t,e,n,i){var r=Wt.hasOwnProperty(e)?Wt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Mv(e,n,r,i)&&(n=null),i||r===null?yv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Oi=vv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,bo=Symbol.for("react.element"),xs=Symbol.for("react.portal"),gs=Symbol.for("react.fragment"),Tf=Symbol.for("react.strict_mode"),Uu=Symbol.for("react.profiler"),c0=Symbol.for("react.provider"),u0=Symbol.for("react.context"),Af=Symbol.for("react.forward_ref"),Fu=Symbol.for("react.suspense"),Ou=Symbol.for("react.suspense_list"),Cf=Symbol.for("react.memo"),Ki=Symbol.for("react.lazy"),d0=Symbol.for("react.offscreen"),Oh=Symbol.iterator;function la(t){return t===null||typeof t!="object"?null:(t=Oh&&t[Oh]||t["@@iterator"],typeof t=="function"?t:null)}var St=Object.assign,Cc;function Ea(t){if(Cc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Cc=e&&e[1]||""}return`
`+Cc+t}var Rc=!1;function Nc(t,e){if(!t||Rc)return"";Rc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{Rc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ea(t):""}function Ev(t){switch(t.tag){case 5:return Ea(t.type);case 16:return Ea("Lazy");case 13:return Ea("Suspense");case 19:return Ea("SuspenseList");case 0:case 2:case 15:return t=Nc(t.type,!1),t;case 11:return t=Nc(t.type.render,!1),t;case 1:return t=Nc(t.type,!0),t;default:return""}}function ku(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case gs:return"Fragment";case xs:return"Portal";case Uu:return"Profiler";case Tf:return"StrictMode";case Fu:return"Suspense";case Ou:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case u0:return(t.displayName||"Context")+".Consumer";case c0:return(t._context.displayName||"Context")+".Provider";case Af:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Cf:return e=t.displayName||null,e!==null?e:ku(t.type)||"Memo";case Ki:e=t._payload,t=t._init;try{return ku(t(e))}catch{}}return null}function bv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ku(e);case 8:return e===Tf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function hr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function f0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function wv(t){var e=f0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function wo(t){t._valueTracker||(t._valueTracker=wv(t))}function h0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=f0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Al(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Bu(t,e){var n=e.checked;return St({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function kh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=hr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function p0(t,e){e=e.checked,e!=null&&wf(t,"checked",e,!1)}function zu(t,e){p0(t,e);var n=hr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Vu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Vu(t,e.type,hr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Bh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Vu(t,e,n){(e!=="number"||Al(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ba=Array.isArray;function Cs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+hr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Hu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ae(91));return St({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function zh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ae(92));if(ba(n)){if(1<n.length)throw Error(ae(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:hr(n)}}function m0(t,e){var n=hr(e.value),i=hr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Vh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function x0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Gu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?x0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var To,g0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(To=To||document.createElement("div"),To.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=To.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ha(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ra={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Tv=["Webkit","ms","Moz","O"];Object.keys(Ra).forEach(function(t){Tv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ra[e]=Ra[t]})});function v0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ra.hasOwnProperty(t)&&Ra[t]?(""+e).trim():e+"px"}function _0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=v0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Av=St({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ju(t,e){if(e){if(Av[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ae(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ae(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ae(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ae(62))}}function Wu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xu=null;function Rf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var $u=null,Rs=null,Ns=null;function Hh(t){if(t=uo(t)){if(typeof $u!="function")throw Error(ae(280));var e=t.stateNode;e&&(e=fc(e),$u(t.stateNode,t.type,e))}}function y0(t){Rs?Ns?Ns.push(t):Ns=[t]:Rs=t}function S0(){if(Rs){var t=Rs,e=Ns;if(Ns=Rs=null,Hh(t),e)for(t=0;t<e.length;t++)Hh(e[t])}}function M0(t,e){return t(e)}function E0(){}var Pc=!1;function b0(t,e,n){if(Pc)return t(e,n);Pc=!0;try{return M0(t,e,n)}finally{Pc=!1,(Rs!==null||Ns!==null)&&(E0(),S0())}}function Ga(t,e){var n=t.stateNode;if(n===null)return null;var i=fc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ae(231,e,typeof n));return n}var qu=!1;if(Pi)try{var ca={};Object.defineProperty(ca,"passive",{get:function(){qu=!0}}),window.addEventListener("test",ca,ca),window.removeEventListener("test",ca,ca)}catch{qu=!1}function Cv(t,e,n,i,r,s,a,o,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(h){this.onError(h)}}var Na=!1,Cl=null,Rl=!1,Yu=null,Rv={onError:function(t){Na=!0,Cl=t}};function Nv(t,e,n,i,r,s,a,o,l){Na=!1,Cl=null,Cv.apply(Rv,arguments)}function Pv(t,e,n,i,r,s,a,o,l){if(Nv.apply(this,arguments),Na){if(Na){var u=Cl;Na=!1,Cl=null}else throw Error(ae(198));Rl||(Rl=!0,Yu=u)}}function Xr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function w0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Gh(t){if(Xr(t)!==t)throw Error(ae(188))}function Lv(t){var e=t.alternate;if(!e){if(e=Xr(t),e===null)throw Error(ae(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Gh(r),t;if(s===i)return Gh(r),e;s=s.sibling}throw Error(ae(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ae(189))}}if(n.alternate!==i)throw Error(ae(190))}if(n.tag!==3)throw Error(ae(188));return n.stateNode.current===n?t:e}function T0(t){return t=Lv(t),t!==null?A0(t):null}function A0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=A0(t);if(e!==null)return e;t=t.sibling}return null}var C0=bn.unstable_scheduleCallback,jh=bn.unstable_cancelCallback,Dv=bn.unstable_shouldYield,Iv=bn.unstable_requestPaint,Rt=bn.unstable_now,Uv=bn.unstable_getCurrentPriorityLevel,Nf=bn.unstable_ImmediatePriority,R0=bn.unstable_UserBlockingPriority,Nl=bn.unstable_NormalPriority,Fv=bn.unstable_LowPriority,N0=bn.unstable_IdlePriority,lc=null,oi=null;function Ov(t){if(oi&&typeof oi.onCommitFiberRoot=="function")try{oi.onCommitFiberRoot(lc,t,void 0,(t.current.flags&128)===128)}catch{}}var $n=Math.clz32?Math.clz32:zv,kv=Math.log,Bv=Math.LN2;function zv(t){return t>>>=0,t===0?32:31-(kv(t)/Bv|0)|0}var Ao=64,Co=4194304;function wa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Pl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=wa(o):(s&=a,s!==0&&(i=wa(s)))}else a=n&~r,a!==0?i=wa(a):s!==0&&(i=wa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-$n(e),r=1<<n,i|=t[n],e&=~r;return i}function Vv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hv(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-$n(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=Vv(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Ku(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function P0(){var t=Ao;return Ao<<=1,!(Ao&4194240)&&(Ao=64),t}function Lc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function lo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-$n(e),t[e]=n}function Gv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-$n(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Pf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-$n(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var st=0;function L0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var D0,Lf,I0,U0,F0,Zu=!1,Ro=[],sr=null,ar=null,or=null,ja=new Map,Wa=new Map,Qi=[],jv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Wh(t,e){switch(t){case"focusin":case"focusout":sr=null;break;case"dragenter":case"dragleave":ar=null;break;case"mouseover":case"mouseout":or=null;break;case"pointerover":case"pointerout":ja.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wa.delete(e.pointerId)}}function ua(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=uo(e),e!==null&&Lf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Wv(t,e,n,i,r){switch(e){case"focusin":return sr=ua(sr,t,e,n,i,r),!0;case"dragenter":return ar=ua(ar,t,e,n,i,r),!0;case"mouseover":return or=ua(or,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ja.set(s,ua(ja.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Wa.set(s,ua(Wa.get(s)||null,t,e,n,i,r)),!0}return!1}function O0(t){var e=Nr(t.target);if(e!==null){var n=Xr(e);if(n!==null){if(e=n.tag,e===13){if(e=w0(n),e!==null){t.blockedOn=e,F0(t.priority,function(){I0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function dl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Qu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Xu=i,n.target.dispatchEvent(i),Xu=null}else return e=uo(n),e!==null&&Lf(e),t.blockedOn=n,!1;e.shift()}return!0}function Xh(t,e,n){dl(t)&&n.delete(e)}function Xv(){Zu=!1,sr!==null&&dl(sr)&&(sr=null),ar!==null&&dl(ar)&&(ar=null),or!==null&&dl(or)&&(or=null),ja.forEach(Xh),Wa.forEach(Xh)}function da(t,e){t.blockedOn===e&&(t.blockedOn=null,Zu||(Zu=!0,bn.unstable_scheduleCallback(bn.unstable_NormalPriority,Xv)))}function Xa(t){function e(r){return da(r,t)}if(0<Ro.length){da(Ro[0],t);for(var n=1;n<Ro.length;n++){var i=Ro[n];i.blockedOn===t&&(i.blockedOn=null)}}for(sr!==null&&da(sr,t),ar!==null&&da(ar,t),or!==null&&da(or,t),ja.forEach(e),Wa.forEach(e),n=0;n<Qi.length;n++)i=Qi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Qi.length&&(n=Qi[0],n.blockedOn===null);)O0(n),n.blockedOn===null&&Qi.shift()}var Ps=Oi.ReactCurrentBatchConfig,Ll=!0;function $v(t,e,n,i){var r=st,s=Ps.transition;Ps.transition=null;try{st=1,Df(t,e,n,i)}finally{st=r,Ps.transition=s}}function qv(t,e,n,i){var r=st,s=Ps.transition;Ps.transition=null;try{st=4,Df(t,e,n,i)}finally{st=r,Ps.transition=s}}function Df(t,e,n,i){if(Ll){var r=Qu(t,e,n,i);if(r===null)Hc(t,e,i,Dl,n),Wh(t,i);else if(Wv(r,t,e,n,i))i.stopPropagation();else if(Wh(t,i),e&4&&-1<jv.indexOf(t)){for(;r!==null;){var s=uo(r);if(s!==null&&D0(s),s=Qu(t,e,n,i),s===null&&Hc(t,e,i,Dl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Hc(t,e,i,null,n)}}var Dl=null;function Qu(t,e,n,i){if(Dl=null,t=Rf(i),t=Nr(t),t!==null)if(e=Xr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=w0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Dl=t,null}function k0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Uv()){case Nf:return 1;case R0:return 4;case Nl:case Fv:return 16;case N0:return 536870912;default:return 16}default:return 16}}var tr=null,If=null,fl=null;function B0(){if(fl)return fl;var t,e=If,n=e.length,i,r="value"in tr?tr.value:tr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return fl=r.slice(t,1<i?1-i:void 0)}function hl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function No(){return!0}function $h(){return!1}function Tn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?No:$h,this.isPropagationStopped=$h,this}return St(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=No)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=No)},persist:function(){},isPersistent:No}),e}var Ys={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Uf=Tn(Ys),co=St({},Ys,{view:0,detail:0}),Yv=Tn(co),Dc,Ic,fa,cc=St({},co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ff,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==fa&&(fa&&t.type==="mousemove"?(Dc=t.screenX-fa.screenX,Ic=t.screenY-fa.screenY):Ic=Dc=0,fa=t),Dc)},movementY:function(t){return"movementY"in t?t.movementY:Ic}}),qh=Tn(cc),Kv=St({},cc,{dataTransfer:0}),Zv=Tn(Kv),Qv=St({},co,{relatedTarget:0}),Uc=Tn(Qv),Jv=St({},Ys,{animationName:0,elapsedTime:0,pseudoElement:0}),e_=Tn(Jv),t_=St({},Ys,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),n_=Tn(t_),i_=St({},Ys,{data:0}),Yh=Tn(i_),r_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},s_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},a_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function o_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=a_[t])?!!e[t]:!1}function Ff(){return o_}var l_=St({},co,{key:function(t){if(t.key){var e=r_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=hl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?s_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ff,charCode:function(t){return t.type==="keypress"?hl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?hl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),c_=Tn(l_),u_=St({},cc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kh=Tn(u_),d_=St({},co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ff}),f_=Tn(d_),h_=St({},Ys,{propertyName:0,elapsedTime:0,pseudoElement:0}),p_=Tn(h_),m_=St({},cc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),x_=Tn(m_),g_=[9,13,27,32],Of=Pi&&"CompositionEvent"in window,Pa=null;Pi&&"documentMode"in document&&(Pa=document.documentMode);var v_=Pi&&"TextEvent"in window&&!Pa,z0=Pi&&(!Of||Pa&&8<Pa&&11>=Pa),Zh=" ",Qh=!1;function V0(t,e){switch(t){case"keyup":return g_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function H0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var vs=!1;function __(t,e){switch(t){case"compositionend":return H0(e);case"keypress":return e.which!==32?null:(Qh=!0,Zh);case"textInput":return t=e.data,t===Zh&&Qh?null:t;default:return null}}function y_(t,e){if(vs)return t==="compositionend"||!Of&&V0(t,e)?(t=B0(),fl=If=tr=null,vs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return z0&&e.locale!=="ko"?null:e.data;default:return null}}var S_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!S_[t.type]:e==="textarea"}function G0(t,e,n,i){y0(i),e=Il(e,"onChange"),0<e.length&&(n=new Uf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var La=null,$a=null;function M_(t){ex(t,0)}function uc(t){var e=Ss(t);if(h0(e))return t}function E_(t,e){if(t==="change")return e}var j0=!1;if(Pi){var Fc;if(Pi){var Oc="oninput"in document;if(!Oc){var ep=document.createElement("div");ep.setAttribute("oninput","return;"),Oc=typeof ep.oninput=="function"}Fc=Oc}else Fc=!1;j0=Fc&&(!document.documentMode||9<document.documentMode)}function tp(){La&&(La.detachEvent("onpropertychange",W0),$a=La=null)}function W0(t){if(t.propertyName==="value"&&uc($a)){var e=[];G0(e,$a,t,Rf(t)),b0(M_,e)}}function b_(t,e,n){t==="focusin"?(tp(),La=e,$a=n,La.attachEvent("onpropertychange",W0)):t==="focusout"&&tp()}function w_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return uc($a)}function T_(t,e){if(t==="click")return uc(e)}function A_(t,e){if(t==="input"||t==="change")return uc(e)}function C_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Yn=typeof Object.is=="function"?Object.is:C_;function qa(t,e){if(Yn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Iu.call(e,r)||!Yn(t[r],e[r]))return!1}return!0}function np(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ip(t,e){var n=np(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=np(n)}}function X0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?X0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function $0(){for(var t=window,e=Al();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Al(t.document)}return e}function kf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function R_(t){var e=$0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&X0(n.ownerDocument.documentElement,n)){if(i!==null&&kf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=ip(n,s);var a=ip(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var N_=Pi&&"documentMode"in document&&11>=document.documentMode,_s=null,Ju=null,Da=null,ed=!1;function rp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ed||_s==null||_s!==Al(i)||(i=_s,"selectionStart"in i&&kf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Da&&qa(Da,i)||(Da=i,i=Il(Ju,"onSelect"),0<i.length&&(e=new Uf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=_s)))}function Po(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ys={animationend:Po("Animation","AnimationEnd"),animationiteration:Po("Animation","AnimationIteration"),animationstart:Po("Animation","AnimationStart"),transitionend:Po("Transition","TransitionEnd")},kc={},q0={};Pi&&(q0=document.createElement("div").style,"AnimationEvent"in window||(delete ys.animationend.animation,delete ys.animationiteration.animation,delete ys.animationstart.animation),"TransitionEvent"in window||delete ys.transitionend.transition);function dc(t){if(kc[t])return kc[t];if(!ys[t])return t;var e=ys[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in q0)return kc[t]=e[n];return t}var Y0=dc("animationend"),K0=dc("animationiteration"),Z0=dc("animationstart"),Q0=dc("transitionend"),J0=new Map,sp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xr(t,e){J0.set(t,e),Wr(e,[t])}for(var Bc=0;Bc<sp.length;Bc++){var zc=sp[Bc],P_=zc.toLowerCase(),L_=zc[0].toUpperCase()+zc.slice(1);xr(P_,"on"+L_)}xr(Y0,"onAnimationEnd");xr(K0,"onAnimationIteration");xr(Z0,"onAnimationStart");xr("dblclick","onDoubleClick");xr("focusin","onFocus");xr("focusout","onBlur");xr(Q0,"onTransitionEnd");Os("onMouseEnter",["mouseout","mouseover"]);Os("onMouseLeave",["mouseout","mouseover"]);Os("onPointerEnter",["pointerout","pointerover"]);Os("onPointerLeave",["pointerout","pointerover"]);Wr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Wr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Wr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Wr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Wr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Wr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ta="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),D_=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ta));function ap(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Pv(i,e,void 0,t),t.currentTarget=null}function ex(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;ap(r,o,u),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,u=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;ap(r,o,u),s=l}}}if(Rl)throw t=Yu,Rl=!1,Yu=null,t}function pt(t,e){var n=e[sd];n===void 0&&(n=e[sd]=new Set);var i=t+"__bubble";n.has(i)||(tx(e,t,2,!1),n.add(i))}function Vc(t,e,n){var i=0;e&&(i|=4),tx(n,t,i,e)}var Lo="_reactListening"+Math.random().toString(36).slice(2);function Ya(t){if(!t[Lo]){t[Lo]=!0,l0.forEach(function(n){n!=="selectionchange"&&(D_.has(n)||Vc(n,!1,t),Vc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Lo]||(e[Lo]=!0,Vc("selectionchange",!1,e))}}function tx(t,e,n,i){switch(k0(e)){case 1:var r=$v;break;case 4:r=qv;break;default:r=Df}n=r.bind(null,e,n,t),r=void 0,!qu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Hc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Nr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}b0(function(){var u=s,h=Rf(n),p=[];e:{var d=J0.get(t);if(d!==void 0){var m=Uf,g=t;switch(t){case"keypress":if(hl(n)===0)break e;case"keydown":case"keyup":m=c_;break;case"focusin":g="focus",m=Uc;break;case"focusout":g="blur",m=Uc;break;case"beforeblur":case"afterblur":m=Uc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=qh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Zv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=f_;break;case Y0:case K0:case Z0:m=e_;break;case Q0:m=p_;break;case"scroll":m=Yv;break;case"wheel":m=x_;break;case"copy":case"cut":case"paste":m=n_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Kh}var b=(e&4)!==0,x=!b&&t==="scroll",f=b?d!==null?d+"Capture":null:d;b=[];for(var y=u,M;y!==null;){M=y;var S=M.stateNode;if(M.tag===5&&S!==null&&(M=S,f!==null&&(S=Ga(y,f),S!=null&&b.push(Ka(y,S,M)))),x)break;y=y.return}0<b.length&&(d=new m(d,g,null,n,h),p.push({event:d,listeners:b}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==Xu&&(g=n.relatedTarget||n.fromElement)&&(Nr(g)||g[Li]))break e;if((m||d)&&(d=h.window===h?h:(d=h.ownerDocument)?d.defaultView||d.parentWindow:window,m?(g=n.relatedTarget||n.toElement,m=u,g=g?Nr(g):null,g!==null&&(x=Xr(g),g!==x||g.tag!==5&&g.tag!==6)&&(g=null)):(m=null,g=u),m!==g)){if(b=qh,S="onMouseLeave",f="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(b=Kh,S="onPointerLeave",f="onPointerEnter",y="pointer"),x=m==null?d:Ss(m),M=g==null?d:Ss(g),d=new b(S,y+"leave",m,n,h),d.target=x,d.relatedTarget=M,S=null,Nr(h)===u&&(b=new b(f,y+"enter",g,n,h),b.target=M,b.relatedTarget=x,S=b),x=S,m&&g)t:{for(b=m,f=g,y=0,M=b;M;M=Qr(M))y++;for(M=0,S=f;S;S=Qr(S))M++;for(;0<y-M;)b=Qr(b),y--;for(;0<M-y;)f=Qr(f),M--;for(;y--;){if(b===f||f!==null&&b===f.alternate)break t;b=Qr(b),f=Qr(f)}b=null}else b=null;m!==null&&op(p,d,m,b,!1),g!==null&&x!==null&&op(p,x,g,b,!0)}}e:{if(d=u?Ss(u):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var T=E_;else if(Jh(d))if(j0)T=A_;else{T=w_;var w=b_}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(T=T_);if(T&&(T=T(t,u))){G0(p,T,n,h);break e}w&&w(t,d,u),t==="focusout"&&(w=d._wrapperState)&&w.controlled&&d.type==="number"&&Vu(d,"number",d.value)}switch(w=u?Ss(u):window,t){case"focusin":(Jh(w)||w.contentEditable==="true")&&(_s=w,Ju=u,Da=null);break;case"focusout":Da=Ju=_s=null;break;case"mousedown":ed=!0;break;case"contextmenu":case"mouseup":case"dragend":ed=!1,rp(p,n,h);break;case"selectionchange":if(N_)break;case"keydown":case"keyup":rp(p,n,h)}var C;if(Of)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else vs?V0(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(z0&&n.locale!=="ko"&&(vs||_!=="onCompositionStart"?_==="onCompositionEnd"&&vs&&(C=B0()):(tr=h,If="value"in tr?tr.value:tr.textContent,vs=!0)),w=Il(u,_),0<w.length&&(_=new Yh(_,t,null,n,h),p.push({event:_,listeners:w}),C?_.data=C:(C=H0(n),C!==null&&(_.data=C)))),(C=v_?__(t,n):y_(t,n))&&(u=Il(u,"onBeforeInput"),0<u.length&&(h=new Yh("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:u}),h.data=C))}ex(p,e)})}function Ka(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Il(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ga(t,n),s!=null&&i.unshift(Ka(t,s,r)),s=Ga(t,e),s!=null&&i.push(Ka(t,s,r))),t=t.return}return i}function Qr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function op(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,u=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&u!==null&&(o=u,r?(l=Ga(n,s),l!=null&&a.unshift(Ka(n,l,o))):r||(l=Ga(n,s),l!=null&&a.push(Ka(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var I_=/\r\n?/g,U_=/\u0000|\uFFFD/g;function lp(t){return(typeof t=="string"?t:""+t).replace(I_,`
`).replace(U_,"")}function Do(t,e,n){if(e=lp(e),lp(t)!==e&&n)throw Error(ae(425))}function Ul(){}var td=null,nd=null;function id(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var rd=typeof setTimeout=="function"?setTimeout:void 0,F_=typeof clearTimeout=="function"?clearTimeout:void 0,cp=typeof Promise=="function"?Promise:void 0,O_=typeof queueMicrotask=="function"?queueMicrotask:typeof cp<"u"?function(t){return cp.resolve(null).then(t).catch(k_)}:rd;function k_(t){setTimeout(function(){throw t})}function Gc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Xa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Xa(e)}function lr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function up(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ks=Math.random().toString(36).slice(2),ri="__reactFiber$"+Ks,Za="__reactProps$"+Ks,Li="__reactContainer$"+Ks,sd="__reactEvents$"+Ks,B_="__reactListeners$"+Ks,z_="__reactHandles$"+Ks;function Nr(t){var e=t[ri];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Li]||n[ri]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=up(t);t!==null;){if(n=t[ri])return n;t=up(t)}return e}t=n,n=t.parentNode}return null}function uo(t){return t=t[ri]||t[Li],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ss(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ae(33))}function fc(t){return t[Za]||null}var ad=[],Ms=-1;function gr(t){return{current:t}}function mt(t){0>Ms||(t.current=ad[Ms],ad[Ms]=null,Ms--)}function ut(t,e){Ms++,ad[Ms]=t.current,t.current=e}var pr={},Jt=gr(pr),dn=gr(!1),Or=pr;function ks(t,e){var n=t.type.contextTypes;if(!n)return pr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function fn(t){return t=t.childContextTypes,t!=null}function Fl(){mt(dn),mt(Jt)}function dp(t,e,n){if(Jt.current!==pr)throw Error(ae(168));ut(Jt,e),ut(dn,n)}function nx(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ae(108,bv(t)||"Unknown",r));return St({},n,i)}function Ol(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||pr,Or=Jt.current,ut(Jt,t),ut(dn,dn.current),!0}function fp(t,e,n){var i=t.stateNode;if(!i)throw Error(ae(169));n?(t=nx(t,e,Or),i.__reactInternalMemoizedMergedChildContext=t,mt(dn),mt(Jt),ut(Jt,t)):mt(dn),ut(dn,n)}var Si=null,hc=!1,jc=!1;function ix(t){Si===null?Si=[t]:Si.push(t)}function V_(t){hc=!0,ix(t)}function vr(){if(!jc&&Si!==null){jc=!0;var t=0,e=st;try{var n=Si;for(st=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Si=null,hc=!1}catch(r){throw Si!==null&&(Si=Si.slice(t+1)),C0(Nf,vr),r}finally{st=e,jc=!1}}return null}var Es=[],bs=0,kl=null,Bl=0,Nn=[],Pn=0,kr=null,Ei=1,bi="";function wr(t,e){Es[bs++]=Bl,Es[bs++]=kl,kl=t,Bl=e}function rx(t,e,n){Nn[Pn++]=Ei,Nn[Pn++]=bi,Nn[Pn++]=kr,kr=t;var i=Ei;t=bi;var r=32-$n(i)-1;i&=~(1<<r),n+=1;var s=32-$n(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Ei=1<<32-$n(e)+r|n<<r|i,bi=s+t}else Ei=1<<s|n<<r|i,bi=t}function Bf(t){t.return!==null&&(wr(t,1),rx(t,1,0))}function zf(t){for(;t===kl;)kl=Es[--bs],Es[bs]=null,Bl=Es[--bs],Es[bs]=null;for(;t===kr;)kr=Nn[--Pn],Nn[Pn]=null,bi=Nn[--Pn],Nn[Pn]=null,Ei=Nn[--Pn],Nn[Pn]=null}var Mn=null,Sn=null,gt=!1,Gn=null;function sx(t,e){var n=Dn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function hp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Mn=t,Sn=lr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Mn=t,Sn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=kr!==null?{id:Ei,overflow:bi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Dn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Mn=t,Sn=null,!0):!1;default:return!1}}function od(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ld(t){if(gt){var e=Sn;if(e){var n=e;if(!hp(t,e)){if(od(t))throw Error(ae(418));e=lr(n.nextSibling);var i=Mn;e&&hp(t,e)?sx(i,n):(t.flags=t.flags&-4097|2,gt=!1,Mn=t)}}else{if(od(t))throw Error(ae(418));t.flags=t.flags&-4097|2,gt=!1,Mn=t}}}function pp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Mn=t}function Io(t){if(t!==Mn)return!1;if(!gt)return pp(t),gt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!id(t.type,t.memoizedProps)),e&&(e=Sn)){if(od(t))throw ax(),Error(ae(418));for(;e;)sx(t,e),e=lr(e.nextSibling)}if(pp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ae(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Sn=lr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Sn=null}}else Sn=Mn?lr(t.stateNode.nextSibling):null;return!0}function ax(){for(var t=Sn;t;)t=lr(t.nextSibling)}function Bs(){Sn=Mn=null,gt=!1}function Vf(t){Gn===null?Gn=[t]:Gn.push(t)}var H_=Oi.ReactCurrentBatchConfig;function ha(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ae(309));var i=n.stateNode}if(!i)throw Error(ae(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ae(284));if(!n._owner)throw Error(ae(290,t))}return t}function Uo(t,e){throw t=Object.prototype.toString.call(e),Error(ae(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function mp(t){var e=t._init;return e(t._payload)}function ox(t){function e(f,y){if(t){var M=f.deletions;M===null?(f.deletions=[y],f.flags|=16):M.push(y)}}function n(f,y){if(!t)return null;for(;y!==null;)e(f,y),y=y.sibling;return null}function i(f,y){for(f=new Map;y!==null;)y.key!==null?f.set(y.key,y):f.set(y.index,y),y=y.sibling;return f}function r(f,y){return f=fr(f,y),f.index=0,f.sibling=null,f}function s(f,y,M){return f.index=M,t?(M=f.alternate,M!==null?(M=M.index,M<y?(f.flags|=2,y):M):(f.flags|=2,y)):(f.flags|=1048576,y)}function a(f){return t&&f.alternate===null&&(f.flags|=2),f}function o(f,y,M,S){return y===null||y.tag!==6?(y=Zc(M,f.mode,S),y.return=f,y):(y=r(y,M),y.return=f,y)}function l(f,y,M,S){var T=M.type;return T===gs?h(f,y,M.props.children,S,M.key):y!==null&&(y.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Ki&&mp(T)===y.type)?(S=r(y,M.props),S.ref=ha(f,y,M),S.return=f,S):(S=yl(M.type,M.key,M.props,null,f.mode,S),S.ref=ha(f,y,M),S.return=f,S)}function u(f,y,M,S){return y===null||y.tag!==4||y.stateNode.containerInfo!==M.containerInfo||y.stateNode.implementation!==M.implementation?(y=Qc(M,f.mode,S),y.return=f,y):(y=r(y,M.children||[]),y.return=f,y)}function h(f,y,M,S,T){return y===null||y.tag!==7?(y=Fr(M,f.mode,S,T),y.return=f,y):(y=r(y,M),y.return=f,y)}function p(f,y,M){if(typeof y=="string"&&y!==""||typeof y=="number")return y=Zc(""+y,f.mode,M),y.return=f,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case bo:return M=yl(y.type,y.key,y.props,null,f.mode,M),M.ref=ha(f,null,y),M.return=f,M;case xs:return y=Qc(y,f.mode,M),y.return=f,y;case Ki:var S=y._init;return p(f,S(y._payload),M)}if(ba(y)||la(y))return y=Fr(y,f.mode,M,null),y.return=f,y;Uo(f,y)}return null}function d(f,y,M,S){var T=y!==null?y.key:null;if(typeof M=="string"&&M!==""||typeof M=="number")return T!==null?null:o(f,y,""+M,S);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case bo:return M.key===T?l(f,y,M,S):null;case xs:return M.key===T?u(f,y,M,S):null;case Ki:return T=M._init,d(f,y,T(M._payload),S)}if(ba(M)||la(M))return T!==null?null:h(f,y,M,S,null);Uo(f,M)}return null}function m(f,y,M,S,T){if(typeof S=="string"&&S!==""||typeof S=="number")return f=f.get(M)||null,o(y,f,""+S,T);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case bo:return f=f.get(S.key===null?M:S.key)||null,l(y,f,S,T);case xs:return f=f.get(S.key===null?M:S.key)||null,u(y,f,S,T);case Ki:var w=S._init;return m(f,y,M,w(S._payload),T)}if(ba(S)||la(S))return f=f.get(M)||null,h(y,f,S,T,null);Uo(y,S)}return null}function g(f,y,M,S){for(var T=null,w=null,C=y,_=y=0,R=null;C!==null&&_<M.length;_++){C.index>_?(R=C,C=null):R=C.sibling;var L=d(f,C,M[_],S);if(L===null){C===null&&(C=R);break}t&&C&&L.alternate===null&&e(f,C),y=s(L,y,_),w===null?T=L:w.sibling=L,w=L,C=R}if(_===M.length)return n(f,C),gt&&wr(f,_),T;if(C===null){for(;_<M.length;_++)C=p(f,M[_],S),C!==null&&(y=s(C,y,_),w===null?T=C:w.sibling=C,w=C);return gt&&wr(f,_),T}for(C=i(f,C);_<M.length;_++)R=m(C,f,_,M[_],S),R!==null&&(t&&R.alternate!==null&&C.delete(R.key===null?_:R.key),y=s(R,y,_),w===null?T=R:w.sibling=R,w=R);return t&&C.forEach(function(P){return e(f,P)}),gt&&wr(f,_),T}function b(f,y,M,S){var T=la(M);if(typeof T!="function")throw Error(ae(150));if(M=T.call(M),M==null)throw Error(ae(151));for(var w=T=null,C=y,_=y=0,R=null,L=M.next();C!==null&&!L.done;_++,L=M.next()){C.index>_?(R=C,C=null):R=C.sibling;var P=d(f,C,L.value,S);if(P===null){C===null&&(C=R);break}t&&C&&P.alternate===null&&e(f,C),y=s(P,y,_),w===null?T=P:w.sibling=P,w=P,C=R}if(L.done)return n(f,C),gt&&wr(f,_),T;if(C===null){for(;!L.done;_++,L=M.next())L=p(f,L.value,S),L!==null&&(y=s(L,y,_),w===null?T=L:w.sibling=L,w=L);return gt&&wr(f,_),T}for(C=i(f,C);!L.done;_++,L=M.next())L=m(C,f,_,L.value,S),L!==null&&(t&&L.alternate!==null&&C.delete(L.key===null?_:L.key),y=s(L,y,_),w===null?T=L:w.sibling=L,w=L);return t&&C.forEach(function(F){return e(f,F)}),gt&&wr(f,_),T}function x(f,y,M,S){if(typeof M=="object"&&M!==null&&M.type===gs&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case bo:e:{for(var T=M.key,w=y;w!==null;){if(w.key===T){if(T=M.type,T===gs){if(w.tag===7){n(f,w.sibling),y=r(w,M.props.children),y.return=f,f=y;break e}}else if(w.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Ki&&mp(T)===w.type){n(f,w.sibling),y=r(w,M.props),y.ref=ha(f,w,M),y.return=f,f=y;break e}n(f,w);break}else e(f,w);w=w.sibling}M.type===gs?(y=Fr(M.props.children,f.mode,S,M.key),y.return=f,f=y):(S=yl(M.type,M.key,M.props,null,f.mode,S),S.ref=ha(f,y,M),S.return=f,f=S)}return a(f);case xs:e:{for(w=M.key;y!==null;){if(y.key===w)if(y.tag===4&&y.stateNode.containerInfo===M.containerInfo&&y.stateNode.implementation===M.implementation){n(f,y.sibling),y=r(y,M.children||[]),y.return=f,f=y;break e}else{n(f,y);break}else e(f,y);y=y.sibling}y=Qc(M,f.mode,S),y.return=f,f=y}return a(f);case Ki:return w=M._init,x(f,y,w(M._payload),S)}if(ba(M))return g(f,y,M,S);if(la(M))return b(f,y,M,S);Uo(f,M)}return typeof M=="string"&&M!==""||typeof M=="number"?(M=""+M,y!==null&&y.tag===6?(n(f,y.sibling),y=r(y,M),y.return=f,f=y):(n(f,y),y=Zc(M,f.mode,S),y.return=f,f=y),a(f)):n(f,y)}return x}var zs=ox(!0),lx=ox(!1),zl=gr(null),Vl=null,ws=null,Hf=null;function Gf(){Hf=ws=Vl=null}function jf(t){var e=zl.current;mt(zl),t._currentValue=e}function cd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ls(t,e){Vl=t,Hf=ws=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(un=!0),t.firstContext=null)}function Un(t){var e=t._currentValue;if(Hf!==t)if(t={context:t,memoizedValue:e,next:null},ws===null){if(Vl===null)throw Error(ae(308));ws=t,Vl.dependencies={lanes:0,firstContext:t}}else ws=ws.next=t;return e}var Pr=null;function Wf(t){Pr===null?Pr=[t]:Pr.push(t)}function cx(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Wf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Di(t,i)}function Di(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Zi=!1;function Xf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ux(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ti(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function cr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Je&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Di(t,n)}return r=i.interleaved,r===null?(e.next=e,Wf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Di(t,n)}function pl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Pf(t,n)}}function xp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Hl(t,e,n,i){var r=t.updateQueue;Zi=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,u=l.next;l.next=null,a===null?s=u:a.next=u,a=l;var h=t.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==a&&(o===null?h.firstBaseUpdate=u:o.next=u,h.lastBaseUpdate=l))}if(s!==null){var p=r.baseState;a=0,h=u=l=null,o=s;do{var d=o.lane,m=o.eventTime;if((i&d)===d){h!==null&&(h=h.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var g=t,b=o;switch(d=e,m=n,b.tag){case 1:if(g=b.payload,typeof g=="function"){p=g.call(m,p,d);break e}p=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=b.payload,d=typeof g=="function"?g.call(m,p,d):g,d==null)break e;p=St({},p,d);break e;case 2:Zi=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[o]:d.push(o))}else m={eventTime:m,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(u=h=m,l=p):h=h.next=m,a|=d;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;d=o,o=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(h===null&&(l=p),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);zr|=a,t.lanes=a,t.memoizedState=p}}function gp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ae(191,r));r.call(i)}}}var fo={},li=gr(fo),Qa=gr(fo),Ja=gr(fo);function Lr(t){if(t===fo)throw Error(ae(174));return t}function $f(t,e){switch(ut(Ja,e),ut(Qa,t),ut(li,fo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Gu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Gu(e,t)}mt(li),ut(li,e)}function Vs(){mt(li),mt(Qa),mt(Ja)}function dx(t){Lr(Ja.current);var e=Lr(li.current),n=Gu(e,t.type);e!==n&&(ut(Qa,t),ut(li,n))}function qf(t){Qa.current===t&&(mt(li),mt(Qa))}var _t=gr(0);function Gl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Wc=[];function Yf(){for(var t=0;t<Wc.length;t++)Wc[t]._workInProgressVersionPrimary=null;Wc.length=0}var ml=Oi.ReactCurrentDispatcher,Xc=Oi.ReactCurrentBatchConfig,Br=0,yt=null,Dt=null,Bt=null,jl=!1,Ia=!1,eo=0,G_=0;function $t(){throw Error(ae(321))}function Kf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Yn(t[n],e[n]))return!1;return!0}function Zf(t,e,n,i,r,s){if(Br=s,yt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ml.current=t===null||t.memoizedState===null?$_:q_,t=n(i,r),Ia){s=0;do{if(Ia=!1,eo=0,25<=s)throw Error(ae(301));s+=1,Bt=Dt=null,e.updateQueue=null,ml.current=Y_,t=n(i,r)}while(Ia)}if(ml.current=Wl,e=Dt!==null&&Dt.next!==null,Br=0,Bt=Dt=yt=null,jl=!1,e)throw Error(ae(300));return t}function Qf(){var t=eo!==0;return eo=0,t}function ni(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Bt===null?yt.memoizedState=Bt=t:Bt=Bt.next=t,Bt}function Fn(){if(Dt===null){var t=yt.alternate;t=t!==null?t.memoizedState:null}else t=Dt.next;var e=Bt===null?yt.memoizedState:Bt.next;if(e!==null)Bt=e,Dt=t;else{if(t===null)throw Error(ae(310));Dt=t,t={memoizedState:Dt.memoizedState,baseState:Dt.baseState,baseQueue:Dt.baseQueue,queue:Dt.queue,next:null},Bt===null?yt.memoizedState=Bt=t:Bt=Bt.next=t}return Bt}function to(t,e){return typeof e=="function"?e(t):e}function $c(t){var e=Fn(),n=e.queue;if(n===null)throw Error(ae(311));n.lastRenderedReducer=t;var i=Dt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,u=s;do{var h=u.lane;if((Br&h)===h)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var p={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(o=l=p,a=i):l=l.next=p,yt.lanes|=h,zr|=h}u=u.next}while(u!==null&&u!==s);l===null?a=i:l.next=o,Yn(i,e.memoizedState)||(un=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,yt.lanes|=s,zr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function qc(t){var e=Fn(),n=e.queue;if(n===null)throw Error(ae(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Yn(s,e.memoizedState)||(un=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function fx(){}function hx(t,e){var n=yt,i=Fn(),r=e(),s=!Yn(i.memoizedState,r);if(s&&(i.memoizedState=r,un=!0),i=i.queue,Jf(xx.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Bt!==null&&Bt.memoizedState.tag&1){if(n.flags|=2048,no(9,mx.bind(null,n,i,r,e),void 0,null),zt===null)throw Error(ae(349));Br&30||px(n,e,r)}return r}function px(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=yt.updateQueue,e===null?(e={lastEffect:null,stores:null},yt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function mx(t,e,n,i){e.value=n,e.getSnapshot=i,gx(e)&&vx(t)}function xx(t,e,n){return n(function(){gx(e)&&vx(t)})}function gx(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Yn(t,n)}catch{return!0}}function vx(t){var e=Di(t,1);e!==null&&qn(e,t,1,-1)}function vp(t){var e=ni();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:to,lastRenderedState:t},e.queue=t,t=t.dispatch=X_.bind(null,yt,t),[e.memoizedState,t]}function no(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=yt.updateQueue,e===null?(e={lastEffect:null,stores:null},yt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function _x(){return Fn().memoizedState}function xl(t,e,n,i){var r=ni();yt.flags|=t,r.memoizedState=no(1|e,n,void 0,i===void 0?null:i)}function pc(t,e,n,i){var r=Fn();i=i===void 0?null:i;var s=void 0;if(Dt!==null){var a=Dt.memoizedState;if(s=a.destroy,i!==null&&Kf(i,a.deps)){r.memoizedState=no(e,n,s,i);return}}yt.flags|=t,r.memoizedState=no(1|e,n,s,i)}function _p(t,e){return xl(8390656,8,t,e)}function Jf(t,e){return pc(2048,8,t,e)}function yx(t,e){return pc(4,2,t,e)}function Sx(t,e){return pc(4,4,t,e)}function Mx(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ex(t,e,n){return n=n!=null?n.concat([t]):null,pc(4,4,Mx.bind(null,e,t),n)}function eh(){}function bx(t,e){var n=Fn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Kf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function wx(t,e){var n=Fn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Kf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Tx(t,e,n){return Br&21?(Yn(n,e)||(n=P0(),yt.lanes|=n,zr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,un=!0),t.memoizedState=n)}function j_(t,e){var n=st;st=n!==0&&4>n?n:4,t(!0);var i=Xc.transition;Xc.transition={};try{t(!1),e()}finally{st=n,Xc.transition=i}}function Ax(){return Fn().memoizedState}function W_(t,e,n){var i=dr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Cx(t))Rx(e,n);else if(n=cx(t,e,n,i),n!==null){var r=rn();qn(n,t,i,r),Nx(n,e,i)}}function X_(t,e,n){var i=dr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Cx(t))Rx(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Yn(o,a)){var l=e.interleaved;l===null?(r.next=r,Wf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=cx(t,e,r,i),n!==null&&(r=rn(),qn(n,t,i,r),Nx(n,e,i))}}function Cx(t){var e=t.alternate;return t===yt||e!==null&&e===yt}function Rx(t,e){Ia=jl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Nx(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Pf(t,n)}}var Wl={readContext:Un,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useInsertionEffect:$t,useLayoutEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useMutableSource:$t,useSyncExternalStore:$t,useId:$t,unstable_isNewReconciler:!1},$_={readContext:Un,useCallback:function(t,e){return ni().memoizedState=[t,e===void 0?null:e],t},useContext:Un,useEffect:_p,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,xl(4194308,4,Mx.bind(null,e,t),n)},useLayoutEffect:function(t,e){return xl(4194308,4,t,e)},useInsertionEffect:function(t,e){return xl(4,2,t,e)},useMemo:function(t,e){var n=ni();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ni();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=W_.bind(null,yt,t),[i.memoizedState,t]},useRef:function(t){var e=ni();return t={current:t},e.memoizedState=t},useState:vp,useDebugValue:eh,useDeferredValue:function(t){return ni().memoizedState=t},useTransition:function(){var t=vp(!1),e=t[0];return t=j_.bind(null,t[1]),ni().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=yt,r=ni();if(gt){if(n===void 0)throw Error(ae(407));n=n()}else{if(n=e(),zt===null)throw Error(ae(349));Br&30||px(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,_p(xx.bind(null,i,s,t),[t]),i.flags|=2048,no(9,mx.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ni(),e=zt.identifierPrefix;if(gt){var n=bi,i=Ei;n=(i&~(1<<32-$n(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=eo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=G_++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},q_={readContext:Un,useCallback:bx,useContext:Un,useEffect:Jf,useImperativeHandle:Ex,useInsertionEffect:yx,useLayoutEffect:Sx,useMemo:wx,useReducer:$c,useRef:_x,useState:function(){return $c(to)},useDebugValue:eh,useDeferredValue:function(t){var e=Fn();return Tx(e,Dt.memoizedState,t)},useTransition:function(){var t=$c(to)[0],e=Fn().memoizedState;return[t,e]},useMutableSource:fx,useSyncExternalStore:hx,useId:Ax,unstable_isNewReconciler:!1},Y_={readContext:Un,useCallback:bx,useContext:Un,useEffect:Jf,useImperativeHandle:Ex,useInsertionEffect:yx,useLayoutEffect:Sx,useMemo:wx,useReducer:qc,useRef:_x,useState:function(){return qc(to)},useDebugValue:eh,useDeferredValue:function(t){var e=Fn();return Dt===null?e.memoizedState=t:Tx(e,Dt.memoizedState,t)},useTransition:function(){var t=qc(to)[0],e=Fn().memoizedState;return[t,e]},useMutableSource:fx,useSyncExternalStore:hx,useId:Ax,unstable_isNewReconciler:!1};function Vn(t,e){if(t&&t.defaultProps){e=St({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function ud(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:St({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var mc={isMounted:function(t){return(t=t._reactInternals)?Xr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=rn(),r=dr(t),s=Ti(i,r);s.payload=e,n!=null&&(s.callback=n),e=cr(t,s,r),e!==null&&(qn(e,t,r,i),pl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=rn(),r=dr(t),s=Ti(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=cr(t,s,r),e!==null&&(qn(e,t,r,i),pl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=rn(),i=dr(t),r=Ti(n,i);r.tag=2,e!=null&&(r.callback=e),e=cr(t,r,i),e!==null&&(qn(e,t,i,n),pl(e,t,i))}};function yp(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!qa(n,i)||!qa(r,s):!0}function Px(t,e,n){var i=!1,r=pr,s=e.contextType;return typeof s=="object"&&s!==null?s=Un(s):(r=fn(e)?Or:Jt.current,i=e.contextTypes,s=(i=i!=null)?ks(t,r):pr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=mc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Sp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&mc.enqueueReplaceState(e,e.state,null)}function dd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Xf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Un(s):(s=fn(e)?Or:Jt.current,r.context=ks(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ud(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&mc.enqueueReplaceState(r,r.state,null),Hl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Hs(t,e){try{var n="",i=e;do n+=Ev(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Yc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function fd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var K_=typeof WeakMap=="function"?WeakMap:Map;function Lx(t,e,n){n=Ti(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){$l||($l=!0,Md=i),fd(t,e)},n}function Dx(t,e,n){n=Ti(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){fd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){fd(t,e),typeof i!="function"&&(ur===null?ur=new Set([this]):ur.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Mp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new K_;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=u1.bind(null,t,e,n),e.then(t,t))}function Ep(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function bp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ti(-1,1),e.tag=2,cr(n,e,1))),n.lanes|=1),t)}var Z_=Oi.ReactCurrentOwner,un=!1;function nn(t,e,n,i){e.child=t===null?lx(e,null,n,i):zs(e,t.child,n,i)}function wp(t,e,n,i,r){n=n.render;var s=e.ref;return Ls(e,r),i=Zf(t,e,n,i,s,r),n=Qf(),t!==null&&!un?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ii(t,e,r)):(gt&&n&&Bf(e),e.flags|=1,nn(t,e,i,r),e.child)}function Tp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!lh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Ix(t,e,s,i,r)):(t=yl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:qa,n(a,i)&&t.ref===e.ref)return Ii(t,e,r)}return e.flags|=1,t=fr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Ix(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(qa(s,i)&&t.ref===e.ref)if(un=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(un=!0);else return e.lanes=t.lanes,Ii(t,e,r)}return hd(t,e,n,i,r)}function Ux(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ut(As,yn),yn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ut(As,yn),yn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ut(As,yn),yn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ut(As,yn),yn|=i;return nn(t,e,r,n),e.child}function Fx(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function hd(t,e,n,i,r){var s=fn(n)?Or:Jt.current;return s=ks(e,s),Ls(e,r),n=Zf(t,e,n,i,s,r),i=Qf(),t!==null&&!un?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ii(t,e,r)):(gt&&i&&Bf(e),e.flags|=1,nn(t,e,n,r),e.child)}function Ap(t,e,n,i,r){if(fn(n)){var s=!0;Ol(e)}else s=!1;if(Ls(e,r),e.stateNode===null)gl(t,e),Px(e,n,i),dd(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Un(u):(u=fn(n)?Or:Jt.current,u=ks(e,u));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==u)&&Sp(e,a,i,u),Zi=!1;var d=e.memoizedState;a.state=d,Hl(e,i,a,r),l=e.memoizedState,o!==i||d!==l||dn.current||Zi?(typeof h=="function"&&(ud(e,n,h,i),l=e.memoizedState),(o=Zi||yp(e,n,o,i,d,l,u))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=u,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,ux(t,e),o=e.memoizedProps,u=e.type===e.elementType?o:Vn(e.type,o),a.props=u,p=e.pendingProps,d=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Un(l):(l=fn(n)?Or:Jt.current,l=ks(e,l));var m=n.getDerivedStateFromProps;(h=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==p||d!==l)&&Sp(e,a,i,l),Zi=!1,d=e.memoizedState,a.state=d,Hl(e,i,a,r);var g=e.memoizedState;o!==p||d!==g||dn.current||Zi?(typeof m=="function"&&(ud(e,n,m,i),g=e.memoizedState),(u=Zi||yp(e,n,u,i,d,g,l)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,g,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,g,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),a.props=i,a.state=g,a.context=l,i=u):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return pd(t,e,n,i,s,r)}function pd(t,e,n,i,r,s){Fx(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&fp(e,n,!1),Ii(t,e,s);i=e.stateNode,Z_.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=zs(e,t.child,null,s),e.child=zs(e,null,o,s)):nn(t,e,o,s),e.memoizedState=i.state,r&&fp(e,n,!0),e.child}function Ox(t){var e=t.stateNode;e.pendingContext?dp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&dp(t,e.context,!1),$f(t,e.containerInfo)}function Cp(t,e,n,i,r){return Bs(),Vf(r),e.flags|=256,nn(t,e,n,i),e.child}var md={dehydrated:null,treeContext:null,retryLane:0};function xd(t){return{baseLanes:t,cachePool:null,transitions:null}}function kx(t,e,n){var i=e.pendingProps,r=_t.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ut(_t,r&1),t===null)return ld(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=vc(a,i,0,null),t=Fr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=xd(n),e.memoizedState=md,t):th(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return Q_(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=fr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=fr(o,s):(s=Fr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?xd(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=md,i}return s=t.child,t=s.sibling,i=fr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function th(t,e){return e=vc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Fo(t,e,n,i){return i!==null&&Vf(i),zs(e,t.child,null,n),t=th(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Q_(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Yc(Error(ae(422))),Fo(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=vc({mode:"visible",children:i.children},r,0,null),s=Fr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&zs(e,t.child,null,a),e.child.memoizedState=xd(a),e.memoizedState=md,s);if(!(e.mode&1))return Fo(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ae(419)),i=Yc(s,i,void 0),Fo(t,e,a,i)}if(o=(a&t.childLanes)!==0,un||o){if(i=zt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Di(t,r),qn(i,t,r,-1))}return oh(),i=Yc(Error(ae(421))),Fo(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=d1.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Sn=lr(r.nextSibling),Mn=e,gt=!0,Gn=null,t!==null&&(Nn[Pn++]=Ei,Nn[Pn++]=bi,Nn[Pn++]=kr,Ei=t.id,bi=t.overflow,kr=e),e=th(e,i.children),e.flags|=4096,e)}function Rp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),cd(t.return,e,n)}function Kc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Bx(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(nn(t,e,i.children,n),i=_t.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Rp(t,n,e);else if(t.tag===19)Rp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ut(_t,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Gl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Kc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Gl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Kc(e,!0,n,null,s);break;case"together":Kc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function gl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ii(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),zr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ae(153));if(e.child!==null){for(t=e.child,n=fr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=fr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function J_(t,e,n){switch(e.tag){case 3:Ox(e),Bs();break;case 5:dx(e);break;case 1:fn(e.type)&&Ol(e);break;case 4:$f(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ut(zl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ut(_t,_t.current&1),e.flags|=128,null):n&e.child.childLanes?kx(t,e,n):(ut(_t,_t.current&1),t=Ii(t,e,n),t!==null?t.sibling:null);ut(_t,_t.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Bx(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ut(_t,_t.current),i)break;return null;case 22:case 23:return e.lanes=0,Ux(t,e,n)}return Ii(t,e,n)}var zx,gd,Vx,Hx;zx=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};gd=function(){};Vx=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Lr(li.current);var s=null;switch(n){case"input":r=Bu(t,r),i=Bu(t,i),s=[];break;case"select":r=St({},r,{value:void 0}),i=St({},i,{value:void 0}),s=[];break;case"textarea":r=Hu(t,r),i=Hu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Ul)}ju(n,i);var a;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var o=r[u];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Va.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(o=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==o&&(l!=null||o!=null))if(u==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Va.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&pt("scroll",t),s||o===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Hx=function(t,e,n,i){n!==i&&(e.flags|=4)};function pa(t,e){if(!gt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function qt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function e1(t,e,n){var i=e.pendingProps;switch(zf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qt(e),null;case 1:return fn(e.type)&&Fl(),qt(e),null;case 3:return i=e.stateNode,Vs(),mt(dn),mt(Jt),Yf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Io(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Gn!==null&&(wd(Gn),Gn=null))),gd(t,e),qt(e),null;case 5:qf(e);var r=Lr(Ja.current);if(n=e.type,t!==null&&e.stateNode!=null)Vx(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ae(166));return qt(e),null}if(t=Lr(li.current),Io(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ri]=e,i[Za]=s,t=(e.mode&1)!==0,n){case"dialog":pt("cancel",i),pt("close",i);break;case"iframe":case"object":case"embed":pt("load",i);break;case"video":case"audio":for(r=0;r<Ta.length;r++)pt(Ta[r],i);break;case"source":pt("error",i);break;case"img":case"image":case"link":pt("error",i),pt("load",i);break;case"details":pt("toggle",i);break;case"input":kh(i,s),pt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},pt("invalid",i);break;case"textarea":zh(i,s),pt("invalid",i)}ju(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&Do(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Do(i.textContent,o,t),r=["children",""+o]):Va.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&pt("scroll",i)}switch(n){case"input":wo(i),Bh(i,s,!0);break;case"textarea":wo(i),Vh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ul)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=x0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[ri]=e,t[Za]=i,zx(t,e,!1,!1),e.stateNode=t;e:{switch(a=Wu(n,i),n){case"dialog":pt("cancel",t),pt("close",t),r=i;break;case"iframe":case"object":case"embed":pt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ta.length;r++)pt(Ta[r],t);r=i;break;case"source":pt("error",t),r=i;break;case"img":case"image":case"link":pt("error",t),pt("load",t),r=i;break;case"details":pt("toggle",t),r=i;break;case"input":kh(t,i),r=Bu(t,i),pt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=St({},i,{value:void 0}),pt("invalid",t);break;case"textarea":zh(t,i),r=Hu(t,i),pt("invalid",t);break;default:r=i}ju(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?_0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&g0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ha(t,l):typeof l=="number"&&Ha(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Va.hasOwnProperty(s)?l!=null&&s==="onScroll"&&pt("scroll",t):l!=null&&wf(t,s,l,a))}switch(n){case"input":wo(t),Bh(t,i,!1);break;case"textarea":wo(t),Vh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+hr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Cs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Cs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Ul)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return qt(e),null;case 6:if(t&&e.stateNode!=null)Hx(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ae(166));if(n=Lr(Ja.current),Lr(li.current),Io(e)){if(i=e.stateNode,n=e.memoizedProps,i[ri]=e,(s=i.nodeValue!==n)&&(t=Mn,t!==null))switch(t.tag){case 3:Do(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Do(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ri]=e,e.stateNode=i}return qt(e),null;case 13:if(mt(_t),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(gt&&Sn!==null&&e.mode&1&&!(e.flags&128))ax(),Bs(),e.flags|=98560,s=!1;else if(s=Io(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ae(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ae(317));s[ri]=e}else Bs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;qt(e),s=!1}else Gn!==null&&(wd(Gn),Gn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||_t.current&1?It===0&&(It=3):oh())),e.updateQueue!==null&&(e.flags|=4),qt(e),null);case 4:return Vs(),gd(t,e),t===null&&Ya(e.stateNode.containerInfo),qt(e),null;case 10:return jf(e.type._context),qt(e),null;case 17:return fn(e.type)&&Fl(),qt(e),null;case 19:if(mt(_t),s=e.memoizedState,s===null)return qt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)pa(s,!1);else{if(It!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Gl(t),a!==null){for(e.flags|=128,pa(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ut(_t,_t.current&1|2),e.child}t=t.sibling}s.tail!==null&&Rt()>Gs&&(e.flags|=128,i=!0,pa(s,!1),e.lanes=4194304)}else{if(!i)if(t=Gl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),pa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!gt)return qt(e),null}else 2*Rt()-s.renderingStartTime>Gs&&n!==1073741824&&(e.flags|=128,i=!0,pa(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Rt(),e.sibling=null,n=_t.current,ut(_t,i?n&1|2:n&1),e):(qt(e),null);case 22:case 23:return ah(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?yn&1073741824&&(qt(e),e.subtreeFlags&6&&(e.flags|=8192)):qt(e),null;case 24:return null;case 25:return null}throw Error(ae(156,e.tag))}function t1(t,e){switch(zf(e),e.tag){case 1:return fn(e.type)&&Fl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Vs(),mt(dn),mt(Jt),Yf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return qf(e),null;case 13:if(mt(_t),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ae(340));Bs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return mt(_t),null;case 4:return Vs(),null;case 10:return jf(e.type._context),null;case 22:case 23:return ah(),null;case 24:return null;default:return null}}var Oo=!1,Zt=!1,n1=typeof WeakSet=="function"?WeakSet:Set,Me=null;function Ts(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){bt(t,e,i)}else n.current=null}function vd(t,e,n){try{n()}catch(i){bt(t,e,i)}}var Np=!1;function i1(t,e){if(td=Ll,t=$0(),kf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,u=0,h=0,p=t,d=null;t:for(;;){for(var m;p!==n||r!==0&&p.nodeType!==3||(o=a+r),p!==s||i!==0&&p.nodeType!==3||(l=a+i),p.nodeType===3&&(a+=p.nodeValue.length),(m=p.firstChild)!==null;)d=p,p=m;for(;;){if(p===t)break t;if(d===n&&++u===r&&(o=a),d===s&&++h===i&&(l=a),(m=p.nextSibling)!==null)break;p=d,d=p.parentNode}p=m}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(nd={focusedElem:t,selectionRange:n},Ll=!1,Me=e;Me!==null;)if(e=Me,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Me=t;else for(;Me!==null;){e=Me;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var b=g.memoizedProps,x=g.memoizedState,f=e.stateNode,y=f.getSnapshotBeforeUpdate(e.elementType===e.type?b:Vn(e.type,b),x);f.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var M=e.stateNode.containerInfo;M.nodeType===1?M.textContent="":M.nodeType===9&&M.documentElement&&M.removeChild(M.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ae(163))}}catch(S){bt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,Me=t;break}Me=e.return}return g=Np,Np=!1,g}function Ua(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&vd(e,n,s)}r=r.next}while(r!==i)}}function xc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function _d(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Gx(t){var e=t.alternate;e!==null&&(t.alternate=null,Gx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ri],delete e[Za],delete e[sd],delete e[B_],delete e[z_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function jx(t){return t.tag===5||t.tag===3||t.tag===4}function Pp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||jx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function yd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ul));else if(i!==4&&(t=t.child,t!==null))for(yd(t,e,n),t=t.sibling;t!==null;)yd(t,e,n),t=t.sibling}function Sd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Sd(t,e,n),t=t.sibling;t!==null;)Sd(t,e,n),t=t.sibling}var Ht=null,Hn=!1;function Gi(t,e,n){for(n=n.child;n!==null;)Wx(t,e,n),n=n.sibling}function Wx(t,e,n){if(oi&&typeof oi.onCommitFiberUnmount=="function")try{oi.onCommitFiberUnmount(lc,n)}catch{}switch(n.tag){case 5:Zt||Ts(n,e);case 6:var i=Ht,r=Hn;Ht=null,Gi(t,e,n),Ht=i,Hn=r,Ht!==null&&(Hn?(t=Ht,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ht.removeChild(n.stateNode));break;case 18:Ht!==null&&(Hn?(t=Ht,n=n.stateNode,t.nodeType===8?Gc(t.parentNode,n):t.nodeType===1&&Gc(t,n),Xa(t)):Gc(Ht,n.stateNode));break;case 4:i=Ht,r=Hn,Ht=n.stateNode.containerInfo,Hn=!0,Gi(t,e,n),Ht=i,Hn=r;break;case 0:case 11:case 14:case 15:if(!Zt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&vd(n,e,a),r=r.next}while(r!==i)}Gi(t,e,n);break;case 1:if(!Zt&&(Ts(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){bt(n,e,o)}Gi(t,e,n);break;case 21:Gi(t,e,n);break;case 22:n.mode&1?(Zt=(i=Zt)||n.memoizedState!==null,Gi(t,e,n),Zt=i):Gi(t,e,n);break;default:Gi(t,e,n)}}function Lp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new n1),e.forEach(function(i){var r=f1.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function On(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Ht=o.stateNode,Hn=!1;break e;case 3:Ht=o.stateNode.containerInfo,Hn=!0;break e;case 4:Ht=o.stateNode.containerInfo,Hn=!0;break e}o=o.return}if(Ht===null)throw Error(ae(160));Wx(s,a,r),Ht=null,Hn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){bt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Xx(e,t),e=e.sibling}function Xx(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(On(e,t),Jn(t),i&4){try{Ua(3,t,t.return),xc(3,t)}catch(b){bt(t,t.return,b)}try{Ua(5,t,t.return)}catch(b){bt(t,t.return,b)}}break;case 1:On(e,t),Jn(t),i&512&&n!==null&&Ts(n,n.return);break;case 5:if(On(e,t),Jn(t),i&512&&n!==null&&Ts(n,n.return),t.flags&32){var r=t.stateNode;try{Ha(r,"")}catch(b){bt(t,t.return,b)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&p0(r,s),Wu(o,a);var u=Wu(o,s);for(a=0;a<l.length;a+=2){var h=l[a],p=l[a+1];h==="style"?_0(r,p):h==="dangerouslySetInnerHTML"?g0(r,p):h==="children"?Ha(r,p):wf(r,h,p,u)}switch(o){case"input":zu(r,s);break;case"textarea":m0(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Cs(r,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?Cs(r,!!s.multiple,s.defaultValue,!0):Cs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Za]=s}catch(b){bt(t,t.return,b)}}break;case 6:if(On(e,t),Jn(t),i&4){if(t.stateNode===null)throw Error(ae(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(b){bt(t,t.return,b)}}break;case 3:if(On(e,t),Jn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Xa(e.containerInfo)}catch(b){bt(t,t.return,b)}break;case 4:On(e,t),Jn(t);break;case 13:On(e,t),Jn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(rh=Rt())),i&4&&Lp(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Zt=(u=Zt)||h,On(e,t),Zt=u):On(e,t),Jn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for(Me=t,h=t.child;h!==null;){for(p=Me=h;Me!==null;){switch(d=Me,m=d.child,d.tag){case 0:case 11:case 14:case 15:Ua(4,d,d.return);break;case 1:Ts(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(b){bt(i,n,b)}}break;case 5:Ts(d,d.return);break;case 22:if(d.memoizedState!==null){Ip(p);continue}}m!==null?(m.return=d,Me=m):Ip(p)}h=h.sibling}e:for(h=null,p=t;;){if(p.tag===5){if(h===null){h=p;try{r=p.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=p.stateNode,l=p.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=v0("display",a))}catch(b){bt(t,t.return,b)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(b){bt(t,t.return,b)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:On(e,t),Jn(t),i&4&&Lp(t);break;case 21:break;default:On(e,t),Jn(t)}}function Jn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(jx(n)){var i=n;break e}n=n.return}throw Error(ae(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ha(r,""),i.flags&=-33);var s=Pp(t);Sd(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Pp(t);yd(t,o,a);break;default:throw Error(ae(161))}}catch(l){bt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function r1(t,e,n){Me=t,$x(t)}function $x(t,e,n){for(var i=(t.mode&1)!==0;Me!==null;){var r=Me,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||Oo;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Zt;o=Oo;var u=Zt;if(Oo=a,(Zt=l)&&!u)for(Me=r;Me!==null;)a=Me,l=a.child,a.tag===22&&a.memoizedState!==null?Up(r):l!==null?(l.return=a,Me=l):Up(r);for(;s!==null;)Me=s,$x(s),s=s.sibling;Me=r,Oo=o,Zt=u}Dp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Me=s):Dp(t)}}function Dp(t){for(;Me!==null;){var e=Me;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Zt||xc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Zt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Vn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&gp(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}gp(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&Xa(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ae(163))}Zt||e.flags&512&&_d(e)}catch(d){bt(e,e.return,d)}}if(e===t){Me=null;break}if(n=e.sibling,n!==null){n.return=e.return,Me=n;break}Me=e.return}}function Ip(t){for(;Me!==null;){var e=Me;if(e===t){Me=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Me=n;break}Me=e.return}}function Up(t){for(;Me!==null;){var e=Me;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{xc(4,e)}catch(l){bt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){bt(e,r,l)}}var s=e.return;try{_d(e)}catch(l){bt(e,s,l)}break;case 5:var a=e.return;try{_d(e)}catch(l){bt(e,a,l)}}}catch(l){bt(e,e.return,l)}if(e===t){Me=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Me=o;break}Me=e.return}}var s1=Math.ceil,Xl=Oi.ReactCurrentDispatcher,nh=Oi.ReactCurrentOwner,In=Oi.ReactCurrentBatchConfig,Je=0,zt=null,Pt=null,jt=0,yn=0,As=gr(0),It=0,io=null,zr=0,gc=0,ih=0,Fa=null,cn=null,rh=0,Gs=1/0,yi=null,$l=!1,Md=null,ur=null,ko=!1,nr=null,ql=0,Oa=0,Ed=null,vl=-1,_l=0;function rn(){return Je&6?Rt():vl!==-1?vl:vl=Rt()}function dr(t){return t.mode&1?Je&2&&jt!==0?jt&-jt:H_.transition!==null?(_l===0&&(_l=P0()),_l):(t=st,t!==0||(t=window.event,t=t===void 0?16:k0(t.type)),t):1}function qn(t,e,n,i){if(50<Oa)throw Oa=0,Ed=null,Error(ae(185));lo(t,n,i),(!(Je&2)||t!==zt)&&(t===zt&&(!(Je&2)&&(gc|=n),It===4&&Ji(t,jt)),hn(t,i),n===1&&Je===0&&!(e.mode&1)&&(Gs=Rt()+500,hc&&vr()))}function hn(t,e){var n=t.callbackNode;Hv(t,e);var i=Pl(t,t===zt?jt:0);if(i===0)n!==null&&jh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&jh(n),e===1)t.tag===0?V_(Fp.bind(null,t)):ix(Fp.bind(null,t)),O_(function(){!(Je&6)&&vr()}),n=null;else{switch(L0(i)){case 1:n=Nf;break;case 4:n=R0;break;case 16:n=Nl;break;case 536870912:n=N0;break;default:n=Nl}n=tg(n,qx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function qx(t,e){if(vl=-1,_l=0,Je&6)throw Error(ae(327));var n=t.callbackNode;if(Ds()&&t.callbackNode!==n)return null;var i=Pl(t,t===zt?jt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Yl(t,i);else{e=i;var r=Je;Je|=2;var s=Kx();(zt!==t||jt!==e)&&(yi=null,Gs=Rt()+500,Ur(t,e));do try{l1();break}catch(o){Yx(t,o)}while(!0);Gf(),Xl.current=s,Je=r,Pt!==null?e=0:(zt=null,jt=0,e=It)}if(e!==0){if(e===2&&(r=Ku(t),r!==0&&(i=r,e=bd(t,r))),e===1)throw n=io,Ur(t,0),Ji(t,i),hn(t,Rt()),n;if(e===6)Ji(t,i);else{if(r=t.current.alternate,!(i&30)&&!a1(r)&&(e=Yl(t,i),e===2&&(s=Ku(t),s!==0&&(i=s,e=bd(t,s))),e===1))throw n=io,Ur(t,0),Ji(t,i),hn(t,Rt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ae(345));case 2:Tr(t,cn,yi);break;case 3:if(Ji(t,i),(i&130023424)===i&&(e=rh+500-Rt(),10<e)){if(Pl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){rn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=rd(Tr.bind(null,t,cn,yi),e);break}Tr(t,cn,yi);break;case 4:if(Ji(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-$n(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Rt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*s1(i/1960))-i,10<i){t.timeoutHandle=rd(Tr.bind(null,t,cn,yi),i);break}Tr(t,cn,yi);break;case 5:Tr(t,cn,yi);break;default:throw Error(ae(329))}}}return hn(t,Rt()),t.callbackNode===n?qx.bind(null,t):null}function bd(t,e){var n=Fa;return t.current.memoizedState.isDehydrated&&(Ur(t,e).flags|=256),t=Yl(t,e),t!==2&&(e=cn,cn=n,e!==null&&wd(e)),t}function wd(t){cn===null?cn=t:cn.push.apply(cn,t)}function a1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Yn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ji(t,e){for(e&=~ih,e&=~gc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-$n(e),i=1<<n;t[n]=-1,e&=~i}}function Fp(t){if(Je&6)throw Error(ae(327));Ds();var e=Pl(t,0);if(!(e&1))return hn(t,Rt()),null;var n=Yl(t,e);if(t.tag!==0&&n===2){var i=Ku(t);i!==0&&(e=i,n=bd(t,i))}if(n===1)throw n=io,Ur(t,0),Ji(t,e),hn(t,Rt()),n;if(n===6)throw Error(ae(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Tr(t,cn,yi),hn(t,Rt()),null}function sh(t,e){var n=Je;Je|=1;try{return t(e)}finally{Je=n,Je===0&&(Gs=Rt()+500,hc&&vr())}}function Vr(t){nr!==null&&nr.tag===0&&!(Je&6)&&Ds();var e=Je;Je|=1;var n=In.transition,i=st;try{if(In.transition=null,st=1,t)return t()}finally{st=i,In.transition=n,Je=e,!(Je&6)&&vr()}}function ah(){yn=As.current,mt(As)}function Ur(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,F_(n)),Pt!==null)for(n=Pt.return;n!==null;){var i=n;switch(zf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Fl();break;case 3:Vs(),mt(dn),mt(Jt),Yf();break;case 5:qf(i);break;case 4:Vs();break;case 13:mt(_t);break;case 19:mt(_t);break;case 10:jf(i.type._context);break;case 22:case 23:ah()}n=n.return}if(zt=t,Pt=t=fr(t.current,null),jt=yn=e,It=0,io=null,ih=gc=zr=0,cn=Fa=null,Pr!==null){for(e=0;e<Pr.length;e++)if(n=Pr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Pr=null}return t}function Yx(t,e){do{var n=Pt;try{if(Gf(),ml.current=Wl,jl){for(var i=yt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}jl=!1}if(Br=0,Bt=Dt=yt=null,Ia=!1,eo=0,nh.current=null,n===null||n.return===null){It=1,io=e,Pt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=jt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,h=o,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var d=h.alternate;d?(h.updateQueue=d.updateQueue,h.memoizedState=d.memoizedState,h.lanes=d.lanes):(h.updateQueue=null,h.memoizedState=null)}var m=Ep(a);if(m!==null){m.flags&=-257,bp(m,a,o,s,e),m.mode&1&&Mp(s,u,e),e=m,l=u;var g=e.updateQueue;if(g===null){var b=new Set;b.add(l),e.updateQueue=b}else g.add(l);break e}else{if(!(e&1)){Mp(s,u,e),oh();break e}l=Error(ae(426))}}else if(gt&&o.mode&1){var x=Ep(a);if(x!==null){!(x.flags&65536)&&(x.flags|=256),bp(x,a,o,s,e),Vf(Hs(l,o));break e}}s=l=Hs(l,o),It!==4&&(It=2),Fa===null?Fa=[s]:Fa.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=Lx(s,l,e);xp(s,f);break e;case 1:o=l;var y=s.type,M=s.stateNode;if(!(s.flags&128)&&(typeof y.getDerivedStateFromError=="function"||M!==null&&typeof M.componentDidCatch=="function"&&(ur===null||!ur.has(M)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=Dx(s,o,e);xp(s,S);break e}}s=s.return}while(s!==null)}Qx(n)}catch(T){e=T,Pt===n&&n!==null&&(Pt=n=n.return);continue}break}while(!0)}function Kx(){var t=Xl.current;return Xl.current=Wl,t===null?Wl:t}function oh(){(It===0||It===3||It===2)&&(It=4),zt===null||!(zr&268435455)&&!(gc&268435455)||Ji(zt,jt)}function Yl(t,e){var n=Je;Je|=2;var i=Kx();(zt!==t||jt!==e)&&(yi=null,Ur(t,e));do try{o1();break}catch(r){Yx(t,r)}while(!0);if(Gf(),Je=n,Xl.current=i,Pt!==null)throw Error(ae(261));return zt=null,jt=0,It}function o1(){for(;Pt!==null;)Zx(Pt)}function l1(){for(;Pt!==null&&!Dv();)Zx(Pt)}function Zx(t){var e=eg(t.alternate,t,yn);t.memoizedProps=t.pendingProps,e===null?Qx(t):Pt=e,nh.current=null}function Qx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=t1(n,e),n!==null){n.flags&=32767,Pt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{It=6,Pt=null;return}}else if(n=e1(n,e,yn),n!==null){Pt=n;return}if(e=e.sibling,e!==null){Pt=e;return}Pt=e=t}while(e!==null);It===0&&(It=5)}function Tr(t,e,n){var i=st,r=In.transition;try{In.transition=null,st=1,c1(t,e,n,i)}finally{In.transition=r,st=i}return null}function c1(t,e,n,i){do Ds();while(nr!==null);if(Je&6)throw Error(ae(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ae(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Gv(t,s),t===zt&&(Pt=zt=null,jt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ko||(ko=!0,tg(Nl,function(){return Ds(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=In.transition,In.transition=null;var a=st;st=1;var o=Je;Je|=4,nh.current=null,i1(t,n),Xx(n,t),R_(nd),Ll=!!td,nd=td=null,t.current=n,r1(n),Iv(),Je=o,st=a,In.transition=s}else t.current=n;if(ko&&(ko=!1,nr=t,ql=r),s=t.pendingLanes,s===0&&(ur=null),Ov(n.stateNode),hn(t,Rt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if($l)throw $l=!1,t=Md,Md=null,t;return ql&1&&t.tag!==0&&Ds(),s=t.pendingLanes,s&1?t===Ed?Oa++:(Oa=0,Ed=t):Oa=0,vr(),null}function Ds(){if(nr!==null){var t=L0(ql),e=In.transition,n=st;try{if(In.transition=null,st=16>t?16:t,nr===null)var i=!1;else{if(t=nr,nr=null,ql=0,Je&6)throw Error(ae(331));var r=Je;for(Je|=4,Me=t.current;Me!==null;){var s=Me,a=s.child;if(Me.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var u=o[l];for(Me=u;Me!==null;){var h=Me;switch(h.tag){case 0:case 11:case 15:Ua(8,h,s)}var p=h.child;if(p!==null)p.return=h,Me=p;else for(;Me!==null;){h=Me;var d=h.sibling,m=h.return;if(Gx(h),h===u){Me=null;break}if(d!==null){d.return=m,Me=d;break}Me=m}}}var g=s.alternate;if(g!==null){var b=g.child;if(b!==null){g.child=null;do{var x=b.sibling;b.sibling=null,b=x}while(b!==null)}}Me=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Me=a;else e:for(;Me!==null;){if(s=Me,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ua(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,Me=f;break e}Me=s.return}}var y=t.current;for(Me=y;Me!==null;){a=Me;var M=a.child;if(a.subtreeFlags&2064&&M!==null)M.return=a,Me=M;else e:for(a=y;Me!==null;){if(o=Me,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:xc(9,o)}}catch(T){bt(o,o.return,T)}if(o===a){Me=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,Me=S;break e}Me=o.return}}if(Je=r,vr(),oi&&typeof oi.onPostCommitFiberRoot=="function")try{oi.onPostCommitFiberRoot(lc,t)}catch{}i=!0}return i}finally{st=n,In.transition=e}}return!1}function Op(t,e,n){e=Hs(n,e),e=Lx(t,e,1),t=cr(t,e,1),e=rn(),t!==null&&(lo(t,1,e),hn(t,e))}function bt(t,e,n){if(t.tag===3)Op(t,t,n);else for(;e!==null;){if(e.tag===3){Op(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ur===null||!ur.has(i))){t=Hs(n,t),t=Dx(e,t,1),e=cr(e,t,1),t=rn(),e!==null&&(lo(e,1,t),hn(e,t));break}}e=e.return}}function u1(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=rn(),t.pingedLanes|=t.suspendedLanes&n,zt===t&&(jt&n)===n&&(It===4||It===3&&(jt&130023424)===jt&&500>Rt()-rh?Ur(t,0):ih|=n),hn(t,e)}function Jx(t,e){e===0&&(t.mode&1?(e=Co,Co<<=1,!(Co&130023424)&&(Co=4194304)):e=1);var n=rn();t=Di(t,e),t!==null&&(lo(t,e,n),hn(t,n))}function d1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Jx(t,n)}function f1(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ae(314))}i!==null&&i.delete(e),Jx(t,n)}var eg;eg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||dn.current)un=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return un=!1,J_(t,e,n);un=!!(t.flags&131072)}else un=!1,gt&&e.flags&1048576&&rx(e,Bl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;gl(t,e),t=e.pendingProps;var r=ks(e,Jt.current);Ls(e,n),r=Zf(null,e,i,t,r,n);var s=Qf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,fn(i)?(s=!0,Ol(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Xf(e),r.updater=mc,e.stateNode=r,r._reactInternals=e,dd(e,i,t,n),e=pd(null,e,i,!0,s,n)):(e.tag=0,gt&&s&&Bf(e),nn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(gl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=p1(i),t=Vn(i,t),r){case 0:e=hd(null,e,i,t,n);break e;case 1:e=Ap(null,e,i,t,n);break e;case 11:e=wp(null,e,i,t,n);break e;case 14:e=Tp(null,e,i,Vn(i.type,t),n);break e}throw Error(ae(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vn(i,r),hd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vn(i,r),Ap(t,e,i,r,n);case 3:e:{if(Ox(e),t===null)throw Error(ae(387));i=e.pendingProps,s=e.memoizedState,r=s.element,ux(t,e),Hl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Hs(Error(ae(423)),e),e=Cp(t,e,i,n,r);break e}else if(i!==r){r=Hs(Error(ae(424)),e),e=Cp(t,e,i,n,r);break e}else for(Sn=lr(e.stateNode.containerInfo.firstChild),Mn=e,gt=!0,Gn=null,n=lx(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Bs(),i===r){e=Ii(t,e,n);break e}nn(t,e,i,n)}e=e.child}return e;case 5:return dx(e),t===null&&ld(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,id(i,r)?a=null:s!==null&&id(i,s)&&(e.flags|=32),Fx(t,e),nn(t,e,a,n),e.child;case 6:return t===null&&ld(e),null;case 13:return kx(t,e,n);case 4:return $f(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=zs(e,null,i,n):nn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vn(i,r),wp(t,e,i,r,n);case 7:return nn(t,e,e.pendingProps,n),e.child;case 8:return nn(t,e,e.pendingProps.children,n),e.child;case 12:return nn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,ut(zl,i._currentValue),i._currentValue=a,s!==null)if(Yn(s.value,a)){if(s.children===r.children&&!dn.current){e=Ii(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ti(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?l.next=l:(l.next=h.next,h.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),cd(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ae(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),cd(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}nn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ls(e,n),r=Un(r),i=i(r),e.flags|=1,nn(t,e,i,n),e.child;case 14:return i=e.type,r=Vn(i,e.pendingProps),r=Vn(i.type,r),Tp(t,e,i,r,n);case 15:return Ix(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vn(i,r),gl(t,e),e.tag=1,fn(i)?(t=!0,Ol(e)):t=!1,Ls(e,n),Px(e,i,r),dd(e,i,r,n),pd(null,e,i,!0,t,n);case 19:return Bx(t,e,n);case 22:return Ux(t,e,n)}throw Error(ae(156,e.tag))};function tg(t,e){return C0(t,e)}function h1(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dn(t,e,n,i){return new h1(t,e,n,i)}function lh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function p1(t){if(typeof t=="function")return lh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Af)return 11;if(t===Cf)return 14}return 2}function fr(t,e){var n=t.alternate;return n===null?(n=Dn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function yl(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")lh(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case gs:return Fr(n.children,r,s,e);case Tf:a=8,r|=8;break;case Uu:return t=Dn(12,n,e,r|2),t.elementType=Uu,t.lanes=s,t;case Fu:return t=Dn(13,n,e,r),t.elementType=Fu,t.lanes=s,t;case Ou:return t=Dn(19,n,e,r),t.elementType=Ou,t.lanes=s,t;case d0:return vc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case c0:a=10;break e;case u0:a=9;break e;case Af:a=11;break e;case Cf:a=14;break e;case Ki:a=16,i=null;break e}throw Error(ae(130,t==null?t:typeof t,""))}return e=Dn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Fr(t,e,n,i){return t=Dn(7,t,i,e),t.lanes=n,t}function vc(t,e,n,i){return t=Dn(22,t,i,e),t.elementType=d0,t.lanes=n,t.stateNode={isHidden:!1},t}function Zc(t,e,n){return t=Dn(6,t,null,e),t.lanes=n,t}function Qc(t,e,n){return e=Dn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function m1(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Lc(0),this.expirationTimes=Lc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Lc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function ch(t,e,n,i,r,s,a,o,l){return t=new m1(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Dn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xf(s),t}function x1(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function ng(t){if(!t)return pr;t=t._reactInternals;e:{if(Xr(t)!==t||t.tag!==1)throw Error(ae(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(fn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ae(171))}if(t.tag===1){var n=t.type;if(fn(n))return nx(t,n,e)}return e}function ig(t,e,n,i,r,s,a,o,l){return t=ch(n,i,!0,t,r,s,a,o,l),t.context=ng(null),n=t.current,i=rn(),r=dr(n),s=Ti(i,r),s.callback=e??null,cr(n,s,r),t.current.lanes=r,lo(t,r,i),hn(t,i),t}function _c(t,e,n,i){var r=e.current,s=rn(),a=dr(r);return n=ng(n),e.context===null?e.context=n:e.pendingContext=n,e=Ti(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=cr(r,e,a),t!==null&&(qn(t,r,a,s),pl(t,r,a)),a}function Kl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function kp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function uh(t,e){kp(t,e),(t=t.alternate)&&kp(t,e)}function g1(){return null}var rg=typeof reportError=="function"?reportError:function(t){console.error(t)};function dh(t){this._internalRoot=t}yc.prototype.render=dh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ae(409));_c(t,e,null,null)};yc.prototype.unmount=dh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Vr(function(){_c(null,t,null,null)}),e[Li]=null}};function yc(t){this._internalRoot=t}yc.prototype.unstable_scheduleHydration=function(t){if(t){var e=U0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Qi.length&&e!==0&&e<Qi[n].priority;n++);Qi.splice(n,0,t),n===0&&O0(t)}};function fh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Sc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Bp(){}function v1(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Kl(a);s.call(u)}}var a=ig(e,i,t,0,null,!1,!1,"",Bp);return t._reactRootContainer=a,t[Li]=a.current,Ya(t.nodeType===8?t.parentNode:t),Vr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var u=Kl(l);o.call(u)}}var l=ch(t,0,!1,null,null,!1,!1,"",Bp);return t._reactRootContainer=l,t[Li]=l.current,Ya(t.nodeType===8?t.parentNode:t),Vr(function(){_c(e,l,n,i)}),l}function Mc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Kl(a);o.call(l)}}_c(e,a,t,r)}else a=v1(n,e,t,r,i);return Kl(a)}D0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=wa(e.pendingLanes);n!==0&&(Pf(e,n|1),hn(e,Rt()),!(Je&6)&&(Gs=Rt()+500,vr()))}break;case 13:Vr(function(){var i=Di(t,1);if(i!==null){var r=rn();qn(i,t,1,r)}}),uh(t,1)}};Lf=function(t){if(t.tag===13){var e=Di(t,134217728);if(e!==null){var n=rn();qn(e,t,134217728,n)}uh(t,134217728)}};I0=function(t){if(t.tag===13){var e=dr(t),n=Di(t,e);if(n!==null){var i=rn();qn(n,t,e,i)}uh(t,e)}};U0=function(){return st};F0=function(t,e){var n=st;try{return st=t,e()}finally{st=n}};$u=function(t,e,n){switch(e){case"input":if(zu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=fc(i);if(!r)throw Error(ae(90));h0(i),zu(i,r)}}}break;case"textarea":m0(t,n);break;case"select":e=n.value,e!=null&&Cs(t,!!n.multiple,e,!1)}};M0=sh;E0=Vr;var _1={usingClientEntryPoint:!1,Events:[uo,Ss,fc,y0,S0,sh]},ma={findFiberByHostInstance:Nr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},y1={bundleType:ma.bundleType,version:ma.version,rendererPackageName:ma.rendererPackageName,rendererConfig:ma.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Oi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=T0(t),t===null?null:t.stateNode},findFiberByHostInstance:ma.findFiberByHostInstance||g1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bo.isDisabled&&Bo.supportsFiber)try{lc=Bo.inject(y1),oi=Bo}catch{}}wn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_1;wn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fh(e))throw Error(ae(200));return x1(t,e,null,n)};wn.createRoot=function(t,e){if(!fh(t))throw Error(ae(299));var n=!1,i="",r=rg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=ch(t,1,!1,null,null,n,!1,i,r),t[Li]=e.current,Ya(t.nodeType===8?t.parentNode:t),new dh(e)};wn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ae(188)):(t=Object.keys(t).join(","),Error(ae(268,t)));return t=T0(e),t=t===null?null:t.stateNode,t};wn.flushSync=function(t){return Vr(t)};wn.hydrate=function(t,e,n){if(!Sc(e))throw Error(ae(200));return Mc(null,t,e,!0,n)};wn.hydrateRoot=function(t,e,n){if(!fh(t))throw Error(ae(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=rg;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=ig(e,null,t,1,n??null,r,!1,s,a),t[Li]=e.current,Ya(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new yc(e)};wn.render=function(t,e,n){if(!Sc(e))throw Error(ae(200));return Mc(null,t,e,!1,n)};wn.unmountComponentAtNode=function(t){if(!Sc(t))throw Error(ae(40));return t._reactRootContainer?(Vr(function(){Mc(null,null,t,!1,function(){t._reactRootContainer=null,t[Li]=null})}),!0):!1};wn.unstable_batchedUpdates=sh;wn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Sc(n))throw Error(ae(200));if(t==null||t._reactInternals===void 0)throw Error(ae(38));return Mc(t,e,n,!1,i)};wn.version="18.3.1-next-f1338f8080-20240426";function sg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sg)}catch(t){console.error(t)}}sg(),s0.exports=wn;var S1=s0.exports,zp=S1;Du.createRoot=zp.createRoot,Du.hydrateRoot=zp.hydrateRoot;var ag={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Vp=rr.createContext&&rr.createContext(ag),M1=["attr","size","title"];function E1(t,e){if(t==null)return{};var n,i,r=b1(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)n=s[i],e.indexOf(n)===-1&&{}.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function b1(t,e){if(t==null)return{};var n={};for(var i in t)if({}.hasOwnProperty.call(t,i)){if(e.indexOf(i)!==-1)continue;n[i]=t[i]}return n}function Zl(){return Zl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Zl.apply(null,arguments)}function Hp(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function Ql(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Hp(Object(n),!0).forEach(function(i){w1(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Hp(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function w1(t,e,n){return(e=T1(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function T1(t){var e=A1(t,"string");return typeof e=="symbol"?e:e+""}function A1(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function og(t){return t&&t.map((e,n)=>rr.createElement(e.tag,Ql({key:n},e.attr),og(e.child)))}function He(t){return e=>rr.createElement(C1,Zl({attr:Ql({},t.attr)},e),og(t.child))}function C1(t){var e=n=>{var i=t.attr,r=t.size,s=t.title,a=E1(t,M1),o=r||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),rr.createElement("svg",Zl({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,i,a,{className:l,style:Ql(Ql({color:t.color||n.color},n.style),t.style),height:o,width:o,xmlns:"http://www.w3.org/2000/svg"}),s&&rr.createElement("title",null,s),t.children)};return Vp!==void 0?rr.createElement(Vp.Consumer,null,n=>e(n)):e(ag)}function ka(t){return He({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"},child:[]}]})(t)}function Gp(t){return He({attr:{viewBox:"0 0 488 512"},child:[{tag:"path",attr:{d:"M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"},child:[]}]})(t)}function R1(t){return He({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(t)}function Td(t){return He({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4zm323-128.4l-27.8-28.1c-4.6-4.7-12.1-4.7-16.8-.1l-104.8 104-45.5-45.8c-4.6-4.7-12.1-4.7-16.8-.1l-28.1 27.9c-4.7 4.6-4.7 12.1-.1 16.8l81.7 82.3c4.6 4.7 12.1 4.7 16.8.1l141.3-140.2c4.6-4.7 4.7-12.2.1-16.8z"},child:[]}]})(t)}function Jr(t){return He({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M440.65 12.57l4 82.77A247.16 247.16 0 0 0 255.83 8C134.73 8 33.91 94.92 12.29 209.82A12 12 0 0 0 24.09 224h49.05a12 12 0 0 0 11.67-9.26 175.91 175.91 0 0 1 317-56.94l-101.46-4.86a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12H500a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12h-47.37a12 12 0 0 0-11.98 12.57zM255.83 432a175.61 175.61 0 0 1-146-77.8l101.8 4.87a12 12 0 0 0 12.57-12v-47.4a12 12 0 0 0-12-12H12a12 12 0 0 0-12 12V500a12 12 0 0 0 12 12h47.35a12 12 0 0 0 12-12.6l-4.15-82.57A247.17 247.17 0 0 0 255.83 504c121.11 0 221.93-86.92 243.55-201.82a12 12 0 0 0-11.8-14.18h-49.05a12 12 0 0 0-11.67 9.26A175.86 175.86 0 0 1 255.83 432z"},child:[]}]})(t)}function jp(t){return He({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"},child:[]}]})(t)}function N1(t){return He({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"},child:[]}]})(t)}function Wp(t){return He({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"},child:[]}]})(t)}function P1(t){return He({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M0 224v272c0 8.84 7.16 16 16 16h80V192H32c-17.67 0-32 14.33-32 32zm360-48h-24v-40c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8v64c0 4.42 3.58 8 8 8h48c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8zm137.75-63.96l-160-106.67a32.02 32.02 0 0 0-35.5 0l-160 106.67A32.002 32.002 0 0 0 128 138.66V512h128V368c0-8.84 7.16-16 16-16h96c8.84 0 16 7.16 16 16v144h128V138.67c0-10.7-5.35-20.7-14.25-26.63zM320 256c-44.18 0-80-35.82-80-80s35.82-80 80-80 80 35.82 80 80-35.82 80-80 80zm288-64h-64v320h80c8.84 0 16-7.16 16-16V224c0-17.67-14.33-32-32-32z"},child:[]}]})(t)}function Ai(t){return He({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M32,224H64V416H32A31.96166,31.96166,0,0,1,0,384V256A31.96166,31.96166,0,0,1,32,224Zm512-48V448a64.06328,64.06328,0,0,1-64,64H160a64.06328,64.06328,0,0,1-64-64V176a79.974,79.974,0,0,1,80-80H288V32a32,32,0,0,1,64,0V96H464A79.974,79.974,0,0,1,544,176ZM264,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,264,256Zm-8,128H192v32h64Zm96,0H288v32h64ZM456,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,456,256Zm-8,128H384v32h64ZM640,256V384a31.96166,31.96166,0,0,1-32,32H576V224h32A31.96166,31.96166,0,0,1,640,256Z"},child:[]}]})(t)}function L1(t){return He({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"},child:[]}]})(t)}function lg(t){return He({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"},child:[]}]})(t)}function D1(t){return He({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M621.16 54.46C582.37 38.19 543.55 32 504.75 32c-123.17-.01-246.33 62.34-369.5 62.34-30.89 0-61.76-3.92-92.65-13.72-3.47-1.1-6.95-1.62-10.35-1.62C15.04 79 0 92.32 0 110.81v317.26c0 12.63 7.23 24.6 18.84 29.46C57.63 473.81 96.45 480 135.25 480c123.17 0 246.34-62.35 369.51-62.35 30.89 0 61.76 3.92 92.65 13.72 3.47 1.1 6.95 1.62 10.35 1.62 17.21 0 32.25-13.32 32.25-31.81V83.93c-.01-12.64-7.24-24.6-18.85-29.47zM48 132.22c20.12 5.04 41.12 7.57 62.72 8.93C104.84 170.54 79 192.69 48 192.69v-60.47zm0 285v-47.78c34.37 0 62.18 27.27 63.71 61.4-22.53-1.81-43.59-6.31-63.71-13.62zM320 352c-44.19 0-80-42.99-80-96 0-53.02 35.82-96 80-96s80 42.98 80 96c0 53.03-35.83 96-80 96zm272 27.78c-17.52-4.39-35.71-6.85-54.32-8.44 5.87-26.08 27.5-45.88 54.32-49.28v57.72zm0-236.11c-30.89-3.91-54.86-29.7-55.81-61.55 19.54 2.17 38.09 6.23 55.81 12.66v48.89z"},child:[]}]})(t)}function Ad(t){return He({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"},child:[]}]})(t)}function I1(t){return He({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"},child:[]}]})(t)}function U1(t){return He({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M272,288H208a16,16,0,0,1-16-16V208a16,16,0,0,1,16-16h64a16,16,0,0,1,16,16v37.12C299.11,232.24,315,224,332.8,224H469.74l6.65-7.53A16.51,16.51,0,0,0,480,207a16.31,16.31,0,0,0-4.75-10.61L416,144V48a16,16,0,0,0-16-16H368a16,16,0,0,0-16,16V87.3L263.5,8.92C258,4,247.45,0,240.05,0s-17.93,4-23.47,8.92L4.78,196.42A16.15,16.15,0,0,0,0,207a16.4,16.4,0,0,0,3.55,9.39L22.34,237.7A16.22,16.22,0,0,0,33,242.48,16.51,16.51,0,0,0,42.34,239L64,219.88V384a32,32,0,0,0,32,32H272ZM629.33,448H592V288c0-17.67-12.89-32-28.8-32H332.8c-15.91,0-28.8,14.33-28.8,32V448H266.67A10.67,10.67,0,0,0,256,458.67v10.66A42.82,42.82,0,0,0,298.6,512H597.4A42.82,42.82,0,0,0,640,469.33V458.67A10.67,10.67,0,0,0,629.33,448ZM544,448H352V304H544Z"},child:[]}]})(t)}function F1(t){return He({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M512 176.001C512 273.203 433.202 352 336 352c-11.22 0-22.19-1.062-32.827-3.069l-24.012 27.014A23.999 23.999 0 0 1 261.223 384H224v40c0 13.255-10.745 24-24 24h-40v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24v-78.059c0-6.365 2.529-12.47 7.029-16.971l161.802-161.802C163.108 213.814 160 195.271 160 176 160 78.798 238.797.001 335.999 0 433.488-.001 512 78.511 512 176.001zM336 128c0 26.51 21.49 48 48 48s48-21.49 48-48-21.49-48-48-48-48 21.49-48 48z"},child:[]}]})(t)}function O1(t){return He({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 255.531c.253 136.64-111.18 248.372-247.82 248.468-59.015.042-113.223-20.53-155.822-54.911-11.077-8.94-11.905-25.541-1.839-35.607l11.267-11.267c8.609-8.609 22.353-9.551 31.891-1.984C173.062 425.135 212.781 440 256 440c101.705 0 184-82.311 184-184 0-101.705-82.311-184-184-184-48.814 0-93.149 18.969-126.068 49.932l50.754 50.754c10.08 10.08 2.941 27.314-11.313 27.314H24c-8.837 0-16-7.163-16-16V38.627c0-14.254 17.234-21.393 27.314-11.314l49.372 49.372C129.209 34.136 189.552 8 256 8c136.81 0 247.747 110.78 248 247.531zm-180.912 78.784l9.823-12.63c8.138-10.463 6.253-25.542-4.21-33.679L288 256.349V152c0-13.255-10.745-24-24-24h-16c-13.255 0-24 10.745-24 24v135.651l65.409 50.874c10.463 8.137 25.541 6.253 33.679-4.21z"},child:[]}]})(t)}function Jl(t){return He({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"},child:[]}]})(t)}function k1(t){return He({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 0 1-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 0 1-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 0 0-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 0 0-15.55-3.1l-31.17 10.39a11.95 11.95 0 0 0-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 0 1 8.93 21.57 46.536 46.536 0 0 1-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 0 1 0-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z"},child:[]}]})(t)}function es(t){return He({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},child:[]}]})(t)}function B1(t){return He({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M0 432c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V256H0v176zm192-68c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H204c-6.6 0-12-5.4-12-12v-40zm-128 0c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM576 80v48H0V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48z"},child:[]}]})(t)}function Jc(t){return He({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M416 192c0-88.4-93.1-160-208-160S0 103.6 0 192c0 34.3 14.1 65.9 38 92-13.4 30.2-35.5 54.2-35.8 54.5-2.2 2.3-2.8 5.7-1.5 8.7S4.8 352 8 352c36.6 0 66.9-12.3 88.7-25 32.2 15.7 70.3 25 111.3 25 114.9 0 208-71.6 208-160zm122 220c23.9-26 38-57.7 38-92 0-66.9-53.5-124.2-129.3-148.1.9 6.6 1.3 13.3 1.3 20.1 0 105.9-107.7 192-240 192-10.8 0-21.3-.8-31.7-1.9C207.8 439.6 281.8 480 368 480c41 0 79.1-9.2 111.3-25 21.8 12.7 52.1 25 88.7 25 3.2 0 6.1-1.9 7.3-4.8 1.3-2.9.7-6.3-1.5-8.7-.3-.3-22.4-24.2-35.8-54.5z"},child:[]}]})(t)}function Xp(t){return He({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"},child:[]}]})(t)}function z1(t){return He({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"},child:[]}]})(t)}function V1(t){return He({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"},child:[]}]})(t)}function cg(t){return He({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"},child:[]}]})(t)}function kt(t){return He({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},child:[]}]})(t)}function H1(t){return He({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M332.8 320h38.4c6.4 0 12.8-6.4 12.8-12.8V172.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-288 0h38.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zM496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"},child:[]}]})(t)}function G1(t){return He({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M458.622 255.92l45.985-45.005c13.708-12.977 7.316-36.039-10.664-40.339l-62.65-15.99 17.661-62.015c4.991-17.838-11.829-34.663-29.661-29.671l-61.994 17.667-15.984-62.671C337.085.197 313.765-6.276 300.99 7.228L256 53.57 211.011 7.229c-12.63-13.351-36.047-7.234-40.325 10.668l-15.984 62.671-61.995-17.667C74.87 57.907 58.056 74.738 63.046 92.572l17.661 62.015-62.65 15.99C.069 174.878-6.31 197.944 7.392 210.915l45.985 45.005-45.985 45.004c-13.708 12.977-7.316 36.039 10.664 40.339l62.65 15.99-17.661 62.015c-4.991 17.838 11.829 34.663 29.661 29.671l61.994-17.667 15.984 62.671c4.439 18.575 27.696 24.018 40.325 10.668L256 458.61l44.989 46.001c12.5 13.488 35.987 7.486 40.325-10.668l15.984-62.671 61.994 17.667c17.836 4.994 34.651-11.837 29.661-29.671l-17.661-62.015 62.65-15.99c17.987-4.302 24.366-27.367 10.664-40.339l-45.984-45.004z"},child:[]}]})(t)}function j1(t){return He({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"},child:[]}]})(t)}function W1(t){return He({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49 69.18-34.82 169.23-44.32 218.7-46.92 16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31.01 0 45.04 0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z"},child:[]}]})(t)}function xa(t){return He({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"},child:[]}]})(t)}function X1(t){return He({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M97.12 362.63c-8.69-8.69-4.16-6.24-25.12-11.85-9.51-2.55-17.87-7.45-25.43-13.32L1.2 448.7c-4.39 10.77 3.81 22.47 15.43 22.03l52.69-2.01L105.56 507c8 8.44 22.04 5.81 26.43-4.96l52.05-127.62c-10.84 6.04-22.87 9.58-35.31 9.58-19.5 0-37.82-7.59-51.61-21.37zM382.8 448.7l-45.37-111.24c-7.56 5.88-15.92 10.77-25.43 13.32-21.07 5.64-16.45 3.18-25.12 11.85-13.79 13.78-32.12 21.37-51.62 21.37-12.44 0-24.47-3.55-35.31-9.58L252 502.04c4.39 10.77 18.44 13.4 26.43 4.96l36.25-38.28 52.69 2.01c11.62.44 19.82-11.27 15.43-22.03zM263 340c15.28-15.55 17.03-14.21 38.79-20.14 13.89-3.79 24.75-14.84 28.47-28.98 7.48-28.4 5.54-24.97 25.95-45.75 10.17-10.35 14.14-25.44 10.42-39.58-7.47-28.38-7.48-24.42 0-52.83 3.72-14.14-.25-29.23-10.42-39.58-20.41-20.78-18.47-17.36-25.95-45.75-3.72-14.14-14.58-25.19-28.47-28.98-27.88-7.61-24.52-5.62-44.95-26.41-10.17-10.35-25-14.4-38.89-10.61-27.87 7.6-23.98 7.61-51.9 0-13.89-3.79-28.72.25-38.89 10.61-20.41 20.78-17.05 18.8-44.94 26.41-13.89 3.79-24.75 14.84-28.47 28.98-7.47 28.39-5.54 24.97-25.95 45.75-10.17 10.35-14.15 25.44-10.42 39.58 7.47 28.36 7.48 24.4 0 52.82-3.72 14.14.25 29.23 10.42 39.59 20.41 20.78 18.47 17.35 25.95 45.75 3.72 14.14 14.58 25.19 28.47 28.98C104.6 325.96 106.27 325 121 340c13.23 13.47 33.84 15.88 49.74 5.82a39.676 39.676 0 0 1 42.53 0c15.89 10.06 36.5 7.65 49.73-5.82zM97.66 175.96c0-53.03 42.24-96.02 94.34-96.02s94.34 42.99 94.34 96.02-42.24 96.02-94.34 96.02-94.34-42.99-94.34-96.02z"},child:[]}]})(t)}function $1(t){return He({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"},child:[]}]})(t)}function q1(t){return He({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"},child:[]}]})(t)}function Y1(t){return He({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z"},child:[]}]})(t)}function K1(t){return He({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M5.033 14.649H.743a.74.74 0 0 1-.686-.458.74.74 0 0 1 .16-.808L3.19 10.41H1.06A1.06 1.06 0 0 1 0 9.35h3.957c.301 0 .57.18.686.458a.74.74 0 0 1-.161.808L1.51 13.59h2.464c.585 0 1.06.475 1.06 1.06zM24 11.338c0-1.14-.927-2.066-2.066-2.066-.61 0-1.158.265-1.537.686a2.061 2.061 0 0 0-1.536-.686c-1.14 0-2.066.926-2.066 2.066v3.311a1.06 1.06 0 0 0 1.06-1.06v-2.251a1.004 1.004 0 0 1 2.013 0v2.251c0 .586.474 1.06 1.06 1.06v-3.311a1.004 1.004 0 0 1 2.012 0v2.251c0 .586.475 1.06 1.06 1.06zM16.265 12a2.728 2.728 0 1 1-5.457 0 2.728 2.728 0 0 1 5.457 0zm-1.06 0a1.669 1.669 0 1 0-3.338 0 1.669 1.669 0 0 0 3.338 0zm-4.82 0a2.728 2.728 0 1 1-5.458 0 2.728 2.728 0 0 1 5.457 0zm-1.06 0a1.669 1.669 0 1 0-3.338 0 1.669 1.669 0 0 0 3.338 0z"},child:[]}]})(t)}function Z1(t){return He({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M5.53 2.13 0 7.75h5.53zm.398 0v5.62h7.608v3.65l5.47-4.45c-.014-1.22.031-2.25-.025-3.46-.148-1.09-1.287-1.47-2.236-1.36zM23.1 4.32c-.802.295-1.358.995-2.047 1.49-2.506 2.05-4.982 4.12-7.468 6.19 3.025 2.59 6.04 5.18 9.065 7.76 1.218.671 1.428-.814 1.328-1.64v-13a.828.828 0 0 0-.877-.825zM.038 8.15v7.7h5.53v-7.7zm13.577 8.1H6.008v5.62c3.864-.006 7.737.011 11.58-.009 1.02-.07 1.618-1.12 1.468-2.07v-2.51l-5.47-4.68v3.65zm-13.577 0c.02 1.44-.041 2.88.033 4.31.162.948 1.158 1.43 2.047 1.31h3.464v-5.62z"},child:[]}]})(t)}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hh="185",Q1=0,$p=1,J1=2,Sl=1,e2=2,Aa=3,mr=0,pn=1,Mi=2,Ci=0,Is=1,qp=2,Yp=3,Kp=4,t2=5,Cr=100,n2=101,i2=102,r2=103,s2=104,a2=200,o2=201,l2=202,c2=203,Cd=204,Rd=205,u2=206,d2=207,f2=208,h2=209,p2=210,m2=211,x2=212,g2=213,v2=214,Nd=0,Pd=1,Ld=2,js=3,Dd=4,Id=5,Ud=6,Fd=7,ug=0,_2=1,y2=2,ci=0,dg=1,fg=2,hg=3,pg=4,mg=5,xg=6,gg=7,vg=300,Hr=301,Ws=302,eu=303,tu=304,Ec=306,Od=1e3,wi=1001,kd=1002,Gt=1003,S2=1004,zo=1005,Qt=1006,nu=1007,Dr=1008,Ln=1009,_g=1010,yg=1011,ro=1012,ph=1013,fi=1014,si=1015,Ui=1016,mh=1017,xh=1018,so=1020,Sg=35902,Mg=35899,Eg=1021,bg=1022,Xn=1023,Fi=1026,Ir=1027,wg=1028,gh=1029,Gr=1030,vh=1031,_h=1033,Ml=33776,El=33777,bl=33778,wl=33779,Bd=35840,zd=35841,Vd=35842,Hd=35843,Gd=36196,jd=37492,Wd=37496,Xd=37488,$d=37489,ec=37490,qd=37491,Yd=37808,Kd=37809,Zd=37810,Qd=37811,Jd=37812,ef=37813,tf=37814,nf=37815,rf=37816,sf=37817,af=37818,of=37819,lf=37820,cf=37821,uf=36492,df=36494,ff=36495,hf=36283,pf=36284,tc=36285,mf=36286,M2=3200,Zp=0,E2=1,er="",Rn="srgb",nc="srgb-linear",ic="linear",rt="srgb",ts=7680,Qp=519,b2=512,w2=513,T2=514,yh=515,A2=516,C2=517,Sh=518,R2=519,Jp=35044,em="300 es",ai=2e3,rc=2001;function N2(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function sc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function P2(){const t=sc("canvas");return t.style.display="block",t}const tm={};function nm(...t){const e="THREE."+t.shift();console.log(e,...t)}function Tg(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function De(...t){t=Tg(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function Qe(...t){t=Tg(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Us(...t){const e=t.join(" ");e in tm||(tm[e]=!0,De(...t))}function L2(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const D2={[Nd]:Pd,[Ld]:Ud,[Dd]:Fd,[js]:Id,[Pd]:Nd,[Ud]:Ld,[Fd]:Dd,[Id]:js};class $r{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let im=1234567;const Ba=Math.PI/180,ao=180/Math.PI;function Zs(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Yt[t&255]+Yt[t>>8&255]+Yt[t>>16&255]+Yt[t>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[n&63|128]+Yt[n>>8&255]+"-"+Yt[n>>16&255]+Yt[n>>24&255]+Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]).toLowerCase()}function Xe(t,e,n){return Math.max(e,Math.min(n,t))}function Mh(t,e){return(t%e+e)%e}function I2(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function U2(t,e,n){return t!==e?(n-t)/(e-t):0}function za(t,e,n){return(1-n)*t+n*e}function F2(t,e,n,i){return za(t,e,1-Math.exp(-n*i))}function O2(t,e=1){return e-Math.abs(Mh(t,e*2)-e)}function k2(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function B2(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function z2(t,e){return t+Math.floor(Math.random()*(e-t+1))}function V2(t,e){return t+Math.random()*(e-t)}function H2(t){return t*(.5-Math.random())}function G2(t){t!==void 0&&(im=t);let e=im+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function j2(t){return t*Ba}function W2(t){return t*ao}function X2(t){return(t&t-1)===0&&t!==0}function $2(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function q2(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Y2(t,e,n,i,r){const s=Math.cos,a=Math.sin,o=s(n/2),l=a(n/2),u=s((e+i)/2),h=a((e+i)/2),p=s((e-i)/2),d=a((e-i)/2),m=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":t.set(o*h,l*p,l*d,o*u);break;case"YZY":t.set(l*d,o*h,l*p,o*u);break;case"ZXZ":t.set(l*p,l*d,o*h,o*u);break;case"XZX":t.set(o*h,l*g,l*m,o*u);break;case"YXY":t.set(l*m,o*h,l*g,o*u);break;case"ZYZ":t.set(l*g,l*m,o*h,o*u);break;default:De("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ms(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function en(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const rm={DEG2RAD:Ba,RAD2DEG:ao,generateUUID:Zs,clamp:Xe,euclideanModulo:Mh,mapLinear:I2,inverseLerp:U2,lerp:za,damp:F2,pingpong:O2,smoothstep:k2,smootherstep:B2,randInt:z2,randFloat:V2,randFloatSpread:H2,seededRandom:G2,degToRad:j2,radToDeg:W2,isPowerOfTwo:X2,ceilPowerOfTwo:$2,floorPowerOfTwo:q2,setQuaternionFromProperEuler:Y2,normalize:en,denormalize:ms},Th=class Th{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Xe(this.x,e.x,n.x),this.y=Xe(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Xe(this.x,e,n),this.y=Xe(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Xe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Th.prototype.isVector2=!0;let $e=Th;class Qs{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],u=i[r+1],h=i[r+2],p=i[r+3],d=s[a+0],m=s[a+1],g=s[a+2],b=s[a+3];if(p!==b||l!==d||u!==m||h!==g){let x=l*d+u*m+h*g+p*b;x<0&&(d=-d,m=-m,g=-g,b=-b,x=-x);let f=1-o;if(x<.9995){const y=Math.acos(x),M=Math.sin(y);f=Math.sin(f*y)/M,o=Math.sin(o*y)/M,l=l*f+d*o,u=u*f+m*o,h=h*f+g*o,p=p*f+b*o}else{l=l*f+d*o,u=u*f+m*o,h=h*f+g*o,p=p*f+b*o;const y=1/Math.sqrt(l*l+u*u+h*h+p*p);l*=y,u*=y,h*=y,p*=y}}e[n]=l,e[n+1]=u,e[n+2]=h,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],u=i[r+2],h=i[r+3],p=s[a],d=s[a+1],m=s[a+2],g=s[a+3];return e[n]=o*g+h*p+l*m-u*d,e[n+1]=l*g+h*d+u*p-o*m,e[n+2]=u*g+h*m+o*d-l*p,e[n+3]=h*g-o*p-l*d-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(i/2),h=o(r/2),p=o(s/2),d=l(i/2),m=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=d*h*p+u*m*g,this._y=u*m*p-d*h*g,this._z=u*h*g+d*m*p,this._w=u*h*p-d*m*g;break;case"YXZ":this._x=d*h*p+u*m*g,this._y=u*m*p-d*h*g,this._z=u*h*g-d*m*p,this._w=u*h*p+d*m*g;break;case"ZXY":this._x=d*h*p-u*m*g,this._y=u*m*p+d*h*g,this._z=u*h*g+d*m*p,this._w=u*h*p-d*m*g;break;case"ZYX":this._x=d*h*p-u*m*g,this._y=u*m*p+d*h*g,this._z=u*h*g-d*m*p,this._w=u*h*p+d*m*g;break;case"YZX":this._x=d*h*p+u*m*g,this._y=u*m*p+d*h*g,this._z=u*h*g-d*m*p,this._w=u*h*p-d*m*g;break;case"XZY":this._x=d*h*p-u*m*g,this._y=u*m*p-d*h*g,this._z=u*h*g+d*m*p,this._w=u*h*p+d*m*g;break;default:De("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],u=n[2],h=n[6],p=n[10],d=i+o+p;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-u)*m,this._z=(a-r)*m}else if(i>o&&i>p){const m=2*Math.sqrt(1+i-o-p);this._w=(h-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+u)/m}else if(o>p){const m=2*Math.sqrt(1+o-i-p);this._w=(s-u)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+p-i-o);this._w=(a-r)/m,this._x=(s+u)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xe(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,u=n._z,h=n._w;return this._x=i*h+a*o+r*u-s*l,this._y=r*h+a*l+s*o-i*u,this._z=s*h+a*u+i*l-r*o,this._w=a*h-i*o-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const u=Math.acos(o),h=Math.sin(u);l=Math.sin(l*u)/h,n=Math.sin(n*u)/h,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Ah=class Ah{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(sm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(sm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,u=2*(a*r-o*i),h=2*(o*n-s*r),p=2*(s*i-a*n);return this.x=n+l*u+a*p-o*h,this.y=i+l*h+o*u-s*p,this.z=r+l*p+s*h-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Xe(this.x,e.x,n.x),this.y=Xe(this.y,e.y,n.y),this.z=Xe(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Xe(this.x,e,n),this.y=Xe(this.y,e,n),this.z=Xe(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return iu.copy(this).projectOnVector(e),this.sub(iu)}reflect(e){return this.sub(iu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Xe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ah.prototype.isVector3=!0;let X=Ah;const iu=new X,sm=new Qs,Ch=class Ch{constructor(e,n,i,r,s,a,o,l,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u)}set(e,n,i,r,s,a,o,l,u){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],u=i[1],h=i[4],p=i[7],d=i[2],m=i[5],g=i[8],b=r[0],x=r[3],f=r[6],y=r[1],M=r[4],S=r[7],T=r[2],w=r[5],C=r[8];return s[0]=a*b+o*y+l*T,s[3]=a*x+o*M+l*w,s[6]=a*f+o*S+l*C,s[1]=u*b+h*y+p*T,s[4]=u*x+h*M+p*w,s[7]=u*f+h*S+p*C,s[2]=d*b+m*y+g*T,s[5]=d*x+m*M+g*w,s[8]=d*f+m*S+g*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],h=e[8];return n*a*h-n*o*u-i*s*h+i*o*l+r*s*u-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],h=e[8],p=h*a-o*u,d=o*l-h*s,m=u*s-a*l,g=n*p+i*d+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/g;return e[0]=p*b,e[1]=(r*u-h*i)*b,e[2]=(o*i-r*a)*b,e[3]=d*b,e[4]=(h*n-r*l)*b,e[5]=(r*s-o*n)*b,e[6]=m*b,e[7]=(i*l-u*n)*b,e[8]=(a*n-i*s)*b,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*a+u*o)+a+e,-r*u,r*l,-r*(-u*a+l*o)+o+n,0,0,1),this}scale(e,n){return Us("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ru.makeScale(e,n)),this}rotate(e){return Us("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ru.makeRotation(-e)),this}translate(e,n){return Us("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ru.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Ch.prototype.isMatrix3=!0;let Oe=Ch;const ru=new Oe,am=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),om=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function K2(){const t={enabled:!0,workingColorSpace:nc,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===rt&&(r.r=Ri(r.r),r.g=Ri(r.g),r.b=Ri(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===rt&&(r.r=Fs(r.r),r.g=Fs(r.g),r.b=Fs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===er?ic:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Us("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Us("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[nc]:{primaries:e,whitePoint:i,transfer:ic,toXYZ:am,fromXYZ:om,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Rn},outputColorSpaceConfig:{drawingBufferColorSpace:Rn}},[Rn]:{primaries:e,whitePoint:i,transfer:rt,toXYZ:am,fromXYZ:om,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Rn}}}),t}const Ye=K2();function Ri(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Fs(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ns;class Z2{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ns===void 0&&(ns=sc("canvas")),ns.width=e.width,ns.height=e.height;const r=ns.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ns}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=sc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ri(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ri(n[i]/255)*255):n[i]=Ri(n[i]);return{data:n,width:e.width,height:e.height}}else return De("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Q2=0;class Eh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Q2++}),this.uuid=Zs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(su(r[a].image)):s.push(su(r[a]))}else s=su(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function su(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Z2.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(De("Texture: Unable to serialize Texture."),{})}let J2=0;const au=new X;class sn extends $r{constructor(e=sn.DEFAULT_IMAGE,n=sn.DEFAULT_MAPPING,i=wi,r=wi,s=Qt,a=Dr,o=Xn,l=Ln,u=sn.DEFAULT_ANISOTROPY,h=er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:J2++}),this.uuid=Zs(),this.name="",this.source=new Eh(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(au).x}get height(){return this.source.getSize(au).y}get depth(){return this.source.getSize(au).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){De(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){De(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Od:e.x=e.x-Math.floor(e.x);break;case wi:e.x=e.x<0?0:1;break;case kd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Od:e.y=e.y-Math.floor(e.y);break;case wi:e.y=e.y<0?0:1;break;case kd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=vg;sn.DEFAULT_ANISOTROPY=1;const Rh=class Rh{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],h=l[4],p=l[8],d=l[1],m=l[5],g=l[9],b=l[2],x=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(p-b)<.01&&Math.abs(g-x)<.01){if(Math.abs(h+d)<.1&&Math.abs(p+b)<.1&&Math.abs(g+x)<.1&&Math.abs(u+m+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const M=(u+1)/2,S=(m+1)/2,T=(f+1)/2,w=(h+d)/4,C=(p+b)/4,_=(g+x)/4;return M>S&&M>T?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=w/i,s=C/i):S>T?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=w/r,s=_/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=C/s,r=_/s),this.set(i,r,s,n),this}let y=Math.sqrt((x-g)*(x-g)+(p-b)*(p-b)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(x-g)/y,this.y=(p-b)/y,this.z=(d-h)/y,this.w=Math.acos((u+m+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Xe(this.x,e.x,n.x),this.y=Xe(this.y,e.y,n.y),this.z=Xe(this.z,e.z,n.z),this.w=Xe(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Xe(this.x,e,n),this.y=Xe(this.y,e,n),this.z=Xe(this.z,e,n),this.w=Xe(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Rh.prototype.isVector4=!0;let wt=Rh;class ey extends $r{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new wt(0,0,e,n),this.scissorTest=!1,this.viewport=new wt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new sn(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:Qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Eh(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ui extends ey{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Ag extends sn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ty extends sn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ac=class ac{constructor(e,n,i,r,s,a,o,l,u,h,p,d,m,g,b,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u,h,p,d,m,g,b,x)}set(e,n,i,r,s,a,o,l,u,h,p,d,m,g,b,x){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=u,f[6]=h,f[10]=p,f[14]=d,f[3]=m,f[7]=g,f[11]=b,f[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ac().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/is.setFromMatrixColumn(e,0).length(),s=1/is.setFromMatrixColumn(e,1).length(),a=1/is.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),u=Math.sin(r),h=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const d=a*h,m=a*p,g=o*h,b=o*p;n[0]=l*h,n[4]=-l*p,n[8]=u,n[1]=m+g*u,n[5]=d-b*u,n[9]=-o*l,n[2]=b-d*u,n[6]=g+m*u,n[10]=a*l}else if(e.order==="YXZ"){const d=l*h,m=l*p,g=u*h,b=u*p;n[0]=d+b*o,n[4]=g*o-m,n[8]=a*u,n[1]=a*p,n[5]=a*h,n[9]=-o,n[2]=m*o-g,n[6]=b+d*o,n[10]=a*l}else if(e.order==="ZXY"){const d=l*h,m=l*p,g=u*h,b=u*p;n[0]=d-b*o,n[4]=-a*p,n[8]=g+m*o,n[1]=m+g*o,n[5]=a*h,n[9]=b-d*o,n[2]=-a*u,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const d=a*h,m=a*p,g=o*h,b=o*p;n[0]=l*h,n[4]=g*u-m,n[8]=d*u+b,n[1]=l*p,n[5]=b*u+d,n[9]=m*u-g,n[2]=-u,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const d=a*l,m=a*u,g=o*l,b=o*u;n[0]=l*h,n[4]=b-d*p,n[8]=g*p+m,n[1]=p,n[5]=a*h,n[9]=-o*h,n[2]=-u*h,n[6]=m*p+g,n[10]=d-b*p}else if(e.order==="XZY"){const d=a*l,m=a*u,g=o*l,b=o*u;n[0]=l*h,n[4]=-p,n[8]=u*h,n[1]=d*p+b,n[5]=a*h,n[9]=m*p-g,n[2]=g*p-m,n[6]=o*h,n[10]=b*p+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ny,e,iy)}lookAt(e,n,i){const r=this.elements;return vn.subVectors(e,n),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),ji.crossVectors(i,vn),ji.lengthSq()===0&&(Math.abs(i.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),ji.crossVectors(i,vn)),ji.normalize(),Vo.crossVectors(vn,ji),r[0]=ji.x,r[4]=Vo.x,r[8]=vn.x,r[1]=ji.y,r[5]=Vo.y,r[9]=vn.y,r[2]=ji.z,r[6]=Vo.z,r[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],u=i[12],h=i[1],p=i[5],d=i[9],m=i[13],g=i[2],b=i[6],x=i[10],f=i[14],y=i[3],M=i[7],S=i[11],T=i[15],w=r[0],C=r[4],_=r[8],R=r[12],L=r[1],P=r[5],F=r[9],I=r[13],$=r[2],B=r[6],q=r[10],G=r[14],D=r[3],W=r[7],Y=r[11],ne=r[15];return s[0]=a*w+o*L+l*$+u*D,s[4]=a*C+o*P+l*B+u*W,s[8]=a*_+o*F+l*q+u*Y,s[12]=a*R+o*I+l*G+u*ne,s[1]=h*w+p*L+d*$+m*D,s[5]=h*C+p*P+d*B+m*W,s[9]=h*_+p*F+d*q+m*Y,s[13]=h*R+p*I+d*G+m*ne,s[2]=g*w+b*L+x*$+f*D,s[6]=g*C+b*P+x*B+f*W,s[10]=g*_+b*F+x*q+f*Y,s[14]=g*R+b*I+x*G+f*ne,s[3]=y*w+M*L+S*$+T*D,s[7]=y*C+M*P+S*B+T*W,s[11]=y*_+M*F+S*q+T*Y,s[15]=y*R+M*I+S*G+T*ne,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],u=e[13],h=e[2],p=e[6],d=e[10],m=e[14],g=e[3],b=e[7],x=e[11],f=e[15],y=l*m-u*d,M=o*m-u*p,S=o*d-l*p,T=a*m-u*h,w=a*d-l*h,C=a*p-o*h;return n*(b*y-x*M+f*S)-i*(g*y-x*T+f*w)+r*(g*M-b*T+f*C)-s*(g*S-b*w+x*C)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],u=e[6],h=e[10];return n*(a*h-o*u)-i*(s*h-o*l)+r*(s*u-a*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],h=e[8],p=e[9],d=e[10],m=e[11],g=e[12],b=e[13],x=e[14],f=e[15],y=n*o-i*a,M=n*l-r*a,S=n*u-s*a,T=i*l-r*o,w=i*u-s*o,C=r*u-s*l,_=h*b-p*g,R=h*x-d*g,L=h*f-m*g,P=p*x-d*b,F=p*f-m*b,I=d*f-m*x,$=y*I-M*F+S*P+T*L-w*R+C*_;if($===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/$;return e[0]=(o*I-l*F+u*P)*B,e[1]=(r*F-i*I-s*P)*B,e[2]=(b*C-x*w+f*T)*B,e[3]=(d*w-p*C-m*T)*B,e[4]=(l*L-a*I-u*R)*B,e[5]=(n*I-r*L+s*R)*B,e[6]=(x*S-g*C-f*M)*B,e[7]=(h*C-d*S+m*M)*B,e[8]=(a*F-o*L+u*_)*B,e[9]=(i*L-n*F-s*_)*B,e[10]=(g*w-b*S+f*y)*B,e[11]=(p*S-h*w-m*y)*B,e[12]=(o*R-a*P-l*_)*B,e[13]=(n*P-i*R+r*_)*B,e[14]=(b*M-g*T-x*y)*B,e[15]=(h*T-p*M+d*y)*B,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,u=s*a,h=s*o;return this.set(u*a+i,u*o-r*l,u*l+r*o,0,u*o+r*l,h*o+i,h*l-r*a,0,u*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,u=s+s,h=a+a,p=o+o,d=s*u,m=s*h,g=s*p,b=a*h,x=a*p,f=o*p,y=l*u,M=l*h,S=l*p,T=i.x,w=i.y,C=i.z;return r[0]=(1-(b+f))*T,r[1]=(m+S)*T,r[2]=(g-M)*T,r[3]=0,r[4]=(m-S)*w,r[5]=(1-(d+f))*w,r[6]=(x+y)*w,r[7]=0,r[8]=(g+M)*C,r[9]=(x-y)*C,r[10]=(1-(d+b))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let a=is.set(r[0],r[1],r[2]).length();const o=is.set(r[4],r[5],r[6]).length(),l=is.set(r[8],r[9],r[10]).length();s<0&&(a=-a),kn.copy(this);const u=1/a,h=1/o,p=1/l;return kn.elements[0]*=u,kn.elements[1]*=u,kn.elements[2]*=u,kn.elements[4]*=h,kn.elements[5]*=h,kn.elements[6]*=h,kn.elements[8]*=p,kn.elements[9]*=p,kn.elements[10]*=p,n.setFromRotationMatrix(kn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=ai,l=!1){const u=this.elements,h=2*s/(n-e),p=2*s/(i-r),d=(n+e)/(n-e),m=(i+r)/(i-r);let g,b;if(l)g=s/(a-s),b=a*s/(a-s);else if(o===ai)g=-(a+s)/(a-s),b=-2*a*s/(a-s);else if(o===rc)g=-a/(a-s),b=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=d,u[12]=0,u[1]=0,u[5]=p,u[9]=m,u[13]=0,u[2]=0,u[6]=0,u[10]=g,u[14]=b,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=ai,l=!1){const u=this.elements,h=2/(n-e),p=2/(i-r),d=-(n+e)/(n-e),m=-(i+r)/(i-r);let g,b;if(l)g=1/(a-s),b=a/(a-s);else if(o===ai)g=-2/(a-s),b=-(a+s)/(a-s);else if(o===rc)g=-1/(a-s),b=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=0,u[12]=d,u[1]=0,u[5]=p,u[9]=0,u[13]=m,u[2]=0,u[6]=0,u[10]=g,u[14]=b,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};ac.prototype.isMatrix4=!0;let Lt=ac;const is=new X,kn=new Lt,ny=new X(0,0,0),iy=new X(1,1,1),ji=new X,Vo=new X,vn=new X,lm=new Lt,cm=new Qs;class jr{constructor(e=0,n=0,i=0,r=jr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],u=r[5],h=r[9],p=r[2],d=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Xe(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:De("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return lm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return cm.setFromEuler(this),this.setFromQuaternion(cm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}jr.DEFAULT_ORDER="XYZ";class Cg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ry=0;const um=new X,rs=new Qs,mi=new Lt,Ho=new X,ga=new X,sy=new X,ay=new Qs,dm=new X(1,0,0),fm=new X(0,1,0),hm=new X(0,0,1),pm={type:"added"},oy={type:"removed"},ss={type:"childadded",child:null},ou={type:"childremoved",child:null};class En extends $r{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ry++}),this.uuid=Zs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=En.DEFAULT_UP.clone();const e=new X,n=new jr,i=new Qs,r=new X(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Lt},normalMatrix:{value:new Oe}}),this.matrix=new Lt,this.matrixWorld=new Lt,this.matrixAutoUpdate=En.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return rs.setFromAxisAngle(e,n),this.quaternion.multiply(rs),this}rotateOnWorldAxis(e,n){return rs.setFromAxisAngle(e,n),this.quaternion.premultiply(rs),this}rotateX(e){return this.rotateOnAxis(dm,e)}rotateY(e){return this.rotateOnAxis(fm,e)}rotateZ(e){return this.rotateOnAxis(hm,e)}translateOnAxis(e,n){return um.copy(e).applyQuaternion(this.quaternion),this.position.add(um.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(dm,e)}translateY(e){return this.translateOnAxis(fm,e)}translateZ(e){return this.translateOnAxis(hm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ho.copy(e):Ho.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ga.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(ga,Ho,this.up):mi.lookAt(Ho,ga,this.up),this.quaternion.setFromRotationMatrix(mi),r&&(mi.extractRotation(r.matrixWorld),rs.setFromRotationMatrix(mi),this.quaternion.premultiply(rs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(pm),ss.child=e,this.dispatchEvent(ss),ss.child=null):Qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(oy),ou.child=e,this.dispatchEvent(ou),ou.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(pm),ss.child=e,this.dispatchEvent(ss),ss.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ga,e,sy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ga,ay,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,h=l.length;u<h;u++){const p=l[u];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),u=a(e.textures),h=a(e.images),p=a(e.shapes),d=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const u in o){const h=o[u];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}En.DEFAULT_UP=new X(0,1,0);En.DEFAULT_MATRIX_AUTO_UPDATE=!0;En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Go extends En{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ly={type:"move"};class lu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Go,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Go,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Go,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const b of e.hand.values()){const x=n.getJointPose(b,i),f=this._getHandJoint(u,b);x!==null&&(f.matrix.fromArray(x.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=x.radius),f.visible=x!==null}const h=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],d=h.position.distanceTo(p.position),m=.02,g=.005;u.inputState.pinching&&d>m+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=m-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ly)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Go;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Rg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wi={h:0,s:0,l:0},jo={h:0,s:0,l:0};function cu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class nt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Ye.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ye.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Ye.workingColorSpace){if(e=Mh(e,1),n=Xe(n,0,1),i=Xe(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=cu(a,s,e+1/3),this.g=cu(a,s,e),this.b=cu(a,s,e-1/3)}return Ye.colorSpaceToWorking(this,r),this}setStyle(e,n=Rn){function i(s){s!==void 0&&parseFloat(s)<1&&De("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:De("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);De("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Rn){const i=Rg[e.toLowerCase()];return i!==void 0?this.setHex(i,n):De("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}copyLinearToSRGB(e){return this.r=Fs(e.r),this.g=Fs(e.g),this.b=Fs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rn){return Ye.workingToColorSpace(Kt.copy(this),e),Math.round(Xe(Kt.r*255,0,255))*65536+Math.round(Xe(Kt.g*255,0,255))*256+Math.round(Xe(Kt.b*255,0,255))}getHexString(e=Rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ye.workingColorSpace){Ye.workingToColorSpace(Kt.copy(this),n);const i=Kt.r,r=Kt.g,s=Kt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,u;const h=(o+a)/2;if(o===a)l=0,u=0;else{const p=a-o;switch(u=h<=.5?p/(a+o):p/(2-a-o),a){case i:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-i)/p+2;break;case s:l=(i-r)/p+4;break}l/=6}return e.h=l,e.s=u,e.l=h,e}getRGB(e,n=Ye.workingColorSpace){return Ye.workingToColorSpace(Kt.copy(this),n),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=Rn){Ye.workingToColorSpace(Kt.copy(this),e);const n=Kt.r,i=Kt.g,r=Kt.b;return e!==Rn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Wi),this.setHSL(Wi.h+e,Wi.s+n,Wi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Wi),e.getHSL(jo);const i=za(Wi.h,jo.h,n),r=za(Wi.s,jo.s,n),s=za(Wi.l,jo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kt=new nt;nt.NAMES=Rg;class cy extends En{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jr,this.environmentIntensity=1,this.environmentRotation=new jr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Bn=new X,xi=new X,uu=new X,gi=new X,as=new X,os=new X,mm=new X,du=new X,fu=new X,hu=new X,pu=new wt,mu=new wt,xu=new wt;class Wn{constructor(e=new X,n=new X,i=new X){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Bn.subVectors(e,n),r.cross(Bn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Bn.subVectors(r,n),xi.subVectors(i,n),uu.subVectors(e,n);const a=Bn.dot(Bn),o=Bn.dot(xi),l=Bn.dot(uu),u=xi.dot(xi),h=xi.dot(uu),p=a*u-o*o;if(p===0)return s.set(0,0,0),null;const d=1/p,m=(u*l-o*h)*d,g=(a*h-o*l)*d;return s.set(1-m-g,g,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,gi.x),l.addScaledVector(a,gi.y),l.addScaledVector(o,gi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return pu.setScalar(0),mu.setScalar(0),xu.setScalar(0),pu.fromBufferAttribute(e,n),mu.fromBufferAttribute(e,i),xu.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(pu,s.x),a.addScaledVector(mu,s.y),a.addScaledVector(xu,s.z),a}static isFrontFacing(e,n,i,r){return Bn.subVectors(i,n),xi.subVectors(e,n),Bn.cross(xi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),Bn.cross(xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Wn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Wn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;as.subVectors(r,i),os.subVectors(s,i),du.subVectors(e,i);const l=as.dot(du),u=os.dot(du);if(l<=0&&u<=0)return n.copy(i);fu.subVectors(e,r);const h=as.dot(fu),p=os.dot(fu);if(h>=0&&p<=h)return n.copy(r);const d=l*p-h*u;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),n.copy(i).addScaledVector(as,a);hu.subVectors(e,s);const m=as.dot(hu),g=os.dot(hu);if(g>=0&&m<=g)return n.copy(s);const b=m*u-l*g;if(b<=0&&u>=0&&g<=0)return o=u/(u-g),n.copy(i).addScaledVector(os,o);const x=h*g-m*p;if(x<=0&&p-h>=0&&m-g>=0)return mm.subVectors(s,r),o=(p-h)/(p-h+(m-g)),n.copy(r).addScaledVector(mm,o);const f=1/(x+b+d);return a=b*f,o=d*f,n.copy(i).addScaledVector(as,a).addScaledVector(os,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ho{constructor(e=new X(1/0,1/0,1/0),n=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(zn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(zn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=zn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,zn):zn.fromBufferAttribute(s,a),zn.applyMatrix4(e.matrixWorld),this.expandByPoint(zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Wo.copy(i.boundingBox)),Wo.applyMatrix4(e.matrixWorld),this.union(Wo)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zn),zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(va),Xo.subVectors(this.max,va),ls.subVectors(e.a,va),cs.subVectors(e.b,va),us.subVectors(e.c,va),Xi.subVectors(cs,ls),$i.subVectors(us,cs),Sr.subVectors(ls,us);let n=[0,-Xi.z,Xi.y,0,-$i.z,$i.y,0,-Sr.z,Sr.y,Xi.z,0,-Xi.x,$i.z,0,-$i.x,Sr.z,0,-Sr.x,-Xi.y,Xi.x,0,-$i.y,$i.x,0,-Sr.y,Sr.x,0];return!gu(n,ls,cs,us,Xo)||(n=[1,0,0,0,1,0,0,0,1],!gu(n,ls,cs,us,Xo))?!1:($o.crossVectors(Xi,$i),n=[$o.x,$o.y,$o.z],gu(n,ls,cs,us,Xo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const vi=[new X,new X,new X,new X,new X,new X,new X,new X],zn=new X,Wo=new ho,ls=new X,cs=new X,us=new X,Xi=new X,$i=new X,Sr=new X,va=new X,Xo=new X,$o=new X,Mr=new X;function gu(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Mr.fromArray(t,s);const o=r.x*Math.abs(Mr.x)+r.y*Math.abs(Mr.y)+r.z*Math.abs(Mr.z),l=e.dot(Mr),u=n.dot(Mr),h=i.dot(Mr);if(Math.max(-Math.max(l,u,h),Math.min(l,u,h))>o)return!1}return!0}const Nt=new X,qo=new $e;let uy=0;class di extends $r{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:uy++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Jp,this.updateRanges=[],this.gpuType=si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)qo.fromBufferAttribute(this,n),qo.applyMatrix3(e),this.setXY(n,qo.x,qo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyMatrix3(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyMatrix4(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyNormalMatrix(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.transformDirection(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ms(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=en(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ms(n,this.array)),n}setX(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ms(n,this.array)),n}setY(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ms(n,this.array)),n}setZ(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ms(n,this.array)),n}setW(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array),r=en(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array),r=en(r,this.array),s=en(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jp&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Ng extends di{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Pg extends di{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Ni extends di{constructor(e,n,i){super(new Float32Array(e),n,i)}}const dy=new ho,_a=new X,vu=new X;class bh{constructor(e=new X,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):dy.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_a.subVectors(e,this.center);const n=_a.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(_a,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_a.copy(e.center).add(vu)),this.expandByPoint(_a.copy(e.center).sub(vu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let fy=0;const Cn=new Lt,_u=new En,ds=new X,_n=new ho,ya=new ho,Ot=new X;class ki extends $r{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fy++}),this.uuid=Zs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(N2(e)?Pg:Ng)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Oe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Cn.makeRotationFromQuaternion(e),this.applyMatrix4(Cn),this}rotateX(e){return Cn.makeRotationX(e),this.applyMatrix4(Cn),this}rotateY(e){return Cn.makeRotationY(e),this.applyMatrix4(Cn),this}rotateZ(e){return Cn.makeRotationZ(e),this.applyMatrix4(Cn),this}translate(e,n,i){return Cn.makeTranslation(e,n,i),this.applyMatrix4(Cn),this}scale(e,n,i){return Cn.makeScale(e,n,i),this.applyMatrix4(Cn),this}lookAt(e){return _u.lookAt(e),_u.updateMatrix(),this.applyMatrix4(_u.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ds).negate(),this.translate(ds.x,ds.y,ds.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ni(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&De("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ho);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];_n.setFromBufferAttribute(s),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bh);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];ya.setFromBufferAttribute(o),this.morphTargetsRelative?(Ot.addVectors(_n.min,ya.min),_n.expandByPoint(Ot),Ot.addVectors(_n.max,ya.max),_n.expandByPoint(Ot)):(_n.expandByPoint(ya.min),_n.expandByPoint(ya.max))}_n.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Ot.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ot));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let u=0,h=o.count;u<h;u++)Ot.fromBufferAttribute(o,u),l&&(ds.fromBufferAttribute(e,u),Ot.add(ds)),r=Math.max(r,i.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new di(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let _=0;_<i.count;_++)o[_]=new X,l[_]=new X;const u=new X,h=new X,p=new X,d=new $e,m=new $e,g=new $e,b=new X,x=new X;function f(_,R,L){u.fromBufferAttribute(i,_),h.fromBufferAttribute(i,R),p.fromBufferAttribute(i,L),d.fromBufferAttribute(s,_),m.fromBufferAttribute(s,R),g.fromBufferAttribute(s,L),h.sub(u),p.sub(u),m.sub(d),g.sub(d);const P=1/(m.x*g.y-g.x*m.y);isFinite(P)&&(b.copy(h).multiplyScalar(g.y).addScaledVector(p,-m.y).multiplyScalar(P),x.copy(p).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(P),o[_].add(b),o[R].add(b),o[L].add(b),l[_].add(x),l[R].add(x),l[L].add(x))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let _=0,R=y.length;_<R;++_){const L=y[_],P=L.start,F=L.count;for(let I=P,$=P+F;I<$;I+=3)f(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const M=new X,S=new X,T=new X,w=new X;function C(_){T.fromBufferAttribute(r,_),w.copy(T);const R=o[_];M.copy(R),M.sub(T.multiplyScalar(T.dot(R))).normalize(),S.crossVectors(w,R);const P=S.dot(l[_])<0?-1:1;a.setXYZW(_,M.x,M.y,M.z,P)}for(let _=0,R=y.length;_<R;++_){const L=y[_],P=L.start,F=L.count;for(let I=P,$=P+F;I<$;I+=3)C(e.getX(I+0)),C(e.getX(I+1)),C(e.getX(I+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new di(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new X,s=new X,a=new X,o=new X,l=new X,u=new X,h=new X,p=new X;if(e)for(let d=0,m=e.count;d<m;d+=3){const g=e.getX(d+0),b=e.getX(d+1),x=e.getX(d+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,b),a.fromBufferAttribute(n,x),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,b),u.fromBufferAttribute(i,x),o.add(h),l.add(h),u.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(b,l.x,l.y,l.z),i.setXYZ(x,u.x,u.y,u.z)}else for(let d=0,m=n.count;d<m;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),a.fromBufferAttribute(n,d+2),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ot.fromBufferAttribute(e,n),Ot.normalize(),e.setXYZ(n,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(o,l){const u=o.array,h=o.itemSize,p=o.normalized,d=new u.constructor(l.length*h);let m=0,g=0;for(let b=0,x=l.length;b<x;b++){o.isInterleavedBufferAttribute?m=l[b]*o.data.stride+o.offset:m=l[b]*h;for(let f=0;f<h;f++)d[g++]=u[m++]}return new di(d,h,p)}if(this.index===null)return De("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ki,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],u=e(l,i);n.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const l=[],u=s[o];for(let h=0,p=u.length;h<p;h++){const d=u[h],m=e(d,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],h=[];for(let p=0,d=u.length;p<d;p++){const m=u[p];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const h=r[u];this.setAttribute(u,h.clone(n))}const s=e.morphAttributes;for(const u in s){const h=[],p=s[u];for(let d=0,m=p.length;d<m;d++)h.push(p[d].clone(n));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,h=a.length;u<h;u++){const p=a[u];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let hy=0;class bc extends $r{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hy++}),this.uuid=Zs(),this.name="",this.type="Material",this.blending=Is,this.side=mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cd,this.blendDst=Rd,this.blendEquation=Cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ts,this.stencilZFail=ts,this.stencilZPass=ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){De(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){De(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Is&&(i.blending=this.blending),this.side!==mr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Cd&&(i.blendSrc=this.blendSrc),this.blendDst!==Rd&&(i.blendDst=this.blendDst),this.blendEquation!==Cr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==js&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ts&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ts&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ts&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new nt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new $e().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new $e().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const _i=new X,yu=new X,Yo=new X,qi=new X,Su=new X,Ko=new X,Mu=new X;class py{constructor(e=new X,n=new X(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_i)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=_i.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(_i.copy(this.origin).addScaledVector(this.direction,n),_i.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){yu.copy(e).add(n).multiplyScalar(.5),Yo.copy(n).sub(e).normalize(),qi.copy(this.origin).sub(yu);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Yo),o=qi.dot(this.direction),l=-qi.dot(Yo),u=qi.lengthSq(),h=Math.abs(1-a*a);let p,d,m,g;if(h>0)if(p=a*l-o,d=a*o-l,g=s*h,p>=0)if(d>=-g)if(d<=g){const b=1/h;p*=b,d*=b,m=p*(p+a*d+2*o)+d*(a*p+d+2*l)+u}else d=s,p=Math.max(0,-(a*d+o)),m=-p*p+d*(d+2*l)+u;else d=-s,p=Math.max(0,-(a*d+o)),m=-p*p+d*(d+2*l)+u;else d<=-g?(p=Math.max(0,-(-a*s+o)),d=p>0?-s:Math.min(Math.max(-s,-l),s),m=-p*p+d*(d+2*l)+u):d<=g?(p=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+u):(p=Math.max(0,-(a*s+o)),d=p>0?s:Math.min(Math.max(-s,-l),s),m=-p*p+d*(d+2*l)+u);else d=a>0?-s:s,p=Math.max(0,-(a*d+o)),m=-p*p+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(yu).addScaledVector(Yo,d),m}intersectSphere(e,n){_i.subVectors(e.center,this.origin);const i=_i.dot(this.direction),r=_i.dot(_i)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const u=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),p>=0?(o=(e.min.z-d.z)*p,l=(e.max.z-d.z)*p):(o=(e.max.z-d.z)*p,l=(e.min.z-d.z)*p),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,_i)!==null}intersectTriangle(e,n,i,r,s){Su.subVectors(n,e),Ko.subVectors(i,e),Mu.crossVectors(Su,Ko);let a=this.direction.dot(Mu),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;qi.subVectors(this.origin,e);const l=o*this.direction.dot(Ko.crossVectors(qi,Ko));if(l<0)return null;const u=o*this.direction.dot(Su.cross(qi));if(u<0||l+u>a)return null;const h=-o*qi.dot(Mu);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Lg extends bc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jr,this.combine=ug,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xm=new Lt,Er=new py,Zo=new bh,gm=new X,Qo=new X,Jo=new X,el=new X,Eu=new X,tl=new X,vm=new X,nl=new X;class hi extends En{constructor(e=new ki,n=new Lg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){tl.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const h=o[l],p=s[l];h!==0&&(Eu.fromBufferAttribute(p,e),a?tl.addScaledVector(Eu,h):tl.addScaledVector(Eu.sub(n),h))}n.add(tl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Zo.copy(i.boundingSphere),Zo.applyMatrix4(s),Er.copy(e.ray).recast(e.near),!(Zo.containsPoint(Er.origin)===!1&&(Er.intersectSphere(Zo,gm)===null||Er.origin.distanceToSquared(gm)>(e.far-e.near)**2))&&(xm.copy(s).invert(),Er.copy(e.ray).applyMatrix4(xm),!(i.boundingBox!==null&&Er.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Er)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,b=d.length;g<b;g++){const x=d[g],f=a[x.materialIndex],y=Math.max(x.start,m.start),M=Math.min(o.count,Math.min(x.start+x.count,m.start+m.count));for(let S=y,T=M;S<T;S+=3){const w=o.getX(S),C=o.getX(S+1),_=o.getX(S+2);r=il(this,f,e,i,u,h,p,w,C,_),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const g=Math.max(0,m.start),b=Math.min(o.count,m.start+m.count);for(let x=g,f=b;x<f;x+=3){const y=o.getX(x),M=o.getX(x+1),S=o.getX(x+2);r=il(this,a,e,i,u,h,p,y,M,S),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,b=d.length;g<b;g++){const x=d[g],f=a[x.materialIndex],y=Math.max(x.start,m.start),M=Math.min(l.count,Math.min(x.start+x.count,m.start+m.count));for(let S=y,T=M;S<T;S+=3){const w=S,C=S+1,_=S+2;r=il(this,f,e,i,u,h,p,w,C,_),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const g=Math.max(0,m.start),b=Math.min(l.count,m.start+m.count);for(let x=g,f=b;x<f;x+=3){const y=x,M=x+1,S=x+2;r=il(this,a,e,i,u,h,p,y,M,S),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}}}function my(t,e,n,i,r,s,a,o){let l;if(e.side===pn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===mr,o),l===null)return null;nl.copy(o),nl.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(nl);return u<n.near||u>n.far?null:{distance:u,point:nl.clone(),object:t}}function il(t,e,n,i,r,s,a,o,l,u){t.getVertexPosition(o,Qo),t.getVertexPosition(l,Jo),t.getVertexPosition(u,el);const h=my(t,e,n,i,Qo,Jo,el,vm);if(h){const p=new X;Wn.getBarycoord(vm,Qo,Jo,el,p),r&&(h.uv=Wn.getInterpolatedAttribute(r,o,l,u,p,new $e)),s&&(h.uv1=Wn.getInterpolatedAttribute(s,o,l,u,p,new $e)),a&&(h.normal=Wn.getInterpolatedAttribute(a,o,l,u,p,new X),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c:u,normal:new X,materialIndex:0};Wn.getNormal(Qo,Jo,el,d.normal),h.face=d,h.barycoord=p}return h}class xy extends sn{constructor(e=null,n=1,i=1,r,s,a,o,l,u=Gt,h=Gt,p,d){super(null,a,o,l,u,h,r,s,p,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const bu=new X,gy=new X,vy=new Oe;class Ar{constructor(e=new X(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=bu.subVectors(i,n).cross(gy.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(bu),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||vy.getNormalMatrix(e),r=this.coplanarPoint(bu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const br=new bh,_y=new $e(.5,.5),rl=new X;class Dg{constructor(e=new Ar,n=new Ar,i=new Ar,r=new Ar,s=new Ar,a=new Ar){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ai,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],u=s[3],h=s[4],p=s[5],d=s[6],m=s[7],g=s[8],b=s[9],x=s[10],f=s[11],y=s[12],M=s[13],S=s[14],T=s[15];if(r[0].setComponents(u-a,m-h,f-g,T-y).normalize(),r[1].setComponents(u+a,m+h,f+g,T+y).normalize(),r[2].setComponents(u+o,m+p,f+b,T+M).normalize(),r[3].setComponents(u-o,m-p,f-b,T-M).normalize(),i)r[4].setComponents(l,d,x,S).normalize(),r[5].setComponents(u-l,m-d,f-x,T-S).normalize();else if(r[4].setComponents(u-l,m-d,f-x,T-S).normalize(),n===ai)r[5].setComponents(u+l,m+d,f+x,T+S).normalize();else if(n===rc)r[5].setComponents(l,d,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),br.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),br.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(br)}intersectsSprite(e){br.center.set(0,0,0);const n=_y.distanceTo(e.center);return br.radius=.7071067811865476+n,br.applyMatrix4(e.matrixWorld),this.intersectsSphere(br)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(rl.x=r.normal.x>0?e.max.x:e.min.x,rl.y=r.normal.y>0?e.max.y:e.min.y,rl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(rl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ig extends sn{constructor(e=[],n=Hr,i,r,s,a,o,l,u,h){super(e,n,i,r,s,a,o,l,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Xs extends sn{constructor(e,n,i=fi,r,s,a,o=Gt,l=Gt,u,h=Fi,p=1){if(h!==Fi&&h!==Ir)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:p};super(d,r,s,a,o,l,h,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Eh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class yy extends Xs{constructor(e,n=fi,i=Hr,r,s,a=Gt,o=Gt,l,u=Fi){const h={width:e,height:e,depth:1},p=[h,h,h,h,h,h];super(e,e,n,i,r,s,a,o,l,u),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Ug extends sn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class po extends ki{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],u=[],h=[],p=[];let d=0,m=0;g("z","y","x",-1,-1,i,n,e,a,s,0),g("z","y","x",1,-1,i,n,-e,a,s,1),g("x","z","y",1,1,e,i,n,r,a,2),g("x","z","y",1,-1,e,i,-n,r,a,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ni(u,3)),this.setAttribute("normal",new Ni(h,3)),this.setAttribute("uv",new Ni(p,2));function g(b,x,f,y,M,S,T,w,C,_,R){const L=S/C,P=T/_,F=S/2,I=T/2,$=w/2,B=C+1,q=_+1;let G=0,D=0;const W=new X;for(let Y=0;Y<q;Y++){const ne=Y*P-I;for(let re=0;re<B;re++){const Ie=re*L-F;W[b]=Ie*y,W[x]=ne*M,W[f]=$,u.push(W.x,W.y,W.z),W[b]=0,W[x]=0,W[f]=w>0?1:-1,h.push(W.x,W.y,W.z),p.push(re/C),p.push(1-Y/_),G+=1}}for(let Y=0;Y<_;Y++)for(let ne=0;ne<C;ne++){const re=d+ne+B*Y,Ie=d+ne+B*(Y+1),Ke=d+(ne+1)+B*(Y+1),je=d+(ne+1)+B*Y;l.push(re,Ie,je),l.push(Ie,Ke,je),D+=6}o.addGroup(m,D,R),m+=D,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new po(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class mo extends ki{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),u=o+1,h=l+1,p=e/o,d=n/l,m=[],g=[],b=[],x=[];for(let f=0;f<h;f++){const y=f*d-a;for(let M=0;M<u;M++){const S=M*p-s;g.push(S,-y,0),b.push(0,0,1),x.push(M/o),x.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<o;y++){const M=y+u*f,S=y+u*(f+1),T=y+1+u*(f+1),w=y+1+u*f;m.push(M,S,w),m.push(S,T,w)}this.setIndex(m),this.setAttribute("position",new Ni(g,3)),this.setAttribute("normal",new Ni(b,3)),this.setAttribute("uv",new Ni(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mo(e.width,e.height,e.widthSegments,e.heightSegments)}}function $s(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(_m(r))r.isRenderTargetTexture?(De("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(_m(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function tn(t){const e={};for(let n=0;n<t.length;n++){const i=$s(t[n]);for(const r in i)e[r]=i[r]}return e}function _m(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function Sy(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Fg(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const My={clone:$s,merge:tn};var Ey=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,by=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kn extends bc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ey,this.fragmentShader=by,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$s(e.uniforms),this.uniformsGroups=Sy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new nt().setHex(r.value);break;case"v2":this.uniforms[i].value=new $e().fromArray(r.value);break;case"v3":this.uniforms[i].value=new X().fromArray(r.value);break;case"v4":this.uniforms[i].value=new wt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Oe().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Lt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class wy extends Kn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ty extends bc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=M2,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ay extends bc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const sl=new X,al=new Qs,ei=new X;class Og extends En{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Lt,this.projectionMatrix=new Lt,this.projectionMatrixInverse=new Lt,this.coordinateSystem=ai,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(sl,al,ei),ei.x===1&&ei.y===1&&ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(sl,al,ei.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(sl,al,ei),ei.x===1&&ei.y===1&&ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(sl,al,ei.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Yi=new X,ym=new $e,Sm=new $e;class jn extends Og{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ao*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ba*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ao*2*Math.atan(Math.tan(Ba*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z),Yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z)}getViewSize(e,n){return this.getViewBounds(e,ym,Sm),n.subVectors(Sm,ym)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ba*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/u,r*=a.width/l,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class wh extends Og{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const fs=-90,hs=1;class Cy extends En{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new jn(fs,hs,e,n);r.layers=this.layers,this.add(r);const s=new jn(fs,hs,e,n);s.layers=this.layers,this.add(s);const a=new jn(fs,hs,e,n);a.layers=this.layers,this.add(a);const o=new jn(fs,hs,e,n);o.layers=this.layers,this.add(o);const l=new jn(fs,hs,e,n);l.layers=this.layers,this.add(l);const u=new jn(fs,hs,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const u of n)this.remove(u);if(e===ai)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===rc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,u,h]=this.children,p=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),i.texture.generateMipmaps=b,e.setRenderTarget(i,5,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(p,d,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Ry extends jn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Nh=class Nh{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};Nh.prototype.isMatrix2=!0;let Mm=Nh;function Em(t,e,n,i){const r=Ny(i);switch(n){case Eg:return t*e;case wg:return t*e/r.components*r.byteLength;case gh:return t*e/r.components*r.byteLength;case Gr:return t*e*2/r.components*r.byteLength;case vh:return t*e*2/r.components*r.byteLength;case bg:return t*e*3/r.components*r.byteLength;case Xn:return t*e*4/r.components*r.byteLength;case _h:return t*e*4/r.components*r.byteLength;case Ml:case El:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case bl:case wl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case zd:case Hd:return Math.max(t,16)*Math.max(e,8)/4;case Bd:case Vd:return Math.max(t,8)*Math.max(e,8)/2;case Gd:case jd:case Xd:case $d:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Wd:case ec:case qd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Yd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Kd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Zd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Qd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Jd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case ef:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case tf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case nf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case rf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case sf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case af:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case of:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case lf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case cf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case uf:case df:case ff:return Math.ceil(t/4)*Math.ceil(e/4)*16;case hf:case pf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case tc:case mf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Ny(t){switch(t){case Ln:case _g:return{byteLength:1,components:1};case ro:case yg:case Ui:return{byteLength:2,components:1};case mh:case xh:return{byteLength:2,components:4};case fi:case ph:case si:return{byteLength:4,components:1};case Sg:case Mg:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hh}}));typeof window<"u"&&(window.__THREE__?De("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function kg(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Py(t){const e=new WeakMap;function n(o,l){const u=o.array,h=o.usage,p=u.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,u,h),o.onUploadCallback();let m;if(u instanceof Float32Array)m=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)m=t.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=t.SHORT;else if(u instanceof Uint32Array)m=t.UNSIGNED_INT;else if(u instanceof Int32Array)m=t.INT;else if(u instanceof Int8Array)m=t.BYTE;else if(u instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,u){const h=l.array,p=l.updateRanges;if(t.bindBuffer(u,o),p.length===0)t.bufferSubData(u,0,h);else{p.sort((m,g)=>m.start-g.start);let d=0;for(let m=1;m<p.length;m++){const g=p[d],b=p[m];b.start<=g.start+g.count+1?g.count=Math.max(g.count,b.start+b.count-g.start):(++d,p[d]=b)}p.length=d+1;for(let m=0,g=p.length;m<g;m++){const b=p[m];t.bufferSubData(u,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=e.get(o);if(u===void 0)e.set(o,n(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,l),u.version=o.version}}return{get:r,remove:s,update:a}}var Ly=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Dy=`#ifdef USE_ALPHAHASH
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
#endif`,Iy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Uy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Oy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ky=`#ifdef USE_AOMAP
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
#endif`,By=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zy=`#ifdef USE_BATCHING
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
#endif`,Vy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Wy=`#ifdef USE_IRIDESCENCE
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
#endif`,Xy=`#ifdef USE_BUMPMAP
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
#endif`,$y=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,qy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ky=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Qy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Jy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,eS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,tS=`#define PI 3.141592653589793
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
} // validated`,nS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,iS=`vec3 transformedNormal = objectNormal;
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
#endif`,rS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,aS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,oS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lS="gl_FragColor = linearToOutputTexel( gl_FragColor );",cS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,uS=`#ifdef USE_ENVMAP
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
#endif`,dS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,fS=`#ifdef USE_ENVMAP
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
#endif`,hS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pS=`#ifdef USE_ENVMAP
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
#endif`,mS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_S=`#ifdef USE_GRADIENTMAP
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
}`,yS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,SS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,MS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ES=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,bS=`#ifdef USE_ENVMAP
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
#endif`,wS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,TS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,AS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,CS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,RS=`PhysicalMaterial material;
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
#endif`,NS=`uniform sampler2D dfgLUT;
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
}`,PS=`
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
#endif`,LS=`#if defined( RE_IndirectDiffuse )
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
#endif`,DS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,IS=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,US=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,FS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,OS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,BS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,VS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,HS=`#if defined( USE_POINTS_UV )
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
#endif`,GS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,WS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,XS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$S=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qS=`#ifdef USE_MORPHTARGETS
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
#endif`,YS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,KS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ZS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,QS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,JS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,tM=`#ifdef USE_NORMALMAP
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
#endif`,nM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,iM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,aM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,oM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,lM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,gM=`float getShadowMask() {
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
}`,vM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_M=`#ifdef USE_SKINNING
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
#endif`,yM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,SM=`#ifdef USE_SKINNING
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
#endif`,MM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,EM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,TM=`#ifdef USE_TRANSMISSION
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
#endif`,AM=`#ifdef USE_TRANSMISSION
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
#endif`,CM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,RM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,NM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,PM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const LM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,DM=`uniform sampler2D t2D;
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
}`,IM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,UM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,FM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kM=`#include <common>
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
}`,BM=`#if DEPTH_PACKING == 3200
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
}`,zM=`#define DISTANCE
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
}`,VM=`#define DISTANCE
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
}`,HM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,GM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jM=`uniform float scale;
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
}`,WM=`uniform vec3 diffuse;
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
}`,XM=`#include <common>
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
}`,$M=`uniform vec3 diffuse;
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
}`,qM=`#define LAMBERT
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
}`,YM=`#define LAMBERT
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
}`,KM=`#define MATCAP
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
}`,ZM=`#define MATCAP
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
}`,QM=`#define NORMAL
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
}`,JM=`#define NORMAL
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
}`,eE=`#define PHONG
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
}`,tE=`#define PHONG
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
}`,nE=`#define STANDARD
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
}`,iE=`#define STANDARD
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
}`,rE=`#define TOON
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
}`,sE=`#define TOON
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
}`,aE=`uniform float size;
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
}`,oE=`uniform vec3 diffuse;
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
}`,lE=`#include <common>
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
}`,cE=`uniform vec3 color;
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
}`,uE=`uniform float rotation;
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
}`,dE=`uniform vec3 diffuse;
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
}`,Be={alphahash_fragment:Ly,alphahash_pars_fragment:Dy,alphamap_fragment:Iy,alphamap_pars_fragment:Uy,alphatest_fragment:Fy,alphatest_pars_fragment:Oy,aomap_fragment:ky,aomap_pars_fragment:By,batching_pars_vertex:zy,batching_vertex:Vy,begin_vertex:Hy,beginnormal_vertex:Gy,bsdfs:jy,iridescence_fragment:Wy,bumpmap_pars_fragment:Xy,clipping_planes_fragment:$y,clipping_planes_pars_fragment:qy,clipping_planes_pars_vertex:Yy,clipping_planes_vertex:Ky,color_fragment:Zy,color_pars_fragment:Qy,color_pars_vertex:Jy,color_vertex:eS,common:tS,cube_uv_reflection_fragment:nS,defaultnormal_vertex:iS,displacementmap_pars_vertex:rS,displacementmap_vertex:sS,emissivemap_fragment:aS,emissivemap_pars_fragment:oS,colorspace_fragment:lS,colorspace_pars_fragment:cS,envmap_fragment:uS,envmap_common_pars_fragment:dS,envmap_pars_fragment:fS,envmap_pars_vertex:hS,envmap_physical_pars_fragment:bS,envmap_vertex:pS,fog_vertex:mS,fog_pars_vertex:xS,fog_fragment:gS,fog_pars_fragment:vS,gradientmap_pars_fragment:_S,lightmap_pars_fragment:yS,lights_lambert_fragment:SS,lights_lambert_pars_fragment:MS,lights_pars_begin:ES,lights_toon_fragment:wS,lights_toon_pars_fragment:TS,lights_phong_fragment:AS,lights_phong_pars_fragment:CS,lights_physical_fragment:RS,lights_physical_pars_fragment:NS,lights_fragment_begin:PS,lights_fragment_maps:LS,lights_fragment_end:DS,lightprobes_pars_fragment:IS,logdepthbuf_fragment:US,logdepthbuf_pars_fragment:FS,logdepthbuf_pars_vertex:OS,logdepthbuf_vertex:kS,map_fragment:BS,map_pars_fragment:zS,map_particle_fragment:VS,map_particle_pars_fragment:HS,metalnessmap_fragment:GS,metalnessmap_pars_fragment:jS,morphinstance_vertex:WS,morphcolor_vertex:XS,morphnormal_vertex:$S,morphtarget_pars_vertex:qS,morphtarget_vertex:YS,normal_fragment_begin:KS,normal_fragment_maps:ZS,normal_pars_fragment:QS,normal_pars_vertex:JS,normal_vertex:eM,normalmap_pars_fragment:tM,clearcoat_normal_fragment_begin:nM,clearcoat_normal_fragment_maps:iM,clearcoat_pars_fragment:rM,iridescence_pars_fragment:sM,opaque_fragment:aM,packing:oM,premultiplied_alpha_fragment:lM,project_vertex:cM,dithering_fragment:uM,dithering_pars_fragment:dM,roughnessmap_fragment:fM,roughnessmap_pars_fragment:hM,shadowmap_pars_fragment:pM,shadowmap_pars_vertex:mM,shadowmap_vertex:xM,shadowmask_pars_fragment:gM,skinbase_vertex:vM,skinning_pars_vertex:_M,skinning_vertex:yM,skinnormal_vertex:SM,specularmap_fragment:MM,specularmap_pars_fragment:EM,tonemapping_fragment:bM,tonemapping_pars_fragment:wM,transmission_fragment:TM,transmission_pars_fragment:AM,uv_pars_fragment:CM,uv_pars_vertex:RM,uv_vertex:NM,worldpos_vertex:PM,background_vert:LM,background_frag:DM,backgroundCube_vert:IM,backgroundCube_frag:UM,cube_vert:FM,cube_frag:OM,depth_vert:kM,depth_frag:BM,distance_vert:zM,distance_frag:VM,equirect_vert:HM,equirect_frag:GM,linedashed_vert:jM,linedashed_frag:WM,meshbasic_vert:XM,meshbasic_frag:$M,meshlambert_vert:qM,meshlambert_frag:YM,meshmatcap_vert:KM,meshmatcap_frag:ZM,meshnormal_vert:QM,meshnormal_frag:JM,meshphong_vert:eE,meshphong_frag:tE,meshphysical_vert:nE,meshphysical_frag:iE,meshtoon_vert:rE,meshtoon_frag:sE,points_vert:aE,points_frag:oE,shadow_vert:lE,shadow_frag:cE,sprite_vert:uE,sprite_frag:dE},ye={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new X},probesMax:{value:new X},probesResolution:{value:new X}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},ii={basic:{uniforms:tn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:tn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new nt(0)},envMapIntensity:{value:1}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:tn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:tn([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:tn([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new nt(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:tn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:tn([ye.points,ye.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:tn([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:tn([ye.common,ye.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:tn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:tn([ye.sprite,ye.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distance:{uniforms:tn([ye.common,ye.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distance_vert,fragmentShader:Be.distance_frag},shadow:{uniforms:tn([ye.lights,ye.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};ii.physical={uniforms:tn([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const ol={r:0,b:0,g:0},fE=new Lt,Bg=new Oe;Bg.set(-1,0,0,0,1,0,0,0,1);function hE(t,e,n,i,r,s){const a=new nt(0);let o=r===!0?0:1,l,u,h=null,p=0,d=null;function m(y){let M=y.isScene===!0?y.background:null;if(M&&M.isTexture){const S=y.backgroundBlurriness>0;M=e.get(M,S)}return M}function g(y){let M=!1;const S=m(y);S===null?x(a,o):S&&S.isColor&&(x(S,1),M=!0);const T=t.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function b(y,M){const S=m(M);S&&(S.isCubeTexture||S.mapping===Ec)?(u===void 0&&(u=new hi(new po(1,1,1),new Kn({name:"BackgroundCubeMaterial",uniforms:$s(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=S,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(fE.makeRotationFromEuler(M.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(Bg),u.material.toneMapped=Ye.getTransfer(S.colorSpace)!==rt,(h!==S||p!==S.version||d!==t.toneMapping)&&(u.material.needsUpdate=!0,h=S,p=S.version,d=t.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new hi(new mo(2,2),new Kn({name:"BackgroundMaterial",uniforms:$s(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:mr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Ye.getTransfer(S.colorSpace)!==rt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||p!==S.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,h=S,p=S.version,d=t.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function x(y,M){y.getRGB(ol,Fg(t)),n.buffers.color.setClear(ol.r,ol.g,ol.b,M,s)}function f(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,M=1){a.set(y),o=M,x(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,x(a,o)},render:g,addToRenderList:b,dispose:f}}function pE(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(P,F,I,$,B){let q=!1;const G=p(P,$,I,F);s!==G&&(s=G,u(s.object)),q=m(P,$,I,B),q&&g(P,$,I,B),B!==null&&e.update(B,t.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,S(P,F,I,$),B!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return t.createVertexArray()}function u(P){return t.bindVertexArray(P)}function h(P){return t.deleteVertexArray(P)}function p(P,F,I,$){const B=$.wireframe===!0;let q=i[F.id];q===void 0&&(q={},i[F.id]=q);const G=P.isInstancedMesh===!0?P.id:0;let D=q[G];D===void 0&&(D={},q[G]=D);let W=D[I.id];W===void 0&&(W={},D[I.id]=W);let Y=W[B];return Y===void 0&&(Y=d(l()),W[B]=Y),Y}function d(P){const F=[],I=[],$=[];for(let B=0;B<n;B++)F[B]=0,I[B]=0,$[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:I,attributeDivisors:$,object:P,attributes:{},index:null}}function m(P,F,I,$){const B=s.attributes,q=F.attributes;let G=0;const D=I.getAttributes();for(const W in D)if(D[W].location>=0){const ne=B[W];let re=q[W];if(re===void 0&&(W==="instanceMatrix"&&P.instanceMatrix&&(re=P.instanceMatrix),W==="instanceColor"&&P.instanceColor&&(re=P.instanceColor)),ne===void 0||ne.attribute!==re||re&&ne.data!==re.data)return!0;G++}return s.attributesNum!==G||s.index!==$}function g(P,F,I,$){const B={},q=F.attributes;let G=0;const D=I.getAttributes();for(const W in D)if(D[W].location>=0){let ne=q[W];ne===void 0&&(W==="instanceMatrix"&&P.instanceMatrix&&(ne=P.instanceMatrix),W==="instanceColor"&&P.instanceColor&&(ne=P.instanceColor));const re={};re.attribute=ne,ne&&ne.data&&(re.data=ne.data),B[W]=re,G++}s.attributes=B,s.attributesNum=G,s.index=$}function b(){const P=s.newAttributes;for(let F=0,I=P.length;F<I;F++)P[F]=0}function x(P){f(P,0)}function f(P,F){const I=s.newAttributes,$=s.enabledAttributes,B=s.attributeDivisors;I[P]=1,$[P]===0&&(t.enableVertexAttribArray(P),$[P]=1),B[P]!==F&&(t.vertexAttribDivisor(P,F),B[P]=F)}function y(){const P=s.newAttributes,F=s.enabledAttributes;for(let I=0,$=F.length;I<$;I++)F[I]!==P[I]&&(t.disableVertexAttribArray(I),F[I]=0)}function M(P,F,I,$,B,q,G){G===!0?t.vertexAttribIPointer(P,F,I,B,q):t.vertexAttribPointer(P,F,I,$,B,q)}function S(P,F,I,$){b();const B=$.attributes,q=I.getAttributes(),G=F.defaultAttributeValues;for(const D in q){const W=q[D];if(W.location>=0){let Y=B[D];if(Y===void 0&&(D==="instanceMatrix"&&P.instanceMatrix&&(Y=P.instanceMatrix),D==="instanceColor"&&P.instanceColor&&(Y=P.instanceColor)),Y!==void 0){const ne=Y.normalized,re=Y.itemSize,Ie=e.get(Y);if(Ie===void 0)continue;const Ke=Ie.buffer,je=Ie.type,Q=Ie.bytesPerElement,ce=je===t.INT||je===t.UNSIGNED_INT||Y.gpuType===ph;if(Y.isInterleavedBufferAttribute){const se=Y.data,Le=se.stride,Fe=Y.offset;if(se.isInstancedInterleavedBuffer){for(let Ne=0;Ne<W.locationSize;Ne++)f(W.location+Ne,se.meshPerAttribute);P.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Ne=0;Ne<W.locationSize;Ne++)x(W.location+Ne);t.bindBuffer(t.ARRAY_BUFFER,Ke);for(let Ne=0;Ne<W.locationSize;Ne++)M(W.location+Ne,re/W.locationSize,je,ne,Le*Q,(Fe+re/W.locationSize*Ne)*Q,ce)}else{if(Y.isInstancedBufferAttribute){for(let se=0;se<W.locationSize;se++)f(W.location+se,Y.meshPerAttribute);P.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let se=0;se<W.locationSize;se++)x(W.location+se);t.bindBuffer(t.ARRAY_BUFFER,Ke);for(let se=0;se<W.locationSize;se++)M(W.location+se,re/W.locationSize,je,ne,re*Q,re/W.locationSize*se*Q,ce)}}else if(G!==void 0){const ne=G[D];if(ne!==void 0)switch(ne.length){case 2:t.vertexAttrib2fv(W.location,ne);break;case 3:t.vertexAttrib3fv(W.location,ne);break;case 4:t.vertexAttrib4fv(W.location,ne);break;default:t.vertexAttrib1fv(W.location,ne)}}}}y()}function T(){R();for(const P in i){const F=i[P];for(const I in F){const $=F[I];for(const B in $){const q=$[B];for(const G in q)h(q[G].object),delete q[G];delete $[B]}}delete i[P]}}function w(P){if(i[P.id]===void 0)return;const F=i[P.id];for(const I in F){const $=F[I];for(const B in $){const q=$[B];for(const G in q)h(q[G].object),delete q[G];delete $[B]}}delete i[P.id]}function C(P){for(const F in i){const I=i[F];for(const $ in I){const B=I[$];if(B[P.id]===void 0)continue;const q=B[P.id];for(const G in q)h(q[G].object),delete q[G];delete B[P.id]}}}function _(P){for(const F in i){const I=i[F],$=P.isInstancedMesh===!0?P.id:0,B=I[$];if(B!==void 0){for(const q in B){const G=B[q];for(const D in G)h(G[D].object),delete G[D];delete B[q]}delete I[$],Object.keys(I).length===0&&delete i[F]}}}function R(){L(),a=!0,s!==r&&(s=r,u(s.object))}function L(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:R,resetDefaultState:L,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfObject:_,releaseStatesOfProgram:C,initAttributes:b,enableAttribute:x,disableUnusedAttributes:y}}function mE(t,e,n){let i;function r(l){i=l}function s(l,u){t.drawArrays(i,l,u),n.update(u,i,1)}function a(l,u,h){h!==0&&(t.drawArraysInstanced(i,l,u,h),n.update(u,i,h))}function o(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let d=0;for(let m=0;m<h;m++)d+=u[m];n.update(d,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function xE(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==Xn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const _=C===Ui&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Ln&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==si&&!_)}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const h=l(u);h!==u&&(De("WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const p=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&d===!1&&De("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),y=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),M=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),T=t.getParameter(t.MAX_SAMPLES),w=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:p,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:g,maxTextureSize:b,maxCubemapSize:x,maxAttributes:f,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:S,maxSamples:T,samples:w}}function gE(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Ar,o=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){const m=p.length!==0||d||i!==0||r;return r=d,i=p.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,d){n=h(p,d,0)},this.setState=function(p,d,m){const g=p.clippingPlanes,b=p.clipIntersection,x=p.clipShadows,f=t.get(p);if(!r||g===null||g.length===0||s&&!x)s?h(null):u();else{const y=s?0:i,M=y*4;let S=f.clippingState||null;l.value=S,S=h(g,d,M,m);for(let T=0;T!==M;++T)S[T]=n[T];f.clippingState=S,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=y}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(p,d,m,g){const b=p!==null?p.length:0;let x=null;if(b!==0){if(x=l.value,g!==!0||x===null){const f=m+b*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(x===null||x.length<f)&&(x=new Float32Array(f));for(let M=0,S=m;M!==b;++M,S+=4)a.copy(p[M]).applyMatrix4(y,o),a.normal.toArray(x,S),x[S+3]=a.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,x}}const ir=4,bm=[.125,.215,.35,.446,.526,.582],Rr=20,vE=256,Sa=new wh,wm=new nt;let wu=null,Tu=0,Au=0,Cu=!1;const _E=new X;class Tm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=_E}=s;wu=this._renderer.getRenderTarget(),Tu=this._renderer.getActiveCubeFace(),Au=this._renderer.getActiveMipmapLevel(),Cu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(wu,Tu,Au),this._renderer.xr.enabled=Cu,e.scissorTest=!1,ps(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Hr||e.mapping===Ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wu=this._renderer.getRenderTarget(),Tu=this._renderer.getActiveCubeFace(),Au=this._renderer.getActiveMipmapLevel(),Cu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:Ui,format:Xn,colorSpace:nc,depthBuffer:!1},r=Am(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Am(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=yE(s)),this._blurMaterial=ME(s,e,n),this._ggxMaterial=SE(s,e,n)}return r}_compileMaterial(e){const n=new hi(new ki,e);this._renderer.compile(n,Sa)}_sceneToCubeUV(e,n,i,r,s){const l=new jn(90,1,n,i),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,d=p.autoClear,m=p.toneMapping;p.getClearColor(wm),p.toneMapping=ci,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(r),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new hi(new po,new Lg({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,x=b.material;let f=!1;const y=e.background;y?y.isColor&&(x.color.copy(y),e.background=null,f=!0):(x.color.copy(wm),f=!0);for(let M=0;M<6;M++){const S=M%3;S===0?(l.up.set(0,u[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[M],s.y,s.z)):S===1?(l.up.set(0,0,u[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[M],s.z)):(l.up.set(0,u[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[M]));const T=this._cubeSize;ps(r,S*T,M>2?T:0,T,T),p.setRenderTarget(r),f&&p.render(b,l),p.render(e,l)}p.toneMapping=m,p.autoClear=d,e.background=y}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Hr||e.mapping===Ws;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cm());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ps(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,Sa)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,u=i/(this._lodMeshes.length-1),h=n/(this._lodMeshes.length-1),p=Math.sqrt(u*u-h*h),d=0+u*1.25,m=p*d,{_lodMax:g}=this,b=this._sizeLods[i],x=3*b*(i>g-ir?i-g+ir:0),f=4*(this._cubeSize-b);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=g-n,ps(s,x,f,3*b,2*b),r.setRenderTarget(s),r.render(o,Sa),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-i,ps(e,x,f,3*b,2*b),r.setRenderTarget(e),r.render(o,Sa)}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Qe("blur direction must be either latitudinal or longitudinal!");const h=3,p=this._lodMeshes[r];p.material=u;const d=u.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Rr-1),b=s/g,x=isFinite(s)?1+Math.floor(h*b):Rr;x>Rr&&De(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Rr}`);const f=[];let y=0;for(let C=0;C<Rr;++C){const _=C/b,R=Math.exp(-_*_/2);f.push(R),C===0?y+=R:C<x&&(y+=2*R)}for(let C=0;C<f.length;C++)f[C]=f[C]/y;d.envMap.value=e.texture,d.samples.value=x,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-i;const S=this._sizeLods[r],T=3*S*(r>M-ir?r-M+ir:0),w=4*(this._cubeSize-S);ps(n,T,w,3*S,2*S),l.setRenderTarget(n),l.render(p,Sa)}}function yE(t){const e=[],n=[],i=[];let r=t;const s=t-ir+1+bm.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>t-ir?l=bm[a-t+ir-1]:a===0&&(l=0),n.push(l);const u=1/(o-2),h=-u,p=1+u,d=[h,h,p,h,p,p,h,h,p,p,h,p],m=6,g=6,b=3,x=2,f=1,y=new Float32Array(b*g*m),M=new Float32Array(x*g*m),S=new Float32Array(f*g*m);for(let w=0;w<m;w++){const C=w%3*2/3-1,_=w>2?0:-1,R=[C,_,0,C+2/3,_,0,C+2/3,_+1,0,C,_,0,C+2/3,_+1,0,C,_+1,0];y.set(R,b*g*w),M.set(d,x*g*w);const L=[w,w,w,w,w,w];S.set(L,f*g*w)}const T=new ki;T.setAttribute("position",new di(y,b)),T.setAttribute("uv",new di(M,x)),T.setAttribute("faceIndex",new di(S,f)),i.push(new hi(T,null)),r>ir&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function Am(t,e,n){const i=new ui(t,e,n);return i.texture.mapping=Ec,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ps(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function SE(t,e,n){return new Kn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:vE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:wc(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function ME(t,e,n){const i=new Float32Array(Rr),r=new X(0,1,0);return new Kn({name:"SphericalGaussianBlur",defines:{n:Rr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:wc(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Cm(){return new Kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wc(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Rm(){return new Kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function wc(){return`

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
	`}class zg extends ui{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ig(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new po(5,5,5),s=new Kn({name:"CubemapFromEquirect",uniforms:$s(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pn,blending:Ci});s.uniforms.tEquirect.value=n;const a=new hi(r,s),o=n.minFilter;return n.minFilter===Dr&&(n.minFilter=Qt),new Cy(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}function EE(t){let e=new WeakMap,n=new WeakMap,i=null;function r(d,m=!1){return d==null?null:m?a(d):s(d)}function s(d){if(d&&d.isTexture){const m=d.mapping;if(m===eu||m===tu)if(e.has(d)){const g=e.get(d).texture;return o(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const b=new zg(g.height);return b.fromEquirectangularTexture(t,d),e.set(d,b),d.addEventListener("dispose",u),o(b.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const m=d.mapping,g=m===eu||m===tu,b=m===Hr||m===Ws;if(g||b){let x=n.get(d);const f=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==f)return i===null&&(i=new Tm(t)),x=g?i.fromEquirectangular(d,x):i.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,n.set(d,x),x.texture;if(x!==void 0)return x.texture;{const y=d.image;return g&&y&&y.height>0||b&&y&&l(y)?(i===null&&(i=new Tm(t)),x=g?i.fromEquirectangular(d):i.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,n.set(d,x),d.addEventListener("dispose",h),x.texture):null}}}return d}function o(d,m){return m===eu?d.mapping=Hr:m===tu&&(d.mapping=Ws),d}function l(d){let m=0;const g=6;for(let b=0;b<g;b++)d[b]!==void 0&&m++;return m===g}function u(d){const m=d.target;m.removeEventListener("dispose",u);const g=e.get(m);g!==void 0&&(e.delete(m),g.dispose())}function h(d){const m=d.target;m.removeEventListener("dispose",h);const g=n.get(m);g!==void 0&&(n.delete(m),g.dispose())}function p(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:p}}function bE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Us("WebGLRenderer: "+i+" extension not supported."),r}}}function wE(t,e,n,i){const r={},s=new WeakMap;function a(p){const d=p.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function o(p,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,n.memory.geometries++),d}function l(p){const d=p.attributes;for(const m in d)e.update(d[m],t.ARRAY_BUFFER)}function u(p){const d=[],m=p.index,g=p.attributes.position;let b=0;if(g===void 0)return;if(m!==null){const y=m.array;b=m.version;for(let M=0,S=y.length;M<S;M+=3){const T=y[M+0],w=y[M+1],C=y[M+2];d.push(T,w,w,C,C,T)}}else{const y=g.array;b=g.version;for(let M=0,S=y.length/3-1;M<S;M+=3){const T=M+0,w=M+1,C=M+2;d.push(T,w,w,C,C,T)}}const x=new(g.count>=65535?Pg:Ng)(d,1);x.version=b;const f=s.get(p);f&&e.remove(f),s.set(p,x)}function h(p){const d=s.get(p);if(d){const m=p.index;m!==null&&d.version<m.version&&u(p)}else u(p);return s.get(p)}return{get:o,update:l,getWireframeAttribute:h}}function TE(t,e,n){let i;function r(p){i=p}let s,a;function o(p){s=p.type,a=p.bytesPerElement}function l(p,d){t.drawElements(i,d,s,p*a),n.update(d,i,1)}function u(p,d,m){m!==0&&(t.drawElementsInstanced(i,d,s,p*a,m),n.update(d,i,m))}function h(p,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,p,0,m);let b=0;for(let x=0;x<m;x++)b+=d[x];n.update(b,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=h}function AE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:Qe("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function CE(t,e,n){const i=new WeakMap,r=new wt;function s(a,o,l){const u=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0;let d=i.get(o);if(d===void 0||d.count!==p){let L=function(){_.dispose(),i.delete(o),o.removeEventListener("dispose",L)};var m=L;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,b=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let S=0;g===!0&&(S=1),b===!0&&(S=2),x===!0&&(S=3);let T=o.attributes.position.count*S,w=1;T>e.maxTextureSize&&(w=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const C=new Float32Array(T*w*4*p),_=new Ag(C,T,w,p);_.type=si,_.needsUpdate=!0;const R=S*4;for(let P=0;P<p;P++){const F=f[P],I=y[P],$=M[P],B=T*w*4*P;for(let q=0;q<F.count;q++){const G=q*R;g===!0&&(r.fromBufferAttribute(F,q),C[B+G+0]=r.x,C[B+G+1]=r.y,C[B+G+2]=r.z,C[B+G+3]=0),b===!0&&(r.fromBufferAttribute(I,q),C[B+G+4]=r.x,C[B+G+5]=r.y,C[B+G+6]=r.z,C[B+G+7]=0),x===!0&&(r.fromBufferAttribute($,q),C[B+G+8]=r.x,C[B+G+9]=r.y,C[B+G+10]=r.z,C[B+G+11]=$.itemSize===4?r.w:1)}}d={count:p,texture:_,size:new $e(T,w)},i.set(o,d),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let g=0;for(let x=0;x<u.length;x++)g+=u[x];const b=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",b),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function RE(t,e,n,i,r){let s=new WeakMap;function a(u){const h=r.render.frame,p=u.geometry,d=e.get(u,p);if(s.get(d)!==h&&(e.update(d),s.set(d,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),s.get(u)!==h&&(n.update(u.instanceMatrix,t.ARRAY_BUFFER),u.instanceColor!==null&&n.update(u.instanceColor,t.ARRAY_BUFFER),s.set(u,h))),u.isSkinnedMesh){const m=u.skeleton;s.get(m)!==h&&(m.update(),s.set(m,h))}return d}function o(){s=new WeakMap}function l(u){const h=u.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:a,dispose:o}}const NE={[dg]:"LINEAR_TONE_MAPPING",[fg]:"REINHARD_TONE_MAPPING",[hg]:"CINEON_TONE_MAPPING",[pg]:"ACES_FILMIC_TONE_MAPPING",[xg]:"AGX_TONE_MAPPING",[gg]:"NEUTRAL_TONE_MAPPING",[mg]:"CUSTOM_TONE_MAPPING"};function PE(t,e,n,i,r,s){const a=new ui(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,depthTexture:r?new Xs(e,n):void 0}),o=new ui(e,n,{type:Ui,depthBuffer:!1,stencilBuffer:!1}),l=new ki;l.setAttribute("position",new Ni([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Ni([0,2,0,0,2,0],2));const u=new wy({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new hi(l,u),p=new wh(-1,1,1,-1,0,1);let d=null,m=null,g=!1,b,x=null,f=[],y=!1;this.setSize=function(M,S){a.setSize(M,S),o.setSize(M,S);for(let T=0;T<f.length;T++){const w=f[T];w.setSize&&w.setSize(M,S)}},this.setEffects=function(M){f=M,y=f.length>0&&f[0].isRenderPass===!0;const S=a.width,T=a.height;for(let w=0;w<f.length;w++){const C=f[w];C.setSize&&C.setSize(S,T)}},this.begin=function(M,S){if(g||M.toneMapping===ci&&f.length===0)return!1;if(x=S,S!==null){const T=S.width,w=S.height;(a.width!==T||a.height!==w)&&this.setSize(T,w)}return y===!1&&M.setRenderTarget(a),b=M.toneMapping,M.toneMapping=ci,!0},this.hasRenderPass=function(){return y},this.end=function(M,S){M.toneMapping=b,g=!0;let T=a,w=o;for(let C=0;C<f.length;C++){const _=f[C];if(_.enabled!==!1&&(_.render(M,w,T,S),_.needsSwap!==!1)){const R=T;T=w,w=R}}if(d!==M.outputColorSpace||m!==M.toneMapping){d=M.outputColorSpace,m=M.toneMapping,u.defines={},Ye.getTransfer(d)===rt&&(u.defines.SRGB_TRANSFER="");const C=NE[m];C&&(u.defines[C]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=T.texture,M.setRenderTarget(x),M.render(h,p),x=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),u.dispose()}}const Vg=new sn,xf=new Xs(1,1),Hg=new Ag,Gg=new ty,jg=new Ig,Nm=[],Pm=[],Lm=new Float32Array(16),Dm=new Float32Array(9),Im=new Float32Array(4);function Js(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Nm[r];if(s===void 0&&(s=new Float32Array(r),Nm[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Ut(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ft(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Tc(t,e){let n=Pm[e];n===void 0&&(n=new Int32Array(e),Pm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function LE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function DE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2fv(this.addr,e),Ft(n,e)}}function IE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ut(n,e))return;t.uniform3fv(this.addr,e),Ft(n,e)}}function UE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4fv(this.addr,e),Ft(n,e)}}function FE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ft(n,e)}else{if(Ut(n,i))return;Im.set(i),t.uniformMatrix2fv(this.addr,!1,Im),Ft(n,i)}}function OE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ft(n,e)}else{if(Ut(n,i))return;Dm.set(i),t.uniformMatrix3fv(this.addr,!1,Dm),Ft(n,i)}}function kE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ft(n,e)}else{if(Ut(n,i))return;Lm.set(i),t.uniformMatrix4fv(this.addr,!1,Lm),Ft(n,i)}}function BE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function zE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2iv(this.addr,e),Ft(n,e)}}function VE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ut(n,e))return;t.uniform3iv(this.addr,e),Ft(n,e)}}function HE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4iv(this.addr,e),Ft(n,e)}}function GE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function jE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2uiv(this.addr,e),Ft(n,e)}}function WE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ut(n,e))return;t.uniform3uiv(this.addr,e),Ft(n,e)}}function XE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4uiv(this.addr,e),Ft(n,e)}}function $E(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(xf.compareFunction=n.isReversedDepthBuffer()?Sh:yh,s=xf):s=Vg,n.setTexture2D(e||s,r)}function qE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Gg,r)}function YE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||jg,r)}function KE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Hg,r)}function ZE(t){switch(t){case 5126:return LE;case 35664:return DE;case 35665:return IE;case 35666:return UE;case 35674:return FE;case 35675:return OE;case 35676:return kE;case 5124:case 35670:return BE;case 35667:case 35671:return zE;case 35668:case 35672:return VE;case 35669:case 35673:return HE;case 5125:return GE;case 36294:return jE;case 36295:return WE;case 36296:return XE;case 35678:case 36198:case 36298:case 36306:case 35682:return $E;case 35679:case 36299:case 36307:return qE;case 35680:case 36300:case 36308:case 36293:return YE;case 36289:case 36303:case 36311:case 36292:return KE}}function QE(t,e){t.uniform1fv(this.addr,e)}function JE(t,e){const n=Js(e,this.size,2);t.uniform2fv(this.addr,n)}function e3(t,e){const n=Js(e,this.size,3);t.uniform3fv(this.addr,n)}function t3(t,e){const n=Js(e,this.size,4);t.uniform4fv(this.addr,n)}function n3(t,e){const n=Js(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function i3(t,e){const n=Js(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function r3(t,e){const n=Js(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function s3(t,e){t.uniform1iv(this.addr,e)}function a3(t,e){t.uniform2iv(this.addr,e)}function o3(t,e){t.uniform3iv(this.addr,e)}function l3(t,e){t.uniform4iv(this.addr,e)}function c3(t,e){t.uniform1uiv(this.addr,e)}function u3(t,e){t.uniform2uiv(this.addr,e)}function d3(t,e){t.uniform3uiv(this.addr,e)}function f3(t,e){t.uniform4uiv(this.addr,e)}function h3(t,e,n){const i=this.cache,r=e.length,s=Tc(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=xf:a=Vg;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function p3(t,e,n){const i=this.cache,r=e.length,s=Tc(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Gg,s[a])}function m3(t,e,n){const i=this.cache,r=e.length,s=Tc(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||jg,s[a])}function x3(t,e,n){const i=this.cache,r=e.length,s=Tc(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Hg,s[a])}function g3(t){switch(t){case 5126:return QE;case 35664:return JE;case 35665:return e3;case 35666:return t3;case 35674:return n3;case 35675:return i3;case 35676:return r3;case 5124:case 35670:return s3;case 35667:case 35671:return a3;case 35668:case 35672:return o3;case 35669:case 35673:return l3;case 5125:return c3;case 36294:return u3;case 36295:return d3;case 36296:return f3;case 35678:case 36198:case 36298:case 36306:case 35682:return h3;case 35679:case 36299:case 36307:return p3;case 35680:case 36300:case 36308:case 36293:return m3;case 36289:case 36303:case 36311:case 36292:return x3}}class v3{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=ZE(n.type)}}class _3{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=g3(n.type)}}class y3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Ru=/(\w+)(\])?(\[|\.)?/g;function Um(t,e){t.seq.push(e),t.map[e.id]=e}function S3(t,e,n){const i=t.name,r=i.length;for(Ru.lastIndex=0;;){const s=Ru.exec(i),a=Ru.lastIndex;let o=s[1];const l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===r){Um(n,u===void 0?new v3(o,t,e):new _3(o,t,e));break}else{let p=n.map[o];p===void 0&&(p=new y3(o),Um(n,p)),n=p}}}class Tl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);S3(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Fm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const M3=37297;let E3=0;function b3(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const Om=new Oe;function w3(t){Ye._getMatrix(Om,Ye.workingColorSpace,t);const e=`mat3( ${Om.elements.map(n=>n.toFixed(4))} )`;switch(Ye.getTransfer(t)){case ic:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return De("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function km(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+b3(t.getShaderSource(e),o)}else return s}function T3(t,e){const n=w3(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const A3={[dg]:"Linear",[fg]:"Reinhard",[hg]:"Cineon",[pg]:"ACESFilmic",[xg]:"AgX",[gg]:"Neutral",[mg]:"Custom"};function C3(t,e){const n=A3[e];return n===void 0?(De("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ll=new X;function R3(){Ye.getLuminanceCoefficients(ll);const t=ll.x.toFixed(4),e=ll.y.toFixed(4),n=ll.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function N3(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ca).join(`
`)}function P3(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function L3(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Ca(t){return t!==""}function Bm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const D3=/^[ \t]*#include +<([\w\d./]+)>/gm;function gf(t){return t.replace(D3,U3)}const I3=new Map;function U3(t,e){let n=Be[e];if(n===void 0){const i=I3.get(e);if(i!==void 0)n=Be[i],De('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return gf(n)}const F3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vm(t){return t.replace(F3,O3)}function O3(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Hm(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const k3={[Sl]:"SHADOWMAP_TYPE_PCF",[Aa]:"SHADOWMAP_TYPE_VSM"};function B3(t){return k3[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const z3={[Hr]:"ENVMAP_TYPE_CUBE",[Ws]:"ENVMAP_TYPE_CUBE",[Ec]:"ENVMAP_TYPE_CUBE_UV"};function V3(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":z3[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const H3={[Ws]:"ENVMAP_MODE_REFRACTION"};function G3(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":H3[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const j3={[ug]:"ENVMAP_BLENDING_MULTIPLY",[_2]:"ENVMAP_BLENDING_MIX",[y2]:"ENVMAP_BLENDING_ADD"};function W3(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":j3[t.combine]||"ENVMAP_BLENDING_NONE"}function X3(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function $3(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=B3(n),u=V3(n),h=G3(n),p=W3(n),d=X3(n),m=N3(n),g=P3(s),b=r.createProgram();let x,f,y=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Ca).join(`
`),x.length>0&&(x+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Ca).join(`
`),f.length>0&&(f+=`
`)):(x=[Hm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ca).join(`
`),f=[Hm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",n.envMap?"#define "+p:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ci?"#define TONE_MAPPING":"",n.toneMapping!==ci?Be.tonemapping_pars_fragment:"",n.toneMapping!==ci?C3("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,T3("linearToOutputTexel",n.outputColorSpace),R3(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ca).join(`
`)),a=gf(a),a=Bm(a,n),a=zm(a,n),o=gf(o),o=Bm(o,n),o=zm(o,n),a=Vm(a),o=Vm(o),n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,x=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,f=["#define varying in",n.glslVersion===em?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===em?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const M=y+x+a,S=y+f+o,T=Fm(r,r.VERTEX_SHADER,M),w=Fm(r,r.FRAGMENT_SHADER,S);r.attachShader(b,T),r.attachShader(b,w),n.index0AttributeName!==void 0?r.bindAttribLocation(b,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function C(P){if(t.debug.checkShaderErrors){const F=r.getProgramInfoLog(b)||"",I=r.getShaderInfoLog(T)||"",$=r.getShaderInfoLog(w)||"",B=F.trim(),q=I.trim(),G=$.trim();let D=!0,W=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(D=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,b,T,w);else{const Y=km(r,T,"vertex"),ne=km(r,w,"fragment");Qe("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+B+`
`+Y+`
`+ne)}else B!==""?De("WebGLProgram: Program Info Log:",B):(q===""||G==="")&&(W=!1);W&&(P.diagnostics={runnable:D,programLog:B,vertexShader:{log:q,prefix:x},fragmentShader:{log:G,prefix:f}})}r.deleteShader(T),r.deleteShader(w),_=new Tl(r,b),R=L3(r,b)}let _;this.getUniforms=function(){return _===void 0&&C(this),_};let R;this.getAttributes=function(){return R===void 0&&C(this),R};let L=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=r.getProgramParameter(b,M3)),L},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=E3++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=T,this.fragmentShader=w,this}let q3=0;class Y3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new K3(e),n.set(e,i)),i}}class K3{constructor(e){this.id=q3++,this.code=e,this.usedTimes=0}}function Z3(t){return t===Gr||t===ec||t===tc}function Q3(t,e,n,i,r,s){const a=new Cg,o=new Y3,l=new Set,u=[],h=new Map,p=i.logarithmicDepthBuffer;let d=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return l.add(_),_===0?"uv":`uv${_}`}function b(_,R,L,P,F,I){const $=P.fog,B=F.geometry,q=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,G=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,D=e.get(_.envMap||q,G),W=D&&D.mapping===Ec?D.image.height:null,Y=m[_.type];_.precision!==null&&(d=i.getMaxPrecision(_.precision),d!==_.precision&&De("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));const ne=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,re=ne!==void 0?ne.length:0;let Ie=0;B.morphAttributes.position!==void 0&&(Ie=1),B.morphAttributes.normal!==void 0&&(Ie=2),B.morphAttributes.color!==void 0&&(Ie=3);let Ke,je,Q,ce;if(Y){const Ee=ii[Y];Ke=Ee.vertexShader,je=Ee.fragmentShader}else{Ke=_.vertexShader,je=_.fragmentShader;const Ee=o.getVertexShaderStage(_),ht=o.getFragmentShaderStage(_);o.update(_,Ee,ht),Q=Ee.id,ce=ht.id}const se=t.getRenderTarget(),Le=t.state.buffers.depth.getReversed(),Fe=F.isInstancedMesh===!0,Ne=F.isBatchedMesh===!0,ie=!!_.map,ze=!!_.matcap,tt=!!D,qe=!!_.aoMap,Ge=!!_.lightMap,vt=!!_.bumpMap&&_.wireframe===!1,xt=!!_.normalMap,Tt=!!_.displacementMap,Mt=!!_.emissiveMap,dt=!!_.metalnessMap,ft=!!_.roughnessMap,O=_.anisotropy>0,Vt=_.clearcoat>0,et=_.dispersion>0,A=_.iridescence>0,v=_.sheen>0,H=_.transmission>0,j=O&&!!_.anisotropyMap,K=Vt&&!!_.clearcoatMap,oe=Vt&&!!_.clearcoatNormalMap,fe=Vt&&!!_.clearcoatRoughnessMap,Z=A&&!!_.iridescenceMap,ee=A&&!!_.iridescenceThicknessMap,he=v&&!!_.sheenColorMap,Ae=v&&!!_.sheenRoughnessMap,ge=!!_.specularMap,xe=!!_.specularColorMap,Ce=!!_.specularIntensityMap,Pe=H&&!!_.transmissionMap,Ue=H&&!!_.thicknessMap,U=!!_.gradientMap,de=!!_.alphaMap,J=_.alphaTest>0,pe=!!_.alphaHash,ve=!!_.extensions;let te=ci;_.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(te=t.toneMapping);const we={shaderID:Y,shaderType:_.type,shaderName:_.name,vertexShader:Ke,fragmentShader:je,defines:_.defines,customVertexShaderID:Q,customFragmentShaderID:ce,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:Ne,batchingColor:Ne&&F._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&F.instanceColor!==null,instancingMorph:Fe&&F.morphTexture!==null,outputColorSpace:se===null?t.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Ye.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:ie,matcap:ze,envMap:tt,envMapMode:tt&&D.mapping,envMapCubeUVHeight:W,aoMap:qe,lightMap:Ge,bumpMap:vt,normalMap:xt,displacementMap:Tt,emissiveMap:Mt,normalMapObjectSpace:xt&&_.normalMapType===E2,normalMapTangentSpace:xt&&_.normalMapType===Zp,packedNormalMap:xt&&_.normalMapType===Zp&&Z3(_.normalMap.format),metalnessMap:dt,roughnessMap:ft,anisotropy:O,anisotropyMap:j,clearcoat:Vt,clearcoatMap:K,clearcoatNormalMap:oe,clearcoatRoughnessMap:fe,dispersion:et,iridescence:A,iridescenceMap:Z,iridescenceThicknessMap:ee,sheen:v,sheenColorMap:he,sheenRoughnessMap:Ae,specularMap:ge,specularColorMap:xe,specularIntensityMap:Ce,transmission:H,transmissionMap:Pe,thicknessMap:Ue,gradientMap:U,opaque:_.transparent===!1&&_.blending===Is&&_.alphaToCoverage===!1,alphaMap:de,alphaTest:J,alphaHash:pe,combine:_.combine,mapUv:ie&&g(_.map.channel),aoMapUv:qe&&g(_.aoMap.channel),lightMapUv:Ge&&g(_.lightMap.channel),bumpMapUv:vt&&g(_.bumpMap.channel),normalMapUv:xt&&g(_.normalMap.channel),displacementMapUv:Tt&&g(_.displacementMap.channel),emissiveMapUv:Mt&&g(_.emissiveMap.channel),metalnessMapUv:dt&&g(_.metalnessMap.channel),roughnessMapUv:ft&&g(_.roughnessMap.channel),anisotropyMapUv:j&&g(_.anisotropyMap.channel),clearcoatMapUv:K&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:oe&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:he&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&g(_.sheenRoughnessMap.channel),specularMapUv:ge&&g(_.specularMap.channel),specularColorMapUv:xe&&g(_.specularColorMap.channel),specularIntensityMapUv:Ce&&g(_.specularIntensityMap.channel),transmissionMapUv:Pe&&g(_.transmissionMap.channel),thicknessMapUv:Ue&&g(_.thicknessMap.channel),alphaMapUv:de&&g(_.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(xt||O),vertexNormals:!!B.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!B.attributes.uv&&(ie||de),fog:!!$,useFog:_.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||B.attributes.normal===void 0&&xt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Le,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:Ie,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:I.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:te,decodeVideoTexture:ie&&_.map.isVideoTexture===!0&&Ye.getTransfer(_.map.colorSpace)===rt,decodeVideoTextureEmissive:Mt&&_.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(_.emissiveMap.colorSpace)===rt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Mi,flipSided:_.side===pn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ve&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&_.extensions.multiDraw===!0||Ne)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return we.vertexUv1s=l.has(1),we.vertexUv2s=l.has(2),we.vertexUv3s=l.has(3),l.clear(),we}function x(_){const R=[];if(_.shaderID?R.push(_.shaderID):(R.push(_.customVertexShaderID),R.push(_.customFragmentShaderID)),_.defines!==void 0)for(const L in _.defines)R.push(L),R.push(_.defines[L]);return _.isRawShaderMaterial===!1&&(f(R,_),y(R,_),R.push(t.outputColorSpace)),R.push(_.customProgramCacheKey),R.join()}function f(_,R){_.push(R.precision),_.push(R.outputColorSpace),_.push(R.envMapMode),_.push(R.envMapCubeUVHeight),_.push(R.mapUv),_.push(R.alphaMapUv),_.push(R.lightMapUv),_.push(R.aoMapUv),_.push(R.bumpMapUv),_.push(R.normalMapUv),_.push(R.displacementMapUv),_.push(R.emissiveMapUv),_.push(R.metalnessMapUv),_.push(R.roughnessMapUv),_.push(R.anisotropyMapUv),_.push(R.clearcoatMapUv),_.push(R.clearcoatNormalMapUv),_.push(R.clearcoatRoughnessMapUv),_.push(R.iridescenceMapUv),_.push(R.iridescenceThicknessMapUv),_.push(R.sheenColorMapUv),_.push(R.sheenRoughnessMapUv),_.push(R.specularMapUv),_.push(R.specularColorMapUv),_.push(R.specularIntensityMapUv),_.push(R.transmissionMapUv),_.push(R.thicknessMapUv),_.push(R.combine),_.push(R.fogExp2),_.push(R.sizeAttenuation),_.push(R.morphTargetsCount),_.push(R.morphAttributeCount),_.push(R.numDirLights),_.push(R.numPointLights),_.push(R.numSpotLights),_.push(R.numSpotLightMaps),_.push(R.numHemiLights),_.push(R.numRectAreaLights),_.push(R.numDirLightShadows),_.push(R.numPointLightShadows),_.push(R.numSpotLightShadows),_.push(R.numSpotLightShadowsWithMaps),_.push(R.numLightProbes),_.push(R.shadowMapType),_.push(R.toneMapping),_.push(R.numClippingPlanes),_.push(R.numClipIntersection),_.push(R.depthPacking)}function y(_,R){a.disableAll(),R.instancing&&a.enable(0),R.instancingColor&&a.enable(1),R.instancingMorph&&a.enable(2),R.matcap&&a.enable(3),R.envMap&&a.enable(4),R.normalMapObjectSpace&&a.enable(5),R.normalMapTangentSpace&&a.enable(6),R.clearcoat&&a.enable(7),R.iridescence&&a.enable(8),R.alphaTest&&a.enable(9),R.vertexColors&&a.enable(10),R.vertexAlphas&&a.enable(11),R.vertexUv1s&&a.enable(12),R.vertexUv2s&&a.enable(13),R.vertexUv3s&&a.enable(14),R.vertexTangents&&a.enable(15),R.anisotropy&&a.enable(16),R.alphaHash&&a.enable(17),R.batching&&a.enable(18),R.dispersion&&a.enable(19),R.batchingColor&&a.enable(20),R.gradientMap&&a.enable(21),R.packedNormalMap&&a.enable(22),R.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.reversedDepthBuffer&&a.enable(4),R.skinning&&a.enable(5),R.morphTargets&&a.enable(6),R.morphNormals&&a.enable(7),R.morphColors&&a.enable(8),R.premultipliedAlpha&&a.enable(9),R.shadowMapEnabled&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),R.decodeVideoTextureEmissive&&a.enable(20),R.alphaToCoverage&&a.enable(21),R.numLightProbeGrids>0&&a.enable(22),R.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function M(_){const R=m[_.type];let L;if(R){const P=ii[R];L=My.clone(P.uniforms)}else L=_.uniforms;return L}function S(_,R){let L=h.get(R);return L!==void 0?++L.usedTimes:(L=new $3(t,R,_,r),u.push(L),h.set(R,L)),L}function T(_){if(--_.usedTimes===0){const R=u.indexOf(_);u[R]=u[u.length-1],u.pop(),h.delete(_.cacheKey),_.destroy()}}function w(_){o.remove(_)}function C(){o.dispose()}return{getParameters:b,getProgramCacheKey:x,getUniforms:M,acquireProgram:S,releaseProgram:T,releaseShaderCache:w,programs:u,dispose:C}}function J3(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function eb(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Gm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function jm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(d){let m=0;return d.isInstancedMesh&&(m+=2),d.isSkinnedMesh&&(m+=1),m}function o(d,m,g,b,x,f){let y=t[e];return y===void 0?(y={id:d.id,object:d,geometry:m,material:g,materialVariant:a(d),groupOrder:b,renderOrder:d.renderOrder,z:x,group:f},t[e]=y):(y.id=d.id,y.object=d,y.geometry=m,y.material=g,y.materialVariant=a(d),y.groupOrder=b,y.renderOrder=d.renderOrder,y.z=x,y.group=f),e++,y}function l(d,m,g,b,x,f){const y=o(d,m,g,b,x,f);g.transmission>0?i.push(y):g.transparent===!0?r.push(y):n.push(y)}function u(d,m,g,b,x,f){const y=o(d,m,g,b,x,f);g.transmission>0?i.unshift(y):g.transparent===!0?r.unshift(y):n.unshift(y)}function h(d,m,g){n.length>1&&n.sort(d||eb),i.length>1&&i.sort(m||Gm),r.length>1&&r.sort(m||Gm),g&&(n.reverse(),i.reverse(),r.reverse())}function p(){for(let d=e,m=t.length;d<m;d++){const g=t[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:u,finish:p,sort:h}}function tb(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new jm,t.set(i,[a])):r>=s.length?(a=new jm,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function nb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new X,color:new nt};break;case"SpotLight":n={position:new X,direction:new X,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new X,color:new nt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new X,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":n={color:new nt,position:new X,halfWidth:new X,halfHeight:new X};break}return t[e.id]=n,n}}}function ib(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let rb=0;function sb(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function ab(t){const e=new nb,n=ib(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new X);const r=new X,s=new Lt,a=new Lt;function o(u){let h=0,p=0,d=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let m=0,g=0,b=0,x=0,f=0,y=0,M=0,S=0,T=0,w=0,C=0;u.sort(sb);for(let R=0,L=u.length;R<L;R++){const P=u[R],F=P.color,I=P.intensity,$=P.distance;let B=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Gr?B=P.shadow.map.texture:B=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=F.r*I,p+=F.g*I,d+=F.b*I;else if(P.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(P.sh.coefficients[q],I);C++}else if(P.isDirectionalLight){const q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const G=P.shadow,D=n.get(P);D.shadowIntensity=G.intensity,D.shadowBias=G.bias,D.shadowNormalBias=G.normalBias,D.shadowRadius=G.radius,D.shadowMapSize=G.mapSize,i.directionalShadow[m]=D,i.directionalShadowMap[m]=B,i.directionalShadowMatrix[m]=P.shadow.matrix,y++}i.directional[m]=q,m++}else if(P.isSpotLight){const q=e.get(P);q.position.setFromMatrixPosition(P.matrixWorld),q.color.copy(F).multiplyScalar(I),q.distance=$,q.coneCos=Math.cos(P.angle),q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),q.decay=P.decay,i.spot[b]=q;const G=P.shadow;if(P.map&&(i.spotLightMap[T]=P.map,T++,G.updateMatrices(P),P.castShadow&&w++),i.spotLightMatrix[b]=G.matrix,P.castShadow){const D=n.get(P);D.shadowIntensity=G.intensity,D.shadowBias=G.bias,D.shadowNormalBias=G.normalBias,D.shadowRadius=G.radius,D.shadowMapSize=G.mapSize,i.spotShadow[b]=D,i.spotShadowMap[b]=B,S++}b++}else if(P.isRectAreaLight){const q=e.get(P);q.color.copy(F).multiplyScalar(I),q.halfWidth.set(P.width*.5,0,0),q.halfHeight.set(0,P.height*.5,0),i.rectArea[x]=q,x++}else if(P.isPointLight){const q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),q.distance=P.distance,q.decay=P.decay,P.castShadow){const G=P.shadow,D=n.get(P);D.shadowIntensity=G.intensity,D.shadowBias=G.bias,D.shadowNormalBias=G.normalBias,D.shadowRadius=G.radius,D.shadowMapSize=G.mapSize,D.shadowCameraNear=G.camera.near,D.shadowCameraFar=G.camera.far,i.pointShadow[g]=D,i.pointShadowMap[g]=B,i.pointShadowMatrix[g]=P.shadow.matrix,M++}i.point[g]=q,g++}else if(P.isHemisphereLight){const q=e.get(P);q.skyColor.copy(P.color).multiplyScalar(I),q.groundColor.copy(P.groundColor).multiplyScalar(I),i.hemi[f]=q,f++}}x>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=d;const _=i.hash;(_.directionalLength!==m||_.pointLength!==g||_.spotLength!==b||_.rectAreaLength!==x||_.hemiLength!==f||_.numDirectionalShadows!==y||_.numPointShadows!==M||_.numSpotShadows!==S||_.numSpotMaps!==T||_.numLightProbes!==C)&&(i.directional.length=m,i.spot.length=b,i.rectArea.length=x,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=S+T-w,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=C,_.directionalLength=m,_.pointLength=g,_.spotLength=b,_.rectAreaLength=x,_.hemiLength=f,_.numDirectionalShadows=y,_.numPointShadows=M,_.numSpotShadows=S,_.numSpotMaps=T,_.numLightProbes=C,i.version=rb++)}function l(u,h){let p=0,d=0,m=0,g=0,b=0;const x=h.matrixWorldInverse;for(let f=0,y=u.length;f<y;f++){const M=u[f];if(M.isDirectionalLight){const S=i.directional[p];S.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(x),p++}else if(M.isSpotLight){const S=i.spot[m];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(x),S.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(x),m++}else if(M.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(x),a.identity(),s.copy(M.matrixWorld),s.premultiply(x),a.extractRotation(s),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(x),d++}else if(M.isHemisphereLight){const S=i.hemi[b];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(x),b++}}}return{setup:o,setupView:l,state:i}}function Wm(t){const e=new ab(t),n=[],i=[],r=[];function s(d){p.camera=d,n.length=0,i.length=0,r.length=0}function a(d){n.push(d)}function o(d){i.push(d)}function l(d){r.push(d)}function u(){e.setup(n)}function h(d){e.setupView(n,d)}const p={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:p,setupLights:u,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function ob(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Wm(t),e.set(r,[o])):s>=a.length?(o=new Wm(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const lb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cb=`uniform sampler2D shadow_pass;
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
}`,ub=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],db=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],Xm=new Lt,Ma=new X,Nu=new X;function fb(t,e,n){let i=new Dg;const r=new $e,s=new $e,a=new wt,o=new Ty,l=new Ay,u={},h=n.maxTextureSize,p={[mr]:pn,[pn]:mr,[Mi]:Mi},d=new Kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:lb,fragmentShader:cb}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new ki;g.setAttribute("position",new di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new hi(g,d),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sl;let f=this.type;this.render=function(w,C,_){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||w.length===0)return;this.type===e2&&(De("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Sl);const R=t.getRenderTarget(),L=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),F=t.state;F.setBlending(Ci),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const I=f!==this.type;I&&C.traverse(function($){$.material&&(Array.isArray($.material)?$.material.forEach(B=>B.needsUpdate=!0):$.material.needsUpdate=!0)});for(let $=0,B=w.length;$<B;$++){const q=w[$],G=q.shadow;if(G===void 0){De("WebGLShadowMap:",q,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const D=G.getFrameExtents();r.multiply(D),s.copy(G.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/D.x),r.x=s.x*D.x,G.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/D.y),r.y=s.y*D.y,G.mapSize.y=s.y));const W=t.state.buffers.depth.getReversed();if(G.camera._reversedDepth=W,G.map===null||I===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Aa){if(q.isPointLight){De("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new ui(r.x,r.y,{format:Gr,type:Ui,minFilter:Qt,magFilter:Qt,generateMipmaps:!1}),G.map.texture.name=q.name+".shadowMap",G.map.depthTexture=new Xs(r.x,r.y,si),G.map.depthTexture.name=q.name+".shadowMapDepth",G.map.depthTexture.format=Fi,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Gt,G.map.depthTexture.magFilter=Gt}else q.isPointLight?(G.map=new zg(r.x),G.map.depthTexture=new yy(r.x,fi)):(G.map=new ui(r.x,r.y),G.map.depthTexture=new Xs(r.x,r.y,fi)),G.map.depthTexture.name=q.name+".shadowMap",G.map.depthTexture.format=Fi,this.type===Sl?(G.map.depthTexture.compareFunction=W?Sh:yh,G.map.depthTexture.minFilter=Qt,G.map.depthTexture.magFilter=Qt):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Gt,G.map.depthTexture.magFilter=Gt);G.camera.updateProjectionMatrix()}const Y=G.map.isWebGLCubeRenderTarget?6:1;for(let ne=0;ne<Y;ne++){if(G.map.isWebGLCubeRenderTarget)t.setRenderTarget(G.map,ne),t.clear();else{ne===0&&(t.setRenderTarget(G.map),t.clear());const re=G.getViewport(ne);a.set(s.x*re.x,s.y*re.y,s.x*re.z,s.y*re.w),F.viewport(a)}if(q.isPointLight){const re=G.camera,Ie=G.matrix,Ke=q.distance||re.far;Ke!==re.far&&(re.far=Ke,re.updateProjectionMatrix()),Ma.setFromMatrixPosition(q.matrixWorld),re.position.copy(Ma),Nu.copy(re.position),Nu.add(ub[ne]),re.up.copy(db[ne]),re.lookAt(Nu),re.updateMatrixWorld(),Ie.makeTranslation(-Ma.x,-Ma.y,-Ma.z),Xm.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Xm,re.coordinateSystem,re.reversedDepth)}else G.updateMatrices(q);i=G.getFrustum(),S(C,_,G.camera,q,this.type)}G.isPointLightShadow!==!0&&this.type===Aa&&y(G,_),G.needsUpdate=!1}f=this.type,x.needsUpdate=!1,t.setRenderTarget(R,L,P)};function y(w,C){const _=e.update(b);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ui(r.x,r.y,{format:Gr,type:Ui})),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(C,null,_,d,b,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(C,null,_,m,b,null)}function M(w,C,_,R){let L=null;const P=_.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)L=P;else if(L=_.isPointLight===!0?l:o,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const F=L.uuid,I=C.uuid;let $=u[F];$===void 0&&($={},u[F]=$);let B=$[I];B===void 0&&(B=L.clone(),$[I]=B,C.addEventListener("dispose",T)),L=B}if(L.visible=C.visible,L.wireframe=C.wireframe,R===Aa?L.side=C.shadowSide!==null?C.shadowSide:C.side:L.side=C.shadowSide!==null?C.shadowSide:p[C.side],L.alphaMap=C.alphaMap,L.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,L.map=C.map,L.clipShadows=C.clipShadows,L.clippingPlanes=C.clippingPlanes,L.clipIntersection=C.clipIntersection,L.displacementMap=C.displacementMap,L.displacementScale=C.displacementScale,L.displacementBias=C.displacementBias,L.wireframeLinewidth=C.wireframeLinewidth,L.linewidth=C.linewidth,_.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const F=t.properties.get(L);F.light=_}return L}function S(w,C,_,R,L){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&L===Aa)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,w.matrixWorld);const I=e.update(w),$=w.material;if(Array.isArray($)){const B=I.groups;for(let q=0,G=B.length;q<G;q++){const D=B[q],W=$[D.materialIndex];if(W&&W.visible){const Y=M(w,W,R,L);w.onBeforeShadow(t,w,C,_,I,Y,D),t.renderBufferDirect(_,null,I,Y,w,D),w.onAfterShadow(t,w,C,_,I,Y,D)}}}else if($.visible){const B=M(w,$,R,L);w.onBeforeShadow(t,w,C,_,I,B,null),t.renderBufferDirect(_,null,I,B,w,null),w.onAfterShadow(t,w,C,_,I,B,null)}}const F=w.children;for(let I=0,$=F.length;I<$;I++)S(F[I],C,_,R,L)}function T(w){w.target.removeEventListener("dispose",T);for(const _ in u){const R=u[_],L=w.target.uuid;L in R&&(R[L].dispose(),delete R[L])}}}function hb(t,e){function n(){let U=!1;const de=new wt;let J=null;const pe=new wt(0,0,0,0);return{setMask:function(ve){J!==ve&&!U&&(t.colorMask(ve,ve,ve,ve),J=ve)},setLocked:function(ve){U=ve},setClear:function(ve,te,we,Ee,ht){ht===!0&&(ve*=Ee,te*=Ee,we*=Ee),de.set(ve,te,we,Ee),pe.equals(de)===!1&&(t.clearColor(ve,te,we,Ee),pe.copy(de))},reset:function(){U=!1,J=null,pe.set(-1,0,0,0)}}}function i(){let U=!1,de=!1,J=null,pe=null,ve=null;return{setReversed:function(te){if(de!==te){const we=e.get("EXT_clip_control");te?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),de=te;const Ee=ve;ve=null,this.setClear(Ee)}},getReversed:function(){return de},setTest:function(te){te?se(t.DEPTH_TEST):Le(t.DEPTH_TEST)},setMask:function(te){J!==te&&!U&&(t.depthMask(te),J=te)},setFunc:function(te){if(de&&(te=D2[te]),pe!==te){switch(te){case Nd:t.depthFunc(t.NEVER);break;case Pd:t.depthFunc(t.ALWAYS);break;case Ld:t.depthFunc(t.LESS);break;case js:t.depthFunc(t.LEQUAL);break;case Dd:t.depthFunc(t.EQUAL);break;case Id:t.depthFunc(t.GEQUAL);break;case Ud:t.depthFunc(t.GREATER);break;case Fd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}pe=te}},setLocked:function(te){U=te},setClear:function(te){ve!==te&&(ve=te,de&&(te=1-te),t.clearDepth(te))},reset:function(){U=!1,J=null,pe=null,ve=null,de=!1}}}function r(){let U=!1,de=null,J=null,pe=null,ve=null,te=null,we=null,Ee=null,ht=null;return{setTest:function(it){U||(it?se(t.STENCIL_TEST):Le(t.STENCIL_TEST))},setMask:function(it){de!==it&&!U&&(t.stencilMask(it),de=it)},setFunc:function(it,mn,xn){(J!==it||pe!==mn||ve!==xn)&&(t.stencilFunc(it,mn,xn),J=it,pe=mn,ve=xn)},setOp:function(it,mn,xn){(te!==it||we!==mn||Ee!==xn)&&(t.stencilOp(it,mn,xn),te=it,we=mn,Ee=xn)},setLocked:function(it){U=it},setClear:function(it){ht!==it&&(t.clearStencil(it),ht=it)},reset:function(){U=!1,de=null,J=null,pe=null,ve=null,te=null,we=null,Ee=null,ht=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,u=new WeakMap;let h={},p={},d={},m=new WeakMap,g=[],b=null,x=!1,f=null,y=null,M=null,S=null,T=null,w=null,C=null,_=new nt(0,0,0),R=0,L=!1,P=null,F=null,I=null,$=null,B=null;const q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,D=0;const W=t.getParameter(t.VERSION);W.indexOf("WebGL")!==-1?(D=parseFloat(/^WebGL (\d)/.exec(W)[1]),G=D>=1):W.indexOf("OpenGL ES")!==-1&&(D=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),G=D>=2);let Y=null,ne={};const re=t.getParameter(t.SCISSOR_BOX),Ie=t.getParameter(t.VIEWPORT),Ke=new wt().fromArray(re),je=new wt().fromArray(Ie);function Q(U,de,J,pe){const ve=new Uint8Array(4),te=t.createTexture();t.bindTexture(U,te),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let we=0;we<J;we++)U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?t.texImage3D(de,0,t.RGBA,1,1,pe,0,t.RGBA,t.UNSIGNED_BYTE,ve):t.texImage2D(de+we,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ve);return te}const ce={};ce[t.TEXTURE_2D]=Q(t.TEXTURE_2D,t.TEXTURE_2D,1),ce[t.TEXTURE_CUBE_MAP]=Q(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[t.TEXTURE_2D_ARRAY]=Q(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ce[t.TEXTURE_3D]=Q(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),se(t.DEPTH_TEST),a.setFunc(js),vt(!1),xt($p),se(t.CULL_FACE),qe(Ci);function se(U){h[U]!==!0&&(t.enable(U),h[U]=!0)}function Le(U){h[U]!==!1&&(t.disable(U),h[U]=!1)}function Fe(U,de){return d[U]!==de?(t.bindFramebuffer(U,de),d[U]=de,U===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=de),U===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=de),!0):!1}function Ne(U,de){let J=g,pe=!1;if(U){J=m.get(de),J===void 0&&(J=[],m.set(de,J));const ve=U.textures;if(J.length!==ve.length||J[0]!==t.COLOR_ATTACHMENT0){for(let te=0,we=ve.length;te<we;te++)J[te]=t.COLOR_ATTACHMENT0+te;J.length=ve.length,pe=!0}}else J[0]!==t.BACK&&(J[0]=t.BACK,pe=!0);pe&&t.drawBuffers(J)}function ie(U){return b!==U?(t.useProgram(U),b=U,!0):!1}const ze={[Cr]:t.FUNC_ADD,[n2]:t.FUNC_SUBTRACT,[i2]:t.FUNC_REVERSE_SUBTRACT};ze[r2]=t.MIN,ze[s2]=t.MAX;const tt={[a2]:t.ZERO,[o2]:t.ONE,[l2]:t.SRC_COLOR,[Cd]:t.SRC_ALPHA,[p2]:t.SRC_ALPHA_SATURATE,[f2]:t.DST_COLOR,[u2]:t.DST_ALPHA,[c2]:t.ONE_MINUS_SRC_COLOR,[Rd]:t.ONE_MINUS_SRC_ALPHA,[h2]:t.ONE_MINUS_DST_COLOR,[d2]:t.ONE_MINUS_DST_ALPHA,[m2]:t.CONSTANT_COLOR,[x2]:t.ONE_MINUS_CONSTANT_COLOR,[g2]:t.CONSTANT_ALPHA,[v2]:t.ONE_MINUS_CONSTANT_ALPHA};function qe(U,de,J,pe,ve,te,we,Ee,ht,it){if(U===Ci){x===!0&&(Le(t.BLEND),x=!1);return}if(x===!1&&(se(t.BLEND),x=!0),U!==t2){if(U!==f||it!==L){if((y!==Cr||T!==Cr)&&(t.blendEquation(t.FUNC_ADD),y=Cr,T=Cr),it)switch(U){case Is:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case qp:t.blendFunc(t.ONE,t.ONE);break;case Yp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Kp:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Qe("WebGLState: Invalid blending: ",U);break}else switch(U){case Is:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case qp:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Yp:Qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Kp:Qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qe("WebGLState: Invalid blending: ",U);break}M=null,S=null,w=null,C=null,_.set(0,0,0),R=0,f=U,L=it}return}ve=ve||de,te=te||J,we=we||pe,(de!==y||ve!==T)&&(t.blendEquationSeparate(ze[de],ze[ve]),y=de,T=ve),(J!==M||pe!==S||te!==w||we!==C)&&(t.blendFuncSeparate(tt[J],tt[pe],tt[te],tt[we]),M=J,S=pe,w=te,C=we),(Ee.equals(_)===!1||ht!==R)&&(t.blendColor(Ee.r,Ee.g,Ee.b,ht),_.copy(Ee),R=ht),f=U,L=!1}function Ge(U,de){U.side===Mi?Le(t.CULL_FACE):se(t.CULL_FACE);let J=U.side===pn;de&&(J=!J),vt(J),U.blending===Is&&U.transparent===!1?qe(Ci):qe(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);const pe=U.stencilWrite;o.setTest(pe),pe&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Mt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?se(t.SAMPLE_ALPHA_TO_COVERAGE):Le(t.SAMPLE_ALPHA_TO_COVERAGE)}function vt(U){P!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),P=U)}function xt(U){U!==Q1?(se(t.CULL_FACE),U!==F&&(U===$p?t.cullFace(t.BACK):U===J1?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Le(t.CULL_FACE),F=U}function Tt(U){U!==I&&(G&&t.lineWidth(U),I=U)}function Mt(U,de,J){U?(se(t.POLYGON_OFFSET_FILL),($!==de||B!==J)&&($=de,B=J,a.getReversed()&&(de=-de),t.polygonOffset(de,J))):Le(t.POLYGON_OFFSET_FILL)}function dt(U){U?se(t.SCISSOR_TEST):Le(t.SCISSOR_TEST)}function ft(U){U===void 0&&(U=t.TEXTURE0+q-1),Y!==U&&(t.activeTexture(U),Y=U)}function O(U,de,J){J===void 0&&(Y===null?J=t.TEXTURE0+q-1:J=Y);let pe=ne[J];pe===void 0&&(pe={type:void 0,texture:void 0},ne[J]=pe),(pe.type!==U||pe.texture!==de)&&(Y!==J&&(t.activeTexture(J),Y=J),t.bindTexture(U,de||ce[U]),pe.type=U,pe.texture=de)}function Vt(){const U=ne[Y];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function et(){try{t.compressedTexImage2D(...arguments)}catch(U){Qe("WebGLState:",U)}}function A(){try{t.compressedTexImage3D(...arguments)}catch(U){Qe("WebGLState:",U)}}function v(){try{t.texSubImage2D(...arguments)}catch(U){Qe("WebGLState:",U)}}function H(){try{t.texSubImage3D(...arguments)}catch(U){Qe("WebGLState:",U)}}function j(){try{t.compressedTexSubImage2D(...arguments)}catch(U){Qe("WebGLState:",U)}}function K(){try{t.compressedTexSubImage3D(...arguments)}catch(U){Qe("WebGLState:",U)}}function oe(){try{t.texStorage2D(...arguments)}catch(U){Qe("WebGLState:",U)}}function fe(){try{t.texStorage3D(...arguments)}catch(U){Qe("WebGLState:",U)}}function Z(){try{t.texImage2D(...arguments)}catch(U){Qe("WebGLState:",U)}}function ee(){try{t.texImage3D(...arguments)}catch(U){Qe("WebGLState:",U)}}function he(U){return p[U]!==void 0?p[U]:t.getParameter(U)}function Ae(U,de){p[U]!==de&&(t.pixelStorei(U,de),p[U]=de)}function ge(U){Ke.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),Ke.copy(U))}function xe(U){je.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),je.copy(U))}function Ce(U,de){let J=u.get(de);J===void 0&&(J=new WeakMap,u.set(de,J));let pe=J.get(U);pe===void 0&&(pe=t.getUniformBlockIndex(de,U.name),J.set(U,pe))}function Pe(U,de){const pe=u.get(de).get(U);l.get(de)!==pe&&(t.uniformBlockBinding(de,pe,U.__bindingPointIndex),l.set(de,pe))}function Ue(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),h={},p={},Y=null,ne={},d={},m=new WeakMap,g=[],b=null,x=!1,f=null,y=null,M=null,S=null,T=null,w=null,C=null,_=new nt(0,0,0),R=0,L=!1,P=null,F=null,I=null,$=null,B=null,Ke.set(0,0,t.canvas.width,t.canvas.height),je.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:se,disable:Le,bindFramebuffer:Fe,drawBuffers:Ne,useProgram:ie,setBlending:qe,setMaterial:Ge,setFlipSided:vt,setCullFace:xt,setLineWidth:Tt,setPolygonOffset:Mt,setScissorTest:dt,activeTexture:ft,bindTexture:O,unbindTexture:Vt,compressedTexImage2D:et,compressedTexImage3D:A,texImage2D:Z,texImage3D:ee,pixelStorei:Ae,getParameter:he,updateUBOMapping:Ce,uniformBlockBinding:Pe,texStorage2D:oe,texStorage3D:fe,texSubImage2D:v,texSubImage3D:H,compressedTexSubImage2D:j,compressedTexSubImage3D:K,scissor:ge,viewport:xe,reset:Ue}}function pb(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new $e,h=new WeakMap,p=new Set;let d;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(A,v){return g?new OffscreenCanvas(A,v):sc("canvas")}function x(A,v,H){let j=1;const K=et(A);if((K.width>H||K.height>H)&&(j=H/Math.max(K.width,K.height)),j<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const oe=Math.floor(j*K.width),fe=Math.floor(j*K.height);d===void 0&&(d=b(oe,fe));const Z=v?b(oe,fe):d;return Z.width=oe,Z.height=fe,Z.getContext("2d").drawImage(A,0,0,oe,fe),De("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+oe+"x"+fe+")."),Z}else return"data"in A&&De("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),A;return A}function f(A){return A.generateMipmaps}function y(A){t.generateMipmap(A)}function M(A){return A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?t.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function S(A,v,H,j,K,oe=!1){if(A!==null){if(t[A]!==void 0)return t[A];De("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let fe;j&&(fe=e.get("EXT_texture_norm16"),fe||De("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=v;if(v===t.RED&&(H===t.FLOAT&&(Z=t.R32F),H===t.HALF_FLOAT&&(Z=t.R16F),H===t.UNSIGNED_BYTE&&(Z=t.R8),H===t.UNSIGNED_SHORT&&fe&&(Z=fe.R16_EXT),H===t.SHORT&&fe&&(Z=fe.R16_SNORM_EXT)),v===t.RED_INTEGER&&(H===t.UNSIGNED_BYTE&&(Z=t.R8UI),H===t.UNSIGNED_SHORT&&(Z=t.R16UI),H===t.UNSIGNED_INT&&(Z=t.R32UI),H===t.BYTE&&(Z=t.R8I),H===t.SHORT&&(Z=t.R16I),H===t.INT&&(Z=t.R32I)),v===t.RG&&(H===t.FLOAT&&(Z=t.RG32F),H===t.HALF_FLOAT&&(Z=t.RG16F),H===t.UNSIGNED_BYTE&&(Z=t.RG8),H===t.UNSIGNED_SHORT&&fe&&(Z=fe.RG16_EXT),H===t.SHORT&&fe&&(Z=fe.RG16_SNORM_EXT)),v===t.RG_INTEGER&&(H===t.UNSIGNED_BYTE&&(Z=t.RG8UI),H===t.UNSIGNED_SHORT&&(Z=t.RG16UI),H===t.UNSIGNED_INT&&(Z=t.RG32UI),H===t.BYTE&&(Z=t.RG8I),H===t.SHORT&&(Z=t.RG16I),H===t.INT&&(Z=t.RG32I)),v===t.RGB_INTEGER&&(H===t.UNSIGNED_BYTE&&(Z=t.RGB8UI),H===t.UNSIGNED_SHORT&&(Z=t.RGB16UI),H===t.UNSIGNED_INT&&(Z=t.RGB32UI),H===t.BYTE&&(Z=t.RGB8I),H===t.SHORT&&(Z=t.RGB16I),H===t.INT&&(Z=t.RGB32I)),v===t.RGBA_INTEGER&&(H===t.UNSIGNED_BYTE&&(Z=t.RGBA8UI),H===t.UNSIGNED_SHORT&&(Z=t.RGBA16UI),H===t.UNSIGNED_INT&&(Z=t.RGBA32UI),H===t.BYTE&&(Z=t.RGBA8I),H===t.SHORT&&(Z=t.RGBA16I),H===t.INT&&(Z=t.RGBA32I)),v===t.RGB&&(H===t.UNSIGNED_SHORT&&fe&&(Z=fe.RGB16_EXT),H===t.SHORT&&fe&&(Z=fe.RGB16_SNORM_EXT),H===t.UNSIGNED_INT_5_9_9_9_REV&&(Z=t.RGB9_E5),H===t.UNSIGNED_INT_10F_11F_11F_REV&&(Z=t.R11F_G11F_B10F)),v===t.RGBA){const ee=oe?ic:Ye.getTransfer(K);H===t.FLOAT&&(Z=t.RGBA32F),H===t.HALF_FLOAT&&(Z=t.RGBA16F),H===t.UNSIGNED_BYTE&&(Z=ee===rt?t.SRGB8_ALPHA8:t.RGBA8),H===t.UNSIGNED_SHORT&&fe&&(Z=fe.RGBA16_EXT),H===t.SHORT&&fe&&(Z=fe.RGBA16_SNORM_EXT),H===t.UNSIGNED_SHORT_4_4_4_4&&(Z=t.RGBA4),H===t.UNSIGNED_SHORT_5_5_5_1&&(Z=t.RGB5_A1)}return(Z===t.R16F||Z===t.R32F||Z===t.RG16F||Z===t.RG32F||Z===t.RGBA16F||Z===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function T(A,v){let H;return A?v===null||v===fi||v===so?H=t.DEPTH24_STENCIL8:v===si?H=t.DEPTH32F_STENCIL8:v===ro&&(H=t.DEPTH24_STENCIL8,De("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===fi||v===so?H=t.DEPTH_COMPONENT24:v===si?H=t.DEPTH_COMPONENT32F:v===ro&&(H=t.DEPTH_COMPONENT16),H}function w(A,v){return f(A)===!0||A.isFramebufferTexture&&A.minFilter!==Gt&&A.minFilter!==Qt?Math.log2(Math.max(v.width,v.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?v.mipmaps.length:1}function C(A){const v=A.target;v.removeEventListener("dispose",C),R(v),v.isVideoTexture&&h.delete(v),v.isHTMLTexture&&p.delete(v)}function _(A){const v=A.target;v.removeEventListener("dispose",_),P(v)}function R(A){const v=i.get(A);if(v.__webglInit===void 0)return;const H=A.source,j=m.get(H);if(j){const K=j[v.__cacheKey];K.usedTimes--,K.usedTimes===0&&L(A),Object.keys(j).length===0&&m.delete(H)}i.remove(A)}function L(A){const v=i.get(A);t.deleteTexture(v.__webglTexture);const H=A.source,j=m.get(H);delete j[v.__cacheKey],a.memory.textures--}function P(A){const v=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(v.__webglFramebuffer[j]))for(let K=0;K<v.__webglFramebuffer[j].length;K++)t.deleteFramebuffer(v.__webglFramebuffer[j][K]);else t.deleteFramebuffer(v.__webglFramebuffer[j]);v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer[j])}else{if(Array.isArray(v.__webglFramebuffer))for(let j=0;j<v.__webglFramebuffer.length;j++)t.deleteFramebuffer(v.__webglFramebuffer[j]);else t.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&t.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let j=0;j<v.__webglColorRenderbuffer.length;j++)v.__webglColorRenderbuffer[j]&&t.deleteRenderbuffer(v.__webglColorRenderbuffer[j]);v.__webglDepthRenderbuffer&&t.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const H=A.textures;for(let j=0,K=H.length;j<K;j++){const oe=i.get(H[j]);oe.__webglTexture&&(t.deleteTexture(oe.__webglTexture),a.memory.textures--),i.remove(H[j])}i.remove(A)}let F=0;function I(){F=0}function $(){return F}function B(A){F=A}function q(){const A=F;return A>=r.maxTextures&&De("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),F+=1,A}function G(A){const v=[];return v.push(A.wrapS),v.push(A.wrapT),v.push(A.wrapR||0),v.push(A.magFilter),v.push(A.minFilter),v.push(A.anisotropy),v.push(A.internalFormat),v.push(A.format),v.push(A.type),v.push(A.generateMipmaps),v.push(A.premultiplyAlpha),v.push(A.flipY),v.push(A.unpackAlignment),v.push(A.colorSpace),v.join()}function D(A,v){const H=i.get(A);if(A.isVideoTexture&&O(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&H.__version!==A.version){const j=A.image;if(j===null)De("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)De("WebGLRenderer: Texture marked for update but image is incomplete");else{Le(H,A,v);return}}else A.isExternalTexture&&(H.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,H.__webglTexture,t.TEXTURE0+v)}function W(A,v){const H=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){Le(H,A,v);return}else A.isExternalTexture&&(H.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,H.__webglTexture,t.TEXTURE0+v)}function Y(A,v){const H=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){Le(H,A,v);return}n.bindTexture(t.TEXTURE_3D,H.__webglTexture,t.TEXTURE0+v)}function ne(A,v){const H=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&H.__version!==A.version){Fe(H,A,v);return}n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture,t.TEXTURE0+v)}const re={[Od]:t.REPEAT,[wi]:t.CLAMP_TO_EDGE,[kd]:t.MIRRORED_REPEAT},Ie={[Gt]:t.NEAREST,[S2]:t.NEAREST_MIPMAP_NEAREST,[zo]:t.NEAREST_MIPMAP_LINEAR,[Qt]:t.LINEAR,[nu]:t.LINEAR_MIPMAP_NEAREST,[Dr]:t.LINEAR_MIPMAP_LINEAR},Ke={[b2]:t.NEVER,[R2]:t.ALWAYS,[w2]:t.LESS,[yh]:t.LEQUAL,[T2]:t.EQUAL,[Sh]:t.GEQUAL,[A2]:t.GREATER,[C2]:t.NOTEQUAL};function je(A,v){if(v.type===si&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Qt||v.magFilter===nu||v.magFilter===zo||v.magFilter===Dr||v.minFilter===Qt||v.minFilter===nu||v.minFilter===zo||v.minFilter===Dr)&&De("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(A,t.TEXTURE_WRAP_S,re[v.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,re[v.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,re[v.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,Ie[v.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,Ie[v.minFilter]),v.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,Ke[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Gt||v.minFilter!==zo&&v.minFilter!==Dr||v.type===si&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Q(A,v){let H=!1;A.__webglInit===void 0&&(A.__webglInit=!0,v.addEventListener("dispose",C));const j=v.source;let K=m.get(j);K===void 0&&(K={},m.set(j,K));const oe=G(v);if(oe!==A.__cacheKey){K[oe]===void 0&&(K[oe]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,H=!0),K[oe].usedTimes++;const fe=K[A.__cacheKey];fe!==void 0&&(K[A.__cacheKey].usedTimes--,fe.usedTimes===0&&L(v)),A.__cacheKey=oe,A.__webglTexture=K[oe].texture}return H}function ce(A,v,H){return Math.floor(Math.floor(A/H)/v)}function se(A,v,H,j){const oe=A.updateRanges;if(oe.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,v.width,v.height,H,j,v.data);else{oe.sort((Ae,ge)=>Ae.start-ge.start);let fe=0;for(let Ae=1;Ae<oe.length;Ae++){const ge=oe[fe],xe=oe[Ae],Ce=ge.start+ge.count,Pe=ce(xe.start,v.width,4),Ue=ce(ge.start,v.width,4);xe.start<=Ce+1&&Pe===Ue&&ce(xe.start+xe.count-1,v.width,4)===Pe?ge.count=Math.max(ge.count,xe.start+xe.count-ge.start):(++fe,oe[fe]=xe)}oe.length=fe+1;const Z=n.getParameter(t.UNPACK_ROW_LENGTH),ee=n.getParameter(t.UNPACK_SKIP_PIXELS),he=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,v.width);for(let Ae=0,ge=oe.length;Ae<ge;Ae++){const xe=oe[Ae],Ce=Math.floor(xe.start/4),Pe=Math.ceil(xe.count/4),Ue=Ce%v.width,U=Math.floor(Ce/v.width),de=Pe,J=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Ue),n.pixelStorei(t.UNPACK_SKIP_ROWS,U),n.texSubImage2D(t.TEXTURE_2D,0,Ue,U,de,J,H,j,v.data)}A.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,Z),n.pixelStorei(t.UNPACK_SKIP_PIXELS,ee),n.pixelStorei(t.UNPACK_SKIP_ROWS,he)}}function Le(A,v,H){let j=t.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(j=t.TEXTURE_2D_ARRAY),v.isData3DTexture&&(j=t.TEXTURE_3D);const K=Q(A,v),oe=v.source;n.bindTexture(j,A.__webglTexture,t.TEXTURE0+H);const fe=i.get(oe);if(oe.version!==fe.__version||K===!0){if(n.activeTexture(t.TEXTURE0+H),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const J=Ye.getPrimaries(Ye.workingColorSpace),pe=v.colorSpace===er?null:Ye.getPrimaries(v.colorSpace),ve=v.colorSpace===er||J===pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve)}n.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment);let ee=x(v.image,!1,r.maxTextureSize);ee=Vt(v,ee);const he=s.convert(v.format,v.colorSpace),Ae=s.convert(v.type);let ge=S(v.internalFormat,he,Ae,v.normalized,v.colorSpace,v.isVideoTexture);je(j,v);let xe;const Ce=v.mipmaps,Pe=v.isVideoTexture!==!0,Ue=fe.__version===void 0||K===!0,U=oe.dataReady,de=w(v,ee);if(v.isDepthTexture)ge=T(v.format===Ir,v.type),Ue&&(Pe?n.texStorage2D(t.TEXTURE_2D,1,ge,ee.width,ee.height):n.texImage2D(t.TEXTURE_2D,0,ge,ee.width,ee.height,0,he,Ae,null));else if(v.isDataTexture)if(Ce.length>0){Pe&&Ue&&n.texStorage2D(t.TEXTURE_2D,de,ge,Ce[0].width,Ce[0].height);for(let J=0,pe=Ce.length;J<pe;J++)xe=Ce[J],Pe?U&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,xe.width,xe.height,he,Ae,xe.data):n.texImage2D(t.TEXTURE_2D,J,ge,xe.width,xe.height,0,he,Ae,xe.data);v.generateMipmaps=!1}else Pe?(Ue&&n.texStorage2D(t.TEXTURE_2D,de,ge,ee.width,ee.height),U&&se(v,ee,he,Ae)):n.texImage2D(t.TEXTURE_2D,0,ge,ee.width,ee.height,0,he,Ae,ee.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Pe&&Ue&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,ge,Ce[0].width,Ce[0].height,ee.depth);for(let J=0,pe=Ce.length;J<pe;J++)if(xe=Ce[J],v.format!==Xn)if(he!==null)if(Pe){if(U)if(v.layerUpdates.size>0){const ve=Em(xe.width,xe.height,v.format,v.type);for(const te of v.layerUpdates){const we=xe.data.subarray(te*ve/xe.data.BYTES_PER_ELEMENT,(te+1)*ve/xe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,te,xe.width,xe.height,1,he,we)}v.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,0,xe.width,xe.height,ee.depth,he,xe.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,J,ge,xe.width,xe.height,ee.depth,0,xe.data,0,0);else De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pe?U&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,0,xe.width,xe.height,ee.depth,he,Ae,xe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,J,ge,xe.width,xe.height,ee.depth,0,he,Ae,xe.data)}else{Pe&&Ue&&n.texStorage2D(t.TEXTURE_2D,de,ge,Ce[0].width,Ce[0].height);for(let J=0,pe=Ce.length;J<pe;J++)xe=Ce[J],v.format!==Xn?he!==null?Pe?U&&n.compressedTexSubImage2D(t.TEXTURE_2D,J,0,0,xe.width,xe.height,he,xe.data):n.compressedTexImage2D(t.TEXTURE_2D,J,ge,xe.width,xe.height,0,xe.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?U&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,xe.width,xe.height,he,Ae,xe.data):n.texImage2D(t.TEXTURE_2D,J,ge,xe.width,xe.height,0,he,Ae,xe.data)}else if(v.isDataArrayTexture)if(Pe){if(Ue&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,ge,ee.width,ee.height,ee.depth),U)if(v.layerUpdates.size>0){const J=Em(ee.width,ee.height,v.format,v.type);for(const pe of v.layerUpdates){const ve=ee.data.subarray(pe*J/ee.data.BYTES_PER_ELEMENT,(pe+1)*J/ee.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,pe,ee.width,ee.height,1,he,Ae,ve)}v.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,he,Ae,ee.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ge,ee.width,ee.height,ee.depth,0,he,Ae,ee.data);else if(v.isData3DTexture)Pe?(Ue&&n.texStorage3D(t.TEXTURE_3D,de,ge,ee.width,ee.height,ee.depth),U&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,he,Ae,ee.data)):n.texImage3D(t.TEXTURE_3D,0,ge,ee.width,ee.height,ee.depth,0,he,Ae,ee.data);else if(v.isFramebufferTexture){if(Ue)if(Pe)n.texStorage2D(t.TEXTURE_2D,de,ge,ee.width,ee.height);else{let J=ee.width,pe=ee.height;for(let ve=0;ve<de;ve++)n.texImage2D(t.TEXTURE_2D,ve,ge,J,pe,0,he,Ae,null),J>>=1,pe>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in t){const J=t.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),ee.parentNode!==J){J.appendChild(ee),p.add(v),J.onpaint=pe=>{const ve=pe.changedElements;for(const te of p)ve.includes(te.image)&&(te.needsUpdate=!0)},J.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,ee);else{const ve=t.RGBA,te=t.RGBA,we=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,ve,te,we,ee)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Ce.length>0){if(Pe&&Ue){const J=et(Ce[0]);n.texStorage2D(t.TEXTURE_2D,de,ge,J.width,J.height)}for(let J=0,pe=Ce.length;J<pe;J++)xe=Ce[J],Pe?U&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,he,Ae,xe):n.texImage2D(t.TEXTURE_2D,J,ge,he,Ae,xe);v.generateMipmaps=!1}else if(Pe){if(Ue){const J=et(ee);n.texStorage2D(t.TEXTURE_2D,de,ge,J.width,J.height)}U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,he,Ae,ee)}else n.texImage2D(t.TEXTURE_2D,0,ge,he,Ae,ee);f(v)&&y(j),fe.__version=oe.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function Fe(A,v,H){if(v.image.length!==6)return;const j=Q(A,v),K=v.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+H);const oe=i.get(K);if(K.version!==oe.__version||j===!0){n.activeTexture(t.TEXTURE0+H);const fe=Ye.getPrimaries(Ye.workingColorSpace),Z=v.colorSpace===er?null:Ye.getPrimaries(v.colorSpace),ee=v.colorSpace===er||fe===Z?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);const he=v.isCompressedTexture||v.image[0].isCompressedTexture,Ae=v.image[0]&&v.image[0].isDataTexture,ge=[];for(let te=0;te<6;te++)!he&&!Ae?ge[te]=x(v.image[te],!0,r.maxCubemapSize):ge[te]=Ae?v.image[te].image:v.image[te],ge[te]=Vt(v,ge[te]);const xe=ge[0],Ce=s.convert(v.format,v.colorSpace),Pe=s.convert(v.type),Ue=S(v.internalFormat,Ce,Pe,v.normalized,v.colorSpace),U=v.isVideoTexture!==!0,de=oe.__version===void 0||j===!0,J=K.dataReady;let pe=w(v,xe);je(t.TEXTURE_CUBE_MAP,v);let ve;if(he){U&&de&&n.texStorage2D(t.TEXTURE_CUBE_MAP,pe,Ue,xe.width,xe.height);for(let te=0;te<6;te++){ve=ge[te].mipmaps;for(let we=0;we<ve.length;we++){const Ee=ve[we];v.format!==Xn?Ce!==null?U?J&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,we,0,0,Ee.width,Ee.height,Ce,Ee.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,we,Ue,Ee.width,Ee.height,0,Ee.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,we,0,0,Ee.width,Ee.height,Ce,Pe,Ee.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,we,Ue,Ee.width,Ee.height,0,Ce,Pe,Ee.data)}}}else{if(ve=v.mipmaps,U&&de){ve.length>0&&pe++;const te=et(ge[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,pe,Ue,te.width,te.height)}for(let te=0;te<6;te++)if(Ae){U?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ge[te].width,ge[te].height,Ce,Pe,ge[te].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ue,ge[te].width,ge[te].height,0,Ce,Pe,ge[te].data);for(let we=0;we<ve.length;we++){const ht=ve[we].image[te].image;U?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,we+1,0,0,ht.width,ht.height,Ce,Pe,ht.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,we+1,Ue,ht.width,ht.height,0,Ce,Pe,ht.data)}}else{U?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ce,Pe,ge[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ue,Ce,Pe,ge[te]);for(let we=0;we<ve.length;we++){const Ee=ve[we];U?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,we+1,0,0,Ce,Pe,Ee.image[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,we+1,Ue,Ce,Pe,Ee.image[te])}}}f(v)&&y(t.TEXTURE_CUBE_MAP),oe.__version=K.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function Ne(A,v,H,j,K,oe){const fe=s.convert(H.format,H.colorSpace),Z=s.convert(H.type),ee=S(H.internalFormat,fe,Z,H.normalized,H.colorSpace),he=i.get(v),Ae=i.get(H);if(Ae.__renderTarget=v,!he.__hasExternalTextures){const ge=Math.max(1,v.width>>oe),xe=Math.max(1,v.height>>oe);K===t.TEXTURE_3D||K===t.TEXTURE_2D_ARRAY?n.texImage3D(K,oe,ee,ge,xe,v.depth,0,fe,Z,null):n.texImage2D(K,oe,ee,ge,xe,0,fe,Z,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),ft(v)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,j,K,Ae.__webglTexture,0,dt(v)):(K===t.TEXTURE_2D||K>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,j,K,Ae.__webglTexture,oe),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ie(A,v,H){if(t.bindRenderbuffer(t.RENDERBUFFER,A),v.depthBuffer){const j=v.depthTexture,K=j&&j.isDepthTexture?j.type:null,oe=T(v.stencilBuffer,K),fe=v.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;ft(v)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,dt(v),oe,v.width,v.height):H?t.renderbufferStorageMultisample(t.RENDERBUFFER,dt(v),oe,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,oe,v.width,v.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,fe,t.RENDERBUFFER,A)}else{const j=v.textures;for(let K=0;K<j.length;K++){const oe=j[K],fe=s.convert(oe.format,oe.colorSpace),Z=s.convert(oe.type),ee=S(oe.internalFormat,fe,Z,oe.normalized,oe.colorSpace);ft(v)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,dt(v),ee,v.width,v.height):H?t.renderbufferStorageMultisample(t.RENDERBUFFER,dt(v),ee,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,ee,v.width,v.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ze(A,v,H){const j=v.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const K=i.get(v.depthTexture);if(K.__renderTarget=v,(!K.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),j){if(K.__webglInit===void 0&&(K.__webglInit=!0,v.depthTexture.addEventListener("dispose",C)),K.__webglTexture===void 0){K.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,K.__webglTexture),je(t.TEXTURE_CUBE_MAP,v.depthTexture);const he=s.convert(v.depthTexture.format),Ae=s.convert(v.depthTexture.type);let ge;v.depthTexture.format===Fi?ge=t.DEPTH_COMPONENT24:v.depthTexture.format===Ir&&(ge=t.DEPTH24_STENCIL8);for(let xe=0;xe<6;xe++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ge,v.width,v.height,0,he,Ae,null)}}else D(v.depthTexture,0);const oe=K.__webglTexture,fe=dt(v),Z=j?t.TEXTURE_CUBE_MAP_POSITIVE_X+H:t.TEXTURE_2D,ee=v.depthTexture.format===Ir?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(v.depthTexture.format===Fi)ft(v)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,Z,oe,0,fe):t.framebufferTexture2D(t.FRAMEBUFFER,ee,Z,oe,0);else if(v.depthTexture.format===Ir)ft(v)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,Z,oe,0,fe):t.framebufferTexture2D(t.FRAMEBUFFER,ee,Z,oe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function tt(A){const v=i.get(A),H=A.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==A.depthTexture){const j=A.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),j){const K=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,j.removeEventListener("dispose",K)};j.addEventListener("dispose",K),v.__depthDisposeCallback=K}v.__boundDepthTexture=j}if(A.depthTexture&&!v.__autoAllocateDepthBuffer)if(H)for(let j=0;j<6;j++)ze(v.__webglFramebuffer[j],A,j);else{const j=A.texture.mipmaps;j&&j.length>0?ze(v.__webglFramebuffer[0],A,0):ze(v.__webglFramebuffer,A,0)}else if(H){v.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[j]),v.__webglDepthbuffer[j]===void 0)v.__webglDepthbuffer[j]=t.createRenderbuffer(),ie(v.__webglDepthbuffer[j],A,!1);else{const K=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=v.__webglDepthbuffer[j];t.bindRenderbuffer(t.RENDERBUFFER,oe),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,oe)}}else{const j=A.texture.mipmaps;if(j&&j.length>0?n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=t.createRenderbuffer(),ie(v.__webglDepthbuffer,A,!1);else{const K=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=v.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,oe),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,oe)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function qe(A,v,H){const j=i.get(A);v!==void 0&&Ne(j.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),H!==void 0&&tt(A)}function Ge(A){const v=A.texture,H=i.get(A),j=i.get(v);A.addEventListener("dispose",_);const K=A.textures,oe=A.isWebGLCubeRenderTarget===!0,fe=K.length>1;if(fe||(j.__webglTexture===void 0&&(j.__webglTexture=t.createTexture()),j.__version=v.version,a.memory.textures++),oe){H.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(v.mipmaps&&v.mipmaps.length>0){H.__webglFramebuffer[Z]=[];for(let ee=0;ee<v.mipmaps.length;ee++)H.__webglFramebuffer[Z][ee]=t.createFramebuffer()}else H.__webglFramebuffer[Z]=t.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){H.__webglFramebuffer=[];for(let Z=0;Z<v.mipmaps.length;Z++)H.__webglFramebuffer[Z]=t.createFramebuffer()}else H.__webglFramebuffer=t.createFramebuffer();if(fe)for(let Z=0,ee=K.length;Z<ee;Z++){const he=i.get(K[Z]);he.__webglTexture===void 0&&(he.__webglTexture=t.createTexture(),a.memory.textures++)}if(A.samples>0&&ft(A)===!1){H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Z=0;Z<K.length;Z++){const ee=K[Z];H.__webglColorRenderbuffer[Z]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,H.__webglColorRenderbuffer[Z]);const he=s.convert(ee.format,ee.colorSpace),Ae=s.convert(ee.type),ge=S(ee.internalFormat,he,Ae,ee.normalized,ee.colorSpace,A.isXRRenderTarget===!0),xe=dt(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,xe,ge,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Z,t.RENDERBUFFER,H.__webglColorRenderbuffer[Z])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),ie(H.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(oe){n.bindTexture(t.TEXTURE_CUBE_MAP,j.__webglTexture),je(t.TEXTURE_CUBE_MAP,v);for(let Z=0;Z<6;Z++)if(v.mipmaps&&v.mipmaps.length>0)for(let ee=0;ee<v.mipmaps.length;ee++)Ne(H.__webglFramebuffer[Z][ee],A,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ee);else Ne(H.__webglFramebuffer[Z],A,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);f(v)&&y(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(fe){for(let Z=0,ee=K.length;Z<ee;Z++){const he=K[Z],Ae=i.get(he);let ge=t.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ge=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ge,Ae.__webglTexture),je(ge,he),Ne(H.__webglFramebuffer,A,he,t.COLOR_ATTACHMENT0+Z,ge,0),f(he)&&y(ge)}n.unbindTexture()}else{let Z=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Z=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Z,j.__webglTexture),je(Z,v),v.mipmaps&&v.mipmaps.length>0)for(let ee=0;ee<v.mipmaps.length;ee++)Ne(H.__webglFramebuffer[ee],A,v,t.COLOR_ATTACHMENT0,Z,ee);else Ne(H.__webglFramebuffer,A,v,t.COLOR_ATTACHMENT0,Z,0);f(v)&&y(Z),n.unbindTexture()}A.depthBuffer&&tt(A)}function vt(A){const v=A.textures;for(let H=0,j=v.length;H<j;H++){const K=v[H];if(f(K)){const oe=M(A),fe=i.get(K).__webglTexture;n.bindTexture(oe,fe),y(oe),n.unbindTexture()}}}const xt=[],Tt=[];function Mt(A){if(A.samples>0){if(ft(A)===!1){const v=A.textures,H=A.width,j=A.height;let K=t.COLOR_BUFFER_BIT;const oe=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=i.get(A),Z=v.length>1;if(Z)for(let he=0;he<v.length;he++)n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer);const ee=A.texture.mipmaps;ee&&ee.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let he=0;he<v.length;he++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(K|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(K|=t.STENCIL_BUFFER_BIT)),Z){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,fe.__webglColorRenderbuffer[he]);const Ae=i.get(v[he]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ae,0)}t.blitFramebuffer(0,0,H,j,0,0,H,j,K,t.NEAREST),l===!0&&(xt.length=0,Tt.length=0,xt.push(t.COLOR_ATTACHMENT0+he),A.depthBuffer&&A.resolveDepthBuffer===!1&&(xt.push(oe),Tt.push(oe),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Tt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,xt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Z)for(let he=0;he<v.length;he++){n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,fe.__webglColorRenderbuffer[he]);const Ae=i.get(v[he]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,Ae,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const v=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[v])}}}function dt(A){return Math.min(r.maxSamples,A.samples)}function ft(A){const v=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function O(A){const v=a.render.frame;h.get(A)!==v&&(h.set(A,v),A.update())}function Vt(A,v){const H=A.colorSpace,j=A.format,K=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||H!==nc&&H!==er&&(Ye.getTransfer(H)===rt?(j!==Xn||K!==Ln)&&De("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qe("WebGLTextures: Unsupported texture color space:",H)),v}function et(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(u.width=A.naturalWidth||A.width,u.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(u.width=A.displayWidth,u.height=A.displayHeight):(u.width=A.width,u.height=A.height),u}this.allocateTextureUnit=q,this.resetTextureUnits=I,this.getTextureUnits=$,this.setTextureUnits=B,this.setTexture2D=D,this.setTexture2DArray=W,this.setTexture3D=Y,this.setTextureCube=ne,this.rebindTextures=qe,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=Ne,this.useMultisampledRTT=ft,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function mb(t,e){function n(i,r=er){let s;const a=Ye.getTransfer(r);if(i===Ln)return t.UNSIGNED_BYTE;if(i===mh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===xh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Sg)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Mg)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===_g)return t.BYTE;if(i===yg)return t.SHORT;if(i===ro)return t.UNSIGNED_SHORT;if(i===ph)return t.INT;if(i===fi)return t.UNSIGNED_INT;if(i===si)return t.FLOAT;if(i===Ui)return t.HALF_FLOAT;if(i===Eg)return t.ALPHA;if(i===bg)return t.RGB;if(i===Xn)return t.RGBA;if(i===Fi)return t.DEPTH_COMPONENT;if(i===Ir)return t.DEPTH_STENCIL;if(i===wg)return t.RED;if(i===gh)return t.RED_INTEGER;if(i===Gr)return t.RG;if(i===vh)return t.RG_INTEGER;if(i===_h)return t.RGBA_INTEGER;if(i===Ml||i===El||i===bl||i===wl)if(a===rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ml)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===El)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===bl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===wl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ml)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===El)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===bl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===wl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Bd||i===zd||i===Vd||i===Hd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Bd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===zd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Vd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Hd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Gd||i===jd||i===Wd||i===Xd||i===$d||i===ec||i===qd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Gd||i===jd)return a===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Wd)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Xd)return s.COMPRESSED_R11_EAC;if(i===$d)return s.COMPRESSED_SIGNED_R11_EAC;if(i===ec)return s.COMPRESSED_RG11_EAC;if(i===qd)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Yd||i===Kd||i===Zd||i===Qd||i===Jd||i===ef||i===tf||i===nf||i===rf||i===sf||i===af||i===of||i===lf||i===cf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Yd)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Kd)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Zd)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Qd)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Jd)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ef)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===tf)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===nf)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===rf)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===sf)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===af)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===of)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===lf)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===cf)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===uf||i===df||i===ff)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===uf)return a===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===df)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ff)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===hf||i===pf||i===tc||i===mf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===hf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===pf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===tc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===mf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===so?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const xb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gb=`
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

}`;class vb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Ug(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Kn({vertexShader:xb,fragmentShader:gb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new hi(new mo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _b extends $r{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,u=null,h=null,p=null,d=null,m=null,g=null;const b=typeof XRWebGLBinding<"u",x=new vb,f={},y=n.getContextAttributes();let M=null,S=null;const T=[],w=[],C=new $e;let _=null;const R=new jn;R.viewport=new wt;const L=new jn;L.viewport=new wt;const P=[R,L],F=new Ry;let I=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ce=T[Q];return ce===void 0&&(ce=new lu,T[Q]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(Q){let ce=T[Q];return ce===void 0&&(ce=new lu,T[Q]=ce),ce.getGripSpace()},this.getHand=function(Q){let ce=T[Q];return ce===void 0&&(ce=new lu,T[Q]=ce),ce.getHandSpace()};function B(Q){const ce=w.indexOf(Q.inputSource);if(ce===-1)return;const se=T[ce];se!==void 0&&(se.update(Q.inputSource,Q.frame,u||a),se.dispatchEvent({type:Q.type,data:Q.inputSource}))}function q(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",G);for(let Q=0;Q<T.length;Q++){const ce=w[Q];ce!==null&&(w[Q]=null,T[Q].disconnect(ce))}I=null,$=null,x.reset();for(const Q in f)delete f[Q];e.setRenderTarget(M),m=null,d=null,p=null,r=null,S=null,je.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,i.isPresenting===!0&&De("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,i.isPresenting===!0&&De("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(Q){u=Q},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return p===null&&b&&(p=new XRWebGLBinding(r,n)),p},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(M=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",q),r.addEventListener("inputsourceschange",G),y.xrCompatible!==!0&&await n.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(C),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,Le=null,Fe=null;y.depth&&(Fe=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,se=y.stencil?Ir:Fi,Le=y.stencil?so:fi);const Ne={colorFormat:n.RGBA8,depthFormat:Fe,scaleFactor:s};p=this.getBinding(),d=p.createProjectionLayer(Ne),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new ui(d.textureWidth,d.textureHeight,{format:Xn,type:Ln,depthTexture:new Xs(d.textureWidth,d.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const se={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,se),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new ui(m.framebufferWidth,m.framebufferHeight,{format:Xn,type:Ln,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(o),je.setContext(r),je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function G(Q){for(let ce=0;ce<Q.removed.length;ce++){const se=Q.removed[ce],Le=w.indexOf(se);Le>=0&&(w[Le]=null,T[Le].disconnect(se))}for(let ce=0;ce<Q.added.length;ce++){const se=Q.added[ce];let Le=w.indexOf(se);if(Le===-1){for(let Ne=0;Ne<T.length;Ne++)if(Ne>=w.length){w.push(se),Le=Ne;break}else if(w[Ne]===null){w[Ne]=se,Le=Ne;break}if(Le===-1)break}const Fe=T[Le];Fe&&Fe.connect(se)}}const D=new X,W=new X;function Y(Q,ce,se){D.setFromMatrixPosition(ce.matrixWorld),W.setFromMatrixPosition(se.matrixWorld);const Le=D.distanceTo(W),Fe=ce.projectionMatrix.elements,Ne=se.projectionMatrix.elements,ie=Fe[14]/(Fe[10]-1),ze=Fe[14]/(Fe[10]+1),tt=(Fe[9]+1)/Fe[5],qe=(Fe[9]-1)/Fe[5],Ge=(Fe[8]-1)/Fe[0],vt=(Ne[8]+1)/Ne[0],xt=ie*Ge,Tt=ie*vt,Mt=Le/(-Ge+vt),dt=Mt*-Ge;if(ce.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(dt),Q.translateZ(Mt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Fe[10]===-1)Q.projectionMatrix.copy(ce.projectionMatrix),Q.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const ft=ie+Mt,O=ze+Mt,Vt=xt-dt,et=Tt+(Le-dt),A=tt*ze/O*ft,v=qe*ze/O*ft;Q.projectionMatrix.makePerspective(Vt,et,A,v,ft,O),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function ne(Q,ce){ce===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ce.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;let ce=Q.near,se=Q.far;x.texture!==null&&(x.depthNear>0&&(ce=x.depthNear),x.depthFar>0&&(se=x.depthFar)),F.near=L.near=R.near=ce,F.far=L.far=R.far=se,(I!==F.near||$!==F.far)&&(r.updateRenderState({depthNear:F.near,depthFar:F.far}),I=F.near,$=F.far),F.layers.mask=Q.layers.mask|6,R.layers.mask=F.layers.mask&-5,L.layers.mask=F.layers.mask&-3;const Le=Q.parent,Fe=F.cameras;ne(F,Le);for(let Ne=0;Ne<Fe.length;Ne++)ne(Fe[Ne],Le);Fe.length===2?Y(F,R,L):F.projectionMatrix.copy(R.projectionMatrix),re(Q,F,Le)};function re(Q,ce,se){se===null?Q.matrix.copy(ce.matrixWorld):(Q.matrix.copy(se.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ce.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ce.projectionMatrix),Q.projectionMatrixInverse.copy(ce.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=ao*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(Q){l=Q,d!==null&&(d.fixedFoveation=Q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Q)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(F)},this.getCameraTexture=function(Q){return f[Q]};let Ie=null;function Ke(Q,ce){if(h=ce.getViewerPose(u||a),g=ce,h!==null){const se=h.views;m!==null&&(e.setRenderTargetFramebuffer(S,m.framebuffer),e.setRenderTarget(S));let Le=!1;se.length!==F.cameras.length&&(F.cameras.length=0,Le=!0);for(let ze=0;ze<se.length;ze++){const tt=se[ze];let qe=null;if(m!==null)qe=m.getViewport(tt);else{const vt=p.getViewSubImage(d,tt);qe=vt.viewport,ze===0&&(e.setRenderTargetTextures(S,vt.colorTexture,vt.depthStencilTexture),e.setRenderTarget(S))}let Ge=P[ze];Ge===void 0&&(Ge=new jn,Ge.layers.enable(ze),Ge.viewport=new wt,P[ze]=Ge),Ge.matrix.fromArray(tt.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(tt.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(qe.x,qe.y,qe.width,qe.height),ze===0&&(F.matrix.copy(Ge.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Le===!0&&F.cameras.push(Ge)}const Fe=r.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&b){p=i.getBinding();const ze=p.getDepthInformation(se[0]);ze&&ze.isValid&&ze.texture&&x.init(ze,r.renderState)}if(Fe&&Fe.includes("camera-access")&&b){e.state.unbindTexture(),p=i.getBinding();for(let ze=0;ze<se.length;ze++){const tt=se[ze].camera;if(tt){let qe=f[tt];qe||(qe=new Ug,f[tt]=qe);const Ge=p.getCameraImage(tt);qe.sourceTexture=Ge}}}}for(let se=0;se<T.length;se++){const Le=w[se],Fe=T[se];Le!==null&&Fe!==void 0&&Fe.update(Le,ce,u||a)}Ie&&Ie(Q,ce),ce.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ce}),g=null}const je=new kg;je.setAnimationLoop(Ke),this.setAnimationLoop=function(Q){Ie=Q},this.dispose=function(){}}}const yb=new Lt,Wg=new Oe;Wg.set(-1,0,0,0,1,0,0,0,1);function Sb(t,e){function n(x,f){x.matrixAutoUpdate===!0&&x.updateMatrix(),f.value.copy(x.matrix)}function i(x,f){f.color.getRGB(x.fogColor.value,Fg(t)),f.isFog?(x.fogNear.value=f.near,x.fogFar.value=f.far):f.isFogExp2&&(x.fogDensity.value=f.density)}function r(x,f,y,M,S){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(x,f):f.isMeshLambertMaterial?(s(x,f),f.envMap&&(x.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(x,f),p(x,f)):f.isMeshPhongMaterial?(s(x,f),h(x,f),f.envMap&&(x.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(x,f),d(x,f),f.isMeshPhysicalMaterial&&m(x,f,S)):f.isMeshMatcapMaterial?(s(x,f),g(x,f)):f.isMeshDepthMaterial?s(x,f):f.isMeshDistanceMaterial?(s(x,f),b(x,f)):f.isMeshNormalMaterial?s(x,f):f.isLineBasicMaterial?(a(x,f),f.isLineDashedMaterial&&o(x,f)):f.isPointsMaterial?l(x,f,y,M):f.isSpriteMaterial?u(x,f):f.isShadowMaterial?(x.color.value.copy(f.color),x.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(x,f){x.opacity.value=f.opacity,f.color&&x.diffuse.value.copy(f.color),f.emissive&&x.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(x.map.value=f.map,n(f.map,x.mapTransform)),f.alphaMap&&(x.alphaMap.value=f.alphaMap,n(f.alphaMap,x.alphaMapTransform)),f.bumpMap&&(x.bumpMap.value=f.bumpMap,n(f.bumpMap,x.bumpMapTransform),x.bumpScale.value=f.bumpScale,f.side===pn&&(x.bumpScale.value*=-1)),f.normalMap&&(x.normalMap.value=f.normalMap,n(f.normalMap,x.normalMapTransform),x.normalScale.value.copy(f.normalScale),f.side===pn&&x.normalScale.value.negate()),f.displacementMap&&(x.displacementMap.value=f.displacementMap,n(f.displacementMap,x.displacementMapTransform),x.displacementScale.value=f.displacementScale,x.displacementBias.value=f.displacementBias),f.emissiveMap&&(x.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,x.emissiveMapTransform)),f.specularMap&&(x.specularMap.value=f.specularMap,n(f.specularMap,x.specularMapTransform)),f.alphaTest>0&&(x.alphaTest.value=f.alphaTest);const y=e.get(f),M=y.envMap,S=y.envMapRotation;M&&(x.envMap.value=M,x.envMapRotation.value.setFromMatrix4(yb.makeRotationFromEuler(S)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(Wg),x.reflectivity.value=f.reflectivity,x.ior.value=f.ior,x.refractionRatio.value=f.refractionRatio),f.lightMap&&(x.lightMap.value=f.lightMap,x.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,x.lightMapTransform)),f.aoMap&&(x.aoMap.value=f.aoMap,x.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,x.aoMapTransform))}function a(x,f){x.diffuse.value.copy(f.color),x.opacity.value=f.opacity,f.map&&(x.map.value=f.map,n(f.map,x.mapTransform))}function o(x,f){x.dashSize.value=f.dashSize,x.totalSize.value=f.dashSize+f.gapSize,x.scale.value=f.scale}function l(x,f,y,M){x.diffuse.value.copy(f.color),x.opacity.value=f.opacity,x.size.value=f.size*y,x.scale.value=M*.5,f.map&&(x.map.value=f.map,n(f.map,x.uvTransform)),f.alphaMap&&(x.alphaMap.value=f.alphaMap,n(f.alphaMap,x.alphaMapTransform)),f.alphaTest>0&&(x.alphaTest.value=f.alphaTest)}function u(x,f){x.diffuse.value.copy(f.color),x.opacity.value=f.opacity,x.rotation.value=f.rotation,f.map&&(x.map.value=f.map,n(f.map,x.mapTransform)),f.alphaMap&&(x.alphaMap.value=f.alphaMap,n(f.alphaMap,x.alphaMapTransform)),f.alphaTest>0&&(x.alphaTest.value=f.alphaTest)}function h(x,f){x.specular.value.copy(f.specular),x.shininess.value=Math.max(f.shininess,1e-4)}function p(x,f){f.gradientMap&&(x.gradientMap.value=f.gradientMap)}function d(x,f){x.metalness.value=f.metalness,f.metalnessMap&&(x.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,x.metalnessMapTransform)),x.roughness.value=f.roughness,f.roughnessMap&&(x.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,x.roughnessMapTransform)),f.envMap&&(x.envMapIntensity.value=f.envMapIntensity)}function m(x,f,y){x.ior.value=f.ior,f.sheen>0&&(x.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),x.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(x.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,x.sheenColorMapTransform)),f.sheenRoughnessMap&&(x.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,x.sheenRoughnessMapTransform))),f.clearcoat>0&&(x.clearcoat.value=f.clearcoat,x.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(x.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,x.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(x.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===pn&&x.clearcoatNormalScale.value.negate())),f.dispersion>0&&(x.dispersion.value=f.dispersion),f.iridescence>0&&(x.iridescence.value=f.iridescence,x.iridescenceIOR.value=f.iridescenceIOR,x.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(x.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,x.iridescenceMapTransform)),f.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),f.transmission>0&&(x.transmission.value=f.transmission,x.transmissionSamplerMap.value=y.texture,x.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(x.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,x.transmissionMapTransform)),x.thickness.value=f.thickness,f.thicknessMap&&(x.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=f.attenuationDistance,x.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(x.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(x.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=f.specularIntensity,x.specularColor.value.copy(f.specularColor),f.specularColorMap&&(x.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,x.specularColorMapTransform)),f.specularIntensityMap&&(x.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,x.specularIntensityMapTransform))}function g(x,f){f.matcap&&(x.matcap.value=f.matcap)}function b(x,f){const y=e.get(f).light;x.referencePosition.value.setFromMatrixPosition(y.matrixWorld),x.nearDistance.value=y.shadow.camera.near,x.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Mb(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,T){const w=T.program;i.uniformBlockBinding(S,w)}function u(S,T){let w=r[S.id];w===void 0&&(x(S),w=h(S),r[S.id]=w,S.addEventListener("dispose",y));const C=T.program;i.updateUBOMapping(S,C);const _=e.render.frame;s[S.id]!==_&&(d(S),s[S.id]=_)}function h(S){const T=p();S.__bindingPointIndex=T;const w=t.createBuffer(),C=S.__size,_=S.usage;return t.bindBuffer(t.UNIFORM_BUFFER,w),t.bufferData(t.UNIFORM_BUFFER,C,_),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,T,w),w}function p(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return Qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const T=r[S.id],w=S.uniforms,C=S.__cache;t.bindBuffer(t.UNIFORM_BUFFER,T);for(let _=0,R=w.length;_<R;_++){const L=w[_];if(Array.isArray(L))for(let P=0,F=L.length;P<F;P++)m(L[P],_,P,C);else m(L,_,0,C)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(S,T,w,C){if(b(S,T,w,C)===!0){const _=S.__offset,R=S.value;if(Array.isArray(R)){let L=0;for(let P=0;P<R.length;P++){const F=R[P],I=f(F);g(F,S.__data,L),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(L+=I.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(R,S.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,_,S.__data)}}function g(S,T,w){typeof S=="number"||typeof S=="boolean"?T[0]=S:S.isMatrix3?(T[0]=S.elements[0],T[1]=S.elements[1],T[2]=S.elements[2],T[3]=0,T[4]=S.elements[3],T[5]=S.elements[4],T[6]=S.elements[5],T[7]=0,T[8]=S.elements[6],T[9]=S.elements[7],T[10]=S.elements[8],T[11]=0):ArrayBuffer.isView(S)?T.set(new S.constructor(S.buffer,S.byteOffset,T.length)):S.toArray(T,w)}function b(S,T,w,C){const _=S.value,R=T+"_"+w;if(C[R]===void 0)return typeof _=="number"||typeof _=="boolean"?C[R]=_:ArrayBuffer.isView(_)?C[R]=_.slice():C[R]=_.clone(),!0;{const L=C[R];if(typeof _=="number"||typeof _=="boolean"){if(L!==_)return C[R]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(L.equals(_)===!1)return L.copy(_),!0}}return!1}function x(S){const T=S.uniforms;let w=0;const C=16;for(let R=0,L=T.length;R<L;R++){const P=Array.isArray(T[R])?T[R]:[T[R]];for(let F=0,I=P.length;F<I;F++){const $=P[F],B=Array.isArray($.value)?$.value:[$.value];for(let q=0,G=B.length;q<G;q++){const D=B[q],W=f(D),Y=w%C,ne=Y%W.boundary,re=Y+ne;w+=ne,re!==0&&C-re<W.storage&&(w+=C-re),$.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=w,w+=W.storage}}}const _=w%C;return _>0&&(w+=C-_),S.__size=w,S.__cache={},this}function f(S){const T={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(T.boundary=4,T.storage=4):S.isVector2?(T.boundary=8,T.storage=8):S.isVector3||S.isColor?(T.boundary=16,T.storage=12):S.isVector4?(T.boundary=16,T.storage=16):S.isMatrix3?(T.boundary=48,T.storage=48):S.isMatrix4?(T.boundary=64,T.storage=64):S.isTexture?De("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(T.boundary=16,T.storage=S.byteLength):De("WebGLRenderer: Unsupported uniform value type.",S),T}function y(S){const T=S.target;T.removeEventListener("dispose",y);const w=a.indexOf(T.__bindingPointIndex);a.splice(w,1),t.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function M(){for(const S in r)t.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:l,update:u,dispose:M}}const Eb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ti=null;function bb(){return ti===null&&(ti=new xy(Eb,16,16,Gr,Ui),ti.name="DFG_LUT",ti.minFilter=Qt,ti.magFilter=Qt,ti.wrapS=wi,ti.wrapT=wi,ti.generateMipmaps=!1,ti.needsUpdate=!0),ti}class wb{constructor(e={}){const{canvas:n=P2(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:d=!1,outputBufferType:m=Ln}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const b=m,x=new Set([_h,vh,gh]),f=new Set([Ln,fi,ro,so,mh,xh]),y=new Uint32Array(4),M=new Int32Array(4),S=new X;let T=null,w=null;const C=[],_=[];let R=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ci,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let P=!1,F=null,I=null,$=null,B=null;this._outputColorSpace=Rn;let q=0,G=0,D=null,W=-1,Y=null;const ne=new wt,re=new wt;let Ie=null;const Ke=new nt(0);let je=0,Q=n.width,ce=n.height,se=1,Le=null,Fe=null;const Ne=new wt(0,0,Q,ce),ie=new wt(0,0,Q,ce);let ze=!1;const tt=new Dg;let qe=!1,Ge=!1;const vt=new Lt,xt=new X,Tt=new wt,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let dt=!1;function ft(){return D===null?se:1}let O=i;function Vt(E,z){return n.getContext(E,z)}try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${hh}`),n.addEventListener("webglcontextlost",ht,!1),n.addEventListener("webglcontextrestored",it,!1),n.addEventListener("webglcontextcreationerror",mn,!1),O===null){const z="webgl2";if(O=Vt(z,E),O===null)throw Vt(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(E){throw Qe("WebGLRenderer: "+E.message),E}let et,A,v,H,j,K,oe,fe,Z,ee,he,Ae,ge,xe,Ce,Pe,Ue,U,de,J,pe,ve,te;function we(){et=new bE(O),et.init(),pe=new mb(O,et),A=new xE(O,et,e,pe),v=new hb(O,et),A.reversedDepthBuffer&&d&&v.buffers.depth.setReversed(!0),I=O.createFramebuffer(),$=O.createFramebuffer(),B=O.createFramebuffer(),H=new AE(O),j=new J3,K=new pb(O,et,v,j,A,pe,H),oe=new EE(L),fe=new Py(O),ve=new pE(O,fe),Z=new wE(O,fe,H,ve),ee=new RE(O,Z,fe,ve,H),U=new CE(O,A,K),Ce=new gE(j),he=new Q3(L,oe,et,A,ve,Ce),Ae=new Sb(L,j),ge=new tb,xe=new ob(et),Ue=new hE(L,oe,v,ee,g,l),Pe=new fb(L,ee,A),te=new Mb(O,H,A,v),de=new mE(O,et,H),J=new TE(O,et,H),H.programs=he.programs,L.capabilities=A,L.extensions=et,L.properties=j,L.renderLists=ge,L.shadowMap=Pe,L.state=v,L.info=H}we(),b!==Ln&&(R=new PE(b,n.width,n.height,o,r,s));const Ee=new _b(L,O);this.xr=Ee,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const E=et.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=et.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(E){E!==void 0&&(se=E,this.setSize(Q,ce,!1))},this.getSize=function(E){return E.set(Q,ce)},this.setSize=function(E,z,N=!0){if(Ee.isPresenting){De("WebGLRenderer: Can't change size while VR device is presenting.");return}Q=E,ce=z,n.width=Math.floor(E*se),n.height=Math.floor(z*se),N===!0&&(n.style.width=E+"px",n.style.height=z+"px"),R!==null&&R.setSize(n.width,n.height),this.setViewport(0,0,E,z)},this.getDrawingBufferSize=function(E){return E.set(Q*se,ce*se).floor()},this.setDrawingBufferSize=function(E,z,N){Q=E,ce=z,se=N,n.width=Math.floor(E*N),n.height=Math.floor(z*N),this.setViewport(0,0,E,z)},this.setEffects=function(E){if(b===Ln){Qe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let z=0;z<E.length;z++)if(E[z].isOutputPass===!0){De("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(ne)},this.getViewport=function(E){return E.copy(Ne)},this.setViewport=function(E,z,N,k){E.isVector4?Ne.set(E.x,E.y,E.z,E.w):Ne.set(E,z,N,k),v.viewport(ne.copy(Ne).multiplyScalar(se).round())},this.getScissor=function(E){return E.copy(ie)},this.setScissor=function(E,z,N,k){E.isVector4?ie.set(E.x,E.y,E.z,E.w):ie.set(E,z,N,k),v.scissor(re.copy(ie).multiplyScalar(se).round())},this.getScissorTest=function(){return ze},this.setScissorTest=function(E){v.setScissorTest(ze=E)},this.setOpaqueSort=function(E){Le=E},this.setTransparentSort=function(E){Fe=E},this.getClearColor=function(E){return E.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor(...arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha(...arguments)},this.clear=function(E=!0,z=!0,N=!0){let k=0;if(E){let V=!1;if(D!==null){const le=D.texture.format;V=x.has(le)}if(V){const le=D.texture.type,_e=f.has(le),me=Ue.getClearColor(),Te=Ue.getClearAlpha(),be=me.r,ke=me.g,Ve=me.b;_e?(y[0]=be,y[1]=ke,y[2]=Ve,y[3]=Te,O.clearBufferuiv(O.COLOR,0,y)):(M[0]=be,M[1]=ke,M[2]=Ve,M[3]=Te,O.clearBufferiv(O.COLOR,0,M))}else k|=O.COLOR_BUFFER_BIT}z&&(k|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),N&&(k|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&O.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),F=E},this.dispose=function(){n.removeEventListener("webglcontextlost",ht,!1),n.removeEventListener("webglcontextrestored",it,!1),n.removeEventListener("webglcontextcreationerror",mn,!1),Ue.dispose(),ge.dispose(),xe.dispose(),j.dispose(),oe.dispose(),ee.dispose(),ve.dispose(),te.dispose(),he.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",ta),Ee.removeEventListener("sessionend",na),Zn.stop()};function ht(E){E.preventDefault(),nm("WebGLRenderer: Context Lost."),P=!0}function it(){nm("WebGLRenderer: Context Restored."),P=!1;const E=H.autoReset,z=Pe.enabled,N=Pe.autoUpdate,k=Pe.needsUpdate,V=Pe.type;we(),H.autoReset=E,Pe.enabled=z,Pe.autoUpdate=N,Pe.needsUpdate=k,Pe.type=V}function mn(E){Qe("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function xn(E){const z=E.target;z.removeEventListener("dispose",xn),xo(z)}function xo(E){go(E),j.remove(E)}function go(E){const z=j.get(E).programs;z!==void 0&&(z.forEach(function(N){he.releaseProgram(N)}),E.isShaderMaterial&&he.releaseShaderCache(E))}this.renderBufferDirect=function(E,z,N,k,V,le){z===null&&(z=Mt);const _e=V.isMesh&&V.matrixWorld.determinantAffine()<0,me=yo(E,z,N,k,V);v.setMaterial(k,_e);let Te=N.index,be=1;if(k.wireframe===!0){if(Te=Z.getWireframeAttribute(N),Te===void 0)return;be=2}const ke=N.drawRange,Ve=N.attributes.position;let Re=ke.start*be,at=(ke.start+ke.count)*be;le!==null&&(Re=Math.max(Re,le.start*be),at=Math.min(at,(le.start+le.count)*be)),Te!==null?(Re=Math.max(Re,0),at=Math.min(at,Te.count)):Ve!=null&&(Re=Math.max(Re,0),at=Math.min(at,Ve.count));const At=at-Re;if(At<0||At===1/0)return;ve.setup(V,k,me,N,Te);let Et,ot=de;if(Te!==null&&(Et=fe.get(Te),ot=J,ot.setIndex(Et)),V.isMesh)k.wireframe===!0?(v.setLineWidth(k.wireframeLinewidth*ft()),ot.setMode(O.LINES)):ot.setMode(O.TRIANGLES);else if(V.isLine){let Xt=k.linewidth;Xt===void 0&&(Xt=1),v.setLineWidth(Xt*ft()),V.isLineSegments?ot.setMode(O.LINES):V.isLineLoop?ot.setMode(O.LINE_LOOP):ot.setMode(O.LINE_STRIP)}else V.isPoints?ot.setMode(O.POINTS):V.isSprite&&ot.setMode(O.TRIANGLES);if(V.isBatchedMesh)if(et.get("WEBGL_multi_draw"))ot.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Xt=V._multiDrawStarts,Se=V._multiDrawCounts,gn=V._multiDrawCount,Ze=Te?fe.get(Te).bytesPerElement:1,An=j.get(k).currentProgram.getUniforms();for(let Qn=0;Qn<gn;Qn++)An.setValue(O,"_gl_DrawID",Qn),ot.render(Xt[Qn]/Ze,Se[Qn])}else if(V.isInstancedMesh)ot.renderInstances(Re,At,V.count);else if(N.isInstancedBufferGeometry){const Xt=N._maxInstanceCount!==void 0?N._maxInstanceCount:1/0,Se=Math.min(N.instanceCount,Xt);ot.renderInstances(Re,At,Se)}else ot.render(Re,At)};function ea(E,z,N){E.transparent===!0&&E.side===Mi&&E.forceSinglePass===!1?(E.side=pn,E.needsUpdate=!0,yr(E,z,N),E.side=mr,E.needsUpdate=!0,yr(E,z,N),E.side=Mi):yr(E,z,N)}this.compile=function(E,z,N=null){N===null&&(N=E),w=xe.get(N),w.init(z),_.push(w),N.traverseVisible(function(V){V.isLight&&V.layers.test(z.layers)&&(w.pushLight(V),V.castShadow&&w.pushShadow(V))}),E!==N&&E.traverseVisible(function(V){V.isLight&&V.layers.test(z.layers)&&(w.pushLight(V),V.castShadow&&w.pushShadow(V))}),w.setupLights();const k=new Set;return E.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const le=V.material;if(le)if(Array.isArray(le))for(let _e=0;_e<le.length;_e++){const me=le[_e];ea(me,N,V),k.add(me)}else ea(le,N,V),k.add(le)}),w=_.pop(),k},this.compileAsync=function(E,z,N=null){const k=this.compile(E,z,N);return new Promise(V=>{function le(){if(k.forEach(function(_e){j.get(_e).currentProgram.isReady()&&k.delete(_e)}),k.size===0){V(E);return}setTimeout(le,10)}et.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let qr=null;function vo(E){qr&&qr(E)}function ta(){Zn.stop()}function na(){Zn.start()}const Zn=new kg;Zn.setAnimationLoop(vo),typeof self<"u"&&Zn.setContext(self),this.setAnimationLoop=function(E){qr=E,Ee.setAnimationLoop(E),E===null?Zn.stop():Zn.start()},Ee.addEventListener("sessionstart",ta),Ee.addEventListener("sessionend",na),this.render=function(E,z){if(z!==void 0&&z.isCamera!==!0){Qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;F!==null&&F.renderStart(E,z);const N=Ee.enabled===!0&&Ee.isPresenting===!0,k=R!==null&&(D===null||N)&&R.begin(L,D);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(z),z=Ee.getCamera()),E.isScene===!0&&E.onBeforeRender(L,E,z,D),w=xe.get(E,_.length),w.init(z),w.state.textureUnits=K.getTextureUnits(),_.push(w),vt.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),tt.setFromProjectionMatrix(vt,ai,z.reversedDepth),Ge=this.localClippingEnabled,qe=Ce.init(this.clippingPlanes,Ge),T=ge.get(E,C.length),T.init(),C.push(T),Ee.enabled===!0&&Ee.isPresenting===!0){const _e=L.xr.getDepthSensingMesh();_e!==null&&Yr(_e,z,-1/0,L.sortObjects)}Yr(E,z,0,L.sortObjects),T.finish(),L.sortObjects===!0&&T.sort(Le,Fe,z.reversedDepth),dt=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1,dt&&Ue.addToRenderList(T,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),qe===!0&&Ce.beginShadows();const V=w.state.shadowsArray;if(Pe.render(V,E,z),qe===!0&&Ce.endShadows(),(k&&R.hasRenderPass())===!1){const _e=T.opaque,me=T.transmissive;if(w.setupLights(),z.isArrayCamera){const Te=z.cameras;if(me.length>0)for(let be=0,ke=Te.length;be<ke;be++){const Ve=Te[be];ra(_e,me,E,Ve)}dt&&Ue.render(E);for(let be=0,ke=Te.length;be<ke;be++){const Ve=Te[be];ia(T,E,Ve,Ve.viewport)}}else me.length>0&&ra(_e,me,E,z),dt&&Ue.render(E),ia(T,E,z)}D!==null&&G===0&&(K.updateMultisampleRenderTarget(D),K.updateRenderTargetMipmap(D)),k&&R.end(L),E.isScene===!0&&E.onAfterRender(L,E,z),ve.resetDefaultState(),W=-1,Y=null,_.pop(),_.length>0?(w=_[_.length-1],K.setTextureUnits(w.state.textureUnits),qe===!0&&Ce.setGlobalState(L.clippingPlanes,w.state.camera)):w=null,C.pop(),C.length>0?T=C[C.length-1]:T=null,F!==null&&F.renderEnd()};function Yr(E,z,N,k){if(E.visible===!1)return;if(E.layers.test(z.layers)){if(E.isGroup)N=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(z);else if(E.isLightProbeGrid)w.pushLightProbeGrid(E);else if(E.isLight)w.pushLight(E),E.castShadow&&w.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||tt.intersectsSprite(E)){k&&Tt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(vt);const _e=ee.update(E),me=E.material;me.visible&&T.push(E,_e,me,N,Tt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||tt.intersectsObject(E))){const _e=ee.update(E),me=E.material;if(k&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Tt.copy(E.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),Tt.copy(_e.boundingSphere.center)),Tt.applyMatrix4(E.matrixWorld).applyMatrix4(vt)),Array.isArray(me)){const Te=_e.groups;for(let be=0,ke=Te.length;be<ke;be++){const Ve=Te[be],Re=me[Ve.materialIndex];Re&&Re.visible&&T.push(E,_e,Re,N,Tt.z,Ve)}}else me.visible&&T.push(E,_e,me,N,Tt.z,null)}}const le=E.children;for(let _e=0,me=le.length;_e<me;_e++)Yr(le[_e],z,N,k)}function ia(E,z,N,k){const{opaque:V,transmissive:le,transparent:_e}=E;w.setupLightsView(N),qe===!0&&Ce.setGlobalState(L.clippingPlanes,N),k&&v.viewport(ne.copy(k)),V.length>0&&_r(V,z,N),le.length>0&&_r(le,z,N),_e.length>0&&_r(_e,z,N),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function ra(E,z,N,k){if((N.isScene===!0?N.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[k.id]===void 0){const Re=et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[k.id]=new ui(1,1,{generateMipmaps:!0,type:Re?Ui:Ln,minFilter:Dr,samples:Math.max(4,A.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace})}const le=w.state.transmissionRenderTarget[k.id],_e=k.viewport||ne;le.setSize(_e.z*L.transmissionResolutionScale,_e.w*L.transmissionResolutionScale);const me=L.getRenderTarget(),Te=L.getActiveCubeFace(),be=L.getActiveMipmapLevel();L.setRenderTarget(le),L.getClearColor(Ke),je=L.getClearAlpha(),je<1&&L.setClearColor(16777215,.5),L.clear(),dt&&Ue.render(N);const ke=L.toneMapping;L.toneMapping=ci;const Ve=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),w.setupLightsView(k),qe===!0&&Ce.setGlobalState(L.clippingPlanes,k),_r(E,N,k),K.updateMultisampleRenderTarget(le),K.updateRenderTargetMipmap(le),et.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let at=0,At=z.length;at<At;at++){const Et=z[at],{object:ot,geometry:Xt,material:Se,group:gn}=Et;if(Se.side===Mi&&ot.layers.test(k.layers)){const Ze=Se.side;Se.side=pn,Se.needsUpdate=!0,sa(ot,N,k,Xt,Se,gn),Se.side=Ze,Se.needsUpdate=!0,Re=!0}}Re===!0&&(K.updateMultisampleRenderTarget(le),K.updateRenderTargetMipmap(le))}L.setRenderTarget(me,Te,be),L.setClearColor(Ke,je),Ve!==void 0&&(k.viewport=Ve),L.toneMapping=ke}function _r(E,z,N){const k=z.isScene===!0?z.overrideMaterial:null;for(let V=0,le=E.length;V<le;V++){const _e=E[V],{object:me,geometry:Te,group:be}=_e;let ke=_e.material;ke.allowOverride===!0&&k!==null&&(ke=k),me.layers.test(N.layers)&&sa(me,z,N,Te,ke,be)}}function sa(E,z,N,k,V,le){E.onBeforeRender(L,z,N,k,V,le),E.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),V.onBeforeRender(L,z,N,k,E,le),V.transparent===!0&&V.side===Mi&&V.forceSinglePass===!1?(V.side=pn,V.needsUpdate=!0,L.renderBufferDirect(N,z,k,V,E,le),V.side=mr,V.needsUpdate=!0,L.renderBufferDirect(N,z,k,V,E,le),V.side=Mi):L.renderBufferDirect(N,z,k,V,E,le),E.onAfterRender(L,z,N,k,V,le)}function yr(E,z,N){z.isScene!==!0&&(z=Mt);const k=j.get(E),V=w.state.lights,le=w.state.shadowsArray,_e=V.state.version,me=he.getParameters(E,V.state,le,z,N,w.state.lightProbeGridArray),Te=he.getProgramCacheKey(me);let be=k.programs;k.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?z.environment:null,k.fog=z.fog;const ke=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;k.envMap=oe.get(E.envMap||k.environment,ke),k.envMapRotation=k.environment!==null&&E.envMap===null?z.environmentRotation:E.envMapRotation,be===void 0&&(E.addEventListener("dispose",xn),be=new Map,k.programs=be);let Ve=be.get(Te);if(Ve!==void 0){if(k.currentProgram===Ve&&k.lightsStateVersion===_e)return oa(E,me),Ve}else me.uniforms=he.getUniforms(E),F!==null&&E.isNodeMaterial&&F.build(E,N,me),E.onBeforeCompile(me,L),Ve=he.acquireProgram(me,Te),be.set(Te,Ve),k.uniforms=me.uniforms;const Re=k.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Re.clippingPlanes=Ce.uniform),oa(E,me),k.needsLights=Mo(E),k.lightsStateVersion=_e,k.needsLights&&(Re.ambientLightColor.value=V.state.ambient,Re.lightProbe.value=V.state.probe,Re.directionalLights.value=V.state.directional,Re.directionalLightShadows.value=V.state.directionalShadow,Re.spotLights.value=V.state.spot,Re.spotLightShadows.value=V.state.spotShadow,Re.rectAreaLights.value=V.state.rectArea,Re.ltc_1.value=V.state.rectAreaLTC1,Re.ltc_2.value=V.state.rectAreaLTC2,Re.pointLights.value=V.state.point,Re.pointLightShadows.value=V.state.pointShadow,Re.hemisphereLights.value=V.state.hemi,Re.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Re.spotLightMatrix.value=V.state.spotLightMatrix,Re.spotLightMap.value=V.state.spotLightMap,Re.pointShadowMatrix.value=V.state.pointShadowMatrix),k.lightProbeGrid=w.state.lightProbeGridArray.length>0,k.currentProgram=Ve,k.uniformsList=null,Ve}function aa(E){if(E.uniformsList===null){const z=E.currentProgram.getUniforms();E.uniformsList=Tl.seqWithValue(z.seq,E.uniforms)}return E.uniformsList}function oa(E,z){const N=j.get(E);N.outputColorSpace=z.outputColorSpace,N.batching=z.batching,N.batchingColor=z.batchingColor,N.instancing=z.instancing,N.instancingColor=z.instancingColor,N.instancingMorph=z.instancingMorph,N.skinning=z.skinning,N.morphTargets=z.morphTargets,N.morphNormals=z.morphNormals,N.morphColors=z.morphColors,N.morphTargetsCount=z.morphTargetsCount,N.numClippingPlanes=z.numClippingPlanes,N.numIntersection=z.numClipIntersection,N.vertexAlphas=z.vertexAlphas,N.vertexTangents=z.vertexTangents,N.toneMapping=z.toneMapping}function _o(E,z){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;S.setFromMatrixPosition(z.matrixWorld);for(let N=0,k=E.length;N<k;N++){const V=E[N];if(V.texture!==null&&V.boundingBox.containsPoint(S))return V}return null}function yo(E,z,N,k,V){z.isScene!==!0&&(z=Mt),K.resetTextureUnits();const le=z.fog,_e=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?z.environment:null,me=D===null?L.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Ye.workingColorSpace,Te=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,be=oe.get(k.envMap||_e,Te),ke=k.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,Ve=!!N.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Re=!!N.morphAttributes.position,at=!!N.morphAttributes.normal,At=!!N.morphAttributes.color;let Et=ci;k.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Et=L.toneMapping);const ot=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,Xt=ot!==void 0?ot.length:0,Se=j.get(k),gn=w.state.lights;if(qe===!0&&(Ge===!0||E!==Y)){const ct=E===Y&&k.id===W;Ce.setState(k,E,ct)}let Ze=!1;k.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==gn.state.version||Se.outputColorSpace!==me||V.isBatchedMesh&&Se.batching===!1||!V.isBatchedMesh&&Se.batching===!0||V.isBatchedMesh&&Se.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Se.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Se.instancing===!1||!V.isInstancedMesh&&Se.instancing===!0||V.isSkinnedMesh&&Se.skinning===!1||!V.isSkinnedMesh&&Se.skinning===!0||V.isInstancedMesh&&Se.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Se.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Se.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Se.instancingMorph===!1&&V.morphTexture!==null||Se.envMap!==be||k.fog===!0&&Se.fog!==le||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==Ce.numPlanes||Se.numIntersection!==Ce.numIntersection)||Se.vertexAlphas!==ke||Se.vertexTangents!==Ve||Se.morphTargets!==Re||Se.morphNormals!==at||Se.morphColors!==At||Se.toneMapping!==Et||Se.morphTargetsCount!==Xt||!!Se.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(Ze=!0):(Ze=!0,Se.__version=k.version);let An=Se.currentProgram;Ze===!0&&(An=yr(k,z,V),F&&k.isNodeMaterial&&F.onUpdateProgram(k,An,Se));let Qn=!1,zi=!1,Kr=!1;const lt=An.getUniforms(),Ct=Se.uniforms;if(v.useProgram(An.program)&&(Qn=!0,zi=!0,Kr=!0),k.id!==W&&(W=k.id,zi=!0),Se.needsLights){const ct=_o(w.state.lightProbeGridArray,V);Se.lightProbeGrid!==ct&&(Se.lightProbeGrid=ct,zi=!0)}if(Qn||Y!==E){v.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),lt.setValue(O,"projectionMatrix",E.projectionMatrix),lt.setValue(O,"viewMatrix",E.matrixWorldInverse);const Hi=lt.map.cameraPosition;Hi!==void 0&&Hi.setValue(O,xt.setFromMatrixPosition(E.matrixWorld)),A.logarithmicDepthBuffer&&lt.setValue(O,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&lt.setValue(O,"isOrthographic",E.isOrthographicCamera===!0),Y!==E&&(Y=E,zi=!0,Kr=!0)}if(Se.needsLights&&(gn.state.directionalShadowMap.length>0&&lt.setValue(O,"directionalShadowMap",gn.state.directionalShadowMap,K),gn.state.spotShadowMap.length>0&&lt.setValue(O,"spotShadowMap",gn.state.spotShadowMap,K),gn.state.pointShadowMap.length>0&&lt.setValue(O,"pointShadowMap",gn.state.pointShadowMap,K)),V.isSkinnedMesh){lt.setOptional(O,V,"bindMatrix"),lt.setOptional(O,V,"bindMatrixInverse");const ct=V.skeleton;ct&&(ct.boneTexture===null&&ct.computeBoneTexture(),lt.setValue(O,"boneTexture",ct.boneTexture,K))}V.isBatchedMesh&&(lt.setOptional(O,V,"batchingTexture"),lt.setValue(O,"batchingTexture",V._matricesTexture,K),lt.setOptional(O,V,"batchingIdTexture"),lt.setValue(O,"batchingIdTexture",V._indirectTexture,K),lt.setOptional(O,V,"batchingColorTexture"),V._colorsTexture!==null&&lt.setValue(O,"batchingColorTexture",V._colorsTexture,K));const Vi=N.morphAttributes;if((Vi.position!==void 0||Vi.normal!==void 0||Vi.color!==void 0)&&U.update(V,N,An),(zi||Se.receiveShadow!==V.receiveShadow)&&(Se.receiveShadow=V.receiveShadow,lt.setValue(O,"receiveShadow",V.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&z.environment!==null&&(Ct.envMapIntensity.value=z.environmentIntensity),Ct.dfgLUT!==void 0&&(Ct.dfgLUT.value=bb()),zi){if(lt.setValue(O,"toneMappingExposure",L.toneMappingExposure),Se.needsLights&&So(Ct,Kr),le&&k.fog===!0&&Ae.refreshFogUniforms(Ct,le),Ae.refreshMaterialUniforms(Ct,k,se,ce,w.state.transmissionRenderTarget[E.id]),Se.needsLights&&Se.lightProbeGrid){const ct=Se.lightProbeGrid;Ct.probesSH.value=ct.texture,Ct.probesMin.value.copy(ct.boundingBox.min),Ct.probesMax.value.copy(ct.boundingBox.max),Ct.probesResolution.value.copy(ct.resolution)}Tl.upload(O,aa(Se),Ct,K)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Tl.upload(O,aa(Se),Ct,K),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&lt.setValue(O,"center",V.center),lt.setValue(O,"modelViewMatrix",V.modelViewMatrix),lt.setValue(O,"normalMatrix",V.normalMatrix),lt.setValue(O,"modelMatrix",V.matrixWorld),k.uniformsGroups!==void 0){const ct=k.uniformsGroups;for(let Hi=0,Zr=ct.length;Hi<Zr;Hi++){const Ph=ct[Hi];te.update(Ph,An),te.bind(Ph,An)}}return An}function So(E,z){E.ambientLightColor.needsUpdate=z,E.lightProbe.needsUpdate=z,E.directionalLights.needsUpdate=z,E.directionalLightShadows.needsUpdate=z,E.pointLights.needsUpdate=z,E.pointLightShadows.needsUpdate=z,E.spotLights.needsUpdate=z,E.spotLightShadows.needsUpdate=z,E.rectAreaLights.needsUpdate=z,E.hemisphereLights.needsUpdate=z}function Mo(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(E,z,N){const k=j.get(E);k.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),j.get(E.texture).__webglTexture=z,j.get(E.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:N,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,z){const N=j.get(E);N.__webglFramebuffer=z,N.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(E,z=0,N=0){D=E,q=z,G=N;let k=null,V=!1,le=!1;if(E){const me=j.get(E);if(me.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(O.FRAMEBUFFER,me.__webglFramebuffer),ne.copy(E.viewport),re.copy(E.scissor),Ie=E.scissorTest,v.viewport(ne),v.scissor(re),v.setScissorTest(Ie),W=-1;return}else if(me.__webglFramebuffer===void 0)K.setupRenderTarget(E);else if(me.__hasExternalTextures)K.rebindTextures(E,j.get(E.texture).__webglTexture,j.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const ke=E.depthTexture;if(me.__boundDepthTexture!==ke){if(ke!==null&&j.has(ke)&&(E.width!==ke.image.width||E.height!==ke.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(E)}}const Te=E.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(le=!0);const be=j.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(be[z])?k=be[z][N]:k=be[z],V=!0):E.samples>0&&K.useMultisampledRTT(E)===!1?k=j.get(E).__webglMultisampledFramebuffer:Array.isArray(be)?k=be[N]:k=be,ne.copy(E.viewport),re.copy(E.scissor),Ie=E.scissorTest}else ne.copy(Ne).multiplyScalar(se).floor(),re.copy(ie).multiplyScalar(se).floor(),Ie=ze;if(N!==0&&(k=I),v.bindFramebuffer(O.FRAMEBUFFER,k)&&v.drawBuffers(E,k),v.viewport(ne),v.scissor(re),v.setScissorTest(Ie),V){const me=j.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+z,me.__webglTexture,N)}else if(le){const me=z;for(let Te=0;Te<E.textures.length;Te++){const be=j.get(E.textures[Te]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Te,be.__webglTexture,N,me)}}else if(E!==null&&N!==0){const me=j.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,me.__webglTexture,N)}W=-1},this.readRenderTargetPixels=function(E,z,N,k,V,le,_e,me=0){if(!(E&&E.isWebGLRenderTarget)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=j.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&_e!==void 0&&(Te=Te[_e]),Te){v.bindFramebuffer(O.FRAMEBUFFER,Te);try{const be=E.textures[me],ke=be.format,Ve=be.type;if(E.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+me),!A.textureFormatReadable(ke)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!A.textureTypeReadable(Ve)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=E.width-k&&N>=0&&N<=E.height-V&&O.readPixels(z,N,k,V,pe.convert(ke),pe.convert(Ve),le)}finally{const be=D!==null?j.get(D).__webglFramebuffer:null;v.bindFramebuffer(O.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(E,z,N,k,V,le,_e,me=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=j.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&_e!==void 0&&(Te=Te[_e]),Te)if(z>=0&&z<=E.width-k&&N>=0&&N<=E.height-V){v.bindFramebuffer(O.FRAMEBUFFER,Te);const be=E.textures[me],ke=be.format,Ve=be.type;if(E.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+me),!A.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!A.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Re=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Re),O.bufferData(O.PIXEL_PACK_BUFFER,le.byteLength,O.STREAM_READ),O.readPixels(z,N,k,V,pe.convert(ke),pe.convert(Ve),0);const at=D!==null?j.get(D).__webglFramebuffer:null;v.bindFramebuffer(O.FRAMEBUFFER,at);const At=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await L2(O,At,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Re),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,le),O.deleteBuffer(Re),O.deleteSync(At),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,z=null,N=0){const k=Math.pow(2,-N),V=Math.floor(E.image.width*k),le=Math.floor(E.image.height*k),_e=z!==null?z.x:0,me=z!==null?z.y:0;K.setTexture2D(E,0),O.copyTexSubImage2D(O.TEXTURE_2D,N,0,0,_e,me,V,le),v.unbindTexture()},this.copyTextureToTexture=function(E,z,N=null,k=null,V=0,le=0){let _e,me,Te,be,ke,Ve,Re,at,At;const Et=E.isCompressedTexture?E.mipmaps[le]:E.image;if(N!==null)_e=N.max.x-N.min.x,me=N.max.y-N.min.y,Te=N.isBox3?N.max.z-N.min.z:1,be=N.min.x,ke=N.min.y,Ve=N.isBox3?N.min.z:0;else{const Ct=Math.pow(2,-V);_e=Math.floor(Et.width*Ct),me=Math.floor(Et.height*Ct),E.isDataArrayTexture?Te=Et.depth:E.isData3DTexture?Te=Math.floor(Et.depth*Ct):Te=1,be=0,ke=0,Ve=0}k!==null?(Re=k.x,at=k.y,At=k.z):(Re=0,at=0,At=0);const ot=pe.convert(z.format),Xt=pe.convert(z.type);let Se;z.isData3DTexture?(K.setTexture3D(z,0),Se=O.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(K.setTexture2DArray(z,0),Se=O.TEXTURE_2D_ARRAY):(K.setTexture2D(z,0),Se=O.TEXTURE_2D),v.activeTexture(O.TEXTURE0),v.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,z.flipY),v.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),v.pixelStorei(O.UNPACK_ALIGNMENT,z.unpackAlignment);const gn=v.getParameter(O.UNPACK_ROW_LENGTH),Ze=v.getParameter(O.UNPACK_IMAGE_HEIGHT),An=v.getParameter(O.UNPACK_SKIP_PIXELS),Qn=v.getParameter(O.UNPACK_SKIP_ROWS),zi=v.getParameter(O.UNPACK_SKIP_IMAGES);v.pixelStorei(O.UNPACK_ROW_LENGTH,Et.width),v.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Et.height),v.pixelStorei(O.UNPACK_SKIP_PIXELS,be),v.pixelStorei(O.UNPACK_SKIP_ROWS,ke),v.pixelStorei(O.UNPACK_SKIP_IMAGES,Ve);const Kr=E.isDataArrayTexture||E.isData3DTexture,lt=z.isDataArrayTexture||z.isData3DTexture;if(E.isDepthTexture){const Ct=j.get(E),Vi=j.get(z),ct=j.get(Ct.__renderTarget),Hi=j.get(Vi.__renderTarget);v.bindFramebuffer(O.READ_FRAMEBUFFER,ct.__webglFramebuffer),v.bindFramebuffer(O.DRAW_FRAMEBUFFER,Hi.__webglFramebuffer);for(let Zr=0;Zr<Te;Zr++)Kr&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,j.get(E).__webglTexture,V,Ve+Zr),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,j.get(z).__webglTexture,le,At+Zr)),O.blitFramebuffer(be,ke,_e,me,Re,at,_e,me,O.DEPTH_BUFFER_BIT,O.NEAREST);v.bindFramebuffer(O.READ_FRAMEBUFFER,null),v.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(V!==0||E.isRenderTargetTexture||j.has(E)){const Ct=j.get(E),Vi=j.get(z);v.bindFramebuffer(O.READ_FRAMEBUFFER,$),v.bindFramebuffer(O.DRAW_FRAMEBUFFER,B);for(let ct=0;ct<Te;ct++)Kr?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ct.__webglTexture,V,Ve+ct):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ct.__webglTexture,V),lt?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Vi.__webglTexture,le,At+ct):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Vi.__webglTexture,le),V!==0?O.blitFramebuffer(be,ke,_e,me,Re,at,_e,me,O.COLOR_BUFFER_BIT,O.NEAREST):lt?O.copyTexSubImage3D(Se,le,Re,at,At+ct,be,ke,_e,me):O.copyTexSubImage2D(Se,le,Re,at,be,ke,_e,me);v.bindFramebuffer(O.READ_FRAMEBUFFER,null),v.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else lt?E.isDataTexture||E.isData3DTexture?O.texSubImage3D(Se,le,Re,at,At,_e,me,Te,ot,Xt,Et.data):z.isCompressedArrayTexture?O.compressedTexSubImage3D(Se,le,Re,at,At,_e,me,Te,ot,Et.data):O.texSubImage3D(Se,le,Re,at,At,_e,me,Te,ot,Xt,Et):E.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,le,Re,at,_e,me,ot,Xt,Et.data):E.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,le,Re,at,Et.width,Et.height,ot,Et.data):O.texSubImage2D(O.TEXTURE_2D,le,Re,at,_e,me,ot,Xt,Et);v.pixelStorei(O.UNPACK_ROW_LENGTH,gn),v.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ze),v.pixelStorei(O.UNPACK_SKIP_PIXELS,An),v.pixelStorei(O.UNPACK_SKIP_ROWS,Qn),v.pixelStorei(O.UNPACK_SKIP_IMAGES,zi),le===0&&z.generateMipmaps&&O.generateMipmap(Se),v.unbindTexture()},this.initRenderTarget=function(E){j.get(E).__webglFramebuffer===void 0&&K.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?K.setTextureCube(E,0):E.isData3DTexture?K.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?K.setTexture2DArray(E,0):K.setTexture2D(E,0),v.unbindTexture()},this.resetState=function(){q=0,G=0,D=null,v.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Ye._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ye._getUnpackColorSpace()}}function Tb({className:t="",style:e={},trailLength:n=32,inertia:i=.7,brightness:r=1.6,color:s="#c6ff7c",zIndex:a=1}){const o=ue.useRef(null);return ue.useEffect(()=>{const l=o.current;if(!l)return;const u=l.parentElement||document.body;let h=!0;const p="ontouchstart"in window||navigator.maxTouchPoints>0,d=new wb({antialias:!1,alpha:!0,depth:!1,stencil:!1,powerPreference:p?"low-power":"high-performance",premultipliedAlpha:!1,preserveDrawingBuffer:!1});d.setClearColor(0,0),d.domElement.style.pointerEvents="none",d.domElement.style.position="absolute",d.domElement.style.inset="0",d.domElement.style.width="100%",d.domElement.style.height="100%",d.domElement.style.background="transparent",l.appendChild(d.domElement);const m=new cy,g=new wh(-1,1,1,-1,0,1),b=new mo(2,2),x=Math.max(8,Math.floor(n)),f=Array.from({length:x},()=>new $e(.5,.5));let y=0;const M=new nt(s),S=`
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
        float outAlpha = clamp(alphaAcc * iOpacity * 0.85, 0.0, 0.85);
        gl_FragColor = vec4(colorAcc, outAlpha);
      }
    `,w=new Kn({uniforms:{iTime:{value:0},iResolution:{value:new $e(window.innerWidth,window.innerHeight)},iMouse:{value:new $e(.5,.5)},iPrevMouse:{value:f.map(D=>D.clone())},iOpacity:{value:1},iScale:{value:1},iBaseColor:{value:new X(M.r,M.g,M.b)},iBrightness:{value:r}},vertexShader:S,fragmentShader:T,transparent:!0,depthTest:!1,depthWrite:!1}),C=new hi(b,w);m.add(C);const _=()=>{if(!h||!l)return;const D=u.getBoundingClientRect(),W=Math.max(1,Math.floor(D.width||window.innerWidth)),Y=Math.max(1,Math.floor(D.height||window.innerHeight)),ne=Math.min(window.devicePixelRatio||1,1.5);d.setPixelRatio(ne),d.setSize(W,Y,!1),w.uniforms.iResolution.value.set(W*ne,Y*ne),w.uniforms.iScale.value=Math.max(.6,Math.min(1.8,Math.min(W,Y)/600))};_(),window.addEventListener("resize",_,{passive:!0});const R=performance.now(),L=new $e(.5,.5),P=new $e(0,0);let F=1,I=performance.now(),$=!0,B=null;const q=()=>{if(!h)return;const D=performance.now(),W=(D-R)/1e3;if($)P.set(L.x-w.uniforms.iMouse.value.x,L.y-w.uniforms.iMouse.value.y),w.uniforms.iMouse.value.copy(L),F=1;else{P.multiplyScalar(i),P.lengthSq()>1e-6&&w.uniforms.iMouse.value.add(P);const re=D-I;if(re>800){const Ie=Math.min(1,(re-800)/1200);F=Math.max(.15,1-Ie)}}const Y=f.length;y=(y+1)%Y,f[y].copy(w.uniforms.iMouse.value);const ne=w.uniforms.iPrevMouse.value;for(let re=0;re<Y;re++){const Ie=(y-re+Y)%Y;ne[re].copy(f[Ie])}w.uniforms.iOpacity.value=F,w.uniforms.iTime.value=W,d.render(m,g),B=requestAnimationFrame(q)},G=D=>{const W=u.getBoundingClientRect(),Y=D.clientX??(D.touches&&D.touches[0]?D.touches[0].clientX:window.innerWidth/2),ne=D.clientY??(D.touches&&D.touches[0]?D.touches[0].clientY:window.innerHeight/2),re=rm.clamp((Y-W.left)/Math.max(1,W.width),0,1),Ie=rm.clamp(1-(ne-W.top)/Math.max(1,W.height),0,1);L.set(re,Ie),$=!0,I=performance.now()};return window.addEventListener("pointermove",G,{passive:!0}),window.addEventListener("touchmove",G,{passive:!0}),B=requestAnimationFrame(q),()=>{h=!1,B&&cancelAnimationFrame(B),window.removeEventListener("pointermove",G),window.removeEventListener("touchmove",G),window.removeEventListener("resize",_),m.clear(),b.dispose(),w.dispose(),d.dispose(),d.forceContextLoss(),d.domElement.parentElement&&d.domElement.parentElement.removeChild(d.domElement)}},[n,i,r,s]),c.jsx("div",{ref:o,className:`pointer-events-none absolute inset-0 overflow-hidden ${t}`,style:{zIndex:a,...e}})}const Pu="https://t.me/CL_Academy_bot";function Ab({onNavigateToChat:t,onNavigateToAdmin:e}){const[n,i]=ue.useState("inicio"),[r,s]=ue.useState({name:"",phone:"",email:"",language:"Inglés",modality:"100% Virtual en Vivo"}),[a,o]=ue.useState(!1);ue.useEffect(()=>{const u=["inicio","programas","modalidades","horarios","precios","placement-test"],h=()=>{const p=window.scrollY+180;for(const d of u){const m=document.getElementById(d);if(m){const g=m.offsetTop,b=m.offsetHeight;if(p>=g&&p<g+b){i(d);break}}}};return window.addEventListener("scroll",h,{passive:!0}),h(),()=>window.removeEventListener("scroll",h)},[]);const l=u=>{u.preventDefault(),o(!0)};return c.jsxs("div",{className:"bg-[#070515] text-slate-200 min-h-screen flex flex-col font-sans relative overflow-x-hidden selection:bg-brand-lime selection:text-brand-dark",children:[c.jsx("header",{className:"sticky top-0 z-50 w-full bg-[#070515]/90 backdrop-blur-md border-b border-white/10 transition-all",children:c.jsxs("div",{className:"max-w-7xl mx-auto px-5 py-3.5 flex items-center justify-between",children:[c.jsxs("a",{href:"#inicio",className:"flex items-center gap-3 group",children:[c.jsx("div",{className:"w-10 h-10 rounded-xl bg-brand-lime text-brand-dark flex items-center justify-center font-bold shadow-lg shadow-brand-lime/20 group-hover:scale-105 transition-transform",children:c.jsx(Jl,{className:"text-xl"})}),c.jsxs("div",{children:[c.jsx("span",{className:"font-display text-2xl uppercase tracking-wider text-white block leading-none",children:"Vanguard"}),c.jsx("span",{className:"text-[10px] text-brand-lime font-medium uppercase tracking-widest",children:"Academia de Idiomas"})]})]}),c.jsxs("nav",{className:"hidden lg:flex items-center gap-6 bg-white/5 px-6 py-2 rounded-full border border-white/10 text-sm font-medium",children:[c.jsx("a",{href:"#programas",className:`transition-colors py-1 px-2.5 rounded-full ${n==="programas"?"text-brand-lime bg-brand-lime/10 font-bold":"text-slate-300 hover:text-white"}`,children:"Idiomas & MCER"}),c.jsx("a",{href:"#modalidades",className:`transition-colors py-1 px-2.5 rounded-full ${n==="modalidades"?"text-brand-lime bg-brand-lime/10 font-bold":"text-slate-300 hover:text-white"}`,children:"Sedes & Modalidades"}),c.jsx("a",{href:"#horarios",className:`transition-colors py-1 px-2.5 rounded-full ${n==="horarios"?"text-brand-lime bg-brand-lime/10 font-bold":"text-slate-300 hover:text-white"}`,children:"Horarios"}),c.jsx("a",{href:"#precios",className:`transition-colors py-1 px-2.5 rounded-full ${n==="precios"?"text-brand-lime bg-brand-lime/10 font-bold":"text-slate-300 hover:text-white"}`,children:"Precios COP"}),c.jsx("a",{href:"#placement-test",className:`transition-colors py-1 px-2.5 rounded-full ${n==="placement-test"?"text-brand-lime bg-brand-lime/10 font-bold":"text-brand-lime/90 hover:text-brand-lime"}`,children:"Placement Test"})]}),c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsxs("a",{href:Pu,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 bg-[#229ED9] hover:bg-[#1e8ec3] text-white px-4 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all hover:scale-105 shadow-md shadow-[#229ED9]/20",title:"Abrir Bot en Telegram",children:[c.jsx(ka,{className:"text-base"}),c.jsx("span",{className:"hidden sm:inline",children:"Bot Telegram"})]}),c.jsxs("button",{onClick:t,className:"flex items-center gap-2 bg-brand-lime hover:bg-[#b0f55c] text-brand-dark px-4 sm:px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all hover:scale-105 shadow-md shadow-brand-lime/20",children:[c.jsx(Ai,{className:"text-base"}),c.jsx("span",{children:"Vanguard AI"})]}),c.jsx("button",{onClick:e,className:"text-xs px-3 py-2 rounded-full border border-white/20 text-white/70 hover:text-white hover:border-white/40 transition-colors",children:"Staff"})]})]})}),c.jsxs("section",{id:"inicio",className:"relative min-h-[90vh] flex flex-col justify-center items-center text-center px-5 pt-12 pb-20 overflow-hidden bg-gradient-to-b from-[#070515] via-[#0c0926] to-[#070515]",children:[c.jsx(Tb,{color:"#c6ff7c",trailLength:36,inertia:.68,brightness:1.6}),c.jsxs("div",{className:"relative z-10 max-w-5xl mx-auto space-y-6",children:[c.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-lime/10 border border-brand-lime/30 text-brand-lime text-xs font-semibold uppercase tracking-widest animate-pulse",children:[c.jsx(X1,{className:"text-sm"}),c.jsx("span",{children:"Acreditación Oficial MCER (A1 a C1) • Sedes Bogotá & Medellín"})]}),c.jsxs("h1",{className:"font-display text-5xl sm:text-7xl md:text-8xl uppercase tracking-tight text-white leading-[1.05]",children:["Aprende idiomas con ",c.jsx("span",{className:"text-brand-lime",children:"Fluidez Real"})," y Tecnología ",c.jsx("span",{className:"text-brand-blue",children:"Inteligente"})]}),c.jsxs("p",{className:"text-slate-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed",children:["Formación inmersiva en ",c.jsx("strong",{className:"text-white",children:"Inglés, Francés, Alemán, Italiano y Portugués"}),". Clases presenciales en sedes exclusivas o 100% virtual en vivo con tutores certificados y asistencia 24/7."]}),c.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4 pt-4",children:[c.jsxs("a",{href:"#placement-test",className:"w-full sm:w-auto px-8 py-4 bg-brand-lime hover:bg-[#b5f85e] text-brand-dark rounded-full font-bold text-base uppercase tracking-wide transition-transform hover:scale-105 shadow-xl shadow-brand-lime/20 flex items-center justify-center gap-3",children:[c.jsx("span",{children:"Prueba de Nivel Gratuita"}),c.jsx($1,{className:"text-sm"})]}),c.jsxs("button",{onClick:t,className:"w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/15 border border-white/20 text-white rounded-full font-bold text-base uppercase tracking-wide transition-colors flex items-center justify-center gap-3",children:[c.jsx(Ai,{className:"text-brand-blue text-lg"}),c.jsx("span",{children:"Consultar al Asistente IA"})]}),c.jsxs("a",{href:Pu,target:"_blank",rel:"noopener noreferrer",className:"w-full sm:w-auto px-6 py-4 bg-[#229ED9]/20 hover:bg-[#229ED9]/30 border border-[#229ED9]/40 text-[#229ED9] hover:text-white rounded-full font-bold text-base uppercase tracking-wide transition-colors flex items-center justify-center gap-3",children:[c.jsx(ka,{className:"text-lg"}),c.jsx("span",{children:"Canal Telegram"})]})]}),c.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3 pt-10 text-left",children:[c.jsxs("div",{className:"p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm",children:[c.jsx("span",{className:"text-xs text-brand-lime font-mono block",children:"Matrículas 2026"}),c.jsx("span",{className:"text-white font-bold text-sm",children:"Ciclos Abiertos"}),c.jsx("p",{className:"text-slate-400 text-xs mt-0.5",children:"Intensivos y Sabatinos"})]}),c.jsxs("div",{className:"p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm",children:[c.jsx("span",{className:"text-xs text-brand-blue font-mono block",children:"Tarifas en COP"}),c.jsx("span",{className:"text-white font-bold text-sm",children:"Desde $520.000"}),c.jsx("p",{className:"text-slate-400 text-xs mt-0.5",children:"10% de dcto por pronto pago"})]}),c.jsxs("div",{className:"p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm",children:[c.jsx("span",{className:"text-xs text-brand-yellow font-mono block",children:"Sedes Físicas"}),c.jsx("span",{className:"text-white font-bold text-sm",children:"Bogotá & Medellín"}),c.jsx("p",{className:"text-slate-400 text-xs mt-0.5",children:"Chapinero, Cl 100, Poblado"})]}),c.jsxs("div",{className:"p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm",children:[c.jsx("span",{className:"text-xs text-brand-purple font-mono block",children:"Certificaciones"}),c.jsx("span",{className:"text-white font-bold text-sm",children:"IELTS / TOEFL / DELF"}),c.jsx("p",{className:"text-slate-400 text-xs mt-0.5",children:"Simulacros evaluados"})]})]})]})]}),c.jsx("section",{id:"programas",className:"py-24 px-5 border-t border-white/10 bg-[#070515]",children:c.jsxs("div",{className:"max-w-7xl mx-auto space-y-16",children:[c.jsxs("div",{className:"text-center max-w-3xl mx-auto space-y-4",children:[c.jsx("span",{className:"text-xs font-mono uppercase tracking-widest text-brand-lime bg-brand-lime/10 px-3.5 py-1 rounded-full border border-brand-lime/20",children:"Oferta Curricular"}),c.jsx("h2",{className:"font-display text-4xl sm:text-6xl uppercase text-white",children:"5 Idiomas Globales • Marco Común Europeo (MCER)"}),c.jsx("p",{className:"text-slate-400 text-sm sm:text-base",children:"Todos nuestros cursos siguen los estándares internacionales de dominio lingüístico: desde el nivel introductorio A1 hasta el nivel avanzado operacional C1."})]}),c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4",children:[{code:"EN",name:"Inglés",desc:"A1, A2, B1, B2, C1 con enfoque conversacional y preparación IELTS/TOEFL.",flag:"🇺🇸 / 🇬🇧",color:"border-brand-lime/40"},{code:"FR",name:"Francés",desc:"Preparación para certificaciones DELF/DALF. Enfoque profesional y cultural.",flag:"🇫🇷",color:"border-brand-blue/40"},{code:"DE",name:"Alemán",desc:"Desde A1 hasta B2 con preparación para exámenes oficiales Goethe-Zertifikat.",flag:"🇩🇪",color:"border-brand-yellow/40"},{code:"IT",name:"Italiano",desc:"Inmersión comunicativa y gramatical para negocios, turismo y ciudadanía CELI.",flag:"🇮🇹",color:"border-brand-orange/40"},{code:"PT",name:"Portugués",desc:"Portugués de Brasil y Portugal, preparación para examen internacional Celpe-Bras.",flag:"🇧🇷",color:"border-brand-purple/40"}].map(u=>c.jsxs("div",{className:`p-6 rounded-3xl bg-[#100c2a] border ${u.color} hover:border-brand-lime transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1`,children:[c.jsxs("div",{children:[c.jsxs("div",{className:"flex items-center justify-between mb-4",children:[c.jsx("span",{className:"text-2xl",children:u.flag}),c.jsx("span",{className:"font-mono text-xs font-bold px-2 py-0.5 rounded bg-white/10 text-white",children:u.code})]}),c.jsx("h3",{className:"text-xl font-bold text-white mb-2",children:u.name}),c.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:u.desc})]}),c.jsxs("div",{className:"mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-300",children:[c.jsx("span",{children:"Niveles A1 - C1"}),c.jsx("button",{onClick:t,className:"text-brand-lime font-bold hover:underline",children:"Consultar"})]})]},u.code))})]})}),c.jsx("section",{id:"modalidades",className:"py-24 px-5 border-t border-white/10 bg-[#0a0720]",children:c.jsxs("div",{className:"max-w-7xl mx-auto space-y-16",children:[c.jsxs("div",{className:"text-center max-w-3xl mx-auto space-y-4",children:[c.jsx("span",{className:"text-xs font-mono uppercase tracking-widest text-brand-blue bg-brand-blue/10 px-3.5 py-1 rounded-full border border-brand-blue/20",children:"Flexibilidad Total"}),c.jsx("h2",{className:"font-display text-4xl sm:text-6xl uppercase text-white",children:"Sedes Físicas & Modalidad Virtual en Vivo"}),c.jsx("p",{className:"text-slate-400 text-sm sm:text-base",children:"Estudia en nuestras modernas sedes en Bogotá y Medellín o conéctate desde cualquier lugar de Colombia con clases 100% en tiempo real."})]}),c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[c.jsxs("div",{className:"p-8 rounded-3xl bg-[#100c2a] border border-white/10 hover:border-brand-lime/50 transition-all space-y-5",children:[c.jsx("div",{className:"w-12 h-12 rounded-2xl bg-brand-lime/10 text-brand-lime flex items-center justify-center text-xl",children:c.jsx(P1,{})}),c.jsx("h3",{className:"text-2xl font-bold text-white",children:"Presencial en Sede"}),c.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"Aulas climatizadas, laboratorios multimedia y clubes de conversación presenciales."}),c.jsxs("div",{className:"space-y-2 text-xs text-slate-400 pt-2 border-t border-white/10",children:[c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx(Ad,{className:"text-brand-lime"})," ",c.jsx("strong",{children:"Bogotá:"})," Sede Chapinero & Sede Calle 100"]}),c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx(Ad,{className:"text-brand-lime"})," ",c.jsx("strong",{children:"Medellín:"})," Sede El Poblado & Sede Laureles"]})]})]}),c.jsxs("div",{className:"p-8 rounded-3xl bg-[#100c2a] border border-white/10 hover:border-brand-blue/50 transition-all space-y-5",children:[c.jsx("div",{className:"w-12 h-12 rounded-2xl bg-brand-blue/10 text-brand-blue flex items-center justify-center text-xl",children:c.jsx(U1,{})}),c.jsx("h3",{className:"text-2xl font-bold text-white",children:"100% Virtual en Vivo"}),c.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"Clases interactivas en vivo con profesores en directo a través de Zoom & Google Meet. Acceso a plataforma 24/7."}),c.jsxs("div",{className:"flex items-center gap-4 text-xs text-slate-400 pt-2 border-t border-white/10",children:[c.jsxs("span",{className:"flex items-center gap-1.5",children:[c.jsx(K1,{className:"text-brand-blue"})," Zoom Pro"]}),c.jsxs("span",{className:"flex items-center gap-1.5",children:[c.jsx(Z1,{className:"text-brand-lime"})," Google Meet"]}),c.jsxs("span",{className:"flex items-center gap-1.5",children:[c.jsx(Xp,{className:"text-brand-yellow"})," Grabaciones 30 días"]})]})]}),c.jsxs("div",{className:"p-8 rounded-3xl bg-[#100c2a] border border-white/10 hover:border-brand-yellow/50 transition-all space-y-5",children:[c.jsx("div",{className:"w-12 h-12 rounded-2xl bg-brand-yellow/10 text-brand-yellow flex items-center justify-center text-xl",children:c.jsx(k1,{})}),c.jsx("h3",{className:"text-2xl font-bold text-white",children:"Modalidad Híbrida / Blended"}),c.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"Alterna entre asistencia a sede física y sesiones virtuales según tu agenda laboral y académica semanal."}),c.jsxs("div",{className:"space-y-1.5 text-xs text-slate-400 pt-2 border-t border-white/10",children:[c.jsx("p",{children:"• Flexibilidad para ejecutivos y universitarios"}),c.jsx("p",{children:"• Mismo avance curricular y certificación oficial"})]})]})]})]})}),c.jsx("section",{id:"horarios",className:"py-24 px-5 border-t border-white/10 bg-[#070515]",children:c.jsxs("div",{className:"max-w-7xl mx-auto space-y-16",children:[c.jsxs("div",{className:"text-center max-w-3xl mx-auto space-y-4",children:[c.jsx("span",{className:"text-xs font-mono uppercase tracking-widest text-brand-yellow bg-brand-yellow/10 px-3.5 py-1 rounded-full border border-brand-yellow/20",children:"Disponibilidad Horaria"}),c.jsx("h2",{className:"font-display text-4xl sm:text-6xl uppercase text-white",children:"Turnos Intensivos y Sabatinos"}),c.jsx("p",{className:"text-slate-400 text-sm sm:text-base",children:"Ajusta tu aprendizaje a tu estilo de vida con horarios matutinos, nocturnos o fines de semana."})]}),c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[c.jsxs("div",{className:"p-8 rounded-3xl bg-[#100c2a] border border-white/10 space-y-6",children:[c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx(Xp,{className:"text-2xl text-brand-lime"}),c.jsx("h3",{className:"text-2xl font-bold text-white",children:"Intensivo Lunes a Viernes"})]}),c.jsx("span",{className:"text-xs font-mono px-3 py-1 bg-brand-lime/10 text-brand-lime rounded-full border border-brand-lime/30",children:"40 horas / mes"})]}),c.jsx("p",{className:"text-sm text-slate-300",children:"2 horas diarias de clase interactiva:"}),c.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs",children:[c.jsxs("div",{className:"p-3 rounded-xl bg-white/5 border border-white/10",children:[c.jsx("span",{className:"text-slate-400 block",children:"Mañana:"}),c.jsx("strong",{className:"text-white",children:"6:00 AM - 8:00 AM"})]}),c.jsxs("div",{className:"p-3 rounded-xl bg-white/5 border border-white/10",children:[c.jsx("span",{className:"text-slate-400 block",children:"Intermedio:"}),c.jsx("strong",{className:"text-white",children:"8:30 AM - 10:30 AM"})]}),c.jsxs("div",{className:"p-3 rounded-xl bg-white/5 border border-white/10",children:[c.jsx("span",{className:"text-slate-400 block",children:"Noche:"}),c.jsx("strong",{className:"text-white",children:"6:30 PM - 8:30 PM"})]})]})]}),c.jsxs("div",{className:"p-8 rounded-3xl bg-[#100c2a] border border-white/10 space-y-6",children:[c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx(j1,{className:"text-2xl text-brand-blue"}),c.jsx("h3",{className:"text-2xl font-bold text-white",children:"Sabatino Concentrado"})]}),c.jsx("span",{className:"text-xs font-mono px-3 py-1 bg-brand-blue/10 text-brand-blue rounded-full border border-brand-blue/30",children:"20 horas / mes"})]}),c.jsx("p",{className:"text-sm text-slate-300",children:"Sesión única de fin de semana:"}),c.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs",children:[c.jsxs("div",{className:"p-3 rounded-xl bg-white/5 border border-white/10",children:[c.jsx("span",{className:"text-slate-400 block",children:"Sábados Mañana:"}),c.jsx("strong",{className:"text-white",children:"8:00 AM - 1:00 PM"})]}),c.jsxs("div",{className:"p-3 rounded-xl bg-white/5 border border-white/10",children:[c.jsx("span",{className:"text-slate-400 block",children:"Sábados Tarde:"}),c.jsx("strong",{className:"text-white",children:"1:30 PM - 6:30 PM"})]})]})]})]})]})}),c.jsx("section",{id:"precios",className:"py-24 px-5 border-t border-white/10 bg-[#0a0720]",children:c.jsxs("div",{className:"max-w-7xl mx-auto space-y-16",children:[c.jsxs("div",{className:"text-center max-w-3xl mx-auto space-y-4",children:[c.jsx("span",{className:"text-xs font-mono uppercase tracking-widest text-brand-lime bg-brand-lime/10 px-3.5 py-1 rounded-full border border-brand-lime/20",children:"Tarifas Transparentes en COP"}),c.jsx("h2",{className:"font-display text-4xl sm:text-6xl uppercase text-white",children:"Inversión Mensual & Descuentos"}),c.jsx("p",{className:"text-slate-400 text-sm sm:text-base",children:"Precios oficiales sin costos ocultos. Todos los programas incluyen acceso a la plataforma digital y material de estudio."})]}),c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[c.jsxs("div",{className:"p-8 rounded-3xl bg-[#100c2a] border border-white/10 hover:border-brand-lime transition-all space-y-6 flex flex-col justify-between",children:[c.jsxs("div",{children:[c.jsx("span",{className:"text-xs font-mono uppercase text-slate-400",children:"Programa Sabatino"}),c.jsx("h3",{className:"text-2xl font-bold text-white mt-1",children:"Sabatino Standard"}),c.jsxs("div",{className:"my-6",children:[c.jsx("span",{className:"text-4xl font-display text-white",children:"$520.000"}),c.jsx("span",{className:"text-slate-400 text-xs ml-2",children:"COP / módulo"})]}),c.jsxs("ul",{className:"space-y-3 text-xs text-slate-300",children:[c.jsxs("li",{className:"flex items-center gap-2",children:[c.jsx(kt,{className:"text-brand-lime"})," 20 horas académicas al mes"]}),c.jsxs("li",{className:"flex items-center gap-2",children:[c.jsx(kt,{className:"text-brand-lime"})," Plataforma interactiva 24/7"]}),c.jsxs("li",{className:"flex items-center gap-2",children:[c.jsx(kt,{className:"text-brand-lime"})," Clubes de conversación virtuales"]})]})]}),c.jsx("button",{onClick:t,className:"w-full py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-wider transition-colors",children:"Consultar con Asistente"})]}),c.jsxs("div",{className:"p-8 rounded-3xl bg-[#130f35] border-2 border-brand-lime shadow-xl shadow-brand-lime/10 space-y-6 flex flex-col justify-between relative",children:[c.jsx("div",{className:"absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-lime text-brand-dark rounded-full text-[11px] font-bold uppercase tracking-widest",children:"Más Popular"}),c.jsxs("div",{children:[c.jsx("span",{className:"text-xs font-mono uppercase text-brand-lime",children:"Programa Intensivo"}),c.jsx("h3",{className:"text-2xl font-bold text-white mt-1",children:"Intensivo L-V"}),c.jsxs("div",{className:"my-6",children:[c.jsx("span",{className:"text-4xl font-display text-white",children:"$650.000"}),c.jsx("span",{className:"text-slate-400 text-xs ml-2",children:"COP / módulo"})]}),c.jsxs("ul",{className:"space-y-3 text-xs text-slate-300",children:[c.jsxs("li",{className:"flex items-center gap-2",children:[c.jsx(kt,{className:"text-brand-lime"})," 40 horas al mes (2h diarias)"]}),c.jsxs("li",{className:"flex items-center gap-2",children:[c.jsx(kt,{className:"text-brand-lime"})," 10% de descuento por pronto pago ($585.000 COP)"]}),c.jsxs("li",{className:"flex items-center gap-2",children:[c.jsx(kt,{className:"text-brand-lime"})," Simulacros de exámenes internacionales"]})]})]}),c.jsx("button",{onClick:t,className:"w-full py-3 rounded-xl bg-brand-lime hover:bg-[#b0f55c] text-brand-dark font-bold text-xs uppercase tracking-wider transition-transform hover:scale-105",children:"Iniciar Asesoría IA"})]}),c.jsxs("div",{className:"p-8 rounded-3xl bg-[#100c2a] border border-white/10 hover:border-brand-purple transition-all space-y-6 flex flex-col justify-between",children:[c.jsxs("div",{children:[c.jsx("span",{className:"text-xs font-mono uppercase text-slate-400",children:"Exámenes Internacionales"}),c.jsx("h3",{className:"text-2xl font-bold text-white mt-1",children:"Prep IELTS / TOEFL"}),c.jsxs("div",{className:"my-6",children:[c.jsx("span",{className:"text-4xl font-display text-white",children:"$780.000"}),c.jsx("span",{className:"text-slate-400 text-xs ml-2",children:"COP / módulo"})]}),c.jsxs("ul",{className:"space-y-3 text-xs text-slate-300",children:[c.jsxs("li",{className:"flex items-center gap-2",children:[c.jsx(kt,{className:"text-brand-lime"})," 40 horas especializadas en técnicas de examen"]}),c.jsxs("li",{className:"flex items-center gap-2",children:[c.jsx(kt,{className:"text-brand-lime"})," Simulacros oficiales con retroalimentación"]}),c.jsxs("li",{className:"flex items-center gap-2",children:[c.jsx(kt,{className:"text-brand-lime"})," Material de preparación Cambridge/ETS"]})]})]}),c.jsx("button",{onClick:t,className:"w-full py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-wider transition-colors",children:"Consultar con Asistente"})]})]}),c.jsxs("div",{className:"p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs",children:[c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx(B1,{className:"text-xl text-brand-lime"}),c.jsxs("span",{children:[c.jsx("strong",{children:"Medios de Pago Habilitados:"})," PSE, Transferencia Bancolombia, Nequi, Tarjetas Débito/Crédito y Financiación Directa sin Intereses."]})]}),c.jsx("span",{className:"text-slate-400 font-mono",children:"Matrícula anual: $120.000 COP"})]})]})}),c.jsx("section",{id:"placement-test",className:"py-24 px-5 border-t border-white/10 bg-[#070515]",children:c.jsx("div",{className:"max-w-5xl mx-auto rounded-3xl bg-gradient-to-r from-[#120d36] to-[#18114a] border border-brand-lime/30 p-8 sm:p-12 shadow-2xl relative overflow-hidden",children:c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10",children:[c.jsxs("div",{className:"space-y-5",children:[c.jsx("span",{className:"text-xs font-mono uppercase tracking-widest text-brand-lime bg-brand-lime/10 px-3 py-1 rounded-full border border-brand-lime/30",children:"100% Gratuita • 25 Minutos"}),c.jsx("h2",{className:"font-display text-4xl sm:text-5xl uppercase text-white",children:"Prueba de Clasificación de Nivel"}),c.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"Descubre tu nivel exacto según el marco MCER (A1 a C1). Evaluación gramatical, de comprensión auditiva y entrevista diagnóstica."}),c.jsxs("div",{className:"space-y-2 text-xs text-slate-300",children:[c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx(kt,{className:"text-brand-lime"})," Sin costo de presentación"]}),c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx(kt,{className:"text-brand-lime"})," Resultados inmediatos y recomendación de curso"]}),c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx(kt,{className:"text-brand-lime"})," Asesoría directa con nuestro Asistente Inteligente"]})]})]}),c.jsx("div",{className:"bg-[#0c0926]/90 p-6 rounded-2xl border border-white/10",children:a?c.jsxs("div",{className:"text-center py-8 space-y-3",children:[c.jsx("div",{className:"w-12 h-12 rounded-full bg-brand-lime/20 text-brand-lime flex items-center justify-center mx-auto text-xl",children:c.jsx(kt,{})}),c.jsx("h3",{className:"text-lg font-bold text-white",children:"¡Solicitud Recibida!"}),c.jsx("p",{className:"text-xs text-slate-300",children:"Te enviaremos el enlace para tu prueba de clasificación a tu correo electrónico. Puedes consultar detalles con nuestro Asistente IA."}),c.jsx("button",{onClick:t,className:"mt-4 px-6 py-2.5 rounded-full bg-brand-lime text-brand-dark font-bold text-xs uppercase",children:"Abrir Asistente IA"})]}):c.jsxs("form",{onSubmit:l,className:"space-y-3.5",children:[c.jsx("h3",{className:"text-base font-bold text-white mb-2",children:"Solicita tu Prueba Online"}),c.jsxs("div",{children:[c.jsx("label",{className:"text-[11px] text-slate-400 block mb-1",children:"Nombre Completo"}),c.jsx("input",{type:"text",required:!0,placeholder:"Ej. Laura Gómez",value:r.name,onChange:u=>s({...r,name:u.target.value}),className:"w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-lime"})]}),c.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[c.jsxs("div",{children:[c.jsx("label",{className:"text-[11px] text-slate-400 block mb-1",children:"Teléfono / WhatsApp"}),c.jsx("input",{type:"tel",required:!0,placeholder:"Ej. 310 123 4567",value:r.phone,onChange:u=>s({...r,phone:u.target.value}),className:"w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-lime"})]}),c.jsxs("div",{children:[c.jsx("label",{className:"text-[11px] text-slate-400 block mb-1",children:"Idioma de Interés"}),c.jsxs("select",{value:r.language,onChange:u=>s({...r,language:u.target.value}),className:"w-full px-3.5 py-2 rounded-xl bg-[#141038] border border-white/10 text-xs text-white focus:outline-none focus:border-brand-lime",children:[c.jsx("option",{children:"Inglés"}),c.jsx("option",{children:"Francés"}),c.jsx("option",{children:"Alemán"}),c.jsx("option",{children:"Italiano"}),c.jsx("option",{children:"Portugués"})]})]})]}),c.jsxs("div",{children:[c.jsx("label",{className:"text-[11px] text-slate-400 block mb-1",children:"Correo Electrónico"}),c.jsx("input",{type:"email",required:!0,placeholder:"Ej. laura@correo.com",value:r.email,onChange:u=>s({...r,email:u.target.value}),className:"w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-lime"})]}),c.jsx("button",{type:"submit",className:"w-full py-3 rounded-xl bg-brand-lime hover:bg-[#b0f55c] text-brand-dark font-bold text-xs uppercase tracking-wide transition-all shadow-md mt-2",children:"Agendar Prueba Gratuita"})]})})]})})}),c.jsx("footer",{className:"py-12 px-5 border-t border-white/10 bg-[#050310] text-xs text-slate-400",children:c.jsxs("div",{className:"max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6",children:[c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx("div",{className:"w-8 h-8 rounded-lg bg-brand-lime text-brand-dark flex items-center justify-center font-bold",children:c.jsx(Jl,{className:"text-base"})}),c.jsxs("div",{children:[c.jsx("strong",{className:"text-white block font-display uppercase tracking-wider",children:"Vanguard Language Academy"}),c.jsx("span",{className:"text-[10px] text-slate-500",children:"Acreditación Oficial • Colombia 2026"})]})]}),c.jsxs("div",{className:"flex items-center gap-6",children:[c.jsx("a",{href:"#programas",className:"hover:text-white transition-colors",children:"Programas"}),c.jsx("a",{href:"#precios",className:"hover:text-white transition-colors",children:"Tarifas COP"}),c.jsxs("a",{href:Pu,target:"_blank",rel:"noopener noreferrer",className:"hover:text-[#229ED9] transition-colors flex items-center gap-1",children:[c.jsx(ka,{})," Telegram Bot"]}),c.jsxs("button",{onClick:t,className:"hover:text-brand-lime transition-colors flex items-center gap-1",children:[c.jsx(Ai,{})," Asistente IA"]}),c.jsx("button",{onClick:e,className:"hover:text-white transition-colors",children:"Portal Staff"})]}),c.jsx("p",{className:"text-[11px] text-slate-500",children:"© 2026 Academia de Idiomas Colombiana. Todos los derechos reservados."})]})})]})}const ln="http://localhost:8000/api/v1";async function Cb(t,e,n="web"){const i=await fetch(`${ln}/chat`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:t,session_id:e,channel:n})});if(!i.ok){const r=await i.json().catch(()=>({}));throw new Error(r.detail||`Server error (${i.status})`)}return i.json()}async function Rb(t,e){const n=await fetch(`${ln}/auth/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t.trim(),password:e})});if(!n.ok){const i=await n.json().catch(()=>({}));throw new Error(i.detail||"Usuario o contraseña incorrectos.")}return n.json()}function pi(t){const e={"Content-Type":"application/json"};return t&&(e.Authorization=`Bearer ${t}`,e["X-Admin-Key"]=t),e}async function Nb(t){const e=await fetch(`${ln}/settings/providers`,{method:"GET",headers:pi(t)});if(!e.ok)throw new Error("Error al cargar configuración de proveedores.");return e.json()}async function Pb(t,e){const n=await fetch(`${ln}/settings/providers`,{method:"POST",headers:pi(t),body:JSON.stringify(e)});if(!n.ok){const i=await n.json().catch(()=>({}));throw new Error(i.detail||"Error al actualizar configuración.")}return n.json()}async function Lb(t,e,n=null){const i=await fetch(`${ln}/settings/providers/test`,{method:"POST",headers:pi(t),body:JSON.stringify({provider:e,api_key:n||null})});if(!i.ok){const r=await i.json().catch(()=>({}));throw new Error(r.detail||"Fallo al verificar proveedor.")}return i.json()}async function Db(t){const e=await fetch(`${ln}/metrics`,{method:"GET",headers:pi(t)});if(!e.ok)throw e.status===401||e.status===422?new Error("Clave de Administrador inválida. Acceso Denegado."):new Error(`Error al obtener métricas (${e.status})`);return e.json()}async function Ib(t,e,n="",i="web",r=null){const s=await fetch(`${ln}/escalation/start`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({full_name:t,national_id:e,initial_inquiry:n,channel:i,telegram_chat_id:r})});if(!s.ok){const a=await s.json().catch(()=>({}));throw new Error(a.detail||"Error al iniciar sesión con asesor")}return s.json()}async function Ub(t){const e=await fetch(`${ln}/escalation/sessions`,{method:"GET",headers:pi(t)});if(!e.ok)throw new Error("No autorizado para ver sesiones de escalación");return e.json()}async function Xg(t){const e=await fetch(`${ln}/escalation/sessions/${t}/messages`);if(!e.ok)throw new Error("Error al cargar mensajes");return e.json()}async function Fb(t,e,n,i=null){const r=await fetch(`${ln}/escalation/telegram/reply`,{method:"POST",headers:pi(t),body:JSON.stringify({telegram_chat_id:e,message:n,session_id:i})});if(!r.ok){const s=await r.json().catch(()=>({}));throw new Error(s.detail||"Error al enviar mensaje a Telegram")}return r.json()}async function Ob(t,e){const n=await fetch(`${ln}/escalation/sessions/${e}/close`,{method:"POST",headers:pi(t)});if(!n.ok){const i=await n.json().catch(()=>({}));throw new Error(i.detail||"Error al finalizar la sesión")}return n.json()}async function kb(t,e,n=""){const i=await fetch(`${ln}/escalation/sessions/${t}/review`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rating:Number(e),notes:n.trim()})});if(!i.ok){const r=await i.json().catch(()=>({}));throw new Error(r.detail||"Error al enviar la calificación")}return i.json()}async function Bb(t){const e=await fetch(`${ln}/escalation/crm/profiles`,{headers:pi(t)});if(!e.ok)throw new Error("Error al cargar perfiles CRM");return e.json()}async function zb(t){const e=await fetch(`${ln}/escalation/crm/reviews`,{headers:pi(t)});if(!e.ok)throw new Error("Error al cargar reseñas CRM");return e.json()}async function Vb(t){const e=await fetch(`${ln}/escalation/crm/summary`,{headers:pi(t)});if(!e.ok)throw new Error("Error al cargar resumen CRM");return e.json()}function $g(t){const e=window.location.protocol==="https:"?"wss:":"ws:",n=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?"127.0.0.1:8000":window.location.host;return`${e}//${n}/api/v1/escalation/ws/chat/${t}`}/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hb=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),qg=(...t)=>t.filter((e,n,i)=>!!e&&i.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Gb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jb=ue.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:a,...o},l)=>ue.createElement("svg",{ref:l,...Gb,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:qg("lucide",r),...o},[...a.map(([u,h])=>ue.createElement(u,h)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bi=(t,e)=>{const n=ue.forwardRef(({className:i,...r},s)=>ue.createElement(jb,{ref:s,iconNode:e,className:qg(`lucide-${Hb(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wb=Bi("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xb=Bi("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $b=Bi("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qb=Bi("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yb=Bi("Minimize2",[["polyline",{points:"4 14 10 14 10 20",key:"11kfnr"}],["polyline",{points:"20 10 14 10 14 4",key:"rlmsce"}],["line",{x1:"14",x2:"21",y1:"10",y2:"3",key:"o5lafz"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kb=Bi("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zb=Bi("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vf=Bi("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qb=Bi("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function Jb({isOpen:t,onClose:e,onStartLiveChat:n,initialQuery:i=""}){const[r,s]=ue.useState(""),[a,o]=ue.useState(""),[l,u]=ue.useState(!1),[h,p]=ue.useState("");if(!t)return null;const d=async m=>{if(m.preventDefault(),!r.trim()||!a.trim()){p("Por favor ingresa tu nombre completo y número de cédula.");return}u(!0),p("");try{const g=await Ib(r.trim(),a.trim(),i);n({sessionId:g.session_id,fullName:g.full_name}),e()}catch(g){p(g.message||"Error al conectar con un asesor.")}finally{u(!1)}};return c.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fadeIn",children:c.jsxs("div",{className:"bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-md w-full overflow-hidden",children:[c.jsxs("div",{className:"bg-gradient-to-r from-amber-600 to-amber-700 px-6 py-5 text-white flex items-center justify-between",children:[c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx("div",{className:"p-2 bg-white/15 rounded-lg",children:c.jsx(vf,{className:"w-6 h-6 text-white"})}),c.jsxs("div",{children:[c.jsx("h3",{className:"text-lg font-bold",children:"Conectar con Asesor Académico"}),c.jsx("p",{className:"text-xs text-amber-100 font-medium",children:"Mesa de Asesoría en Vivo de la Academia"})]})]}),c.jsx("button",{onClick:e,className:"text-white/80 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors cursor-pointer",children:"✕"})]}),c.jsxs("form",{onSubmit:d,className:"p-6 space-y-4",children:[c.jsx("p",{className:"text-sm text-slate-600",children:"Para transferirte con un asesor académico especializado, por favor verifica tus datos de contacto."}),h&&c.jsxs("div",{className:"p-3 bg-rose-50 border border-rose-200 rounded-xl flex items-center gap-2 text-xs text-rose-700 font-medium",children:[c.jsx(Wb,{className:"w-4 h-4 flex-shrink-0"}),c.jsx("span",{children:h})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5",children:"Nombre Completo *"}),c.jsx("input",{type:"text",required:!0,placeholder:"Ej: Carlos Rodríguez",value:r,onChange:m=>s(m.target.value),className:"w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-sm font-medium text-slate-800 transition-all"})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5",children:"Cédula / Documento de Identidad *"}),c.jsx("input",{type:"text",required:!0,placeholder:"Ej: 1020491823",value:a,onChange:m=>o(m.target.value),className:"w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-sm font-medium text-slate-800 transition-all"}),c.jsx("p",{className:"text-[11px] text-slate-400 mt-1",children:"Tu ID de sesión único será generado automáticamente a partir de tus datos."})]}),c.jsxs("div",{className:"pt-2 flex items-center justify-end gap-3",children:[c.jsx("button",{type:"button",onClick:e,className:"px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer",children:"Cancelar"}),c.jsx("button",{type:"submit",disabled:l,className:"px-5 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 rounded-xl shadow-md shadow-amber-600/20 transition-all flex items-center gap-2 disabled:opacity-50 cursor-pointer",children:l?c.jsxs(c.Fragment,{children:[c.jsx(qb,{className:"w-4 h-4 animate-spin"}),"Conectando..."]}):"Iniciar Chat en Vivo"})]})]})]})})}function ew({sessionInfo:t,onClose:e}){const{sessionId:n,fullName:i}=t,[r,s]=ue.useState([]),[a,o]=ue.useState(""),[l,u]=ue.useState(!1),[h,p]=ue.useState(!1),[d,m]=ue.useState(!1),[g,b]=ue.useState(5),[x,f]=ue.useState(0),[y,M]=ue.useState(""),[S,T]=ue.useState(!1),[w,C]=ue.useState(!1),_=ue.useRef(null),R=ue.useRef(null);ue.useEffect(()=>{async function F(){try{const I=await Xg(n);s(I),I.some($=>$.sender==="system"&&($.message.includes("finalizada")||$.message.includes("cerrada")))&&m(!0)}catch(I){console.error("Failed to load chat history:",I)}}F()},[n]),ue.useEffect(()=>{const F=$g(n),I=new WebSocket(F);return _.current=I,I.onopen=()=>{u(!0)},I.onmessage=$=>{try{const B=JSON.parse($.data);if(B.type==="SESSION_CLOSED"){m(!0);return}s(q=>B.id&&q.some(D=>D.id===B.id)||q.some(D=>D.sender===B.sender&&D.message===B.message&&Math.abs(new Date(D.timestamp||Date.now())-new Date(B.timestamp||Date.now()))<4e3)?q:[...q,B])}catch(B){console.error("Error parsing live WS message:",B)}},I.onclose=()=>{u(!1)},I.onerror=()=>{u(!1)},()=>{I.readyState===WebSocket.OPEN&&I.close()}},[n]),ue.useEffect(()=>{var F;(F=R.current)==null||F.scrollIntoView({behavior:"smooth"})},[r,d]);const L=F=>{if(F.preventDefault(),!a.trim()||!_.current||_.current.readyState!==WebSocket.OPEN)return;const I={sender:"user",sender_name:i,message:a.trim()};_.current.send(JSON.stringify(I)),o("")},P=async F=>{F.preventDefault(),C(!0);try{await kb(n,g,y),T(!0)}catch(I){console.error("Error submitting review:",I)}finally{C(!1)}};return h?c.jsx("div",{className:"fixed bottom-5 right-5 z-50",children:c.jsxs("button",{onClick:()=>p(!1),className:"bg-amber-600 hover:bg-amber-700 text-white px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 border border-amber-500 font-semibold text-sm transition-all hover:scale-105",children:[c.jsxs("div",{className:"relative",children:[c.jsx(vf,{className:"w-5 h-5"}),c.jsx("span",{className:"absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping"})]}),c.jsxs("span",{children:["Chat Asesor Humano (",n,")"]})]})}):c.jsxs("div",{className:"fixed bottom-5 right-5 z-50 w-96 sm:w-[420px] h-[540px] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-slideUp",children:[c.jsxs("div",{className:"bg-gradient-to-r from-amber-600 to-amber-700 px-4 py-3 text-white flex items-center justify-between shadow-sm",children:[c.jsxs("div",{className:"flex items-center gap-2.5",children:[c.jsx("div",{className:"p-1.5 bg-white/20 rounded-lg",children:c.jsx(vf,{className:"w-5 h-5 text-white"})}),c.jsxs("div",{children:[c.jsxs("div",{className:"flex items-center gap-1.5",children:[c.jsx("h4",{className:"text-sm font-bold leading-none",children:"Asesor Académico"}),c.jsxs("span",{className:`inline-flex items-center gap-1 text-[10px] px-1.5 py-0.5 rounded-full font-bold ${d?"bg-slate-500/30 text-slate-100":l?"bg-emerald-500/20 text-emerald-100":"bg-rose-500/20 text-rose-100"}`,children:[c.jsx($b,{className:`w-2 h-2 fill-current ${d?"text-slate-300":l?"text-emerald-400":"text-rose-400"}`}),d?"Finalizada":l?"En Línea":"Desconectado"]})]}),c.jsxs("p",{className:"text-[11px] text-amber-100 font-mono mt-0.5",children:["Sesión: ",n]})]})]}),c.jsxs("div",{className:"flex items-center gap-1",children:[c.jsx("button",{onClick:()=>p(!0),className:"text-white/80 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors",title:"Minimizar",children:c.jsx(Yb,{className:"w-4 h-4"})}),c.jsx("button",{onClick:e,className:"text-white/80 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors",title:"Cerrar chat",children:c.jsx(Qb,{className:"w-4 h-4"})})]})]}),d?c.jsx("div",{className:"flex-1 p-6 bg-slate-50 flex flex-col items-center justify-center text-center animate-fadeIn",children:S?c.jsxs("div",{className:"space-y-3 py-6",children:[c.jsx("div",{className:"w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm",children:c.jsx(Xb,{className:"w-6 h-6"})}),c.jsx("h4",{className:"text-base font-bold text-slate-800",children:"¡Gracias por tu retroalimentación!"}),c.jsx("p",{className:"text-xs text-slate-500 max-w-xs mx-auto",children:"Tu calificación nos permite seguir elevando la calidad de atención de la Academia de Idiomas."}),c.jsx("button",{onClick:e,className:"mt-4 px-5 py-2 text-xs font-bold text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-100 transition-colors",children:"Cerrar Ventana"})]}):c.jsxs("form",{onSubmit:P,className:"w-full space-y-4",children:[c.jsxs("div",{className:"space-y-1",children:[c.jsx("h4",{className:"text-sm font-bold text-slate-800",children:"Atención Finalizada"}),c.jsx("p",{className:"text-xs text-slate-500",children:"¿Cómo calificarías la atención recibida por tu asesor?"})]}),c.jsx("div",{className:"flex items-center justify-center gap-1.5 py-1",children:[1,2,3,4,5].map(F=>c.jsx("button",{type:"button",onClick:()=>b(F),onMouseEnter:()=>f(F),onMouseLeave:()=>f(0),className:"p-1 text-slate-300 hover:text-amber-400 focus:outline-none transition-colors",children:c.jsx(Zb,{className:`w-7 h-7 transition-transform duration-150 ${(x||g)>=F?"fill-amber-400 text-amber-400 scale-110":"fill-slate-100 text-slate-300"}`})},F))}),c.jsxs("span",{className:"text-xs font-bold text-amber-700 block",children:[g===5&&"⭐️⭐️⭐️⭐️⭐️ Excelente",g===4&&"⭐️⭐️⭐️⭐️ Muy Buena",g===3&&"⭐️⭐️⭐️ Buena",g===2&&"⭐️⭐️ Regular",g===1&&"⭐️ Deficiente"]}),c.jsx("div",{children:c.jsx("textarea",{rows:3,placeholder:"Comentarios adicionales opcionales...",value:y,onChange:F=>M(F.target.value),className:"w-full p-3 text-xs rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 font-medium text-slate-700 resize-none"})}),c.jsx("div",{className:"flex items-center justify-center gap-2 pt-1",children:c.jsx("button",{type:"submit",disabled:w,className:"w-full py-2.5 text-xs font-bold text-white bg-amber-600 hover:bg-amber-700 rounded-xl shadow-md transition-all disabled:opacity-50",children:w?"Enviando...":"Enviar Calificación"})})]})}):c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50",children:[r.map((F,I)=>{const $=F.sender==="user";return F.sender==="system"?c.jsx("div",{className:"text-center my-2",children:c.jsx("span",{className:"text-[11px] font-medium text-slate-500 bg-slate-200/60 px-3 py-1 rounded-full inline-block",children:F.message})},I):c.jsxs("div",{className:`flex flex-col ${$?"items-end":"items-start"}`,children:[c.jsx("span",{className:"text-[10px] font-bold text-slate-400 mb-1 px-1",children:$?"Tú":F.sender_name||"Asesor Académico"}),c.jsx("div",{className:`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed shadow-sm ${$?"bg-amber-600 text-white rounded-br-none":"bg-white text-slate-800 border border-slate-200/80 rounded-bl-none"}`,children:F.message})]},I)}),c.jsx("div",{ref:R})]}),c.jsxs("form",{onSubmit:L,className:"p-3 bg-white border-t border-slate-100 flex items-center gap-2",children:[c.jsx("input",{type:"text",placeholder:l?"Escribe a tu asesor humano...":"Conectando al servidor...",disabled:!l,value:a,onChange:F=>o(F.target.value),className:"flex-1 px-3.5 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 font-medium text-slate-800 disabled:opacity-50"}),c.jsx("button",{type:"submit",disabled:!a.trim()||!l,className:"p-2 bg-amber-600 hover:bg-amber-700 text-white rounded-xl shadow-sm transition-all disabled:opacity-50",children:c.jsx(Kb,{className:"w-4 h-4"})})]})]})]})}const $m="https://t.me/CL_Academy_bot",tw=["¿Cuánto cuesta el intensivo de inglés y qué horarios tienen en Bogotá?","¿Cuáles son los requisitos de inscripción y documentos requeridos?","¿Cómo funciona la prueba de clasificación gratuita de 25 minutos?","¿Qué medios de pago reciben (Nequi, Bancolombia, PSE)?","¿Tienen preparación para exámenes IELTS, TOEFL y Cambridge?","¿Cuáles son los horarios de sábados y tarifas de la Sede Medellín?"],Lu={id:"welcome_init",sender:"assistant",content:`¡Hola! Bienvenido a **Vanguard Assistant**, tu asesor académico inteligente oficial. Estoy capacitado con los reglamentos, planes de estudio, horarios y tarifas de la **Academia de Idiomas Colombiana**.

¿En qué idioma o programa estás interesado el día de hoy?`,sources:[{document:"cursos_y_modalidades.md",section:"Oferta Académica"},{document:"precios_y_metodos_de_pago.md",section:"Tarifas 2026"}],confidence_score:1,latency_ms:120,created_at:new Date().toISOString()};function nw({onNavigateToLanding:t,onNavigateToAdmin:e}){const[n,i]=ue.useState(!0),[r,s]=ue.useState(""),[a,o]=ue.useState(!1),[l,u]=ue.useState(!1),[h,p]=ue.useState(!1),[d,m]=ue.useState(""),[g,b]=ue.useState(null),[x,f]=ue.useState(()=>localStorage.getItem("vanguard_active_session_id")||`sess_${Date.now()}`),[y,M]=ue.useState(()=>{try{const I=localStorage.getItem("vanguard_sessions_index");return I?JSON.parse(I):[]}catch{return[]}}),[S,T]=ue.useState(()=>{const I=localStorage.getItem(`vanguard_chat_${x}`);if(I)try{return JSON.parse(I)}catch{}return[Lu]}),w=ue.useRef(null);ue.useEffect(()=>{localStorage.setItem("vanguard_active_session_id",x),localStorage.setItem(`vanguard_chat_${x}`,JSON.stringify(S)),M(I=>{const $=S.find(D=>D.sender==="user"),B=$?$.content.slice(0,36)+"...":"Nueva Consulta",q=I.find(D=>D.id===x);let G;return q?G=I.map(D=>D.id===x?{...D,title:B,updatedAt:Date.now()}:D):G=[{id:x,title:B,updatedAt:Date.now()},...I],localStorage.setItem("vanguard_sessions_index",JSON.stringify(G)),G})},[x,S]),ue.useEffect(()=>{var I;(I=w.current)==null||I.scrollIntoView({behavior:"smooth"})},[S,a]);const C=()=>{const I=`sess_${Date.now()}`;f(I),T([{id:`welcome_${Date.now()}`,sender:"assistant",content:"Nueva consulta iniciada. Puedes preguntarme sobre programas de **Inglés, Francés, Alemán, Italiano o Portugués**, sedes en Bogotá y Medellín, tarifas en COP o pruebas de nivelación.",sources:[{document:"cursos_y_modalidades.md",section:"General"}],confidence_score:1,latency_ms:85,created_at:new Date().toISOString()}])},_=I=>{f(I);const $=localStorage.getItem(`vanguard_chat_${I}`);if($)try{T(JSON.parse($))}catch{T([Lu])}},R=()=>{y.forEach($=>localStorage.removeItem(`vanguard_chat_${$.id}`)),localStorage.removeItem("vanguard_sessions_index"),localStorage.removeItem(`vanguard_chat_${x}`),M([]);const I=`sess_${Date.now()}`;f(I),T([Lu])},L=I=>I?String(I).replace(/\[\[ESCALATE\]\]/g,"").replace(/\[NO_INFO\]/g,"").replace(/Failed to process inquiry:[^.]*\./gi,"").replace(/Error getting collection:[^.]*\./gi,"").replace(/Collection \[[a-f0-9-]+\] does not exist\.?/gi,"").replace(/\*{1,3}([^*\n]+)\*{1,3}/g,"$1").replace(/^\s*\*\s+/gm,"• ").replace(/\*/g,"").replace(/\s{2,}/g," ").trim():"",P=async I=>{var q;const $=(I||r).trim();if(!$||a)return;s("");const B={id:`user_${Date.now()}`,sender:"user",content:$,created_at:new Date().toISOString()};T(G=>[...G,B]),o(!0);try{const G=await Cb($,x,"web"),D=G.escalated||G.status==="ESCALATED_TO_HUMAN",W={id:`bot_${Date.now()}`,sender:"assistant",content:L(G.response)||"No se obtuvo información para esta consulta.",status:G.status,sources:G.sources||[],confidence_score:G.confidence_score||0,latency_ms:((q=G.telemetry)==null?void 0:q.latency_ms)||0,escalated:D,created_at:new Date().toISOString()};T(Y=>[...Y,W]),D&&(m($),setTimeout(()=>{p(!0)},600))}catch{const D={id:`err_${Date.now()}`,sender:"assistant",content:"En este momento estamos experimentando una breve intermitencia técnica en el servicio. Si deseas atención inmediata, puedes solicitar conexión con un asesor académico.",sources:[],confidence_score:0,latency_ms:0,escalated:!0,created_at:new Date().toISOString()};T(W=>[...W,D]),m($),setTimeout(()=>{p(!0)},600)}finally{o(!1)}},F=I=>{navigator.clipboard.writeText(I),u(!0),setTimeout(()=>u(!1),2e3)};return c.jsxs("div",{className:"flex h-screen bg-[#070515] text-slate-100 font-sans overflow-hidden antialiased",children:[c.jsx("aside",{className:`${n?"w-64":"w-16"} bg-[#0c0926] border-r border-white/10 flex-shrink-0 flex flex-col justify-between transition-all duration-300 z-20`,children:c.jsxs("div",{className:"flex flex-col h-full overflow-hidden",children:[c.jsxs("div",{className:"p-3.5 border-b border-white/10",children:[c.jsxs("div",{className:"flex items-center justify-between",children:[n?c.jsxs("button",{onClick:t,className:"flex items-center gap-2.5 text-left group",children:[c.jsx("div",{className:"w-8 h-8 rounded-lg bg-brand-lime text-brand-dark flex items-center justify-center font-bold shadow-md shadow-brand-lime/20",children:c.jsx(Jl,{className:"text-base"})}),c.jsxs("div",{children:[c.jsx("span",{className:"font-display text-lg tracking-wider text-white block uppercase leading-none",children:"Vanguard"}),c.jsx("span",{className:"text-[9px] text-brand-lime font-mono uppercase",children:"AI Assistant"})]})]}):c.jsx("div",{className:"w-8 h-8 rounded-lg bg-brand-lime text-brand-dark flex items-center justify-center font-bold mx-auto",children:c.jsx(Jl,{className:"text-base"})}),c.jsx("button",{onClick:()=>i(!n),className:"text-slate-400 hover:text-white p-1 rounded-md hover:bg-white/5 transition-colors",title:n?"Colapsar barra":"Expandir barra",children:n?c.jsx(V1,{className:"text-xs"}):c.jsx(z1,{className:"text-xs"})})]}),n&&c.jsxs("button",{onClick:C,className:"mt-3 w-full flex items-center justify-between px-3 py-2 rounded-xl bg-brand-lime/10 border border-brand-lime/30 hover:bg-brand-lime/20 text-xs font-semibold text-brand-lime transition-all group",children:[c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx(L1,{className:"text-xs"}),c.jsx("span",{children:"Nueva Consulta"})]}),c.jsx("span",{className:"text-[10px] bg-brand-lime/20 px-1.5 py-0.5 rounded font-mono",children:"RAG"})]})]}),n&&c.jsxs("div",{className:"p-2.5 space-y-1 text-xs border-b border-white/5",children:[c.jsxs("button",{onClick:()=>P("¿Cuáles son los horarios y sedes en Bogotá y Medellín?"),className:"w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-colors text-left",children:[c.jsx(Ad,{className:"text-brand-orange text-xs"}),c.jsx("span",{className:"truncate",children:"Sedes Bogotá & Medellín"})]}),c.jsxs("button",{onClick:()=>P("¿Cuáles son los precios y formas de pago en COP?"),className:"w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-colors text-left",children:[c.jsx(D1,{className:"text-brand-lime text-xs"}),c.jsx("span",{className:"truncate",children:"Precios & Pagos COP"})]}),c.jsxs("button",{onClick:()=>P("¿Cómo son los niveles del Marco Común Europeo MCER?"),className:"w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-colors text-left",children:[c.jsx(G1,{className:"text-brand-blue text-xs"}),c.jsx("span",{className:"truncate",children:"Pensum MCER (A1 a C1)"})]})]}),c.jsxs("div",{className:"flex-1 overflow-y-auto px-3 py-3 space-y-1 custom-scroll",children:[n&&c.jsxs("div",{className:"flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2 mb-2",children:[c.jsxs("span",{className:"flex items-center gap-1.5",children:[c.jsx(O1,{})," Historial"]}),y.length>0&&c.jsx("button",{onClick:R,className:"hover:text-red-400 text-[10px] normal-case transition-colors",children:"Limpiar"})]}),n&&(y.length>0?y.map(I=>c.jsx("button",{onClick:()=>_(I.id),className:`w-full text-left px-2.5 py-2 rounded-lg text-xs truncate transition-all block ${x===I.id?"bg-brand-lime/10 text-brand-lime border border-brand-lime/30 font-medium":"text-slate-400 hover:text-white hover:bg-white/5"}`,children:c.jsx("span",{className:"block truncate",children:I.title})},I.id)):n&&c.jsx("p",{className:"text-[11px] text-slate-500 px-2 italic",children:"Sin consultas previas"}))]}),n&&c.jsxs("div",{className:"p-3 border-t border-white/10 space-y-2",children:[c.jsxs("a",{href:$m,target:"_blank",rel:"noopener noreferrer",className:"w-full flex items-center justify-between px-3 py-2 rounded-xl bg-[#229ED9]/10 hover:bg-[#229ED9]/20 border border-[#229ED9]/30 text-[#229ED9] text-xs font-semibold transition-colors",children:[c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx(ka,{}),c.jsx("span",{children:"Bot Telegram"})]}),c.jsx("span",{className:"text-[10px] bg-[#229ED9]/20 px-1.5 py-0.5 rounded font-mono",children:"24/7"})]}),c.jsxs("button",{onClick:t,className:"w-full flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-medium transition-colors",children:[c.jsx(q1,{className:"text-xs"}),c.jsx("span",{children:"Volver a la Landing"})]})]})]})}),c.jsxs("main",{className:"flex-1 flex flex-col h-full overflow-hidden relative bg-[#070515]",children:[c.jsxs("header",{className:"h-14 border-b border-white/10 bg-[#0c0926]/90 backdrop-blur-md px-6 flex items-center justify-between flex-shrink-0 z-10",children:[c.jsxs("div",{className:"flex items-center gap-2 text-xs text-slate-400",children:[c.jsx("span",{className:"w-2 h-2 rounded-full bg-brand-lime animate-ping"}),c.jsx("span",{className:"text-slate-200 font-medium",children:"Asesor Académico Virtual"}),c.jsx("span",{className:"text-slate-500",children:"•"}),c.jsxs("span",{className:"font-mono text-[11px] text-slate-400",children:["Sesión: ",x]})]}),c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsxs("a",{href:$m,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#229ED9]/15 hover:bg-[#229ED9]/25 border border-[#229ED9]/30 text-[#229ED9] text-xs font-bold transition-all",children:[c.jsx(ka,{}),c.jsx("span",{children:"Abrir en Telegram"})]}),c.jsx("button",{onClick:e,className:"text-xs text-slate-400 hover:text-white px-3 py-1.5 rounded-full border border-white/10 hover:border-white/30 transition-colors",children:"Staff Portal"})]})]}),c.jsxs("div",{className:"flex-1 overflow-y-auto px-4 py-6 md:px-12 max-w-4xl w-full mx-auto space-y-6 custom-scroll",children:[S.map(I=>{const $=I.sender==="user",B=I.escalated||I.status==="ESCALATED_TO_HUMAN";return $?c.jsx("div",{className:"flex justify-end animate-fadeIn",children:c.jsx("div",{className:"bg-[#1e1948] text-white px-5 py-3.5 rounded-3xl rounded-br-md max-w-2xl text-sm leading-relaxed border border-white/10 shadow-lg",children:I.content})},I.id):c.jsxs("div",{className:"space-y-3 animate-fadeIn",children:[c.jsxs("div",{className:"flex items-center gap-2 text-xs text-slate-400",children:[c.jsx("div",{className:"w-6 h-6 rounded-lg bg-brand-lime text-brand-dark flex items-center justify-center font-bold text-xs",children:c.jsx(Ai,{})}),c.jsx("span",{className:"font-bold text-white",children:"Vanguard Assistant"}),c.jsx("span",{className:"text-slate-600",children:"•"}),c.jsxs("span",{className:"inline-flex items-center gap-1 text-[11px] font-mono text-brand-lime",children:[c.jsx(kt,{className:"text-[10px]"}),B?"Escalamiento Asesor":"Verificado por Documentos Oficiales"]}),I.latency_ms>0&&c.jsxs(c.Fragment,{children:[c.jsx("span",{className:"text-slate-600",children:"•"}),c.jsxs("span",{className:"text-[10px] font-mono text-slate-500",children:["Latencia: ",I.latency_ms.toFixed(0),"ms"]})]})]}),c.jsxs("div",{className:`p-6 rounded-3xl border shadow-xl leading-relaxed text-sm ${B?"bg-amber-950/20 border-amber-500/40 text-slate-100":"bg-[#100c2a] border-white/10 text-slate-200"}`,children:[c.jsx("div",{className:"prose prose-invert max-w-none text-sm leading-relaxed whitespace-pre-wrap",children:L(I.content)}),B&&c.jsxs("div",{className:"mt-5 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-3",children:[c.jsxs("div",{className:"flex items-center gap-2.5 text-amber-300 text-xs font-semibold",children:[c.jsx(Td,{className:"text-base"}),c.jsx("span",{children:"¿Deseas atención personalizada en vivo con un asesor?"})]}),c.jsx("button",{onClick:()=>{m(I.content),p(!0)},className:"px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all hover:scale-105 cursor-pointer",children:"Conectar con Asesor"})]}),I.sources&&I.sources.length>0&&c.jsxs("div",{className:"mt-5 pt-4 border-t border-white/10 space-y-2",children:[c.jsx("span",{className:"text-[11px] font-mono uppercase tracking-wider text-slate-400 block",children:"Fuentes Citadas:"}),c.jsx("div",{className:"flex flex-wrap gap-2",children:I.sources.map((q,G)=>c.jsxs("div",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/5 border border-white/10 text-xs text-brand-lime font-mono",children:[c.jsx(W1,{className:"text-[10px]"}),c.jsx("span",{children:q.document}),c.jsx("span",{className:"text-slate-500",children:"•"}),c.jsx("span",{className:"text-slate-300",children:q.section})]},G))})]}),c.jsxs("div",{className:"mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-400",children:[c.jsxs("span",{className:"text-[10px] font-mono text-slate-500",children:["Estado: ",I.status||"RESOLVED_BY_RAG"]}),c.jsxs("button",{onClick:()=>F(I.content),className:"flex items-center gap-1 hover:text-white transition-colors text-[11px]",children:[l?c.jsx(cg,{className:"text-brand-lime"}):c.jsx(Y1,{}),c.jsx("span",{children:l?"Copiado":"Copiar respuesta"})]})]})]})]},I.id)}),a&&c.jsxs("div",{className:"flex items-center gap-3 p-4 rounded-2xl bg-[#100c2a] border border-white/10 text-xs text-slate-400 animate-pulse max-w-md",children:[c.jsx(Ai,{className:"text-brand-lime text-base animate-bounce"}),c.jsx("span",{children:"Consultando documentos oficiales y sintetizando respuesta..."})]}),c.jsx("div",{ref:w})]}),c.jsx("div",{className:"px-6 py-2 border-t border-white/5 bg-[#070515] flex-shrink-0",children:c.jsxs("div",{className:"max-w-4xl mx-auto flex items-center gap-2 overflow-x-auto pb-1 text-xs no-scrollbar",children:[c.jsx("span",{className:"text-slate-500 font-mono text-[10px] whitespace-nowrap",children:"Sugerencias:"}),tw.map((I,$)=>c.jsx("button",{onClick:()=>P(I),className:"px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white text-xs whitespace-nowrap transition-colors flex-shrink-0",children:I},$))]})}),c.jsx("div",{className:"p-4 md:px-12 bg-[#0c0926]/95 border-t border-white/10 flex-shrink-0",children:c.jsxs("div",{className:"max-w-4xl mx-auto",children:[c.jsxs("form",{onSubmit:I=>{I.preventDefault(),P()},className:"relative rounded-2xl bg-[#141038] border border-white/15 focus-within:border-brand-lime shadow-2xl p-2 transition-colors",children:[c.jsx("textarea",{rows:2,placeholder:"Pregunta sobre programas, sedes Bogotá/Medellín, precios COP o pruebas de clasificación...",value:r,onChange:I=>s(I.target.value),onKeyDown:I=>{I.key==="Enter"&&!I.shiftKey&&(I.preventDefault(),P())},className:"w-full bg-transparent border-0 focus:ring-0 text-sm text-white placeholder:text-slate-500 resize-none outline-none px-3 py-1 block"}),c.jsxs("div",{className:"flex items-center justify-between pt-2 border-t border-white/10 px-2",children:[c.jsx("div",{className:"flex items-center gap-2 text-xs text-slate-400",children:c.jsxs("span",{className:"inline-flex items-center gap-1 bg-white/5 px-2.5 py-1 rounded-md text-[11px] font-mono text-brand-lime border border-white/10",children:[c.jsx(Ai,{className:"text-xs"}),"Cero Alucinaciones"]})}),c.jsx("button",{type:"submit",disabled:!r.trim()||a,className:"w-9 h-9 rounded-xl bg-brand-lime hover:bg-[#b0f55c] disabled:opacity-30 disabled:hover:bg-brand-lime text-brand-dark flex items-center justify-center font-bold shadow-md transition-transform active:scale-95 cursor-pointer",children:c.jsx(lg,{className:"text-xs"})})]})]}),c.jsx("p",{className:"text-[10px] text-center text-slate-500 mt-2",children:"Vanguard Assistant responde únicamente con base en documentos oficiales institucionales."})]})})]}),c.jsx(Jb,{isOpen:h,initialQuery:d,onClose:()=>p(!1),onStartLiveChat:I=>{b(I)}}),g&&c.jsx(ew,{sessionInfo:g,onClose:()=>b(null)})]})}function iw({onNavigateToLanding:t,onNavigateToChat:e}){var Pe,Ue,U,de,J,pe,ve,te,we,Ee,ht,it,mn,xn,xo,go,ea,qr,vo,ta,na,Zn,Yr,ia,ra,_r,sa,yr,aa,oa,_o,yo,So,Mo,E,z;const[n,i]=ue.useState(()=>localStorage.getItem("vanguard_admin_jwt")||""),[r,s]=ue.useState(()=>{const N=localStorage.getItem("vanguard_admin_user");return N?JSON.parse(N):null}),[a,o]=ue.useState("admin"),[l,u]=ue.useState(""),[h,p]=ue.useState(""),[d,m]=ue.useState(!1),[g,b]=ue.useState("escalations"),[x,f]=ue.useState([]),[y,M]=ue.useState(!1),[S,T]=ue.useState(null),[w,C]=ue.useState([]),[_,R]=ue.useState(""),[L,P]=ue.useState(!1),[F,I]=ue.useState(!1),[$,B]=ue.useState(!1),[q,G]=ue.useState(""),D=ue.useRef(null),W=ue.useRef(null),[Y,ne]=ue.useState(null),[re,Ie]=ue.useState(!1),[Ke,je]=ue.useState([]),[Q,ce]=ue.useState([]),[se,Le]=ue.useState(null),[Fe,Ne]=ue.useState(!1),[ie,ze]=ue.useState(null),[tt,qe]=ue.useState("gemini"),[Ge,vt]=ue.useState(""),[xt,Tt]=ue.useState(""),[Mt,dt]=ue.useState(""),[ft,O]=ue.useState({type:"",text:""}),[Vt,et]=ue.useState(!1),[A,v]=ue.useState(null),[H,j]=ue.useState({}),K=async(N,k)=>{v(N);try{const V=await Lb(n,N,k||null);j(le=>({...le,[N]:{status:V.status,message:V.message}}))}catch(V){j(le=>({...le,[N]:{status:"error",message:V.message||"Fallo de conexión."}}))}finally{v(null)}},oe=async N=>{N.preventDefault(),p(""),m(!0);try{const k=await Rb(a,l);i(k.access_token),s(k.user),localStorage.setItem("vanguard_admin_jwt",k.access_token),localStorage.setItem("vanguard_admin_user",JSON.stringify(k.user))}catch(k){p(k.message||"Credenciales inválidas.")}finally{m(!1)}},fe=()=>{i(""),s(null),localStorage.removeItem("vanguard_admin_jwt"),localStorage.removeItem("vanguard_admin_user")},Z=async()=>{if(n){M(!0);try{const N=await Ub(n);f(Array.isArray(N)?N:[])}catch(N){console.error("Error loading escalated sessions:",N)}finally{M(!1)}}},ee=async()=>{if(n){Ie(!0);try{const N=await Db(n);ne(N)}catch(N){console.error("Error loading metrics:",N)}finally{Ie(!1)}}},he=async()=>{if(n){Ne(!0);try{const[N,k,V]=await Promise.all([Bb(n).catch(()=>[]),zb(n).catch(()=>[]),Vb(n).catch(()=>null)]);je(N),ce(k),Le(V)}catch(N){console.error("Error loading CRM:",N)}finally{Ne(!1)}}},Ae=async()=>{if(n)try{const N=await Nb(n);ze(N),N.active_provider&&qe(N.active_provider)}catch(N){console.error("Error loading provider settings:",N)}};ue.useEffect(()=>{n&&(g==="escalations"&&Z(),g==="metrics"&&ee(),g==="crm"&&he(),g==="settings"&&Ae())},[n,g]),ue.useEffect(()=>{if(!S){D.current&&D.current.close();return}async function N(){try{const le=await Xg(S.session_id);C(le)}catch(le){console.error("Failed to load session history:",le)}}N();const k=$g(S.session_id),V=new WebSocket(k);return D.current=V,V.onmessage=le=>{try{const _e=JSON.parse(le.data);C(me=>_e.id&&me.some(be=>be.id===_e.id)||me.some(be=>be.sender===_e.sender&&be.message===_e.message&&Math.abs(new Date(be.timestamp||Date.now())-new Date(_e.timestamp||Date.now()))<4e3)?me:[...me,_e])}catch(_e){console.error("WS parse error:",_e)}},()=>{V.readyState===WebSocket.OPEN&&V.close()}},[S]),ue.useEffect(()=>{var N;(N=W.current)==null||N.scrollIntoView({behavior:"smooth"})},[w]);const ge=async N=>{if(N.preventDefault(),!_.trim()||!S)return;P(!0);const k=_.trim();if(R(""),S.channel==="telegram"&&S.telegram_chat_id){try{await Fb(n,S.telegram_chat_id,k,S.session_id),C(V=>[...V,{id:`admin_${Date.now()}`,session_id:S.session_id,sender:"admin",sender_name:(r==null?void 0:r.full_name)||"Asesor Académico",message:k,timestamp:new Date().toISOString()}])}catch(V){alert(`Error al enviar a Telegram: ${V.message}`)}finally{P(!1)}return}if(D.current&&D.current.readyState===WebSocket.OPEN){const V={sender:"admin",sender_name:(r==null?void 0:r.full_name)||"Asesor Académico",message:k};D.current.send(JSON.stringify(V))}P(!1)},xe=async()=>{if(S){B(!0),G("");try{await Ob(n,S.session_id),I(!1),T(null),Z()}catch(N){G(N.message||"Error al finalizar la sesión.")}finally{B(!1)}}},Ce=async N=>{N.preventDefault(),et(!0),O({type:"",text:""});try{const k={active_provider:tt,gemini_api_key:Ge.trim()||void 0,groq_api_key:xt.trim()||void 0,openai_api_key:Mt.trim()||void 0},V=await Pb(n,k);ze(V),V.active_provider&&qe(V.active_provider),O({type:"success",text:"¡Configuración de proveedores actualizada exitosamente!"}),vt(""),Tt(""),dt("")}catch(k){O({type:"error",text:k.message||"Error al actualizar proveedores"})}finally{et(!1)}};return n?c.jsxs("div",{className:"min-h-screen bg-[#070515] text-slate-100 flex flex-col font-sans selection:bg-brand-lime selection:text-brand-dark",children:[c.jsxs("header",{className:"h-16 border-b border-white/10 bg-[#0c0926]/90 backdrop-blur-md px-6 flex items-center justify-between flex-shrink-0 z-20",children:[c.jsxs("div",{className:"flex items-center gap-4",children:[c.jsxs("div",{className:"flex items-center gap-2.5",children:[c.jsx("div",{className:"w-8 h-8 rounded-lg bg-brand-lime text-brand-dark flex items-center justify-center font-bold shadow-md shadow-brand-lime/20",children:c.jsx(Wp,{className:"text-base"})}),c.jsxs("div",{children:[c.jsx("span",{className:"font-display text-lg tracking-wider text-white uppercase block leading-none",children:"Vanguard"}),c.jsx("span",{className:"text-[9px] text-brand-lime font-mono uppercase",children:"Staff Administration"})]})]}),c.jsxs("nav",{className:"hidden md:flex items-center gap-2 ml-8 bg-white/5 p-1 rounded-xl border border-white/10 text-xs",children:[c.jsxs("button",{onClick:()=>b("escalations"),className:`px-3.5 py-1.5 rounded-lg font-semibold transition-all flex items-center gap-1.5 ${g==="escalations"?"bg-brand-lime text-brand-dark shadow-sm":"text-slate-400 hover:text-white"}`,children:[c.jsx(Jc,{}),c.jsx("span",{children:"Casos Escalados"}),x.filter(N=>N.status==="WAITING").length>0&&c.jsx("span",{className:"bg-rose-500 text-white text-[9px] px-1.5 py-0.2 rounded-full font-mono",children:x.filter(N=>N.status==="WAITING").length})]}),c.jsxs("button",{onClick:()=>b("metrics"),className:`px-3.5 py-1.5 rounded-lg font-semibold transition-all flex items-center gap-1.5 ${g==="metrics"?"bg-brand-lime text-brand-dark shadow-sm":"text-slate-400 hover:text-white"}`,children:[c.jsx(H1,{}),c.jsx("span",{children:"Métricas KPI"})]}),c.jsxs("button",{onClick:()=>b("crm"),className:`px-3.5 py-1.5 rounded-lg font-semibold transition-all flex items-center gap-1.5 ${g==="crm"?"bg-brand-lime text-brand-dark shadow-sm":"text-slate-400 hover:text-white"}`,children:[c.jsx(Td,{}),c.jsx("span",{children:"CRM & Reseñas"})]}),c.jsxs("button",{onClick:()=>b("settings"),className:`px-3.5 py-1.5 rounded-lg font-semibold transition-all flex items-center gap-1.5 ${g==="settings"?"bg-brand-lime text-brand-dark shadow-sm":"text-slate-400 hover:text-white"}`,children:[c.jsx(F1,{}),c.jsx("span",{children:"Proveedores & Keys"})]})]})]}),c.jsxs("div",{className:"flex items-center gap-3 text-xs",children:[c.jsxs("button",{onClick:e,className:"hidden sm:flex items-center gap-1.5 text-slate-400 hover:text-white px-3 py-1.5 rounded-lg border border-white/10 hover:bg-white/5 transition-colors",children:[c.jsx(Ai,{}),c.jsx("span",{children:"Asistente IA"})]}),c.jsxs("div",{className:"flex items-center gap-2 pl-2 border-l border-white/10",children:[c.jsx("span",{className:"font-mono text-slate-300 font-bold hidden sm:inline",children:(r==null?void 0:r.username)||"admin"}),c.jsxs("button",{onClick:fe,className:"flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 font-semibold border border-red-500/30 transition-colors",children:[c.jsx(N1,{}),c.jsx("span",{children:"Salir"})]})]})]})]}),c.jsxs("main",{className:"flex-1 overflow-y-auto p-6 max-w-7xl w-full mx-auto space-y-6",children:[g==="escalations"&&c.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-140px)]",children:[c.jsxs("div",{className:"lg:col-span-1 bg-[#100c2a] border border-white/10 rounded-3xl p-5 flex flex-col overflow-hidden",children:[c.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-white/10",children:[c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx(Jc,{className:"text-brand-lime"}),c.jsx("h3",{className:"font-bold text-sm text-white",children:"Casos de Asesoría en Vivo"})]}),c.jsx("button",{onClick:Z,className:"text-slate-400 hover:text-white p-1 rounded hover:bg-white/5 transition-colors",title:"Actualizar",children:c.jsx(Jr,{className:`text-xs ${y?"animate-spin":""}`})})]}),c.jsx("div",{className:"flex-1 overflow-y-auto pt-3 space-y-2 custom-scroll",children:x.length===0?c.jsx("p",{className:"text-xs text-slate-500 italic text-center py-12",children:"No hay casos escalados pendientes."}):x.map(N=>{const k=(S==null?void 0:S.session_id)===N.session_id,V=N.status==="WAITING";return c.jsxs("button",{onClick:()=>T(N),className:`w-full text-left p-3.5 rounded-2xl border transition-all block relative ${k?"bg-brand-lime/15 border-brand-lime text-white shadow-md":"bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"}`,children:[c.jsxs("div",{className:"flex items-center justify-between mb-1",children:[c.jsx("span",{className:"font-bold text-xs truncate max-w-[140px] text-white",children:N.full_name}),c.jsx("span",{className:`text-[9px] px-2 py-0.5 rounded-full font-mono font-bold uppercase ${V?"bg-amber-500/20 text-amber-300 border border-amber-500/30 animate-pulse":"bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"}`,children:N.status})]}),c.jsxs("p",{className:"text-[11px] font-mono text-slate-400 truncate",children:["ID: ",N.session_id," • Cédula: ",N.national_id]}),N.initial_inquiry&&c.jsxs("p",{className:"text-[11px] text-slate-400 line-clamp-1 italic mt-1",children:['"',N.initial_inquiry,'"']}),c.jsx("span",{className:"text-[9px] text-slate-500 block mt-1",children:new Date(N.created_at).toLocaleTimeString()})]},N.id)})})]}),c.jsx("div",{className:"lg:col-span-2 bg-[#100c2a] border border-white/10 rounded-3xl flex flex-col overflow-hidden",children:S?c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"p-4 border-b border-white/10 bg-[#141038] flex items-center justify-between",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx("h4",{className:"font-bold text-sm text-white",children:S.full_name}),c.jsx("span",{className:"text-[10px] font-mono bg-white/10 px-2 py-0.5 rounded text-brand-lime",children:S.channel.toUpperCase()})]}),c.jsxs("p",{className:"text-xs text-slate-400 font-mono",children:["Sesión: ",S.session_id," • Doc: ",S.national_id]})]}),c.jsx("div",{className:"flex items-center gap-2",children:c.jsx("button",{onClick:()=>I(!0),className:"px-3.5 py-1.5 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 border border-rose-500/40 text-rose-300 text-xs font-bold transition-all",children:"Finalizar Atención"})})]}),c.jsxs("div",{className:"flex-1 overflow-y-auto p-5 space-y-3 bg-[#0c0926]/50 custom-scroll",children:[w.length===0?c.jsx("p",{className:"text-xs text-slate-500 text-center py-12",children:"No hay mensajes previos en esta sesión."}):w.map((N,k)=>{const V=N.sender==="admin";return N.sender==="system"?c.jsx("div",{className:"text-center my-2",children:c.jsx("span",{className:"text-[10px] bg-white/5 px-3 py-1 rounded-full text-slate-400 border border-white/10",children:N.message})},k):c.jsxs("div",{className:`flex flex-col ${V?"items-end":"items-start"}`,children:[c.jsx("span",{className:"text-[10px] text-slate-400 px-1 mb-0.5",children:V?"Tú (Asesor)":S.full_name}),c.jsx("div",{className:`max-w-[75%] p-3 rounded-2xl text-xs leading-relaxed ${V?"bg-brand-lime text-brand-dark font-medium rounded-br-none":"bg-white/10 text-white border border-white/10 rounded-bl-none"}`,children:N.message})]},k)}),c.jsx("div",{ref:W})]}),c.jsxs("form",{onSubmit:ge,className:"p-3 bg-[#141038] border-t border-white/10 flex items-center gap-2",children:[c.jsx("input",{type:"text",placeholder:`Escribir respuesta a ${S.full_name}...`,value:_,onChange:N=>R(N.target.value),className:"flex-1 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-lime"}),c.jsxs("button",{type:"submit",disabled:!_.trim()||L,className:"px-5 py-2.5 rounded-xl bg-brand-lime hover:bg-[#b0f55c] disabled:opacity-40 text-brand-dark font-bold text-xs flex items-center gap-2 transition-transform active:scale-95",children:[c.jsx(lg,{className:"text-xs"}),c.jsx("span",{children:"Responder"})]})]})]}):c.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center text-center p-8 space-y-3 text-slate-500",children:[c.jsx(Jc,{className:"text-4xl text-slate-600"}),c.jsx("p",{className:"text-sm",children:"Selecciona una sesión de la lista para atender la consulta en tiempo real."})]})})]}),g==="metrics"&&c.jsxs("div",{className:"space-y-6",children:[c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsxs("div",{children:[c.jsx("h3",{className:"text-lg font-bold text-white",children:"Telemetría Operacional & Métricas RAG"}),c.jsx("p",{className:"text-xs text-slate-400",children:"Consumo de tokens, latencias y tasas de resolución de la Academia"})]}),c.jsxs("button",{onClick:ee,className:"flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10",children:[c.jsx(Jr,{className:`text-xs ${re?"animate-spin":""}`}),c.jsx("span",{children:"Actualizar Métricas"})]})]}),Y&&c.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",children:[c.jsxs("div",{className:"p-5 rounded-2xl bg-[#100c2a] border border-white/10 space-y-2",children:[c.jsx("span",{className:"text-xs text-slate-400 font-mono uppercase block",children:"Total Consultas"}),c.jsxs("div",{className:"flex items-baseline gap-2",children:[c.jsx("span",{className:"font-display text-4xl text-white",children:Y.total_queries_processed}),c.jsx("span",{className:"text-xs text-brand-lime font-mono",children:"100%"})]}),c.jsx("p",{className:"text-[11px] text-slate-500",children:"Inquiries procesadas por todos los canales"})]}),c.jsxs("div",{className:"p-5 rounded-2xl bg-[#100c2a] border border-white/10 space-y-2",children:[c.jsx("span",{className:"text-xs text-slate-400 font-mono uppercase block",children:"Triage & Cache Hits"}),c.jsxs("div",{className:"flex items-baseline gap-2",children:[c.jsx("span",{className:"font-display text-4xl text-brand-lime",children:(Y.resolved_by_faq_triage||0)+(Y.resolved_by_cache||0)}),c.jsx("span",{className:"text-xs text-slate-400 font-mono",children:"$0 Costo"})]}),c.jsx("p",{className:"text-[11px] text-slate-500",children:"Resueltos sin consumo de tokens de generación"})]}),c.jsxs("div",{className:"p-5 rounded-2xl bg-[#100c2a] border border-white/10 space-y-2",children:[c.jsx("span",{className:"text-xs text-slate-400 font-mono uppercase block",children:"Tasa de Escalamiento"}),c.jsxs("div",{className:"flex items-baseline gap-2",children:[c.jsxs("span",{className:"font-display text-4xl text-amber-400",children:[Y.escalation_rate_pct,"%"]}),c.jsxs("span",{className:"text-xs text-slate-400 font-mono",children:[Y.escalated_to_human," casos"]})]}),c.jsx("p",{className:"text-[11px] text-slate-500",children:"Transferencias a asesores académicos"})]}),c.jsxs("div",{className:"p-5 rounded-2xl bg-[#100c2a] border border-white/10 space-y-2",children:[c.jsx("span",{className:"text-xs text-slate-400 font-mono uppercase block",children:"Costo Estimado USD"}),c.jsx("div",{className:"flex items-baseline gap-2",children:c.jsxs("span",{className:"font-display text-4xl text-brand-blue",children:["$",(Y.total_cost_usd||Y.estimated_total_cost_usd||0).toFixed(4)]})}),c.jsxs("p",{className:"text-[11px] text-slate-500",children:["Latencia promedio: ",(Y.average_latency_ms||0).toFixed(0)," ms"]})]})]})]}),g==="crm"&&c.jsxs("div",{className:"space-y-6",children:[c.jsxs("div",{className:"flex items-center justify-between",children:[c.jsxs("div",{children:[c.jsx("h3",{className:"text-lg font-bold text-white",children:"Directorio CRM & Reseñas de Aspirantes"}),c.jsx("p",{className:"text-xs text-slate-400",children:"Historial de calificaciones y perfiles de estudiantes atendidos"})]}),c.jsxs("button",{onClick:he,className:"flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10",children:[c.jsx(Jr,{className:`text-xs ${Fe?"animate-spin":""}`}),c.jsx("span",{children:"Actualizar CRM"})]})]}),se&&c.jsxs("div",{className:"p-5 rounded-2xl bg-[#100c2a] border border-white/10 flex items-center justify-between",children:[c.jsxs("div",{className:"flex items-center gap-4",children:[c.jsx("div",{className:"w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-xl font-bold",children:c.jsx(jp,{})}),c.jsxs("div",{children:[c.jsx("h4",{className:"text-base font-bold text-white",children:"Calificación Promedio de Atención"}),c.jsxs("p",{className:"text-xs text-slate-400",children:[se.total_reviews," reseñas de satisfacción enviadas"]})]})]}),c.jsxs("div",{className:"font-display text-4xl text-amber-400",children:[se.average_rating," / 5.0"]})]}),c.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[c.jsxs("div",{className:"p-6 rounded-3xl bg-[#100c2a] border border-white/10 space-y-4",children:[c.jsxs("h4",{className:"font-bold text-sm text-white flex items-center gap-2",children:[c.jsx(Td,{className:"text-brand-lime"}),c.jsx("span",{children:"Perfiles Registrados en CRM"})]}),c.jsx("div",{className:"overflow-x-auto",children:c.jsxs("table",{className:"w-full text-left text-xs text-slate-300",children:[c.jsx("thead",{className:"bg-white/5 text-slate-400 uppercase text-[10px] border-b border-white/10",children:c.jsxs("tr",{children:[c.jsx("th",{className:"p-3",children:"Nombre"}),c.jsx("th",{className:"p-3",children:"Cédula"}),c.jsx("th",{className:"p-3",children:"Canal"}),c.jsx("th",{className:"p-3 text-center",children:"Escalaciones"})]})}),c.jsx("tbody",{className:"divide-y divide-white/5",children:Ke.length===0?c.jsx("tr",{children:c.jsx("td",{colSpan:"4",className:"text-center py-6 text-slate-500",children:"Sin perfiles registrados"})}):Ke.map(N=>c.jsxs("tr",{children:[c.jsx("td",{className:"p-3 font-bold text-white",children:N.full_name}),c.jsx("td",{className:"p-3 font-mono text-slate-400",children:N.national_id}),c.jsx("td",{className:"p-3 uppercase font-mono text-[10px] text-brand-lime",children:N.channel}),c.jsx("td",{className:"p-3 text-center font-bold text-amber-400",children:N.total_escalations_count})]},N.id))})]})})]}),c.jsxs("div",{className:"p-6 rounded-3xl bg-[#100c2a] border border-white/10 space-y-4",children:[c.jsxs("h4",{className:"font-bold text-sm text-white flex items-center gap-2",children:[c.jsx(jp,{className:"text-amber-400"}),c.jsx("span",{children:"Últimas Reseñas Recibidas"})]}),c.jsx("div",{className:"overflow-x-auto",children:c.jsxs("table",{className:"w-full text-left text-xs text-slate-300",children:[c.jsx("thead",{className:"bg-white/5 text-slate-400 uppercase text-[10px] border-b border-white/10",children:c.jsxs("tr",{children:[c.jsx("th",{className:"p-3",children:"Sesión"}),c.jsx("th",{className:"p-3",children:"Calificación"}),c.jsx("th",{className:"p-3",children:"Comentarios"})]})}),c.jsx("tbody",{className:"divide-y divide-white/5",children:Q.length===0?c.jsx("tr",{children:c.jsx("td",{colSpan:"3",className:"text-center py-6 text-slate-500",children:"Sin reseñas enviadas"})}):Q.map(N=>c.jsxs("tr",{children:[c.jsx("td",{className:"p-3 font-mono text-brand-lime",children:N.session_id}),c.jsxs("td",{className:"p-3 text-amber-400 font-bold",children:[N.rating," ★"]}),c.jsx("td",{className:"p-3 italic text-slate-400 max-w-[200px] truncate",children:N.notes||"Sin notas"})]},N.id))})]})})]})]})]}),g==="settings"&&c.jsxs("div",{className:"max-w-4xl mx-auto space-y-6",children:[c.jsxs("div",{children:[c.jsx("h3",{className:"text-lg font-bold text-white",children:"Configuración de Proveedores LLM & API Keys"}),c.jsx("p",{className:"text-xs text-slate-400",children:"Alterna en tiempo de ejecución entre Google Gemini, Groq LPU y OpenAI sin reiniciar el servidor."})]}),ft.text&&c.jsxs("div",{className:`p-4 rounded-2xl text-xs flex items-center gap-2 ${ft.type==="success"?"bg-emerald-500/10 border border-emerald-500/30 text-emerald-300":"bg-red-500/10 border border-red-500/30 text-red-400"}`,children:[ft.type==="success"?c.jsx(kt,{}):c.jsx(es,{}),c.jsx("span",{children:ft.text})]}),c.jsxs("form",{onSubmit:Ce,className:"p-8 rounded-3xl bg-[#100c2a] border border-white/10 space-y-6",children:[c.jsxs("div",{children:[c.jsx("label",{className:"text-xs font-bold uppercase text-slate-400 block mb-3",children:"Proveedor LLM Activo"}),c.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:[{id:"gemini",name:"Google Gemini",defaultModel:"gemini-3.1-flash-lite",icon:c.jsx(Gp,{className:"text-xl text-[#4285F4]"})},{id:"groq",name:"Groq LPU (Ultra-Fast)",defaultModel:"llama-3.1-8b-instant",icon:c.jsx(xa,{className:"text-xl text-brand-lime"})},{id:"openai",name:"OpenAI",defaultModel:"gpt-4o-mini",icon:c.jsx(Ai,{className:"text-xl text-brand-blue"})}].map(N=>{var le;const k=((le=ie==null?void 0:ie.providers)==null?void 0:le[N.id])||(ie==null?void 0:ie[N.id]),V=(k==null?void 0:k.model)||N.defaultModel;return c.jsxs("button",{type:"button",onClick:()=>qe(N.id),className:`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between ${tt===N.id?"bg-brand-lime/10 border-brand-lime text-white shadow-lg shadow-brand-lime/10":"bg-white/5 border-white/10 text-slate-400 hover:border-white/30"}`,children:[c.jsxs("div",{className:"flex items-center justify-between mb-3",children:[N.icon,tt===N.id&&c.jsx(cg,{className:"text-brand-lime text-xs"})]}),c.jsxs("div",{children:[c.jsx("strong",{className:"text-sm block text-white",children:N.name}),c.jsx("span",{className:"text-[11px] font-mono text-brand-lime/80 font-medium",children:V})]})]},N.id)})})]}),c.jsxs("div",{className:"space-y-5 pt-4 border-t border-white/10",children:[c.jsxs("div",{className:"p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2",children:[c.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx(Gp,{className:"text-sm text-[#4285F4]"}),c.jsx("label",{className:"text-xs font-bold uppercase text-slate-300",children:"Google Gemini API Key"})]}),c.jsx("div",{className:"flex items-center gap-2",children:H.gemini?c.jsxs("span",{className:`text-[10px] px-2 py-0.5 rounded-full font-medium flex items-center gap-1 ${H.gemini.status==="verified"?"bg-emerald-500/20 text-emerald-300 border border-emerald-500/30":"bg-red-500/20 text-red-300 border border-red-500/30"}`,children:[H.gemini.status==="verified"?c.jsx(kt,{className:"text-[9px]"}):c.jsx(es,{className:"text-[9px]"}),H.gemini.message]}):c.jsx("span",{className:`text-[10px] px-2 py-0.5 rounded-full font-mono ${((Ue=(Pe=ie==null?void 0:ie.providers)==null?void 0:Pe.gemini)==null?void 0:Ue.is_configured)??((U=ie==null?void 0:ie.gemini)==null?void 0:U.is_configured)?"bg-emerald-500/10 text-emerald-400 border border-emerald-500/20":"bg-slate-800 text-slate-500"}`,children:((J=(de=ie==null?void 0:ie.providers)==null?void 0:de.gemini)==null?void 0:J.is_configured)??((pe=ie==null?void 0:ie.gemini)==null?void 0:pe.is_configured)?`Configurada (${((te=(ve=ie==null?void 0:ie.providers)==null?void 0:ve.gemini)==null?void 0:te.masked_key)||((we=ie==null?void 0:ie.gemini)==null?void 0:we.masked_key)||"Activa"})`:"No configurada"})})]}),c.jsxs("div",{className:"flex gap-2",children:[c.jsx("input",{type:"password",placeholder:"AIzaSy... (Deja en blanco para conservar actual)",value:Ge,onChange:N=>vt(N.target.value),className:"flex-1 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-lime font-mono"}),c.jsxs("button",{type:"button",disabled:A==="gemini"||!(((ht=(Ee=ie==null?void 0:ie.providers)==null?void 0:Ee.gemini)==null?void 0:ht.is_configured)??((it=ie==null?void 0:ie.gemini)==null?void 0:it.is_configured))&&!Ge.trim(),onClick:()=>K("gemini",Ge),className:"px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-40 text-white text-[11px] font-semibold transition-all flex items-center gap-1.5 cursor-pointer",children:[A==="gemini"?c.jsx(Jr,{className:"animate-spin text-xs"}):c.jsx(xa,{className:"text-brand-lime text-xs"}),c.jsx("span",{children:A==="gemini"?"Probando...":"Probar"})]})]})]}),c.jsxs("div",{className:"p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2",children:[c.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx(xa,{className:"text-sm text-brand-lime"}),c.jsx("label",{className:"text-xs font-bold uppercase text-slate-300",children:"Groq API Key"})]}),c.jsx("div",{className:"flex items-center gap-2",children:H.groq?c.jsxs("span",{className:`text-[10px] px-2 py-0.5 rounded-full font-medium flex items-center gap-1 ${H.groq.status==="verified"?"bg-emerald-500/20 text-emerald-300 border border-emerald-500/30":"bg-red-500/20 text-red-300 border border-red-500/30"}`,children:[H.groq.status==="verified"?c.jsx(kt,{className:"text-[9px]"}):c.jsx(es,{className:"text-[9px]"}),H.groq.message]}):c.jsx("span",{className:`text-[10px] px-2 py-0.5 rounded-full font-mono ${((xn=(mn=ie==null?void 0:ie.providers)==null?void 0:mn.groq)==null?void 0:xn.is_configured)??((xo=ie==null?void 0:ie.groq)==null?void 0:xo.is_configured)?"bg-emerald-500/10 text-emerald-400 border border-emerald-500/20":"bg-slate-800 text-slate-500"}`,children:((ea=(go=ie==null?void 0:ie.providers)==null?void 0:go.groq)==null?void 0:ea.is_configured)??((qr=ie==null?void 0:ie.groq)==null?void 0:qr.is_configured)?`Configurada (${((ta=(vo=ie==null?void 0:ie.providers)==null?void 0:vo.groq)==null?void 0:ta.masked_key)||((na=ie==null?void 0:ie.groq)==null?void 0:na.masked_key)||"Activa"})`:"No configurada"})})]}),c.jsxs("div",{className:"flex gap-2",children:[c.jsx("input",{type:"password",placeholder:"gsk_... (Deja en blanco para conservar actual)",value:xt,onChange:N=>Tt(N.target.value),className:"flex-1 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-lime font-mono"}),c.jsxs("button",{type:"button",disabled:A==="groq"||!(((Yr=(Zn=ie==null?void 0:ie.providers)==null?void 0:Zn.groq)==null?void 0:Yr.is_configured)??((ia=ie==null?void 0:ie.groq)==null?void 0:ia.is_configured))&&!xt.trim(),onClick:()=>K("groq",xt),className:"px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-40 text-white text-[11px] font-semibold transition-all flex items-center gap-1.5 cursor-pointer",children:[A==="groq"?c.jsx(Jr,{className:"animate-spin text-xs"}):c.jsx(xa,{className:"text-brand-lime text-xs"}),c.jsx("span",{children:A==="groq"?"Probando...":"Probar"})]})]})]}),c.jsxs("div",{className:"p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2",children:[c.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsx(Ai,{className:"text-sm text-brand-blue"}),c.jsx("label",{className:"text-xs font-bold uppercase text-slate-300",children:"OpenAI API Key"})]}),c.jsx("div",{className:"flex items-center gap-2",children:H.openai?c.jsxs("span",{className:`text-[10px] px-2 py-0.5 rounded-full font-medium flex items-center gap-1 ${H.openai.status==="verified"?"bg-emerald-500/20 text-emerald-300 border border-emerald-500/30":"bg-red-500/20 text-red-300 border border-red-500/30"}`,children:[H.openai.status==="verified"?c.jsx(kt,{className:"text-[9px]"}):c.jsx(es,{className:"text-[9px]"}),H.openai.message]}):c.jsx("span",{className:`text-[10px] px-2 py-0.5 rounded-full font-mono ${((_r=(ra=ie==null?void 0:ie.providers)==null?void 0:ra.openai)==null?void 0:_r.is_configured)??((sa=ie==null?void 0:ie.openai)==null?void 0:sa.is_configured)?"bg-emerald-500/10 text-emerald-400 border border-emerald-500/20":"bg-slate-800 text-slate-500"}`,children:((aa=(yr=ie==null?void 0:ie.providers)==null?void 0:yr.openai)==null?void 0:aa.is_configured)??((oa=ie==null?void 0:ie.openai)==null?void 0:oa.is_configured)?`Configurada (${((yo=(_o=ie==null?void 0:ie.providers)==null?void 0:_o.openai)==null?void 0:yo.masked_key)||((So=ie==null?void 0:ie.openai)==null?void 0:So.masked_key)||"Activa"})`:"No configurada"})})]}),c.jsxs("div",{className:"flex gap-2",children:[c.jsx("input",{type:"password",placeholder:"sk-proj-... (Deja en blanco para conservar actual)",value:Mt,onChange:N=>dt(N.target.value),className:"flex-1 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-lime font-mono"}),c.jsxs("button",{type:"button",disabled:A==="openai"||!(((E=(Mo=ie==null?void 0:ie.providers)==null?void 0:Mo.openai)==null?void 0:E.is_configured)??((z=ie==null?void 0:ie.openai)==null?void 0:z.is_configured))&&!Mt.trim(),onClick:()=>K("openai",Mt),className:"px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-40 text-white text-[11px] font-semibold transition-all flex items-center gap-1.5 cursor-pointer",children:[A==="openai"?c.jsx(Jr,{className:"animate-spin text-xs"}):c.jsx(xa,{className:"text-brand-lime text-xs"}),c.jsx("span",{children:A==="openai"?"Probando...":"Probar"})]})]})]})]}),c.jsx("div",{className:"flex items-center justify-end pt-4 border-t border-white/10",children:c.jsx("button",{type:"submit",disabled:Vt,className:"px-6 py-3 rounded-xl bg-brand-lime hover:bg-[#b0f55c] disabled:opacity-50 text-brand-dark font-bold text-xs uppercase tracking-wider shadow-lg shadow-brand-lime/20 transition-all hover:scale-105 cursor-pointer",children:Vt?"Guardando ajustes...":"Guardar Configuración"})})]})]})]}),F&&S&&c.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn",children:c.jsxs("div",{className:"bg-[#100c2a] border border-white/20 rounded-3xl max-w-md w-full p-6 text-white shadow-2xl space-y-4",children:[c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx("div",{className:"p-2.5 bg-rose-500/20 text-rose-400 border border-rose-500/30 rounded-xl",children:c.jsx(es,{className:"text-xl"})}),c.jsxs("div",{children:[c.jsx("h4",{className:"text-base font-bold",children:"¿Finalizar Atención Personalizada?"}),c.jsxs("p",{className:"text-xs text-slate-400",children:["Sesión: ",S.session_id]})]})]}),c.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["¿Estás seguro de dar por concluida la asesoría con ",c.jsx("strong",{className:"text-white",children:S.full_name}),"? Se notificará al aspirante y se le solicitará calificar el servicio del 1 al 5."]}),q&&c.jsx("div",{className:"p-3 bg-rose-500/20 border border-rose-500/40 rounded-xl text-xs text-rose-300",children:q}),c.jsxs("div",{className:"flex items-center justify-end gap-3 pt-2",children:[c.jsx("button",{type:"button",onClick:()=>I(!1),className:"px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-xl transition-colors",children:"Cancelar"}),c.jsx("button",{type:"button",onClick:xe,disabled:$,className:"px-5 py-2 text-xs font-bold text-white bg-rose-600 hover:bg-rose-700 rounded-xl shadow-md transition-all disabled:opacity-50",children:$?"Finalizando...":"Sí, Finalizar"})]})]})})]}):c.jsx("div",{className:"min-h-screen bg-[#070515] flex flex-col items-center justify-center p-5 font-sans relative selection:bg-brand-lime selection:text-brand-dark",children:c.jsxs("div",{className:"max-w-md w-full p-8 rounded-3xl bg-[#100c2a] border border-white/10 shadow-2xl space-y-6 relative z-10",children:[c.jsxs("div",{className:"text-center space-y-2",children:[c.jsx("div",{className:"w-12 h-12 rounded-2xl bg-brand-lime text-brand-dark flex items-center justify-center font-bold mx-auto text-xl shadow-lg shadow-brand-lime/20",children:c.jsx(Wp,{})}),c.jsx("h2",{className:"font-display text-2xl uppercase tracking-wider text-white",children:"Staff Management Portal"}),c.jsx("p",{className:"text-xs text-slate-400",children:"Acceso seguro para Asesores Académicos y Administradores"})]}),h&&c.jsxs("div",{className:"p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2",children:[c.jsx(es,{}),c.jsx("span",{children:h})]}),c.jsxs("form",{onSubmit:oe,className:"space-y-4",children:[c.jsxs("div",{children:[c.jsx("label",{className:"text-xs font-bold uppercase text-slate-400 block mb-1.5",children:"Usuario Administrador"}),c.jsxs("div",{className:"relative",children:[c.jsx(R1,{className:"absolute left-3.5 top-3.5 text-slate-500 text-xs"}),c.jsx("input",{type:"text",required:!0,placeholder:"admin",value:a,onChange:N=>o(N.target.value),className:"w-full pl-9 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-brand-lime font-mono"})]})]}),c.jsxs("div",{children:[c.jsx("label",{className:"text-xs font-bold uppercase text-slate-400 block mb-1.5",children:"Contraseña"}),c.jsxs("div",{className:"relative",children:[c.jsx(I1,{className:"absolute left-3.5 top-3.5 text-slate-500 text-xs"}),c.jsx("input",{type:"password",required:!0,placeholder:"••••••••",value:l,onChange:N=>u(N.target.value),className:"w-full pl-9 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-brand-lime"})]})]}),c.jsx("button",{type:"submit",disabled:d,className:"w-full py-3 rounded-xl bg-brand-lime hover:bg-[#b0f55c] disabled:opacity-50 text-brand-dark font-bold text-xs uppercase tracking-wider shadow-lg shadow-brand-lime/20 transition-all hover:scale-[1.02] cursor-pointer mt-2",children:d?"Verificando credenciales...":"Iniciar Sesión"})]}),c.jsx("div",{className:"pt-4 border-t border-white/10 text-center",children:c.jsx("button",{onClick:t,className:"text-xs text-slate-400 hover:text-white transition-colors",children:"← Volver a la Landing Page"})})]})})}function rw(){const[t,e]=ue.useState(()=>{const i=window.location.hash.toLowerCase();return i==="#chat"||i==="#assistant"?"assistant":i==="#admin"?"admin":"landing"});ue.useEffect(()=>{const i=()=>{const r=window.location.hash.toLowerCase();r==="#chat"||r==="#assistant"?e("assistant"):r==="#admin"?e("admin"):(r==="#landing"||r===""||r==="#")&&e("landing")};return window.addEventListener("hashchange",i),()=>window.removeEventListener("hashchange",i)},[]);const n=i=>{e(i),i==="assistant"?window.location.hash="chat":i==="admin"?window.location.hash="admin":(window.location.hash="landing",window.scrollTo({top:0,behavior:"smooth"}))};return c.jsxs("div",{className:"min-h-screen bg-[#070515] text-slate-100 font-sans selection:bg-brand-lime selection:text-brand-dark",children:[t==="landing"&&c.jsx(Ab,{onNavigateToChat:()=>n("assistant"),onNavigateToAdmin:()=>n("admin")}),t==="assistant"&&c.jsx(nw,{onNavigateToLanding:()=>n("landing"),onNavigateToAdmin:()=>n("admin")}),t==="admin"&&c.jsx(iw,{onNavigateToLanding:()=>n("landing"),onNavigateToChat:()=>n("assistant")})]})}Du.createRoot(document.getElementById("root")).render(c.jsx(rr.StrictMode,{children:c.jsx(rw,{})}));
