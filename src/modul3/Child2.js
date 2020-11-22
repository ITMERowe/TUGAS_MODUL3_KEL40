import React, { Component } from "react";
class Child2 extends Component {
    state = {
        angka: 0
    }
    componentDidMount() {
        alert(`Mount triggered!`)
    }
    tambahAngka = () => {
        this.setState((state) => { return { angka: state.angka + 1 } })
    }
    kurangiAngka = () => {
        this.setState((state) => { return { angka: state.angka - 1 } })
    }
    componentWillUnmount() {
        alert('Counter will be gone :(')
    }
    render() {
        return (
            <div>
                <h4>Counter</h4>
                <button onClick={this.kurangiAngka}>Decrement</button>
                <button onClick={this.tambahAngka}>Increment</button>
                <br/>
                <p>{this.state.angka}</p>
            </div>
        );
    }
}
export default Child2;