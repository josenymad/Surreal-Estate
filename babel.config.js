// eslint-disable-next-line func-names
module.exports = function (api) {
  api.cache.forever();
  return {
    plugins: ["macros"],
  };
};
