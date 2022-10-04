import { ReactNode, useState } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { Text, Modal } from 'components';
import { ProductResponse } from 'services/api/home/types';
import { API_MOONGO_IMAGE_DEV } from 'services/apiConfig/consts';
import theme from 'styles/theme';

import styles from './styles';

type ProductRowProps = {
  item: ProductResponse;
  children: ReactNode;
};

export const ProductRow = ({ item, children }: ProductRowProps) => {
  const [visible, setVisible] = useState(false);

  const salePrice = `R$ ${String(item.sale_price.toFixed(2)).replace('.', ',')}`;

  const { colors } = theme;

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity style={styles.doubt} onPress={() => setVisible(true)}>
          <AntDesign name="questioncircleo" color={colors.textLight} size={16} />
        </TouchableOpacity>
        <View style={styles.containerImage}>
          <Image source={{ uri: API_MOONGO_IMAGE_DEV + item.image }} resizeMode="stretch" style={styles.image} />
        </View>
        <View style={styles.wrapperText}>
          <Text fontWeight="bold" fontSize={14} numberOfLines={1} style={{ flex: 1, marginRight: 2 }}>
            {item.description}
          </Text>
          <View style={styles.header}>
            <AntDesign name="star" size={18} color={colors.primaryLight} />
            <Text fontSize={10} color={colors.grayLight} style={{ marginLeft: 2 }}>
              {item.sale}
            </Text>
          </View>
        </View>

        <View style={styles.footer}>
          <View style={{ flex: 1, marginRight: 2 }}>
            <Text fontWeight="normal" fontSize={14} color={colors.textLight} numberOfLines={1}>
              {item.brand}
            </Text>
            <Text fontWeight="bold" fontSize={14}>
              {salePrice}
            </Text>
          </View>

          {children}
        </View>
      </View>

      <Modal visible={visible} close={() => setVisible(!visible)} height={210}>
        <View style={styles.containerModal}>
          <Text color={colors.textLight}>Estoque mínimo e máximo</Text>

          <Text fontWeight="normal" fontSize={12} color={colors.textLight} style={{ textAlign: 'center' }}>
            Só podera realizar o abastecimento se o estoque atual do produto for menor ou igual ao estoque mínimo.
          </Text>

          <Text fontSize={14} color={colors.textLight} style={{ textAlign: 'center' }}>
            {`${item.description}\n`}
            <Text fontWeight="normal" fontSize={14} color={colors.textLight}>
              Minímo: {item.stock_min} / Máximo: {item.stock_max}
            </Text>
          </Text>

          <Text color={colors.primary} onPress={() => setVisible(!visible)}>
            Entendi
          </Text>
        </View>
      </Modal>
    </>
  );
};
