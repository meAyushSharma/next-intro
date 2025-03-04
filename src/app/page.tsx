'use client'
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  return (
          <div>
            Title: <input type="text" className="title" onChange={function(e){
                setTitle(e.target.value)
            }}/><br/>
            Description: <input type="text" className="description" onChange={function(e){
                setDescription(e.target.value)
            }}/><br/>
            <button onClick={()=>{
                console.log("before fetch")
                    fetch('http://localhost:3000/todo',{
                        method:"POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            title:title,
                            description:description
                        })
                    }).then(response =>{
                        if(response.ok) alert("Todo added")
                    })
            }}>Add a todo</button>
          </div>
  );
}
