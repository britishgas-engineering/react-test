module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  plugins: [
    'jest',
    'react',
    'react-native'
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      'jsx': true
    }
  },
  parser: 'babel-eslint',
  env: {
    'browser': true,
    'es6': true,
    'jest': true
  },
  'globals': {
    'React': true
  },
  rules: {
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'eqeqeq': 'error',
    'no-debugger': 'error',
    'no-dupe-args': 'error',
    'no-dupe-keys': 'error',
    'no-extra-parens': ['error', 'all'],
    'no-extra-semi': 'error',
    'no-func-assign': 'error',
    'no-inner-declarations': ['error', 'both'],
    'valid-jsdoc': 'error',
    'block-scoped-var': 'error',
    'consistent-return': 'error',
    'default-case': 'error',
    'dot-notation': 'error',
    'no-alert': 'error',
    'no-case-declarations': 'error',
    'no-eq-null': 'warn',
    'no-eval': 'warn',
    'no-extra-bind': 'warn',
    'no-floating-decimal': 'warn',
    'no-implicit-globals': 'warn',
    'no-lone-blocks': 'warn',
    'no-loop-func': 'warn',
    'no-multi-spaces': 'warn',
    'no-new-func': 'warn',
    'no-new-wrappers': 'warn',
    'no-new': 'warn',
    'no-octal': 'warn',
    'no-redeclare': 'warn',
    'no-self-assign': 'warn',
    'no-self-compare': 'warn',
    'no-unused-expressions': 'warn',
    'no-useless-call': 'warn',
    'no-useless-concat': 'warn',
    'vars-on-top': 'warn',
    'no-use-before-define': ['warn', {'functions': false}],
    'array-bracket-spacing': ['warn', 'never'],
    'block-spacing': ['warn', 'never'],
    'brace-style': 'warn',
    'camelcase': 'warn',
    'comma-dangle': ['warn', 'never'],
    'comma-spacing': ['warn', {'before': false, 'after': true }],
    'comma-style': ['warn', 'last'],
    'computed-property-spacing': ['warn', 'never'],
    'eol-last': 'warn',
    'indent': ['warn', 2],
    'key-spacing': [
      'warn', {
        beforeColon: false,
        afterColon: true,
        mode: 'strict'
      }
    ],
    'keyword-spacing': ['warn', {before: true}],
    'linebreak-style': ['warn', 'unix'],
    'max-len': [
      'warn',
      120,
      {
        ignoreTrailingComments: true,
        ignoreUrls: true
      }
    ],
    'new-cap': ['warn', {newIsCap: true, capIsNew: false}],
    'no-lonely-if': 'warn',
    'no-multiple-empty-lines': ['warn', {max: 1, maxEOF: 1}],
    'no-plusplus': 'warn',
    'no-spaced-func': 'warn',
    'no-trailing-spaces': 'warn',
    'no-unneeded-ternary': 'warn',
    'no-whitespace-before-property': 'warn',
    'object-curly-spacing': ['warn', 'never'],
    'one-var-declaration-per-line': ['warn', 'initializations'],
    'operator-linebreak': ['warn', 'after'],
    'quote-props': ['warn', 'as-needed'],
    'quotes': [2, 'single', {'avoidEscape': true, 'allowTemplateLiterals': true}],
    'semi-spacing': ['warn', {'before': false, 'after': true}],
    'semi': ['warn', 'always'],
    'space-before-blocks': 'warn',
    'space-in-parens': ['warn', 'never'],
    'space-infix-ops': 'warn',
    'arrow-parens': ['warn', 'always'],
    'arrow-spacing': ['warn', { 'before': true, 'after': true}],
    'no-const-assign': 'warn',
    'no-dupe-class-members': 'warn',
    'no-duplicate-imports': 'warn',
    'template-curly-spacing': 'warn'
  }
};
