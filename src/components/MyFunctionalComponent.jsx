import React from "react"

export function MyFunctionalComponent(props) {

    // Creating and intializing the state
    const [state, setState] = React.useState({ value: 0, name: "Kamesh" });
    const [name, updateName] = React.useState("Kamesh");

    // Updating the state
    const increment = () => {
        setState({ ...state, value: state.value + 1 });
    }


    return <div>
        <h1>Functional Component</h1>

        <h2>Received Props:</h2>
        <p>myProp: {props.myProp}</p>

        {/* State Usage */}
        <p>Value: <b>{state.value}</b></p>
        <p>Name: <b>{name}</b></p>

        <button onClick={() => updateName("Kamesh Updated")}>Update Name</button><br></br>

        <button onClick={increment}>+</button>

        <button style={{ color: "red", backgroundColor: "white", paddingLeft: "16px", paddingRight: "16px" }} >-</button>
    </div>
}