import API from "../services/api";

const TaskList =({tasks, refresh}: any)=>{

    const deleteTask = async (id:number)=>{
        await API.delete(`/tasks/${id}`);
        refresh();
    };

    const updateStatus = async (id:number)=>{

        await API.put(`/tasks/${id}`,{status : "done"});
        refresh();
    };

    return(
        <div>
            <h2>Tasks</h2>

            {tasks.map((task:any)=>(
                <div key={task.id} style={{border:"1px solid grey", margin: "10px", padding: "1-px"}}>
                <h3> {task.title}</h3>
                <p> {task.description}</p>
                <p>Status: {task.status}</p>

            <button onClick={()=> updateStatus(task.id)}>
                    Mark Done </button>

            <button onClick={()=> deleteTask(task.id)}>Delete</button>
            </div>
            ))}
        </div>
    );
};

export default TaskList;