import { FormNewTask } from "./styles";

export function NewTask({addNewTask}) {
  
  function handleAddNewTask({target}) {
    event.preventDefault();
    let desc = target.descriptionTask.value;    
    addNewTask(desc);
  }

  return(
    <FormNewTask onSubmit={handleAddNewTask}>
      <input 
        type="text" 
        placeholder="Adicione uma nova tarefa" 
        name="descriptionTask" 
      />
      <button>Criar</button>
    </FormNewTask>
  )
}