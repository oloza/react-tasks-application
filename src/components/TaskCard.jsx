function TaskCard({task,deleteTask}) {

  return (
         <div>
             <p>{task.title}</p>
             <p>{task.description}</p>
             <button onClick={()=>deleteTask(task.id)}>eliminar</button>
         </div>
  )
}

export default TaskCard