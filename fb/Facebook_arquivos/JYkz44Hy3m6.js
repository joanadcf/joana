if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }/*FB_PKG_DELIM*/

__d("CometVisualCompletionConstants",[],(function(a,b,c,d,e,f){"use strict";a="data-visualcompletion";b="HeroTracing";c="InteractionTracing";d="ignore";e="ignore-dynamic";var g="ignore-late-mutation",h="loading-state",i="media-vc-image",j="css-img";f.ATTRIBUTE_NAME=a;f.HERO_TRACING_HOLD=b;f.INTERACTION_TRACING_HOLD=c;f.IGNORE=d;f.IGNORE_DYNAMIC=e;f.IGNORE_LATE_MUTATION=g;f.LOADING_STATE=h;f.MEDIA_VC_IMAGE=i;f.CSS_IMG=j}),66);
__d("getOrCreateDOMID",["uniqueID"],(function(a,b,c,d,e,f,g){function a(a){a.id||(a.id=c("uniqueID")());return a.id}g["default"]=a}),98);
__d("joinClasses",[],(function(a,b,c,d,e,f){"use strict";function a(a){var b=a||"",c=arguments.length<=1?0:arguments.length-1;for(var d=0;d<c;d++){var e=d+1<1||arguments.length<=d+1?void 0:arguments[d+1];e!=null&&e!==""&&(b=(b?b+" ":"")+e)}return b}f["default"]=a}),66);
__d("isValidReactElement",[],(function(a,b,c,d,e,f){var g=typeof Symbol==="function"&&Symbol["for"]&&Symbol["for"]("react.element")||60103;function a(a){return!!(typeof a==="object"&&a!==null&&a.$$typeof===g)}f["default"]=a}),66);
__d("BootloadedReact",["Bootloader","isValidReactElement"],(function(a,b,c,d,e,f){var g=function(a){b("Bootloader").loadModules(["ReactDOM"],a,"BootloadedReact")};a={isValidElement:function(a){return b("isValidReactElement")(a)},render:function(a,b,c){g(function(d){d.render(a,b,function(){c&&c(this)})})},unmountComponentAtNode:function(a,b){g(function(c){c.unmountComponentAtNode(a),b&&b()})}};e.exports=a}),null);
__d("ContextualThing",["CSS","containsNode","ge","getOrCreateDOMID"],(function(a,b,c,d,e,f,g){function a(a,b){a.setAttribute("data-ownerid",c("getOrCreateDOMID")(b))}function b(a,b){b=b;while(b){if(c("containsNode")(a,b))return!0;b=h(b)}return!1}function h(a){a=a;var b;while(a){if(a.getAttribute&&(b=a.getAttribute("data-ownerid")))return c("ge")(b);a=a.parentNode}return null}function e(a,b){a=a;var e;while(a&&!d("CSS").hasClass(a,b))a.getAttribute&&(e=a.getAttribute("data-ownerid"))?a=c("ge")(e):a=a.parentNode;return a}g.register=a;g.containsIncludingLayers=b;g.getContext=h;g.parentByClass=e}),98);
__d("DOMDimensions",["Style","getDocumentScrollElement"],(function(a,b,c,d,e,f,g){"use strict";function a(a){var b=a?a.offsetHeight:0;a=a?a.offsetWidth:0;return{height:b,width:a}}function b(a){a=c("getDocumentScrollElement")(a);var b=a.scrollWidth||0;a=a.scrollHeight||0;return{width:b,height:a}}function d(a,b,d,e,f){var g;switch(b){case"left":case"right":case"top":case"bottom":g=[b];break;case"width":g=["left","right"];break;case"height":g=["top","bottom"];break;default:throw Error("Invalid plane: "+b)}b=function(b,d){var e=0;for(var f=0;f<g.length;f++)e+=parseFloat(c("Style").get(a,b+"-"+g[f]+d))||0;return e};return(d?b("padding",""):0)+(e?b("border","-width"):0)+(f?b("margin",""):0)}g.getElementDimensions=a;g.getDocumentDimensions=b;g.measureElementBox=d}),98);
__d("FocusEvent",["Event","Run","ge","getOrCreateDOMID"],(function(a,b,c,d,e,f,g){"use strict";var h={},i=!1;function j(a,b){if(h[a]){b=h[a].indexOf(b);b>=0&&h[a].splice(b,1);h[a].length===0&&delete h[a]}}function k(a){var b=a.getTarget();if(h[b.id]&&h[b.id].length>0){var c=a.type==="focusin"||a.type==="focus";h[b.id].forEach(function(a){a(c)})}}function l(){if(i)return;c("Event").listen(document.documentElement,"focusout",k);c("Event").listen(document.documentElement,"focusin",k);i=!0}function a(a,b){l();var e=c("getOrCreateDOMID")(a);h[e]||(h[e]=[]);h[e].push(b);var f=!1;function g(){f||(j(e,b),i&&(i.remove(),i=null),f=!0)}var i=d("Run").onLeave(function(){c("ge")(e)||g()});return{remove:function(){g()}}}g.listen=a}),98);
__d("KeyStatus",["Event","ExecutionEnvironment"],(function(a,b,c,d,e,f,g){var h=null,i=null;function j(){i||(i=c("Event").listen(window,"blur",function(){h=null,k()}))}function k(){i&&(i.remove(),i=null)}function a(a){h=c("Event").getKeyCode(a),j()}function b(){h=null,k()}if(d("ExecutionEnvironment").canUseDOM){d=document.documentElement;if(d)if(d.addEventListener)d.addEventListener("keydown",a,!0),d.addEventListener("keyup",b,!0);else if(d.attachEvent){d=d.attachEvent;d("onkeydown",a);d("onkeyup",b)}}function e(){return!!h}function f(){return h}g.isKeyDown=e;g.getKeyDownCode=f}),98);
__d("getElementText",["isElementNode","isTextNode"],(function(a,b,c,d,e,f,g){var h=null;function a(a){if(c("isTextNode")(a))return a.data;else if(c("isElementNode")(a)){if(h===null){var b=document.createElement("div");h=b.textContent!=null?"textContent":"innerText"}return a[h]}else return""}g["default"]=a}),98);
__d("isStringNullOrEmpty",[],(function(a,b,c,d,e,f){"use strict";function a(a){return a==null||a===""}f["default"]=a}),66);
__d("tooltipPropsFor",[],(function(a,b,c,d,e,f){"use strict";function a(a,b,c){if(!a)return{};a={"data-tooltip-content":a,"data-hover":"tooltip"};b&&(a["data-tooltip-position"]=b);c&&(a["data-tooltip-alignh"]=c);return a}f["default"]=a}),66);
__d("TooltipData",["DOM","DataStore","FBLogger","URI","getElementText","ifRequired","isStringNullOrEmpty","isTextNode","killswitch","tooltipPropsFor"],(function(a,b,c,d,e,f){var g;function h(a){var c=a.getAttribute("data-tooltip-delay");c=c?parseInt(c,10)||1e3:0;if(b("killswitch")("TOOLTIP_SEPARATE_DATASTORE_AND_ATTRIBUTE_CONTENT"))return babelHelpers["extends"]({className:a.getAttribute("data-tooltip-root-class"),content:a.getAttribute("data-tooltip-content"),delay:c,position:a.getAttribute("data-tooltip-position")||"above",alignH:a.getAttribute("data-tooltip-alignh")||"left",offsetY:a.getAttribute("data-tooltip-offsety")||0,suppress:!1,overflowDisplay:a.getAttribute("data-tooltip-display")==="overflow",persistOnClick:a.getAttribute("data-pitloot-persistonclick"),textDirection:a.getAttribute("data-tooltip-text-direction")},b("DataStore").get(a,"tooltip"));else{var d;d=(d=b("DataStore").get(a,"tooltip"))!=null?d:{};var e=d.content;d=babelHelpers.objectWithoutPropertiesLoose(d,["content"]);var f=a.getAttribute("data-tooltip-content");!b("isStringNullOrEmpty")(e)&&!b("isStringNullOrEmpty")(f)&&b("FBLogger")("tooltip").warn('Getting DataStore tooltip content on an element that has both a "data-tooltip-content" attribute value (set to %s) and a value coming from the DataStore',a.getAttribute("data-tooltip-content"));return babelHelpers["extends"]({className:a.getAttribute("data-tooltip-root-class"),delay:c,position:a.getAttribute("data-tooltip-position")||"above",alignH:a.getAttribute("data-tooltip-alignh")||"left",offsetY:a.getAttribute("data-tooltip-offsety")||0,suppress:!1,overflowDisplay:a.getAttribute("data-tooltip-display")==="overflow",persistOnClick:a.getAttribute("data-pitloot-persistonclick"),textDirection:a.getAttribute("data-tooltip-text-direction"),content:(a=(c=f)!=null?c:e)!=null?a:null},d)}}function i(a,c){var d=h(a);if(b("killswitch")("TOOLTIP_SEPARATE_DATASTORE_AND_ATTRIBUTE_CONTENT"))b("DataStore").set(a,"tooltip",{content:c.content||d.content,position:c.position||d.position,alignH:c.alignH||d.alignH,suppress:c.suppress!==void 0?c.suppress:d.suppress,overflowDisplay:c.overflowDisplay||d.overflowDisplay,persistOnClick:c.persistOnClick||d.persistOnClick});else{!b("isStringNullOrEmpty")(c.content)&&!b("isStringNullOrEmpty")(a.getAttribute("data-tooltip-content"))&&b("FBLogger")("tooltip").warn('Setting DataStore tooltip content on an element that already has the "data-tooltip-content" attribute (set to %s) is invalid',a.getAttribute("data-tooltip-content"));b("DataStore").set(a,"tooltip",{content:c.content||((a=b("DataStore").get(a,"tooltip"))!=null?a:{}).content,position:c.position||d.position,alignH:c.alignH||d.alignH,suppress:c.suppress!==void 0?c.suppress:d.suppress,overflowDisplay:c.overflowDisplay||d.overflowDisplay,persistOnClick:c.persistOnClick||d.persistOnClick})}}function j(a,b){i(a,b),a.setAttribute("data-hover","tooltip")}function k(a,b){}var l={remove:function(a,c){c=c===void 0?{}:c;c=c.onlyCleanupDataStore;c=c===void 0?!1:c;b("DataStore").remove(a,"tooltip");c||(a.removeAttribute("data-hover"),a.removeAttribute("data-tooltip-position"),a.removeAttribute("data-tooltip-alignh"),b("ifRequired")("Tooltip",function(b){b.isActive(a)&&b.hide()}))},set:function(a,c,d,e){k(a,c);if(c instanceof(g||(g=b("URI"))))a.setAttribute("data-tooltip-uri",c),b("ifRequired")("Tooltip",function(b){b.isActive(a)&&b.fetchIfNecessary(a)});else if(b("killswitch")("TOOLTIP_SEPARATE_DATASTORE_AND_ATTRIBUTE_CONTENT")){var f=l._store({context:a,content:c,position:d,alignH:e});typeof f.content!=="string"?a.setAttribute("data-tooltip-content",b("getElementText")(f.content)):a.setAttribute("data-tooltip-content",f.content);l.refreshIfActive(a)}else a.removeAttribute("data-tooltip-content"),l._store({context:a,content:c,position:d,alignH:e}),l.refreshIfActive(a)},refreshIfActive:function(a){b("ifRequired")("Tooltip",function(b){b.isActive(a)&&b.show(a)})},_store:function(a){var c=a.context,d=a.content,e=a.position;a=a.alignH;k(c,d);b("isTextNode")(d)&&(d=b("getElementText")(d));var f=!1;typeof d!=="string"?d=b("DOM").create("div",{},d):f=d==="";a={alignH:a,content:d,position:e,suppress:f};j(c,a);return a},propsFor:b("tooltipPropsFor"),enableDisplayOnOverflow:function(a){a.removeAttribute("data-tooltip-display"),j(a,{overflowDisplay:!0})},enablePersistOnClick:function(a){a.removeAttribute("data-pitloot-persistOnClick"),j(a,{persistOnClick:!0})},suppress:function(a,b){i(a,{suppress:b})},_get:h};e.exports=l}),null);
__d("Focus",["cx","CSS","Event","FocusEvent","KeyStatus","TooltipData","ifRequired"],(function(a,b,c,d,e,f,g,h){function a(a,b){b===void 0&&(b=!1);if(a){var e=c("ifRequired")("VirtualCursorStatus",function(a){return a.isVirtualCursorTriggered()},function(){return!1});b||d("KeyStatus").isKeyDown()||e?k(a):i(a)}}function i(a){if(a){d("CSS").addClass(a,"_5f0v");var b=c("Event").listen(a,"blur",function(){a&&d("CSS").removeClass(a,"_5f0v"),b.remove()});d("TooltipData").suppress(a,!0);k(a);d("TooltipData").suppress(a,!1)}}function b(a,b){d("CSS").addClass(a,"_5f0v");return d("FocusEvent").listen(a,function(){for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];return j.apply(void 0,[a,b].concat(d))})}function j(a,b,e){d("CSS").addClass(a,"_5f0v");a=c("ifRequired")("FocusRing",function(a){return a.usingKeyboardNavigation()},function(){return!0});e=e&&a;d("CSS").conditionClass(b,"_3oxt",e);d("CSS").conditionClass(b,"_16jm",e)}function k(a){try{a.tabIndex=a.tabIndex,a.focus()}catch(a){}}g.set=a;g.setWithoutOutline=i;g.relocate=b;g.performRelocation=j}),98);
__d("isContentEditable",[],(function(a,b,c,d,e,f){"use strict";function a(a){a=a;while(a instanceof HTMLElement){if(a.contentEditable==="true"||a.contentEditable==="plaintext-only")return!0;a=a.parentElement}return!1}f["default"]=a}),66);
__d("isElementInteractive",["isContentEditable"],(function(a,b,c,d,e,f,g){"use strict";var h=new Set(["EMBED","INPUT","OBJECT","SELECT","TEXTAREA"]),i=new Set(["button","checkbox","radio","submit"]);function a(a){if(!a instanceof HTMLElement)return!1;var b=c("isContentEditable")(a),d=h.has(a.nodeName);a=a instanceof HTMLInputElement&&i.has(a.type);return(b||d)&&!a}g["default"]=a}),98);
__d("KeyEventController",["Bootloader","DOMQuery","Event","Run","emptyFunction","getElementText","isContentEditable","isElementInteractive","isEmpty"],(function(a,b,c,d,e,f,g){var h=null,i={BACKSPACE:[8],TAB:[9],RETURN:[13],ALT:[18],ESCAPE:[27],LEFT:[37,63234],UP:[38,63232],RIGHT:[39,63235],DOWN:[40,63233],NUMPAD_ADD:[43],NUMPAD_SUBSTRACT:[45],DELETE:[46],COMMA:[188],PERIOD:[190],SLASH:[191],"`":[192],"[":[219],"]":[221],PAGE_UP:[33],PAGE_DOWN:[34],END:[35],HOME:[36],SPACE:[32],KP_DOT:[46,110],"-":[189],"=":[187],FORWARD_SLASH:[191]},j=(a={},a[8]=1,a[9]=1,a[13]=1,a[27]=1,a[32]=1,a[37]=1,a[63234]=1,a[38]=1,a[63232]=1,a[39]=1,a[63235]=1,a[40]=1,a[63233]=1,a[46]=1,a);b=function(){function a(){var a=this;this.handlers={};["keyup","keydown","keypress"].forEach(function(b){return document.addEventListener(b,a.onkeyevent.bind(a,"on"+b))})}var b=a.prototype;b.mapKey=function(a){a=a;if(/^[0-9]$/.test(a+"")){typeof a!=="number"&&(a=a.charCodeAt(0)-48);return[48+a,96+a]}a+="";var b=i[a.toUpperCase()];return b?b:[a.toUpperCase().charCodeAt(0)]};b.onkeyevent=function(a,b){var d=b;d=c("Event").$E(d);b=this.handlers[d.keyCode]||this.handlers[d.which];if(b)for(var e=0;e<b.length;e++){var f=b[e].callback,g=b[e].filter;try{if(!g||g(d,a)){g=function(){var b=f(d,a),e=d.which||d.keyCode;c("Bootloader").loadModules(["KeyEventTypedLogger"],function(a){new a().setAction("key_shortcut").setKey(d.key||"").setKeyChar(String.fromCharCode(e)).setKeyCode(e).addToExtraData("is_trusted",d.isTrusted).log()},"KeyEventController");if(b===!1)return{v:c("Event").kill(d)}}();if(typeof g==="object")return g.v}}catch(a){}}return!0};b.resetHandlers=function(){for(var a in this.handlers)if(Object.prototype.hasOwnProperty.call(this.handlers,a)){var b=this.handlers[a].filter(function(a){return a.preserve()});b.length?this.handlers[a]=b:delete this.handlers[a]}};a.getInstance=function(){return h||(h=new a())};a.defaultFilter=function(b,d){b=c("Event").$E(b);return a.filterEventTypes(b,d)&&a.filterEventTargets(b,d)&&a.filterEventModifiers(b,d)};a.filterEventTypes=function(a,b){return b==="onkeydown"?!0:!1};a.filterEventTargets=function(a,b){b=a.getTarget();return!c("isElementInteractive")(b)||a.keyCode in j&&(d("DOMQuery").isNodeOfType(b,["input","textarea"])&&b.value.length===0||c("isContentEditable")(b)&&c("getElementText")(b).length===0)};a.filterEventModifiers=function(a,b){return a.ctrlKey||a.altKey||a.metaKey||a.repeat?!1:!0};a.registerKeyAcrossTransitions=function(b,d,e,f){e===void 0&&(e=a.defaultFilter);f===void 0&&(f=!1);return a.registerKey(b,d,e,f,c("emptyFunction").thatReturnsTrue)};a.registerKey=function(b,e,f,g,h){f===void 0&&(f=a.defaultFilter);g===void 0&&(g=!1);h===void 0&&(h=c("emptyFunction").thatReturnsFalse);b=b;var i=a.getInstance(),j=b==null?[]:i.mapKey(b);c("isEmpty")(i.handlers)&&d("Run").onLeave(i.resetHandlers.bind(i));var k={};for(var l=0;l<j.length;l++){b=""+j[l];(!i.handlers[b]||g)&&(i.handlers[b]=[]);var m={callback:e,filter:f,preserve:h};k[b]=m;i.handlers[b].push(m)}return{remove:function(){for(var a in k){if(i.handlers[a]&&i.handlers[a].length){var b=i.handlers[a].indexOf(k[a]);b>=0&&i.handlers[a].splice(b,1)}delete k[a]}}}};return a}();g["default"]=b}),98);
__d("TabbableElements",["Style"],(function(a,b,c,d,e,f,g){function h(a){if(a.tabIndex<0)return!1;if(a.tabIndex>0||a.tabIndex===0&&a.getAttribute("tabIndex")!==null)return!0;var b=a;switch(a.tagName){case"A":a=b;return!!a.href&&a.rel!="ignore";case"INPUT":a=b;return a.type!="hidden"&&a.type!="file"&&!a.disabled;case"BUTTON":case"SELECT":case"TEXTAREA":a=b;return!a.disabled}return!1}function i(a){a=a;while(a&&a!==document&&c("Style").get(a,"visibility")!="hidden"&&c("Style").get(a,"display")!="none")a=a.parentNode;return a===document}function a(a){return Array.from(a.getElementsByTagName("*")).filter(j)}function b(a){return Array.from(a.getElementsByTagName("*")).find(j)}function d(a){a=Array.from(a.getElementsByTagName("*"));for(var b=a.length-1;b>=0;b--)if(j(a[b]))return a[b];return null}function j(a){return h(a)&&i(a)}function e(a){return i(a)}g.find=a;g.findFirst=b;g.findLast=d;g.isTabbable=j;g.isVisible=e}),98);
__d("BehaviorsMixin",[],(function(a,b,c,d,e,f){var g=function(){function a(a){this.$1=a,this.$2=!1}var b=a.prototype;b.enable=function(){this.$2||(this.$2=!0,this.$1.enable())};b.disable=function(){this.$2&&(this.$2=!1,this.$1.disable())};return a}(),h=1;function i(a){a.__BEHAVIOR_ID||(a.__BEHAVIOR_ID=h++);return a.__BEHAVIOR_ID}a={enableBehavior:function(a){this._behaviors||(this._behaviors={});var b=i(a);this._behaviors[b]||(this._behaviors[b]=new g(new a(this)));this._behaviors[b].enable();return this},disableBehavior:function(a){if(this._behaviors){a=i(a);this._behaviors[a]&&this._behaviors[a].disable()}return this},enableBehaviors:function(a){a.forEach(this.enableBehavior,this);return this},destroyBehaviors:function(){if(this._behaviors){for(var a in this._behaviors)this._behaviors[a].disable();this._behaviors={}}},hasBehavior:function(a){return this._behaviors&&i(a)in this._behaviors}};b=a;f["default"]=b}),66);
__d("Layer",["invariant","ArbiterMixin","BehaviorsMixin","BootloadedReact","CSS","ContextualThing","DOM","DataStore","Event","FBLogger","HTML","KeyEventController","KeyStatus","Parent","Style","ge","isNode","mixin","removeFromArray","setImmediate"],(function(a,b,c,d,e,f,g,h){b("KeyStatus");var i=[],j=function(b){babelHelpers.inheritsLoose(a,b);function a(a,d){var e;e=b.call(this)||this;e._config=a||{};if(d){e._configure(e._config,d);a=e._config.addedBehaviors||[];e.enableBehaviors(e._getDefaultBehaviors().concat(a))}else c("FBLogger")("layer").warn("The markup param wasn't provided to the Layer constructor");return e}var e=a.prototype;e.init=function(a){this._configure(this._config,a);a=this._config.addedBehaviors||[];this.enableBehaviors(this._getDefaultBehaviors().concat(a));this._initialized=!0;return this};e._configure=function(a,b){var e=this;if(b){var f=c("isNode")(b),g=typeof b==="string"||c("HTML").isHTML(b);this.containsReactComponent=d("BootloadedReact").isValidElement(b);!f&&!g&&!this.containsReactComponent&&c("FBLogger")("layer").warn("Layer must be init with HTML, DOM node or React instance");if(g)b=c("HTML")(b).getRootNode();else if(this.containsReactComponent){f=document.createElement("div");var h=!0;d("BootloadedReact").render(b,f,function(){e.inform("reactshow"),h||e.updatePosition()});h=!1;b=this._reactContainer=f}}this._root=this._buildWrapper(a,b);a.attributes&&c("DOM").setAttributes(this._root,a.attributes);a.classNames&&a.classNames.forEach(d("CSS").addClass.bind(null,this._root));d("CSS").addClass(this._root,"uiLayer");a.causalElement&&(this._causalElement=c("ge")(a.causalElement));a.permanent&&(this._permanent=a.permanent);a.isStrictlyControlled&&(this._isStrictlyControlled=a.isStrictlyControlled);d("DataStore").set(this._root,"layer",this)};e._getDefaultBehaviors=function(){return[]};e.getCausalElement=function(){return this._causalElement};e.setCausalElement=function(a){this._causalElement=a;return this};e.getInsertParent=function(){return this._insertParent||document.body};e.getRoot=function(){this._root||(this._destroyed?c("FBLogger")("layer").warn("No root node for this Layer. It has either not yet been set or the Layer has been destroyed.  This layer has been destroyed."):c("FBLogger")("layer").warn("No root node for this Layer. It has probably not been set."));return this._root};e.getContentRoot=function(){return this.getRoot()};e._buildWrapper=function(a,b){return b};e.setInsertParent=function(a){a&&(this._shown&&a!==this.getInsertParent()&&(c("DOM").appendContent(a,this.getRoot()),this.updatePosition()),this._insertParent=a);return this};e.showAfterDelay=function(a){window.setTimeout(this.show.bind(this),a)};e.show=function(){var b=this;if(this._shown)return this;var e=this.getRoot();e!=null||h(0,5142);this.inform("beforeshow");c("Style").set(e,"visibility","hidden");c("Style").set(e,"overflow","hidden");d("CSS").show(e);c("DOM").appendContent(this.getInsertParent(),e);this.updatePosition()!==!1?(this._shown=!0,this.inform("show"),a.inform("show",this),this._permanent||window.setTimeout(function(){b._shown&&i.push(b)},0)):d("CSS").hide(e);c("Style").set(e,"visibility","");c("Style").set(e,"overflow","");c("Style").set(e,"opacity","1");this.inform("aftershow");return this};e.hide=function(a){if(this._isStrictlyControlled){this._shown&&this.inform("runhide",a);return this}return this._hide()};e._hide=function(){if(this._hiding||!this._shown||this.inform("beforehide")===!1)return this;this._hiding=!0;this.inform("starthide")!==!1&&this.finishHide();return this};e.conditionShow=function(a){return a?this.show():this._hide()};e.finishHide=function(){if(this._shown){this._permanent||c("removeFromArray")(i,this);this._hiding=!1;this._shown=!1;var b=this.getRoot();b!=null||h(0,5143);d("CSS").hide(b);this.inform("hide");a.inform("hide",this)}};e.isShown=function(){return this._shown};e.updatePosition=function(){return!0};e.destroy=function(){this.containsReactComponent&&d("BootloadedReact").unmountComponentAtNode(this._reactContainer);this.finishHide();var b=this.getRoot();c("DOM").remove(b);this.destroyBehaviors();this.inform("destroy");a.inform("destroy",this);d("DataStore").remove(b,"layer");this._root=this._causalElement=null;this._destroyed=!0};a.init=function(a,b){a.init(b)};a.initAndShow=function(a,b){a.init(b).show()};a.show=function(a){a.show()};a.showAfterDelay=function(a,b){a.showAfterDelay(b)};a.getTopmostLayer=function(){return i[i.length-1]};a.informBlur=function(a){k=null;l=null;var b=i.length;if(!b)return;while(b--){var c=i[b],e=c.getContentRoot();e!=null||h(0,5144);if(d("ContextualThing").containsIncludingLayers(e,a))return;if(c.inform("blur",{target:a})===!1||c.isShown())return}};return a}(c("mixin")(c("ArbiterMixin"),c("BehaviorsMixin")));Object.assign(j,c("ArbiterMixin"));Object.assign(j.prototype,{_destroyed:!1,_initialized:!1,_root:null,_shown:!1,_hiding:!1,_causalElement:null,_reactContainer:null});c("Event").listen(document.documentElement,"keydown",function(a){if(c("KeyEventController").filterEventTargets(a,"keydown"))for(var b=i.length-1;b>=0;b--)if(i[b].inform("key",a)===!1)return!1;return!0},c("Event").Priority.URGENT);var k;c("Event").listen(document.documentElement,"mousedown",function(a){k=a.getTarget()});var l;c("Event").listen(document.documentElement,"mouseup",function(a){l=a.getTarget(),c("setImmediate")(function(){k=null,l=null})});c("Event").listen(document.documentElement,"click",function(a){var b=k,e=l;k=null;l=null;var f=i.length;if(!f)return;f=a.getTarget();if(f!==e||f!==b)return;if(!c("DOM").contains(document.documentElement,f))return;if(f.offsetWidth!=null&&!f.offsetWidth)return;if(d("Parent").byClass(f,"generic_dialog"))return;j.informBlur(f)});g["default"]=j}),98);
__d("Rect",["invariant","$","Vector","react"],(function(a,b,c,d,e,f,g,h){d("react");a=function(){function a(b,d,e,f,g){if(arguments.length===1){if(b instanceof a)return b;if(b instanceof c("Vector"))return new a(b.y,b.x,b.y,b.x,b.domain);typeof b==="string"&&(b=c("$")(b));return a.getElementBounds(b)}typeof b==="number"&&typeof d==="number"&&typeof e==="number"&&typeof f==="number"&&(!g||typeof g==="string")||h(0,1087);Object.assign(this,{t:b,r:d,b:e,l:f,domain:g||"pure"});return this}var b=a.prototype;b.w=function(){return this.r-this.l};b.h=function(){return this.b-this.t};b.getWidth=function(){return this.w()};b.getHeight=function(){return this.h()};b.toString=function(){return"(("+this.l+", "+this.t+"), ("+this.r+", "+this.b+"))"};b.contains=function(b){b=new a(b).convertTo(this.domain);var c=this;return c.l<=b.l&&c.r>=b.r&&c.t<=b.t&&c.b>=b.b};b.intersection=function(b){b=b.convertTo(this.domain);var c=Math.min(this.b,b.getBottom()),d=Math.max(this.l,b.getLeft()),e=Math.min(this.r,b.getRight());b=Math.max(this.t,b.getTop());return c>b&&e>d?new a(b,e,c,d):null};b.isEqualTo=function(a){return this.t===a.t&&this.r===a.r&&this.b===a.b&&this.l===a.l&&this.domain===a.domain};b.add=function(b,d){if(arguments.length==1){b instanceof a&&b.domain!="pure"&&(b=b.convertTo(this.domain));return b instanceof c("Vector")?this.add(b.x,b.y):this}var e=parseFloat(b),f=parseFloat(d);return new a(this.t+f,this.r+e,this.b+f,this.l+e,this.domain)};b.sub=function(a,b){if(arguments.length==1&&a instanceof c("Vector"))return this.add(a.mul(-1));else if(typeof a==="number"&&typeof b==="number")return this.add(-a,-b);return this};b.rotateAroundOrigin=function(b){var c=this.getCenter().rotate(b*Math.PI/2),d=0;b%2?(d=this.h(),b=this.w()):(d=this.w(),b=this.h());var e=c.y-b/2;c=c.x-d/2;b=e+b;d=c+d;return new a(e,d,b,c,this.domain)};b.boundWithin=function(a){var b=0,c=0;this.l<a.l?b=a.l-this.l:this.r>a.r&&(b=a.r-this.r);this.t<a.t?c=a.t-this.t:this.b>a.b&&(c=a.b-this.b);return this.add(b,c)};b.getCenter=function(){return new(c("Vector"))(this.l+this.w()/2,this.t+this.h()/2,this.domain)};b.getTop=function(){return this.t};b.getRight=function(){return this.r};b.getBottom=function(){return this.b};b.getLeft=function(){return this.l};b.getArea=function(){return(this.b-this.t)*(this.r-this.l)};b.getPositionVector=function(){return new(c("Vector"))(this.l,this.t,this.domain)};b.getDimensionVector=function(){return new(c("Vector"))(this.w(),this.h(),"pure")};b.convertTo=function(b){if(this.domain==b)return this;if(b=="pure")return new a(this.t,this.r,this.b,this.l,"pure");if(this.domain=="pure")return new a(0,0,0,0);var d=new(c("Vector"))(this.l,this.t,this.domain).convertTo(b);return new a(d.y,d.x+this.w(),d.y+this.h(),d.x,b)};a.deserialize=function(b){b=b.split(":");return new a(parseFloat(b[1]),parseFloat(b[2]),parseFloat(b[3]),parseFloat(b[0]))};a.newFromVectors=function(b,c){return new a(b.y,b.x+c.x,b.y+c.y,b.x,b.domain)};a.getElementBounds=function(b){return a.newFromVectors(c("Vector").getElementPosition(b),c("Vector").getElementDimensions(b))};a.getViewportBounds=function(){return a.newFromVectors(c("Vector").getScrollPosition(),c("Vector").getViewportDimensions())};a.getViewportWithoutScrollbarsBounds=function(){return a.newFromVectors(c("Vector").getScrollPosition(),c("Vector").getViewportWithoutScrollbarDimensions())};a.minimumBoundingBox=function(b){var c=new a(Infinity,-Infinity,-Infinity,Infinity),d;for(var e=0;e<b.length;e++)d=b[e],c.t=Math.min(c.t,d.t),c.r=Math.max(c.r,d.r),c.b=Math.max(c.b,d.b),c.l=Math.min(c.l,d.l);return c};return a}();g["default"]=a}),98);
__d("ScrollAwareDOM",["ArbiterMixin","CSS","DOM","DOMDimensions","HTML","Vector","ViewportBounds","getDocumentScrollElement","getElementPosition","getViewportDimensions","isAsyncScrollQuery","isNode"],(function(a,b,c,d,e,f,g){function a(a,b){return function(){var c=arguments;k.monitor(arguments[a],function(){b.apply(null,c)})}}function h(a){a instanceof Array||(a=[a]);for(var b=0;b<a.length;b++){var d=c("HTML").replaceJSONWrapper(a[b]);if(d instanceof c("HTML"))return d.getRootNode();else if(c("isNode")(d))return d}return null}function i(a){return c("getElementPosition")(a).y>c("ViewportBounds").getTop()}function j(a){a=c("getElementPosition")(a).y+d("DOMDimensions").getElementDimensions(a).height;var b=c("getViewportDimensions")().height-c("ViewportBounds").getBottom();return a>=b}var k=babelHelpers["extends"]({monitor:function(a,b){if(c("isAsyncScrollQuery")())return b();a=h(a);if(a){var d=!!a.offsetParent;if(d&&(i(a)||j(a)))return b();var e=c("Vector").getDocumentDimensions(),f=b();if(d||a.offsetParent&&!i(a)){d=c("Vector").getDocumentDimensions().sub(e);e={delta:d,target:a};k.inform("scroll",e)!==!1&&d.scrollElementBy(c("getDocumentScrollElement")())}return f}else return b()},replace:function(a,b){var e=h(b);(!e||d("CSS").hasClass(e,"hidden_elem"))&&(e=a);return k.monitor(e,function(){c("DOM").replace(a,b)})},prependContent:a(1,c("DOM").prependContent),insertAfter:a(1,c("DOM").insertAfter),insertBefore:a(1,c("DOM").insertBefore),setContent:a(0,c("DOM").setContent),appendContent:a(1,c("DOM").appendContent),remove:a(0,c("DOM").remove),empty:a(0,c("DOM").empty)},c("ArbiterMixin"));b=k;g["default"]=b}),98);
__d("WebPixelRatio",["SiteData"],(function(a,b,c,d,e,f,g){function a(){return c("SiteData").pr!=null&&c("SiteData").pr>0?c("SiteData").pr:window.devicePixelRatio||1}g.get=a}),98);
__d("debounceAcrossTransitions",["debounce"],(function(a,b,c,d,e,f,g){function a(a,b,d){return c("debounce")(a,b,d,!0)}g["default"]=a}),98);
__d("TabIsolation",["Event","Focus","Keys","TabbableElements","containsNode"],(function(a,b,c,d,e,f,g){var h=[],i=0;a=function(){function a(a){var b=this;this.enable=function(){b.disable(),h.unshift(b.$2),b.$1=c("Event").listen(window,"keydown",function(a){h[0]===b.$2&&b.$4(a)},c("Event").Priority.URGENT)};this.disable=function(){if(b.$1){var a=h.indexOf(b.$2);a>-1&&h.splice(a,1);b.$1.remove();b.$1=null}};this.$3=a;this.$1=null;this.$2=i++}var b=a.prototype;b.$4=function(a){if(c("Event").getKeyCode(a)!==c("Keys").TAB)return;var b=a.getTarget();if(!b)return;var e=d("TabbableElements").find(this.$3),f=e[0];e=e[e.length-1];var g=a.getModifiers();g=g.shift;g&&b===f?(a.preventDefault(),d("Focus").set(e)):(!g&&b===e||!c("containsNode")(this.$3,b))&&(a.preventDefault(),d("Focus").set(f))};return a}();g["default"]=a}),98);
__d("LayerTabIsolation",["TabIsolation"],(function(a,b,c,d,e,f,g){a=function(){function a(a){this._layer=a,this._tabIsolation=null,this._subscriptions=null}var b=a.prototype;b.enable=function(){var a=this._layer.getRoot();if(a==null)return;a=new(c("TabIsolation"))(a);this._tabIsolation=a;this._subscriptions=[this._layer.subscribe("show",a.enable.bind(a)),this._layer.subscribe("hide",a.disable.bind(a))]};b.disable=function(){while(this._subscriptions&&this._subscriptions.length)this._subscriptions.pop().unsubscribe();this._tabIsolation&&this._tabIsolation.disable();this._tabIsolation=null};return a}();Object.assign(a.prototype,{_subscriptions:[]});g["default"]=a}),98);
__d("ModalLayer",["csx","cx","Arbiter","ArbiterMixin","CSS","CometVisualCompletionConstants","DOM","DOMDimensions","DOMQuery","DataStore","Event","Scroll","ScrollAwareDOM","Style","UserAgent","Vector","debounceAcrossTransitions","ge","getDocumentScrollElement","isAsyncScrollQuery","removeFromArray","setTimeout","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f,g,h,i){var j=[],k=null,l=null,m=null;function n(){m||(m=d("DOMQuery").scry(document.body,"._li")[0]||c("ge")("FB4BResponsiveMain"));return m}function o(a){var b={position:c("Vector").getScrollPosition(),listener:void 0},e=a.offsetTop-b.position.y;d("CSS").addClass(a,"_31e");n().id!=="FB4BResponsiveMain"&&c("Style").set(a,"top",e+"px");c("Arbiter").inform("reflow");b.listener=c("ScrollAwareDOM").subscribe("scroll",function(e,f){if(d("DOMQuery").contains(a,f.target)){e=a.offsetTop-f.delta.y;c("Style").set(a,"top",e+"px");b.position=b.position.add(f.delta);return!1}return!0});d("DataStore").set(a,"ModalLayerData",b)}function p(a,b){var e=d("DataStore").get(a,"ModalLayerData");if(e){var f=function(){d("CSS").removeClass(a,"_31e");c("Style").set(a,"top","");if(b){var f=c("getDocumentScrollElement")();d("Scroll").setTop(f,e.position.y);d("Scroll").getTop(f)!==e.position.y&&(d("Scroll").setTop(f,e.position.y+1),d("Scroll").setTop(f,e.position.y))}c("Arbiter").inform("reflow");e.listener.unsubscribe();e.listener=null;d("DataStore").remove(a,"ModalLayerData")};if(b&&c("isAsyncScrollQuery")()){var g=c("DOM").create("div",{className:"_42w"});c("Style").set(g,"height",a.offsetHeight+"px");c("DOM").appendContent(document.body,g);var h=c("getDocumentScrollElement")();d("Scroll").setTop(h,e.position.y);b=!1;c("setTimeout")(function(){f(),c("DOM").remove(g)},0)}else f()}}function q(){var a=n();a!=null&&!d("CSS").matchesSelector(a,"._31e")&&o(a)}function r(){j.length||p(n(),!0)}function s(){var a=j.length;while(a--){var b=j[a],c=b.getLayerRoot();if(c){t(c,0);b=b.getLayerContentRoot();if(b){b=b.offsetWidth+d("DOMDimensions").measureElementBox(b,"width",!1,!1,!0);t(c,b)}}}}function t(a,b){c("Style").set(a,"min-width",b+(b?"px":""))}a=function(){function a(a){this._layer=a,this._enabled=!1}var b=a.prototype;b.enable=function(){var a=this;if(!n())return;this._subscription=this._layer.subscribe(["show","hide"],function(b){b=="show"?a._addModal():a._removeModal()});this._layer.isShown()&&this._addModal();this._enabled=!0};b.disable=function(){if(!n())return;this._subscription&&this._subscription.unsubscribe();this._layer.isShown()&&this._removeModal();this._enabled=!1};b._addModal=function(){var b=this.getLayerRoot();d("CSS").addClass(b,"_3qw");this._wash=c("DOM").create("div",{className:"_3ixn"});c("DOM").prependContent(b,this._wash);b&&this._layer._config.ignoreVC&&b.setAttribute(d("CometVisualCompletionConstants").ATTRIBUTE_NAME,d("CometVisualCompletionConstants").IGNORE);b=j[j.length-1];b?o(b.getLayerRoot()):q();b=c("getDocumentScrollElement")();d("Scroll").setTop(b,0);if(!j.length){b=c("debounceAcrossTransitions")(s,100);k=c("Event").listen(window,"resize",b);l=c("Arbiter").subscribe("reflow",b)}j.push(this);a.inform("show",this);c("setTimeout")(s,0)};b._removeModal=function(){var b=this,e=this.getLayerRoot();d("CSS").removeClass(e,"_3qw");c("DOM").remove(this._wash);this._wash=null;t(e,0);var f=this===j[j.length-1];c("removeFromArray")(j,this);j.length||(k&&k.remove(),k=null,l&&l.unsubscribe(),l=null);var g;c("UserAgent").isBrowser("Safari")&&(e=c("Event").listen(document.documentElement,"mousewheel",c("Event").prevent),g=e.remove.bind(e));c("setTimeoutAcrossTransitions")(function(){var d=j[j.length-1];d?(p(d.getLayerRoot(),f),a.inform("show",d)):(r(),a.inform("hide",b));j.length&&c("setTimeout")(s,0);c("UserAgent").isBrowser("Safari")&&c("setTimeout")(function(){g()},0)},200)};b.getLayerRoot=function(){return this._enabled?this._layer.getRoot():null};b.getLayerContentRoot=function(){return this._enabled?this._layer.getContentRoot():null};a.getTopmostModalLayer=function(){return j[j.length-1]};return a}();Object.assign(a,c("ArbiterMixin"));g["default"]=a}),98);
__d("qpl",["QPLHasteSupportDataStorage","recoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h={};a={_:function(a,b){var d=h[b];if(d==null){var e=c("QPLHasteSupportDataStorage").get(b);e==null?(c("recoverableViolation")("Failed to find a Haste-supplied config for the QPL event "+("identified by token `"+b+"`."),"staticresources"),d={i:a}):d=babelHelpers["extends"]({i:a},e);h[b]=d}return d}};b=a;g["default"]=b}),98);
__d("TrackingNodeConstants",[],(function(a,b,c,d,e,f){"use strict";a=58;b=126;c=69;d=42;e=47;var g=6,h=100,i="__tn__";f.BASE_CODE_START=a;f.BASE_CODE_END=b;f.BASE_CODE_SIZE=c;f.PREFIX_CODE_START=d;f.PREFIX_CODE_END=e;f.PREFIX_CODE_SIZE=g;f.ENCODE_NUMBER_MAX=h;f.TN_URL_PARAM=i}),66);
__d("encodeTrackingNode",["TrackingNodeConstants"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b){var c=(a-1)%d("TrackingNodeConstants").BASE_CODE_SIZE,e=parseInt((a-1)/d("TrackingNodeConstants").BASE_CODE_SIZE,10);if(a<1||e>d("TrackingNodeConstants").PREFIX_CODE_SIZE)throw Error("Invalid tracking node: "+a);a="";e>0&&(a+=String.fromCharCode(e-1+d("TrackingNodeConstants").PREFIX_CODE_START));a+=String.fromCharCode(c+d("TrackingNodeConstants").BASE_CODE_START);b!==void 0&&b>0&&(b>10&&(a+="#"),a+=parseInt(Math.min(b,d("TrackingNodeConstants").ENCODE_NUMBER_MAX)-1,10));return a.replace("\\","\\\\")}g["default"]=a}),98);