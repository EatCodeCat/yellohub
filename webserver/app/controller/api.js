exports.list = function*(ctx) {
    var page = ctx.query.page || 0
    var params = JSON.parse(ctx.query.params || '{}')
    ctx.body = yield ctx
        .service
        .video
        .findByPage(page, 12, params)
}
exports.videolike = function*() {

}