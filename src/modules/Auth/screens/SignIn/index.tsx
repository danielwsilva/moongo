import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { Keyboard, Platform, TouchableWithoutFeedback, View } from 'react-native';
import { Masks } from 'react-native-mask-input';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';

import { Button, Input, Text } from 'components';
import { useAuth } from 'hooks/auth';
import { ROUTES } from 'navigation/appRoutes';
import theme from 'styles/theme';
import { onlyNumbers } from 'utils/helpers';
import Logo from 'assets/logo.svg';

import styles from './styles';

export const SignIn = () => {
  const { isLoading, signIn } = useAuth();
  const { navigate } = useNavigation();

  const { colors } = theme;

  const submitSignIn = (values: { cpf: string; password: string }) => {
    const data = { ...values, cpf: onlyNumbers(values.cpf), device_name: 'api_moongo' };
    signIn(data);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <LinearGradient colors={[colors.primaryLight, colors.primary, colors.primary]} style={styles.container}>
        <StatusBar backgroundColor={colors.primaryLight} translucent={false} />
        <Logo color={colors.black} width={450} style={{ alignSelf: 'center' }} />

        <View style={styles.wrapper}>
          <Formik
            initialValues={{ cpf: '', password: '' }}
            onSubmit={submitSignIn}
            validateOnChange={false}
            validateOnBlur={false}
            enableReinitialize
          >
            {({ handleChange, handleSubmit, values, errors, setErrors }) => (
              <>
                <Input
                  placeholder="Informe o seu CPF"
                  valid={errors.cpf === '' || !errors.cpf}
                  errorText={errors.cpf}
                  onChangeText={handleChange('cpf')}
                  onChange={() => setErrors({ ...errors, cpf: '' })}
                  value={values.cpf}
                  mask={Masks.BRL_CPF}
                  maxLength={14}
                  keyboardType={Platform.OS === 'android' ? 'numeric' : 'number-pad'}
                />
                <Input
                  placeholder="Informe a sua senha"
                  valid={errors.password === '' || !errors.password}
                  errorText={errors.password}
                  onChangeText={handleChange('password')}
                  onChange={() => setErrors({ ...errors, password: '' })}
                  value={values.password}
                  maxLength={4}
                  hasSufix
                  isPassword
                  keyboardType={Platform.OS === 'android' ? 'numeric' : 'number-pad'}
                />
                <Button
                  type="link"
                  fontWeight="semiBold"
                  color={colors.primary}
                  style={{ marginBottom: RFValue(10) }}
                  onPress={() => navigate(ROUTES.AUTH_FORGOT_CPF)}
                >
                  Esqueci a senha
                </Button>

                <Button
                  type="dark"
                  style={{ marginBottom: RFValue(24) }}
                  loading={isLoading}
                  onPress={() => handleSubmit()}
                  disabled={values.cpf.length !== 14 || values.password.length !== 4 || isLoading}
                >
                  Entrar na minha conta
                </Button>
              </>
            )}
          </Formik>

          <Button type="link" color={colors.black} fontWeight="semiBold">
            Novo por aqui?{' '}
            <Text color={colors.primary} onPress={() => navigate(ROUTES.REGISTER_STACK)}>
              Crie sua conta
            </Text>
          </Button>
        </View>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
};
