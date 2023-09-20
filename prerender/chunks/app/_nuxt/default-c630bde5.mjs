import {
  useSSRContext,
  defineComponent,
  mergeProps
} from 'file:///Users/markeltskhadadze/Desktop/vue-test/vue-todo/node_modules/vue/index.mjs'
import {
  ssrRenderComponent,
  ssrRenderSlot,
  ssrRenderAttrs
} from 'file:///Users/markeltskhadadze/Desktop/vue-test/vue-todo/node_modules/vue/server-renderer/index.mjs'
import { useRouter } from 'file:///Users/markeltskhadadze/Desktop/vue-test/vue-todo/node_modules/vue-router/dist/vue-router.node.mjs'
import { _ as _export_sfc } from '../server.mjs'
import 'file:///Users/markeltskhadadze/Desktop/vue-test/vue-todo/node_modules/ofetch/dist/node.mjs'
import 'file:///Users/markeltskhadadze/Desktop/vue-test/vue-todo/node_modules/hookable/dist/index.mjs'
import 'file:///Users/markeltskhadadze/Desktop/vue-test/vue-todo/node_modules/unctx/dist/index.mjs'
import 'file:///Users/markeltskhadadze/Desktop/vue-test/vue-todo/node_modules/h3/dist/index.mjs'
import 'file:///Users/markeltskhadadze/Desktop/vue-test/vue-todo/node_modules/ufo/dist/index.mjs'
import 'file:///Users/markeltskhadadze/Desktop/vue-test/vue-todo/node_modules/@unhead/ssr/dist/index.mjs'
import 'file:///Users/markeltskhadadze/Desktop/vue-test/vue-todo/node_modules/unhead/dist/index.mjs'
import 'file:///Users/markeltskhadadze/Desktop/vue-test/vue-todo/node_modules/@unhead/shared/dist/index.mjs'
import 'file:///Users/markeltskhadadze/Desktop/vue-test/vue-todo/node_modules/defu/dist/defu.mjs'
import '../../nitro/nitro-prerenderer.mjs'
import 'file:///Users/markeltskhadadze/Desktop/vue-test/vue-todo/node_modules/node-fetch-native/dist/polyfill.mjs'
import 'file:///Users/markeltskhadadze/Desktop/vue-test/vue-todo/node_modules/destr/dist/index.mjs'
import 'file:///Users/markeltskhadadze/Desktop/vue-test/vue-todo/node_modules/unenv/runtime/fetch/index.mjs'
import 'file:///Users/markeltskhadadze/Desktop/vue-test/vue-todo/node_modules/scule/dist/index.mjs'
import 'file:///Users/markeltskhadadze/Desktop/vue-test/vue-todo/node_modules/klona/dist/index.mjs'
import 'file:///Users/markeltskhadadze/Desktop/vue-test/vue-todo/node_modules/ohash/dist/index.mjs'
import 'file:///Users/markeltskhadadze/Desktop/vue-test/vue-todo/node_modules/unstorage/dist/index.mjs'
import 'file:///Users/markeltskhadadze/Desktop/vue-test/vue-todo/node_modules/unstorage/drivers/fs.mjs'
import 'file:///Users/markeltskhadadze/Desktop/vue-test/vue-todo/node_modules/radix3/dist/index.mjs'
import 'node:fs'
import 'node:url'
import 'file:///Users/markeltskhadadze/Desktop/vue-test/vue-todo/node_modules/pathe/dist/index.mjs'

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: 'HeaderBlock',
  __ssrInlineRender: true,
  setup(__props) {
    useRouter()
    return (_ctx, _push, _parent, _attrs) => {
      _push(
        `<div${ssrRenderAttrs(
          mergeProps({ class: 'flex justify-around items-center header-home' }, _attrs)
        )} data-v-09c41380><div class="flex" data-v-09c41380><p class="header-link me-3" data-v-09c41380>\u0423\u0441\u043B\u0443\u0433\u0438</p><p class="header-link me-3" data-v-09c41380>\u0422\u0430\u0440\u0438\u0444\u044B</p><p id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" class="header-link me-3" type="button" data-v-09c41380>\u0423\u0441\u043B\u0443\u0433\u0438 <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6" data-v-09c41380><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" data-v-09c41380></path></svg></p><div id="dropdownHover" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700" data-v-09c41380><ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton" data-v-09c41380><li data-v-09c41380><a href="/seo-audit" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" data-v-09c41380>SEO-\u0430\u0443\u0434\u0438\u0442 \u0441\u0430\u0439\u0442\u0430</a></li><li data-v-09c41380><a href="/seo-optimization" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" data-v-09c41380>\u041F\u0440\u043E\u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0430</a></li></ul></div><p class="header-link me-3" data-v-09c41380>\u0411\u043B\u043E\u0433</p></div></div>`
      )
    }
  }
})
const _sfc_setup$1 = _sfc_main$1.setup
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
    'components/HeaderBlock.vue'
  )
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0
}
const Header = /* @__PURE__ */ _export_sfc(_sfc_main$1, [['__scopeId', 'data-v-09c41380']])
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: 'default',
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`)
      _push(ssrRenderComponent(Header, null, null, _parent))
      _push(`<div class="main-panel"><div class="content-wrapper">`)
      ssrRenderSlot(_ctx.$slots, 'default', {}, null, _push, _parent)
      _push(`</div></div><!--]-->`)
    }
  }
})
const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
    'layouts/default.vue'
  )
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0
}

export { _sfc_main as default }
//# sourceMappingURL=default-c630bde5.mjs.map
