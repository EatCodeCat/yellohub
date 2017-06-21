module.exports = app => {
  class Video extends app.Service {
    * find () {
      let result = yield this.ctx.model.Video.find({})
      return result
    }
    * findByPage (index = 0, page=20) {
      let result = yield this.ctx.model.Video.find({}).skip(index*page).limit(page)
      return result
    }
    * findById (id) {
      let result = yield this.ctx.model.Video.findById(id)
      return result
    }
  }
  return Video
}
