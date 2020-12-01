import React, { Component } from 'react'
import { connect } from 'react-redux'
import Item from './Item/Item.jsx'

class TodoList extends Component {

    render() {
        let Todo = this.props.data.map((value, index) => (
            <Item key={index} msg={value.message} num={index} />
        ))

        return (
            <div>
                <ul>{Todo}</ul>
            </div>
        )
    }
}

export default connect((state) => state) (TodoList)