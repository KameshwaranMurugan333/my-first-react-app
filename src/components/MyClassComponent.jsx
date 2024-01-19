import React, { Component } from "react";

class MyClassComponent extends Component {
    constructor(props) {
        super(props);

        // State initialization
        this.state = { value: 0 }
        console.log("I am in constructor");
    }

    static getDerivedStateFromProps(){
        console.log("I am in getDerivedStateFromProps");
    }

    componentDidMount(){
        console.log("I am from componentDidMount")
    }

    shouldComponentUpdate(prevProps, prevState){
        console.log('prevState:', prevState)
        console.log('prevProps:', prevProps)
        console.log("I am in shouldComponentUpdate");
        return true;
    }

    // Updating
    getSnapshotBeforeUpdate(prevProps, prevState, state, props) {
        console.log("Executing getSnapshotBeforeUpdate");
        return { favoritecolor: "black", name: "Kamesh" };
    }

    // Updating
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Executing ComponentDidUpdate");
        console.log('snapshot:', snapshot)
        console.log('prevState:', prevState)
        console.log('prevProps:', prevProps)
    }

    componentWillUnmount(){
        console.log("I am in componentWillUnmount")
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