import React, { useState } from 'react';
import './App.css';
import TaskForm from './Components/TaskForm/TaskForm';
import TaskList from './Components/TaskList/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task].sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate)));
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
  };

  const showDetails = (index) => {
   
    const updatedTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, showDetails: !task.showDetails };
      }
      return task;
    });
    setTasks(updatedTasks)
  };

  const updateTask = (index, field, value) => {
    const updatedTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, [field]: value };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const toggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, checked: !task.checked };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const removeTasks = () => {
    const updatedTasks = tasks.filter(task => !task.checked);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} removeTask={removeTask} showDetails={showDetails} updateTask={updateTask} toggleTask={toggleTask} removeTasks={removeTasks} />
    </div>
  );
}

export default App;

