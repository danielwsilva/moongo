import React from 'react';
import { View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Skeleton } from 'moti/skeleton';

export const WalletSkeleton = () => {
  return (
    <View style={{ marginTop: RFValue(12) }}>
      <View style={{ marginBottom: RFValue(8) }}>
        <Skeleton colorMode="light" show height={24} width={100} />
      </View>
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <View key={item} style={{ marginBottom: RFValue(12) }}>
          <Skeleton colorMode="light" show height={50} width="100%" />
        </View>
      ))}
    </View>
  );
};
