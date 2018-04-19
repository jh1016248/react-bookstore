import React, { Component } from 'react'
import { Link } from 'react-router'
import RouterActivity from '../../containers/routerActivity'

class Search extends Component {
    constructor(props) {
		super(props)
	}

    render() {
        return (
            <div className="page">
                <Link to="/">index</Link>
            </div>
        )
    }
}

export default RouterActivity(Search)
