import React,{useState,useEffect} from 'react'


export default function Tables() {
  const [user,setUser]=useState([]);

  const FetchUser= async()=>{
    const result= await fetch("https://jsonplaceholder.typicode.com/users");
    const res=await result.json();
    setUser(res);
    console.log(res)
  }

  useEffect(()=>{
    FetchUser();
  },[])
  
  return (
    <div className="contanier-fluid p-4">
      <h3>Table</h3>

      <div className="row ">
        <table class="table mt-3 table-bordered">
          <thead className="first-head">
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">website</th>
            </tr>
          </thead>
          <tbody>
          {user.map((val)=>{
            return(
              <tr key={val.id}>
              <th scope="row">{val.id}</th>
              <td>{val.name}</td>
              <td>{val.username}</td>
              <td>{val.email}</td>
              <td>{val.phone}</td>
              <td>{val.website}</td>
            </tr>
            )
          })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
