import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, FileText } from 'lucide-react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import type { PersonalInfoData } from '../utils/types';

interface PersonalInfoProps {
  data: PersonalInfoData;
  updateForm: (formData: Partial<PersonalInfoData>) => void;
  next: () => void;
  back: () => void;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ next, back, updateForm, data }) => {
  const [formState, setFormState] = useState({
    fullName: data.fullName || '',
    phone: data.phone || '',
    email: data.email || '',
    nrc: data.nrc || '',
  });

  const handleChange = (field: keyof typeof formState, value: string) => {
    setFormState((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleNext = () => {
    updateForm(formState);
    next();
  };

  const isValidEmail = (email: string): boolean => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email.trim());
  };

  const isValid =
    formState.fullName.trim() &&
    formState.nrc.trim() &&
    formState.phone.trim() &&
    isValidEmail(formState.email);

  return (
    <div className="space-y-6">
      <div className="text-center">
        <FileText className="mx-auto text-green-600 mb-4" size={48} />
        <h2 className="text-2xl font-bold text-gray-800">Personal Information</h2>
        <p className="text-gray-600 mt-2">We need these details to prepare your quote</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="John Doe"
            value={formState.fullName}
            onChange={(e) => handleChange('fullName', e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">NRC Number</label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="123456/78/9"
            value={formState.nrc}
            onChange={(e) => handleChange('nrc', e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
          <PhoneInput
            country={'zm'}
            value={formState.phone}
            onChange={(phone) => handleChange('phone', phone)}
            inputStyle={{
              width: '100%',
              padding: '16px',
              borderRadius: '8px',
              border: '1px solid #ccc',
            }}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
          <input
            type="email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="john@example.com"
            value={formState.email}
            onChange={(e) => handleChange('email', e.target.value)}
          />
        </div>
        {formState.email && !isValidEmail(formState.email) && (
          <p className="text-sm text-red-500 mt-1">Please enter a valid email address</p>
        )}

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
          className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${isValid
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
