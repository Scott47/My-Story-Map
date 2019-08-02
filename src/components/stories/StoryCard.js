import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./StoryCard.css"

export default class StoryCard extends Component {
  render() {
    return (
        <div key={this.props.story.id} className="card">
        <Link className="nav-link" to={`/stories/${this.props.story.id}`}>
        <div className="card-body">
        <div className="card-title">
            <h5>{this.props.story.name}</h5>
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
        </div>
        </Link>
        </div>
        )
    }
}