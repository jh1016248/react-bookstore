import React, { Component } from 'react'
import { Router, IndexRoute, Link, Route, browserHistory } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Index from '../pages/index';
import Header from '../components/header'
//按需加载 https://segmentfault.com/a/1190000007141049
class App extends Component {
	constructor(props) {
        super(props)
	}
	
	render() {
		return (
			<div className="app">
				<ReactCSSTransitionGroup
					component="div"
					className="transition-wrapper"
					transitionName="example"
					transitionEnterTimeout={500}
					transitionLeaveTimeout={500}>
					{React.cloneElement(this.props.children, {
						key: this.props.location.pathname
					})}
				</ReactCSSTransitionGroup>
			</div>
		);
	}
}

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
            cb(null, App)
        }, 'App')
    },
    childRoutes: require('./indexModules').concat(require('./bookModules'))
}

class router extends Component {
	constructor(props) {
		super(props)
	}
	componentDidMount() {
        
	}
	render() {
		return (
			<Router history={ browserHistory } routes={ rootRoute }></Router>
		);
	}
}

export default router;