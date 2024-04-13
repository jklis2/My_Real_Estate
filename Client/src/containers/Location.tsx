import H2 from "../components/H2";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
} from "@vis.gl/react-google-maps";


export default function Location() {
  const position = { lat: 50.068149, lng: 19.9410266 };
  return (
    <section className="my-10 ">
      <H2 className="mb-6">Location</H2>
      <div className="w-full h-128">
        <APIProvider apiKey={import.meta.env.VITE_MAP_API}>
          <div className="h-full">
            <Map zoom={15} center={position} mapId={import.meta.env.VITE_MAP_ID}>
              <AdvancedMarker position={position}>
                <Pin
                  background={"red"}
                  borderColor={"red"}
                  glyphColor={"white"}
                />
              </AdvancedMarker>
            </Map>
          </div>
        </APIProvider>
      </div>
    </section>
  );
}
