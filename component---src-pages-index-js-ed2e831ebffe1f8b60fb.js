/*! For license information please see component---src-pages-index-js-ed2e831ebffe1f8b60fb.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"+NU8":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(e,t){return"undefined"!=typeof getComputedStyle?getComputedStyle(e,null).getPropertyValue(t):e.style[t]},r=function(e){return a(e,"overflow")+a(e,"overflow-y")+a(e,"overflow-x")};t.default=function(e){if(!(e instanceof HTMLElement))return window;for(var t=e;t&&t!==document.body&&t!==document.documentElement&&t.parentNode;){if(/(scroll|auto)/.test(r(t)))return t;t=t.parentNode}return window}},"/SQS":function(e,t,n){e.exports={contact:"contact-module--contact--2ujU0",title:"contact-module--title--2LZOi",body:"contact-module--body--29iNj",email:"contact-module--email--2bpoS",socialDiv:"contact-module--socialDiv--38hjK",footer:"contact-module--footer--1KTbd"}},"0uqK":function(e,t,n){var a=n("m/aQ"),r=n("ckLD"),i=n("FUra");e.exports=function(e,t){if(a(e),r(t)&&t.constructor===e)return t;var n=i.f(e);return(0,n.resolve)(t),n.promise}},"67Pw":function(e,t,n){var a=n("m/aQ"),r=n("wTlq"),i=n("QD2z")("species");e.exports=function(e,t){var n,o=a(e).constructor;return void 0===o||null==(n=a(o)[i])?t:r(n)}},"9/5/":function(e,t,n){(function(t){var n=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,i=/^0o[0-7]+$/i,o=parseInt,l="object"==typeof t&&t&&t.Object===Object&&t,c="object"==typeof self&&self&&self.Object===Object&&self,u=l||c||Function("return this")(),s=Object.prototype.toString,f=Math.max,d=Math.min,m=function(){return u.Date.now()};function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var l=r.test(e);return l||i.test(e)?o(e.slice(2),l?2:8):a.test(e)?NaN:+e}e.exports=function(e,t,n){var a,r,i,o,l,c,u=0,s=!1,h=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=a,i=r;return a=r=void 0,u=t,o=e.apply(i,n)}function b(e){return u=e,l=setTimeout(w,t),s?g(e):o}function E(e){var n=e-c;return void 0===c||n>=t||n<0||h&&e-u>=i}function w(){var e=m();if(E(e))return N(e);l=setTimeout(w,function(e){var n=t-(e-c);return h?d(n,i-(e-u)):n}(e))}function N(e){return l=void 0,y&&a?g(e):(a=r=void 0,o)}function L(){var e=m(),n=E(e);if(a=arguments,r=this,c=e,n){if(void 0===l)return b(c);if(h)return l=setTimeout(w,t),g(c)}return void 0===l&&(l=setTimeout(w,t)),o}return t=p(t)||0,v(n)&&(s=!!n.leading,i=(h="maxWait"in n)?f(p(n.maxWait)||0,t):i,y="trailing"in n?!!n.trailing:y),L.cancel=function(){void 0!==l&&clearTimeout(l),u=0,a=c=r=l=void 0},L.flush=function(){return void 0===l?o:N(m())},L}}).call(this,n("yLpj"))},EDuE:function(e,t,n){},FUra:function(e,t,n){"use strict";var a=n("wTlq"),r=function(e){var t,n;this.promise=new e((function(e,a){if(void 0!==t||void 0!==n)throw TypeError("Bad Promise constructor");t=e,n=a})),this.resolve=a(t),this.reject=a(n)};e.exports.f=function(e){return new r(e)}},HVci:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.getBoundingClientRect();return{top:t.top+window.pageYOffset,left:t.left+window.pageXOffset}}},JeI0:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n("q1tI"),i=m(r),o=m(n("17x9")),l=n("i8i4"),c=n("UxbX"),u=m(n("9/5/")),s=m(n("hKI/")),f=m(n("+NU8")),d=m(n("pxCl"));function m(e){return e&&e.__esModule?e:{default:e}}var v=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.lazyLoadHandler=n.lazyLoadHandler.bind(n),e.throttle>0&&(e.debounce?n.lazyLoadHandler=(0,u.default)(n.lazyLoadHandler,e.throttle):n.lazyLoadHandler=(0,s.default)(n.lazyLoadHandler,e.throttle)),n.state={visible:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){this._mounted=!0;var e=this.getEventNode();this.lazyLoadHandler(),this.lazyLoadHandler.flush&&this.lazyLoadHandler.flush(),(0,c.add)(window,"resize",this.lazyLoadHandler),(0,c.add)(e,"scroll",this.lazyLoadHandler),e!==window&&(0,c.add)(window,"scroll",this.lazyLoadHandler)}},{key:"componentWillReceiveProps",value:function(){this.state.visible||this.lazyLoadHandler()}},{key:"shouldComponentUpdate",value:function(e,t){return t.visible}},{key:"componentWillUnmount",value:function(){this._mounted=!1,this.lazyLoadHandler.cancel&&this.lazyLoadHandler.cancel(),this.detachListeners()}},{key:"getEventNode",value:function(){return(0,f.default)((0,l.findDOMNode)(this))}},{key:"getOffset",value:function(){var e=this.props,t=e.offset,n=e.offsetVertical,a=e.offsetHorizontal,r=e.offsetTop,i=e.offsetBottom,o=e.offsetLeft,l=e.offsetRight,c=e.threshold||t,u=n||c,s=a||c;return{top:r||u,bottom:i||u,left:o||s,right:l||s}}},{key:"lazyLoadHandler",value:function(){if(this._mounted){var e=this.getOffset(),t=(0,l.findDOMNode)(this),n=this.getEventNode();if((0,d.default)(t,n,e)){var a=this.props.onContentVisible;this.setState({visible:!0},(function(){a&&a()})),this.detachListeners()}}}},{key:"detachListeners",value:function(){var e=this.getEventNode();(0,c.remove)(window,"resize",this.lazyLoadHandler),(0,c.remove)(e,"scroll",this.lazyLoadHandler),e!==window&&(0,c.remove)(window,"scroll",this.lazyLoadHandler)}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,a=e.height,o=e.width,l=this.state.visible,c={height:a,width:o},u="LazyLoad"+(l?" is-visible":"")+(n?" "+n:"");return i.default.createElement(this.props.elementType,{className:u,style:c},l&&r.Children.only(t))}}]),t}(r.Component);t.default=v,v.propTypes={children:o.default.node.isRequired,className:o.default.string,debounce:o.default.bool,elementType:o.default.string,height:o.default.oneOfType([o.default.string,o.default.number]),offset:o.default.number,offsetBottom:o.default.number,offsetHorizontal:o.default.number,offsetLeft:o.default.number,offsetRight:o.default.number,offsetTop:o.default.number,offsetVertical:o.default.number,threshold:o.default.number,throttle:o.default.number,width:o.default.oneOfType([o.default.string,o.default.number]),onContentVisible:o.default.func},v.defaultProps={elementType:"div",debounce:!0,offset:0,offsetBottom:0,offsetHorizontal:0,offsetLeft:0,offsetRight:0,offsetTop:0,offsetVertical:0,throttle:250}},OaLt:function(e,t,n){var a=n("JhOX");e.exports=!!Object.getOwnPropertySymbols&&!a((function(){return!String(Symbol())}))},QD2z:function(e,t,n){var a=n("REpN"),r=n("8deY"),i=n("34EK"),o=n("F8ZZ"),l=n("OaLt"),c=n("TuXZ"),u=r("wks"),s=a.Symbol,f=c?s:s&&s.withoutSetter||o;e.exports=function(e){return i(u,e)||(l&&i(s,e)?u[e]=s[e]:u[e]=f("Symbol."+e)),u[e]}},RXBc:function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return Y}));var a=n("q1tI"),r=n.n(a),i=n("8k0H"),o=n("jBH6"),l=n("AcpX"),c=n("vOnD"),u=n("WveJ");function s(){var e=Object(l.a)(["\n    font-size: ",";\n  "]);return s=function(){return e},e}function f(){var e=Object(l.a)(["\n    font-size: ",";\n  "]);return f=function(){return e},e}function d(){var e=Object(l.a)(["\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n\n  font-weight: ",";\n  font-size: ",";\n  line-height: 1.2;\n\n  ",";\n  ",";\n"]);return d=function(){return e},e}var m,v,p=c.c.span(d(),(function(e){var t=e.size;return function(){switch(t){case"large":return"400";default:return"500"}}}),(function(e){var t=e.size;return function(){switch(t){case"large":return"5.35em";default:return"3rem"}}}),u.a.TABLET(f(),(function(e){var t=e.size;return function(){switch(t){case"large":return"4em";default:return"4rem"}}})),u.a.PHONE(s(),(function(e){var t=e.size;return function(){switch(t){case"large":default:return"3em"}}}))),h=function(e){var t=e.children,n=e.as,a=void 0===n?"span":n,i=e.size;return r.a.createElement(p,{as:a,size:i},t)},y=n("Wbzz"),g=n("hHZz"),b=n.n(g),E=n("yfZV"),w=function(){return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",role:"img",viewBox:"0 0 194.818 194.818",height:"28px",width:"28px",fill:"rgb(169, 170, 171)"},r.a.createElement("title",null,"Website"),r.a.createElement("g",null,r.a.createElement("path",{d:"M185.818,2.161h-57.04c-4.971,0-9,4.029-9,9s4.029,9,9,9h35.312l-86.3,86.3c-3.515,3.515-3.515,9.213,0,12.728 c1.758,1.757,4.061,2.636,6.364,2.636s4.606-0.879,6.364-2.636l86.3-86.3v35.313c0,4.971,4.029,9,9,9s9-4.029,9-9v-57.04 C194.818,6.19,190.789,2.161,185.818,2.161z"}),r.a.createElement("path",{d:"M149,77.201c-4.971,0-9,4.029-9,9v88.456H18v-122h93.778c4.971,0,9-4.029,9-9s-4.029-9-9-9H9c-4.971,0-9,4.029-9,9v140 c0,4.971,4.029,9,9,9h140c4.971,0,9-4.029,9-9V86.201C158,81.23,153.971,77.201,149,77.201z"})))},N=(n("eiRb"),"paused"),L="loading",T="playing",O="paused",j="loading",k="playing",S="overlay",z="video",P="container",C="manual",x={position:"absolute",width:"100%",height:"100%",top:0,bottom:0,left:0,right:0},H=((m={})[S]={position:"relative"},m[z]=x,m[P]=x,m[C]=null,m),A=((v={})[S]=x,v[z]={display:"block",width:"100%"},v[P]=x,v[C]=null,v);function R(e){return e.paused||e.ended?N:e.readyState<3?L:T}function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function I(e){var t=e.videoSrc,n=e.videoCaptions,a=void 0===n?null:n,i=e.focused,o=void 0!==i&&i,l=e.disableDefaultEventHandling,c=void 0!==l&&l,u=e.hoverTargetRef,s=void 0===u?null:u,f=e.pausedOverlay,d=void 0===f?null:f,m=e.loadingOverlay,v=void 0===m?null:m,p=e.loadingStateTimeout,h=void 0===p?200:p,y=e.overlayTransitionDuration,g=void 0===y?400:y,b=e.restartOnPaused,E=void 0!==b&&b,w=e.unloadVideoOnPaused,L=void 0!==w&&w,S=e.muted,P=void 0===S||S,C=e.loop,I=void 0===C||C,W=e.preload,M=void 0===W?null:W,D=e.crossOrigin,B=void 0===D?"anonymous":D,V=e.className,J=void 0===V?"":V,U=e.style,q=void 0===U?null:U,X=e.pausedOverlayWrapperClassName,Z=void 0===X?"":X,F=e.pausedOverlayWrapperStyle,K=void 0===F?null:F,Q=e.loadingOverlayWrapperClassName,$=void 0===Q?"":Q,G=e.loadingOverlayWrapperStyle,Y=void 0===G?null:G,ee=e.videoClassName,te=void 0===ee?"":ee,ne=e.videoStyle,ae=void 0===ne?null:ne,re=e.sizingMode,ie=void 0===re?z:re,oe=r.a.useState(O),le=oe[0],ce=oe[1],ue=r.a.useState(L),se=ue[0],fe=ue[1],de=r.a.useRef(se),me=r.a.useRef(!1),ve=r.a.useRef(null);null===ve.current&&(ve.current={isPlayAttemptInProgress:!1,isPlayAttemptCancelled:!1,isPlayerUnmounted:!1,pauseTimeout:null,loadingStateTimeout:null,videoTimeToRestore:0});var pe=r.a.useRef(null),he=r.a.useRef(null),ye=r.a.useCallback((function(){var e=he.current;e.pause(),E&&(e.currentTime=0),ve.current.videoTimeToRestore=e.currentTime,L&&fe(!0)}),[E,L]),ge=r.a.useCallback((function(){clearTimeout(ve.current.pauseTimeout),clearTimeout(ve.current.loadingStateTimeout);var e=he.current;if(ve.current.isPlayAttemptCancelled=!1,R(e)!==T){if(v&&(ve.current.loadingStateTimeout=setTimeout((function(){ce(j)}),h)),!ve.current.isPlayAttemptInProgress){ve.current.isPlayAttemptInProgress=!0,e.currentTime=ve.current.videoTimeToRestore;var t=e.play();t&&t.then||(t=new Promise((function(t,n){var a,r=function n(){e.removeEventListener("playing",n),e.removeEventListener("error",a),t()};e.addEventListener("playing",r),a=function(t){e.removeEventListener("error",a),e.removeEventListener("playing",r),n(t.error)},e.addEventListener("error",a)}))),t.then((function(){ve.current.isPlayerUnmounted||(ve.current.isPlayAttemptCancelled?ye():ce(k))})).catch((function(t){console.error("HoverVideoPlayer playback failed for src "+e.currentSrc+":",t),ve.current.isPlayerUnmounted||ye()})).finally((function(){ve.current.isPlayAttemptInProgress=!1,ve.current.isPlayAttemptCancelled=!1,clearTimeout(ve.current.loadingStateTimeout)}))}}else ce(k)}),[v,h,ye]),be=r.a.useCallback((function(){se?fe(!1):ge()}),[se,ge]),Ee=r.a.useCallback((function(){clearTimeout(ve.current.pauseTimeout),clearTimeout(ve.current.loadingStateTimeout);var e=he.current;o||R(e)===N||(ce(O),ve.current.isPlayAttemptInProgress?ve.current.isPlayAttemptCancelled=!0:d?ve.current.pauseTimeout=setTimeout((function(){return ye()}),g):ye())}),[o,g,ye,d]);return r.a.useEffect((function(){me.current!==o&&(o?be():Ee(),me.current=o)}),[o,Ee,be]),r.a.useEffect((function(){if(!c){var e=s?s.current:pe.current;return e.addEventListener("mouseenter",be),e.addEventListener("mouseleave",Ee),e.addEventListener("focus",be),e.addEventListener("blur",Ee),e.addEventListener("touchstart",be),window.addEventListener("touchstart",t),function(){e.removeEventListener("mouseenter",be),e.removeEventListener("mouseleave",Ee),e.removeEventListener("focus",be),e.removeEventListener("blur",Ee),e.removeEventListener("touchstart",be),window.removeEventListener("touchstart",t)}}function t(t){e.contains(t.target)||Ee()}}),[c,s,Ee,be]),r.a.useEffect((function(){he.current.muted=P}),[P]),r.a.useEffect((function(){de.current!==se&&(he.current.load(),se||ge(),de.current=se)}),[se,be,ge]),r.a.useEffect((function(){var e=he.current;return e.disableRemotePlayback=!0,e.disablePictureInPicture=!0,function(){clearTimeout(ve.current.pauseTimeout),clearTimeout(ve.current.loadingStateTimeout),ve.current.isPlayerUnmounted=!0}}),[]),r.a.createElement("div",{"data-testid":"hover-video-player-container",ref:pe,className:J,style:_({position:"relative"},q)},d&&r.a.createElement("div",{style:_({},H[ie],{zIndex:1,opacity:le!==k?1:0,transition:"opacity "+g+"ms"},K),className:Z,"data-testid":"paused-overlay-wrapper"},d),v&&r.a.createElement("div",{style:_({},x,{zIndex:2,opacity:le===j?1:0,transition:"opacity "+g+"ms"},Y),className:$,"data-testid":"loading-overlay-wrapper"},v),r.a.createElement("video",{loop:I,playsInline:!0,preload:M,crossOrigin:B,ref:he,style:_({},A[ie],{objectFit:"cover"},ae),className:te,"data-testid":"video-element"},!se&&function(e){var t=[];if(null==e)console.error("Error: 'videoSrc' prop is required for HoverVideoPlayer component");else for(var n=Array.isArray(e)?e:[e],a=0,r=n.length;a<r;a+=1){var i=n[a];"string"==typeof i?t.push({src:i}):i&&i.src?t.push({src:i.src,type:i.type}):console.error("Error: invalid value provided to HoverVideoPlayer prop 'videoSrc':",i)}return t}(t).map((function(e){var t=e.src,n=e.type;return r.a.createElement("source",{key:t,src:t,type:n})})),function(e){var t=[];if(null!=e)for(var n=Array.isArray(e)?e:[e],a=0,r=n.length;a<r;a+=1){var i=n[a];i&&i.src?t.push({src:i.src,srcLang:i.srcLang,label:i.label,default:Boolean(i.default)}):console.error("Error: invalid value provided to HoverVideoPlayer prop 'videoCaptions'",i)}return t}(a).map((function(e){var t=e.src,n=e.srcLang,a=e.label,i=e.default;return r.a.createElement("track",{key:t,kind:"captions",src:t,srcLang:n,label:a,default:i})}))))}var W=n("JeI0"),M=n.n(W),D=function(e){var t=e.name,n=e.image,i=e.info,o=e.answer,l=e.website,c=e.github,u=e.video,s=Object(a.useRef)();return r.a.createElement("div",{className:b.a.root,ref:s},r.a.createElement("div",{className:b.a.ProjectCardContent},r.a.createElement("h1",null,t),r.a.createElement("div",{className:"css-1206gns eirj6vi4"},r.a.createElement("div",null,r.a.createElement("p",{className:b.a.description},i),r.a.createElement("p",{className:b.a.tech},o))),r.a.createElement("div",{style:{marginTop:"3rem",marginBottom:"3rem"}},l&&r.a.createElement("a",{href:"https://"+l,target:"_blank",rel:"noreferrer",className:b.a.social,title:"Go to "+l},r.a.createElement(w,null)),c&&r.a.createElement("a",{href:"https://"+c,target:"_blank",rel:"noreferrer",className:b.a.social,title:"go to "+c},r.a.createElement(E.a,null))),r.a.createElement(y.a,{to:l?"https://"+l:"https://"+c},r.a.createElement("div",{className:b.a.ProjectCardAction},u?r.a.createElement(r.a.Fragment,null,"Demo ",r.a.createElement("span",null,"→")):null))),r.a.createElement(M.a,null,r.a.createElement("div",{className:b.a.imageContainer},u?r.a.createElement(I,{style:{position:"initial"},key:u,videoSrc:u,pausedOverlay:r.a.createElement("img",{src:n,height:"100%",width:"100%",style:{borderRadius:"5px"},alt:""+t}),loadingOverlay:r.a.createElement("div",{className:"loading-spinner-overlay"}),hoverTargetRef:s}):r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:n,height:"100%",width:"100%",alt:""+t,style:{borderRadius:"5px"}}),r.a.createElement("div",{className:b.a.details})),r.a.createElement("a",{href:l?"https://"+l:"https://"+c,title:""+t,className:b.a.detailLink},r.a.createElement("div",{className:b.a.detailDiv},r.a.createElement("button",null,l?"Website":"Github"))))))};function B(){var e=Object(l.a)(["\n    display: block;\n    padding: 0 2rem;\n  "]);return B=function(){return e},e}function V(){var e=Object(l.a)(["\n  display: grid;\n  grid-template-columns: repeat(4fr, 7fr);\n  grid-gap: 6rem;\n  padding: 0 4rem;\n  margin: 2rem 0;\n\n  ",";\n"]);return V=function(){return e},e}var J=c.c.div(V(),u.a.TABLET(B())),U=[{id:192,name:"React"},{id:202,name:"React Native"},{id:193,name:"Node"},{id:195,name:"Data Viz"},{id:196,name:"UI/UX"}],q=function(e){var t=e.items,n=Object(a.useState)("React"),i=n[0],o=n[1];return Object(a.useEffect)((function(){}),[i]),r.a.createElement("section",{id:"work"},r.a.createElement("div",{className:"headTitle"},r.a.createElement("h1",{style:{margin:"2rem"}},r.a.createElement("span",{className:"subNumber"},"02."),"Work"),r.a.createElement("h1",{className:"headLine subLine"})),r.a.createElement("div",{style:{textAlign:"center",marginTop:"5rem",marginBottom:"5rem"}}),r.a.createElement("div",{style:{textAlign:"center",marginTop:"5rem",marginBottom:"5rem"}},U.map((function(e){var t=e.id,n=e.name;return r.a.createElement("p",{key:t,className:"list"},r.a.createElement("button",{className:i==n?"cardButtonActive":"cardButton",onClick:function(){return o(n)}},n))}))),r.a.createElement(J,null,t.filter((function(e){return e.tech.includes(i)})).map((function(e,t){return r.a.createElement(D,Object.assign({},e,{key:t}))}))))},X=n("/SQS"),Z=n.n(X),F=n("esZA"),K=n("8vGk"),Q=function(){return r.a.createElement("section",{id:"contact",className:Z.a.contact},r.a.createElement("h1",{className:Z.a.title},r.a.createElement("span",{className:"subNumber"},"03."),"Contact"),r.a.createElement("div",null,r.a.createElement("p",{className:Z.a.body},"I am currently looking for new opportunities, and please feel free to contact me. Whether you have a question or just want to say hi, I will get back to you as soon as possible!")),r.a.createElement("div",{className:"emailContainer",style:{textAlign:"center",marginLeft:"auto",marginRight:"auto"}},r.a.createElement("a",{href:"mailto:caijiazi777@gmail.com",target:"_blank",rel:"nofollow noopener noreferrer",title:"email",className:Z.a.email},r.a.createElement("span",null,"Say Hello"))),r.a.createElement("div",{style:{height:"30vh"}}),r.a.createElement("ul",{className:Z.a.socialDiv},r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/JiaziCai",title:"github",target:"_blank",rel:"noreferrer"},r.a.createElement(E.a,null))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/caijiazi/",target:"_blank",rel:"noreferrer",title:"linkedin"},r.a.createElement(F.a,null))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://res.cloudinary.com/firebeat/image/upload/v1606193952/Jiazi_Cai_Resume.pdf",target:"_blank",rel:"noreferrer",title:"resume"},r.a.createElement(K.a,null)))),r.a.createElement("div",{className:Z.a.footer},r.a.createElement("a",{href:"https://github.com/JiaziCai/website-v2",title:"go to Jiazi Cai Website Github"},"Website by Jiazi Cai")))},$=["JavaScript (ES6+)","HTML & CSS","React","React Native","TypeScript","GraphQL","Git"],G=function(){return r.a.createElement("section",{id:"about"},r.a.createElement("div",{className:"headTitle"},r.a.createElement("h1",{style:{margin:"2rem"}},r.a.createElement("span",{className:"subNumber"},"01."),"About"),r.a.createElement("h1",{className:"headLine subLine"})),r.a.createElement("div",{className:"profileDiv"},r.a.createElement("div",{className:"textArea"},r.a.createElement("p",null,"Hello! I'm Jiazi Cai, a software engineer based in Los Angeles, CA."),r.a.createElement("p",null,"I like creating meaningful applications, whether that be websites, mobile apps, or anything in between. My goal is to build functional, interactive, and accessible products that provide pixel-perfect, performant experiences."),r.a.createElement("p",null,"I graduated from"," ",r.a.createElement("a",{href:"https://www.nyu.edu/",target:"_blank",rel:"noreferrer",className:"textLink",title:"New York University home page"},"New York University")," ","in May 2020, and have been working over 1 year for"," ",r.a.createElement("a",{href:"https://alive.xprss.org/",target:"_blank",rel:"noreferrer",className:"textLink",title:"Alive website"},"ALIVE")," ","as a Front End Engineer. I learn new skills and contribute to side projects daily."),r.a.createElement("p",null,"Here are a few technologies I've been working on recently:"),r.a.createElement("ul",{className:"techList"},$.map((function(e,t){return r.a.createElement("li",{key:""+t+e},r.a.createElement("span",null,"→"),e)})))),r.a.createElement("div",{className:"profileArea"},r.a.createElement(M.a,null,r.a.createElement("img",{src:"https://res.cloudinary.com/firebeat/image/upload/v1594094304/jiazicai_i4sliw.jpg",alt:"jiazi",className:"profileImg"})),r.a.createElement("div",{className:"profileImageContainer"}))))},Y=(n("EDuE"),t.default=function(e){var t=e.data;return r.a.createElement(i.a,null,r.a.createElement(o.a,null,r.a.createElement("div",{style:{height:"10vh"}}),r.a.createElement("div",{style:{fontWeight:"300",fontSize:"1.4em",marginBottom:"3rem"}},"Hello!",r.a.createElement("div",{className:"rotating",style:{width:"250px",textAlign:"center"}},r.a.createElement("span",{role:"img","aria-label":"emoji",style:{fontSize:"2.4em"}},"🤹🏻"))),r.a.createElement(h,{as:"h2",size:"large"},t.homeJson.content.childMarkdownRemark.rawMarkdownBody),r.a.createElement("div",{className:"introSub"},"I create things for the web."),r.a.createElement("div",{className:"introDetail"},"I'm a software engineer based in Los Angeles, CA specializing in building (and sometimes designing) amazing websites, mobile apps, and everything in between."),r.a.createElement("div",{className:"emailContainer"},r.a.createElement("a",{href:"mailto:caijiazi777@gmail.com",target:"_blank",rel:"nofollow noopener noreferrer",className:"email",title:"email to"},r.a.createElement("span",null,"Say Hello")))),r.a.createElement("div",{style:{height:"30vh"}}),r.a.createElement(G,null),r.a.createElement("div",{style:{height:"30vh"}}),r.a.createElement(q,{items:t.homeJson.gallery}),r.a.createElement("div",{style:{height:"20vh"}}),r.a.createElement(Q,null))},"4283730504")},TuXZ:function(e,t,n){var a=n("OaLt");e.exports=a&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},UxbX:function(e,t,n){var a,r;void 0===(r="function"==typeof(a=function(){function e(e,t){return function(n,a,r,i){n[e]?n[e](a,r,i):n[t]&&n[t]("on"+a,r)}}return{add:e("addEventListener","attachEvent"),remove:e("removeEventListener","detachEvent")}})?a.call(t,n,t,e):a)||(e.exports=r)},eSMk:function(e,t,n){var a=n("REpN");e.exports=a.Promise},eiRb:function(e,t,n){"use strict";var a=n("ZS3K"),r=n("lSYd"),i=n("eSMk"),o=n("JhOX"),l=n("jdR/"),c=n("67Pw"),u=n("0uqK"),s=n("+7hJ");a({target:"Promise",proto:!0,real:!0,forced:!!i&&o((function(){i.prototype.finally.call({then:function(){}},(function(){}))}))},{finally:function(e){var t=c(this,l("Promise")),n="function"==typeof e;return this.then(n?function(n){return u(t,e()).then((function(){return n}))}:e,n?function(n){return u(t,e()).then((function(){throw n}))}:e)}}),r||"function"!=typeof i||i.prototype.finally||s(i.prototype,"finally",l("Promise").prototype.finally)},hHZz:function(e,t,n){e.exports={root:"itemStyle-module--root--2yGec",ProjectCardAction:"itemStyle-module--ProjectCardAction--KxVAQ",imageContainer:"itemStyle-module--imageContainer--2igRq",details:"itemStyle-module--details--2dgQ0",ProjectCardContent:"itemStyle-module--ProjectCardContent--1aWYi",description:"itemStyle-module--description--1-vWC",tech:"itemStyle-module--tech--3Nr02",detailLink:"itemStyle-module--detailLink--3CbLe",social:"itemStyle-module--social--1f-f0",detailDiv:"itemStyle-module--detailDiv--nI4ks"}},"hKI/":function(e,t,n){(function(t){var n=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,i=/^0o[0-7]+$/i,o=parseInt,l="object"==typeof t&&t&&t.Object===Object&&t,c="object"==typeof self&&self&&self.Object===Object&&self,u=l||c||Function("return this")(),s=Object.prototype.toString,f=Math.max,d=Math.min,m=function(){return u.Date.now()};function v(e,t,n){var a,r,i,o,l,c,u=0,s=!1,v=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=a,i=r;return a=r=void 0,u=t,o=e.apply(i,n)}function b(e){return u=e,l=setTimeout(w,t),s?g(e):o}function E(e){var n=e-c;return void 0===c||n>=t||n<0||v&&e-u>=i}function w(){var e=m();if(E(e))return N(e);l=setTimeout(w,function(e){var n=t-(e-c);return v?d(n,i-(e-u)):n}(e))}function N(e){return l=void 0,y&&a?g(e):(a=r=void 0,o)}function L(){var e=m(),n=E(e);if(a=arguments,r=this,c=e,n){if(void 0===l)return b(c);if(v)return l=setTimeout(w,t),g(c)}return void 0===l&&(l=setTimeout(w,t)),o}return t=h(t)||0,p(n)&&(s=!!n.leading,i=(v="maxWait"in n)?f(h(n.maxWait)||0,t):i,y="trailing"in n?!!n.trailing:y),L.cancel=function(){void 0!==l&&clearTimeout(l),u=0,a=c=r=l=void 0},L.flush=function(){return void 0===l?o:N(m())},L}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function h(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var l=r.test(e);return l||i.test(e)?o(e.slice(2),l?2:8):a.test(e)?NaN:+e}e.exports=function(e,t,n){var a=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(a="leading"in n?!!n.leading:a,r="trailing"in n?!!n.trailing:r),v(e,t,{leading:a,maxWait:t,trailing:r})}}).call(this,n("yLpj"))},pxCl:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function e(t,n,a){if(function(e){return null===e.offsetParent}(t))return!1;var r=void 0,o=void 0,l=void 0,c=void 0;if(void 0===n||n===window)r=window.pageYOffset,l=window.pageXOffset,o=r+window.innerHeight,c=l+window.innerWidth;else{if(!e(n,window,a))return!1;var u=(0,i.default)(n);r=u.top,l=u.left,o=r+n.offsetHeight,c=l+n.offsetWidth}var s=(0,i.default)(t);return r<=s.top+t.offsetHeight+a.top&&o>=s.top-a.bottom&&l<=s.left+t.offsetWidth+a.left&&c>=s.left-a.right};var a,r=n("HVci"),i=(a=r)&&a.__esModule?a:{default:a}}}]);
//# sourceMappingURL=component---src-pages-index-js-ed2e831ebffe1f8b60fb.js.map