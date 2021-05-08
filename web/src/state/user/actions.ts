import {AsyncAction} from '../index';
import {UserObj} from './state';

export const getUsersData: AsyncAction<void, void> = async ({state}) => {
  return
}

export const getSingleUserData: AsyncAction<string, UserObj | false> = async ({state}, id) => {

}

export const getCurrentUser: AsyncAction<string, UserObj | false> = async ({state, actions}, id) => {
  for (let user of state.user) {
    if (id === user.id) {
      return user;
    }
  }
  const singleUserFetch = await actions.user.getSingleUserData(id);
  return singleUserFetch !== false ? singleUserFetch : false;
}

