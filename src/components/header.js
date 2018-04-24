import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { browserHistory, Link } from 'react-router'
import './styles/header.less'

class Header extends Component {
    static propTypes = {
        title: PropTypes.string
    }
    constructor() {
        super()
    }
    render() {
        return (
            <div className="header">
                <a href="javascript:;" onClick={ browserHistory.goBack } className="iconfont icon-back"></a>
                <h3>{ this.props.title }</h3>
                <Link to="/" className="iconfont icon-home"></Link>
            </div>
        )
    }
}

export default Header