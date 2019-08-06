import React, { Component } from "react";
import { Scene } from "@esri/react-arcgis";
import StoryHandler from "../apiManager/StoryHandler";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom"
import "./Story.css";
// import SearchWidget from "../widgets/SearchWidget"
import BermudaTriangle from '../widgets/BermudaTriangle'
import SketchWidget from '../widgets/SketchWidget'

export default class StoryView extends Component {
  state = {
    storyelements: [],
    story: {}
  };

  componentDidMount() {
    const newState = {};
    StoryHandler.getStoryElements(this.props.match.params.storyId).then(
      storyelements => this.setState({ storyelements: storyelements })
    );
    StoryHandler.get(this.props.match.params.storyId).then(story => {
      console.log(story);
      this.setState({ story: story });
    });
  }

  render() {
    return (
      <Container>
          <Link to={`/story/edit/${this.state.story.id}`}><Button color="link"
          id={this.state.story.id}>edit story</Button></Link>
        <Row>
          <Col xs="4">
            <h1 className="storyTitle">
              {this.state.story.name}
            </h1>
            <h3 className="storySubtitle">
              {this.state.story.description}
            </h3>
            <div className="storyElements">
              {this.state.storyelements.map(storyelement => {
                return <h5 key={storyelement.id}>{storyelement.text}</h5>;
              })}
            </div>
          </Col>
          {this.props.basemaps
            .filter(basemap => basemap.id === this.state.story.basemapId)
            .map(basemap => (
              <Col key={this.state.story.id} xs="8">
                <Scene
                  style={{ width: "100vw", height: "100vh" }}
                  mapProperties={{ basemap: basemap.name }}
                  viewProperties={{
                    center: [-86.76796, 36.174465],
                    zoom: 12
                  }}
                >
                <BermudaTriangle />
                <SketchWidget />
                </Scene>
              </Col>
            ))}
        </Row>
      </Container>
    );
  }
}
