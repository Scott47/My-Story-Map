// import React from 'react';
// import { Scene } from '@esri/react-arcgis';

// export default (props) => (
//     <Scene
//         style={{ width: '100vw', height: '100vh' }}
//         mapProperties={{ basemap: 'satellite' }}
//         viewProperties={{
//             center: [-122.4443, 47.2529],
//             zoom: 6
//         }}
//     />
// )
import React from 'react';
import { Map } from '@esri/react-arcgis';

export default class EsriMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            map: null,
            view: null
        };

        this.handleMapLoad = this.handleMapLoad.bind(this)
    }

    render() {
        return <Map className="full-screen-map" onLoad={this.handleMapLoad} />;
    }

    handleMapLoad(map, view) {
        this.setState({ map, view });
    }
}








// import React, { Component } from 'react';
// import { loadModules } from 'esri-loader';


// const options = {
//   url: 'https://js.arcgis.com/4.12/'
// };

// const styles =  {
//   container: {
//     height: '100vh',
//     width: '100vw'
//   },
//   mapDiv: {
//     padding: 0,
//     margin: 0,
//     height: '100%',
//     width: '100%'
//   },
// }

// class EsriMap extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       status: 'loading'
//     }
//   }

//   componentDidMount() {
//     loadModules(['esri/Map', 'esri/views/MapView'], options)
//       .then(([Map, MapView]) => {
//         const map = new Map({ basemap: "streets" });
//         const view = new MapView({
//           container: "viewDiv",
//           map,
//           zoom: 15,
//           center: [78.4867, 17.3850]
//         });
//         // view.then(() => {
//           this.setState({
//             map,
//             view,
//             status: 'loaded'
//           });
//         // });
//       })

//   }

//   renderMap() {
//     if(this.state.status === 'loading') {
//       return <div>loading</div>;
//     }
//   }

//   render() {

//     return(
//           <div style={styles.container}>
//             <div id='viewDiv' style={ styles.mapDiv } >
//               {this.renderMap()}
//             </div>
//           </div>
//     )
//   }
// }

// export default EsriMap;
















// // first, we use Dojo's loader to require the map class

// // export default class EsriMap extends Component {
// // state = {}
// // componentDidMount() {
// //     loadModules(['esri/views/MapView', 'esri/WebMap'])
// //     .then(([MapView, WebMap]) => {
// //       // then we load a web map from an id
// //       var webmap = new WebMap({
// //         portalItem: { // autocasts as new PortalItem()
// //           id: 'f2e9b762544945f390ca4ac3671cfa72'
// //         }
// //       });
// //       // and we show that map in a container w/ id #viewDiv
// //       var view = new MapView({
// //         map: webmap,
// //         container: 'viewDiv'
// //       });
// //       this.setState({
// //           view: view
// //       })
// //     })
// //     .catch(err => {
// //       // handle any errors
// //       console.error(err);
// //     });
// // }

// // render() {
// // console.log(this.state.view)
// //     return  (
// //         <div className="viewDiv ">
// //         </div>
// //       );
// //   }
// // }