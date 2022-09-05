import * as Yup from 'yup';

export type AddressForm = {
  address: string;
  address_number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
  zipcode: string;
};

export const initialValues: AddressForm = {
  address: '',
  address_number: '',
  complement: '',
  neighborhood: '',
  city: '',
  state: '',
  zipcode: ''
};

export const validationSchema = Yup.object().shape({
  zipcode: Yup.string().length(9, 'CEP inválido.')
});
