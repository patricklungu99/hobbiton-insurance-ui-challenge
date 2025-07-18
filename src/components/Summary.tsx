import { Check } from 'lucide-react';
import React from 'react';

type CoverageType = 'basic' | 'standard' | 'comprehensive' | '';

interface FormData {
  fullName: string;
  make: string;
  model: string;
  year: number | string;
  location: string;
  coverageType: CoverageType;
}

interface SummaryProps {
  data: FormData;
  back: () => void;
}

const Summary: React.FC<SummaryProps> = ({ back, data }) => {
  const getPremiumAmount = (): number => {
    switch (data.coverageType) {
      case 'basic': return 800;
      case 'standard': return 1500;
      case 'comprehensive': return 2200;
      default: return 0;
    }
  };

  const getCoverageName = (): string => {
    switch (data.coverageType) {
      case 'basic': return 'Basic Coverage';
      case 'standard': return 'Standard Coverage';
      case 'comprehensive': return 'Comprehensive Coverage';
      default: return 'Coverage';
    }
  };
  
  const getPolicy = () => {
    console.log(data)
    alert("Done")
  }

  const emailPolicy = () => {
    alert("Done Policy")
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="text-green-600" size={32} />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Your Quote is Ready!</h2>
        <p className="text-gray-600 mt-2">Here's your personalized insurance quote</p>
      </div>

      <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Quote Summary</h3>
          <span className="text-sm text-gray-500">Valid for 30 days</span>
        </div>

        <div className="space-y-3 mb-4">
          <div className="flex justify-between">
            <span className="text-gray-600">Customer:</span>
            <span className="font-medium">{data.fullName}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Vehicle:</span>
            <span className="font-medium">{data.make} {data.model} ({data.year})</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Coverage:</span>
            <span className="font-medium">{getCoverageName()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Location:</span>
            <span className="font-medium capitalize">{data.location}</span>
          </div>
        </div>

        <div className="border-t pt-4">
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold">Annual Premium:</span>
            <span className="text-2xl font-bold text-green-600">
              ZMW {getPremiumAmount().toLocaleString()}
            </span>
          </div>
          <div className="text-sm text-gray-500 mt-1">
            Monthly payments available from ZMW {Math.ceil(getPremiumAmount() / 12)}
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 p-4 rounded-lg">
        <h4 className="font-semibold text-yellow-800 mb-2">💡 Ways to Save</h4>
        <ul className="text-sm text-yellow-700 space-y-1">
          <li>• Install a car alarm system for 10% discount</li>
          <li>• Complete defensive driving course for 15% discount</li>
          <li>• Bundle with home insurance for additional savings</li>
        </ul>
      </div>

      <div className="bg-green-50 p-4 rounded-lg">
        <h4 className="font-semibold text-green-800 mb-2">What happens next?</h4>
        <ul className="text-sm text-green-700 space-y-1">
          <li>• Our team will call you within 24 hours</li>
          <li>• We'll finalize your policy details</li>
          <li>• You can start coverage immediately</li>
          <li>• Digital policy documents sent to your email</li>
        </ul>
      </div>

      <div className="flex flex-col gap-4">
        <button 
          onClick={getPolicy} 
          className="w-full bg-green-600 text-white py-3 px-6 rounded-lg cursor-pointer hover:bg-green-700 transition-colors font-medium"
        >
          Get My Policy Now
        </button>
        <button
          onClick={emailPolicy} 
          className="w-full border border-green-600 text-green-600 py-3 px-6 rounded-lg cursor-pointer hover:bg-green-50 transition-colors font-medium"
        >
          Email Quote to Me
        </button>
        <button
          onClick={back}
          className="w-full bg-gray-200 text-gray-700 py-3 px-6 rounded-lg cursor-pointer hover:bg-gray-300 transition-colors font-medium"
        >
          Back to Edit Details
        </button>
      </div>
    </div>
  );
};

export default Summary;
