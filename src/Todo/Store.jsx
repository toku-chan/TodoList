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

        case 'DELETE':
            return deleteReducer(state, action)

        default:
            return state
    }
}

// 追加処理
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

// 削除処理
function deleteReducer(state, action) {
    let newdata = state.data.slice()
    newdata.splice(action.index, 1)

    return {
        data: newdata
    }
}

export default createStore(todoReducer)