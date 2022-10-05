import * as Updates from 'expo-updates';
import { Platform } from 'react-native';
import axios from 'axios';

import { authToken, loadString } from '../storage';
import { API_CEP, API_MOONGO, API_MOONGO_DEV, API_MOONGO_IMAGE, API_MOONGO_IMAGE_DEV } from './consts';

export const getEnvironment = () => {
  if (Updates.releaseChannel.startsWith('prod')) {
    return {
      envName: 'PRODUCTION',
      API_CEP,
      API_MOONGO,
      API_MOONGO_IMAGE
    };
  }

  return {
    envName: 'DEVELOPMENT',
    API_CEP,
    API_MOONGO: API_MOONGO_DEV,
    API_MOONGO_IMAGE: API_MOONGO_IMAGE_DEV
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

// API MOONGO
export const moongoAPI = axios.create({
  baseURL: getEnvironment().API_MOONGO,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Device: Platform.OS
  }
});

moongoAPI.interceptors.request.use(async (instanceConfig) => {
  const newInstance = instanceConfig;
  try {
    const token = await loadString(authToken);

    if (token && newInstance.headers) {
      newInstance.headers.Authorization = `Bearer ${token}`;
    }
  } catch (error) {}

  return newInstance;
});

export default {
  cepAPI,
  getEnvironment
};
