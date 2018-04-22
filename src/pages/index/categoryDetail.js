import React, { Component } from 'react'
import { Link } from 'react-router'
import RouterActivity from '../../containers/routerActivity'

class CategoryDetail extends Component {
    constructor(props) {
        super(props)
    }

    
    componentWillMount() {
        console.log(this.props)
    }


    render() {  
        return (
            <div className="page">
                <Link to="/bookList">bookList</Link>
            </div>
        )
    }
}

export default RouterActivity(CategoryDetail)
