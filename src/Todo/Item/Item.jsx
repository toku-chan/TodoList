import React, { Component } from 'react'

// TODO : cssファイルで読み込まないように対応する
import Modal from './Modal.jsx'

class Item extends Component {
    constructor(props) {
        super(props)
        this.doAction = this.doAction.bind(this)
    }

    doAction(e) {
        let modal = e.target.nextSibling
        modal.classList.add('show-modal-area')
    }

    render() {
        return (
            <li>
                <div onClick={this.doAction}>{this.props.msg}</div>
                <Modal todo={this.props.msg} index={this.props.num} />
            </li>
        )
    }
}

export default Item