import { defineConfig } from 'eslint/config'
import standardJs from '@seungwoo321/eslint-plugin-standard-js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'

export default tseslint.config([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,vue}'],
    ignores: ['eslint.config.js', "dist/**/*"],
    extends: [
      standardJs.configs.recommended,
      ...tseslint.configs.recommended,
      ...pluginVue.configs['flat/strongly-recommended']
    ],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        parser: tseslint.parser,
      }
    },
  }
])