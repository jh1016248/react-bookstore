import React, { Component } from 'react'
import { Link } from 'react-router'
import LogoHeader from '../../components/logoHeader'
import RouterActivity from '../../containers/routerActivity'

class Index extends Component {
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

export default RouterActivity(Index)
