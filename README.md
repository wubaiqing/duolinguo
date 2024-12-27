# 多邻国英语学习笔记

一个基于 VitePress 构建的英语学习笔记网站，记录多邻国课程学习过程中的重点内容。

[![Netlify Status](https://api.netlify.com/api/v1/badges/8fdc69e7-7ca3-4cf4-a236-1cd24dbd6efc/deploy-status)](https://app.netlify.com/sites/duolinguo/deploys)

## 项目特点

- 📝 系统化的英语学习笔记
- 🎯 重点语法知识整理
- 🔊 集成音频播放功能
- 📱 响应式设计，支持移动端
- 🌙 支持深色模式
- 🎠 支持图片轮播展示

## 技术栈

- VitePress
- Vue 3
- TypeScript
- SCSS
- Swiper
- Cheerio

## 项目结构

```text
├── .vitepress/ # VitePress 配置和主题
│ ├── theme/ # 主题配置
│ └── config.mts # 配置文件
├── notes/ # 学习笔记内容
│ ├── 1/ # 第一阶段笔记
│ ├── 2/ # 第二阶段笔记
│ └── 3/ # 第三阶段笔记
├── public/ # 静态资源
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

## 主要功能

- 笔记内容按阶段和章节组织
- 支持音频播放功能，方便学习发音
- 集成图片轮播组件，优化学习体验
- 响应式设计，适配多种设备
- 支持深色模式切换

## 贡献指南

欢迎提交 Issue 和 Pull Request 来完善项目。

## 许可证

MIT
