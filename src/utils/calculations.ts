import type { QuoteFormData } from '../utils/types';

export const calculatePremiumAmount = (data: QuoteFormData): number => {
  const {
    value,
    driverAge,
    experience,
    usage,
    location,
    coverageType
  } = data;

  const vehicleValue = parseFloat(value);
  const driverAgeNum = parseInt(driverAge);
  const experienceNum = parseInt(experience);

  if (isNaN(vehicleValue) || isNaN(driverAgeNum) || isNaN(experienceNum)) {
    return 0;
  }

  // Base rate based on coverage
  let baseMultiplier = 0;
  switch (coverageType) {
    case 'basic':
      baseMultiplier = 0.015;
      break;
    case 'standard':
      baseMultiplier = 0.03;
      break;
    case 'comprehensive':
      baseMultiplier = 0.05;
      break;
    default:
      baseMultiplier = 0;
  }

  // Adjust based on driver age (younger = higher risk)
  const ageFactor = driverAgeNum < 25 ? 1.2 : driverAgeNum < 35 ? 1.1 : 1.0;

  // Adjust based on driving experience (less experience = higher risk)
  const experienceFactor = experienceNum < 2 ? 1.3 : experienceNum < 5 ? 1.15 : 1.0;

  // Usage factor
  const usageFactor = usage === 'personal' ? 1.0 : usage === 'business' ? 1.2 : 1.4;

  // Location risk factor (can be expanded later)
  const riskyLocations = ['Chawama', 'Kanyama', 'Matero'];
  const locationFactor = riskyLocations.includes(location.trim()) ? 1.25 : 1.0;

  const premium = vehicleValue * baseMultiplier * ageFactor * experienceFactor * usageFactor * locationFactor;

  return Math.round(premium);
};
