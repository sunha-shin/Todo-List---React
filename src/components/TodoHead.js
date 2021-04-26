import React from 'react'
import styled from 'styled-components';

const TodoHead = () => {
    return (
        <Container>
            <h1>2019.6.10</h1>
            <div className="day">Monday</div>
            <div className="tasks-left">two left</div>
        </Container>
    )
}

const Container = styled.div`
  padding: 48px 32px 24px 32px;
  border-bottom: 1px solid #e9ecef;
  
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  
  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

export default TodoHead;