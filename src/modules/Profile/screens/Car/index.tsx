import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Wrapper } from 'components';
import { FormCar, CarForm } from 'components/forms/FormCar';
import { useRegister } from 'hooks/register';
import { ROUTES } from 'navigation/appRoutes';

const response = {
  car_plate: '123456',
  car_renamed: '123456',
  model: 'XXXXX',
  year: '2020',
  color: 'BRANCA'
};

export const Car = () => {
  const { navigate } = useNavigation();
  const { addCar } = useRegister();

  const submitCar = (values: CarForm) => {
    addCar(values);
    navigate(ROUTES.REGISTER_ADDRESS);
  };

  const disabled = (values: CarForm) => {
    return (
      values.car_plate === response.car_plate &&
      values.car_renamed === response.car_renamed &&
      values.model === response.model &&
      values.year === response.year &&
      values.color === response.color
    );
  };

  return (
    <Wrapper title="Alterar informações do carro" disabledScrollView hasBackButton>
      <View style={{ flex: 1, paddingHorizontal: 24 }}>
        <FormCar onSubmit={submitCar} disabled={disabled} data={response} textButton="Confirmar" />
      </View>
    </Wrapper>
  );
};
