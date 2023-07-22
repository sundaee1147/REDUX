import React from 'react';

const Task = ({ task, onEditTask }) => {
const { id, description, isDone } = task;

const handleEdit = () => {
onEditTask(id);
};

return (
<div>
    <span>{description}</span>
    <span>{isDone ? ' (Done)' : ' (Not Done)'}</span>
    <button onClick={handleEdit}>Edit</button>
</div>
);
};

export default Task;
