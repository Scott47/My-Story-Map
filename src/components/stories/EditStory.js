import React, { Component } from "react";
import { Link } from "react-router-dom"
import { Row, Col, Button } from "reactstrap";
import StoryHandler from "../apiManager/StoryHandler";
import NewStoryElement from "./NewStoryElement";
import SketchWidget from "../widgets/SketchWidget";
import { loadModules } from "esri-loader"
import "./Story.css"

export default class EditStory extends Component {
  state = {
    storyTitle: "",
    subtitle: "",
    basemap: "",
    storyelements: [],
    editElement: {},
    addStoryElement: false,
    mapItems: [],
    layer: {}
  };

updateStoryTitle = () => {
const stateToChange = {
      userId: +sessionStorage.getItem("userId"),
      basemapId: this.state.basemap,
      name: this.state.storyTitle,
      description: this.state.subtitle,
      id: this.props.match.params.storyId
}

StoryHandler.putUserStory(stateToChange).then( () =>
StoryHandler.get(this.props.match.params.storyId).then(story => {
  console.log(story);
  this.setState({
    storyTitle: story.name,
    subtitle: story.description,
    basemap: story.basemapId
  });
}))

}

  handleClick = items => {
    console.log(items);
    if (items.length !== 0) {
      items.forEach(itemObj => {
        if (itemObj.geometry.latitude) {
          let point = {
            storyId: this.props.match.params.storyId,
            geometry: {
              latitude: itemObj.geometry.latitude,
              longitude: itemObj.geometry.longitude
            },
            type: "point"
          };
          this.saveMapItem(point);
        }
      });
    }
    return;
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

  saveMapItem = mapItems => {
    StoryHandler.postMapItems(mapItems).then(() =>
      StoryHandler.getMapItems(this.props.match.params.storyId).then(
        mapItems => {
          this.setState({
            mapItems: mapItems
          });
        }
      )
    );
  };

  addStoryElements = evt => {
    evt.preventDefault();
    this.setState({ addStoryElement: true });
  };
  saveStoryElement = element => {
    StoryHandler.postStoryElementId(element).then(() =>
      StoryHandler.getStoryElements(this.props.match.params.storyId).then(
        storyelements =>
          this.setState({
            storyelements: storyelements,
            addStoryElement: false
          })
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
    console.log("storyelements", this.state.storyelements);
    return this.state.storyelements.map(e => e.orderSequence);
  };
  getMaxOrderSequence = () => {
    if (this.orderElements.length < 1) {
      return 1;
    }
    let biggestNum = Math.max(...this.orderElements());
    console.log(biggestNum);
    if (biggestNum === null || biggestNum === 0) {
      return 1;
    } else {
      return biggestNum;
    }
  };

  storyElementType(storyelement) {
    if (storyelement.type === "img") {
      return (
        <img className="image"
        alt="story element type"
          key={storyelement.id}
          src={storyelement.url}
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
    loadModules(["esri/layers/GraphicsLayer"]).then(([GraphicsLayer]) => {
     let layer = new GraphicsLayer()
      this.setState({
        layer: layer
      })
        })
  }

  render() {
    return (
      <React.Fragment>
        <section className="editStoryForm">
          <div className="stories">
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
                    onBlur={this.updateStoryTitle}
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
                    onBlur={this.updateStoryTitle}
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
                <Button id="addElement" onClick={this.addStoryElements}>
                  Add to Story
                </Button>
                <Link to={`/stories/${this.props.match.params.storyId}`}>View</Link>
              </Col>
              {this.props.basemaps
                .filter(basemap => basemap.id === this.state.basemap)
                .map(basemapx => (
                  <Col key={this.state.basemap} xs="8">
                    <SketchWidget
                      basemap={basemapx.name}
                      handleClick={this.handleClick}
                      layer={this.state.layer}
                    />
                  </Col>
                ))}
            </Row>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
