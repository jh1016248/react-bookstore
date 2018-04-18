import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import './styles/logoHeader.less'

class LogoHeader extends Component {
    static propTypes = {
    }
    constructor() {
        super()
    }
    render() {
        return (
            <div className="logo-header">
                <Link to="/" className="logo"><img src="../static/images/logo.png" /></Link>
                <Link to="/book/123" className="my-books"><span className="iconfont icon-books"></span>我的书架</Link>
            </div>
        )
    }
}

export default LogoHeader