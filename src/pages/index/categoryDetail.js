import React, { Component } from 'react'
import { Link } from 'react-router'
import RouterActivity from '../../containers/routerActivity'
import { getCategoryInfo } from '../../api/'
import Header from '../../components/header'
class CategoryDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pageIndex: 1,
        }
    }
    
    componentWillMount() {
        let props = this.props;
        let sendData = {
            gender: props.location.query.gender,
            type: 'hot',
            major: props.params.keyword,
            start: this.state.pageIndex,
            minor: '',
            limit: 20
        }
        getCategoryInfo(sendData).then(res => {
            console.log(res)
        })
    } 


    render() {  
        return (
            <div className="page">
                <Header title="玄幻"/>
                <Link to="/bookList">bookList</Link>
            </div>
        )
    }
}

export default RouterActivity(CategoryDetail)
