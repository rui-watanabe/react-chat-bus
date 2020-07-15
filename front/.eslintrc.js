module.exports = {
  'env': {
    'browser': true,
    'es2020': true,
    'jest/globals': true,
  },
  'extends': [
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 11,
    'sourceType': 'module',
  },
  'plugins': [
    'react',
    '@typescript-eslint',
    'jest',
    'prettier'
  ],
  'rules': {
    'prettier/prettier': 'error'
  },
  'settings': {
    'react': {
      'version': 'detect',
    },
  },
};
