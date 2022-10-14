import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';
import { Skeleton } from 'moti/skeleton';

import { Text } from 'components';
import theme from 'styles/theme';

import { getStyles } from './styles';

type ValuesExtractsProps = {
  description: string;
  value: string;
  loading: boolean;
};

export const ValuesExtract = ({ description, value, loading }: ValuesExtractsProps) => {
  const [visible, setVisible] = useState(false);

  const { colors } = theme;
  const styles = getStyles();

  return (
    <View style={styles.container}>
      <Text fontWeight="normal">{description}</Text>
      <Skeleton colorMode="light" show={loading} width={180}>
        <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={() => setVisible(!visible)}>
          {visible ? (
            <Text fontWeight="bold" fontSize={30}>
              {value}
            </Text>
          ) : (
            <View style={!visible && styles.line} />
          )}
          <View style={{ marginLeft: RFValue(10) }}>
            <Feather name={visible ? 'eye' : 'eye-off'} size={24} color={colors.text} />
          </View>
        </TouchableOpacity>
      </Skeleton>
    </View>
  );
};
