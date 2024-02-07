import React from 'react';
import './Todo.css';
import { useState } from 'react';

function Todo() {
  const [todo ,setTodo] = useState('')
  const [todos,setTodos] = useState([])

  const addTodo=()=>{
    setTodos([...todos,{id:Date.now(),text:todo,status:false}])
    console.log(todos,todo)
  }




  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List!</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input type="text" value={todo} placeholder="🖊️ Add item..." onChange={(event)=>setTodo(event.target.value)} />
        <i className="fas fa-plus" onClick={addTodo}></i>
      </div>

      <div className="todos">
      { todos.map((obj)=>{

      return(<div className="todo">
      <div className="left">
        <input onChange={(e)=>{
          console.log(e.target.checked)
          console.log(obj)
          setTodos(todos.filter(obj2=>{
            if (obj2.id === obj.id){
              obj2.status=e.target.checked
            }
            return obj2
          }))
        }}  value={obj.status} type="checkbox" name="" id="" />
        <p>{obj.text}</p>
      </div>
      <div className="right">
        <i className="fas fa-times"></i>
      </div>
      </div>)})}

      </div>
    </div>
  )
}


export default Todo
