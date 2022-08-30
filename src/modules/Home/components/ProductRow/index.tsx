import { Image, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { Text } from 'components';
import theme from 'styles/theme';
import kitkat from 'assets/kitkat.png';

import styles from './styles';

type ItemProps = {
  name: string;
  brad: string;
  price: string;
  saleNumber: string;
  stock?: string;
};

type ProductRowProps = {
  item: ItemProps;
  type?: 'stock' | 'vend';
  like?: boolean;
};

export const ProductRow = ({ item, type = 'stock', like = false }: ProductRowProps) => {
  const { colors } = theme;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          position: 'absolute',
          right: 6,
          top: 6,
          zIndex: 1,
          height: 32,
          width: 32,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <AntDesign name={like ? 'heart' : 'hearto'} color={theme.colors.error} size={16} />
      </TouchableOpacity>

      <Image source={kitkat} resizeMode="stretch" style={styles.image} />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text fontWeight="bold" fontSize={14} numberOfLines={1} style={{ flex: 1, marginRight: 2 }}>
          {item.name}
        </Text>
        <View style={styles.header}>
          <AntDesign name="star" size={18} color={colors.primaryLight} />
          <Text fontSize={10} color={colors.grayLight}>
            {item.saleNumber}
          </Text>
        </View>
      </View>

      <View style={styles.footer}>
        <View>
          <Text fontWeight="normal" fontSize={14} color={colors.textLight}>
            {item.brad}
          </Text>
          <Text fontWeight="bold" fontSize={14}>
            R$ {item.price}
          </Text>
        </View>

        {type === 'vend' ? (
          <TouchableOpacity style={styles.button}>
            <AntDesign name="plus" size={20} color={colors.white} />
          </TouchableOpacity>
        ) : (
          <View style={{ flexDirection: 'row', backgroundColor: colors.lightBlack, borderRadius: 8, padding: 5 }}>
            <AntDesign name="dropbox" size={20} color={colors.white} />
            <Text fontWeight="bold" fontSize={14} color={colors.white} style={{ marginLeft: 10 }}>
              {item.stock}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};
