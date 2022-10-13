import { useState } from 'react';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { useQueryClient } from '@tanstack/react-query';

import { Wrapper } from 'components';
import { FormUser, UserForm } from 'components/forms/FormUser';
import { ROUTES } from 'navigation/appRoutes';
import { createMe } from 'services/api/home/keys';
import { MeResponse } from 'services/api/home/types';
import { useUpdateMotorist } from 'services/api/register';
import { onlyNumbers } from 'utils/helpers';

export const User = () => {
  const { dispatch } = useNavigation();

  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<MeResponse>(createMe());

  const [gender, setGender] = useState(data?.gender);

  const { mutate, isLoading } = useUpdateMotorist();

  const submitUser = (values: UserForm) => {
    const item = { module: 'profile', ...values, gender };
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

  const disabled = (values: UserForm) => {
    return (
      gender === data?.gender &&
      (data?.name === values.name || values.name === '') &&
      (data?.cpf === onlyNumbers(values.cpf) || values.cpf === '') &&
      (data?.date_birth === values.date_birth || values.date_birth === '') &&
      (data?.email === values.email || values.email === '') &&
      (data?.phone === onlyNumbers(values.phone) || values.phone === '')
    );
  };

  return (
    <Wrapper title="Alterar dados pessoais" disabledScrollView hasBackButton>
      <FormUser
        onSubmit={submitUser}
        disabled={disabled}
        getGender={setGender}
        data={data}
        textButton="Confirmar"
        loading={isLoading}
      />
    </Wrapper>
  );
};
