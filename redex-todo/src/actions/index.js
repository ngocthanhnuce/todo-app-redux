import * as actionType from '../constants/actionType'

export function addTodo (todo) {
    return {
        type: actionType.ADD_TODO,
        payload: todo
    }
}
export function deleteTodo (todoId) {
    return {
        type: actionType.REMOVE_TODO,
        payload: todoId
    }
}
export function updateTodo (todo) {
    return {
        type: actionType.UPDATE_TODO,
        payload: todo
    }
}