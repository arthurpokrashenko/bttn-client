import React from 'react';

import { connect, Dispatch } from 'react-redux';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { closeCashRegisterNumberModal, setCashRegisterNumber } from '../../actions/hall_of_fame';
import { IStore } from '../../store/IStore';
import CashRegisterModal from './index';

export default connect(
  (state: IStore) => ({
    isOpen: state.hallOfFame.isCashRegisterNumberModalOpen,
    cashRegisterNumber: state.hallOfFame.cashRegisterNumber,
  }),
  (dispatch: Dispatch<IStore>) => ({
    onSetCashRegisterNumber: (value: number) => dispatch(setCashRegisterNumber(value)),
    onClose: (value: number) => dispatch(closeCashRegisterNumberModal()),

  }),
)(CashRegisterModal);
