type RenderStepCirclesProps = {
  step: number;
};

const RenderStepCircles = ({ step }: RenderStepCirclesProps) => {
  return (
    <div className="flex items-center justify-center mb-8 relative p-5">
      <div className="absolute bg-gray-300 h-1 w-200 top-1/2 left-4 right-4 transform -translate-y-1/2 z-0"></div>

      {["1", "2", "3"].map((number, index) => (
        <div
          key={index}
          className={`relative z-10 w-8 h-8 flex items-center justify-center rounded-full text-white ${
            step === index + 1 ? "bg-purple-500" : "bg-gray-300"
          } mx-8`}
        >
          {number}
        </div>
      ))}
    </div>
  );
};
export default RenderStepCircles;
