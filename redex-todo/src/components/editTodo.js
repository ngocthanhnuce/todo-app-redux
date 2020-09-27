import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch} from 'react-redux';
import { updateTodo } from '../actions';

const EditTodo = (props) => {
  let todos = useSelector(state => state.todos);

  const [selectedTodo, setSelectedTodo] = useState({id: null, name: '', username: ''});
  let dispatch = useDispatch();
  const currentTodoId = todos.id;

  useEffect(() => {
    const todoId = currentTodoId;
    const selectedTodo = todos.find(todo => todo.id === todoId);
    console.log(selectedTodo);
    setSelectedTodo(selectedTodo);
  }, [currentTodoId, todos])

  const handleChange = (e) => {
    setSelectedTodo({ ...selectedTodo, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    updateTodo(selectedTodo);
  }

  return (
    <form onSubmit={onSubmit}>
      <label>Name</label>
      <input type="text" name="name" value = {todos.name} onChange = {handleChange}/>
      <label>Username</label>
      <input type="text" name="username" value = {todos.username} onChange = {handleChange}/>
      <button>Update user</button>
    </form>
  )
}

export default EditTodo