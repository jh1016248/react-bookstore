import React, { Component } from 'react'
import { Link } from 'react-router'
import RouterActivity from '../../containers/routerActivity'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Header from '../../components/header'
import { browserHistory } from 'react-router'
import { getBookChapters, getBookSources } from '../../api/index'
import ChapterList from '../../containers/chapterList'

import './styles/chapter.less'

class Chapter extends Component {
    static propTypes = {
        chapterList: PropTypes.array
    }
    constructor(props) {
        super(props)

        this.state = {
            reverse: false,
        }
    }
    
    componentWillMount() {
        
    }

    reverseList() {
        this.setState({
            reverse: !this.state.reverse
        })
    }

    chooseChapter(index) {
        browserHistory.push('/book/' + this.props.params.id + '/' + (index + 1))
    }

    render() {
        return (
            <div className="page pt90">
                <Header title={this.state.title || '章节列表'}/>
                <div className="chapter-header">
                    <div><strong>目录</strong><span>共{ this.props.chapterList.length }章</span></div>
                    <span onClick={this.reverseList.bind(this)}>{this.state.reverse ? '正序' : '倒序'}</span>
                </div>
                {this.props.params.id ? (<ChapterList bookId={this.props.params.id} reverse={this.state.reverse} chooseChapter={this.chooseChapter.bind(this)}/>) : ''}
            </div>
        )
    }
}

export default RouterActivity(connect(state => {
    return {
        chapterList: state.Book.chapterList
    }
})(Chapter))