import { useState } from 'react';

import { Wrapper } from 'components';
import { FormUser, UserForm, genders } from 'components/forms/FormUser';

const response = {
  name: 'Daniel Wallace',
  cpf: '440.089.898-97',
  date_birth: '07/07/1988',
  email: 'danielwllace@gmail.com',
  phone: '16993784967',
  gender: 'Masculino'
};

export const User = () => {
  const [gender, setGender] = useState(genders[0]);

  const submitUser = (values: UserForm) => {
    const data = { ...values, gender };

    console.log(data);
  };

  const disabled = (values: UserForm) => {
    return (
      values.name === response.name &&
      values.gender === gender &&
      values.cpf === response.cpf &&
      values.date_birth === response.date_birth &&
      values.email === response.email &&
      values.phone === response.phone
    );
  };

  return (
    <Wrapper title="Alterar dados pessoais" disabledScrollView hasBackButton>
      <FormUser
        onSubmit={submitUser}
        disabled={disabled}
        getGender={setGender}
        data={response}
        textButton="Confirmar"
      />
    </Wrapper>
  );
};
