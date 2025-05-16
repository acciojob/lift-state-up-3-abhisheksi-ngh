
import React from "react";
import './../styles/App.css';
import ChildComponent1 from "./ChildComponent1";
import ChildComponent2 from "./ChildComponent2";

const App = () => {
  const [selectOption , setSelectOption] = React.useState("");
  const handleOptionChange=(option)=>{
    setSelectOption(option);
  }

  return (
    <div className="parent">
      <h1>Parent Component</h1>
      
      <ChildComponent1 onSelect={handleOptionChange} />
      <ChildComponent2 onSelect={handleOptionChange} />
      <p>Selected Option: {selectOption || ''}</p> 

      
        
    </div>
  )
}

export default App
