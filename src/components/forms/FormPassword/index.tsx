import { Platform, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Formik } from 'formik';

import { Button } from '../../Button';
import { Input } from '../../Input';

import { initialValues, PasswordForm, validationSchema } from './form';

type FormPasswordProps = {
  onSubmit: (_values: PasswordForm) => void;
  disabled: (_values: PasswordForm) => boolean;
};

const FormPassword = ({ onSubmit, disabled }: FormPasswordProps) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
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
  );
};

export { FormPassword, PasswordForm };
