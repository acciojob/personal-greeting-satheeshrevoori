
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const[inputValue, setInputValue] = useState(" ");
  return (
    <div>
        {/* Do not remove the main div */}
          <p>Enter your name:</p>

      <input type="text" placeholder="Enter your name.." value={inputValue} onChange={(e) =>setInputValue(e.target.value)}/>

      {inputValue.trim() && <p>{`Hello ${inputValue}!`}</p>}
    </div>
  )
}

export default App
