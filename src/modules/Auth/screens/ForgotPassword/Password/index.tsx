import { Platform, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Formik } from 'formik';

import { Button, Input } from 'components';
import { useRegister } from 'hooks/register';
import { Wrapper } from 'modules/Register/components';
import { ROUTES } from 'navigation/appRoutes';

import { AuthRouteMap } from '../../../routes/AuthStack';
import { initialValues, PasswordForm, validationSchema } from './form';

type PasswordProps = NativeStackScreenProps<AuthRouteMap, ROUTES.AUTH_FORGOT_PASSWORD>;

export const Password = ({ route: { params } }: PasswordProps) => {
  const { stack } = params;
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
    <Wrapper
      title={stack === 'auth' ? 'Nova senha' : 'Criar senha'}
      subTitle={
        stack === 'auth'
          ? 'Quase lá! Crie uma nova senha para acessar a sua conta no app.'
          : 'Quase lá! Crie uma senha para acessar a sua conta no app.'
      }
      hasStep={stack !== 'auth'}
      currentPage={3}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submitPassword}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({ handleChange, handleSubmit, values, errors, setErrors }) => (
          <View style={{ flex: 1, justifyContent: 'space-between' }}>
            <View>
              <Input
                placeholder="Crie uma senha de 4 números"
                valid={!errors.password}
                errorText={errors.password}
                onChangeText={handleChange('password')}
                value={values.password}
                onChange={() => setErrors({ ...errors, password: '' })}
                maxLength={4}
                hasSufix
                isPassword
                keyboardType={Platform.OS === 'android' ? 'numeric' : 'number-pad'}
              />

              <Input
                accessibilityHint="Agora digite a senha novamente"
                placeholder="Confirme a senha"
                valid={!errors.confirmPassword}
                errorText={errors.confirmPassword}
                onChangeText={handleChange('confirmPassword')}
                onChange={() => setErrors({ ...errors, confirmPassword: '' })}
                value={values.confirmPassword}
                isPassword
                maxLength={4}
                hasSufix
                keyboardType={Platform.OS === 'android' ? 'numeric' : 'number-pad'}
              />
            </View>

            <Button style={{ marginBottom: RFValue(32) }} disabled={disabled(values)} onPress={() => handleSubmit()}>
              Confirmar
            </Button>
          </View>
        )}
      </Formik>
    </Wrapper>
  );
};
