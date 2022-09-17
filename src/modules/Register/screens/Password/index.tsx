import { useState } from 'react';
import { Alert, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { useMutation } from '@tanstack/react-query';

import { Animated, Modal, Text } from 'components';
import { FormPassword, PasswordForm } from 'components/forms/FormPassword';
import { useRegister } from 'hooks/register';
import { ROUTES } from 'navigation/appRoutes';
import { postMotorist } from 'services/api/Register';
import theme from 'styles/theme';

import { Wrapper } from '../../components';

type ModalType = {
  type?: 'success' | 'error';
  visible: boolean;
};

export const Password = () => {
  const [modal, setModal] = useState<ModalType>({ type: 'success', visible: false });

  const { dispatch } = useNavigation();
  const { user, car, address } = useRegister();
  const { colors } = theme;

  const { mutate, isLoading } = useMutation(postMotorist, {
    onSuccess: async () => {
      setModal({ type: 'success', visible: true });
      setTimeout(() => {
        setModal({ type: 'success', visible: false });

        dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: ROUTES.AUTH_SIGNIN }]
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
  });

  const submitPassword = (values: PasswordForm) => {
    const objMotorist = { ...user, ...car, ...address, password: values.password };
    mutate(objMotorist);
  };

  const disabled = (values: PasswordForm) => {
    return !values.password || !values.confirmPassword || isLoading;
  };

  return (
    <>
      <Wrapper title="Criar senha" subTitle="Quase lá! Crie uma senha para acessar a sua conta no app." currentPage={3}>
        <FormPassword onSubmit={submitPassword} disabled={disabled} type="register" loading={isLoading} />
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
              ? 'Cadastro realizado com sucesso.'
              : 'Serviço indisponível no momento. Por favor, tente mais tarde.'}
          </Text>
        </View>
      </Modal>
    </>
  );
};
