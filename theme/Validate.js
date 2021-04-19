import AsyncStorage from '@react-native-async-storage/async-storage';
import {size, startsWith, toLower, without} from 'lodash';
import moment from 'moment';
import {Config} from '../config';
import Storage from './Storage';

export const validateEmail = (email) => {
  const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email && email !== '') {
    return pattern.test(toLower(`${email}`));
  }
  return false;
};

export const validatePhone = (phone) => {
  const pattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  if (phone && phone !== '' && size(phone) === 10) {
    return pattern.test(phone);
  }
  return false;
};
export const validatePassword = (value) => {
  const re = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,32}$/;
  return re.test(String(value));
};

export const genUrl = (path) => {
  let url = path;
  if (startsWith(path, 'http')) {
    url = path;
  } else {
    if (!startsWith(path, '/')) {
      url = Config.API_URL + '/' + path;
    } else {
      url = Config.API_URL + path;
    }
  }
  return url;
};
export const checkUserPaidExpired = (endPaid) => {
  let now = moment();
  let expiredDate = moment(endPaid);

  if (expiredDate.isAfter(now)) {
    return true;
  } else {
    return false;
  }
};

export const clearDataAsynStorage = async () => {
  // Tìm tất cả các key đã lưu và xoá nhưng loại trừ key LIST_SERVER_URL vì nó lưu những server đã dùng - để gợi ý
  await AsyncStorage.getAllKeys().then(async (listKey) => {
    const newKeys = without(listKey, Storage.FACE_ID_ENABLE);
    console.log('listKeyStorage-newKeys: ', newKeys);
    await AsyncStorage.multiRemove(newKeys);
  });
};

export default {
  validateEmail,
  validatePhone,
  validatePassword,
};
