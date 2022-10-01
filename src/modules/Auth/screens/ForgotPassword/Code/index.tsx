import { View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/core';
import { Formik, FormikHelpers } from 'formik';

import { Button } from 'components';
import { useCatch } from 'hooks/catch';
import { useForgot } from 'hooks/forgotPassword';
import { Wrapper } from 'modules/register/components';
import { ROUTES } from 'navigation/appRoutes';

import { useForgotCode, useForgotCpf } from 'services/api/auth';
import { CodeInput } from '../../../components/CodeInput';
import { initialValues, SMSForm } from './form';

export const Code = () => {
  const { navigate } = useNavigation();
  const { catchFormError } = useCatch();
  const { cpf, addCode } = useForgot();

  const { mutateAsync: mutateCodeAsync, isLoading } = useForgotCode();
  const { mutateAsync: mutateCpfAsync } = useForgotCpf();

  const handleResendCode = async () => {
    fetchTempToken();
  };

  const fetchTempToken = async () => {
    try {
      await mutateCpfAsync({ cpf });
    } catch (error) {}
  };

  const submitCode = async (values: SMSForm, actions: FormikHelpers<SMSForm>) => {
    try {
      await mutateCodeAsync(values, {
        onSuccess() {
          navigate(ROUTES.AUTH_FORGOT_PASSWORD);
        }
      });
      addCode(values.token);
    } catch (error) {
      catchFormError({ token: error }, actions.setErrors);
    }
  };

  return (
    <Wrapper
      title="Código de recuperação"
      subTitle="Agora, informe o código de 4 números que enviamos por e-mail."
      hasStep={false}
    >
      <Formik initialValues={initialValues} onSubmit={submitCode} validateOnChange={false} validateOnBlur={false}>
        {({ handleChange, handleSubmit, values, errors, setErrors }) => (
          <View style={{ flex: 1 }}>
            <CodeInput
              value={values.token}
              onChangeText={handleChange('token')}
              onChange={() => setErrors({ ...errors, token: '' })}
              valid={!errors.token}
              setErrors={setErrors}
              error={errors}
              onResendCode={handleResendCode}
            />

            <Button
              style={{ marginTop: RFValue(32) }}
              disabled={values.token.length < 4 || isLoading}
              loading={isLoading}
              onPress={() => handleSubmit()}
            >
              Avançar
            </Button>
          </View>
        )}
      </Formik>
    </Wrapper>
  );
};
