import React, {useState} from 'react'
import './Register.css'


export default function Register() {
    
    const [user,setUser]=useState({
        fullname:'',
        email:'',
        password:''
    })
    //handleChange function
    const handleChange=(e)=>{
       setUser((prev)=>{
        return {...prev,[e.target.name]:e.target.value}
       })
    }

    const handleSubmit =(event)=>{
        event.preventDefault();
        console.log(user)
        setUser('');
    }
    
  return (
    <>
        <div className="container w-25 py-5">
        <h1>Register Form</h1>

        <form className="mt-3" onSubmit={handleSubmit}>
        
        <div className="mb-3">
            <label htmlFor="formGroupExampleInput" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              name="fullname"
              onChange={handleChange}
              required
              />
        </div>
        
        <div className="mb-3">
            <label htmlFor="formGroupExampleInput" className="form-label">
              Email Id
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={handleChange}
              required
              />
        </div>

        <div className="mb-3">
            <label htmlFor="formGroupExampleInput" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={handleChange}
              required
              />
        </div>


        <div className="mt-3 ">
            <button className="btn btn-primary ">Register</button>
        </div>

        </form>
        <div className="mt-5">
            
        </div>
    </div>
 
    </>
  )
}
