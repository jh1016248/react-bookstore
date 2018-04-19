import React, { Component } from 'react'
import { Link } from 'react-router'
import RouterActivity from '../../containers/routerActivity'

class RecommendDetail extends Component {
    constructor(props) {
		super(props)
	}

    render() {
        return (
            <div className="page">
                <Link to="/search/123">search</Link>
            </div>
        )
    }
}

export default RouterActivity(RecommendDetail)
