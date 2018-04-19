import React, { Component } from 'react'
import { Link } from 'react-router'
import RouterActivity from '../../containers/routerActivity'

class Recommend extends Component {
    constructor(props) {
		super(props)
	}

    render() {
        return (
            <div className="page">
                <Link to="/recommend/213">recommendDetail</Link>
            </div>
        )
    }
}

export default RouterActivity(Recommend)
