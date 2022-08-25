import * as Yup from 'yup';

export type ForgotPasswordForm = {
  cpf: string;
};

export const initialValues = { cpf: '' };

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

export const validationSchema = Yup.object().shape({
  cpf: Yup.string().test('cpf', 'CPF inválido.', isValidCpf)
});
