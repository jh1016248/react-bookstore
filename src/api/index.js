import axios from 'axios';
const host = '/api';
//获取带书籍数量的父分类
const getCategories = () => {
   return checkHistory(host + '/categories')
}

//获取带子分类的分类
const getSubCategories = () => {
    return checkHistory(host + '/sub-categories')
}

//获取分类详情
/* 
   /category-info?gender=male&type=hot&major=奇幻&minor=&start=0&limit=20'
    gender, type, major(主分类), minor(子分类), start, limit
*/
const getCategoryInfo = (sendData) => {
    return checkHistory(host + '/category-info?gender='+ sendData.gender +'&type='+ sendData.type +'&major='+ sendData.major +'&minor='+ sendData.minor +'&start='+ sendData.start +'&limit=' + sendData.limit)
}

//获取书源
///book-sources?view=summary&book=567d2cb9ee0e56bc713cb2c0
const getBookSources = (id) => {
    return checkHistory(host + '/book-sources?view=summary&book=' + id)
}

// 获取书籍章节
// url: http://novel.juhe.im/book-chapters/56f8da09176d03ac1983f6cd
const getBookChapters = (id) => {
    return checkHistory(host + '/book-chapters/' + id)
}


//获取书籍详情  http://novel.juhe.im/book-info/53115e30173bfacb4904897e
const getBookInfo = id => {
    return checkHistory(host + '/book-info/' + id)
}

/*
获取章节详细内容
url: http://novel.juhe.im/chapters/http%3A%2F%2Fvip.zhuishushenqi.com%2Fchapter%2F56f8da09176d03ac1983f6d7%3Fcv%3D1486473051386 注意这里需要进行url编码
*/

const getChapters = link => {
    return checkHistory(host + '/chapters/' + encodeURIComponent(link))
}


//获取书籍相关推荐 http://novel.juhe.im/recommend/53115e30173bfacb4904897e
const getRecommend = id => {
    return checkHistory(host + '/recommend/' + id)
}

//获取作者名下的书籍 http://novel.juhe.im/author-books?author=忘语
const getAuthorBooks = author => {
    return checkHistory(host + '/author-books/?author=' + author)
}

function checkHistory(name) {
    let loadingEl = document.querySelector("#request-loading")
    let history = localStorage.getItem(name)
    loadingEl && (loadingEl.style.display = 'block')
    // return axios.get(name)
    if(history && history !== '') {
        return new Promise((resolve, reject) => {
            loadingEl && (loadingEl.style.display = 'none')
            resolve(JSON.parse(history))
        })
    }
    else{
        return axios.get(name)
    }
}

export {
    getCategories,
    getSubCategories,
    getCategoryInfo,
    getBookChapters,
    getBookSources,
    getChapters,
    getBookInfo,
    getRecommend,
    getAuthorBooks,
}
