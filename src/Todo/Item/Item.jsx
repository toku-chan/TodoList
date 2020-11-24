import React, { Component } from 'react'
import { connect } from 'react-redux'
import Modal from './Modal.jsx'

class Item extends Component {
    constructor(props) {
        super(props)
        this.doAction = this.doAction.bind(this)
    }

    doAction() {
        console.log(this.props.num)
    }

    render() {
        return (
            <li onClick={this.doAction} >
                <div>{this.props.msg}</div>
                <Modal todo={this.props.msg} index={this.props.num}/>
            </li>
        )
    }
}

export default connect()(Item)