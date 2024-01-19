export const ComponentH = (props) => {
    return <div>
        <h4>ComponentH</h4>
        <h1>Email: {props.email}</h1>
        <h1>Count: {props.count}</h1>
        <button onClick={props.incrementCount}>Increment</button>
    </div>
}