import React, { Component } from 'react'
import { Link } from 'react-router'
import LogoHeader from '../../components/logoHeader'
import RouterActivity from '../../containers/routerActivity'
import { getCategories } from '../../api/index'


class Index extends Component {
    constructor() {
        super()
    }

    componentWillMount() {
        getCategories()
            .then(res => {
                console.log(res)
            })
    }

    render() {
        return (
            <div className="page">
                <LogoHeader />
                <Link to="/ranking">ranking</Link>
            </div>
        )
    }
}

export default RouterActivity(Index)
