import{ Request, Response} from "express";

import * as service from "../services/taskService";

export const getTasks = async (req: Request, res: Response) => {
  const tasks = await service.fetchTasks();
  res.json(tasks);
};

export const createTask = async (req: Request, res: Response) => {
  const { title, description } = req.body;
  const task = await service.addTask(title, description);
  res.json(task);
};

export const updateTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { status } = req.body;
  const task = await service.changeTaskStatus(Number(id), status);
  res.json(task);
};

export const deleteTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  await service.removeTask(Number(id));
  res.json({ message: "Task deleted" });
};