import React, { useState } from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css'; 

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const filterTasks = () => tasks.filter(task => task.completed === false);

  const addTask = () => {
    if (task) {
      setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
      setTask('');
    }
  };

  const completeTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: true } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <input
        type="text"
        value={task}
        onChange={handleInputChange}
        placeholder="Enter a task"
      />
      <button onClick={addTask}>Add Task</button>

      <ul>
        {filterTasks().map((task) => (
          <li key={task.id}>
            <span
              style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            >
              {task.text}
            </span>
            {/* Complete Task Icon */}
            <i
              className="fa fa-check-circle"
              onClick={() => completeTask(task.id)}
              style={{ cursor: 'pointer', marginRight: '10px', color: 'green' }}
            ></i>
            {/* Delete Task Icon */}
            <i
              className="fa fa-trash"
              onClick={() => deleteTask(task.id)}
              style={{ cursor: 'pointer', color: 'red' }}
            ></i>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
