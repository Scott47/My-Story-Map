import React, { Component } from "react";
import "./Dashboard.css"
import StoryHandler from "../apiManager/StoryHandler"
import StoryCard from "../stories/StoryCard"
import { Row, Col } from "reactstrap"


class Dashboard extends Component {
  state = {
    userStories: []
  }

  deleteStory = id => StoryHandler.deleteStory(id)
    .then(() => StoryHandler.getAll()
    .then(stories => {
        this.setState({ userStories: stories })
    }))

  componentDidMount() {
    StoryHandler.getUserStories(sessionStorage.getItem("userId"))
    .then(currentUserStories => {console.log(currentUserStories)
      this.setState({ userStories: currentUserStories })
    })
  }

    render() {
      return (
        <React.Fragment>
          <div className="parent-Dash-Div">
            <div className="dashboard-row">
              <div className="dashboard-div-box">
                <h1>My Story Maps</h1>
                <div className="dashboard-div">
                <Row >
                {this.state.userStories.map(storyObj => (
                  <Col className="storyCard" key={storyObj.id}>
                  <StoryCard story={storyObj} deleteStory={this.deleteStory} basemap={storyObj.basemap}/>
                  </Col>
                ))}
                </Row>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
  export default Dashboard;
