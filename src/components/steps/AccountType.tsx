type AccountTypeProps = {
  setFormData: React.Dispatch<React.SetStateAction<{ accountType: string }>>;
  setStep: (step: (prevStep: number) => number) => void;
};

const AccountType = ({ setFormData, setStep }: AccountTypeProps) => {
  const handleButtonClick = (type: string) => {
    setFormData((prevData) => ({
      ...prevData,
      accountType: type,
    }));
    setStep((prevStep) => prevStep + 1);
  };

  return (
    <div>
      <div className="space-x-4">
        <p className="text-gray-300 mb-4 text-xs">Choose your account type</p>
        <div className="flex flex-col">
          <button
            onClick={() => handleButtonClick("Personal Account")}
            className="w-100 flex items-center text-black px-4 py-2 rounded hover:bg-gray-200"
          >
            <img
              src="public/button-1.png"
              alt="icon"
              className="w-15 h-15 mr-2"
            />
            <div className="flex flex-col items-start text-sm">
              <strong>Personal Account</strong>
              <p className="text-gray-500 mb-4 text-xs text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </button>
          <button
            onClick={() => handleButtonClick("Business Account")}
            className="w-100 flex items-center text-black px-4 py-2 rounded hover:bg-gray-200"
          >
            <img
              src="public/button-2.png"
              alt="icon"
              className="w-15 h-15 mr-2"
            />
            <div className="flex flex-col items-start text-xs text-left">
              <strong>Business Account</strong>
              <p className="text-gray-500 mb-4 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountType;
