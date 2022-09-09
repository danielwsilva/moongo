import { useNavigation } from '@react-navigation/native';
import { useQueryClient } from '@tanstack/react-query';

import { Wrapper } from 'components';
import { FormAddress, AddressForm } from 'components/forms/FormAddress';
import { useRegister } from 'hooks/register';
import { ROUTES } from 'navigation/appRoutes';
import { MeDtoRes } from 'services/dtos/MeDto';
import { onlyNumbers } from 'utils/helpers';

export const Address = () => {
  const { navigate } = useNavigation();
  const { addAddress } = useRegister();

  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<MeDtoRes>(['@meKey']);

  const submitAddress = (values: AddressForm) => {
    addAddress(values);
    navigate(ROUTES.REGISTER_PASSWORD);
  };

  const disabled = (values: AddressForm) => {
    return (
      values.zipcode === data?.place.zipcode &&
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
