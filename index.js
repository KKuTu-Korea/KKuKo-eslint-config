module.exports = {
  extends: ['./base', 'airbnb-typescript', 'plugin:prettier/recommended'],
  plugins: ['react', 'react-hooks'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  ignorePatterns: ['**/*.generated.*', 'graphql-types.ts'],
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^(query|mutation|fragment|_)$',
      },
    ],
    'react-hooks/exhaustive-deps': [
      'error',
      { enableDangerousAutofixThisMayCauseInfiniteLoops: true },
    ],
    'react/jsx-uses-react': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
  },
};
