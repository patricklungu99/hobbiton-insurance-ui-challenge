import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Shield, Check } from 'lucide-react';
import type { CoverageType } from '../utils/types';

interface CoverageOption {
  id: CoverageType;
  name: string;
  price: string;
  features: string[];
}

interface FormData {
  coverageType?: CoverageType;
}

interface CoverageInfoProps {
  next: () => void;
  back: () => void;
  updateForm: (data: FormData) => void;
  data: FormData;
}

const CoverageInfo: React.FC<CoverageInfoProps> = ({ next, back, updateForm, data }) => {
  const [selectedCoverage, setSelectedCoverage] = useState<CoverageType | ''>(data.coverageType || '');

  const coverageOptions: CoverageOption[] = [
    {
      id: 'basic',
      name: 'Basic Coverage',
      price: 'ZMW 800/year',
      features: ['Third Party Liability', 'Basic Roadside Assistance', 'Legal Protection'],
    },
    {
      id: 'standard',
      name: 'Standard Coverage',
      price: 'ZMW 1,500/year',
      features: ['Third Party Liability', 'Fire & Theft', 'Windscreen Cover', '24/7 Roadside Assistance'],
    },
    {
      id: 'comprehensive',
      name: 'Comprehensive',
      price: 'ZMW 2,200/year',
      features: ['Full Coverage', 'Accident Benefits', 'Rental Car', 'Personal Effects', 'Premium Support'],
    },
  ];

  const handleNext = () => {
    if (selectedCoverage) {
      updateForm({ coverageType: selectedCoverage });
      next();
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <Shield className="mx-auto text-green-600 mb-4" size={48} />
        <h2 className="text-2xl font-bold text-gray-800">Choose Your Coverage</h2>
        <p className="text-gray-600 mt-2">Select the protection level that's right for you</p>
      </div>

      <div className="space-y-4">
        {coverageOptions.map((plan) => (
          <div
            key={plan.id}
            className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
              selectedCoverage === plan.id ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-green-300'
            }`}
            onClick={() => setSelectedCoverage(plan.id)}
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-semibold text-gray-800">{plan.name}</h3>
                <p className="text-lg font-bold text-green-600">{plan.price}</p>
              </div>
              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  selectedCoverage === plan.id ? 'bg-green-500 border-green-500' : 'border-gray-300'
                }`}
              >
                {selectedCoverage === plan.id && <Check className="text-white" size={16} />}
              </div>
            </div>
            <ul className="text-sm text-gray-600 space-y-1">
              {plan.features.map((feature, idx) => (
                <li key={idx}>• {feature}</li>
              ))}
            </ul>
          </div>
        ))}
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
          disabled={!selectedCoverage}
          className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
            selectedCoverage
              ? 'bg-green-600 text-white hover:bg-green-700 cursor-pointer'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          Get Quote
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default CoverageInfo;
