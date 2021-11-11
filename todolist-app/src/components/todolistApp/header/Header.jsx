import React from "react";
import Title from "../../titles/Title";
import './style.css'

function Header() {
    return (
        <header className={'head'}>
            <Title nameTitle={'head-title'} title={'ToDoList'}/>
        </header>
    );
  }
  
export default Header;