import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './styles/chapterList.less'

class ChapterList extends Component {
    static propTypes = {
        list: PropTypes.array,
        chooseChapter: PropTypes.func
    }
    
    constructor(){
        super()
    }

    chooseChapter(index) {
        this.props.chooseChapter(index)
    }

    render() {
        let list = this.props.list.map((item, index) => {
            return (
                <li key={index} onClick={this.chooseChapter.bind(this, index)}>{(index + 1) + '. ' + item.title}</li>
            )
        })

        return (
            <div className="chapter-list">
                <ul>
                    {list}
                </ul>
            </div>
        )
    }
}

export default ChapterList