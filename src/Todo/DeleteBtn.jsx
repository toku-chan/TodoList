import React, { Component } from 'react'
import { connect } from 'react-redux'

class DeleteBtn extends Component {
    constructor(props) {
        super(props)
        this.doAction = this.doAction.bind(this)
    }

    doAction() {
        let index = this.props.index
        let action = {type: 'DELETE', index: index}
        this.props.dispatch(action)
    }

    render() {
        return(
            <button onClick={this.doAction}>DELETE</button>
        )
    }
}

export default connect((state) => state)(DeleteBtn)