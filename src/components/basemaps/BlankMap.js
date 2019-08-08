

var map = new Map({
    basemap: "topo"
  });

  var view = new MapView({
    container: "viewDiv",
    map: map,
    center: [-100.33, 25.69],
    zoom: 10,
    ui: {
      components: ["attribution"] // empty the UI, except for attribution
    }
  });