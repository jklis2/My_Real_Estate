import H2 from "./shared/H2.tsx";

export default function TimeLine() {
  return (
    <section className="my-10">
      <H2 className="mb-4">Quick Stats</H2>
      <ol className="relative border-s border-gray-400">
        <li className="mb-10 ms-4 ">
          <div className="absolute   w-3 h-3 bg-neutral-700 border-neutral-700 rounded-full mt-1.5 -start-1.5 border"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            February 2022
          </time>
          <h3 className="text-lg font-semibold text-neutral-700 ">
            Application UI code in Tailwind CSS
          </h3>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Get access to over 20+ pages including a dashboard layout, charts,
            kanban board, calendar, and pre-order E-commerce & Marketing pages.
          </p>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute   w-3 h-3 bg-neutral-700 border-neutral-700 rounded-full mt-1.5 -start-1.5 border"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 ">
            March 2022
          </time>
          <h3 className="text-lg font-semibold text-neutral-700 ">
            Marketing UI design in Figma
          </h3>
          <p className="text-base font-normal text-gray-500 ">
            All of the pages and components are first designed in Figma and we
            keep a parity between the two versions even as we update the
            project.
          </p>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute   w-3 h-3 bg-neutral-700 border-neutral-700 rounded-full mt-1.5 -start-1.5 border"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 ">
            March 2022
          </time>
          <h3 className="text-lg font-semibold text-neutral-700 ">
            Marketing UI design in Figma
          </h3>
          <p className="text-base font-normal text-gray-500 ">
            All of the pages and components are first designed in Figma and we
            keep a parity between the two versions even as we update the
            project.
          </p>
        </li>
      </ol>
    </section>
  );
}
