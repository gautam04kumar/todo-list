import React, { useState, useRef, useEffect } from 'react'

function Todo() {
    const form = useRef();
    const [todo, setTodo] = useState("");

    useEffect(() => {

    }, [todo])


    let handleTodo = (event) => {
        event.preventDefault();
        console.log(form.current.todo.value);
        setTodo(form.current.todo.value);
        form.current.reset();
    }

    return (
        <section>
            <section>
                <form ref={form}>
                    <input type='text' name='todo' placeholder='Enter the todo' />
                    <button type='submit' onClick={handleTodo}>SUBMIT</button>
                </form>
            </section>
            <section>
//TODO :show todo list
            </section>
        </section>
    )
}

export default Todo