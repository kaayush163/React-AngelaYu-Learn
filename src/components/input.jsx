import React from "react";

function Input(props) {
  return <input type={props.type} placeholder={props.placeholder} />;
  //   <Input type="password" placeholder="MyPassword" />;
}

export default Input;
