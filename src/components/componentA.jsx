import React from "react";
import { ComponentB } from "./componentB"
import { ComponentC } from "./componentC"

export const ComponentA = (props) => {

    const [email,setEmail] = React.useState("");

    return <div>
        <h4>ComponentA</h4>
        <ComponentB count={props.count} incrementCount={props.incrementCount} email={email} ></ComponentB>
        <ComponentC email={email} setEmail={setEmail}></ComponentC>
    </div>
}