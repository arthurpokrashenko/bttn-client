import { Button, Icon, Position, Tooltip } from '@blueprintjs/core';
import React, { Component, CSSProperties } from 'react';
import { mergeStyles } from '../../utils/style';
import OptionsModalContainer from '../OptionsModal/container';
const style = require('./style.css');

export interface IFooterProps {
  isConnected: boolean;
  onShowOptionsModal: () => void;
  onConnectToSocket: () => void;
}

export interface IHallOfFameState {}

class Footer extends Component<IFooterProps, {}> {
  public render() {
    const { isConnected, onShowOptionsModal } = this.props;

    return (
      <div className={style.container}>
        <Tooltip
          content={this.renderConnectionTooltipContent()}
          useSmartPositioning={true}
          position={Position.TOP_LEFT}
        >
          <Icon
            iconName="offline"
            iconSize={20}
            {...mergeStyles(style.connection, isConnected ? style.connectionSuccess : style.connectionFail)}
          />
        </Tooltip>
        <Icon
          iconName="cog"
          iconSize={20}
          onClick={() => onShowOptionsModal()}
        />
        <OptionsModalContainer/>
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
