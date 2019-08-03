import React, { Component } from "react"
import { Scene } from "@esri/react-arcgis"
import StoryHandler from "../apiManager/StoryHandler";
import { Container, Row, Col } from "reactstrap"
import "./Story.css"

export default class StoryView extends Component {

    state = {
        storyelements: [],
        story: {}
    }

    componentDidMount() {
       const newState = {}
    StoryHandler.getStoryElements(this.props.match.params.storyId)
    .then(storyelements => this.setState({ storyelements: storyelements }))
    StoryHandler.get(this.props.match.params.storyId)
    .then(story => {console.log(story)
        this.setState({ story: story })})
    }

    render () {
        return (
            <Container>
                <Row>
                    <Col xs="4">
                <div className="storyElements">
                    {
                        this.state.storyelements.map(storyelement => {
                            return (
                            <h3 key={ storyelement.id }>{ storyelement.text }</h3>)
                        })
                    }
                </div>
                </Col>
            {
            this.props.basemaps.filter(basemap => basemap.id === this.state.story.basemapId).map(basemap => (
            <Col key={this.state.story.id} xs="8">
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
        )
    }
}


