import React, { useState } from 'react';
import { Platform, View } from 'react-native';
import { Masks } from 'react-native-mask-input';
import { RFValue } from 'react-native-responsive-fontsize';
import { CommonActions, useNavigation } from '@react-navigation/native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text, Wrapper, Button, Input, Animated, Modal } from 'components';
import { WalletRouteMap } from 'modules/wallet/routes/WalletStack';
import { ROUTES } from 'navigation/appRoutes';
import { useCashWithdrawal } from 'services/api/wallet';
import theme from 'styles/theme';
import { currencyNormalized, maskMoney } from 'utils/helpers';

type ModalType = {
  type?: 'success' | 'error';
  visible: boolean;
};

type CashWithdrawalProps = NativeStackScreenProps<WalletRouteMap, ROUTES.WALLET_CASH_WITHDRAWAL>;

export const CashWithdrawal = ({ route }: CashWithdrawalProps) => {
  const [value, setValue] = useState('');
  const [errorText, setErrorText] = useState('');
  const [modal, setModal] = useState<ModalType>({ type: 'success', visible: false });

  const { colors } = theme;
  const { dispatch } = useNavigation();
  const { mutate, isLoading } = useCashWithdrawal();

  const {
    params: { balance }
  } = route;

  const changeValue = parseFloat(value);

  const onSubmit = () => {
    if (changeValue > balance!) {
      setErrorText(errorText ? '' : 'Saldo insuficiente.');
      return;
    }

    mutate(
      { withdrawal: value },
      {
        onSuccess: async () => {
          setModal({ type: 'success', visible: true });
          setTimeout(() => {
            setModal({ type: 'success', visible: false });

            dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{ name: ROUTES.WALLET }]
              })
            );
          }, 3000);
        },
        onError: async () => {
          setModal({ type: 'error', visible: true });
          setTimeout(() => {
            setModal({ type: 'error', visible: false });
          }, 4000);
        }
      }
    );
  };

  return (
    <>
      <Wrapper title="Solicitação de resgaste" disabledScrollView>
        <Text fontWeight="normal">Após o resgate o prazo para crédito em conta é de até 7 dias úteis.</Text>
        <Text fontWeight="normal" fontSize={14} color={colors.textLight} style={{ marginTop: RFValue(24) }}>
          Saldo disponível: {maskMoney(balance)}
        </Text>

        <View style={{ marginTop: RFValue(22) }}>
          <Input
            placeholder="Valor do resgate"
            valid={!errorText}
            errorText={errorText}
            value={value}
            onChangeText={(text) => {
              setValue(currencyNormalized(text));
              setErrorText('');
            }}
            maxLength={9}
            mask={Masks.BRL_CURRENCY}
            keyboardType={Platform.OS === 'android' ? 'numeric' : 'number-pad'}
          />
        </View>

        <Button
          disabled={changeValue <= 0 || !changeValue || isLoading}
          loading={isLoading}
          style={{ marginTop: RFValue(24) }}
          onPress={onSubmit}
        >
          Resgatar
        </Button>
      </Wrapper>

      <Modal visible={modal.visible} height={400}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Animated
            name={modal.type === 'success' ? 'success' : 'error'}
            style={{ height: RFValue(260), marginTop: RFValue(-20) }}
          />
          <Text
            fontWeight="bold"
            fontSize={modal.type === 'success' ? 20 : 18}
            color={modal.type === 'success' ? colors.success : colors.error}
            style={{ width: '80%', textAlign: 'center', marginTop: RFValue(-45) }}
          >
            {modal.type === 'success'
              ? 'Solicitação de resgate realizada com sucesso.'
              : 'Serviço indisponível no momento. Por favor, tente mais tarde.'}
          </Text>
        </View>
      </Modal>
    </>
  );
};
