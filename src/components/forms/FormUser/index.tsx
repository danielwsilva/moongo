import { useState } from 'react';
import { Platform, View } from 'react-native';
import { Masks } from 'react-native-mask-input';
import { RFValue } from 'react-native-responsive-fontsize';
import { useMutation } from '@tanstack/react-query';
import { Formik, FormikHelpers } from 'formik';

import { useCatch } from 'hooks/catch';
import { getVerify } from 'services/api/Register';
import theme from 'styles/theme';
import { onlyNumbers } from 'utils/helpers';

import { Button } from '../../Button';
import { CheckBox } from '../../CheckBox';
import { Input } from '../../Input';
import { RadioButton } from '../../RadioButton';
import { Text } from '../../Text';

import { getInitialValues, UserForm, validationSchema, genders } from './form';
import styles from './styles';

type FormUserProps = {
  onSubmit: (_values: UserForm) => void;
  disabled: (_values: UserForm) => boolean;
  getAcceptanceTerm?: (_term: boolean) => void;
  getGender?: (_gender: string) => void;
  data?: UserForm;
  textButton?: string;
};

const FormUser = ({
  onSubmit,
  disabled,
  getAcceptanceTerm,
  getGender,
  data,
  textButton = 'Avançar'
}: FormUserProps) => {
  const [gender, setGender] = useState(data ? data.gender : genders[0].id);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const { colors } = theme;
  const { catchFormError } = useCatch();

  const handleOpenContract = () => {
    // LINK DO CONTRATO
  };

  const handleGender = (value: string) => {
    setGender(value);

    if (getGender) {
      getGender(value);
    }
  };

  const handleAcceptedTerms = () => {
    setAcceptedTerms(!acceptedTerms);

    if (getAcceptanceTerm) {
      getAcceptanceTerm(!acceptedTerms);
    }
  };

  const { mutateAsync, isLoading } = useMutation(getVerify);

  const onSubmitVerify = async (values: UserForm, actions: FormikHelpers<UserForm>) => {
    const objUser = { ...values, cpf: onlyNumbers(values.cpf), phone: onlyNumbers(values.phone), gender };
    try {
      await mutateAsync(objUser);
      onSubmit(objUser);
    } catch (error) {
      catchFormError(error, actions.setErrors);
    }
  };

  return (
    <Formik
      initialValues={getInitialValues(data!)}
      validationSchema={validationSchema}
      onSubmit={onSubmitVerify}
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
              {genders.map((item) => (
                <RadioButton
                  key={item.id}
                  title={item.name}
                  onPress={() => handleGender(item.id)}
                  active={item.id === gender}
                />
              ))}
            </View>

            <Input
              placeholder="Informe o seu nome completo"
              valid={errors.name === '' || !errors.name}
              errorText={errors.name}
              onChangeText={handleChange('name')}
              onChange={() => setErrors({ ...errors, name: '' })}
              value={values.name}
              maxLength={30}
            />

            <Input
              placeholder="Informe o seu CPF"
              valid={!errors.cpf}
              errorText={errors.cpf}
              onChangeText={handleChange('cpf')}
              onChange={() => setErrors({ ...errors, cpf: '' })}
              value={values.cpf}
              mask={Masks.BRL_CPF}
              keyboardType={Platform.OS === 'android' ? 'numeric' : 'number-pad'}
              maxLength={14}
            />

            <Input
              placeholder="Informe sua data de nascimento"
              valid={!errors.date_birth}
              errorText={errors.date_birth}
              onChangeText={handleChange('date_birth')}
              onChange={() => setErrors({ ...errors, date_birth: '' })}
              value={values.date_birth}
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
              disabled={!!data}
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

            {!data && (
              <Input
                placeholder="Informe a sua companhia"
                valid={errors.company === '' || !errors.company}
                errorText={errors.company}
                onChangeText={handleChange('company')}
                onChange={() => setErrors({ ...errors, company: '' })}
                value={values.company}
                maxLength={30}
              />
            )}

            {getAcceptanceTerm && (
              <CheckBox
                placeholder="Declaro que li, compreendi e estou de acordo com o"
                textButton="contrato"
                link={handleOpenContract}
                onValueChange={() => handleAcceptedTerms()}
                active={acceptedTerms}
                style={{ marginVertical: RFValue(18) }}
              />
            )}
          </View>

          <Button
            style={{ marginBottom: RFValue(32) }}
            disabled={disabled(values) || isLoading}
            loading={isLoading}
            onPress={() => handleSubmit()}
          >
            {textButton}
          </Button>
        </View>
      )}
    </Formik>
  );
};

export { FormUser, UserForm, genders };
