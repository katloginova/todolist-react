import React from "react";
import './style.css'

function Title(props) {
    const {nameTitle, title} = props;

    return (
        <h1 className={`title ${nameTitle}`}>{title}</h1>
    );
  }

  export default Title;