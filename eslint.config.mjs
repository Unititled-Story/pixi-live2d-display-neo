import { defineConfig } from 'eslint/config'

export default defineConfig({
  root: true,
  env: { browser: true, es2024: true },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    'prettier/prettier': 'warn'
  }
})
