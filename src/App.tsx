import React, { useState } from "react";

function SimpleForm() {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };
  const backStep = () => {
    if (step > 1) {
      setStep((prevStep) => prevStep - 1);
    }
  };

  const [formData, setFormData] = useState({
    accountType: "",
    name: "",
    email: "",
    password: "",
    age: "",
    interest: "",
    bio: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const renderStepCircles = () => {
    return (
      <div className="flex items-center justify-center mb-8 relative">
        <div className="absolute bg-gray-300 h-1 w-64 top-1/2 left-4 right-4 transform -translate-y-1/2 z-0"></div>

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

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <div className="space-x-4">
              <p className="text-gray-500 mb-4 text-sm">
                Choose your account type
              </p>
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
                    <p className="text-gray-500 mb-4 text-sm text-left">
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
                  <div className="flex flex-col items-start text-sm text-left">
                    <strong> Business Account</strong>
                    <p className="text-gray-500 mb-4 ">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <p>Name</p>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-80 border border-gray-300 p-2 rounded mb-4 bg-slate-100"
            />
            <p>Email</p>
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-80 border border-gray-300 p-2 rounded mb-4 bg-slate-100"
            />
            <p>Password</p>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="w-80 border border-gray-300 p-2 rounded mb-4 bg-slate-100"
            />
          </div>
        );
      case 3:
        return (
          <div>
            <p>Age</p>
            <input
              type="text"
              name="age"
              placeholder="Enter your age"
              value={formData.age}
              onChange={handleChange}
              className="w-80 border border-gray-300 p-2 rounded mb-4 bg-slate-100"
            />
            <p>Area of interest</p>
            <input
              type="text"
              name="interest"
              placeholder="Area of interest"
              value={formData.interest}
              onChange={handleChange}
              className="w-80 border border-gray-300 p-2 rounded mb-4 bg-slate-100"
            />
            <p>Bio/Description</p>
            <input
              type="text"
              name="bio"
              placeholder="Enter your bio"
              value={formData.bio}
              onChange={handleChange}
              className="w-80 border border-gray-300 p-2 rounded mb-4 bg-slate-100"
            />
          </div>
        );
      case 4:
        return (
          <div className="flex flex-col items-center p-6">
            <div className="bg-green-500 text-white rounded-full text-6xl p-8 mb-4 w-24 h-24 flex items-center justify-center">
              <span className="text-white text-5xl">✓</span>
            </div>

            <p className="text-2xl font-bold">Congrats {formData.name}</p>
            <p className="text-xl font-bold">Registration Successful</p>
            <p className="text-lg font-bold">
              Email confirmation sent to {formData.email}
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  const handleButtonClick = (accountType) => {
    console.log("Selected Account Type:", accountType);
    setFormData({
      ...formData,
      accountType,
    });
    nextStep();
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center max-w-lg p-8 bg-white w-[600px] h-[700px]">
        <h1 className="text-2xl font-bold mb-4">Registration Form</h1>
        {renderStepCircles()}
        {renderStepContent()}
        <div className="flex space-x-4 mt-4">
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
              Send
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <SimpleForm />
    </>
  );
}

export default App;
