import React, { Component } from 'react'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getBookChapters, getBookSources } from '../api/index'
import ChapterList from '../components/chapterList'

class ChapterContainer extends Component {
    static propTypes = {
        bookId: PropTypes.string,
        _bookId: PropTypes.string,
        chapterList: PropTypes.array,
        chooseChapter: PropTypes.func,
        reverse: PropTypes.bool,
        setBookId: PropTypes.func,
        setBookChapters: PropTypes.func,
    }
    
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        if(this.props.bookId != this.props._bookId) {
            getBookSources(this.props.bookId)
                .then(res => {
                    if(res.code == 1) {
                        let id = res.data[0]._id
                        this.props.setBookId(id)
                        this.getBookChapter(id)
                    }
                })
        }
    }

    getBookChapter(id) {
        getBookChapters(id)
            .then(res => {
                if(res.code == 1) {
                    this.props.setBookChapters(res.data.chapters)
                }
            })
    }

    render() {
        let _chapterList = this.props.chapterList
        let chapterList = this.props.reverse ? _chapterList.reverse() : _chapterList
        return <ChapterList list={chapterList} chooseChapter={this.props.chooseChapter}/>
    }
}

const mapStateToProps = state => {
    return {
        _bookId: state.Book._bookId,
        chapterList: state.Book.chapterList,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setBookChapters: chapterList => {
            dispatch({
                type: "SET_BOOK_CHAPTERS",
                chapterList
            })
        },
        setBookId: bookId => {
            dispatch({
                type: "SET_BOOK_ID",
                bookId
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChapterContainer)
