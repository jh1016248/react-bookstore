import React, { Component } from 'react'
import { Link } from 'react-router'
import RouterActivity from '../../containers/routerActivity'

class Comment extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="page">
                <Link to="/">index</Link>
            </div>
        )
    }
}

export default RouterActivity(Comment)
