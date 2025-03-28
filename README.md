# 多邻国英语学习笔记

一个基于 VitePress 构建的英语学习笔记网站，记录多邻国课程学习过程中的重点内容，包括发音练习、语法知识等。

[![Netlify Status](https://api.netlify.com/api/v1/badges/8fdc69e7-7ca3-4cf4-a236-1cd24dbd6efc/deploy-status)](https://app.netlify.com/sites/duolinguo/deploys)

## 项目特点

- 📝 系统化的英语学习笔记
- 🎯 重点语法知识整理
- 🔊 完整的音标学习体系
- 🎤 发音练习与示例
- 📱 响应式设计，支持移动端
- 🌙 支持深色模式
- 🎠 支持图片轮播展示
- 📊 支持 Mermaid 图表展示
- 🔍 支持 Markdown 扩展语法

## 技术栈

- VitePress
- Vue 3
- TypeScript
- SCSS
- Swiper
- Cheerio
- Mermaid
- Markdown-it 插件

## 项目结构

```text
├── .vitepress/          # VitePress 配置和主题
│   ├── theme/          # 主题配置
│   └── config.mts      # 配置文件
├── src/                # 源代码目录
├── pronunciation/      # 发音练习内容
│   ├── all.md         # 音标总览
│   ├── vowels.md      # 元音练习
│   └── consonants.md  # 辅音练习
├── base/              # 基础学习内容
├── forget/            # 复习内容
├── notes/             # 学习笔记内容
├── public/            # 静态资源
└── index.md           # 首页内容
```

## 本地开发

1. 安装依赖

```bash
yarn install
```

2. 启动开发环境

```bash
yarn dev
```

3. 构建生产版本

```bash
yarn build
```

4. 预览生产版本

```bash
yarn preview
```

## 主要功能

- 完整的音标学习体系，包括元音和辅音
- 每个音标配有详细的发音说明和示例单词
- 笔记内容按阶段和章节组织
- 支持音频播放功能，方便学习发音
- 集成图片轮播组件，优化学习体验
- 响应式设计，适配多种设备
- 支持深色模式切换
- 支持 Mermaid 图表展示
- 支持 Markdown 扩展语法（脚注、下划线、高亮等）
- 支持数学公式展示

## 发音练习

项目包含完整的音标学习体系：

- 元音（长音、短音、双元音、三元音）
- 辅音（爆破音、摩擦音、破擦音、鼻音、边音、半元音）
- 每个音标都配有：
  - 发音说明
  - 示例单词
  - 音标写法
  - 发音技巧

## 贡献指南

欢迎提交 Issue 和 Pull Request 来完善项目。

## 许可证

MIT
