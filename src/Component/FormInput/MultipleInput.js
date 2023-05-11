import React,{useState} from "react";
import "./MultipleInput.css";


export default function MultipleInput() {

    const [formData,setFormData]=useState({
        username: '',
        email:'',
        occupation:'',
        gender:'',
        languages:[]
    })


    const onChangeHandler=(event)=>{
      console.log(event)
        // setFormData(()=>({
        //     ...formData,
        //     [event.target.name]:event.target.value
        // }))
        setFormData(()=>({
          ...formData,
          [event.target.name]:event.target.value
        }))
    }
     
    const handleData =(e)=>{
        e.preventDefault()
    }
  return (
    <div className="container w-50 py-5">
      <h1>Multiple Form</h1>
      <div className="row">
        <form className="mt-3" onSubmit={handleData}>
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput" className="form-label">
              User Name
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              name="username"
              onChange={onChangeHandler}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput2" className="form-label">
              Email
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
              name="email"
              onChange={onChangeHandler}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput2" className="form-label">
              Occupation
            </label>
            <select className="form-select" aria-label="Default select example" name='occupation' onChange={onChangeHandler} >
              <option selected >Open this select menu</option>
              <option value="Student">Student</option>
              <option value="Employee">Employee</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="formGroupExampleInput2" className="form-label">
              Gender
            </label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                value="male"
                onChange={onChangeHandler}
              />
              <label className="form-check-label"  htmlFor="flexRadioDefault1">
                Male
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                value="female"
                onChange={onChangeHandler}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Female
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                value="other"
                onChange={onChangeHandler}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Other
              </label>
            </div>
          </div>

          <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">
                Languages
            </label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="Javascript"
                onChange={onChangeHandler}
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Javascript
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="ReactJs"
                onChange={onChangeHandler}
                id="flexCheckChecked"
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                ReactJs
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="NextJs"
                onChange={onChangeHandler}
                id="flexCheckChecked"
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                NextJs
              </label>
            </div>
          </div>

          <button className="btn btn-primary" onClick={()=>console.log(formData)}>Submit</button>
        </form>
      </div>
    </div>
  );
}
