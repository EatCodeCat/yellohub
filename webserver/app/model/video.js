module.exports = app => {
  const mongoose = app.mongoose;
  const VideoSchema = new mongoose.Schema({
    "detail" :String,
    "title" : String,
    "thumb_pic" : String,
    "poster" : String,
    "video_url_list" :Array,
    "tag_list" :Array
});
  return mongoose.model('Video', VideoSchema);
}