const id = 647;
const ids = [647];
const modules = {

/***/ 647:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(609);
// EXTERNAL MODULE: ../../node_modules/nuxt3/dist/app/index.mjs + 11 modules
var app = __webpack_require__(397);
// EXTERNAL MODULE: external "vue/server-renderer"
var server_renderer_ = __webpack_require__(344);





/* harmony default export */ const dist_ruleSet_0_pagesvue_type_script_setup_true_lang_ts = (/* @__PURE__ */(0, external_vue_.defineComponent)({
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { $supabase } = (0, app/* useNuxtApp */.e)();
    const { data, pending } = ([__temp, __restore] = (0, external_vue_.withAsyncContext)(() => (0, app/* useAsyncData */.w3)("posts", () => {
      return $supabase.from("posts").select();
    })), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      if ((0, external_vue_.unref)(pending)) {
        _push(`<div${(0, server_renderer_.ssrRenderAttrs)(_attrs)}>Loading...</div>`);
      } else {
        _push(`<div${(0, server_renderer_.ssrRenderAttrs)(_attrs)}>${(0, server_renderer_.ssrInterpolate)((0, external_vue_.unref)(data))}</div>`);
      }
    };
  }
}));




const __exports__ = dist_ruleSet_0_pagesvue_type_script_setup_true_lang_ts;

/* harmony default export */ const pages = (__exports__);

/***/ })

};

export { id, ids, modules };
