module.exports = {
  extends: ['airbnb', 'airbnb/hooks'],
  // plugins: [
  //   'react',
  //   'jsx-a11y',
  //   'import',
  // ],
  rules: {
    'no-console': 1,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    'no-plusplus': 'off',
    'no-param-reassign': [2, { props: false }],
    'react/prop-types': 0,
  },
};
