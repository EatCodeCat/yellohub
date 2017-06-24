'use strict'



exports.index = function * (ctx) {
  var data = yield ctx.service.video.findByPage(0, 8)
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
  console.log(IsPC(ctx.request.header['user-agent']))
  yield ctx.render('list.html', {list: data, isPC: IsPC(ctx.request.header['user-agent'])})
}

function IsPC (userAgentInfo) {
  var Agents = new Array('Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod')
  var flag = true
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }
  }
  return flag
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
