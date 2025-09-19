import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { MdLocationOn } from "react-icons/md";
import type { VisitorCenter } from "../types/VisitorCenter";
import type { ParkingLot } from "../types/ParkingLot";
import type { LatLngExpression } from "leaflet";
import { renderToStaticMarkup } from "react-dom/server";

interface ParkMapProps {
  visitorCenters: VisitorCenter[];
  parkingLots: ParkingLot[];
}

const ParkMap = ({ visitorCenters, parkingLots }: ParkMapProps) => {
  // Fliter valid coordinates
  const validCenters = visitorCenters.filter(
    (vc) =>
      vc.latitude != null &&
      vc.longitude != null &&
      !isNaN(Number(vc.latitude)) &&
      !isNaN(Number(vc.longitude))
  );

  const validParkingLots = parkingLots.filter(
    (pl) =>
      pl.latitude != null &&
      pl.longitude != null &&
      !isNaN(Number(pl.latitude)) &&
      !isNaN(Number(pl.longitude))
  );

  // Count center point on map
  const allLatitudes = [
    ...validCenters.map((vc) => Number(vc.latitude)),
    ...validParkingLots.map((pl) => Number(pl.latitude)),
  ];

  const allLongitudes = [
    ...validCenters.map((vc) => Number(vc.longitude)),
    ...validParkingLots.map((pl) => Number(pl.longitude)),
  ];

  const center: LatLngExpression =
    allLatitudes.length > 0
      ? [
          allLatitudes.reduce((sum, lat) => sum + lat, 0) / allLatitudes.length,
          allLongitudes.reduce((sum, lng) => sum + lng, 0) /
            allLongitudes.length,
        ]
      : [37.8, -96];

  // Create map icon
  const createLocationIcon = (color: string) => {
    const markup = renderToStaticMarkup(
      <MdLocationOn style={{ color }} className="text-4xl" />
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

      {/* Visitor Centers */}
      {validCenters.map((vc) => (
        <Marker
          key={vc.id}
          position={[Number(vc.latitude), Number(vc.longitude)]}
          icon={createLocationIcon("black")}
        >
          <Popup>
            <strong>{vc.name}</strong>
            <p>{vc.description}</p>
          </Popup>
        </Marker>
      ))}

      {/* Parking Lots */}
      {validParkingLots.map((pl) => (
        <Marker
          key={pl.id}
          position={[Number(pl.latitude), Number(pl.longitude)]}
          icon={createLocationIcon("green")}
        >
          <Popup>
            <strong>{pl.name}</strong>
            <p>{pl.description}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default ParkMap;
