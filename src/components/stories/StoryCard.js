import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./Story.css"




export default class StoryCard extends Component {

  render() {
    return (
        <div key={this.props.story.id} className="card">
        <Link className="nav-link" to={`/stories/${this.props.story.id}`}>
        <div className="card-title">
            <h2>{this.props.story.name}</h2>
               
        </div>
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

