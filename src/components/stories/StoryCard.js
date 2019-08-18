import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./Story.css"
import BaseMapHandler from "../apiManager/BaseMapHandler";




export default class StoryCard extends Component {

  render() {
    return (
        <div key={this.props.story.id} className="card">
        <Link className="nav-link" to={`/stories/${this.props.story.id}`}>
        {/* <div className="card-body"> */}
        <div className="card-title">
            <h2>{this.props.story.name}</h2>
                {/* <button type="button" className="btn btn-success"
                onClick={() => {
                this.props.history.push(`/animals/${this.props.animal.id}/edit`);
            }}>
                Edit
                </button>
                <a href="#"
                onClick={() => this.props.deleteAnimal(this.props.animal.id)}
                className="card-link">Discharge</a> */}
        </div>
        {/* </div> */}
        </Link>
        <a href="#"
                    onClick={() => {
                        this.props.deleteStory(this.props.story.id);
                      }}
                    className="card-link">Delete</a>
        </div>
        )
    }
}

