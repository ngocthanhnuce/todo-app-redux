import React, {Fragment, useState} from 'react';
import AddTodo from './components/addTodo';
import EditTodo from './components/editTodo';
import TodoList from './components/todoList'
import './App.css';

const App = () => {
  return (
    <div className="container">
        <h1>CRUD App with Hooks</h1>
        <div className="flex-row">
          <div className="flex-large">
                <Fragment>
                  <h2>Add user</h2>
                  <AddTodo/>
                  <h2>Edit user</h2>
                  <EditTodo/>
                </Fragment>
          </div>
          <div className="flex-large">
                <h2>View users</h2>
                <TodoList />
        </div>
        </div>
      </div>
  );
}

export default App;
