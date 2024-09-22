import React, { useState } from 'react';

function TodoItem({ todo, index, editTodo, removeTodo, toggleComplete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTodo(index, editValue);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditValue(todo.text);
  };

  return (
    <tr className={`todo-item ${todo.isCompleted ? 'completed' : ''}`}>
      <td>
        {isEditing ? (
          <input
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
          />
        ) : (
          <span>{todo.text}</span>
        )}
      </td>
      <td>
        {isEditing ? (
          <div className="btn-group">
            <button className="btn save" onClick={handleSave}>Save</button>
            <button className="btn cancel" onClick={handleCancel}>Cancel</button>
          </div>
        ) : (
          <div className="btn-group">
            <button className="btn complete" onClick={() => toggleComplete(index)}>
              {todo.isCompleted ? 'Undo' : 'Complete'}
            </button>
            <button className="btn edit" onClick={handleEdit}>Edit</button>
            <button className="btn remove" onClick={() => removeTodo(index)}>Remove</button>
          </div>
        )}
      </td>
    </tr>
  );
}

export default TodoItem;
