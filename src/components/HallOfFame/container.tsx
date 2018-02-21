import React from 'react';

import { connect, Dispatch } from 'react-redux';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connectToSocket } from '../../actions/connection';
import { showCashRegisterNumberModal } from '../../actions/hall_of_fame';
import { IStore } from '../../store/IStore';
import HallOfFame from './index';

export default connect(
  (state: IStore) => ({
    isConnected: state.connection.isConnected,
    lastWinner: state.hallOfFame.lastWinner,
  }),
  (dispatch: Dispatch<IStore>) => ({
    onShowCashRegisterModal: (value: number) => dispatch(showCashRegisterNumberModal()),
    onConnectToSocket: () => dispatch(connectToSocket()),
  }),
)(HallOfFame);
