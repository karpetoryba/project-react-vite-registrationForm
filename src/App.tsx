import React, { useState } from "react";

function SimpleForm() {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
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
      ...formData, // On copie toutes les données actuelles
      [name]: value, // On met à jour uniquement le champ qui a changé
    });
  };
  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h2 className="text-xl font-bold mb-4">
              Étape 1 : Sélectionnez le type de compte
            </h2>
            <div className=" space-x-4">
              <p className="text-gray-500 mb-4">Chose your account type</p>
              <div className="flex flex-col">
                <button
                  onClick={() => handleButtonClick("Personal Account")}
                  className="flex items-center text-black px-4 py-2 rounded hover:bg-gray-200"
                >
                  <img
                    src="public/button-1.png"
                    alt="icon"
                    className="w-20 h-20 mr-2"
                  />
                  <strong>Personal Account</strong>
                  <p className="text-gray-500 mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </button>
                <button
                  onClick={() => handleButtonClick("Business Account")}
                  className="flex items-center text-black px-4 py-2 rounded hover:bg-gray-200"
                >
                  <img
                    src="public/button-2.png"
                    alt="icon"
                    className="w-20 h-20 mr-2"
                  />
                  <strong> Business Account</strong>
                  <p className="text-gray-500 mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </button>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <h2 className="text-xl font-bold mb-4">
              Étape 2 : Informations personnelles
            </h2>
            <input
              type="text"
              name="name"
              placeholder="Entrez votre nom"
              value={formData.name}
              onChange={handleChange}
              className="w-80 border border-gray-300 p-2 rounded mb-4"
            />
            <input
              type="text"
              name="email"
              placeholder="Entrez votre Email"
              value={formData.email}
              onChange={handleChange}
              className="w-80 border border-gray-300 p-2 rounded mb-4"
            />
            <input
              type="text"
              name="password"
              placeholder="Entrez votre Password"
              value={formData.password}
              onChange={handleChange}
              className="w-80 border border-gray-300 p-2 rounded mb-4"
            />
          </div>
        );
      case 3:
        return (
          <div>
            <h2 className="text-xl font-bold mb-4">
              Étape 3 : Information personnelles
            </h2>
            <input
              type="text"
              name="age"
              placeholder="Entrez votre age"
              value={formData.age}
              onChange={handleChange}
              className="w-80 border border-gray-300 p-2 rounded mb-4"
            />
            <input
              type="text"
              name="interest"
              placeholder="Area of interest"
              value={formData.interest}
              onChange={handleChange}
              className="w-80 border border-gray-300 p-2 rounded mb-4"
            />
            <input
              type="text"
              name="bio"
              placeholder="Entre votre bio"
              value={formData.bio}
              onChange={handleChange}
              className="w-80 border border-gray-300 p-2 rounded mb-4"
            />
          </div>
        );
      case 4:
        return (
          <div className="flex flex-col items-center p-6">
            <div className="bg-green-500 text-white rounded-full text-6xl p-6 mb-4">
              ✓
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

  // Fonction pour gérer le clic sur les boutons de sélection de compte
  const handleButtonClick = (accountType) => {
    console.log("Selected Account Type:", accountType);
    // Passer à l'étape suivante
    nextStep();
  };

  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="flex flex-col items-center justify-center w-full max-w-md p-6 bg-white ">
        <h1 className="text-2xl font-bold mb-4">Registration Form</h1>
        <p className="text-gray-500 mb-4">
          Please fill out this form with the required information
        </p>

        {renderStepContent()}
        {/* Bouton "NEXT" visible seulement sur les étapes sauf la dernière */}
        {step < 4 && (
          <button
            onClick={nextStep}
            className="mt-4 bg-purple-500 text-white border border-white px-4 py-2 rounded hover:bg-gray- transition duration-300 "
          >
            NEXT
          </button>
        )}
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
