import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { changeThemeColor } from '../reducer/themeColor'
import Header from '../components/header'
import Container from '../components/container'

class ThemeColor extends Component {
    static propTypes = {
        themeColor: PropTypes.string,
        changeThemeColor: PropTypes.func
    }    

    constructor() {
        super()
    }

    handleChangeThemeColor(color) {
        this.props.changeThemeColor(color)
    }

    render() {
        return (
            <div>
                <Header themeColor = { this.props.themeColor } />
                <Container 
                    themeColor = { this.props.themeColor }  
                    changeColor = {this.handleChangeThemeColor.bind(this)}
                    />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        themeColor: state.themeColor
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeThemeColor: color => {
            dispatch(changeThemeColor(color))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ThemeColor)