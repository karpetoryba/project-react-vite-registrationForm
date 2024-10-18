type NextPreviousStepProps = {
  step: number;
  setStep: (step: (prevStep: number) => number) => void;
};

const NextPreviousStep = ({ step, setStep }: NextPreviousStepProps) => {
  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };
  const backStep = () => {
    if (step > 1) {
      setStep((prevStep) => prevStep - 1);
    }
  };

  return (
    <div className="flex space-x-4 mt-4 ml-auto">
      {step > 1 && step < 4 && (
        <button
          onClick={backStep}
          className="bg-white-400 text-gray-300 border border-white px-4 py-2 rounded"
        >
          Previous
        </button>
      )}
      {step < 4 && (
        <button
          onClick={nextStep}
          className="bg-purple-500 text-white border border-white px-4 py-2 rounded hover:bg-gray-300 transition duration-300"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default NextPreviousStep;
