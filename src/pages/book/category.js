import React, { Component } from 'react'
import { Link } from 'react-router'
import RouterActivity from '../../containers/routerActivity'

class BookCategory extends Component {
    constructor(props) {
		super(props)
	}

    render() {
        return (
            <div className="page">
                <Link to="/book/123/comment">comment</Link>
            </div>
        )
    }
}

export default RouterActivity(BookCategory)
