# 前端项目基础框架架构配置
```
技术栈：Vue 3 + TypeScript + Vite

对应版本：
node：v20.9.0
npm:：v10.1.0
pnpm: v8.11.0
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