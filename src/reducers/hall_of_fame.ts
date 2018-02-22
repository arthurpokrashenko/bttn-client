import { TAction } from '../types/actions';

const initialState = {
  cashRegisterNumber: localStorage.getItem('cashRegisterNumber') || null,
  isCashRegisterNumberModalOpen: false,
  lastWinner: {} as {
    cashRegister: number;
    eventId: string;
  }[],
  winnersCountToday: null,
};

export default (state = initialState, action: TAction) => {
  switch (action.type) {
    case 'hallOfFame/SHOW_CASH_REGISTER_NUMBER_MODAL':
      return {
        ...state,
        isCashRegisterNumberModalOpen: true,
      };
    case 'hallOfFame/CLOSE_CASH_REGISTER_NUMBER_MODAL':
      return {
        ...state,
        isCashRegisterNumberModalOpen: false,
      };
    case 'hallOfFame/SET_CASH_REGISTER_NUMBER':
      return {
        ...state,
        cashRegisterNumber: action.value,
      };
    case 'server/LAST_WINNER':
      return {
        ...state,
        lastWinner: {
          cashRegister: Number(action.payload.cashRegister),
          eventId: action.payload.eventId,
        },
      };
    case 'server/LAST_WINNERS_LIST':
      return {
        ...state,
        winners: action.payload.winners.reverse(),
      };
    case 'server/WINNERS_COUNT_TODAY':
      return {
        ...state,
        winnersCountToday: action.payload.count,
      };
    default:
      return state;
  }
};
