import {  View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';

import { Button } from '../../../../components/Button';
import Input from '../../../../components/Input';
import { ROUTES } from '../../../../navigation/appRoutes';
import { Wrapper } from '../../components/Wrapper';

export const FormCar = () => {
  const navigation = useNavigation();

  return (
    <Wrapper
      title="Conte um pouco mais sobre você"
      subTitle="Precisamos de algumas informações referente ao seu veículo."
      currentPage={1}
    >
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <View>
          <Input placeholder="Informe a placa" value="" />
          <Input placeholder="Informe o renavam" value="" />

          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 3.3 }}>
              <Input styleInput={{ flex: 1 }} placeholder="Informe o modelo" value="" />
            </View>
            <View style={{ flex: 1.7, paddingLeft: RFValue(20) }}>
              <Input styleInput={{ flex: 1 }} placeholder="Informe o ano" value="" />
            </View>
          </View>

          <Input placeholder="Informe a cor" value="" />
        </View>

        <Button style={{ marginBottom: RFValue(32) }} onPress={() => navigation.navigate(ROUTES.REGISTER_ADDRESS)}>
          Avançar
        </Button>
      </View>
    </Wrapper>
  );
};
