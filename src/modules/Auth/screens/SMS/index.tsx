import { View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/core';
import { Formik, FormikErrors } from 'formik';

import { CodeInput } from '../../components/CodeInput';
import { Button, Wrapper } from '../../../../components';
import { ROUTES } from '../../../../navigation/appRoutes';

import { initialValues, SMSForm } from './form';

export const SMS = () => {
  const { navigate } = useNavigation();

  const handleResendCode = async () => {};

  const submitCode = (values: SMSForm, { setErrors }: { setErrors: (_errors: FormikErrors<SMSForm>) => void }) => {
    navigate(ROUTES.PASSWORD);
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
              value={values.code}
              onChangeText={handleChange('code')}
              onChange={() => setErrors({ ...errors, code: '' })}
              valid={!errors.code}
              setErrors={setErrors}
              error={errors}
              onResendCode={handleResendCode}
            />

            <Button style={{ marginTop: RFValue(32) }} disabled={values.code.length < 4} onPress={() => handleSubmit()}>
              Avançar
            </Button>
          </View>
        )}
      </Formik>
    </Wrapper>
  );
};
