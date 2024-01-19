import React from "react"
import MyClassComponent from "./components/MyClassComponent";

export default function App() {

  const [count, setCount] = React.useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  }
  const decrementCount = () => {
    setCount(count - 1);
  }

  return (
    <div>
      Count: {count}
      <button onClick={incrementCount} >Increment</button>
      <button onClick={decrementCount} >Decrement</button>

      {count > 0 && <MyClassComponent></MyClassComponent>}
    </div>
  );
}



