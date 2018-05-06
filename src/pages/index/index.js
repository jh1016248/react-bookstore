import React, { Component } from 'react'
import { Link } from 'react-router'
import { getCategories } from '../../api/index'
import RouterActivity from '../../containers/routerActivity'
import LogoHeader from '../../components/logoHeader'
import Nav from '../../components/nav'

class Index extends Component {
    
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        
    }

    render() {
        return (
            <div className="page">
                <LogoHeader />
                <Nav />
            </div>
        )
    }
}

export default RouterActivity(Index)
