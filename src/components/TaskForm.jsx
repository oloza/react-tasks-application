import {useState} from "react";

function TaskForm({createTask}) {
    
const [title, setTitle] = useState("")
const [description, setDescription] = useState("")

const handleSubmit=(e)=>{
    e.preventDefault();//evita reload form
  createTask({title,description})
  setTitle("")
  setDescription("")
 }  


  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="escribe tu tarea" 
        onChange={(e)=>setTitle(e.target.value)}
        value={title}
        autoFocus
      />
      <textarea 
      placeholder="write description"
      onChange={(e)=>setDescription(e.target.value)}
      value={description}
      ></textarea>
      <button>Guardar</button>
    </form>
  );
}

export default TaskForm;
