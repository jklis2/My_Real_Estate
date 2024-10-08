import H3 from 'components/shared/H3.tsx';
import P from 'components/shared/P.tsx';
import FAQNumber from 'components/FAQNumber';
import chevron from 'assets/icons/chevron.svg';

interface QuestionProps {
  number: number;
  title: string;
  answer: string;
  isAccordionOpen: boolean;
  toggleAccordion: () => void;
  isFirst: boolean;
}

export default function Question({ number, title, answer, isAccordionOpen, toggleAccordion, isFirst }: QuestionProps) {
  return (
    <div className="w-full px-8">
      <h2 id={`accordion-collapse-heading-${number}`}>
        <button
          type="button"
          className={`flex items-center justify-between w-full p-5 font-medium ${
            isAccordionOpen ? 'text-gray-700 bg-gray-100' : 'text-gray-500 bg-white'
          } ${isFirst ? 'border-gray-200 rounded-t-xl' : 'border-t-0'}
          border hover:bg-gray-100  gap-3 focus:ring-4 focus:ring-gray-200`}
          data-accordion-target={`#accordion-collapse-body-${number}`}
          aria-expanded={isAccordionOpen}
          aria-controls={`accordion-collapse-body-${number}`}
          onClick={toggleAccordion}>
          <div className="flex items-center gap-3 -translate-x-11">
            <FAQNumber number={number} />
            <H3>{title}</H3>
          </div>
          <img src={chevron} className={`transition-all ${isAccordionOpen ? 'rotate-180' : 'rotate-0'}`} />
        </button>
      </h2>
      <div id={`accordion-collapse-body-${number}`} className={`${isAccordionOpen ? 'block' : 'hidden'} p-5 border border-gray-200`} aria-labelledby={`accordion-collapse-heading-${number}`}>
        <P className="text-left">{answer}</P>
      </div>
    </div>
  );
}
