import { Wrapper } from 'components';
import { FormPassword, PasswordForm } from 'components/forms/FormPassword';

export const Password = () => {
  const submitPassword = (values: PasswordForm) => {
    console.log(values);
  };

  const disabled = (values: PasswordForm) => {
    return !values.oldPassword || !values.password || !values.confirmPassword;
  };

  return (
    <Wrapper title="Alterar senha" disabledScrollView hasBackButton>
      <FormPassword onSubmit={submitPassword} disabled={disabled} type="profile" />
    </Wrapper>
  );
};
