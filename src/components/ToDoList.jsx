import React,{useState} from "react";



function ToDOList(){
const[tasks,setTasks] = useState(["Eat Breakfast","Take a shower","Walk a dog"]);
const[newTask,setNewTask]=useState("")

function forInputChange(event)
{
    setNewTask(event.target.value)

}
function addTask(){
    if(newTask.trim()!==""){
        setTasks(t=>[...t,newTask]);
        setNewTask("");

    }
}
function deleteTask(index){
    const updatedTasks =tasks.filter((element,i)=> i!==index);
    setTasks(updatedTasks);

}
function moveTaskUp(index){
    if(index>0)
    {
        const updatedTasks =[...tasks];
        [updatedTasks[index],updatedTasks[index-1]]=
        [updatedTasks[index-1],updatedTasks[index]];
        setTasks(updatedTasks);
    }

}
function moveTaskDown(index){
    if(index<tasks.length-1)
    {
        const updatedTasks =[...tasks];
        [updatedTasks[index],updatedTasks[index+1]]=
        [updatedTasks[index+1],updatedTasks[index]];
        setTasks(updatedTasks);
    }

}

    return(
        <section>
        <h1>To DO List</h1>

        <div>
            <input type="text" placeholder="Enter a task" value={newTask} onChange={forInputChange}/>
            <button className="add-button" onClick={addTask}>Add Task</button>

        </div>

        <ul>
            {tasks.map((task,index)=>
            <li key ={index}>
                <span className="text">{task}</span>
                <button className="delete-button" onClick={()=>deleteTask(index)}>Delete</button>
                <button className="move-butto" onClick={()=>moveTaskUp(index)}>
                    Up
                </button>
                <button className="move-butto" onClick={()=>moveTaskDown(index)}>
                    Down
                </button>
            
            </li>
            )}
        </ul>
        </section>


    );

}
export default ToDOList;