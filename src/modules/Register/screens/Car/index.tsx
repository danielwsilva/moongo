import { useNavigation } from '@react-navigation/native';

import { FormCar, CarForm } from 'components/forms/FormCar';
import { useRegister } from 'hooks/register';
import { ROUTES } from 'navigation/appRoutes';

import { Wrapper } from '../../components';

export const Car = () => {
  const { navigate } = useNavigation();
  const { addCar } = useRegister();

  const submitCar = (values: CarForm) => {
    addCar(values);
    navigate(ROUTES.REGISTER_ADDRESS);
  };

  const disabled = (values: CarForm) => {
    return !values.car_plate || !values.car_renamed || !values.model || !values.year || !values.color;
  };

  return (
    <Wrapper
      title="Conte um pouco mais sobre você"
      subTitle="Precisamos de algumas informações referente ao seu veículo."
      currentPage={1}
    >
      <FormCar onSubmit={submitCar} disabled={disabled} />
    </Wrapper>
  );
};
