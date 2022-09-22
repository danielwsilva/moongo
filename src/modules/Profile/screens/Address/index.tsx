import { useNavigation } from '@react-navigation/native';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { Wrapper } from 'components';
import { FormAddress, AddressForm } from 'components/forms/FormAddress';
import { postUpdateMotorist } from 'services/api/Profile';
import { MeDtoRes } from 'services/dtos/MeDto';
import { onlyNumbers } from 'utils/helpers';

export const Address = () => {
  const { goBack } = useNavigation();

  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<MeDtoRes>(['@meKey']);

  const { mutate, isLoading } = useMutation(postUpdateMotorist, {
    onSuccess() {
      queryClient.invalidateQueries(['@meKey']);
      goBack();
    }
  });

  const submitAddress = (values: AddressForm) => {
    const item = { module: 'place', ...values, zipcode: onlyNumbers(values.zipcode) };
    mutate(item);
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
      <FormAddress
        onSubmit={submitAddress}
        disabled={disabled}
        data={data?.place}
        textButton="Confirmar"
        loading={isLoading}
      />
    </Wrapper>
  );
};
