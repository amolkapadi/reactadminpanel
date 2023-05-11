import React,{useState,useEffect} from 'react'
// import FetchUser from './FetchUser'
export default function UseList() {
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
    <h3>User List</h3> 
    <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
        {
          user.map((val)=>{
            return(
              <div className="col">
              <div className="card userlist-card">
                <div className="card-body ">
                  <h5 className="card-title">{val.name}</h5>
                  <p>User Name : <span class="badge bg-primary">{val.username}</span></p>
                  <p>User Email : <span class="badge bg-success">{val.email}</span></p>
                
                </div>
              </div>
            </div>

            )
          })
        }

    </div>
</div>
  )
}
