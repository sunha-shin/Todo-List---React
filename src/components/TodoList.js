import React from 'react'
import styled from 'styled-components';
import TodoItem from "./TodoItem";

const TodoList = () => {
    return (
        <Container>
            <TodoItem text="Create project" done={true}></TodoItem>
            <TodoItem text="Styling components" done={true}></TodoItem>
            <TodoItem text="Create context" done={false}></TodoItem>
            <TodoItem text="Apply features" done={false}></TodoItem>
        </Container>
    )
}

const Container = styled.div`
  flex: 1;
  padding: 20px 48px 30px;
  overflow-y: auto;
  //background: gray;
`;

export default TodoList;