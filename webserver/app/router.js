'use strict';

module.exports = app => {
  app.get('/', 'home.index');
  app.get('/detail/:id', 'home.detail');
};
