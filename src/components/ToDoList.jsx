import React,{useState} from "react";



function ToDOList(){
const[tasks,setTasks] = useState(["Eat Breakfast","Take a shower","Walk a dog"]);
const[newTask,setNewTask]=useState("")

function forInputChange(event)
{
    setNewTask(event.target.value)

}
function addTask(){

}
function deleteTask(index){

}
function moveTaskUp(index){

}
function moveTaskDown(index){

}

    return(
        <section>
        <h1>To DO List</h1>

        <div>
            <input type="text" placeholder="Enter a task" value={newTask} onChange={forInputChange}/>
            <button className="add-button" onClick={addTask}></button>

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
export default ToDOlist