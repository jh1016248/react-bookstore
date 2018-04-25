import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './styles/bookList.less'
import { imgLinkFomat, addWan } from '../asset/js/config'
import { browserHistory } from 'react-router'

class BookList extends Component {
    static propTypes = {
        bookList: PropTypes.array
    }
    
    constructor(){
        super()
    }

    componentWillMount() {
    }

    shouldComponentUpdate(nextProps) {
        return !(JSON.stringify(nextProps.bookList) == JSON.stringify(this.props.bookList))
    }

    toBookDetail(item) {
        browserHistory.push('/book/' + item._id)
    }

    render() {
        let list = this.props.bookList.map((item, index) => {
            return (
                <li key={index} onClick={this.toBookDetail.bind(this, item)}>
                    <img src={imgLinkFomat(item.cover)}/>
                    <div className="info">
                        <h3>{item.title}</h3>
                        <p className="author spacing-p"><span>{item.author}</span><span>{item.majorCate}</span></p>
                        <p className="intro">{item.shortIntro}</p>
                        <p className="spacing-p"><span><i className="red">{addWan(item.latelyFollower)}</i>人气</span><span><i className="red">{item.retentionRatio}%</i>读者留存</span></p>
                    </div>
                </li>
            )
        })
        return (
            <div className="book-list">
                <ul>
                    {list}
                </ul>
            </div>
        )
    }
}

export default BookList