import React, { Component } from "react"
import { Link } from "react-router-dom"
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "./NavBar.css"


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
                <NavLink href="/" active>My Stories</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/stories/new">Create New Story</NavLink>
              </NavItem>
              <NavItem>
            <NavLink href="#">Recent Stories</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/welcome" onClick={this.logOut}>Logout</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}


export default NavBar