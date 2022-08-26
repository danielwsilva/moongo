import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { Keyboard, Platform, TouchableWithoutFeedback, View } from 'react-native';
import { Masks } from 'react-native-mask-input';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';

import Logo from '../../../../assets/logo.svg';
import { Button, Input, Text } from '../../../../components';
import { ROUTES } from '../../../../navigation/appRoutes';
import theme from '../../../../styles/theme';

import styles from './styles';

export const SignIn = () => {
  const { navigate } = useNavigation();
  const { colors } = theme;

  const submitSignIn = () => {};

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <LinearGradient colors={[colors.primaryLight, colors.primary, colors.primary]} style={styles.container}>
        <StatusBar style="dark" backgroundColor={colors.primaryLight} translucent={false} />
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
                  onPress={() => navigate(ROUTES.FORGOT_PASSWORD)}
                >
                  Esqueci a senha
                </Button>

                <Button 
                  type="dark"
                  style={{ marginBottom: RFValue(24) }}
                  onPress={() => handleSubmit()}
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
