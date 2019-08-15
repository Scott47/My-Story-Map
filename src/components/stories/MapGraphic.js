import { useState, useEffect } from 'react';
import { loadModules } from 'esri-loader';
// import EditStory from './EditStory'

const MapGraphic = (props) => {console.log(props)

    const [graphic, setGraphic] = useState(null);
    useEffect(() => {

        loadModules(['esri/Graphic', "esri/views/MapView"]).then(([Graphic, MapView, view ]) => {

          view = new MapView({
            container: "viewDiv",
            center: [-86.76796, 36.174465],
            zoom: 14,
            ui: {
              components: ["attribution", "zoom", "compass", "locate"] // empty the UI, except for attribution
            }
          });

          const point = {
                type: "point",
                longitude: props.points[0].geometry.longitude,
                latitude: props.points[0].geometry.latitude
              };

              const simpleMarkerSymbol = {
                type: "simple-marker",
                color: [226, 119, 40],  // orange
                outline: {
                  color: [255, 255, 255], // white
                  width: 1
                }
              };

              const graphic = new Graphic({
                geometry: point,
                symbol: simpleMarkerSymbol
              });

            setGraphic(graphic);
            // props.view.graphics.add(graphic);
        }).catch((err) => console.error(err));

        return function cleanup() {
            // props.view.graphics.remove(graphic);
        };
    }, []);
    return null;
  }



export default MapGraphic