import React, { Component } from "react";

class MyClassComponent extends Component {
    constructor(props) {
        super(props);

        // State initialization
        this.state = { value: 0 }
    }

    increment = () => {
        // State Updation
        this.setState({ value: this.state.value + 1 });
    }

    render() {
        return <div>
            <h1>Class Component</h1>

            <h2>Received Props:</h2>
            <p>myProp: {this.props.myProp}</p>

            {/* State Usage */}
            <p>Value: <b>{this.state.value}</b></p>

            <button onClick={this.increment}>+</button>

            <button>-</button>
        </div>
    }
}

export default MyClassComponent;