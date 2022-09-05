import * as Yup from 'yup';

export type CarForm = {
  car_plate: string;
  car_renamed: string;
  model: string;
  year: string;
  color: string;
};

export const initialValues = {
  car_plate: '',
  car_renamed: '',
  model: '',
  year: '',
  color: ''
};

export const validationSchema = Yup.object().shape({
  car_plate: Yup.string().length(7, 'Placa inválido.'),
  year: Yup.string().length(4, 'Ano inválido.')
});
