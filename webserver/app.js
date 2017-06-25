module.exports = app => {
    var env = app.config.env;
    var local = {
        _host_: ''
    }
    if (env == 'prod') {
        local = {
            _host_: 'http://www.iyehub.com'
        }
    }
    app.local = local
};