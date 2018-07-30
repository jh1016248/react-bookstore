##react项目基础框架

引入: react, react-router, react-redux, less, ant-design, prop-types, axios, react-weui

##启动
npm start

访问 http://localhost:3001

##编译
npm run build

##参考
* [react小书](http://huziketang.mangojuice.top/books/react/) 

//router 按需加载 https://segmentfault.com/a/1190000007141049

router
    /index
        /index
        /category (分类)
            /keyword?gender=
        /ranking (排行榜)
            /keyword
        /recommend (推荐)
            /keyword
        /booklist (书单列表)
            /id
        /search?keyword=
    /book
        /book
            /id
                /page
                /category
                /comment
    
0、生命周期
    componentWillMount > render > componentDidMount > componentWillReceiveProps > shouldComponentUpdate > componentWillUpDate > render > componentDidUpdate

1、react-redux: dispatch修改数据需要每次都返回所有state (...state)

2、渲染html: dangerouslySetInnerHTML={{__html: content}}

3、


redux
维护一份state，限制要修改state只能通过dispatch方法来完成，并且在dispatch里面通过观察者模式，来实现每次dispatch修改state后重新渲染视图。


less sass scoped 深度覆盖样式
.parent /deep/ .child { /* ... */ }