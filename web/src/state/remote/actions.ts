import {Action} from '../index';

export const setPending: Action<boolean, void> = ({state}, bool) => {
  state.remote.pending = bool;
}
