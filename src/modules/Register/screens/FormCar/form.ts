import * as Yup from 'yup';

export type CarForm = {
  plate: string;
  renamed: string;
  model: string;
  year: string;
  color: string;
};

export const initialValues = {
  plate: '',
  renamed: '',
  model: '',
  year: '',
  color: ''
};

export const validationSchema = Yup.object().shape({
  plate: Yup.string().length(7, 'Placa inválido.'),
  year: Yup.string().length(4, 'Ano inválido.')
});
