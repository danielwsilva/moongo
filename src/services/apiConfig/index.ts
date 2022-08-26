import * as Updates from 'expo-updates';
import { Platform } from 'react-native';
import axios from 'axios';

import { API_CEP } from './consts';

export const getEnvironment = () => {
  if (Updates.releaseChannel.startsWith('prod')) {
    return {
      envName: 'PRODUCTION',
      API_CEP
    };
  }

  return {
    envName: 'DEVELOPMENT',
    API_CEP
  };
};

// API CEP
export const cepAPI = axios.create({
  baseURL: getEnvironment().API_CEP,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Device: Platform.OS
  }
});

export default {
  cepAPI,
  getEnvironment
};
