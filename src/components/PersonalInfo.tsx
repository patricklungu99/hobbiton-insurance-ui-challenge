import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, FileText } from 'lucide-react';
import type { PersonalInfoData } from '../utils/types';

interface PersonalInfoProps {
  data: PersonalInfoData;
  updateForm: (formData: Partial<PersonalInfoData>) => void;
  next: () => void;
  back: () => void;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ next, back, updateForm, data }) => {
  const [formState, setFormState] = useState<PersonalInfoData>({
    fullName: data.fullName || '',
    phone: data.phone || '',
    email: data.email || '',
    nrc: data.nrc || '',
  });

  const handleChange = (field: keyof PersonalInfoData, value: string) => {
    setFormState((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleNext = () => {
    updateForm(formState);
    next();
  };

  const isValid =
    formState.fullName.trim() &&
    formState.phone.trim() &&
    formState.email.trim() &&
    formState.nrc.trim();

  return (
    <div className="space-y-6">
      <div className="text-center">
        <FileText className="mx-auto text-green-600 mb-4" size={48} />
        <h2 className="text-2xl font-bold text-gray-800">Personal Information</h2>
        <p className="text-gray-600 mt-2">We need these details to prepare your quote</p>
      </div>

      <div className="space-y-4">
        {([
          { label: 'Full Name', key: 'fullName', placeholder: 'John Doe', type: 'text' },
          { label: 'NRC Number', key: 'nrc', placeholder: '123456/78/9', type: 'text' },
          { label: 'Phone Number', key: 'phone', placeholder: '+260 XXX XXX XXX', type: 'tel' },
          { label: 'Email Address', key: 'email', placeholder: 'john@example.com', type: 'email' },
        ] as const).map(({ label, key, placeholder, type }) => (
          <div key={key}>
            <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
            <input
              type={type}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder={placeholder}
              value={formState[key]}
              onChange={(e) => handleChange(key, e.target.value)}
            />
          </div>
        ))}
      </div>

      <div className="bg-yellow-50 p-4 rounded-lg">
        <h4 className="font-semibold text-yellow-800 mb-2">🔒 Your Privacy Matters</h4>
        <p className="text-sm text-yellow-700">
          All your personal information is encrypted and secure. We only use it to provide you with insurance services.
        </p>
      </div>

      <div className="flex justify-between">
        <button
          onClick={back}
          className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium bg-gray-200 text-gray-700 cursor-pointer hover:bg-gray-300 transition-colors"
        >
          <ChevronLeft size={20} />
          Back
        </button>

        <button
          onClick={handleNext}
          disabled={!isValid}
          className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
            isValid
              ? 'bg-green-600 text-white hover:bg-green-700 cursor-pointer'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          Next
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default PersonalInfo;