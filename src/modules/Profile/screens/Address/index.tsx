import { useQueryClient } from '@tanstack/react-query';

import { Wrapper } from 'components';
import { FormAddress, AddressForm } from 'components/forms/FormAddress';
import { MeDtoRes } from 'services/dtos/MeDto';
import { onlyNumbers } from 'utils/helpers';

export const Address = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<MeDtoRes>(['@meKey']);

  const submitAddress = (values: AddressForm) => {
    console.log(values);
  };

  const disabled = (values: AddressForm) => {
    return (
      onlyNumbers(values.zipcode) === data?.place.zipcode &&
      values.city === data?.place.city &&
      values.state === data?.place.state &&
      values.address === data?.place.address &&
      values.address_number === data?.place.address_number &&
      values.complement === data?.place.complement &&
      values.neighborhood === data?.place.neighborhood
    );
  };

  return (
    <Wrapper title="Alterar endereço" disabledScrollView hasBackButton>
      <FormAddress onSubmit={submitAddress} disabled={disabled} data={data?.place} textButton="Confirmar" />
    </Wrapper>
  );
};
