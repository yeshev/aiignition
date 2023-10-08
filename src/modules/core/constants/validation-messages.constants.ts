import { ValidationErrors } from '../types/validation-errors.types';

export const VALIDATION_MESSAGES: Record<ValidationErrors, string> = {
  invalidEmail: 'Invalid email',
  required: 'Required field',
};
