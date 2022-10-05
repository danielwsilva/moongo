import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';

import { Button, Modal, Text, Wrapper } from 'components';
import { useCart } from 'hooks/cart';
import { ROUTES } from 'navigation/appRoutes';
import { useSupply } from 'services/api/home';
import { ProductResponse } from 'services/api/home/types';
import theme from 'styles/theme';
import { maskMoney } from 'utils/helpers';

import { CountCart, ProductCartRow } from '../../components';
import styles from './styles';

export const Cart = () => {
  const [totalCart, setTotalCart] = useState(0);
  const [totalQuantityCart, setTotalQuantityCart] = useState(0);
  const [visible, setVisible] = useState(false);

  const { colors } = theme;
  const { cart, setCart } = useCart();
  const { mutate, isLoading } = useSupply();
  const { dispatch } = useNavigation();

  const handleTotalCart = (products: ProductResponse[]) => {
    const totalProducts = products.reduce((total, item) => {
      return total + item.quantity * item.sale_price;
    }, 0);

    const totalQuantityProducts = products.reduce((total, item) => {
      return total + item.quantity;
    }, 0);

    setTotalQuantityCart(totalQuantityProducts);
    setTotalCart(totalProducts);
  };

  const onSubmit = () => {
    const objSupply = {
      movement: 'Carro',
      quantity: totalQuantityCart,
      cost: totalCart,
      products: cart.map((item) => {
        return {
          product: item.id,
          percentage: item.percentage,
          quantity: item.quantity,
          price: item.sale_price
        };
      })
    };

    mutate(objSupply, {
      onSuccess() {
        setCart([]);
        dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: ROUTES.HOME }]
          })
        );
      }
    });
  };

  useEffect(() => {
    handleTotalCart(cart);
  }, [cart]);

  const listEmptyComponent = () => (
    <View style={styles.listEmpty}>
      <FontAwesome name="opencart" size={32} color={colors.primary} />
      <Text fontWeight="normal" style={{ marginTop: 16 }}>
        Seu carrinho está vazio :(
      </Text>
    </View>
  );

  return (
    <>
      <Wrapper title="Carrinho" disabledScrollView action={<CountCart />} styleContainer={{ paddingHorizontal: 0 }}>
        {!cart.length ? (
          listEmptyComponent()
        ) : (
          <FlashList
            data={cart}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <ProductCartRow item={item} handleTotalCart={handleTotalCart} />}
            estimatedItemSize={200}
            contentContainerStyle={styles.list}
            showsVerticalScrollIndicator={false}
          />
        )}

        <View style={styles.footer}>
          <View style={styles.totalText}>
            <Text fontWeight="normal">Total</Text>
            <Text fontWeight="bold">{maskMoney(totalCart)}</Text>
          </View>
          <Button style={styles.button} onPress={() => setVisible(true)} disabled={!cart.length}>
            Finalizar
          </Button>
        </View>
      </Wrapper>

      <Modal visible={visible} height={170}>
        <View style={styles.modal}>
          <Text fontWeight="normal" fontSize={14} color={colors.textLight}>
            Deseja confirmar a solicitação de abastecimento?
          </Text>
          <View style={styles.modalWrapperButton}>
            <Button style={styles.modalButton} onPress={onSubmit} loading={isLoading} disabled={isLoading}>
              Confirmar
            </Button>
            <Button
              style={{ ...styles.modalButton, backgroundColor: colors.withdraw }}
              onPress={() => setVisible(!visible)}
            >
              Cancelar
            </Button>
          </View>
        </View>
      </Modal>
    </>
  );
};
