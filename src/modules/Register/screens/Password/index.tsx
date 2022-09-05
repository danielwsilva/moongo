import { FormPassword, PasswordForm } from 'components/forms/FormPassword';
import { useRegister } from 'hooks/register';
import { Wrapper } from 'modules/Register/components';

export const Password = () => {
  const { user, car, address } = useRegister();

  const submitPassword = (values: PasswordForm) => {
    const data = {
      ...user,
      ...car,
      ...address,
      password: values.password
    };
  };

  const disabled = (values: PasswordForm) => {
    return !values.password || !values.confirmPassword;
  };

  return (
    <Wrapper title="Criar senha" subTitle="Quase lá! Crie uma senha para acessar a sua conta no app." currentPage={3}>
      <FormPassword onSubmit={submitPassword} disabled={disabled} type="register" />
    </Wrapper>
  );
};
