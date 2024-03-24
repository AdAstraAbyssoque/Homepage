// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import Layout from './layouts/Layout.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(Layout)
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  }
} satisfies Theme
