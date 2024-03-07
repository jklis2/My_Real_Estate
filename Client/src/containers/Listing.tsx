import { useState } from "react";
import Button from "../components/Button";
import Pagination from "../components/Pagination";
import PropertyCard from "../components/PropertyCard";

export default function Listing() {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section>
      <div className="flex flex-wrap gap-10">
        <PropertyCard
          className="w-1/3"
          name="The Verano"
          location="Los Angeles, CA"
          price="535"
          imgPath="https://picsum.photos/500/300"
          action={<Button className="w-full mt-3">Details</Button>}
        />
        <PropertyCard
          className="w-1/3"
          name="The Verano"
          location="Los Angeles, CA"
          price="535"
          imgPath="https://picsum.photos/500/300"
          action={<Button className="w-full mt-3">Details</Button>}
        />
        <PropertyCard
          className="w-1/3"
          name="The Verano"
          location="Los Angeles, CA"
          price="535"
          imgPath="https://picsum.photos/500/300"
          action={<Button className="w-full mt-3">Details</Button>}
        />
      </div>
      <Pagination
        pages={9}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </section>
  );
}
