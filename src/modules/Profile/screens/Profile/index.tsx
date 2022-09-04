import { Image, View, Pressable } from 'react-native';
import { FontAwesome, Octicons } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import { Text, Wrapper } from 'components';
import { ROUTES } from 'navigation/appRoutes';
import theme from 'styles/theme';
import avatar from 'assets/avatar.png';

import styles from './styles';

const data = [
  {
    name: 'Dados pessoais',
    icon: 'user',
    route: ROUTES.REGISTER_USER
  },
  {
    name: 'Carro',
    icon: 'car',
    route: ROUTES.REGISTER_CAR
  },
  {
    name: 'Endereço',
    icon: 'home',
    route: ROUTES.REGISTER_ADDRESS
  },
  {
    name: 'Mudar senha',
    icon: 'lock',
    route: ROUTES.AUTH_FORGOT_PASSWORD,
    param: { stack: 'auth' }
  },
  {
    name: 'Sair',
    icon: 'power-off',
    route: ROUTES.REGISTER_ADDRESS
  }
];

export const Profile = () => {
  const { colors } = theme;
  const { navigate } = useNavigation();

  return (
    <Wrapper title="Meu perfil" disabledScrollView hasBackButton={false}>
      <View style={{ paddingHorizontal: 24 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={avatar} resizeMode="stretch" style={styles.avatar} />
          <View style={{ marginLeft: 12 }}>
            <Text fontWeight="bold" fontSize={18}>
              Daniel Wallace
            </Text>
            <Text fontSize={14} color={colors.textLight}>
              Motorista
            </Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row', marginTop: 24 }}>
          <FontAwesome name="phone" color={colors.textLight} size={20} />
          <Text fontWeight="normal" fontSize={14} color={colors.textLight} style={{ marginLeft: 12 }}>
            (16) 99378-4967
          </Text>
        </View>

        <View style={{ flexDirection: 'row', marginTop: 12 }}>
          <FontAwesome name="envelope-o" color={colors.textLight} size={20} />
          <Text fontWeight="normal" fontSize={14} color={colors.textLight} style={{ marginLeft: 12 }}>
            danielwllace@gmail.com
          </Text>
        </View>
      </View>

      <View style={{ marginTop: 18 }}>
        {data.map((item, index) => (
          <View key={item.name}>
            {data.length - 1 === index && (
              <View style={{ height: 1, backgroundColor: colors.lightGray, marginTop: 4, marginHorizontal: 24 }} />
            )}
            <Pressable
              onPress={() => navigate(item.route, item.param)}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 24,
                paddingVertical: 10
              }}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 40,
                    elevation: 5,
                    backgroundColor: colors.white,
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <FontAwesome name={item.icon} color={colors.primary} size={20} />
                </View>
                <Text fontSize={14} color={colors.lightBlack} style={{ marginLeft: 16 }}>
                  {item.name}
                </Text>
              </View>
              {data.length - 1 !== index && (
                <View
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 30,
                    elevation: 3,
                    backgroundColor: colors.white,
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Octicons name="chevron-right" color={colors.lightBlack} size={18} />
                </View>
              )}
            </Pressable>
          </View>
        ))}
      </View>
    </Wrapper>
  );
};
