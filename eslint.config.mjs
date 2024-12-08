import js from "@eslint/js";
import eslintPluginAstro from 'eslint-plugin-astro';
import globals from "globals";
import tseslint from 'typescript-eslint';

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    files: ["**/*.astro", "**/*.js", "**/*.ts"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
        myCustomGlobal: "readonly"
      }
    },
    rules: {
      indent: ['error', 2],
      'linebreak-style': [
        'error',
        'unix'
      ],
      quotes: [
        'error',
        'single'
      ],
      semi: [
        'error',
        'always'
      ]
    },
  },
  {
    files: ['src/env.d.ts'],
    rules: {
      '@typescript-eslint/triple-slash-reference': 'off'
    }
  },
];
