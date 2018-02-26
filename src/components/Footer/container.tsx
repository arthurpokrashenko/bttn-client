import React from 'react';

import { connect, Dispatch } from 'react-redux';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connectToSocket } from '../../actions/connection';
import { showOptionsModal } from '../../actions/hall_of_fame';
import { IStore } from '../../store/IStore';
import Footer from './index';

export default connect(
  (state: IStore) => ({
    isConnected: state.connection.isConnected,
  }),
  (dispatch: Dispatch<IStore>) => ({
    onShowOptionsModal: (value: number) => dispatch(showOptionsModal()),
    onConnectToSocket: () => dispatch(connectToSocket()),
  }),
)(Footer);
