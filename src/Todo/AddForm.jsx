/**
 * TODO
 * React Hooks化
 * 現状Reduxとの共存方法がわからないので、クラスコンポーネントで記載することにした。
 * 共存可能かどうかわかってから、Hooks化の対応を行う
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addMemo } from './Store.jsx'

class AddForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: ''
        }
        this.doChange = this.doChange.bind(this)
        this.doAction = this.doAction.bind(this)
    }

    doChange(e) {
        this.setState({
            message: e.target.value
        })
    }

    doAction(e) {
        e.preventDefault()
        let action = addMemo(this.state.message)
        this.props.dispatch(action)
        this.setState({
            message: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.doAction}>
                <input type="text" onChange={this.doChange} value={this.state.message} required />
                <input type="submit" value="ADD" />
            </form>
        )
    }
}

export default connect((state) => state)(AddForm)