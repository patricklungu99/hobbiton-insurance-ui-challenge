import Swal from 'sweetalert2'
import { useState } from 'react';
import { loadFormState, saveFormState, clearFormState } from '../utils/storage';
import type { QuoteFormData, PartialFormData } from '../utils/types';

// Import components
import Header from '../components/Header';
import Summary from '../components/Summary';
import DriverInfo from '../components/DriverInfo';
import VehicleInfo from '../components/VehicleInfo';
import PersonalInfo from '../components/PersonalInfo';
import CoverageInfo from '../components/CoverageInfo';
import StepIndicator from '../components/StepIndicator';

const MotorInsuranceQuoteApp = () => {
  const savedState = loadFormState();
  const [step, setStep] = useState<number>(savedState?.step || 1);

  const [formData, setFormData] = useState<QuoteFormData>(() => {
    const savedData = loadFormState()?.data as unknown as QuoteFormData;
    return savedData || {
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

  const resetForm = (): void => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This will reset your quote and start from the beginning.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, reset it!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        clearFormState();
        setStep(1);
        setFormData({
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
        });

        Swal.fire({
          title: 'Reset!',
          text: 'Your quote has been reset.',
          icon: 'success',
          timer: 1500,
          showConfirmButton: false
        });
      }
    });
  };

  const next = (): void => {
    const newStep = step + 1;
    setStep(newStep);
    saveFormState(newStep, formData as any);
  };

  const back = (): void => {
    const newStep = step - 1;
    setStep(newStep);
    saveFormState(newStep, formData as any);
  };

  const updateForm = (data: PartialFormData): void => {
    const updated = { ...formData, ...data };
    setFormData(updated);
    saveFormState(step, updated as any);
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-red-50 p-4">
      <div className="max-w-2xl mx-auto">
        <Header />
        <StepIndicator currentStep={step} />

        <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
          {step === 1 && <VehicleInfo next={next} updateForm={updateForm} data={formData} />}
          {step === 2 && <PersonalInfo next={next} back={back} updateForm={updateForm} data={formData} />}
          {step === 3 && <DriverInfo next={next} back={back} updateForm={updateForm} data={formData} />}
          {step === 4 && <CoverageInfo next={next} back={back} updateForm={updateForm} data={formData} />}
          {step === 5 && <Summary back={back} resetForm={resetForm} data={formData} />}
        </div>
      </div>
    </div>
  );
};

export default MotorInsuranceQuoteApp;
