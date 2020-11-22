import React, { Component } from "react";
class Child1 extends Component {
    state = {
        nama: "Hanif"
    }
    componentDidMount() {
        alert(`Mount triggered!`)
    }
    ubahNama = () => {
        this.setState((state) => { 
            if (state.nama === "Hanif") {
                return {nama : "Faiza"}
            } else {
                return { nama: "Hanif"}                 
            }
        })
    }
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     alert(`Component Updates! State nama sebelumnya: ${prevState.nama}`)
    // }
    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     return window.confirm('Haruskah Component ini di-Update?');
    // }
    componentWillUnmount() {
        alert('Names will be gone :(')
    }
    render() {
        return (
            <div>
                <h4>Names</h4>
                <button onClick={this.ubahNama}>Change our Name</button>
                <br />
                <h4>{this.state.nama}</h4>
            </div>
        );
    }
}
export default Child1;