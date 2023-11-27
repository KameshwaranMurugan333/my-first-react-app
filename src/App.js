import React from "react";
import MyClassComponent from "./components/MyClassComponent";
import { MyFunctionalComponent } from "./components/MyFunctionalComponent";

export function App() {

  const [state, setState] = React.useState(1);

  return (
    <div>
      <h1>App State: {state}</h1>
      <button onClick={() => setState(state + 1)}>Increment</button>
      
      <MyClassComponent myProp="1" />
      <MyFunctionalComponent myProp="2" />

    </div>
  );
}



