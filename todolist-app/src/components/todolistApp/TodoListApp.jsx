import React from "react";
import Header from "./header/Header";
import Login from "./login/Login";
import TodoListContent from "./todolist/TodoListContent";

function TodoListApp() {
    return (
      <div className="app-wrap">
        <Header />

        {/* <Login /> */}

        <TodoListContent nameTodo={'todolist'}/>
      </div>
    );
  }
  
export default TodoListApp;