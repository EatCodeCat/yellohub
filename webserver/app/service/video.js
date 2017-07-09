module.exports = app =>{
    class Video extends app.Service {
        *
        find (){
            let result = yield this.ctx.model.Video.find ({})
            return result
        }

        * findByPage (index = 0, page = 20, params = {}, sort = {
            update_time: -1
        }){

            if ( params.title ) {
                params.title = {
                    $regex: params.title
                }
            }
            let result = yield this.ctx.model.Video.find (params).sort (sort).skip (index * page).limit (page)
            return result
        }

        * findById (id){
            let result = yield this.ctx.model.Video.findById (id)
            return result
        }

        * inc (_id, field, seq = 1){

            let $inc = {}
            if ( field ) {
                $inc[ field ] = seq;
            }
            let result = yield this.ctx.model.Video.update ({_id: _id}, {$inc: $inc})
            return result
        }
    }
    return Video
}