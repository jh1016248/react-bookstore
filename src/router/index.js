import React, { Component } from 'react'
import { Router, IndexRoute, Link, Route, browserHistory } from 'react-router'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Index from '../pages/index'
import Header from '../components/header'
import { Toast } from 'react-weui'

class App extends Component {
    static propTypes = {
        direction: PropTypes.string,
        isLoading: PropTypes.bool,
        navIndex: PropTypes.number
    }

	constructor(props) {
        super(props)
    }

    componentWillMount() {
    }
	
	render() {
		return (
			<div className="app">
				<ReactCSSTransitionGroup
					component="div"
					className="transition-wrapper"
					transitionName={ this.props.direction === 'forward' ? 'fade-in-right' : 'fade-in-left' }
					transitionEnterTimeout={300}
					transitionLeaveTimeout={300}>
					{this.props.children && React.cloneElement(this.props.children, {
						key: this.props.location.pathname
					})}
                </ReactCSSTransitionGroup>
                <Toast show={ this.props.isLoading } icon="loading"/>
			</div>
		);
	}
}

const AppContainer = connect(state => {
    return {
        direction: state.RouterActivity.direction,
        isLoading: state.RouterActivity.isLoading,
        navIndex: state.RouterActivity.navIndex
    }
})(App)

const rootRoute = {
    path: '/',
    indexRoute: {
        getComponent(nextState, cb) {
            require.ensure([], (require) => {
                cb(null, require('../pages/index/index').default)
            }, 'Index')
        },
    },
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, AppContainer)
        }, 'App')
    },
    childRoutes: require('./indexModules').concat(require('./bookModules'))
}

class router extends Component {
	constructor(props) {
		super(props)
    }
    
	render() {
		return (
			<Router history={ browserHistory } routes={ rootRoute }></Router>
		);
	}
}

export default router;