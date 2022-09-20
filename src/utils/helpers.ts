export const onlyNumbers = (value: string) => value.replace(/[^\d]/g, '');

export const maskCpf = (value: string) => value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');

export const maskPhone = (value: string | undefined) =>
  value!.replace(/^(\d{2})(\d)/g, '($1) $2').replace(/(\d)(\d{4})$/, '$1-$2');
