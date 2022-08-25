import { View } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';
import { Button } from '../../../../components/Button';
import Input from '../../../../components/Input';
import { Wrapper } from '../../components/Wrapper';

export const FormPassword = () => {
  return (
    <Wrapper title="Criar senha" subTitle="Quase lá! Crie uma senha para acessar a sua conta no app." currentPage={3}>
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <View>
          <Input placeholder="Crie uma senha de 4 números" value="" />
          <Input placeholder="Confirme a senha" value="" />
        </View>

        <Button style={{ marginBottom: RFValue(32) }}>Confirmar</Button>
      </View>
    </Wrapper>
  );
};
