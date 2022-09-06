import { FormPassword, PasswordForm } from 'components/forms/FormPassword';
import { useRegister } from 'hooks/register';
import { Wrapper } from 'modules/Register/components';
import { postMotorist } from 'services/api/Register';

export const Password = () => {
  const { user, car, address } = useRegister();

  const submitPassword = async (values: PasswordForm) => {
    try {
      const data = {
        ...user,
        ...car,
        ...address,
        password: values.password,
        company: 'CooperTáxi'
      };

      await postMotorist(data);
    } catch (error) {}
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
