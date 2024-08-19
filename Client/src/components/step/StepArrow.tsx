import stepArrow from 'assets/StepArrow.png';

interface ArrowProps {
  className: string;
}

export default function StepArrow({ className }: ArrowProps) {
  return (
    <div className={`absolute ${className}`}>
      <img src={stepArrow} alt="Direction of the step" />
    </div>
  );
}
