import React from 'react';
import { View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Skeleton } from 'moti/skeleton';

export const HomeSkeleton = () => {
  return (
    <View style={{ flexDirection: 'row', marginLeft: RFValue(8) }}>
      {[1, 2].map((item) => (
        <View key={item} style={{ marginRight: RFValue(10) }}>
          <Skeleton colorMode="light" show height={238} width={172} />
        </View>
      ))}
    </View>
  );
};
