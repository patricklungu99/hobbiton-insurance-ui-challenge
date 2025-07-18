import { Car, User, Shield, FileText, Check } from 'lucide-react';
import type { Step, StepIndicatorProps } from '../utils/types';

const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep }) => {
  const steps: Step[] = [
    { id: 1, title: 'Vehicle', icon: Car },
    { id: 2, title: 'Driver', icon: User },
    { id: 3, title: 'Coverage', icon: Shield },
    { id: 4, title: 'Personal', icon: FileText },
    { id: 5, title: 'Quote', icon: Check }
  ];

  return (
    <div className="flex justify-center mb-8">
      <div className="flex items-center space-x-2">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isActive = index + 1 === currentStep;
          const isComplete = index + 1 < currentStep;

          return (
            <div key={step.id} className="flex items-center">
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full ${
                  isActive
                    ? 'bg-green-600 text-white'
                    : isComplete
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-300 text-gray-600'
                }`}
              >
                <Icon size={20} />
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`w-8 h-1 ${
                    isComplete ? 'bg-green-500' : 'bg-gray-300'
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StepIndicator;
