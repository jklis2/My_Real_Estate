module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/jsx-uses-vars': "error",
    "react/jsx-no-undef": "error",
    "react/jsx-key": "warn",
    "react/jsx-no-duplicate-props": "warn",
    "react/no-array-index-key": "warn",
    "react-hooks/rules-of-hooks": "error",
    'react/react-in-jsx-scope': 'off',
    'react/no-unescaped-entities': 'off',
    'no-console': 'warn',
  },
  settings: {
    react: {
      version: "detect"
    },
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
    },
  },
}
