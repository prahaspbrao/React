import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(15);

  const increment = () => {
    if (counter < 100) {
      setCounter(counter + 1);
    } else {
      alert("Counter cannot go beyond 100!");
    }
  };

  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      alert("Counter cannot go below 0!");
    }
  };

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={increment}>Add value</button>
      <br />
      <br />
      <button onClick={decrement}>Remove value</button>
    </>
  );
}

export default App;
