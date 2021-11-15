import React from "react";
import './style.css'

function Header({name}) {
    return (
        <header className={'head'}>
            <h1 className={'head-title'}>ToDoList</h1>
            {name && <div>{name}</div>}
        </header>
    );
  }
  
export default Header;