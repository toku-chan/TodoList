import React, { Component } from 'react'
import DeleteBtn from './DeleteBtn'
import './Modal.css'

class Modal extends Component {
    constructor(props) {
        super(props)
        this.closeModal = this.closeModal.bind(this)
    }

    closeModal(e) {
        const area = e.target
        const showModalClass = document.querySelector('.show-modal-area')

        if (area.classList.contains('show-modal-area') || area.classList.contains('close')) {
            showModalClass.classList.remove('show-modal-area')
        }
    }

    render() {
        return (
            <div className='modal-area' onClick={this.closeModal}>
                <div className="modal">
                    <p>{this.props.todo}</p>
                    <DeleteBtn index={this.props.index} />
                    <div className="close-btn-area close">
                        <div className="close-btn close"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal