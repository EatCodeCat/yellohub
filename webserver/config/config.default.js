'use strict'

module.exports = appInfo => {
  const config = {}

  // should change to your own
  config.keys = appInfo.name + '_1497882159771_1039'

  // add your config here
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.html': 'nunjucks'
    }
  }
  config.static = {
    prefix: '/'
  }
  config.mongoose = {
    url: 'mongodb://127.0.0.1:27017/yellohub',
  }

  return config
}
