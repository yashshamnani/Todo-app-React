import React,{useState} from 'react'
import TodoForm from './TodoForm'

function Todo({todos,completeTodo,removeTodo,updateTodo}) {
  const [edit,setEdit] = useState({
    id : null,
    value : ''
  })
  
  const submitUpdate = value =>{
    updateTodo(edit.id,value)
    setEdit({
      id : null,
      value : ''
    })
  }
if(edit.id){
  return <TodoForm onSubmit={submitUpdate} edit = {edit}></TodoForm>
}

  return todos.map((todo,index)=>(
    <div className={todo.isComplete ? 'todo-row complete' : 'todo-row' }key= {index}
    >
        <div key = {todo.id} onClick={()=> completeTodo(todo.id)}>
      {todo.text}
         </div>
         <div className='icons'>
         <i onClick={()=> removeTodo(todo.id)} className='delete-icon' class="fa-solid fa-circle-xmark"></i>
         <i onClick={()=> setEdit({id:todo.id,value:todo.text})} className='edit-icon'class="fa-solid fa-pen-to-square"></i>

         </div>
         

    </div>
       
     
  ));
}
     


export default Todo