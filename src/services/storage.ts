import AsyncStorage from '@react-native-async-storage/async-storage';

export const authToken = '@authToken';

export async function loadString(key: string) {
  try {
    return await AsyncStorage.getItem(key);
  } catch {
    return null;
  }
}

export async function saveString(key: string, value: string) {
  try {
    if (value) {
      await AsyncStorage.setItem(key, value);
      return true;
    }
    return false;
  } catch {
    return false;
  }
}

export async function load(key: string) {
  try {
    const item = await AsyncStorage.getItem(key);
    return JSON.parse(item ?? '');
  } catch {
    return null;
  }
}

export async function save(key: string, value: string) {
  try {
    if (typeof value === 'object') {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } else {
      await AsyncStorage.setItem(key, value);
    }
    return true;
  } catch {
    return false;
  }
}

export async function remove(key: string) {
  await AsyncStorage.removeItem(key);
}

export async function clear() {
  await AsyncStorage.clear();
}
