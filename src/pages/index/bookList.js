import React, { Component } from 'react'
import { Link } from 'react-router'
import RouterActivity from '../../containers/routerActivity'

class BookList extends Component {
    constructor(props) {
		super(props)
	}

    render() {
        return (
            <div className="page">
                <Link to="/bookList/213">bookListDetail</Link>
            </div>
        )
    }
}

export default RouterActivity(BookList)
