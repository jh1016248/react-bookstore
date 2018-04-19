import React, { Component } from 'react'
import { Link } from 'react-router'
import RouterActivity from '../../containers/routerActivity'

class Ranking extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="page">
                <Link to="/ranking/123">rankingDetail</Link>
            </div>
        )
    }
}

export default RouterActivity(Ranking)
