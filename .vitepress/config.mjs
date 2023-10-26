import { defineConfig } from 'vitepress'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    ['link', { rel: 'stylesheet', href: '/style.css' }]
  ],
  title: "deguoo",
  description: "deguoo",
  themeConfig: {
    plugins: ['vitepress-theme-demoblock'],
    search: {
      provider: 'local',
      highlight: true,
      preview: true
    },
    highlight: {
      enable: true
    },
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: 'Deguoo',
    sidebar: [
      // 德语词典
      {
        text: '德语词典',
        collapsed: false,
        items: [
          {
            text: 'a-z', 
            collapsed: true,
            items: [
              {
                // a
                text: 'a',
                collapsed: true,
                items: [
                  { text: 'angekommen', link: '/dic/a/angekommen' },
                  { text: 'anvertrauen', link: '/dic/a/anvertrauen.md' }
                ]
              },
              // g
              {
                text: 'g',
                collapsed: true,
                items: [
                  { text: 'Gedanke', link: '/dic/g/Gedanke.md' }
                ]
              },
              // h
              {
                text: 'h',
                collapsed: true,
                items: [
                  { text: 'hibbelig', link: '/dic/h/hibbelig.md' }
                ]
              },
              // m
              {
                text: 'm',
                collapsed: true,
                items: [
                  { text: 'machen', link: '/dic/m/machen' }
                ]
              },
              // s
              {
                text: 's',
                collapsed: true,
                items: [
                  { text: 'schmeicheln', link: '/dic/s/schmeicheln.md' },
                  { text: 'schreiben', link: '/dic/s/schreiben.md' }
                ]
              }
            ]
          }
        ]
      },
      // Anna_Tagebuch
      {
        text: 'Anna_Tagebuch',
        collapsed: true,
        items: [
          { text: '19420612', link: '/text/Anna_Tagebuch/19420612.md' },
          { text: '19420928Nachtrag', link: '/text/Anna_Tagebuch/19420928Nachtrag.md' }
        ]
      },
      // Web_Navi
      {
        text: 'Web_Navi',
        collapsed: true,
        items: [
          { text: 'Web_Navi_zh', link: '/page/WebNavi_zh.md' },
          { text: 'Web_Navi_de', link: '/page/WebNavi_de.md' },
        ]
      },
      {
        text: 'EChart',
        collapsed: true,
        items: [
          { text: 'EChart', link: '/page/Echart/EchartPage.md' }
        ]
      }
    ]
  }
})