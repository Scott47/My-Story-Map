import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap"
import StoryHandler from "../apiManager/StoryHandler";


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
            </Col>
          </Row>
        </Container>
      </form>
    </React.Fragment>
      )
  }
}
