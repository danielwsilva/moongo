import { useEffect, useState } from 'react';
import { View } from 'react-native';
import Toast from 'react-native-toast-message';
import { FontAwesome } from '@expo/vector-icons';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';

import { useQueryClient } from '@tanstack/react-query';
import { Button, Modal, Text, Wrapper } from 'components';
import { useCart } from 'hooks/cart';
import { ROUTES } from 'navigation/appRoutes';
import { useSupply } from 'services/api/home';
import { ProductResponse } from 'services/api/home/types';
import { useBalance } from 'services/api/wallet';
import { createBalance } from 'services/api/wallet/keys';
import theme from 'styles/theme';
import { maskMoney } from 'utils/helpers';

import { CountCart, ProductCartRow } from '../../components';
import styles from './styles';

export const Cart = () => {
  const [totalCart, setTotalCart] = useState(0);
  const [visible, setVisible] = useState(false);

  const { colors } = theme;
  const { getState } = useNavigation();
  const { routes } = getState();
  const isSupply = routes[0].name === ROUTES.HOME;

  const { cart, setCart } = useCart();

  const { data } = useBalance();
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useSupply();
  const { dispatch } = useNavigation();

  const handleTotalCart = (products: ProductResponse[]) => {
    const totalProducts = products.reduce((total, item) => {
      return total + item.quantity * item.sale_price;
    }, 0);

    setTotalCart(totalProducts);
  };

  const onSubmit = () => {
    const totalMarginCart = cart.reduce((total, item) => {
      return Number((total + item.quantity * item.sale_price * (item.percentage / 100)).toPrecision(3));
    }, 0);

    if (-totalMarginCart + data!.balance < -10 && !isSupply) {
      Toast.show({ type: 'generic', props: { title: 'Essa venda irá exceder o saldo negativo permitido.' } });
      setVisible(false);
    } else {
      const totalQuantityCart = cart.reduce((total, item) => {
        return total + item.quantity;
      }, 0);

      const objSupply = {
        movement: isSupply ? 'Carro' : 'Venda',
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
          if (!isSupply) queryClient.invalidateQueries(createBalance());
          setCart([]);

          dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: isSupply ? ROUTES.HOME : ROUTES.SALES_PRODUCT }]
            })
          );
        }
      });
    }
  };

  useEffect(() => {
    handleTotalCart(cart);
  }, [cart]);

  const listEmptyComponent = () => (
    <View style={styles.listEmpty}>
      <FontAwesome name="shopping-basket" size={48} color={colors.primary} />
      <Text fontWeight="normal" style={styles.listEmptyText}>
        {`Seu carrinho está vazio :( \n\nAdicione produtos clicando no botão ${
          isSupply ? '"+"' : '"Comprar"'
        } na tela de produto.`}
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
            {routes[0].name === ROUTES.HOME
              ? 'Deseja confirmar a solicitação de abastecimento?'
              : 'Deseja finalizar a Venda via dinheiro?'}
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
