import H2 from "../components/H2";
import P from "../components/P";
import firstStep from "../assets/FirstStep.png";
import secondStep from "../assets/SecondStep.png";
import thirdStep from "../assets/ThirdStep.png";
import StepArrow from "../components/StepArrow";
import StepCard from "../components/StepCard";

export default function HowItWorks() {
  return (
    <section className="my-16 text-center">
      <H2 className="mb-8">How it works?</H2>
      <P className="px-8 sm:px-16 md:mx-16 mb-10">
        Lorem ipsum dolor sit amet dolor siti conse ctetur adipiscing elit.
      </P>
      <div className="flex flex-col sm:flex-row justify-around my-16 relative gap-10 sm:gap-0">
        <StepArrow className="hidden sm:block sm:-translate-x-28 md:-translate-x-36 lg:-translate-x-44 xl:-translate-x-56" />
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
          title="Third step"
          description="Lorem ipsum dolor sit amet dolor siti conse ctetur adipiscing elit. Lorem ipsum dolor sit amet dolor siti conse ctetur adipiscing elit. "
        />

        <StepArrow className="hidden sm:block sm:translate-x-28 md:translate-x-36 lg:translate-x-44 xl:translate-x-56" />
      </div>
    </section>
  );
}
