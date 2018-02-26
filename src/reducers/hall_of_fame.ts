import { TAction } from '../types/actions';

const initialState = {
  isOptionsModalOpen: false,
  lastWinner: {} as {
    cashRegister: number;
    eventId: string;
  }[],
  winnersCountToday: null,
};

export default (state = initialState, action: TAction) => {
  switch (action.type) {
    case 'hallOfFame/SHOW_OPTIONS_MODAL':
      return {
        ...state,
        isOptionsModalOpen: true,
      };
    case 'hallOfFame/CLOSE_OPTIONS_MODAL':
      return {
        ...state,
        isOptionsModalOpen: false,
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
