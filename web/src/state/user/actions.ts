import {AsyncAction} from '../index';
import {UserObj} from '@types';
import {API} from '@api';

export const getUsersData: AsyncAction<void, boolean> = async ({state}) => {
  state.remote.pending = true;
  const path = 'api/users/';
  const {success, data} = await API.get(path);
  if (success) {
    const res = data as Array<UserObj>;
    state.user = res;
    state.remote.pending = false;
    return true;
  }
  state.remote.pending = false;
  return false;
}

export const getSingleUserData: AsyncAction<string, UserObj | false> = async ({state}, id) => {
  state.remote.pending = true;
  //try global state first before calling endpoint
  for (let i in state.user) {
    if (state.user[i].id === id) {
      state.remote.pending = false;
      return state.user[i];
    }
  }

  const path = `api/users/${id}`;
  const {success, data} = await API.get(path);
  if (success) {
    const res = data as UserObj;
    state.remote.pending = false;
    return res;
  }
  state.remote.pending = false;
  return false;
}


