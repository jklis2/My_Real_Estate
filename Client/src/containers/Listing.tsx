import { useState } from "react";
import Button from "../components/shared/Button.tsx";
import Pagination from "../components/shared/Pagination.tsx";
import PropertyCard from "../components/PropertyCard";
import { Property } from "../interfaces/Property";
import { Address } from "../interfaces/Address";
import { Link } from "react-router-dom";
import PlaceholderImage from "../assets/PropertyPlaceholder.png";

interface ListingProps {
  properties: Array<Property>;
  addresses: Array<Address>;
}

export default function Listing({ properties, addresses }: ListingProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => setCurrentPage(page);

  return (
    <section>
      <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-3">
        {properties?.map((prop) => {
          const location = addresses?.filter(
            (addr) => addr.propertyId === prop.id
          )[0];
          const imgPath =
            prop.photos && prop.photos.length > 0
              ? `${import.meta.env.VITE_API_URL}Photo?propertyId=${
                  prop.id
                }&photoId=${prop.photos[0]}`
              : PlaceholderImage;

          return (
            <PropertyCard
              key={prop.id}
              name={prop?.name}
              location={`${location?.city},${location?.country} `}
              imgPath={imgPath}
              action={
                <Link to={`/property/${prop.id}`}>
                  <Button className="w-full mt-3">Details</Button>
                </Link>
              }
            />
          );
        })}
      </div>
      <Pagination
        pages={9}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </section>
  );
}
