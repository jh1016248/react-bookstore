import React, { Component } from 'react'
import { Link } from 'react-router'
import RouterActivity from '../../containers/routerActivity'

class Book extends Component {
    constructor(props) {
		super(props)
	}

    render() {
        return (
            <div className="page" style={{background: "#fff"}}>
                <Link to="/book/1/1">page1</Link>
            </div>
        )
    }
}

export default RouterActivity(Book)
