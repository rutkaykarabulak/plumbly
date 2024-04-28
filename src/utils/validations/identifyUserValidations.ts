import type { ValidationRule } from "quasar";

export const professionValidation: ValidationRule[] = [
  (profession) => !!profession || "Profession is required",
  (profession) => profession.length >= 5 || "Enter minimum 5 character"
];

export const yearsOfExperienceValidation: ValidationRule[] = [
  (yearsOfExperience) => !!yearsOfExperience || "Select your experience"
];
