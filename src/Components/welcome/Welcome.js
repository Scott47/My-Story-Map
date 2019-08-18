import React, { Component } from "react"
import "./Welcome.css"



export default class Welcome extends Component {
    render(){
        return(
            <section>
                <h1 className="welcome">My Story Maps</h1>
                <h3 className="welcome">please login or register</h3>
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
