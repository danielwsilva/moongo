import { useNavigation } from '@react-navigation/native';

import { FormAddress, AddressForm } from 'components/forms/FormAddress';
import { useRegister } from 'hooks/register';
import { ROUTES } from 'navigation/appRoutes';
import { onlyNumbers } from 'utils/helpers';

import { Wrapper } from '../../components';

export const Address = () => {
  const { navigate } = useNavigation();
  const { addAddress } = useRegister();

  const submitAddress = (values: AddressForm) => {
    const data = { ...values, zipcode: onlyNumbers(values.zipcode) };

    addAddress(data);
    navigate(ROUTES.REGISTER_PASSWORD);
  };

  const disabled = (values: AddressForm) => {
    return !values.zipcode || !values.city || !values.state || !values.address || !values.neighborhood;
  };

  return (
    <Wrapper title="Quase lá!" subTitle="Agora nos conte onde você mora." currentPage={2}>
      <FormAddress onSubmit={submitAddress} disabled={disabled} />
    </Wrapper>
  );
};
