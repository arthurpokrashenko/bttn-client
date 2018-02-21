import { Button, Dialog, Intent, NumericInput } from '@blueprintjs/core';
import React, { Component, CSSProperties } from 'react';
const style = require('./style.css');

export interface IOptionsModalProps {
  isOpen: boolean;
  onSetCashRegisterNumber: (value?: number) => void;
  onClose: () => void;
}

export interface IOptionsModalState {
  value?: number;
}

class OptionsModal extends Component<IOptionsModalProps, IOptionsModalState> {
  public constructor(props: IOptionsModalProps) {
    super(props);

    this.state = {
      value: undefined,
    };
  }

  public render() {
    const { isOpen } = this.props;

    return (
      <Dialog
        iconName="shop"
        isOpen={isOpen}
        title="Укажите номер кассы"
        onClose={() => this.props.onClose()}
        className={style.dialog}
      >
        <div className="pt-dialog-body">
          <NumericInput
            min={0}
            large={true}
            value={this.state.value}
            className="pt-fill"
            onValueChange={(value) => this.setState({ value })}
          />
        </div>
        <div className="pt-dialog-footer">
            <div className="pt-dialog-footer-actions">
                <Button text="Отменить" />
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
    const { value } = this.state;
    const { onSetCashRegisterNumber, onClose } = this.props;

    onSetCashRegisterNumber(value);
    onClose();
  }
}

export default OptionsModal;
