import React, { Component } from "react";
import "./Dashboard.css"
import StoryList from "../stories/StoryList"

class Dashboard extends Component {
    render() {
      return (
        <React.Fragment>
          <div className="parent-Dash-Div">
            <div className="dashboard-row">
              <div className="dashboard-div-box">
                <h3>Stories</h3>
                <div className="dashboard-div">
                  <StoryList {...this.props}/>
                </div>
              </div>
              {/* <div className="dashboard-div-box">
                <h3>My Stories</h3>
                <div className="dashboard-div">
                  <MyStoryList {...this.props}
                  friends={this.props.state.friends}/>
                </div>
              </div> */}
            </div>
          </div>
        </React.Fragment>
      );
    }
  }

  export default Dashboard;
