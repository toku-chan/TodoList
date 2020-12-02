import React, { Component } from 'react'
import { connect } from 'react-redux'

class DeleteBtn extends Component {
    constructor(props) {
        super(props)
        this.doAction = this.doAction.bind(this)
    }

    area = {
        position: 'relative',
        width: '560px',
        height: '40px'
    }

    button = {
        position: 'absolute',
        bottom: '0',
        right: '0'
    }

    doAction() {
        let index = this.props.index
        let action = {type: 'DELETE', index: index}
        this.props.dispatch(action)
    }

    render() {
        return(
            <div className="delete-btn-area" style={this.area}>
                <button className="delete-btn switchingFlag" onClick={this.doAction} style={this.button}>DELETE</button>
            </div>
        )
    }
}

export default connect((state) => state)(DeleteBtn)