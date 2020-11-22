import { createStore } from 'redux'

// 初期設定
const init = {
    data: [{message: 'sample'}]
}

// reducer
export function todoReducer(state = init, action) {
    switch(action.type) {
        case 'ADD':
            return addReducer(state, action)

        default:
            return state
    }
}

function addReducer(state, action) {
    let data = {
        message: action.message
    }
    let newdata = state.data.slice()
    newdata.push(data)

    return {
        data: newdata
    }
}

export function addMemo(text) {
    return {
        type: 'ADD',
        message: text
    }
}

export default createStore(todoReducer)