import React from "react"
import { useState, useEffect } from 'react';
import { loadModules } from '@esri/react-arcgis';


const SketchWidget = (props) => {

    const [sketch, setSketch] = useState(null);
    useEffect(() => {
        loadModules(['esri/widgets/Sketch/SketchViewModel']).then(([SketchViewModel]) => {console.log(SketchViewModel)
        // layer = new GraphicsLayer();
        let newSketch =  new SketchViewModel ()
            // layer: GraphicsLaye
        setSketch(newSketch);
        props.view.ui.add(sketch, "top-right");

        })
        .catch((err) => console.error(err))
        return function cleanup() {
            props.view.ui.remove(sketch);
        };

     } )
    return null;

}


export default SketchWidget



    // ComponentDidMount() {
    //     this.props.view.when(this.onViewLoaded);
    //   }

    //   onViewLoaded = (view) => {
    //     this.state.vm.view = view;
    //     watchUtils.init(view, "Sketch", this.onSketchChange);
    //   };






// view.ui.add(sketch, "top-right");


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

