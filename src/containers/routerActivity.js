import React, { Component } from 'react'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const hrefs = {
    '/': 0,
    '/category': 1,
    '/ranking': 2,
    '/bookList': 3,
}

export default (WrappedComponent) => {
    class ReactActivity extends Component {
        static propTypes = {
            direction: PropTypes.string,
            changeDirection: PropTypes.func,
            changeLoading: PropTypes.func,
            changeNavIndex: PropTypes.func,
            navIndex: PropTypes.number
        }
        
        constructor(props) {
            super(props)
        }

        componentDidMount() {
            let session = sessionStorage
            let path = this.props.location.pathname
            let sessionPath = session.getItem(path)
            let historyCount = session.getItem('historyCount') * 1 || 0
            if(!sessionPath || sessionPath == '') {
                session.setItem(path, historyCount + 1)
                session.setItem('historyCount', historyCount + 1)
            }

            this.props.changeNavIndex(hrefs[path] || 0)
            this.props.changeLoading(false)

            this.props.router.setRouteLeaveHook(
                this.props.route,
                this.routerWillLeave.bind(this)
            )
        }
        
        routerWillLeave(nextLocation) {
            let session = sessionStorage
            let path = this.props.location.pathname
            let historyCount = session.getItem('historyCount') * 1 || 0
            let sessionNextPath = session.getItem(nextLocation.pathname)
            let sessionPath = session[path]
            if(!sessionNextPath || sessionNextPath == '') {
                session.setItem('historyCount', historyCount + 1)
                session.setItem(nextLocation.pathname, historyCount + 1)
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
            this.props.changeLoading(true)
            return true;
        }

        render() {
            let props = this.props
            let obj = {
                params: props.params,
                location: props.location,
                history: props.history,
                routeParams: props.routeParams,
                router: props.router,
                routes: props.routes
            }
            return <WrappedComponent {...obj}/>
                
        }
    }

    const mapStateToProps = state => {
        return {
            direction: state.RouterActivity.direction,
            navIndex: state.RouterActivity.navIndex
        }
    }
    
    const mapDispatchToProps = dispatch => {
        return {
            changeDirection: direction => {
                dispatch({
                    type: "CHANGE_DIRECTION",
                    direction
                })
            },
            changeLoading: loading => {
                dispatch({
                    type: "CHANGE_LOADING",
                    loading
                })
            },
            changeNavIndex: index => {
                dispatch({
                    type: "CHANGE_NAV_INDEX",
                    index
                })
            }
        }
    }

    return connect(mapStateToProps, mapDispatchToProps)(withRouter(ReactActivity))
}