import React, { Component } from 'react'
import { Link } from 'react-router'
import RouterActivity from '../../containers/routerActivity'

class RankingDetail extends Component {
    constructor(props) {
		super(props)
	}

    render() {
        return (
            <div className="page">
                <Link to="/category">category</Link>
            </div>
        )
    }
}

export default RouterActivity(RankingDetail)
