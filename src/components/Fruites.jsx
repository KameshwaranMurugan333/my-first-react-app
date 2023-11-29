export const Fruites = (props) => {

    if (props.name === "Apple") {
        return <div>
            <h1>Fruite: {props.name}</h1>
            <img alt={props.name} src={"/images/fruites/apple.jpg"} width={"500px"} height={"500px"} />

            {props.count && <h4>{props.count}</h4>}
        </div>
    } else if(props.name === "Orange") {
        return <div>
            <h1>Fruite: {props.name}</h1>
            <img alt={props.name} src={"/images/fruites/orange.jpg"} width={"500px"} height={"500px"} />

            {props.count && <h4>{props.count}</h4>}
        </div>
    }

    return <div>
        <p>Please send valid fruite name</p>
    </div>
}