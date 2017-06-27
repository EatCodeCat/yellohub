exports.time2ago = function(str) {
    var d = new Date(str)
    var now = new Date()
    var dist = now.getTime() - d.getTime()
    if (dist < 3600 * 1000 || isNaN(str)) {
        return '刚刚'
    } else if (dist < 3600 * 24 * 1000) {
        return Math.round(dist / 3600000) + '小时前'
    } else if (dist < 3600 * 24 * 1000 * 30) {
        return Math.round(dist / (3600 * 24 * 1000)) + '天前'
    } else if (dist < 3600 * 24 * 1000 * 30) {
        return Math.round(dist / (3600 * 24 * 1000 * 7)) + '周前'
    } else if (dist < 3600 * 24 * 1000 * 365) {
        return Math.round(dist / (3600 * 24 * 1000 * 30)) + '月前'
    } else {
        return Math.round(dist / (3600 * 24 * 1000 * 365)) + '年前'
    }
}

exports.formateLikeNum = function(item) {

    let total = (item.like_count + item.hate_count)
    if (total == 0) {
        return 0;
    }

    let rate = item.like_count / total * 100;

    return `${rate}%(${item.like_count}/${total})`

}