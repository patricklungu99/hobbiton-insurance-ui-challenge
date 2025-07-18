import { useState } from 'react';
import Header from './components/Header';
import VehicleInfo from './components/VehicleInfo';
import DriverInfo from './components/DriverInfo';
import CoverageInfo from './components/CoverageInfo';
import PersonalInfo from './components/PersonalInfo';
import Summary from './components/Summary';
import StepIndicator from './components/StepIndicator';
import { loadFormState, saveFormState } from './utils/storage';

type QuoteFormData = {
  vehicleType: string;
  make: string;
  model: string;
  year: string;
  value: string;
  usage: string;
  driverAge: string;
  experience: string;
  location: string;
  coverageType: string;
  fullName: string;
  phone: string;
  email: string;
  nrc: string;
};

type PartialFormData = Partial<QuoteFormData>;

const MotorInsuranceQuoteApp = () => {
  const savedState = loadFormState();
  const [step, setStep] = useState<number>(savedState?.step || 1);

  const [formData, setFormData] = useState<FormData>((): any => {
    return loadFormState()?.data || {
      vehicleType: '',
      make: '',
      model: '',
      year: '',
      value: '',
      usage: '',
      driverAge: '',
      experience: '',
      location: '',
      coverageType: '',
      fullName: '',
      phone: '',
      email: '',
      nrc: ''
    };
  });

  const next = (): void => {
    const newStep = step + 1;
    setStep(newStep);
    saveFormState(newStep, formData);
  };

  const back = (): void => {
    const newStep = step - 1;
    setStep(newStep);
    saveFormState(newStep, formData);
  };

  const updateForm = (data: PartialFormData): void => {
    const updated = { ...formData, ...data };
    setFormData(updated);
    saveFormState(step, updated);
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-red-50 p-4">
      <div className="max-w-2xl mx-auto">
        <Header />
        <StepIndicator currentStep={step} />

        <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
          {step === 1 && <VehicleInfo next={next} updateForm={updateForm} data={formData} />}
          {step === 2 && <DriverInfo next={next} back={back} updateForm={updateForm} data={formData} />}
          {step === 3 && <CoverageInfo next={next} back={back} updateForm={updateForm} data={formData} />}
          {step === 4 && <PersonalInfo next={next} back={back} updateForm={updateForm} data={formData} />}
          {step === 5 && <Summary back={back} data={formData} />}
        </div>
      </div>
    </div>
  );
};

export default MotorInsuranceQuoteApp;
