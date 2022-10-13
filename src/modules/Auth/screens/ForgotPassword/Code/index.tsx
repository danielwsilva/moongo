import { View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Toast from 'react-native-toast-message';
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

  const { mutate: mutateForgotCode, isLoading } = useForgotCode();
  const { mutate: mutateCpf } = useForgotCpf();

  const handleResendCode = () => {
    fetchTempToken();
  };

  const fetchTempToken = () => {
    mutateCpf(
      { cpf },
      {
        onError() {
          Toast.show({
            type: 'generic',
            props: { title: 'Serviço indisponível no momento. Por favor, tente mais tarde.' }
          });
        }
      }
    );
  };

  const submitCode = (values: SMSForm, actions: FormikHelpers<SMSForm>) => {
    mutateForgotCode(values, {
      onSuccess() {
        addCode(values.token);
        navigate(ROUTES.AUTH_FORGOT_PASSWORD);
      },
      onError(error) {
        catchFormError({ token: error.response.data.errors }, actions.setErrors);
      }
    });
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
