import { ReactNode, useState } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { Text, Modal } from 'components';
import { Product } from 'hooks/cart';
import theme from 'styles/theme';

import styles from './styles';

type ProductRowProps = {
  item: Product;
  children: ReactNode;
};

export const ProductRow = ({ item, children }: ProductRowProps) => {
  const [visible, setVisible] = useState(false);

  const { colors } = theme;

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity style={styles.doubt} onPress={() => setVisible(true)}>
          <AntDesign name="questioncircleo" color={colors.textLight} size={16} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.like}>
          <AntDesign name="hearto" color={colors.error} size={16} />
        </TouchableOpacity>

        <Image source={item.image} resizeMode="stretch" style={styles.image} />
        <View style={styles.wrapperText}>
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
            {`${item.name}\n`}
            <Text fontWeight="normal" fontSize={14} color={colors.textLight}>
              Minímo: {item.stockMin} / Máximo: {item.stockMax}
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
