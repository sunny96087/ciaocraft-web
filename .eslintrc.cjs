module.exports = {
  env: {
    browser: true,
    es2023: true
  },
  extends: [
    '@nuxtjs',
    'prettier',
    // 添加 TypeScript 支持
    'plugin:@typescript-eslint/recommended'
  ],
  // 使用 vue-eslint-parser 解析 Vue 文件
  parser: 'vue-eslint-parser',
  parserOptions: {
    // 使用 TypeScript 解析器
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2023,
    sourceType: 'module',
    // 支持解析 .vue 文件
    extraFileExtensions: ['.vue']
  },
  // 添加 TypeScript 插件
  plugins: ['prettier', '@typescript-eslint'],
  rules: {
    'no-undef': 'off',
    'prettier/prettier': 'error',
    // TypeScript 特定的規則
    '@typescript-eslint/no-unused-vars': 'error',
    // TypeScript 特定的規則
    '@typescript-eslint/no-explicit-any': 'warn',
    // 解決 eslint 對 template 中只能有一個根元素問題
    'vue/no-multiple-template-root': 'off',
    'vue/multi-word-component-names': 0,
    'linebreak-style': ['error', 'unix']
  }
}
