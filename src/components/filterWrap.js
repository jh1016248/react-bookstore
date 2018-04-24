import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './styles/filterWrap.less'
class FilterWrap extends Component {
    static propTypes = {
        showMinus: PropTypes.bool,
        list: PropTypes.array,
        indexList: PropTypes.array,
        changeIndex: PropTypes.func
    }

    componentWillMount() {
    }
    
    constructor(){
        super()
    }

    handleClick(index, subIndex) {
        this.props.changeIndex(index, subIndex)
    }
    
    render() {
        let details = (
            <div className="details">
                {
                    this.props.list.map((item, index) => {
                        return (
                            <div className="filter-items" key={index}>
                                <div className="inner">
                                    <ul>
                                        {item.map((subItem, subIndex) => {
                                            return ( 
                                                <li 
                                                    key={subIndex} 
                                                    className={this.props.indexList[index] == subIndex ? 'active' : ''} 
                                                    onClick={this.handleClick.bind(this, index, subIndex )}
                                                    >
                                                    {subItem.name ? subItem.name : subItem}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
        let stateName = this.props.list.map((item, index) => {
            
        })
        let minus = (
            <div className="minus">
                全部-热门<span className="iconfont icon-arrow-top"></span>
            </div>
        )
        return (
            <div className="filter-wrap">
                {this.props.showMinus ? minus : details}
            </div>
        )
    }
}

export default FilterWrap