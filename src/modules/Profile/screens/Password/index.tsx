import { View } from 'react-native';
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
      <View style={{ flex: 1, paddingHorizontal: 24 }}>
        <FormPassword onSubmit={submitPassword} disabled={disabled} type="profile" />
      </View>
    </Wrapper>
  );
};
