import React from 'react';
import { View } from 'react-native';
import { Skeleton } from 'moti/skeleton';

export const HomeSkeleton = () => {
  return (
    <View style={{ flexDirection: 'row', marginLeft: 8 }}>
      {[1, 2].map((item) => (
        <View key={item} style={{ marginRight: 16 }}>
          <Skeleton colorMode="light" show>
            <View style={{ height: 238, width: 170 }} />
          </Skeleton>
        </View>
      ))}
    </View>
  );
};
