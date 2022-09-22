import { Platform, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Formik } from 'formik';

import { Button } from '../../Button';
import { Input } from '../../Input';

import { CarForm, getInitialValues, validationSchema } from './form';

type FormFormCar = {
  onSubmit: (_values: CarForm) => void;
  disabled: (_values: CarForm) => boolean;
  data?: CarForm;
  textButton?: string;
  loading?: boolean;
};

const FormCar = ({ onSubmit, disabled, data, textButton = 'Avançar', loading = false }: FormFormCar) => {
  return (
    <Formik
      initialValues={getInitialValues(data!)}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      validateOnChange={false}
      validateOnBlur={false}
    >
      {({ handleChange, handleSubmit, values, errors, setErrors }) => (
        <View style={{ flex: 1, justifyContent: 'space-between' }}>
          <View>
            <Input
              placeholder="Informe a placa"
              valid={errors.car_plate === '' || !errors.car_plate}
              errorText={errors.car_plate}
              onChangeText={handleChange('car_plate')}
              onChange={() => setErrors({ ...errors, car_plate: '' })}
              value={values.car_plate}
              autoCapitalize="characters"
              maxLength={7}
            />

            <Input
              placeholder="Informe o seu renavam"
              valid={errors.car_renamed === '' || !errors.car_renamed}
              errorText={errors.car_renamed}
              onChangeText={handleChange('car_renamed')}
              onChange={() => setErrors({ ...errors, car_renamed: '' })}
              value={values.car_renamed}
              keyboardType={Platform.OS === 'android' ? 'numeric' : 'number-pad'}
              maxLength={11}
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

          <Button
            style={{ marginBottom: RFValue(32) }}
            disabled={disabled(values) || loading}
            onPress={() => handleSubmit()}
            loading={loading}
          >
            {textButton}
          </Button>
        </View>
      )}
    </Formik>
  );
};

export { FormCar, CarForm };
