import React, { Component } from 'react'
import { Link } from 'react-router'
import RouterActivity from '../../containers/routerActivity'
import { getCategoryInfo, getSubCategories } from '../../api/'
import Header from '../../components/header'
import FilterWrap from '../../components/filterWrap'
import { typeList } from '../../asset/data/config'
import BookList from '../../components/bookList'
import { InfiniteLoader } from 'react-weui'

class CategoryDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pageIndex: 1,
            showMinus: false,
            subList: [],
            indexList: [],
            bookList: [],
            items: [...Array(20).keys()]
        }
        this.getCategorys.bind(this)
    }
    
    componentWillMount() {
        let props = this.props;
        let gender = props.location.query.gender,
            major = props.params.keyword
        this.getSubCategory(major, gender)
    }
    
    getSubCategory(major, gender) {
        getSubCategories()
            .then(res => {
                if(res.code == 1) {
                    let list = res.data[gender]
                    let subList = list.filter(item => item.major == major)
                    subList[0].mins.unshift('全部')
                    let indexList = [0,0]
                    this.setState({
                        subList: subList[0].mins,
                        indexList
                    }, () => {
                        this.getCategorys()
                    })
                }
            }) 
    }

    getCategorys() {
        //获取书籍
        let props = this.props;
        let gender = props.location.query.gender,
            major = props.params.keyword
        let state = this.state,
            indexList = state.indexList

        let sendData = {
            gender,
            type: typeList[indexList[0]].type,
            major,
            start: state.pageIndex,
            minor: indexList[1] == 0 ? '' : state.subList[indexList[1]],
            limit: 20
        }

        getCategoryInfo(sendData).then(res => {
            console.log(res.data)
            this.setState({
                bookList: res.data.books
            })
        })
    }
    
    changeIndex(index, subIndex) {
        //改变类型或者子分类
        let oldIndexList = this.state.indexList
        if(oldIndexList[index] != subIndex) {
            oldIndexList[index] = subIndex
            this.setState({
                indexList: oldIndexList,
                pageIndex: 0
            }, () => {
                this.getCategorys()
            })
        }
    }

    componentDidMount() {
        let elPage = this.refs.page;
        elPage = document.querySelector(".react-weui-infiniteloader")
        let fontSize = parseInt(document.documentElement.style.fontSize)
        elPage.onscroll = () => {
            let elScrollTop = elPage.scrollTop
            let showMinus = elScrollTop >= fontSize * .9
            this.setState({
                showMinus
            })
        }
    }

    render() {
        let list = [typeList, this.state.subList]
        return (
            <div className="page" ref="page" style={{paddingTop: this.state.showMinus ? "1.8rem" : "2.7rem"}}>
                <Header title={this.props.params.keyword}/>
                <FilterWrap 
                    showMinus={this.state.showMinus} 
                    list={list} 
                    indexList={this.state.indexList}
                    changeIndex={this.changeIndex.bind(this)}
                    />
                
                <div id="scroll-wrap">
                    <InfiniteLoader
                        onLoadMore={ (resolve, finish) => {
                            setTimeout( ()=> {
                                if(this.state.items.length > 22){
                                    finish()
                                }else{
                                    this.setState({
                                        items: this.state.items.concat([this.state.items.length])
                                    }, ()=> resolve())
                                }
                            }, 1000)
                        }}
                    >    
                        <BookList bookList={this.state.bookList}/>
                    </InfiniteLoader>
                </div>
            </div>
        )
    }
}

export default RouterActivity(CategoryDetail)
