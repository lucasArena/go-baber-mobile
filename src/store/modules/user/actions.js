export function updateProfileRequest(data) {
  return {
    type: '@user/UPDATE_PROFILE_REQUEST',
    payload: { userInfo: data },
  };
}

export function updateProfileSuccess({ user }) {
  return {
    type: '@user/UPDATE_PROFILE_SUCCESS',
    payload: { user },
  };
}

export function failure() {
  return {
    type: '@user/FAILURE',
  };
}
