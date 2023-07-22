import React, { useState } from 'react';
import AddTask from "./Components/AddTask/AddTask"
import ListTask from "./Components/ListTask/ListTask"


const App = () => {

  let [tasks, setTasks] = useState('');

  tasks = [
    {id: Date.now(),
    description: "RUNITUP",
    isDone: false,
  },

  {id: Date.now(),
    description: "WetheKing",
    isDone: false,
  }
]

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleEditTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, isDone: !task.isDone } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <AddTask onAddTask={handleAddTask} />
      <ListTask tasks={tasks} onEditTask={handleEditTask} />
    </div>
  );
};

export default App;
