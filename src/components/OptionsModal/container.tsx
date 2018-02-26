import React from 'react';

import { connect, Dispatch } from 'react-redux';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { closeOptionsModal, IOptions, saveOptions } from '../../actions/hall_of_fame';
import { IStore } from '../../store/IStore';
import OptionsModal from './index';

export default connect(
  (state: IStore) => ({
    isOpen: state.hallOfFame.isOptionsModalOpen,
  }),
  (dispatch: Dispatch<IStore>) => ({
    onClose: (value: number) => dispatch(closeOptionsModal()),
    onSaveOptions: (options: IOptions) => dispatch(saveOptions(options)),
  }),
)(OptionsModal);
