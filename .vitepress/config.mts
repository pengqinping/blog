import { defineConfig } from 'vitepress'
import navs from './nav'
import sides from './side'
const TAG = '[Config]'

/**
 * base 规则：
 *  1. node_env === development : '/'
 *  2. node_env === production : github --> '/blog/' 默认部署 github ,如果部署其他场景需要自己判断
 * @returns 
 */
const getBaseUrl = () => {
  const isRelease = process.env.NODE_ENV === 'production'
  return isRelease ? "/blog/" : '/'
}

// https://vitepress.dev/reference/site-config
console.log(TAG, '[init]', process.env.NODE_ENV)
export default defineConfig({
  title: "Royal",
  description: "Royal record coding",

  base: getBaseUrl(),
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: navs,
    sidebar: sides,
    outline: [0, 3],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/pengqinping/blog' },
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})

