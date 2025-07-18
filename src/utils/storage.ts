const STORAGE_KEY = 'motor-insurance-form';
import type { QuoteFormData } from './types';

type StoredFormState = {
  step: number;
  data: QuoteFormData;
};

export const saveFormState = (step: number, data: QuoteFormData) => {
  const state: StoredFormState = { step, data };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
};

export const loadFormState = (): StoredFormState | null => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) as StoredFormState : null;
};

export const clearFormState = () => {
  localStorage.removeItem(STORAGE_KEY);
  saveFormState(1, {} as any);
};
