import Description from "../containers/Description";
import Features from "../containers/Features";
import Gallery from "../containers/Gallery";
import Location from "../containers/Location";
import SimilarProperties from "../containers/SimilarProperties";

export default function Property() {
  return (
    <div>
      <Gallery />
      <Description />
      <Features />
      <Location />
      <SimilarProperties />
    </div>
  );
}
