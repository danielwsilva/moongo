/* eslint-disable @typescript-eslint/no-explicit-any */
import { Image, View, Pressable } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { FontAwesome, Octicons } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import { Text, Wrapper } from 'components';
import { getMe } from 'services/api/home';
import theme from 'styles/theme';
import { maskPhone } from 'utils/helpers';
import avatar from 'assets/avatar.png';

import { PROFILE_MODULES } from './consts';
import styles from './styles';

export const Profile = () => {
  const { colors } = theme;
  const { navigate } = useNavigation();

  const { data } = useQuery(['@meKey'], getMe);

  return (
    <Wrapper title="Meu perfil" disabledScrollView hasBackButton={false}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image source={avatar} resizeMode="stretch" style={styles.avatar} />
        <View style={{ marginLeft: RFValue(12) }}>
          <Text fontWeight="bold" fontSize={18}>
            {data?.name}
          </Text>
          <Text fontSize={14} color={colors.textLight}>
            Motorista - {data?.hash}
          </Text>
        </View>
      </View>

      <View style={{ flexDirection: 'row', marginTop: RFValue(12) }}>
        <FontAwesome name="phone" color={colors.textLight} size={20} />
        <Text fontWeight="normal" fontSize={14} color={colors.textLight} style={{ marginLeft: RFValue(12) }}>
          {maskPhone(data?.phone)}
        </Text>
      </View>

      <View style={{ flexDirection: 'row', marginTop: RFValue(12) }}>
        <FontAwesome name="envelope-o" color={colors.textLight} size={20} />
        <Text fontWeight="normal" fontSize={14} color={colors.textLight} style={{ marginLeft: RFValue(12) }}>
          {data?.email}
        </Text>
      </View>

      <View style={{ marginTop: RFValue(18) }}>
        {PROFILE_MODULES.map((item, index) => (
          <View key={item.name}>
            {PROFILE_MODULES.length - 1 === index && <View style={styles.divider} />}
            <Pressable onPress={() => navigate(item.route as any)} style={styles.buttom}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.icon}>
                  <FontAwesome name={item.icon} color={colors.primary} size={20} />
                </View>
                <Text fontSize={14} color={colors.lightBlack}>
                  {item.name}
                </Text>
              </View>
              {PROFILE_MODULES.length - 1 !== index && (
                <View style={styles.iconChevron}>
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
