// import ReactDOM from "react-dom"
// import React, { useEffect }from "react"
// import { loadModules } from "@esri/react-arcgis"


// var map = new Map({
//     basemap: "topo"
//   });

//   var view = new MapView({
//     container: "viewDiv",
//     map: map,
//     center: [-100.33, 25.69],
//     zoom: 10,
//     ui: {
//       components: ["attribution"] // empty the UI, except for attribution
//     }
//   });

// class Zoom extends React.Component {
//     state = {
//       vm: new ZoomViewModel(),
//       maxZoomed: false,
//       minZoomed: false
//     };
//     componentDidMount() {
//         this.props.view.when(this.onViewLoaded);
//             }
//     module = (() => {
//         loadModules([
//         "esri/widgets/Sketch/ZoomViewModel",
//         "esri/views/MapView"
//       ])
//         .then(([ZoomViewModel, MapView]) => {

//         })

//     onViewLoaded = (view) => {
//       this.state.vm.view = view;
//       watchUtils.init(view, "zoom", this.onZoomChange);
//     };

//     onZoomChange = (value) => {
//       this.setState({
//         maxZoomed: value === view.constraints.maxZoom,
//         minZoomed: value === view.constraints.minZoom
//       });
//     };

//     zoomIn = () => {
//       if (!this.state.maxZoomed) {
//         this.state.vm.zoomIn();
//       }
//     };

//     zoomOut = () => {
//       if (!this.state.minZoomed) {
//         this.state.vm.zoomOut();
//       }
//     };
// })
//     render() {
//       const maxstate = this.state.maxZoomed ? "button circle raised disable" : "button circle raised";
//       const minstate = this.state.minZoomed ? "button circle raised disable" : "button circle raised";
//       return (
//         <div className="zoom-btns">
//           <div className={maxstate} onClick={this.zoomIn}>
//             <div className="center">
//               <i className="material-icons">add</i>
//             </div>
//           </div>
//           <div className={minstate} onClick={this.zoomOut}>
//             <div className="center">
//               <i className="material-icons">remove</i>
//             </div>
//           </div>
//         </div>
//       );
//     }
//   }

// const node = document.createElement("div");
// view.ui.add(node, "bottom-left");
// ReactDOM.render(<Zoom view={view} />, node);

// export default Zoom


