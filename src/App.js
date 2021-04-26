import React, {useState ,useEffect} from "react";
import {GlobalStyle} from "./Styled/GlobalStyle";
import TodoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";

function App() {
  return (
    <div className="App">
        <GlobalStyle/>
      <TodoTemplate>
          <TodoHead/>
          <TodoList/>
          <TodoCreate/>
      </TodoTemplate>
    </div>
  );
}

export default App;
