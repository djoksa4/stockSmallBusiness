import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import classes from "./MapComp.module.scss";

const MapComp = (props) => {
  // Markers
  const markers = props.locations.map((location) => (
    <Marker
      position={location.position}
      icon={
        new Icon({
          iconUrl: "imgs/location-svgrepo-com.svg",
          iconSize: [55, 55],
          iconAnchor: [30, 50],
        })
      }
      key={location.name}
    >
      <Popup>
        <h3 className={classes.mapcomp__markerTitle}>{location.name}</h3>
        <p className={classes.mapcomp__markerAddress}>{location.address}</p>
      </Popup>
    </Marker>
  ));

  // JSX
  return (
    <div className={classes.mapcomp}>
      <MapContainer center={[47.62646, -122.3336]} zoom={13}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {markers}
      </MapContainer>
    </div>
  );
};

export default MapComp;
