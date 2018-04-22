import React, { Component } from 'react'
import { Link } from 'react-router'
import RouterActivity from '../../containers/routerActivity'
import { borwserHistory } from 'react-router'

class BookListDetail extends Component {
    constructor(props) {
		super(props)
    }
    

    render() {
        return (
            <div className="page">
                <Link to="/recommend">recommend</Link>
            </div>
        )
    }
}

export default RouterActivity(BookListDetail)
