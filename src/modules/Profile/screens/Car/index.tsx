import { CommonActions, useNavigation } from '@react-navigation/native';
import { useQueryClient } from '@tanstack/react-query';

import { Wrapper } from 'components';
import { FormCar, CarForm } from 'components/forms/FormCar';
import { ROUTES } from 'navigation/appRoutes';
import { createMe } from 'services/api/home/keys';
import { MeResponse } from 'services/api/home/types';
import { useUpdateMotorist } from 'services/api/register';

export const Car = () => {
  const { dispatch } = useNavigation();

  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<MeResponse>(createMe());

  const { mutate, isLoading } = useUpdateMotorist();

  const submitCar = (values: CarForm) => {
    const item = { module: 'car', ...values };
    mutate(item, {
      onSuccess() {
        dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: ROUTES.PROFILE }]
          })
        );
      }
    });
  };

  const disabled = (values: CarForm) => {
    return (
      (values.car_plate === data?.car.car_plate || values.car_plate === '') &&
      (values.car_renamed === data?.car.car_renamed || values.car_renamed === '') &&
      (values.model === data?.car.model || values.model === '') &&
      (values.year === data?.car.year || values.year === '') &&
      (values.color === data?.car.color || values.color === '')
    );
  };

  return (
    <Wrapper title="Alterar informações do carro" disabledScrollView hasBackButton>
      <FormCar onSubmit={submitCar} disabled={disabled} data={data?.car} textButton="Confirmar" loading={isLoading} />
    </Wrapper>
  );
};
