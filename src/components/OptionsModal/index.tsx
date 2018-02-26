import { Button, Dialog, Intent, Label, NumericInput } from '@blueprintjs/core';
import React, { Component, CSSProperties } from 'react';
import { IOptions } from '../../actions/hall_of_fame';
const style = require('./style.css');

export interface IOptionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSaveOptions: (options: IOptions) => void;
}

export interface IOptionsModalState {
  winnerDivider?: number;
}

class OptionsModal extends Component<IOptionsModalProps, IOptionsModalState> {
  public constructor(props: IOptionsModalProps) {
    super(props);

    this.state = {
      winnerDivider: undefined,
    };
  }

  public render() {
    const { isOpen } = this.props;

    return (
      <Dialog
        iconName="shop"
        isOpen={isOpen}
        title="Настройки"
        onClose={() => this.props.onClose()}
        className={style.dialog}
      >
        <div className="pt-dialog-body">
          <Label text="Порядок победителей">
            <NumericInput
              min={0}
              value={this.state.winnerDivider}
              onValueChange={(value) => this.setState({ winnerDivider: value })}
            />
          </Label>
        </div>
        <div className="pt-dialog-footer">
            <div className="pt-dialog-footer-actions">
                <Button
                  text="Отменить"
                  onClick={() => this.props.onClose()}
                />
                <Button
                    intent={Intent.PRIMARY}
                    onClick={() => this.handleSaveClicked()}
                    text="Сохранить"
                />
            </div>
        </div>
      </Dialog>
    );
  }

  private handleSaveClicked() {
    const { winnerDivider } = this.state;
    const { onClose, onSaveOptions } = this.props;
    onSaveOptions(this.state);
    onClose();
  }
}

export default OptionsModal;
