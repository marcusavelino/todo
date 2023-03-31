import { CheckboxTask } from "../../components/Checkbox";
import { NewTask } from "../../components/NewTask";
import { ContainerTasks, CountTasks, NoTasks, Task, Tasks, TrashContent } from "./styles";
import { TrashIcon } from '@radix-ui/react-icons';
import { useEffect, useState } from 'react';
import { stateTasksReduce } from "../../hooks/stateTaskReduce";
import { v4 as uuid } from 'uuid';
import clipboard from '../../assets/images/clipboard.png';
import Image from "next/image";

export default function Tarefas() {

  interface CountTaksType {
    total: number;
    completed: number;
  }

  interface TasksType {
    id: string;
    checked: boolean;
    description: string;    
  }

  const [tasks, setTasks] = useState<TasksType[]>([]);
  const countTaks: CountTaksType = stateTasksReduce(tasks);

  function handleChangeChecked(id: string, checked: boolean) {
    const newTasks = tasks.map(task => {
      if(task.id == id) {
        task.checked = checked;
      }

      return task
    })

    setTasks(newTasks);
    let stateTasks =  stateTasksReduce(tasks);
  }

  function addNewTask(desc: string) {
    const id = uuid();

    const newTask:TasksType = {
      id: id,
      checked: false,
      description: desc
    };

    setTasks((tasks) => {
      return ([...tasks, newTask])
    })
  }

  function handleDeleteTask(id: string) {
    const newTasks = tasks.filter(task => task.id != id)
    setTasks(newTasks);
  }

  return (
    <>
      <NewTask addNewTask={addNewTask} />
      <ContainerTasks>
        <CountTasks>
          <div className="created">Tarefas criadas <span>{countTaks.total}</span></div>
          <div className="completed">Concluídas <span>{countTaks.completed} de {countTaks.total}</span></div>
        </CountTasks>
        { (tasks.length > 0) ? (
          <Tasks>
          { tasks.map(task => (
            <Task key={task.id}>
              <CheckboxTask 
                check={task.checked} 
                id={task.id} 
                handleChangeChecked={handleChangeChecked} 
              />
              <div className={task.checked ? 'completed-task': ''}>{task.description}</div>
              <TrashContent onClick={(id) => [task.id, handleDeleteTask(task.id)]}>
                <TrashIcon width={25} height={25}/>
              </TrashContent>
            </Task>
          )) }
        </Tasks>
        ) : (
          <NoTasks>
            <Image src={clipboard} alt=''/>
            <p><span>Você ainda não tem tarefas cadastradas</span></p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </NoTasks>
        )}
        
      </ContainerTasks>
    </>
  )
}