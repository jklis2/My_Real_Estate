import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import H2 from "../components/H2";
import { useEffect, useState } from "react";
import { useLazyGetGeoQuery } from "../services/geoApi";
import { parseLatLng } from "../utils/parseLatLng";

interface Coordinates {
  lat: number;
  lng: number;
}

export default function Location() {
  const [getGeo, { data }] = useLazyGetGeoQuery();
  const [coords, setCoords] = useState<Coordinates | null>(null);

  useEffect(() => {
    getGeo("Krakow");
  }, [getGeo]);

  useEffect(() => {
    if (data) {
      setCoords({
        lat: parseLatLng(data.results[0].annotations.DMS.lat) || 0,
        lng: parseLatLng(data.results[0].annotations.DMS.lng) || 0,
      });
    }
  }, [data]);

  return (
    <section className="my-10 ">
      <H2 className="mb-6">Location</H2>
      <div className="w-full h-128">
        {coords && (
          <MapContainer
            center={[50.06, 19.94]}
            zoom={13}
            scrollWheelZoom={false}
            className="h-full rounded-xl"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[coords.lat, coords.lng]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        )}
      </div>
    </section>
  );
}
