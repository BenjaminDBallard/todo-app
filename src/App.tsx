import { useState } from 'react'
import { nanoid } from "nanoid";
import Todo from "./components/Todo";
import Form from "./components/Form";

function App(props: any) {

  const [tasks, setTasks] = useState(props.tasks);

  function addTask(name: any) {
    const newTask = {id: `todo-${nanoid()}`, name, completed: false}
    setTasks([...tasks, newTask])
  }

  function toggleTaskCompleted(id: string) {
    const updatedTasks = tasks.map((task: any) => {
      if(id === task.id){
        return {...task, completed: !task.completed}
      }
      return task;
    })
    setTasks(updatedTasks)
  }

  function editTask(id: string, newName: string) {
    const editedTaskList = tasks.map((task: any) => {
      if (id === task.id) {
        return {...task, name: newName}
      }
      return task;
    });
    setTasks(editedTaskList);
  }

  function deleteTask(id: string) {
    const remainingTasks = tasks.filter((task: any) => id !== task.id);
    setTasks(remainingTasks);
  }

  const taskList = tasks.map((task: any) => (
    <Todo
    id={task.id}
    name={task.name}
    completed={task.completed}
    key={task.id}
    toggleTaskCompleted={toggleTaskCompleted}
    editTask={editTask}
    deleteTask={deleteTask}
    />
  ));

  const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
  const headingText = `${taskList.length} ${tasksNoun} remaining`;

  return (
    <div className="todoapp stack-large">
      <h1>TodoList</h1>
      <Form addTask={addTask} />
      <h2 id="list-heading">{headingText}</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        {taskList}
      </ul>
    </div>
  );
}

export default App
