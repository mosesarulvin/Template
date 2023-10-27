module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:import/typescript',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      files: ['*.ts', '*.tsx']
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    },
    project: './tsconfig.json'
  },
  plugins: ['react', 'prettier', 'unused-imports'],
  rules: {
    'react/prop-types': 'off',
    quotes: ['error', 'single'],
    '@typescript-eslint/no-confusing-void-expression': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    'arrow-body-style': 'off',
    'implicit-arrow-linebreak': 'off',
    'react/require-default-props': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-curly-brace-presence': 'off',
    'react/jsx-filename-extension': ['off', {extensions: ['.js', '.jsx']}],
    'react/react-in-jsx-scope': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'prettier/prettier': ['error', {endOfLine: 'auto'}],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never'
      }
    ],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'comma-dangle': ['error', 'never'],
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true
      }
    ],
    'no-unused-vars': [
      'error',
      {vars: 'all', args: 'after-used', ignoreRestSiblings: false}
    ],
    'unused-imports/no-unused-imports-ts': 'error'
  }
};
