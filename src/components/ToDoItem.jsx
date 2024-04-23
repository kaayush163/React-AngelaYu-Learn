import React, { useState } from "react";

function ToDoItem(props) {
  //   const [isDone, setIsDone] = useState(false);
  //   function handleClick() {
  //     setIsDone((prevVal) => {
  //       return !prevVal;
  //     });
  //   }
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
    // <div onClick={props.onChecked(props.id)}>
    //   {/* <input onChange={() => {}} /> */}
    //   <li>{props.text}</li>
    //   {/* <li style={{ textDecoration: isDone ? "line-through" : "none" }}>
    //     {props.text}
    //   </li> */}
    //   ;
    // </div>

    // <div onClick={handleClick}>
    //   {/* <input onChange={() => {}} /> */}
    //   <li style={{ textDecoration: isDone ? "line-through" : "none" }}>
    //     {props.text}
    //   </li>
    //   ;
    // </div>
  );
}

export default ToDoItem;
