import React, { Component } from 'react';

const style = require('./style.css');

interface IWinnersTodayProps {
  count: number;
}

class WinnersToday extends Component<IWinnersTodayProps, {}> {
  public render() {
    const { count } = this.props;

    return (
      <div className={style.container}>
        <div className={style.inner}>
          <div className={style.left}>
            <div className={style.text}>Количество<br/>победителей<br/>сегодня</div>
            <div className={style.count}>{count}</div>
          </div>
          <div className={style.right}/>
        </div>
      </div>
    );
  }
}

export default WinnersToday;
