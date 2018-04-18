import React, { Component } from 'react'
import { Link } from 'react-router'
import RouterActivity from '../../containers/routerActivity'

class Book extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="page" style={{background: "#f5f5f5"}}>
                <Link to="/">index</Link>
            </div>
        )
    }
}

export default RouterActivity(Book)
