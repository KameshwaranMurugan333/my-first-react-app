import { ComponentD } from "./componentD"
import { ComponentE } from "./componentE"

export const ComponentB = (props) => {
    return <div>
        <h4>ComponentB</h4>
        <ComponentD count={props.count} incrementCount={props.incrementCount} email={props.email}></ComponentD>
        <ComponentE></ComponentE>
    </div>
}