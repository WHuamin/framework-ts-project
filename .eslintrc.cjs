module.exports = {
    // env 环境 针对哪些环境的语言 window
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },

    // 继承了哪些规则
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",  // typescript 规则
        "plugin:vue/vue3-essential" // eslint-plugin-vue
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "parser": "@typescript-eslint/parser", // 解析ts文件的
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "vue"
    ],
    "rules": {
    }
}
