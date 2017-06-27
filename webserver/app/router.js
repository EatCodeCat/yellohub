'use strict';

module.exports = app =>{
    app.get ('/', 'home.index');
    app.get ('/detail/:id', 'home.detail');
    app.get ('/list', 'home.list');

    //json
    app.get ('/api/list', 'api.list');
    app.get ('/api/incVideoCount/:id', 'api.incVideoCount');
    app.get ('/api/videolike/:id', 'api.videolike');
    app.get ('/api/videohate/:id', 'api.videohate');
};
