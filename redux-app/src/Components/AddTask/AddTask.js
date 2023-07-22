import React, { useState } from 'react';

const AddTask = ({ onAddTask }) => {
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim()) {
      onAddTask({
        id: Date.now(),
        description,
        isDone: false,
      });
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter task description..."
        
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;
