const typeList = [
    {
        type: "hot",
        name: '热门'
    },
    {
        type: "new",
        name: '新书'
    },
    {
        type: "reputation",
        name: '好评'
    },
    {
        type: "over",
        name: '完结'
    }
]
const imgDomain = 'http://statics.zhuishushenqi.com/';
const imgLinkFomat = function (img){
    return 'http' + decodeURIComponent(img).split('http')[1]
}

const addWan = function (num){
    return num >= 10000 ? (num / 10000).toFixed(2) + '万' : num
}

export {
    typeList,
    imgDomain,
    imgLinkFomat,
    addWan
}