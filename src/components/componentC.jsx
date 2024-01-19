import { ComponentF } from "./componentF"
import { ComponentG } from "./componentG"

export const ComponentC = (props) => {
    return <div>
        <h4>ComponentC</h4>
        <ComponentF></ComponentF>
        <ComponentG email={props.email} setEmail={props.setEmail}></ComponentG>
    </div>
}