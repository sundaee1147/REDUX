import React from 'react';
import Task from '../Task/Task';


const ListTask = ({ tasks, onEditTask }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onEditTask={onEditTask} />
      ))}
    </div>
  );
};

export default ListTask;
