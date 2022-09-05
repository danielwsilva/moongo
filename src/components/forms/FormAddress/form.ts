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

export const getInitialValues = (item: AddressForm) => {
  return {
    address: item ? item.address : '',
    address_number: item ? item.address_number : '',
    complement: item ? item.complement : '',
    neighborhood: item ? item.neighborhood : '',
    city: item ? item.city : '',
    state: item ? item.state : '',
    zipcode: item ? item.zipcode : ''
  };
};

export const validationSchema = Yup.object().shape({
  zipcode: Yup.string().length(9, 'CEP inválido.')
});