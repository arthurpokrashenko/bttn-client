import { Dispatch } from 'redux';
import { IStore } from './../store/IStore';
import { IWindowExtended } from './connection';

export const SHOW_OPTIONS_MODAL = 'hallOfFame/SHOW_OPTIONS_MODAL';
export const CLOSE_OPTIONS_MODAL = 'hallOfFame/CLOSE_OPTIONS_MODAL';
export const SAVE_OPTIONS = 'hallOfFame/SAVE_OPTIONS';

export interface IShowOptionsModalAction {
  type: 'hallOfFame/SHOW_OPTIONS_MODAL';
}

export interface ICloseOptionsModalAction {
  type: 'hallOfFame/CLOSE_OPTIONS_MODAL';
}

export function showOptionsModal() {
  return (dispatch: Dispatch<IStore>) => {
    dispatch({ type: SHOW_OPTIONS_MODAL });
  };
}

export interface IOptions {
  winnerDivider?: number;
}

export function saveOptions(options: IOptions) {
  (window as IWindowExtended).socket.send(
    JSON.stringify({type: 'SAVE_OPTIONS', options}),
  );

  return (dispatch: Dispatch<IStore>) => {
    dispatch({ type: SAVE_OPTIONS, options });
  };
}

export function closeOptionsModal() {
  return (dispatch: Dispatch<IStore>) => {
    dispatch({ type: CLOSE_OPTIONS_MODAL });
  };
}
