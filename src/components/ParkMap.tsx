import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { MdLocationOn } from "react-icons/md";
import type { VisitorCenter } from "../types/VisitorCenter";
import type { LatLngExpression } from "leaflet";
import { renderToStaticMarkup } from "react-dom/server";

interface ParkMapProps {
  visitorCenters: VisitorCenter[];
}

const ParkMap = ({ visitorCenters }: ParkMapProps) => {
  // Fliter valid coordinates
  const validCenters = visitorCenters.filter(
    (vc) =>
      vc.latitude &&
      vc.longitude &&
      !isNaN(parseFloat(vc.latitude)) &&
      !isNaN(parseFloat(vc.longitude))
  );

  // Count center point on map
  const center: LatLngExpression =
    validCenters.length > 0
      ? [
          validCenters.reduce((sum, vc) => sum + parseFloat(vc.latitude), 0) /
            validCenters.length,
          validCenters.reduce((sum, vc) => sum + parseFloat(vc.longitude), 0) /
            validCenters.length,
        ]
      : [37.8, -96];

  // Create map icon
  const createLocationIcon = () => {
    const markup = renderToStaticMarkup(
      <MdLocationOn className="text-black text-4xl" />
    );

    return L.divIcon({
      html: markup,
      className: "",
      iconSize: [35, 35],
      iconAnchor: [16, 32],
    });
  };

  return (
    <MapContainer
      center={center}
      zoom={9}
      scrollWheelZoom
      className="w-full h-70 lg:h-96"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
      />
      {validCenters.map((vc) => (
        <Marker
          key={vc.id}
          position={[parseFloat(vc.latitude), parseFloat(vc.longitude)]}
          icon={createLocationIcon()}
        >
          <Popup>
            <strong>{vc.name}</strong>
            <p>{vc.description}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default ParkMap;
