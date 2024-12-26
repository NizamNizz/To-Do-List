import React, { useState } from "react";

function ToDoItem({ task, deleteTask, toggleComplete, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleSave = () => {
    editTask(task.id, newText);
    setIsEditing(false);
  };

  return (
    <div className={`todo-item ${task.completed ? "completed" : ""}`}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <span onClick={() => toggleComplete(task.id)}>{task.text}</span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </>
      )}
    </div>
  );
}

export default ToDoItem;