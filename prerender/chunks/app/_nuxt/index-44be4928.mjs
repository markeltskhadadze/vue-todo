import { b as buildAssetsURL } from '../../renderer.mjs'
import {
  useSSRContext,
  reactive,
  defineComponent,
  computed,
  mergeProps,
  unref,
  withCtx,
  createVNode,
  toDisplayString,
  openBlock,
  createBlock,
  Fragment,
  renderList,
  toRaw,
  ref
} from 'file:///Users/markeltskhadadze/Desktop/vue-test/vue-todo/node_modules/vue/index.mjs'
import {
  ssrRenderComponent,
  ssrRenderAttrs,
  ssrRenderList,
  ssrRenderAttr,
  ssrInterpolate,
  ssrRenderClass
} from 'file:///Users/markeltskhadadze/Desktop/vue-test/vue-todo/node_modules/vue/server-renderer/index.mjs'
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y
} from 'file:///Users/markeltskhadadze/Desktop/vue-test/vue-todo/node_modules/swiper/modules/index.mjs'
import {
  Swiper,
  SwiperSlide
} from 'file:///Users/markeltskhadadze/Desktop/vue-test/vue-todo/node_modules/swiper/swiper-vue.mjs'
import { d as defineStore, _ as _export_sfc } from '../server.mjs'
import axios from 'file:///Users/markeltskhadadze/Desktop/vue-test/vue-todo/node_modules/axios/index.js'
import { Bar } from 'file:///Users/markeltskhadadze/Desktop/vue-test/vue-todo/node_modules/vue-chartjs/dist/index.js'
import {
  Chart,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'file:///Users/markeltskhadadze/Desktop/vue-test/vue-todo/node_modules/chart.js/dist/chart.js'
import 'file:///Users/markeltskhadadze/Desktop/vue-test/vue-todo/node_modules/vue-bundle-renderer/dist/runtime.mjs'
import 'file:///Users/markeltskhadadze/Desktop/vue-test/vue-todo/node_modules/h3/dist/index.mjs'
import 'file:///Users/markeltskhadadze/Desktop/vue-test/vue-todo/node_modules/devalue/index.js'
import '../../nitro/nitro-prerenderer.mjs'
import 'file:///Users/markeltskhadadze/Desktop/vue-test/vue-todo/node_modules/node-fetch-native/dist/polyfill.mjs'
import 'file:///Users/markeltskhadadze/Desktop/vue-test/vue-todo/node_modules/ofetch/dist/node.mjs'
import 'file:///Users/markeltskhadadze/Desktop/vue-test/vue-todo/node_modules/destr/dist/index.mjs'
import 'file:///Users/markeltskhadadze/Desktop/vue-test/vue-todo/node_modules/unenv/runtime/fetch/index.mjs'
import 'file:///Users/markeltskhadadze/Desktop/vue-test/vue-todo/node_modules/hookable/dist/index.mjs'
import 'file:///Users/markeltskhadadze/Desktop/vue-test/vue-todo/node_modules/scule/dist/index.mjs'
import 'file:///Users/markeltskhadadze/Desktop/vue-test/vue-todo/node_modules/klona/dist/index.mjs'
import 'file:///Users/markeltskhadadze/Desktop/vue-test/vue-todo/node_modules/defu/dist/defu.mjs'
import 'file:///Users/markeltskhadadze/Desktop/vue-test/vue-todo/node_modules/ohash/dist/index.mjs'
import 'file:///Users/markeltskhadadze/Desktop/vue-test/vue-todo/node_modules/ufo/dist/index.mjs'
import 'file:///Users/markeltskhadadze/Desktop/vue-test/vue-todo/node_modules/unstorage/dist/index.mjs'
import 'file:///Users/markeltskhadadze/Desktop/vue-test/vue-todo/node_modules/unstorage/drivers/fs.mjs'
import 'file:///Users/markeltskhadadze/Desktop/vue-test/vue-todo/node_modules/radix3/dist/index.mjs'
import 'node:fs'
import 'node:url'
import 'file:///Users/markeltskhadadze/Desktop/vue-test/vue-todo/node_modules/pathe/dist/index.mjs'
import 'file:///Users/markeltskhadadze/Desktop/vue-test/vue-todo/node_modules/unctx/dist/index.mjs'
import 'file:///Users/markeltskhadadze/Desktop/vue-test/vue-todo/node_modules/vue-router/dist/vue-router.node.mjs'
import 'file:///Users/markeltskhadadze/Desktop/vue-test/vue-todo/node_modules/@unhead/ssr/dist/index.mjs'
import 'file:///Users/markeltskhadadze/Desktop/vue-test/vue-todo/node_modules/unhead/dist/index.mjs'
import 'file:///Users/markeltskhadadze/Desktop/vue-test/vue-todo/node_modules/@unhead/shared/dist/index.mjs'

const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: 'ServiceContent',
  __ssrInlineRender: true,
  props: {
    services: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    const props = __props
    const modules = [Navigation, Pagination, Scrollbar, A11y]
    const getIcon = computed(() => {
      return '/'
    })
    return (_ctx, _push, _parent, _attrs) => {
      _push(
        `<div${ssrRenderAttrs(mergeProps({ class: 'service-block' }, _attrs))} data-v-ee4f8538>`
      )
      _push(
        ssrRenderComponent(
          unref(Swiper),
          {
            modules,
            'slides-per-view': 2,
            navigation: '',
            pagination: { clickable: true }
          },
          {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<!--[-->`)
                ssrRenderList(props.services, (service, index) => {
                  _push2(
                    ssrRenderComponent(
                      unref(SwiperSlide),
                      { key: index },
                      {
                        default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                          if (_push3) {
                            _push3(
                              `<div class="flex justify-center flex-wrap py-6" data-v-ee4f8538${_scopeId2}><div data-aos="flip-up" data-aos-easing="linear" data-aos-duration="500" class="service-content" data-v-ee4f8538${_scopeId2}><img class="avatar"${ssrRenderAttr(
                                'src',
                                getIcon.value + 'seo2.png'
                              )} alt="" data-v-ee4f8538${_scopeId2}><div class="content-block" data-v-ee4f8538${_scopeId2}><h3 data-v-ee4f8538${_scopeId2}>${ssrInterpolate(
                                service.title
                              )}</h3><p data-v-ee4f8538${_scopeId2}>${ssrInterpolate(
                                service.description
                              )}</p></div></div></div>`
                            )
                          } else {
                            return [
                              createVNode('div', { class: 'flex justify-center flex-wrap py-6' }, [
                                createVNode(
                                  'div',
                                  {
                                    'data-aos': 'flip-up',
                                    'data-aos-easing': 'linear',
                                    'data-aos-duration': '500',
                                    class: 'service-content'
                                  },
                                  [
                                    createVNode(
                                      'img',
                                      {
                                        class: 'avatar',
                                        src: getIcon.value + 'seo2.png',
                                        alt: ''
                                      },
                                      null,
                                      8,
                                      ['src']
                                    ),
                                    createVNode('div', { class: 'content-block' }, [
                                      createVNode('h3', null, toDisplayString(service.title), 1),
                                      createVNode(
                                        'p',
                                        null,
                                        toDisplayString(service.description),
                                        1
                                      )
                                    ])
                                  ]
                                )
                              ])
                            ]
                          }
                        }),
                        _: 2
                      },
                      _parent2,
                      _scopeId
                    )
                  )
                })
                _push2(`<!--]-->`)
              } else {
                return [
                  (openBlock(true),
                  createBlock(
                    Fragment,
                    null,
                    renderList(props.services, (service, index) => {
                      return (
                        openBlock(),
                        createBlock(
                          unref(SwiperSlide),
                          { key: index },
                          {
                            default: withCtx(() => [
                              createVNode('div', { class: 'flex justify-center flex-wrap py-6' }, [
                                createVNode(
                                  'div',
                                  {
                                    'data-aos': 'flip-up',
                                    'data-aos-easing': 'linear',
                                    'data-aos-duration': '500',
                                    class: 'service-content'
                                  },
                                  [
                                    createVNode(
                                      'img',
                                      {
                                        class: 'avatar',
                                        src: getIcon.value + 'seo2.png',
                                        alt: ''
                                      },
                                      null,
                                      8,
                                      ['src']
                                    ),
                                    createVNode('div', { class: 'content-block' }, [
                                      createVNode('h3', null, toDisplayString(service.title), 1),
                                      createVNode(
                                        'p',
                                        null,
                                        toDisplayString(service.description),
                                        1
                                      )
                                    ])
                                  ]
                                )
                              ])
                            ]),
                            _: 2
                          },
                          1024
                        )
                      )
                    }),
                    128
                  ))
                ]
              }
            }),
            _: 1
          },
          _parent
        )
      )
      _push(`</div>`)
    }
  }
})
const _sfc_setup$a = _sfc_main$a.setup
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
    'components/service-part/ServiceContent.vue'
  )
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0
}
const ServiceContent = /* @__PURE__ */ _export_sfc(_sfc_main$a, [['__scopeId', 'data-v-ee4f8538']])
const homePageData = defineStore('homePageData', () => {
  const posts = reactive([])
  const reviews = reactive([])
  const services = reactive([])
  const projectInfo = reactive([])
  async function getPosts() {
    const result = await axios.get('https://node-and-mongo-project.herokuapp.com/api/posts')
    posts.push(...result.data)
    return posts
  }
  async function getReviews() {
    const result = await axios.get('https://node-and-mongo-project.herokuapp.com/api/reviews')
    reviews.push(...result.data)
    return reviews
  }
  async function getServices() {
    const result = await axios.get('https://node-and-mongo-project.herokuapp.com/api/services')
    services.push(...result.data)
    return services
  }
  async function getProjectInfo() {
    const result = await axios.get('https://node-and-mongo-project.herokuapp.com/api/projects')
    projectInfo.push(...result.data)
    return projectInfo
  }
  return {
    posts,
    reviews,
    services,
    projectInfo,
    getReviews,
    getPosts,
    getServices,
    getProjectInfo
  }
})
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: 'OurServices',
  __ssrInlineRender: true,
  setup(__props) {
    const homeData = homePageData()
    const services = reactive(toRaw(homeData.services))
    return (_ctx, _push, _parent, _attrs) => {
      _push(
        `<div${ssrRenderAttrs(
          mergeProps({ class: 'logs-block' }, _attrs)
        )} data-v-cfdff3f0><h2 data-v-cfdff3f0>\u041C\u044B \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u043C \u043B\u0443\u0447\u0448\u0438\u0435 \u0443\u0441\u043B\u0443\u0433\u0438</h2>`
      )
      _push(ssrRenderComponent(ServiceContent, { services }, null, _parent))
      _push(
        `<div class="flex justify-center" data-v-cfdff3f0><button class="see-more" data-v-cfdff3f0>\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432\u0441\u0435</button></div></div>`
      )
    }
  }
})
const _sfc_setup$9 = _sfc_main$9.setup
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
    'components/OurServices.vue'
  )
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0
}
const OurServices = /* @__PURE__ */ _export_sfc(_sfc_main$9, [['__scopeId', 'data-v-cfdff3f0']])
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: 'ReviewsBlock',
  __ssrInlineRender: true,
  setup(__props) {
    const homeData = homePageData()
    const reviews = reactive(toRaw(homeData.reviews))
    let activeIndex = ref(1)
    const getIcon = computed(() => {
      return '/'
    })
    return (_ctx, _push, _parent, _attrs) => {
      _push(
        `<div${ssrRenderAttrs(
          mergeProps({ class: 'bg' }, _attrs)
        )} data-v-b57351bd><img data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="1000"${ssrRenderAttr(
          'src',
          getIcon.value + 'Untitled-7.png'
        )} class="review-image" data-v-b57351bd><div class="flex flex-col gap-28 reviews-wrapper" data-v-b57351bd><h2 data-v-b57351bd>\u0427\u0442\u043E \u0433\u043E\u0432\u043E\u0440\u044F\u0442 \u043A\u043B\u0438\u0435\u043D\u0442\u044B</h2><div class="reviews-content" data-v-b57351bd><!--[-->`
      )
      ssrRenderList(reviews, (review, index) => {
        _push(
          `<div${ssrRenderAttr('data-pos', index - unref(activeIndex))} class="${ssrRenderClass([
            { carousel__item_active: index === unref(activeIndex) },
            'carousel__item'
          ])}" data-v-b57351bd><img${ssrRenderAttr(
            'src',
            getIcon.value + 'img_569204.png'
          )} class="avatar" data-v-b57351bd><h3 data-v-b57351bd>${ssrInterpolate(
            review.fullName
          )}</h3><p data-v-b57351bd>${ssrInterpolate(review.reviewText)}</p></div>`
        )
      })
      _push(`<!--]--></div></div></div>`)
    }
  }
})
const _sfc_setup$8 = _sfc_main$8.setup
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
    'components/ReviewsBlock.vue'
  )
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0
}
const ReviewsBlock = /* @__PURE__ */ _export_sfc(_sfc_main$8, [['__scopeId', 'data-v-b57351bd']])
const _imports_0 = '' + buildAssetsURL('seo-banner.1c01dfe8.png')
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: 'BannerHome',
  __ssrInlineRender: true,
  setup(__props) {
    let width = ref(1200)
    return (_ctx, _push, _parent, _attrs) => {
      _push(
        `<div${ssrRenderAttrs(
          mergeProps({ class: 'top-content' }, _attrs)
        )} data-v-6fb62504><div class="banner-content" data-v-6fb62504><h1 data-v-6fb62504>\u0423\u0432\u0435\u043B\u0438\u0447\u0438\u0432\u0430\u0439\u0442\u0435 \u043F\u043E\u0441\u0435\u0449\u0430\u0435\u043C\u043E\u0441\u0442\u044C \u0432\u0430\u0448\u0435\u0433\u043E \u0441\u0430\u0439\u0442\u0430 \u0432\u043C\u0435\u0441\u0442\u0435 \u0441 \u043D\u0430\u043C\u0438!</h1><p data-v-6fb62504>\u041A\u0430\u043A\u043E\u0439 \u0442\u043E \u0442\u0435\u043A\u0441\u0442</p><div class="flex justify-center" data-v-6fb62504><button class="banner-button" data-v-6fb62504>\u0417\u0430\u043A\u0430\u0437\u0442\u044C \u043F\u0440\u043E\u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435</button><button class="banner-button" data-v-6fb62504>\u0422\u0430\u0440\u0438\u0444\u044B</button></div></div><img data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="1000" class="${ssrRenderClass(
          {
            'image-banner': unref(width) > 1200,
            'image-banner-modile': unref(width) < 1200
          }
        )}"${ssrRenderAttr('src', _imports_0)} alt="" data-v-6fb62504></div>`
      )
    }
  }
})
const _sfc_setup$7 = _sfc_main$7.setup
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
    'components/BannerHome.vue'
  )
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0
}
const BannerHome = /* @__PURE__ */ _export_sfc(_sfc_main$7, [['__scopeId', 'data-v-6fb62504']])
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: 'SuccessFuture',
  __ssrInlineRender: true,
  setup(__props) {
    const getIcon = computed(() => {
      return '/'
    })
    return (_ctx, _push, _parent, _attrs) => {
      _push(
        `<div${ssrRenderAttrs(
          mergeProps({ class: 'bg' }, _attrs)
        )} data-v-c87a967b><img data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="1000"${ssrRenderAttr(
          'src',
          getIcon.value + 'Untitled-3.png'
        )} data-v-c87a967b><div class="flex flex-col gap-8" data-v-c87a967b><h2 data-v-c87a967b>\u041C\u044B \u0441\u043E\u0437\u0434\u0430\u0435\u043C \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0432\u0435\u0449\u0438 \u0434\u043B\u044F \u0432\u0430\u0448\u0435\u0433\u043E \u0443\u0441\u043F\u0435\u0445\u0430 \u0432 \u0431\u0443\u0434\u0443\u0449\u0435\u043C</h2><p data-v-c87a967b>\u041A\u0430\u043A\u043E\u0439 \u0442\u043E \u0442\u0435\u043A\u0441\u0442</p><button class="banner-button" data-v-c87a967b>\u0417\u0430\u043A\u0430\u0437\u0442\u044C</button></div></div>`
      )
    }
  }
})
const _sfc_setup$6 = _sfc_main$6.setup
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
    'components/SuccessFuture.vue'
  )
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0
}
const SuccessFuture = /* @__PURE__ */ _export_sfc(_sfc_main$6, [['__scopeId', 'data-v-c87a967b']])
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: 'CounterBlock',
  __ssrInlineRender: true,
  setup(__props) {
    let clientValue = ref(2)
    const getClientValue = computed(() => {
      return clientValue.value
    })
    return (_ctx, _push, _parent, _attrs) => {
      _push(
        `<div${ssrRenderAttrs(
          mergeProps({ class: 'bg' }, _attrs)
        )} data-v-49f253c6><div class="flex flex-col gap-4 items-center" data-v-49f253c6><p class="counter-value" data-v-49f253c6>${ssrInterpolate(
          getClientValue.value
        )}</p><p class="counter-text" data-v-49f253c6>\u041A\u043B\u0438\u0435\u043D\u0442\u044B</p></div><div class="flex flex-col gap-4 items-center" data-v-49f253c6><p class="counter-value" data-v-49f253c6>10</p><p class="counter-text" data-v-49f253c6>\u0427\u043B\u0435\u043D\u044B \u043A\u043E\u043C\u0430\u043D\u0442\u044B</p></div><div class="flex flex-col gap-4 items-center" data-v-49f253c6><p class="counter-value" data-v-49f253c6>5+</p><p class="counter-text" data-v-49f253c6>\u0421\u0442\u0440\u0430\u043D\u044B</p></div></div>`
      )
    }
  }
})
const _sfc_setup$5 = _sfc_main$5.setup
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
    'components/CounterBlock.vue'
  )
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0
}
const CounterBlock = /* @__PURE__ */ _export_sfc(_sfc_main$5, [['__scopeId', 'data-v-49f253c6']])
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: 'AnalyticsBock',
  __ssrInlineRender: true,
  setup(__props) {
    const getIcon = computed(() => {
      return '/'
    })
    return (_ctx, _push, _parent, _attrs) => {
      _push(
        `<div${ssrRenderAttrs(
          mergeProps({ class: 'bg' }, _attrs)
        )} data-v-e532636b><div class="flex flex-col gap-8" data-v-e532636b><h2 data-v-e532636b>\u0410\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0430 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0433\u043E \u0443\u0440\u043E\u0432\u043D\u044F \u0434\u043B\u044F \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0432\u0430\u0448\u0438\u043C \u0431\u0438\u0437\u043D\u0435\u0441\u043E\u043C</h2><p data-v-e532636b>\u041A\u0430\u043A\u043E\u0439 \u0442\u043E \u0442\u0435\u043A\u0441\u0442</p><button class="banner-button" data-v-e532636b>\u0417\u0430\u043A\u0430\u0437\u0442\u044C</button></div><img data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="1000"${ssrRenderAttr(
          'src',
          getIcon.value + 'Untitled-4.png'
        )} data-v-e532636b></div>`
      )
    }
  }
})
const _sfc_setup$4 = _sfc_main$4.setup
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
    'components/AnalyticsBock.vue'
  )
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0
}
const AnalyticsBock = /* @__PURE__ */ _export_sfc(_sfc_main$4, [['__scopeId', 'data-v-e532636b']])
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: 'WhyWe',
  __ssrInlineRender: true,
  setup(__props) {
    const getIcon = computed(() => {
      return '/'
    })
    return (_ctx, _push, _parent, _attrs) => {
      _push(
        `<div${ssrRenderAttrs(
          mergeProps({ class: 'bg' }, _attrs)
        )} data-v-b172ecb3><div class="flex flex-col gap-4 justify-center items-center flex-1" data-v-b172ecb3><img${ssrRenderAttr(
          'src',
          getIcon.value + '4151213.png'
        )} class="why-image" data-v-b172ecb3><p data-v-b172ecb3>\u0413\u0438\u0431\u043A\u0438\u0435 \u043F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430</p></div><div class="flex flex-col gap-4 justify-center items-center flex-1" data-v-b172ecb3><img${ssrRenderAttr(
          'src',
          getIcon.value + '4151213.png'
        )} class="why-image" data-v-b172ecb3><p data-v-b172ecb3>\u041A\u0440\u0443\u0433\u043B\u043E\u0441\u0443\u0442\u043E\u0447\u043D\u0430\u044F \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430</p></div><div class="flex flex-col gap-4 justify-center items-center flex-1" data-v-b172ecb3><img${ssrRenderAttr(
          'src',
          getIcon.value + '4151213.png'
        )} class="why-image" data-v-b172ecb3><p data-v-b172ecb3>100% \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C</p></div><div class="flex flex-col gap-4 justify-center items-center flex-1" data-v-b172ecb3><img${ssrRenderAttr(
          'src',
          getIcon.value + '4151213.png'
        )} class="why-image" data-v-b172ecb3><p data-v-b172ecb3>\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0439 \u0446\u0435\u043D\u043E\u0432\u043E\u0439 \u043F\u043B\u0430\u043D</p></div></div>`
      )
    }
  }
})
const _sfc_setup$3 = _sfc_main$3.setup
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
    'components/WhyWe.vue'
  )
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0
}
const WhyWe = /* @__PURE__ */ _export_sfc(_sfc_main$3, [['__scopeId', 'data-v-b172ecb3']])
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: 'ChartBar',
  __ssrInlineRender: true,
  props: {
    chartId: {
      type: String
    },
    datasetIdKey: {
      type: String
    },
    cssClasses: {
      type: String
    },
    styles: {
      type: Object
    },
    width: {
      type: Number
    },
    height: {
      type: Number,
      default: 80
    },
    selectedDataBar: {
      type: Object,
      default: void 0
    }
  },
  setup(__props) {
    const props = __props
    Chart.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
    const options = ref({
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          display: false
        },
        y: {
          display: false
        }
      },
      plugins: {
        legend: {
          display: false
        }
      }
    })
    return (_ctx, _push, _parent, _attrs) => {
      _push(
        ssrRenderComponent(
          unref(Bar),
          mergeProps(
            {
              data: props.selectedDataBar,
              options: options.value,
              'chart-id': props.chartId,
              'dataset-id-key': props.datasetIdKey,
              'css-classes': props.cssClasses,
              styles: props.styles,
              width: props.width,
              height: props.height
            },
            _attrs
          ),
          null,
          _parent
        )
      )
    }
  }
})
const _sfc_setup$2 = _sfc_main$2.setup
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
    'components/chart-bar/ChartBar.vue'
  )
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0
}
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: 'OurCases',
  __ssrInlineRender: true,
  setup(__props) {
    const modules = [Navigation, Pagination, Scrollbar, A11y]
    const homeData = homePageData()
    const projectInfo = reactive(toRaw(homeData.projectInfo))
    return (_ctx, _push, _parent, _attrs) => {
      _push(
        `<div${ssrRenderAttrs(
          mergeProps({ class: 'cases-wrapper' }, _attrs)
        )} data-v-81ddc400><h2 data-v-81ddc400>\u041D\u0430\u0448\u0438 \u043A\u0435\u0439\u0441\u044B</h2>`
      )
      _push(
        ssrRenderComponent(
          unref(Swiper),
          {
            modules,
            'slides-per-view': 2,
            navigation: '',
            pagination: { clickable: true }
          },
          {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<!--[-->`)
                ssrRenderList(projectInfo, (siteInfo, index) => {
                  _push2(
                    ssrRenderComponent(
                      unref(SwiperSlide),
                      { key: index },
                      {
                        default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                          if (_push3) {
                            _push3(
                              `<div class="cases-container" data-v-81ddc400${_scopeId2}><div class="site-info" data-v-81ddc400${_scopeId2}><div class="header-block" data-v-81ddc400${_scopeId2}><p data-v-81ddc400${_scopeId2}>${ssrInterpolate(
                                siteInfo.project_name
                              )}</p><p data-v-81ddc400${_scopeId2}>\u0427\u0430\u0441\u0442\u043E \u0442\u0430 \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u044F \u0437\u0430 12 \u043C\u0435\u0441\u044F\u0446\u0435\u0432</p><p data-v-81ddc400${_scopeId2}>${ssrInterpolate(
                                siteInfo.project_link
                              )}</p></div><div class="chart-container" data-v-81ddc400${_scopeId2}>`
                            )
                            _push3(
                              ssrRenderComponent(
                                _sfc_main$2,
                                {
                                  selectedDataBar: siteInfo.chart_data
                                },
                                null,
                                _parent3,
                                _scopeId2
                              )
                            )
                            _push3(
                              `</div><p data-v-81ddc400${_scopeId2}>0 -&gt; 2000</p><p data-v-81ddc400${_scopeId2}>0 -&gt; 200</p><button data-v-81ddc400${_scopeId2}>\u0425\u043E\u0447\u0443 \u0442\u0430\u043A \u0436\u0435</button></div></div>`
                            )
                          } else {
                            return [
                              createVNode('div', { class: 'cases-container' }, [
                                createVNode('div', { class: 'site-info' }, [
                                  createVNode('div', { class: 'header-block' }, [
                                    createVNode(
                                      'p',
                                      null,
                                      toDisplayString(siteInfo.project_name),
                                      1
                                    ),
                                    createVNode(
                                      'p',
                                      null,
                                      '\u0427\u0430\u0441\u0442\u043E \u0442\u0430 \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u044F \u0437\u0430 12 \u043C\u0435\u0441\u044F\u0446\u0435\u0432'
                                    ),
                                    createVNode(
                                      'p',
                                      null,
                                      toDisplayString(siteInfo.project_link),
                                      1
                                    )
                                  ]),
                                  createVNode('div', { class: 'chart-container' }, [
                                    createVNode(
                                      _sfc_main$2,
                                      {
                                        selectedDataBar: siteInfo.chart_data
                                      },
                                      null,
                                      8,
                                      ['selectedDataBar']
                                    )
                                  ]),
                                  createVNode('p', null, '0 -> 2000'),
                                  createVNode('p', null, '0 -> 200'),
                                  createVNode(
                                    'button',
                                    null,
                                    '\u0425\u043E\u0447\u0443 \u0442\u0430\u043A \u0436\u0435'
                                  )
                                ])
                              ])
                            ]
                          }
                        }),
                        _: 2
                      },
                      _parent2,
                      _scopeId
                    )
                  )
                })
                _push2(`<!--]-->`)
              } else {
                return [
                  (openBlock(true),
                  createBlock(
                    Fragment,
                    null,
                    renderList(projectInfo, (siteInfo, index) => {
                      return (
                        openBlock(),
                        createBlock(
                          unref(SwiperSlide),
                          { key: index },
                          {
                            default: withCtx(() => [
                              createVNode('div', { class: 'cases-container' }, [
                                createVNode('div', { class: 'site-info' }, [
                                  createVNode('div', { class: 'header-block' }, [
                                    createVNode(
                                      'p',
                                      null,
                                      toDisplayString(siteInfo.project_name),
                                      1
                                    ),
                                    createVNode(
                                      'p',
                                      null,
                                      '\u0427\u0430\u0441\u0442\u043E \u0442\u0430 \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u044F \u0437\u0430 12 \u043C\u0435\u0441\u044F\u0446\u0435\u0432'
                                    ),
                                    createVNode(
                                      'p',
                                      null,
                                      toDisplayString(siteInfo.project_link),
                                      1
                                    )
                                  ]),
                                  createVNode('div', { class: 'chart-container' }, [
                                    createVNode(
                                      _sfc_main$2,
                                      {
                                        selectedDataBar: siteInfo.chart_data
                                      },
                                      null,
                                      8,
                                      ['selectedDataBar']
                                    )
                                  ]),
                                  createVNode('p', null, '0 -> 2000'),
                                  createVNode('p', null, '0 -> 200'),
                                  createVNode(
                                    'button',
                                    null,
                                    '\u0425\u043E\u0447\u0443 \u0442\u0430\u043A \u0436\u0435'
                                  )
                                ])
                              ])
                            ]),
                            _: 2
                          },
                          1024
                        )
                      )
                    }),
                    128
                  ))
                ]
              }
            }),
            _: 1
          },
          _parent
        )
      )
      _push(`</div>`)
    }
  }
})
const _sfc_setup$1 = _sfc_main$1.setup
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
    'components/OurCases.vue'
  )
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0
}
const OurCases = /* @__PURE__ */ _export_sfc(_sfc_main$1, [['__scopeId', 'data-v-81ddc400']])
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: 'index',
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="text-center">`)
      _push(ssrRenderComponent(BannerHome, null, null, _parent))
      _push(`</div>`)
      _push(ssrRenderComponent(OurServices, null, null, _parent))
      _push(ssrRenderComponent(SuccessFuture, null, null, _parent))
      _push(ssrRenderComponent(CounterBlock, null, null, _parent))
      _push(ssrRenderComponent(AnalyticsBock, null, null, _parent))
      _push(ssrRenderComponent(OurCases, null, null, _parent))
      _push(ssrRenderComponent(WhyWe, null, null, _parent))
      _push(ssrRenderComponent(ReviewsBlock, null, null, _parent))
      _push(`<!--]-->`)
    }
  }
})
const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add('pages/index.vue')
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0
}

export { _sfc_main as default }
//# sourceMappingURL=index-44be4928.mjs.map
