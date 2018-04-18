import React, { Component } from 'react'
import { Link } from 'react-router'
import RouterActivity from '../../containers/routerActivity'

class Page extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="page">
                <Link to="/book/123/category">category</Link>
            </div>
        )
    }
}

export default RouterActivity(Page)
