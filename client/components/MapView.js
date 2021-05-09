import React from "react";
import mapboxgl from "!mapbox-gl";
import { mapBoxKey } from "../../secret.js";

mapboxgl.accessToken = mapBoxKey;

class MapView extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      lng: -73.9784895,
      lat: 40.7850574,
      zoom: 15,
    };
    this.mapContainer = React.createRef();
  }
  componentDidMount() {
    const { lng, lat, zoom } = this.state;
    const map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
    map.on("load", () => {
      let resList = this.props.restaurants.map((marker) => {
        let popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
          "<h5>" +
            marker.name +
            "</h5><h6>" +
            marker.location.display_address +
            "</h6>"
        );
        let mark = new mapboxgl.Marker({
          color: "#DC143C",
          draggable: true,
        })
          .setLngLat([
            marker.coordinates.longitude,
            marker.coordinates.latitude,
          ])
          .setPopup(popup)
          .addTo(map);
      });
    });
    map.on("move", () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2),
      });
    });
  }
  render() {
    return (
      <div>
        <div ref={this.mapContainer} className="map-container" />
      </div>
    );
  }
}

export default MapView;