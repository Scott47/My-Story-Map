import React, { Component } from "react"


export default class EditStory extends Component {

    state ={
        storyTitle: '',
        subtitle: '',
        basemap: ''
      }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
      }



}