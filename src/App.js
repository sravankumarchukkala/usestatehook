import React, {useState} from "react";

const App = () =>{
  const [name, setName] =useState("Sravan");
return(
  <div>
    <center>
      <h1>{name}</h1>
      <button onClick = {() => setName("Name is Changed to Kumar")}>CHANGE</button>
    </center>
  </div>
)
} 
export default App