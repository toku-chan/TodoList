import React, { Component } from 'react'

// TODO : cssファイルで読み込まないように対応する
import Modal from './Modal.jsx'

class Item extends Component {
    constructor(props) {
        super(props)
        this.doAction = this.doAction.bind(this)
    }

    li = {
        paddingTop: '16px'
    }

    todo = {
        fontSize: '12pt'
    }

    doAction(e) {
        let modal = e.target.nextSibling
        modal.classList.add('show-modal-area')
    }

    render() {
        return (
            <li style={this.li}>
                <div onClick={this.doAction} style={this.todo}>{this.props.msg}</div>
                <Modal todo={this.props.msg} index={this.props.num} />
            </li>
        )
    }
}

export default Item