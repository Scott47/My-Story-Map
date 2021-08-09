import React, { Component } from "react";
import StoryHandler from "../apiManager/StoryHandler";
import { Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import "./Story.css";
import MapGraphic from "./MapGraphic";

export default class StoryView extends Component {
  state = {
    storyelements: [],
    story: {},
    points: []
  };

  storyElementType(storyelement) {
    if (storyelement.type === "img") {
      return (
        <img className="image" alt="story element" key={storyelement.id} src={storyelement.url} />
      );
    } else {
        return (
          <storyelement.type id={storyelement.id} key={storyelement.id}>
            {storyelement.text}
          </storyelement.type>
        );
    }
  }

  componentDidMount() {
    console.log("props", this.props);
    StoryHandler.getStoryElements(this.props.match.params.storyId).then(
      storyelements => this.setState({ storyelements: storyelements })
    );
    StoryHandler.get(this.props.match.params.storyId).then(story => {
      this.setState({ story: story });
    });
    StoryHandler.getMapItems(this.props.match.params.storyId).then(points => {
      console.log(points);
      this.setState({ points: points });
    });
  }

  render() {
    return (
      <div>
        <div className="stories">
          <Row>
            <Col xs="4">
              <h1 className="storyTitle">{this.state.story.name}</h1>
              <h3 className="storySubtitle">{this.state.story.description}</h3>
              <div className="storyElements">
                {this.state.storyelements.map(storyelement => {
                  return this.storyElementType(storyelement);
                })}
              </div>
            </Col>
            {this.props.basemaps
              .filter(basemap => basemap.id === +this.state.story.basemapId)
              .map(basemapx => (
                <Col key={this.state.story.id} xs="8">
                  <MapGraphic
                    basemap={basemapx.name}
                    storyId={this.props.match.params.storyId}
                    points={this.state.points}
                  />
                </Col>
              ))}
            <Link to={`/story/edit/${this.state.story.id}`}>
              <Button color="link" id={this.state.story.id}>
                edit story
              </Button>
            </Link>
          </Row>
        </div>
      </div>
    );
  }
}
