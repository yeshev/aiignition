import * as yup from 'yup';
import { SignIn } from '@/modules/auth/types/auth.types';
import { VALIDATION_MESSAGES } from '@/modules/core/constants/validation-messages.constants';

export const signInSchema: yup.ObjectSchema<SignIn> = yup.object({
  email: yup
    .string()
    .email(VALIDATION_MESSAGES.invalidEmail)
    .required(VALIDATION_MESSAGES.required),
  password: yup.string().required(VALIDATION_MESSAGES.required),
});
