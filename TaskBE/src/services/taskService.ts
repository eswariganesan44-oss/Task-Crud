import * as repo from "../repositories/taskRepository";

export const fetchTasks = () =>
    repo.getAllTasks();

export const addTask =(title: string, description: string)=>
    repo.createTask(title, description);

export const changeTaskStatus = (id:number, status: string)=>
    repo.updateTask(id, status);


export const removeTask =(id:number) => repo.deleteTask(id);
