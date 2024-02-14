import React, { useState,useRef,useEffect } from 'react'
import { IoMdDoneAll} from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

function Todo() {

  const [todo,setTodo] = useState('');
  const [todos,setTodos] = useState([]);
  const [editId,setEditId] = useState(0)

  const addTodo=()=>{
    if(todo !== ''){
        setTodos([...todos,{list:todo, id: Date.now(), status:false}])
        console.log(todos,todo)
        setTodo('')
    }
    if(editId) {
        const editTodo = todos.find((todo) => todo.id === editId)
        const updateTodo = todos.map((to) => to.id === editTodo.id
        ? (to = {id: to.id, list : todo})
        : (to = {id: to.id, list : to.list}))
        setTodos (updateTodo)
        setEditId(0);
        setTodo('')
        }
  }

  const onDelete=(id)=>{
    setTodos(todos.filter((to) => to.id !== id))
  }

  const onComplete=(id)=>{
    let complete = todos.map((to)=>{
        if (to.id === id){
            return ({...to , status:!to.status })
        }
        return to
    })
    setTodos(complete)
  }
  
  const onEdit = (id) =>{
    const editTodo = todos.find((to)=> to.id == id)
    setTodo(editTodo.list)
    setEditId(editTodo.id)

  }


  const handleSubmit=(event)=>{
    event.preventDefault();
  }

  const inputRef = useRef('null');

  useEffect(()=>{
    inputRef.current.focus();
  })



  return (
    <div> 
      <h1>Todo App</h1>
      <form onSubmit={handleSubmit}>
        <input className='task-input' ref={inputRef} type='text' value={todo}  placeholder='enter your todo' onChange={(event)=>setTodo(event.target.value)} />
        <button className='button-add' onClick={addTodo}>{ editId ? 'EDIT' : 'ADD' }</button>
      </form>
      <div className='list'>
        <ul>
            {
                todos.map((to)=>(<li className='list-items'><div className='list-item-list' id={to.status ? 'list-item' : 'null' }>{to.list}</div> 
                            <span> 
                                <IoMdDoneAll className='list-item-icons' id='complete' onClick={()=>onComplete(to.id)}/>
                                <FiEdit  className='list-item-icons' id='edit' onClick={()=>onEdit(to.id)}/> 
                                <MdDelete  className='list-item-icons' id='delete' onClick={()=>onDelete(to.id)}/> 
                            </span></li>))
            }
        </ul>
      </div>
    </div>
  )
}

export default Todo
