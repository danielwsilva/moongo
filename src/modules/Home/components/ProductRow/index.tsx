import { Image, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { Text } from 'components';
import theme from 'styles/theme';
import kitkat from 'assets/kitkat.png';

import styles from './styles';

type ProductRowProps = {
  name: string;
  brad: string;
  price: string;
  saleNumber: string;
};

export const ProductRow = ({ name, brad, price, saleNumber }: ProductRowProps) => {
  return (
    <View style={styles.container}>
      <Image source={kitkat} resizeMode="stretch" style={styles.image} />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text fontWeight="bold" fontSize={14} numberOfLines={1} style={{ flex: 1, marginRight: 2 }}>
          {name}
        </Text>
        <View style={styles.header}>
          <AntDesign name="star" size={18} color={theme.colors.primaryLight} />
          <Text fontSize={10} color={theme.colors.grayLight}>
            {saleNumber}
          </Text>
        </View>
      </View>

      <View style={styles.footer}>
        <View>
          <Text fontWeight="normal" fontSize={14} color={theme.colors.textLight}>
            {brad}
          </Text>
          <Text fontWeight="bold" fontSize={14}>
            R$ {price}
          </Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <AntDesign name="plus" size={20} color={theme.colors.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
