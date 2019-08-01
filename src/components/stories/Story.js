import React, { Component } from "react"
import "./StoryList.css"


export default class Story extends Component {
    state = {
        saveDisabled: false
    }

render() {
    return (
      <section className="story">
          <div key={ this.props.story.id } className="card">
              <div className="card-body">
                  <h4 className="card-title">

                      {/* This component receives a story object on props */}
                      { this.props.story.name }
                  </h4>
                  <h6 className="card-title">{ this.props.story.name }</h6>
                  <button onClick={
                          () => {
                          this.setState(
                              { saveDisabled: true },
                          )
                      }
                  }
                  disabled={ this.state.saveDisabled }
                  className="card-link">Delete</button>
              </div>
          </div>
       </section>
      )
    }
}