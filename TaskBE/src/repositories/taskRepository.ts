import { title } from "node:process";
import {pool} from "../config/db";

export const getAllTasks = async()=>{
    const result = await pool.query("select * from tasks order by id desc");
    return result.rows;
};

export const createTask= async(title: string, description:string)=>{
    const result =await pool.query(
        "insert into tasks(title, description) values ($1,$2) returning*", [title,description]
    );
    return result.rows[0];
};

export const updateTask = async (id: number, status: string)=>{
    const result = await pool.query(
        "UPDATE tasks SET status=$1 WHERE id=$2 RETURNING*",
        [status, id]
    );
    return result.rows[0];
};

export const deleteTask = async (id:number) => {
    await pool.query("DELETE FROM tasks WHERE id=$1",[id]);   
};

