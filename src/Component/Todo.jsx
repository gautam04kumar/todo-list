import React, { useState, useRef, useEffect } from 'react'

function Todo() {
    const form = useRef();
    const inputRef = useRef();

    const [todo, setTodo] = useState([]);
    const [editTodo, setEditTodo] = useState(null)



    let handleTodo = (event) => {
        event.preventDefault();

        if (inputRef.current.value != '') {
            let arr = [...todo];
            arr.push(inputRef.current.value);
            setTodo(arr);
            inputRef.current.value = '';
        }
    }

    const editTodolist = (index) => {

        setEditTodo(index);

        form.current.todo.value = todo[index];
    };

    const deleteTodo = (index) => {
        const updateTodo = [...todo];
        updateTodo.splice(index, 1);
        setTodo(updateTodo);
    };
    const arrayDataItems = todo.map((item, index) => (
        <li key={index}
            className='mb-1 bg-gray-300
              border-solid border-2 text p-0.5  rounded-lg
          '>
            {item}
            <button className=' ml-2
               bg-amber-500 
               border-solid 
               border-2 
                rounded-md'
                onClick={() => editTodolist(index)}>Edit</button>

            <button className=' ml-2 bg-red-700 border-solid border-2   rounded-md'
                onClick={() => deleteTodo(index)}>
                Delete</button>

        </li>));



    return (
        <section className='place-content-center'>
            <section>
                <form ref={form} onSubmit={handleTodo} >
                    <input className="my-5 ml-80 border-solid border-2 rounded border-slate-600 "
                        ref={inputRef}
                        type='text'
                        name='todo'
                        placeholder='Enter the todo' />
                    <button className='bg-slate-900 text-white border-solid ml-1 border-2 border-slate-700 rounded-lg'
                        type='submit'>
                        Submit
                    </button>
                </form>
            </section>
            <section className='  ml-80 w-60 bg-stone-400 p-2 rounded'>
                <ul className=''>{arrayDataItems}</ul>
            </section>
        </section>
    )
}

export default Todo