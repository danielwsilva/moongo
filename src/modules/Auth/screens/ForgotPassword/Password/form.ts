import * as Yup from 'yup';

export type PasswordForm = {
  password: string;
  confirmPassword: string;
};

export const initialValues = {
  password: '',
  confirmPassword: ''
};

export const validationSchema = Yup.object().shape({
  password: Yup.string().min(4, 'A senha deve conter 4 dígitos.'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'As senhas devem ser iguais.')
});
