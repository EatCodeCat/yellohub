'use strict';

module.exports = app => {
  app.get('/', 'home.index');
  app.get('/detail/:id', 'home.detail');
  app.get('/list', 'home.list');

  //json
  app.get('/api/list', 'api.list');
};
