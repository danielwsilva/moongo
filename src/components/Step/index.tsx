import StepIndicator from 'react-native-step-indicator';
import { MaterialIcons } from '@expo/vector-icons';

import theme from 'styles/theme';

const secondIndicatorStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 40,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: theme.colors.primary,
  stepStrokeWidth: 3,
  separatorStrokeFinishedWidth: 2,
  stepStrokeFinishedColor: theme.colors.primary,
  stepStrokeUnFinishedColor: theme.colors.textLight,
  separatorFinishedColor: theme.colors.primary,
  separatorUnFinishedColor: theme.colors.textLight,
  stepIndicatorFinishedColor: theme.colors.primary,
  stepIndicatorUnFinishedColor: theme.colors.white,
  stepIndicatorCurrentColor: theme.colors.white,
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: theme.colors.primary,
  stepIndicatorLabelFinishedColor: theme.colors.white,
  stepIndicatorLabelUnFinishedColor: theme.colors.textLight,
  labelColor: theme.colors.text,
  labelSize: 13,
  currentStepLabelColor: theme.colors.primary,
  labelFontFamily: theme.fonts.primary_600
};

const getStepIndicatorIconConfig = ({ position, stepStatus }: StepConfig) => {
  const { colors } = theme;

  const iconConfig = {
    name: '',
    color: stepStatus === 'finished' ? colors.white : colors.primary,
    size: 18
  };

  switch (position) {
    case 0: {
      iconConfig.name = 'emoji-people';
      break;
    }
    case 1: {
      iconConfig.name = 'directions-car';
      break;
    }
    case 2: {
      iconConfig.name = 'home';
      break;
    }
    case 3: {
      iconConfig.name = 'lock-outline';
      break;
    }
    default: {
      break;
    }
  }
  return iconConfig;
};

type StepConfig = {
  position: number;
  stepStatus: string;
};

type StepProps = {
  currentPage: number;
};

export const Step = ({ currentPage = 0 }: StepProps) => {
  const renderStepIndicator = (params: StepConfig) => <MaterialIcons {...getStepIndicatorIconConfig(params)} />;

  return (
    <StepIndicator
      stepCount={4}
      customStyles={secondIndicatorStyles}
      currentPosition={currentPage}
      renderStepIndicator={renderStepIndicator}
      labels={['Dados Pessoais', 'Carro', 'Endereço', 'Senha']}
    />
  );
};
