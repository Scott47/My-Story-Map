import React, { Component } from "react";
import { Container, Row, Col, Label, FormGroup, Input } from "reactstrap"
import StoryHandler from "../apiManager/StoryHandler";
import { Scene } from '@esri/react-arcgis'


export default class EditStory extends Component {

  state = {
    storyTitle: "",
    subtitle: "",
    basemap: "",
    storyelements: []
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  componentDidMount () {
      StoryHandler.get(this.props.match.params.storyId)
      .then(story => {
          this.setState({
              storyTitle: story.name,
              subtitle: story.description,
              basemap: story.basemapId
          })
      })
      StoryHandler.getStoryElements(this.props.match.params.storyId)
      .then(storyelements => this.setState({ storyelements: storyelements }))
  }


  render() {
      return(
    <React.Fragment>
      <form className="editStoryForm">
        <Container>
          <Row>
            <Col xs="4">
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
            <FormGroup>
                <Label for="storytext"></Label>
                <Input type="textarea" name="text" id="storytext" />
            </FormGroup>
            </Col>
            {
            this.props.basemaps.filter(basemap => basemap.id === this.state.basemap).map(basemap => (
            <Col key={this.state.basemap} xs="8">
            <Scene style={{ width: "100vw", height: "100vh" }}
              mapProperties={{ basemap: basemap.name }}
              viewProperties={{
                center: [ -86.767960, 36.174465 ],
                zoom: 12
            }} />
            </Col>
            ))}
          </Row>
        </Container>
      </form>
    </React.Fragment>
      )
  }
}
