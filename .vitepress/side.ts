import { DefaultTheme } from 'vitepress';


const getAndroidSide = (): Array<DefaultTheme.SidebarItem> => {
  return [
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

const sides: DefaultTheme.SidebarMulti = {
  '/android/': getAndroidSide(),
  '/web/': getWebSide(),
  '/tools/': getToolsSide()
}


export default sides