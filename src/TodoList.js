import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, editTodo, removeTodo, toggleComplete }) {
  return (
    <table className="todo-table">
      <thead>
        <tr>
          <th>Description</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            index={index}
            todo={todo}
            editTodo={editTodo}
            removeTodo={removeTodo}
            toggleComplete={toggleComplete}
          />
        ))}
      </tbody>
    </table>
  );
}

export default TodoList;
