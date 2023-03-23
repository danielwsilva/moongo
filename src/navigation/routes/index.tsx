import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import NetInfo, { NetInfoState } from '@react-native-community/netinfo';
import { NavigationContainer } from '@react-navigation/native';

import { Modal, Text } from 'components';
import { useAuth } from 'hooks/auth';
import AuthStack from 'modules/auth/routes/AuthStack';
import { BottomNav } from 'navigation/tabNavigation';
import theme from 'styles/theme';

const Routes = () => {
  const [hasNetworkError, setHasNetworkError] = useState(false);
  const [stateConnect, setStateConnect] = useState<NetInfoState | null>(null);

  const { colors } = theme;
  const { token } = useAuth();

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(async (state) => {
      if (stateConnect !== state) {
        setStateConnect(state);
        if (!state.isConnected) {
          setHasNetworkError(true);
        } else if (!!hasNetworkError && !!state.isConnected) {
          setHasNetworkError(false);
        }
      }
    });
    return () => unsubscribe();
  }, [hasNetworkError, stateConnect]);

  return (
    <>
      {token ? <BottomNav /> : <AuthStack />}

      <Modal visible={hasNetworkError} height={300}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Feather name="wifi-off" size={48} color={colors.primary} />
          <Text fontWeight="semiBold" fontSize={24} style={{ marginTop: 12 }}>
            Falha ao carregar dados
          </Text>
          <Text fontWeight="normal" color={colors.textLight} style={{ textAlign: 'center', marginTop: 12 }}>
            Verifique a sua conexão com a internet para continuar.
          </Text>
        </View>
      </Modal>
    </>
  );
};

export default Routes;
