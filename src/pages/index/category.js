import React, { Component } from 'react'
import { Link } from 'react-router'
import RouterActivity from '../../containers/routerActivity'

class Category extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="page">
                <LogoHeader />
                <Link to="/ranking">ranking</Link>
            </div>
        )
    }
}

export default RouterActivity(Category)
