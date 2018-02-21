import { Button, Icon, Position, Tooltip } from '@blueprintjs/core';
import React, { Component, CSSProperties } from 'react';
import { mergeStyles } from '../../utils/style';
const style = require('./style.css');

export interface IFooterProps {
  cashRegisterNumber: number;
  isConnected: boolean;
  onShowCashRegisterModal: () => void;
  onConnectToSocket: () => void;
}

export interface IHallOfFameState {}

class Footer extends Component<IFooterProps, {}> {
  public render() {
    const { isConnected, onShowCashRegisterModal } = this.props;

    return (
      <div className={style.container}>
        <Tooltip
          content={this.renderConnectionTooltipContent()}
          useSmartPositioning={true}
          position={Position.TOP_LEFT}
        >
          <Icon
            iconName="offline"
            {...mergeStyles(style.connection, isConnected ? style.connectionSuccess : style.connectionFail)}
          />
        </Tooltip>
        <Icon
          iconName="cog"
          onClick={() => onShowCashRegisterModal()}
        />
      </div>
    );
  }

  private renderConnectionTooltipContent() {
    const { isConnected } = this.props;

    if (!isConnected) {
      return 'Не удалось подключиться';
    }

    return '';
  }
}

export default Footer;
