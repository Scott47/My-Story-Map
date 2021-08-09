import React, { Component } from "react"
import { Nav, NavItem, NavLink } from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "./Navbar.css"


class NavBar extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false
        };
      }

      toggle() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
      }

      logOut = () => {
        sessionStorage.clear()
        this.props.history.push("/welcome")
      }

      render() {
        return (
          <div>
            <Nav fill >
              <NavItem>
                <NavLink className="navthings" href="/" active>My Stories</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="navthings" href="/stories/new">Create New Story</NavLink>
              </NavItem>
              <NavItem>
            <NavLink className="navthings" href="#">Recent Stories</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="navthings" href="/welcome" onClick={this.logOut}>Logout</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}


export default NavBar