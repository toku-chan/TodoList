import React, { Component } from 'react'
import { connect } from 'react-redux'
import DeleteBtn from './DeleteBtn.jsx'

// ここでは、addFormで取得したTODOのリスト内容を追加していく
class TodoList extends Component {

    render() {
        let Todo = this.props.data.map((value, index) => (
            <li key={index}>
                <div>{value.message}</div>
                <DeleteBtn index={index} />
            </li>
        ))

        return (
            <div>
                <ul>{Todo}</ul>
            </div>
        )
    }
}

export default connect((state) => state) (TodoList)