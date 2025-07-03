import {useState} from "react";

function TaskForm() {
    
const [title, setTitle] = useState("")

const handleSubmit=(e)=>{
    e.preventDefault();//evita reload form
    console.log(title)
 }  


  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="escribe tu tarea" 
        onChange={(e)=>setTitle(e.target.value)}
      />
      <button>Guardar</button>
    </form>
  );
}

export default TaskForm;
