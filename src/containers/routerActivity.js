import React, { Component } from 'react'
import { withRouter } from 'react-router'

export default (WrappedComponent) => {
    class ReactActivity extends Component {
        constructor() {
            super();
        }

        componentDidMount() {
            console.log(11)
            this.props.router.setRouteLeaveHook(
                this.props.route,
                this.routerWillLeave
            )
        }
        
        routerWillLeave(nextLocation) {
            console.log(22)
            
            return true;
        }

        render() {
            return <WrappedComponent/>
        }
    }
    return withRouter(ReactActivity)
}