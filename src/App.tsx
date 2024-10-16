import React, { useState } from "react";

function SimpleForm() {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h2 className="text-xl font-bold mb-4">
              Étape 1 : Sélectionnez le type de compte
            </h2>
            <div className="space-x-4">
              <button
                onClick={() => handleButtonClick("Personal Account")}
                className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
              >
                Personal Account
              </button>
              <button
                onClick={() => handleButtonClick("Business Account")}
                className="bg-white text-black border border-black px-4 py-2 rounded hover:bg-gray-200"
              >
                Business Account
              </button>
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
              placeholder="Entrez votre nom"
              className="border border-gray-300 p-2 rounded mb-4"
            />
            <input
              type="text"
              placeholder="Entrez votre Email"
              className="border border-gray-300 p-2 rounded mb-4"
            />
            <input
              type="text"
              placeholder="Entrez votre Password"
              className="border border-gray-300 p-2 rounded mb-4"
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
              placeholder="Entrez votre age"
              className="border border-gray-300 p-2 rounded mb-4"
            />
            <input
              type="text"
              placeholder="Area of interest"
              className="border border-gray-300 p-2 rounded mb-4"
            />
            <input
              type="Bio/Desctiption"
              placeholder="Entrez votre Password"
              className="border border-gray-300 p-2 rounded mb-4"
            />
          </div>
        );
      case 4:
        return (
          <div>
            <h2 className="text-xl font-bold mb-4">Étape 4 : Confirmation</h2>
            <p>vous avez reussié</p>
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
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Simple Form</h1>

      {renderStepContent()}
      {/* Bouton "NEXT" visible seulement sur les étapes sauf la dernière */}
      {step < 4 && (
        <button
          onClick={nextStep}
          className="mt-4 bg-black text-white border border-black px-4 py-2 rounded hover:bg-gray-800 transition duration-300"
        >
          NEXT
        </button>
      )}
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
