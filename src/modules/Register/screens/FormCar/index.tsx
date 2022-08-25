import { Platform, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';

import { Button, Input } from '../../../../components';
import { ROUTES } from '../../../../navigation/appRoutes';

import { Wrapper } from '../../components/Wrapper';
import { CarForm, initialValues, validationSchema } from './form';

export const FormCar = () => {
  const { navigate } = useNavigation();

  const submitCar = (values: CarForm) => {
    // ADD CONTEXT
    navigate(ROUTES.REGISTER_ADDRESS);
  };

  const disabled = (values: CarForm) => {
    return !values.plate || !values.renamed || !values.model || !values.year || !values.color;
  };

  return (
    <Wrapper
      title="Conte um pouco mais sobre você"
      subTitle="Precisamos de algumas informações referente ao seu veículo."
      currentPage={1}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submitCar}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({ handleChange, handleSubmit, values, errors, setErrors }) => (
          <View style={{ flex: 1, justifyContent: 'space-between' }}>
            <View>
              <Input
                placeholder="Informe a placa"
                valid={errors.plate === '' || !errors.plate}
                errorText={errors.plate}
                onChangeText={handleChange('plate')}
                onChange={() => setErrors({ ...errors, plate: '' })}
                value={values.plate}
                autoCapitalize="characters"
                maxLength={7}
              />

              <Input
                placeholder="Informe o seu renavam"
                valid={errors.renamed === '' || !errors.renamed}
                errorText={errors.renamed}
                onChangeText={handleChange('renamed')}
                onChange={() => setErrors({ ...errors, renamed: '' })}
                value={values.renamed}
                keyboardType={Platform.OS === 'android' ? 'numeric' : 'number-pad'}
              />

              <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 3.3 }}>
                  <Input
                    placeholder="Informe o modelo"
                    valid={errors.model === '' || !errors.model}
                    errorText={errors.model}
                    onChangeText={handleChange('model')}
                    onChange={() => setErrors({ ...errors, model: '' })}
                    value={values.model}
                    autoCapitalize="characters"
                  />
                </View>
                <View style={{ flex: 1.7, paddingLeft: RFValue(20) }}>
                  <Input
                    placeholder="Informe o ano"
                    valid={errors.year === '' || !errors.year}
                    errorText={errors.year}
                    onChangeText={handleChange('year')}
                    onChange={() => setErrors({ ...errors, year: '' })}
                    value={values.year}
                    maxLength={4}
                    keyboardType={Platform.OS === 'android' ? 'numeric' : 'number-pad'}
                  />
                </View>
              </View>

              <Input
                placeholder="Informe a cor"
                valid={errors.color === '' || !errors.color}
                errorText={errors.color}
                onChangeText={handleChange('color')}
                onChange={() => setErrors({ ...errors, color: '' })}
                value={values.color}
                autoCapitalize="characters"
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
