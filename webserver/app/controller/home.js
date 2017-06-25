'use strict'



exports.index = function * (ctx) {
  var data = yield ctx.service.video.findByPage(0, 8)
  yield ctx.render('index.html', {list: data, title:"iyehub"})
}
exports.detail = function * (ctx) {
  var id = ctx.params.id
 
  var entity = yield ctx.service.video.findById(id)
  var param = {$or:[]};
  entity.tag_list.forEach(function(element) {
    param.$or.push({'tag_list':element}) 
  });
  var data = yield ctx.service.video.findByPage(0, 9, param)
  data = data.filter(function(item){
    return String(item._id) != String(entity._id)

  })
  yield ctx.render('detail.html', {list: data.slice(0,8), entity: entity, title:entity.title})
}
exports.list = function * (ctx) {
  var page = ctx.query.page || 0
  var params = JSON.parse(ctx.query.params || '{}')
  var data = yield ctx.service.video.findByPage(page, 12, params, ctx.query.sort)
  yield ctx.render('list.html', {list: data, isPC: IsPC(ctx.request.header['user-agent']), title:"在线视频列表"})
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
