import { ComponentH } from "./componentH"

export const ComponentD = (props) => {
    return <div>
        <h4>ComponentD</h4>
        <ComponentH count={props.count} incrementCount={props.incrementCount} email={props.email}></ComponentH>
    </div>
}