exports.list = function*(ctx) {
    var page = ctx.query.page || 0
    var params = JSON.parse(ctx.query.params || '{}')
    ctx.body = yield ctx
        .service
        .video
        .findByPage(page, 12, params)
}
exports.incVideoCount = function*(ctx) {
    var id = ctx.params.id
    ctx.body = yield ctx.service.video.inc(id, 'video_count')
}
exports.videolike = function*(ctx) {
    var id = ctx.params.id
    ctx.body = yield ctx.service.video.inc(id, 'like_count')
}
exports.videohate = function*(ctx) {
    var id = ctx.params.id
    ctx.body = yield ctx.service.video.inc(id, 'hate_count')
}