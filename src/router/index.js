import React, { Component } from 'react';
import { Router, IndexRoute, Link, Route, hashHistory } from 'react-router';
import Index from '../pages/index';
//按需加载 https://segmentfault.com/a/1190000007141049
class App extends Component {
	constructor(props) {
        super(props)
    }

	render() {
		return (
			<div>
				{this.props.children}
			</div>
		);
	}
}

class router extends Component {
	constructor(props) {
		super(props)
	}
	componentDidMount() {
        
	}
	render() {
		return (
			<Router history={hashHistory}>
				<Route path="/" component={App}>
					<IndexRoute component={Index} />
				</Route>
			</Router>
		);
	}
}

export default router;