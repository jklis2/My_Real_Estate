import { useState } from 'react';
import H2 from 'components/shared/H2.tsx';
import H3 from 'components/shared/H3.tsx';
import FAQImg from 'assets/FAQImg.png';
import Question from 'components/Question';
import { QUESTIONS } from 'consts/questions';

export default function FAQ() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const toggleAccordion = (number: number) => setOpenAccordion(openAccordion === number ? null : number);

  return (
    <section className="my-16 text-center">
      <H2 className="mb-8">Do you Have Questions?</H2>
      <H3 className="mb-6">We have answers</H3>
      <div className="flex justify-center items-center border-b-2 border-gray-700">
        <img src={FAQImg} alt="FAQ image" />
      </div>
      <div className="mt-12 flex items-center space-x-4"></div>
      <div id="accordion-collapse" data-accordion="collapse">
        {QUESTIONS.map(question => (
          <Question
            key={question.number}
            number={question.number}
            title={question.title}
            answer={question.answer}
            isAccordionOpen={openAccordion === question.number}
            toggleAccordion={() => toggleAccordion(question.number)}
            isFirst={question.isFirst}
          />
        ))}
      </div>
    </section>
  );
}
