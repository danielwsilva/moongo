import React, { useState } from 'react';
import { Text as RNText, View } from 'react-native';
import { CodeField, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field';
import CountDown from 'react-native-countdown-component';
import { RFValue } from 'react-native-responsive-fontsize';
import { FormikErrors } from 'formik';

import { Button, Text } from 'components';
import theme from 'styles/theme';

import { getStyles } from './styles';

const TIMER = 240;

type ValuesProps = {
  token?: string;
};

type CodeInputProps = {
  value: string;
  valid: boolean;
  disabled?: boolean;
  error?: FormikErrors<ValuesProps>;
  onChange?: () => void;
  onResendCode: () => void;
  onChangeText: (_text: string) => void;
  setErrors?: (_errors: FormikErrors<ValuesProps>) => void;
};

export const CodeInput = ({ value, onChangeText, valid, onResendCode, onChange, setErrors, error }: CodeInputProps) => {
  const [isResendCode, setIsResendCode] = useState(true);

  const { colors } = theme;
  const styles = getStyles(valid);

  const ref = useBlurOnFulfill({ value, cellCount: 4 });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue: onChangeText
  });

  const submitCode = () => {
    setIsResendCode(true);
    onResendCode();
  };

  return (
    <View style={{ paddingHorizontal: 12 }}>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={onChangeText}
        onChange={onChange}
        cellCount={4}
        onPressIn={() => {
          if (!valid) {
            onChangeText('');
            if (setErrors) setErrors({ token: '' });
          }
        }}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <View key={index} onLayout={getCellOnLayoutHandler(index)}>
            <RNText
              style={[
                styles.text,
                isFocused && {
                  borderColor: colors.primary
                }
              ]}
            >
              {symbol}
            </RNText>
          </View>
        )}
      />
      {!valid && (
        <Text fontSize={12} color={colors.error} style={styles.errorText}>
          {error?.token ?? 'Código inválido.'}
        </Text>
      )}
      <View style={{ marginTop: RFValue(16) }}>
        {!isResendCode && (
          <Button type="link" color={colors.primary} onPress={submitCode}>
            Reenviar código
          </Button>
        )}
        {isResendCode && (
          <View style={styles.countDownContainer}>
            <Text>Solicite um novo código em </Text>
            <CountDown
              size={10}
              until={TIMER}
              onFinish={() => setIsResendCode(!isResendCode)}
              digitStyle={styles.digitStyle}
              digitTxtStyle={styles.digitTxtStyle}
              timeToShow={['M', 'S']}
              timeLabels={{ m: '', s: '' }}
              separatorStyle={{ color: colors.primary }}
              showSeparator
            />
          </View>
        )}
      </View>
    </View>
  );
};
