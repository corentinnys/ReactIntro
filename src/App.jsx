import React, { useState,useEffect } from 'react'
import './App.css'
import List from './TodoList';
import Formulaire from './Formulaire';

const LSKEY = "MyTodoApp";

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState(() => {
    const localValue = localStorage.getItem(LSKEY)
   if (localValue == null) return []
         
   return JSON.parse(localValue)
 })
  

  const handleChange = (e) => {
    setTask(e.target.value);  
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };
  const handleDelete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };
  useEffect(() => {
    localStorage.setItem(LSKEY ,JSON.stringify(tasks));
  });
  
  return (
    <div>
      <h1>My todo list</h1>
  
      <Formulaire handleChange={handleChange} handleSubmit={handleSubmit} task={task}  />
      
      <List tasks={tasks} handleDelete={handleDelete}/>
    </div>
  );
}


export default App;