import React, { useState } from "react";

function TodoForm({addTodo}) {
    const [todo, setTodo] = useState({
        id:"",
        task:"",
        completed:false
    });

    function handleTastInpuChange(e) {
        setTodo({...todo, task:e.target.value});
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (todo.task.trim()) {
            addTodo({...todo});
            // reset task input
            setTodo({...todo, task:""});
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="task"
                type="task"
                value={todo.task}
                onChange={handleTastInpuChange}/>
            <button type="submit">Submit</button>
        </form>
    )
}

export default TodoForm;