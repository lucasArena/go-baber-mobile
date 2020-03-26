import { Alert } from 'react-native';
import { all, takeLatest, call, put } from 'redux-saga/effects';

import * as Actions from './actions';

import api from '~/services/api';

function* updateProfileRequest({ payload }) {
  try {
    const { name, email, ...rest } = payload.data;

    const profile = {
      name,
      email,
      ...(rest.oldPassword ? rest : {}),
    };

    const response = yield call(api.put, '/users', profile);

    Alert.alert('Successo!', 'Perfil atualizado com sucesso');
    yield put(Actions.updateProfileSuccess(response));
  } catch (err) {
    put(Actions.failure());
    Alert.alert('Erro na alteração', 'Erro ao envio do formulário');
  }
}

export default all([
  takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfileRequest),
]);
