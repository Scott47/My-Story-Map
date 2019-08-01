import React, { Component } from 'react'


class StoryList extends Component {
    render() {
        return (
            <section className="stories">
            {
                this.props.stories.map(stories =>
                    <div key={stories.id}>
                        {stories.name}
                    </div>
                )
            }
            </section>
        )
    }
}

export default StoryList