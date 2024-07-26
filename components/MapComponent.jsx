// "use client";
// import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
// import { useCallback, useRef } from "react";

// const containerStyle = {
//   width: "100%",
//   height: "400px",
// };

// const center = {
//   lat: -3.745,
//   lng: -38.523,
// };

// const MapComponent = ({ selectedLocation }) => {
//   const mapRef = useRef();
//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY", // Replace with your API key
//   });

//   const onLoad = useCallback((map) => {
//     mapRef.current = map;
//   }, []);

//   const onUnmount = useCallback((map) => {
//     mapRef.current = null;
//   }, []);

//   if (!isLoaded) return <div>Loading...</div>;

//   return (
//     <GoogleMap
//       mapContainerStyle={containerStyle}
//       center={selectedLocation || center}
//       zoom={10}
//       onLoad={onLoad}
//       onUnmount={onUnmount}
//     >
//       {selectedLocation && <Marker position={selectedLocation} />}
//     </GoogleMap>
//   );
// };

// export default MapComponent;
"use client";

import RodicLogo from "@/public/images/rodic-logo.png";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

// Fix default marker icon issue with Webpack
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const CustomIcon = L.icon({
  iconUrl: RodicLogo.src,
  iconSize: [128, 128], // Size of the icon
  iconAnchor: [16, 16], // Point of the icon which will correspond to marker's location
  popupAnchor: [0, -16], // Point from which the popup should open relative to the iconAnchor
});
const MapComponent = ({ selectedLocation }) => {
  useEffect(() => {
    if (selectedLocation) {
      // Scroll into view when the location changes
      document.getElementById("map").scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedLocation]);

  return (
    <div id="map" style={{ height: "700px", width: "100%" }}>
      <MapContainer
        center={selectedLocation || [51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {selectedLocation && (
          <Marker position={selectedLocation} icon={CustomIcon}>
            <Popup className="">
              H. No.3, Goswami Bhawan, H C Goswami Road, Ward Street, Uzanbazar,
              Guwahati 781001 Assam
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
