import { useState } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { Text, Modal } from 'components';
import { Product, useCart } from 'hooks/cart';
import theme from 'styles/theme';
import kitkat from 'assets/kitkat.png';

import { getStyles } from './styles';

type ProductRowProps = {
  item: Product;
};

export const ProductRow = ({ item }: ProductRowProps) => {
  const { addCart, removeProduct } = useCart();
  const [addProductCart, setAddProductCart] = useState(false);
  const [visible, setVisible] = useState(false);

  const checkStock = () => {
    if (item.stock === item.stockMax) return false;
    if (item.stock === item.stockMin) return true;
    if (item.stock > item.stockMin || item.stock < item.stockMax) return false;
    return true;
  };

  const { colors } = theme;
  const styles = getStyles({ addProductCart, checkStock });

  const handleAddCart = (product: Product) => {
    if (addProductCart) {
      removeProduct(product);
      setAddProductCart(false);
    } else {
      addCart(product);
      setAddProductCart(true);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity style={styles.doubt} onPress={() => setVisible(true)}>
          <AntDesign name="questioncircleo" color={theme.colors.textLight} size={16} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.like}>
          <AntDesign name="hearto" color={theme.colors.error} size={16} />
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

          {checkStock() && (
            <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={() => handleAddCart(item)}>
              <AntDesign name={addProductCart ? 'check' : 'plus'} size={20} color={colors.white} />
            </TouchableOpacity>
          )}

          <View style={styles.stock}>
            <AntDesign name="dropbox" size={20} color={colors.white} />
            <Text fontWeight="bold" fontSize={14} color={colors.white} style={{ marginLeft: 10 }}>
              {item.stock}
            </Text>
          </View>
        </View>
      </View>

      <Modal visible={visible} close={() => setVisible(!visible)} height={210}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-around',
            paddingVertical: 12,
            paddingHorizontal: 24
          }}
        >
          <Text color={theme.colors.textLight}>Estoque mínimo e máximo</Text>
          <Text fontWeight="normal" fontSize={12} color={theme.colors.textLight} style={{ textAlign: 'center' }}>
            Só podera realizar o abastecimento se o estoque atual do produto for menor ou igual ao estoque mínimo.
          </Text>
          <Text fontSize={14} color={theme.colors.textLight} style={{ textAlign: 'center' }}>
            {`${item.name}\n`}
            <Text fontWeight="normal" fontSize={14} color={theme.colors.textLight}>
              Minímo: {item.stockMin} / Máximo: {item.stockMax}
            </Text>
          </Text>
          <TouchableOpacity>
            <Text color={theme.colors.success} onPress={() => setVisible(!visible)}>
              Entendi
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </>
  );
};
