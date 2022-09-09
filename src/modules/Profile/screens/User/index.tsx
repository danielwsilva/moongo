import { useState } from 'react';
import { useQueryClient } from 'react-query';

import { Wrapper } from 'components';
import { FormUser, UserForm, genders } from 'components/forms/FormUser';
import { MeDtoRes } from 'services/dtos/MeDto';
import { onlyNumbers } from 'utils/helpers';

export const User = () => {
  const [gender, setGender] = useState(genders[0].name);

  const queryClient = useQueryClient();
  const response = queryClient.getQueryData<MeDtoRes>('@meKey');

  const submitUser = (values: UserForm) => {
    const data = { ...values, gender };
    console.log(data);
  };

  const disabled = (values: UserForm) => {
    return (
      values.name === response?.data.name &&
      values.gender === response.data.gender &&
      onlyNumbers(values.cpf) === response.data.cpf &&
      values.date_birth === response.data.date_birth &&
      values.email === response.data.email &&
      onlyNumbers(values.phone) === response.data.phone
    );
  };

  return (
    <Wrapper title="Alterar dados pessoais" disabledScrollView hasBackButton>
      <FormUser
        onSubmit={submitUser}
        disabled={disabled}
        getGender={setGender}
        data={response?.data}
        textButton="Confirmar"
      />
    </Wrapper>
  );
};
