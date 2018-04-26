import React, { Component } from 'react'
import { Link } from 'react-router'
import PropTypes from 'prop-types'
import RouterActivity from '../../containers/routerActivity'
import Header from '../../components/header'
import { connect } from 'react-redux'
import { getChapters } from '../../api/index'
import ChapterList from '../../containers/chapterList'

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
            nowPageNum: 0,
        }
    }
    
    componentWillMount() {
        this.getNowPage()
    }

    getNowPage() {
        if(this.props.chapterList.length) {
            let nowPage = this.props.chapterList[this.props.params.page - 1]
            this.getPageInfo(nowPage)
        }
    }

    getPageInfo(nowPage) {
        document.title = nowPage.title
        getChapters(nowPage.link)
            .then(res => {
                this.setState({
                    pageInfo: res.data.chapter,
                    nowPage
                })
            })
    }

    componentDidUpdate() {
        if(!this.state.pageInfo){
            this.getNowPage()
        }
    }

    chooseChapter(index) {
        console.log(index)
    }

    render() {
        let cpContent = this.state.pageInfo.cpContent
        let content = cpContent ? ('<p>' + cpContent.replace(/\n/g, '</p><p>') + '</p>').replace(/\s+/g, '') : '<p>加载中...</p>'
        return (
            <div className="page">
                <div className="container">
                    <div dangerouslySetInnerHTML={{__html: content}}></div>
                </div>
                <div className="side-nav" style={{display: 'none'}}>
                    {this.props.params.id ? (<ChapterList bookId={this.props.params.id} reverse={false} chooseChapter={this.chooseChapter.bind(this)}/>) : ''}
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
