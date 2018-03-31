// Process JS with Babel.
{
  test: /\.(js|jsx|mjs)$/,
  include: paths.appSrc,
  loader: require.resolve('babel-loader'),
  options: {
    plugins: [
        ["module-resolver", {
        "root": ["./src/App"],
        "alias": {
          "test": "./test",
        }
      }]
    ],
    cacheDirectory: true
  }
}
