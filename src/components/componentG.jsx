import { ComponentI } from "./componentI"

export const ComponentG = (props) => {
    return <div>
        <h4>ComponentG</h4>
        <ComponentI email={props.email} setEmail={props.setEmail}></ComponentI>
    </div>
}