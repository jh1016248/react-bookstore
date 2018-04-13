import React, { Component } from 'react';
import { Link } from 'react-router';

class Index extends Component {
    constructor() {
        super()
    }

    handelClick() {
    }

    render() {
        return (
            <div className="wrap">
                <div>
                    <a href="javascript:;" onClick={this.handelClick.bind(this)}>http request</a>
                    <br/>
                    <Link to="/chat">to chat</Link>
                </div>
            </div>
        )
    }
}

export default Index
