import { Dispatch } from 'redux';
import config from '../config';
import { IStore } from './../store/IStore';

export const CONNECT_TO_SOCKET = 'ws/CONNECT_TO_SOCKET';
export const CONNECT_TO_SOCKET_FAIL = 'ws/CONNECT_TO_SOCKET_FAIL';
export const CONNECT_TO_SOCKET_SUCCESS = 'ws/CONNECT_TO_SOCKET_SUCCESS';
export const MESSAGE_RECEIVED = 'ws/MESSAGE_RECEIVED';

interface IWindowExtended extends Window {
  socket: WebSocket;
}

export interface IConnectToSocketAction {
  type: 'ws/CONNECT_TO_SOCKET';
}

export interface IConnectToSocketFailAction {
  type: 'ws/CONNECT_TO_SOCKET_FAIL';
}

export interface IConnectToSocketSuccessAction {
  type: 'ws/CONNECT_TO_SOCKET_SUCCESS';
}

export interface ILastWinnerReceivedAction {
  type: 'server/LAST_WINNER';
  payload: {
    cashRegister: string;
    eventId: string;
  };
}

export interface ILastLoserReceivedAction {
  type: 'server/LAST_LOSER';
  payload: {
    cashRegister: string;
    eventId: string;
  };
}

export interface ILastWinnersListAction {
  type: 'server/LAST_WINNERS_LIST';
  payload: {
    winners: {
      cashRegister: string;
      eventId: string;
      createdAt: string;
    }[];
  };
}

export interface ILastWinnersCountTodayAction {
  type: 'server/WINNERS_COUNT_TODAY';
  payload: {
    count: number;
  };
}

export function connectToSocket() {
  return (dispatch: Dispatch<IStore>) => {
    dispatch({ type: CONNECT_TO_SOCKET });

    (window as IWindowExtended).socket = new WebSocket(config.wsConnectionLink);
    // (window as IWindowExtended).socket.binaryType = 'arraybuffer';
    (window as IWindowExtended).socket.onopen = () => {
      dispatch({ type: CONNECT_TO_SOCKET_SUCCESS });
    };
    (window as IWindowExtended).socket.onmessage = (event) => {
      if (event.data) {
        const parsedData = JSON.parse(event.data);

        dispatch({
          type: `server/${parsedData.type}`,
          payload: parsedData.data,
        });
      }
    };
    (window as IWindowExtended).socket.onerror = (error) => {
      console.log(error);
      dispatch({ type: CONNECT_TO_SOCKET_FAIL });
    };
  };
}
