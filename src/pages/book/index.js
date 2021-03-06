import React, { Component } from 'react'
import { Link } from 'react-router'
import RouterActivity from '../../containers/routerActivity'
import Header from '../../components/header'
import NeedHideBox from '../../components/needHideBox'
import { getBookInfo } from '../../api/index'
import { imgLinkFomat, addWan } from '../../asset/js/config'

import './styles/index.less'

class Book extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bookInfo: '',
        }
    }
    
    componentWillMount() {
        let id = this.props.params.id
        getBookInfo(id).then(res => {
            if(res) {
                this.setState({
                    bookInfo: res,
                })
            }
        })
    }
    
    render() {
        let bookInfo = this.state.bookInfo
        return (
            <div className="page pt90">
                <Header title="书籍详情"/>
                <div className="book-box">
                    <div className="clearfix">
                        <img src={imgLinkFomat(bookInfo.cover)}/>
                        <div className="info">
                            <h3>{bookInfo.title}</h3>
                            <p className="spacing-p"><span className="red">{bookInfo.author}</span><span>{bookInfo.minorCate}</span><span>{addWan(bookInfo.wordCount)}字</span></p>
                            <p>5小时前更新</p>
                        </div>
                    </div>

                    <div className="btn-wrap">
                        <a href="javascript:;" className="btn btn-empty">加入书架</a>
                        <Link to={'/book/' + bookInfo._id + '/chapter'} className="btn btn-red">开始阅读</Link>
                    </div>
                </div>

                <div className="reader-data">
                    <div className="item">
                        <p className="secound">追人气</p>
                        <p>{addWan(bookInfo.latelyFollower)}</p>
                    </div>
                    <div className="item">
                        <p className="secound">读者留存率</p>
                        <p>{bookInfo.retentionRatio}%</p>
                    </div>
                    <div className="item">
                        <p className="secound">日更字数/天</p>
                        <p>{bookInfo.serializeWordCount}</p>
                    </div>
                </div>

                <NeedHideBox text={bookInfo.longIntro}/>

                <Link to={'/book/' + bookInfo._id + '/chapter'} className="chapter-item">
                    目录
                    <span className="fr">{bookInfo.lastChapter}<i className="iconfont icon-right"></i></span>
                </Link>
            </div>
        )
    }
}



export default RouterActivity(Book)
