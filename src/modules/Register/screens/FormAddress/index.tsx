import { View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';

import Input from '../../../../components/Input';
import { ROUTES } from '../../../../navigation/appRoutes';
import { Wrapper } from '../../components/Wrapper';
import { Button } from '../../../../components/Button';

export const FormAddress = () => {
  const navigation = useNavigation();

  return (
    <Wrapper title="Quase lá!" subTitle="Agora nos conte onde você mora." currentPage={2}>
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <View>
          <Input placeholder="Informe o seu CEP" value="" />

          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 3.3 }}>
              <Input styleInput={{ flex: 1 }} placeholder="Informe a sua cidade" value="" />
            </View>
            <View style={{ flex: 1.7, paddingLeft: RFValue(20) }}>
              <Input styleInput={{ flex: 1 }} placeholder="Estado" value="" />
            </View>
          </View>

          <Input placeholder="Informe o seu endereço" value="" />

          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
              <Input styleInput={{ flex: 1 }} placeholder="Número" value="" />
            </View>
            <View style={{ flex: 1.7, paddingLeft: RFValue(20) }}>
              <Input styleInput={{ flex: 3.3 }} placeholder="Complemento" value="" />
            </View>
          </View>

          <Input placeholder="Informe o seu bairro" value="" />
        </View>

        <Button style={{ marginBottom: RFValue(32) }} onPress={() => navigation.navigate(ROUTES.REGISTER_PASSWORD)}>
          Avançar
        </Button>
      </View>
    </Wrapper>
  );
};
