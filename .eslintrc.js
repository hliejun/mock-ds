module.exports = {
  extends: ['@pgateway/eslint-config-base', '@pgateway/eslint-config-base/react'],
  parserOptions: {
    project: './tsconfig.json'
  },
  settings: {
    'import/resolver': {
      'babel-module': {}
    },
    react: {
      version: 'detect'
    }
  },
  env: {
    es6: true,
    mocha: true,
    jest: true
  },
  rules: {
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off'
  }
};
