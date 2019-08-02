import React, { Component } from "react"
import { Scene } from "@esri/react-arcgis"
import StoryHandler from "../apiManager/StoryHandler";

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
            <section>
                <div className="storyElements">
                    {
                        this.state.storyelements.map(storyelement => {
                            return (

                            <h3 key={ storyelement.id }>{ storyelement.text }</h3>)
                        })
                    }
                </div>
            {
            this.props.basemaps.filter(basemap => basemap.id === this.state.story.basemapId).map(basemap => (
            <Scene style={{ width: "100vw", height: "100vh" }}
              key={this.state.story.id}
              mapProperties={{ basemap: basemap.name }}
              viewProperties={{
                center: [ -86.767960, 36.174465 ],
                zoom: 12
            }} />
            ))}
            </section>
        )
    }
}


