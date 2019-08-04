import React, { Component } from "react"


export default class EditStory extends Component {

    state ={
        storyTitle: '',
        subtitle: '',
        basemap: ''
      }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
      }

render () {
    <React.Fragment>
    <form className="storyForm">
              <div className="form-group">
                <label htmlFor="storyTitle">Title</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={this.handleFieldChange}
                  id="storyTitle"
                  value={this.state.storyTitle}
                  />
                  </div>
                <div className="form-group">
                <label htmlFor="subTitle">subtitle</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={this.handleFieldChange}
                  id="subtitle"
                  value={this.state.subtitle}
                  />
                  </div>

                  </form>

    </React.Fragment>
}

}