import React, { useState, useEffect, useRef } from 'react';
import { loadModules } from 'esri-loader'

const SketchWidget = (props) => {

  const [sketch, setSketch] = useState();
  const elementRef = useRef();
  useEffect(() => {;
    loadModules([
      "esri/widgets/Sketch",
      "esri/layers/GraphicsLayer",
      "esri/views/MapView"
    ])
      .then(([Sketch, GraphicsLayer]) => {
        // console.log(Sketch);

        let node = document.createElement("div")
        let layer = new GraphicsLayer();
        let sketch = new Sketch({
          view: props.view,
          layer: layer
        });
        props.view.ui.add(sketch, "top-left")

        console.log(node)
      })
  }, []);
  return (
      <div id="viewDiv" ref={elementRef}>Sketch</div>
  )
};

export default SketchWidget;








