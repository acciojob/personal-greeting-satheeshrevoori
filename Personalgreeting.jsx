import React, { useState } from 'react'

function Personalgreeting() {
    const[uname, setUname] = useState("")
  return (
    <>
    <label htmlFor='name'>Name : </label>
    <input type = "text" placeholder='enter name' onChange={(e)=>setUname(e.target.value)}/>
    {
       (uname.length > 0) && <p> Hello, {uname}!</p>
    } 
    </>
  )
}

export default Personalgreeting