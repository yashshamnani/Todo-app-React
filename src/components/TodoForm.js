// import React, { useState, useEffect, useRef } from 'react';

// function TodoForm(props) {
//   const [input, setInput] = useState(props.edit ? props.edit.value : '');

//   const inputRef = useRef(null);

//   useEffect(() => {
//     inputRef.current.focus();
//   });

//   const handleChange = e => {
//     setInput(e.target.value);
//   };

//   const handleSubmit = e => {
//     e.preventDefault();

//     props.onSubmit({
//       id: Math.floor(Math.random() * 10000),
//       text: input
//     });
//     setInput('');
//   };

//   return (
//     <form onSubmit={handleSubmit} className='todo-form'>
//       {props.edit ? (
//         <>
//           <input
//             placeholder='Update your item'
//             value={input}
//             onChange={handleChange}
//             name='text'
//             ref={inputRef}
//             className='todo-input edit'
//           />
//           <button onClick={handleSubmit} className='todo-button edit'>
//             Update
//           </button>
//         </>
//       ) : (
//         <>
//           <input
//             placeholder='Add a todo'
//             value={input}
//             onChange={handleChange}
//             name='text'
//             className='todo-input'
//             ref={inputRef}
//           />
//           <button onClick={handleSubmit} className='todo-button'>
//             Add todo
//           </button>
//         </>
//       )}
//     </form>
//   );
// }

// export default TodoForm;



import React , {useState,useEffect,useRef} from 'react'
 

function TodoForm(props) {
 

  
const inputRef = useRef(null)

useEffect(()=>{
  inputRef.current.focus()
})
    const [input, setInput] = useState("")

    function handleSubmit(e){
        e.preventDefault() //prevent default behaviour of submitting the form
        props.onSubmit({
            id : Math.floor(Math.random() * 10000),
            text: input
         })
        setInput("")
    }
    function handleChange(e){
        setInput(e.target.value)
    }
   
   
     

  return (
     <form className='todo-form' onSubmit={handleSubmit}>
       <input placeholder='Update your item' value = {input} name = 'text' className='todo-input edit' onChange={handleChange} ref={inputRef}/>
       <button onClick={handleSubmit} className='todo-button'>Add todo</button>
     </form>
  )
}

export default TodoForm