import * as  types from '../constants/actionType'

const todoList = [

        { id: 1, name: 'Thanh', username: 'ngocthanh' },
        { id: 2, name: 'Thuc', username: 'lethuc' },
        { id: 3, name: 'Hoang', username: 'doanhoang' },
    ]

const todoReducer = (state = todoList, action) => {
    let newTodo;
    switch(action.type){
        case types.ADD_TODO :
            newTodo = [...state];
            newTodo.push(action.payload);
            return newTodo;
        case types.REMOVE_TODO :
            newTodo = [...state];
            newTodo = newTodo.filter(todo => todo.id !== action.payload);
            return newTodo;
        case types.UPDATE_TODO :
           newTodo = [...state];
        //    return newTodo.map((todo)=>{
        //     if(todo.id === action.payload.id) {
        //       return {
        //          ...todo,
        //          editing: !todo.editing
        //       }
        //     } else return todo;
        //   })
          const updateUser = action.payload;

            const updateUsers = newTodo.map(todo => {
                if (todo.id === updateUser.id) {
                return updateUser;
                }
                return todo;
            })
            return {
                ...state,
                todos: updateUsers
            }
        default: return state
    }
    return state;
}

export default todoReducer;