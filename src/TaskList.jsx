import {tasks as data} from './task'   
import { useState,useEffect } from 'react'

function TaskList() {
  const [tasks, setTasks] = useState([])
  
  useEffect(()=>{
    setTasks(data);
  },[])


  if(tasks.length===0){
   return <h1>no ay tareas aún</h1> 
  }

  return (
    <div>{
        tasks.map((task)=>(
            <div key={task.id}>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
            </div>
        ))
        }
        </div>
  )
}

export default TaskList