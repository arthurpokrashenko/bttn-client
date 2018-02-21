import React, { Component, CSSProperties } from 'react';
import { mergeStyles } from '../../utils/style';
const style = require('./style.css');

export interface IPreviousWinnersProps {
  winners: {
    cashRegister: number;
    eventId: string;
  }[];
}

class PreviousWinners extends Component<IPreviousWinnersProps, {}> {
  public render() {
    const { winners } = this.props;

    return (
      <div className={style.container}>
        {winners.map(item => (
          <div key={item.eventId}>Касса №{item.cashRegister} eventId = {item.eventId}</div>
        ))}
      </div>
    );
  }

}

export default PreviousWinners;
