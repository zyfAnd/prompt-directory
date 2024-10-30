#  Prompt  项目指南


## 项目概述

这是一个 Angular 项目，用于展示和管理各种编程提示（prompts）。项目使用了 Angular Material 组件库，并采用了独立组件（standalone components）的方式构建。

## 项目结构

- `src/app/`: 主要应用代码
  - `header/`: 头部组件
  - `sidebar/`: 侧边栏组件
  - `prompt-list/`: 提示列表组件
  - `prompt-card/`: 单个提示卡片组件
  - `prompt-detail/`: 提示详情组件
  - `app.component.ts`: 根组件
  - `app.routes.ts`: 路由配置
  - `prompts.ts`: 提示数据

## 主要功能

1. 显示提示列表
2. 查看单个提示详情
3. 响应式设计，适配不同设备

## 开发指南

### 环境设置

1. 确保已安装 Node.js 和 npm
2. 全局安装 Angular CLI：`npm install -g @angular/cli`
3. 在项目根目录运行 `npm install` 安装依赖

### 运行项目

在项目根目录运行：`ng serve`

然后在浏览器中访问 `http://localhost:4200`

### 构建项目

运行 `ng build` 来构建项目。构建产物将存储在 `dist/` 目录中。

### 运行单元测试

运行 `ng test` 来执行单元测试。

## 贡献指南

1. Fork 本仓库
2. 创建您的特性分支：`git checkout -b my-new-feature`
3. 提交您的改动：`git commit -am 'Add some feature'`
4. 推送到分支：`git push origin my-new-feature`
5. 提交 Pull Request

## 许可证

本项目采用 MIT 许可证。详情请见 [LICENSE](LICENSE) 文件。
