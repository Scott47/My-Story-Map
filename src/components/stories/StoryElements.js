import React, { Component } from "react";

export default class StoryElements extends Component {
  state = {
    text: "",
    img: "",
    type: ""
  };

  render() {
    return (
      <React.Fragment>
        <form className="elment-form">
          <div className="form-group">
            <textarea
              key={storyelement.id}
              value={this.state.text}
              className="form-control"
              onChange={this.handleFieldChange}
              id="storyElement"
              placeholder="element">
              </textarea>
          </div>
        </form>
      </React.Fragment>
    );
  }
}
