import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './styles/bookList.less'
import { imgLinkFomat } from '../asset/data/config'

class BookList extends Component {
    static propTypes = {
        bookList: PropTypes.array
    }

    componentWillMount() {
    }
    
    constructor(){
        super()
    }

    shouldComponentUpdate(nextProps) {
        return !(JSON.stringify(nextProps.bookList) == JSON.stringify(this.props.bookList))
    }

    render() {
        let list = this.props.bookList.map((item, index) => {
            return (
                <li key={index}>
                    <img src={imgLinkFomat(item.cover)}/>
                    <div className="info">
                        <h3>{item.title}</h3>
                        <p className="author"><span>{item.author}</span><span>{item.majorCate}</span></p>
                        <p className="intro">{item.shortIntro}</p>
                        <p><span><i className="red">{checkNum(item.latelyFollower)}</i>人气</span><span><i className="red">{item.retentionRatio}%</i>读者留存</span></p>
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

function checkNum(num) {
    return num >= 10000 ? (num / 10000).toFixed(2) + '万' : num
}

export default BookList