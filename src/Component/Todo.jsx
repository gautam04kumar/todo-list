import React, { useState, useRef, useEffect } from 'react'

function Todo() {
    const form = useRef();
    const [todo, setTodo] = useState([]);
    const [editTodo, setEditTodo] = useState(null)

    useEffect(() => {

    }, [todo])

    let handleTodo = (event) => {
        event.preventDefault();
        // const todoValue=form.current.todo.value
        if (editTodo !== null) {
            const updateTodo = [...todo];
            updateTodo[editTodo] = form.current.todo.value;
            setTodo(updateTodo)
            setEditTodo(null)
        }
        else if (!todo.includes(form.current.todo.value)) {
            setTodo(prevItem => [...prevItem, form.current.todo.value])
        }

        form.current.todo.value="";
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
                <form ref={form}>
                    <input type='text' name='todo'
                        placeholder='Enter the todo' />

                    <button type='submit' onClick={handleTodo}>
                        {
                          form.current.todo.value ===  '' ? "add" : "update"
                        }
                    </button>
                </form>
            </section>
            <section>
                {/* //TODO :show todo list */}
                <ul>{arrayDataItems}</ul>
            </section>
        </section>
    )
}

export default Todo