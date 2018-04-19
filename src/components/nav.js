import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import './styles/nav.less'

class Nav extends Component {
    static propTypes = {
        navIndex: PropTypes.number
    }

    constructor() {
        super()
    }

    render() {
        const nav = [
            {
                href: '/',
                name: '首页'
            },
            {
                href: '/category',
                name: '分类'
            },
            {
                href: '/ranking',
                name: '排行'
            },
            {
                href: '/bookList',
                name: '书单'
            },
        ]
        return (
            <div className="header-nav">
                {nav.map((item, index) => {
                    return (<Link to={item.href} key={index} className={this.props.navIndex == index ? 'active' : ''}>{item.name}</Link>)
                })}
            </div>
        )
    }
}

export default connect(state => {
    return {
        navIndex: state.RouterActivity.navIndex
    }
})(Nav)