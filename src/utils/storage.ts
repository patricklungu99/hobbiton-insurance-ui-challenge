const STORAGE_KEY = 'motor-insurance-form';

export const saveFormState = (step: number, data: FormData) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ step, data }));
};

export const loadFormState = (): { step: number; data: FormData } | null => {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return null;
  try {
    return JSON.parse(saved);
  } catch (err) {
    console.error('Failed to parse saved form data:', err);
    return null;
  }
};

export const clearFormState = () => {
  localStorage.removeItem(STORAGE_KEY);
};
