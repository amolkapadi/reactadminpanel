import React,{useState,useEffect} from 'react'

export default function ApiCall() {

    const [data,setData]=useState([]);

    const ApiData=async()=>{
        const result=await fetch("https://jsonplaceholder.typicode.com/users")
        const res=await result.json();
        setData(res);
        console.log(res)
    }
    useEffect(()=>{
ApiData();
    },[])
  return (
    <div className="container mt-5">
        <div className="row">
            <h1>API USER DATA</h1>
            {data.map((val)=>{
                return(
                    <p key={val.id}>{val.name}</p>
                )
            })}
        </div>
    </div>
  )
}
