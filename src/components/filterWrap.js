import React, { Component } from 'react'
import PropTypes from 'prop-types'

class FilterWrap extends Component {
    static propTypes = {
    }
    
    constructor(){
        super()
    }
    
    render() {
        return (
            <div className="filter-wrap">
                <div className="filter-items">
                    <a href="">测试</a>
                    <a href="">测试</a>
                    <a href="">测试</a>
                    <a href="">测试</a>
                </div>
                <div className="filter-items">
                    <a href="">测试</a>
                    <a href="">测试</a>
                    <a href="">测试</a>
                    <a href="">测试</a>
                </div>
            </div>
        )
    }
}

export default FilterWrap