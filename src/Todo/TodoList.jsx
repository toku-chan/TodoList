import React, { Component } from 'react'
import { connect } from 'react-redux'

// ここでは、addFormで取得したTODOのリスト内容を追加していく
class TodoList extends Component {
    // Storeのdate配列として、messageが格納されているので、それを特定のタグで展開すれば良いと考えている
    render() {
        let Todo = this.props.data.map((value) => (
            <li key={value.message}>{value.message}</li>
        ))

        return (
            <div>
                <ul>{Todo}</ul>
            </div>
        )
    }
}


// Storeの内容を使うので、まずはconnect
export default connect((state) => state) (TodoList)