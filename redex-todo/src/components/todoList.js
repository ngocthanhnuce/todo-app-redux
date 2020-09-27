import React from 'react'
import { useSelector, useDispatch} from 'react-redux';
import { deleteTodo, updateTodo } from '../actions';

const TodoList = props => {
    let todoList = useSelector(state => state.todos);
    let dispatch = useDispatch();

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
      {
        todoList.map((todo) => (
                <tr key= {todo.id}>
                    <td>{todo.name}</td>
                    <td>{todo.username}</td>
                    <td>
                    <button className="button muted-button" onClick = { ()=> dispatch(updateTodo(todo.id))} >Edit</button>
                    <button className="button muted-button" onClick = {()=> dispatch(deleteTodo(todo.id))}>Delete</button>
                    </td>
                </tr>
            ))
            
        }
      </tbody>
  </table>
  )
}

export default TodoList