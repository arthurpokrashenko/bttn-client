import {
  ICloseCashRegisterNumberModalAction,
  ISetCashRegisterNumberAction,
  IShowCashRegisterNumberModalAction,
} from './../actions/hall_of_fame';

import {
  IConnectToSocketAction,
  IConnectToSocketFailAction,
  IConnectToSocketSuccessAction,
  ILastLoserReceivedAction,
  ILastWinnerReceivedAction,
  ILastWinnersCountTodayAction,
  ILastWinnersListAction,
} from './../actions/connection';

export type TAction = IShowCashRegisterNumberModalAction |
  ISetCashRegisterNumberAction |
  ICloseCashRegisterNumberModalAction |
  IConnectToSocketAction |
  IConnectToSocketFailAction |
  IConnectToSocketSuccessAction |
  ILastLoserReceivedAction |
  ILastWinnerReceivedAction |
  ILastWinnersListAction |
  ILastWinnersCountTodayAction;
