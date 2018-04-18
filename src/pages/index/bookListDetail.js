import React, { Component } from 'react'
import { Link } from 'react-router'
import RouterActivity from '../../containers/routerActivity'

class BookListDetail extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="page">
                <Link to="/recommend">recommend</Link>
            </div>
        )
    }
}

export default RouterActivity(BookListDetail)
