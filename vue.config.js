module.exports = {
  productionSourceMap: false,
  devServer: {
    public: 'routerbug.test',
    disableHostCheck: true, // удаление ошибки Invalid Host header при использовани обратного прокси
  },
};
