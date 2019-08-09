import React, { Component } from "react"
import { Scene } from "@esri/react-arcgis";
import { Row, Col, Button } from "reactstrap"
import StoryHandler from "../apiManager/StoryHandler";


export default class NewStory extends Component {

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

      handleBasemap = evt => {
          console.log(evt.currentTarget.id)
          const stateToChange = {}
          stateToChange.basemap = evt.currentTarget.id
          this.setState(stateToChange)
      }

      createNewStory = evt => {
          evt.preventDefault()
        const story = {
            userId: +sessionStorage.getItem("userId"),
            basemapId: this.state.basemap,
            name: this.state.storyTitle,
            description: this.state.subtitle
        }

      StoryHandler.postNewStory(story)
      .then((newStory) => this.props.history.push(`/story/edit/${newStory.id}`))
      }



      render() {
        return (
          <React.Fragment>
            <form className="storyForm">
              <div className="form-group">
                <label htmlFor="storyTitle">Title</label>
                <input
                  type="text"
                  required
                  className="form-control"
                  onChange={this.handleFieldChange}
                  id="storyTitle"
                  placeholder="Title"
                />
              </div>
              <div className="form-group">
                <label htmlFor="subtitle">Subtitle</label>
                <input
                  type="text"
                  required
                  className="form-control"
                  onChange={this.handleFieldChange}
                  id="subtitle"
                  placeholder="Subtitle or description"
                />
              </div>
              </form>
              <h3>Choose basemap</h3>
              <Row>
              {
                  this.props.basemaps.map(basemap => {
                    return (<Col key={basemap.id}
                        id={basemap.id}
                        onClick={this.handleBasemap}>
                        <label htmlFor={basemap.name}>{basemap.name}</label>
                        <br/>
                    <img id={basemap.name} src={basemap.path} className="basemap-choice"/>
                </Col>
                    )
                  })
              }
              </Row>
              <Button onClick={this.createNewStory} outline color="secondary">save</Button>{' '}
              </React.Fragment>
        )
    }
}