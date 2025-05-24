import React from 'react'
import { useState } from 'react';
function Persongreeting() {

  const [name, setName] = useState("");
  return (
    <>
      <div>
        <label>
          Enter your name: <br />
        </label>
      </div>
      <div>
        <input type="text" onChange={(e) => setName("Hello " + e.target.value + "!")} />
        <p>{name}</p>
      </div>
    </>
  )
}

export default Persongreeting