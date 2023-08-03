import React, { useState } from "react";
import ToDoListProject from "./component/ToDoListProject";
import "./cssstyle.css"
const Todolist=()=>{
const [todoValue, setToDoValue]=useState('')
const [todos, setTodos] = useState([]);

const handleKeyPress = (e) => {
  if (e.key === 'Enter') {
    if (todoValue.trim() !== '') {
      setTodos([...todos, todoValue.trim()]);
      setToDoValue('');
    }
  }
};
const deleteToDolist=(index)=>{
    let list=todos
    list.splice(index,1)
    console.log(list)
    setTodos([...list])
}
    return(
    <>
        <h1 style={{color:"#fff"}}>TODO</h1>
        <input 
            className="todoinput"

                placeholder="輸入代辦事項"
                onChange={(e)=>setToDoValue(e.target.value)}
                onKeyPress={handleKeyPress} 
                value={todoValue}
                />
        <div className="toDoList">
                {!todos ?<>ueiiie</>:<>{todos.map((item, index) => (
               <ToDoListProject item={item} 
               onClick={()=>deleteToDolist(index)}
               
               />
                ))}</>}
        </div>
        <p className="howManyToDo" >{todos.length}/20</p>
    </>)
}
export default Todolist;