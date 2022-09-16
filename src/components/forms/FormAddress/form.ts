import * as Yup from 'yup';

export type AddressForm = {
  zipcode: string;
  city: string;
  state: string;
  address: string;
  address_number: string;
  complement: string;
  neighborhood: string;
};

export const getInitialValues = (item: AddressForm) => {
  return {
    zipcode: item ? `${item.zipcode.substring(0, 5)}-${item.zipcode.substring(5)}` : '',
    city: item ? item.city : '',
    state: item ? item.state : '',
    address: item ? item.address : '',
    address_number: item ? item.address_number : '',
    complement: item ? item.complement : '',
    neighborhood: item ? item.neighborhood : ''
  };
};

export const validationSchema = Yup.object().shape({
  zipcode: Yup.string().length(9, 'CEP inválido.'),
  city: Yup.string().min(3, 'Cidade inválido.'),
  state: Yup.string().min(2, 'Estado inválido.'),
  address: Yup.string().min(3, 'Endereço inválido.'),
  neighborhood: Yup.string().min(3, 'Bairro inválido.')
});
