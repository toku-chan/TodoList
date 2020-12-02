import React, { Component } from 'react'
import { connect } from 'react-redux'

class AddForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: ''
        }
        this.doChange = this.doChange.bind(this)
        this.doAction = this.doAction.bind(this)
    }

    form = {
        width: '360px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between'
    }

    input = {
        width: '100vw',
        marginRight: '16px',
        paddingBottom: '4px',
        borderBottom: '1px solid #333',
        fontSize: '12pt'
    }

    doChange(e) {
        this.setState({
            message: e.target.value
        })
    }

    doAction(e) {
        e.preventDefault()
        let action = {type: 'ADD', message: this.state.message}
        this.props.dispatch(action)
        this.setState({
            message: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.doAction} style={this.form}>
                <input type="text" onChange={this.doChange} value={this.state.message} style={this.input} required />
                <input type="submit" value="ADD" />
            </form>
        )
    }
}

export default connect()(AddForm)