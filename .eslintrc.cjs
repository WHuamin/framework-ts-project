module.exports = {
  // env 环境 针对哪些环境的语言 window
  env: {
    browser: true,
    es2021: true,
    node: true
  },

  // 继承了哪些规则
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended", // typescript 规则
    "plugin:vue/vue3-essential", // eslint-plugin-vue
    "@vue/eslint-config-prettier"
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script"
      }
    }
  ],
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser", // 解析ts文件的
    sourceType: "module"
  },
  plugins: ["@typescript-eslint", "vue"],
  rules: {
    'vue/multi-word-component-names': 'off', //组件命名校验关闭
    // 自定义规则// 自带的prettier规则
    "prettier/prettier": [
      "error",
      {
        singleQuote: false, // 使用双引号
        semi: true, // 末尾添加分号 var a=1
        tabWidth: 2, //tab=2
        trailingComma: "none", // {a:1,}有无逗号
        useTabs: false,
        endOfLine: "auto"
      }
    ]
  }
};
