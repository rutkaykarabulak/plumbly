import type { ValidationRule } from "quasar";

export const requiredFieldValidation: ValidationRule[] = [(value) => !!value || "Required field!"];
