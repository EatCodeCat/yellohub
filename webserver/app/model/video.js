module.exports = app => {
    const mongoose = app.mongoose;
    const VideoSchema = new mongoose.Schema({
        "detail": String,
        "title": String,
        "thumb_pic": String,
        "poster": String,
        "video_url_list": Array,
        "tag_list": Array,
        "video_type": String,
        'update_time': Date,
        'video_count': { type: Number, default: 0 },
        'like_count': { type: Number, default: 0 },
        'hate_count': { type: Number, default: 0 },
    });
    return mongoose.model('Video', VideoSchema);
}