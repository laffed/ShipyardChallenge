import {AsyncAction} from '../index';
import {UserObj} from '@types';
import {API} from '@api';

export const getUsersData: AsyncAction<void, boolean> = async ({state}) => {
  const path = 'api/users/';
  const {success, data} = await API.get(path);
  if (success) {
    const res = data as Array<UserObj>;
    state.user = res;
    return true;
  }
  return false;
}

export const getSingleUserData: AsyncAction<string, UserObj | false> = async ({state}, id) => {
  //try global state first before calling endpoint
  for (let i in state.user) {
    if (state.user[i].id === id) return state.user[i];
  }

  const path = `api/users/${id}`;
  const {success, data} = await API.get(path);
  if (success) {
    const res = data as UserObj;
    return res;
  }
  return false;
}


