import { useNavigation } from '@react-navigation/native';
import { useQueryClient } from '@tanstack/react-query';

import { Wrapper } from 'components';
import { FormCar, CarForm } from 'components/forms/FormCar';
import { useRegister } from 'hooks/register';
import { ROUTES } from 'navigation/appRoutes';
import { MeDtoRes } from 'services/dtos/MeDto';

export const Car = () => {
  const { navigate } = useNavigation();
  const { addCar } = useRegister();

  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<MeDtoRes>(['@meKey']);

  const submitCar = (values: CarForm) => {
    addCar(values);
    navigate(ROUTES.REGISTER_ADDRESS);
  };

  const disabled = (values: CarForm) => {
    return (
      values.car_plate === data?.car.car_plate &&
      values.car_renamed === data?.car.car_renamed &&
      values.model === data?.car.model &&
      values.year === data?.car.year &&
      values.color === data?.car.color
    );
  };

  return (
    <Wrapper title="Alterar informações do carro" disabledScrollView hasBackButton>
      <FormCar onSubmit={submitCar} disabled={disabled} data={data?.car} textButton="Confirmar" />
    </Wrapper>
  );
};
