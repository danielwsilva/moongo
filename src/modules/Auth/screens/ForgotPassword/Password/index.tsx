import { FormPassword, PasswordForm } from 'components/forms/FormPassword';
import { Wrapper } from 'modules/Register/components';

export const Password = () => {
  const submitPassword = (values: PasswordForm) => {
    console.log(values);
  };

  const disabled = (values: PasswordForm) => {
    return !values.password || !values.confirmPassword;
  };

  return (
    <Wrapper
      title="Nova senha"
      subTitle="Quase lá! Crie uma nova senha para acessar a sua conta no app."
      hasStep={false}
    >
      <FormPassword onSubmit={submitPassword} disabled={disabled} type="auth" />
    </Wrapper>
  );
};
