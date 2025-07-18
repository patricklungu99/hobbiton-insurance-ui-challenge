import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, User } from 'lucide-react';
import type { DriverInfoData } from '../utils/types';

export interface DriverInfoProps {
  data: DriverInfoData;
  updateForm: (formData: Partial<DriverInfoData>) => void;
  next: () => void;
  back: () => void;
} 

const DriverInfo: React.FC<DriverInfoProps> = ({ next, back, updateForm, data }) => {
  const [formState, setFormState] = useState<DriverInfoData>({
    driverAge: data.driverAge || '',
    experience: data.experience || '',
    location: data.location || ''
  });

  const handleChange = (field: keyof DriverInfoData, value: string) => {
    setFormState(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNext = () => {
    updateForm(formState);
    next();
  };

  const isValid = formState.driverAge !== '' && formState.experience !== '' && formState.location !== '';

  return (
    <div className="space-y-6">
      <div className="text-center">
        <User className="mx-auto text-green-600 mb-4" size={48} />
        <h2 className="text-2xl font-bold text-gray-800">Driver Information</h2>
        <p className="text-gray-600 mt-2">Tell us about the main driver</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Driver's Age</label>
          <input
            type="number"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="30"
            min="18"
            max="100"
            value={formState.driverAge}
            onChange={(e) => handleChange('driverAge', e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Years of Driving Experience</label>
          <select
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            value={formState.experience}
            onChange={(e) => handleChange('experience', e.target.value)}
          >
            <option value="">Select experience</option>
            <option value="0-2">0-2 years</option>
            <option value="3-5">3-5 years</option>
            <option value="6-10">6-10 years</option>
            <option value="10+">10+ years</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Location (City/Province)</label>
          <select
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            value={formState.location}
            onChange={(e) => handleChange('location', e.target.value)}
          >
            <option value="">Select location</option>
            <option value="lusaka">Lusaka</option>
            <option value="kitwe">Kitwe</option>
            <option value="ndola">Ndola</option>
            <option value="livingstone">Livingstone</option>
            <option value="kabwe">Kabwe</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="font-semibold text-blue-800 mb-2">💡 Good to Know</h3>
        <p className="text-sm text-blue-700">
          Your driving experience and location help us calculate more accurate premiums. 
          Experienced drivers typically qualify for better rates.
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

export default DriverInfo;
