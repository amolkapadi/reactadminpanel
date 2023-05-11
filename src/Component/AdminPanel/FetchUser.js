import React,{useState,useEffect} from 'react'


export default function FetchUser() {
    const FetchUser= async()=>{
      const result= await fetch("https://jsonplaceholder.typicode.com/users");
      const res=await result.json();
      
      console.log(res)
      return res;
    }
   
}
