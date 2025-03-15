export default {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended', // 適用於 Nuxt3
    'plugin:@typescript-eslint/recommended',
    'prettier', // 確保 Prettier 不會與 ESLint 衝突
  ],
  plugins: ['@typescript-eslint', 'vue', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/no-unused-vars': 'warn',
    'vue/multi-word-component-names': 'off',
  },
}
