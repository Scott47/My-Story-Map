import { useState, useEffect } from 'react';
import { loadModules } from '@esri/react-arcgis';
// import EditStory from './EditStory'

const MapGraphic = (props) => {

    const [graphic, setGraphic] = useState(null);
    useEffect(() => {

        loadModules(['esri/Graphic']).then(([Graphic]) => {
            const point = {
                type: "point",
                longitude: props.items.geometry.longitude,
                latitude: props.items.geometry.latitude
              };

              const simpleMarkerSymbol = {
                type: "simple-marker",
                color: [226, 119, 40],  // orange
                outline: {
                  color: [255, 255, 255], // white
                  width: 1
                }
              };

              const pointGraphic = new Graphic({
                geometry: point,
                symbol: simpleMarkerSymbol
              });

            setGraphic(graphic);
            props.view.graphics.add(graphic);
        }).catch((err) => console.error(err));

        return function cleanup() {
            props.view.graphics.remove(graphic);
        };
    }, []);
    return null;
  }



export default MapGraphic