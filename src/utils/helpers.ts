export const onlyNumbers = (value: string) => value.replace(/[^\d]/g, '');

export const maskCpf = (value: string) => value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');

export const maskPhone = (value: string | undefined) =>
  value!.replace(/^(\d{2})(\d)/g, '($1) $2').replace(/(\d)(\d{4})$/, '$1-$2');

export const maskMoney = (value: number | undefined) => `R$ ${String(value!.toFixed(2)).replace('.', ',')}`;

export const validFullName = (name?: string) => {
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

export const isValidCpf = (cpf?: string) => {
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
};

export const isValidNinthDigit = (phone?: string) => {
  return Number(phone!.slice(5, 6)) === 9;
};

export const currencyNormalized = (num: string) => (Number(num.replace(/[^0-9]/g, '')) / 100).toFixed(2);
