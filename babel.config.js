module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "@babel/plugin-proposal-export-namespace-from",
      [
        "module-resolver",
        {
          alias: {
            components: "./src/components",
            data: "./src/data",
            models: "./src/models",
            screens: "./src/screens",
            store: "./src/store",
            assets: "./assets",
          },
        },
      ],
    ],
  };
};
