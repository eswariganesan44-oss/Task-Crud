import {useEffect, useState} from "react";
import API from "./services/api";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import React from 'react'

function App ()  {
  const [tasks, setTasks] =useState<{id: Number; title: string; description: string; status: string}[]>([]);

  const fetchTasks = async()=>{
    const res = await API.get("/tasks");
    setTasks(res.data);
  };

  useEffect(()=>{
    fetchTasks();
  },[]);

  return(
    <div style={{padding: "40px"}}>
      <h1> Task Manager</h1>

      <TaskForm refresh ={fetchTasks}/>
    </div>
  );
  
}

export default App;