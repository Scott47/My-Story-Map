import React, { Component } from "react"


export default class Welcome extends Component {
    render(){
        return(
            <section>
                <h1>My Map Story</h1>
                <h3>please login or register</h3>
                <button onClick = { () => {
                    this.props.history.push("/login")
                }}>Login</button>
                <button onClick = { () => {
                    this.props.history.push("/register")
                }}>Register</button>
            </section>
        )
    }
}
