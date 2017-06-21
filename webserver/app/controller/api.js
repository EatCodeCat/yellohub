


exports.list = function * (ctx) {
  var page = ctx.params.page || 1
  ctx.body = yield ctx.service.video.findByPage(page, 12)
}