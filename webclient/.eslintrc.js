module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'plugin:react/recommended',
    'google',
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    'react',
  ],
  'rules': {
    'linebreak-style': 0,
    'arrow-parens': ['error', 'as-needed'],
    'indent': ['error', 2, { SwitchCase: 1 }],
    'object-curly-spacing': ['error', 'always'],
    'comma-dangle': ['error', 'only-multiline'],
    'max-len': ['error', { 'code': 150 }],
    "require-jsdoc": 0,
    "react/prop-types": 0,
  },
};
