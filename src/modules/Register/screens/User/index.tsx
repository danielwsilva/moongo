import { useState } from 'react';
import { useNavigation } from '@react-navigation/core';

import { useMutation } from '@tanstack/react-query';
import { FormikHelpers } from 'formik';
import { FormUser, UserForm, genders } from 'components/forms/FormUser';
import { useCatch } from 'hooks/catch';
import { useRegister } from 'hooks/register';
import { ROUTES } from 'navigation/appRoutes';
import { postVerify } from 'services/api/Register';
import { onlyNumbers } from 'utils/helpers';

import { Wrapper } from '../../components';

export const User = () => {
  const [gender, setGender] = useState(genders[0].id);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const { addUser } = useRegister();
  const { navigate } = useNavigation();

  // const { catchFormErrors } = useCatch();

  // const { mutate } = useMutation(postVerify, {
  //   onSuccess(data) {
  //     console.log(data);
  //   },
  //   onError(error) {
  //     console.log(error);
  //   }
  // });

  const submitUser = (values: UserForm) => {
    const data = { ...values, cpf: onlyNumbers(values.cpf), phone: onlyNumbers(values.phone), gender };

    addUser(data);
    navigate(ROUTES.REGISTER_CAR);
  };

  const disabled = (values: UserForm) => {
    return !values.name || !values.cpf || !values.date_birth || !values.email || !values.phone || !acceptedTerms;
  };

  return (
    <Wrapper
      title="Vamos começar!"
      subTitle="Por favor, informe seus dados para prossguirmos com o seu cadastro."
      currentPage={0}
      hasBackButton={false}
    >
      <FormUser onSubmit={submitUser} disabled={disabled} getAcceptanceTerm={setAcceptedTerms} getGender={setGender} />
    </Wrapper>
  );
};
