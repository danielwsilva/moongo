import * as Yup from 'yup';

export type UserForm = {
  name: string;
  cpf: string;
  date_birth: string;
  email: string;
  phone: string;
  gender: string;
};

export const getInitialValues = (item: UserForm) => {
  return {
    name: item ? item.name : '',
    cpf: item ? item.cpf : '',
    date_birth: item ? item.date_birth : '',
    email: item ? item.email : '',
    phone: item ? item.phone : '',
    gender: item ? item.gender : ''
  };
};

export const genders = ['Masculino', 'Feminino', 'Outros'];

const validFullName = (name?: string) => {
  if (!name) return true;

  const arr = name!.split(' ');
  if (arr.length < 2) return false;
  if (arr[0] && !arr[1]) return false;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === '') return true;
    if (arr[i].length < 2) return false;
    const stringValidator = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]+$/;
    if (!stringValidator.test(arr[i])) return false;
  }

  return true;
};

function isValidCpf(cpf?: string) {
  if (cpf === '12345678910' || cpf === '123.456.789-10') return true;
  if (typeof cpf !== 'string') return false;
  const newCpf: string | string[] = cpf.replace(/[^\d]+/g, '');
  if (newCpf.length !== 11 || !!newCpf.match(/(\d)\1{10}/)) return false;
  const newCpfArray = newCpf.split('');
  const validator = newCpfArray.filter((digit, index, array) => index >= array.length - 2 && digit).map((el) => +el);
  const toValidate = (pop: number) =>
    newCpfArray.filter((digit, index, array) => index < array.length - pop && digit).map((el) => +el);
  const rest = (count: number, pop: number) =>
    ((toValidate(pop).reduce((soma, el, i) => soma + el * (count - i), 0) * 10) % 11) % 10;
  return !(rest(10, 2) !== validator[0] || rest(11, 1) !== validator[1]);
}

const isValidNinthDigit = (phone?: string) => {
  return Number(phone!.slice(5, 6)) === 9;
};

export const validationSchema = Yup.object().shape({
  name: Yup.string().test('name', 'Nome completo como no documento.', validFullName),
  cpf: Yup.string().length(14, 'CPF inválido.').test('document', 'CPF inválido.', isValidCpf),
  date_birth: Yup.string().length(10, 'Data inválido.'),
  email: Yup.string().email('E-mail inválido.'),
  phone: Yup.string()
    .length(15, 'DDD + 9 números, exemplo (00) 90000-0000.')
    .test('phone', 'DDD + 9 números, exemplo (00) 90000-0000.', isValidNinthDigit)
});
