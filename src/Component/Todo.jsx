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
        <li key={index}>
            {item}
            <button onClick={() => editTodolist(index)}>Edit</button>
            <button onClick={() => deleteTodo(index)}>Delete</button>

        </li>));



    return (
        <section>
            <section>
                <form ref={form} onSubmit={handleTodo} >
                    <input className="m-5" ref={inputRef} type='text' name='todo'
                        placeholder='Enter the todo' />
                    <button   type='submit'>
                        Submit
                    </button>
                </form>
            </section>
            <section>
                <ul>{arrayDataItems}</ul>
            </section>
        </section>
    )
}

export default Todo