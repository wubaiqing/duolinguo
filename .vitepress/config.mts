import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";
import footnote from "markdown-it-footnote";
import sup from "markdown-it-sup";
import sub from "markdown-it-sub";
import mark from "markdown-it-mark";
import ins from "markdown-it-ins";
import carousel from "./lib/markdown-it-carousel";

// import markdownit from 'markdown-it'

export default withMermaid(
  // https://vitepress.dev/reference/site-config
  defineConfig({
    title: "多邻国-学习笔记",
    description: "用注意力填满 1000 小时就能练成任何你需要的技能……",
    head: [],
    themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
      nav: [
        { text: "Home", link: "/" },
        { text: "Enjoy App", link: "/enjoy-app/", activeMatch: "/enjoy-app/" },
      ],

      sidebar: {
        "/": [
          {
            text: "第一阶段",
            collapsed: true,
            items: [
              { text: "1. 第一部分", link: "/notes/1/1" },
              { text: "2. 第二部分", link: "/notes/1/2" },
              { text: "3. 第三部分", link: "/notes/1/3" },
              { text: "4. 第四部分", link: "/notes/1/4" },
            ],
          },
        ],
      },
      socialLinks: [
        {
          icon: "github",
          link: "https://github.com/wubaiqing/duolinguo",
        },
      ],
    },

    lastUpdated: true,

    markdown: {
      // https://vitepress.dev/reference/markdown
      math: true,
      config: (md) => {
        // use more markdown-it plugins!
        md.use(footnote);
        md.use(sub);
        md.use(sup);
        md.use(mark);
        md.use(ins);
        md.use(carousel);
      },
      toc: {
        level: [1, 2, 3],
      },
    },
  })
);
