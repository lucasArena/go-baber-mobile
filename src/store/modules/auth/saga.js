import { Alert } from 'react-native';
import { all, takeLatest, call, put } from 'redux-saga/effects';

import * as Actions from './actions';

import api from '~/services/api';

function* signInRequest({ payload }) {
  try {
    const { email, password } = payload;
    const { user, token } = yield call(api.post, '/sessions', {
      email,
      password,
    });

    if (user.provider) {
      Alert.alert(
        'Erro no login',
        'O usuário não pode ser um prestador de serviço'
      );
      yield put(Actions.signFailure());
    }

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(Actions.signInSuccess(user, token));
  } catch (err) {
    Alert.alert(
      'Falha na autentificação',
      'Houve um erro no login! Verifique seus dados'
    );
    yield put(Actions.signFailure());
  }
}

function* signUpRequest({ payload }) {
  try {
    const { name, email, password } = payload;
    const response = yield call(api.post, '/users', {
      name,
      email,
      password,
    });

    put(Actions.signUpRequest(response.data));
  } catch (err) {
    Alert.alert('Falha no cadastro', 'Verifique seus dados');
    yield put(Actions.logFailure);
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;
  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signInRequest),
  takeLatest('@auth/SIGN_UP_REQUEST', signUpRequest),
]);
