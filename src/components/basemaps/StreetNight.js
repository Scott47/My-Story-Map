import React from 'react';
import { Scene } from '@esri/react-arcgis';

export default (props) => (
    <Scene
        style={{ width: '100vw', height: '100vh' }}
        mapProperties={{ basemap: 'streets-night-vector' }}
        viewProperties={{
            center: [-86.767960, 36.174465],
            zoom: 12
        }}
    />
)