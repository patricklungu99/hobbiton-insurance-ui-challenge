import { useState } from 'react';
import { Car, ChevronRight } from 'lucide-react';

type VehicleType = 'car' | 'suv' | 'pickup' | 'motorcycle';
type UsageType = 'personal' | 'business' | 'commercial';

interface VehicleFormData {
  vehicleType: VehicleType | '';
  make: string;
  model: string;
  year: string;
  value: string;
  usage: UsageType | '';
}

interface Props {
  next: () => void;
  back: () => void;
  updateForm: (data: VehicleFormData) => void;
  data: VehicleFormData;
}

export default function VehicleInfo({ next, updateForm, data }: Props) {
  const [formState, setFormState] = useState<VehicleFormData>({
    vehicleType: data.vehicleType || '',
    make: data.make || '',
    model: data.model || '',
    year: data.year || '',
    value: data.value || '',
    usage: data.usage || ''
  });

  const handleChange = <K extends keyof VehicleFormData>(field: K, value: VehicleFormData[K]) => {
    setFormState(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNext = () => {
    updateForm(formState);
    next();
  };

  const isValid = Object.values(formState).every(Boolean);

  return (
    <div className="space-y-6">
      <div className="text-center">
        <Car className="mx-auto text-green-600 mb-4" size={48} />
        <h2 className="text-2xl font-bold text-gray-800">Vehicle Details</h2>
        <p className="text-gray-600 mt-2">Tell us about your vehicle</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Vehicle Type</label>
          <select
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            value={formState.vehicleType}
            onChange={(e) => handleChange('vehicleType', e.target.value as VehicleType)}
          >
            <option value="">Select vehicle type</option>
            <option value="car">Car</option>
            <option value="suv">SUV</option>
            <option value="pickup">Pickup Truck</option>
            <option value="motorcycle">Motorcycle</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Make</label>
            <select
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              value={formState.make}
              onChange={(e) => handleChange('make', e.target.value)}
            >
              <option value="">Select make</option>
              <option value="toyota">Toyota</option>
              <option value="honda">Honda</option>
              <option value="nissan">Nissan</option>
              <option value="mercedes">Mercedes-Benz</option>
              <option value="bmw">BMW</option>
              <option value="ford">Ford</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Model</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="e.g., Camry"
              value={formState.model}
              onChange={(e) => handleChange('model', e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
            <input
              type="number"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="2020"
              min="1990"
              max="2025"
              value={formState.year}
              onChange={(e) => handleChange('year', e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Value (ZMW)</label>
            <input
              type="number"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="150000"
              value={formState.value}
              onChange={(e) => handleChange('value', e.target.value)}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Primary Usage</label>
          <select
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            value={formState.usage}
            onChange={(e) => handleChange('usage', e.target.value as UsageType)}
          >
            <option value="">Select usage</option>
            <option value="personal">Personal Use</option>
            <option value="business">Business Use</option>
            <option value="commercial">Commercial Transport</option>
          </select>
        </div>
      </div>

      <div className="flex justify-end">
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
}
