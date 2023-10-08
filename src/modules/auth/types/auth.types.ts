export type SignUpFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  checkedNews: boolean;
};

export type SignUp = Omit<SignUpFormValues, 'checkedNews'>;

export type SignIn = {
  email: string;
  password: string;
};

export type CustomUser = {
  email: string;
  firstName: string;
  lastName: string;
  accessToken: string;
  id: number;
};
