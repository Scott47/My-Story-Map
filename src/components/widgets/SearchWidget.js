import React from "react"
import { esriPromise } from 'react-arcgis';


export default class SearchWidget extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            widget: null
        };
    }

    render() {
        return null;
    }

    componentWillMount() {
        esriPromise([ 'esri/widgets/Search' ]).then(([ Search ]) => {
            const searchWidget = new Search({
                view: this.props.view
            });

            view.ui.add(searchWidget, {
                position: "top-left",
                index: 2
            });

            this.setState({ widget: searchWidget });
        }).catch((err) => console.error(err));
        console.log(this.state.widget)
    }
}
