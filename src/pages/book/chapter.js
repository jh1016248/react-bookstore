import React, { Component } from 'react'
import { Link } from 'react-router'
import RouterActivity from '../../containers/routerActivity'
import Header from '../../components/header'
import { getBookChapters, getBookSources } from '../../api/index'
import ChapterList from '../../components/chapterList'

import './styles/chapter.less'

class Chapter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            chapterList: [],
            reverse: false,
            title: '',
        }
    }
    
    componentWillMount() {
        getBookSources(this.props.params.id)
            .then(res => {
                if(res.code == 1) {
                    let sourceId = res.data[0]._id
                    this.getBookChapterList(sourceId)
                }
            })
    }

    getBookChapterList(id) {
        getBookChapters(id)
            .then(res => {
                if(res.code == 1) {
                    console.log(res)
                    this.setState({
                        chapterList: res.data.chapters,
                        title: res.data.name
                    })
                }
            })
    }

    reverseList() {
        this.setState({
            reverse: !this.state.reverse
        })
    }

    render() {
        let chapterList = this.state.chapterList && (this.state.reverse ? this.state.chapterList : this.state.chapterList.reverse())
        return (
            <div className="page pt90">
                <Header title={this.state.title || '章节列表'}/>
                <div className="chapter-header">
                    <div><strong>目录</strong><span>共{ chapterList.length }章</span></div>
                    <span onClick={this.reverseList.bind(this)}>{this.state.reverse ? '正序' : '倒序'}</span>
                </div>
                <ChapterList list={chapterList}/>
            </div>
        )
    }
}

export default RouterActivity(Chapter)