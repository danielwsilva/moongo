import { Platform, View } from 'react-native';
import { Masks } from 'react-native-mask-input';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/core';
import { Formik } from 'formik';

import { Button, Input } from 'components';
import { Wrapper } from 'modules/Register/components';
import { ROUTES } from 'navigation/appRoutes';

import { initialValues, ForgotPasswordForm, validationSchema } from './form';

export const CPF = () => {
  const { navigate } = useNavigation();

  const submitUser = (values: ForgotPasswordForm) => {
    // ADD CONTEXT
    navigate(ROUTES.AUTH_FORGOT_CODE);
  };

  const disabled = (values: ForgotPasswordForm) => {
    return !values.cpf;
  };

  return (
    <Wrapper
      title="Esqueceu a senha?"
      subTitle="Confirme seu CPF, enviaremos um código de recuperação por e-mail."
      currentPage={0}
      hasBackButton={false}
      hasStep={false}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submitUser}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({ handleChange, handleSubmit, values, errors, setErrors }) => (
          <View style={{ flex: 1 }}>
            <Input
              placeholder="Confirme o seu CPF"
              valid={!errors.cpf}
              errorText={errors.cpf}
              onChangeText={handleChange('cpf')}
              onChange={() => setErrors({ ...errors, cpf: '' })}
              value={values.cpf}
              mask={Masks.BRL_CPF}
              maxLength={14}
              keyboardType={Platform.OS === 'android' ? 'numeric' : 'number-pad'}
            />

            <Button style={{ marginTop: RFValue(32) }} disabled={disabled(values)} onPress={() => handleSubmit()}>
              Receber código
            </Button>
          </View>
        )}
      </Formik>
    </Wrapper>
  );
};
