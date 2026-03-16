import { useState } from "react";
import API from "../services/api";

const TaskForm = ({ refresh }: any) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const addTask = async () => {
        await API.post("/tasks", {
            title, description
        });
        setTitle("");
        setDescription("");
        refresh();
    };

    return (
        <div>
            <h2>Add Task</h2>

            <input
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <input
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <button onClick={addTask}>Add</button>
        </div>
    );
};

export default TaskForm;