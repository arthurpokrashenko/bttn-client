import React, { Component } from 'react';
import OBILogo from '../OBILogo';
const style = require('./style.css');

class Neutral extends Component {
  public render() {
    return (
      <div className={style.container}>
        <div className={style.inner}>
          <div className={style.logo}>
            <img src={require('./logo.png')} style={{width: '100%'}}/>
          </div>
          <div className={style.info}>Каждая 10 покупка бесплатно!</div>
        </div>
      </div>
    );
  }
}

export default Neutral;
