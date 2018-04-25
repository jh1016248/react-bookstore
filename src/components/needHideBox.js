import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './styles/needHideBox.less'

class NeedHideBox extends Component {
    static propTypes = {
        text: PropTypes.string
    }
    
    constructor(props){
        super(props)
        this.state = {
            show: false
        }
    }

    changeShow() {
        this.setState({
            show: !this.state.show
        })
    }
    
    render() {
        let show = this.state.show
        return (
            <div className={show ? 'need-hide-box active' : 'need-hide-box'} onClick={this.changeShow.bind(this)}>
                <p>{this.props.text}</p>
                <a href="javascript:;" className="switch" ><span className={show ? 'iconfont icon-arrow-top' : 'iconfont icon-arrowbottom'}></span></a>
            </div>
        )
    }
}

export default NeedHideBox