import {DefaultTheme} from "vitepress"

const navs: Array<DefaultTheme.NavItem> = [
    {
        text: 'Android系统',
        link: '/AndroidSystem/',
        activeMatch: '/AndroidSystem/'
    },
    {
        text: 'Android',
        link: '/android/',
        activeMatch: '/android/'
    },
    {
        text: 'JS·TS',
        link: '/Js-Ts/00-导读-知识地图与学习方法.md',
        activeMatch: '/Js-Ts/'
    },
    {
        text: 'Vue 3',
        link: '/Vue3/articles/00-vue3-架构全景.md',
        activeMatch: '/Vue3/'
    },
    {
        text: 'Agent',
        link: '/Agent/Noodle/noodle-上手实录.md',
        activeMatch: '/Agent/'
    },
    {
        text: 'Web',
        link: '/web/',
        activeMatch: '/web/'
    },
    {
        text: 'Tools',
        link: '/tools/',
        activeMatch: '/tools/'
    }
]


export default navs