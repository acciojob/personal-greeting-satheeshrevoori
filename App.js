import React, { useState } from "react";


const App = () => {

  const [inputValue, setInputValue] = useState("")

  function handleChange(e){

    setInputValue(e.target.value)

  }

  return (

    <div>

        {/* Do not remove the main div */}

      <p>Enter your name:</p>

      <input type="text" placeholder="Enter your name.." value={inputValue} onChange={(e) => handleChange(e)}/>

      {inputValue.trim() && <p>{`Hello ${inputValue}!`}</p>}

    </div>

  )

}

export default App