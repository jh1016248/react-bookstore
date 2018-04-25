import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './styles/chapterList.less'

class ChapterList extends Component {
    static propTypes = {
        list: PropTypes.array
    }
    
    constructor(){
        super()
    }

    render() {

        let list = this.props.list.map((item, index) => {
            return (
                <li key={index}>{(index + 1) + '. ' + item.title}</li>
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