import React, { Component } from 'react'
import DetailArea from './DetailArea.jsx'
import DeleteBtn from './DeleteBtn'
import CloseBtn from './CloseBtn'
import './Modal.css'

class Modal extends Component {
    constructor(props) {
        super(props)
        this.closeModal = this.closeModal.bind(this)
    }

    p = {
        fontSize: '24px'
    }

    closeModal(e) {
        const area = e.target
        const showModalClass = document.querySelector('.show-modal-area')

        if (area.classList.contains('switchingFlag')) {
            showModalClass.classList.remove('show-modal-area')
        }
    }

    render() {
        return (
            <div className='modal-area switchingFlag' onClick={this.closeModal}>
                <div className="modal">
                    <p style={this.p}>{this.props.todo}</p>
                    <DetailArea />
                    <DeleteBtn index={this.props.index} />
                    <CloseBtn />
                </div>
            </div>
        )
    }
}

export default Modal