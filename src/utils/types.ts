import type { LucideIcon } from 'lucide-react';

// Enums and string union types
export type CoverageType = 'basic' | 'standard' | 'comprehensive' | '';
export type VehicleType = 'car' | 'suv' | 'pickup' | 'motorcycle' | '';
export type UsageType = 'personal' | 'business' | 'commercial' | '';

// Stepper logic
export type Step = {
  id: number;
  title: string;
  icon: LucideIcon;
};

export type StepIndicatorProps = {
  currentStep: number;
};

// Personal info
export interface PersonalInfoData {
  fullName: string;
  phone: string;
  email: string;
  nrc: string;
}

// Vehicle info
export interface VehicleInfoData {
  vehicleType: VehicleType;
  make: string;
  model: string;
  year: string;
  value: string;
  usage: UsageType;
}

// Driver info
export interface DriverInfoData {
  driverAge: string;
  experience: string;
  location: string;
}

// Coverage info
export interface CoverageInfoData {
  coverageType: CoverageType;
}

export type QuoteFormData = PersonalInfoData & VehicleInfoData & DriverInfoData & CoverageInfoData;

// Partial version for updates
export type PartialFormData = Partial<QuoteFormData>;
