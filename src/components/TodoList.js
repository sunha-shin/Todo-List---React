import React from "react";
import Todo from "./Todo";

function TodoList({todos}) {
    return (
        <ul>
            {todos.map(todo => (
              <Todo todo={todo}/>
            ))}
        </ul>
    )


}

export default TodoList;