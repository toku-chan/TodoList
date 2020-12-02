import React, { Component } from 'react'
import { connect } from 'react-redux'
import Item from './Item/Item.jsx'

class TodoList extends Component {

    ul = {
        paddingTop: '24px'
    }

    render() {
        let Todo = this.props.data.map((value, index) => (
            <Item key={index} msg={value.message} num={index} />
        ))

        return (
            <ul style={this.ul}>{Todo}</ul>
        )
    }
}

export default connect((state) => state) (TodoList)