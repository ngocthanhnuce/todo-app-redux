import React, {useState} from 'react'
import { useDispatch} from 'react-redux';
import { addTodo } from '../actions';

const AddTodo = (props) => {

  const initialForm = {id: null, name: '', username: ''};
  const [todo, setTodo] = useState(initialForm);
  let dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodo({...todo, [name]:value});
  }

  return (
    <form >
      <label>Name</label>
      <input type="text" name="name" value = {todo.name} onChange = {handleChange}/>
      <label>Username</label>
      <input type="text" name="username" value = {todo.username} onChange = {handleChange}/>
      <button onClick = { (e)=> {
        e.preventDefault();
        dispatch(addTodo({
        id: Math.random(),
        name: todo.name,
        username: todo.username
      }));
      setTodo(initialForm);
      }
      }>Add new user</button>
    </form>
  )
}

export default AddTodo