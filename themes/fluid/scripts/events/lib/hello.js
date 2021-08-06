'use strict';

module.exports = (hexo) => {
  const isZh = hexo.theme.i18n.languages[0].search(/zh-CN/i) !== -1;
  if (isZh) {
    hexo.log.info(`Matija的博客`);
  } else {
    hexo.log.info(`Matija's Blog`);
  }
};
