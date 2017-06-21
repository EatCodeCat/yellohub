'use strict'

exports.index = function* (ctx) {
    var data = yield ctx.service.video.findByPage();
   yield ctx.render('index.html', {list:data})
}
exports.detail = function* (ctx) {
   yield ctx.render('detail.html')
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
