import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'

import './styles/categoryItem.less'

class CategoryItem extends Component {
    static propTypes = {
        title: PropTypes.string,
        name: PropTypes.string,
        list: PropTypes.array
    }
    constructor(props) {
        super(props)
    }

    render() {
        const lists = this.props.list.map((item, index) => {
            return (
                <li key={item.icon}>
                    <Link to={`/category/${item.name}?gender=${this.props.name}`}>
                        <p className="title">{item.name}</p>
                        <p className="count">{item.bookCount}</p>
                    </Link>
                </li>)
        })

        return (
            <div className="category-item">
                <h4>{this.props.title}</h4>
                <ul>
                    {lists}
                </ul>
            </div>
        )
    }
}

export default CategoryItem