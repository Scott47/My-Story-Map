import React, { Component } from "react";
import { Container, Row, Col, Label, FormGroup, Input } from "reactstrap";
import StoryHandler from "../apiManager/StoryHandler";
import { Scene } from "@esri/react-arcgis";
import NewStoryElement from "./NewStoryElement";
import SketchWidget from "../widgets/SketchWidget"

export default class EditStory extends Component {
  state = {
    storyTitle: "",
    subtitle: "",
    basemap: "",
    storyelements: [],
    editElement: {},
    addStoryElement: false
  };

  handleFieldChange = evt => {
    console.log(evt.target.id);
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  handleDoubleClick = evt => {
    evt.persist();
    console.log(evt);
    StoryHandler.getStoryElementId(evt.target.id).then(storyelement => {
      this.setState({
        editElement: storyelement,
        editElementText: storyelement.text
      });
    });
  };

  addStoryElements = evt => {
    evt.preventDefault();
    this.setState({ addStoryElement: true });
  };
  saveStoryElement = element => {
    StoryHandler.postStoryElementId(element).then(() =>
      StoryHandler.getStoryElements(this.props.match.params.storyId).then(
        storyelements => this.setState({ storyelements: storyelements, addStoryElement: false })
      )
    );
  };

  saveUpdatedElement = () => {
    const stateToUpdate = Object.assign({}, this.state.editElement);
    stateToUpdate.text = this.state.editElementText;
    this.setState({ editElement: stateToUpdate }, () => {
      return StoryHandler.putStoryElement(this.state.editElement).then(() => {
        StoryHandler.getStoryElements(this.props.match.params.storyId).then(
          storyelements =>
            this.setState({ storyelements: storyelements, editElement: {} })
        );
      });
    });
  };

  orderElements = () => {
    return this.state.storyelements.map(e => e.orderSequence);
  };
  getMaxOrderSequence = () => {
    return Math.max(...this.orderElements());
  };

  storyElementType(storyelement) {
    if (storyelement.type === "img") {
      return (
        <img
          key={storyelement.id}
          src={storyelement.url}
          height="250"
          width="250"
        />
      );
    } else {
      if (storyelement.id === this.state.editElement.id) {
        return (
          <textarea
            key={storyelement.id}
            id="editElementText"
            value={this.state.editElementText}
            onChange={this.handleFieldChange}
            onBlur={this.saveUpdatedElement}
          />
        );
      } else {
        return (
          <storyelement.type
            onDoubleClick={this.handleDoubleClick}
            id={storyelement.id}
            key={storyelement.id}
          >
            {storyelement.text}
          </storyelement.type>
        );
      }
    }
  }

  componentDidMount() {
    StoryHandler.get(this.props.match.params.storyId).then(story => {
      console.log(story);
      this.setState({
        storyTitle: story.name,
        subtitle: story.description,
        basemap: story.basemapId
      });
    });
    StoryHandler.getStoryElements(this.props.match.params.storyId).then(
      storyelements => this.setState({ storyelements: storyelements })
    );
  }

  render() {
    return (
      <React.Fragment>
        <section className="editStoryForm">
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
                {this.state.storyelements.map(storyelement => {
                  return this.storyElementType(storyelement);
                })}
                {this.state.addStoryElement ? (
                  <NewStoryElement
                    storyId={this.props.match.params.storyId}
                    getMaxOrderSequence={this.getMaxOrderSequence}
                    saveStoryElement={this.saveStoryElement}
                  />
                ) : null}
                <button id="addElement" onClick={this.addStoryElements}>
                  +
                </button>
              </Col>
              {this.props.basemaps
                .filter(basemap => basemap.id == this.state.basemap)
                .map(basemap => (
                  <Col key={this.state.basemap} xs="8">
                    <Scene
                      style={{ width: "70vw", height: "90vh" }}
                      mapProperties={{ basemap: basemap.name }}
                      viewProperties={{
                        center: [-86.76796, 36.174465],
                        zoom: 12
                      }}>
                      <SketchWidget />
                      </Scene>

                  </Col>
                ))}

            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
