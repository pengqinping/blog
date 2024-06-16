
# VuePress

- V2-Docs: <https://v2.vuepress.vuejs.org/zh/guide/>
- Github: https://github.com/vuepress/vuepress-next/ 

- **Plugin**
    - Theme-hope: https://vuepress-theme-hope.github.io/v2/zh/

## Guide

- Vuepress默认 markdown 实现功能： https://v2.vuepress.vuejs.org/zh/guide/markdown.html
- md-enhance: Vuepress的默认功能比较简单。建议添加 https://vuepress-theme-hope.github.io/v2/md-enhance/zh/ 插件 [^markdownenhance]
- 本地搜索插件： https://v2.vuepress.vuejs.org/zh/reference/plugin/search.html, 爱折腾的可以集成 Algolia ，需要申请账号。


### Plugins-list [^plugins-v2]

Official Plugins: https://github.com/vuepress/awesome-vuepress/blob/main/v2.md#official-plugins

**Maintained by [vuepress](https://github.com/vuepress):**

- [@vuepress/plugin-active-header-links](https://v2.vuepress.vuejs.org/reference/plugin/active-header-links.html): Update route hash when scrolling pages.
- [@vuepress/plugin-back-to-top](https://v2.vuepress.vuejs.org/reference/plugin/back-to-top.html): Back to top button
- [@vuepress/plugin-container](https://v2.vuepress.vuejs.org/reference/plugin/container.html): Register markdown custom containers in your VuePress site.
- [@vuepress/plugin-docsearch](https://v2.vuepress.vuejs.org/reference/plugin/docsearch.html): Integrate [Algolia DocSearch](https://docsearch.algolia.com/) into VuePress
- [@vuepress/plugin-external-link-icon](https://v2.vuepress.vuejs.org/reference/plugin/external-link-icon.html): Add a icon to the external link in your markdown content
- [@vuepress/plugin-git](https://v2.vuepress.vuejs.org/reference/plugin/git.html): Collect git information of your pages, including the created and updated time, the contributors, etc.
- [@vuepress/plugin-google-analytics](https://v2.vuepress.vuejs.org/reference/plugin/google-analytics.html): Integrate [Google Analytics](https://analytics.google.com/) into VuePress.
- [@vuepress/plugin-medium-zoom](https://v2.vuepress.vuejs.org/reference/plugin/medium-zoom.html): Integrate [medium-zoom](https://github.com/francoischalifour/medium-zoom#readme) into VuePress.
- [@vuepress/plugin-palette](https://v2.vuepress.vuejs.org/reference/plugin/palette.html): Provide palette support for your theme.
- [@vuepress/plugin-prismjs](https://v2.vuepress.vuejs.org/reference/plugin/prismjs.html): Enable syntax highlighting for markdown code fence with [Prism.js](https://prismjs.com/)
- [@vuepress/plugin-pwa-popup](https://v2.vuepress.vuejs.org/reference/plugin/pwa-popup.html): Provide a popup component for users to activate the new PWA service worker manually.
- [@vuepress/plugin-pwa](https://v2.vuepress.vuejs.org/reference/plugin/pwa.html): Make your VuePress site a [Progressive Web Application (PWA)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps).
- [@vuepress/plugin-register-components](https://v2.vuepress.vuejs.org/reference/plugin/register-components.html): Register Vue components from component files or directory automatically.
- [@vuepress/plugin-search](https://v2.vuepress.vuejs.org/reference/plugin/search.html): Provide local search to your documentation site.
- [@vuepress/plugin-shiki](https://v2.vuepress.vuejs.org/reference/plugin/shiki.html): Enable syntax highlighting for markdown code fence with [Shiki](https://shiki.matsu.io/)
- [@vuepress/plugin-theme-data](https://v2.vuepress.vuejs.org/reference/plugin/theme-data.html): Provide client data for your theme, with VuePress [i18n](https://github.com/vuepress/awesome-vuepress/guide/i18n.md) support.
- [@vuepress/plugin-toc](https://v2.vuepress.vuejs.org/reference/plugin/toc.html): Provide a table-of-contents (TOC) component.




[^markdownenhance]: 比如 超链接的自动识别， markdown-it 需要标准格式或者 `<link>` 才能被解析为 超链接。
[^plugins-v2]: https://github.com/vuepress/awesome-vuepress/blob/main/v2.md