import * as Yup from 'yup';

export type CarForm = {
  car_plate: string;
  car_renamed: string;
  model: string;
  year: string;
  color: string;
};

export const getInitialValues = (item: CarForm) => {
  return {
    car_plate: item ? item.car_plate : '',
    car_renamed: item ? item.car_renamed : '',
    model: item ? item.model : '',
    year: item ? item.year : '',
    color: item ? item.color : ''
  };
};

export const validationSchema = Yup.object().shape({
  car_plate: Yup.string().length(7, 'Placa inválido.'),
  car_renamed: Yup.string().length(11, 'Renavam inválido.'),
  year: Yup.string().length(4, 'Ano inválido.')
});
