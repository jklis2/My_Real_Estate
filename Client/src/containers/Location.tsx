import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import H2 from "../components/H2";

export default function Location() {
  return (
    <section className="my-10 ">
      <H2 className="mb-6">Location</H2>
      <div className="w-full h-128">
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          scrollWheelZoom={false}
          className="h-full rounded-xl"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </section>
  );
}