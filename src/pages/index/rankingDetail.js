import React, { Component } from 'react'
import { Link } from 'react-router'
import RouterActivity from '../../containers/routerActivity'

class RankingDetail extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="page">
                <Link to="/ranking">ranking</Link>
            </div>
        )
    }
}

export default RouterActivity(RankingDetail)
