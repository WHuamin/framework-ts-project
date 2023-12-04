# 前端项目基础框架架构配置

```
技术栈：Vue 3 + TypeScript + Vite

使用husky强制码提交规范及eslint校验

对应版本：
node：v20.9.0
npm:：v10.1.0
pnpm: v8.11.0

建议安装：
1. Node 版本管理管理工具 NVM
2. 镜像管理工具 NRM

分支管理
master
项目基本架构开发分支 master <- dev

项目基本开发分支:
基于 dev 分支开发：移动端 app-dev 、Web端 web-dev
比如：移动端功能开发分支【xxx分支】： app-dev <- xxx分支

注意：开发只能拉取dev分支的代码，不能往dev分支上提交代码，如需修改项目基本架构代码，则需要基于dev分支，新建分支开发，开发完成后，将本分支代码合并到dev分支，并删除本分支，之后，移动端/Web端开发分支进行更新拉取dev分支代码

测试分支：
移动端 dev <- app-dev

```

## 项目分支管理

```
基本架构分支：
生产分支 master
测试分支 basic-test
开发分支 basic-dev

开发 到 生产 流程： 【basic-dev-xx -> basic-dev -> basic-test -> master】
基本架构开发基于 basic-dev 分支，
比如开发 xx 功能：
在 basic-dev 分支，新建分支（basic-dev-xx），开发完成后，将 basic-dev-xx 分支代码合并到 basic-dev 分支，并删除 basic-dev 分支，之后合并到 basic-test 分支上进行测试，测试通过则合并到 master，供其他项目更新使用。

web 端分支： 【web-dev-xx -> web-dev -> web-test -> web-master】
生产分支 web-master
测试分支 web-test
开发分支 web-dev： 基于 master 分支（基本架构生产分支，不可往 master 分支上提交代码，只允许更新拉取代码）

app 端分支： 【app-dev-xx -> app-dev -> app-test -> app-master】
生产分支 app-master
测试分支 app-test
开发分支 app-dev： 基于 master 分支（基本架构生产分支，不可往 master 分支上提交代码，只允许更新拉取代码）

注意：开发只能拉取 master 分支的代码，不能往 master 分支上提交代码，如需修改项目基本架构代码，则需要基于 basic-dev 分支，新建分支开发，开发完成后，将本分支代码合并到 basic-dev 分支，并删除本分支，之后，移动端/Web端开发分支需要更新基本框架则拉取 master 分支代码

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
8. .editorconfig 配置 EditorConfig
9. index.html
10. App.vue 称为父组件，项目的所有组件都是这个组件的子孙组件
11. main.ts 应用程序的入口文件, App.vue就是通过这个文件和 index.html 里的 <div id="app"> 产生联系的
12. interface 存放各个页面的类型(接口定义)
13. utils 存放公共工具类

```

## 构建项目

### 1.构建项目

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

### 2.配置 @ 别名

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

### 3.Eslint 配置

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
//  快速定位到error的文件: --quiet --ext
"scripts": {
   ...
    "lint:eslint": "eslint --fix --ext --quiet .js,.ts,.vue src", // src下的.js, .ts,.vue文件，忽略warn报错
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

### 4.Prettier 配置

```
Prettier 只用来格式化代码，.eslint和.prettierrc.js要配合使用
安装依赖 pnpm install prettier eslint-plugin-prettier @vue/eslint-config-prettier -D
.eslintrc.cjs 中进行配置
.prettierrc.js 格式化代码风格
.prettierignore 是配置 Prettier 忽略检查的文件

```

### 5.样式规范工具 StyleLint

```
1. 安装依赖 pnpm i stylelint stylelint-config-html stylelint-config-recommended-scss stylelint-config-recommended-vue stylelint-config-standard stylelint-config-standard-scss stylelint-config-recess-order postcss postcss-html stylelint-config-prettier -D

2. 安装 Vscode 插件（StyleLint）
3. 在目录的 .vscode 文件夹下新建 settings.json
4. 配置 StyleLint（.stylelintrc.js）：
5. .stylelintignore 文件告诉 stylelint 去忽略特定的文件和目录
```

### 6.Git 流程规范配置

#### 操作 git 钩子的工具 husky

```
1. 安装依赖 pnpm install husky -D
2. 在 package.json 文件中，添加：
"scripts": {
   "prepare": "husky install"
}
3. pnpm run prepare 在根目录生成 .husky 目录
```

#### 本地暂存代码检查工具 lint-staged

```
1. 安装依赖 pnpm install lint-staged -D
2. 配置命令（执行以下命令，在husky文件夹下自动生成pre-commit文件）：
npx husky add .husky/pre-commit "npm run lint:lint-staged"
作用：通过钩子函数，判断提交的代码是否符合规范，并使用 prettier 格式化代码

3. pnpm run prepare 在根目录生成 .husky 目录
4. 新增 lint-staged.config.js 文件
```

#### commit 信息校验工具，不符合则报错 commitlint

```
1. 安装依赖 pnpm i @commitlint/cli @commitlint/config-conventional -D
2. 配置命令（在.husky 文件夹下自动生成 commit-msg 文件，执行如下代码自动生成）：
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'

3. pnpm run prepare 在根目录生成 .husky 目录
4. 新增 lint-staged.config.js 文件
```

#### commitizen cz-git

```
commitizen（基于 Node.js 的 git commit 命令行工具，生成标准化的 message）
cz-git（指定提交文字规范，一款工程性更强，高度自定义，标准输出格式的 commitizen 适配器）
1. 安装依赖 pnpm install commitizen -D
2. 安装依赖 pnpm install cz-git -D
3. 配置 package.json：
"config": {
  "commitizen": {
    "path": "node_modules/cz-git"
  }
}

4. 新建 commitlint.config.js 文件
5. 配置 package.json 命令
```

### 6.路由配置

```
1. 安装依赖 pnpm install vue-router
```

### 7. 组件name属性设置

```
Vue 在默认情况下会将文件名定义为 name 属性，但文件名是可以重复的，如出现一大堆 index.vue。
1. 安装依赖 pnpm i vite-plugin-vue-setup-extend
2. 配置vite.config.ts
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
export default defineConfig({
  plugins: [
		...
		VueSetupExtend()
	]
});
3. 使用
<script setup name="User"></script>

```

## 工具安装使用说明

### 参考文档

```
项目构建 https://blog.csdn.net/attengtiong/article/details/128393733
规范配置 https://blog.csdn.net/TanHao8/article/details/129619313

```

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
