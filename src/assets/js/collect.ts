import Mock from 'mockjs'
export default [
    {
        id: Mock.mock('@guid'),
        icon: 'home',
        menuName: '前端框架',
        cardList: [
            {
                icon: '/src/assets/img/home/vue.svg',
                cardName: 'Vue 2.x',
                synopsis: '渐进式 JavaScript 框架, 基于标准 HTML、CSS 和 JavaScript 构建，提供容易上手的 API 和一流的文档。经过编译器优化、完全响应式的渲染系统，几乎不需要手动优化。丰富的、可渐进式集成的生态系统，可以根据应用规模在库和框架间切换自如。',
                url: 'https://cn.vuejs.org/'
            },
            {
                icon: '/src/assets/img/home/vue.svg',
                cardName: 'Vue 3.x',
                synopsis: '渐进式 JavaScript 框架, 基于标准 HTML、CSS 和 JavaScript 构建，提供容易上手的 API 和一流的文档。经过编译器优化、完全响应式的渲染系统，几乎不需要手动优化。丰富的、可渐进式集成的生态系统，可以根据应用规模在库和框架间切换自如。',
                url: 'https://cn.vuejs.org/'
            },
            {
                icon: '/src/assets/img/home/react.svg',
                cardName: 'React',
                synopsis: 'React 用于构建用户界面的 JavaScript 库。React 使创建交互式 UI 变得轻而易举。为你应用的每一个状态设计简洁的视图，当数据变动时 React 能高效更新并渲染合适的组件。构建管理自身状态的封装组件，然后对其组合以构成复杂的 UI。无论你现在使用什么技术栈，在无需重写现有代码的前提下，通过引入 React 来开发新功能。',
                url: 'https://zh-hans.reactjs.org/'
            },
            {
                icon: '/src/assets/img/home/angular.svg',
                cardName: 'Angular',
                synopsis: '现代 Web开发人员的平台,学习一种使用 Angular 构建应用程序的方法，并重用您的代码和能力来为任何部署目标构建应用程序。适用于 Web、移动 Web、本机移动和本机桌面。',
                url: 'https://angular.io/'
            },
            {
                icon: '/src/assets/img/home/svelte.svg',
                cardName: 'Svelte',
                synopsis: 'Svelte 是一种构建用户界面的全新方法。传统框架（如 React 和 Vue）在浏览器中完成大部分工作，而 Svelte 将这些工作转移到构建应用程序时发生的编译步骤。Svelte 没有使用虚拟 DOM diffing 之类的技术，而是编写了在应用程序状态发生变化时以手术方式更新 DOM 的代码。',
                url: 'https://svelte.dev/'
            },
            {
                icon: '/src/assets/img/home/uni-app.svg',
                cardName: 'uni-app',
                synopsis: 'uni-app 是一个使用 Vue.js 开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、Web（响应式）、以及各种小程序（微信/支付宝/百度/头条/飞书/QQ/快手/钉钉/淘宝）、快应用等多个平台。',
                url: 'https://uniapp.dcloud.net.cn'
            },
        ]
    },
    {
        id: Mock.mock('@guid'),
        icon: 'lt-redux-store',
        menuName: '状态管理',
        cardList: [
            {
                icon: '/src/assets/img/home/vuex.svg',
                cardName: 'Vuex',
                synopsis: 'Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式 + 库。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。',
                url: 'https://vuex.vuejs.org/zh/'
            },
            {
                icon: '/src/assets/img/home/pinia.svg',
                cardName: 'Pinia',
                synopsis: '您将喜欢使用的 Vue 存储库。',
                url: 'https://pinia.web3doc.top/'
            },
            {
                icon: '/src/assets/img/home/redux.svg',
                cardName: 'Redux',
                synopsis: 'Redux 是 JavaScript 应用程序的可预测状态容器。它可以帮助您编写行为一致、在不同环境（客户端、服务器和本机）中运行并且易于测试的应用程序。最重要的是，它提供了出色的开发人员体验。',
                url: 'https://redux.js.org/'
            }
        ]
    },
    {
        id: Mock.mock('@guid'),
        icon: 'lt-redux-store',
        menuName: '依赖管理',
        cardList: [
            {
                icon: '/src/assets/img/home/npm.svg',
                cardName: 'NPM',
                synopsis: 'npm 是世界上最大的软件注册表。来自各大洲的开源开发人员使用 npm 来共享和借用包，许多组织也使用 npm 来管理私人开发。',
                url: 'https://www.npmjs.com/'
            },
            {
                icon: '/src/assets/img/home/yarn.svg',
                cardName: 'Yarn',
                synopsis: 'Yarn 是一个包管理器，兼任项目经理。无论您是从事一次性项目还是大型 monorepos，无论是业余爱好者还是企业用户，我们都能满足您的需求。',
                url: 'https://yarn.nodejs.cn/'
            },
            {
                icon: '/src/assets/img/home/pnpm.svg',
                cardName: 'Pnpm',
                synopsis: 'pnpm 比其他包管理器快 2 倍,node_modules 中的文件从单个内容可寻址存储中克隆或硬链接,pnpm 内置支持单仓多包,pnpm 默认创建了一个非平铺的 node_modules，因此代码无法访问任意包',
                url: 'https://pnpm.io/zh/'
            },
        ]
    },
    {
        id: Mock.mock('@guid'),
        icon: 'lt-redux-store',
        menuName: '构建工具',
        cardList: [
            {
                icon: '/src/assets/img/home/webpack.svg',
                cardName: 'Webpack',
                synopsis: 'webpack是一个用于应用程序的现代 JavaScript模块打包工具。当 webpack 处理应用程序时，它会在内部从一个或多个入口点构建一个依赖图（依赖图），然后将你的项目中将它们的每个模块组合成一个或多个组件，包含多个内容，用于展示你的多个资源。',
                url: 'https://webpack.docschina.org/'
            },
            {
                icon: '/src/assets/img/home/vite.svg',
                cardName: 'Vite',
                synopsis: 'Vite 下一代的前端工具链,为开发提供极速响应。使用原生 ESM 文件，无需打包! 无论应用程序大小如何，都始终极快的模块热替换（HMR）。对 TypeScript、JSX、CSS 等支持开箱即用。',
                url: 'https://cn.vitejs.dev/'
            },
            {
                icon: '/src/assets/img/home/rollup.svg',
                cardName: 'Rollup',
                synopsis: 'rollup.js 是 JavaScript 模块打包器，将多个小块代码编译成更大更复杂的库或应用',
                url: 'https://rollup.nodejs.cn'
            },
        ]
    },
    {
        id: Mock.mock('@guid'),
        icon: 'lt-redux-store',
        menuName: 'javascript库',
        cardList: [
            {
                icon: '/src/assets/img/home/jquery.svg',
                cardName: 'jQuery',
                synopsis: 'jQuery 是一个快速、小型且功能丰富的 JavaScript 库。它使 HTML 文档遍历和操作、事件处理、动画和 Ajax 之类的事情变得更加简单，它具有易于使用的 API，可在多种浏览器中工作。',
                url: 'https://jquery.com/'
            },
            {
                icon: '/src/assets/img/home/lodash.svg',
                cardName: 'Lodash',
                synopsis: 'Lodash 是一个一致性、模块化、高性能的 JavaScript 实用工具库。',
                url: 'https://www.lodashjs.com/'
            },
            {
                icon: '/src/assets/img/home/typescript.svg',
                cardName: 'TypeScript',
                synopsis: 'TypeScript 是一种基于 JavaScript 的强类型编程语言，可为您提供任何规模的更好的工具。',
                url: 'https://www.typescriptlang.org/zh/'
            },
            {
                icon: '/src/assets/img/home/babel.svg',
                cardName: 'Babel',
                synopsis: 'Babel 是一个 JavaScript 编译器，主要用于将采用 ECMAScript 2015+ 语法编写的代码转换为向后兼容的 JavaScript 语法，以便能够运行在当前和旧版本的浏览器或其他环境中。',
                url: 'https://www.babeljs.cn/docs/index.html'
            },
            {
                icon: '/src/assets/img/home/axios.svg',
                cardName: 'Axios',
                synopsis: 'Axios 是一个简单的基于 Promise 的 HTTP 客户端，用于浏览器和 node.js。Axios 在一个小包中提供了一个简单易用的库，具有非常可扩展的接口。',
                url: 'https://javasoho.com/axios/index.html'
            },
            {
                icon: '/src/assets/img/home/mock.svg',
                cardName: 'Mock.js',
                synopsis: '生成随机数据，拦截 Ajax 请求。',
                url: 'https://www.lodashjs.com/'
            },
            {
                icon: '/src/assets/img/home/moment.svg',
                cardName: 'Moment.js',
                synopsis: 'Moment.js 是一个用于解析、校验、操作、显示日期和时间的 JavaScript 工具库。',
                url: 'https://momentjs.bootcss.com/'
            },
            {
                icon: '/src/assets/img/home/dayjs.png',
                cardName: 'Day.js',
                synopsis: 'Day.js是一个极简的JavaScript库，可以为现代浏览器解析、验证、操作和显示日期和时间。',
                url: 'https://dayjs.fenxianglu.cn/'
            },
            {
                icon: '/src/assets/img/home/bmap.png',
                cardName: '百度地图',
                synopsis: '百度地图API是一套为开发者提供的基于百度地图的应用程序接口，包括JavaScript、iOS、Andriod、静态地图、Web服务等多种版本，提供基本地图、位置搜索、周边搜索、公交驾车导航、定位服务、地理编码及逆地理编码等丰富功能。LBS·云是百度地图针对LBS开发者全新推出的平台级服务。通过地图API，一方面解决移动开发者服务器端日益增长的海量位置数据的存储维护压力，另一方面彻底解决所有LBS开发者基于位置数据的高并发检索瓶颈。',
                url: 'https://leafletjs.com/'
            },
            {
                icon: '/src/assets/img/home/echarts.png',
                cardName: 'Echarts',
                synopsis: '一个基于 JavaScript 的开源可视化图表库\n',
                url: 'https://echarts.apache.org/zh/index.html'
            },
        ]
    },
    {
        id: Mock.mock('@guid'),
        icon: 'lt-redux-store',
        menuName: 'UI框架',
        cardList: [
            {
                icon: '/src/assets/img/home/bootstrap.svg',
                cardName: 'Bootstrap',
                synopsis: '使用 Bootstrap 构建快速响应的网站。功能强大、可扩展且功能丰富的前端工具包。使用 Sass 构建和自定义，利用预构建的网格系统和组件，并使用强大的 JavaScript 插件使项目栩栩如生。',
                url: 'https://getbootstrap.com/'
            },
            {
                icon: '/src/assets/img/home/antd.svg',
                cardName: 'Ant Design of React',
                synopsis: 'Ant Design of React 是基于 Ant Design 设计体系的 React UI 组件库，主要用于研发企业级中后台产品。',
                url: 'https://ant.design/index-cn'
            },
            {
                icon: '/src/assets/img/home/materialui.svg',
                cardName: 'Material UI',
                synopsis: 'Material UI 是一个开源的 React 组件库，它实现了 Google 的Material Design。它包括全面的预构建组件集合，开箱即可用于生产。Material UI 设计精美，并具有一套自定义选项，可以轻松在我们的组件之上实现您自己的自定义设计系统。',
                url: 'https://mui.com/zh/'
            },
            {
                icon: '/src/assets/img/home/antVue.svg',
                cardName: 'Ant Design Vue',
                synopsis: 'ant-design-vue 为 Web 应用提供了丰富的基础 UI 组件，我们还将持续探索企业级应用的最佳 UI 实践。',
                url: 'https://www.antdv.com/docs/vue/introduce-cn'
            },
            {
                icon: '/src/assets/img/home/eleme.svg',
                cardName: 'Element',
                synopsis: 'Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库',
                url: 'https://element.eleme.cn/#/zh-CN'
            },
            {
                icon: '/src/assets/img/home/eleme.svg',
                cardName: 'Element Plus',
                synopsis: 'Element Plus 基于 Vue 3，面向设计师和开发者的组件库',
                url: 'https://element-plus.org/zh-CN/#/zh-CN'
            },
            {
                icon: '/src/assets/img/home/iview.svg',
                cardName: 'View Design',
                synopsis: 'View UI Plus 是 View Design 设计体系中基于 Vue.js 3 的一套 UI 组件库，主要用于企业级中后台系统。',
                url: 'https://www.iviewui.com/view-ui-plus/guide/introduce'
            },
            {
                icon: '/src/assets/img/home/vant.png',
                cardName: 'Vant 2',
                synopsis: 'Vant 是一个轻量、可靠的移动端组件库',
                url: 'https://vant-contrib.gitee.io/vant/v2/#/zh-CN/'
            },
            {
                icon: '/src/assets/img/home/vant.png',
                cardName: 'Vant 3',
                synopsis: 'Vant 是一个轻量、可靠的移动端组件库',
                url: 'https://vant-contrib.gitee.io/vant/#/zh-CN/home'
            },
        ]
    },
    {
        id: Mock.mock('@guid'),
        icon: 'lt-redux-store',
        menuName: 'CSS相关',
        cardList: [
            {
                icon: '/src/assets/img/home/postcss.svg',
                cardName: 'PostCSS',
                synopsis: 'PostCSS 是一个用 JavaScript 工具和插件转换 CSS 代码的工具',
                url: 'https://www.postcss.com.cn/'
            },
            {
                icon: '/src/assets/img/home/less.svg',
                cardName: 'Less',
                synopsis: 'Less 是一门 CSS 预处理语言，它扩展了 CSS 语言，增加了变量、Mixin、函数等特性，使 CSS 更易维护和扩展。Less 可以运行在 Node 或浏览器端。',
                url: 'https://lesscss.org/'
            },
            {
                icon: '/src/assets/img/home/sass.svg',
                cardName: 'Sass',
                synopsis: 'Sass 世界上最成熟、最稳定、最强大的专业级CSS扩展语言！',
                url: 'https://www.sass.hk/'
            },
            {
                icon: '/src/assets/img/home/tailwindcss.svg',
                cardName: 'tailwindcss',
                synopsis: 'Tailwind CSS 是一个功能类优先的 CSS 框架，它集成了诸如 flex, pt-4, text-center 和 rotate-90 这样的的类，它们能直接在脚本标记语言中组合起来，构建出任何设计。',
                url: 'https://www.tailwindcss.cn/'
            },
            {
                icon: '/src/assets/img/home/animate.svg',
                cardName: 'animate.css',
                synopsis: 'animate.css是一个使用CSS3的animation制作的动画效果的CSS集合，里面预设了很多种常用的动画，且使用非常简单。',
                url: 'https://animate.style/'
            },
            {
                icon: '/src/assets/img/home/AniCollection.png',
                cardName: 'AniCollection',
                synopsis: '编码人员和设计师之间更好的集成。易于使用开发速度，在 iPad、iPhone、Android 和现代浏览器中运行良好。',
                url: 'http://anicollection.github.io/#/'
            },
            {
                icon: '/src/assets/img/home/shake.svg',
                cardName: 'CSShake',
                synopsis: 'Some CSS classes to move your DOM!',
                url: 'http://elrumordelaluz.github.io/csshake/'
            },
            {
                icon: '/src/assets/img/home/hover.svg',
                cardName: 'Hover.css',
                synopsis: '一组 CSS3 驱动的悬停效果，可应用于链接、按钮、徽标、SVG、特色图像等。轻松应用于您自己的元素、修改或仅用于灵感。在 CSS、Sass 和 LESS 中可用。',
                url: 'http://ianlunn.github.io/Hover/'
            },
            {
                icon: '/src/assets/img/home/animista.png',
                cardName: 'animista',
                synopsis: 'Animista 是一个 CSS 动画库，您可以在其中播放一系列现成的 CSS 动画并仅下载您将使用的动画。',
                url: 'https://animista.net/'
            },
            {
                icon: '/src/assets/img/home/animista.png',
                cardName: 'animista',
                synopsis: 'Animista 是一个 CSS 动画库，您可以在其中播放一系列现成的 CSS 动画并仅下载您将使用的动画。',
                url: 'https://animista.net/'
            },
            {
                icon: '/src/assets/img/home/unocss.svg',
                cardName: 'UnoCss',
                synopsis: 'UnoCss 即时按需原子 CSS 引擎，可定制 ·强大 ·快速 ·快乐',
                url: 'https://unocss.dev'
            },
        ]
    },
    {
        id: Mock.mock('@guid'),
        icon: 'lt-redux-store',
        menuName: '配色方案',
        cardList: [
            {
                icon: '/src/assets/img/home/color-space.gif',
                cardName: 'ColorSpace',
                synopsis: '只需输入一个颜色，就能生成漂亮的颜色调色板。',
                url: 'https://mycolor.space/'
            },
            {
                icon: '/src/assets/img/home/uigradients.jpg',
                cardName: '漂亮的渐变颜色',
                synopsis: '今年流行的渐变！点击屏幕两侧按钮可选更多色彩',
                url: 'https://uigradients.com'
            },
            {
                icon: '/src/assets/img/home/chinaColor.png',
                cardName: '中国色',
                synopsis: '提供各种中国的传统颜色的名称，CMYK值，RGB值，16进制表示。',
                url: 'http://zhongguose.com/'
            },
            {
                icon: '/src/assets/img/home/pigment.gif',
                cardName: 'Pigment',
                synopsis: '一种独特的方式，可以根据光线和颜料生成清新鲜艳的色彩，而不是数学。在几秒钟内找到一个美丽的免费调色板，开始您的下一个项目。',
                url: 'https://pigment.shapefactory.co/'
            },
        ]
    },
    {
        id: Mock.mock('@guid'),
        icon: 'lt-redux-store',
        menuName: '矢量图标',
        cardList: [
            {
                icon: '/src/assets/img/home/iconfont.png',
                cardName: '阿里矢量图标库',
                synopsis: '国内最著名的图标搜索及管理平台，300万个图标下载',
                url: 'https://www.iconfont.cn/'
            },
            {
                icon: '/src/assets/img/home/iconpark.png',
                cardName: 'IconPark字节跳动图标库',
                synopsis: '字节跳动旗下开源图标库，IconPark图标库是一个通过技术驱动矢量图标样式的开源图标库',
                url: 'https://iconpark.oceanengine.com'
            },
            {
                icon: '/src/assets/img/home/undraw.jpg',
                cardName: 'Undraw',
                synopsis: 'Undraw为你提供了一系列免费的插画素材库，你可以随时将这些插画作品用在你的设计当中。',
                url: 'https://undraw.co/illustrations'
            },
            {
                icon: '/src/assets/img/home/font.svg',
                cardName: ' Font Awesome',
                synopsis: '一套绝佳的图标字体库和CSS框架',
                url: 'https://fontawesome.dashgame.com/'
            },
        ]
    },
    {
        id: Mock.mock('@guid'),
        icon: 'lt-redux-store',
        menuName: '编程相关',
        cardList: [
            {
                icon: '/src/assets/img/home/es6.jpg',
                cardName: 'ECMAScript 6 入门',
                synopsis: '《ECMAScript 6 入门教程》是一本开源的 JavaScript 语言教程，全面介绍 ECMAScript 6 新引入的语法特性。',
                url: 'https://es6.ruanyifeng.com/'
            },
            {
                icon: '/src/assets/img/home/codepen.svg',
                cardName: 'CodePen',
                synopsis: '一款前端所见即所得的工具，我们可以在线编辑制作前端页面，所见即所得。同时网站提供所有常见的 js、css 库，并且支持流行技术（如 SASS），免去了我们自建平台的麻烦。',
                url: 'https://codepen.io/'
            },
            {
                icon: '/src/assets/img/home/gitee.svg',
                cardName: 'Gitee',
                synopsis: 'Gitee.com（码云） 是 OSCHINA.NET 推出的代码托管平台，支持 Git 和 SVN，提供免费的私有仓库托管。目前已有超过 800 万的开发者选择 Gitee。',
                url: 'https://gitee.com/'
            },
            // {
            //     icon: '/src/assets/img/home/mastergo.png',
            //     cardName: 'MasterGo',
            //     synopsis: '在线产品原型图设计',
            //     url: 'https://mastergo.com/'
            // },
            // {
            //     icon: '/src/assets/img/home/wanji.jpg',
            //     cardName: '玩机手册',
            //     synopsis: '软件SOS官方网站,整合软件安装教程：Office、PS、PR、AE、C4D、Axure、CAD、3DMax等常用办公、平面设计、室内设计软件等商业软件激活,提供Windows和Mac版本免费下载资源、安装使用教程分享。',
            //     url: 'https://www.rjsos.com/'
            // },
        ]
    },
    {
        id: Mock.mock('@guid'),
        icon: 'lt-redux-store',
        menuName: '其他收录',
        cardList: [
            {
                icon: '/src/assets/img/home/zcool.jpg',
                cardName: '站酷',
                synopsis: '综合性设计分享网站，原创设计交流平台',
                url: 'https://www.zcool.com.cn/'
            },
            {
                icon: '/src/assets/img/home/huaban.svg',
                cardName: '花瓣网',
                synopsis: '采集你喜欢的美好事物，发现新知，启发设计灵感',
                url: 'https://huaban.com/'
            },
            {
                icon: '/src/assets/img/home/biaoxiaozhi.jpg',
                cardName: '标小智',
                synopsis: '人工智能为您在线LOGO设计，生成企业VI，打造个性品牌！',
                url: 'https://www.logosc.cn/'
            },
            {
                icon: '/src/assets/img/home/mastergo.png',
                cardName: 'MasterGo',
                synopsis: '在线产品原型图设计',
                url: 'https://mastergo.com/'
            },
            {
                icon:'/src/assets/img/home/wanji.jpg',
                cardName: '玩机手册',
                synopsis: '软件SOS官方网站,整合软件安装教程：Office、PS、PR、AE、C4D、Axure、CAD、3DMax等常用办公、平面设计、室内设计软件等商业软件激活,提供Windows和Mac版本免费下载资源、安装使用教程分享。',
                url: 'https://www.rjsos.com/'
            },
        ]
    },
]
