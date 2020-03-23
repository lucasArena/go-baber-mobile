module.exports = {
  env: {
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier/react',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV: 'readonly',
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    }, 
    ecmaVersion: 2018,
    sourceType: 'module',
  }, 
  plugins: [
    'react', 'import', 'react-hooks', 'prettier'
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-filename-extension': [
        'warn', { extensions: ['.jsx', '.js'] }
    ],
    'no-unused-vars': 'off',
    'import/prefer-default-export': 'off',
    'react/no-unused-state': 'off',
    'react/state-in-constructor': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-console': ['error', { allow: ['tron'] }],
    'no-param-reassign': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 'off',
  },
  settings: {
    'import/resolver': {
        'babel-plugin-root-import': {
            rootPathSuffix: 'src'
        }
    }
  }
};
