import type { ValidationRule } from "quasar";

const specialCharacters = /[!@#$%^&*(),.?":{}|<>]/;
const emailRegex = /^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/;
const passwordRegex: RegExp = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?/\\~\\-])(?=.*\d).{8,}$/;

function doesContainAnySpecialCharacter(name: string) {
  return specialCharacters.test(name);
}

export function nameValidation(name: string): ValidationRule[] {
  return [
    () => !!name || "Your fullname is required",
    () => !doesContainAnySpecialCharacter(name) || "Special characters are not allowed"
  ];
}
export function emailValidation(email: string): ValidationRule[] {
  return [
    () => !!email || "Your email is required",
    () => emailRegex.test(email) || "Your email is not valid"
  ];
}

export function passwordValidation(password: string): ValidationRule[] {
  return [
    () => !!password || "Password is required",
    () =>
      !passwordRegex.test(password) ||
      "Password must be at least 8 characters long and contain at least one letter and one digit"
  ];
}
