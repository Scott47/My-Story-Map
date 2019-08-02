import React, { Component } from "react";
import "./Dashboard.css"
import StoryList from "../stories/StoryList"
import StoryHandler from "../apiManager/StoryHandler"

class Dashboard extends Component {
  state = {
    userStories: []
  }

  componentDidMount() {
    const newState = {}
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
                <h3>Stories</h3>
                <div className="dashboard-div">
                  <StoryList {...this.props}
                  userStories={this.state.userStories}/>
                </div>
              </div>
              {/* <div className="dashboard-div-box">
                <h3>My Stories</h3>
                <div className="dashboard-div">
                  <MyStoryList {...this.props}
                  friends={this.props.state.}/>
                </div>
              </div> */}
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
  export default Dashboard;
