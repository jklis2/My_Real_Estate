import P from "../components/P"

export default function Footer() {
  return <footer className="border-t py-8 flex justify-between">
    <P>Copyright © 2024 My Real Estate | All Rights Reserved</P>
    <div className="flex gap-x-12">
        <a href="#" className="text-xl uppercase leading-6 text-gray-700">About</a>
        <a href="#" className="text-xl uppercase leading-6 text-gray-700">Offers</a>
        <a href="#" className="text-xl uppercase leading-6 text-gray-700">Property</a>
        <a href="#" className="text-xl uppercase leading-6 text-gray-700">Contact</a>
      </div>
  </footer>;
}
