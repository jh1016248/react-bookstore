import axios from 'axios';
const host = 'http://novel.juhe.im';
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

//获取书籍详情  http://novel.juhe.im/book-info/53115e30173bfacb4904897e
const getBookInfo = id => {
    return checkHistory(host + '/book-info/' + id)
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
    let history = localStorage.getItem(name)
    if(history && history !== '') {
        return new Promise((resolve, reject) => {
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
    getBookInfo,
    getRecommend,
    getAuthorBooks,
}
