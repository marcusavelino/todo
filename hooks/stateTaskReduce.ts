/** 
  Método usado para converter as tasks em um array com a contagem de todas as 
  tasks e de todas as tasks completas
*/

interface TasksType {
  id: string;
  checked: boolean;
  description: string;    
}

export function stateTasksReduce(tasks:TasksType[]) {
  const stateTasks = tasks.reduce((acc, task) => {
    if(task.checked == true){
      acc.completed += 1;
    }
    acc.total += 1;
    return(acc)
  },
  {
    total: 0,
    completed: 0
  })

  return stateTasks;
}