import React, { Component } from 'react'
import { Link } from 'react-router'
import RouterActivity from '../../containers/routerActivity'

class CategoryDetail extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="page">
                <Link to="/bookList">bookList</Link>
            </div>
        )
    }
}

export default RouterActivity(CategoryDetail)
