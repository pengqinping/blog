import { DefaultTheme } from 'vitepress';


const getAndroidSide = (): Array<DefaultTheme.SidebarItem> => {
  return [
    {
      text: '版本兼容',
      collapsed: true,
      base: '/android/版本兼容/',
      items: [
        {
          text: '【Android】针对非 SDK 接口的限制',
          link: '【Android】针对非 SDK 接口的限制.md'
        }
      ]
    },
    {
      text: 'Jetpack',
      base: '/android/jetpack/',
      collapsed: true,
      items: [
        {
          text: 'ViewModel',
          link: 'ViewModel.md'
        },
        {
          text: 'LiveData',
          link: 'LiveData.md'
        },
        {
          text: 'Paging',
          link: 'Paging.md'
        },
        {
          text: 'ViewBinding',
          link: 'ViewBinding.md'
        }
      ]
    },
    {
      text: '开源项目',
      collapsed: true,
      base: '/android/project/',
      items: [
        {
          text: 'EventBus',
          link: 'eventbus.md'
        },
        {
          text: 'Butterknife',
          link: 'butterknife840.md'
        },
        {
          text: 'GreenDao',
          link: 'greendao3.md'
        },
        {
          text: 'LeakCanary',
          link: 'LeakCanary.md'
        }
      ]
    },
    {
      text: '组件',
      collapsed: true,
      base: '/android/view/',
      items: [
        {
          text: 'BgButton',
          link: 'android-view-download-progress-with-text.md'
        }
      ]
    }
  ]
}

const getWebSide = (): Array<DefaultTheme.SidebarItem> => {
  return [
    {
      text: '构建工具',
      base: '/web/build/',
      collapsed: true,
      items: [
        {
          text: 'Grunt',
          link: 'grunt.md'
        }
      ]
    }
  ]
}

const getToolsSide = (): Array<DefaultTheme.SidebarItem> => {
  return [
    {
      text: 'Git',
      link: '/tools/git.md'
    },
    {
      text: '软件',
      link: '/tools/Software.md'
    },
    {
      text: '静态工具',
      base: '/tools/doc/',
      collapsed: true,
      items: [
        {
          text: 'Markdown',
          link: 'Markdown语法.md'
        },
        {
          text: 'Jekyll',
          link: 'Jekyll博客转Hexo实践.md'
        },
        {
          text: 'Mkdocs',
          link: 'Mkdocs.md'
        },
        {
          text: 'VuePress',
          link: 'Vuepress.md'
        }
      ]
    }
  ]
}

const getAndroidSystemSide = (): Array<DefaultTheme.SidebarItem> => {
  return [
    {
      text: '导读',
      base: '/AndroidSystem/',
      items: [
        {
          text: '专栏首页',
          link: 'index.md'
        },
        {
          text: '00 总览与知识地图',
          link: '00-总览与知识地图/00-总览与知识地图.md'
        }
      ]
    },
    {
      text: '进程与 Binder',
      base: '/AndroidSystem/',
      collapsed: true,
      items: [
        {
          text: '01 Zygote 与 system_server',
          link: '01-Zygote与system_server/01-Zygote与system_server.md'
        },
        {
          text: '02 Binder（上）：一次 IPC 的完整旅程',
          link: '02-Binder上-一次IPC的完整旅程/02-Binder上-一次IPC的完整旅程.md'
        },
        {
          text: '03 Binder（下）：Java 层与 AIDL',
          link: '03-Binder下-Java层与AIDL/03-Binder下-Java层与AIDL.md'
        }
      ]
    },
    {
      text: 'Context',
      base: '/AndroidSystem/',
      collapsed: true,
      items: [
        {
          text: '04 继承体系与创建时机',
          link: '04-Context上-继承体系与创建时机/04-Context上-继承体系与创建时机.md'
        },
        {
          text: '05 服务路由与陷阱',
          link: '05-Context下-服务路由与陷阱/05-Context下-服务路由与陷阱.md'
        }
      ]
    },
    {
      text: 'AMS',
      base: '/AndroidSystem/',
      collapsed: true,
      items: [
        {
          text: '06 进程优先级与查杀',
          link: '06-AMS-进程优先级与查杀/06-AMS-进程优先级与查杀.md'
        },
        {
          text: '07 Activity 启动之旅',
          link: '07-AMS-Activity启动之旅/07-AMS-Activity启动之旅.md'
        },
        {
          text: '08 生命周期事务化',
          link: '08-AMS-生命周期事务化/08-AMS-生命周期事务化.md'
        },
        {
          text: '09 Service 与广播调度',
          link: '09-AMS-Service与广播调度/09-AMS-Service与广播调度.md'
        }
      ]
    },
    {
      text: 'WMS 与 UI',
      base: '/AndroidSystem/',
      collapsed: true,
      items: [
        {
          text: '10 窗口的本质与 addWindow',
          link: '10-WMS-窗口的本质与addWindow/10-WMS-窗口的本质与addWindow.md'
        },
        {
          text: '11 Surface 渲染管线',
          link: '11-WMS-Surface渲染管线/11-WMS-Surface渲染管线.md'
        },
        {
          text: '12 ViewRootImpl：UI 系统的枢纽',
          link: '12-ViewRootImpl-UI系统的枢纽/12-ViewRootImpl-UI系统的枢纽.md'
        },
        {
          text: '13 窗口实战：四类弹层',
          link: '13-窗口实战-四类弹层/13-窗口实战-四类弹层.md'
        }
      ]
    },
    {
      text: '事件系统',
      base: '/AndroidSystem/',
      collapsed: true,
      items: [
        {
          text: '14 输入事件之旅',
          link: '14-事件系统上-输入事件之旅/14-事件系统上-输入事件之旅.md'
        },
        {
          text: '15 分发链与 ANR',
          link: '15-事件系统下-分发链与ANR/15-事件系统下-分发链与ANR.md'
        }
      ]
    },
    {
      text: 'PMS',
      base: '/AndroidSystem/',
      collapsed: true,
      items: [
        {
          text: '16 APK 安装全流程',
          link: '16-PMS-APK安装全流程/16-PMS-APK安装全流程.md'
        },
        {
          text: '17 解析与权限体系',
          link: '17-PMS-解析与权限体系/17-PMS-解析与权限体系.md'
        }
      ]
    },
    {
      text: '贯通复盘',
      base: '/AndroidSystem/',
      collapsed: true,
      items: [
        {
          text: '18 冷启动全链路',
          link: '18-贯通复盘-冷启动全链路/18-贯通复盘-冷启动全链路.md'
        },
        {
          text: '19 ANR 全景与排查',
          link: '19-贯通复盘-ANR全景与排查/19-贯通复盘-ANR全景与排查.md'
        }
      ]
    },
    {
      text: '其他',
      base: '/AndroidSystem/',
      collapsed: true,
      items: [
        {
          text: 'Android源码-Logger日志系统',
          link: 'Android源码-Logger日志系统.md'
        }
      ]
    }
  ]
}

const getJsTsSide = (): Array<DefaultTheme.SidebarItem> => {
  return [
    {
      text: 'JS·TS 深入系列',
      base: '/Js-Ts/',
      items: [
        {
          text: '00 导读与知识地图',
          link: '00-导读-知识地图与学习方法.md'
        },
        {
          text: '01 执行上下文与调用栈',
          link: '01-执行上下文与调用栈.md'
        },
        {
          text: '02 事件循环与宏微任务',
          link: '02-事件循环与宏微任务.md'
        },
        {
          text: '03 闭包的底层实现与内存模型',
          link: '03-闭包的底层实现与内存模型.md'
        },
        {
          text: '04 原型链与继承',
          link: '04-原型链与继承.md'
        },
        {
          text: '05 this 绑定与手写 call/apply/bind',
          link: '05-this绑定与手写call-apply-bind.md'
        },
        {
          text: '06 手写 Promise 源码',
          link: '06-手写Promise源码.md'
        },
        {
          text: '07 async/await 与生成器原理',
          link: '07-async-await与生成器原理.md'
        },
        {
          text: '08 手写高频工具函数',
          link: '08-手写高频工具函数.md'
        },
        {
          text: '09 TS 类型系统与工具类型源码',
          link: '09-TS类型系统与工具类型源码.md'
        },
        {
          text: '10 类型体操方法论',
          link: '10-类型体操方法论.md'
        },
        {
          text: '11 TS 编译器架构',
          link: '11-TS编译器架构.md'
        },
        {
          text: '12 面试题精编与知识收束',
          link: '12-面试题精编与知识收束.md'
        }
      ]
    }
  ]
}

const getVue3Side = (): Array<DefaultTheme.SidebarItem> => {
  return [
    {
      text: '总览',
      base: '/Vue3/articles/',
      items: [
        {
          text: '00 一张地图看懂全貌',
          link: '00-vue3-架构全景.md'
        }
      ]
    },
    {
      text: '响应式系统',
      base: '/Vue3/articles/',
      collapsed: true,
      items: [
        {
          text: '01 Proxy 响应式的地基',
          link: '01-reactive-proxy.md'
        },
        {
          text: '02 effect 与依赖收集的心脏',
          link: '02-effect-deps.md'
        },
        {
          text: '03 ref/computed 缓存真相',
          link: '03-ref-computed.md'
        },
        {
          text: '04 watch 与调度器',
          link: '04-watch-scheduler.md'
        }
      ]
    },
    {
      text: '编译器与渲染器',
      base: '/Vue3/articles/',
      collapsed: true,
      items: [
        {
          text: '05 编译器三步走：模板变函数',
          link: '05-compiler-pipeline.md'
        },
        {
          text: '06 patchFlag 与 Block',
          link: '06-compile-optimize.md'
        },
        {
          text: '07 渲染器 patch 全流程',
          link: '07-renderer-patch.md'
        },
        {
          text: '08 diff 算法与最长递增子序列',
          link: '08-diff-lis.md'
        }
      ]
    },
    {
      text: '组件与收官',
      base: '/Vue3/articles/',
      collapsed: true,
      items: [
        {
          text: '09 setup 与生命周期的真相',
          link: '09-component-lifecycle.md'
        },
        {
          text: '10 KeepAlive LRU 缓存',
          link: '10-built-in-components.md'
        },
        {
          text: '11 性能优化清单与面试考点汇总',
          link: '11-performance-summary.md'
        }
      ]
    }
  ]
}

const getAgentSide = (): Array<DefaultTheme.SidebarItem> => {
  return [
    {
      text: 'Noodle',
      base: '/Agent/Noodle/',
      items: [
        {
          text: '上手实录：让 AI Agent 自己排队干活',
          link: 'noodle-上手实录.md'
        }
      ]
    }
  ]
}

const sides: DefaultTheme.SidebarMulti = {
  '/android/': getAndroidSide(),
  '/web/': getWebSide(),
  '/tools/': getToolsSide(),
  '/AndroidSystem/': getAndroidSystemSide(),
  '/Js-Ts/': getJsTsSide(),
  '/Vue3/': getVue3Side(),
  '/Agent/': getAgentSide()
}


export default sides