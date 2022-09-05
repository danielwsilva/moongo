import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Wrapper } from 'components';
import { FormAddress, AddressForm } from 'components/forms/FormAddress';
import { useRegister } from 'hooks/register';
import { ROUTES } from 'navigation/appRoutes';

const response = {
  address: 'Luiz Pedro Gonçalves',
  address_number: '292',
  complement: 'Casa',
  neighborhood: 'Centro',
  city: 'Serrana',
  state: 'SP',
  zipcode: '14150-000'
};

export const Address = () => {
  const { navigate } = useNavigation();
  const { addAddress } = useRegister();

  const submitAddress = (values: AddressForm) => {
    addAddress(values);
    navigate(ROUTES.REGISTER_PASSWORD);
  };

  const disabled = (values: AddressForm) => {
    return (
      values.zipcode === response.zipcode &&
      values.city === response.city &&
      values.state === response.state &&
      values.address === response.address &&
      values.address_number === response.address_number &&
      values.complement === response.complement &&
      values.neighborhood === response.neighborhood
    );
  };

  return (
    <Wrapper title="Alterar endereço" disabledScrollView hasBackButton>
      <View style={{ flex: 1, paddingHorizontal: 24 }}>
        <FormAddress onSubmit={submitAddress} disabled={disabled} data={response} textButton="Confirmar" />
      </View>
    </Wrapper>
  );
};
