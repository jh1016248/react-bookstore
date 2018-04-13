import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Base extends Component {
    static propTypes = {

    }
    
    constructor(){
        super()
    }
    
    render() {
        return (
          <div>
            base
          </div>
        )
    }
}

export default Base