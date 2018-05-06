import React, { Component } from 'react'
import { Link } from 'react-router'
import PropTypes from 'prop-types'
import RouterActivity from '../../containers/routerActivity'
import Header from '../../components/header'
import { connect } from 'react-redux'
import { getChapters } from '../../api/index'
import ChapterList from '../../containers/chapterList'
import { LoadMore } from 'react-weui'

import './styles/page.less'

class Page extends Component {
    static propTypes = {
        chapterList: PropTypes.array
    }

    constructor(props) {
        super(props)
        this.state = {
            pageInfo: '',
            nowPage: '',
            showChapter: false,
            showLoading: false,
            contentHtml: '',
        }
    }
    
    componentWillMount() {
        this.getNowPage()
    }

    componentDidMount() {
        let scrollEl = document.querySelector(".page")
        let winHeight = window.innerHeight
        scrollEl.onscroll = () =>{
            if(!this.state.showLoading) {
                let bodyHeight = document.querySelector(".container").scrollHeight
                let top = scrollEl.scrollTop
                if(top + winHeight >= bodyHeight){
                    this.setState({
                        showLoading: true
                    }, () => {
                        this.chooseChapter(this.state.nowPage.order, false, false)
                    })
                }
            }
        }
    }

    componentDidUpdate() {
        if(!this.state.pageInfo){
            this.getNowPage()
        }
    }

    getNowPage() {
        if(this.props.chapterList.length) {
            let nowPage = this.props.chapterList[this.props.params.page - 1]
            this.getPageInfo(nowPage)
        }
    }   

    getPageInfo(nowPage, resetNowPage, toTop) {
        nowPage && getChapters(nowPage.link)
            .then(res => {
                this.setState({
                    pageInfo: res.chapter,
                    nowPage
                }, () => {
                    let cpContent = this.state.pageInfo.cpContent
                    let content = cpContent ? '<div class="chapter-container">' + ('<h3>'+ this.state.pageInfo.title +'</h3><p>' + cpContent.replace(/\n/g, '</p><p>') + '</p></div>').replace(/\s+/g, ''): ''
                    
                    let contentHtml = resetNowPage ? content : this.state.contentHtml  + content

                    this.setState({
                        contentHtml,
                        showLoading: false,
                    }, () => {
                        nowPage && (document.title = nowPage.title)
                        let scrollEl = document.querySelector(".page")
                        toTop && (scrollEl.scrollTop = 0)
                    })
                })
            })
    }

    chooseChapter(index, resetNowPage = true, toTop = true) {
        let nowPage = this.props.chapterList[index]
        this.getPageInfo(nowPage, resetNowPage, toTop)
    }

    showChapterWrap() {
        this.setState({
            showChapter: !this.state.showChapter
        })
    }


    render() {
        return (
            <div className="page" onClick={this.showChapterWrap.bind(this)}>
                <div className="container">
                    <div dangerouslySetInnerHTML={{__html: this.state.contentHtml}}></div>
                    {this.state.showLoading ? <LoadMore loading>加载下一页</LoadMore> : ''}
                </div>
                <div className={this.state.showChapter ? 'side-nav active' : 'side-nav'}>
                    {this.props.params.id ? (<ChapterList bookId={this.props.params.id} reverse={false} nowIndex={this.state.pageInfo.order - 1} chooseChapter={this.chooseChapter.bind(this)}/>) : ''}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        chapterList: state.Book.chapterList,
    }
}

export default RouterActivity(connect(mapStateToProps)(Page))
