import {
  ICloseOptionsModalAction,
  IShowOptionsModalAction,
} from './../actions/hall_of_fame';

import {
  IConnectToSocketAction,
  IConnectToSocketClosedAction,
  IConnectToSocketFailAction,
  IConnectToSocketSuccessAction,
  ILastLoserReceivedAction,
  ILastWinnerReceivedAction,
  ILastWinnersCountTodayAction,
  ILastWinnersListAction,
} from './../actions/connection';

export type TAction = IShowOptionsModalAction |
  ICloseOptionsModalAction |
  IConnectToSocketAction |
  IConnectToSocketFailAction |
  IConnectToSocketSuccessAction |
  IConnectToSocketClosedAction |
  ILastLoserReceivedAction |
  ILastWinnerReceivedAction |
  ILastWinnersListAction |
  ILastWinnersCountTodayAction;
