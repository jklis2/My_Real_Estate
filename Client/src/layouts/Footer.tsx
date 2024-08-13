import P from "../components/shared/P.tsx"

export default function Footer() {
  return <footer className="border-t py-8 flex flex-col-reverse items-center gap-8 lg:flex-row justify-between">
    <P className="text-center sm:text-start mx-6">Copyright © 2024 My Real Estate | All Rights Reserved</P>
    <div className="flex flex-wrap justify-center mx-6 gap-x-6 gap-y-4 md:gap-y-0 md:gap-x-12">
        <a href="#" className="text-xl uppercase leading-6 text-gray-700">About</a>
        <a href="#" className="text-xl uppercase leading-6 text-gray-700">Offers</a>
        <a href="#" className="text-xl uppercase leading-6 text-gray-700">Property</a>
        <a href="#" className="text-xl uppercase leading-6 text-gray-700">Contact</a>
      </div>
  </footer>;
}
