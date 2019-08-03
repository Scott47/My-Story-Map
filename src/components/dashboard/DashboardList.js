import React, { Component } from "react";
import "./Dashboard.css"
import StoryHandler from "../apiManager/StoryHandler"
import StoryCard from "../stories/StoryCard"
import { Link } from "react-router-dom"

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
                <h3>Map Stories</h3>
                <div className="dashboard-div">
                  <div className="card">
                  <Link className="nav-link" to={`/stories/new`}>
                    <div>Create new story</div>
                  </Link>
                  </div>
                {this.state.userStories.map(storyObj => (
                  <StoryCard key={storyObj.id} story={storyObj} />
                ))}
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
