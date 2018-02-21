import { TAction } from '../types/actions';

const initialState = {
  isConnected: false,
};

export default (state = initialState, action: TAction) => {
  switch (action.type) {
    case 'ws/CONNECT_TO_SOCKET_SUCCESS':
      return {
        ...state,
        isConnected: true,
      };
    case 'ws/CONNECT_TO_SOCKET_FAIL':
      return {
        ...state,
        isConnected: false,
      };
    default:
      return state;
  }
};
