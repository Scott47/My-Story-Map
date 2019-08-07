import React, { useState, useEffect, useRef } from "react";
import { loadModules } from "@esri/react-arcgis";


const SketchWidget = (props) => {
// const initialize = (container) => {
//     props.view.container = container
//     .when()
//     .then(_ => {
//         console.log(props.view.container, "view ready")
//     })
// }

  const [sketch, setSketch] = useState();
  const elementRef = useRef();
  useEffect(() => {
    console.log(props.view);
    loadModules([
      "esri/widgets/Sketch/SketchViewModel",
      "esri/layers/GraphicsLayer"
    ])
      .then(([SketchViewModel, GraphicsLayer]) => {
        // console.log(SketchViewModel);

        let layer = new GraphicsLayer();
        let newSketch = new SketchViewModel({
          view: props.view,
          layer: layer
        });
        // initialize(elementRef.current)

        console.log(elementRef.current, "elementRef current")
        setSketch(newSketch);

        console.log("sketch and new sketch", sketch, newSketch)
        console.log("propsview container", props.view.container);
        props.view.ui.add(newSketch, "top-left")
      })
  }, []);
  return (
      <div src={props.view.ui} ref={elementRef}></div>
  )
};

export default SketchWidget;



//   onViewLoaded = (view) => {
//     this.state.vm.view = view;
//     watchUtils.init(view, "Sketch", this.onSketchChange);
//   };

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
