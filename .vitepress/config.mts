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
              { text: "5. 第五部分", link: "/notes/1/5" },
              { text: "6. 第六部分", link: "/notes/1/6" },
              { text: "7. 第七部分", link: "/notes/1/7" },
            ],
          },
          {
            text: "第二阶段",
            collapsed: true,
            items: [
              { text: "1. 第一部分", link: "/notes/2/1" },
              { text: "2. 第二部分", link: "/notes/2/2" },
              { text: "3. 第三部分", link: "/notes/2/3" },
              { text: "4. 第四部分", link: "/notes/2/4" },
              { text: "5. 第五部分", link: "/notes/2/5" },
              { text: "6. 第六部分", link: "/notes/2/6" },
              { text: "7. 第七部分", link: "/notes/2/7" },
              { text: "8. 第八部分", link: "/notes/2/8" },
              { text: "9. 第九部分", link: "/notes/2/9" },
              { text: "10. 第十部分", link: "/notes/2/10" },
              { text: "11. 第十一部分", link: "/notes/2/11" },
              { text: "12. 第十二部分", link: "/notes/2/12" },
              { text: "13. 第十三部分", link: "/notes/2/13" },
              { text: "14. 第十四部分", link: "/notes/2/14" },
              { text: "15. 第十五部分", link: "/notes/2/15" },
              { text: "16. 第十六部分", link: "/notes/2/16" },
              { text: "17. 第十七部分", link: "/notes/2/17" },
              { text: "18. 第十八部分", link: "/notes/2/18" },
              { text: "19. 第十九部分", link: "/notes/2/19" },
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
