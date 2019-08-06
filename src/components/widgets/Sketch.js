import React from "react"
import { loadModules } from 'esri-loader'
import ArcGIS from "arcgis-js-api"


export default class Sketch extends React.Component {

    state = {
        sketch: new Sketch(),
        layer: layer,
        view: view
    }


    ComponentDidMount() {
console.log(ArcGIS)
        this.props.view.when(this.onViewLoaded);
      }

      onViewLoaded = (view) => {
        this.state.vm.view = view;
        watchUtils.init(view, "Sketch", this.onSketchChange);
      };

    layer = new GraphicsLayer();


}

view.ui.add(sketch, "top-right");


// componentDidMount() {
//     loadModules(this.props.scriptUri, this.props.loaderOptions)
//         .then((modules: any) => (
//             this.props.loadMap(modules, this.state.mapContainerId)
//                 .then(
//                     ({ map, view }) => {
//                         this.setState({
//                             map,
//                             view,
//                             status: 'loaded'
//                         });
//                         if (this.props.onLoad) {
//                             this.props.onLoad(map, view);
//                         }
//                     })
//                 .catch((e) => {
//                     throw e;
//                 })
//         )).catch((e: Error) => {
//             this.setState({ status: 'failed' });
//             if (this.props.onFail) {
//                 this.props.onFail(e);
//             }
//         });
// }

