module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/dot-notation': 0,
    '@typescript-eslint/no-implied-eval': 0,
    '@typescript-eslint/no-throw-literal': 0,
    '@typescript-eslint/no-use-before-define': 0,
    'no-continue': 0,
    'no-console': 'error',
    'no-await-in-loop': 0,
    'class-methods-use-this': 0,
    'import/named': 2,
    'import/no-named-as-default': 0,
    'import/prefer-default-export': 0,
    'import/extensions': 0,
    'no-param-reassign': ['error', { props: true }],
    'sort-keys': 0,
    'max-classes-per-file': 0,
    'no-underscore-dangle': 0,
    'lines-between-class-members': ['error', 'always'],
    '@typescript-eslint/array-type': ['error', { default: 'array' }],
    '@typescript-eslint/no-namespace': 0,
    '@typescript-eslint/no-unused-expressions': 2,
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'lf',
        singleQuote: 'true',
        trailingComma: 'all',
      },
    ],
  },
  overrides: [
    {
      files: ['*.schema.ts'],
      rules: {
        'import/no-cycle': 0,
      },
    },
  ],
};
