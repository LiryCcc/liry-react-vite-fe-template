# React + TypeScript + Vite 模板

# 介绍

本模板提供了一个最小化的配置，以便在 Vite 中使用 React 并使用 HMR 和一些 ESLint 规则。

# 特性

1. 使用 `*.module.[css|less]` 来支持 module.css

```less
// ./index.module.less
.title {
  color: red;
}
```

```jsx
import styles from './index.module.less';

const Example = () => {
  return <div className={styles['title']}>Hello World</div>;
};
```

2. 使用@路径别名

- `@` 表示 `src` 目录
- `/*` 表示 `public/*` 目录`

# 使用

## 安装依赖并启动开发服务

```bash
# 安装依赖
pnpm i
# 启动开发服务
pnpm dev
```

## 构建

```bash
pnpm build
```

构建产物位于 `dist` 目录下。

## 预览

```bash
pnpm preview
```

## 代码检查及格式化

```bash
pnpm lint
pnpm format
```

# 目录结构

## 配置文件

- `vite.config.ts`: Vite 配置文件
- `eslint.config.js`: ESLint 配置文件
- `.prettierrc.json`: Prettier 配置文件
- `tsconfig.json`: TypeScript 配置文件
- `.env.*`: 环境变量配置文件

## `src`目录

- `layouts`: 布局目录
- `components`: 组件目录
- `apis`: 接口目录
- `hooks`: 自定义 Hooks 目录
- `locales`: 国际化语言包目录
- `pages`: 页面目录
- `routers`: 路由目录
- `store`: 状态管理目录
- `styles`: 公共样式目录
- `utils`: 工具目录
- `types`: 公共类型定义目录
- `main.tsx`: 顶层组件
- `index.css`: 全局样式文件

### `public`目录

- `orion.ico`: 应用图标

# 技术选型

1. 使用 [`Vite`](https://vitejs.dev/) 作为构建工具

2. 使用 [`React + React-Router`](https://reactjs.org/) 全家桶

3. 使用 [`TypeScript`](https://www.typescriptlang.org/) 作为编程语言

4. 使用 [`ESLint`](https://eslint.org/) 作为代码检查工具

5. 使用 [`Prettier`](https://prettier.io/) 作为代码格式化工具

6. 使用 [`Redux-Saga`](https://redux-saga.js.org/) 作为异步状态管理工具

7. 使用 [`dayjs`](https://day.js.org/) 作为时间处理工具

8. 使用 [`axios`](https://github.com/axios/axios) 作为网络请求工具

9. 使用 [`lodash`](https://lodash.com/) 作为工具库

10. 使用 [`ahooks`](https://ahooks.js.org/) 作为 React Hooks 库

11. 使用 [`less`](https://lesscss.org/) 作为样式预处理器

12. 使用 [tailw`indcss](https://tailwindcss.com/) 作为样式库

13. 使用 [`react-intl`](https://formatjs.io/docs/react-intl/) 作为国际化工具

14. 使用 [`classnames`](https://github.com/JedWatson/classnames) 作为样式类名合并工具
