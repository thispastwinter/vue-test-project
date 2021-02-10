module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/explicit-function-return-type': 'off', // TS can infer this,
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'sort-imports': [
      'error',
      {
        ignoreDeclarationSort: true,
      },
    ],
    'import/export': 'error',
    'import/order': [
      'error',
      {
        'newlines-between': 'never',
        alphabetize: {
          order: 'asc',
        },
      },
    ],
  },
}
