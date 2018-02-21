import { Dispatch } from 'redux';
import { IStore } from './../store/IStore';

export const SHOW_CASH_REGISTER_NUMBER_MODAL = 'hallOfFame/SHOW_CASH_REGISTER_NUMBER_MODAL';
export const CLOSE_CASH_REGISTER_NUMBER_MODAL = 'hallOfFame/CLOSE_CASH_REGISTER_NUMBER_MODAL';
export const SET_CASH_REGISTER_NUMBER = 'hallOfFame/SET_CASH_REGISTER_NUMBER';

export interface IShowCashRegisterNumberModalAction {
  type: 'hallOfFame/SHOW_CASH_REGISTER_NUMBER_MODAL';
}

export interface ICloseCashRegisterNumberModalAction {
  type: 'hallOfFame/CLOSE_CASH_REGISTER_NUMBER_MODAL';
}

export interface ISetCashRegisterNumberAction {
  type: 'hallOfFame/SET_CASH_REGISTER_NUMBER';
  value: number;
}

export function showCashRegisterNumberModal() {
  return (dispatch: Dispatch<IStore>) => {
    dispatch({ type: SHOW_CASH_REGISTER_NUMBER_MODAL });
  };
}

export function closeCashRegisterNumberModal() {
  return (dispatch: Dispatch<IStore>) => {
    dispatch({ type: CLOSE_CASH_REGISTER_NUMBER_MODAL });
  };
}

export function setCashRegisterNumber(value?: number) {
  return (dispatch: Dispatch<IStore>) => {
    localStorage.setItem('cashRegisterNumber', String(value || ''));

    dispatch({
      type: SET_CASH_REGISTER_NUMBER,
      value,
    });
  };
}
