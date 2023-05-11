import React, { useState } from 'react';
import './login.css'
const LoginForm = () => {

  const [inputs, setInputs] = useState({
    name: "",
    email: ""
  })

  const changeHandle = e => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    })
  }

  const submitHandle = e => {
    e.preventDefault()
    console.log(inputs)
  }
  
  return (
    <div className='loginform'>
    <form onSubmit={submitHandle}>
      <input type="text" name="name" value={inputs.name} onChange={changeHandle} /><br/>
      <input type="email" name="email" value={inputs.email} onChange={changeHandle} /><br />
      <button type="submit">Submit</button>
    </form>

  
    </div>
  );
}

export default LoginForm;