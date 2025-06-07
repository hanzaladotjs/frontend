import { useMemo, useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input. 
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

function App() {
    const [input, setInput] = useState(0);
    // Your solution starts here
   
    // Your solution ends here 
    function calc() {
     let fact  = 1;
      for (let i = input; i>0; i--){
        fact = fact * i;
      }
      return fact
    }

    function clicked () {
      console.log("hi there")
    }

    const expensiveValue = useMemo( () => {
     return calc()
    },[input])
    return (
        <div>
            <input 
                type="number" 
                value={input} 
                onChange={(e) => setInput(Number(e.target.value))} 
            />
            <p>Calculated Value: {expensiveValue}</p>
           
        </div>
    );
}

export default App