import React, { useEffect, useRef } from 'react';
import { loadModules } from 'esri-loader'

const SketchWidget = (props) => {


  const elementRef = useRef();
  useEffect(() => {;
    loadModules([
      "esri/widgets/Sketch",
      "esri/layers/GraphicsLayer",
      "esri/views/MapView"
    ])
      .then(([Sketch, GraphicsLayer, MapView]) => {
        // console.log(Sketch);
        let map = new MapView
        let node = document.createElement("div")
        let layer = new GraphicsLayer();
        let sketch = new Sketch({
          view: props.view,
          layer: layer,
          map: map
        });
        props.view.ui.add(sketch, "top-right")

        console.log(node)
      })
  }, []);
  return (
      <div id="viewDiv" ref={elementRef}></div>
  )
};

export default SketchWidget;








