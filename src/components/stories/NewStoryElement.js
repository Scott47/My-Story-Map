import React, { Component } from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class NewStoryElement extends Component {
  state = {
    userId: +sessionStorage.getItem("userId"),
    text: "",
    img: "",
    type: ""
  };

  handleFieldChange = evt => {
    console.log(evt.currentTarget.id)
    const stateToChange = {};
    stateToChange[evt.currentTarget.id] = evt.target.value;
    this.setState(stateToChange);
  };

  toggle = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }



  keyPress = (e) => {
    if(e.keyCode == 13){
       console.log('value', e.target.value);
       let newElement = {
        storyId: +this.props.storyId,
        orderSequence: this.props.getMaxOrderSequence(),
        userId: +sessionStorage.getItem("userId"),
        text: this.state.text,
        url: "",
        type: this.state.type
       }
    this.props.saveStoryElement(newElement)}
      }

  render() {
    return (
      <React.Fragment>
        <section className="elment-form">
          <div className="form-group">
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret>
         Element Type
        </DropdownToggle>
        <DropdownMenu id="type" onClick={this.handleFieldChange}>
          <DropdownItem header>Type</DropdownItem>
          <DropdownItem value="h1">heading</DropdownItem>
          <DropdownItem disabled>Add Layer (disabled)</DropdownItem>
          <DropdownItem value="p">paragraph</DropdownItem>
          <DropdownItem value="img"disabled>image</DropdownItem>
        </DropdownMenu>
      </Dropdown>
            <textarea
              value={this.state.text}
              className="form-control"
              onChange={this.handleFieldChange}
              id="text"
              placeholder="element"
              onKeyUp={this.keyPress}>
              </textarea>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
