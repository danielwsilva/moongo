import { useState } from 'react';
import { View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { useMutation } from '@tanstack/react-query';

import { Animated, Modal, Text } from 'components';
import { FormPassword, PasswordForm } from 'components/forms/FormPassword';
import { useForgotPassword } from 'hooks/forgotPassword';
import { Wrapper } from 'modules/register/components';
import { ROUTES } from 'navigation/appRoutes';
import { postForgotPassword } from 'services/api/auth';
import theme from 'styles/theme';

type ModalType = {
  type?: 'success' | 'error';
  visible: boolean;
};

export const Password = () => {
  const [modal, setModal] = useState<ModalType>({ type: 'success', visible: false });
  const { dispatch } = useNavigation();
  const { colors } = theme;

  const { cpf, code } = useForgotPassword();

  const { mutate, isLoading } = useMutation(postForgotPassword, {
    onSuccess() {
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
    onError() {
      setModal({ type: 'error', visible: true });
      setTimeout(() => {
        setModal({ type: 'error', visible: false });
      }, 4000);
    }
  });

  const submitPassword = (values: PasswordForm) => {
    const objForgot = { password: values.password, cpf, code };
    mutate(objForgot);
  };

  const disabled = (values: PasswordForm) => {
    return !values.password || !values.confirmPassword || isLoading;
  };

  return (
    <>
      <Wrapper
        title="Nova senha"
        subTitle="Quase lá! Crie uma nova senha para acessar a sua conta no app."
        hasStep={false}
      >
        <FormPassword onSubmit={submitPassword} disabled={disabled} loading={isLoading} type="auth" />
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
