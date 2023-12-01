# 前端项目基础框架架构配置

```
技术栈：Vue 3 + TypeScript + Vite

对应版本：
node：v20.9.0
npm:：v10.1.0
pnpm: v8.11.0

建议安装：
1. Node 版本管理管理工具 NVM
2. 镜像管理工具 NRM

```

## 项目文件说明

```
1. node_modules 项目依赖
2. public 公共静态资源
3. vite.config.ts Vite构建工具配置
4. tsconfig.json TS配置文件
5. README.md 项目简介文档，本项目的此文件，主要来记录整个项目的搭建过程 技术 记录
6. package.json 项目依赖配置
7. env.d.ts 声明文件，用来识别.vue文件的类型=>垫片 【ts只能处理ts文件，.vue结尾得文件要模块声明】

index.html
2. App.vue 称为父组件，项目的所有组件都是这个组件的子孙组件
3. main.ts 应用程序的入口文件, App.vue就是通过这个文件和 index.html 里的 <div id="app"> 产生联系的
4.
5.
6.


```

## 构建项目

```
1. 初始化：
【pnpm create vite@latest】
输入项目名称，选择 Vue TypeScript

2. 删除没必要的文件代码

3. git
初始化 git init
链接Git本地仓库和Git远程仓库 git remote add origin 远程库地址
查本地代码当前的状态 git status
将改变的代码添加到 Git 本地仓库 git add .
将添加的代码提交到 Git 本地仓库 git commit -m '提交的描述'
将代码提交到 Git 远程仓库 git push 【注意：pull == fetch + merge】

```

## 配置 @ 别名

```
1. 安装依赖 npm install @types/node
2. 修改 vite.config.ts
   import { resolve } from 'path'
   export default defineConfig({
      ...
      resolve:{
         alias:{
            '@': resolve(__dirname, './src')
         }
      }
   })

3. 修改 tsconfig.json
   {
      "compilerOptions": {
         ...
         // 配置@别名
         "baseUrl": ".",
         "paths": {
            "@/*": ["src/*"]
         }
      },
      ...
   }

```

## Eslint 配置

```
Eslint 只检测代码规范
npx eslint --init
选项
√ How would you like to use ESLint? · problems
√ What type of modules does your project use? · esm
√ Which framework does your project use? · vue
√ Does your project use TypeScript? · No / Yes
√ Where does your code run? · browser, node
√ What format do you want your config file to be in? · JavaScript
√ Would you like to install them now? · No / Yes
√ Which package manager do you want to use? · pnpm

生成 .eslintrc.cjs 文件

.eslintignore 配置
是配置 Eslint 忽略检查的文件
在项目根目录建【.eslintignore】
"scripts": {
   ...
    "lint": "eslint --fix --ext .ts,.tsx,.vue src --quiet", // src下的.ts,.tsx,.vue文件，忽略warn报错

},
"devDependencies": {
    "@typescript-eslint/eslint-plugin": "^6.13.1",
    "@typescript-eslint/parser": "^6.13.1",
    "@vitejs/plugin-vue": "^4.5.0",
    "eslint": "^8.54.0",
    "eslint-plugin-vue": "^9.19.2",
    ...
}

```

## Prettier 配置

```
Prettier 只用来格式化代码，.eslint和.prettierrc.js要配合使用
安装依赖 pnpm install prettier eslint-plugin-prettier @vue/eslint-config-prettier -D
.eslintrc.cjs 中进行配置
.prettierrc.js 格式化代码风格
.prettierignore 是配置 Prettier 忽略检查的文件

```

## 工具安装使用说明

### Node 管理工具 NVM

```
win系统建议安装 nvm 进行 Node 版本管理，Node 建议安装【LTS 长期稳定】的版本

显示可以安装的所有nodejs版本 nvm list available
安装指定版本的nodejs nvm install <version>
显示已安装版本列表 nvm list
使用指定版本node nvm use [version]
卸载指定版本node nvm uninstall <version>

```

### 镜像管理工具 NRM

```
安装依赖 【npm install -g nrm】
查看镜像列表 nrm ls
查看当前使用的镜像 nrm current
添加镜像 nrm add <名称> <远程地址或私服地址>
删除镜像 nrm del <名称>
切换镜像 nrm use <名称>
测试镜像网络传输速度 nrm test <名称>
查看nrm版本号 nrm <-version | -V>
查看nrm相关信息 nrm <-help | -h>
打开镜像主页 nrm home <名称> [browser]
上传npm包或命令程序 nrm publish [<tarball>|<folder>]

```
