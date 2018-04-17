import React, { Component } from 'react'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export default (WrappedComponent) => {
    class ReactActivity extends Component {
        static propTypes = {
            direction: PropTypes.string,
            changeDirection: PropTypes.func
        }
        
        constructor() {
            super();
        }

        componentDidMount() {
            let path = this.props.route.path
            let session = sessionStorage
            let historyCount = session.getItem('historyCount') * 1 || 0

            if(!session[path] || session[path] === '') {
                session.setItem(path, historyCount + 1)
                session.setItem('historyCount', historyCount)
            }
            else{

            }
            this.props.router.setRouteLeaveHook(
                this.props.route,
                this.routerWillLeave
            )
        }
        
        routerWillLeave(nextLocation) {
            console.log(nextLocation)
            return true;
        }

        render() {
            return <WrappedComponent/>
        }
    }

    const mapStateToProps = state => {
        return {
            direction: state.routerActivity.direction
        }
    }
    
    const mapDispatchToProps = dispatch => {
        return {
            changeDirection: direction => {
                dispatch({
                    type: "CHANGE_DIRECTION",
                    direction
                })
            }
        }
    }

    return withRouter(connect(mapStateToProps, mapDispatchToProps)(ReactActivity))
}