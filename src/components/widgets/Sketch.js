import React from "react"
import { loadModules } from 'esri-loader'


export default class Sketch extends React.Component {

    state = {
        sketch: new Sketch(),
        layer: layer,
        view: view
    }

    ComponentDidMount() {
        this.props.view.when(this.onViewLoaded);
      }

      onViewLoaded = (view) => {
        this.state.vm.view = view;
        watchUtils.init(view, "Sketch", this.onSketchChange);
      };

    layer = new GraphicsLayer();


}

view.ui.add(sketch, "top-right");




