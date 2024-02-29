type IconProps = {
  isAccordionOpen: boolean;
};

export default function AccordionIcon({ isAccordionOpen }: IconProps) {
  return (
    <svg
      data-accordion-icon
      className={`w-6 h-6 transform transition-transform ${
        isAccordionOpen ? "rotate-180" : "rotate-0"
      }`}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.833 7.5l4.167 4.167L14.167 7.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
