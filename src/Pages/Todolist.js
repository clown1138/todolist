import React, { useState } from "react";
import ToDoListProject from "./component/ToDoListProject";
import "./cssstyle.css"
const Todolist=()=>{
const [todoValue, setToDoValue]=useState('')
const [todos, setTodos] = useState([]);

const handleKeyPress = (e) => {
  if (e.key === 'Enter') {
    if (todoValue.trim() !== '') {
      setTodos([...todos, {value:todoValue.trim(),isChecked:false}]);
      setToDoValue('');
      console.log(todos)
    }
  }
};
const deleteToDolist=(index)=>{
    let list=todos
    list.splice(index,1)
    console.log(list)
    setTodos([...list])
}
const checkboxonClick=(index)=>{
    let list=todos
    console.log(list[index].isChecked)
    list[index].isChecked=!list[index].isChecked
    setTodos([...list])
}
console.log(todos.length)
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
                {todos.length===0? <p style={{color:"#fff"}}>尚未有備忘錄登入</p>:todos.map((item, index) => (
               <ToDoListProject item={item} 
               onClick={()=>deleteToDolist(index)}
               checkboxonClick={()=>checkboxonClick(index)}
               />
                ))}
        </div>
        <p className="howManyToDo" >{todos.length}/20</p>
    </>)
}
export default Todolist;