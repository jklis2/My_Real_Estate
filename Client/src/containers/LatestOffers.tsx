import Button from "../components/Button";
import H2 from "../components/H2";
import OfferCard from "../components/OfferCard";
import { RiArrowLeftSLine } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";


export default function LatestOffers() {
  return (
    <section className="my-16 text-center">
      <H2>Latest Offers</H2>
      <div className="flex gap-8 justify-center items-center my-10">
      <RiArrowLeftSLine size={200} />
        <OfferCard location="Krakow, PL" url="url('../assets/Gallery1.png')"/>
        <OfferCard location="London, UK" url="url('../assets/Gallery2.png')"/>
        <OfferCard location="Paris, FR" url="url('../assets/Gallery3.png')"/>
        <RiArrowRightSLine size={200} />
      </div>
      <Button>Browse all offers</Button>
    </section>
  );
}
