import { useContext, useState } from "react";
import { State } from "./context";

function App() {
  const [count, setCount] = useState<number>(0);
  
  return (
    <State.Provider value={count}>
    <div>
      <Count />
      <Buttons setCount={setCount}></Buttons>
    </div>
    </State.Provider>
  );
}

function Count() {
  const count = useContext(State)
  return <div>{count}</div>;
}

function Buttons({setCount }: any) {
  const count = useContext(State)
  return (
    
      <div>
        <button onClick={() => setCount(count + 1)}>incre</button>
        <button onClick={() => setCount(count - 1)}>decree</button>
      </div>
   
  );
}

export default App;
