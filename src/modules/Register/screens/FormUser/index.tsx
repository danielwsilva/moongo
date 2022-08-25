import { useState } from 'react';
import { Platform, View } from 'react-native';
import { Masks } from 'react-native-mask-input';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/core';
import { Formik } from 'formik';

import { Button, Input, Text, Wrapper } from '../../../../components';
import { ROUTES } from '../../../../navigation/appRoutes';
import theme from '../../../../styles/theme';

import { CheckBox, RadioButton } from '../../components';
import { initialValues, UserForm, validationSchema } from './form';
import styles from './styles';

const sexo = ['Masculino', 'Feminino', 'Outros'];

export const FormUser = () => {
  const [gender, setGender] = useState(sexo[0]);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const { navigate } = useNavigation();
  const { colors } = theme;

  const submitUser = (values: UserForm) => {
    // ADD CONTEXT
    navigate(ROUTES.REGISTER_CAR);
  };

  const handleOpenContract = () => {
    // LINK DO CONTRATO
  } 

  const disabled = (values: UserForm) => {
    return !values.name || !values.document || !values.birth_date || !values.email || !values.phone || !acceptedTerms;
  };

  return (
    <Wrapper
      title="Vamos começar!"
      subTitle="Por favor, informe seus dados para prossguirmos com o seu cadastro."
      currentPage={0}
      hasBackButton={false}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submitUser}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({ handleChange, handleSubmit, values, errors, setErrors }) => (
          <View style={{ flex: 1, justifyContent: 'space-between' }}>
            <View>
              <Text color={colors.textLight} fontSize={12} fontWeight="normal">
                Sexo
              </Text>

              <View style={styles.gender}>
                {sexo.map((item) => (
                  <RadioButton key={item} title={item} onPress={() => setGender(item)} active={item === gender} />
                ))}
              </View>

              <Input
                placeholder="Informe o seu nome completo"
                valid={errors.name === '' || !errors.name}
                errorText={errors.name}
                onChangeText={handleChange('name')}
                onChange={() => setErrors({ ...errors, name: '' })}
                value={values.name}
                maxLength={64}
              />

              <Input
                placeholder="Informe o seu CPF"
                valid={!errors.document}
                errorText={errors.document}
                onChangeText={handleChange('document')}
                onChange={() => setErrors({ ...errors, document: '' })}
                value={values.document}
                mask={Masks.BRL_CPF}
                keyboardType={Platform.OS === 'android' ? 'numeric' : 'number-pad'}
                maxLength={14}
              />

              <Input
                placeholder="Informe sua data de nascimento"
                valid={!errors.birth_date}
                errorText={errors.birth_date}
                onChangeText={handleChange('birth_date')}
                onChange={() => setErrors({ ...errors, birth_date: '' })}
                value={values.birth_date}
                mask={Masks.DATE_DDMMYYYY}
                maxLength={10}
                keyboardType={Platform.OS === 'android' ? 'numeric' : 'number-pad'}
              />

              <Input
                placeholder="Informe o seu e-mail"
                errorText={errors.email}
                onChangeText={handleChange('email')}
                value={values.email}
                valid={!errors.email}
                keyboardType="email-address"
                autoCapitalize="none"
                onChange={() => setErrors({ ...errors, email: '' })}
                maxLength={64}
              />

              <Input
                accessibilityHint="Agora digite seu celular"
                placeholder="Informe o seu celular com DDD"
                valid={!errors.phone}
                errorText={errors.phone}
                onChangeText={handleChange('phone')}
                value={values.phone}
                mask={Masks.BRL_PHONE}
                onChange={() => setErrors({ ...errors, phone: '' })}
                keyboardType={Platform.OS === 'android' ? 'numeric' : 'number-pad'}
              />

              <CheckBox
                placeholder="Declaro que li, compreendi e estou de acordo com o"
                textButton="contrato"
                link={handleOpenContract}
                onValueChange={() => setAcceptedTerms(!acceptedTerms)}
                active={acceptedTerms}
                style={{ marginVertical: RFValue(18) }}
              />
            </View>

            <Button style={{ marginBottom: RFValue(32) }} disabled={disabled(values)} onPress={() => handleSubmit()}>
              Avançar
            </Button>
          </View>
        )}
      </Formik>
    </Wrapper>
  );
};
