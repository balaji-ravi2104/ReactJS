import React from "react";
import useInput from "../hooks/useInput";

function Form() {
  const [firstName, bindFirstName, resetFirstName] = useInput("");
  const [lastName, bindLastName, resetLasttName] = useInput("");

  const submithandler = e => {
    e.preventDefault()
    alert(`Hello ${firstName} ${lastName}`);
    resetFirstName('');
    resetLasttName('');
  };

  return (
    <div>
      <form onSubmit={submithandler}>
        <div>
          <label>FirstName</label>
          <input {...bindFirstName} type='input'></input>
        </div>
        <div>
          <label>LastName</label>
          <input {...bindLastName} type='input'></input>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Form;
