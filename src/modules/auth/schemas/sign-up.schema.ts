import * as yup from 'yup';
import { SignUpFormValues } from '@/modules/auth/types/auth.types';
import { VALIDATION_MESSAGES } from '@/modules/core/constants/validation-messages.constants';

export const signUpSchema: yup.ObjectSchema<SignUpFormValues> = yup.object({
  firstName: yup.string().required(VALIDATION_MESSAGES.required),
  lastName: yup.string().required(VALIDATION_MESSAGES.required),
  email: yup
    .string()
    .email(VALIDATION_MESSAGES.invalidEmail)
    .required(VALIDATION_MESSAGES.required),
  password: yup.string().required(VALIDATION_MESSAGES.required),
  checkedNews: yup.boolean().required(),
});
