import H2 from "../components/H2";
import P from "../components/P"
import firstStep from "../assets/FirstStep.png";
import secondStep from "../assets/SecondStep.png";
import thirdStep from "../assets/ThirdStep.png";
import StepArrow from "../components/StepArrow";
import StepCard from "../components/StepCard";

export default function HowItWorks() {
  return (
    <section className="my-16 text-center">
        
      <H2>How it works?</H2>
      <P className="px-16 mx-16 mb-10">
        Lorem ipsum dolor sit amet dolor siti conse ctetur adipiscing elit.
      </P>
      <div className="flex justify-around my-16 relative">
        <StepArrow className='-translate-x-56'/>
        <StepCard
          img={firstStep}
          title="First step"
          description="Lorem ipsum dolor sit amet dolor siti conse ctetur adipiscing elit. Lorem ipsum dolor sit amet dolor siti conse ctetur adipiscing elit. "
        />
        <StepCard
          img={secondStep}
          title="Second step"
          description="Lorem ipsum dolor sit amet dolor siti conse ctetur adipiscing elit. Lorem ipsum dolor sit amet dolor siti conse ctetur adipiscing elit. "
        />
        <StepCard
          img={thirdStep}
          title="Thirs step"
          description="Lorem ipsum dolor sit amet dolor siti conse ctetur adipiscing elit. Lorem ipsum dolor sit amet dolor siti conse ctetur adipiscing elit. "
        />

        <StepArrow className='translate-x-56' />
      </div>
    </section>
  );
}
