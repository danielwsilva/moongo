import { Platform, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Formik } from 'formik';

import { Button } from '../../Button';
import { Input } from '../../Input';

import { initialValues, PasswordForm, validationSchema } from './form';

type FormPasswordProps = {
  onSubmit: (_values: PasswordForm) => void;
  disabled: (_values: PasswordForm) => boolean;
  type: 'auth' | 'register' | 'profile';
  loading?: boolean;
};

const FormPassword = ({ onSubmit, disabled, type, loading }: FormPasswordProps) => {
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
            {type === 'profile' && (
              <Input
                placeholder="Digite sua senha atual"
                valid={!errors.oldPassword}
                errorText={errors.oldPassword}
                onChangeText={handleChange('oldPassword')}
                value={values.oldPassword}
                onChange={() => setErrors({ ...errors, oldPassword: '' })}
                maxLength={4}
                hasSufix
                isPassword
                keyboardType={Platform.OS === 'android' ? 'numeric' : 'number-pad'}
              />
            )}

            <Input
              placeholder={type === 'register' ? 'Crie uma senha de 4 números' : 'Digite a nova senha'}
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
              placeholder={type === 'register' ? 'Agora digite a senha novamente' : 'Confirme a nova senha'}
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

          <Button
            style={{ marginBottom: RFValue(32) }}
            disabled={disabled(values)}
            loading={loading}
            onPress={() => handleSubmit()}
          >
            Confirmar
          </Button>
        </View>
      )}
    </Formik>
  );
};

export { FormPassword, PasswordForm };
