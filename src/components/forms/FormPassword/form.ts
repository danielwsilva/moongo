import * as Yup from 'yup';

export type PasswordForm = {
  oldPassword?: string;
  password: string;
  confirmPassword: string;
};

export const initialValues = {
  oldPassword: '',
  password: '',
  confirmPassword: ''
};

export const validationSchema = Yup.object().shape({
  oldPassword: Yup.string().min(4, 'A senha deve conter 4 dígitos.'),
  password: Yup.string()
    .min(4, 'A senha deve conter 4 dígitos.')
    .notOneOf([Yup.ref('oldPassword'), null], 'A nova senha deve ser diferente da antiga.'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'As senhas devem ser iguais.')
});
