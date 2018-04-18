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
            console.log(this.props.direction)
            this.props.router.setRouteLeaveHook(
                this.props.route,
                this.routerWillLeave.bind(this)
            )
        }
        
        routerWillLeave(nextLocation) {
            let session = sessionStorage
            let path = this.props.location.pathname
            let historyCount = session.getItem('historyCount') * 1 || 0
            let sessionNextPath = session.getItem(nextLocation.pathname) * 1
            let sessionPath = session[path]

            if(!sessionPath || sessionPath == '') {
                session.setItem(path, historyCount + 1)
                session.setItem('historyCount', historyCount + 1)
                this.props.changeDirection('forward')
            }
            else{
                if(!sessionNextPath || sessionNextPath == '') {
                    session.setItem('historyCount', historyCount + 1)
                    session.setItem(sessionNextPath, historyCount + 1)
                    this.props.changeDirection('forward')
                }
                else{
                    if(sessionNextPath > sessionPath) {
                        this.props.changeDirection('forward')
                    }
                    else{
                        this.props.changeDirection('backward')
                    }
                }
            }
            return true;
        }

        render() {
            return <WrappedComponent/>
        }
    }

    const mapStateToProps = state => {
        return {
            direction: state.RouterActivity.direction
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