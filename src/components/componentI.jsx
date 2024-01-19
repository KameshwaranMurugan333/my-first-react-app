export const ComponentI = (props) => {

    return <div>
        <h4>ComponentI</h4>
        <input type="email" value={props.email} onChange={(e) => props.setEmail(e.target.value)} />
    </div>
}