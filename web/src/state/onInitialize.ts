import {OnInitialize} from './index';

export const onInitialize: OnInitialize = async ({state, actions}) => {
  await actions.user.getUsersData();
}