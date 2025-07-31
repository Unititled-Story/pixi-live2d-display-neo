import tsEslint from 'typescript-eslint'
import eslint from '@eslint/js'
import prettierPluginRecommended from 'eslint-plugin-prettier/recommended'

export default tsEslint.config(
  eslint.configs.recommended,
  tsEslint.configs.recommended,
  prettierPluginRecommended,
  {
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      'prettier/prettier': 'warn'
    }
  }
)
