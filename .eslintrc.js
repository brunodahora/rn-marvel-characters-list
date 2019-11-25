module.exports = {
  env: {
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'prettier',
    'prettier/react',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    fetch: false,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['import', 'react', 'prettier', '@typescript-eslint'],
  rules: {
    'react/prop-types': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
      'babel-module': {},
    },
  },
};
