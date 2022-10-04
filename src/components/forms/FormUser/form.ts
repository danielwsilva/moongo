import * as Yup from 'yup';
import { isValidCpf, isValidNinthDigit, maskCpf, maskPhone, validFullName } from 'utils/helpers';

export type UserForm = {
  company: string;
  name: string;
  cpf: string;
  date_birth: string;
  email: string;
  phone: string;
  gender: string;
};

export const getInitialValues = (item: UserForm) => {
  let objMask = {} as { cpf: string; phone: string };

  if (item) {
    objMask = {
      cpf: maskCpf(item.cpf),
      phone: maskPhone(item.phone)
    };
  }

  return {
    name: item ? item.name : '',
    cpf: item ? objMask.cpf : '',
    date_birth: item ? item.date_birth : '',
    email: item ? item.email : '',
    phone: item ? objMask.phone : '',
    company: item ? item.company : '',
    gender: ''
  };
};

export const genders = [
  {
    id: 'mas',
    name: 'Masculino'
  },
  {
    id: 'fem',
    name: 'Feminino'
  },
  {
    id: 'out',
    name: 'Outros'
  }
];

export const validationSchema = Yup.object().shape({
  name: Yup.string().test('name', 'Nome completo como no documento.', validFullName),
  cpf: Yup.string().length(14, 'CPF inválido.').test('document', 'CPF inválido.', isValidCpf),
  date_birth: Yup.string().length(10, 'Data inválido.'),
  email: Yup.string().email('E-mail inválido.'),
  phone: Yup.string()
    .length(15, 'DDD + 9 números, exemplo (00) 90000-0000.')
    .test('phone', 'DDD + 9 números, exemplo (00) 90000-0000.', isValidNinthDigit)
});
