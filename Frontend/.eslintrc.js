module.exports = {
  rules: { 'react/jsx-uses-react': 'off', 'react/react-in-jsx-scope': 'off' },
  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  extends: ['plugin:storybook/recommended']
};
