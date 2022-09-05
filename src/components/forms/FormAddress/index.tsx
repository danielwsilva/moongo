import { Platform, View } from 'react-native';
import { Masks } from 'react-native-mask-input';
import { RFValue } from 'react-native-responsive-fontsize';
import { Formik, FormikErrors } from 'formik';

import { getCep } from 'services/api/global';

import { Button } from '../../Button';
import { Input } from '../../Input';

import { AddressForm, getInitialValues, validationSchema } from './form';

type CepParams = {
  value: string;
  setValues: (_value: AddressForm, _shouldValidate?: boolean | undefined) => void;
  setErrors: (_errors: FormikErrors<AddressForm>) => void;
  errors: FormikErrors<AddressForm>;
};

type FormFormCar = {
  onSubmit: (_values: AddressForm) => void;
  disabled: (_values: AddressForm) => boolean;
  data?: AddressForm;
  textButton?: string;
};

const FormAddress = ({ disabled, onSubmit, data, textButton = 'Avançar' }: FormFormCar) => {
  const fetchCep = async ({ value, setValues, setErrors, errors }: CepParams) => {
    try {
      const { data: dataCep } = await getCep(value.replace('-', ''));

      if (dataCep.erro) {
        setErrors({ ...errors, zipcode: 'CEP inválido.' });
      } else {
        setValues({
          zipcode: value,
          city: dataCep.localidade,
          state: dataCep.uf,
          address: dataCep.logradouro,
          address_number: '',
          complement: '',
          neighborhood: dataCep.bairro
        });
      }
    } catch (error) {
      setErrors({ ...errors, zipcode: 'CEP inválido.' });
    }
  };

  return (
    <Formik
      initialValues={getInitialValues(data!)}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      validateOnChange={false}
      validateOnBlur={false}
    >
      {({ handleChange, handleSubmit, values, errors, setErrors, setValues }) => (
        <View style={{ flex: 1, justifyContent: 'space-between' }}>
          <View>
            <Input
              placeholder="Informe o seu CEP"
              valid={errors.zipcode === '' || !errors.zipcode}
              errorText={errors.zipcode}
              onChangeText={handleChange('zipcode')}
              onChange={(e) => {
                const { text } = e.nativeEvent;
                setErrors({ ...errors, zipcode: '' });
                if (text.length === 9) fetchCep({ value: text, setValues, setErrors, errors });
              }}
              value={values.zipcode}
              keyboardType={Platform.OS === 'android' ? 'numeric' : 'number-pad'}
              maxLength={9}
              mask={Masks.ZIP_CODE}
            />

            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 3.3 }}>
                <Input
                  placeholder="Informe a sua cidade"
                  valid={errors.city === '' || !errors.city}
                  errorText={errors.city}
                  onChangeText={handleChange('city')}
                  onChange={() => setErrors({ ...errors, city: '' })}
                  value={values.city}
                  disabled
                />
              </View>
              <View style={{ flex: 1.7, paddingLeft: RFValue(20) }}>
                <Input
                  placeholder="Estado"
                  valid={errors.state === '' || !errors.state}
                  errorText={errors.state}
                  autoCapitalize="characters"
                  onChangeText={handleChange('state')}
                  onChange={() => setErrors({ ...errors, state: '' })}
                  value={values.state}
                  disabled
                />
              </View>
            </View>

            <Input
              placeholder="Informe o seu endereço"
              valid={errors.address === '' || !errors.address}
              errorText={errors.address}
              onChangeText={handleChange('address')}
              onChange={() => setErrors({ ...errors, address: '' })}
              value={values.address}
              maxLength={64}
            />

            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                <Input
                  placeholder="Número"
                  valid={errors.address_number === '' || !errors.address_number}
                  errorText={errors.address_number}
                  onChangeText={handleChange('address_number')}
                  onChange={() => setErrors({ ...errors, address_number: '' })}
                  value={values.address_number}
                  keyboardType={Platform.OS === 'android' ? 'numeric' : 'number-pad'}
                  maxLength={8}
                />
              </View>
              <View style={{ flex: 1.7, paddingLeft: RFValue(20) }}>
                <Input
                  placeholder="Complemento"
                  errorText={errors.complement}
                  valid={errors.complement === '' || !errors.complement}
                  onChangeText={handleChange('complement')}
                  onChange={() => setErrors({ ...errors, complement: '' })}
                  value={values.complement}
                  maxLength={32}
                />
              </View>
            </View>

            <Input
              placeholder="Informe o seu bairro"
              valid={errors.neighborhood === '' || !errors.neighborhood}
              errorText={errors.neighborhood}
              onChangeText={handleChange('neighborhood')}
              onChange={() => setErrors({ ...errors, neighborhood: '' })}
              value={values.neighborhood}
              maxLength={32}
            />
          </View>

          <Button style={{ marginBottom: RFValue(32) }} disabled={disabled(values)} onPress={() => handleSubmit()}>
            {textButton}
          </Button>
        </View>
      )}
    </Formik>
  );
};

export { FormAddress, AddressForm };
