import React, { Component } from 'react'
import { Link } from 'react-router'
import RouterActivity from '../../containers/routerActivity'
import LogoHeader from '../../components/logoHeader'
import Nav from '../../components/nav'
import CategoryItem from '../../components/categoryItem'
import { getCategories } from '../../api/index'

class Category extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categoryList: [],
        }
    }

    componentWillMount() {
        getCategories()
            .then(res => {
                const nameList = {
                    female: '女生',
                    male: '男生',
                }
                if(res.ok) {
                    let data = res
                    let categoryList = []
                    for(let i in data) {
                        if(nameList[i]) {
                            categoryList.push({
                                name: i,
                                title: nameList[i],
                                list: data[i]
                            })
                        }
                    }
                    this.setState({
                        categoryList
                    }, () => {
                        console.log(this.state)
                    })
                }
            })
    }

    render() {
        return (
            <div className="page">
                <LogoHeader />
                <Nav />
                {this.state.categoryList.map(item => {
                    return ((<CategoryItem title={item.title} name={item.name} key={item.name} list={item.list}/>))
                })}
            </div>
        )
    }
}

export default RouterActivity(Category)
