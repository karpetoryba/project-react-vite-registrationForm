import { useState } from "react";
import AccountType from "./components/steps/AccountType";
import PersonalInformation from "./components/steps/PersonalInformation";
import ProfilData from "./components/steps/ProfilData";
import NextPreviousStep from "./components/steps/NextPreviousStep";
import SentForm from "./components/steps/SentForm";
import RenderStepCircles from "./components/ui/renderStepCircles";
import StaticInformations from "./components/ui/StaticInformations";

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    accountType: "",
    name: "",
    email: "",
    password: "",
    age: "",
    interest: "",
    bio: "",
  });

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return <AccountType setFormData={setFormData} setStep={setStep} />;
      case 2:
        return (
          <PersonalInformation formData={formData} setFormData={setFormData} />
        );
      case 3:
        return <ProfilData formData={formData} setFormData={setFormData} />;
      case 4:
        return <SentForm formData={formData} />;

      default:
        return null;
    }
  };
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col items-center justify-center max-w-lg p-8 bg-white w-[600px] h-[700px]">
          <StaticInformations />
          <RenderStepCircles step={step} />
          {renderStepContent()}
          <NextPreviousStep step={step} setStep={setStep} />
        </div>
      </div>
    </>
  );
}

export default App;
