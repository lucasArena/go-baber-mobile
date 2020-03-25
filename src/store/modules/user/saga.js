import { Alert } from 'react-native';
import { all, takeLatest, call, put } from 'redux-saga/effects';

import * as Actions from './actions';

import api from '~/services/api';

function* updateProfileRequest({ payload }) {
  try {
    const { name, email, avatar_id, ...rest } = payload.data;

    const profile = {
      name,
      email,
      avatar_id,
      ...(rest.oldPassword ? rest : {}),
    };

    const response = yield call(api.put, '/user', profile);

    Alert.alert('Successo!', 'Perfil atualizado com sucesso');
    put(Actions.updateProfileSuccess(response.data));
  } catch (err) {
    put(Actions.failure());
    Alert.alert('Erro na alteração', 'Erro ao envio do formulário');
  }
}

export default all([
  takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfileRequest),
]);
