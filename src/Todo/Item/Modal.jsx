import React, { Component } from 'react'
import { connect } from 'react-redux'
import DeleteBtn from './DeleteBtn'

class Modal extends Component {
    render() {
        return (
            <div>
                <p>{this.props.todo}</p>
                <DeleteBtn index={this.props.index} />
            </div>
        )
    }
}

export default connect()(Modal)