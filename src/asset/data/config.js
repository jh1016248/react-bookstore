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
const imgLinkFomat = function (img) {
    return 'http' + decodeURIComponent(img).split('http')[1]
}

export {
    typeList,
    imgDomain,
    imgLinkFomat
}