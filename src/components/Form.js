import React from "react";

function Form(props) {
  return (
    <form className="form">
      <input input="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {props.isRegistered === false && (
        <input type="password" placeholder="ConfirmPasword" />
      )}
      {/* <input type="password" placeholder="ConfirmPasword" /> */}

      <button type="submit">{props.isRegistered ? "Login" : "Register"}</button>
    </form>
  );
}

export default Form;
