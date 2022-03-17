/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 679:
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Message": function() { return /* reexport */ zyMessage; },
  "default": function() { return /* binding */ entry_lib; },
  "install": function() { return /* reexport */ install; },
  "zyButton": function() { return /* reexport */ zyButton; },
  "zyButtonGroup": function() { return /* reexport */ zyButtonGroup; },
  "zyCol": function() { return /* reexport */ packages_zyCol; },
  "zyIcon": function() { return /* reexport */ zyIcon; },
  "zyLink": function() { return /* reexport */ zyLink; },
  "zyRow": function() { return /* reexport */ packages_zyRow; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__(679)
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/zyButton/src/index.vue?vue&type=template&id=85c10e40&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"zy-button",class:[
    _vm.type ? 'zy-button--' + _vm.type : '',
    _vm.icon || _vm.loading ? 'flex' : '',
    {
      'is-plain': _vm.plain,
      'is-round': _vm.round,
      'is-circle': _vm.circle,
      'is-disabled': _vm.disabled,
      'is-loading': _vm.loading,
    } ],attrs:{"autofocus":_vm.autofocus,"disabled":_vm.disabled || _vm.loading},on:{"click":function($event){return _vm.$emit('click')}}},[(_vm.loading)?_c('i',{staticClass:"rotate ri-loader-line"}):_vm._e(),(_vm.icon && !_vm.loading)?_c('i',{class:_vm.icon}):_vm._e(),_c('span',{staticClass:"content"},[_vm._t("default")],2)])}
var staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/zyButton/src/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var srcvue_type_script_lang_js_ = ({
  name: "zyButton",
  props: {
    plain: Boolean,
    round: Boolean,
    circle: Boolean,
    autofocus: Boolean,
    disabled: Boolean,
    loading: Boolean,
    type: {
      type: String,
    },
    icon: {
      type: String,
      default: ''
    }
  },
});

;// CONCATENATED MODULE: ./packages/zyButton/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var zyButton_srcvue_type_script_lang_js_ = (srcvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/zyButton/src/index.vue?vue&type=style&index=0&lang=scss&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./packages/zyButton/src/index.vue?vue&type=style&index=0&lang=scss&

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// CONCATENATED MODULE: ./packages/zyButton/src/index.vue



;


/* normalize component */

var component = normalizeComponent(
  zyButton_srcvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var zyButton_src = (component.exports);
;// CONCATENATED MODULE: ./packages/zyButton/index.js


zyButton_src.install = function (Vue) {
    Vue.component(zyButton_src.name, zyButton_src)
}

/* harmony default export */ var zyButton = (zyButton_src);

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/zyIcon/src/index.vue?vue&type=template&id=163cac1c&
var srcvue_type_template_id_163cac1c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('i',{class:_vm.name})}
var srcvue_type_template_id_163cac1c_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/zyIcon/src/index.vue?vue&type=script&lang=js&
//
//
//
//

/* harmony default export */ var zyIcon_srcvue_type_script_lang_js_ = ({
  name: 'zyIcon',
  props: ['name']
});

;// CONCATENATED MODULE: ./packages/zyIcon/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_zyIcon_srcvue_type_script_lang_js_ = (zyIcon_srcvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./packages/zyIcon/src/index.vue





/* normalize component */
;
var src_component = normalizeComponent(
  packages_zyIcon_srcvue_type_script_lang_js_,
  srcvue_type_template_id_163cac1c_render,
  srcvue_type_template_id_163cac1c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var zyIcon_src = (src_component.exports);
;// CONCATENATED MODULE: ./packages/zyIcon/index.js


zyIcon_src.install = function (Vue) {
    Vue.component(zyIcon_src.name, zyIcon_src)
}

/* harmony default export */ var zyIcon = (zyIcon_src);

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/zyButtonGroup/src/index.vue?vue&type=template&id=58ed4510&
var srcvue_type_template_id_58ed4510_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"zy-button-group"},[_vm._t("default")],2)}
var srcvue_type_template_id_58ed4510_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/zyButtonGroup/src/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var zyButtonGroup_srcvue_type_script_lang_js_ = ({
  name: 'zyButtonGroup',
});

;// CONCATENATED MODULE: ./packages/zyButtonGroup/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_zyButtonGroup_srcvue_type_script_lang_js_ = (zyButtonGroup_srcvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/zyButtonGroup/src/index.vue?vue&type=style&index=0&lang=scss&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./packages/zyButtonGroup/src/index.vue?vue&type=style&index=0&lang=scss&

;// CONCATENATED MODULE: ./packages/zyButtonGroup/src/index.vue



;


/* normalize component */

var zyButtonGroup_src_component = normalizeComponent(
  packages_zyButtonGroup_srcvue_type_script_lang_js_,
  srcvue_type_template_id_58ed4510_render,
  srcvue_type_template_id_58ed4510_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var zyButtonGroup_src = (zyButtonGroup_src_component.exports);
;// CONCATENATED MODULE: ./packages/zyButtonGroup/index.js


zyButtonGroup_src.install = function (Vue) {
    Vue.component(zyButtonGroup_src.name, zyButtonGroup_src)
}

/* harmony default export */ var zyButtonGroup = (zyButtonGroup_src);

;// CONCATENATED MODULE: ./packages/zyRow/zyRow.js

/* harmony default export */ var zyRow = ({
    name: 'zyRow',
    componentName: 'zyRow',
    props: {
      tag: {
        type: String,
        default: 'div'
      },
      gutter: Number,
      type: String,
      justify: {
        type: String,
        default: 'start'
      },
      align: {
        type: String,
        default: 'top'
      }
    },

    computed: {
      style() {
        const ret = {};
        if (this.gutter) {
          ret.marginLeft = `-${this.gutter / 2}px`;
          ret.marginRight = ret.marginLeft;
        }
        return ret;
      }
    },

    render(h) {
      return h(this.tag, {
        class: [
          'zy-row',
          this.justify !== 'start' ? `is-justify-${this.justify}` : '',
          this.align !== 'top' ? `is-align-${this.align}` : '',
          { 'zy-row--flex': this.type === 'flex' }
        ],
        style: this.style
      }, this.$slots.default);
    }
  });

;// CONCATENATED MODULE: ./packages/zyRow/index.js


zyRow.install = function (Vue) {
    Vue.components(zyRow.name, zyRow)
}

/* harmony default export */ var packages_zyRow = (zyRow);

;// CONCATENATED MODULE: ./packages/zyCol/zyCol.js

/* harmony default export */ var zyCol = ({
    name: 'zyCol',
    props: {
      span: {
        type: Number,
        default: 24
      },
      tag: {
        type: String,
        default: 'div'
      },
      offset: Number,
      pull: Number,
      push: Number,
      xs: [Number, Object],
      sm: [Number, Object],
      md: [Number, Object],
      lg: [Number, Object],
      xl: [Number, Object]
    },

    computed: {
      gutter() {
        let parent = this.$parent;
        while (parent && parent.$options.componentName !== 'ElRow') {
          parent = parent.$parent;
        }
        return parent ? parent.gutter : 0;
      }
    },
    render(h) {
      let classList = [];
      let style = {};

      if (this.gutter) {
        style.paddingLeft = this.gutter / 2 + 'px';
        style.paddingRight = style.paddingLeft;
      }

      ['span', 'offset', 'pull', 'push'].forEach(prop => {
        if (this[prop] || this[prop] === 0) {
          classList.push(
            prop !== 'span'
              ? `zy-col-${prop}-${this[prop]}`
              : `zy-col-${this[prop]}`
          );
        }
      });

      ['xs', 'sm', 'md', 'lg', 'xl'].forEach(size => {
        if (typeof this[size] === 'number') {
          classList.push(`zy-col-${size}-${this[size]}`);
        } else if (typeof this[size] === 'object') {
          let props = this[size];
          Object.keys(props).forEach(prop => {
            classList.push(
              prop !== 'span'
                ? `zy-col-${size}-${prop}-${props[prop]}`
                : `zy-col-${size}-${props[prop]}`
            );
          });
        }
      });

      return h(this.tag, {
        class: ['zy-col', classList],
        style
      }, this.$slots.default);
    }
  });

;// CONCATENATED MODULE: ./packages/zyCol/index.js


zyCol.install = function (Vue){
    Vue.components(zyCol.name, zyCol)
}

/* harmony default export */ var packages_zyCol = (zyCol);

;// CONCATENATED MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject = require("vue");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/zyMessage/src/index.vue?vue&type=template&id=10c5cb70&
var srcvue_type_template_id_10c5cb70_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"zy-message-fade"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],class:[
      'zy-message',
      _vm.type ? ("zy-message--" + _vm.type) : '',
      _vm.center ? 'is-center' : '',
      _vm.showClose ? 'is-closable' : '' ],style:(_vm.positionStyle)},[_c('i',{class:_vm.typeClass}),_vm._t("default"),_vm._t("default",function(){return [(!_vm.dangerouslyUseHTMLString)?_c('p',{staticClass:"zy-message__content"},[_vm._v(_vm._s(_vm.message))]):_c('p',{staticClass:"zy-message__content",domProps:{"innerHTML":_vm._s(_vm.message)}})]}),(_vm.showClose)?_c('i',{staticClass:"zy-message__closeBtn zy-icon-close",on:{"click":_vm.close}}):_vm._e()],2)])}
var srcvue_type_template_id_10c5cb70_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/zyMessage/src/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

const typeMap = {
  success: 'success',
  info: 'info',
  warning: 'warning',
  error: 'error'
};
/* harmony default export */ var zyMessage_srcvue_type_script_lang_js_ = ({
  name: 'zyMessage',
  data(){
    return {
      visible: false,
      message: '这是一条消息提示',
      duration: 3000,
      showClose: false,
      closed: false,
      type: 'info',
      verticalOffset: 20,
      center: false,
      dangerouslyUseHTMLString: false,
      onClose: null,
    }
  },
  computed: {
    typeClass() {
      return this.type
          //
          ? 'zy-message__icon ri-error-warning-line'
          : '';
    },
    positionStyle() {
      return {
        'top': `${ this.verticalOffset }px`
      };
    }
  },
  watch: {
    closed(newVal) {
      if (newVal) {
        this.visible = false;
      }
    }
  },
  methods: {
    close() {
      this.closed = true;
      if (typeof this.onClose === 'function') {
        this.onClose(this);
      }
    },
    startTimer() {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          if (!this.closed) {
            this.close();
          }
        }, this.duration);
      }
    },
  },
  mounted() {
    this.startTimer();
  },
});

;// CONCATENATED MODULE: ./packages/zyMessage/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_zyMessage_srcvue_type_script_lang_js_ = (zyMessage_srcvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/zyMessage/src/index.vue?vue&type=style&index=0&lang=scss&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./packages/zyMessage/src/index.vue?vue&type=style&index=0&lang=scss&

;// CONCATENATED MODULE: ./packages/zyMessage/src/index.vue



;


/* normalize component */

var zyMessage_src_component = normalizeComponent(
  packages_zyMessage_srcvue_type_script_lang_js_,
  srcvue_type_template_id_10c5cb70_render,
  srcvue_type_template_id_10c5cb70_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var zyMessage_src = (zyMessage_src_component.exports);
;// CONCATENATED MODULE: ./packages/zyMessage/message.js


const message_hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {
    return message_hasOwnProperty.call(obj, key);
}
function isVNode(node) {
    return node !== null && typeof node === 'object' && hasOwn(node, 'componentOptions');
}
let MessageConstructor = external_commonjs_vue_commonjs2_vue_root_Vue_default().extend(zyMessage_src);

let instance;
let instances = [];
let seed = 1;

const Message = function(options) {
    // 调用this.$message时传递进来的参数
    options = options || {};
    // 如果参数是个string，直接赋值给message
    if (typeof options === 'string') {
        options = {
            message: options
        };
    }
    let userOnClose = options.onClose;
    let id = 'message_' + seed++;
    options.onClose = function() {
        Message.close(id, userOnClose);
    };

    instance = new MessageConstructor({
        data: options
    });
    instance.id = id;

    if (isVNode(instance.message)) {
        instance.$slots.default = [instance.message];
        instance.message = null;
    }
    instance.$mount();
    document.body.appendChild(instance.$el);
    let verticalOffset = options.offset || 20;
    instances.forEach(item => {
        verticalOffset += item.$el.offsetHeight + 16;
    });
    instance.verticalOffset = verticalOffset;
    instance.visible = true;
    instances.push(instance);

    return instance;
}

const message_status = ['success', 'warning', 'info', 'error']
message_status.forEach(type => {
    Message[type] = options => {
        if (typeof options === 'string') {
            options = {
                message: options
            };
        }
        options.type = type;
        return Message(options);
    };
});

Message.close = function(id, userOnClose) {
    let len = instances.length;
    let index = -1;
    let removedHeight;
    for (let i = 0; i < len; i++) {
        if (id === instances[i].id) {
            removedHeight = instances[i].$el.offsetHeight;
            index = i;
            if (typeof userOnClose === 'function') {
                userOnClose(instances[i]);
            }
            instances.splice(i, 1);
            break;
        }
    }
    if (len <= 1 || index === -1 || index > instances.length - 1) return;
    for (let i = index; i < len - 1 ; i++) {
        let dom = instances[i].$el;
        dom.style['top'] =
            parseInt(dom.style['top'], 10) - removedHeight - 16 + 'px';
    }
};

Message.closeAll = function() {
    for (let i = instances.length - 1; i >= 0; i--) {
        instances[i].close();
    }
};

/* harmony default export */ var message = (Message);

;// CONCATENATED MODULE: ./packages/zyMessage/index.js


message.install = function (Vue){
    Vue.component(message.name, message)
}

/* harmony default export */ var zyMessage = (message);

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/zyLink/src/index.vue?vue&type=template&id=461764f4&
var srcvue_type_template_id_461764f4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',_vm._b({class:[
    'zy-link',
    _vm.type ? ("zy-link--" + _vm.type) : '',
    _vm.disabled && 'is-disabled',
    _vm.underline && !_vm.disabled && 'is-underline'
  ],attrs:{"href":_vm.disabled ? null : _vm.href},on:{"click":_vm.handleClick}},'a',_vm.$attrs,false),[(_vm.icon)?_c('i',{class:_vm.icon}):_vm._e(),(_vm.$slots.default)?_c('span',{staticClass:"zy-link--inner"},[_vm._t("default")],2):_vm._e()])}
var srcvue_type_template_id_461764f4_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/zyLink/src/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var zyLink_srcvue_type_script_lang_js_ = ({
  name: 'zyLink',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    underline: {
      type: Boolean,
      default: true
    },
    disabled: Boolean,
    href: String,
    icon: String
  },
  methods: {
    handleClick(event) {
      if (!this.disabled) {
        if (!this.href) {
          this.$emit('click', event);
        }
      }
    }
  }
});

;// CONCATENATED MODULE: ./packages/zyLink/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_zyLink_srcvue_type_script_lang_js_ = (zyLink_srcvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22[0].rules[0].use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22[0].rules[0].use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/zyLink/src/index.vue?vue&type=style&index=0&lang=scss&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./packages/zyLink/src/index.vue?vue&type=style&index=0&lang=scss&

;// CONCATENATED MODULE: ./packages/zyLink/src/index.vue



;


/* normalize component */

var zyLink_src_component = normalizeComponent(
  packages_zyLink_srcvue_type_script_lang_js_,
  srcvue_type_template_id_461764f4_render,
  srcvue_type_template_id_461764f4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var zyLink_src = (zyLink_src_component.exports);
;// CONCATENATED MODULE: ./packages/zyLink/index.js


zyLink_src.install = function (Vue){
    Vue.component(zyLink_src.name, zyLink_src)
}

/* harmony default export */ var zyLink = (zyLink_src);

;// CONCATENATED MODULE: ./packages/index.js
// 引入组件







// 存放组件的数组
const components = [
    zyButton,
    zyIcon,
    zyButtonGroup,
    packages_zyRow,
    packages_zyCol,
    zyMessage,
    zyLink
]

// 定义 install 方法，接收 Vue 作为参数。
const install = function (Vue) {
    // 判断是否安装
    if (install.installed) return
    // 遍历 components 数组，来进行全局注册
    components.map(component => {
        Vue.component(component.name, component)
    })
}
// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

/* harmony default export */ var packages_0 = (install);


;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (packages_0);


}();
module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=index.common.js.map