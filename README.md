# 302-Tool-Kit

## 项目简介

`tool-start` 是一个基于 Next.js 的 Web 项目，旨在提供快速、高效的开发体验。本项目包含基础的组件、钩子以及工具函数，助力开发者快速搭建生产级AI工具应用。

## 功能特性

- **组件化开发**: 项目结构清晰，组件划分明确，包括公共组件、表单组件、全局组件和基础组件。
- **状态管理**: 使用 Zustand 进行状态管理。
- **国际化支持**: 内置多语言支持（中文、英文、日文）。
- **丰富的工具函数**: 包含 API 请求、鉴权、事件派发等工具函数。
- **代码规范**: 使用 ESLint 和 Prettier 进行代码检查和格式化。

## 目录结构

```plaintext
root
├── src
│   ├── app
│   ├── layout                     // 根部布局
│   │── auth                       // 鉴权页
│   │   ├── index                  // 导出模块
│   │   ├── _components            // 私有组件
│   ├── (land)                     // 落地页组
│   │   │── page                   // 落地主页
│   │   │── _components            // 私有组件
│   ├── components                 // 公共组件
│   │   ├── common                 // 通用组件
│   │   ├── forms                  // 表单组件
│   │   ├── global                 // 全局组件
│   │   ├── ui                     // 基础组件
│   ├── constants                  // 常量
│   │   ├── forms                  // 表单相关常量
│   │   ├── menus                  // 菜单选项
│   ├── hooks                      // 钩子
│   │   ├── auth                   // 认证模块钩子
│   │   ├── global                 // 全局钩子
│   ├── icons                      // 图标
│   │   ├── auth                   // 认证模块的图标
│   │   ├── global                 // 全局模块图标
│   ├── lib                        // 工具函数
│   │   ├── api                    // 请求相关工具函数
│   │   ├── mitt                   // 事件派发工具
│   │   ├── utils                  // 其他工具集
│   ├── services                   // 请求函数
│   │   ├── auth                   // 鉴权请求
│   ├── locales                    // 国际化
│   │   ├── zh                     // 中文
│   │   ├── en                     // 英文
│   │   ├── ja                     // 日文
│   ├── stores                     // 状态管理
│   │   ├── slices                 // 划分模块状态
│   │   ├── index                  // 导出模块
│   ├── styles                     // 样式
│   │   ├── global                 // 全局样式
│   │   ├── info                   // 信息样式
│   ├── env.ts                     // 环境变量控制
└── package.json
```

## 安装

1. 克隆仓库：

   ```bash
   git clone https://github.com/302ai/tool-start
   ```

2. 安装依赖：

   ```bash
   cd tool-start
   npm install
   ```

## 脚本命令

- `npm run build`：构建生产环境。
- `npm run dev`：启动开发环境。
- `npm run lint`：运行 ESLint 进行代码检查。
- `npm run start`：启动生产环境。
- `npm run clean`：清理生成的构建文件。
- `npm run check`：检查代码格式。
- `npm run format`：格式化代码。

## 依赖

### 生产依赖

- `@hookform/error-message`
- `@hookform/resolvers`
- `@radix-ui/react-alert-dialog`
- `@radix-ui/react-checkbox`
- `@radix-ui/react-dialog`
- `@radix-ui/react-dropdown-menu`
- `@radix-ui/react-icons`
- `@radix-ui/react-label`
- `@radix-ui/react-slot`
- `@radix-ui/react-toast`
- `@t3-oss/env-nextjs`
- `@tanstack/react-query`
- `ahooks`
- `class-variance-authority`
- `clsx`
- `geist`
- `jiti`
- `ky`
- `ll`
- `lucide-react`
- `mitt`
- `next`
- `next-themes`
- `react`
- `react-dom`
- `react-hook-form`
- `tailwind-merge`
- `tailwindcss-animate`
- `zod`
- `zustand`

### 开发依赖

- `@trivago/prettier-plugin-sort-imports`
- `@types/eslint`
- `@types/node`
- `@types/react`
- `@types/react-dom`
- `@typescript-eslint/eslint-plugin`
- `@typescript-eslint/parser`
- `eslint`
- `eslint-config-next`
- `eslint-config-prettier`
- `eslint-plugin-check-file`
- `eslint-plugin-n`
- `eslint-plugin-tailwindcss`
- `postcss`
- `prettier`
- `prettier-plugin-tailwindcss`
- `tailwindcss`
- `typescript`

## 开发指南

### 启动开发环境

```bash
npm run dev
```

### 构建生产环境

```bash
npm run build
```

## 代码风格和规范

使用 ESLint 进行代码检查，Prettier 进行代码格式化。请在提交代码前确保代码通过检查和格式化。

```bash
npm run lint
npm run format
```

## 国际化

项目支持多种语言，当前支持中文、英文和日文。语言文件存储在 `src/locales` 目录下。

## License

此项目使用 MIT 许可证。
