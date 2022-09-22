import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { Wrapper } from 'components';
import { FormUser, UserForm } from 'components/forms/FormUser';
import { postUpdateMotorist } from 'services/api/Profile';
import { MeDtoRes } from 'services/dtos/MeDto';
import { onlyNumbers } from 'utils/helpers';

export const User = () => {
  const { goBack } = useNavigation();

  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<MeDtoRes>(['@meKey']);

  const [gender, setGender] = useState(data?.gender);

  const { mutate, isLoading } = useMutation(postUpdateMotorist, {
    onSuccess() {
      queryClient.invalidateQueries(['@meKey']);
      goBack();
    }
  });

  const submitUser = (values: UserForm) => {
    const item = { module: 'profile', ...values, gender };
    mutate(item);
  };

  const disabled = (values: UserForm) => {
    return (
      gender === data?.gender &&
      data?.name === values.name &&
      data?.cpf === onlyNumbers(values.cpf) &&
      data?.date_birth === values.date_birth &&
      data?.email === values.email &&
      data?.phone === onlyNumbers(values.phone)
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
