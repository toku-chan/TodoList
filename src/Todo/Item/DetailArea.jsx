import React, { Component } from 'react'

class DetailArea extends Component {
    detail = {
        width: '560px',
        marginTop: '24px'
    }

    textArea = {
        width: '560px',
        padding: '4px 8px',
        border: '1px solid #ccc'
    }

    render() {
        return (
            <div className="detail-area" style={this.detail}>
                <textarea placeholder="詳細を追加できます！" cols="30" rows="10" style={this.textArea}></textarea>
            </div>
        )
    }
}

export default DetailArea;