import React, { Component } from 'react';

const style = require('./style.css');

interface IWinnerProps {
  cashRegister: number;
}

class Winner extends Component<IWinnerProps, {}> {
  public render() {
    const { cashRegister } = this.props;

    return (
      <div className={style.container}>
        <div className={style.inner}>
          <div className={style.left}>
            <div className={style.text}>Счастливый<br/>покупатель<br/>на кассе</div>
            <div className={style.cashRegister}>№{cashRegister}</div>
          </div>
          <div className={style.right}>
            right
          </div>
        </div>
      </div>
    );
  }
}

export default Winner;
