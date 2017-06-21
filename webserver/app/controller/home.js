'use strict'

exports.index = function * (ctx) {
  var data = yield ctx.service.video.findByPage(0, 12)
  yield ctx.render('index.html', {list: data})
}
exports.detail = function * (ctx) {
  var id = ctx.params.id
  var data = yield ctx.service.video.findByPage(0, 8)
  var entity = yield ctx.service.video.findById(id)
  yield ctx.render('detail.html', {list: data, entity: entity})
}
exports.list = function * (ctx) {
  var page = ctx.params.page || 1
  var data = yield ctx.service.video.findByPage(page, 12)
  yield ctx.render('list.html', {list: data})
}
// module.exports = app => {
//   class HomeController extends app.Controller {
//     * index (ctx) {
//       console.log(1)
//       ctx.model.Video.save({
//         title: '111111111',
//         updateTime: new Date()
//       })
//       yield ctx.render('index.html')
//     }
//   }
//   return HomeController
// }
